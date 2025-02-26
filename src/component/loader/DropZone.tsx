/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Zip from 'jszip';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';

import { File } from '../../data/types/common/File';
import { useChartData } from '../context/ChartContext';
import { useDispatch } from '../context/DispatchContext';
import { LoaderProvider } from '../context/LoaderContext';
import { useAlert } from '../elements/popup/Alert';
import {
  LOAD_MOL_FILE,
  LOAD_JSON_FILE,
  LOAD_JCAMP_FILE,
  SET_LOADING_FLAG,
  LOAD_ZIP_FILE,
  LOAD_JDF_FILE,
  LOAD_NMREDATA_FILE,
} from '../reducer/types/Types';
import {
  FILES_TYPES,
  FILES_SIGNATURES,
  getFileExtension,
  getFileSignature,
  loadFiles,
  loadFilesFromZip,
} from '../utility/FileUtility';

const style = css`
  height: 100%;
  background-color: #b5b5b599;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 99999;

  p {
    color: white;
    background-color: rgb(104, 104, 104);
    padding: 1.5%;
    border-radius: 30px;
    margin: 0px;
  }

  svg {
    stroke-width: 0;
    font-size: 3rem !important;
    fill: white;
  }
`;

const containerStyle = css`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;

function DropZone(props) {
  const { width, height } = useChartData();
  const dispatch = useDispatch();
  const alert = useAlert();

  const loadSubFilesFromZip = useCallback(
    async (extractedfiles, uniqueFileExtensions) => {
      for (let extension of uniqueFileExtensions) {
        const selectedFilesByExtensions = extractedfiles.filter(
          (file) => getFileExtension(file.name) === extension,
        );

        switch (extension) {
          case FILES_TYPES.MOL: {
            const files = await loadFilesFromZip(selectedFilesByExtensions);
            dispatch({ type: LOAD_MOL_FILE, files });
            break;
          }
          case FILES_TYPES.NMRIUM:
          case FILES_TYPES.JSON: {
            const files = await loadFilesFromZip(selectedFilesByExtensions, {
              asBuffer: true,
            });
            if (selectedFilesByExtensions.length === 1) {
              const decoder = new TextDecoder('utf8');
              files[0].binary = decoder.decode(files[0].binary);

              dispatch({ type: LOAD_JSON_FILE, files });
            } else {
              throw new Error('You can add only one json file');
            }

            break;
          }
          case FILES_TYPES.JDX:
          case FILES_TYPES.DX: {
            const files = await loadFilesFromZip(selectedFilesByExtensions, {
              asBuffer: true,
            });
            dispatch({ type: LOAD_JCAMP_FILE, files });

            break;
          }
          case FILES_TYPES.JDF: {
            const files = await loadFilesFromZip(selectedFilesByExtensions, {
              asBuffer: true,
            });
            dispatch({ type: LOAD_JDF_FILE, files });
            break;
          }
          default:
            break;
        }
      }
    },
    [dispatch],
  );

  const loadFilesHandler = useCallback(
    async (files) => {
      const uniqueFileExtensions = [
        ...new Set(files.map((file) => getFileExtension(file.name))),
      ];

      for (let extension of uniqueFileExtensions) {
        const selectedFilesByExtensions = files.filter(
          (file) => getFileExtension(file.name) === extension,
        );
        try {
          switch (extension) {
            case FILES_TYPES.MOL: {
              const files = await loadFiles(selectedFilesByExtensions);
              dispatch({ type: LOAD_MOL_FILE, files });

              break;
            }
            case FILES_TYPES.NMRIUM:
            case FILES_TYPES.JSON:
              if (selectedFilesByExtensions.length === 1) {
                const files = await loadFiles<{ binary: any }>(
                  selectedFilesByExtensions,
                  {
                    asBuffer: true,
                  },
                );
                // InputFileFormat
                const fileSignature = getFileSignature(files[0].binary);
                if (fileSignature === FILES_SIGNATURES.ZIP) {
                  const unzipResult = await Zip.loadAsync(files[0].binary);
                  await loadSubFilesFromZip(Object.values(unzipResult.files), [
                    FILES_TYPES.NMRIUM,
                  ]);
                } else {
                  const decoder = new TextDecoder('utf8');
                  files[0].binary = decoder.decode(files[0].binary);
                  dispatch({ type: LOAD_JSON_FILE, files });
                }
              } else {
                throw new Error('You can add only one json file');
              }

              break;
            case FILES_TYPES.JDX:
            case FILES_TYPES.DX: {
              const files = await loadFiles(selectedFilesByExtensions, {
                asBuffer: true,
              });
              dispatch({ type: LOAD_JCAMP_FILE, files });

              break;
            }
            case FILES_TYPES.JDF: {
              const files = await loadFiles(selectedFilesByExtensions, {
                asBuffer: true,
              });
              dispatch({ type: LOAD_JDF_FILE, files });

              break;
            }
            case FILES_TYPES.ZIP: {
              const files: File[] = await loadFiles(selectedFilesByExtensions, {
                asBuffer: true,
              });
              for (const zipFile of files) {
                const unzipResult = await Zip.loadAsync(zipFile.binary);

                const uniqueFileExtensions = [
                  ...new Set(
                    Object.values(unzipResult.files).map((file) =>
                      getFileExtension(file.name),
                    ),
                  ),
                ];
                const isNotZip = uniqueFileExtensions.some(
                  (ex) =>
                    FILES_TYPES[ex.toUpperCase()] && ex !== FILES_TYPES.ZIP,
                );
                if (isNotZip) {
                  const hasBruker = Object.keys(unzipResult.files).some(
                    (path) => {
                      return ['2rr', 'fid', '1r'].some((brukerFile) =>
                        path.endsWith(brukerFile),
                      );
                    },
                  );
                  if (hasBruker) dispatch({ type: LOAD_ZIP_FILE, files });
                  await loadSubFilesFromZip(
                    Object.values(unzipResult.files),
                    uniqueFileExtensions,
                  );
                } else {
                  dispatch({ type: LOAD_ZIP_FILE, files });
                }
              }

              break;
            }
            case FILES_TYPES.NMREDATA:
              void loadFiles(selectedFilesByExtensions, {
                asBuffer: true,
              }).then(async (files) => {
                for (const zipFile of files) {
                  dispatch({
                    type: LOAD_NMREDATA_FILE,
                    file: zipFile,
                  });
                }
              });
              break;
            default:
              throw new Error(
                'The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.',
              );
          }
        } catch (e: any) {
          dispatch({ type: SET_LOADING_FLAG, isLoading: false });
          alert.error(e.message);
        }
      }
    },
    [alert, dispatch, loadSubFilesFromZip],
  );

  const onDrop = useCallback(
    (droppedFiles) => {
      dispatch({ type: SET_LOADING_FLAG, isLoading: true });
      void loadFilesHandler(droppedFiles);
    },
    [dispatch, loadFilesHandler],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: openImportDialog,
  } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const open = useCallback(() => {
    openImportDialog();
  }, [openImportDialog]);

  return (
    <LoaderProvider value={open}>
      <div {...getRootProps()} role="none" css={containerStyle}>
        <input data-test-id="dropzone-input" {...getInputProps()} />
        {isDragActive && (
          <div
            css={style}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              marginTop: '30px',
              marginLeft: '30px',
            }}
          >
            <FaUpload />
            <p>Drop your files here</p>
          </div>
        )}
        {props.children}
      </div>
    </LoaderProvider>
  );
}

export default DropZone;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useMemo, useCallback, useRef, ReactNode } from 'react';
import { FaLink } from 'react-icons/fa';

import checkModifierKeyActivated from '../../../data/utilities/checkModifierKeyActivated';
import ContextMenu from '../../elements/ContextMenu';
import useTableSortBy from '../../hooks/useTableSortBy';

import ZonesTableRow from './ZonesTableRow';

const tableStyle = css`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  font-size: 12px;
  .react-contextmenu-wrapper {
    display: contents;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  thead tr:nth-of-type(1) th {
    top: 0;
  }
  thead tr:nth-of-type(2) th {
    top: 21px;
  }
  th {
    position: sticky;
    background-color: white;
    z-index: 2;
  }
  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
      padding: 0 5px;
    }
  }
`;

interface ZonesTableProps {
  tableData: Array<{
    signals: Array<any>;
    tableMetaInfo: any;
    rowIndex: number;
    signalIndex: number;
    id: number;
  }>;
  onUnlink: (
    zoneData: any,
    isOnZoneLevel: any,
    signalIndex: any,
    axis: any,
  ) => void;
  context?: any;
  nuclei: string[];
  experiment: string;
}

function ZonesTable({
  tableData,
  onUnlink,
  context,
  nuclei,
  experiment,
}: ZonesTableProps) {
  const contextRef = useRef<any>(null);

  const contextMenuHandler = useCallback(
    (e, rowData) => {
      if (!checkModifierKeyActivated(e)) {
        e.preventDefault();
        contextRef.current.handleContextMenu(e, rowData);
      }
    },
    [contextRef],
  );

  const data = useMemo(() => {
    const _data: Array<any> = [];
    tableData.forEach((zone, i) => {
      if (zone.signals.length === 1) {
        _data.push({
          ...zone,
          tableMetaInfo: {
            ...zone.tableMetaInfo,
            signal: zone.signals[0],
            rowIndex: i,
            signalIndex: 0,
            id: zone.signals[0].id,
            experiment,
            nuclei,
          },
        });
      } else if (zone.signals.length > 1) {
        zone.signals.forEach((signal, j) => {
          let hide = false;
          let rowSpan: number | null = null;
          if (j < zone.signals.length - 1) {
            if (j === 0) {
              rowSpan = zone.signals.length;
            } else {
              hide = true;
            }
          } else {
            hide = true;
          }
          _data.push({
            ...zone,
            tableMetaInfo: {
              ...zone.tableMetaInfo,
              signal,
              rowSpan,
              hide,
              rowIndex: i,
              signalIndex: j,
              id: signal.id,
              experiment,
            },
          });
        });
      }
    });

    return _data;
  }, [experiment, nuclei, tableData]);

  const { items: sortedData, isSortedDesc, onSort } = useTableSortBy(data);

  const rows = useMemo(
    () =>
      sortedData.map((rowData, index) => (
        <ZonesTableRow
          rowIndex={index}
          key={`${rowData.tableMetaInfo.id}`}
          rowData={rowData}
          onUnlink={onUnlink}
          onContextMenu={(e, rowData) => contextMenuHandler(e, rowData)}
        />
      )),
    [contextMenuHandler, sortedData, onUnlink],
  );

  return (
    <div>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th rowSpan={2}>#</th>
            <th colSpan={2}>δ (ppm)</th>
            <th colSpan={2}>
              <FaLink />
            </th>
            <th colSpan={2}>Σ</th>
            <th rowSpan={2}>Kind</th>
            <th rowSpan={2}>{''}</th>
          </tr>
          <tr>
            <th id="tableMetaInfo.signal.x.delta" {...onSort}>
              <SurroundedText text="F2">
                {nuclei[0]}{' '}
                {isSortedDesc('tableMetaInfo.signal.x.delta').content}
              </SurroundedText>
            </th>
            <th id="tableMetaInfo.signal.y.delta" {...onSort}>
              <SurroundedText text="F1">
                {nuclei[1]}{' '}
                {isSortedDesc('tableMetaInfo.signal.y.delta').content}
              </SurroundedText>
            </th>
            <th>
              <SurroundedText text="F2">{nuclei[0]}</SurroundedText>
            </th>
            <th>
              <SurroundedText text="F1">{nuclei[1]}</SurroundedText>
            </th>
            <th>
              <SurroundedText text="F2">{nuclei[0]}</SurroundedText>
            </th>
            <th>
              <SurroundedText text="F1">{nuclei[1]}</SurroundedText>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <ContextMenu ref={contextRef} context={context} />
    </div>
  );
}

function SurroundedText(props: { text: 'F1' | 'F2'; children: ReactNode }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          fontSize: 8,
          color: '#3539E6',
        }}
      >
        {props.text}
      </div>
      <div style={{ marginLeft: 5 }}>{props.children}</div>
    </>
  );
}

export default ZonesTable;

import { NMRZone } from 'nmr-processing';

import { DatumKind } from '../../../constants/SignalsKinds';
import { Zone } from '../../../types/data2d';
import generateID from '../../../utilities/generateID';
import { getShift } from '../shift/getShift';

import { DetectionZonesOptions, getDetectionZones } from './getDetectionZones';

export function detectZones(datum, options: DetectionZonesOptions): Zone[] {
  const zones = getDetectionZones(datum, options);
  const { xShift, yShift } = getShift(datum);

  const { minX, maxX, minY, maxY } = datum.data;
  const xError = Math.abs(maxX - minX) / 10000;
  const yError = Math.abs(maxY - minY) / 10000;

  const formattedZones = zones.reduce((acc: Zone[], zone: NMRZone) => {
    const newXRange = zone.x || { from: 0, to: 0 };
    const newYRange = zone.y || { from: 0, to: 0 };

    // check if the zone is already exists
    for (const { x, y } of datum.zones.values) {
      if (
        Math.abs(newXRange.from - x.from) < xError &&
        Math.abs(newXRange.to - x.to) < xError &&
        Math.abs(newYRange.from - y.from) < yError &&
        Math.abs(newYRange.to - y.to) < yError
      ) {
        return acc;
      }
    }

    const signals = zone.signals.map((signal) => {
      return {
        id: generateID(),
        peaks: signal.peaks,
        x: {
          originDelta: signal.x.delta - xShift,
          ...signal.x,
        },
        y: {
          originDelta: signal.y.delta - yShift,
          ...signal.y,
        },
        kind: 'signal',
      };
    });

    acc.push({
      id: generateID(),
      x: { from: newXRange.from, to: newXRange.to },
      y: { from: newYRange.from, to: newYRange.to },
      signals,
      kind: DatumKind.signal,
    });

    return acc;
  }, []);
  return formattedZones;
}

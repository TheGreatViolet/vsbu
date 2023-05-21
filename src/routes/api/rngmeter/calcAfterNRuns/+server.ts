export async function POST({ request }) {
  const { runs, maxRuns, startPercent, magicFind } = await request.json();

  const finalPercent = _getPercent(runs, maxRuns, startPercent, magicFind);

  return new Response(JSON.stringify({ percent: finalPercent }), {
    headers: {
      'content-type': 'application/json',
    },
  });
}

export function _calcRNGMeterPercent(runs: number, maxRuns: number, startPercent: number, magicFind: number) {
  if (runs > maxRuns) throw new RangeError('runs cannot be greater than maxRuns');

  if (runs === maxRuns) return 1;

  const meterAdjusted = startPercent * (1 + ((600 * (runs / maxRuns)) / 100));

  if (magicFind === 0) return meterAdjusted;

  return meterAdjusted * (1 + (magicFind / 100));
}

export function _getPercent(runs: number, maxRuns: number, startPercent: number, magicFind: number) {
  /*
  Math Breakdown:

  - Formula for calculating RNG meter rate is:
    FinalDropRate = BaseDropRate * (1 + ((2 * Progression) / 100))

  - Progression is a decimal, calculated as runs / maxRuns so:
    FinalDropRate = BaseDropRate * (1 + ((2 * (runs / maxRuns)) / 100))

  - Chance of getting an outcome after N runs is calculated as:
    1 - (1 - Probability) ^ N

  - To get one probability to use in the formula, we can average all the probabilities from 0 runs to N runs
  */

  if (runs === 0) return startPercent;

  if (runs === maxRuns) return 1;

  let avgPercent;

  for (let i = 0; i < runs; i++) {
    const oddsAtN = _calcRNGMeterPercent(i, maxRuns, startPercent, magicFind);

    avgPercent = avgPercent ? avgPercent + oddsAtN : oddsAtN;
  }

  if (!avgPercent) throw new Error('avgPercent is undefined');

  avgPercent /= runs;

  const finalPercent = 1 - Math.pow(1 - avgPercent, runs);

  /*
  Because of how floating point math works, if the number of runs is small enough
  the finalPercent can end up smaller than the starting percent. So if that happens,
  we just return the starting percent.
  */

  if (finalPercent < startPercent) return startPercent;

  return finalPercent;
}
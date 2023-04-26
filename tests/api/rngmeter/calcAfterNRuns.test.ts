import { _getPercent, _calcRNGMeterPercent } from "../../../src/routes/api/rngmeter/calcAfterNRuns/+server";
import { describe, it, expect } from 'vitest';
import { randomInt } from "crypto";

describe('_calcRNGMeterPercent', () => {
  it("Should return base % when runs is 0", () => {
    expect(_calcRNGMeterPercent(0, 1100, 0.1)).toBe(0.1);
  });

  it("Should return 1 when runs is maxRuns", () => {
    expect(_calcRNGMeterPercent(1100, 1100, 0.1)).toBe(1);
  });

  it("Should give a correct answer", () => {
    expect(_calcRNGMeterPercent(550, 1100, 0.1)).toBeCloseTo(0.4);
  });

  it("Can handle random numbers", () => {
    let time;

    for (let i = 0; i < 100; i++) {
      const startTime = Date.now();

      const maxRuns = randomInt(1, 1100);
      const runs = randomInt(0, maxRuns);
      const startPercent = Math.random() / 100;

      expect(() => _calcRNGMeterPercent(runs, maxRuns, startPercent)).not.toThrow();

      const result = _calcRNGMeterPercent(runs, maxRuns, startPercent);

      expect(result).toBeLessThanOrEqual(1);
      expect(result).toBeGreaterThanOrEqual(startPercent);

      time = time ? Date.now() - startTime + time : Date.now() - startTime;
    }

    console.log(`Took ${time}ms to run 100 tests`);
  });

  it("Should throw an error when runs is greater than maxRuns", () => {
    expect(() => _calcRNGMeterPercent(1101, 1100, 0.1)).toThrow();
  });
});

describe('_getPercent', () => {
  it("Should return base % when runs is 0", () => {
    expect(_getPercent(0, 1100, 0.1)).toBe(0.1);
  });

  it("Should return 1 when runs is maxRuns", () => {
    expect(_getPercent(1100, 1100, 0.1)).toBe(1);
  });

  it("Should be able to handle random values", () => {
    let time;

    for (let i = 0; i < 100; i++) {
      const maxRuns = randomInt(1, 1100);
      const runs = randomInt(0, maxRuns);
      const startPercent = Math.random() / 100;

      const startTime = Date.now();

      expect(() => _getPercent(runs, maxRuns, startPercent)).not.toThrow();

      const result = _getPercent(runs, maxRuns, startPercent);

      time = time ? Date.now() - startTime + time : Date.now() - startTime;

      expect(result).toBeLessThanOrEqual(1);
      expect(result).toBeGreaterThanOrEqual(startPercent);
    }

    console.log(`Took ${time}ms to run 100 tests`);
  });
});
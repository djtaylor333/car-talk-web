import { describe, it, expect } from 'vitest';
import { VEHICLE_MAKES, VEHICLE_MAKES_MODELS, getModelsForMake } from '../../data/vehicleData';

// ── VEHICLE_MAKES ─────────────────────────────────────────────────────────────
describe('VEHICLE_MAKES', () => {
  it('is a non-empty sorted array', () => {
    expect(VEHICLE_MAKES.length).toBeGreaterThan(0);
    const sorted = [...VEHICLE_MAKES].sort((a, b) => a.localeCompare(b));
    expect(VEHICLE_MAKES).toEqual(sorted);
  });

  it('contains core global makes', () => {
    const required = ['Toyota', 'Ford', 'BMW', 'Honda', 'Volkswagen', 'Tesla'];
    for (const make of required) {
      expect(VEHICLE_MAKES, `Expected "${make}" in VEHICLE_MAKES`).toContain(make);
    }
  });

  it('contains UK / AU / NZ specific makes', () => {
    const regional = ['MG', 'Vauxhall', 'Holden', 'Isuzu', 'Haval', 'BYD', 'LDV', 'GWM'];
    for (const make of regional) {
      expect(VEHICLE_MAKES, `Expected "${make}" in VEHICLE_MAKES`).toContain(make);
    }
  });

  it('contains European makes', () => {
    const eu = ['Peugeot', 'Renault', 'Citroën', 'Dacia', 'SEAT', 'Škoda', 'Cupra'];
    for (const make of eu) {
      expect(VEHICLE_MAKES, `Expected "${make}" in VEHICLE_MAKES`).toContain(make);
    }
  });

  it('has no duplicate makes', () => {
    const unique = new Set(VEHICLE_MAKES);
    expect(unique.size).toBe(VEHICLE_MAKES.length);
  });
});

// ── VEHICLE_MAKES_MODELS ──────────────────────────────────────────────────────
describe('VEHICLE_MAKES_MODELS', () => {
  it('every make has at least one model', () => {
    for (const [make, models] of Object.entries(VEHICLE_MAKES_MODELS)) {
      expect(models.length, `"${make}" has no models`).toBeGreaterThan(0);
    }
  });

  it('MG includes HS PHEV', () => {
    expect(VEHICLE_MAKES_MODELS['MG']).toContain('HS PHEV');
  });

  it('MG includes other key models', () => {
    const mg = VEHICLE_MAKES_MODELS['MG'];
    expect(mg).toContain('HS');
    expect(mg).toContain('ZS EV');
    expect(mg).toContain('MG4');
    expect(mg).toContain('Cyberster');
  });

  it('Toyota includes AU/NZ models', () => {
    const toyota = VEHICLE_MAKES_MODELS['Toyota'];
    expect(toyota).toContain('HiLux');
    expect(toyota).toContain('Land Cruiser 300');
    expect(toyota).toContain('Prado');
    expect(toyota).toContain('HiAce');
    expect(toyota).toContain('Kluger');
  });

  it('Nissan includes UK/EU/AU models', () => {
    const nissan = VEHICLE_MAKES_MODELS['Nissan'];
    expect(nissan).toContain('Qashqai');
    expect(nissan).toContain('Navara');
    expect(nissan).toContain('X-Trail');
    expect(nissan).toContain('Patrol');
  });

  it('Mitsubishi includes PHEV and Triton', () => {
    const m = VEHICLE_MAKES_MODELS['Mitsubishi'];
    expect(m).toContain('Outlander PHEV');
    expect(m).toContain('Eclipse Cross PHEV');
    expect(m).toContain('Triton');
  });

  it('Ford includes Transit Custom and Territory', () => {
    const ford = VEHICLE_MAKES_MODELS['Ford'];
    expect(ford).toContain('Transit Custom');
    expect(ford).toContain('Territory');
  });

  it('Hyundai includes IONIQ 5 N and Santa Fe PHEV', () => {
    const h = VEHICLE_MAKES_MODELS['Hyundai'];
    expect(h).toContain('IONIQ 5 N');
    expect(h).toContain('Santa Fe PHEV');
  });

  it('no make has duplicate models', () => {
    for (const [make, models] of Object.entries(VEHICLE_MAKES_MODELS)) {
      const unique = new Set(models);
      expect(unique.size, `"${make}" has duplicate models`).toBe(models.length);
    }
  });
});

// ── getModelsForMake ──────────────────────────────────────────────────────────
describe('getModelsForMake', () => {
  it('returns sorted models for a known make', () => {
    const models = getModelsForMake('MG');
    expect(models).toContain('HS PHEV');
    const sorted = [...models].sort((a, b) => a.localeCompare(b));
    expect(models).toEqual(sorted);
  });

  it('returns empty array for unknown make', () => {
    expect(getModelsForMake('UnknownBrand')).toEqual([]);
  });

  it('returns empty array for empty string', () => {
    expect(getModelsForMake('')).toEqual([]);
  });

  it('does not mutate the source array on repeated calls', () => {
    const first  = getModelsForMake('BMW');
    const second = getModelsForMake('BMW');
    expect(first).toEqual(second);
  });

  it('returns sorted Toyota models including AU-specific models', () => {
    const models = getModelsForMake('Toyota');
    expect(models).toContain('HiLux');
    expect(models).toContain('Land Cruiser 300');
    const sorted = [...models].sort((a, b) => a.localeCompare(b));
    expect(models).toEqual(sorted);
  });
});

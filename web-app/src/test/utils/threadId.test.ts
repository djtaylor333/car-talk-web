import { describe, it, expect } from 'vitest';
import { generateThreadId } from '../../utils/threadId';

describe('generateThreadId', () => {
  it('is order-independent', () => {
    const id1 = generateThreadId('vehicle_A', 'vehicle_B');
    const id2 = generateThreadId('vehicle_B', 'vehicle_A');
    expect(id1).toBe(id2);
  });

  it('produces a deterministic result', () => {
    expect(generateThreadId('alpha', 'beta')).toBe('alpha_beta');
  });

  it('sorts lexicographically', () => {
    expect(generateThreadId('z_car', 'a_car')).toBe('a_car_z_car');
  });

  it('handles identical ids', () => {
    expect(generateThreadId('same', 'same')).toBe('same_same');
  });

  it('includes both ids in the result', () => {
    const result = generateThreadId('foo', 'bar');
    expect(result).toContain('foo');
    expect(result).toContain('bar');
  });
});

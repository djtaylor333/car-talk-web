/** Generates a consistent, order-independent thread ID from two vehicle IDs. */
export function generateThreadId(vehicleIdA: string, vehicleIdB: string): string {
  return [vehicleIdA, vehicleIdB].sort().join('_');
}

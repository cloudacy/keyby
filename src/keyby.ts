export function keyBy<
  A extends object,
  K extends keyof {
    [P in keyof A as A[P] extends PropertyKey ? P : never]: unknown;
  }
>(array: A[], key: K) {
  return array.reduce(
    (r, x) => ({ ...r, [x[key] as unknown as PropertyKey]: x }),
    {} as { [P in A[K] as A[K] extends PropertyKey ? A[K] : never]: A }
  );
}

export default keyBy;

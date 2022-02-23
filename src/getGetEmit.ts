export const getGetEmit: <T>(
  setValue: (valueNew: T) => void,
  getValue: () => T
) => // eslint-disable-next-line @typescript-eslint/no-explicit-any
<TArgs extends ReadonlyArray<any>>(
  updateValue: (value: T, ...args: TArgs) => T
) => (...args: TArgs) => void =
  (setValue, getValue) =>
  (updateValue) =>
  (...args) =>
    setValue(updateValue(getValue(), ...args));

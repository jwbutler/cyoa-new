export const checkState = (condition: boolean, message?: string) => {
  if (!condition) {
    if (message) {
      throw new Error(`Illegal state: ${message}`);
    }
    throw new Error('Illegal state');
  }
};

export const checkArgument = (condition: boolean, message?: string) => {
  if (!condition) {
    if (message) {
      throw new Error(`Illegal argument: ${message}`);
    }
    throw new Error('Illegal argument');
  }
};

export const checkNotNull = <T> (
  value: T | null | undefined,
  message?: string
): T => {
  if (value === null || value === undefined) {
    if (message) {
      throw new Error(`Unexpected null or undefined value: ${message}`);
    }
    throw new Error('Unexpected null or undefined value');
  }
  return value;
};
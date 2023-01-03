export function to<T, E = any>(promise: Promise<T>) {
  return toArray<T, E>(promise);
}

export async function toObject<T, E = any>(promise: Promise<T>) {
  return toArray<T, E>(promise).then(([error, data]) => ({
    data,
    error
  }));
}

export function toArray<T, E = any>(promise: Promise<T>): Promise<[error: E, data: Awaited<T> | undefined]> {
  return Promise.allSettled([promise]).then(function ([result]) {
    let data: Awaited<T> | undefined;
    let error: E | any;

    if (result.status === "fulfilled") {
      data = result.value;
    } else {
      error = result.reason;
    }

    return [error, data];
  });
}

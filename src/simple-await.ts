function wait<T, E = any>(promise: Promise<T>): Promise<{ error: E, data: Awaited<T> | undefined }> {
  return Promise.allSettled([promise]).then(function ([result]) {
    let data: Awaited<T> | undefined;
    let error: E | any;

    if (result.status === "fulfilled") {
      data = result.value;
    } else {
      error = result.reason;
    }

    return { error, data };
  });
}

export default wait;
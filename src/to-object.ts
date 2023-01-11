import to from "./simple-await";

function toObject<T, E = any>(promise: Promise<T>) {
  return to<T, E>(promise).then(([error, data]) => ({
    data,
    error
  }));
}

export default toObject;
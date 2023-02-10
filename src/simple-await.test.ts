import wait from "./simple-await";

describe("simple await", () => {
  it("should return data when resolved", async () => {
    const promise = Promise.resolve(1);
    const result = await wait(promise);

    expect(result.data).toBe(1);
  });

  it("should not return error when resolved", async () => {
    const promise = Promise.resolve(1);
    const result = await wait(promise);

    expect(result.error).toBeUndefined();
  });

  it("should return error when rejected", async () => {
    const promise = Promise.reject(new Error("error"));
    const result = await wait(promise);

    expect(result.error).toBeInstanceOf(Error);
  });

  it("should not return data when rejected", async () => {
    const promise = Promise.reject(new Error("error"));
    const result = await wait(promise);

    expect(result.data).toBeUndefined();
  });
});
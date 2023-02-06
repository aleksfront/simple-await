import wait from "./simple-await";

describe("simple await", () => {
  it("should return data when resolved", async () => {
    const promise = Promise.resolve(1);
    const result = await wait(promise);

    expect(result.data).toBe(1);
  })
});
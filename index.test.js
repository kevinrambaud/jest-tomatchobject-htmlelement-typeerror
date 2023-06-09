test("toMatchObject throw TypeError: undefined is not a function when expected contains an value HTMLElement", () => {
  const actual = { value: document.createElement("div") };
  const expected = { value: document.createElement("div") };
  expect(actual).toMatchObject(expected);
});

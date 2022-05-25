
export const convertToTable = (data) => {
  const orderedata = data
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((obj) => {
      return {date: new Date(obj.date), active:obj.active,views:obj.active,predicted:obj.active};
    });
  const result = [Object.keys(Object.assign({}, ...orderedata))];
  result[0] = result[0].filter((r) => r !== "id");
  orderedata.forEach((element) => {
    delete element?.id;
    result.push(Object.values(Object.assign({}, element)));
  });
  return result;
};

import zootopia from "../json/zootopia.json";

export function getScript(page = 1) {
  const script = [...zootopia.script];
  const offset = (page - 1) * 10;
  const limit = 10;
  console.log(page, offset);
  const result = script.splice(offset, limit);
  console.log(result);
  return result;
}
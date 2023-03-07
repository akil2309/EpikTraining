const convert = require("xml-js");

const xml2json = (body) => {
  const xml = body;
  const result1 = convert.xml2json(xml, { compact: true, spaces: 1 });
  return result1;
  console.log(result1);
};
module.exports = xml2json;

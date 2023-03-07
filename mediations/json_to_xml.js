const j2x = require("xml-js");
const json_to_xml = (body) => {
  const json = JSON.stringify(body);
  const xml = j2x.json2xml(json, { compact: true, spaces: 1 });
  return xml;
  console.log(xml);
};

module.exports = json_to_xml;

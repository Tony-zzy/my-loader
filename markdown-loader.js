const marked = require("marked");

module.exports = (source) => {
  const html = marked(source);
  console.log(html)
//   return  `export default ${JSON.stringify(html)}`;
    return html

};

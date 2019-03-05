// @ts-check
let fs = require("fs");

let dir = "./src/img/gallery/book-launch/"
fs.readdir(dir, null, (err, files) => {
  if (err !== null) return;
  let fileObject = [];
  files.forEach((file, index) => {
    // console.log(file, ' ', index);
    // fs.rename(dir + file, dir + 'adenike-book-launch-' + index + '.jpg', (err) => {
    //   if (err) console.log(err);
    // })
    fileObject.push({
      "title": "",
      "fileName": file,
      "thumbnail": ""
    })
  });

  console.log(fileObject);
  fs.writeFile("./gallery.js", JSON.stringify(fileObject), null, (err) => {
    if (err !== null) console.log(err);
  })
});
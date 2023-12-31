import fs from "fs";
import path from "path";
import { PNG } from "pngjs";

const dir_read = "./public/images/mock";

const pngFiles = fs.readdirSync(dir_read).filter((filename) => {
  return path.extname(filename).toLowerCase() === ".png";
});

let metadataCollection = [];

pngFiles.forEach((fileName) => {
  const png = PNG.sync.read(fs.readFileSync(path.join(dir_read, fileName)));
  const width = png.width;
  const height = png.height;
  const metadata = {
    fileName: fileName,
    width: width,
    height: height,
  };
  metadataCollection.push(metadata);
});

export default metadataCollection;

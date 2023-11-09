import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveType(base, res) {
  let contentType;
  const extension = path.extname(base);
  switch (extension) {
    case ".css":
      contentType = "text/css";
      const cssPath = path.join(__dirname, base);
      readFile(cssPath, "utf-8", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".woff2":
      contentType = "font/woff2";
      const woff2Path = path.join(__dirname, base);
      readFile(woff2Path, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".ttf":
      contentType = "font/ttf";
      const ttfPath = path.join(__dirname, base);
      readFile(ttfPath, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".js":
      contentType = "application/javascript";
      const jsPath = path.join(__dirname, base);
      readFile(jsPath, "utf-8", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".ico":
      contentType = "image/vnd.microsoft.icon";
      const icoPath = path.join(__dirname, base);
      readFile(icoPath, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".jpg":
      contentType = "image/jpg";
      const jpgPath = path.join(__dirname, base);
      readFile(jpgPath, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      const jpegPath = path.join(__dirname, base);
      readFile(jpegPath, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
    case ".png":
      contentType = "image/png";
      const pngPath = path.join(__dirname, base);
      readFile(pngPath, "", (err, data) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
      break;
  }
}

/**
 * This method asynchronously reads an HTML file using the `fs.readFile()` module.
 * @param {string} file
 * The file name to be read
 * @param {serverResponse} res
 * The response object from server
 */
export function serveHTML(file, res) {
  readFile(path.join(__dirname, "public/html", file), "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal server error!" }));
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

/**
 * This method serves the home page of the application
 * @param {httpResponse} res
 */
export function serveHome(res) {
  readFile(
    path.join(__dirname, "private/html", "main.html"),
    "utf8",
    (err, data) => {
      if (err) throw new Error(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  );
}

import { createServer } from "http";
import dotenv from "dotenv";
import url from "url";
import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { serveHTML, serveHome, serveType } from "./router.js";
import { createUser, fetchUser } from "./backend/database/user.js";
dotenv.config({ path: "./backend/.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 2300;

const server = createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  console.log(pathname);
  console.log(query);
  if (pathname.includes(".")) {
    serveType(pathname, res);
  }
  if (pathname == "/") {
    serveHTML("index.html", res);
  }
  if (pathname == "/signup") {
    serveHTML("signup.html", res);
  }
  if (pathname == "/login") {
    serveHTML("login.html", res);
  }
  if (pathname == "/auth/newuser" && req.method == "POST") {
    let data;
    req.on("data", (chunk) => {
      data = chunk;
    });
    req.on("end", async () => {
      let userDetails = JSON.parse(data);
      console.log(userDetails);
      let user = {
        email: null,
        phone: null,
        password: null,
      };
      const { password, id } = userDetails;
      user.password = password;
      if ("phone" in id) {
        user.phone = id.phone;
      } else {
        user.email = id.email;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(await createUser(user)));
    });
  }

  if (pathname == "/main") {
    serveHome(res);
  }
  if (pathname == "/user") {
    const code = query.ref;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(await fetchUser(code)));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

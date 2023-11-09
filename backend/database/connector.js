import { createConnection } from "mysql";

export const DB = createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "erxto",
});

import { DB } from "./connector.js";
export async function addNotification(data) {
  return new Promise((resolve, reject) => {
    let insert = `INSERT INTO notifications(user_id, notice_type, message, created_at, is_read, notice_source, link, scope) VALUES(?,?,?,?,?,?,?,?)`;
    DB.query(insert);
  });
}

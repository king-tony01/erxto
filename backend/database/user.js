import { DB } from "./connector.js";
import * as bcrypt from "bcrypt";

DB.connect((err) => {
  if (err) throw new Error(`Error occurd: ${err}`);
  console.log("Connection to database successful");
});

/**
 * This method queries the database to create a new user
 * @param {object} user
 * @returns {object}
 */
export async function createUser(user) {
  try {
    return new Promise(async (resolve, reject) => {
      let insertWithEmail = `INSERT INTO users(email, user_password, u_code) VALUES(?,?,?)`;
      let insertWithPhone = `INSERT INTO users(phone, user_password, u_code) VALUES(?,?,?)`;
      const { email, phone, password } = user;
      const salt = await bcrypt.genSalt(10);
      const newPass = await bcrypt.hash(password, salt);
      const code = generateCode(100);
      console.log(code);
      if (phone == null) {
        const exist = await existUser(email, null);
        console.log(exist);
        if (exist.stat) {
          resolve(exist);
          return;
        } else {
          DB.query(
            insertWithEmail,
            [email, newPass, code],
            async function (err, result, field) {
              if (err) reject(err);
              resolve({
                message: `User successfully created!`,
                stat: true,
                data: await existUser(email, null),
              });
            }
          );
        }
        return;
      } else {
        const exist = await existUser(null, phone);
        console.log(exist);
        if (exist.stat) {
          resolve(exist);
          return;
        } else {
          DB.query(
            insertWithPhone,
            [phone, newPass, code],
            async function (err, result, field) {
              if (err) reject(err);
              resolve({
                message: `User successfully created!`,
                stat: true,
                data: await existUser(null, phone),
              });
            }
          );
        }
      }
    });
  } catch (err) {
    throw new Error(err);
  }
}

/**
 * This method routes the users table for existing user with the given email and phone. Returns a user object with the stat set to true if user, and false if no user.
 *@param {string} email @param {string} phone
 *
 */
async function existUser(email, phone) {
  try {
    return new Promise((resolve, reject) => {
      let existEmail = `SELECT * FROM users WHERE email=?`;
      let existPhone = `SELECT * FROM users WHERE phone=?`;
      if (phone == null) {
        DB.query(existEmail, [email], function (err, result, field) {
          if (err) reject(err);
          if (result.length > 0) {
            resolve({
              info: `A user already exist with the email: ${email}`,
              details: result[0],
              stat: true,
            });
          } else {
            resolve({
              info: `No user with the email: ${email}`,
              stat: false,
            });
          }
        });
      } else {
        DB.query(existPhone, [phone], function (err, result, field) {
          if (err) reject(err);
          if (result.length > 0) {
            resolve({
              info: `A user already exist with the phone: ${phone}`,
              details: result[0],
              stat: true,
            });
          } else {
            resolve({
              info: `No user with the phone: ${phone}`,
              stat: false,
            });
          }
        });
      }
    });
  } catch (err) {
    throw new Error(err);
  }
}

/**
 * This function takes a number as argument and generates random characters up to the `length` argument
 * @param {number} length
 * @returns {string}
 */
function generateCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    code += characters.charAt(index);
  }

  return code;
}

export async function fetchUser(code) {
  try {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM users WHERE u_code=?`;
      DB.query(query, [code], (err, result, field) => {
        if (err) reject(err);
        if (result.length > 0) {
          resolve(result[0]);
        } else {
          reject({
            message: "No user found",
            stat: false,
          });
        }
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

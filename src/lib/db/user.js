import {   } from "./db.js";


async function getUserByUsername(username) {

    const user = await sql
    `
      SELECT
        username,
        password_hash
      FROM users
      WHERE username = ${username}
    `;
    // user = { username: "example", password_hash: "$2b$10$examplehash" }
    return user[0]; // Return the first user found or undefined
  }
  
  export { getUserByUsername };
  
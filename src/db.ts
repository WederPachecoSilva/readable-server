import * as mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "iiawah33",
  database: "readable",
});

connection.connect();

export default connection;

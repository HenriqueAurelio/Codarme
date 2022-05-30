require("dotenv-safe/config");
const { exec } = require("child_process");
process.env.DB_URL = `${process.env.DB_URL}_novodb?schema=test_schema`;

//@TODO transform in syncronous execution to avoid concurrency
exec("yarn db:migrate");

module.exports = {};

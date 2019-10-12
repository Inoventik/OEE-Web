const Pool = require("pg").Pool;
const pool = new Pool({
  user: "oee",
  hosts: "localhost",
  database: "oee",
  password: "oee",
  port: 5432
});

const getAllInfo = (request, response) => {
  pool.query(
    "SELECT * FROM combined_etl ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAllInfo
};

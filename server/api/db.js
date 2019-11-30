const config = require("config");
const bcrypt = require("bcrypt");
const Pool = require("pg").Pool;

const saltRounds = config.get("salt_rounds");

const pool = new Pool({
  user: config.get("db_user"),
  hosts: config.get("db_hosts"),
  database: config.get("db_database"),
  password: config.get("db_password"),
  port: config.get("db_port")
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

const getAllUsers = (request, response) => {
  pool.query(
    "SELECT id, first_name, last_name, email_address, username, role FROM users ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(200).json(results.rows);
    }
  );
};

const saveUser = (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  console.log(request.body);

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) return setErrorResponse(response, err, 500);

    bcrypt.hash(password, salt, function(err, hashed_password) {
      if (err) return setErrorResponse(response, err, 500);

      pool.query(
        "INSERT INTO users (first_name, last_name, email_address, password, username, role) VALUES ($1, $2, $3, $4, '', 'FOR APPROVAL') RETURNING id",
        [firstName, lastName, email, hashed_password],
        (error, result) => {
          if (error) return setErrorResponse(response, error, 500);

          return response
            .status(201)
            .send(`User added with ID: ${result.rows[0].id}`);
        }
      );
    });
  });
};

const updateUser = (request, response) => {
  const { id, firstName, lastName, email, username, role } = request.body;
  console.log(request.body);

  pool.query(
    `UPDATE users SET 
        first_name = $1,
        last_name = $2, 
        email_address = $3,
        username = $4, 
        role = $5
      WHERE id = $6`,
    [firstName, lastName, email, username, role, id],
    (error, result) => {
      if (error) return setErrorResponse(response, error, 500);

      return response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const resetPassword = (request, response) => {
  const { id, password } = request.body;
  console.log(request.body);

  if (!id || !password)
    return response.status(500).send("Should supply both id and password");

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) return setErrorResponse(response, err, 500);

    bcrypt.hash(password, salt, function(err, hashed_password) {
      if (err) return setErrorResponse(response, err, 500);

      pool.query(
        `UPDATE users SET password = $1 WHERE id = $2`,
        [hashed_password, id],
        (error, result) => {
          if (error) return setErrorResponse(response, error, 500);

          return response.status(200).send(`User modified with ID: ${id}`);
        }
      );
    });
  });
};

const auth = (request, response) => {
  const { username, password } = request.body;

  if (!username || !password)
    return response
      .status(500)
      .send("Should supply both username and password");

  pool.query(
    "SELECT * FROM users WHERE username = '" + username + "'",
    (error, result) => {
      if (error || !result.rows[0]) {
        return setErrorResponse(response, error, 500);
      }

      bcrypt.compare(password, result.rows[0].password).then(isMatch => {
        if (!isMatch) return response.status(400).send("Invalid credentials");

        responseObject = {
          id: result.rows[0].id,
          first_name: result.rows[0].first_name,
          last_name: result.rows[0].last_name,
          email_address: result.rows[0].email_address,
          username: result.rows[0].username,
          role: result.rows[0].role
        };

        response.status(200).json(responseObject);
      });
    }
  );
};

const getAllTasks = (request, response) => {
  pool.query(
    "SELECT id, recipient, sender, message, status, date_sent FROM tasks ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(200).json(results.rows);
    }
  );
};

const saveTask = (request, response) => {
  const { recipient, sender, message, status, date_sent } = request.body;
  console.log(request.body);

  pool.query(
    "INSERT INTO tasks (recipient, sender, message, status, date_sent) VALUES ($1, $2, $3, $4, $5) RETURNING id",
    [recipient, sender, message, status, date_sent],
    (error, result) => {
      if (error) return setErrorResponse(response, error, 500);

      return response
        .status(201)
        .send(`Task added with ID: ${result.rows[0].id}`);
    }
  );
};

function setErrorResponse(responseObject, errorObject, errorStatus) {
  if (errorObject) {
    console.log(errorObject.message);
  } else {
    console.log(errorObject);
  }

  return responseObject.sendStatus(errorStatus);
}

module.exports = {
  getAllInfo,
  getAllUsers,
  saveUser,
  updateUser,
  resetPassword,
  auth,
  getAllTasks,
  saveTask
};

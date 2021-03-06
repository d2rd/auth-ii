const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./zWORK/knexfile.js');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const logger = require('morgan');

const db = knex(knexConfig.development);

const PORT = process.env.PORT || 3350;

server.use(express.json());
server.use(cors());
server.use(logger('tiny'));

server.get('/', (req, res) => {
  res.send('I am responding to your GET request, Dave!');
});

//		Creates a user using the information sent inside the body of the request. Hash the password before saving the user to the database.
server.post('/api/register', (req, res) => {
  console.log("POST register is running")
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 16);
    db('auth').insert(user)
      .then(ids => {
        res.status(201).json({ id: ids[0] });
      })
      .catch(err => {
        res.status(500).send(err);
      })
  console.log("POST register success!")
  });

  //	Use the credentials sent inside the body to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!'
  server.post('/api/login', (req, res) => {
  
  });

  //		If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in repond with the correct status code and the message: 'You shall not pass!'. Use this endpoint to verify that the password is hashed before it is saved.
  server.get('/api/users', (req, res) => {
  
  });


  server.listen(PORT, () => {
    console.log(`I live therefore I AM running on port ${PORT}`);
  });
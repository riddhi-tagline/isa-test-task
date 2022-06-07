const express = require('express');
const app = express();
require('dotenv').config();
require('./database');
// const movieRoutes = require('./routes/movie.routes');
const usersRoutes = require('./routes/users.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', usersRoutes);
// app.use('/movies', movieRoutes);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

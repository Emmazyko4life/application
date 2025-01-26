const express = require('express');
const port = 8050;
const sequelize = require('./database/sequelize');
const applicationRouter = require('./router/applicationRouter');


const app = express();
app.use(express.json())
app.use (applicationRouter);

const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

server()


app.listen(port, () => {
console.log(`server is running on port: ${port}`)

})
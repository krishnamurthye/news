const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);
let isServerUp=false;

  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
  
    try {
        sequelize.authenticate()
        .then(() => console.log('Database connected'))
        .catch(err => console.log('Error: ' + err));

        await sequelize.sync(); // Sync all models
        console.log("Database & tables created!");
        
      } catch (error) {
        console.error('Unable to sync database:', error);
      }
    });
  
  function isServerReady() {
    return isServerUp;
  }
  
  module.exports = { app, server, isServerReady };


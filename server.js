const express = require('express');

//tell heroku which port to use...
const PORT = process.env.PORT || 3001;

//express initialize...
const app = express();

//modularization...
const noteRoute = require('./routes/apiRoutes/noteRoute');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

//access to public folder...
app.use(express.static('public'));

//json parsing...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', noteRoute);
app.use('/', htmlRoutes);


//listener for APIs...
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
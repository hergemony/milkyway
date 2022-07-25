const express = require('express');
const cors = require('cors');

//Routes
const striperoutes = require('./routes/stripe-routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/stripe', striperoutes);

app.listen(5000, () => {
    console.log("Listening on port 5000....");

});

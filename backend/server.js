const express = require('express');
const path = require('path');
const cors = require('cors');

//Routes
//const striperoutes = require('./routes/stripe-routes');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/api/stripe', striperoutes);

app.use('/images', express.static(path.join(__dirname,'../frontend/public/images')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}....`);
});

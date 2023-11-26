const express = require('express');
const app = express();
const env = process.env.NODE_ENV || 'development';
const models = require('./src/models');
const routes = require('./src/routes/index');

// untuk cek status api
app.get('/ping', (req, res) => res.send('Pong'));


//api end poin
app.use('/', routes);

// cek Koneksi ke database
models.sequelize.authenticate()
.then(() => console.log('Database Konek!'))
.catch(err =>console.error('Database Tidak Konek!', err));

app.listen(9000, () => console.log('Server listening to 9000.'));
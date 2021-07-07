const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');
app.set('views', './views');

// for routes
app.use("/", routes);

app.listen(port, () => console.log(`Express started on http://localhost:${port}`));

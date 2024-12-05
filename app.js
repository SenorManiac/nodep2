const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");
const indexRouter = require('./routes/index');

app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
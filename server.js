// =====================================
// Glamour Garments Server
// =====================================

const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// Serve HTML, CSS, JS and images

app.use(express.static(__dirname));


// Home page

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


// Kids page

app.get("/kids", (req, res) => {

    res.sendFile(
        path.join(__dirname, "kids.html")
    );

});


// Men's page

app.get("/mens", (req, res) => {

    res.sendFile(
        path.join(__dirname, "mens.html")
    );

});


// Ladies page

app.get("/ladies", (req, res) => {

    res.sendFile(
        path.join(__dirname, "ladies.html")
    );

});


// Billing page

app.get("/billing", (req, res) => {

    res.sendFile(
        path.join(__dirname, "billing.html")
    );

});


// Start Server

app.listen(PORT, () => {

    console.log("Glamour Garments Server Started");

    console.log(
        `Open http://localhost:${PORT}`
    );

});
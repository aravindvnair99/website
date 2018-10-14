const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/TFS", (req, res) => {
    res.render('tfs');
});
app.get("/Team", (req, res) => {
    res.render('team');
});
app.get("/Offline", (req, res) => {
    res.render('offline');
});
app.get("/Privacy", (req, res) => {
    res.render('privacy');
});
app.get("/ICIC2018", (req, res) => {
    res.render('icic2018');
});
app.get("/Blog", (req, res) => {
    res.redirect('https://faceaseb.wordpress.com');
});
app.get("/Identifire", (req, res) => {
    res.redirect('https://drive.google.com/drive/folders/1_yxMFFhuUTfb-xTxqKeueHjkRiZC7Yyv');
});
app.get("/Abhi", (req, res) => {
    res.render('abhi');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);
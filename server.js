const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const pages = [
  { route: '/', view: 'index', title: 'Hem' },
  { route: '/tjanster', view: 'tjanster', title: 'Tjänster' },
  { route: '/prislista', view: 'prislista', title: 'Prislista' },
  { route: '/om', view: 'om', title: 'Om oss' },
  { route: '/kontakt', view: 'kontakt', title: 'Kontakt' }
];

pages.forEach((page) => {
  app.get(page.route, (req, res) => {
    res.render(page.view, { currentPath: page.route, pageTitle: page.title });
  });
});

if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Hemlingby Rekond site running on port ${port}`);
  });
}

module.exports = app;

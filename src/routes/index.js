const newsRouter = require('./news'); // ./news.js
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}
module.exports = route;

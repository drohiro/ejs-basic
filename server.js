app = require('./config/config');
routes = require('./app/routes/routes');

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server de pé na porta: ${port}`);
})
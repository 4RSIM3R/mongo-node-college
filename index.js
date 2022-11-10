const app = require('fastify')({ logger: true });
const mongoose = require('mongoose');

const routes = require('./routes');

try {
    mongoose.connect('mongodb://root:rootpassword@localhost:27017/first', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin"
    });
} catch (error) {
    console.err(error.toString());
    process.exit(1);
}

routes(app);

app.listen({ port: 3000 }, (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
});
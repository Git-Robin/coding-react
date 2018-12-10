import express from "express";
import cors from "cors";
import os from "os";
const app = express();
import graphqlHTTP from "express-graphql";
import Schema from "./src/server/graphql/schema";

import bodyParser from "body-parser";

global.ROOT_PATH = __dirname;

const port = process.env.CODING_PORT || 3006;

/**
 * Static folder paths
 */
app.use("/images", express.static('public/img'));
app.use("/styles", express.static('public/css'));
app.use("/dist", express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var SECRET_KEY = process.env.GOODREADS_SECRET_KEY;

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: {key: SECRET_KEY},
    formatError: (err) => {
        return {message: err.message};
    }
}));

app.use('*', cors());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Cache-Control", "no-cache");
    next();
});

app.all("/*", function(req, res) {
    return res.sendFile(__dirname + "/src/index.html");
});

app.listen(port, () => console.log("Server started for host: " + os.hostname() + " at: " +port));
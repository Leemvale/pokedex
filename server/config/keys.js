const { DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_PORT } = process.env;
console.log(DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_PORT);

module.exports = {
    mongoURI:`mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
};
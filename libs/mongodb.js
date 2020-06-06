const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Hipogriff:" + process.env.DB_PASS + "@maincluster-mac5a.mongodb.net/HipogriffSMP?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    connect() {
        client.connect(err => {
            if (err) {
                this.close();
            }
        });
        return this;
    },
    close() {
        client.close();
    },
    findOne(db, collection, query, callback) {
        client.db(db).collection(collection).findOne(query, (err, document) => callback);
    },
    findAll(db, collection, callback) {
        client.db(db).collection(collection).find({}).sort({name: 1}).toArray((err, documents) => { callback(err, documents); });
    }
}
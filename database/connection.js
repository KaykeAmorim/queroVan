const mongoose = require('mongoose');

async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect('mongodb://127.0.0.1:27017/queroVan');
}

main().catch(err => console.log(err));
module.exports = {
    mongoose
}
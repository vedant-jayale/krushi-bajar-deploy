/*

const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://vedantjayle2003:ecommerce@cluster0.p6m6ytc.mongodb.net/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to the database");

    // Define the Product schema
    const productSchema = new mongoose.Schema({
        id: Number,
        name: String,
        image: String,
        category: String,
        new_price: Number,
        old_price: Number,
        quantity: String,
        use: String,
        plants: String,
        ingredients: String,
        date: { type: Date, default: Date.now },
        available: { type: Boolean, default: true },
    });

    const Product = mongoose.model('Product', productSchema);

    // Update image URLs
    Product.updateMany(
        { image: { $regex: '^http://localhost:4000' } },
        [{ $set: { image: { $replaceOne: { input: "$image", find: "http://localhost:4000", replacement: "https://krushibajarbackend.onrender.com" } } } }],
        { multi: true }
    ).then(result => {
        console.log('Image URLs updated successfully:', result);
        mongoose.connection.close();
    }).catch(err => {
        console.error('Error updating image URLs:', err);
        mongoose.connection.close();
    });
});

*/
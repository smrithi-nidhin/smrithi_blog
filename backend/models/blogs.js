const mongoose = require('mongoose');
const Blog = mongoose.model('Blog', {
    title: String,
    price: String,
    imagePath: String,
    image: String,
    description: String

});
module.exports = {
    Blog
}
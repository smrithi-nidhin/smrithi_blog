const mongoose = require('mongoose');
const Image = mongoose.model('Image', {
    title: String,
    description: String,
    


});
module.exports = {
    Image
}
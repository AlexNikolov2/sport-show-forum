const {model, Schema, Types: {ObjectId} } = require('mongoose');

const postSchema = new Schema({ 
    keyword: {type: String, required: [true, 'Keyword is required']},
    title: {type: String, required: [true, 'Title is required']},
    content: {type: String, required: [true, 'Content is required']},
    img: {type: String, required: [true, 'Img is required']},
    owner: {type: ObjectId, ref: 'User'}
});

const Post = model('Post', postSchema);

module.exports = Post;
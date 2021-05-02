const { User } = require('../models/user');
const { Blog } = require('../models/blogs');



function addUser(username, password, accountno) {
    console.log("in services addduser");
    return User.findOne({
        username
    })
        .then(user => {
            if (user) {
                return {
                    statusCode: 400,
                    message: "Account already exists"
                }
            }
            const newUser = new User({
                username, password, accountno
            })
            newUser.save();
            return {
                statusCode: 200,
                message: "Account created sucessfully"
            }

        })

}
function addblog(title, price) {
    console.log("in services adddblog");
    //console.log(imagePath);
    return Blog.findOne({
        title
    })
        .then(blogs => {
            if (blogs) {
                return {
                    statusCode: 400,
                    message: "Blog exists"
                }
            }
            const newblog = new Blog({
                title, price
            })
           
            return {
                statusCode: 200,
                message: "Blog added sucessfully"
            }

        })
    // data[username] = { username, password, accountn0, balance:0 };

}


function createNewBlog(title, description, imagePath, image) {
    console.log("productServices - createNew");
    return Blog.findOne({
        title
    })
        .then(blog => {
            if (blog) {
                return {
                    statusCode: 400,
                    message: "Blog already exists"
                }
            }
            const newBlog= new Blog({
                title, description, imagePath, image


            });
            newBlog.save();

            return {
                statusCode: 200,
                message: "Blog added successfully"
            }
        })
}

function login(username, password) {
    console.log('blogServices - login');

    return User.findOne({
        username, password

    })
        .then(user => {
            if (user) {
                let record1 = user.username
                let record2 = user.password
                console.log(record1)
                return {
                    statusCode: 200,
                    record: user,
                    message: "Logged in successfully"

                }
            }
            return {
                statusCode: 400,
                message: "Invalid credentials"
            }
        });
}
function navbar(){
    console.log("in backend services--getAllboioks")
    return Blog.find({})

        .then(blogs => {
            return {
                statusCode: 200,
                message: "Blogs List Following",
                blogs: blogs
            }
        })
}

function getAllBlogs() {
    console.log("in backend services--getAllblogs")
    return Blog.find({})

        .then(blogs => {
            return {
                statusCode: 200,
                message: "Blog List Following",
                blogs: blogs
            }
        })
}


function getBlogsByTitle(title) {
    console.log('blogServices - title');

    return Blog.findOne({
        title

    })
        .then(blogs => {
            if (blogs) {
                let record1 = blogs.title
                console.log(record1)
                return {
                    statusCode: 200,
                    blogs: blogs,
                    message: "Blog in successfully"

                }
            }
            return {
                statusCode: 400,
                message: "Invalid credentials"
            }
        });
}


function setCurrentUser(username) {
    currentUser = username;

}
function getCurrentUser(username) {
    return currentUser;

}



function createNewBlog(title,description,imagePath){
    console.log("BlogServices - createNewBlog");
    console.log(title+description+imagePath)
    return Blog.findOne({
        title
    })
    .then (obj=>{
        if(obj){
            return{
                statusCode:400,
                message:"Blog on this topic  already exists"
            }
        }
        const newBlog= new Blog({
            title,description,imagePath
        });
        newBlog.save();
 
        return {
            statusCode:200,
            message:"Blog created successfully",
            
            
        }
    })
    //data[username]={username,password,acno,history:[],balance:0};
}
 
function UpdateColumn(ColumnName,newValue){   
 
    console.log('Function-UpdateColumn in controller.js.........................')
    let newValueForBlogTitle=newValue;
    let currentBlogTitle ="kilis";
 
    return Blog.updateOne( { title :currentBlogTitle },{
        $set: {
            title: newValueForBlogTitle
            
        }
    } )
    .then (obj=>{
        if(obj){
            return{ 
                statusCode:200,
                message:"updated in successfully",
                
                
                
 
 
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentialss1"
        }
    })
   
}
 
function getAllBlogs(){
    console.log("in service-blog");
    return Blog.find({}) 
    .then (blogs=>{
            return{
                statusCode:200,
                blogs:blogs
            }
    })
}


module.exports = {
    //getUsers:getUsers,
    addUser: addUser,
    login: login,
    addblog: addblog,
    createNewBlog: createNewBlog,
    getAllBlogs: getAllBlogs,
    getBlogsByTitle: getBlogsByTitle,
    createNewBlog:createNewBlog,
    getAllBlogs:getAllBlogs,
    UpdateColumn:UpdateColumn
    //k:k
}
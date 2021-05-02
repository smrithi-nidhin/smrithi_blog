var express = require('express');
const { Blog } = require('../models/blogs');
var router = express.Router();
var blog = require('../services/blog')
function authMiddleware(req, res, next) {
  if (req.session.currentUser()) {
    next();
  }
  else {
    //next({message:"user not authenticated"});
    res.status(401).send({ message: "Please login" })
  }
}
/* GET users listing. */
router.get('/', function (req, res) {

  var result = Blog.getUsers()
  res.send(result);
});
router.post('/register', function (req, res) {
  console.log("in router register")
  let usname = req.body.username;
  let pwd = req.body.password;
  let confirmPassword = req.body.confirmPassword;
  let acno = req.body.accountno;

  if (pwd != confirmPassword) {
    res.status(400).send({ message: "Password and confirm password doesnot match" });

  }
  else {
    blog.addUser(usname, pwd, acno)
      .then(data => {
        res.status(data.statusCode).send({ message: data.message });
      })
  }
})
router.post('/addblog', function (req, res) {

  let title = req.body.title;
  let price = req.body.price;

  {
    blog.addblog(title, price)
      .then(data => {
        res.status(data.statusCode).send({ message: data.message });
      })
  }
})

router.post('/addNewblog', function (req, res) {
  console.log("programRouter - createNewBlog");

  let title = req.body.title;
  let description = req.body.description;
  let imagePath = req.body.imagePath;
  let image = req.body.image;

  blog.createNewBlog(title, description, imagePath, image)

    .then(data => {
      res.status(data.statusCode).send({ message: data.message });
    })
})

router.post('/getAllBlogs', function (req, res) {
  console.log("in backend router--getAllblogs")
  blog.getAllBlogs()
    .then(data => {
      res.status(data.statusCode).send({ message: data.message, blogs: data.blogs });

    })
})
router.post('/navbar',function(req,res){
  blog.getAllBlogs()
  .then(data=>{
    res.status(data.statusCode).send({ message: data.message, blogs: data.blogs });
  })
})
router.post('/getBlogsByTitle', function (req, res) {

  console.log("blogRouter - getBlogsByTitle");
  let title = req.body.title;
  blog.getBlogsByTitle(title)
    // blog.k(title)
    .then(data => {
      res.status(data.statusCode).send({ message: data.message, blogs: data.blogs });
    });
});
router.route('/editBlog/:id').get(function(req, res)  {
  let id =req.params.id;
  blog.findById(id, function (error, data)  {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update blog
router.route('/updateBlog/:id').post(function(req, res)  {
  blog.findByIdAndUpdate(req.params.id, function(error,data) {
   if(!data)
   res.status(404).send("data is not found");
    // $set: req.body

    else{
      data.title=req.body.title;
      data.description=req.body.description
      data.save().then(data=>{
        res.json('Update complete');
      })
      .catch(error=>{
        res.status(400).send("unable to update the database");
      });
    }
  
  })
})

router.post('/createBlog',function(req,res){
  console.log("BlogRouter-createBlog"); 
  //console.log(blogTitle+blogDescription+BlogImage+MoreBlogContent);
 let title=req.body.title;
 let description=req.body.description;
 let imagePath=req.body.imagePath;
 
 console.log(title+description+imagePath);
 blog.createNewBlog(title,description,imagePath)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,blogs:data.blogs});
  }) 
})
router.put('/updateBlogs',function(req,res){
  console.log("In update -router");
  
  let ColumnName=req.body.ColumnName;
 
  let newValue=req.body.newValue;
 
  
  blog.UpdateColumn(ColumnName,newValue)
    .then(data=>{
      console.log(data)
      res.status(data.statusCode).send({message:data.message,newValue:data.newValue});
    })
    .catch(function(error){ 
      console.log(error); 
      res.status(data.statusCode).send({message:"User Updation Failed msg from router"});
    });
});
router.get('/getAllBlogs', function(req, res) {
  console.log("Router - getAllBlogs"); 
 // let productCategory=req.body.productCategory;
 blog.getAllBlogs()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,blogs:data.blogs});
  });
});

/* GET SINGLE BLOG BY ID */
router.get('/:id', function(req, res, next) {
  blog.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* UPDATE Blog */
router.put('/:id', function(req, res, next) {
  blog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});





router.post('/login', function (req, res) {

  let username = req.body.username;
  let password = req.body.password;
  console.log(username, password)
  blog.login(username, password)
    .then(data => {
      if (data.statusCode == 200) {
        req.session.currentUser = username;
      }
      res.status(data.statusCode).send({
        message: data.message,
        record: data.record
      });
    })

})

router.post('/home', authMiddleware, function (req, res, next) {
  let uname = req.body.username;
  let amt = Number(req.body.amount);
  let value = req.body.value;

  let data = Blog.getUsers();

  // let bal = document.querySelector("#bal");
  if (uname in data) {
    if (uname != Blog.req.session.currentUser) {
      next("error");
      return res.send({ message: "invalid username" })
    }
    if (amt > data[uname]["balance"]) {
      return res.status(400).send({ message: "insufficient balance" })
    }
    data[uname]["balance"] -= amt;
    let bal = data[uname]["balance"]
    amount: amt

    res.send({ balance: bal, message: "Payment sucessfull and vehicle choosen is " + value })
  }

  else {
    res.status(400).send({ message: "invalid user" });
  }

});

router.get('/test/:id', function (req, res) {
  res.send(req.query.id);
});

module.exports = router;
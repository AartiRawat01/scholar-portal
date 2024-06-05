const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
// const collection=require("./src/mongodb")


const tempelatePath=path.join(__dirname,'templets');
const publicPath = path.join(__dirname, 'public');
const bodyParser = require('body-parser');



app.use(express.json());
app.set("view engine","hbs");
app.set("views",tempelatePath);
app.use(express.static(path.join(__dirname, 'public')));


const user = {
 username: 'aarti@gmail.com',
 password :'123456'
}


const confirm = {
    nepasss: '123456',
    confirmpass :'123456'
   }
app.get("/",(req,res)=>{
   
    res.render("mainpage");
});



app.get("/scholarlogin",(req,res)=>{
res.render('scholarlogin');


});

app.get("/adminlogin",(req,res)=>{
    res.render('adminlogin');
    
    
    });


app.get('/changepassword',(req,res)=>{
  res.render('changepassword');
});

// app.get('/register',(req,res)=>{
//     res.render('home');
//   });

app.post('/changepassword',(req,res)=>{
    
    // res.status(200).send({ message: 'Login successful' });
    
    const { username, password } = req.body;
     
    if (username === user.username && password === user.password) {
        console.log('hola>>>>>');
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});


//// ------- copy paste__________

app.get('/home',(req,res)=>{

    res.render('home');

})

app.post('/home',(req,res)=>{
    
    // res.status(200).send({ message: 'Login successful' });
    
    const { newpass, confirmpass } = req.body;
     
    if (newpass === confirm.nepasss && confirmpass === confirm.confirmpass) {
        console.log('hola>>>>>');
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});

// --------------------------------------


app.get('/registration',(req,res)=>{
    
   res.render('registration')
});

app.get('/programdetails',(req,res)=>{
    
    res.render('programdetails')
 });
//app.get("/singup",(req,res)=>{
   // res.render("singup")
//})



//const app = express();
//const port = 3000;

//app.use(bodyParser.urlencoded({ extended: true }));

//app.get('/', (req, res) => {
   // res.sendFile(__dirname + '/index.html');
//});

//app.get('/forgot', (req, res) => {
   // res.send('Forgot SAP ID Page'); // You can render a forgot SAP ID page here
//});

//app.post('/login', (req, res) => {
    //const email = req.body.email;
    //const password = req.body.password;
    //const rememberMe = req.body['remember-me'];

    // Here you can implement your authentication logic.
    // For this example, let's assume the login is successful if both email and password are equal.
   // if (email === password) {
        //if (rememberMe) {
            // If remember me is checked, set a cookie with the email
           // res.cookie('rememberedEmail', email, { maxAge: 900000, httpOnly: true }); // Cookie expires in 15 minutes
      //  } else {
            // If remember me is not checked, clear the rememberedEmail cookie
           // res.clearCookie('rememberedEmail');
       // }
        //res.send(`Welcome, ${email}!`);
   // } else {
       // res.status(400).send('Invalid SAP ID or password.');
   // }
//});

// Serve static files


// Define route for the homepage



// Start the server



// const form = document.querySelector("form"),
//         nextBtn = form.querySelector(".nextBtn"),
//         backBtn = form.querySelector(".backBtn"),
//         allInput = form.querySelectorAll(".first input");


// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));


const multer = require('multer');




// Set storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 10 MB file size limit
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).fields([
    { name: 'highSchoolMarkSheet', maxCount: 1 },
    // Add other document fields here
]);

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /pdf|jpg|png/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check MIME type
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Only PDF, JPG, or PNG files are allowed!');
    }
}

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Upload route
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            if (req.files) {
                // Here you can handle the uploaded files as per your requirement
                res.send('Documents uploaded successfully!');
            } else {
                res.status(400).send('No files were uploaded!');
            }
        }
    });
});



//




// Start server


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const session = require('express-session');

// const app = express();
// const PORT = 3000;

// // Middleware for parsing form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Middleware for serving static files (CSS, client-side JS)
// app.use(express.static(path.join(__dirname, 'public')));

// // Session middleware
// app.use(session({
//     secret: 'secret-key',
//     resave: false,
//     saveUninitialized: true
// }));

// // Route to serve the main page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Route to serve the scholar login page
// app.get('/scholar-login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'scholar-login.html'));
// });

// // Route to serve the admin login page
// app.get('/admin-login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'admin-login.html'));
// });

// // Route to handle admin login form submission
// app.post('/admin-login', (req, res) => {
//     const { email, password, remember } = req.body;

//     // Simple validation (replace with your own logic)
//     if (email === 'admin@example.com' && password === 'password') {
//         // Set session
//         req.session.user = {
//             email: email,
//             remember: remember
//         };
//         res.send('Admin Login successful!');
//     } else {
//         res.send('Invalid email or password');
//     }
// });

// // Route to handle scholar login form submission
// app.post('/scholar-login', (req, res) => {
//     const { email, password, remember } = req.body;

//     // Simple validation (replace with your own logic)
//     if (email === 'scholar@example.com' && password === 'password') {
//         // Set session
//         req.session.user = {
//             email: email,
//             remember: remember
//         };
//         res.send('Scholar Login successful!');
//     } else {
//         res.send('Invalid email or password');
//     }
// });

// // Route for forgot password (placeholder)
// app.get('/forgot-password', (req, res) => {
//     res.send('Forgot password page');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



app.get('/adminlogin',(req,res)=>{

    res.render('adminlogin');

});

app.get('/enlishment',(req,res)=>{

    res.render('enlishment');

});



app.post('/enlishment',(req,res)=>{
    
    // res.status(200).send({ message: 'Login successful' });
    
    const { email, password } = req.body;
     
    if (email === user.username && password === user.password) {
        console.log('hola>>>>>');
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});




app.listen(5000,()=>{
    console.log(`port connected${5000}`);
})
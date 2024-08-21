
const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const cors = require('cors');
const multer = require('multer')




//const User = require('../models/user');



// const collection=require("./src/mongodb")
//const { adder } = require("./mongodb"); // Import the adder function from mongodb.js

//app.get("/add-student", async (req, res) => {
 // try {
   // await adder();
   // res.send("Student added successfully");
  //} catch (err) {
   // res.status(500).send("Error adding student");
  //}
//});

//app.listen(port, () => {
 // console.log(`Server running at http://localhost:${port}/`);
//});


// Middleware setup

//.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// Setup multer for file uploads

app.use(express.static( __dirname));
const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/scholar", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

    const studentSchema = new mongoose.Schema({
        name: String,
        workout: Boolean,
        Studentid: Number,
    });

    const Student = mongoose.model("student", studentSchema);
  const corsOptions = {
    origin: "",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };
const adder = async () => {
    console.log('hola');
    const ss = new Student({
        name: "isha",
        workout: true,
        Studentid: 12334,

        name: "aarti",
        workout: true,
        Studentid: 123564,
    });

  

    await ss.save();
    console.log("Student saved!");
};

// adder();
// adder()

const mydataSchema = new mongoose.Schema({
    status: String,
    profileUpload: Buffer,
    title: String,
    firstname: String,
    middlename: String,
    lastname: String,
    gender: String,
    studentid: Number,
    admissionbatch: String,
    admissiondate: Date,
    applicationno: Number,
    officialemailid: String,
    personalemailid: String,
    mobileno: String,
    dateofbirth: Date,
    aadharnumber: String,
    nationality: String,
    emergencycontactnumber: String,
    religion: String,
    bloodgroup: String,
    passportnumber: String,
    highSchoolDetails: {
        name: String,
        boardName: String,
        stream: String,
        passingyear: String,
        address: String,
        percentagecgpa: String,
        
    },
    intermediateSchoolDetails: {
        name: String,
        boardName: String,
        stream: String,
        passingyear: String,
        address: String,
       
    },
    graduationDetails: {
        collegeuniversityname: String,
        coursename: String,
        specialization: String,
        passingyear: String,
        collegeaddress: String,
        percentagecgpa: String,
      
    },
    postGraduationDetails: {
        collegeuniversityname: String,
        courseName: String,
        specialization: String,
        passingYear: String,
        collegeaddress: String,
        percentagecgpa: String,
       
    },
    fatherDetails: {
        name: String,
        emailid: String,
        phoneno: String,
        profession: String
    },
    motherDetails: {
        name: String,
        email: String,
        phoneno: String,
        profession: String
    },
    presentAddress: {
        address: String,
        street: String,
        landmark: String,
        pincode: String,
        country: String,
        state: String,
        city: String
    },
    permanentAddress: {
        address: String,
        street: String,
        landmark: String,
        pincode: String,
        country: String,
        state: String,
        city: String
    },

    Documentupload:{
        highschoolmarkSheet:Buffer,
        intermediateschoolmarkSheet:Buffer,
        graduationmarksheet:Buffer,
        graduationdegree:Buffer,
        postgraduationmarkSheet:Buffer,
        postgraduationdegree:Buffer,
        postgraduationmigration:Buffer,
    },
    SubmitAllDocuments: { type: Boolean, default: false }
});
const MyData = mongoose.model("MyData", mydataSchema);
const corsoptions = {
    origin: "",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };


  app.post('/registration', async (req, res) => {
      try {
          const data = req.body;
  
          // Validate required fields
          const  {
              //  status,
              //  profileUpload,
                title = '',
                firstname = '',
                middlename = '',
                lastname = '',
                gender = '',
                studentid = '',
                Admissionbatch = '',
                admissiondate = '',
                applicationno = '',
                officialemailid = '',
                personalemailid = '',
                mobileno = '',
                dateofbirth = '',
                aadharnumber = '',
                nationality = '',
                emergencycontactnumber = '',
                religion = '',
                bloodgroup = '',
                Passportnumber = '',
                highSchoolDetails: {
                    name: highschoolName = '',
                    boardName: highSchoolboardName = '',
                    stream: highSchoolstream = '',
                    passingYear: highSchoolpassingyear = '',
                    address: highschooladdress = '',
                    percentageCgpa: highSchoolPercentagecgpa = '',
                },
                intermediateSchoolDetails: {
                    name: intermediateschoolName = '',
                    boardName: intermediateSchoolboardName = '',
                    stream: intermediateSchoolstream = '',
                    passingYear: intermediateSchoolpassingyear = '',
                    address: intermediateschooladdress = '',
                    percentageCgpa: intermediateSchoolpercentagecgpa = '',
                },
                graduationDetails: {
                    collegeUniversityName: graduationcollegeuniversityname = '',
                    courseName: graduationcoursename = '',
                    specialization: graduationspecialization = '',
                    passingYear: graduationpassingyear = '',
                    collegeAddress: graduationcollegeaddress = '',
                    percentageCgpa: graduationPercentagecgpa = '',
                },
                postGraduationDetails: {
                    collegeUniversityName: postGraduationcollegeuniversityname = '',
                    courseName: postGraduationcoursename = '',
                    specialization: postGraduationspecialization = '',
                    passingYear: postGraduationpassingyear = '',
                    collegeAddress: postGraduationcollegeaddress = '',
                    percentageCgpa: postGraduationPercentagecgpa = '',
                },
                fatherDetails: {
                    name: fathername = '',
                    emailId: fatheremailid = '',
                    phoneNo: fatherphoneno = '',
                    profession: fatherprofession = '',
                },
                motherDetails: {
                    name: mothername ='',
                    emailId: motheremail= '',
                    phoneNo: motherphoneno= '',
                    profession: motherprofession = '',
                },
                presentAddress: {
                    address: presentaddress = '',
                    street: presentstreet = '',
                    landmark: presentlandmark = '',
                    pincode: presentpincode = '',
                    country: presentcountry = '',
                    state: presentstate = '',
                    city: presentcity = '',
                },
                permanentAddress: {
                    address: permanentaddress = '',
                    street: permanentstreet = '',
                    landmark: permanentlandmark = '',
                    pincode: permanentpincode = '',
                    country: permanentcountry = '',
                    state: permanentstate = '',
                    city: permanentcity = '',
                },
                documentuploads: {
                    highschoolmarkSheet = '',
                    intermediateschoolmarksheet = '',
                    graduationmarksheet = '',
                    graduationdegree = '',
                    postgraduationmarksheet='',
                    postgraduationdegree = '',
                    postgraduationmigration = '',
                },
                SubmitAllDocuments
            } = req.body;
            
        
            
        
if (  !title || !firstName ||  !middleName || !lastName || !gender || !studentid || !Admissionbatch || !admissiondate || 
    !applicationno || !officialemailid || !personalemailid || !mobileno || !dateofbirth || !aadharnumber||
    !nationality || !emergencycontactnumber || !religion || !bloodgroup || !Passportnumber ||
    !highschoolName || !highSchoolboardName || !highSchoolstream || !highSchoolpassingyear || !highschooladdress || !highSchoolPercentagecgpa ||
    !intermediateschoolName || !intermediateSchoolboardName || !intermediateSchoolstream || !intermediateSchoolpassingyear || !intermediateschooladdress || !intermediateSchoolpercentagecgpa ||
    !graduationcollegeuniversityname || !graduationcoursename || !graduationspecialization || !graduationpassingyear || !graduationcollegeaddress || !graduationPercentagecgpa ||
    !postGraduationcollegeuniversityname || !postGraduationcoursename || !postGraduationspecialization || !postGraduationpassingyear || !postGraduationcollegeaddress || !postGraduationPercentagecgpa ||
    !fathername || !fatheremailid || !fatherphoneno || !fatherprofession ||!mothername || !motheremail || !motherphoneno || !motherprofession ||
    !presentaddress || !presentstreet || !presentlandmark || !presentpincode || !presentcountry || !presentstate || !presentcity ||
    !permanentaddress || !permanentstreet || !permanentlandmark || !permanentpincode || !permanentcountry || !permanentstate || !permanentcity || !highschoolmarkSheet || !intermediateschoolmarksheet || !graduationmarksheet ||  !graduationdegree   || !postgraduationmarksheet|| !postgraduationdegree || !postgraduationmigration
) {
    return res.status(400).send({ message: 'Missing required fields' });
}
      
        const existingUser = await mydata.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ message: 'Email already registered' });
        }


        const newUser = new MyData({
           //  status,
              //  profileUpload,
              title,
              firstname ,
              middlename ,
              lastname ,
              gender,
              studentid,
              Admissionbatch,
              admissiondate ,
              applicationno ,
              officialemailid ,
              personalemailid ,
              mobileno ,
              dateofbirth ,
              aadharnumber ,
              nationality,
              emergencycontactnumber ,
              religion ,
              bloodgroup ,
              Passportnumber ,
              highSchoolDetails: {
                  name: highschoolName ,
                  boardName: highSchoolboardName ,
                  stream: highSchoolstream ,
                  passingYear: highSchoolpassingyear ,
                  address: highschooladdress ,
                  percentageCgpa: highSchoolPercentagecgpa ,
              },
              intermediateSchoolDetails: {
                  name: intermediateschoolName ,
                  boardName: intermediateSchoolboardName ,
                  stream: intermediateSchoolstream ,
                  passingYear: intermediateSchoolpassingyear ,
                  address: intermediateschooladdress ,
                  percentageCgpa: intermediateSchoolpercentagecgpa ,
              },
              graduationDetails: {
                  collegeUniversityName: graduationcollegeuniversityname ,
                  courseName: graduationcoursename ,
                  specialization: graduationspecialization,
                  passingYear: graduationpassingyear ,
                  collegeAddress: graduationcollegeaddress ,
                  percentageCgpa: graduationPercentagecgpa ,
              },
              postGraduationDetails: {
                  collegeUniversityName: postGraduationcollegeuniversityname ,
                  courseName: postGraduationcoursename ,
                  specialization: postGraduationspecialization ,
                  passingYear: postGraduationpassingyear,
                  collegeAddress: postGraduationcollegeaddress ,
                  percentageCgpa: postGraduationPercentagecgpa ,
              },
              fatherDetails: {
                  name: fathername ,
                  emailId: fatheremailid ,
                  phoneNo: fatherphoneno ,
                  profession: fatherprofession ,
              },
              motherDetails: {
                  name: mothername ,
                  emailId: motheremail,
                  phoneNo: motherphoneno,
                  profession: motherprofession ,
              },
              presentAddress: {
                  address: presentaddress ,
                  street: presentstreet ,
                  landmark: presentlandmark ,
                  pincode: presentpincode ,
                  country: presentcountry ,
                  state: presentstate ,
                  city: presentcity ,
              },
              permanentAddress: {
                  address: permanentaddress ,
                  street: permanentstreet ,
                  landmark: permanentlandmark ,
                  pincode: permanentpincode,
                  country: permanentcountry,
                  state: permanentstate ,
                  city: permanentcity ,
              },
              documentuploads: {
                  highschoolmarkSheet ,
                  intermediateschoolmarksheet ,
                  graduationmarksheet ,
                  graduationdegree,
                  postgraduationmarksheet,
                  postgraduationdegree ,
                  postgraduationmigration ,
              },
              SubmitAllDocuments
        });

      
    
        
        await newUser.save();
        res.status(200).send({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});



const tempelatePath=path.join(__dirname,'templets');
const publicPath = path.join(__dirname, 'public');
const bodyParser = require('body-parser');
const { builtinModules } = require("module");
// const authRoutes = require('./routes/auth');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/auth', authRoutes);




app.use(express.json());
app.set("view engine","hbs");
app.set("views",tempelatePath);
app.use(express.static(path.join(__dirname, 'public')));


//const user = {
 //username: 'aarti@gmail.com',
 ////password :'123456'
//}


//const confirm = {
   // nepasss: '123456',
   // confirmpass :'123456'
  // }
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



// Define Schema
const PupilsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    hasChangedPassword: { type: Boolean, default: false },
    hasAccessedChangePasswordPage: { type: Boolean, default: false }
});

const Pupils = mongoose.model('Pupils', PupilsSchema);

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const pupil = await Pupils.findOne({ email});
        if (!pupil) {
            return res.status(404).send({ message: 'Pupil not found' });
        }

        const match = await bcrypt.compare(password, pupil.password);
        if (!match) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ message: 'Server error' });
    }
});
fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'aarti@gmail.com', password: '123456' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


// app.get('/register',(req,res)=>{
//     res.render('home');
//   });

//app.post('/changepassword',(req,res)=>{
    
    // res.status(200).send({ message: 'Login successful' });
    
   // const { username, password } = req.body;
     
    //if (username === user.username && password === user.password) {
        //console.log('hola>>>>>');
       // res.status(200).send({ message: 'Login successful' });
    //} else {
       // res.status(401).send({ message: 'Invalid username or password' });
   // }
//});



app.get('/home',(req,res)=>{

    res.render('home');

})

app.get('/forgot-password',(req,res)=>{
   // res.status(200).json({success:"true"})
    res.render('forgotpass');

})

app.get('/OTP',(req,res)=>{
    // res.status(200).json({success:"true"})
     res.render('otp');
 
 })
//app.post('/home',(req,res)=>{
    
    // res.status(200).send({ message: 'Login successful' });
    
  //  const { newpass, confirmpass } = req.body;
     
   // if (newpass === confirm.nepasss && confirmpass === confirm.confirmpass) {
      //  console.log('hola>>>>>');
       // res.status(200).send({ message: 'Login successful' });
   // } else {
      //  res.status(401).send({ message: 'Invalid username or password' });
   //// }
//});

app.get('/registration',(req,res)=>{
    
   res.render('registration')
});

app.get('/programdetails',(req,res)=>{
    
    res.render('programdetails')
 });


//const multer = require('multer');


//const storage = multer.diskStorage({
   // destination: function(req, file, cb) {
//cb(null, 'uploads/');
   // },
   // filename: function(req, file, cb) {
    //    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   // }
//});

//const upload = multer({
  //  storage: storage,
   // limits: { fileSize: 10000000 }, 
    //fileFilter: function(req, file, cb) {
   //     checkFileType(file, cb);
  //  }
//}).fields([
   // { name: 'highSchoolMarkSheet', maxCount: 1 },
//]);


function checkFileType(file, cb) {
    
    const filetypes = /pdf|jpg|png/;
    
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Only PDF, JPG, or PNG files are allowed!');
    }
}


app.use(express.static(path.join(__dirname, 'public')));

// Upload route
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            if (req.files) {
                res.send('Documents uploaded successfully!');
            } else {
                res.status(400).send('No files were uploaded!');
            }
        }
    });
});


app.get('/adminform',(req,res)=>{

    res.render('adminform');

});

app.get('/adminlogin',(req,res)=>{

    res.render('adminlogin');

});

app.get('/enlishment',(req,res)=>{

    res.render('enlishment');

});

app.get('/adminform',(req,res)=>{

    res.render('adminform');

});
//app.get('/forgot-password',(req,res)=>{

    //res.render('forgotpass');

//});




const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
    
});

const Admin = mongoose.model('Admin', AdminSchema);


app.post('/adminlogin.hbs', (req, res) => {
    const { email, password } = req.body;
    if (email === 'BhartiSingh@gmail.com' && password === 'Bharti12345') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
app.post('/enlishment', async (req, res) => {
    try {
        const { email, password } = req.body;

        const adimnn = await Admin.findOne({ email });

        if (!adimnn) {
            return res.status(404).send({ message: 'Admin not found' });
        }

        if (email === adimnn.email && password === adimnn.password) {
            console.log('Login successful');
            return res.status(200).send({ message: 'Login successful' });
        } else {
            return res.status(401).send({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Server error' });
    }
});

const router = express.Router();

// Generate and send OTP


// router.post('/forgot-password', async (req, res) => {
//   const { email } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.status(404).send('User not found');
//   }

//   const otp = crypto.randomBytes(3).toString('hex');
//   const otpExpiration = Date.now() + 3600000; // 1 hour

//   user.otp = otp;
//   user.otpExpiration = otpExpiration;

//   await user.save();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'BhartiSingh@gmail.com',
//       pass: 'Bharti12345',
//     },
//   });

//   const mailOptions = {
//     from: 'BhartiSingh@gmail.com',
//     to: user.email,
//     subject: 'Password Reset OTP',
//     text: `Your OTP is ${otp}. It will expire in 1 hour.`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('OTP sent to your email');
//   });
// });

// Verify OTP and reset password
router.post('/reset-password', async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (user.otp !== otp || user.otpExpiration < Date.now()) {
    return res.status(400).send('Invalid or expired OTP');
  }

  user.password = newPassword;
  user.otp = undefined;
  user.otpExpiration = undefined;

  await user.save();

  res.status(200).send('Password reset successfully');
});

module.exports = router;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));







const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    createdAt: { type: Date, expires: '5m', default: Date.now }
});
const OTP = mongoose.model('OTP', otpSchema);


app.get('/forgotpass',(req,res)=>{
    res.render('forgotpass');
})
app.post('/forgotpass', async(req, res) => {
    // const {email} = req.body;
    // Replace with your forgot password logic
    // res.json({ message: 'OTP sent to your email address' });
 const email = "aartirawat824@gmail.com";

    // try {
    //     console.log('email:::::::::',email);
    //     const user = await admin.findOne({ email });
    //     console.log('user:::::',user);
    //     if (user) {
    //         res.status(200).json({ message: 'Email exists' });
    //         // send otp ---- write code for sendiing opt in this email.
    //     } else {
    //         res.status(404).json({ message: 'Email not found' });
    //     }
    // } catch (error) {
    //     res.status(500).json({ message: 'Server error', error });
    // }


    const otp = otpGenerator.generate(4, { digits: true, alphabets: false, upperCase: false, specialChars: false });

    try {
        console.log('otp',otp,email);
        
        await OTP.create({ email, otp });

     
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host:"smtp.gmail.com",
            port:587,
            auth: {
                user: 'rawattaarti@gmail.com',
                pass: 'ywra xybv nosr impw'
            },
            logger: true,  
            debug: true 
        });

        await transporter.sendMail({
            from: 'rawattaarti@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otp}`
        });
      console.log('hola::::::::::::::::::::::::::');

        res.status(200).send('OTP sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending OTP');
    }

});


app.post('/verify', async (req, res) => {
    const { email, otp } = req.body;

    console.log('email---', email, otp);

    try {
        const otpRecord = await OTP.find();
        const dataone = otpRecord.filter((data)=>{
           return data?.email === "aartirawat824@gmail.com";

        });
        console.log('dataone--------------',dataone);

        console.log('dataopti',dataone?.[0]?.otp);


        if (dataone && dataone?.[0]?.otp === otp) {
            console.log("OTP verified successfully");
            res.status(200).send('OTP verified successfully');
        } else {
            console.log("Invalid OTP");
            res.status(400).send('Invalid OTP');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error verifying OTP');
    }
});



// Serve HTML files
//app.get('/otp', (req, res) => {
  //  res.render('otp');
//});

//app.listen(PORT, () => {
  // console.log(`Server is running on http://localhost:${PORT}`);
//});

// Schemas and Models
//const UserSchema = new mongoose.Schema({
   //email: { type: String, required: true, unique: true },
   // password: { type: String, required: true },
   // otp: String,
   // otpExpiration: Date,
//});

//const User = mongoose.model('User', userSchema);

// Routes
//app.post('/verify-otp', (req, res) => {
  // const { otp } = req.body;
  // const CORRECT_OTP = '1111';
 //if (otp === CORRECT_OTP) {
     //  res.json({ message: 'OTP Verified Successfully!' });
    //} else {
        //res.json({ message: 'Incorrect OTP, Please Try Again.' });
   // }
//});


// app.use(bodyParser.json());
// app.use(cors());
// MongoDB connection




// // Define schema and model for OTP
// const otpSchema = new mongoose.Schema({
//     email: String,
//     otp: String,
//     createdAt: { type: Date, expires: '5m', default: Date.now }
// });

// const OTP = mongoose.model('OTP', otpSchema);

// // Generate OTP and send email
// app.post('/generate-otp', async (req, res) => {
//     const { email } = req.body;

//     const otp = otpGenerator.generate(4, { digits: true, alphabets: false, upperCase: false, specialChars: false });

//     try {
//         await OTP.create({ email, otp });

//         // Send OTP via email (replace with your email sending logic)
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'BhartiSingh@gmail.com',
//                 pass: 'Bharti12345'
//             }
//         });

//         await transporter.sendMail({
//             from: 'your-mail@gmail.com',
//             to: email,
//             subject: 'OTP Verification',
//             text: `Your OTP for verification is: ${otp}`
//         });

//         res.status(200).send('OTP sent successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error sending OTP');
//     }
// });

// // Verify OTP
// app.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const otpRecord = await OTP.findOne({ email, otp }).exec();

//         if (otpRecord) {
//             res.status(200).send('OTP verified successfully');
//         } else {
//             res.status(400).send('Invalid OTP');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error verifying OTP');
//     }
// });



app.listen(5000,()=>{
    console.log(`port connected${5000}`);


});



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
//const upload = multer();
const passport = require("passport");
const passportLocalMongoose 
    = require("passport-local-mongoose");
app.use(express.static( __dirname));
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect("mongodb://127.0.0.1:27017/scholar", { useNewUrlParser: true, useUnifiedTopology: true  ,   serverSelectionTimeoutMS: 30000, })
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
        schoolName: String,
        programName: String,
        academicYear: String,
        status: Boolean
    });

   
    const Student = mongoose.model("student", studentSchema);
  const corsOptions = {
    origin: "",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.get('/students', async (req, res) => {
    const { schoolName, programName, academicYear } = req.query;
    const query = {};

    if (schoolName) query.schoolName = schoolName;
    if (programName) query.programName = programName;
    if (academicYear) query.academicYear = academicYear;

    try {
        const students = await Student.find(query);
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



const adder = async () => {
    console.log('hola');
    const students = [
        {
            name: "Isha",
            workout: true,
            Studentid: 12345,
            schoolName: "School of Advanced Engineering",
            programName: "PhD (Chemistry)",
            academicYear: "2023-2024",
            active: true
        },
        {
            name: "Aarti",
            workout: true,
            Studentid: 123345,
            schoolName: "School of Health Sciences",
            programName: "PhD (Biotechnology)",
            academicYear: "2022-2023",
            active: true
        }
    ];

    await Student.insertMany(students);
    console.log("Student saved!");
};

// adder();
// adder()

app.get('/mainpage', (req, res) => {
    res.render('mainpage');
  });


app.get('/adminform',(req,res)=> { 
    res.render('adminform');

});

app.get('/studentData', async (req, res) => {
    try {
        const students = await Registration.find();  
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching student data' });
    }
});





app.get('/getStudentById/:studentId', async (req, res) => {
    const  studentId  =  req.params.studentId;

    try {
        const student = await Registration.findOne({ studentId: studentId });
        if (student) {

            console.log('data------------',student)
            res.json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Server error' });
    }; 
});

app.get('/view-student/:id', async (req, res) => {
    try {
      const student = await Registration.findById(req.params.id);
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.render('view-student', { student });
    } catch (err) {
      res.status(500).send('Error retrieving student data');
    }
  });
  
app.use(express.json());
//   app.post('/registration', async (req, res) => {
//       try {
//         const formObject = req.body;

//         console.log('hoal------------',formObject);


//       }
//       catch(e){
//         console.log('data---',e);
//       }

//     });

    app.post('/registration',  async (req, res)  => {
        try {
          const registrationData = new Registration(req.body); 
          await registrationData.save(); 
          res.status(201).send({ message: 'Registration successful' });
        } catch (error) {
          res.status(500).send({ message: 'Error saving registration data', error });
        }
      });

  
    

const registrationSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    studentId: String,
    admissionBatch: String,
    admissionDate: String,
    applicationNo: String,
    officialEmailId: String,
    personalEmailId: String,
    mobileNo: String,
    dateOfBirth: String,
    aadharNumber: String,
    nationality: String,
    emergencyContactNumber: String,
    religion: String,
    bloodGroup: String,
    passportNumber: String,
    highschoolName: String,
    highschoolboardName: String,
    highschoolstream: String,
    highschoolpassingYear: String,
    highschoolschoolAddress: String,
    highschoolpercentageCgpa: String,
    intermediateschoolName:String,
    intermediateboardName:String,
    intermediatestream:String,
    intermediatepassingyear:String,
    intermediateschoolAddress:String,
    intermediatepercentageCgpa:String,
    GraduationcollageUniversityName: String, 
    graduationcourseName: String,
    graduationspecilatization: String,
    graduationpassingyear:String,
   graduationcollageaddress: String,
    graduationPercentagecgpa:String,
    postgraduationUniversityName:String,
    postgraduationcoursename:String,
    postgraduationspecialization:String,
    postgraduationpassingyear:String,
    postgraduationcollageAddress:String,
    postgraduationPercentagecgpa:String,
    fatherName: String,
     fatherEmailId: String,
     fatherPhoneNo: String,
     fatherProfession: String,
    motherName: String,
     motherEmail: String,
     motherPhoneNo: String,
     motherProfession: String,
     presentAddress: String,
     presentstreet: String,
     presentLandmark:String,
     presentpincode:String,
     presentCountry:String,
     presentstate:String,
     presentcity:String,
     permanentaddress:String,
     permanentstreet:String,
     permanentlandmark:String,
     permanentpincode:String,
     permanentcountry:String,
    permanentstate:String,
    permanentcity:String,
    highschoolMarksheet: Object,
   intermediateSchoolMarksheet: Object,
     graduationMarksheet: Object,
     graduationDegree: Object,
     postgraduationMarksheet: Object,
    postgraduationDegree: Object,
     postgraduationMigration: Object,


});

  
  const Registration = mongoose.model('Registration', registrationSchema);
  module.exports = Registration;




  app.get('/registrationform2/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        console.log('Fetching student with ID:', studentId); 
        const student = await Registration.findById(studentId);

        if (!student) {
            console.log('Student not found');
            return res.status(404).send('Student not found');
        }

        console.log('Student found:', student); 
        res.render('registrationform2', { student });
    } catch (error) {
        console.error('Error fetching student data:', error);
        res.status(500).send('Error fetching student data');
    }
});


  app.post('/update-student/:id', async (req, res) => {
    try {
        const studentId = req.params.id; 
        const updatedData = req.body;

        await Registration.findByIdAndUpdate(studentId, updatedData, { new: true }); 

        res.redirect('/home');
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).send('Error updating student');
    }
});
///////////////////////////////////////////////////////////////

  const PhDSchema = new mongoose.Schema({
    profileImage: String,   
    studentId:String,    
    session: String,           
    year: Number,               
    fellowship: String,        
    dateOfJoining: Date,          
    partTimeFullTime: String,   
    programName: String,          
    schoolName: String,          
    supervisor: String,        
    scholarStage: String,         
    srcDrC: String,             
    examination: String         
});

const PhD = mongoose.model("PhD", PhDSchema);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({ storage: storage });
app.post('/programdetails', upload.single('profileImage'), async (req, res) => {
    try {
        const newPhD = new PhD({
            profileImage: req.file ? req.file.path : '',
            studentId:req.body.studentId,
            session: req.body.session,
            year: req.body.year,
            fellowship: req.body.fellowship,
            dateOfJoining: req.body.dateOfJoining,
            partTimeFullTime: req.body.partTimeFullTime,
            programName: req.body.programName,
            schoolName: req.body.schoolName,
            supervisor: req.body.supervisor,
            scholarStage: req.body.scholarStage,
            srcDrC: req.body.srcDrC,
            examination: req.body.examination
        });

        await newPhD.save();
        res.json({ success: true, message: "Scholar data saved successfully!" });
    } catch (error) {
        console.error("Error saving PhD data:", error);
        res.status(500).json({ success: false, message: "Error saving scholar data" });
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////


const student2Schema = new mongoose.Schema({
    studentId: String,
   session: String,
    supervisor: String,
});

const corsoptions = {
    origin: "*", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


const students2Schema = new mongoose.Schema({
    studentId: String,
    session: String,
    supervisor: String,
});
const Corsoptions = {
    origin: "*", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


const student2 = mongoose.model("student2", students2Schema);


app.get('/students2', async (req, res) => {
    const { session } = req.query;
    const query = session ? { session } : {};

    try {
        const students2 = await student2.find(query);  
        res.json(students2);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const GuideSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firsttime: { type: Boolean, default: true },
});

const Student3Schema = new mongoose.Schema({
    name: { type: String, required: true },
    stage: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    supervisor: { type: String, required: true } ,
});

const Guide = mongoose.model('Guide', GuideSchema);
const Student3 = mongoose.model('Student3', Student3Schema);

// module.exports = { Guide, Student3 };

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}));


app.post('/guideview', async (req, res) => {
    const { email, password } = req.body; 

    console.log('Login Attempt:', email, password);

    try {
        const user = await Guide.findOne({ email });

        if (user && password === user.password) {
            // Find students linked to this supervisor's email
            const students = await Student3.find({ supervisor: email })
            if (students.length > 0) {
                res.json({ 
                    success: true, 
                    message: 'Login successful',
                    supervisorName: students.supervisorName, 
                    students: students 
                });
            } else {
                res.json({ 
                    success: true, 
                    message: 'Login successful, but no students found',
                    supervisorName: "Unknown",
                    students: []
                });
            }
        } else {
            res.json({ success: false, message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
});


app.get('/guidenavigate', async (req, res) => {
    try {
        res.render('guide');

        // const students = await Student3.find(); // Fetch all students
        // res.json({ students });
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.get('/guide', async (req, res) => {
    try {
        const email = req.query.email;
     
        const students = await Student3.find({ supervisor: email }); // Fetch all students
        res.json({ students });
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//   app.get('/registrationform2/:id', async (req, res) => {
//     try {
//         const studentId = req.params.id;
//         const student = await Registration.findById(studentId);
  
//         if (!student) {
//             console.log('Student not found');
//             return res.status(404).send('Student not found');
//         }

//         console.log('Student found:', student); // Add this line for debugging
//         res.render('registrationform2', { student });
//     } catch (error) {
//         console.error('Error fetching student data:', error); // Add this line for debugging
//         res.status(500).send('Error fetching student data');
//     }
//});


app.set("view engine","hbs");
//app.set("views",tempelatePath);
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

app.get("/programtable",(req,res)=>{
    res.render('programtable');
    });
    

app.get("/adminlogin",(req,res)=>{
    res.render('adminlogin')  
    });


app.get('/changepassword',(req,res)=>{
  res.render('changepassword');
});


app.get('/login',(req,res)=>{
    res.render('login');
  });


  const tempelatePath = path.join(__dirname, 'templets')
  const publicPath = path.join(__dirname, '../public')
  console.log(publicPath);
  
  app.set('view engine', 'hbs')
  app.set('views', tempelatePath)
  app.use(express.static(publicPath))
 



  const logInSchema=new mongoose.Schema({
name: String,
password: String,
firsttime: Boolean 
});

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection
app.use(express.json()); 


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Request body:', req.body);

        const user = await LogInCollection.findOne({ name: username });
        console.log('Fetched user:', user);
        if (!user) {
            return res.status(404).send("No data found");
        }
        if (user.password === password) {
            const isFirstTime = user.firsttime; 
            console.log('First time login status:', isFirstTime);
            return res.status(200).json({ "firsttime": isFirstTime });
        } else {
            return res.status(400).send("Incorrect password");
        }
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).send("Internal server error");
    }
});


app.post('/changepassword', async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        mongoose.set('useFindAndModify', true);
        console.log('data----',email,newPassword);

       
        const userExists = await LogInCollection.findOne({ name: email });
console.log('User exists:', userExists);
if (!userExists) {
    return res.status(404).json({ message: 'User not found' });
}
        const result = await LogInCollection.findOneAndUpdate(
            { name: email },
            { $set: { password: newPassword, firsttime: false } },
            { new: true }
        );

        console.log('data5454----',result)
            
                    if (result) {
                        return res.status(200).json({ message: 'Password updated successfully' });
                    } else {
                        return res.status(404).json({ message: 'User not found' });
                    }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Server error' });
    }
});
    

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

app.get('/registration',(req,res)=>{
    
   res.render('registration')
});

app.get('/programdetails',(req,res)=>{
    
    res.render('programdetails')
 });


 app.get('/guideview',(req,res)=>{
    
    res.render('guideview')
 });


 app.get('/registrationform2',(req,res)=>{
    
    res.render('registrationform2')
 });
 

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

app.get('/paperpublication',(req,res)=>{

    res.render('paperpublication');

});





app.get('/guide',(req,res)=>{

    res.render('guide');

});

app.get('/adminform',(req,res)=>{

    res.render('adminform');

});

app.get('/programdetail2',(req,res)=>{

    res.render('programdetail2');

});


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

// app.use(bodyParser.json());
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



const publicationSchema = new mongoose.Schema({
    papers: [String],
    journals: [String],
    publicationDate: Date,
    createdAt: { type: Date, default: Date.now }
});

const Publication = mongoose.model('Publication', publicationSchema);





// File Upload Configuration
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const Upload = multer({ Storage });

// app.post('/submit', upload.fields([
//     { name: 'paper', maxCount: 5 },
//     { name: 'journal', maxCount: 5 }
// ]), async (req, res) => {
//     try {
//         const paperFiles = req.files['paper']?.map(file => file.path) || [];
//         const journalFiles = req.files['journal']?.map(file => file.path) || [];
//         const publicationDate = new Date(req.body.date);

//         const newPublication = new Publication({
//             papers: paperFiles,
//             journals: journalFiles,
//             publicationDate
//         });

//         await newPublication.save();
//         res.status(201).json({ message: 'Publication saved successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
app.post('/submit', upload.fields([
    { name: 'paper', maxCount: 5 },
    { name: 'journal', maxCount: 5 }
]), async (req, res) => {
    try {
        console.log('Uploaded files:', req.files);  // Check if files are uploaded
        console.log('Form data:', req.body);  // Check the form data
        
        const paperFiles = req.files['paper'] ? req.files['paper'].map(file => file.path) : [];
        const journalFiles = req.files['journal'] ? req.files['journal'].map(file => file.path) : [];

        const publicationDate = new Date(req.body.date);
        if (isNaN(publicationDate)) {
            return res.status(400).json({ error: 'Invalid date format' });
        }

        const newPublication = new Publication({
            papers: paperFiles,
            journals: journalFiles,
            publicationDate
        });

        await newPublication.save();

        res.status(201).json({ message: 'Publication saved successfully' });
    } catch (error) {
        console.error('Error saving publication:', error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(5000,()=>{
    console.log(`port connected${5000}`);


}); 
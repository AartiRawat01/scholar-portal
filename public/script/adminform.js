function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const studentId = getQueryParam('id');
const page = getQueryParam('page').trim();

console.log('Student ID:', studentId);
console.log('Page:', page);
const containerdiv = document.getElementById("thecontainer");
async function initialcall(studentId) {
    console.log('Fetching data for studentId:', studentId);
    const response = await fetch(`/getStudentById/${studentId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response data:', data); 

    return data;
}

initialcall(studentId).then(student => {

    console.log('page----',page)

       containerdiv.innerHTML =   `
                         
      
        <header>Scholar Profile</header></br>
        <img src="/images/logo.png" alt="Logo" class="logo">
        <form id="editStudentForm" action="/update-student" method="POST" enctype="multipart/form-data">
        <div class="fields">

            <div class="input-field">
                <label for="status">SELECT YOUR STATUS:</label>
                <select id="status" name="status">
                    <option value="active">Active</option>
                    <option value="withdraw">Withdraw</option>
                    <option value="de-registered">De-Registered</option>
                    <option value="Deceased">Deceased</option>
                </select></br></br>
              



                <div class="Image Upload">
                    <span class="image"><b><u> IMAGE UPLOAD<u></b></span></br></br>
                    <img id="profileImage" src="/images/images.png" width="120px" alt="Profile Image"
                        onerror="this.onerror=null; this.src='path/to/default-image.jpg';"></br>
                    <input type="file" id="imageInput" accept="image/*">


                </div>

                <form id="editStudentForm" action="/update-student" method="POST">
                    <div class="form first">
                        <div class="details personal">
                            <span class="title">
                                <h3><b><u>BASIC INFORMATION</u></b></h3>
                            </span>

                              <div class="fields">
                                <div class="input-field">
                      <label for="TITLE" >TITLE</label>
                                    <select id="title" name="title">
                                        <option value="mr">Mr</option>
                                        <option value="ms">Ms</option>
                                        <option value="mrs">Mrs</option>
                                        <option value="miss">Miss</option>
                                    </select>

                                </div>

                    <div class="input-field">
                <label for="FIRSTNAME" class="required">FIRST NAME</label>
                      <input type="text" id="firstName" name="firstName" 
                     placeholder=" ENTER YOUR FIRST NAME"  value="${student.firstName}">
                                </div>


                                <div class="input-field">
                                <label for="MIDDLENAME">MIDDLE NAME</label>
                    <input type="text" id="middleName" name="middleName" placeholder="MIDDLE NAME"   value="${student.middleName}">

                                </div>
                                     
                                <div class="input-field">
                                    <label for="LASTNAME">LAST NAME</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="LAST NAME"  value="${student.lastName}" >

                                </div>


                                <div class="input-field">
                                    <label for="GENDER">GENDER</label>
                                    <select id="gender" name="gender"      value="${student.gender}"  required>
                                        <option disabled selected>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                   <label for="STUDENTID">STUDENT ID</label>
                                    <input type="text" id="studentId" name="studentId" placeholder="STUDENT ID"   value="${student.studentId}">
                                </div>


                                <div class="input-field">
                                  <label for="ADMISSIONBATCH">ADMISSION BATCH</label>
                                    <input type="text"  name="admissionBatch"
                                        placeholder="ADMISSION BATCH"   value="${student.admissionBatch}">

                                </div>

                                <div class="input-field">
                                     <label for="ADMISSIONDATE">ADMISSION DATE</label>
                                    <input type="text" id="admissionDate" name="admissionDate"
                                        placeholder="ADMISSION DATE"    value="${student.admissionDate}">
                                </div>

                                <div class="input-field">
                                     <label for="APPLICATIONNO">APPLICATION NO</label>
                                    <input type="text" id="applicationNo" name="applicationNo"
                                        placeholder="APPLICATION NUMBER"  value="${student.applicationNo}">
                                </div>

                                <div class="input-field">
                                    <label for="OFFICIALEMAILID" class="required">OFFICIAL EMAIL ID</label>
                                    <input type="text" id="officialEmailId" name="officialEmailId"
                                        placeholder="OFFICIAL EMAIL ID"  value="${student.officialEmailId}">
                                </div>

                                <div class="input-field">
                             <label for="PERSONALEMAILID" class="required">PERSONAL EMAIL ID</label>
                                    <input type="text" id="personalEmailId" name="personalEmailId"
                                        placeholder="PERSONAL EMAIL ID"  value="${student.personalEmailId}">
                                </div>

                                <div class="input-field">
                 <label for="MOBILENO" class="required">MOBILE NO</label>
                <input type="text" id="mobileNo" name="mobileNo" placeholder="MOBILE NO"   value="${student.mobileNo}">
                                </div>

                                <div class="input-field">
                                     <label for="DATEOFBIRTH" class="required">DATE OF BIRTH</label>
                                    <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder="DATE OF BIRTH"    value="${student.dateOfBirth}">
                                </div>

                                <div class="input-field">
                                     <label for="AADHARNUMBER" class="required">AADHAR NUMBER</label>
                                    <input type="text" id="aadharNumber" name="aadharNumber"
                                        placeholder="AADHAR NUMBER"  value="${student.aadharNumber}">
                                </div>


                                <div class="input-field">
                                     <label for="NATIONALITY" class="required">NATIONALITY</label>
                                    <input type="text" id="nationality" name="nationality" placeholder="NATIONALITY"   value="${student.nationality}">
                                </div>

                                <div class="input-field">
                                    <label for="EMERGENCYCONTACTNUMBER">EMERGENCY CONTACT NUMBER</label>  
                                       <input type="text" id="emergencyContactNumber" name="emergencyContactNumber"
                                        placeholder="EMERGENCY CONTACT NUMBER"  value="${student.emergencyContactNumber}">
                                </div>

                                <div class="input-field">
                         <label for="RELIGION" >RELIGION</label>
                                    <select id="religion" name="religion"   value="${student.religion}">
                                        <option value="christianity">Christianity</option>
                                        <option value="islam">Islam</option>
                                        <option value="hinduism">Hinduism</option>
                                        <option value="buddhism">Buddhism</option>
                                        <option value="judaism">Judaism</option>
                                        <option value="sikhism">Sikhism</option>
                                        <option value="Jainism">Jainism</option>
                                        <option value="Chinese folk religion">Chinese folk religion</option>
                                        <option value="Syncretic"> Syncretic</option>
                                        <option value="Baháʼí Faith">Baháʼí Faith</option>
                                        <option value="Folk religions">Folk religions</option>
                                        <option value="Aeta religion">Aeta religion</option>
                                        <option value="Scientology">Scientology</option>
                                        <option value="Confucianism">Confucianism</option>
                                        <option value="Shinto">Shinto</option>
                                        <option value="Atheists">Atheists</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                      <label for="BLOODGROUP">BLOOD GROUP</label>
                                    <input type="text" id="bloodGroup" name="bloodGroup" placeholder="BLOOD GROUP"  value="${student.bloodGroup}">
                                </div>

                                <div class="input-field">
                                      <label for="PASSPORTNUMBER">PASSPORT NUMBER</label>
                                    <input type="text" id="passportNumber" name="passportNumber"
                                        placeholder="PASSPORT NUMBER"  value="${student.passportNumber}">
                                </div>
                            </div></br></br>


                              <header>
                                <h4><b><u>ACADEMICS</u></b></h4></br></br></br>
                                 
                            </header>
                            <div class="form first">
                                <div class="Academics Details">
                                    <span class="title">
                                <label for="HighSChooL" class="required">HIGH SCHOOL</label>
                                    
                                    </span>

                                    <div class="fields">
                                        <div class="input-field">
                                             <label for="HIGHSCHOOLNAME"> SCHOOL</label>
                                            <input type="text" id="highschoolName" name="highschoolName"
                                                placeholder="SCHOOL NAME"   value="${student.highschoolName}">
                                        </div>

                                        <div class="input-field">
                                            <label for="HIGHSCHOOLBOARDNAME"> BOARD </label>
                                            <input type="text" id="highschoolboardName" name="highschoolboardName" placeholder="BOARD NAME"  value="${student.highschoolboardName}">
                                        </div>

                                        <div class="input-field">
                                            <label for="HIGHSCHOOLSTREAM">  STREAM</label>
                                            <input type="text" id="highschoolstream" name="highschoolstream" placeholder="STREAM"   value="${student.highschoolstream}">

                                        </div>

                                        <div class="input-field">
                                            <label for="HIGHSCHOOLPASSINGYEAR"> PASSING YEAR</label>
                                            <input type="text" id="highschoolpassingYear" name="highschoolpassingYear"
                                         placeholder="PASSING YEAR" value="${student.highschoolpassingYear}">

                                        </div>

                                        <div class="input-field">
                                            <label for="HIGHSCHOOLSCHOOLADDRESS">  ADDRESS</label>
                                            <input type="text" id="highschoolschoolAddress" name="highschoolschoolAddress"
                                                placeholder="SCHOOL ADDRESS"   value="${student.highschoolschoolAddress }">

                                        </div>

                                     <div class="input-field">
                                            <label for="HIGHSCHOOLPERCENTAGECGPA"> PERCENTAGE/CGPA</label>
                                            <input type="text" id="highschoolpercentageCgpa" name="highschoolpercentageCgpa"
                                                placeholder="PERCENTAGE/CGPA"   value="${student.highschoolpercentageCgpa }">

                                        </div>
                                    </div></br>


                              <div class="form first">
                                        <div class="Academics Details">
                                            <span class="title">
                                                 <label for="INTERMEDIATESCHOOL" class="required">INTERMEDIATE SCHOOL</label>

                                            </span>

                                            <div class="fields">
                                                <div class="input-field">
                                                     <label for="INTERMEDIATESCHOOLNAME">SCHOOL </label>
                                                    <input type="text" id="intermediateschoolName" name="intermediateschoolName"
                                                        placeholder="SCHOOL NAME"    value="${student.intermediateschoolName }">
                                                </div>


                                                <div class="input-field">
                                         <label for="INTERMEDIATEBOARDNAME">BOARD </label>
                                                    <input type="text" id="intermediateboardName" name="intermediateboardName"
                                                        placeholder="BOARD NAME"    value="${student.intermediateboardName}"  >

                                                </div>

                                                <div class="input-field">
                                                    <label for="INTERMEDIATESTREAM">STREAM</label>
                                                    <input type="text" id="intermediatestream" name="intermediatestream" placeholder="STREAM" value="${student.intermediatestream}" >

                                                </div>

                                                <div class="input-field">
                                                    <label for="INTERMEDIATEPASSINGYEAR">PASSING YEAR</label>
                                                    <input type="text" id="intermediatepassingyear" name="intermediatepassingyear"
                                                        placeholder="PASSING YEAR"  value="${student.intermediatepassingyear}">

                                                </div>

                                                <div class="input-field">
                                                     <label for="INTERMEDIATESCHOOLADDRESS">SCHOOL ADDRESS</label>
                                                    <input type="text" id="intermediateschoolAddress" name="intermediateschoolAddress"
                                                        placeholder="SCHOOL ADDRESS"  value="${student.intermediateschoolAddress}">

                                                </div>

                                                <div class="input-field">
                                                     <label for="INTERMEDIATEPERCENTAGECGPA">PERCENTAGE/CGPA</label>
                                                    <input type="text" id="intermediatepercentageCgpa" name="intermediatepercentageCgpa"
                                                        placeholder="PERCENTAGE/CGPA"  value="${student.intermediatepercentageCgpa}">
                                                </div>
                                            </div></br>

                                                     
                                                       <div class="form first">
                                                        <div class="Academics Details">
                                                            <span class="title">
                                                 <label for="GRADUATION" class="required">GRADUATION</label>
                                                              
                                                            </span>

                                                            
                                                 <div class="fields">
                                                <div class="input-field">
                                                     <label for="GRADUATIONCOLLAGEUNIVERSITYNAME">COLLAGE/UNIVERSITY  </label>
                                                    <input type="text" id="GraduationcollageUniversityName" name="GraduationcollageUniversityName"
                                                        placeholder="COLLAGE/UNIVERSITY NAME"   value="${student.GraduationcollageUniversityName}">
                                                </div>


                                                                 <div class="input-field">
                                                                    <label for="GRADUATIONCOURSENAME">COURSE </label>
                                                                    <input type="text" id="graduationcourseName" name="graduationcourseName"
                                                                        placeholder="COURSE NAME"   value="${student.graduationcourseName}">
                                                                </div>

                                                                <div class="input-field">
                                                                    <label for="GRADUATIONSPECIALIZATION">SPECIALIZATION</label>
                                                                    <input type="text" id="graduationspecilatization"
                                                                        name="graduationspecilatization"
                                                                        placeholder="SPECIALIZATION"  value="${student.graduationspecilatization}">
                                                                </div>

                                                                <div class="input-field">
                                                                    <label for="GRADUATIONPASSINGYEAR">PASSING YEAR</label>
                                                                    <input type="text" id="graduationpassingyear"
                                                                        name="graduationpassingyear" placeholder="PASSING YEAR" value="${student.graduationpassingyear}">
                                                                </div>

                                                                <div class="input-field">
                                                                    <label for="GRADUATIONCOLLAGEADDRESS"> ADDRESS</label>
                                                                    <input type="text" id="graduationcollageaddress"
                                                                        name="graduationcollageaddress"
                                                                        placeholder="COLLAGE ADDRESS"  value="${student.graduationcollageaddress}">
                                                                </div>

                                                                <div class="input-field">
                                                                    <label for="GRADUATIONPERCENTAGECGPA">PERCENTAGE/CGPA</label>
                                                                    <input type="text" id="graduationPercentagecgpa"
                                                                        name="graduationPercentagecgpa"
                                                                        placeholder="PERCENTAGE/CGPA" value="${student.graduationPercentagecgpa}">
                                                                </div>
                                                            </div></br></br>


                                                    <div class="form first">
                                                        <div class="Academics Details">
                                                            <span class="title">
                                                                <label for="POSTGRADUATION" class="required"> POST GRADUATION</label>
                                                
                                                            </span>

                                                            <div class="fields">
                                                                <div class="input-field">
                                                                    <label for="POSTGRADUATIONCOLLAGEUNIVERSITYNAME">COLLAGE/UNIVERSITY</label>
                                                                    <input type="text" id="postgraduationUniversityName" 
                                                                        name="postgraduationUniversityName "
                                                                        placeholder="COLLAGE/UNIVERSITY NAME"  value="${student.postgraduationUniversityName}">
                                                                </div>


                                                                 <div class="input-field">
                                                                     <label for="POSTGRADUATIONCOURSENAME">COURSE </label>
                                                                    <input type="text" id="postgraduationcoursename" name="postgraduationcoursename"
                                                                        placeholder="COURSE NAME"  value="${student.postgraduationcoursename}">
                                                                </div>

                                                                <div class="input-field">
                                                                     <label for="POSTGRADUATIONSPECIALIZATION">SPECIALIZATION</label>
                                                                    <input type="text" id="postgraduationspecialization"
                                                                        name="postgraduationspecialization"
                                                                        placeholder="SPECIALIZATION"  value="${student.postgraduationspecialization}">
                                                                </div>

                                                                <div class="input-field">
                                                                     <label for="POSTGRADUATIONPASSINGYEAR">PASSING YEAR</label>
                                                                    <input type="text" id="postgraduationpassingyear"
                                                                        name="postgraduationpassingyear" placeholder="PASSING YEAR"  value="${student.postgraduationpassingyear}">
                                                                </div>

                                                                <div class="input-field">
                                                                     <label for="POSTGRADUATIONCOLLAGEADDRESS"> ADDRESS</label> 
                                                                    <input type="text" id="postgraduationcollageAddress"
                                                                        name="postgraduationcollageAddress"
                                                                        placeholder="COLLAGE ADDRESS" value="${student.postgraduationcollageAddress}">
                                                                </div>

                                                                <div class="input-field">
                                                                     <label for="POSTGRADUATIONPERCENTAGECGPA">PERCENTAGE/CGPA</label>
                                                                    <input type="text" id="postgraduationPercentagecgpa"
                                                                        name="postgraduationPercentagecgpa"
                                                                        placeholder="PERCENTAGE/CGPA"  value="${student.postgraduationPercentagecgpa}">
                                                                </div>
                                                            </div>  </br></br>

                                                         <div class="form first">
                                                                <div class="Guardian Details">
                                                                    <span class="title">
                                                                 <label for="guardiansdetails "class="required"><h2><b>GUARDIANS DETAILS</b></h2></label>
                                                        
                                                                    </span>

                                                                    <div class="fields">
                                                                        <div class="input-field">
                                                                              <label for="FATHERNAME">FATHER NAME</label>
                                                                            <input type="text" id="fatherName"
                                                                                name="fatherName"
                                                                                placeholder="FATHER NAME"  value="${student.fatherName}">
                                                                        </div>

                                                                        <div class="input-field">
                                                                              <label for="FATHEREMAILID">EMAIL ID</label>
                                                                            <input type="text" id=""
                                                                                name="fatherEmailId"
                                                                                placeholder="FATHER EMAIL ID"  value="${student.fatherEmailId}">
                                                                        </div>

                                                                        <div class="input-field">
                                                                              <label for="FATHERPHONENO">PHONE NO</label>
                                                                            <input type="text" id="fatherPhoneNo"
                                                                                name="fatherPhoneNo"
                                                                                placeholder="FATHER PHONE NO"  value="${student.fatherPhoneNo}">
                                                                        </div>

                                                                        <div class="input-field">
                                                                              <label for="FATHERPROFESSION">FATHER PROFESSION</label>
                                                                            <input type="text" id="fatherProfession"
                                                                                name="fatherProfession"
                                                                                placeholder="FATHER PROFESSION"  value="${student.fatherProfession}">
                                                                        </div>
                                                                    </div>  


                                                                    <div class="form first">
                                                                        <div class="Guardian Details">
                                                                            <span class="title">
                                                                            </span>

                                                                            <div class="fields">
                                                                                <div class="input-field">
                                                                                      <label for="MOTHERNAME" class="required">MOTHER NAME</label>
                                                                                    <input type="text" id="motherName"
                                                                                        name="motherName"
                                                                                        placeholder="MOTHER NAME" value="${student.motherName}">

                                                                                </div>

                                                                                <div class="input-field">
                                                                                      <label for="MOTHEREMAIL">EMAIL ID</label>
                                                                                    <input type="text" id="motherEmail"
                                                                                        name="motherEmail"
                                                                                        placeholder="MOTHER EMAIL"  value="${student.motherEmail}">

                                                                                </div>

                                                                                <div class="input-field">
                                                          <label for="MOTHERPHONENO">PHONE NO</label>
                                                                                    <input type="text"
                                                                                        id="motherPhoneNo"  
                                                                                        name="motherPhoneNo"
                                                                                        placeholder="MOTHER PHONE NO"  value="${student.motherPhoneNo}">


                                                                                </div>


                                                                                <div class="input-field">
                                                                                      <label for="MOTHERPROFESSION"> MOTHER PROFESSION</label>
                                                                                    <input type="text"
                                                                                        id="motherProfession"
                                                                                        name="motherProfession"
                                                                                        placeholder="MOTHER PROFESSION" value="${student.motherProfession}">
                                                                                </div>
                                                                            </div></br></br>


                                                                            <div class="form first">
                                                                                <div class="Address Details">
                                                                                    <span class="title">
                                                                         <label for="ADDRESSDETAILS"><h2><b>PRESENT ADDRESS</b></h2></label>
                        
                                                                                    </span>

                                                                               

                                                                                                <div class="fields">
                                                                                        <div class="input-field">
                                                                                              <label for="PRESENTSTREET">STREET</label>
                                                                                            <input type="text"
                                                                                                id="presentstreet"
                                                                                                name="presentstreet"
                                                                                                placeholder=" ENTER YOUR STREET"  value="${student.presentstreet}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PRESENTLANDMARK"> LANDMARK</label>
                                                                                            <input type="text"
                                                                                                id="presentLandmark"
                                                                                                name="presentLandmark"
                                                                                                placeholder="ENTER LANDMARK"  value="${student.presentLandmark}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PRESENTPINCODE"> PINCODE</label>
                                                                                            <input type="text"
                                                                                                id="presentpincode"
                                                                                                name="presentpincode"
                                                                                                placeholder="ENTER PINCODE"   value="${student.presentpincode}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PRESENTCOUNTRY"> COUNTRY</label>
                                                                                            <select id="presentCountry"
                                                                                                name="presentCountry" value="${student.presentCountry}">
                                                                                                <option
                                                                                                    value="Afghanistan">
                                                                                                    Afghanistan</option>
                                                                                                <option
                                                                                                    value="Åland Islands">
                                                                                                    Åland Islands
                                                                                                </option>
                                                                                                <option value="Albania">
                                                                                                    Albania</option>
                                                                                                <option value="Algeria">
                                                                                                    Algeria</option>
                                                                                                <option
                                                                                                    value="American Samoa">
                                                                                                    American Sam
                                                                                                </option>
                                                                                                <option value="Andorra">
                                                                                                    Andorra</option>
                                                                                                <option value="Angola">
                                                                                                    Angola</option>
                                                                                                <option
                                                                                                    value="Anguilla">
                                                                                                    Anguilla</option>
                                                                                                <option
                                                                                                    value="Antarctica">
                                                                                                    Antarctica</option>
                                                                                                <option
                                                                                                    value="Antigua and Barbuda">
                                                                                                    Antigua and Barbuda
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Argentina">
                                                                                                    Argentina</option>
                                                                                                <option value="Armenia">
                                                                                                    Armenia</option>
                                                                                                <option value="Aruba">
                                                                                                    Aruba</option>
                                                                                                <option
                                                                                                    value="Australia">
                                                                                                    Australia</option>
                                                                                                <option value="Austria">
                                                                                                    Austria</option>
                                                                                                <option
                                                                                                    value="Azerbaijan">
                                                                                                    Azerbaijan</option>
                                                                                                <option value="Bahamas">
                                                                                                    Bahamas</option>
                                                                                                <option value="Bahrain">
                                                                                                    Bahrain</option>
                                                                                                <option
                                                                                                    value="Bangladesh">
                                                                                                    Bangladesh</option>
                                                                                                <option
                                                                                                    value="Barbados">
                                                                                                    Barbados</option>
                                                                                                <option value="Belarus">
                                                                                                    Belarus</option>
                                                                                                <option value="Belgium">
                                                                                                    Belgium</option>
                                                                                                <option value="Belize">
                                                                                                    Belize</option>
                                                                                                <option value="Benin">
                                                                                                    Benin</option>
                                                                                                <option value="Bermuda">
                                                                                                    Bermuda</option>
                                                                                                <option value="Bhutan">
                                                                                                    Bhutan</option>
                                                                                                <option value="Bolivia">
                                                                                                    Bolivia</option>
                                                                                                <option
                                                                                                    value="Bosnia and Herzegovina">
                                                                                                    Bosnia and
                                                                                                    Herzegovina</option>
                                                                                                <option
                                                                                                    value="Botswana">
                                                                                                    Botswana</option>
                                                                                                <option
                                                                                                    value="Bouvet Island">
                                                                                                    Bouvet Island
                                                                                                </option>
                                                                                                <option value="Brazil">
                                                                                                    Brazil</option>
                                                                                                <option
                                                                                                    value="British Indian Ocean Territory">
                                                                                                    British Indian Ocean
                                                                                                    Territory</option>
                                                                                                <option
                                                                                                    value="Brunei Darussalam">
                                                                                                    Brunei Darussalam
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Bulgaria">
                                                                                                    Bulgaria</option>
                                                                                                <option
                                                                                                    value="Burkina Faso">
                                                                                                    Burkina Faso
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Burundi">
                                                                                                        Burundi</option>
                                                                                                    <option
                                                                                                        value="Cambodia">
                                                                                                        Cambodia
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Cameroon">
                                                                                                        Cameroon
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Canada">
                                                                                                        Canada</option>
                                                                                                    <option
                                                                                                        value="Cape Verde">
                                                                                                        Cape Verde
                                                                                                    </option>

                                                                                                    <option
                                                                                                        value="Cayman Islands">
                                                                                                        Cayman Islands
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Central African Republic">
                                                                                                        Central African
                                                                                                        Republic
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Chad">
                                                                                                        Chad</option>
                                                                                                    <option
                                                                                                        value="Chile">
                                                                                                        Chile</option>
                                                                                                    <option
                                                                                                        value="China">
                                                                                                        China</option>
                                                                                                    <option
                                                                                                        value="Christmas Island">
                                                                                                        Christmas Island
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Cocos (Keeling) Islands">
                                                                                                        Cocos (Keeling)
                                                                                                        Islands</option>
                                                                                                    <option
                                                                                                        value="Colombia">
                                                                                                        Colombia
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Comoros">
                                                                                                        Comoros</option>
                                                                                                    <option
                                                                                                        value="Congo">
                                                                                                        Congo</option>
                                                                                                    <option
                                                                                                        value="Congo, The Democratic Republic of The">
                                                                                                        Congo, The
                                                                                                        Democratic
                                                                                                        Republic of The
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Cook Islands">
                                                                                                        Cook Islands
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Costa Rica">
                                                                                                        Costa Rica
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Cote D'ivoire">
                                                                                                        Cote D'ivoire
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Croatia">
                                                                                                        Croatia</option>
                                                                                                    <option
                                                                                                        value="Cuba">
                                                                                                        Cuba</option>
                                                                                                    <option
                                                                                                        value="Cyprus">
                                                                                                        Cyprus</option>
                                                                                                    <option
                                                                                                        value="Czech Republic">
                                                                                                        Czech Republic
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Denmark">
                                                                                                        Denmark</option>
                                                                                                    <option
                                                                                                        value="Djibouti">
                                                                                                        Djibouti
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Dominica">
                                                                                                        Dominica
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Dominican Republic">
                                                                                                        Dominican
                                                                                                        Republic
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Ecuador">
                                                                                                        Ecuador</option>
                                                                                                    <option
                                                                                                        value="Egypt">
                                                                                                        Egypt</option>
                                                                                                    <option
                                                                                                        value="El Salvador">
                                                                                                        El Salvador
                                                                                                    </option>
                                                                                                    <option
                                                                                                        value="Equatorial Guinea">
                                                                                                        Equatorial Guine
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Eritrea">
                                                                                                            Eritrea
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Estonia">
                                                                                                            Estonia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Ethiopia">
                                                                                                            Ethiopia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Falkland Islands (Malvinas)">
                                                                                                            Falkland
                                                                                                            Island(Malvinas)
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Faroe Islands">
                                                                                                            Faroe Island
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Fiji">
                                                                                                            Fiji
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Finland">
                                                                                                            Finland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="France">
                                                                                                            France
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="French Guiana">
                                                                                                            French
                                                                                                            Guiana
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="French Polynesia">
                                                                                                            French
                                                                                                            Polynesia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="French Southern Territories">
                                                                                                            French
                                                                                                            Southern
                                                                                                            Territories
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Gabon">
                                                                                                            Gabon
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Gambia">
                                                                                                            Gambia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Georgia">
                                                                                                            Georgia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Germany">
                                                                                                            Germany
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Ghana">
                                                                                                            Ghana
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Gibraltar">
                                                                                                            Gibraltar
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Greece">
                                                                                                            Greece
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Greenland">
                                                                                                            Greenland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Grenada">
                                                                                                            Grenada
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guadeloupe">
                                                                                                            Guadeloupe
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guam">
                                                                                                            Guam
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guatemala">
                                                                                                            Guatemala
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guernsey">
                                                                                                            Guernsey
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guinea">
                                                                                                            Guinea
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guinea-bissau">
                                                                                                            Guinea-bissau
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Guyana">
                                                                                                            Guyana
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Haiti">
                                                                                                            Haiti
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Heard Island and Mcdonald Islands">
                                                                                                            Heard Island
                                                                                                            and Mcdonald
                                                                                                            Island
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Holy See (Vatican City State)">
                                                                                                            Holy See
                                                                                                            (Vatica City
                                                                                                            State)
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Honduras">
                                                                                                            Honduras
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Hong Kong">
                                                                                                            Hong Kong
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Hungary">
                                                                                                            Hungary
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Iceland">
                                                                                                            Iceland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="India">
                                                                                                            India
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Indonesia">
                                                                                                            Indonesia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Iran, Islamic Republic of">
                                                                                                            Iran,
                                                                                                            Islamic
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Iraq">
                                                                                                            Iraq
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Ireland">
                                                                                                            Ireland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Isle of Man">
                                                                                                            Isle of Man
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Israel">
                                                                                                            Israel
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Italy">
                                                                                                            Italy
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Jamaica">
                                                                                                            Jamaica
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Japan">
                                                                                                            Japan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Jersey">
                                                                                                            Jersey
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Jordan">
                                                                                                            Jordan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Kazakhstan">
                                                                                                            Kazakhstan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Kenya">
                                                                                                            Kenya
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Kiribat">
                                                                                                            Kiribati
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Korea, Democratic People's Republic of">
                                                                                                            Korea,
                                                                                                            Democratic
                                                                                                            People's
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Korea, Republic of">
                                                                                                            Korea,
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Kuwait">
                                                                                                            Kuwait
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Kyrgyzstan">
                                                                                                            Kyrgyzstan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Lao People's Democratic Republic">
                                                                                                            Lao People's
                                                                                                            Democratic
                                                                                                            Republic
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Latvia">
                                                                                                            Latvia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Lebanon">
                                                                                                            Lebanon
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Lesotho">
                                                                                                            Lesotho
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Liberia">
                                                                                                            Liberia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Libyan Arab Jamahiriya">
                                                                                                            Libyan Arab
                                                                                                            Jamahiriya
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Liechtenstein">
                                                                                                            Liechtenstein
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Lithuania">
                                                                                                            Lithuania
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Luxembourg">
                                                                                                            Luxembourg
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Macao">
                                                                                                            Macao
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Macedonia, The Former Yugoslav Republic of">
                                                                                                            Macedonia,
                                                                                                            The Former
                                                                                                            Yugoslav
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Madagascar">
                                                                                                            Madagascar
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Malawi">
                                                                                                            Malawi
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Malaysia">
                                                                                                            Malaysia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Maldives">
                                                                                                            Maldives
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mali">
                                                                                                            Mali
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Malta">
                                                                                                            Malta
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Marshall Islands">
                                                                                                            Marshall
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Martinique">
                                                                                                            Martinique
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mauritania">
                                                                                                            Mauritania
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mauritius">
                                                                                                            Mauritius
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mayotte">
                                                                                                            Mayotte
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mexico">
                                                                                                            Mexico
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Micronesia, Federated States of">
                                                                                                            Micronesia,
                                                                                                            Federated
                                                                                                            States of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Moldova, Republic of">
                                                                                                            Moldova,
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Monaco">
                                                                                                            Monaco
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mongolia">
                                                                                                            Mongolia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Montenegro">
                                                                                                            Montenegro
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Montserrat">
                                                                                                            Montserrat
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Morocco">
                                                                                                            Morocco
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mozambique">
                                                                                                            Mozambique
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Myanmar">
                                                                                                            Myanmar
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Namibia">
                                                                                                            Namibia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Nauru">
                                                                                                            Nauru
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Nepal">
                                                                                                            Nepal
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Netherlands">
                                                                                                            Netherlands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Netherlands Antilles">
                                                                                                            Netherlands
                                                                                                            Antilles
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="New Caledonia">
                                                                                                            New
                                                                                                            Caledonia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="New Zealand">
                                                                                                            New Zealand
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Nicaragua">
                                                                                                            Nicaragua
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Niger">
                                                                                                            Niger
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Nigeria">
                                                                                                            Nigeria
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Niue">
                                                                                                            Niue
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Norfolk Island">
                                                                                                            Norfolk
                                                                                                            Island
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Northern Mariana Islands">
                                                                                                            Northern
                                                                                                            Mariana
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Norway">
                                                                                                            Norway
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Oman">
                                                                                                            Oman
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Pakistan">
                                                                                                            Pakistan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Palau">
                                                                                                            Palau
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Palestinian Territory, Occupied">
                                                                                                            Palestinian
                                                                                                            Territory,
                                                                                                            Occupied
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Panama">
                                                                                                            Panama
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Papua New Guinea">
                                                                                                            Papua New
                                                                                                            Guinea
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Paraguay">
                                                                                                            Paraguay
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Peru">
                                                                                                            Peru
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Philippines">
                                                                                                            Philippines
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Pitcairn">
                                                                                                            Pitcairn
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Poland">
                                                                                                            Poland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Portugal">
                                                                                                            Portugal
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Puerto Rico">
                                                                                                            Puerto Rico
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Qatar">
                                                                                                            Qatar
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Reunion">
                                                                                                            Reunion
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Romania">
                                                                                                            Romania
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Russian Federation">
                                                                                                            Russian
                                                                                                            Federation
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Rwanda">
                                                                                                            Rwanda
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saint Helena">
                                                                                                            Saint Helena
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saint Kitts and Nevis">
                                                                                                            Saint Kitts
                                                                                                            and
                                                                                                            Nevis
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saint Lucia">
                                                                                                            Saint Lucia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saint Pierre and Miquelon">
                                                                                                            Saint Pierre
                                                                                                            and
                                                                                                            Miquelon
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saint Vincent and The Grenadines">
                                                                                                            Saint
                                                                                                            Vincent and
                                                                                                            The
                                                                                                            Grenadines
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Samoa">
                                                                                                            Samoa
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="San Marino">
                                                                                                            San Marino
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Sao Tome and Principe">
                                                                                                            Sao Tome and
                                                                                                            Principe
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Saudi Arabia">
                                                                                                            Saudi Arabia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Senegal">
                                                                                                            Senegal
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Serbia">
                                                                                                            Serbia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Seychelles">
                                                                                                            Seychelles
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Sierra Leone">
                                                                                                            Sierra Leone
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Singapore">
                                                                                                            Singapore
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Slovakia">
                                                                                                            Slovakia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Slovenia">
                                                                                                            Slovenia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Solomon Islands">
                                                                                                            Solomon
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Somalia">
                                                                                                            Somalia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="South Africa">
                                                                                                            South Africa
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="South Georgia and The South Sandwich Islands">
                                                                                                            South
                                                                                                            Georgia and
                                                                                                            The South
                                                                                                            Sandwich
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Spain">
                                                                                                            Spain
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Sri Lanka">
                                                                                                            Sri Lanka
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Sudan">
                                                                                                            Sudan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Suriname">
                                                                                                            Suriname
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Svalbard and Jan Mayen">
                                                                                                            Svalbard and
                                                                                                            Jan
                                                                                                            Mayen
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Swaziland">
                                                                                                            Swaziland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Sweden">
                                                                                                            Sweden
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Switzerland">
                                                                                                            Switzerland
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Syrian Arab Republic">
                                                                                                            Syrian Arab
                                                                                                            Republic
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Taiwan">
                                                                                                            Taiwan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tajikistan">
                                                                                                            Tajikistan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tanzania, United Republic of">
                                                                                                            Tanzania,
                                                                                                            United
                                                                                                            Republic of
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Thailand">
                                                                                                            Thailand
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Timor-leste">
                                                                                                            Timor-leste
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Togo">
                                                                                                            Togo
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tokelau">
                                                                                                            Tokelau
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tonga">
                                                                                                            Tonga
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Trinidad and Tobago">
                                                                                                            Trinidad and
                                                                                                            Tobago
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tunisia">
                                                                                                            Tunisia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Turkey">
                                                                                                            Turkey
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Turkmenistan">
                                                                                                            Turkmenistan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Turks and Caicos Islands">
                                                                                                            Turks and
                                                                                                            Caicos
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Tuvalu">
                                                                                                            Tuvalu
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Uganda">
                                                                                                            Uganda
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Ukraine">
                                                                                                            Ukraine
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="United Arab Emirates">
                                                                                                            United Arab
                                                                                                            Emirates
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="United Kingdom">
                                                                                                            United
                                                                                                            Kingdom
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="United States">
                                                                                                            United
                                                                                                            States
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="United States Minor Outlying Islands">
                                                                                                            United
                                                                                                            States Minor
                                                                                                            Outlying
                                                                                                            Islands
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Uruguay">
                                                                                                            Uruguay
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Uzbekistan">
                                                                                                            Uzbekistan
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Vanuatu">
                                                                                                            Vanuatu
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Venezuela">
                                                                                                            Venezuela
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Viet Nam">
                                                                                                            Viet Nam
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Virgin Islands, British">
                                                                                                            Virgin
                                                                                                            Islands,
                                                                                                            British
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Virgin Islands, U.S.">
                                                                                                            Virgin
                                                                                                            Islands,
                                                                                                            U.S.
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Wallis and Futuna">
                                                                                                            Wallis and
                                                                                                            Futuna
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Western Sahara">
                                                                                                            Western
                                                                                                            Sahara
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Yemen">
                                                                                                            Yemen
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Zambia">
                                                                                                            Zambia
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Zimbabwe">
                                                                                                            Zimbabwe
                                                                                                        </option>
                                                                                            </select>
                                                                                        </div>


                                                                                        <div class="input-field">
                                                                             
                            
                                                                                                <label for="PRESENTSTATE"> STATE</label>
                                                                                                
                                                                                            <select id="presentstate"
                                                                                                name="presentstate"   value="${student.presentstate}">
                                                                                                <option value="AP">
                                                                                                    Andhra Pradesh
                                                                                                </option>
                                                                                                <option value="AR">
                                                                                                    Arunachal Pradesh
                                                                                                </option>
                                                                                                <option value="AS">Assam
                                                                                                </option>
                                                                                                <option value="BR">Bihar
                                                                                                </option>
                                                                                                <option value="CT">
                                                                                                    Chhattisgarh
                                                                                                </option>
                                                                                                <option value="GA">
                                                                                                    Gujarat</option>
                                                                                                <option value="HR">
                                                                                                    Haryana</option>
                                                                                                <option value="HP">
                                                                                                    Himachal Pradesh
                                                                                                </option>
                                                                                                <option value="JK">Jammu
                                                                                                    and Kashmir</option>
                                                                                                <option value="GA">Goa
                                                                                                </option>
                                                                                                <option value="JH">
                                                                                                    Jharkhand</option>
                                                                                                <option value="KA">
                                                                                                    Karnataka</option>
                                                                                                <option value="KL">
                                                                                                    Kerala</option>
                                                                                                <option value="MP">
                                                                                                    Madhya Pradesh
                                                                                                </option>
                                                                                                <option value="MH">
                                                                                                    Maharashtra</option>
                                                                                                <option value="MN">
                                                                                                    Manipur</option>
                                                                                                <option value="ML">
                                                                                                    Meghalaya</option>
                                                                                                <option value="MZ">
                                                                                                    Mizoram</option>
                                                                                                <option value="NL">
                                                                                                    Nagaland</option>
                                                                                                <option value="OR">
                                                                                                    Odisha</option>
                                                                                                <option value="PB">
                                                                                                    Punjab</option>
                                                                                                <option value="RJ">
                                                                                                    Rajasthan</option>
                                                                                                <option value="SK">
                                                                                                    Sikkim</option>
                                                                                                <option value="TN">Tamil
                                                                                                    Nadu</option>
                                                                                                <option value="TG">
                                                                                                    Telangana</option>
                                                                                                <option value="TR">
                                                                                                    Tripura</option>
                                                                                                <option value="UT">
                                                                                                    Uttarakhand</option>
                                                                                                <option value="UP">Uttar
                                                                                                    Pradesh</option>
                                                                                                <option value="WB">West
                                                                                                    Bengal</option>
                                                                                                <option value="AN">
                                                                                                    Andaman and Nicobar
                                                                                                    Islands</option>
                                                                                                <option value="CH">
                                                                                                    Chandigarh</option>
                                                                                                <option value="DN">Dadra
                                                                                                    and Nagar Haveli
                                                                                                </option>
                                                                                                <option value="DD">Daman
                                                                                                    and Diu</option>
                                                                                                <option value="DL">Delhi
                                                                                                </option>
                                                                                                <option value="LD">
                                                                                                    Lakshadweep</option>
                                                                                                <option value="PY">
                                                                                                    Puducherry</option>
                                                                                                <option value="OT">
                                                                                                    Others</option>
                                                                                            </select>
                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                            <label for="CITY"> Select
                                                                                                your City</label>
                                                                                            <select id="presentcity"
                                                                                                name="presentcity"  value="${student.presentcity}">
                                                                                                <option value="">Select
                                                                                                    City</option>
                                                                                                <option
                                                                                                    value="Achhnera">
                                                                                                    Achhnera</option>
                                                                                                <option
                                                                                                    value="Afzalgarh">
                                                                                                    Afzalgarh</option>
                                                                                                <option value="Agra">
                                                                                                    Agra</option>
                                                                                                <option value="Ahraura">
                                                                                                    Ahraura</option>
                                                                                                <option value="Ajodhya">
                                                                                                    Ajodhya</option>
                                                                                                <option
                                                                                                    value="Akbarpur">
                                                                                                    Akbarpur</option>
                                                                                                <option value="Aliganj">
                                                                                                    Aliganj</option>
                                                                                                <option value="Aligarh">
                                                                                                    Aligarh</option>
                                                                                                <option
                                                                                                    value="Allahabad">
                                                                                                    Allahabad</option>
                                                                                                <option
                                                                                                    value="Allahganj">
                                                                                                    Allahganj</option>
                                                                                                <option value="Amanpur">
                                                                                                    Amanpur</option>
                                                                                                <option value="Ambahta">
                                                                                                    Ambahta</option>
                                                                                                <option
                                                                                                    value="Ambedkar Nagar">
                                                                                                    Ambedkar Nagar
                                                                                                </option>
                                                                                                <option value="Amethi">
                                                                                                    Amethi</option>
                                                                                                <option value="Amroha">
                                                                                                    Amroha</option>
                                                                                                <option
                                                                                                    value="Anandnagar">
                                                                                                    Anandnagar</option>
                                                                                                <option value="Antu">
                                                                                                    Antu</option>
                                                                                                <option
                                                                                                    value="Anupshahr">
                                                                                                    Anupshahr</option>
                                                                                                <option value="Aonla">
                                                                                                    Aonla</option>
                                                                                                <option value="Atarra">
                                                                                                    Atarra</option>
                                                                                                <option value="Atrauli">
                                                                                                    Atrauli</option>
                                                                                                <option
                                                                                                    value="Atraulia">
                                                                                                    Atraulia</option>
                                                                                                <option value="Auraiya">
                                                                                                    Auraiya</option>
                                                                                                <option value="Auras">
                                                                                                    Auras</option>
                                                                                                <option
                                                                                                    value="Azamgarh">
                                                                                                    Azamgarh</option>
                                                                                                <option value="Baberu">
                                                                                                    Baberu</option>
                                                                                                <option value="Babina">
                                                                                                    Babina</option>
                                                                                                <option value="Babrala">
                                                                                                    Babrala</option>
                                                                                                <option
                                                                                                    value="Babugarh">
                                                                                                    Babugarh</option>
                                                                                                <option
                                                                                                    value="Bachhraon">
                                                                                                    Bachhraon</option>
                                                                                                <option
                                                                                                    value="Bachhrawan">
                                                                                                    Bachhrawan</option>
                                                                                                <option value="Baghpat">
                                                                                                    Baghpat</option>
                                                                                                <option value="Bah">Bah
                                                                                                </option>
                                                                                                <option value="Baheri">
                                                                                                    Baheri</option>
                                                                                                <option value="Bahjoi">
                                                                                                    Bahjoi</option>
                                                                                                <option
                                                                                                    value="Bahraich">
                                                                                                    Bahraich</option>
                                                                                                <option
                                                                                                    value="Bahraigh">
                                                                                                    Bahraigh</option>
                                                                                                <option value="Bahsuma">
                                                                                                    Bahsuma</option>
                                                                                                <option value="Bahua">
                                                                                                    Bahua</option>
                                                                                                <option value="Bajna">
                                                                                                    Bajna</option>
                                                                                                <option value="Bakewar">
                                                                                                    Bakewar</option>
                                                                                                <option value="Baldev">
                                                                                                    Baldev</option>
                                                                                                <option value="Ballia">
                                                                                                    Ballia</option>
                                                                                                <option
                                                                                                    value="Balrampur">
                                                                                                    Balrampur</option>
                                                                                                <option value="Banat">
                                                                                                    Banat</option>
                                                                                                <option value="Banbasa">
                                                                                                    Banbasa</option>
                                                                                                <option value="Banda">
                                                                                                    Banda</option>
                                                                                                <option
                                                                                                    value="Bangarmau">
                                                                                                    Bangarmau</option>
                                                                                                <option value="Bansdih">
                                                                                                    Bansdih</option>
                                                                                                <option
                                                                                                    value="Bansgaon">
                                                                                                    Bansgaon</option>
                                                                                                <option value="Bansi">
                                                                                                    Bansi</option>
                                                                                                <option
                                                                                                    value="Bara Banki">
                                                                                                    Bara Banki</option>
                                                                                                <option
                                                                                                    value="Baragaon">
                                                                                                    Baragaon</option>
                                                                                                <option value="Baraut">
                                                                                                    Baraut</option>
                                                                                                <option
                                                                                                    value="Bareilly">
                                                                                                    Bareilly</option>
                                                                                                <option
                                                                                                    value="Barkhera Kalan">
                                                                                                    Barkhera Kalan
                                                                                                </option>
                                                                                                <option value="Barsana">
                                                                                                    Barsana</option>
                                                                                                <option value="Basti">
                                                                                                    Basti</option>
                                                                                                <option value="Behat">
                                                                                                    Behat</option>
                                                                                                <option value="Bela">
                                                                                                    Bela</option>
                                                                                                <option
                                                                                                    value="Beniganj">
                                                                                                    Beniganj</option>
                                                                                                <option value="Beswan">
                                                                                                    Beswan</option>
                                                                                                <option value="Bewar">
                                                                                                    Bewar</option>
                                                                                                <option value="Bhadohi">
                                                                                                    Bhadohi</option>
                                                                                                <option
                                                                                                    value="Bhagwantnagar">
                                                                                                    Bhagwantnagar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Bharthana">
                                                                                                    Bharthana</option>
                                                                                                <option
                                                                                                    value="Bharwari">
                                                                                                    Bharwari</option>
                                                                                                <option value="Bhinga">
                                                                                                    Bhinga</option>
                                                                                                <option
                                                                                                    value="Bhongaon">
                                                                                                    Bhongaon</option>
                                                                                                <option value="Bidhuna">
                                                                                                    Bidhuna</option>
                                                                                                <option
                                                                                                    value="Bighapur Khurd">
                                                                                                    Bighapur Khurd
                                                                                                </option>
                                                                                                <option value="Bijnor">
                                                                                                    Bijnor</option>
                                                                                                <option value="Bikapur">
                                                                                                    Bikapur</option>
                                                                                                <option value="Bilari">
                                                                                                    Bilari</option>
                                                                                                <option
                                                                                                    value="Bilariaganj">
                                                                                                    Bilariaganj</option>
                                                                                                <option
                                                                                                    value="Bilaspur">
                                                                                                    Bilaspur</option>
                                                                                                <option value="Bilgram">
                                                                                                    Bilgram</option>
                                                                                                <option value="Bilhaur">
                                                                                                    Bilhaur</option>
                                                                                                <option
                                                                                                    value="Bilsanda">
                                                                                                    Bilsanda</option>
                                                                                                <option value="Bilsi">
                                                                                                    Bilsi</option>
                                                                                                <option value="Bilthra">
                                                                                                    Bilthra</option>
                                                                                                <option value="Bindki">
                                                                                                    Bindki</option>
                                                                                                <option
                                                                                                    value="Bisalpur">
                                                                                                    Bisalpur</option>
                                                                                                <option value="Bisauli">
                                                                                                    Bisauli</option>
                                                                                                <option
                                                                                                    value="Bisenda Buzurg">
                                                                                                    Bisenda Buzurg
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Bishunpur Urf Maharajganj">
                                                                                                    Bishunpur Urf
                                                                                                    Maharajganj</option>
                                                                                                <option value="Biswan">
                                                                                                    Biswan</option>
                                                                                                <option value="Bithur">
                                                                                                    Bithur</option>
                                                                                                <option value="Budaun">
                                                                                                    Budaun</option>
                                                                                                <option value="Budhana">
                                                                                                    Budhana</option>
                                                                                                <option
                                                                                                    value="Bulandshahr">
                                                                                                    Bulandshahr</option>
                                                                                                <option
                                                                                                    value="Captainganj">
                                                                                                    Captainganj</option>
                                                                                                <option value="Chail">
                                                                                                    Chail</option>
                                                                                                <option value="Chakia">
                                                                                                    Chakia</option>
                                                                                                <option
                                                                                                    value="Chandauli">
                                                                                                    Chandauli</option>
                                                                                                <option
                                                                                                    value="Chandauli District">
                                                                                                    Chandauli District
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Chandpur">
                                                                                                    Chandpur</option>
                                                                                                <option
                                                                                                    value="Chanduasi">
                                                                                                    Chanduasi</option>
                                                                                                <option
                                                                                                    value="Charkhari">
                                                                                                    Charkhari</option>
                                                                                                <option
                                                                                                    value="Charthawal">
                                                                                                    Charthawal</option>
                                                                                                <option
                                                                                                    value="Chhaprauli">
                                                                                                    Chhaprauli</option>
                                                                                                <option value="Chharra">
                                                                                                    Chharra</option>
                                                                                                <option value="Chhata">
                                                                                                    Chhata</option>
                                                                                                <option
                                                                                                    value="Chhibramau">
                                                                                                    Chhibramau</option>
                                                                                                <option
                                                                                                    value="Chhutmalpur">
                                                                                                    Chhutmalpur</option>
                                                                                                <option
                                                                                                    value="Chillupar">
                                                                                                    Chillupar</option>
                                                                                                <option
                                                                                                    value="Chirgaon">
                                                                                                    Chirgaon</option>
                                                                                                <option
                                                                                                    value="Chitrakoot">
                                                                                                    Chitrakoot</option>
                                                                                                <option value="Chopan">
                                                                                                    Chopan</option>
                                                                                                <option value="Chunar">
                                                                                                    Chunar</option>
                                                                                                <option
                                                                                                    value="Colonelganj">
                                                                                                    Colonelganj</option>
                                                                                                <option value="Dadri">
                                                                                                    Dadri</option>
                                                                                                <option value="Dalmau">
                                                                                                    Dalmau</option>
                                                                                                <option value="Dankaur">
                                                                                                    Dankaur</option>
                                                                                                <option value="Dasna">
                                                                                                    Dasna</option>
                                                                                                <option
                                                                                                    value="Dataganj">
                                                                                                    Dataganj</option>
                                                                                                <option value="Daurala">
                                                                                                    Daurala</option>
                                                                                                <option
                                                                                                    value="Dayal Bagh">
                                                                                                    Dayal Bagh</option>
                                                                                                <option value="Deoband">
                                                                                                    Deoband</option>
                                                                                                <option
                                                                                                    value="Deoranian">
                                                                                                    Deoranian</option>
                                                                                                <option value="Deoria">
                                                                                                    Deoria</option>
                                                                                                <option value="Dewa">
                                                                                                    Dewa</option>
                                                                                                <option
                                                                                                    value="Dehradun">
                                                                                                    Dehradun</option>
                                                                                                <option value="Dhampur">
                                                                                                    Dhampur</option>
                                                                                                <option
                                                                                                    value="Dhanaura">
                                                                                                    Dhanaura</option>
                                                                                                <option
                                                                                                    value="Dhaurahra">
                                                                                                    Dhaurahra</option>
                                                                                                <option value="Dibai">
                                                                                                    Dibai</option>
                                                                                                <option
                                                                                                    value="Dohrighat">
                                                                                                    Dohrighat</option>
                                                                                                <option value="Dostpur">
                                                                                                    Dostpur</option>
                                                                                                <option value="Dudhi">
                                                                                                    Dudhi</option>
                                                                                                <option value="Etah">
                                                                                                    Etah</option>
                                                                                                <option value="Etawah">
                                                                                                    Etawah</option>
                                                                                                <option
                                                                                                    value="Faizabad">
                                                                                                    Faizabad</option>
                                                                                                <option value="Farah">
                                                                                                    Farah</option>
                                                                                                <option
                                                                                                    value="Faridnagar">
                                                                                                    Faridnagar</option>
                                                                                                <option
                                                                                                    value="Faridpur">
                                                                                                    Faridpur</option>
                                                                                                <option
                                                                                                    value="Farrukhabad">
                                                                                                    Farrukhabad</option>
                                                                                                <option
                                                                                                    value="Fatehabad">
                                                                                                    Fatehabad</option>
                                                                                                <option
                                                                                                    value="Fatehganj West">
                                                                                                    Fatehganj West
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Fatehgarh">
                                                                                                    Fatehgarh</option>
                                                                                                <option
                                                                                                    value="Fatehpur">
                                                                                                    Fatehpur</option>
                                                                                                <option
                                                                                                    value="Fatehpur Chaurasi">
                                                                                                    Fatehpur Chaurasi
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Fatehpur Sikri">
                                                                                                    Fatehpur Sikri
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Firozabad">
                                                                                                    Firozabad</option>
                                                                                                <option value="Fyzabad">
                                                                                                    Fyzabad</option>
                                                                                                <option
                                                                                                    value="Gajraula">
                                                                                                    Gajraula</option>
                                                                                                <option value="Gangoh">
                                                                                                    Gangoh</option>
                                                                                                <option
                                                                                                    value="Ganj Dundwara">
                                                                                                    Ganj Dundwara
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Ganj Muradabad">
                                                                                                    Ganj Muradabad
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Garautha">
                                                                                                    Garautha</option>
                                                                                                <option
                                                                                                    value="Garhi Pukhta">
                                                                                                    Garhi Pukhta
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Garhmuktesar">
                                                                                                    Garhmuktesar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Gautam Buddha Nagar">
                                                                                                    Gautam Buddha Nagar
                                                                                                </option>
                                                                                                <option value="Gawan">
                                                                                                    Gawan</option>
                                                                                                <option
                                                                                                    value="Ghatampur">
                                                                                                    Ghatampur</option>
                                                                                                <option
                                                                                                    value="Ghaziabad">
                                                                                                    Ghaziabad</option>
                                                                                                <option
                                                                                                    value="Ghazipur">
                                                                                                    Ghazipur</option>
                                                                                                <option value="Ghiror">
                                                                                                    Ghiror</option>
                                                                                                <option
                                                                                                    value="Ghorawal">
                                                                                                    Ghorawal</option>
                                                                                                <option value="Ghosi">
                                                                                                    Ghosi</option>
                                                                                                <option value="Gohand">
                                                                                                    Gohand</option>
                                                                                                <option value="Gokul">
                                                                                                    Gokul</option>
                                                                                                <option
                                                                                                    value="Gola Bazar">
                                                                                                    Gola Bazar</option>
                                                                                                <option
                                                                                                    value="Gola Gokarannath">
                                                                                                    Gola Gokarannath
                                                                                                </option>
                                                                                                <option value="Gonda">
                                                                                                    Gonda</option>
                                                                                                <option
                                                                                                    value="Gonda City">
                                                                                                    Gonda City</option>
                                                                                                <option value="Gopamau">
                                                                                                    Gopamau</option>
                                                                                                <option
                                                                                                    value="Gorakhpur">
                                                                                                    Gorakhpur</option>
                                                                                                <option
                                                                                                    value="Goshainganj">
                                                                                                    Goshainganj</option>
                                                                                                <option
                                                                                                    value="Govardhan">
                                                                                                    Govardhan</option>
                                                                                                <option
                                                                                                    value="Greater Noida">
                                                                                                    Greater Noida
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Gulaothi">
                                                                                                    Gulaothi</option>
                                                                                                <option value="Gunnaur">
                                                                                                    Gunnaur</option>
                                                                                                <option
                                                                                                    value="Gursahaiganj">
                                                                                                    Gursahaiganj
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Gursarai">
                                                                                                    Gursarai</option>
                                                                                                <option value="Gyanpur">
                                                                                                    Gyanpur</option>
                                                                                                <option value="Haldaur">
                                                                                                    Haldaur</option>
                                                                                                <option
                                                                                                    value="Hamirpur">
                                                                                                    Hamirpur</option>
                                                                                                <option value="Handia">
                                                                                                    Handia</option>
                                                                                                <option value="Hapur">
                                                                                                    Hapur</option>
                                                                                                <option value="Haraiya">
                                                                                                    Haraiya</option>
                                                                                                <option value="Hardoi">
                                                                                                    Hardoi</option>
                                                                                                <option
                                                                                                    value="Harduaganj">
                                                                                                    Harduaganj</option>
                                                                                                <option
                                                                                                    value="Hasanpur">
                                                                                                    Hasanpur</option>
                                                                                                <option
                                                                                                    value="Hastinapur">
                                                                                                    Hastinapur</option>
                                                                                                <option value="Hata">
                                                                                                    Hata</option>
                                                                                                <option value="Hathras">
                                                                                                    Hathras</option>
                                                                                                <option value="Iglas">
                                                                                                    Iglas</option>
                                                                                                <option value="Ikauna">
                                                                                                    Ikauna</option>
                                                                                                <option
                                                                                                    value="Indergarh">
                                                                                                    Indergarh</option>
                                                                                                <option
                                                                                                    value="Islamnagar">
                                                                                                    Islamnagar</option>
                                                                                                <option value="Itaunja">
                                                                                                    Itaunja</option>
                                                                                                <option
                                                                                                    value="Itimadpur">
                                                                                                    Itimadpur</option>
                                                                                                <option
                                                                                                    value="Jagdishpur">
                                                                                                    Jagdishpur</option>
                                                                                                <option value="Jagnair">
                                                                                                    Jagnair</option>
                                                                                                <option
                                                                                                    value="Jahanabad">
                                                                                                    Jahanabad</option>
                                                                                                <option
                                                                                                    value="Jahangirabad">
                                                                                                    Jahangirabad
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Jahangirpur">
                                                                                                    Jahangirpur</option>
                                                                                                <option value="Jainpur">
                                                                                                    Jainpur</option>
                                                                                                <option value="Jais">
                                                                                                    Jais</option>
                                                                                                <option
                                                                                                    value="Jalalabad">
                                                                                                    Jalalabad</option>
                                                                                                <option value="Jalali">
                                                                                                    Jalali</option>
                                                                                                <option
                                                                                                    value="Jalalpur">
                                                                                                    Jalalpur</option>
                                                                                                <option value="Jalaun">
                                                                                                    Jalaun</option>
                                                                                                <option value="Jalesar">
                                                                                                    Jalesar</option>
                                                                                                <option value="Jansath">
                                                                                                    Jansath</option>
                                                                                                <option value="Jarwal">
                                                                                                    Jarwal</option>
                                                                                                <option value="Jasrana">
                                                                                                    Jasrana</option>
                                                                                                <option
                                                                                                    value="Jaswantnagar">
                                                                                                    Jaswantnagar
                                                                                                </option>
                                                                                                <option value="Jaunpur">
                                                                                                    Jaunpur</option>
                                                                                                <option value="Jewar">
                                                                                                    Jewar</option>
                                                                                                <option value="Jhalu">
                                                                                                    Jhalu</option>
                                                                                                <option value="Jhansi">
                                                                                                    Jhansi</option>
                                                                                                <option
                                                                                                    value="Jhinjhak">
                                                                                                    Jhinjhak</option>
                                                                                                <option
                                                                                                    value="Jhinjhana">
                                                                                                    Jhinjhana</option>
                                                                                                <option value="Jhusi">
                                                                                                    Jhusi</option>
                                                                                                <option
                                                                                                    value="Jyotiba Phule Nagar">
                                                                                                    Jyotiba Phule Nagar
                                                                                                </option>
                                                                                                <option value="Kabrai">
                                                                                                    Kabrai</option>
                                                                                                <option value="Kachhwa">
                                                                                                    Kachhwa</option>
                                                                                                <option value="Kadaura">
                                                                                                    Kadaura</option>
                                                                                                <option value="Kadipur">
                                                                                                    Kadipur</option>
                                                                                                <option
                                                                                                    value="Kaimganj">
                                                                                                    Kaimganj</option>
                                                                                                <option value="Kairana">
                                                                                                    Kairana</option>
                                                                                                <option value="Kakori">
                                                                                                    Kakori</option>
                                                                                                <option value="Kakrala">
                                                                                                    Kakrala</option>
                                                                                                <option
                                                                                                    value="Kalinagar">
                                                                                                    Kalinagar</option>
                                                                                                <option value="Kalpi">
                                                                                                    Kalpi</option>
                                                                                                <option
                                                                                                    value="Kamalganj">
                                                                                                    Kamalganj</option>
                                                                                                <option value="Kampil">
                                                                                                    Kampil</option>
                                                                                                <option value="Kandhla">
                                                                                                    Kandhla</option>
                                                                                                <option value="Kannauj">
                                                                                                    Kannauj</option>
                                                                                                <option value="Kanpur">
                                                                                                    Kanpur</option>
                                                                                                <option
                                                                                                    value="Kanpur Dehat">
                                                                                                    Kanpur Dehat
                                                                                                </option>
                                                                                                <option value="Kant">
                                                                                                    Kant</option>
                                                                                                <option value="Kanth">
                                                                                                    Kanth</option>
                                                                                                <option value="Karari">
                                                                                                    Karari</option>
                                                                                                <option value="Karhal">
                                                                                                    Karhal</option>
                                                                                                <option value="Kasganj">
                                                                                                    Kasganj</option>
                                                                                                <option value="Katra">
                                                                                                    Katra</option>
                                                                                                <option
                                                                                                    value="Kaushambi District">
                                                                                                    Kaushambi District
                                                                                                </option>
                                                                                                <option value="Kemri">
                                                                                                    Kemri</option>
                                                                                                <option value="Khada">
                                                                                                    Khada</option>
                                                                                                <option value="Khaga">
                                                                                                    Khaga</option>
                                                                                                <option value="Khair">
                                                                                                    Khair</option>
                                                                                                <option
                                                                                                    value="Khairabad">
                                                                                                    Khairabad</option>
                                                                                                <option
                                                                                                    value="Khalilabad">
                                                                                                    Khalilabad</option>
                                                                                                <option value="Khanpur">
                                                                                                    Khanpur</option>
                                                                                                <option value="Kharela">
                                                                                                    Kharela</option>
                                                                                                <option
                                                                                                    value="Khargupur">
                                                                                                    Khargupur</option>
                                                                                                <option
                                                                                                    value="Kharkhauda">
                                                                                                    Kharkhauda</option>
                                                                                                <option
                                                                                                    value="Khatauli">
                                                                                                    Khatauli</option>
                                                                                                <option value="Khekra">
                                                                                                    Khekra</option>
                                                                                                <option value="Kheri">
                                                                                                    Kheri</option>
                                                                                                <option
                                                                                                    value="Khudaganj">
                                                                                                    Khudaganj</option>
                                                                                                <option value="Khurja">
                                                                                                    Khurja</option>
                                                                                                <option value="Khutar">
                                                                                                    Khutar</option>
                                                                                                <option value="Kirakat">
                                                                                                    Kirakat</option>
                                                                                                <option value="Kiraoli">
                                                                                                    Kiraoli</option>
                                                                                                <option
                                                                                                    value="Kiratpur">
                                                                                                    Kiratpur</option>
                                                                                                <option
                                                                                                    value="Kishanpur">
                                                                                                    Kishanpur</option>
                                                                                                <option value="Kishni">
                                                                                                    Kishni</option>
                                                                                                <option value="Kithor">
                                                                                                    Kithor</option>
                                                                                                <option value="Konch">
                                                                                                    Konch</option>
                                                                                                <option
                                                                                                    value="Kopaganj">
                                                                                                    Kopaganj</option>
                                                                                                <option value="Kosi">
                                                                                                    Kosi</option>
                                                                                                <option value="Kota">
                                                                                                    Kota</option>
                                                                                                <option value="Kotra">
                                                                                                    Kotra</option>
                                                                                                <option
                                                                                                    value="Kulpahar">
                                                                                                    Kulpahar</option>
                                                                                                <option value="Kunda">
                                                                                                    Kunda</option>
                                                                                                <option
                                                                                                    value="Kundarkhi">
                                                                                                    Kundarkhi</option>
                                                                                                <option value="Kurara">
                                                                                                    Kurara</option>
                                                                                                <option
                                                                                                    value="Kushinagar">
                                                                                                    Kushinagar</option>
                                                                                                <option
                                                                                                    value="Laharpur">
                                                                                                    Laharpur</option>
                                                                                                <option
                                                                                                    value="Lakhimpur">
                                                                                                    Lakhimpur</option>
                                                                                                <option value="Lakhna">
                                                                                                    Lakhna</option>
                                                                                                <option value="Lalganj">
                                                                                                    Lalganj</option>
                                                                                                <option
                                                                                                    value="Lalitpur">
                                                                                                    Lalitpur</option>
                                                                                                <option value="Lar">Lar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Lawar Khas">
                                                                                                    Lawar Khas</option>
                                                                                                <option value="Loni">
                                                                                                    Loni</option>
                                                                                                <option value="Lucknow">
                                                                                                    Lucknow</option>
                                                                                                <option
                                                                                                    value="Lucknow District">
                                                                                                    Lucknow District
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Machhlishahr">
                                                                                                    Machhlishahr
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Madhoganj">
                                                                                                    Madhoganj</option>
                                                                                                <option
                                                                                                    value="Madhogarh">
                                                                                                    Madhogarh</option>
                                                                                                <option value="Maghar">
                                                                                                    Maghar</option>
                                                                                                <option value="Mahaban">
                                                                                                    Mahaban</option>
                                                                                                <option
                                                                                                    value="Maharajganj">
                                                                                                    Maharajganj</option>
                                                                                                <option
                                                                                                    value="Mahmudabad">
                                                                                                    Mahmudabad</option>
                                                                                                <option value="Mahoba">
                                                                                                    Mahoba</option>
                                                                                                <option value="Maholi">
                                                                                                    Maholi</option>
                                                                                                <option value="Mahroni">
                                                                                                    Mahroni</option>
                                                                                                <option value="Mailani">
                                                                                                    Mailani</option>
                                                                                                <option
                                                                                                    value="Mainpuri">
                                                                                                    Mainpuri</option>
                                                                                                <option
                                                                                                    value="Malihabad">
                                                                                                    Malihabad</option>
                                                                                                <option
                                                                                                    value="Mandawar">
                                                                                                    Mandawar</option>
                                                                                                <option value="Maniar">
                                                                                                    Maniar</option>
                                                                                                <option
                                                                                                    value="Manikpur">
                                                                                                    Manikpur</option>
                                                                                                <option
                                                                                                    value="Manjhanpur">
                                                                                                    Manjhanpur</option>
                                                                                                <option
                                                                                                    value="Mankapur">
                                                                                                    Mankapur</option>
                                                                                                <option value="Marahra">
                                                                                                    Marahra</option>
                                                                                                <option value="Mariahu">
                                                                                                    Mariahu</option>
                                                                                                <option
                                                                                                    value="Mataundh">
                                                                                                    Mataundh</option>
                                                                                                <option value="Mathura">
                                                                                                    Mathura</option>
                                                                                                <option value="Mau">Mau
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Mau Aimma">
                                                                                                    Mau Aimma</option>
                                                                                                <option value="Maudaha">
                                                                                                    Maudaha</option>
                                                                                                <option
                                                                                                    value="Mauranwan">
                                                                                                    Mauranwan</option>
                                                                                                <option value="Mawana">
                                                                                                    Mawana</option>
                                                                                                <option value="Meerut">
                                                                                                    Meerut</option>
                                                                                                <option
                                                                                                    value="Mehnagar">
                                                                                                    Mehnagar</option>
                                                                                                <option
                                                                                                    value="Mehndawal">
                                                                                                    Mehndawal</option>
                                                                                                <option value="Milak">
                                                                                                    Milak</option>
                                                                                                <option
                                                                                                    value="Miranpur">
                                                                                                    Miranpur</option>
                                                                                                <option
                                                                                                    value="Miranpur Katra">
                                                                                                    Miranpur Katra
                                                                                                </option>
                                                                                                <option value="Mirganj">
                                                                                                    Mirganj</option>
                                                                                                <option
                                                                                                    value="Mirzapur">
                                                                                                    Mirzapur</option>
                                                                                                <option value="Misrikh">
                                                                                                    Misrikh</option>
                                                                                                <option value="Mohan">
                                                                                                    Mohan</option>
                                                                                                <option
                                                                                                    value="Mohanpur">
                                                                                                    Mohanpur</option>
                                                                                                <option
                                                                                                    value="Moradabad">
                                                                                                    Moradabad</option>
                                                                                                <option value="Moth">
                                                                                                    Moth</option>
                                                                                                <option
                                                                                                    value="Mubarakpur">
                                                                                                    Mubarakpur</option>
                                                                                                <option
                                                                                                    value="Mughal Sarai">
                                                                                                    Mughal Sarai
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Muhammadabad">
                                                                                                    Muhammadabad
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Muradnagar">
                                                                                                    Muradnagar</option>
                                                                                                <option value="Mursan">
                                                                                                    Mursan</option>
                                                                                                <option
                                                                                                    value="Musafir-Khana">
                                                                                                    Musafir-Khana
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Muzaffarnagar">
                                                                                                    Muzaffarnagar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Nadigaon">
                                                                                                    Nadigaon</option>
                                                                                                <option value="Nagina">
                                                                                                    Nagina</option>
                                                                                                <option value="Nagram">
                                                                                                    Nagram</option>
                                                                                                <option
                                                                                                    value="Najibabad">
                                                                                                    Najibabad</option>
                                                                                                <option value="Nakur">
                                                                                                    Nakur</option>
                                                                                                <option value="Nanauta">
                                                                                                    Nanauta</option>
                                                                                                <option
                                                                                                    value="Nandgaon">
                                                                                                    Nandgaon</option>
                                                                                                <option value="Nanpara">
                                                                                                    Nanpara</option>
                                                                                                <option value="Narauli">
                                                                                                    Narauli</option>
                                                                                                <option value="Naraura">
                                                                                                    Naraura</option>
                                                                                                <option
                                                                                                    value="Nautanwa">
                                                                                                    Nautanwa</option>
                                                                                                <option
                                                                                                    value="Nawabganj">
                                                                                                    Nawabganj</option>
                                                                                                <option
                                                                                                    value="Nichlaul">
                                                                                                    Nichlaul</option>
                                                                                                <option value="Nihtaur">
                                                                                                    Nihtaur</option>
                                                                                                <option value="Niwari">
                                                                                                    Niwari</option>
                                                                                                <option
                                                                                                    value="Nizamabad">
                                                                                                    Nizamabad</option>
                                                                                                <option value="Noida">
                                                                                                    Noida</option>
                                                                                                <option value="Nurpur">
                                                                                                    Nurpur</option>
                                                                                                <option value="Obra">
                                                                                                    Obra</option>
                                                                                                <option value="Orai">
                                                                                                    Orai</option>
                                                                                                <option value="Oran">
                                                                                                    Oran</option>
                                                                                                <option
                                                                                                    value="Pachperwa">
                                                                                                    Pachperwa</option>
                                                                                                <option
                                                                                                    value="Padrauna">
                                                                                                    Padrauna</option>
                                                                                                <option value="Pahasu">
                                                                                                    Pahasu</option>
                                                                                                <option value="Pali">
                                                                                                    Pali</option>
                                                                                                <option
                                                                                                    value="Palia Kalan">
                                                                                                    Palia Kalan</option>
                                                                                                <option
                                                                                                    value="Parichha">
                                                                                                    Parichha</option>
                                                                                                <option
                                                                                                    value="Parichhatgarh">
                                                                                                    Parichhatgarh
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Parshadepur">
                                                                                                    Parshadepur</option>
                                                                                                <option value="Patiali">
                                                                                                    Patiali</option>
                                                                                                <option value="Patti">
                                                                                                    Patti</option>
                                                                                                <option value="Pawayan">
                                                                                                    Pawayan</option>
                                                                                                <option
                                                                                                    value="Phalauda">
                                                                                                    Phalauda</option>
                                                                                                <option
                                                                                                    value="Phaphund">
                                                                                                    Phaphund</option>
                                                                                                <option value="Phariha">
                                                                                                    Phariha</option>
                                                                                                <option value="Phulpur">
                                                                                                    Phulpur</option>
                                                                                                <option value="Pihani">
                                                                                                    Pihani</option>
                                                                                                <option
                                                                                                    value="Pilibhit">
                                                                                                    Pilibhit</option>
                                                                                                <option value="Pilkhua">
                                                                                                    Pilkhua</option>
                                                                                                <option value="Pinahat">
                                                                                                    Pinahat</option>
                                                                                                <option
                                                                                                    value="Pipraich">
                                                                                                    Pipraich</option>
                                                                                                <option
                                                                                                    value="Pratapgarh">
                                                                                                    Pratapgarh</option>
                                                                                                <option
                                                                                                    value="Pukhrayan">
                                                                                                    Pukhrayan</option>
                                                                                                <option
                                                                                                    value="Puranpur">
                                                                                                    Puranpur</option>
                                                                                                <option value="Purwa">
                                                                                                    Purwa</option>
                                                                                                <option
                                                                                                    value="Rabupura">
                                                                                                    Rabupura</option>
                                                                                                <option
                                                                                                    value="Radhakund">
                                                                                                    Radhakund</option>
                                                                                                <option
                                                                                                    value="Raebareli">
                                                                                                    Raebareli</option>
                                                                                                <option value="Rajapur">
                                                                                                    Rajapur</option>
                                                                                                <option value="Ramkola">
                                                                                                    Ramkola</option>
                                                                                                <option
                                                                                                    value="Ramnagar">
                                                                                                    Ramnagar</option>
                                                                                                <option value="Rampur">
                                                                                                    Rampur</option>
                                                                                                <option value="Rampura">
                                                                                                    Rampura</option>
                                                                                                <option value="Ranipur">
                                                                                                    Ranipur</option>
                                                                                                <option value="Rasra">
                                                                                                    Rasra</option>
                                                                                                <option
                                                                                                    value="Rasulabad">
                                                                                                    Rasulabad</option>
                                                                                                <option value="Rath">
                                                                                                    Rath</option>
                                                                                                <option value="Raya">
                                                                                                    Raya</option>
                                                                                                <option value="Renukut">
                                                                                                    Renukut</option>
                                                                                                <option value="Reoti">
                                                                                                    Reoti</option>
                                                                                                <option value="Richha">
                                                                                                    Richha</option>
                                                                                                <option
                                                                                                    value="Robertsganj">
                                                                                                    Robertsganj</option>
                                                                                                <option
                                                                                                    value="Rudarpur">
                                                                                                    Rudarpur</option>
                                                                                                <option value="Rura">
                                                                                                    Rura</option>
                                                                                                <option value="Sadabad">
                                                                                                    Sadabad</option>
                                                                                                <option value="Sadat">
                                                                                                    Sadat</option>
                                                                                                <option value="Safipur">
                                                                                                    Safipur</option>
                                                                                                <option
                                                                                                    value="Saharanpur">
                                                                                                    Saharanpur</option>
                                                                                                <option
                                                                                                    value="Sahaspur">
                                                                                                    Sahaspur</option>
                                                                                                <option
                                                                                                    value="Sahaswan">
                                                                                                    Sahaswan</option>
                                                                                                <option value="Sahawar">
                                                                                                    Sahawar</option>
                                                                                                <option value="Saidpur">
                                                                                                    Saidpur</option>
                                                                                                <option value="Sakit">
                                                                                                    Sakit</option>
                                                                                                <option value="Salon">
                                                                                                    Salon</option>
                                                                                                <option value="Sambhal">
                                                                                                    Sambhal</option>
                                                                                                <option value="Samthar">
                                                                                                    Samthar</option>
                                                                                                <option value="Sandi">
                                                                                                    Sandi</option>
                                                                                                <option value="Sandila">
                                                                                                    Sandila</option>
                                                                                                <option
                                                                                                    value="Sant Kabir Nagar">
                                                                                                    Sant Kabir Nagar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Sant Ravi Das Nagar">
                                                                                                    Sant Ravi Das Nagar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Sarai Akil">
                                                                                                    Sarai Akil</option>
                                                                                                <option
                                                                                                    value="Sarai Ekdil">
                                                                                                    Sarai Ekdil</option>
                                                                                                <option
                                                                                                    value="Sarai Mir">
                                                                                                    Sarai Mir</option>
                                                                                                <option value="Sarauli">
                                                                                                    Sarauli</option>
                                                                                                <option
                                                                                                    value="Sardhana">
                                                                                                    Sardhana</option>
                                                                                                <option value="Sarila">
                                                                                                    Sarila</option>
                                                                                                <option value="Sasni">
                                                                                                    Sasni</option>
                                                                                                <option value="Satrikh">
                                                                                                    Satrikh</option>
                                                                                                <option value="Saurikh">
                                                                                                    Saurikh</option>
                                                                                                <option value="Sector">
                                                                                                    Sector</option>
                                                                                                <option value="Seohara">
                                                                                                    Seohara</option>
                                                                                                <option
                                                                                                    value="Shahabad">
                                                                                                    Shahabad</option>
                                                                                                <option
                                                                                                    value="Shahganj">
                                                                                                    Shahganj</option>
                                                                                                <option value="Shahi">
                                                                                                    Shahi</option>
                                                                                                <option
                                                                                                    value="Shahjahanpur">
                                                                                                    Shahjahanpur
                                                                                                </option>
                                                                                                <option value="Shahpur">
                                                                                                    Shahpur</option>
                                                                                                <option value="Shamli">
                                                                                                    Shamli</option>
                                                                                                <option
                                                                                                    value="Shamsabad">
                                                                                                    Shamsabad</option>
                                                                                                <option
                                                                                                    value="Shankargarh">
                                                                                                    Shankargarh</option>
                                                                                                <option
                                                                                                    value="Shergarh">
                                                                                                    Shergarh</option>
                                                                                                <option value="Sherkot">
                                                                                                    Sherkot</option>
                                                                                                <option
                                                                                                    value="Shikarpur">
                                                                                                    Shikarpur</option>
                                                                                                <option
                                                                                                    value="Shikohabad">
                                                                                                    Shikohabad</option>
                                                                                                <option
                                                                                                    value="Shishgarh">
                                                                                                    Shishgarh</option>
                                                                                                <option
                                                                                                    value="Shrawasti">
                                                                                                    Shrawasti</option>
                                                                                                <option
                                                                                                    value="Siddharthnagar">
                                                                                                    Siddharthnagar
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Sidhauli">
                                                                                                    Sidhauli</option>
                                                                                                <option
                                                                                                    value="Sidhpura">
                                                                                                    Sidhpura</option>
                                                                                                <option
                                                                                                    value="Sikandarabad">
                                                                                                    Sikandarabad
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Sikandarpur">
                                                                                                    Sikandarpur</option>
                                                                                                <option
                                                                                                    value="Sikandra">
                                                                                                    Sikandra</option>
                                                                                                <option
                                                                                                    value="Sikandra Rao">
                                                                                                    Sikandra Rao
                                                                                                </option>
                                                                                                <option value="Sirathu">
                                                                                                    Sirathu</option>
                                                                                                <option value="Sirsa">
                                                                                                    Sirsa</option>
                                                                                                <option
                                                                                                    value="Sirsaganj">
                                                                                                    Sirsaganj</option>
                                                                                                <option value="Sirsi">
                                                                                                    Sirsi</option>
                                                                                                <option value="Sisauli">
                                                                                                    Sisauli</option>
                                                                                                <option
                                                                                                    value="Siswa Bazar">
                                                                                                    Siswa Bazar</option>
                                                                                                <option value="Sitapur">
                                                                                                    Sitapur</option>
                                                                                                <option
                                                                                                    value="Sonbhadra">
                                                                                                    Sonbhadra</option>
                                                                                                <option value="Soron">
                                                                                                    Soron</option>
                                                                                                <option value="Suar">
                                                                                                    Suar</option>
                                                                                                <option
                                                                                                    value="Sultanpur">
                                                                                                    Sultanpur</option>
                                                                                                <option
                                                                                                    value="Surianwan">
                                                                                                    Surianwan</option>
                                                                                                <option value="Tajpur">
                                                                                                    Tajpur</option>
                                                                                                <option value="Talbah">
                                                                                                    Talbahat</option>
                                                                                                <option value="Talgram">
                                                                                                    Talgram</option>
                                                                                                <option value="Tanda">
                                                                                                    Tanda</option>
                                                                                                <option
                                                                                                    value="Thakurdwara">
                                                                                                    Thakurdwara</option>
                                                                                                <option
                                                                                                    value="Thana Bhawan">
                                                                                                    Thana Bhawan
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Tikaitnagar">
                                                                                                    Tikaitnagar</option>
                                                                                                <option value="Tikri">
                                                                                                    Tikri</option>
                                                                                                <option value="Tilhar">
                                                                                                    Tilhar</option>
                                                                                                <option
                                                                                                    value="Tindwari">
                                                                                                    Tindwari</option>
                                                                                                <option value="Titron">
                                                                                                    Titron</option>
                                                                                                <option
                                                                                                    value="Tori-Fatehpur">
                                                                                                    Tori-Fatehpur
                                                                                                </option>
                                                                                                <option
                                                                                                    value="Tulsipur">
                                                                                                    Tulsipur</option>
                                                                                                <option value="Tundla">
                                                                                                    Tundla</option>
                                                                                                <option value="Ugu">Ugu
                                                                                                </option>
                                                                                                <option value="Ujhani">
                                                                                                    Ujhani</option>
                                                                                                <option value="Ūn">Ūn
                                                                                                </option>
                                                                                                <option value="Unnao">
                                                                                                    Unnao</option>
                                                                                                <option value="Usehat">
                                                                                                    Usehat</option>
                                                                                                <option value="Utraula">
                                                                                                    Utraula</option>
                                                                                                <option
                                                                                                    value="Varanasi">
                                                                                                    Varanasi</option>
                                                                                                <option
                                                                                                    value="Vrindavan">
                                                                                                    Vrindavan</option>
                                                                                                <option
                                                                                                    value="Wazirganj">
                                                                                                    Wazirganj</option>
                                                                                                <option
                                                                                                    value="Zafarabad">
                                                                                                    Zafarabad</option>
                                                                                                <option value="Zaidpur">
                                                                                                    Zaidpur</option>
                                                                                                <option value="Zamania">
                                                                                                    Zamania</option>
                                                                                                <option value="OTHERS">
                                                                                                    Others</option>

                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

 

                                                                                    <input type="checkbox"
                                                                                        id="sameAsPresent"
                                                                                        name="sameAsPresent">
                                                                                    <label for="sameAsPresent"
                                                                                        class="required">
                                                                                        <h5>If address is "Same as
                                                                                            Present Address"</h5>
                                                                                    </label>


                                                                                       <div class="form first"></div>
                                                                                <div class="Address Details">
                                                                                    <span class="title">
                                                                         <label for="ADDRESSDETAILS"><h2><b>PERMANENT ADDRESS</b></h2></label>
                                                                                 
                                                                                    </span>
                                                                                     
                                                                                            


                                                                                        </div>

                                                                                   <div class="fields">
                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTSTREET"> STREET</label>
                                                                                            <input type="text"
                                                                                                id="permanentstreet"
                                                                                                name="permanentstreet"
                                                                                                placeholder="STREET"   value="${student.permanentstreet}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTLANDMARK"> LANDMARK</label>
                                                                                            <input type="text"
                                                                                                id="permanentlandmark"
                                                                                                name="permanentlandmark"
                                                                                                placeholder="LANDMARK"   value="${student.permanentlandmark}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTPINCODE">  PINCODE</label>
                                                                                            <input type="text"
                                                                                                id="permanentpincode"
                                                                                                name="permanentpincode"
                                                                                                placeholder="PINCODE"    value="${student.permanentpincode}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTCOUNTRY">  COUNTRY</label>
                                                                                            <input type="text"
                                                                                                id="permanentcountry"
                                                                                                name="permanentcountry"
                                                                                                placeholder="COUNTRY"  value="${student.permanentcountry}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTSTATE"> STATE</label>
                                                                                            <input type="text"
                                                                                                id="permanentstate" name="permanentstate"
                                                                                                placeholder="STATE"    value="${student.permanentstate}">

                                                                                        </div>

                                                                                        <div class="input-field">
                                                                                              <label for="PERMANENTCITY"> CITY</label>
                                                                                            <input type="text" id="permanentcity"
                                                                                                name="permanentcity"
                                                                                                placeholder="CITY"   value="${student.permanentcity}">

                                                                                        </div>
                                                                                    </div></br>
                                                                                    </br>
                                                                                            <div> 



                                                                                            
                                                                                     <div class="form first">
                                                                                        <div class="Documents Upload">
                                                                                            <span class="title">
                                                                                                <h3><b><u> DOCUMENTS
                                                                                                            UPLOAD</u></b>
                                                                                                </h3>
                                                                                            </span></br>
 

                                                                                         <div>
                                                                                              
                                                                                                <input type="file"
                                                                                                    id="highschoolMarksheet"
                                                                                                    name="highschoolMarksheet"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required     value="${student.highschoolMarksheet}">

                                                                                                <label
                                                                                                    for="highSchoolMarkSheet"
                                                                                                    class="required">HIGH
                                                                                                    SCHOOL MARKSHEET
                                                                                                </label>
                                                                                            </div>
                                                                                            <br>
                                                                                            <div>
                                                                                                <input type="file"
                                                                                                    id="intermediateSchoolMarksheet"
                                                                                                    name="intermediateSchoolMarksheet"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required value="${student.intermediateSchoolMarksheet}">


                                                                                                <label
                                                                                                    for="IntermediateSchoolMarkSheet"
                                                                                                    class="required">INTERMEDIATE
                                                                                                    SCHOOL
                                                                                                    MARKSHEET</label>
                                                                                            </div>
                                                                                            <br>

                                                                                            <div>
                                                                                                <input type="file"
                                                                                                    id="graduationMarksheet"
                                                                                                    name="graduationMarksheet"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required      value="${student.graduationMarksheet}">


                                                                                                <label
                                                                                                    for="GraduationMarkSheet"
                                                                                                    class="required">GRADUATION
                                                                                                    MARKSHEET</label>
                                                                                            </div>
                                                                                            <br>

                                                                                            <div>
                                                                                                <input type="file"
                                                                                                    id="graduationDegree"
                                                                                                    name="graduationDegree"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required    value="${student.graduationDegree}">


                                                                                                <label
                                                                                                    for="GraduationDegree"
                                                                                                    class="required">GRADUATION
                                                                                                    DEGREE</label>
                                                                                            </div>
                                                                                            <br>

                                                                                           <!------- <div>
                                                                                                <input type="file"
                                                                                                    id="postgraduationMarksheet"
                                                                                                    name="postgraduationMarksheet"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required       value="${student.postgraduationMarksheet}">


                                                                                                <label
                                                                                                    for="postgraduationMarkSheet"
                                                                                                    class="required">POST
                                                                                                    GRADUATION MARKSHEET

                                                                                                </label>
                                                                                            </div>
                                                                                            <br>

                                                                                            <div>
                                                                                                <input type="file"
                                                                                                    id="postgraduationDegree"
                                                                                                    name="postgraduationDegree"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required   value="${student.postgraduationDegree}">


                                                                                                <label
                                                                                                    for="postgraduationDegree"
                                                                                                    class="required">POST
                                                                                                    GRADUATION
                                                                                                    DEGREE</label>
                                                                                            </div>
                                                                                            <br>

                                                                                            <div>
                                                                                              

                                                                                                <input type="file"
                                                                                                    name="postgraduationMigration"
                                                                                                    id="postgraduationMigration"
                                                                                                    accept=".pdf,.jpg,.png"
                                                                                                    required    value="${student.postgraduationMigration}">
                                                                                                <label
                                                                                                    for="POST GRADUATION MIGRATION"
                                                                                                    class="required">POST
                                                                                                    GRADUATION
                                                                                                    MIGRATION</label>
                                                                                            </div>
                                                                                            </br>
                                                                                            <div> -------->


                                                                              ${ page.replace(/'/g, '') === 'edit' ? `<button type="submit">Update</button>`:`<div></div>` }
                                                                                             
                                                                                            `;

                                                                                        }).catch(error => {
                                                                                            console.error('Error fetching student data:', error);
                                                                                        });


// const toggleExportBtn = document.getElementById('toggleExport');
//         const exportOptions = document.getElementById('exportOptions');

//         toggleExportBtn.addEventListener('click', () => {
//             exportOptions.classList.toggle('show');
//         });
        
//         document.getElementById('toPDF').addEventListener('click', () => {
//             const { jsPDF } = window.jspdf;
//             const doc = new jsPDF();
//             doc.text('Student Registration Data', 10, 10);
            
            
//             const table = document.getElementById('studentTable');
//             const rows = Array.from(table.querySelectorAll('tr'));

//             let y = 20;
//             rows.forEach(row => {
//                 const cells = Array.from(row.querySelectorAll('th, td'));
//                 let text = cells.map(cell => cell.innerText).join(', ');
//                 doc.text(text, 10, y);
//                 y += 10;
//             });

//             doc.save('student_data.pdf');
//         });

        
//         document.getElementById('toCSV').addEventListener('click', () => {
//             let csvContent = '';
//             const table = document.getElementById('studentTable');
//             const rows = Array.from(table.querySelectorAll('tr'));

//             rows.forEach(row => {
//                 const cells = Array.from(row.querySelectorAll('th, td'));
//                 let rowText = cells.map(cell => cell.innerText).join(',');
//                 csvContent += rowText + '\n';
//             });

//             const blob = new Blob([csvContent], { type: 'text/csv' });
//             saveAs(blob, 'student_data.csv');
//         });

//         // Export to Excel using SheetJS (xlsx)
//         document.getElementById('toEXCEL').addEventListener('click', () => {
//             const table = document.getElementById('studentTable');
//             const worksheet = XLSX.utils.table_to_sheet(table);
//             const workbook = XLSX.utils.book_new();
//             XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Data');
//             XLSX.writeFile(workbook, 'student_data.xlsx');
//         });


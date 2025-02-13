function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const studentId = getQueryParam('session');
const page = getQueryParam('page').trim();

console.log('Session:', session);
console.log('Page:', page);
const containerdiv = document.getElementById("thecontainer");
async function initialcall(session) {
    console.log('Fetching data for session:', session);
    const response = await fetch(`/getStudentBysession/${session}`, {
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
                         
 <header>Program Details</header></br>
           <form id="programdetails">
            <img src="/images/logo.png" alt="Logo" class="logo">

               <!-- Image Upload -->
            <div class="row">
              <h1> Program Details</h1>
            </div>


            <div class="row">
                <div class="col">
                    <label for="studentId">Student ID:</label>
                    <input type="text" id="studentId" name="studentId" placeholder="Enter Student ID"   value="${student.studentId}">
                </div>
                <div class="col">
                    <label for="session">Session:</label>
                    <select id="session" name="session">
                        <option value="january">January</option>
                        <option value="july">July</option>
                    </select>
                </div>
                <div class="col">
                    <label for="year">Year:</label>
                    <select id="year" name="year">
                     
                    </select>
                </div>
            </div>

         

            <!-- Fellowship Status, Date of Joining, Part-Time/Full-Time -->
            <div class="row">
                <div class="col">
                    <label for="fellowship">Fellowship Status:</label>
                    <select id="fellowship" name="fellowship"   value="${student.fellowship}">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="col">
                    <label for="dateOfJoining">Date of Joining:</label>
                    <input type="date" id="dateOfJoining" name="dateOfJoining"   value="${student.dateOfJoining}">
                </div>
                <div class="col">
                    <label for="partTimeFullTime">Part-Time/Full-Time:</label>
                    <select id="partTimeFullTime" name="partTimeFullTime"  value="${student.partTimeFullTime}">
                        <option value="part-time">Part-Time</option>
                        <option value="full-time">Full-Time</option>
                    </select>
                </div>
            </div>

            <!-- Program Name, School Name, Supervisor -->
            <div class="row">
                <div class="col">
                    <label for="programName">Program Name:</label>
                    <select id="programName" name="programName"   value="${student.programName}">
                        <!-- Program Name Options -->
                    </select>
                </div>
                <div class="col">
                    <label for="schoolName">School Name:</label>
                    <select id="schoolName" name="schoolName"   value="${student.schoolName}">
                        <!-- School Name Options -->
                    </select>
                </div>
                <div class="col">
                    <label for="supervisor">Supervisor:</label>
                    <input type="text" id="supervisor" name="supervisor" placeholder="Supervisor Name"   value="${student.supervisor}">
                </div>
            </div>

            <!-- Scholar Stage, SRC/DRC, Examination -->
            <div class="row">
                <div class="col">
                    <label for="scholarStage">Stage of Scholar:</label>
                    <select id="scholarStage" name="scholarStage"   value="${student.scholarStage}">
                        <option value="coursework">Course Work</option>
                        <option value="synopsis">Synopsis</option>
                        <option value="abstract">Abstract</option>
                    </select>
                </div>
                <div class="col">
                    <label for="srcDrc">SRC/DRC:</label>
                    <select id="srcDrc" name="srcDrc"   value="${student.srcDrc}">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="col">
                    <label for="examination">Examination:</label>
                    <select id="examination" name="examination"   value="${student.examination}">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="form-group">
                <button type="submit" id="submitButton">Submit</button>
            </div>
        </form>
    </div>

     ${ page.replace(/'/g, '') === 'edit' ? `<button type="submit">Update</button>`:`<div></div>` }
                                                                                             
                                                                                            `;

                                                                                        }).catch(error => {
                                                                                            console.error('Error fetching student data:', error);
                                                                                        });
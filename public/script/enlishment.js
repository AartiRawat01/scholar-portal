// async function filterStudents() {
//     const programName = document.getElementById('program-name').value;
//     const schoolName = document.getElementById('school-name').value;
//     const academicYear = document.getElementById('academic-year').value;

//     const response = await fetch(`/students?programName=${encodeURIComponent(programName)}&schoolName=${encodeURIComponent(schoolName)}&academicYear=${encodeURIComponent(academicYear)}`);
//     const students = await response.json();
//     console.log(students); 
//     updateUserTable(students);
// }

//  function updateUserTable(students) {
//     if ($.fn.DataTable.isDataTable('#example')) {
//         $('#example').DataTable().clear().destroy();
//     }

//     $('#example').DataTable({
//         data: students,
//         columns: [
//             { data: null, title: 'S1.no', render: (data, type, row, meta) => meta.row + 1 },
//             { data: 'Studentid', title: 'Student Id' },
//             { data: 'name', title: 'Name' },
//             { data: 'schoolName', title: 'School Name' },
//             { data: 'programName', title: 'Program Name' },
//             { data: 'academicYear', title: 'Academic Year' },
//             { data: 'active', title: 'Status', render: data => data ? 'Active' : 'Inactive' },
            
//             { data: null, title: 'Action', render: (data, type, row) => `<button class="edit-btn" data-id="${row.Studentid}">Edit</button>` }
//         ],
//         dom: 'Bfrtip',
//         buttons: ['excel', 'pdf', 'print']
//     });
// }


// $(document).on('click', '.edit-btn', function() {
//     const studentId = $(this).data('id');
//     console.log('Edit button clicked for student with ID:', studentId);
//     editUser(studentId); 
// });

// function editUser(studentId) {

//     alert('Edit button clicked for Student ID: ' + studentId);
// }


// document.addEventListener('DOMContentLoaded', (event) => {
//     const switchMode = document.getElementById('switch-mode');
//     const isDarkMode = localStorage.getItem('dark-mode') === 'true';
//     document.body.classList.toggle('dark-mode', isDarkMode);
//     switchMode.checked = isDarkMode;
// });

// document.getElementById('switch-mode').addEventListener('change', function() {
//     const isDarkMode = this.checked;
//     document.body.classList.toggle('dark-mode', isDarkMode);
//     localStorage.setItem('dark-mode', isDarkMode);
// });

// const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

// allSideMenu.forEach(item => {
//     const li = item.parentElement;
//     item.addEventListener('click', function () {
//         allSideMenu.forEach(i => {
//             i.parentElement.classList.remove('active');
//         });
//         li.classList.add('active');
//     });
// });

// const menuBar = document.querySelector('#content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');

// menuBar.addEventListener('click', function () {
//     sidebar.classList.toggle('hide');
// });

// function openTab(tabName) {
//     var i, tabContent, tabLinks;
//     tabContent = document.getElementsByClassName("tab-content");
//     for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }
//     tabLinks = document.getElementsByClassName("tab");
//     for (i = 0; i < tabLinks.length; i++) {
//         tabLinks[i].classList.remove("active");
//     }
//     document.getElementById(tabName).style.display = "block";
//     event.currentTarget.classList.add("active");
// }

// if (window.innerWidth < 768) {
//     sidebar.classList.add('hide');
// }

// window.addEventListener('resize', function () {
//     if (this.innerWidth > 576) {
//         searchButtonIcon.classList.replace('bx-x', 'bx-search');
//         searchForm.classList.remove('show');
//     }
// });

// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
//     if (this.checked) {
//         document.body.classList.add('dark');
//     } else {
//         document.body.classList.remove('dark');
//     }
// });

// function myFunction() {
//     alert("Icon clicked!");
// }


// document.querySelector('#logoutbtn').addEventListener('click', function(event) {
//     event.preventDefault(); 

//     if (confirm('Are you sure you want to log out?')) {
//         localStorage.removeItem('isLoggedIn'); 

//         window.location.href = '/adminlogin';


//         window.history.pushState(null, null, '/adminlogin');
//         window.history.replaceState(null, null, '/adminlogin');
//     }
// });


// <div id="smartyContainer" style="position: absolute; top: 0px; right: 0px; line-height: initial; z-index: 2147483647; width: auto; font-size: initial;">

// </div>
// Load all data when page opens
loadStudents();
loadCourses();
loadRegistrations();
loadAcademicRecords();


// ================= STUDENTS =================

function loadStudents() {

    fetch("/students")
        .then(response => response.json())
        .then(students => {

            const table = document.getElementById("studentTable");

            table.innerHTML = "";

            students.forEach(student => {

                table.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.course}</td>
                        <td>
                            <button onclick="deleteStudent(${student.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
            });
        });
}


function addStudent() {

    const student = {
        name: document.getElementById("studentName").value,
        email: document.getElementById("studentEmail").value,
        course: document.getElementById("studentCourse").value
    };

    fetch("/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(() => {

        document.getElementById("studentName").value = "";
        document.getElementById("studentEmail").value = "";
        document.getElementById("studentCourse").value = "";

        loadStudents();
    });
}


function deleteStudent(id) {

    fetch("/students/" + id, {
        method: "DELETE"
    })
    .then(() => loadStudents());
}


// ================= COURSES =================

function loadCourses() {

    fetch("/courses")
        .then(response => response.json())
        .then(courses => {

            const table = document.getElementById("courseTable");

            table.innerHTML = "";

            courses.forEach(course => {

                table.innerHTML += `
                    <tr>
                        <td>${course.id}</td>
                        <td>${course.courseName}</td>
                        <td>${course.courseCode}</td>
                    </tr>
                `;
            });
        });
}


function addCourse() {

    const course = {
        courseName: document.getElementById("courseName").value,
        courseCode: document.getElementById("courseCode").value
    };

    fetch("/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
    })
    .then(response => response.json())
    .then(() => {

        document.getElementById("courseName").value = "";
        document.getElementById("courseCode").value = "";

        loadCourses();
    });
}


// ================= REGISTRATION =================

function loadRegistrations() {

    fetch("/registrations")
        .then(response => response.json())
        .then(registrations => {

            const table =
                document.getElementById("registrationTable");

            table.innerHTML = "";

            registrations.forEach(registration => {

                table.innerHTML += `
                    <tr>
                        <td>${registration.id}</td>
                        <td>${registration.studentId}</td>
                        <td>${registration.courseId}</td>
                        <td>${registration.semester}</td>
                    </tr>
                `;
            });
        });
}


function addRegistration() {

    const registration = {

        studentId:
            Number(document.getElementById(
                "registrationStudentId").value),

        courseId:
            Number(document.getElementById(
                "registrationCourseId").value),

        semester:
            document.getElementById(
                "registrationSemester").value
    };

    fetch("/registrations", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(registration)

    })
    .then(response => response.json())
    .then(() => {

        document.getElementById(
            "registrationStudentId").value = "";

        document.getElementById(
            "registrationCourseId").value = "";

        document.getElementById(
            "registrationSemester").value = "";

        loadRegistrations();
    });
}


// ================= ACADEMIC RECORDS =================

function loadAcademicRecords() {

    fetch("/academic-records")
        .then(response => response.json())
        .then(records => {

            const table =
                document.getElementById("academicTable");

            table.innerHTML = "";

            records.forEach(record => {

                table.innerHTML += `
                    <tr>
                        <td>${record.id}</td>
                        <td>${record.studentId}</td>
                        <td>${record.semester}</td>
                        <td>${record.marks}</td>
                        <td>${record.grade}</td>
                    </tr>
                `;
            });
        });
}


function addAcademicRecord() {

    const record = {

        studentId:
            Number(document.getElementById(
                "academicStudentId").value),

        semester:
            document.getElementById(
                "academicSemester").value,

        marks:
            Number(document.getElementById(
                "academicMarks").value),

        grade:
            document.getElementById(
                "academicGrade").value
    };

    fetch("/academic-records", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(record)

    })
    .then(response => response.json())
    .then(() => {

        document.getElementById(
            "academicStudentId").value = "";

        document.getElementById(
            "academicSemester").value = "";

        document.getElementById(
            "academicMarks").value = "";

        document.getElementById(
            "academicGrade").value = "";

        loadAcademicRecords();
    });
}
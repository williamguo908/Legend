# Documentation

(...)

# User
**GET** */user/profile/:id* 
Gets user dashboard taking id as parameter
Eg. https://localhost:4000/user/profile:id

**POST** */user/student*
Adds new student to the database
Eg. https://localhost:4000/user/student

**GET** */user/belt/:stuId*
Get belt standing of a particular student taking id as parameter
Eg. https://localhost:4000/user/belt/20

**GET** */user/attendance/:stuId*
Get attendance history of a student taking id as parameter
Eg. https://localhost:4000/user/attendance/20

**GET** */user/schedule/:stuId*
Get schedule of a student taking id as parameter
Eg. https://localhost:4000/user/schedule/20

**GET** */notes/:stuId*
Get notes from instructor about a student taking id as parameter
Eg. https://localhost:4000/user/notes/:20


# Admin
**GET** */admin/profile/:id* 
Gets admin dashboard taking id as parameter
Eg. https://localhost:4000/admin/profile:id

**GET** */admin/class*
Gets list of all classes
Eg. https://localhost:4000/admin/class

**GET** */admin/class/:id*
Gets class list taking id as parameter
Eg. https://localhost:4000/admin/class/:id

**GET** */admin/student*
Gets list of all students
Eg. https://localhost:4000/admin/student

**GET** */admin/student/:classId*
Gets list of all students in a particular class
Eg. https://localhost:4000/admin/student/:classId





﻿# Documentation

(Initial resource endpoints for User and Admin accounts)
# Admin
- [ ] **GET** */admin/student*
<p>Gets list of all students</p>
<p>Gets first name, last name, belt, classes attended for all students</p>

- [ ] **GET** */admin/student/:id*
<p>Gets view of student with particular id</p>
<p>Gets first name, last name, belt, classes attended, public and private notes of a student</p>

 - [x] **POST** */admin/student*
<p>Adds new student to the database</p>
<p>Adds first name, last name, age from dob, address, emergency contact, phone number, belt,
and unique access code</p>

- [ ] **GET** */admin/class*
<p>Gets list of all classes</p>
<p>Gets class name, ages, and total number of students enrolled in the class for each class (there are 9 classes)</p>

- [ ] **GET** */admin/attendance/:classId*
<p>Gets class list for attendance taking</p>
<p>Gets list of students to be checked off for attending that class. For students present,
will increment their attendanceCount</p>





#*Note sure about these yet, some will probably not be needed*
**GET** */admin/profile/:id*
<p>Gets admin dashboard taking id as parameter</p>

**GET** */admin/class/:classId*
<p>Gets class list taking id as parameter</p>

 **GET** */admin/student/:classId*
<p>Gets list of all students in a particular class</p>

 **POST** */admin/student/attendance/:classId/:belt-cycle/:stuId*
<p>Records attendance of a student for a class within a belt cycle</p>

**PUT**
*/admin/student/attendance/:classId/:belt-cycle/:stuId*
<p>Updates attendance of a student for a class within a belt cycle</p>

**POST** */admin/student/:belt-test/:stuId*
<p>Adds new belt test for a particular student</p>

**POST** */admin/student/notes/:belt-test/:stuId*
<p>Adds notes from a belt test for a particular student</p>

**POST** */admin/student/belt/:stuId*
<p>Adds new belt for a particular student</p>

**GET** */admin/student/notes/:stuId*
<p>Gets user-visible notes for a particular student</p>

**POST** */admin/student/notes/:stuId*
<p>Adds user-visible notes for a particular student.</p>

**POST** */admin/student/hidden-notes/:stuId*
<p>Adds user-hidden notes for a particular student</p>

 **GET** */admin/student/hidden-notes/:stuId*
<p>Gets hidden notes for a particular student</p>



# User
#*Not sure about all these yet..*
**GET** */user/profile/:id*
<p>Gets user dashboard taking id as parameter</p>

**PUT**

**GET** */user/belt/:stuId*
<p>Get belt standing of a particular student taking id as parameter</p>

**GET** */user/attendance/:stuId*
<p>Get full attendance history of a student taking id as parameter</p>

**GET** */user/attendance/:classId/:belt-cycle/:stuId*
<p>Gets attendance history of a student within a belt-cycle for a particular class</p>

**GET** */user/schedule/:stuId*
<p>Get schedule of a student taking id as parameter</p>

**GET** */notes/:belt-test/:stuId*
<p>Get instructor notes for a particular belt test for a particular student</p>

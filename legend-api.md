
﻿# Documentation

- [x] **GET** */index*

- [x] **GET** */register*

- [x] **GET** */login*

- [x] **GET** */contact-us*

- [x] **GET** */programs*

- [x] **POST** */register*
<p>User registering account</p>
<p>Inputs user email, password, first name, last name and checks register code.</p>

- [x] **POST** */login*
<p>Authenticates user account when user provides email and password</p>

- [ ] **POST** */logout*
<p>Authenticates user account when user provides email and password</p>

- [ ] **POST** */reset-password*
<p>Sends link to valid registered email to reset password.</p>

- [ ] **POST** */contact-us*
<p>Sends email to admin and provides copy of email to one submitting.</p>


(Initial resource endpoints for User and Admin accounts)
# Admin
- [x] **GET** */admin/students*
<p>Gets list of all students</p>
<p>Gets first name, last name, belt, classes attended for all students</p>

- [x] **GET** */admin/student/:id*
<p>Gets view of student with particular id</p>
<p>Gets first name, last name, belt, classes attended, public and private notes of a student</p>

 - [x] **POST** */admin/students*
<p>Adds new student to the database</p>
<p>Adds first name, last name, dob, address, emergency contact, phone number, belt,
and unique access code</p>

- [x] **GET** */admin/class*
<p>Gets list of all classes</p>
<p>Gets class name, ages, and total number of students enrolled in the class for each class (there are 9 classes)</p>

- [x] **GET** */admin/attendance/:className*
<p>Gets class list for attendance taking</p>
<p>Gets list of students to be checked off for attending that class. For students present,
will increment their attendanceCount</p>

- [x] **POST** */admin/attendance/*
<p>Record attendance for list of students in a class</p>
<p>For students present, will increment their attendanceCount</p>

- [ ] **POST** */admin/promote/:id*
<p>Promotes student into the next belt class upon successful pass of belt test.</p>






#*Note sure about these yet, some will probably not be needed*
**GET** */admin/profile/:id*
<p>Gets admin dashboard taking id as parameter</p>

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


**GET** */user/attendance/:stuId*
<p>Get full attendance history of a student taking id as parameter</p>


**GET** */user/schedule/:stuId*
<p>Get schedule of a student taking id as parameter</p>

**GET** */notes/:belt-test/:stuId*
<p>Get instructor notes for a particular belt test for a particular student</p>


	userSchema:{
		firstName: String,
		lastName: String,
		email: String,
		password: String,
    role: Number,
		students: [{studentSchema}]
	}

	studentSchema: {
		firstName: String,
		lastName: String,
		dob: String,
		address: String,
		contactName​:​ String,
		contactPhone: ​String,
		publicNotes: String,
		privateNotes: String,
		currentBelt: ​String​,
		classes: [{classSchema}],
		leadershipTeam: Boolean,
		competitionTeam: Boolean
	}

	classSchema: {
		className: String,
		bbClub: { category: String, level: Number },
		classesAttended: Number,
		totalClasses: Number,
		belt: String,
		isEnrolled: Boolean,
		tests: [{testSchema}]
	}

	testSchema: {
		testPassed: Boolean,
		testNotes: String
	}


	Admin adds student, code is students id from mongodb
	Parent registers account with code, checking that the code exists in database before updating
	user account info with credentials.
 	When admin adds another student into the account, how will this info go under an account already created?
	It will get created as an entirely new document.  When parent registers this student, query for this student code (subdoc) and push it to their list of students. Then delete the entire old document

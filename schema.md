
	userSchema:{
		firstName: String,
		lastName: String,
		email: String,
		password: String,
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
		tests: [{testSchema}]
	}

	testSchema: {
		testPassed: Boolean,
		testNotes: String
	}

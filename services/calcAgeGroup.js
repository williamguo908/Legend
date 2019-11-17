

module.exports = function (dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var ageGroup = ""
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age >= 3 && age <= 4){
      ageGroup = "3-4"
    }
    else if (age >= 5 && age <= 7){
      ageGroup = "5-7"
    }
    else if (age >= 8 && age <= 12){
      ageGroup = "8-12"
    }
    else if (age > 12) {
      ageGroup = "Teen&Adult"
    }
    console.log(ageGroup);
    console.log("age: "+ age);
    return ageGroup;
}



module.exports = function (belt, ageGroup) {
  var className = ""
  var belt = belt.toLowerCase();
  if (ageGroup == "3-4"){
    if (belt == "white" || belt =="white+"){
      className = "Little Legends"
    }
  }
  else if (ageGroup =="5-7"){
    if (belt == "white" || belt == "yellow"){
      className = "Legend Beginner"
    }
    else if (belt == "white" || belt == "yellow" || belt == "yellow-black" || belt == "orange" || belt == "orange-black"){
      className = "Legend"
    }
  }
  else if (ageGroup == "8-12"){
    if (belt == "purple" || belt == "purple-white" || belt == "green" || belt == "green-white" ||
        belt == "blue" || belt == "blue-white" || belt == "blue-black" ) {
      className = "Legend Junior"
    }
    else if (belt == "red" || belt == "red-white" ||
    belt == "red-black" || belt == "brown" || belt || "brown-black"){
      className = "Legend Junior Advanced"
    }
  }
  else if (ageGroup == "Teen&Adult"){
    className = "Teen&Adult"
  }
  console.log(className);
  return className;
}

function info() {
  let names = document.getElementById("name").value,
    grade = document.getElementById("grade").value,
    city = document.getElementById("city").value,
    schoolName = document.getElementById("school-name").value;

  console.log(names);
  {
    if (names == "" || names.length < 2) {
      alert("Please, Enter valid name");
    } else if (schoolName == "" || schoolName.length < 2) {
      alert("Please, Enter valid school name");
    } else if (grade == "" || grade < 0) {
      alert("Please, Enter valid grade");
    } else if (city == "" || city.length < 2) {
      alert("Please, Enter valid city name");
    } else {
      alert("Your info has been saved.");
    }
  }
}

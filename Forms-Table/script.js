const form = document.getElementById("form");

function Form() {
  let smallName = document.getElementById("name-small");
  let smallSchool = document.getElementById("school-small");
  let smallGrade = document.getElementById("grade-small");
  let smallCity = document.getElementById("city-small");

  let name = document.getElementById("name").value.trim();
  let schoolName = document.getElementById("school-name").value.trim();
  let grades = document.getElementById("grade").value.trim();
  let cityName = document.getElementById("city").value.trim();

  let nameColor = document.getElementById("name");
  let schoolNameColor = document.getElementById("school-name");
  let gradeColor = document.getElementById("grade");
  let cityColor = document.getElementById("city");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
  });

  function validation() {
    validateName();
    validateSchoolName();
    validateGrade();
    validateCityName();
  }

  function validateName() {
    if (name.length < 3) {
      smallName.innerHTML = "Username should be greater than 2 alphabets.";
      nameColor.classList.remove("success");
      nameColor.classList.add("error");
      smallName.classList.add("error-small");
      smallName.classList.remove("success-small");
    } else {
      nameColor.classList.add("success");
      nameColor.classList.remove("error");
      smallName.classList.remove("error-small");
      smallName.classList.add("success-small");
    }
  }

  function validateSchoolName() {
    if (schoolName.length < 3) {
      smallSchool.innerHTML = "School Name should be greater than 2 alphabets.";
      schoolNameColor.classList.remove("success");
      schoolNameColor.classList.add("error");
      smallSchool.classList.add("error-small");
      smallSchool.classList.remove("success-small");
    } else {
      schoolNameColor.classList.add("success");
      schoolNameColor.classList.remove("error");
      smallSchool.classList.add("success-small");
    }
  }
  function validateGrade() {
    if (grades <= 0 || grades > 10) {
      smallGrade.innerHTML = "Grades should be between 1 and 10";
      gradeColor.classList.remove("success");
      gradeColor.classList.add("error");
      smallGrade.classList.add("error-small");
      smallGrade.classList.remove("success-small");
    } else {
      gradeColor.classList.add("success");
      gradeColor.classList.remove("error");
      smallGrade.classList.add("success-small");
    }
  }

  function validateCityName() {
    if (cityName.length < 3) {
      smallCity.innerHTML = "City Name should be greater than 2 alphabets.";
      cityColor.classList.remove("success");
      cityColor.classList.add("error");
      smallCity.classList.add("error-small");
      smallCity.classList.remove("success-small");
    } else {
      cityColor.classList.add("success");
      cityColor.classList.remove("error");
      smallCity.classList.add("success-small");
    }
  }

  document.querySelector("form").onsubmit = (e) => {
    e.target.reset();
  };

  let table = document.querySelector("table");
  const button = document.createElement("button");
  button.classList.add("mouse");
  if (
    (name.length > 3 || name.length == 3) &&
    (schoolName.length > 3 || schoolName.length == 3) &&
    (cityName.length > 3 || cityName.length == 3) &&
    ((grades > 0 && grades < 10) || grades == 10)
  ) {
    let template = `<tr>
  <th> ${name}</th>
  <th> ${schoolName}
  <th> ${grades}
  <th> ${cityName}
  <th> <button class="deleteBtn" >Delete</button>
  </th>`;
    table.innerHTML += template;

    function onDelete(e) {
      if (!e.target.classList.contains("deleteBtn")) {
        return;
      }
      const btn = e.target;
      btn.closest("tr").remove();
    }
    table.addEventListener("click", onDelete);
  }

  let search = document.getElementById("searcheditem");
  search.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      searchedItem();
    }
  });
  function searchedItem() {
    let searchedItem = document.getElementById("searcheditem").value;
    let upperCase = searchedItem.toUpperCase();

    let itemsTable = document.getElementById("table");
    let tr = itemsTable.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      let th0 = tr[i].getElementsByTagName("th")[0];
      if (th0) {
        txtValue = th0.textContent || th0.innerText;
        if (txtValue.toUpperCase().indexOf(upperCase) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
function Filter() {
  let dropdownValue = document.getElementById("dropdown").value;
  dropdownValue = parseInt(dropdownValue);
  if (dropdownValue == "0") {
    return;
  } else if (dropdownValue < 11) {
    let itemsTable = document.getElementById("table");
    let tr = itemsTable.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
      let th2 = tr[i].getElementsByTagName("th")[2];
      if (th2) {
        txtValue = th2.textContent || th2.innerText;
        if (txtValue == dropdownValue) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } else {
    let itemsTable = document.getElementById("table");
    let tr = itemsTable.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
      tr[i].style.display = "";
    }
  }
}

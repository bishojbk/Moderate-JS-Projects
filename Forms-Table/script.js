function onAdd(e) {
  const form = document.querySelector("form");
  const table = document.querySelector("table");
  const tbody = document.querySelector("tbody");
  form.addEventListener("submit", onAdd);

  e.preventDefault();

  let names = document.getElementById("name").value,
    grade = document.getElementById("grade").value,
    city = document.getElementById("city").value,
    schoolName = document.getElementById("school-name").value;

  const nameValidate = form.elements.namedItem("name");
  const schoolNameValidate = form.elements.namedItem("school-name");
  const gradeValidate = form.elements.namedItem("grade");
  const cityValidate = form.elements.namedItem("city");

  nameValidate.addEventListener("input", validate);
  schoolNameValidate.addEventListener("input", validate);
  gradeValidate.addEventListener("input", validate);
  cityValidate.addEventListener("input", validate);

  nameError = document.getElementById("name-error");
  schoolError = document.getElementById("school-error");
  gradeError = document.getElementById("grade-error");
  cityError = document.getElementById("city-error");

  function validate(e) {
    let target = e.target;
    console.log(target);

    if (target.id === "name") {
      if (names == "" || names.length < 2) {
        nameError.innerHTML = "Name should be greater than 2 alphabets";
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    }

    {
    }
    if (schoolName == "" || schoolName.length < 2) {
      schoolError.innerHTML = "School name should be greater than 2 alphabets";
    } else if (grade == "" || grade < 0 || grade > 10) {
      gradeError.innerHTML = "Grade should be greater than 0 and less than 10";
    } else if (city == "" || city.length < 2) {
      cityError.innerHTML = "City name should be greater than 2 alphabets";
    } else {
      tbody.innerHTML += `
      <tr>
          <td>${names}</td>
          <td>${schoolName}</td>
          <td>${grade}</td>
          <td>${city}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
    `;
    }
    form.reset();
    function onDelete(e) {
      if (!e.target.classList.contains("deleteBtn")) {
        return;
      }
      const btn = e.target;
      btn.closest("tr").remove();
    }
    table.addEventListener("click", onDelete);
  }
}

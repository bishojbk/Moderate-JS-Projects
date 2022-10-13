function onAdd(e) {
  const form = document.querySelector("form");
  const table = document.querySelector("table");
  const tbody = document.querySelector("tbody");
  form.addEventListener("submit", onAdd);

  e.preventDefault();

  let names = document.getElementById("name").value.trim(),
    grade = document.getElementById("grade").value.trim(),
    city = document.getElementById("city").value.trim(),
    schoolName = document.getElementById("school-name").value.trim();
  let small = document.querySelector("small");
  console.log(small);
  console.log(names);
  const formStyle = document.querySelector("form-control");
  console.log(formStyle);

  function setErrorFor(input, message) {
    small.innerText = message;
    formStyle.classList.add("form-control.success input");
  }

  if (names == "" || names.length < 2) {
    setErrorFor(names, "Names should be greater than 2 characters");
  } else {
    setSuccessFor(names), update(names);
  }

  if (schoolName == "" || schoolName.length < 2) {
    setErrorFor(schoolName, "School name should be greater than 2 alphabets");
  } else {
    setSuccessFor(schoolName), update(schoolName);
  }
  if (grade == "" || grade < 0 || grade > 10) {
    setErrorFor(grade, "Grade should be greater than 0 and less than 10");
  } else {
    setSuccessFor(grade), update(grade);
  }
  if (city == "" || city.length < 2) {
    setErrorFor(city, "City name should be greater than 2 alphabets");
  } else {
    setSuccessFor(city), update(city);
  }

  function update() {
    tbody.innerHTML += `
      <tr>
          <td>${names}</td>
          <td>${schoolName}</td>
          <td>${grade}</td>
          <td>${city}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
    `;

    form.reset();
  }
  function onDelete(e) {
    if (!e.target.classList.contains("deleteBtn")) {
      return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
  }
  table.addEventListener("click", onDelete);
}

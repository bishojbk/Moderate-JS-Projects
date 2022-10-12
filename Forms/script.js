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

  {
    if (names == "" || names.length < 2) {
      alert("Please, Enter valid name");
    } else if (schoolName == "" || schoolName.length < 2) {
      alert("Please, Enter valid school name");
    } else if (grade == "" || grade < 0) {
      alert("Please, Enter valid grade");
    } else if (city == "" || city.length < 2) {
      alert("Please, Enter valid city name");
    }
    tbody.innerHTML += `
      <tr>
          <td>${names}</td>
          <td>${schoolName}</td>
          <td>${grade}</td>
          <td>${city}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
    `;

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

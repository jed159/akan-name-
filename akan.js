// function getAkanName() {
//   const day = parseInt(document.getElementById("day").value);
//   const month = parseInt(document.getElementById("month").value);
//   const year = parseInt(document.getElementById("year").value);

//   const genderInputs = document.getElementsByName("gender");
//   let gender = "";
//   for (let i = 0; i < genderInputs.length; i++) {
//     if (genderInputs[i].checked) {
//       gender = genderInputs[i].value;
//       break;
//     }
//   }

//   // 2. Validatation
//   if (isNaN(day) || day < 1 || day > 31) {
//     alert("Day must be between 1 and 31");
//     return;
//   }

//   if (isNaN(month) || month < 1 || month > 12) {
//     alert("Month must be between 1 and 12");
//     return;
//   }

//   if (isNaN(year)) {
//     alert("Please enter a valid year");
//     return;
//   }

//   if (gender === "") {
//     alert("Please select a gender");
//     return;
//   }

//   // 3. Calculate day of the week
//   const CC = Math.floor(year / 100);
//   

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (!dob) {
    alert("Please enter your date of birth");
    return;
  }

  const date = new Date(dob);
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday

  let akanName;

  if (gender === "male") {
    akanName = maleNames[day];
  } else {
    akanName = femaleNames[day];
  }

  document.getElementById("result").textContent =
    `You were born on ${date.toLocaleDateString("en-US", { weekday: "long" })}.
     Your Akan name is ${akanName}.`;
});
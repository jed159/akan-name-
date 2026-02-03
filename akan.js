function getAkanName() {
  // 1. Retrieve user input
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const genderInputs = document.getElementsByName("gender");
  let gender = "";
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }

  // 2. Validate input
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Day must be between 1 and 31");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Month must be between 1 and 12");
    return;
  }

  if (isNaN(year)) {
    alert("Please enter a valid year");
    return;
  }

  if (gender === "") {
    alert("Please select a gender");
    return;
  }

  // 3. Calculate day of the week
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  let d =
    Math.floor(
      (CC / 4 - 2 * CC - 1) +
      (5 * YY / 4) +
      (26 * (MM + 1) / 10) +
      DD
    ) % 7;

  // Make sure result is positive
  if (d < 0) {
    d = d + 7;
  }

  const daysOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];

  const maleNames = [
    "Kwame",
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi"
  ];

  const femaleNames = [
    "Ama",
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua"
  ];

  const dayName = daysOfWeek[d];
  let akanName = "";

  // 4. Match day and gender to Akan name
  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // 5. Display result
  document.getElementById("result").innerHTML =
    `You were born on <strong>${dayName}</strong>.<br>
     Your Akan name is <strong>${akanName}</strong>.`;
}

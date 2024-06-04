function calculateAge() {
  const birthYear = document.getElementById("birthYear").value;
  const birthMonth = document.getElementById("birthMonth").value - 1; 
  const birthDay = document.getElementById("birthDay").value;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  const result = document.getElementById("result");
  result.textContent = `Your age is ${age} years old.`;
}

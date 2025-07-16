function calculateAge() {
  const birthYear = document.getElementById("birth-year").value;
  const currentYear = new Date().getFullYear();

  const age = currentYear - birthYear;
  const days = age * 365;

  document.getElementById("result").textContent = `You are approx ${days} days old!`;
}

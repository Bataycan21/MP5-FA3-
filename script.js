function checkEmail() {
  const email = document.getElementById('emailInput').value;
  const isValid = email.includes('@gmail.com');
  document.getElementById('emailOutput').textContent = `Output: ${isValid ? 'Valid' : 'Invalid'}`;
}

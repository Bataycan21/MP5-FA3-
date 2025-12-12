function checkEmail() {
  const email = document.getElementById('emailInput').value;
  const isValid = email.includes('@');
  document.getElementById('emailOutput').textContent = `Output: ${isValid ? 'Valid' : 'Invalid'}`;
}

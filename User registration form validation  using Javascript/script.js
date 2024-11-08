function validateForm() { 
  let isValid = true; 

  document.getElementById("nameError").textContent = ""; 
  document.getElementById("emailError").textContent = ""; 
  document.getElementById("passwordError").textContent = ""; 
  document.getElementById("confirmPasswordError").textContent = ""; 

  
  const name = document.getElementById("name").value; 
  const email = document.getElementById("email").value; 
  const password = document.getElementById("password").value; 
  const confirmPassword = 
document.getElementById("confirmPassword").value; 

  if (name.trim() === "") { 
      document.getElementById("nameError").textContent = "Name is 
required."; 
      isValid = false; 
  } 

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  if (!emailPattern.test(email)) { 
      document.getElementById("emailError").textContent = "Please 
enter a valid email."; 
      isValid = false; 
  } 

  if (password.length < 6) { 
      document.getElementById("passwordError").textContent = 
"Password must be at least 6 characters."; 
      isValid = false; 
  } 

  
  if (password !== confirmPassword) { 
      document.getElementById("confirmPasswordError").textContent = 
"Passwords do not match."; 
      isValid = false; 
  } 


  return isValid; 
}
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
 
  if (email.value === "" || password.value === "") {
  return alert('Всі поля повинні бути заповнені')
}
 console.log(`Email: ${email.value}, password: ${password.value}`)

  event.currentTarget.reset();
}
  
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  
  email === ""|| password === ""
  ? alert('всі поля повинні бути заповнені')
  : console.log(formData);
  event.currentTarget.reset();
}
  
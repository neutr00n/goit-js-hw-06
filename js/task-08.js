const ref = {
  formRef: document.querySelector(".login-form"),
};

ref.formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("please fill in all fields");
  }

  console.log(formData);
  event.currentTarget.reset();
}

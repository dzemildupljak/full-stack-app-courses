const loginBtn = document.querySelector("#loginBtn");
const closeBtn = document.querySelector("#closeModal");
const regBtn = document.querySelector("#regBtn");
const modal = document.querySelector(".custom-modal");
const register = document.querySelector(".registerBtn");
const BASE_URL = "http://localhost:3000/mock-data";
async function getMockData() {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

async function loginAcces() {
  let email = document.querySelector("#login_email");
  let pass = document.querySelector("#login_password");
  console.log(email.value);
  try {
    let response = await axios.post(BASE_URL, {
      email: email.value,
      password: pass.value,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginAcces();
});
regBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});

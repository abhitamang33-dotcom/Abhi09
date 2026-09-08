const lampSwitch = document.getElementById("lampSwitch");
const loginForm = document.getElementById("loginForm");
const body = document.body;

let isOn = false;

lampSwitch.addEventListener("click", () => {
  isOn = !isOn;

  if (isOn) {
    loginForm.classList.add("active");
    gsap.to(body, {
      backgroundColor: "#1c1f24",
      duration: 0.6,
    });
  } else {
    loginForm.classList.remove("active");
    gsap.to(body, {
      backgroundColor: "#121417",
      duration: 0.6,
    });
  }
});

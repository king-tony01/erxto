window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const inputCon = document.querySelector(".input-con");
  const showVisible = document.querySelector(".fa-eye-slash");
  const passwordInput = document.getElementById("password");
  const sendBtn = document.getElementById("signup");
  const agree = document.getElementById("agree");

  // Implementing tab for email or phone input
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const tabClicked = tab.id;

      // Changing the email or phone input based on tab clicked
      switch (tabClicked) {
        case "email-tab":
          inputCon.innerHTML = `<div class="input-field">
            <i class="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
            />
          </div>`;
          break;
        case "phone-tab":
          inputCon.innerHTML = `<div class="input-field">
            <i class="fas fa-phone"></i>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+234 123 456 7890"
            />
          </div>`;
      }
    });
  });

  // Toggling the password display
  showVisible.addEventListener("click", () => {
    showVisible.classList.toggle("fa-eye");
    if (showVisible.classList.contains("fa-eye")) {
      passwordInput.setAttribute("type", "text");
    } else {
      passwordInput.setAttribute("type", "password");
    }
  });

  // Toggling the send button from disabled to abled
  agree.addEventListener("click", () => {
    if (agree.checked) {
      sendBtn.classList.add("active");
      sendBtn.removeAttribute("disabled");
    } else {
      sendBtn.classList.remove("active");
      sendBtn.setAttribute("disabled", "");
    }
  });

  // Handling form submission
  sendBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (
      passwordInput.value == "" &&
      (document.getElementById("email").value == "" ||
        document.getElementById("phone").value == "")
    )
      return;
    sendBtn.innerHTML = `<i class="fas fa-spinner"></i> Signing Up`;
    const form = new FormData(document.querySelector("form"));

    // Creating user object
    const userData = {
      id: {},
      password: "",
    };
    for (const [key, value] of form) {
      switch (key) {
        case "email":
          userData.id.email = value;
          break;
        case "phone":
          userData.id.phone = value;
          break;
        case "password":
          userData.password = value;
          break;
      }
    }
    const res = await sendJSON(userData, "/auth/newuser");
    if (res.stat) {
      location.assign(`${location.origin}/main?ref=${res.data.details.u_code}`);
    }
    sendBtn.textContent = "Sign Up";
    console.log(userData);
  });

  passwordInput.addEventListener("keyup", () => {
    console.log(isValidPassword(passwordInput.value));
  });
});

/**
 * This function checks and validates a password to see if password is up to 8 characters long, contains a digit, contains uppercase and lowercase, and contains a character
 * @param {string} password
 * @returns {boolean}
 */
function isValidPassword(password) {
  if (password.length > 8) return false;
  if (!/\d/.test(password)) return false;
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) return false;
  return true;
}

/**
 * This method is called to send a `POST` request to the backend. It sends the `data` object and the the end point url as `endpoint`
 * @param {object} data
 * @param {APIendpoint | string} endpoint
 */
export async function sendJSON(data, endpoint) {
  const response = await fetch(`${location.origin}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  console.log(resData);
  return resData;
}

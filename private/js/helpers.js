/**
 * The getJSON() method is a simple function to fetch data and resolve it, the resolved data is then returned for use. This method takes an object as the first parameter and a url string as the second parameter (The url is the pathanme to route to e.g /home, /user, /balance, ...etc)
 * @param {object} data
 * @param {url} query
 * @returns Resolved Promise (resData)
 */
export async function getJSON(data, query) {
  const response = await fetch(`${location.origin}${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return resData;
}

/**
 * This method is called to display a form, the form element is passed as an argument and the method brings the form into display.
 * @param {HTMLFormElement} form
 */
export function openForm(form) {
  form.classList.add("active");
}

/**
 * This method hides a form from the visible window. The form is passed as an argument and the method removes it from the visible document by removing the "active" class.
 * @param {HTMLFormElement} form
 */
export function closeForm(form) {
  form.classList.remove("active");
}

/**
 * This method is called to display the deposit form, and to collect the deposit data.
 *
 */
export function depositForm() {
  const modal = document.querySelector(".modal");
  modal.classList.add("active");
  modal.innerHTML = `<form class="fund-con">
          <div class="fund-head">
            <h2>Fund Wallet</h2>
            <i class="fas fa-close" data-close="close"></i>
          </div>
            <div>
              <label for="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="$ 10 - 1000"
              />
            </div>
          <label for="">Card Details</label>
          <div class="icons">
            <img src="/private/images/visa-icon.png" alt="" /><img
              src="/private/images/verve-icon.png"
              alt=""
            /><img src="/private/images/mastercard-icon.png" alt="" />
          </div>
          <label for="card-number">Card Number</label>
          <input
            type="number"
            name="cardNumber"
            id="card-number"
            placeholder="123 456 789 000"
          />
          <label for="name-on-card>Name on card">Name on card</label>
          <input
            type="text"
            name="nameOnCard"
            id="name-on-card"
            placeholder="John Doe A."
          />
          <div class="divide">
            <input
              type="date"
              name="expiryDate"
              id="expiryDate"
              placeholder="Expiry Date:"
            />
            <input type="number" name="cvv" id="cvv" placeholder="CVV:" />
          </div>
          <button id="continue">Continue</button>
        </form>`;
}

/**
 * This method is called to display the withdrawal form, and to collect the withdrawal data.
 *
 */
export function withdrawalForm() {
  document.querySelector(
    ".modal"
  ).innerHTML = `<form class="fund-con withdrawal-con">
          <div class="fund-head">
            <h2>Withdrawal</h2>
            <i class="fas fa-close" data-close="close"></i>
          </div>
          <label for="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Min N20,000 Max N500,000"
          />
          <label for="accountNumber">Account Number</label>
          <input
            type="number"
            name="accountNumber"
            id="accountNumber"
            placeholder="1234567890"
          />
          <label for="accountName">Account Name</label>
          <input
            type="text"
            name="accountName"
            id="accountName"
            placeholder="John Doe A."
          />
          <button id="continue">Continue</button>
        </form>`;
  document.querySelector(".modal").classList.add("active");
}

/**
 * This method is called to display the passcode UI, and to collect the passcode for validation.
 *
 */
export function passcodeForm() {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="fund-con pass-code-con">
          <div class="fund-head">
            <h2>Pass Code</h2>
            <i class="fas fa-close" data-close="close"></i>
          </div>
          <p>Please enter your pass code to finish your transaction</p>
          <div class="passcode-wrap">
            <i class="fas fa-lock"></i>
            <input type="password" name="passCode" id="passCode" />
          </div>
          <button id="validate">Continue</button>
        </div>`;
  document.querySelector(".modal").classList.add("active");
}

/**
 * This method is called to display the trade form UI, and to collect the data for validation.
 *
 */
export function tradeForm() {
  document.querySelector(".modal").innerHTML = `<form class="fund-con">
          <div class="fund-head">
            <h2>Trade</h2>
            <i class="fas fa-close" data-close="close"></i>
          </div>
          <label for="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="$ 10 - 1000"
          />
          <br />
          <label>Select Asset</label>
          <div class="divide">
            <div class="asset active">
              <img src="/private/images/usdt-token.png" alt="" />
              <div>
                <div class="middle-divide">
                  <b>USDT</b><small>Income: <span>70%</span></small>
                </div>

                <small><span>N 820.00</span></small>
              </div>
            </div>
            <div class="asset">
              <img src="/private/images/usdc-coin.png" alt="" />
              <div>
                <div class="middle-divide">
                  <b>USDC</b><small>Income: <span>70%</span></small>
                </div>
                <small><span>N 820.00</span></small>
              </div>
            </div>
          </div>
          <br />
          <button id="continue">Continue</button>
        </form>`;
  document.querySelector(".modal").classList.add("active");
  const assets = document.querySelectorAll(".asset");
  assets.forEach((asset) => {
    asset.addEventListener("click", () => {
      assets.forEach((asset) => asset.classList.remove("active"));
      asset.classList.add("active");
    });
  });
}

/**
 * This method is called to close the modal window.
 *
 */
export function closeModal() {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal").innerHTML = "";
}

/**
 * This method is called to all functionalities related to click events, such as the trade, fund and withdraw buttons.
 *
 */
export function activate() {
  const dashboardButtons = document.querySelectorAll(".dashboard-btn");
  dashboardButtons.forEach((dashboardButton) => {
    dashboardButton.addEventListener("click", () => {
      let button = dashboardButton.getAttribute("data-btn");
      switch (button) {
        case "fund":
          depositForm();
          break;
        case "withdraw":
          withdrawalForm();
          break;
        case "trade":
          tradeForm();
          break;
      }
      document.querySelector(".modal").addEventListener("click", (e) => {
        let close = e.target.getAttribute("data-close");
        if (close == "close") {
          closeModal();
        }
      });
      document.getElementById("continue").addEventListener("click", (e) => {
        e.preventDefault();
        passcodeForm();
      });
    });
  });
}

/**
 * This method is called to display the passcode UI, and to collect the passcode for validation.
 *
 */
export function chart() {
  let months = [];
  const currentDate = new Date();
  for (let i = 0; i <= currentDate.getMonth(); i++) {
    const date = new Date(0, i); // The second argument is the month (0-11)
    const monthName = date.toLocaleString("en-US", { month: "short" });
    months.push(monthName);
  }

  // Get the canvas element
  var ctx = document.getElementById("chart").getContext("2d");

  // Define your data
  var data = {
    labels: months,
    datasets: [
      {
        label: "Price",
        data: [20, 40, 80, 20, 50],
        borderColor: "#4cbf6a", // Line color
        borderWidth: 2, // Line width
        backgroundColor: "#bbffcd",
        fill: true, // Fill the area under the line
        tension: 0.5,
      },
    ],
  };

  // Create the chart
  var myChart = new Chart(ctx, {
    type: "line", // Line chart
    data: data,
    options: {
      scales: {
        x: {
          grid: {
            display: false, // Remove x-axis gridlines
          },
        },
        y: {
          grid: {
            display: false, // Remove y-axis gridlines
          },
          beginAtZero: true,
        },
      },
    },
  });
}

/**
 * This method fetches the user data from server and returns the data as `object`
 * @returns {object}
 */
export async function getUser() {
  const response = await fetch(`${location.origin}/user${location.search}`);
  const user = await response.json();
  return user;
}

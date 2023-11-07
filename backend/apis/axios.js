const axios = require("axios");

const exchangeApiBaseUrl = "https://api.exchange.com"; // Replace with the actual exchange's API base URL
const apiKey = "YOUR_API_KEY"; // Replace with your API key
const apiSecret = "YOUR_API_SECRET"; // Replace with your API secret
const withdrawalAddress = "RECIPIENT_ADDRESS"; // Replace with the recipient's cryptocurrency address
const cryptocurrency = "BTC"; // Replace with the cryptocurrency you want to transfer
const amountToSend = 1.0; // Replace with the amount to transfer

// Create a function to send assets
async function sendAssets() {
  const endpoint = "/withdraw"; // Replace with the actual withdrawal endpoint for the exchange

  // Construct the request data
  const data = {
    currency: cryptocurrency,
    amount: amountToSend,
    address: withdrawalAddress,
  };

  // Create headers with API key and signature
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY": apiKey,
    "X-API-SIGNATURE": "generate_signature_here", // You need to create the signature as per the exchange's documentation.
  };

  try {
    const response = await axios.post(exchangeApiBaseUrl + endpoint, data, {
      headers,
    });

    if (response.status === 200) {
      console.log("Withdrawal request successful.");
    } else {
      console.error(
        `Withdrawal request failed. Status Code: ${response.status}, Response: ${response.data}`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Call the function to initiate the withdrawal
sendAssets();

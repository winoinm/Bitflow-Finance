// Fetch live trading data from Binance API
const tradingDataContainer = document.getElementById("trading-data");

// Replace with your Binance API details
const API_URL = "https://api.binance.com/api/v3/ticker/price";

async function fetchTradingData() {
  try {
    const symbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT"]; // Example symbols
    const promises = symbols.map(symbol => fetch(`${API_URL}?symbol=${symbol}`).then(res => res.json()));
    const data = await Promise.all(promises);

    tradingDataContainer.innerHTML = data.map(item => `
      <p><strong>${item.symbol}</strong>: $${parseFloat(item.price).toFixed(2)}</p>
    `).join('');
  } catch (error) {
    tradingDataContainer.innerHTML = "<p>Failed to load trading data. Please try again later.</p>";
    console.error("Error fetching trading data:", error);
  }
}

// Fetch trading data every 5 seconds
setInterval(fetchTradingData, 5000);
fetchTradingData();

// Handle Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you ${name}! Your message has been sent successfully.`);
  contactForm.reset();
});

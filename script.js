// ===== STATE MANAGEMENT (like React useState) =====
// In React, you'd use: const [qrHistory, setQrHistory] = useState([])
const STORAGE_KEY = "qr_history";

function getHistory() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// ===== QR GENERATION =====
function generateQR(value) {
  const qrContainer = document.getElementById("qr-container");
  qrContainer.innerHTML = ""; // Clear old QR
  
  new QRCode(qrContainer, {
    text: value,
    width: 260,
    height: 260,
    colorDark: "#0b1220",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

// ===== HISTORY MANAGEMENT =====
function addToHistory(url) {
  const history = getHistory();
  
  // Remove duplicate if exists (keep it fresh at the top)
  const filtered = history.filter(item => item !== url);
  
  // Add new item at start, keep only 10 items
  filtered.unshift(url);
  filtered.splice(10);
  
  saveHistory(filtered);
  renderHistory();
}

function renderHistory() {
  const historyContainer = document.getElementById("qr-history");
  const history = getHistory();
  
  if (history.length === 0) {
    historyContainer.innerHTML = "";
    return;
  }
  
  let html = '<div class="qr-history-title">Recent URLs:</div>';
  html += '<ul class="qr-history-list">';
  
  history.forEach(url => {
    const displayUrl = url.length > 30 ? url.substring(0, 27) + "..." : url;
    html += `
      <li class="qr-history-item" title="${url}" data-url="${url}">
        ${displayUrl}
      </li>
    `;
  });
  
  html += '</ul>';
  historyContainer.innerHTML = html;
  
  // Add click listeners to history items
  document.querySelectorAll(".qr-history-item").forEach(item => {
    item.addEventListener("click", () => {
      const url = item.dataset.url;
      document.getElementById("qr-input").value = url;
      generateQR(url);
    });
  });
}

// ===== INITIALIZATION =====
let qrValue = "https://frontendmentor.io";
generateQR(qrValue);
renderHistory();

const input = document.getElementById("qr-input");
const button = document.getElementById("qr-btn");

// ===== EVENT LISTENERS =====
button.addEventListener("click", () => {
  const value = input.value.trim();
  if (value.length === 0) {
    alert("Please enter a valid URL");
    return;
  }
  qrValue = value;
  generateQR(value);
  addToHistory(value);
  input.value = ""; // Clear input after generation
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

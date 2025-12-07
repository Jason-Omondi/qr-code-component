// Generate a REAL QR code dynamically
const qrValue = "https://frontendmentor.io"; // MUST be text, not an image path

const qrContainer = document.getElementById("qr-container");
qrContainer.innerHTML = ""; // clear old content

const qr = new QRCode(qrContainer, {
  text: qrValue,
  width: 260,
  height: 260,
  colorDark: "#0b1220",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// Enable "click to copy"
qrContainer.style.cursor = "pointer";

qrContainer.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(qrValue);

    // Temporary feedback
    const oldContent = qrContainer.innerHTML;
    qrContainer.innerHTML = `
      <p style="
        text-align:center;
        padding-top:100px;
        font-weight:bold;
        color:#0b1220;
      ">Copied!</p>`;

    setTimeout(() => {
      qrContainer.innerHTML = oldContent;
    }, 800);

  } catch (err) {
    console.error("Copy failed", err);
  }
});

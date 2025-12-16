//api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText;
let qr;
const express = require("express");
const app = express();
const port = 1234;
app.listen(port,()=>{
  console.log("listening at port = 1234");
});
app.use((req,res)=>{
   console.log("request recieved");
})
app.get('/',(req,res)=>{
  res.send(path.join(__dirname,"templates/qr.html"))
});
app.post('/',(req,res)=>{
  res.send(path.join(__dirname,"templates/qr.html"));
})
function generateQR() {
  let qrText = document.getElementById("qrText").value;

  if (qrText.trim() === "") {
    alert("Please enter text or URL!");
    return;
  }

  document.getElementById("qrBox").innerHTML = ""; // Reset old QR

  qr = new QRCode(document.getElementById("qrBox"), {
    text: qrText,
    width: 200,
    height: 200,
  });
}

function downloadQR() {
  if (!qr) {
    alert("Generate a QR first!");
    return;
  }

  let img = document.querySelector("#qrBox img");
  let canvas = document.querySelector("#qrBox canvas");

  let url = "";

  if (img) url = img.src;
  else if (canvas) url = canvas.toDataURL();

  let a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  a.click();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

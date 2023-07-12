// si el scan es correcto se muestra el resultado en el div resultado
function onScanSuccess(qrCodeMessage) {
    document.getElementById("resultado").innerHTML =
      '<span class="result">' + qrCodeMessage + "</span>";
  }
  
  // Si el scan es incorrecto podemos mostrar un error
  function onScanError(errorMessage) {
    // Handle Scan Error
  }
  
  // Setting Qr Scanner properties
  var html5QrCodeScanner = new Html5QrcodeScanner("lector", {
    fps: 10,
    qrbox: 250
  });
  
  // in
  html5QrCodeScanner.render(onScanSuccess, onScanError);
  
/*// si el scan es correcto se muestra el resultado en el div resultado
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
  */
  
  //.----

  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    document.getElementById("resultado").innerHTML =
      '<span class="result">' + decodedText + decodedResult + "</span>";
  }
  
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }
  
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
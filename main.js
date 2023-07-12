/*

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
    false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  */

  const html5QrCode = new Html5QrCode("reader")
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    document.getElementById("resultado").innerHTML =
    '<span class="result">' + decodedText + decodedResult + "</span>";
  };


  const config = {
    fps: 10,
    qrbox: {
      with: 250,
      height: 250
    }
  };

  html5QrCode.start(
    {
      facingMode: "environment"
    },
    config, qrCodeSuccessCallback
    )
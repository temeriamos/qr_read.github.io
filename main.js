
  const html5QrCode = new Html5Qrcode("reader", true)
  
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    document.getElementById("resultado").innerHTML =
    '<span class="result">' + decodedText + decodedResult + "</span>";
  };


  const config = {
    fps: 10,
    qrbox: {
      width: 250,
      height: 250
    }
  };

  function startScan(){
    console.log("Start Scan")
    html5QrCode.start(
      {
        facingMode: "environment"
      },
      config, qrCodeSuccessCallback
      )
  }


  function stopScan(){
    html5QrCode.stop().then((ignore) => {
      console.log("Stop Scan")
    }).catch((err) => {

    });
  }

 
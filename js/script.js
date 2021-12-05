
  // Set the date we're counting down to
  var countDownDate = new Date().getTime() + 5000;

  var distance = 6000;

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    //var distance = countDownDate - now;

	  distance = distance - 1000;
    // Time calculations for days, hours, minutes and seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("secs").value = seconds ;


    // document.getElementById("secs2").value = seconds ;
    // document.getElementById("mins2").value = minutes ;
    // document.getElementById("hours2").value = hours ;
    // document.getElementById("days2").value = days ;

    // If the count down is finished, write some text
    if (seconds < 0) {
      clearInterval(x);
      distance = 1000;
      document.getElementById("hid").style.visibility = "visible";


/*
      document.getElementById("secs2").value = 0 ;
      document.getElementById("mins2").value = 0 ;
      document.getElementById("hours2").value = 0 ;
      document.getElementById("days2").value = 0 ;
*/
      // window.location = "http://www.soniaremor.com.br/mpc-encerrada/";
    }
  }, 1000);




  function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    if (event.clientY < 50) {
      // Remove this event listener
      document.removeEventListener("mouseout", onMouseOut);

      // Show the popup
      document.getElementById("modalForm").style.display = "block";
    }
  }

  document.addEventListener("mouseout", onMouseOut);

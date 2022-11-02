countdown = setInterval(function () {
      seconds = seconds -1;
      timer.innerHTML = "Temps restant: " + seconds;
      if(seconds == 0)
      {
        gameOver();
      }
},1000)

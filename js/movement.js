document.addEventListener("keydown", function () {
    if (isPlaying) {
      if (event.key == "ArrowLeft" && mario.x > 0) {
        xPositionMario = xPositionMario - 20;
        mario.style.left = xPositionMario + "px";
      }

      if (event.key == "ArrowRight" && mario.x + mario.width < maxWidth) {
        xPositionMario = xPositionMario + 20;
        mario.style.left = xPositionMario + "px";
      }

      if (event.key == "ArrowUp" && mario.y > 0) {
        yPositionMario = yPositionMario - 20;
        mario.style.top = yPositionMario + "px";
      }

      if (event.key == "ArrowDown" && mario.y + mario.height < maxHeight) {
        yPositionMario = yPositionMario + 20;
        mario.style.top = yPositionMario + "px";
      }

    }
  }

)
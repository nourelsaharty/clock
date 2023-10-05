function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var displayText =
      pad(hours) + ":" +
      pad(minutes) + ":" +
      pad(seconds);
  
    document.getElementById("display").textContent = displayText;
  }
  
  function pad(number) {
    return (number < 10) ? "0" + number : number;
  }
  
  setInterval(updateTime, 1000);
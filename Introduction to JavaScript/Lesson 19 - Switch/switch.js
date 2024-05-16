function chooseDestination() {
    var destinationInput = document.getElementById("destinationInput").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    switch (destinationInput) {
      case 'case 1':
        resultDiv.textContent = "You chose to go to the mountains!";
      case 'case 2':
        resultDiv.textContent = "You chose to explore the city!";
      case 'case 3':
        resultDiv.textContent = "You chose to go on a safari!";
      case 'case 4':
        resultDiv.textContent = "You chose to go to the beach!";
      case 'case 5':
        resultDiv.textContent = "You chose to visit a water park!";
      case 'case 6':
        resultDiv.textContent = "You chose to go hiking!";
      default:
        resultDiv.textContent = "No trip chosen.";
    }
  }
  

  
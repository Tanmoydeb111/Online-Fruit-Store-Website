
  window.addEventListener('load', function () {
    var userName = document.getElementById('userName');
    var storedName = localStorage.getItem('userName');
    if (storedName) {
      userName.innerText = "Hello, " + storedName;
    }
  });

  function updateName() {
    var nameInput = document.getElementById('nameInput');
    var userName = document.getElementById('userName');

    if (nameInput.value.trim() !== "") {
      var name = nameInput.value;
      userName.innerText = "Hello, " + name;
      localStorage.setItem('userName', name); // Store the name in local storage
    } else {
      userName.innerText = "";
      localStorage.removeItem('userName'); // Remove the name from local storage
    }

    return false;
  }



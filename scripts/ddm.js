const ddm = document.getElementById("ddm");

ddm.innerHTML = `
    <button onclick="toggleMenu()" class="dropbtn">
      My Work
    </button>
    <div id="myDropdown" class="dropdown-content">
      <a href="./mentalrun.html">Mental Run</a>
      <a href="./translationgame.html">Translation Game</a>
      <a href="./todoapp.html">Todo App</a>
      <a href="./weatherapp.html">Weather App</a>
      <a href="./tictactoe.html">Tic-Tac-Toe</a>
    </div>`;

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsByClassName("dropbtn")[0].style.color = "lawngreen";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function init(){

  document.getElementById('entrybutton').addEventListener("click", clickButton);

  function clickButton() {
    var input = document.getElementById("entryinput").values;
	alert("Philip Le: " + message);
  }

window.addEventListener('load', init);
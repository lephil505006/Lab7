function init(){

  var button = document.getElementById("entrybutton");
  button.addEventListener("click", clickButton);

  function clickButton() {
    var input = document.getElementById("entryinput").value;
	alert("Philip Le: " + input);
	
	var text = document.getElementById("textoutput");
	text.innerHTML = input;
  }
}
window.addEventListener('load', init);

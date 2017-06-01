window.onload = function () {
	const screen = document.getElementById('screen');
	const buttons = document.getElementById('buttons');
    buttons.addEventListener("click", function (e) {
    	const target = e.target;
    	if (target.classList.contains('cal')) {
    		screen.value += target.innerHTML;
    	}else if (target.classList.contains('equal')) {
    		screen.value = eval(screen.value)
    	}else if (target.classList.contains('ac')) {
    		screen.value = "";
    	}
    })
}

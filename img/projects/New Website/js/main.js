/* for nav-bar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
}

var btn = document.getElementsByClassName("myBtn");
for (var i = 0; i < btn.length; i++) {
	var thisBtn = btn[i];
	thisBtn.addEventListener("click", function() {
		var modal = document.getElementById(this.dataset.modal);
		modal.style.display = "block";

		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

	}, false);
}
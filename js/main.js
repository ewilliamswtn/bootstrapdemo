document.getElementById("mediaDemoButton").addEventListener("click", function(){
    var x = document.getElementById("mediaDemoWrapper");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("colWrapper").style.display = "none";
});

document.getElementById("colButton").addEventListener("click", function(){
    var x = document.getElementById("colWrapper");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("mediaDemoWrapper").style.display = "none";
});

var contentOutputFunc = function () {
	document.getElementById("contentOutput").innerHTML = document.getElementById("contentInput").value;
}

var changeFunc = function () {
	let size = document.getElementById("colSize").value;

	document.getElementById("changeCol").className = "card col-" + size;

}

window.onload = function () {
	document.getElementById("colWrapper").style.display = "none";
}
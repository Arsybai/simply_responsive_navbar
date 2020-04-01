function navu() {
  var navchan = document.getElementById("navchan");
  if (navchan.className === "navbar") {
    navchan.className += " responsive";
  } else {
    navchan.className = "navbar";
  }
}

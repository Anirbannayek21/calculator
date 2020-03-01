function backspace() {
    var value = document.getElementById("inputback").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);

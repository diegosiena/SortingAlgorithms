$(document).ready(function () {
    $("#select-tamanho").keydown(function (e) {
        if (e.keyCode != 8 && e.keyCode != 9) {
            return false;
        }
    })
});
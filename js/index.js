$(document).ready(function () {
    $("#conteudo").load("Metodos.html");
});

function MostraMetodo(metodo) {
    $("#conteudo").load(metodo + ".html");
    $("html, body").animate({
        scrollTop: 0
    }, 500);
}
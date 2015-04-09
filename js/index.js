$(document).ready(function () {
    $("#conteudo").load("Metodos.html");
});

function MostraMetodo(metodo) {
    $("#conteudo").load(metodo + ".html");
}
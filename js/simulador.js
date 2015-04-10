$(document).ready(function () {
    $("#txt-tamanho").keydown(function (e) {
        if (e.keyCode != 8 && e.keyCode != 9) {
            return false;
        }
    })
});

function Simular() {



    //var p1 = $("#vet7").position().left;
    //var p2 = $("#vet1").position().left;
    //var range = p1 - p2;

    //$("#vet1").animate({
    //    top: "+=40"
    //}, 1000);
    //$("#vet7").animate({
    //    top: "-=40"
    //}, 1000);

    //$("#vet1").animate({
    //    left: "+=" + range.toString()
    //}, 1000);
    //$("#vet7").animate({
    //    left: "-=" + range.toString()
    //}, 1000);


    //$("#vet1").animate({
    //    top: "-=40"
    //}, 1000);
    //$("#vet7").animate({
    //    top: "+=40"
    //}, 1000);
}

$("#txt-tamanho").change(function () {
    //var tamanho = $(".vetor li").length;
    //var txt = parseInt($("#txt-tamanho").val());

    //if (tamanho > txt) {
    //    for (var i = tamanho; i > txt; i--) {
    //        $(".vetor li")[i - 1].remove();
    //    }
    //} else if (tamanho < txt) {
    //    for (var i = tamanho; i < txt; i++) {
    //        $(".vetor").append('<li id="vet' + i.toString() + '" class="col-xs-1">' + (i + 1).toString() + '</li>');
    //    }
    //}
});
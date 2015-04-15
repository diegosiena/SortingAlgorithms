$(document).ready(function () {
    $("#txt-tamanho").keydown(function (e) {
        if (e.keyCode != 8 && e.keyCode != 9) {
            return false;
        }
    })
});

function Simular() {

    if ($('#chk-random').is( ":checked" ) == false) {
        alert("Método para escolha dos números ainda em desenvolvimento! Selecione o método 'random' !");
        return;
    };

    if ($('#chk-animacao').is( ":checked" )) {
        alert("Animação ainda em desenvolvimento!");
        return;
    };

    if ( ($('#cmb-metodo').val() == 1) || ($('#cmb-metodo').val() == 2) || ($('#cmb-metodo').val() == 3) ) {
        alert("Este método ainda está em desenvolvimento!");
        return;
    };

    var tamanho = parseInt($("#txt-tamanho").val());

    var vetor = Array();

    for (var i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * 100);
        $('.vetor li:eq(' + i.toString() + ')').html( vetor[i] );
    };

    if ( $('#cmb-metodo').val() == 0 ) {
        insertionSort(vetor);
    };

    // var p1 = $("#vet7").position().left;
    // var p2 = $("#vet1").position().left;
    // var range = p1 - p2;

    // $("#vet1").animate({
    //    top: "+=40"
    // }, 1000);
    // $("#vet7").animate({
    //    top: "-=40"
    // }, 1000);

    // $("#vet1").animate({
    //    left: "+=" + range.toString()
    // }, 1000);
    // $("#vet7").animate({
    //    left: "-=" + range.toString()
    // }, 1000);


    // $("#vet1").animate({
    //    top: "-=40"
    // }, 1000);
    // $("#vet7").animate({
    //    top: "+=40"
    // }, 1000);
}

function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section
    
    for (i=0; i < len; i++) {
    
        // store the current value because it may shift later
        value = items[i];
        
        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;

        printVetor(items);
    }
    
    return items;
}

function printVetor(vetor) {
    var html = "";
    html += '<ul class="col-xs-12 vetor secundario">';
    for(var i = 0; i < vetor.length; i++) {
       html += '<li id="vet' + i.toString() + '" class="col-xs-1">' + vetor[i] + '</li>';    
    }
    html += '</ul>';
    $("#panel-vetor").append(html);    
}

$("#txt-tamanho").change(function () {

    $("#panel-vetor").html( $('#panel-vetor ul:first') );

    var tamanho = $(".vetor li").length;
    var txt = parseInt($("#txt-tamanho").val());

    if (tamanho > txt) {
       for (var i = tamanho; i > txt; i--) {
           $(".vetor li")[i - 1].remove();
       }
    } else if (tamanho < txt) {
       for (var i = tamanho; i < txt; i++) {
           $(".vetor").append('<li id="vet' + i.toString() + '" class="col-xs-1">-</li>');
       }
    }
});
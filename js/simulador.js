$(document).ready(function () {
    $("#txt-tamanho").keydown(function (e) {
        if (e.keyCode != 8 && e.keyCode != 9) {
            return false;
        }
    })
});

function Simular() {

    $("#panel-vetor").html($('#panel-vetor ul:first'));

    if ($('#chk-random').is( ":checked" ) == false) {
        alert("Método para escolha dos números ainda em desenvolvimento! Selecione o método 'random' !");
        return;
    };

    if ($('#chk-animacao').is( ":checked" )) {
        alert("Animação ainda em desenvolvimento!");
        return;
    };

    //if ( ($('#cmb-metodo').val() == 3) ) {
    //    alert("Este método ainda está em desenvolvimento!");
    //    return;
    //};

    var tamanho = parseInt($("#txt-tamanho").val());
    var vetor = Array();

    for (var i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * 100);
        $('.vetor li:eq(' + i.toString() + ')').html( vetor[i] );
    };

    if ( $('#cmb-metodo').val() == 0 ) {
        insertionSort(vetor);
        carregaCodigo(0);
    } else if ($('#cmb-metodo').val() == 1 ) {
        selectionSort(vetor);
        carregaCodigo(1);
    } else if ($('#cmb-metodo').val() == 2) {
        bubbleSort(vetor);
        carregaCodigo(2);
    } else if ($('#cmb-metodo').val() == 3) {
        combSort(vetor);
        carregaCodigo(3);
    }

    $("html, body").animate({
        scrollTop: $("#row-panels").position().top - 60
    }, 1000);

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

function combSort(array) {
    var interval = Math.floor(array.length / 1.3);
    while (interval > 0) {
        for (var i = 0; i + interval < array.length; i += 1) {
            if (array[i] > array[i + interval]) {
                var small = array[i + interval];
                array[i + interval] = array[i];
                array[i] = small;
            }
        }
        interval = Math.floor(interval / 1.3);
        printVetor(array);
    }
    return array;
};

function selectionSort(array) {

    var len = array.length,
        min;

    for (i=0; i < len; i++){

        min = i;

        for (j=i+1; j < len; j++){
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (i != min) {

            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        printVetor(array);
    }

    return array;
}

//function swap(items, firstIndex, secondIndex) {
//    var temp = items[firstIndex];
//    items[firstIndex] = items[secondIndex];
//    items[secondIndex] = temp;
//}

function bubbleSort(array) {

    var len = array.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        printVetor(array);
    }

    return array;
}

function insertionSort(array) {

    var len = array.length,
        value,
        i,
        j;
    
    for (i = 0; i < len; i++) {

        value = array[i];
        
        for (j = i - 1; j > -1 && array[j] > value; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = value;
        printVetor(array);
    }
    
    return array;
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

function carregaCodigo(i) {
    var metodos = ["Insertion", "Select", "Bubble", "Comb"];

    $("#panel-codigo").load(metodos[i] + ".html" + " #code-js");
}
var MODELO = {};
MODELO.Universo = function(_const_) {
    return parseFloat(_const_);
};

MODELO.Funciones = {};
MODELO.Relaciones = {};

var F = MODELO.Funciones;
var R = MODELO.Funciones;

F.RaizCuadrada = function(term) {

    function PerteneceALaSecuencia(term) {
        let cont = 0;
        let sec = 0;
        while(term > sec && term != sec) {
            sec = cont * cont;
            cont++;
        }
        //console.log(sec)
        if( term == sec) return {respuesta: true, value: --cont};
        return {respuesta: false, value: undefined};
    };

    if( PerteneceALaSecuencia(term).respuesta ) return PerteneceALaSecuencia(term).value;

    var term1 = 0;
    var term2 = term;
    var r = 0;

    for(let i = 1; i < 1000; i++) {
        r = (term1 + term2) / 2;
        if(r*r > term) {
            term2 = r;
        }else term1 = r;
    };

    return (term1 + term2) / 2;
};
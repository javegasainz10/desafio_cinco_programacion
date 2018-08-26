function includesText(text, completeText) {
    var checkPar1 = typeof text === 'number';
    var checkPar2 = typeof completeText === 'number';

    var textS = String(text);
    var completeTextS = String(completeText);

    var textMayus = textS.toUpperCase();
    var completeTextMayus = completeTextS.toUpperCase();
    
    var compare = completeTextMayus.indexOf(textMayus);

    var boolean;

    if (compare >= 0) {
        boolean = true;
    } else if (checkPar1 === true || checkPar2 === true) {
        boolean = false;
    } else {
        boolean = false;
    }

    return boolean;
}

var result = includesText(prompt('Ingrese el primer valor a comparar contra el segundo.'), prompt('Ingrese el segundo valor contra el cual el primero sera comparado.'));

alert(result);
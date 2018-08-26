function includesText(text, completeText) {
    var checkPar1 = typeof text === 'number';
    var checkPar2 = typeof completeText === 'number';
    
    var compare = completeText.indexOf(text);

    var boolean

    if (compare >= 0) {
        boolean = true;
    } else if (checkPar1 === true || checkPar2 === true) {
        boolean = false;
    } else {
        boolean = false;
    }

    return boolean
}

var result = includesText(2, 'Patricia');

console.log(result);
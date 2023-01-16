module.exports = function toReadable (number) {
    const units = { 
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen'
    };
    
    const dozens = {
        '0': '',
        '1': '',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    };

    if (number === 0) {
        return 'zero'
    }

    function tens(number) {
        number = +number;
        if (number < 20) {
            return units[number];
        } else  if ( 19 < number && number < 100) {
            str = number.toString()
            return (dozens[str[0]] + ' ' + units[str[1]]).trim()
        } 
    }

    function hundreds(number) {
        str = number.toString();
        let ten = tens(str.substring(1));

        if ( number % 100 === 0) {
            return (units[str[0]] + ' hundred').trim()
        }
        return (units[number.toString()[0]] + ' hundred ' + ten).trim()
    }

    if (number < 100) {
        return tens(number)
    } else {
        return hundreds(number)
    }

}
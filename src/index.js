const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function decodeSymbol(arr){
        let temp = '';
        let i = 0;
        if (arr[0] === '*') {
            return ' ';
        }
        do {
            if( arr[i] + arr[i+1] === '10')
           {
            temp = temp + '.';
           } else if ( arr[i] + arr[i+1] === '11' ) {
            temp = temp + '-';
           }
           i = i + 2;
        } while ( i < arr.length )
       return MORSE_TABLE[temp];
    }
    let array = expr.split('');
    let result = '';
    while ( array.length ) 
    {
       result = result + decodeSymbol( array.splice(0,10) ); 
    }
 return result;
}

module.exports = {
    decode

}

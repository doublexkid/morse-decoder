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
    let res =[];
    
        let letters ="";
        for (j=i; j < i + 10; j+=2){
            let char = expr.slice(j,j+2);
            if(char === "00"){
                letters +='';
            } else if (char ==="10"){
                letters +=".";
            } else if (char ==="11"){
                letters+="-";
            }
            for (let i=0;i<expr.length;i+=10){
        if(expr[i] === "*"){
            res + =' ';
            continue;
        }
        }
        res +=MORSE_TABLE[letters];
    }
    return res;
}

module.exports = {
    decode

}

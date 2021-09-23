function solve(num) {
 
    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let k = 1; k <= num; k++) {
            line += '* ';
        }
       console.log(line);
    }
}

solve(2);
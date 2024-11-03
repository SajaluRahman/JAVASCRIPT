let a = 5; 
for (let i = a; i >= 1; i--) {
    let b = "";
    for (let c = 1; c <= a - i; c++) {
        b += " "; 
    }
    for (let d = 1; d <= i; d++) {
        b += "*";
    }
    console.log(b);

}
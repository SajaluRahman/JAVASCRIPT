let a = 3; 

for (let i = a; i >= 1; i--) {
    let b = ""; 
    for (let d = 1; d <= i; d++) {
              b += "  ";
            }
    for (let c = 2; c <= 5; c++) {
        b += " * "; 

    }
    
    console.log(b);
}
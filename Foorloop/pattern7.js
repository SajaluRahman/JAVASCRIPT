let a = 5; 

for (let i = a; i >= 1; i--) {
    let b = ""; 
    for (let c = 1; c <= i; c++) {
        b += " *"; 
    }
    console.log(b);
}
A = 30;
B = 20;
C = 40;
D = 50;
//               v         v
//resultado = ( (A > B) && (C < D) );
//               F           F
//resultado = ( (A < B) || !(C < D) );
//               F           V 
//resultado = ( !(A > B) && !(C > D) );
//               V          F
//resultado = ( (A > B) || (C == D) );
//               V            V
resultado = ( !(A == B) || !(C > D) );
console.log(resultado);
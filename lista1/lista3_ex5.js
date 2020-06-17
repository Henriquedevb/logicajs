const receber = require('prompt-sync')({sigint: true})
let d, vp, vt;
d = receber('Informe o dia do pagamento: ');
vp = receber('Informe o valor do produto: R$');
if(d < 10){
    vt = vp * 0.8
    console.log('O valor do produto com o desconto por ter pagado antes do dia 10 é: R$' + vt)
}
else{
    console.log('Como o desconto valia apenas para os pagamentos antes do dia 10, o valor do produto não possui desconto.')
}
let inpTxt = document.getElementById('inpTxt');
let traduzir = document.getElementById('buttonTraduzir');
let aviso = document.getElementById('aviso');
let linguaDestinho = document.getElementById('linguaDestinho');
aviso.value = ''; // Defina o valor em vez de innerHTML

traduzir.addEventListener('click', function(){

    /* validação */
    const txt = inpTxt.value.toLowerCase();
    const destino = linguaDestinho.value;

    /* armazena */
    let traducao;

    switch(destino){

        /* traduz do ptbr para eua */
        case 'PT-BR_EUA':
            switch(txt){
                case 'oi':
                    traducao = 'hi';
                break;

                case 'cinco':
                    traducao = 'five';
                break;

                case 'fechado':
                    traducao = 'close';
                break;

                default:
                    traducao = 'Palavra invalida';
            }
        break;

        /* traduz do ptbr para fr */
        case 'PT-BR_FR':
            switch(txt){
                case 'oi':
                    traducao = 'oh';
                break;

                case 'cinco':
                    traducao = 'cinq';
                break;

                case 'fechado':
                    traducao = 'fermé';
                break;

                default:
                    traducao = 'Palavra invalida';
            }
        break;

        default:
            traducao = 'Palavra invalida';
    }

    if(inpTxt.value == 0){

        aviso.value = 'Escreva algo';

    }else{

        aviso.value = traducao;

    }
});


 let radios=document.querySelectorAll('input.escolha')

    for(let cont = 0; cont < radios.length; cont++){//laçoa para identifica o radio selecionado(taxa de juros do banco)
       
        radios[cont].addEventListener('click', escolhabanco) // esta função só sera iniciada se for clicado em alguns dos radios
        
        function escolhabanco(){//função que capura ataxa de juros no input radio 
            
            if(radios[cont].checked){//estrutura de seleção ira checa o radio clicado  
                
                let valorradio;

                valorradio=radios[cont].value//o valor da taxa já esta definida no radio pelo value, varivel esta recebendo o valor array

                window.alert(`você escolha  a taxa ${valorradio} juros para ser a padrão na simulação`);

                let taxajuros=document.querySelector('input#taxajuros');
                taxajuros.value=valorradio//o input taxa juros esta recebendo o valor do radio
                
            }
        }
            
        
    };

let butao=document.querySelector('input#acao').addEventListener("click",  calcula)//ao clicak no input button calcular a função inicia
    
  function calcula(){//função ira realizar o calculo de juros composto

        let capital=Number(document.querySelector('input#capital').value);//recebe valor do capital 
        let taxajuros=Number(document.querySelector('input#taxajuros').value);//recebe valor do capital 
        let tempo=Number(document.querySelector('input#tempo').value);//recebe valor do capital 
        let res=document.querySelector('input#valorfinal');//recebe o valor total que vai ser exibido
        let total=document.querySelector('input#totalju');//recebe o valor de juros que vai ser exibido
        let montante;
        let rendajuros;
    
        taxajuros=taxajuros/100;//juros esta sendo dividido

        taxajuros=(1+taxajuros);//apos a divisão a soma

        taxajuros=Math.pow((taxajuros),tempo);//calculo de potenciação

        montante=capital*taxajuros//multiplicação do capital pelo juros

        rendajuros=montante - capital;//subtração do montando pelo capital

        total.value=rendajuros.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});//ira exibir o valor do juros

        res.value=montante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});//ira exibir o valor total calculo
        

        
        
    }

    
    

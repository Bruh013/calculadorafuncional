function somar(){
  let n1 = Number(document.getElementById('numero1').value ;
  let n2 = Number(document.getElementById('numero2').value ;
  document.getElementById('resultado').innerText = 'Resultado: $(n1 + n2)'
    }

function subtrair(){
  let n1 = Number(document.getElementById('numero1').value');
  let n2 = Number(document.getElementById('numero2').value');
  document.getElementById('resultado').innerText = 'Resultado: $(n1 - n2)'
}

function multiplicar(){
  let n1 = Number(document.getElementById('numero1').value');
  let n2 = Number(document.getElementById('numero2').value');
  document.getElementById('resultado').innerText = 'Resultado: $(n1 * n2)'
}

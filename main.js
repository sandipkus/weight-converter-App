let kgButton = document.getElementById('kgButton');
let poundButton = document.getElementById('poundButton');
let output = document.getElementById('outputField');

kgButton.addEventListener('click', function(){
    let input = document.getElementById('inputField').value;
    output.innerText = input/2.205 + " KG";
    inputField.value = "";
})

poundButton.addEventListener('click', function(){
    let input = document.getElementById('inputField').value;
    output.innerText = input * 2.205 + " Pound";
    inputField.value = "";
})
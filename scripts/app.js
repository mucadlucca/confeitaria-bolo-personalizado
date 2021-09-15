let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

const inputMassa = document.querySelectorAll("input[name='massa']")

for (i=0; i < inputMassa.length; i++) {
  inputMassa[i].addEventListener(touchEvent, nextPropertie)
}

const inputTamanho = document.querySelectorAll("input[name='tamanho']")

for (i=0; i < inputTamanho.length; i++) {
  inputTamanho[i].addEventListener(touchEvent, nextPropertie)
}

function nextPropertie(e) {
  let currentStage = e.target.name

  switch (currentStage){
    case 'massa':
      window.location.href = '#tp-tamanhos';
      break;
    case 'tamanho':
      priceUpdate()
      window.location.href = '#tp-recheios';      
  }    
}

const inputRecheio = document.querySelectorAll("input[name='recheio']");

for (var i = 0; i < inputRecheio.length; i++) {
  inputRecheio[i].addEventListener(touchEvent, countInputRecheioDisable);
}

function countInputRecheioDisable() {
  priceUpdate()
  const inputRecheioChecked = document.querySelectorAll("input[name='recheio']:checked");
  
  const unCheckbox = findUncheckedBoxes(inputRecheio, inputRecheioChecked);

  if (inputRecheioChecked.length === 2) {
    checkboxDisable(unCheckbox)
    window.location.href = '#tp-adicionais';    
  } else {
    checkboxEnable(unCheckbox)  
  }  
}

function checkboxDisable(unCheckbox) {
  unCheckbox.forEach((checkbox) => {
    // checkbox.disabled = true
    checkbox.setAttribute("disabled", "")
  })
}

function checkboxEnable(unCheckbox) {
  unCheckbox.forEach((checkbox) => {
    // checkbox.disabled = false
    checkbox.removeAttribute("disabled")
  })
}

function findUncheckedBoxes(allCheckboxes, checkedInputs) {
  var unCheckedBoxes = [];
  allCheckboxes.forEach((checkbox) => {
    var found = false;
    checkedInputs.forEach((checkboxChecked) => {
      if (checkBoxCompare(checkbox, checkboxChecked)) {
        found = true;
      }  
    });
    if (!found) {
      unCheckedBoxes.push(checkbox);
    }
  })
  return unCheckedBoxes;
}

function checkBoxCompare(checkbox, checkboxChecked) {
  return checkbox.id === checkboxChecked.id
}

const inputAdicional = document.querySelectorAll("input[name='adicional']");

for (var i = 0; i < inputAdicional.length; i++) {
  inputAdicional[i].addEventListener(touchEvent, priceUpdate);
}

function priceUpdate(){
  const totalPrice = document.querySelector('.preco-total')
  const tamanho = document.querySelector("input[name='tamanho']:checked")
  const adicional = document.querySelectorAll("input[name='adicional']:checked")
}
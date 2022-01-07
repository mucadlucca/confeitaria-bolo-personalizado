const inputMassa = document.querySelectorAll("input[name='massa']")

for (i = 0; i < inputMassa.length; i++) {
  inputMassa[i].addEventListener('click', nextPropertie)
}

const inputTamanho = document.querySelectorAll("input[name='tamanho']")

for (i = 0; i < inputTamanho.length; i++) {
  inputTamanho[i].addEventListener('click', nextPropertie)
}

function nextPropertie(e) {
  let currentStage = e.target.name

  switch (currentStage) {
    case 'massa':
      window.location = '#tp-tamanhos';
      break;
    case 'tamanho':
      priceUpdate()
      window.location = '#tp-recheios';
  }
}

const inputRecheio = document.querySelectorAll("input[name='recheio']");

for (var i = 0; i < inputRecheio.length; i++) {
  inputRecheio[i].addEventListener('click', countInputRecheioDisable);
}

function countInputRecheioDisable() {
  const inputRecheioChecked = document.querySelectorAll("input[name='recheio']:checked");

  const unCheckbox = findUncheckedBoxes(inputRecheio, inputRecheioChecked);

  if (inputRecheioChecked.length === 2) {
    checkboxDisable(unCheckbox)
    window.location = '#tp-adicionais';
  } else {
    checkboxEnable(unCheckbox)
  }
}

function checkboxDisable(unCheckbox) {
  unCheckbox.forEach((checkbox) => {
    checkbox.setAttribute("disabled", "")
  })
}

function checkboxEnable(unCheckbox) {
  unCheckbox.forEach((checkbox) => {
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
  inputAdicional[i].addEventListener('click', priceUpdate);
}

function priceUpdate() {
  const totalPrice = document.querySelector('.preco-total')
  const tamanho = document.querySelector("input[name='tamanho']:checked")
  const adicional = document.querySelectorAll("input[name='adicional']:checked")

  let adicionalPrice = 0

  adicional.forEach((item) => {
    itemPrice = Number(item.value)
    adicionalPrice += itemPrice
  })

  const total = Number(tamanho.value) + adicionalPrice

  totalPrice.innerHTML = 'R$ ' + total + ',00'
}
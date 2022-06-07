const elForm = document.querySelector(".site-form");
const elInputName = document.querySelector(".form-input-n");
const elInputRelative = document.querySelector(".form-input-r");
const elInputNumber = document.querySelector(".form-input-num");
const elResult = document.querySelector(".result");

const contacts = []

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  elResult.innerHTML = "";
  
  const inputNameValue = elInputName.value;
  const inputRelativeValue = elInputRelative.value;
  const inputNumberValue = elInputNumber.value;

  const contact = {
    name : inputNameValue,
    relative : inputRelativeValue,
    number : inputNumberValue,
  }

    contacts.push(contact)

    elInputName.value = null;
    elInputRelative.value = null;
    elInputNumber.value = null;
    
    for (let cont of contacts){
      let nameP = document.createElement("p")
      let relP = document.createElement("p")
      let numP = document.createElement("p")

      nameP.textContent = `${cont.name}`
      relP.textContent = `${cont.relative}`
      numP.textContent = `${cont.number}`

      elResult.append(nameP, relP, numP)
    }
})
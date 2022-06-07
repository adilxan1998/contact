const elForm = document.querySelector(".site-form");
const elInputName = document.querySelector(".form-input-n");
const elInputRelative = document.querySelector(".form-input-r");
const elInputNumber = document.querySelector(".form-input-num");
const elResult = document.querySelector(".result");

const contacts = []

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputNameValue = elInputName.value;
  const inputRelativeValue = elInputRelative.value;
  const inputNumbervalue = elInputNumber.value;

  const contact = {
    name : inputNameValue,
    relative : inputRelativeValue,
    number : inputNumbervalue,
  }

    contacts.push(contact)

    elInputName.value = null;
    elInputRelative.value = null;
    elInputNumber.value = null;

    
    for ( cont of contacts){

      let nameP = document.createElement("p")
      let relP = document.createElement("p")
      let numP = document.createElement("p")

      nameP.textContent = `${cont.name}`
      relP.textContent = `${cont.relaship}`
      numP.textContent = `${cont.number}`

      elResult.appendChild(nameP)
      elResult.appendChild(relP)
      elResult.appendChild(numP)
    }
})
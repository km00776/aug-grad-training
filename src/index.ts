import * as _ from "lodash";
import '../styles.css';

window.addEventListener("load", () => {
    const header = document.createElement("h1");
    header.innerText = "Front End HTML and CSS Assignment"
    const body = document.querySelector("body");
    body.appendChild(header);
    const fe = [{id: 0, name: "html"}, {id: 1, name: "About you"}]
    const element = document.createElement("h2")
    element.innerText = _.find(fe, {id: 1})?.name;
    body.appendChild(element);

    const firstNameLabel = document.createElement("label");
    firstNameLabel.innerHTML = "First Name";
    body.appendChild(firstNameLabel);

    const firstNameInput = document.createElement("input");
    body.appendChild(firstNameInput);

    const lastNameLabel = document.createElement("label");
    lastNameLabel.innerHTML = "Surname";
    body.appendChild(lastNameLabel);
  
    const lastNameInput = document.createElement("input");
    body.appendChild(lastNameInput);

    const dateOfBirthLabel = document.createElement("label");
    dateOfBirthLabel.innerHTML = "Date of Birth";
    body.appendChild(dateOfBirthLabel);

    const dateOfBirthInput = document.createElement("input");
    dateOfBirthInput.setAttribute('type', 'date');
    body.appendChild(dateOfBirthInput);

    const phoneNumberLabel = document.createElement("label");
    phoneNumberLabel.innerHTML = "Telephone number";
    body.appendChild(phoneNumberLabel);

    const phoneNumberInput = document.createElement("input");
    body.appendChild(phoneNumberInput);

    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email Address";
    body.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    body.appendChild(emailInput);

    const submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Continue";
    body.appendChild(submitBtn);
});
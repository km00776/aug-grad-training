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

    const form = document.createElement("form");
    form.setAttribute("method", "post");
    
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Title";
    body.appendChild(titleLabel);
    //
    const titleArray = ["Please select", "Mr", "Mrs", "Ms", "Miss", "Dr", "Sir" , "Reverend", "Dame", "Lady", "Lord", "Professor"]
    const selectList = document.createElement("select");
   

    for (let i = 0; i < titleArray.length; i++) {
        var option = document.createElement("option");
        option.value = titleArray[i];
        option.text = titleArray[i];
        selectList.appendChild(option);
    }
    form.appendChild(selectList);
    //
    const firstNameLabel = document.createElement("label");
    firstNameLabel.innerHTML = "First Name";
    form.appendChild(firstNameLabel);

    const firstNameInput = document.createElement("input");
    form.append(firstNameInput);

    const lastNameLabel = document.createElement("label");
    lastNameLabel.innerHTML = "Surname";
    form.appendChild(lastNameLabel);
  
    const lastNameInput = document.createElement("input");
    form.append(lastNameInput);

    const dateOfBirthLabel = document.createElement("label");
    dateOfBirthLabel.innerHTML = "Date of Birth";
    form.appendChild(dateOfBirthLabel);

    const dateOfBirthInput = document.createElement("input");
    dateOfBirthInput.setAttribute('type', 'date');
    form.appendChild(dateOfBirthInput);

    const phoneNumberLabel = document.createElement("label");
    phoneNumberLabel.innerHTML = "Telephone number";
    form.appendChild(phoneNumberLabel);

    const phoneNumberInput = document.createElement("input");
    phoneNumberInput.setAttribute('type', 'number');
    form.appendChild(phoneNumberInput);

    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email Address";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute('type', 'email');
    form.appendChild(emailInput);

    const submitBtn = document.createElement("input");
    submitBtn.className = "btn";
    submitBtn.id = "submitBtn"

    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    submitBtn.innerHTML = "Continue" ;
    form.appendChild(submitBtn);

    const svgImg = document.createElement("img");
    svgImg.src = "https://svgshare.com/i/Zn1.svg";
    body.appendChild(svgImg);


 


    form.onsubmit = function () {
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let dateOfBirth = dateOfBirthInput.value;
        let phoneNumber = phoneNumberInput.value;
        let title = selectList.value;
        let emailAddress = emailInput.value;

        if (firstName === "" || lastName === "" || dateOfBirth === "" || phoneNumber === "" || title === "" || emailAddress === "" ) {
                alert("Empty fields - Please have all fields filled in")
        }
      
        return false;
    }

    document.getElementsByTagName("body")[0].appendChild(form);

   
});



"use strict";

const container = document.querySelector("#container");
//-------------------------------------------------------------------------------
// 1. Create element:
const display = document.createElement("h1");
const subContainer = document.createElement("div");

const firstName = document.createElement("p");
const firstNameInp = document.createElement("input");

const lastName = document.createElement("p");
const lastNameInp = document.createElement("input");

const email = document.createElement("p");
const emailInp = document.createElement("input");

const phone = document.createElement("p");
const phoneInp = document.createElement("input");

const address = document.createElement("p");
const addressInp = document.createElement("input");

const city = document.createElement("p");
const cityInp = document.createElement("input");

const state = document.createElement("p");
const stateInp = document.createElement("select");
const stateOpt1 = document.createElement("option");
const stateOpt2 = document.createElement("option");
const stateOpt3 = document.createElement("option");
const stateOpt4 = document.createElement("option");

const zipCode = document.createElement("p");
const zipCodeInp = document.createElement("input");

const webSite = document.createElement("p");
const webSiteInp = document.createElement("input");

const hosting = document.createElement("p");
const hostingYes = document.createElement("p");
const hostingNo = document.createElement("p");
const hostingInpYes = document.createElement("input");
const hostingInpNo = document.createElement("input");

const project = document.createElement("p");
const projectInp = document.createElement("textarea");

const button = document.createElement("button");

//-------------------------------------------------------------------------------
// 2. Add content:
display.innerHTML = "Contact Us Today";

firstName.innerHTML = "First Name";
firstNameInp.type = "text";
firstNameInp.placeholder = "First Name";

lastName.innerHTML = "Last Name";
lastNameInp.type = "text";
lastNameInp.placeholder = "Last Name";

email.innerHTML = "E-Mail";
emailInp.type = "email";
emailInp.placeholder = "E-Mail Address";

phone.innerHTML = "Phone #";
phone.type = "text";
phoneInp.placeholder = "(845)555-1212";

address.innerHTML = "Address";
address.type = "text";
addressInp.placeholder = "Address";

city.innerHTML = "City";
city.type = "text";
cityInp.placeholder = "City";

state.innerHTML = "State";
stateOpt1.innerHTML = "Please select your state";
stateOpt2.innerHTML = "California";
stateOpt3.innerHTML = "Iowa";
stateOpt4.innerHTML = "Ohio";

zipCode.innerHTML = "Zip Code";
zipCode.type = "text";
zipCodeInp.placeholder = "Zip Code";

webSite.innerHTML = "Website or domain name";
webSite.type = "text";
webSiteInp.placeholder = "Website or domain name";

hosting.innerHTML = "Do you have hosting?";
hostingYes.innerHTML = "Yes";
hostingNo.innerHTML = "No";
hostingInpYes.type = "radio";
hostingInpNo.type = "radio";

project.innerHTML = "Project Description";
projectInp.placeholder = "Project Description";

button.innerHTML = "Send";

//-------------------------------------------------------------------------------
// 3. Append element:
container.append(display);
container.append(subContainer);

container.append(firstName);
firstName.append(firstNameInp);

container.append(lastName);
lastName.append(lastNameInp);

container.append(email);
email.append(emailInp);

container.append(phone);
phone.append(phoneInp);

container.append(address);
address.append(addressInp);

container.append(city);
city.append(cityInp);

container.append(state);
state.append(stateInp);
stateInp.append(stateOpt1, stateOpt2, stateOpt3, stateOpt4);

container.append(zipCode);
zipCode.append(zipCodeInp);

container.append(webSite);
webSite.append(webSiteInp);

container.append(hosting);
hosting.append(hostingYes, hostingNo);
hostingYes.append(hostingInpYes);
hostingNo.append(hostingInpNo);

container.append(project);
project.append(projectInp);

container.append(button);
//-------------------------------------------------------------------------------

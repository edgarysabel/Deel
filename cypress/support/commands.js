/// <reference types="Cypress"/>
import Login from "./pageObjects/login";
const login = new Login();

Cypress.Commands.add("login", (userName, password) => {
	login.emailTxtbox().type(userName);
	login.passwordTxtbox().type(password);
	login.loginBtn().click();
});

Cypress.Commands.add("getDate", () => {
	const today = new Date();
	let yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const date =
		months[yesterday.getMonth()] +
		" " +
		yesterday.getDate() +
		", " +
		yesterday.getFullYear();

	return date;
});

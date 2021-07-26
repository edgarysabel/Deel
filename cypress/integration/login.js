/// <reference types="Cypress"/>
import Dashboard from "../support/pageObjects/dashboard";
const dashboard = new Dashboard();

describe("Login Test Suite", function () {
	before(function () {
		cy.fixture("loginData")
			.then(function (data) {
				this.data = data;
			})
			.then(function () {
				cy.visit(this.data.url);
			});
	});

	it("Login", function () {
		cy.login(this.data.email, this.data.password);

		//Assert is logged in
		dashboard.closePopUp().should("be.visible");
		dashboard.closePopUp().click();
	});
});

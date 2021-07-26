/// <reference types="Cypress"/>
import Dashboard from "../support/pageObjects/dashboard";
import Contracts from "../support/pageObjects/contracts";
const dashboard = new Dashboard();
const contract = new Contracts();

describe("Contracts Test Suite", function () {
	before(function () {
		cy.fixture("loginData")
			.then(function (data) {
				this.data = data;
			})
			.then(function () {
				cy.visit(this.data.url);
				cy.login(this.data.email, this.data.password);

				//Assert is logged in
				dashboard.closePopUp().should("be.visible");
				dashboard.closePopUp().click();
			});
	});

	this.beforeEach(function(){
		cy.fixture("fixedContractData").then(function (data) {
			this.fixedContractData = data;
		});

		cy.fixture("payAsYouGoData").then(function (data) {
			this.payAsYouGoData = data;
		});
		
		dashboard.contract().should("be.visible");
		dashboard.contract().click();
		contract.payAsYouGo().should("be.visible")
	})

	it("Fixed Rate", function () {
		contract.fixedContract().click();

		//Define the rate
		contract.contractorName().type("Edgar Y.");
		contract.jobTitle().type("QA Automation Engineer");
		contract.seniorityLevel().type("Senior{enter}");
		contract
			.textArea()
			.type(
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium lobortis tempus. Nullam malesuada quam quis feugiat vulputate. Donec ac."
			);
		cy.getDate().then(function (date) {
			contract.calendarArrow().click();
			cy.get("abbr[aria-label='" + date + "']").click();

			contract.nextBtn().click();
		});

		////////////Payment details////////////
		contract.rate().type(this.fixedContractData.rate);
		contract
			.currencySelector()
			.type(this.fixedContractData.currency + "{enter}");
		contract.cycleSelector().type(this.fixedContractData.cycle + "{enter}");
		contract.nextBtn().click();

		//Make sure Define rates is present
		contract.firstPaymentSelector().should("be.visible");
		contract.nextBtn().click();

		//Creating a fixed contract
		contract.addSpecialClause().click();
		contract.specialClauseTextArea().type("Contractor wants to work from home");
		contract.nextBtn().click();
		contract
			.contractorTaxResidence()
			.type(this.fixedContractData.taxCountry + "{enter}");
		contract
			.contractorTaxResidenceProvince()
			.type(this.fixedContractData.taxProvince + "{enter}");
		contract.contractBtn().click();
		contract.reviewFixedContract().should("be.visible");
	});

	it("Pay As You Go", function () {
		contract.payAsYouGo().click();

		//Define the rate
		contract.contractorName().type(this.payAsYouGoData.contractName);
		contract.jobTitle().type(this.payAsYouGoData.job);
		contract.seniorityLevel().type(this.payAsYouGoData.seniority + "{enter}");
		contract
			.textArea()
			.type(
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium lobortis tempus. Nullam malesuada quam quis feugiat vulputate. Donec ac."
			);
		cy.getDate().then(function (date) {
			contract.calendarArrow().click();
			cy.get("abbr[aria-label='" + date + "']").click();

			contract.nextBtn().click();
		});

		////////////Payment details////////////
		contract.rate().type(this.payAsYouGoData.rate);
		contract.currencySelector().type(this.payAsYouGoData.currency + "{enter}");
		contract.cycleSelector().type(this.payAsYouGoData.cycle + "{enter}");
		contract.nextBtn().click();

		//Make sure Define rates is present
		contract.addSpecialClause().should("be.visible");
		contract.nextBtn().click();

		//Creating a fixed contract
		contract
			.contractorTaxResidence()
			.type(this.payAsYouGoData.taxCountry + "{enter}");
		contract.contractBtn().click();
		contract.reviewFixedContract().should("be.visible");
	});
});

class Contract {
	fixedContract() {
		return cy.get('a[href="/create/fixed"]');
	}

	payAsYouGo() {
		return cy.get('a[href="/create/pay-as-you-go"]');
	}
	contractorName() {
		return cy.get("input[name='name']");
	}

	jobTitle() {
		return cy.get("input[name='jobTitle']");
	}

	seniorityLevel() {
		return cy.get(
			'div[data-qa="selector-seniority-level"] .select__value-container'
		);
	}

	textArea() {
		return cy.get(".textarea");
	}

	calendarArrow() {
		return cy.get(".calendar-input");
	}

	nextBtn() {
		return cy.get("button").contains("next");
	}

	rate() {
		return cy.get('input[name="rate"]');
	}

	currencySelector() {
		return cy.get('div[data-qa="currency-select"] .select__value-container');
	}

	cycleSelector() {
		return cy.get('div[data-qa="cycle-select"] .select__value-container');
	}

	firstPaymentSelector() {
		return cy.get('div[data-qa="selector-first-payment-date"]');
	}

	addSpecialClause() {
		return cy
			.get('div[data-qa="special-clause-card"] button')
			.contains("special clause");
	}

	specialClauseTextArea() {
		return cy.get('div[data-qa="special-clause-card"] .textarea');
	}

	contractorTaxResidence() {
		return cy.get(
			'div[data-qa="contractor-tax-residence"] .select__value-container'
		);
	}

	contractorTaxResidenceProvince() {
		return cy.get(
			'div[data-qa="contractor-tax-residence-province"] .select__value-container'
		);
	}

	reviewFixedContract() {
		return cy.get("div").contains("review");
	}

	contractBtn() {
		return cy.get("button").contains("contract");
	}
}

export default Contract;

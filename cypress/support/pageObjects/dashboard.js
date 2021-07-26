class Dashboard {
	closePopUp() {
		return cy.get('button[data-qa="close"]');
	}

	contract() {
		return cy.get('a[href="/create"]');
	}
}

export default Dashboard;

class Login {
	emailTxtbox() {
		return cy.get("input[name='email']");
	}

	passwordTxtbox() {
		return cy.get("input[name='password']");
	}

	loginBtn() {
		return cy.get("div").contains("log in");
	}
}

export default Login;

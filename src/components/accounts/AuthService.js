class AuthService {

	verifyUser(username, password) {
		return fetch('/api/login_auth', {
			method: "GET",
			headers: {
				authorization: this.createAuthToken(username, password)
			}
		})
	}

	createAuthToken(username, password) {
		return 'Basic ' + window.btoa(username + ":" + password)
	}

}

export default AuthService;

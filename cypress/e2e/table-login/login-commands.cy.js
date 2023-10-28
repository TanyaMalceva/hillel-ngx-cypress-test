import {login} from "../../utils/auth.cy.js";
describe("Log In", ()=> {
it('should check LogIn with valid credentials', () => {
cy.login("test@gmail.com", "Password000", true)
});
})

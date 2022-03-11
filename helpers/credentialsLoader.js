const { configuration } = inject();


const testData = require(configuration.testDataLocation);


let validUserAccounts = new DataTable(['username', 'password']);
let invaldUsernameAccounts = new DataTable(['username', 'password']);
let invaldPasswordAccounts = new DataTable(['username', 'password']);


module.exports = {
    getValidUserAccounts(){
        testData.validCredentials.forEach(credentials => {
            validUserAccounts.add([credentials.username, credentials.password])
        });

        return validUserAccounts;
    },
    getInvalidUserNameAccounts(){
        testData.invalidUserCredentials.forEach(credentials => {
            invaldUsernameAccounts.add([credentials.username, credentials.password])
        });

        return invaldUsernameAccounts;
    },
    getInvaldPasswordAccounts(){
        testData.invalidPasswordCredentials.forEach(credentials => {
            invaldPasswordAccounts.add([credentials.username, credentials.password])
        });

        return invaldPasswordAccounts;
    }
}
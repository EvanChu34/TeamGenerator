const EmployeeProfile = require('./EmployeeProfile');

class ManagerProfile extends EmployeeProfile{
    constructor(manager){
        super(manager)
        this.github = manager.github
        this.setProfile();
    }
}

module.exports = ManagerProfile;
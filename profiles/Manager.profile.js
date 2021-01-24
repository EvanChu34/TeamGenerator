const ManagerProfile = require('./Employee.profile');

class ManagerProfile extends EmployeeProfile{
    constructor(manager){
        super(manager)
        this.github = manager.github
        this.setProfile();
    }
}

module.exports = ManagerProfile;
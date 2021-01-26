const EmployeeProfile = require('./EmployeeProfile');

class ManagerProfile extends EmployeeProfile{
    constructor(manager){
        super(manager)
        this.office = manager.office
        this.setProfile();
    }
}

module.exports = ManagerProfile;
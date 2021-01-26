const EmployeeProfile = require('./EmployeeProfile');

class InternProfile extends EmployeeProfile{
    constructor(intern){
        super(intern)
        this.github = intern.github
        this.setProfile();
    }
}

module.exports = InternProfile;
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const ManagerProfile = require("./profiles/ManagerProfile");
const EngineerProfile = require("./profiles/EngineerProfile");
const InternProfile = require("./profiles/InternProfile");
const TeamRoster = require("./profiles/TeamRoster");


class application{
    constructor(){
        this.database = {
            manager: null,
            engineers:[],
            interns:[]
        }
    }

    async getEmployeeInfo(){
        console.log(`\nEnter the employee information:\n`);

        let employeeInfo = 
            await inquirer
            .prompt([
                {
                    type: "input",
                    message: "ID please: ",
                    name: "id",
                },
                {
                    type: "input",
                    message: "Name please: ",
                    name: "name",
                },
                {
                    type: "input",
                    message: "Email please: ",
                    name: "email",
                },
                {
                    type: "input",
                    message: "title please: ",
                    name: "title",
                },
            ]);

        switch(employeeInfo.title.toLowerCase()) {
            case 'manager':
                employeeInfo = await this.getOffice(employeeInfo);
                break;
            case 'engineer':
                employeeInfo = await this.getGithub(employeeInfo);
                break;
            case 'intern':
                employeeInfo = await this.getSchool(employeeInfo);
                break;
            default:
                break;
        } 
        return employeeInfo;   
    }
        
    async getOffice(employeeInfo) {
        const managerInfo = 
            await inquirer
            .prompt([
                {
                    type:"input",
                    message:"Office?",
                    name:"office", 
                }
            ]);
        employeeInfo.office = await managerInfo.office;
        return employeeInfo;
    }

    async getGithub(employeeInfo){
        let engineerInfo = 
            await inquirer
            .prompt([
                {
                    type:"input",
                    message:"Github account name?",
                    name:"github", 
                }
            ]);
        employeeInfo.github= await engineerInfo.github;
        return employeeInfo;
    }

    async getSchool(employeeInfo){
        let internInfo = 
            await inquirer
            .prompt([
                {
                    type:"input",
                    message:"What school do you go too?",
                    name:"school", 
                }
            ]);
        employeeInfo.school= await internInfo.school;
        return employeeInfo;
    }

    createEmployee(employeeInfo){
        let employee;
        const {id, name, email} = employeeInfo;
        switch(employeeInfo.title){
            case 'manager':
                const manager = new Manager(name, id, email, employeeInfo.office);
                employee = manager;
                break;
            case 'engineer':
                const engineer = new Engineer(name, id, email, employeeInfo.github);
                employee = engineer;
                break;    
            case 'intern':
                const intern = new Intern(name, id, email, employeeInfo.school);
                employee = intern;
                break;
            default:
                break;
        }
        return employee;
    }
    
    saveEmployee(employee){
        switch(employee) {
            case 'manager':
                this.database.manager = employee;
                break;
            case 'engineer':
                this.database.engineers.push(employee);
                break;
            case 'intern':
                this.database.interns.push(employee);
                break;
            default:
                break;
        }
    }

    createTeamRoster(){
        let managerProfile = '';
        let engineers = '';
        let interns = '';

        if (this.database.manager){
            managerProfile = new ManagerProfile(this.database.manager);
            managerProfile = managerProfile.createProfile();
        }

        if (this.database.engineers){
            for (const engineer of this.database.engineers){
                let engineerProfile = new EngineerProfile(engineer);
                engineerProfile = engineerProfile.createProfile();

                engineers += engineerProfile;
            }
        } 

        if (this.database.interns){
            for (const intern of this.database.interns){
                let internProfile = new InternProfile(intern);
                internProfile = internProfile.createProfile();

                engineers += internProfile;
            }
        } 

        const team = managerProfile + engineers + interns;

        let teamRoster = new TeamRoster(team);
        teamRoster = teamRoster.createTeamRoster();

        return teamRoster;
    }

    
    createTeamServer(teamRoster){
        fs.writeFile('./dist/team.html', teamRoster, function(err){
            if(err) throw err;
            console.log('Saved!');
        });
    }

    
    async init(){
        let input = '';

        do {
            const employee = this.createEmployee(await this.getEmployeeInfo)
            this.saveEmployee(employee);
            input = 
                await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Please type 'yes; if you want to exit",
                        name: "exit"
                    }
                ]);
            
        } while (!input.exit);

        const teamRoster = this.createTeamRoster();
        this.createTeamServer(teamRoster);
    }
}

const app = new application();

app.init();
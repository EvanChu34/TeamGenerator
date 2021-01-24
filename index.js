const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const Manager = require("./pro");
const Engineer = require("");
const Intern = require("");
const ManagerProfile = require("./profiles/Manager.profile");
const EngineerProfile = require("./profiles/Engineer.profile");
const InternProfile = require("./profiles/Intern.profile");
const TeamRoster = require("./profiles/TeamRoster");


class application{
    constructor(){
        this.database = {
            
        }
    }

    async getEmployeeInfo(){
        console.log();

        let employeeInfo = 
            await inquirer
            .prompt([
                {
                    type: "input",
                    message: "ID please",
                    name: "id",
                },
                {
                    type: "input",
                    message: "Name please",
                    name: "name",
                },
                {
                    type: "input",
                    message: "Email please",
                    name: "email",
                },
                {
                    type: "input",
                    message: "title",
                    name: "title",
                },
            ]);
        
        createEmployee(employeeInfo){
            let employee;
            const {id, name, email} = employeeInfo;
            switch(employeeInfo.title.toLowerCase()){


                
            }


        }
        




        createTeamRoster(){
            let mangerProfile = '';
            let engineers = '';
            let interns = '';




        }




    }

}
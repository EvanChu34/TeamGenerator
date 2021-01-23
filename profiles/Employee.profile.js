class Profile{
    constructor(employee){
        this.id = employee.id;
        this.name = employee.name;
        this.email = employee.email;
        this.title = employee.getJobID;
        this.html; 
    }

    setProfile(){
        this.html =
            `<div class="col col-md-6 col-lg-6 col-xl-4">
            <div class="card">
            <div class="badge badge-info mt-3 p-3">
            <span class="employee-title">${this.title}</span>
            </div>
            `
        this.html +=
            `
            <div class="card-body">
            <h3 class="card-title">${this.name}</h3>
            <ul class="card-text list-group">
            <li class="list-group-item"><span class="font-weight-bold">ID:</span> ${this.id}</li>
            <li class="list-group-item"><span class="font-weight-bold">Email:</span> ${this.email}</li>
            `

        this.html += 
            `
            </ul >
            <a href="#" class="mt-3 btn btn-info btn-block">Contact</a>
            </div >
            </div >
            </div >
            `



    }


    createProfile(){
        return this.html;
    }

}

module.exports = EmployeeProfile;
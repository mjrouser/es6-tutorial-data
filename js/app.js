import * as service from "./employee-service-mock";

service.findAll()
    .then(employees => {
        let html = "";
        employees.forEach((employee) => {
            //npm install babel-core babel-loader babel-preset-es2015 webpack --save-devhtml += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
            html += `
               <div>
                 <img src="${employee.picture}"/>
                 <div>${employee.firstName} ${employee.lastName}
                 <p>${employee.phone}</p>
                 </div>
               </div>`;
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(error => console.log(error)
    );

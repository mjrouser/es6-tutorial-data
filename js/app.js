// XMLHttpRequest wrapper using callbacks
 function request(obj, successHandler, errorHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
        Object.keys(obj.headers).forEach((key) => {
            xhr.setRequestHeader(key, obj.headers[key]);
        });
    }
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            successHandler(xhr.response);
        } else {
            errorHandler(xhr.statusText);
        }
    };
    xhr.onerror = () => {
        errorHandler(xhr.statusText);
    };
    xhr.send(obj.body);
}

request({url:"employees.json"},
    (data) => {
        let employees = JSON.parse(data);
        let html = "";
        employees.forEach((employee) => {
            //npm install babel-core babel-loader babel-preset-es2015 webpack --save-devhtml += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
            html += `<div><img src="${employee.picture}"/><div>${employee.firstName} ${employee.lastName}<p>${employee.phone}</p></div></div>`;
        });
        document.getElementById("list").innerHTML = html;
    },
    (error) => {
        console.log(error);
    }
);
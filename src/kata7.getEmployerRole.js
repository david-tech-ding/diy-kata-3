const getEmployerRole = (employeeName, employees) => {

const employee = employees.find((employee) => employee.name === employeeName);

if(employee !== undefined){
    return employee.role;
} else {
    return undefined;
}
}

module.exports = getEmployerRole;

// const employee = employees.find(function(e){
//     return e.name === employeeName;
// });

// if(employee !== undefined){
//     return employee.role;
// } else {
//     return undefined;
// }


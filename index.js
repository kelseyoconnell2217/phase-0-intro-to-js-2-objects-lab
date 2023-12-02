const employee = {
    name: "Kelsey",
    streetAddress: "2217 Linden St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = {...employee}; 
    employee2[key] = value
    return employee2
}
updateEmployeeWithKeyAndValue(employee, name1, "Sam")


function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value2) {
    employee[streetAddress] = value2
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}; 
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    let newEmployee = employee 
    delete employee['name']
    return employee
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')


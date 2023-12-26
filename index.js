const employee = {
    name: "Kelsey",
    streetAddress: "2217 Linden St."
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 = {...employee} 
    employee2[key] = value
    return employee2
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
const newEmployee = {...employee}
function deleteFromEmployeeByKey(employee, key){
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
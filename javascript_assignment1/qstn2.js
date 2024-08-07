//second emp info
function employeeInformation(employees) {
    const [,{ name: secondEmployeeName, department: secondEmployeeDepartment }] = employees;
    return { secondEmployeeName, secondEmployeeDepartment };
}
// Example invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(employeeInformation(employees));
// Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

console.log("------------------------------------------------------------------------")

//avg salary of all emp
//Example Invocation:
function averageSalary(employeess){
    let total_sal=0;
    for (const{salary} of employeess){
        total_sal+=salary
    }
    const avg=total_sal/employeess.length;
    return avg
}
const employeess = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(averageSalary(employeess)); // Output: 60000

console.log("------------------------------------------------------------------------")
//3rd emp info with bonus
function thirdEmployeeInfo(employeesss) {
    const [, , { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary }] = employees;
    const bonus =thirdEmployeeSalary*0.1;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
}

// Example invocation:
const employeesss = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(thirdEmployeeInfo(employeesss));
// Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
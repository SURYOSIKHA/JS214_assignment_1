const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  function highestPaid(employees) {
    return employees.reduce((highest, employee) => {
      const { salary: highestSalary } = highest;
      const { salary: currentSalary } = employee;
      return currentSalary > highestSalary ? employee : highest;
    }, employees[0]);
  }
  
  console.log(highestPaid(employees)); 
  // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
  
console.log("------------------------------------------------------------------")

  //2nd qstn

  const employeess = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  function destructuringToSwap(employeess) {
    if (employeess.length < 2) return employeess; // No need to swap if less than 2 employees
    [employeess[0], employeess[employeess.length - 1]] = [employeess[employeess.length - 1], employeess[0]];
    return employeess;
  }
  
  console.log(destructuringToSwap(employeess)); 
  // Output: 
  // [
  //   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
  //   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
  //   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
  // ]
  
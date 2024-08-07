//1 emp in department 

function employeesInDepartment(employees,department){
    return employees.filter(employee=>employee.department===department).map(employee=> employee.name);
}
//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];

  //const data= employees.filter()
  console.log(employeesInDepartment(employees, "Finance")); // Output: ['Jane Smith', 'Maria Lopez']
  
  

  //2nd qstn

  const employeess = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
  ];
  
  
  function totalSalaryByDepartment(employees ,strr)
  {
  return employees.filter((x)=>
    {
      return x.department==strr
    }).reduce((acc,curr)=>
      {
        return acc+curr.salary;
      },0);
  
  }
  
  
  console.log(totalSalaryByDepartment(employeess, "Finance")); // Output: 125000
  

  //3rd qstn 

 

const employeesss = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

const a = employeesss.map((x)=>
    {
        return "Employee " + x.name + " works in" + x.department + " and earns " + "$"+x.salary + " annually";

    })

console.log(a);
//10
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
      { name: "Bob", className: "Grade 4", scores: { math: 80, science: 78, history: 92, english: 85 } },
      { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
      { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } },
    ],
  };
  
  function countCalculation(school) {
    const {
      departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount },
      },
    } = school;
    return {
      mathTeachersCount,
      historyTeachersCount,
      mathStudentsCount,
      historyStudentsCount,
    };
  }
  
  console.log(countCalculation(school));
  // Output: { mathTeachersCount: 5, historyTeachersCount: 3, mathStudentsCount: 150, historyStudentsCount: 100 }

  //11

  function findTopStudent(school, courseName) {
    const { students } = school;
    const topStudent = students.reduce((highest, student) => {
      if (!highest || student.scores[courseName] > highest.scores[courseName]) {
        return student;
      }
      return highest;
    }, null);
  
    return topStudent;
  }
  
  console.log(findTopStudent(school, "math"));
  // Output: { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }

  //12

  function addNewDept(school, newDepartment) {
    const updatedSchool = {
      ...school,
      departments: {
        ...school.departments,
        ...newDepartment, 
      },
    };
    return updatedSchool;
  }
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  // Output: the updated school object with the new 'art' department included

  //13
  function highestStudentCountDepartment(school) {
    const { departments } = school;
    const departmentWithHighestStudents = Object.entries(departments).reduce(
      (highest, [name, data]) => {
        return data.students > highest.students ? { name, students: data.students } : highest;
      },
      { name: "", students: 0 }
    );

    return departmentWithHighestStudents.name;
  }
  
  console.log(highestStudentCountDepartment(school)); 
  // Output: "math"

  //14
  function generateGreeting(name, language = "English") {
    const greetings = {
      English: "Hello",
      Spanish: "¡Hola",
      French: "Bonjour",
    };
    const greeting = greetings[language] || greetings.English;
  
    return `${greeting}, ${name}!;`
  }
  
  console.log(generateGreeting("Alice")); 
  console.log(generateGreeting("Bob", "Spanish")); 
  console.log(generateGreeting("Charlie", "French")); 
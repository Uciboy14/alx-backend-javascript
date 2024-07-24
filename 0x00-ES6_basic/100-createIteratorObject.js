export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const employeesList = [];
  
    for (const department in allEmployees) {
      if (allEmployees.hasOwnProperty(department)) {
        employeesList.push(...allEmployees[department]);
      }
    }
  
    return {
      [Symbol.iterator]() {
        let index = 0;
        return {
          next() {
            if (index < employeesList.length) {
              return { value: employeesList[index++], done: false };
            }
            return { value: undefined, done: true };
          }
        };
      }
    };
  }
  
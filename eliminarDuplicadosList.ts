function optimizationEmployees(listEmployees) {
    let employeesMap = new Map();
    listEmployees.forEach(employee => {
      let currentEmployee = employeesMap.get(employee.internalId);
      if (!currentEmployee || employee.registryDate > currentEmployee.registryDate) {
        employeesMap.set(employee.internalId, employee);
      }
    });
    return Array.from(employeesMap.values());
  }

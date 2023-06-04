/* 

#2 — Open-Closed Principle


Software entities (classes, modules, functions, etc.) should be open for extension,
 but closed for modification.

In other words, we should be able to add new functionality to a software entity by 
adding new code, but you should not need to modify the existing code in that entity.

*/


// ===== Bad Code =====

{

    interface Employee {
        type: string;
        monthlySalary?: number;
        monthlyWorkHours?: number;
        hourlyRate?: number;
      }
      
      class Payroll {
        constructor(private employees: Employee[]) {}
      
        public calculateTotalPay(): number {
          const payRecords: number[] = [];
          for (const employee of this.employees) {
            if (employee.type === 'Permanent') {
              payRecords.push(employee.monthlySalary ?? 0);
            } else if (employee.type === 'Contract') {
              const monthlyPay = (employee.monthlyWorkHours ?? 0) * (employee.hourlyRate ?? 0);
              payRecords.push(monthlyPay);
            }
          }
          return payRecords.reduce((accumulator, current) => accumulator + current, 0);
        }
      }
      
    
}



{


    // ===== Good Code =====

interface Employee {
    getPay(): number;
}

class PermanentEmployee implements Employee {
    constructor(private monthlySalary: number) {
    }

    public getPay(): number {
        return this.monthlySalary;
    }
}

class ContractEmployee implements Employee {
    constructor(private monthlyWorkHours: number, private hourlyRate: number) {
    }

    public getPay(): number {
        return this.monthlyWorkHours * this.hourlyRate;
    }
}

class Payroll {
    constructor(private employees: Employee[]) {
    }

    public calculateTotalPay(): number {
        return this.employees.reduce((accumulator, current) => accumulator + current.getPay(), 0);
    }
}


}
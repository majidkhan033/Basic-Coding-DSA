// Creating Class in JavaScript

class Bank {
    constructor(employee_name, unique_id, branch_id) {
        this.employee_name = employee_name;
        this.unique_id = unique_id;
        this.branch_id = branch_id;
    }

    getName() {
        return (`The name of the employee is ${this.employee_name}`)
    }

    getUniqueID() {
        return (`The uniqueID of the employee is ${this.unique_id}`)
    }

    getBranchID() {
        return (`The branchID of the employee is ${this.branch_id}`)
    }
}

let bank1 = new Bank("Majid", "MK69", "SBI69");

console.log(bank1.getName());
console.log(bank1.getUniqueID());
console.log(bank1.getBranchID());
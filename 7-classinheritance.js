
    class Person{
        constructor(name, surname, age) {
            this._name = name;
            this._surname = surname;
            this._age = age;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get surname() {
            return this._surname;
        }

        set surname(value) {
            this._surname = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }
    }

    class Employee extends Person{
        constructor(name, surname, age, job) {
            super(name, surname, age);
            this._job = job;
        }

        get job() {
            return this._job;
        }

        set job(value) {
            this._job = value;
        }
    }

    let emp = new Employee("Jeff", "Bezos", 51, "Boss");
    console.log("emp instanceof Person: " + (emp instanceof Person));
    console.log("emp instanceof Employee: " + (emp instanceof Employee));
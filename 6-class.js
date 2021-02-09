

    class person{
        constructor(name, surname, age) {
            this._name = name;
            this._surname = surname;
            this._age = age;
        }

        // Auto-generated getter and setter
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

        // Manually generated getter and setter
        getName(){
            return this._name
        }
        setName(value){
            this._name = value;
        }
        getSurname(){
            return this._surname
        }
        setSurname(value){
            this._surname = value;
        }
        getAge(){
            return this._age
        }
        setAge(value){
            this._age = value;
        }

    }

    let per = new person("Elon", "Musk", 43);
    console.log("initial properties:  ");
    console.log(per);
    console.log("*************")

    // Using manually-generated methods
    console.log("name: " + per.getName());
    console.log("surname :" + per.getSurname());
    console.log("age: " + per.getAge());

    per.setName("Jeff");
    per.setSurname("Bezos")
    per.setAge(51);

    console.log("After setting some properties")
    console.log("*********************")

    // Using auto-generated methods
    console.log("name: " + per.name);
    console.log("surname: " + per.surname);
    console.log("age: " + per.age);

    per.name = "Mark";
    per.surname = "Zuckerberg";
    per.age = 41;

    console.log("*********************")
    console.log("final properties: ")

    console.log(per); 


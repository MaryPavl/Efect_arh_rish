class SingletonPostgreSQL{
    //перевірка наявності потрібного екземпляру, повернення існуючого
    constructor(){
        if(typeof SingletonPostgreSQL.instance === 'object'){
            return SingletonPostgreSQL.instance
        }
        this.count_call = 0;
        SingletonPostgreSQL.instance = this;
        return this;
    }
    //перевірка правильності роботи патерна
    getCountCall(){return `Звернень до PostgreSQL було ${this.count_call}`}
    // запит до бд
    call(){
        console.log(`Ви завітали до PostgreSQL`);
        return this.count_call++;
    }
}

class SingletonMongoDB{
    constructor(){
        if(typeof SingletonMongoDB.instance === 'object'){
            return SingletonMongoDB.instance
        }
        this.count_call = 0;
        SingletonMongoDB.instance = this;
        return this;
    }

    getCountCall(){return `Звернень до MongoDB було ${this.count_call}`}

    call(){
        console.log(`Ласкаво просимо до MongoDB`);
        return this.count_call++
    }
}

//створення змінних двух "різних екземплярів класу"
let postgreSQL_1 = new SingletonPostgreSQL();
let postgreSQL_2 = new SingletonPostgreSQL();
console.log(postgreSQL_1.getCountCall());
console.log(postgreSQL_2.getCountCall());
//виклик запиту до бд з різних екземплярів
postgreSQL_1.call();
postgreSQL_2.call();
postgreSQL_2.call();
//перевірка, що ми користуємось однією бд з різних екземплярів
console.log(postgreSQL_1.getCountCall());
console.log(postgreSQL_2.getCountCall());


let mongoDB_1 = new SingletonMongoDB();
let mongoDB_2 = new SingletonMongoDB();
console.log(mongoDB_1.getCountCall());
console.log(mongoDB_2.getCountCall());
mongoDB_1.call();
mongoDB_1.call();
mongoDB_1.call();
mongoDB_2.call();
mongoDB_2.call();
console.log(mongoDB_1.getCountCall());
console.log(mongoDB_2.getCountCall());
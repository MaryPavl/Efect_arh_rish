//Клас Mediator - посередник
class Mediator{
    inf_order = "нічого";
    time = "сьогодні";

    constructor(){
        this.customers = []
    }

    choose_date(customer, indep, date, another, name_another, phone_another){
        const name_cust = customer.getName();
        //Якщо тригер indep == true, генеруємо замовлення без зайвих полів форми (Самовивіз)
        //Якщо тригер indep == false, показуємо доступний час в залежності від обраної дати
        //Якщо another == true, вписуємо дані людини яка забере
        //Якщо another == false, оформлена доставка без додаткових налаштувань
        if(indep == true){
            this.inf_order = `Замовлення ${name_cust}. Самовивіз`
            this.info_form(this.inf_order);
        }else{
            if (date <= 15 && date > 0) {
                this.time = "10:00 - 14:00";
            } else {
                this.time = "14:00 - 18:00";
            }

            if(another == true){
                this.inf_order = `Замовлення ${name_cust}. Отримувач ${name_another}, телефон ${phone_another}. Дата ${date}, час ${this.time}`
            }else{
                this.inf_order = `Замовлення ${name_cust}. Дата ${date}, час ${this.time}`
            }

            this.info_form(this.inf_order);
        }
        this.customers.push(name_cust)
    }
    //Виводить інформацію про замовлення
    info_form(info){
        console.log(info)
    }
}
//Користувач
class Customer{
    constructor(name, mediator){
        //Даємо ім'я та посередника
        this.name = name
        this.my_mediator = mediator
    }

    getName(){
        return this.name
    }
    //Оформлення замовлення
    makeOrder(indep, date, another, name_another, phone_another){
        this.my_mediator.choose_date(this, indep, date, another, name_another, phone_another)
    }
}

let main_mediator = new Mediator();

let stepan = new Customer("Lina", main_mediator)
let dima = new Customer("Nik", main_mediator)
let dasha = new Customer("Anna", main_mediator)

stepan.makeOrder(true)
dima.makeOrder(false, 14)
dasha.makeOrder(false, 20, true, 'Vika', 380990001122)
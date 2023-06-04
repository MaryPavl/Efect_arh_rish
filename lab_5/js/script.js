class Product{
    name = "product"
    ip = 00000000
    status = false

    constructor(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }

    get_name(){return this.name}
    get_ip(){return this.ip}
    get_status(){return this.status}

    set_date(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }
}

class User{
    name = "name"
    ip = 00000000
    email = "email"

    constructor(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }

    get_name(){return this.name}
    get_ip(){return this.ip}
    get_email(){return this.email}

    set_date(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }
}

class Order{
    ip = 00000000
    status = false

    constructor(ip, status){
        this.ip = ip
        this.status = status
    }

    get_ip(){return this.ip}
    get_status(){return this.status}

    set_date(ip, status){
        this.ip = ip
        this.status = status
    }
}

class MainValid{
    my_obj

    set_obj(obj){
        this.my_obj = obj
    }

    valid_data(){}
    save_request(){}

    forming_answer(code, status){
        this.generate_json(code, status)
        console.log(`Code is ${code}, status is ${status}`); 
    }

    generate_json(code, status){}
}

class ProductValid extends MainValid{
    ok_name = /^[a-zA-Z']{2,}/u;
    ok_ip = /^\d{8,}/;
    //Реалізація виведення помилки для Товару
    valid_data(new_name, new_ip, new_status){
        if(this.ok_name.test(new_name) == true){
            if(this.ok_ip.test(new_ip) == true){
                if(typeof new_status == "boolean"){
                    this.save_request(new_name, new_ip, new_status)
                }else{
                    console.log(`eror status`);
                }
            }else{
                console.log(`eror ip`);
            }
        }else{
            console.log(`eror name`);
        }
    }

    save_request(new_name, new_ip, new_status){
        this.my_obj.set_date(new_name, new_ip, new_status)
        this.forming_answer(new_ip, new_status)
    }
}

class UserValid extends MainValid{
    ok_name = /^[a-zA-Z']{2,}/u;
    ok_ip = /^\d{8,}/;
    ok_mail = /^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,5}/i

    valid_data(new_name, new_ip, new_email){
        if(this.ok_name.test(new_name) == true){
            if(this.ok_ip.test(new_ip) == true){
                if(this.ok_mail.test(new_email)){
                    //Передача старого емайлу, для запобігання зміни
                    this.save_request(new_name, new_ip, this.my_obj.get_email())
                }else{
                    console.log(`eror email`);
                }
            }else{
                console.log(`eror ip`);
            }
        }else{
            console.log(`eror name`);
        }
    }

    save_request(new_name, new_ip){
        this.my_obj.set_date(new_name, new_ip, this.my_obj.get_email())
        this.forming_answer(new_ip, true)
    }
}

class OrderValid extends MainValid{
    ok_ip = /^\d{8,}/;

    valid_data(new_ip, new_status){
        if(this.ok_ip.test(new_ip)){
            if(typeof new_status == "boolean"){
                this.save_request(new_ip, new_status)
            }else{
                console.log(`eror status`);
            }
        }else{
            console.log(`eror ip`);
        }
    }

    save_request(new_ip, new_status){
        this.my_obj.set_date(new_ip, new_status)
        this.forming_answer(new_ip, new_status)
    }
    //Додатковий метод який нібито створює Json файл
    generate_json(code, status){
        console.log({code: code, status: status});
        return {code: code, status: status}
    }
}
//Клієнтський код
//Створення об'єкту. Перевірка даних. Створення класу для зміни та валідації. Передача нових даних. Перевірка даних.
let tovar1 = new Product("Prod", 10000001, false)
console.log(tovar1.get_ip());
console.log(tovar1.get_name());
console.log(tovar1.get_status());

let prod_valid = new ProductValid()
prod_valid.set_obj(tovar1)
prod_valid.valid_data("Prody", 22200001, true)
console.log(tovar1.get_ip());
console.log(tovar1.get_name());
console.log(tovar1.get_status());

console.log('====================================');
let user1 = new User("Mary", 10000022, "mary@gmail.com")
console.log(user1.get_name());
console.log(user1.get_ip());
console.log(user1.get_email());

let user_valid = new UserValid();
user_valid.set_obj(user1);
user_valid.valid_data("Anna", 77700022, "anna@gmail.com")
console.log(user1.get_name());
console.log(user1.get_ip());
console.log(user1.get_email());


console.log('====================================');
let order1 = new Order(10000033, false)
console.log(order1.get_ip());
console.log(order1.get_status());

let order_valid = new OrderValid()
order_valid.set_obj(order1);
order_valid.valid_data(66600033, true)
console.log(order1.get_ip());
console.log(order1.get_status());
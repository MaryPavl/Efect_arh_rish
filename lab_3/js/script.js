//Користувач (Творець)
class User{
    my_settings = "000";
    concreteBackup;//змінна для генерації бекапу

    constructor(settings){
        this.my_settings = settings
    }

    new_settings(settings){
        //створюємо нові налаштування
        this.my_settings = settings
    }

    save(){
        //зберігапє налаштування та дату збереження у базі даних
        this.concreteBackup = new ConcreteBackup(this.my_settings);
        return this.concreteBackup.get_backup();
    }

    get_save(){
        //бачимо початкові налаштування
        console.log(`Початкові налаштування : ${this.my_settings}`);
    }
}

//Створення бекапу
class ConcreteBackup{
    backup = "000 + data";
    data = "data";

    constructor(settings){
        this.data = new Date();//генерруємо дату у момент виклику
        this.backup = `${settings}. Дата збереження ${this.data}`;
    }

    get_backup(){
        //повернення данних бекапу
        return this.backup
    }
}

//Зберігання та керування бекапами (Доглядач)
class Database{
    list_backups = [];
    user;

    constructor(usser){
        this.user = usser
    }

    backup(){
        //Створення та додавання бекапу у список бекапів
        console.log(`Робиться збереження бекапу`);
        this.list_backups.push(this.user.save());
    }

    undo_backup(){
        //Повернення до попереднього бекапу та перевірка на їх наявність
        if(this.list_backups.length > 1){
            this.list_backups.pop();
            this.user.new_settings(this.list_backups[this.list_backups.length - 1]);
            console.log(`Виконано повернення налаштувань`);
        }else{
            console.log(`Нема до чого повертатись`);
        }
    }

    get_histori(){
        //Проходимось по кожному елементу списку бепів та показуємо його
        this.list_backups.forEach(element => {
            console.log(element)
        });
    }
}

let user1 = new User("Усі сповіщення");
let database = new Database(user1);

user1.get_save();
database.backup();

user1.new_settings("Половину сповіщень");//створюємо нові налаштування
user1.get_save();//показуємо 
database.backup();//Зберігаємо 

user1.new_settings("Без сповіщень");
user1.get_save();
database.backup();

database.get_histori();//показуємо історію бекапів

database.undo_backup();//Робимо відкат
user1.get_save();
database.get_histori();

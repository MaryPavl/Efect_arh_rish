class MySQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class PostgreSQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class BuildSQL{
    addSELECT(){}

    addWHERE(){}

    addLIMIT(){}

    getSQL(){}
}

class BuildMySQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new MySQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} WHERE ${this.sql.where} LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}

class BuildPostgreSQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new PostgreSQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} \n WHERE ${this.sql.where} \n LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}
//Створення запиту, передача параметрів
let request_MySQL_1 = new BuildMySQL().addSELECT("all").addWHERE("people == men").addLIMIT("age >= 18").getSQL();
console.log(request_MySQL_1);

let request_PostgreSQL_1 = new BuildPostgreSQL();
request_PostgreSQL_1.addWHERE("animal == cat").getSQL();
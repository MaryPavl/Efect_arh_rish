class ConcreteIterator {
    index = 0;
    collection = [];
    var_help = 0;

    constructor(c,v_h){
        this.collection = c;
        this.var_help = v_h;
        this.sort_collect()
    }

    sort_collect(){
        if(this.var_help == 0){
            console.log('на власний россуд туриста');
        }
        if(this.var_help == 1){
            this.collection.sort()
            console.log('за рекомендаціями навігатора');
        }
        if(this.var_help == 2){
            this.collection.sort().reverse()
            console.log('за допомогою місцевого гіда');
        } 
    }

    next(){
        return this.collection[this.index++]
    }
    hasNext(){
        return this.index >= this.collection.length;
    }
}

class Place_collection{
    collection = [];

    constructor(c){
        this.collection = c
    }

    create_iterator(){
        return new ConcreteIterator(this.collection, 0)
    }
    create_iterator1(){
        return new ConcreteIterator(this.collection, 1)
    }
    create_iterator2(){
        return new ConcreteIterator(this.collection, 2)
    }
}

let tourist = new Place_collection(["Буцький каньйон", "Кінбурнська коса", "Дендропарк Софієвка",  "Асканія-Нова"])

let iterator0 = tourist.create_iterator()
while (!iterator0.hasNext()){
    console.log(iterator0.next());
}

let iterator1 = tourist.create_iterator1()
while (!iterator1.hasNext()){
    console.log(iterator1.next());
}

let iterator2 = tourist.create_iterator2()
while (!iterator2.hasNext()){
    console.log(iterator2.next());
}

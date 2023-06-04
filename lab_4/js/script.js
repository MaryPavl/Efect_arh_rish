class Strategy {
    calculate(a){}
}

class SelfPickUp extends Strategy{
    calculate(a){
       console.log(`Ви обрали самовивіз. Сума до сплати ${a}`)
    }
}

class ExternalDeliveryService extends Strategy{
    calculate(a){
       console.log(`Ви обрали доставку зовнішньою службою доставки. Сума до сплати ${a+65}`)
    }
}

class OwnDeliveryService extends Strategy{
    calculate(a){
       console.log(`Ви обрали доставку власною службою доставки. Сума до сплати ${a+40}`)
    }
}

class DeliveryService{
    my_strategy = ""

    setStrategy(strategy){
        this.my_strategy = strategy
    }

    calculate_delivery(hryvnias){
        this.my_strategy.calculate(hryvnias)
    }
}

let deliveryService = new DeliveryService()

deliveryService.setStrategy(new SelfPickUp());
deliveryService.calculate_delivery(150);

deliveryService.setStrategy(new ExternalDeliveryService());
deliveryService.calculate_delivery(150);

deliveryService.setStrategy(new OwnDeliveryService());
deliveryService.calculate_delivery(150);
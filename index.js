// inheritence = a child class can inherit all the
//               methods and properties from another class

class Animal{
    alive = true;

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    run(){
        console.log(`This ${this.name} is running`);
    }

}

class Rabbit extends Animal{

    name = "rabbit";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    
    }


class Fish extends Animal{

    name = "fish";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
}

class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is eating`);
    }
    
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Rabbit();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
const Rat = function (name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;


    this.setStatus = function (status) {
        this.status = status;
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.getWeight = function () {
        return this.getWeight();
    }

    this.getStatus = function (status) {
        if (this.status) {
            alert('Rat is alive')
        }
        else {
            alert('Rat is dead')
        }
    }

    this.speak = function () {
        return alert('chit, chit')
    }
}

const Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.getWeight = function () {
        return this.getWeight();
    }

    this.speak = function () {
        return alert('Meow, Meow');
    }

    this.catchMouse = function (rat) {
        if (this.speed > rat.speed && rat.status == true) {
            alert('Cat have caught Rat');
            return rat;
        }
    }

    this.eatMouse = function (rat) {
        if (rat.status == true) {
            alert('Cat have ate Rat');
            this.weight += rat.weight;
        }
    }
}

const cat = new Cat('Tom', 15, 5);
const rat = new Rat('Jerry', 5, 3, true);
cat.catchMouse(rat);
cat.eatMouse(cat.catchMouse(rat))
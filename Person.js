class Person {
    constructor(name) {
        this.name = name || "Default name";
        this.health = 100;
        this.weapon = null;
    }
    //when inside of a class, can only have definition and methods
    attack(person) {
        //what if they forget to pass in "person"?
        if (!person) {
            console.log('you forgot to pass in a person!');
            return;
        }

        //what if this person doesn't have a weapon?
        if (this.weapon == null) {
            console.log('you forgot to equip a weapon!');
            return;
        }

        person.health -= this.weapon.damage;
        //person.render();
    }

    equipWeapon(weapon) {
        this.weapon = weapon;

    }

    render() {
        $(this.selector).html(`
            <img width="100" src=${this.imageURL} />
            <span>${this.health}</span>
        `);
    }
}

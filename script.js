//we'll be instantiating

$(function(){

    let hero = new Hero("Batman");
    let villain = new Villain("Joker");
    hero.render();
    villain.render();

    let herosWeapon = new Weapon("Sythe");
    let villainsWeapon = new Weapon("Gun");

    hero.equipWeapon(herosWeapon);
    villain.equipWeapon(villainsWeapon);

    function checkForGameOver() {
        if (villain.health < 1) {
            alert('Victory!')
        } else if (hero.health < 1) {
            alert('Game over!')
        }
    }

    $('#heroAttack').click(() => {
        hero.attack(villain);
        villain.render();
        checkForGameOver();

    });

    $('#villainAttack').click(() => {
        villain.attack(hero);
        hero.render();
        checkForGameOver();
    });

})
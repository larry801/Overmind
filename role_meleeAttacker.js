// var upgrader = require('role_upgrader');

var roleMeleeAttacker = {
    /** @param {Creep} creep **/
    run: function (creep) {
        // Attack nearest enemy creep
        if (creep.goAttack() != OK) {
            creep.moveTo(creep.room.controller); // return to controller if nothing to attack
        }
    }
};

module.exports = roleMeleeAttacker;
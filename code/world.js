const combatantIDs = fetch("elementIDs/combatantIDs.json")
console.log(combatantIDs)

const playerContainer = document.getElementById("CID1");
const enemyContainer = document.getElementById("CID2");

class Combatant {
    constructor(team, id, level) {
        this.element = document.createElement("div");
        playerContainer.appendChild(this.element);
        this.icon = document.createElement("p")
        this.element.appendChild(this.icon);
        this.team = team
        this.icon.innerText = "";
    };
};
class CustomCombatant {
    constructor(team, customStats, level) {

    };
};
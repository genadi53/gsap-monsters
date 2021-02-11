import Monster from "./Monster.js";


export default class Animation1{
    constructor(){
        this.monsters = [];
    }

    init() {

        const monsters = this.getElements();

        monsters.forEach(element =>{
            const monster = new Monster(element);
            //console.log(monster);
            this.monsters.push(monster);
        });
        
        this.addEventListeners();

    }

    getElements(){
        const elements = document.getElementsByClassName("monster");
        //console.log(elements);
        const array = [...elements];
        //Array.from(elements);
        return array;
    }

    addEventListeners(){
        this.monsters.map((monster) =>
            monster.element.addEventListener('mouseenter', () => this.mouseEnterHandler(monster))
      );
  
      this.monsters.map((monster) =>
        monster.element.addEventListener('mouseleave', () => this.mouseLeaveHandler(monster))
      );
    }

    mouseEnterHandler(element){
        element.expand()
        this.monsters.forEach(monster => {
            if(monster != element) {
                monster.contract();
            }
        });
    }

    mouseLeaveHandler(){
        this.monsters.forEach(x => x.reset());
    }

}
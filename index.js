class Fighter {
    constructor(name, superPower) {
      this.name = name;
      this.superPower = superPower;
    }
  
    describe() {
      return `${this.name} calls ${this.superPower}.`;
    }
  }
  
  class Tribe {
    constructor(name) {
      this.name = name;
      this.fighters = [];
    }
  
    addFighter(fighter) {
      if (fighter instanceof Fighter) {
        this.fighters.push(fighter);
      } else {
        throw new Error(`You can only add an instance of Fighter. Argument is not a fighter: ${fighter}`);
      }
    }
    describe() {
      return `${this.name} has ${this.fighters.length} fighters`;
    }
  }
  
  class Menu {
    constructor() {
      this.tribes = [];
      this.selectedTribes = null;
    }
    start() {
      let selection = this.showMainMenuOptions();
      
      while (selection != 0) {
        switch (selection) {
          case '1':
          this.createTribe();
          break;
          case '2':
          this.viewTribe();
          break;
          case '3':
          this.deleteTribe();
          break;
          case '4':
          this.displayTribe();
          break;
          default:
          selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
  
      alert('Sayonara!');
    }
    
    showMainMenuOptions() {
      return prompt(`
      0) exit
      1) create new tribe
      2) view tribe
      3) delete tribe
      4) display all tribes
      `);
    }
  
    showTribeMainMenuOptions(tribeInfo) {
      return prompt(`
      0) back
      1) create fighter
      2) delete fighter
      --------------------
      ${tribeInfo}
      `);
    }
  
    displayTribes() {
      let tribeString = '';
      for (let i = 0; i < this.tribes.length; i ++) {
        tribeString += i + ') ' + this.tribes[i].name + '\n';
      }
      alert(tribeString);
    }
  
    createTribe() {
      let name = prompt('Enter name for new tribe:');
      this.tribes.push(new Tribe(name));
    }
  
    viewTribe() {
      let index = prompt('Enter the index of the tribe you wish to view:');
      if (index > -1 && index < this.tribes.length) {
        this.selectedTribe = this.tribes[index];
        let description = 'Tribe Name: ' + this.selectedTribe.name + '\n';
        
        for (let i = 0; i < this.selectedTribe.fighters.length; i ++) {
          description += i + ') ' + this.selectedTribe.fighters[i].name + ' - ' + this.selectedTribe.fighters[i].position + '\n';
        }
  
        let selection = this.showTribeMainMenuOptions(description);
        switch (selection) {
          case '1':
          this.createFighter();
          break;
          case '2':
          this.deleteFighter();
        }
      }
    }
  
    deleteTribe() {
      let index = prompt('Enter the index of the tribe you wish to delete:');
      if (index > -1 && index < this.tribes.length) {
        this.tribes.splice(index, 1);
      }
    }
  
    createFighter() {
      let name = prompt('Enter name for new fighter:');
      let superPower = prompt('Enter superPower for new fighter:');
      this.selectedTribe.fighters.push(new Fighter(name, superPower));
    }
  
    deleteFighter() {
      let index = prompt('Enter the index of the fighter you wish to delete:');
      if (index > -1 && index < this.selectedTribe.fighters.length) {
        this.selectedTribe.fighters.splice(index, 1);
      }
    
    } 
  }
  
  let menu = new Menu();
  menu.start();
  class Weapon {
  
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
      this.startDurability = durability;
    }
  
    takeDamage(damage) {
      this.durability = this.durability - damage;  
      
      if (this.durability < 0) {
        this.durability = 0;
      }
    }
  
    getDamage() {
      if (this.durability == 0) return 0;
      
      if (this.durability >= this.startDurability / 100 * 30) {
        return this.attack;
      } else {
        return this.attack / 2;
      }
    }
  
    isBroken() {
      return (this.durability === 0) ? true : false;
    }
  
  }  
  
  class ImprovedWeapon extends Weapon {
    constructor(name, versionOf, attack, range, durability) {
      super(name, attack, range, durability);
      this.versionOf = versionOf;
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.startDurability = durability;
      this.range = range;
    }
  }
    
  const arm = new Weapon ('Рука', 1, Infinity, 1);
  const bow = new Weapon ('Лук', 10, 200, 3);
  const sword = new Weapon ('Меч', 25, 500, 1);
  const knife = new Weapon ('Нож', 5, 300, 1);
  const staff = new Weapon ('Посох', 8, 300, 2);
  
  const longBow = new ImprovedWeapon ('Длинный лук', bow.name, 15, 4, bow.durability);
  const axe = new ImprovedWeapon ('Секира', sword.name, 27, sword.range, 800);
  const staffOfStorm = new ImprovedWeapon ('Посох Бури', staff.name, 10, 3, staff.durability);
  
  /*longBow.takeDamage(150);
  console.log(longBow.durability);
  console.log(longBow.getDamage());
  console.log(longBow.isBroken());*/
  
  class Bow extends Weapon {
    constructor(name, attack, range, durability) {
      super(name, attack, range, durability);
      this.name = bow.name;
      this.attack = bow.attack;
      this.durability = bow.durability;
      this.startDurability = bow.durability;
      this.range = bow.range;
    }
  }
  
  const bowNew = new Bow();
  
  class ImprovedBow extends Bow {
    constructor(name, versionOf, attack, range, durability) {
      super(name, attack, range, durability);
      this.name = longBow.name;
      this.versionOf = longBow.versionOf;
      this.attack = longBow.attack;
      this.range = longBow.range;
      this.durability = longBow.durability;
    }
  }
  
  const longBowNew = new ImprovedBow();
  
  console.log(longBowNew.name); 
  longBowNew.takeDamage(150);
  console.log(longBowNew.durability);
  console.log(longBowNew.getDamage());
  //console.log(longBowNew);
  
  class StudentLog {
    constructor(name) {
      this.name = name;
      this.obj = {};
    }
  
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
      
      if (grade > 5 || grade < 1 || typeof grade === 'string') {
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
  
        return this.obj[subject].length;
      }
  
      if (this.obj[subject] === undefined) {
        this.obj[subject] = [];
      };    
      
      this.obj[subject].push(grade); 
      
      return this.obj[subject].length;
    }
  
    getAverageBySubject(subject) {
      let sum = 0;
      
      if (this.obj[subject] !== undefined) {
        for (let i = 0; i < this.obj[subject].length; i++) {
          sum += this.obj[subject][i];
        }
      } else {
        return 0;
      }
      
      return sum / this.obj[subject].length;
    }
  
    getTotalAverage() {
      let sum = 0;
      
      for (this.key in this.obj) {
        let value = this.obj[this.key];
  
        sum += this.getAverageBySubject(this.key);
      }
      
      if (sum === 0) return 0;
  
      return sum / Object.keys(this.obj).length;
    }
  }
  
  const log = new StudentLog('Олег Никифоров');
  
  console.log(log.getName());
  log.addGrade(2, 'algebra');
  log.addGrade(4, 'algebra');
  log.addGrade(5, 'geometry');
  log.addGrade(4, 'geometry');
  
  console.log(log.getAverageBySubject('algebra'));
  console.log(log.getAverageBySubject('geometry'));
  console.log(log.getAverageBySubject('math'));
  
  console.log(log.getTotalAverage());
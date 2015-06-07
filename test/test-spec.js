var chai = require('chai');
 
var should = chai.should();
var expect = chai.expect;
var zombies = require('../zombies.js');
 
describe('Item', function(){

  it('should be a function',function(){
  zombies.Item.should.be.a('function');
  });

  it('should create a new Item with a name',function(){
    var item = new zombies.Item('Water Bottle');
    item.should.have.property('name');
    item.name.should.equal('Water Bottle');
  });
});

describe('Weapon', function(){
  var dagger;

  beforeEach(function () {
    dagger= new zombies.Weapon('dagger',10);
  });

  it('should be a function',function(){
    zombies.Weapon.should.be.a('function');
  });

  it('should extend the Item class', function(){
   dagger.should.be.an.instanceof(zombies.Item);
  });


  it('should have a damage of 10', function(){
    dagger.damage.should.equal(10);
  });

});

describe('Food', function(){
  var apple;

  beforeEach(function () {
    apple = new zombies.Food('apple', 10);
  });

  it('should be a function', function(){
    zombies.Food.should.be.a('function');
  });

  it('should extend the Item class',function(){
    apple.should.be.an.instanceof(zombies.Item);
  });

  it('should have an energy value of 10', function(){
    apple.energy.should.equal(10);
  });

  it('should have the name apple',function(){
    apple.name.should.equal('apple');
  });

});

describe('Player', function(){
  var player;

  beforeEach(function(){
  player = new zombies.Player('Greg',100,20,20);
  });

  it('should be a class', function(){
    zombies.Player.should.be.a('function');
  });

  it('should have properties:name,health,strength,speed,pack,and max health',function(){
    player.should.have.property('strength');
    player.should.have.property('health');
    player.should.have.property('speed');
    player.should.have.property('_pack');
    player.should.have.property('_maxHealth');
    player.should.have.property('isAlive');
  });

  describe('Properties',function(){

  it('pack should be an array',function(){
    player._pack.should.be.a('array');
  });

  it('all class methods should be defined',function(){
    player.checkPack.should.not.be.undefined;
    player.getMaxHealth.should.not.be.undefined;
    player.getPack.should.not.be.undefined;
    player.takeItem.should.not.be.undefined;
    player.discardItem.should.not.be.undefined;
    player.equip.should.not.be.undefined;
    player.eat.should.not.be.undefined;
    player.useItem.should.not.be.undefined;
    player.equippedWith.should.not.be.undefined;
  });
  
  });


  describe('Methods',function(){

  it('takeItem should return false if unable to put item in bag',function(){
  var item1 = new zombies.Item('shovel');
  var item2 = new zombies.Item('eraser');
  var item3 = new zombies.Item('marker');
  var item4 = new zombies.Item('cord');
  player.takeItem(item1).should.be.true;
  player.takeItem(item2).should.be.true;
  player.takeItem(item3).should.be.true;
  player.takeItem(item4).should.be.false;
  });

  it('getPack should not contain more than three items',function(){
  var item1 = new zombies.Item('shovel');
  var item2 = new zombies.Item('eraser');
  var item3 = new zombies.Item('marker');
  var item4 = new zombies.Item('cord');
  player.takeItem(item1);
  player.getPack().length.should.be.equal(1);
  player.takeItem(item2);
  player.getPack().length.should.be.equal(2)
  player.takeItem(item3);
  player.getPack().length.should.equal(3)
  player.takeItem((item4));
  player.getPack().length.should.not.equal(4);
  });

  it('discardItem should remove the item from your pack if its available',function(){
  var axe = new zombies.Weapon('axe',20);
  var pole = new zombies.Weapon('pole',5);
  var stick = new zombies.Weapon('stick',1);
  player.takeItem(pole);
  player.takeItem(stick);
  player.takeItem(stick);
  player.takeItem(axe);
  player.discardItem(axe).should.not.be.true;
  player.discardItem(pole).should.be.true;
  player.discardItem(pole).should.not.be.true;
  player.discardItem(axe).should.be.not.true;
  });

  it('equip should only be able to equip an instance of Weapon and in there pack',function(){
  var axe = new zombies.Weapon('axe',20);
  var apple = new zombies.Food('apple',5);
  var twig = new zombies.Item('twig');
  player.takeItem(twig);
  player.equip(twig).should.be.false;
  player.takeItem(apple);
  player.equip(apple).should.be.false;
  player.equip(axe).should.be.false;
  player.takeItem(axe).should.be.true;
  player.equip(axe);
  player.equipped.should.equal(axe);
  });

  it('equip should properly replace the item if you already have an item equipped',function(){
  var axe = new zombies.Weapon('axe',20)
  var bigAxe = new zombies.Weapon('bigaxe',40);
  player.takeItem(axe);
  player.equip(axe);
  player.getPack().indexOf(axe).should.equal(-1);
  player.takeItem(bigAxe);
  player.equip(bigAxe);
  player.getPack().indexOf(axe).should.equal(0);
  player.equipped.should.equal(bigAxe);
  });

  it('eat should only consume instances of Food and it is in your pack',function(){
  var banana = new Food('banana',20);
  var rock = new Item('useless rock');
  player.eat(food).




  it('equippedWith should return the name of the Weapon that is equipped and false otherwise',function(){
  var axe = new zombies.Weapon('axe',20);
  player.eat(axe).should.be.false;
  });
});
 
});
});
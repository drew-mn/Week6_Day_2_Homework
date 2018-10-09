const assert = require ('assert')
// const Park = require ('../park.js')
const Dino = require ('../dino.js')

describe('Park', function(){

  let park;

beforeEach(function(){
  dino1 = new Dino('T-Rex', 'Carnivore', 100)
  dino2 = new Dino('Stegosaurus', 'Herbivore', 50)
  dino3 = new Dino('Diplodocus', 'Herbivore', 25)
})

it("should have a species",function(){
    const actual = dino2.species;
    assert.strictEqual(actual, "Stegosaurus")
  });

  it("should have a diet",function(){
    const actual = dino3.diet;
    assert.strictEqual(actual,"Herbivore")
  });

  it("should have an average number of attracted per day",function(){
    const actual = dino2.visitors;
    assert.strictEqual(actual, 50)
  });
})

const assert = require ('assert')
const Park = require ('../park.js')
const Dino = require ('../dino.js')

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park('Jurassic World', 5,)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic World')
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinos();
    assert.strictEqual(actual, 0)
  });

  it('should add Dinos', function(){
      park.addDinos(dino1)
      park.addDinos(dino2)
      park.addDinos(dino3)
      const actual = park.numberOfDinos()
      assert.strictEqual(actual, 3)
  })

  it('should remove dinos', function(){
      park.addDinos(dino1)
      park.addDinos(dino2)
      park.addDinos(dino3)
      park.removeDino(dino2)
      const actual = park.dinos.length;
      assert.deepStrictEqual(actual, 2)
  })

  xit("Should find all dinosaurs of a particular species",function(){
    actual = park.findBySpecies("Stegosaurus");
    assert.strictEqual(actual,[dino3])
  })

  it('should calculate total number of visitors per day', function(){
     park.addDinos(dino1);
     park.addDinos(dino2);
     park.addDinos(dino3);
     const actual = park.dailyVisitors();
     assert.strictEqual(actual, 175);
   });

  it('should calculate total number of visitors per year', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    const actual = park.annualVisitors();
    assert.strictEqual(actual, 63875);
  });

  it('should calculate total revenue per year', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    dailyVisitors = park.dailyVisitors()
    annualRev = park.annualVisitors(dailyVisitors)
    const actual = park.annualRevenue(annualRev)
    assert.deepStrictEqual(actual, 319375)
   });


  xit("should be able to find the dinosaur that attracts the most visitors",function(){
   actual = park.mostPopularDinosaur();
   assert.strictEqual(actual, dinosaur2)
 });

})

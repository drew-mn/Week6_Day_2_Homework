const Park = function(name, ticket_price){
  this.name = name
  this.ticket_price = ticket_price
  this.dinos = []
}

module.exports = Park

Park.prototype.numberOfDinos = function () {
  return this.dinos.length
};

Park.prototype.addDinos = function(dino) {
  this.dinos.push(dino)
};

Park.prototype.removeDino = function(dino) {
let position = this.dinos.indexOf(dino)
this.dinos.splice(position, 1)
};

Park.prototype.findBySpecies = function (findSpecies){
  found = [];
  for(let dino of this.dinos){
    if(dino.species === findSpecies) {found.push(dino)}
  };
  return found
};

Park.prototype.dailyVisitors = function(){
  const dinos = this.visitors;
  counter = 0;
  for(let dino of this.dinos){
     counter += dino.visitors
  }
  return counter
};

Park.prototype.annualVisitors = function(){
  const dinos = this.visitors;
  counter = 0;
  for(let dino of this.dinos){
     counter += (dino.visitors*365)
  }
  return counter
};

Park.prototype.annualRevenue = function(annualRev){
  return annualRev * this.ticket_price;
};

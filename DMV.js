//constructor function
var DMV = function (agents) {
  this.agents = agents;
  this.inLine = [];
  this.attendingTo = {};
  agents.forEach(function(agent){
    this.attendingTo[agent] = null
  }.bind(this))
}

DMV.prototype.customersInLine = function () {
  return this.inLine;
}

DMV.prototype.enter = function (person) {
  this.inLine.push(person)
}

DMV.prototype.nextCustomer = function () {
  for (var i =0; i < this.agents.length; i++) {
    var agent = this.agents[i]
    if (this.attendingTo[agent] === null) {
      this.attendingTo[agent] = this.inLine.shift()
      break
    }
  }
}

DMV.prototype.currentCustomerFor = function (agent) {
  return this.attendingTo[agent];
}

DMV.prototype.resolve = function (customer) {
  for (key in this.attendingTo) {
    if(this.attendingTo[key] === customer) {
      this.attendingTo[key] = null
    }
  }
}

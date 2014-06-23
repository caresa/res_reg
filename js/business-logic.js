(function() {
  var BusinessLogic = function() {

  this.reservations = {
    'Billy': { claimed: false },
     'Sadie': {claimed: true}
  }

  this.checkRes = function(name){
   if(this.reservations[name]) {
      if(this.reservations[name]['claimed'] == false) {
        this.reservations[name]['claimed'] = true;
        return "resClaimed";
      }else if(this.reservations[name]['claimed'] == true){
        console.log(name + " has already claimed this reservation!");
        return "resWasClaimed";

      }
    }
  }

  this.makeRes = function(name){
    if (name == ""){
      console.log("Please enter your name");
    }else if(!this.reservations[name]){
      this.reservations[name] = {claimed: false};
      console.log(this.reservations)
      return "newRes";
    }else{
      newName = console.log("Please use a different name, " + name + " is already taken");
      this.reservations[newName] = {claimed: false};
      return "createRes";
    }
  }
}
 window.bl = new BusinessLogic();
})();

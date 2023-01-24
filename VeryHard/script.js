function people(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  
  people.type.exercise = () =>
    console.log("playing basketball is fun! - Lets have a pickup game.");
  
  people.type.fetchJob = function () {
    console.log(`${this.name} is a ${this.job}`);
  };
  
  function engineer(name, job, age, languages) {
    people.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  
  engineer.type = { ...people.type };
  engineer.type.completeTask = function () {
    this.busy = false;
  };
  engineer.type.acceptNewTask = function () {
    this.busy = true;
  };
  
  engineer.type.offerNewTask = function () {
    console.log(
      this.busy
        ? `${this.name}  he cannot accept any new tasks right now.`
        : `${this.name}  he can take on a new responsibility.`
    );
  };
  
  engineer.type.learnLanguage = function (language) {
    this.languages.push(language);
  };
  engineer.type.listLanguages = function () {
    console.log(this.languages);
  };
  
  let p1 = new people("Jhon Legend", "back-end developer", 58);
  p1.exercise();
  p1.fetchJob();
  
  let p2 = new engineer("Mike Tyson", "Junior Developer", 22, [
  ]);

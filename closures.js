function showName(firstName, lastName) {
  var nameIntro = "Your name is ";

  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    console.log(firstName)
    console.log(lastName)
    console.log(nameIntro)
    let test = '123'
    return nameIntro + firstName + " " + lastName;
  }
  // console.log(test) // not in scope so fails
  return makeFullName();
}

console.log(showName("Alan", "Jordan"));


function dwightJob(title) {
    return function(prefix){
        return `${prefix} ${title}`
    }
}

var sales = dwightJob('Salesman')
var manager = dwightJob('Manager')

console.log(sales('Top'))
console.log(manager('Assistant to the regional'))
console.log(manager('Regional'))

function greeter(person) {
    return function(greeting) {
        return `${greeting} ${person}`
    }
}

var bob = greeter('Bob')
console.log(bob)
var alice = greeter('Alice')
console.log(bob('Hello'))
console.log(alice('Greetings'))


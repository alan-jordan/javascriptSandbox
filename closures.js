function showName (firstName, lastName) {
	var nameIntro = "Your name is ";

    	// this inner function has access to the outer function's variables, including the parameter​
	function makeFullName () {
    console.log(firstName)
    console.log(lastName)
    console.log(nameIntro)
    let test = '123'
		return nameIntro + firstName + " " + lastName;
	}
  // console.log(test) // not in scope so fails
	return makeFullName ();
}

console.log(showName ("Alan", "Jordan")); 

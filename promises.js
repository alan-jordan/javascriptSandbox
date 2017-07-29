function get(url){
	return new Promise(function(succeed, fail){
		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.addEventListener("load", function(){
			if(req.status < 400){
				succeed(req.responseText);
			}else{
				fail(new Error("Request failed: " + req.statusText));
			}
		});
		req.addEventListener("error", function(){
			fail(new Error("Network error"));
		});
		req.send(null);
	});
}

get('www.google.com')
  .then((error, reponse) => {
    error ? console.log(`there was an error - ${error}`) : console.log(response.body)
  })

//fails as XMLHttpRequest isn't working. Would use superagent for this.
// But basically. If this errors, it will just log out the error
// If not, it will log out the response body from the api call

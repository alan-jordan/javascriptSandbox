function process(value) {
  return new Promise(function (resolve, reject) {
    var count = 0, timeout;
    timeout = setInterval(function () { 
      console.log('iteration ' + count);
      if (count > 5 && value !== 'fail') { resolve(true); clearInterval(timeout); }
      else if (count > 5 && value === 'fail') { reject('Operation timed out.'); clearInterval(timeout); }
      count += 1; 
    }, 500); 
  });
}

// Then to test it (let's say in `console`) try something line:
var a = process(); 

a
  .then(function (value) {
    console.log('Operation completed successfully.  Value recieved: ' + value);
  })
  .catch(function (reason) { 
    console.log(reason); 
  });

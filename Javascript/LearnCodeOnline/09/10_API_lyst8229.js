fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json(); // whatever the return of this
  })
  .then((data) => { // is given here 
    // console.log("DATA is :", data);
    var joke = data.value;
    console.log("JOKE:", joke); 
  })
  .catch();

  fetch()
  .then() // whatever the return of this
  .then() // is given here and whatever the return of this is 
  .then()  // is given here

  fetch(url)
  .then(()=>{}) 
  .then((response)=>{console.log(response);return "somethig"})
  .then((data) => {console.log(data)})

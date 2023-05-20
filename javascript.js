 async function search(){
    let ricerca = document.getElementById("searchField");
     
     
     console.log("Pulsante Cliccato :" + ricerca.value)
     const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + ricerca.value);
     const jsonData = await response.json();
     console.log(jsonData["data"]);
}



function addPost()
display(() => {
  let myDiv = document.createElement("div");
  myDiv.innerText = ricerca.title ;


})
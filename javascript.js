async function search() {
  let ricerca = document.getElementById("searchField");


  console.log("Pulsante Cliccato :" + ricerca.value)
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + ricerca.value)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((responseJson) => {
      console.log(responseJson)
      let resultsDiv = document.getElementById("risultati")
     
      for (let i = 0; i < responseJson.data.length; i++) {
        let myCard = document.createElement("div");
        myCard.classList.add("card");
        //   myCard.innerHTML = responseJson.data[i].title;
        
       //   resultsDiv.appendChild(myCard)
       // }
      
        let title = responseJson.data[i].title;
        let cover = responseJson.data[i].cover;
      
        let htmlContent = '<h5>' + title + '</h5>';
        htmlContent += '<img src="' + cover + '" alt="Cover">';
      
        myCard.innerHTML = htmlContent;
        resultsDiv.appendChild(myCard);
      }
      
    })
    .catch((error) => {
      console.log(error)
    });
}

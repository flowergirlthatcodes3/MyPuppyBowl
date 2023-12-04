// declaring all variables

const allPupDiv = document.querySelector("#allPupDiv")
const singlePupDiv = document.querySelector("#singlePupDiv")
let puppies = []




window.addEventListener("hashchange", () => {
    renderPups()
    })



async function fetchAllPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const data = await response.json()
    puppies = data.data.players
    renderPups()

}




async function renderPups() {
    const pupPlayer = puppies.map((pups) =>{
      return `
      <div class="all">
      <a href=#${pups.name} class="pupName"> 
      ${pups.name}
      </a>
      <br> 
  </div>
      `
      })
      allPupDiv.innerHTML = "<h1> All Players! </h1>" + pupPlayer.join("")
      const name = window.location.hash.slice(1)
      const SinglePup = puppies.find((pups) => {
          return pups.name === name 
      
      })
   //console.log(SinglePup)
allPupDiv.innerHTML = SinglePup ? "" : "<h1> All Players! </h1>" + `<div class="pupContainer"> ${pupPlayer.join("")} </div>` 
   

if(SinglePup) {
    
        singlePupDiv.innerHTML = `
        <div id="pupStats">
        <h2> Look Who's On The Field <br> ${SinglePup.name}</h2>
        <br>
        <h3> Breed: ${SinglePup.breed} </h3>
        <br>
        <h3> Status: ${SinglePup.status} </h3>
        </div>
        <div id ="pupImg">
        <img src=${SinglePup.imageUrl}>
        </div>
        </div>` 
       // + pupPlayer.join("")

         + `<a href=#> Let's Get Back To All Players </a>`

    }
    else{
        singlePupDiv.innerHTML = ""
    } 


      
        


}

fetchAllPuppies()

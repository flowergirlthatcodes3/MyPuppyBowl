// declaring all variables

const allPupDiv = document.querySelector(".allPup")
const singlePupDiv = document.querySelector(".singlePup")
let puppies = []

window.addEventListener("hashchange", () => {
renderPups()
})

async function renderPups() {
    const pupPlayer = puppies.map((pups) =>{
      return `
      <div class="all">
      <a href=#${pups.name} class="pupName"> 
      <h2> Puppy Name: <br> ${pups.name} </h2> 
      </a>
      <a href=#${pups.breed} class="pupBreed"> 
      <h2> Puppy Breed: <br> ${pups.breed} </h2>
      </a>
      <a href=#${pups.status} class="pupStatus"> 
      <h2> Puppy Status: <br> ${pups.status} </h2>
      </a>
  </div>
      `
      })

      allPupDiv.innerHTML = pupPlayer.join("")
  }

async function fetchAllPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const data = await response.json()
    puppies = data.data.players
    renderPups()

}




fetchAllPuppies()

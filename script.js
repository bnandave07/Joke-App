const jokeContainer = document.querySelector('.para')
const button = document.querySelector('#btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"





button.addEventListener('click',function(){
    genrateJoke()
})


function genrateJoke(){
    fetch(url).then(function(response){
         response.json()
         .then(function(data){
            console.log(data)
            let paragraph = data.joke
            jokeContainer.innerHTML = paragraph
            console.log(paragraph)
         })
    })
}


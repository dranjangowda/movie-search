let posterContainer = document.getElementById("movieContainer")
let discription = document.getElementById("discription")

async function searchMovie(event){
    event.preventDefault()
    posterContainer.innerHTML = null
    discription.innerHTML = null
   let movie =  document.getElementById("movie").value

    try{
        let res = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=b0bcbcfb`)
        let data = await res.json()
        console.log(data.Response)
        if(data.Response === "False"){
            let h1 = document.createElement("h1")
            h1.setAttribute("id","errorMsg")
            h1.innerText= `your search --( ${movie} )--  did not match any results`
            posterContainer.append(h1)
        }else if(data.Response === "True"){
       let title = document.createElement("p")
       title.innerText = "TITLE --- " + data.Title
       discription.append(title)
       
       let poster = document.createElement("img")
       poster.src = data.Poster
       posterContainer.append(poster)

       let rating = document.createElement("p")
       rating.innerText = "RELEASED DATE --- " +data.Released
       discription.append(rating)

       let year = document.createElement("p")
       year.innerText = "YEAR --- " + data.Year
       discription.append(year)
       let imdbRating = document.createElement("p")
       imdbRating.innerText = "IMDB RATING --- " + data.imdbRating;
       discription.append(imdbRating)
        }

    }
    catch(err){
        console.log("error")
    }
}
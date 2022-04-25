// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;

async function searchMovie() {

    try {
        let search = document.querySelector("#search").value;
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3d7513e669169551c86a221bb67c912&language=en-US&query=${search}&page=1&include_adult=false`);      
        
        let data = await res.json();
        console.log(data.results);
        const movies = data.results
        return movies
    }
    catch (err) {
        console.log(err)
    }
}

 let movieData= JSON.parse(localStorage.getItem("movie")) || [] ;
function appendMovies(data){

  data.map( function (ele) {
  console.log(ele)
    let movieBox= document.createElement("div")
    // movieBox.innerHTML=null;

    let img = document.createElement("img")
    img.setAttribute("class", "poster")
     img.src=`https://image.tmdb.org/t/p/original/${ele.poster_path}`

    let Title = document.createElement("p")
    Title.innerText= `${ele.title}`;

    let btn = document.createElement("button")
    btn.innerText="book_now";
    btn.setAttribute("class", "book_now")
    btn.addEventListener("click" , function(){
        addMovie(ele)
        // window.location.(checkout.html)
    })

    movieBox.append(img, Title, btn)
    movieBox.setAttribute("class", "movieBox")

    document.querySelector("#movies").append(movieBox)
  });
}

function addMovie(ele){
    movieData.push(ele);
    localStorage.setItem("movie", JSON.stringify(movieData))
    window.location.href="checkout.html";
}

async function main() {
    let data = await searchMovie();
    if(data === undefined){
        document.querySelector("#movies").innerHTML = null;
        return false;
    }

    appendMovies(data);
}

function debounce(funct, timeTaken) {
    if (id) {
        clearTimeout(id);
    }

    id = setTimeout( function () { 
        funct();
    },timeTaken);
}
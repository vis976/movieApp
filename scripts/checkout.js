// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let movieData= JSON.parse(localStorage.getItem("movie")) || [] ;
console.log(movieData);
  movieData.map( function (ele) {
//   console.log(ele)
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

    document.querySelector("#movie").append(movieBox)
  });

  function confirmFun(){
      alert("insufficient balance");
  }
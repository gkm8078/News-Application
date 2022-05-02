// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let dataNews = JSON.parse(localStorage.getItem("data"))

appendFun(dataNews)

function appendFun(data){

    document.querySelector("#results").innerHTML = null

    data.map((elem)=> {

        let container = document.createElement("div")
        container.setAttribute("class", "news")
        container.addEventListener("click", ()=> {

            changePage(elem)

        })

        let div1 = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.urlToImage

        div1.append(img)

        let div2 = document.createElement("div")
        
        let h3 = document.createElement("h3")
        h3.innerText = elem.title

        let p = document.createElement("p")
        p.innerText = elem.description

        div2.append(h3, p)

        
        container.append(div1, div2)

        document.querySelector("#results").append(container)

    })

}

// append and display function codes ends



// changePage codes start

function changePage(elem){

    let data = []

    data.push(elem)

    localStorage.setItem("news", JSON.stringify(data))

    window.location.href = "news.html"

}
 
// change page codes ends
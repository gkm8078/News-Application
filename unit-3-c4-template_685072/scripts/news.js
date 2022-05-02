// Ude Import export (MANDATORY)

// append data codes start

let dataNews = JSON.parse(localStorage.getItem("news"))


console.log(dataNews)

function append(dataNews){

    dataNews.map((elem)=> {

        let container = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.urlToImage

        let h3 = document.createElement("h3")
        h3.innerText = elem.title

        let p = document.createElement("p")
        p.innerText = elem.description

        container.append(img, h3, p)

        document.querySelector("#detailed_news").append(container)

    })

}

append(dataNews)
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// other countries codes start

let input;

document.querySelector("#in").addEventListener("click", ()=> {

    input = "in"

    getData(input)

})

document.querySelector("#ch").addEventListener("click", ()=> {

    input = "ch"

    getData(input)

})

document.querySelector("#us").addEventListener("click", ()=> {

    input = "us"

    getData(input)

})

document.querySelector("#uk").addEventListener("click", ()=> {

    input = "uk"

    getData(input)

})

document.querySelector("#nz").addEventListener("click", ()=> {

    input = "nz"

    getData(input)

})  

// other countries codes ends


// api codes start

const getData = async (input)=> {

    try{

        if(input === undefined)
        {
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

            let data = await res.json()
            
            let dataArr = data.articles

            appendFun(dataArr)
        }
        else
        {
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${input}`)

            let data = await res.json()
            
            let dataArr = data.articles
            
            appendFun(dataArr)
        }

    }
    catch(error){

        console.log("error", error)

    }

}

getData()

// api codes ends



// apend and display function codes start


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

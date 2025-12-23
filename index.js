let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")
console.log(buttons)


buttons.forEach((button) => {
    // console.log(button)
    // console.log(button.className)
    // console.log(button.classList)
    // console.log(button.id)

    button.addEventListener("click", (event) => {
        // console.log(event)
        console.log(event.target.id)

        let colorId = event.target.id

        if(colorId === 'YellowGreen'){
            body.style.backgroundColor = colorId
        }
        else if(colorId === 'Pink'){
            body.style.backgroundColor = colorId
        }
        else if(colorId === 'Purple'){
            body.style.backgroundColor = colorId
        }
        else if(colorId === 'whitesmoke'){
            body.style.backgroundColor = colorId
        }
    })
    
})




// buttons.forEach((element) => {
//     
//     


// })


// button.addEventListener("click", (event) => {
//     buttons.forEach((element) => {
        

//     })
// })
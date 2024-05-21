   
   let image = document.querySelector("img");
    let comImg = document.querySelector(".comImg")
    let valBtn = document.querySelectorAll("button") 
    let userScore = document.querySelector(".userScore")
    let comScore = document.querySelector(".compScore")
    let reset = document.querySelector(".reset");
    let imgArr = ["./assets/one.jpeg","./assets/two.jpeg","./assets/three.jpeg","./assets/four.jpeg","./assets/five.jpeg"] 
    let leftDiv = document.querySelector(".left");
    let rightDiv = document.querySelector(".right");
    let sum = 0;
    let num=2
    let functionRun = true
    let comparision;

    // Function for buttons
    let userVlaue = valBtn.forEach((btns,index) => {
        btns.addEventListener("click", () => {
            if (index < imgArr.length) {
                image.setAttribute("src", imgArr[index]);
            }
            if(functionRun){       
                leftDiv.style.border = "10px solid #640D6B"
                comparision = index
                // Index ko sum mein add karna
                sum += index;
                sum++ 
            // userScore display ko update karna new sum ke saath
            userScore.innerHTML = sum;
            } 
            comValue()

        })
        // return btns
    });

    let random; // comp turn varibale
    let booleanVal = false
    let comRandScore = 0;
    let result = true;

    //  Computer function
    let comValue = ()=>{
        rightDiv.style.border="10px solid black"
        let random = Math.floor(Math.random()*5)
        comImg.setAttribute("src", imgArr[random])
        
        if(random === comparision){
         
            functionRun = false
            leftDiv.style.border = "10px solid BLACK"
            rightDiv.style.border = "10px solid #640D6B"
            booleanVal= true
            result= false
      

     }
     if(rightDiv.style.border === "10px solid #640D6B"){
        console.log("code run hogya ha");
    }

    if(booleanVal){
        rightDiv.style.border = "10px solid #640D6B"
        comRandScore +=(random+1);
        comScore.innerHTML = comRandScore
       
    }           
       
    }


// reset Button
    reset.addEventListener("click", ()=>{
        location.reload()
    })
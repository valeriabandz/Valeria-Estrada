let button = document.querySelector("button");
button.onclick = function() {
    let siblings = document.querySelector(".siblings").value;
    let mood = document.querySelector(".Mood").value;
     let results = document.querySelector(".results");
  let kangaroo = document.querySelector(".kangaroo");
    let roofRat = document.querySelector (".roofRat");
    let woodrat = document.querySelector (".woodrat");
    let remi = document.querySelector (".remi");
    
    if (siblings <5 && mood=== "enthusiastic"){
        console.log("bhjhbj");
        results.style.display="block";
        kangaroo.style.display="block";
        results.innerHTML=("kangroo rat");
    }
    else if (siblings >5 && mood=== "lazy"){
        console.log("bhjhbj");
        results.innerHTML="roof rat";     
        results.style.display="block";
        roofRat.style.display="block";
    }
     if (siblings <5 && mood=== "lazy"){
        console.log("Woodrat");
        results.innerHTML = "Woodrat";
        results.style.display="block";
        woodrat.style.display="block";
        
    }
    else if (siblings >5 && mood=== "enthusiastic"){
        console.log("bhjhnj");
        results.innerHTML=("Remi the Rat");
        results.style.display="block";
        remi.style.display="block";
    }
};
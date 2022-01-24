let countEl = document.getElementById("count_el")
//let countStr = document.getElementById("previous_count")
let count = 0;



increment = () =>{
    count = count + 1;
    countEl.textContent = count;
    }

reset= ()=>{
    countEl.textContent +=count+"-";
    count = 0;
    countEl.innerText = 0;
}

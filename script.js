const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');
const resetButton = document.getElementById('reset-btn');
const resultCounter = document.getElementById('result-counter');

//state of the app
const state = {
    count:1
};


//dispatcher
const renderResult = () =>{
    resultCounter.innerHTML = state.count
}

//on click listener with helper methods
increaseButton.addEventListener("click", ()=>{
    let newCount = (state.count+1);
    state.count = newCount;
    renderResult();
})

decreaseButton.addEventListener("click", ()=>{
    let newCount = Math.max(0,state.count-1);
    state.count = newCount;
    renderResult();
})

resetButton.addEventListener("click", ()=>{
    state.count = 0; 
    renderResult();

})





console.log(document.URL);

document.querySelector('.c-btn').addEventListener('click',function () {
    alert('Button Clicked !');
}); 

document.querySelector('.c-btn').addEventListener('mouseout', txtChange);
function txtChange() {
    alert("Mouse Out !");
    document.getElementById('hdt').textContent = "Shopping List 2";
}

document.querySelector('.i-btn').addEventListener('click', function () {
    changeListBack("Hello...");
});
const changeListBack = (x) =>{
    document.getElementById('li-items').style.backgroundColor = "pink";
    document.getElementById('li-items').firstElementChild.textContent = x;
}

// event parameters
document.querySelector('.e-btn').addEventListener('click', clickBtn);
function clickBtn(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.type);
}

// bubbling & capturing
document.getElementById('myP1').addEventListener('click', function () {
    alert("White : child");
}, false);
document.getElementById('myDiv1').addEventListener('click', function (){
    alert("Orange : parent")
}, false);

document.getElementById('myP2').addEventListener('click', function () {
    alert("White : child");
}, true);
document.getElementById('myDiv2').addEventListener('click', function (){
    alert("Orange : parent")
}, true);


// remove events

document.getElementById("abc").addEventListener('click', function () {
    document.querySelector(".c-btn").removeEventListener('click', function (){
        alert('Button Clicked !');
        console.log("event has been removed");
    })
})


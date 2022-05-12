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


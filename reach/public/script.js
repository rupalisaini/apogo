let arr = [[["hi", "hello"]]];
localStorage.setItem('data-array', JSON.stringify(arr));

function handleSubmitButtonPress(event){

    let age = $('#root').find('input[id="age"]').val();
    let gender = $('#gender-select').val();
    let message = $('#root').find('textarea[id="message"]').val();
    console.log(age);
    console.log(gender);
    console.log(message);

    let submission = [age, gender, message];

    let newarr = JSON.parse(localStorage.getItem("data-array"));
    console.log(newarr);
    newarr.push(submission);
    localStorage.setItem('data-array', JSON.stringify(newarr));
    console.log(newarr);
};

$(document).ready(() => {
    console.log("hi");
    const $root = $('#root');
    $root.on('click', "#submit-button", handleSubmitButtonPress);
})
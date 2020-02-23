let arr = [[["hi", "hello"]]];
localStorage.setItem('data-array', JSON.stringify(arr));

function handleSubmitButtonPress(event){

    let age = $('#age').val();
    let gender = $('#gender-select').val();
    let message = $('#message').val();
    let tags = $('#tags').val();
    tags = tags.split(",");

    console.log(age);
    console.log(gender);
    console.log(message);

    $('#age').val("");
    $('#gender-select').val("");
    $('#message').val("");
    $('#tags').val("")

    let submission = [age, gender, message, tags];

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
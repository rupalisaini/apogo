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

function renderStories(){
    $('#stories-feed').empty();
    let stories = JSON.parse(localStorage.getItem("data-array"));
    console.log(stories);
    stories = stories.filter(checkTag);
    for(let i = 0; i < stories.length; i++){
        let post = $('<div class="post" id="post"></div>');
        post.append(`<div class='name-post'>` + stories[i][0], stories[i][1] + `</div>`);
        let textBlock = $("<div id='block-post'>" + stories[i][2] + "</div>")
        textBlock.append(`<div class='text-post'>` + stories[i][3] + `</div>`);

        post.append(textBlock);

        $('#stories-feed').append(post);
        console.log(i);
    }
}

function checkTag(story){
    let selected = $('#type-select').val();
    let tags = story[3];
    if(selected == "All"){
        return true;
    }
    if(tags != undefined && tags.includes(selected)){
        return true;
    }
    return false;
}

$(document).ready(() => {
    console.log("hi");
    const $root = $('#root');
    let arr = [["23", "Female", "fjasodifjasd faopisdjf aosidfjaposidfj asdoifjasdopif aosdifjaspodifja dsifoja sdofijadspfoi ajdsfkasdnf ajsdfnaisdjfnailusdhfalids faoidfjaspdo fijasdfoi ajsdfp oaisjdf aoisjdfaosidfj aosidfj asodif jaospdifjaosdijf aklsdjfaoisdfjaoiej oijrqoiwe tjqiweotj slkjfasdklfj asldkfj asldkfjasoidfjaos dfoaisjdf aosidfjaosidfj asodfija sdpofiajs dfopaisd fjaosidf jasodifj asodfi asf", "Women,Men,Economic"]];
    localStorage.setItem('data-array', JSON.stringify(arr));

    $root.on('click', "#submit-button", handleSubmitButtonPress);
    $root.on('click', "#type-button", renderStories)
    renderStories();
})
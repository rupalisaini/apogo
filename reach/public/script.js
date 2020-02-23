function handleSubmitButtonPress(event){

    let age = $('#age').val();
    let gender = $('#gender-select').val();
    let location = $('#location').val();
    let message = $('#message').val();
    let tags = $('#tags').val();
    tags = tags.split(",");

    console.log(age);
    console.log(gender);
    console.log(message);

    $('#age').val("");
    $('#gender-select').val("");
    $('#location').val("");
    $('#message').val("");
    $('#tags').val("")

    let submission = [age, gender, location, message, tags];

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
        let post = $('<div class="story" id="story"></div>');
        post.append(`<div class='detail-story'>` + stories[i][0] + "," + stories[i][1] + `</div>`);
        let textBlock = $("<div id='block-story'>" + stories[i][2] + "</div>")
        textBlock.append(`<div class='text-story'>` + stories[i][3] + `</div>`);

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
    let arr = [["23", "Female", "Growing up, I was raised by two parents who were culturally Christian. This meant that we went to church on Sunday, but that was about the extent of our relationship with the Lord. Since I grew up in this kind of household, I was always used to the concept of Christianity and religion, but I never fully understood what it meant to accept Jesus into your life as Lord and Savior. The Summer before my sophomore year, I went to a Christian summer camp. At this point in my life, I had really been struggling with putting my identity in what other people thought about me, and it was causing me a lot of distress in my life. One of my camp supervisors pulled me aside one night and talked to me about it, because she could see how sad I was. She told me that even if the world hated me, that Jesus still loved me and would never leave my side. That night I gave my life to Jesus. Due to this, my sophomore year, I began to pursue Jesus seriously. However, when junior year came, it was one of the worst years of my life and I started to turn away from God. When senior year came around, I was not following God at all and found myself falling into very bad habits. Going into college, I had decided that I was going to turn away from following God completely, until I met some people who were a part of an on campus ministry. I started getting connected with a local church, and reading the Bible again. Ultimately, I ended up rededicating my life to Jesus and following him completely, and have began to put my identity in him alone, because I know that he will always love me and never leave me.", "Women,Men,Economic"],["20","Female","Durham","I grew up around two different cultures that have constantly been a part of my life. I was born in the US but my parents were Mexican. In total I’ve lived in the US for 15 years and in Mexico for 6 years. Experiencing both of these cultures has made me very unique because I display values and ideals from both cultures. Because of this, I am more open minded and accepting towards other cultures, and I am also curious to learn more about different cultures. Although American and Mexican cultures are very different from each other, I have learned to appreciate both as part of my identity. My culture is a big part of my identity and I am always willing to educate people on both Mexican and American culture. Growing up with two cultures has made me realize how vastly different two cultures can be, even though they are neighboring countries. I realize that I have so much to learn about all the different countries in the world. Additionally, throughout my life I have moved cities about every 6 years, so my need to adapt to a different culture forced me to become flexible and adaptable to different environments. I think that moving cities constantly has made me become a person who is not likely to settle and I welcome change.","race"],["19","Non-binary","Wake Forest","I was born in the US but then I moved to west Africa where my dad’a family was and spent kindergarten through 3rd grade going to a French school. My family has always been quite mixed which I feel like is something not necessarily reflected after I moved back to the United States. I had a lot of struggles with my identity growing up when we came back to the United States but now I’ve learned to try and accept myself more.","race","acceptance"],["20","female","Raleigh","I was born in Dinalupihan, Bataan, Philippines. I grew up in love with my culture and felt blanketed by its pride and love. However, being Filipina sometimes means your skin is darker or your hair is curlier than your East Asian counterparts. Sometimes, it means looking through page after page of magazines in the Philippines and not looking like a single woman in them. It almost always means looking through American magazines and almost never seeing an Asian woman in it. Part of my journey to self-acceptance, pride, and love meant losing out to the want to look East Asian, to want to look American, to feel as though my image could be printed for others to flip through momentarily and say, Wow. She's gorgeous. I was defined by a hair straightener replacing my breakfast, papaya soap boxes piling up in my trash bin, and the desperate need to use foundations 3 times lighter than I was. All this amounted to was making my vitiligo worse and regretting that my hair can no longer grow in its natural, beautiful curls. Sometimes, the regret and hatred for that part of my life grows and becomes uglier and I hurt myself. But often times, I remember that though I'have altered it, this body is the same and the love and pride that swept me up as a child never left. I remember that I'm still beautiful.","race,gender,acceptance"],["20","Male","Raleigh","I have never been good at running, but I chase with every muscle, blood vessel, and organ in my body. Now, I know what you're asking. What are you chasing? And that's the thing. All my life, I've been chasing something--and I've never been able to catch it. Because just when it seems like that \"something\" is in my reach, I realize that the something I'd been chasing isn't the something I should be chasing. Are you confused yet? Good. I am too.One day, I realized that it isn't about what I'm chasing. It's about who is chasing me. I consider my faith in Jesus to be the most important part of my identity. It's so earth-shattering (in the BEST possible way) to know that I have a creator--one who knows EVERYTHING about me--who chases me with everything that He's got. He knows the darkest thoughts that pass through my mind, the ugliest depths of my heart, and the shameful actions that I've hidden all my life, yet He loves me anyway. And He gave up every muscle, blood vessel, and organ in His body just to tell me that. Sheesh! So now I rejoice in the act of chasing. Chasing joy, chasing PEOPLE!!, and chasing Jesus (even though I don't do it nearly as well as He chases me). My story will not be a fairytale. It won't be perfect. It will consist of roller coasters and hardships and delight and adventures and lots of really good, really unhealthy food. Most importantly, Jesus is in it--and because of that, I know that the end of my story will be the end of my chase.","Religion,Acceptance"]];
    localStorage.setItem('data-array', JSON.stringify(arr));

    $root.on('click', "#submit-button", handleSubmitButtonPress);
    $root.on('click', "#type-button", renderStories)
    renderStories()
})
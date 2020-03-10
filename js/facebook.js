"use strict";

// uzklausiame duomenu
// console.log(feed);


// panaudojame duomenis turinio generavimui
function renderFeed( data ){
    //validavimas
    if ( !Array.isArray(data) ) {
        return console.error(`Duok array'u!!!`);
        
    }

    let HTML = ``;

    //logika
    for (let i = 0; i<data.length; i++){
        const postData = data[i];
        HTML += renderPost(postData);
    }

    return document.querySelector(`.feed`).innerHTML = HTML;
}

function renderPost( data ) {
    console.log(`-------------`);
    
    if ( !data.author || !data.time || !data.content ){
        return '';
    }

    console.log(data);
    let HTML = `<div class="post">
                    ${renderPostHeader(data.author, data.time)}
                    ${renderPostContent(data.content)}
                    ${renderPostFooter()}
                </div>`;
    


    return HTML;
}
function renderPostHeader( author, time ){
    console.log(`-------------`);

    console.log(author);
    console.log(time);
    
    
    let HTML = '';

    HTML = `<div class="header">Header</div>`;
    
    return HTML;
}

function renderPostContent( author, time ){

    let HTML = '';
    HTML = `<div class="content">Content</div>`;
    return HTML;
}

function renderPostFooter( author, time ){

    return `<div class="footer">Footer</div>`;

}

renderFeed ( feed );
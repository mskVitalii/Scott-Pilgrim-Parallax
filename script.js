'use strict'

class Page {
    constructor(html, style = '')
    {
        this.html = html;
        this.style = style;
    }
} 

let pages = [
    new Page(`<div data-depth="0.5" class="layer1"><img src="./items/p1.jpg"></div>
              <div data-depth="0.6" class="layer2"><img src="./items/Scott-p1.png"></div>`, 
              `.layer1 { position: absolute; filter: blur(3px);} 
               .layer2 { position: absolute; }`),
    // new Page('', ''),
];

let currentPage = 0;
const pageStyle = document.querySelector('style');
const parallax = document.querySelector('.parallax-page');

function checkPageTurning() {
    document.querySelector('button#next').disabled = currentPage == 0;  
    document.querySelector('button#next').disabled = currentPage == pages.length;
}

function pageTurning(direction) {   
    checkPageTurning();
    currentPage += direction == 'left' ? -1 : 1;
    showPage(pages[currentPage]);
}

function showPage(ComixPage) {
    parallax.innerHTML = ComixPage.html;  
    pageStyle.innerHTML = ComixPage.style;

    pageStyle.insertAdjacentHTML('beforeend', ComixPage.style);
    new Parallax(parallax);
}

window.onload = () => { 
    checkPageTurning();
    showPage(pages[currentPage]); 
};


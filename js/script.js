
const iframes = document.querySelectorAll('iframe1, iframe2');

const paragraphs = document.createElement('p1, p2, p3, p4');


paragraph.textContent = 'Taylor Swift, You Belong With Me, Billie Eilish, What Was I Made For';


iframes.forEach(iframe => {
    iframe.parentNode.insertBefore(paragraph.cloneNode(true), iframe.nextSibling);
});
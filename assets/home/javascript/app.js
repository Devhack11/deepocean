'use strict';
const revealer = [...document.querySelectorAll('.heading-article')];

let wordArray = [];
let html = '';
let options = 
{
      root: null,
      rootMargin: '0%',
      threshold: 0.5,
};

let observer = new IntersectionObserver(showItem, options);
revealer.forEach((word) => 
{
wordArray = word.children[0].textContent.split('');
wordArray.forEach((letter) => 
{
html += `<span class="heading-span">${letter}</span>`;
}
);
word.innerHTML = html;
html = '';
observer.observe(word);
}
);
const lettersTransform = document.querySelectorAll('.heading-span');
lettersTransform.forEach((letter, i) => 
{
i % 2 == 0
? (letter.style.transform = 'translateY(130%) scale(2.8)')
: (letter.style.transform = 'translateY(-130%) scale(2.8)');
}
);

function showItem(entries) 
{
entries.forEach((entry) => 
{
if (!entry.isIntersecting) return;
let letters = [...entry.target.querySelectorAll('.heading-span')];
letters.forEach((letter, i) => 
{
const rand = getRandomNumber(10, 200);
setTimeout(() => 
{
letter.classList.add('active');
},
i * rand);
}
);
}
);
}
function getRandomNumber(min, max) 
{
return Math.random() * (max - min) + min;
}









gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.config(
{      
      force3D: true,
      autoSleep: 120,
      trialWarn: false,
      nullTargetWarn: false
}
);

/* bottom color */
const color = document.querySelector(".bottom-color");
const tl = gsap.timeline(
{
      scrollTrigger: {
      scrub: 1,
      pin: false,
      end: "bottom",
      anticipatePin: 1,
      trigger: ".box-a",
      endTrigger: ".box-b"
}
}
);
tl.to
(
color,
{          
      duration: 1,      
      /*
      ease: "none",
      backgroundColor: "#014798"
      */
},
0
);


/* bottom scuba */
gsap.to(".scuba-sticky", 
{
      scrollTrigger: {      
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      endTrigger: ".box-c",
      end: "center+=1100px",
      start: "center center",
      trigger: ".scuba-sticky",
      invalidateOnRefresh: true
}
}
);

/* bottom pagination */
var scene1 = gsap.timeline(
{
      scrollTrigger: {     
      pin: true,      
      scrub: 0.25,
      start: "top",
      end: "bottom",
      anticipatePin: 1,
      trigger: ".box-a",
      invalidateOnRefresh: true
}
}
);
var scene2 = gsap.timeline(
{
      scrollTrigger: {      
      pin: true,      
      scrub: 0.25,
      start: "top",
      end: "bottom",
      anticipatePin: 1,
      trigger: ".box-b",
      invalidateOnRefresh: true
}
}
);
var scene3 = gsap.timeline(
{
      scrollTrigger: {      
      scrub: 0.25,
      start: "top",
      end: "bottom",
      anticipatePin: 1,
      pin: ".box-c",
      trigger: ".box-c",
      invalidateOnRefresh: true
}
}
);
ScrollTrigger.refresh(true);




window.addEventListener("load", function () 
{
let splitWords = function (selector) 
{
var elements = document.querySelectorAll(selector);
elements.forEach(function (el) 
{
      el.dataset.splitText = el.textContent;
      el.innerHTML = el.textContent
      .split(/\s/)
.map(function (word) 
{
return word
      .split("-")
.map(function (word) 
{
return '<span class="word">' + word + "</span>";
}
)
.join('<span class="hyphen">-</span>');
}
)
.join('<span class="whitespace"> </span>');
}
);
};

let splitLines = function (selector) 
{
var elements = document.querySelectorAll(selector);
splitWords(selector);
elements.forEach(function (el) 
{
      var lines = getLines(el);
      var wrappedLines = "";
      lines.forEach(function (wordsArr) 
      {
      wrappedLines += '<span class="line"><span class="words">';
      wordsArr.forEach(function (word) 
      {
      wrappedLines += word.outerHTML;
      }
      );
      wrappedLines += "</span></span>";
      }
      );
      el.innerHTML = wrappedLines;
}
);
};
let getLines = function (el) 
{
var lines = [];
var line;
var words = el.querySelectorAll("span");
var lastTop;
for (var i = 0; i < words.length; i++) 
{
var word = words[i];
if (word.offsetTop != lastTop) 
{
if (!word.classList.contains("whitespace")) 
{
lastTop = word.offsetTop;
      line = [];
      lines.push(line);
}
}
line.push(word);
}
return lines;
};
splitLines(".bottom-paragraph");
let revealText = document.querySelectorAll(".bottom-paragraph");
gsap.registerPlugin(ScrollTrigger);
let revealLines = revealText.forEach((element) => 
{
const lines = element.querySelectorAll(".words");
let tl = gsap.timeline(
{
      scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none reset"
      }
}
);
tl.set(element, 
{
      autoAlpha: 1 
}
);
tl.from(lines, 1, 
{
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.25,
      delay: 0.2
}
);
}
);
}
);
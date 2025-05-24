let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
        });
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter,i)=>{
            letter.className="letter behind";
            setTimeout(()=>{
                letter.className = "letter in";
            }, 340 + i * 80);
        });
    
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

//Active menu //
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu()
{
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("Scroll",activeMenu);


// JavaScript for filtering projects - 1
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Show/Hide Projects
      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// JavaScript for filtering projects - 2
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn1");
  const projectCards = document.querySelectorAll(".project-card1");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category1");

      // Show/Hide Projects
      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category1") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


//skills

  document.addEventListener("DOMContentLoaded", function () {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
      const percent = progress.getAttribute('data-percent');
      progress.style.width = percent + '%';

      const tooltip = progress.querySelector('.tooltip');
      tooltip.textContent = percent + '%';
    });
  });





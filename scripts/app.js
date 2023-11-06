const text1 = {
  strings: [`> Hello I'm Simon^800`,],
  typeSpeed: 80,
  onComplete: function(cursorRemover) { cursorRemover.cursor.remove() }
};

const text2 = {
    strings: [`> FrontEnd^300`,`> BackEnd^150`,`> FullStack WebDeveloper`],
    typeSpeed: 80,
    backSpeed:60,
    startDelay: 2600,
    
  };
const headline = new Typed('#name',text1);
const subtitle = new Typed('#position',text2);
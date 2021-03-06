const translations = {
    title: {
      en: "Translatable Article",
      ar: "مقال قابل للترجمة"
    },
    choose: {
      en: "Choose a language",
      ar: "اختر لغة"
    },
    firstParagraph: {
      en: "Hello, My name is Hassan El-Deghedy.",
      ar: ". اهلا بك , اسمى حسن الدغيدي"
    },
    secondParagraph: {
        en: "I'm an egyptian (React.js/PHP) Full stack web Developer.",
        ar: ". (React.js/PHP) Full stack web Developer انا مطور مواقع مصري"
    },  
    thirdParagraph: {
      en: "I enjoy creating cool websites with JavaScript.",
      ar: ". انا استمتع بانشاء مواقع رائعة باستخدام جافاسكريبت"
    },
    fourthParagraph: {
        en: "For me, writing codes is a hobby and a pleasure before it becomes a job.",
        ar: ". كتابه الاكواد بالنسبه لي هوايه ومتعه قبل ان تكون عمل"
    },
    fifthParagraph: {
        en: "I started writing codes in 2018.",
        ar: ". بدئت كتابه الاكود في سنه 2018"
    },
    readMore: {
      en: "Read More",
      ar: "اقرا المزيد"
    }
  }

  const English = document.getElementsByClassName("elang")[0];
  const Arabic = document.getElementsByClassName("alang")[0];
  const article = document.getElementsByClassName("article")[0];
  const titles = document.getElementsByClassName("titles")[0];
  const lang = document.getElementsByClassName("lang")[0];
  const fParagraph = document.getElementsByClassName("fParagraph")[0];
  const sParagraph = document.getElementsByClassName("sParagraph")[0];
  const tParagraph = document.getElementsByClassName("tParagraph")[0];
  const uParagraph = document.getElementsByClassName("uParagraph")[0];
  const iParagraph = document.getElementsByClassName("iParagraph")[0];
  const readMore = document.getElementsByClassName("readMore")[0];

  let languages = "en";

  function getLang() {
    titles.innerHTML = translations.title[languages];
    lang.innerHTML = translations.choose[languages];
    fParagraph.innerHTML = translations.firstParagraph[languages];
    sParagraph.innerHTML = translations.secondParagraph[languages];
    tParagraph.innerHTML = translations.thirdParagraph[languages];
    uParagraph.innerHTML = translations.fourthParagraph[languages];
    iParagraph.innerHTML = translations.fifthParagraph[languages];
    readMore.innerHTML = translations.readMore[languages];  
  }

    English.addEventListener('click', toEnglish);

    function toEnglish(){
        languages = "en";
        getLang();
        article.style.textAlign = "left";
    }
  
    Arabic.addEventListener('click', toArabic);

    function toArabic(){
        languages = "ar";
        getLang();
        article.style.textAlign = "right";
    }
    getLang();

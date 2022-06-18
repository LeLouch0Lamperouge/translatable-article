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
    readMore: {
      en: "Read More",
      ar: "اقرا المزيد"
    }
  }

  const English = document.getElementById("toEnglish");
  const Arabic = document.getElementById("toArabic");
  const article = document.getElementById("article");
  const titles = document.getElementById("titles");
  const lang = document.getElementById("lang");
  const fParagraph = document.getElementById("fParagraph");
  const sParagraph = document.getElementById("sParagraph");
  const tParagraph = document.getElementById("tParagraph");
  const readMore = document.getElementById("readMore");

  titles.innerHTML = translations.title.en;
  lang.innerHTML = translations.choose.en;
  fParagraph.innerHTML = translations.firstParagraph.en;
  sParagraph.innerHTML = translations.secondParagraph.en;
  tParagraph.innerHTML = translations.thirdParagraph.en;
  readMore.innerHTML = translations.readMore.en;

    English.addEventListener('click', toEnglish);

    function toEnglish(){
        titles.innerHTML = translations.title.en;
        lang.innerHTML = translations.choose.en;
        fParagraph.innerHTML = translations.firstParagraph.en;
        sParagraph.innerHTML = translations.secondParagraph.en;
        tParagraph.innerHTML = translations.thirdParagraph.en;

        readMore.innerHTML = translations.readMore.en;

        article.style.textAlign = "left";
    }
  
    Arabic.addEventListener('click', toArabic);

    function toArabic(){
        titles.innerHTML = translations.title.ar;  
        lang.innerHTML = translations.choose.ar;  
        fParagraph.innerHTML = translations.firstParagraph.ar;
        sParagraph.innerHTML = translations.secondParagraph.ar;
        tParagraph.innerHTML = translations.thirdParagraph.ar;

        readMore.innerHTML = translations.readMore.ar;

        article.style.textAlign = "right";
    }

export type Quote = {
  id: string;
  arabic: string;
  english: string;
  albanian: string;
  source: {
    work: string;
    volume?: string;
    page?: string;
    referenceUrl: string;
  };
};

export const quotes: Quote[] = [
  {
    id: "jumah-harm",
    arabic:
      "وفي قول رسول الله صلى الله عليه وسلم للمتخطي يوم الجمعة: «آذيت» بيان أن التخطي أذًى، ولا يحل أذى مسلم بحال، في الجمعة وغير الجمعة.",
    english:
      "In the Prophet’s words to the man who stepped over people on Friday—“You have harmed”—is a clarification that stepping over others is harm, and it is never permissible to harm a Muslim, whether on Friday or otherwise.",
    albanian:
      "Në fjalët e të Dërguarit të Allahut ﷺ drejtuar atij që ecte mbi njerëzit në xhuma – “Ke lënduar” – gjendet sqarimi se kalimi sipër të tjerëve është dëm, dhe nuk lejohet në asnjë rast të dëmtohet një mysliman, as në ditën e xhumasë e as jashtë saj.",
    source: {
      work: "التمهيد",
      volume: "1",
      page: "316",
      referenceUrl: "https://islamqa.info/ar/answers/41731"
    }
  },
  {
    id: "dog-purity",
    arabic:
      "واختلف الفقهاء أيضًا في سؤر الكلب وما ولغ فيه من الماء والطعام. فجملة ما ذهب إليه مالك واستقر عليه مذهبه عند أصحابه: أن سؤر الكلب طاهر، ويُغسَل الإناء من ولوغه سبعًا تعبُّدًا.",
    english:
      "The jurists also differed regarding the leftover water of the dog and what it licks of water and food. In summary, what Mālik adopted and what became established in his school among his companions is that the dog’s leftover is pure, and that the vessel it licked is washed seven times as an act of worshipful compliance.",
    albanian:
      "Dijetarët u ndanë edhe për mbetjen e ujit të qenit dhe për ato që ai lëpin nga uji dhe ushqimi. Përmbledhtas, mendimi që Maliku adoptoi dhe që u stabilizua në medhhebin e tij sipas shokëve të tij është se mbetja e qenit është e pastër, ndërsa ena që ai lëpin lahet shtatë herë si bindje adhurimi.",
    source: {
      work: "التمهيد",
      volume: "18",
      page: "269",
      referenceUrl: "https://islamqa.info/ar/answers/266369"
    }
  },
  {
    id: "milk-respect",
    arabic:
      "قال ابن عبد البر: في الحديث النهي عن أن يأخذ المسلم للمسلم شيئًا إلا بإذنه، وإنما خُصَّ اللبن بالذكر لتساهل الناس فيه فنُبِّه به على ما هو أولى منه.",
    english:
      "Ibn Abd al-Barr said: This hadith forbids a Muslim from taking anything belonging to another Muslim except with his permission. Milk was singled out because people tend to take liberties with it, and by mentioning it the Prophet alerted them to matters even more deserving of respect.",
    albanian:
      "Ibn Abd el-Berri tha: Ky hadith ndalon që një musliman të marrë diçka të një tjetri pa lejen e tij. Qumështi u përmend veçmas sepse njerëzit janë të pakujdesshëm me të, dhe me përmendjen e tij Profeti i paralajmëroi për çështje edhe më të rëndësishme.",
    source: {
      work: "فتح الباري",
      volume: "5",
      page: "89",
      referenceUrl: "https://islamqa.info/ar/answers/381114"
    }
  },
  {
    id: "walimah-obligation",
    arabic:
      "قال ابن عبد البر: لا خلاف في وجوب الإجابة إلى الوليمة لمن دُعي إليها إذا لم يكن فيها لهو.",
    english:
      "Ibn Abd al-Barr said: There is no disagreement about the obligation to answer the wedding feast when one is invited to it, so long as it contains no frivolity.",
    albanian:
      "Ibn Abd el-Berri tha: Nuk ka kundërshtim për detyrimin që t’i përgjigjesh dasmës kur je ftuar, për sa kohë në të nuk ka lojëra të kota.",
    source: {
      work: "الاستذكار",
      referenceUrl: "https://islamqa.info/ar/answers/115350"
    }
  },
  {
    id: "isnad-critique",
    arabic:
      "قال ابن عبد البر: هذا إسناد لا يصح، ولا يرويه عن نافع من يُحتجُّ به.",
    english:
      "Ibn Abd al-Barr said: This chain of narration is not authentic, and none of those who narrate it from Nāfiʿ are relied upon as proof.",
    albanian:
      "Ibn Abd el-Berri tha: Ky zinxhir transmetimi nuk është i saktë dhe asnjëri prej atyre që e transmetojnë nga Nafi’u nuk merret si provë.",
    source: {
      work: "التمهيد",
      referenceUrl: "https://islamqa.info/ar/answers/158731"
    }
  }
];

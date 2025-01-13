function abc() {

  let jsonDataLang = {
    quizHindi: [
      {
        MenuUITxt01: "पॉडकास्ट",
        MenuUITxt02: "मनोरंजन",
        MenuUITxt03: "विदेश",
        MenuUITxt04: "होम पेज",
        MenuUITxt05: "विज्ञान",
        MenuUITxt06: "खेल",
        MenuUITxt07: "सोशल",
        MenuUITxt08: "भारत",
      },
    ],
    quizMarathi: [
      {
        MenuUITxt01: "पॉडकास्ट",
        MenuUITxt02: "मनोरंजन",
        MenuUITxt03: "परदेशी",
        MenuUITxt04: "मुख्यपृष्ठ",
        MenuUITxt05: "विज्ञान",
        MenuUITxt06: "क्रीडा",
        MenuUITxt07: "सामाजिक",
        MenuUITxt08: "भारत",
      },
    ],
    quizGujarati: [
      {
        MenuUITxt01: "પૉડકાસ્ટ",
        MenuUITxt02: "મનોરંજન",
        MenuUITxt03: "વિદેશી",
        MenuUITxt04: "હોમ પેજ",
        MenuUITxt05: "વિજ્ઞાન",
        MenuUITxt06: "રામતગમત",
        MenuUITxt07: "સામાજિક",
        MenuUITxt08: "ભારત",
      },
    ],
    quizPunjabi: [
      {
        MenuUITxt01: "ਪੋਡਕਾਸਟ ",
        MenuUITxt02: "ਮਨੋਰੰਜਨ ",
        MenuUITxt03: "ਵਿਦੇਸ਼ੀ",
        MenuUITxt04: "ਮੁੱਖ ਪੰਨਾ",
        MenuUITxt05: "ਸਾਇੰਸ ",
        MenuUITxt06: "ਖੇਡਾਂ ",
        MenuUITxt07: "ਸਮਾਜਿਕ",
        MenuUITxt08: "ਭਾਰਤ ",
      },
    ],
    quizTamil: [
      {
        MenuUITxt01: "ஒலி வடிவில்",
        MenuUITxt02: "பொழுதுபோக்கு",
        MenuUITxt03: "வெளிநாட்டு",
        MenuUITxt04: "முகப்பு பக்கம்",
        MenuUITxt05: "அறிவியல்",
        MenuUITxt06: "விளையாட்டு",
        MenuUITxt07: "சமூக",
        MenuUITxt08: "இந்தியா",
      },
    ],
    quizTelagu: [
      {
        MenuUITxt01: "పాడ్‌కాస్ట్",
        MenuUITxt02: "వినోదం",
        MenuUITxt03: "విదేశీ",
        MenuUITxt04: "హోమ్ పేజీ",
        MenuUITxt05: "సైన్స్",
        MenuUITxt06: "క్రీడలు",
        MenuUITxt07: "సామాజిక",
        MenuUITxt08: "భారత్",
      },
    ],
  };


  let jsonDataLanggenre = {

    quizHindi: [
      {
        GenreTxt01: "राजनीति",
        GenreTxt02: "विज्ञान",
        GenreTxt03: "स्वास्थ्य",
        GenreTxt04: "शिक्षा",
        GenreTxt05: "मनोरंजन",
        GenreTxt06: "खेल",
        GenreTxt07: "व्यापार",
        GenreTxt08: "टैकनोलजी",
        GenreTxt09: "संस्कृति",
        GenreTxt10: "पर्यावरण",
        GenreTxt11: "सोशल",
        GenreTxt12: "अंतरराष्ट्रीय समाचार",
        GenreTxt13: "यात्रा",
        GenreTxt14: "वित्त"
      },
    ],
    quizMarathi: [
      {
        GenreTxt01: "राजकारण",
        GenreTxt02: "विज्ञान",
        GenreTxt03: "आरोग्य",
        GenreTxt04: "शिक्षण",
        GenreTxt05: "मनोरंजन",
        GenreTxt06: "क्रीडा",
        GenreTxt07: "व्यापार",
        GenreTxt08: "तंत्रज्ञान",
        GenreTxt09: "संस्कृती",
        GenreTxt10: "पर्यावरण",
        GenreTxt11: "सामाजिक",
        GenreTxt12: "आंतरराष्ट्रीय बातम्या",
        GenreTxt13: "पर्यटन",
        GenreTxt14: "अर्थ"
      },
    ],
    quizGujarati: [
      {
        GenreTxt01: "રાજકારણ",
        GenreTxt02: "વિજ્ઞાન",
        GenreTxt03: "આરોગ્ય",
        GenreTxt04: "શિક્ષણ",
        GenreTxt05: "મનોરંજન",
        GenreTxt06: "રામતગમત ",
        GenreTxt07: "વેપાર",
        GenreTxt08: "ટેક્નૉલૉજી",
        GenreTxt09: "સંસ્કૃતિ",
        GenreTxt10: "પર્યાવરણ",
        GenreTxt11: "સામાજિક",
        GenreTxt12: "આંતરરાષ્ટ્રીય સમાચાર ",
        GenreTxt13: "ટ્રાવેલ",
        GenreTxt14: "નાણાકીય બાબતો "
      },
    ],
    quizPunjabi: [
      {
        GenreTxt01: "ਸਿਆਸਤ",
        GenreTxt02: "ਸਾਇੰਸ ",
        GenreTxt03: "ਸਿਹਤ ",
        GenreTxt04: "ਸਿੱਖਿਆ ",
        GenreTxt05: "ਮਨੋਰੰਜਨ ",
        GenreTxt06: "ਖੇਡਾਂ ",
        GenreTxt07: "ਕਾਰੋਬਾਰ",
        GenreTxt08: "ਤਕਨੀਕ ",
        GenreTxt09: "ਸੱਭਿਆਚਾਰ ",
        GenreTxt10: "ਵਾਤਾਵਰਨ ",
        GenreTxt11: "ਸਮਾਜਿਕ",
        GenreTxt12: "ਕੌਮਾਂਤਰੀ ਖ਼ਬਰਾਂ ",
        GenreTxt13: "ਸੈਰ-ਸਪਾਟਾ ",
        GenreTxt14: "ਵਿੱਤ"
      },
    ],

    quizTamil: [
      {
        GenreTxt01: "அரசியல்",
        GenreTxt02: "அறிவியல்",
        GenreTxt03: "உடல்நலம்",
        GenreTxt04: "கல்வி",
        GenreTxt05: "பொழுதுபோக்கு",
        GenreTxt06: "விளையாட்டு",
        GenreTxt07: "வணிகம்",
        GenreTxt08: "தொழில்நுட்பம்",
        GenreTxt09: "கலாசாரம்",
        GenreTxt10: "சுற்றுச்சூழல்",
        GenreTxt11: "சமூக",
        GenreTxt12: "சர்வதேச செய்திகள்",
        GenreTxt13: "பயணம்",
        GenreTxt14: "நிதி"
      },
    ],
    quizTelagu: [
      {
        GenreTxt01: "రాజకీయాలు",
        GenreTxt02: "సైన్స్",
        GenreTxt03: "ఆరోగ్యం",
        GenreTxt04: "విద్య",
        GenreTxt05: "వినోదం",
        GenreTxt06: "క్రీడలు",
        GenreTxt07: "వ్యాపారం",
        GenreTxt08: "టెక్నాలజీ",
        GenreTxt09: "సంస్కృతి",
        GenreTxt10: "పర్యావరణం",
        GenreTxt11: "సామాజిక",
        GenreTxt12: "అంతర్జాతీయ వార్తలు",
        GenreTxt13: "ట్రావెల్",
        GenreTxt14: "ఫైనాన్స్"
      },
    ],
  }




  let biuld = {
    "English": "Build your own news portal",
    "Hindi": "अपना न्यूज़ पोर्टल बनाएँ",
    "Gujarati": "તમારું ખુદનું ન્યૂઝ પૉર્ટલ બનાવો",
    "Marathi": "तुमचं स्वत:चं न्यूज पोर्टल तयार करा.",
    "Punjabi": "ਆਪਣਾ ਨਿਊਜ਼ ਪੋਰਟਲ ਬਣਾਓ",
    "Tamil": "உங்கள் சொந்த செய்தித் தளத்தை உருவாக்குங்கள்",
    "Telugu": "మీ న్యూస్ పోర్టల్ నిర్మించండి"
  }

  let click = {
    "English": "Click/Tap & hold to drag articles and design your own BBC News webpage.",
    "Hindi": "आर्टिकल चुनने के लिए क्लिक, टैप और होल्ड करके आप अपनी बीबीसी वेबसाइट बना सकते हैं.",
    "Gujarati": "આર્ટિકલ પર ક્લિક/ટૅપ કરીને હોલ્ડ કરી ડ્રેગ કરો અને તમારું ખુદનું બીબીસી ન્યૂઝ વેબપેજ ડિઝાઇન કરો.",
    "Marathi": "लेखाची जागा बदलण्यासाठी क्लिक / टॅप करून धरून ठेवा आणि तुमचं स्वतःचं बीबीसी न्यूज पेज डिझाईन करा.",
    "Punjabi": "ਖ਼ਬਰਾਂ ਦੀ ਜਗ੍ਹਾ ਬਦਲਣ ਲਈ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਦਬਾ ਕੇ ਰੱਖੋ, ਇਸ ਤਰ੍ਹਾਂ ਤੁਸੀਂ ਆਪਣਾ ਬੀਬੀਸੀ ਨਿਊਜ਼ ਵੈੱਬਪੇਜ ਡਿਜ਼ਾਈਨ ਕਰ ਸਕਦੇ ਹੋ ",
    "Tamil": "கணினி மவுஸ் மூலம் கிளிக் & டிராக் செய்து உங்களது சொந்த பிபிசி செய்தி வலைத்தளத்தை உருவாக்குங்கள்",
    "Telugu": "ఆర్టికల్స్ లాగడానికి క్లిక్/ట్యాప్ & హోల్డ్ చేసి మీ సొంతం బీబీసీ న్యూస్ వెబ్ పేజీని డిజైన్ చేయండి."
  }

  let begin = {
    "English": "Begin",
    "Hindi": "शुरू करें",
    "Gujarati": "શરૂ કરો",
    "Marathi": "सुरुवात करा",
    "Punjabi": "ਸ਼ੁਰੂ ਕਰੋ",
    "Tamil": "தொடங்கு",
    "Telugu": "మొదలు పెట్టండి",
  }


  /////
  let next = {
    "English": "Next",
    "Hindi": "अगला",
    "Gujarati": "નેક્સ્ટ",
    "Marathi": "पुढे जा",
    "Punjabi": "ਅੱਗੇ ਵਧੋ	",
    "Tamil": "அடுத்து",
    "Telugu": "తరువాత"
  }

  let tap = {
    "English": "Tap to Download",
    "Hindi": "डाउनलोड करने के लिए टैप करें",
    "Gujarati": "ડાઉનલોડ કરવા માટે ટૅપ કરો",
    "Marathi": "डाऊनलोड कराण्यासाठी क्लिक करा.",
    "Punjabi": "ਡਾਊਨਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
    "Tamil": "பதிவிறக்கம் செய்",
    "Telugu": "డౌన్లోడ్ చేయడానికి ట్యాప్ చేయండి"
  }

  let mainmenu = {
    "English": "Main Menu",
    "Hindi": "मुख्य मेन्यू ",
    "Gujarati": " મુખ્ય મેનુ",
    "Marathi": "मुख्य बातम्या",
    "Punjabi": "ਮੁੱਖ ਮੇਨੂ",
    "Tamil": "முகப்பு",
    "Telugu": "మెయిన్ మెనూ"

  }

  let selectheadlines = {
    "English": "Select the headlines",
    "Hindi": "मुख्य समाचार चुनें ",
    "Gujarati": "મુખ્ય સમાચાર પસંદ કરો",
    "Marathi": "मुख्य बातम्या निवडा",
    "Punjabi": "ਮੁੱਖ ਖ਼ਬਰਾਂ ਚੁਣੋ",
    "Tamil": "தலைப்புகளைத் தேர்வு செய்க",
    "Telugu": "శీర్షికను ఎంచుకోండి"
  }

  let list = {
    "English": "Select the list of special news",
    "Hindi": "विशेष समाचार की सूची चुनें",
    "Gujarati": "વિશેષ સમાચારની યાદી પસંદ કરો ",
    "Marathi": "विशेष बातम्यांची यादी निवडा",
    "Punjabi": "ਖ਼ਾਸ ਖ਼ਬਰਾਂ ਦੀ ਸੂਚੀ ਚੁਣੋ",
    "Tamil": "சிறப்பு செய்திகள் பட்டியலைத் தேர்வு செய்க",
    "Telugu": "ప్రత్యేక కథనాల జాబితాను ఎంచుకోండి"
  }

  let selectNews = {
    "English": "Select Other News",
    "Hindi": "अन्य समाचार चुनें ",
    "Gujarati": "અન્ય સમાચાર પસંદ કરો ",
    "Marathi": "इतर बातम्या निवडा",
    "Punjabi": "ਹੋਰ ਖ਼ਬਰਾਂ ਚੁਣੋ",
    "Tamil": "மற்ற செய்திகளைத் தேர்வு செய்க",
    "Telugu": "ఇతర వార్తలను ఎంచుకోండి"

  }
}
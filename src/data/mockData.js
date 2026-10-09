// TruthLens AI - Mock Data & Multilingual Support

export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export const UI_TRANSLATIONS = {
  en: {
    tagline: 'Pause. Verify. Share Responsibly.',
    heroTitle: "Don't just forward it. Verify it.",
    heroSubtitle: 'Check viral messages, news, images, and suspicious claims with AI-powered explanations in your language.',
    verifyClaimBtn: 'Verify a Claim',
    exploreDemoBtn: 'Explore Demo',
    features: {
      multilingual: 'Multilingual Verification',
      multilingualDesc: 'Understands regional nuances and generates clear explanations across 8 Indian languages.',
      explainable: 'Explainable Results',
      explainableDesc: 'Goes beyond true/false with context, evidence limits, and actionable next steps.',
      multiFormat: 'Multiple Content Formats',
      multiFormatDesc: 'Check text messages, screenshots, PDF circulars, and external web links seamlessly.',
    },
    stats: {
      claimsChecked: 'Claims Checked',
      misleadingClaims: 'Misleading Claims',
      languagesSupported: 'Languages Supported',
      caption: 'Illustrative hackathon demo metrics',
    },
    trySample: 'Try a Sample Claim',
    trySampleDesc: 'Click any realistic viral claim below to instantly load it into the verification engine:',
    nav: {
      overview: 'Overview',
      verify: 'Verify a Claim',
      recent: 'Recent Checks',
      howItWorks: 'How It Works',
      newVerification: 'New Verification',
    },
    input: {
      title: 'Submit Content for Verification',
      subtitle: 'Paste any suspicious forward, rumor, or headline. We test against verified public patterns.',
      placeholder: 'Paste a forwarded WhatsApp message, news headline, or any claim you want to verify...',
      contentType: 'Content Type',
      types: {
        text: 'Text or Message',
        image: 'Image',
        document: 'Document',
        link: 'Link',
      },
      selectLanguage: 'Analysis Language',
      analyzeBtn: 'Analyze Claim',
      resetBtn: 'Clear Input',
      prototypeNotice: 'Prototype Notice: Verification is simulated using curated heuristic indicators and benchmark datasets. No external paid AI API is called.',
    },
    results: {
      badgeTitle: 'Simulated Demo Result',
      disclaimer: 'Simulated demo result — not independently verified.',
      confidenceLabel: 'Demo confidence indicator',
      confidenceDisclaimer: 'Illustrative heuristic confidence, not live model telemetry.',
      whyHeading: 'Why This Result?',
      whatToDoHeading: 'What You Should Do',
      sourcesHeading: 'Recommended Sources to Check',
      actions: {
        checkAnother: 'Check Another Claim',
        copySummary: 'Copy Summary',
        saveRecent: 'Save to Recent Checks',
        saved: 'Saved in Recent Checks',
      },
    },
  },
  hi: {
    tagline: 'रुकें। सत्यापित करें। जिम्मेदारी से साझा करें।',
    heroTitle: 'सिर्फ फॉरवर्ड न करें। सत्यापित करें।',
    heroSubtitle: 'वायरल संदेशों, समाचारों, छवियों और संदिग्ध दावों को अपनी भाषा में एआई-संचालित स्पष्टीकरण के साथ जांचें।',
    verifyClaimBtn: 'दावा सत्यापित करें',
    exploreDemoBtn: 'डेमो देखें',
    features: {
      multilingual: 'बहुभाषी सत्यापन',
      multilingualDesc: 'क्षेत्रीय बोलियों को समझता है और 8 भारतीय भाषाओं में सरल व्याख्या प्रदान करता है।',
      explainable: 'व्याख्यात्मक परिणाम',
      explainableDesc: 'केवल सही/गलत नहीं, बल्कि संदर्भ, साक्ष्य की सीमाएं और उचित कदम भी बताता है।',
      multiFormat: 'विविध प्रारूप समर्थन',
      multiFormatDesc: 'टेक्स्ट संदेश, स्क्रीनशॉट, पीडीएफ परिपत्र और वेब लिंक आसानी से जांचें।',
    },
    stats: {
      claimsChecked: 'जांचे गए दावे',
      misleadingClaims: 'भ्रामक दावे',
      languagesSupported: 'समर्थित भाषाएं',
      caption: 'हैकाथॉन प्रदर्शन हेतु काल्पनिक आंकड़े',
    },
    trySample: 'नमूना दावा आज़माएं',
    trySampleDesc: 'सत्यापन इंजन में तुरंत लोड करने के लिए नीचे दिए गए किसी भी वायरल दावे पर क्लिक करें:',
    nav: {
      overview: 'अवलोकन',
      verify: 'दावा सत्यापित करें',
      recent: 'हालिया जांच',
      howItWorks: 'यह कैसे काम करता है',
      newVerification: 'नया सत्यापन',
    },
    input: {
      title: 'सत्यापन के लिए सामग्री दर्ज करें',
      subtitle: 'कोई भी संदिग्ध फॉरवर्ड, अफवाह या समाचार शीर्षक पेस्ट करें।',
      placeholder: 'व्हाट्सएप संदेश, समाचार शीर्षक, या कोई भी संदिग्ध दावा यहां पेस्ट करें...',
      contentType: 'सामग्री का प्रकार',
      types: {
        text: 'टेक्स्ट या संदेश',
        image: 'छवि (इमेज)',
        document: 'दस्तावेज़ (पीडीएफ)',
        link: 'वेब लिंक',
      },
      selectLanguage: 'विश्लेषण भाषा',
      analyzeBtn: 'दावे का विश्लेषण करें',
      resetBtn: 'साफ़ करें',
      prototypeNotice: 'प्रोटोटाइप सूचना: यह सत्यापन चुनिंदा नियमों और बेंचमार्क डेटासेट पर आधारित सिमुलेशन है।',
    },
    results: {
      badgeTitle: 'सिम्युलेटेड डेमो परिणाम',
      disclaimer: 'सिम्युलेटेड डेमो परिणाम — स्वतंत्र रूप से सत्यापित नहीं किया गया है।',
      confidenceLabel: 'डेमो विश्वास संकेतक',
      confidenceDisclaimer: 'प्रदर्शनात्मक संकेतक, वास्तविक मॉडल स्कोर नहीं।',
      whyHeading: 'यह परिणाम क्यों आया?',
      whatToDoHeading: 'आपको क्या करना चाहिए?',
      sourcesHeading: 'सत्यापन के लिए अनुशंसित स्रोत',
      actions: {
        checkAnother: 'अन्य दावा जांचें',
        copySummary: 'सारांश कॉपी करें',
        saveRecent: 'हालिया जांच में सहेजें',
        saved: 'हालिया जांच में सहेजा गया',
      },
    },
  },
  mr: {
    tagline: 'थांबा. पडताळणी करा. जबाबदारीने शेअर करा.',
    heroTitle: 'फक्त फॉरवर्ड करू नका. पडताळणी करा.',
    heroSubtitle: 'व्हायरल मेसेज, बातम्या, फोटो आणि संशयास्पद दावे आपल्या भाषेत एआय स्पष्टीकरणासह तपासा.',
    verifyClaimBtn: 'दावा पडताळा',
    exploreDemoBtn: 'डेमो पहा',
    features: {
      multilingual: 'बहुभाषिक पडताळणी',
      multilingualDesc: 'प्रादेशिक बारकावे समजून 8 भारतीय भाषांमध्ये सुलभ स्पष्टीकरण तयार करते.',
      explainable: 'स्पष्टीकरणात्मक निकाल',
      explainableDesc: 'केवळ खरे/खोटे न सांगता संदर्भ, पुराव्यांच्या मर्यादा आणि पुढील पावले स्पष्ट करते.',
      multiFormat: 'विविध फॉरमॅट समर्थन',
      multiFormatDesc: 'मजकूर मेसेज, स्क्रीनशॉट, परिपत्रके आणि वेब लिंक्स सहज तपासा.',
    },
    stats: {
      claimsChecked: 'तपासलेले दावे',
      misleadingClaims: 'दिशाभूल करणारे दावे',
      languagesSupported: 'समर्थित भाषा',
      caption: 'हॅकाथॉन सादरीकरणासाठी प्रात्यक्षिक आकडेवारी',
    },
    trySample: 'नमुना दावा तपासा',
    trySampleDesc: 'खालीलपैकी कोणत्याही व्हायरल दाव्यावर क्लिक करून त्वरित पडताळणी करा:',
    nav: {
      overview: 'आढावा',
      verify: 'दावा पडताळा',
      recent: 'अलीकडील तपासणी',
      howItWorks: 'हे कसे कार्य करते',
      newVerification: 'नवीन पडताळणी',
    },
    input: {
      title: 'पडताळणीसाठी सामग्री प्रविष्ट करा',
      subtitle: 'कोणताही संशयास्पद फॉरवर्ड मेसेज, बातमी किंवा दावा येथे पेस्ट करा.',
      placeholder: 'व्हाट्सअ‍ॅप फॉरवर्ड, बातमीचे शीर्षक किंवा पडताळायचा दावा पेस्ट करा...',
      contentType: 'सामग्रीचा प्रकार',
      types: {
        text: 'मजकूर किंवा मेसेज',
        image: 'चित्र (इमेज)',
        document: 'कागदपत्र (डॉक्युमेंट)',
        link: 'वेब लिंक',
      },
      selectLanguage: 'विश्लेषण भाषा',
      analyzeBtn: 'दाव्याचे विश्लेषण करा',
      resetBtn: 'रीसेट करा',
      prototypeNotice: 'प्रोटोटाइप सूचना: ही पडताळणी प्रात्यक्षिक नियमांवर आधारित नक्कल (सिम्युलेशन) आहे.',
    },
    results: {
      badgeTitle: 'सिम्युलेटेड डेमो निकाल',
      disclaimer: 'सिम्युलेटेड डेमो निकाल — स्वतंत्रपणे सत्यापित नाही.',
      confidenceLabel: 'डेमो विश्वास निर्देशांक',
      confidenceDisclaimer: 'प्रात्यक्षिक निर्देशक, थेट मॉडेल स्कोअर नाही.',
      whyHeading: 'हा निकाल का आला?',
      whatToDoHeading: 'तुम्ही काय करावे?',
      sourcesHeading: 'तपासणीसाठी शिफारस केलेले अधिकृत स्रोत',
      actions: {
        checkAnother: 'दुसरा दावा तपासा',
        copySummary: 'सारांश कॉपी करा',
        saveRecent: 'अलीकडील तपासणीत जतन करा',
        saved: 'जतन केले',
      },
    },
  },
};

export const SAMPLE_CLAIMS = [
  {
    id: 'sample-1',
    category: 'Government & Schemes',
    tag: 'Govt Scheme',
    claim: 'A new government scheme will give every citizen ₹50,000. Apply today!',
    claimHi: 'एक नई सरकारी योजना के तहत हर नागरिक को ₹50,000 मिलेंगे। आज ही आवेदन करें!',
    claimMr: 'नवीन सरकारी योजनेअंतर्गत प्रत्येक नागरिकाला ₹५०,००० मिळणार. आजच अर्ज करा!',
    verdict: 'Likely False',
    verdictHi: 'गलत होने की संभावना',
    verdictMr: 'खोटे असण्याची दाट शक्यता',
    statusType: 'false', // false, true, misleading, unverified, outdated
    confidence: 94,
    headline: 'Fabricated universal cash transfer scheme with phishing indicators',
    headlineHi: 'फ़र्ज़ी यूनिवर्सल नकद अनुदान योजना और फ़िशिंग के संकेत',
    headlineMr: 'बनावट थेट अनुदान योजना आणि सायबर फसवणुकीचे संकेत',
    summary:
      'No official government gazette, union ministry order, or public notification provides for an unconditional ₹50,000 direct cash disbursement to all citizens. The circulated forward uses typical urgent clickbait wording commonly linked to credential theft.',
    summaryHi:
      'किसी भी आधिकारिक सरकारी राजपत्र, केंद्रीय मंत्रालय के आदेश या अधिसूचना में सभी नागरिकों को बिना शर्त ₹50,000 देने का प्रावधान नहीं है। यह संदेश फ़िशिंग और व्यक्तिगत जानकारी चुराने वाले पैटर्न से मेल खाता है।',
    summaryMr:
      'कोणत्याही अधिकृत शासकीय राजपत्रात किंवा मंत्रालयाच्या आदेशात सर्व नागरिकांना सरसकट ₹५०,००० देण्याची कोणतीही तरतूद नाही. हा मेसेज वैयक्तिक माहिती गोळा करणाऱ्या बनावट लिंकचा संशयास्पद नमुना आहे.',
    why: [
      {
        title: 'Context and Plausibility',
        titleHi: 'संदर्भ आणि संभाव्यता',
        text: 'Universal fiscal transfers of this scale require Parliamentary budgetary approval and official gazette notifications. No such scheme has been notified by the Ministry of Finance.',
        textHi: 'इस पैमाने के सार्वजनिक अनुदान हेतु केंद्रीय बजट व वित्त मंत्रालय की आधिकारिक अधिसूचना आवश्यक होती है, जिसका कोई प्रमाण उपलब्ध नहीं है।',
      },
      {
        title: 'Evidence Limitations',
        titleHi: 'साक्ष्य की सीमाएं',
        text: 'The claim references an unofficial third-party registration domain instead of legitimate government portals ending in .gov.in or .nic.in.',
        textHi: 'दावे में उल्लिखित लिंक किसी अधिकृत .gov.in या .nic.in पोर्टल का नहीं है, बल्कि अनौपचारिक संदिग्ध वेबसाइट का है।',
      },
      {
        title: 'What the User Should Verify',
        titleHi: 'उपयोगकर्ता को क्या सत्यापित करना चाहिए',
        text: 'Always check announcements directly on the National Portal of India or verified Press Information Bureau (PIB) channels before submitting personal credentials.',
        textHi: 'व्यक्तिगत जानकारी या बैंक विवरण दर्ज करने से पहले राष्ट्रीय पोर्टल (india.gov.in) या पीआईबी फैक्ट चेक पर पुष्टि करें।',
      },
    ],
    whatToDo: [
      'Do NOT click unverified links or enter your Aadhaar, PAN, or bank account details.',
      'Check the official PIB Fact Check portal or Twitter handle (@PIBFactCheck).',
      'Alert the sender or group admin that this scheme is fictitious and potentially malicious.',
      'Report fraudulent links to the National Cyber Crime Reporting Portal (cybercrime.gov.in).',
    ],
    whatToDoHi: [
      'अपुष्ट लिंक पर क्लिक न करें और अपना आधार, पैन या बैंक विवरण कभी दर्ज न करें।',
      'पीआईबी फैक्ट चेक पोर्टल या ट्विटर हैंडल (@PIBFactCheck) पर जाकर पुष्टि करें।',
      'संदेश भेजने वाले को सूचित करें कि यह योजना फर्जी और संभावित रूप से हानिकारक है।',
      'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल (cybercrime.gov.in) पर रिपोर्ट करें।',
    ],
    recommendedSources: [
      {
        name: 'Press Information Bureau (PIB) Fact Check',
        url: 'https://pib.gov.in',
        domain: 'pib.gov.in',
        description: 'Official Government of India fact-checking unit',
      },
      {
        name: 'National Portal of India (Direct Benefit Schemes)',
        url: 'https://india.gov.in',
        domain: 'india.gov.in',
        description: 'Single-window access to all genuine central welfare schemes',
      },
      {
        name: 'National Cyber Crime Reporting Portal',
        url: 'https://cybercrime.gov.in',
        domain: 'cybercrime.gov.in',
        description: 'Report financial phishing messages and fake domains',
      },
    ],
  },
  {
    id: 'sample-2',
    category: 'Health & Medicine',
    tag: 'Health Myth',
    claim: 'Drinking warm water cures every viral infection.',
    claimHi: 'गर्म पानी पीने से हर तरह का वायरल संक्रमण ठीक हो जाता है।',
    claimMr: 'गरम पाणी पिल्याने सर्व प्रकारचे व्हायरल इन्फेक्शन पूर्णपणे बरे होते.',
    verdict: 'Likely False',
    verdictHi: 'गलत होने की संभावना',
    verdictMr: 'खोटे असण्याची दाट शक्यता',
    statusType: 'false',
    confidence: 91,
    headline: 'Hydration supports symptomatic relief, but is not an antiviral cure',
    headlineHi: 'पानी पीने से आराम मिल सकता है, परंतु यह कोई एंटीवायरल इलाज नहीं है',
    headlineMr: 'पाणी पिल्याने घशाला आराम मिळतो, परंतु हा कोणताही वैद्यकीय उपचार नाही',
    summary:
      'While drinking warm water keeps the body hydrated and may soothe an irritated throat during respiratory illnesses, medical evidence confirms it cannot eliminate viruses from the respiratory tract or bloodstream.',
    summaryHi:
      'यद्यपि गर्म पानी पीने से शरीर हाइड्रेटेड रहता है और गले की खराश में राहत मिलती है, परंतु चिकित्सा विज्ञान पुष्टि करता है कि गर्म पानी वायरस को नष्ट नहीं कर सकता।',
    summaryMr:
      'गरम पाण्याने घशाला काही प्रमाणात आराम मिळतो आणि शरीरातील पाण्याचे प्रमाण टिकून राहते, मात्र रक्तातील किंवा श्वसनमार्गातील विषाणू नष्ट करण्याची क्षमता यात नसते.',
    why: [
      {
        title: 'Context and Plausibility',
        titleHi: 'संदर्भ आणि संभाव्यता',
        text: 'Viruses replicate intracellularly inside human tissue. Ingesting warm liquids does not elevate internal cellular temperatures sufficiently to kill viral strains without causing cellular damage.',
        textHi: 'वायरस कोशिकाओं के भीतर बढ़ते हैं। सामान्य गर्म पानी कोशिकाओं के आंतरिक तापमान को वायरस नष्ट करने जितना नहीं बढ़ा सकता।',
      },
      {
        title: 'Evidence Limitations',
        titleHi: 'साक्ष्य की सीमाएं',
        text: 'No clinical trials or peer-reviewed medical publications support warm water as an active cure for viral influenza, COVID-19, or seasonal viral infections.',
        textHi: 'डब्ल्यूएचओ या आईसीएमआर द्वारा किसी भी वायरल संक्रमण के स्थायी उपचार के रूप में गर्म पानी को प्रमाणित नहीं किया गया है।',
      },
      {
        title: 'What the User Should Verify',
        titleHi: 'उपयोगकर्ता को क्या सत्यापित करना चाहिए',
        text: 'Consult accredited medical guidelines from the Ministry of Health or World Health Organization rather than relying on viral wellness forwards.',
        textHi: 'वायरल घरेलू नुस्खों पर निर्भर रहने के बजाय स्वास्थ्य मंत्रालय या विश्व स्वास्थ्य संगठन के दिशा-निर्देश देखें।',
      },
    ],
    whatToDo: [
      'Continue drinking water for hydration, but do not consider it a substitute for medical consultation.',
      'Consult a certified medical doctor if fever, cough, or breathing difficulties persist.',
      'Avoid delaying clinical diagnosis based on social media home-remedy advice.',
    ],
    whatToDoHi: [
      'शरीर में पानी की कमी न होने दें, पर इसे डॉक्टरी सलाह का विकल्प न समझें।',
      'यदि बुखार, खांसी या सांस लेने में परेशानी बनी रहे तो तुरंत डॉक्टर से संपर्क करें।',
      'सोशल मीडिया के असत्यापित नुस्खों के आधार पर इलाज में देरी न करें।',
    ],
    recommendedSources: [
      {
        name: 'World Health Organization (WHO) Mythbusters',
        url: 'https://www.who.int',
        domain: 'who.int',
        description: 'Verified public advisories against infectious disease myths',
      },
      {
        name: 'Ministry of Health & Family Welfare (MoHFW)',
        url: 'https://www.mohfw.gov.in',
        domain: 'mohfw.gov.in',
        description: 'Official clinical guidelines and public health advisories',
      },
      {
        name: 'Indian Council of Medical Research (ICMR)',
        url: 'https://www.icmr.gov.in',
        domain: 'icmr.gov.in',
        description: 'Apex body for formulation of biomedical research',
      },
    ],
  },
  {
    id: 'sample-3',
    category: 'Banking & Public Notice',
    tag: 'Financial Rumor',
    claim: 'A viral message claims that banks will remain closed for the next seven days.',
    claimHi: 'एक वायरल संदेश में दावा किया गया है कि बैंक अगले सात दिनों तक लगातार बंद रहेंगे।',
    claimMr: 'एका व्हायरल मेसेजमध्ये दावा केला आहे की पुढील सलग सात दिवस बँका बंद राहतील.',
    verdict: 'Unverified',
    verdictHi: 'अपुष्ट (Unverified)',
    verdictMr: 'अपुष्ट (तपासणी आवश्यक)',
    statusType: 'unverified',
    confidence: 76,
    headline: 'Bank holidays are localized and vary by state and calendar schedule',
    headlineHi: 'बैंकों की छुट्टियां राज्यवार और स्थानीय कैलेंडर के अनुसार तय होती हैं',
    headlineMr: 'बँकांच्या सुट्ट्या राज्यनिहाय व स्थानिक दिनदर्शिकेनुसार ठरतात',
    summary:
      'Commercial bank holidays in India are notified under the Negotiable Instruments Act and differ substantially across states. A blanket rumor of continuous nationwide 7-day closure lacks contextual details and specific dates.',
    summaryHi:
      'भारत में बैंकों की छुट्टियां नेगोशिएबल इंस्ट्रूमेंट्स एक्ट के तहत राज्यवार अलग-अलग घोषित होती हैं। पूरे देश में लगातार 7 दिन बैंक बंद रहने का सामान्य दावा अपुष्ट और भ्रामक है।',
    summaryMr:
      'भारतात बँकांच्या सुट्ट्या प्रत्येक राज्यात वेगवेगळ्या असतात. देशभरात सलग ७ दिवस बँका बंद राहण्याचा असा सरसकट दावा संशयास्पद आणि अपूर्ण आहे.',
    why: [
      {
        title: 'Context and Plausibility',
        titleHi: 'संदर्भ आणि संभाव्यता',
        text: 'The Reserve Bank of India (RBI) designates holidays state-by-state. Even when branches are closed, digital channels (UPI, IMPS, ATMs, Net Banking) operate uninterrupted.',
        textHi: 'आरबीआई द्वारा राज्यवार छुट्टियां तय की जाती हैं। शाखाएं बंद होने पर भी यूपीआई, नेट बैंकिंग व एटीएम सामान्य रूप से काम करते हैं।',
      },
      {
        title: 'Evidence Limitations',
        titleHi: 'साक्ष्य की सीमाएं',
        text: 'The forwarded message fails to state specific dates, regions, or bank names, which is a classic indicator of recurring panic-inducing forwards.',
        textHi: 'संदेश में तारीखों या विशिष्ट राज्यों का उल्लेख नहीं है, जो अक्सर घबराहट फैलाने वाले पुराने संदेशों में देखा जाता है।',
      },
      {
        title: 'What the User Should Verify',
        titleHi: 'उपयोगकर्ता को क्या सत्यापित करना चाहिए',
        text: 'Cross-check the official RBI state-wise holiday calendar before assuming closures.',
        textHi: 'शाखा जाने से पहले भारतीय रिजर्व बैंक के आधिकारिक वार्षिक कैलेंडर की जांच करें।',
      },
    ],
    whatToDo: [
      'Check the RBI official holiday list specific to your state and circle.',
      'Use digital banking (UPI, mobile banking apps, ATMs) which remain 24/7 operational.',
      'Refrain from panic-sharing or forwarding without stating specific dates and locations.',
    ],
    whatToDoHi: [
      'अपने राज्य के लिए आरबीआई की आधिकारिक अवकाश सूची देखें।',
      'डिजिटल बैंकिंग (यूपीआई, एटीएम, नेट बैंकिंग) का उपयोग करें जो हमेशा चालू रहते हैं।',
      'तारीखों और स्थान की पुष्टि के बिना ऐसे संदेश आगे न भेजें।',
    ],
    recommendedSources: [
      {
        name: 'Reserve Bank of India (Holiday Calendar)',
        url: 'https://www.rbi.org.in',
        domain: 'rbi.org.in',
        description: 'Official monthly and state-specific bank holiday notifications',
      },
      {
        name: 'Indian Banks’ Association (IBA)',
        url: 'https://www.iba.org.in',
        domain: 'iba.org.in',
        description: 'Advisories regarding banking industry operations',
      },
      {
        name: 'Press Information Bureau (PIB) Fact Check',
        url: 'https://pib.gov.in',
        domain: 'pib.gov.in',
        description: 'Debunking recurring banking rumors and misinformation',
      },
    ],
  },
];

export const INITIAL_RECENT_CHECKS = [
  {
    id: 'rc-1',
    claim: 'A new government scheme will give every citizen ₹50,000. Apply today!',
    verdict: 'Likely False',
    statusType: 'false',
    confidence: 94,
    contentType: 'Text',
    language: 'English',
    timestamp: '2 hours ago',
    date: 'Today, 4:15 PM',
    sampleId: 'sample-1',
  },
  {
    id: 'rc-2',
    claim: 'Drinking warm water cures every viral infection.',
    verdict: 'Likely False',
    statusType: 'false',
    confidence: 91,
    contentType: 'Text',
    language: 'Hindi',
    timestamp: '5 hours ago',
    date: 'Today, 1:20 PM',
    sampleId: 'sample-2',
  },
  {
    id: 'rc-3',
    claim: 'A viral message claims that banks will remain closed for the next seven days.',
    verdict: 'Unverified',
    statusType: 'unverified',
    confidence: 76,
    contentType: 'Text',
    language: 'English',
    timestamp: 'Yesterday',
    date: 'Yesterday, 6:45 PM',
    sampleId: 'sample-3',
  },
  {
    id: 'rc-4',
    claim: 'Income Tax Department officially extends ITR filing deadline by 15 days due to portal maintenance.',
    verdict: 'Likely True',
    statusType: 'true',
    confidence: 89,
    contentType: 'Document',
    language: 'English',
    timestamp: '2 days ago',
    date: 'Oct 7, 2026',
    customSummary: 'Matches authentic CBDT public circular and e-filing portal maintenance notice.',
  },
  {
    id: 'rc-5',
    claim: 'Traffic police imposing ₹25,000 fine for driving two-wheelers while wearing slippers or flip-flops.',
    verdict: 'Partially True / Misleading',
    statusType: 'misleading',
    confidence: 82,
    contentType: 'Image',
    language: 'Marathi',
    timestamp: '3 days ago',
    date: 'Oct 6, 2026',
    customSummary: 'Motor Vehicles Act discourages footwear without grip, but ₹25,000 figure is exaggerated and out of context.',
  },
];

// Helper to generate simulated results for custom user submissions
export function generateSimulatedResult(inputContent, contentType, selectedLanguage, attachedFile = null) {
  // If matches one of our samples
  const lower = (inputContent || '').toLowerCase();
  if (lower.includes('50,000') || lower.includes('government scheme') || lower.includes('yojana')) {
    return { ...SAMPLE_CLAIMS[0], isCustom: false };
  }
  if (lower.includes('warm water') || lower.includes('viral') || lower.includes('cure') || lower.includes('infection')) {
    return { ...SAMPLE_CLAIMS[1], isCustom: false };
  }
  if (lower.includes('bank') || lower.includes('closed') || lower.includes('seven days') || lower.includes('holiday')) {
    return { ...SAMPLE_CLAIMS[2], isCustom: false };
  }

  // Realistic simulated outcome for custom queries
  let displayClaim = inputContent || '';
  if (contentType === 'image' && attachedFile) {
    displayClaim = `[Image Analysis] ${attachedFile.name} — "${inputContent || 'Forwarded image banner or screenshot'}"`;
  } else if (contentType === 'document' && attachedFile) {
    displayClaim = `[Document Analysis] ${attachedFile.name} — "${inputContent || 'Forwarded PDF circular / document'}"`;
  } else if (contentType === 'link') {
    displayClaim = `[Link Verification] ${inputContent}`;
  }

  return {
    id: `custom-${Date.now()}`,
    isCustom: true,
    category: 'Community Submitted Claim',
    tag: contentType === 'image' ? 'Image Analysis' : contentType === 'link' ? 'URL Verification' : 'Text Forward',
    claim: displayClaim,
    verdict: 'Partially True / Misleading',
    statusType: 'misleading',
    confidence: 83,
    headline: 'Simulated heuristic analysis identified ambiguous claims requiring primary source verification',
    summary:
      'This claim exhibits patterns commonly associated with partial information or exaggerated headlines. In this hackathon prototype, verification is simulated using predefined semantic rubrics.',
    why: [
      {
        title: 'Context and Plausibility',
        text: 'The submitted statement contains claims that could not be matched against verified government gazettes or accredited news wires in our local index.',
      },
      {
        title: 'Evidence Limitations',
        text: 'This prototype does not execute live external web scraping or neural AI APIs. Analysis reflects a simulated heuristic pipeline designed to demonstrate user experience.',
      },
      {
        title: 'What the User Should Verify',
        text: 'Cross-reference this assertion with established news desks, official departmental portals, and recognized fact-checking bodies before sharing.',
      },
    ],
    whatToDo: [
      'Pause before forwarding this message to WhatsApp groups or social feeds.',
      'Search the primary keywords on official government or accredited journalistic portals.',
      'Ask the sender for their original primary source or published citation.',
    ],
    recommendedSources: [
      {
        name: 'Press Information Bureau (PIB) Fact Check',
        url: 'https://pib.gov.in',
        domain: 'pib.gov.in',
        description: 'Authorized nodal agency for Government of India fact verification',
      },
      {
        name: 'National Portal of India',
        url: 'https://india.gov.in',
        domain: 'india.gov.in',
        description: 'Single-entry portal for authentic information on services and schemes',
      },
      {
        name: 'Cyber Crime Portal',
        url: 'https://cybercrime.gov.in',
        domain: 'cybercrime.gov.in',
        description: 'Official Indian citizen cyber safety and fraud reporting portal',
      },
    ],
  };
}

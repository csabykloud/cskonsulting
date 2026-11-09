// CSKonsulting - Internationalization & Interactivity Script

const translations = {
  hu: {
    topbar_exp: '<strong class="text-white">25+ Év Tapasztalat Összesen</strong> (10+ év a banki rendszerben)',
    topbar_subtitle: "Multinacionális Vállalatok & KKV/SRL • Stratégiai Megoldások",
    brand_tagline: "Management & Stratégiai Tanácsadás",
    nav_about: "Rólunk",
    nav_meaning: "A CSK Koncepció",
    nav_services: "Szolgáltatások",
    nav_experience: "Tapasztalat",
    nav_cta: "Konzultáció Kérése",

    hero_pill: "Prémium Vezetési & Pénzügyi Tanácsadás",
    hero_title_part1: "Világos döntések.",
    hero_title_part2: "Biztos stratégia.",
    hero_title_part3: "Fenntartható növekedés.",
    hero_description: "A vállalati kihívásokat gyakorlati, azonnal alkalmazható megoldásokká formáljuk. Több mint 25 év összesített szakmai tapasztalattal – amiből 10+ év a banki és pénzügyi rendszerben telt –, valamint 8+ év felsővezetői (multi & SRL) és 5+ év tanácsadói rutinnal segítjük a cégeket a menedzsment, az értékesítés és a pénzügyek optimalizálásában.",
    hero_btn_consult: "Időpont Egyeztetés",
    hero_btn_services: "Szolgáltatásaink",
    hero_feat1: "1-az-1-ben Személyre Szabott Tanácsadás",
    hero_feat2: "Eredmény- és Megtérülés-Orientált",
    hero_feat3: "Teljes Diszkréció és Titoktartás",

    hero_card_badge: "25+ Év Tapasztalat",
    hero_card_sub: "Stratégiai Képlet",
    hero_card_title: "Miért a CSKonsulting?",
    csk_c_title: "Companys / Vállalatok",
    csk_c_desc: "Mérethez és piaci környezethez igazított működési rendszerek.",
    csk_s_title: "Special / Stratégia",
    csk_s_desc: "Egyedi, sablonmentes válaszok a kritikus üzleti kihívásokra.",
    csk_k_title: "Konsulting / Tudás",
    csk_k_desc: "25+ év üzleti tapasztalat, 10+ év banki és felsővezetői know-how közvetlen átadása.",

    stat_total: "Év Összesen",
    stat_fin: "Év Bank & Pénzügy",
    stat_mgmt: "Év Felsővezetés (Multi & SRL)",
    stat_consult: "Év Tanácsadás",

    about_tag: "Vezetői Útmutató",
    about_title: "Mi az a Menedzsment Tanácsadás és mikor válik nélkülözhetetlenné?",
    about_p1: "A menedzsment tanácsadás nem elvont elméletek halmaza, hanem egy gyakorlatias, közvetlen együttműködés a döntéshozatal, a tőkeszerkezet és az emberi erőforrások optimalizálására.",
    about_p2: "Amikor egy vállalkozás növekszik vagy a piaci környezet bizonytalanná válik, a cégvezetőket gyakran elnyelik a mindennapi operatív tűzoltások. Egy tapasztalt vezetési tanácsadó független külső rálátást, fegyelmezett pénzügyi kontrollt és kipróbált megoldásokat hoz a növekedési gátak lebontásához.",
    about_link: "Nézze meg, hogyan segíthetünk",
    about_b1_title: "Objektív Külső Rálátás",
    about_b1_desc: "Semleges, torzításmentes diagnózis a belső rutin által elfedett szűk keresztmetszetek és veszteségek feltárására.",
    about_b2_title: "Pénzügyi Fegyelem",
    about_b2_desc: "Minden döntés megtérülés, likviditás (cash-flow) és valós kockázatkezelés alapján mérve.",
    about_b3_title: "Skálázhatóság & Értékesítés",
    about_b3_desc: "Árbevétel-növekedés a sales folyamatok profi áramvonalasításával és a csapat pontos célhoz igazításával.",
    about_b4_title: "Döntésbiztonság",
    about_b4_desc: "Megbízható második szakvélemény stratégiai beruházások, banki hitelek és átszervezések előtt.",

    concept_tag: "Brand Filozófia & Szójáték",
    concept_title: "Mit jelent a CSK mozaikszó?",
    concept_desc: "A CSKonsulting nem csupán egy márkanév, hanem a modern vezetési tanácsadás hármas pillérét testesíti meg:",
    card_c_text: "Minden cég egyedi ritmusban fejlődik. Legyen szó növekedési fázisban lévő KKV-ról (SRL) vagy hatékonyságot kereső multinacionális leányvállalatról, a menedzsment eszközöket a cég pontos valóságához szabjuk.",
    card_s_text: "Nem tankönyvi sablonokat másolunk. Minden megbízás dedikált stratégiai fókuszt kap: a kíméletlenül őszinte pénzügyi diagnózistól a piackutatásig és az értékesítési folyamatok átszervezéséig.",
    card_k_text: "Valódi, terepen megszerzett tudás. A tanácsadás nálunk nem merül ki prezentációkban: aktív jelenlét a tárgyalóasztalnál, döntéstámogatás a tulajdonosnak és a menedzsmentnek.",

    services_tag: "Szakértelmi Területek",
    services_title: "Menedzsment Tanácsadási Szolgáltatások",
    services_desc: "Átfogó megoldásrendszer a modern cégvezetés minden kulcsterületére: pénzügy, szervezet, értékesítés és piac.",
    
    srv1_title: "Stratégiai Menedzsment & Újraszervezés",
    srv1_desc: "A szervezeti struktúra felmérése, világos döntési szintek kialakítása, felelősségi körök és működési folyamatok áramvonalasítása a költséghatékonyságért.",
    srv1_p1: "Belső folyamatok racionalizálása",
    srv1_p2: "KPI és teljesítménymérési rendszerek",
    srv1_p3: "Multi és KKV (SRL) átmenetek támogatása",

    srv2_title: "Pénzügyi & Banki Tanácsadás",
    srv2_desc: "Használja ki a 10+ éves direkt banki és pénzügyi rendszerbeli tapasztalatot! Likviditáskezelés (cash-flow), hitelkérelmek professzionális előkészítése, banki tárgyalások és pénzügyi stabilitás.",
    srv2_p1: "Banki kapcsolatok & hitelfelvételi stratégia",
    srv2_p2: "Cash-flow menedzsment és költségkontroll",
    srv2_p3: "Pénzügyi tervezés és előrejelzések",

    srv3_title: "Értékesítés & Kereskedelmi Stratégia",
    srv3_desc: "Az értékesítési csatornák és a sales csapat átvilágítása. Motivációs és jutalékos rendszerek, ügyfélszerzési technikák és árbevétel-növelő stratégiák kidolgozása.",
    srv3_p1: "Értékesítési hatékonyság növelése",
    srv3_p2: "Célkitűzési és ösztönző rendszerek",
    srv3_p3: "Új piacokra lépési mechanizmusok",

    srv4_title: "Piackutatás & Versenytárselemzés",
    srv4_desc: "A piaci környezet, versenytársak és fogyasztói magatartás alapos vizsgálata. Jövedelmező piaci rések feltárása és kockázatelemzés nagyobb beruházások előtt.",
    srv4_p1: "Versenytársi benchmarking",
    srv4_p2: "Megvalósíthatósági és piaci tanulmányok",
    srv4_p3: "Árképzés és termékpozicionálás",

    srv5_title: "Vezetői Konzultáció & Mentoring",
    srv5_desc: "Megbízható stratégiai partner cégtulajdonosok, ügyvezetők és döntéshozók számára. Objektív külső látásmód kritikus üzleti döntések és válsághelyzetek esetén.",
    srv5_p1: "Ügyvezetői & tulajdonosi támogatás",
    srv5_p2: "Cégátadás / generációváltás előkészítése",
    srv5_p3: "Kríziskezelés és feszültségfeloldás",

    srv6_title: "Menedzsment Audit & Hatékonyság",
    srv6_desc: "360 fokos átvilágítás a rejtett veszteségek feltárására. Szűk keresztmetszetek megszüntetése és gördülékeny, nyereséges működési modell megvalósítása.",
    srv6_p1: "Átfogó diagnosztikai audit",
    srv6_p2: "Operatív akadályok eliminálása",
    srv6_p3: "Konkrét akcióterv mérhető határidőkkel",

    exp_tag: "Több Mint Negyedszázad a Gyakorlatban",
    exp_title: "Szilárd karrier a pénzügyi stabilitás és vezetési kiválóság szolgálatában",
    exp_p1: "Az üzleti életben a valós piaci tapasztalat különbözteti meg az üres elméleteket a kézzelfogható eredményektől. A CSKonsulting alapítója 25+ év összesített gazdasági tapasztalattal rendelkezik, amelyből több mint 10 év a banki és pénzügyi szektorban telt, amit 8+ év felsővezetés és 5+ év intenzív cégtanácsadás egészít ki.",
    timeline_total_title: "Összesített Szakmai & Üzleti Tapasztalat",
    timeline_total_desc: "Több mint 25 év aktív piaci és üzleti tapasztalat, átfogó rálátással a gazdasági környezetre és a vállalati működésre.",
    timeline_1_title: "Banki és Pénzügyi Rendszer",
    timeline_1_desc: "10+ év közvetlen tapasztalat a banki és pénzügyi rendszerben, különböző pozíciókban (hitelezés, kockázatelemzés, döntéshozatal és pénzügyi menedzsment). Beható ismeret arról, hogyan gondolkodnak és döntenek a bankok.",
    timeline_2_title: "Felsővezetés Multinacionális Cégnél és SRL-nél",
    timeline_2_desc: "Több mint 8 év felelős menedzsment beosztásban. Nagyobb csapatok irányítása, stratégiai költségvetések kezelése, multinacionális struktúrák sikeres beültetése a dinamikus KKV/SRL világba.",
    timeline_3_title: "Gyakorlati Menedzsment Tanácsadás",
    timeline_3_desc: "5+ év tanácsadói tapasztalat különböző cégeknél, a menedzsment, pénzügy, eladás és piackutatás teljes területén (minden, ami a cégvezetés és üzletfejlesztés alá tartozik).",

    approach_title: "Munkafilozófiánk",
    approach_desc: "Nem hagyunk magukra a fiókban porosodó tervekkel. Egy asztalhoz ülünk a vezetéssel és a csapattal, amíg az új folyamatok zökkenőmentesen nem hozzák az elvárt számokat.",
    prin_1_t: "Gyakorlatias megközelítés:",
    prin_1_d: "Azonnal alkalmazható lépések felesleges szakzsargon nélkül.",
    prin_2_t: "Szigorú pénzügyi szemlélet:",
    prin_2_d: "Minden döntés a megtérülés és a cash-flow tükrében méretik meg.",
    prin_3_t: "Kétnyelvű és regionális rálátás:",
    prin_3_d: "Akadálytalan tanácsadás magyar és román nyelven, a hazai gazdasági környezet beható ismeretével.",

    process_tag: "Hogyan dolgozunk",
    process_title: "Együttműködésünk 4 Lépése",
    process_desc: "Átlátható struktúra, meglepetések nélkül, már a kezdetektől rögzített mérföldkövekkel.",
    step1_title: "Kezdeti Diagnózis",
    step1_desc: "Részletes feltáró beszélgetés és a működési, pénzügyi mutatók elsődleges auditja.",
    step2_title: "Stratégiai Terv",
    step2_desc: "Kézzelfogható, hatás és költség szerint rangsorolt cselekvési terv kidolgozása.",
    step3_title: "Aktív Megvalósítás",
    step3_desc: "Közös végrehajtás: banki tárgyalások, belső folyamatok igazítása, kulcsemberek képzése.",
    step4_title: "KPI Monitoring",
    step4_desc: "Eredmények mérése, mutatószámok finomhangolása és az elért szint fenntartása.",

    contact_tag: "Lépjen Kapcsolatba Velünk",
    contact_title: "Beszéljünk az Ön cégének lehetőségeiről!",
    contact_desc: "Minden sikeres együttműködés egy diszkrét feltáró beszélgetéssel kezdődik. Vegye fel velünk a kapcsolatot űrlapunkon, e-mailben vagy telefonon.",
    contact_email_label: "Kapcsolati E-mail",
    contact_phone_label: "Telefon / WhatsApp",
    contact_loc_label: "Elérhetőség",
    contact_loc_val: "Románia (Személyes & Online Tanácsadás)",
    contact_lang_note: "Konzultáció elérhető magyar és román nyelven (Disponibil în limbile Maghiară și Română).",

    form_title: "Kérjen Konzultációt",
    form_subtitle: "Töltse ki az alábbi űrlapot, és 24 órán belül felvesszük Önnel a kapcsolatot.",
    form_name: "Teljes Név *",
    form_company: "Cégnév (SRL / Csoport) *",
    form_email: "E-mail Cím *",
    form_phone: "Telefonszám *",
    form_service: "Fő Érdeklődési Terület",
    form_message: "A jelenlegi helyzet / kihívás rövid leírása",
    form_submit: "Konzultáció Igénylése",
    form_success_msg: "Köszönjük megkeresését! Az üzenetet rögzítettük, hamarosan felvesszük Önnel a kapcsolatot.",

    opt_1: "Menedzsment Tanácsadás & Szervezetfejlesztés",
    opt_2: "Pénzügyi & Banki Tárgyalási Tanácsadás",
    opt_3: "Értékesítési Rendszerek & Sales Stratégia",
    opt_4: "Piackutatás & Versenytárselemzés",
    opt_5: "Ügyvezetői Konzultáció / KKV Mentoring",
    opt_6: "Egyéb kérdés / Komplex csomag",
    footer_rights: "Vezetési Tanácsadás • Multinacionális Cégek & SRL-k"
  },
  ro: {
    topbar_exp: '<strong class="text-white">25+ Ani Experiență Totală</strong> (10+ ani în sistemul bancar)',
    topbar_subtitle: "Multinaționale & SRL • Soluții Strategice",
    brand_tagline: "Management & Strategic Advisory",
    nav_about: "Despre Noi",
    nav_meaning: "Conceptul CSK",
    nav_services: "Servicii",
    nav_experience: "Experiență",
    nav_cta: "Solicită Consultanță",

    hero_pill: "Consultanță de Management Premium",
    hero_title_part1: "Decizii clare.",
    hero_title_part2: "Strategie sigură.",
    hero_title_part3: "Creștere sustenabilă.",
    hero_description: "Transformăm complexitatea afacerii tale în soluții pragmatice. Cu peste 25 de ani de experiență profesională cumulată – dintre care 10+ ani în sistemul bancar și financiar –, alături de 8+ ani în management executiv (multinaționale și SRL) și 5+ ani de consultanță aplicată, sprijinim companiile să își optimizeze conducerea, vânzările și structura financiară.",
    hero_btn_consult: "Programează o Discuție",
    hero_btn_services: "Află Ce Oferim",
    hero_feat1: "Consultanță 1-la-1 Personalizată",
    hero_feat2: "Orientare pe Rezultate & ROI",
    hero_feat3: "Confidențialitate Totală",

    hero_card_badge: "25+ Ani Experiență",
    hero_card_sub: "Formulă Strategică",
    hero_card_title: "De ce CSKonsulting?",
    csk_c_title: "Companys / Corporate",
    csk_c_desc: "Soluții scalabile adaptate de la SRL-uri la multinaționale.",
    csk_s_title: "Special / Strategic",
    csk_s_desc: "Abordare unică, personalizată fiecărei industrii și context.",
    csk_k_title: "Konsulting / Knowledge",
    csk_k_desc: "25+ ani experiență de afaceri, 10+ ani know-how bancar și executiv aplicat direct.",

    stat_total: "Ani Experiență Totală",
    stat_fin: "Ani Sistem Bancar",
    stat_mgmt: "Ani Top Management",
    stat_consult: "Ani Consultanță Afaceri",

    about_tag: "Ghidul Conducerii",
    about_title: "Ce este Consultanța de Management și când devine indispensabilă?",
    about_p1: "Consultanța de management nu este o colecție de teorii academice, ci un parteneriat pragmatic axat pe optimizarea deciziilor, a capitalului și a resurselor umane dintr-o companie.",
    about_p2: "Pe măsură ce o afacere crește sau când piața devine imprevizibilă, conducătorii de firme sunt adesea copleșiți de rutina operațională. Un consultant de management aduce o perspectivă externă obiectivă, instrumente financiare robuste și soluții verificate pentru a transforma blocajele în motoare de creștere.",
    about_link: "Explorează cum te putem sprijini",
    about_b1_title: "Perspectivă Obiectivă",
    about_b1_desc: "Privire neutră din exterior pentru a identifica blocaje ascunse pe care rutina zilnică le maschează.",
    about_b2_title: "Rigoare Financiară",
    about_b2_desc: "Fiecare inițiativă este fundamentată pe indicatori de profitabilitate, cash-flow și gestiunea riscului.",
    about_b3_title: "Scalare & Eficiență",
    about_b3_desc: "Creșterea cifrei de afaceri prin organizarea proceselor de vânzări și alinierea echipei executive.",
    about_b4_title: "Securitatea Deciziei",
    about_b4_desc: "O a doua opinie avizată înainte de investiții majore, credite bancare sau restructurări de personal.",

    concept_tag: "Filozofia Brandului",
    concept_title: "Ce înseamnă CSK?",
    concept_desc: "Numele CSKonsulting nu este doar o abreviere, ci o triadă a excelenței în consultanța de management modernă:",
    card_c_text: "Fiecare companie are un ritm propriu. Fie că este vorba despre o întreprindere mică și mijlocie (SRL) care dorește să se maturizeze sau o multinațională în căutare de optimizare locală, adaptăm instrumentele de management direct pe profilul organizațional.",
    card_s_text: "Nu oferim rețete copiate din manuale. Fiecare misiune aduce o strategie specială, gândită minuțios: de la diagnostic financiar realist, la poziționare competitivă pe piață și reorganizarea departamentelor pentru maximă eficiență.",
    card_k_text: "Cunoaștere născută din peste un sfert de secol de practică pe teren. Consultanță înseamnă sprijin real la masa negocierilor, implementare pas cu pas alături de echipa de conducere și atingerea rezultatelor măsurabile.",

    services_tag: "Arii de Expertiză",
    services_title: "Servicii de Consultanță de Management",
    services_desc: "Acoperim întregul spectru de nevoi ale unei conduceri moderne: de la finanțe și control, până la vânzări, echipă și cercetare de piață.",

    srv1_title: "Management Strategic & Reorganizare",
    srv1_desc: "Diagnoza structurii organizaționale, setarea obiectivelor pe termen mediu și lung, definirea procedurilor și delegarea clară a responsabilităților pentru eficientizarea costurilor.",
    srv1_p1: "Restructurare procese interne",
    srv1_p2: "Sisteme de KPI & evaluare performanță",
    srv1_p3: "Ghidare tranziție multinațională / SRL",

    srv2_title: "Consultanță Financiară & Bancară",
    srv2_desc: "Beneficiați de peste 10 ani de experiență directă în sistemul bancar și financiar. Optimizăm fluxul de numerar (cash-flow), pregătim dosare de creditare și refinanțare și consolidăm stabilitatea financiară.",
    srv2_p1: "Relația cu băncile & atragere de finanțare",
    srv2_p2: "Optimizare cash flow & control costuri",
    srv2_p3: "Planificare bugetară și prognoză",

    srv3_title: "Vânzări & Strategie Comercială",
    srv3_desc: "Dezvoltarea și restructurarea canalelor de vânzare. Auditul echipei comerciale, sisteme de motivare, fidelizare a clienților și tehnici avansate de negociere pentru creșterea veniturilor.",
    srv3_p1: "Creșterea eficienței forței de vânzare",
    srv3_p2: "Sisteme de targetare și comisionare",
    srv3_p3: "Strategii de expansiune pe piețe noi",

    srv4_title: "Cercetare de Piață & Competitivitate",
    srv4_desc: "Analiză detaliată a concurenței, comportamentului consumatorului și tendințelor din industrie. Identificăm nișe profitabile și riscuri potențiale înainte de investiții majore.",
    srv4_p1: "Benchmarking concurențial",
    srv4_p2: "Studii de oportunitate & fezabilitate",
    srv4_p3: "Poziționare de preț și produs",

    srv5_title: "Consiliere Executivă & Antreprenoriat",
    srv5_desc: "Partener de dialog strategic pentru proprietarii de companii, fondatori și directori generali. O a doua opinie avizată înainte de decizii critice de achiziție, extindere sau restructurare.",
    srv5_p1: "Consultanță pentru asociați & administratori",
    srv5_p2: "Pregătire predare afacere / succesiune",
    srv5_p3: "Management de criză și rezoluții",

    srv6_title: "Audit de Management & Eficiență",
    srv6_desc: "Scanare completă a fluxurilor de lucru din companie, eliminarea pierderilor ascunse, alinierea departamentelor și crearea unui model operațional suplu și profitabil.",
    srv6_p1: "Scanare diagnostic 360 de grade",
    srv6_p2: "Reducerea blocajelor operaționale",
    srv6_p3: "Plan de acțiune cu termene și KPI clari",

    exp_tag: "Peste Două Decenii și Jumătate de Practică",
    exp_title: "O carieră solidă dedicată performanței financiare și manageriale",
    exp_p1: "În lumea afacerilor, experiența reală acumulată în piață face diferența dintre o idee teoretică și un rezultat palpabil. Fondatorul CSKonsulting îmbină peste 25 de ani de experiență profesională totală – dintre care 10+ ani în sistemul bancar și financiar –, cu o rigoare executivă dovedită în multinaționale și companii locale.",
    timeline_total_title: "Experiență Profesională & de Afaceri Cumulată",
    timeline_total_desc: "Peste 25 de ani de carieră activă în mediul economic, cu o înțelegere profundă a dinamicii afacerilor și pieței.",
    timeline_1_title: "Sistemul Bancar & Financiar",
    timeline_1_desc: "10+ ani de experiență directă în sistemul bancar și financiar, în multiple roluri operaționale, de risc, creditare, analiză și conducere. Cunoaștere aprofundată a modului în care băncile evaluează și sprijină companiile.",
    timeline_2_title: "Top Management în Multinaționale & SRL",
    timeline_2_desc: "Peste 8 ani în funcții executive de conducere. Coordonarea echipelor mari, gestiunea bugetelor corporative, adaptarea standardelor multinaționale la realitatea dinamică a companiilor locale (SRL).",
    timeline_3_title: "Consultanță de Management Dedicată",
    timeline_3_desc: "5+ ani ca și consultant pentru companii din domenii variate (producție, distribuție, servicii, retail). Ghidare completă în management, vânzări, restructurare financiară și studii de piață (tot ce ține de managementul de performanță).",

    approach_title: "Principiile Noastre de Lucru",
    approach_desc: "Nu aducem doar rapoarte de birou. Ne așezăm la masă alături de conducere și echipa operațională până când noile sisteme funcționează optim.",
    prin_1_t: "Pragmatism Total:",
    prin_1_d: "Măsuri aplicabile imediat, fără jargon inutil.",
    prin_2_t: "Perspective Financiare Riguroase:",
    prin_2_d: "Fiecare decizie este cuantificată în impact financiar și profitabilitate.",
    prin_3_t: "Abordare Bilingvă & Regională:",
    prin_3_d: "Consultanță fluentă în română și maghiară, cu înțelegere impecabilă a pieței locale.",

    process_tag: "Cum colaborăm",
    process_title: "Procesul de Lucru în 4 Pași",
    process_desc: "Structură transparentă, fără surprize, cu obiective bine delimitate de la prima întrevedere.",
    step1_title: "Diagnoză Inițială",
    step1_desc: "Discuție aprofundată și analiză primară a indicatorilor financiari și operaționali ai companiei.",
    step2_title: "Plan Strategic",
    step2_desc: "Formularea planului de acțiune cu soluții concrete, prioritizate în funcție de impact și cost.",
    step3_title: "Implementare Activă",
    step3_desc: "Asistență directă în restructurare, negocieri cu bănci/parteneri și instruirea echipei cheie.",
    step4_title: "Monitorizare & KPI",
    step4_desc: "Evaluarea rezultatelor obținute, recalibrarea indicatorilor și asigurarea sustenabilității.",

    contact_tag: "Inițiază Dialogul",
    contact_title: "Haideți să vorbim despre afacerea dumneavoastră",
    contact_desc: "Fiecare colaborare începe cu o primă sesiune de evaluare confidențială. Ne puteți contacta prin formular, e-mail sau direct prin telefon/WhatsApp.",
    contact_email_label: "Email de Contact",
    contact_phone_label: "Telefon / WhatsApp",
    contact_loc_label: "Locație & Disponibilitate",
    contact_loc_val: "România (On-site & Online Consultanță)",
    contact_lang_note: "Consultanță disponibilă în limba Română și Maghiară (Magyar nyelven is elérhető tanácsadás).",

    form_title: "Solicită o Ședință de Consultanță",
    form_subtitle: "Completați datele de mai jos, iar noi vă vom răspunde în maxim 24 de ore.",
    form_name: "Nume complet *",
    form_company: "Companie (SRL / Grup) *",
    form_email: "Adresă de e-mail *",
    form_phone: "Număr de telefon *",
    form_service: "Domeniul principal de interes",
    form_message: "Descrierea pe scurt a provocării actuale",
    form_submit: "Trimite Solicitarea",
    form_success_msg: "Vă mulțumim! Solicitarea a fost înregistrată cu succes. Vă vom contacta în scurt timp.",

    opt_1: "Consultanță Management & Reorganizare",
    opt_2: "Consultanță Financiară & Relația cu Băncile",
    opt_3: "Vânzări & Strategie Comercială",
    opt_4: "Cercetare de Piață & Concurență",
    opt_5: "Consiliere Executivă / Mentoring SRL",
    opt_6: "Alt subiect / Pachet complet",
    footer_rights: "Consultanță de Management • Multinaționale & SRL"
  },
  en: {
    topbar_exp: '<strong class="text-white">25+ Years Total Experience</strong> (10+ years in the banking system)',
    topbar_subtitle: "Multinationals & SMEs • Strategic Management Solutions",
    brand_tagline: "Management & Strategic Advisory",
    nav_about: "About Us",
    nav_meaning: "The CSK Concept",
    nav_services: "Services",
    nav_experience: "Experience",
    nav_cta: "Request Consultation",

    hero_pill: "Premium Management Consulting",
    hero_title_part1: "Clear decisions.",
    hero_title_part2: "Solid strategy.",
    hero_title_part3: "Sustainable growth.",
    hero_description: "We turn business complexities into practical, high-impact strategies. Backed by over 25 years of total professional experience — of which 10+ years in the banking and financial system —, 8+ years in executive management (multinationals & SMEs), and 5+ years in dedicated business consulting across management, finance, sales, and market research.",
    hero_btn_consult: "Schedule a Session",
    hero_btn_services: "Explore Services",
    hero_feat1: "1-on-1 Tailored Advisory",
    hero_feat2: "Focus on Measurable ROI",
    hero_feat3: "Strict Confidentiality",

    hero_card_badge: "25+ Years Experience",
    hero_card_sub: "Strategic Formula",
    hero_card_title: "Why CSKonsulting?",
    csk_c_title: "Companys / Corporate",
    csk_c_desc: "Scalable operating solutions customized from SMEs to multinationals.",
    csk_s_title: "Special / Strategic",
    csk_s_desc: "Unique, battle-tested answers to critical business challenges.",
    csk_k_title: "Konsulting / Knowledge",
    csk_k_desc: "25+ years business tenure, 10+ years banking and executive leadership applied directly.",

    stat_total: "Years Total Experience",
    stat_fin: "Years Banking System",
    stat_mgmt: "Years Top Management",
    stat_consult: "Years Business Consulting",

    about_tag: "Executive Guide",
    about_title: "What is Management Consulting and When Does It Become Essential?",
    about_p1: "Management consulting is not an assortment of academic frameworks; it is a pragmatic partnership focused on optimizing strategic decisions, capital allocation, and human performance.",
    about_p2: "As enterprises expand or face volatile market cycles, business leaders frequently get trapped in day-to-day operational emergencies. An experienced management consultant brings impartial external perspective, disciplined financial controls, and field-tested solutions to break through growth ceilings.",
    about_link: "Discover how we can support you",
    about_b1_title: "Objective Perspective",
    about_b1_desc: "Impartial clarity that uncovers hidden bottlenecks masked by everyday operational routine.",
    about_b2_title: "Financial Rigor",
    about_b2_desc: "Every initiative is calibrated against ROI, cash-flow velocity, and comprehensive risk mitigation.",
    about_b3_title: "Scalability & Commercial Growth",
    about_b3_desc: "Revenue growth fueled by sales process optimization and executive team alignment.",
    about_b4_title: "Decision Certainty",
    about_b4_desc: "Trusted secondary opinion prior to capital investments, debt financing, or organizational restructuring.",

    concept_tag: "Brand Philosophy",
    concept_title: "What does CSK stand for?",
    concept_desc: "CSKonsulting is more than just a name — it represents the three pillars of executive consulting excellence:",
    card_c_text: "Every company has its unique lifecycle and culture. Whether you are an ambitious local SME or an established corporation, our management methodologies fit your operational reality seamlessly.",
    card_s_text: "We avoid boilerplate templates. Every engagement delivers a specialized, bespoke strategy: from financial diagnostics to market intelligence and sales restructuring.",
    card_k_text: "Knowledge born from a quarter-century of frontline financial and executive experience. Practical support during negotiations and hands-on guidance for your leadership team.",

    services_tag: "Areas of Expertise",
    services_title: "Management Consulting Services",
    services_desc: "Comprehensive advisory solutions addressing finance, organizational restructuring, commercial performance, and market analysis.",

    srv1_title: "Strategic Management & Restructuring",
    srv1_desc: "Auditing organizational structures, defining strategic milestones, optimizing workflows, and aligning responsibilities for maximum operational cost efficiency.",
    srv1_p1: "Internal process streamlining",
    srv1_p2: "KPI & performance frameworks",
    srv1_p3: "Corporate & SME transition advisory",

    srv2_title: "Financial & Banking Advisory",
    srv2_desc: "Leverage 10+ years of direct banking and financial system expertise. Cash flow management, credit & debt refinancing dossiers, and strengthening balance sheet stability.",
    srv2_p1: "Bank relations & capital raising",
    srv2_p2: "Cash-flow & cost rationalization",
    srv2_p3: "Financial planning & forecasting",

    srv3_title: "Sales & Commercial Strategy",
    srv3_desc: "Revitalizing sales teams and go-to-market channels. Performance-based incentives, customer retention systems, and advanced negotiation strategies.",
    srv3_p1: "Sales force productivity boost",
    srv3_p2: "Commission & target structures",
    srv3_p3: "Market expansion roadmaps",

    srv4_title: "Market Research & Competitive Intelligence",
    srv4_desc: "In-depth competitor analysis, customer sentiment, and sector trends. Identifying profitable niches and risk mitigation prior to capital allocation.",
    srv4_p1: "Competitive benchmarking",
    srv4_p2: "Feasibility & business opportunity studies",
    srv4_p3: "Pricing and product positioning",

    srv5_title: "Executive Advisory & Mentoring",
    srv5_desc: "Trusted sparring partner for founders, CEOs, and managing partners. Independent expert guidance through crucial acquisitions, expansions, or crisis management.",
    srv5_p1: "Advisory for board members & owners",
    srv5_p2: "Succession & business transfer readiness",
    srv5_p3: "Crisis turnaround & resolution",

    srv6_title: "Operations Audit & Efficiency",
    srv6_desc: "Full diagnostic scan of day-to-day operations to eliminate hidden losses and establish a lean, agile, and profitable operating model.",
    srv6_p1: "360-degree diagnostic audit",
    srv6_p2: "Eliminating operational bottlenecks",
    srv6_p3: "Actionable roadmap with clear KPIs",

    exp_tag: "Over 25 Years in Practice",
    exp_title: "A distinguished career dedicated to financial and managerial excellence",
    exp_p1: "In business, firsthand market tenure distinguishes real impact from theoretical exercises. The founder of CSKonsulting brings over 25 years of cumulative professional experience — of which 10+ years were spent within the banking and financial system —, complemented by 8+ years in executive leadership and 5+ years in management consulting.",
    timeline_total_title: "Cumulative Professional & Business Tenure",
    timeline_total_desc: "Over 25 years of active market presence across economic sectors with high-level operational and strategic insight.",
    timeline_1_title: "Banking & Financial System",
    timeline_1_desc: "10+ years of direct experience in the banking and financial system across various roles in risk analysis, corporate lending, and decision-making.",
    timeline_2_title: "Executive Management in Multinationals & SMEs",
    timeline_2_desc: "8+ years in executive director leadership. Overseeing large teams, managing corporate budgets, and bridging global corporate best practices with local SME agility.",
    timeline_3_title: "Dedicated Management Consulting",
    timeline_3_desc: "5+ years consulting tenure for various companies covering management, finance, commercial sales strategy, and market research.",

    approach_title: "Our Guiding Principles",
    approach_desc: "We don't leave you with dusty slide decks. We work side-by-side with your leadership until the newly established systems deliver tangible returns.",
    prin_1_t: "Uncompromising Pragmatism:",
    prin_1_d: "Actionable steps designed for rapid implementation, free of jargon.",
    prin_2_t: "Rigorous Financial Lens:",
    prin_2_d: "Every business decision is grounded in quantifiable cash-flow and ROI impact.",
    prin_3_t: "Multilingual Competence:",
    prin_3_d: "Fluent advisory in Hungarian and Romanian, backed by deep regional business expertise.",

    process_tag: "How We Work",
    process_title: "Our 4-Step Collaborative Process",
    process_desc: "A transparent roadmap with clear deliverables from day one.",
    step1_title: "Initial Diagnostic",
    step1_desc: "In-depth discovery session and comprehensive audit of financial and operational indicators.",
    step2_title: "Strategic Blueprint",
    step2_desc: "Formulating prioritized initiatives categorized by business impact and investment cost.",
    step3_title: "Active Implementation",
    step3_desc: "Direct execution support: banking discussions, process realignment, and management coaching.",
    step4_title: "KPI Monitoring",
    step4_desc: "Measuring performance, fine-tuning operational benchmarks, and ensuring sustainable results.",

    contact_tag: "Start the Conversation",
    contact_title: "Let's discuss the future of your company",
    contact_desc: "Every partnership begins with a confidential assessment. Reach out via our form, direct email, or telephone/WhatsApp.",
    contact_email_label: "Contact Email",
    contact_phone_label: "Phone / WhatsApp",
    contact_loc_label: "Location & Coverage",
    contact_loc_val: "Romania (On-site & Remote Advisory)",
    contact_lang_note: "Consulting available in Hungarian and Romanian (Disponibil în maghiară și română).",

    form_title: "Schedule a Consultation",
    form_subtitle: "Fill out the form below and we will contact you within 24 hours.",
    form_name: "Full Name *",
    form_company: "Company Name (SME / Corp) *",
    form_email: "Email Address *",
    form_phone: "Phone Number *",
    form_service: "Primary Area of Interest",
    form_message: "Brief description of current business challenge",
    form_submit: "Submit Request",
    form_success_msg: "Thank you! Your request has been registered. We will contact you shortly.",

    opt_1: "Management Consulting & Restructuring",
    opt_2: "Financial & Banking Advisory",
    opt_3: "Sales & Commercial Strategy",
    opt_4: "Market Research & Competitor Analysis",
    opt_5: "Executive Mentoring / SME Advisory",
    opt_6: "Other / Full Consulting Package",
    footer_rights: "Management Consulting • Multinationals & SMEs"
  }
};

let currentLang = 'hu'; // Default to Hungarian as requested

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('csk_lang', lang);

  // Update button classes (desktop and mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === lang.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on anchor click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Form Submission handling
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success');

  if (form && successBox) {
    successBox.classList.remove('hidden');
    form.reset();

    // Re-initialize icons inside alert
    if (window.lucide) {
      window.lucide.createIcons();
    }

    setTimeout(() => {
      successBox.classList.add('hidden');
    }, 7000);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language or default to Hungarian
  const savedLang = localStorage.getItem('csk_lang') || 'hu';
  setLanguage(savedLang);

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

const allItalianRegions = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Emilia-Romagna",
  "Friuli-Venezia Giulia",
  "Lazio",
  "Liguria",
  "Lombardia",
  "Marche",
  "Molise",
  "Piemonte",
  "Puglia",
  "Sardegna",
  "Sicilia",
  "Toscana",
  "Trentino-Alto Adige",
  "Umbria",
  "Valle d'Aosta",
  "Veneto"
];

window.EVENTS = [
  {
    name: "SFScon",
    url: "https://www.sfscon.it/",
    description: "Conferenza internazionale sul software libero, l'open source e la sovranità digitale, attiva a Bolzano dal 2001.",
    location: "Bolzano (BZ)",
    region: "Trentino-Alto Adige",
    months: [11],
    period: "Di solito in novembre",
    tags: ["software libero", "open source", "digital sovereignty"]
  },
  {
    name: "Linux Day Trieste",
    url: "https://trieste.linux.it/",
    description: "Nodo locale stabile del Linux Day con talk e laboratori GNU/Linux organizzati dalla community triestina.",
    location: "Trieste (TS)",
    region: "Friuli-Venezia Giulia",
    months: [10],
    period: "Quarto sabato di ottobre",
    tags: ["Linux", "open source", "community"]
  },
  {
    name: "Maker Faire Trieste",
    url: "https://trieste.makerfaire.com/",
    description: "Maker Faire gratuita dedicata a elettronica, robotica, stampa 3D e progetti hardware del territorio mitteleuropeo.",
    location: "Trieste (TS)",
    region: "Friuli-Venezia Giulia",
    months: [5],
    period: "Di solito in maggio",
    tags: ["maker", "hardware", "robotica", "stampa 3D"]
  },
  {
    name: "Trieste Next",
    url: "https://www.triestenext.it/",
    description: "Festival della ricerca scientifica e tecnologica con incontri pubblici su AI, scienze, innovazione e società.",
    location: "Trieste (TS)",
    region: "Friuli-Venezia Giulia",
    months: [9],
    period: "Ultimo weekend di settembre",
    tags: ["ricerca", "AI", "scienza", "tecnologia"]
  },
  {
    name: "Radioamatore Tech Expo",
    url: "https://www.radioamatorepordenone.it/",
    description: "Fiera dedicata a radioamatori, elettronica, telecomunicazioni, informatica, componenti e sperimentazione.",
    location: "Pordenone (PN)",
    region: "Friuli-Venezia Giulia",
    months: [4],
    period: "Aprile",
    tags: ["radioamatori", "elettronica", "telecomunicazioni"]
  },
  {
    name: "Radioamatore 2",
    url: "https://www.radioamatore2.it/",
    description: "Edizione autunnale della fiera di Pordenone con componentistica, associazioni, Linux Arena e radio d'epoca.",
    location: "Pordenone (PN)",
    region: "Friuli-Venezia Giulia",
    months: [11],
    period: "Di solito in novembre",
    tags: ["radioamatori", "elettronica", "Linux", "componenti"]
  },
  {
    name: "Elettroexpo",
    url: "https://www.modelexpoitaly.it/elettroexpo/",
    description: "Storica fiera veronese di elettronica, informatica, radioamatorismo e componentistica con oltre sessanta edizioni.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [3],
    period: "Primo weekend di marzo",
    tags: ["elettronica", "radioamatori", "hardware", "fiera"]
  },
  {
    name: "Fiera dell'Elettronica di Consumo",
    url: "https://fieradellelettronica.net/",
    description: "Fiera di elettronica e componenti con un'area Ham Radio dedicata alle associazioni e agli appassionati.",
    location: "Vicenza (VI)",
    region: "Veneto",
    months: [3],
    period: "Di solito a metà marzo",
    tags: ["elettronica", "radioamatori", "componenti", "hardware"]
  },
  {
    name: "phpday",
    url: "https://www.phpday.it/",
    description: "Conferenza internazionale in Italia dedicata a PHP, sviluppo backend, framework e architetture web.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [5],
    period: "Maggio",
    tags: ["PHP", "web development", "software architecture"]
  },
  {
    name: "GDG DevFest Venezia",
    url: "https://gdg.community.dev/gdg-venezia/",
    description: "Conferenza annuale gratuita del GDG Venezia con track dedicate ad AI, Android, web e Google Cloud.",
    location: "Mestre / Venezia (VE)",
    region: "Veneto",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["Google", "Android", "cloud", "AI", "web"]
  },
  {
    name: "GDG DevFest Bari",
    url: "https://bari.devfest.it/",
    description: "Conferenza annuale gratuita del GDG Bari su Android, web, cloud, AI e sviluppo software.",
    location: "Bari (BA)",
    region: "Puglia",
    months: [11],
    period: "Di solito in novembre",
    tags: ["Google", "Android", "cloud", "AI", "web"]
  },
  {
    name: "Linux Day",
    url: "https://www.linuxday.it/",
    description: "Manifestazione nazionale diffusa dedicata a GNU/Linux, software libero, open source e cultura digitale.",
    location: "Sedi locali in tutta Italia",
    region: "Tutta Italia",
    regions: allItalianRegions,
    months: [10],
    period: "Quarto sabato di ottobre",
    tags: ["Linux", "software libero", "open source"]
  },
  {
    name: "Open Source Day",
    url: "https://osday.dev/",
    description: "Conferenza community-driven su software open source, sviluppo, infrastrutture, sicurezza e sostenibilità tecnologica.",
    location: "Firenze (FI)",
    region: "Toscana",
    months: [4],
    period: "Aprile",
    tags: ["open source", "Linux", "cloud", "cybersecurity"]
  },
  {
    name: "ITASEC",
    url: "https://itasec.it/",
    description: "Conferenza nazionale sulla cybersecurity che riunisce ricerca, università, industria e istituzioni.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Lazio", "Lombardia", "Piemonte", "Sardegna", "Toscana"],
    months: [2, 4],
    period: "Febbraio-aprile",
    tags: ["cybersecurity", "security research", "università"]
  },
  {
    name: "HackInBo",
    url: "https://www.hackinbo.it/",
    description: "Conferenza italiana sulla sicurezza informatica con sessioni tecniche, dimostrazioni e confronto professionale.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [5, 11],
    period: "Primavera e autunno",
    tags: ["cybersecurity", "hacking", "security research"]
  },
  {
    name: "RomHack",
    url: "https://romhack.io/",
    description: "Conferenza e training camp sulla sicurezza informatica, con contenuti tecnici e attività community-driven.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [9],
    period: "Settembre",
    tags: ["cybersecurity", "hacking", "security research"]
  },
  {
    name: "Cybertech Europe",
    url: "https://italy.cybertechconference.com/",
    description: "Conferenza ed esposizione europea su cybersecurity, tecnologie di difesa, infrastrutture e innovazione digitale.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [10],
    period: "Ottobre",
    tags: ["cybersecurity", "infrastrutture", "digital technology"]
  },
  {
    name: "Maker Faire Rome",
    url: "https://makerfairerome.eu/",
    description: "Fiera europea dell'innovazione con progetti maker, elettronica, robotica, fabbricazione digitale e IoT.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [10],
    period: "Ottobre",
    tags: ["maker", "elettronica", "robotica", "IoT"]
  },
  {
    name: "Arduino Days",
    url: "https://days.arduino.cc/",
    description: "Celebrazione annuale ufficiale di Arduino con programma online e nodi locali; Milano ospita un nodo community stabile.",
    location: "Online e nodi locali italiani",
    region: "Italia / online",
    regions: ["Lombardia"],
    months: [3],
    period: "Di solito in marzo",
    tags: ["Arduino", "open hardware", "maker", "community"]
  },
  {
    name: "Convention ARI HF-VHF & Up",
    url: "https://www.ari.it/",
    description: "Convegno tecnico nazionale dell'Associazione Radioamatori Italiani su antenne, propagazione, HF, VHF e microonde.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Umbria"],
    months: [5, 6],
    period: "Tra maggio e giugno",
    tags: ["radioamatori", "HF", "VHF", "antenne", "telecomunicazioni"]
  },
  {
    name: "SPS Italia",
    url: "https://www.spsitalia.it/en/",
    description: "Principale fiera italiana per automazione industriale, smart manufacturing, cybersecurity OT e Industrial IoT.",
    location: "Parma (PR)",
    region: "Emilia-Romagna",
    months: [5],
    period: "Di solito in maggio",
    tags: ["automazione", "IIoT", "Industria 4.0", "robotica"]
  },
  {
    name: "IOTHINGS World",
    url: "https://iothings.world/en/",
    description: "Evento professionale su IoT e Industry 4.0 con Wireless Forum dedicato anche a LoRaWAN, LPWAN e 5G.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["IoT", "IIoT", "LoRaWAN", "LPWAN", "5G"]
  },
  {
    name: "Vintage Computer Festival Italia",
    url: "https://vintagecomputerclubitalia.it/",
    description: "Festival di computer storici funzionanti, dalle macchine Olivetti ai sistemi Apple, Commodore e console classiche.",
    location: "Nettuno (RM), nelle edizioni recenti",
    region: "Lazio",
    months: [],
    period: "In primavera, data variabile",
    tags: ["retrocomputing", "storia informatica", "vintage hardware"]
  },
  {
    name: "Brusaretro",
    url: "https://www.vareseretrocomputing.it/",
    description: "Piccola mostra community di computer e console vintage, arrivata alla diciottesima edizione nel 2025.",
    location: "Brusaporto (BG)",
    region: "Lombardia",
    months: [11],
    period: "Prima domenica di novembre",
    tags: ["retrocomputing", "console", "community"]
  },
  {
    name: "Varese Retrocomputing",
    url: "https://www.vareseretrocomputing.it/",
    description: "Esposizione gratuita di computer, console, calcolatrici e altri oggetti tecnologici storici.",
    location: "Provincia di Varese (VA)",
    region: "Lombardia",
    months: [9],
    period: "Di solito a metà settembre",
    tags: ["retrocomputing", "computer vintage", "console", "community"]
  },
  {
    name: "RomeCup",
    url: "https://www.romecup.org/",
    description: "Competizioni, hackathon e laboratori annuali su robotica, AI, life science e formazione tecnica.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [3, 4, 5],
    period: "Tra marzo e maggio",
    tags: ["robotica", "AI", "competizioni", "education"]
  },
  {
    name: "PyCon Italia",
    url: "https://pycon.it/",
    description: "Conferenza nazionale della comunità Python su linguaggio, sviluppo software, data science, AI e didattica.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [5, 6],
    period: "Maggio-giugno",
    tags: ["Python", "software development", "data", "AI"]
  },
  {
    name: "GoLab",
    url: "https://www.golab.io/",
    description: "Conferenza internazionale dedicata al linguaggio Go e alla sua community di sviluppatori.",
    location: "Firenze (FI)",
    region: "Toscana",
    months: [11],
    period: "Di solito in novembre",
    tags: ["Go", "software development", "community"]
  },
  {
    name: "Codemotion Milan",
    url: "https://conferences.codemotion.com/milan/",
    description: "Conferenza per sviluppatori su linguaggi, architetture software, cloud, AI, DevOps e tecnologie emergenti.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [10],
    period: "Ottobre",
    tags: ["software development", "cloud", "AI", "DevOps"]
  },
  {
    name: "Codemotion Conference Roma",
    url: "https://conferences.codemotion.com/",
    description: "Edizione primaverile romana di Codemotion dedicata a cloud, AI, frontend, DevOps e community software.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [4],
    period: "Di solito in aprile",
    tags: ["software development", "cloud", "AI", "DevOps"]
  },
  {
    name: "Droidcon Italy",
    url: "https://it.droidcon.com/",
    description: "Conferenza italiana dedicata allo sviluppo Android e mobile, con sede variabile tra le edizioni.",
    location: "Sede variabile, recentemente Milano e Torino",
    region: "Lombardia e Piemonte",
    regions: ["Lombardia", "Piemonte"],
    months: [11],
    period: "Di solito in novembre",
    tags: ["Android", "mobile", "Flutter", "software development"]
  },
  {
    name: "SMAU",
    url: "https://www.smau.it/",
    description: "Serie italiana di eventi sull'innovazione digitale con startup, imprese, pubbliche amministrazioni e tecnologie.",
    location: "Sedi italiane multiple",
    region: "Sede variabile",
    regions: ["Campania", "Lombardia", "Puglia"],
    months: [3, 5, 10, 12],
    period: "Più edizioni durante l'anno",
    tags: ["innovazione digitale", "startup", "pubblica amministrazione"]
  },
  {
    name: "Internet Festival",
    url: "https://www.internetfestival.it/",
    description: "Festival diffuso su internet, cultura digitale, innovazione e impatto della tecnologia sulla società.",
    location: "Pisa (PI)",
    region: "Toscana",
    months: [10],
    period: "Prima metà di ottobre",
    tags: ["internet", "cultura digitale", "innovazione", "società"]
  },
  {
    name: "Forum PA",
    url: "https://www.forumpa.it/",
    description: "Manifestazione nazionale su innovazione e tecnologie digitali nella pubblica amministrazione.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [5],
    period: "Di solito in maggio",
    tags: ["PA digitale", "smart city", "innovazione", "e-government"]
  },
  {
    name: "Hackmeeting",
    url: "https://hackmeeting.org/",
    description: "Incontro autogestito e itinerante su hacking, software libero, privacy, reti e diritti digitali.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Campania", "Emilia-Romagna", "Lombardia", "Piemonte", "Toscana", "Veneto"],
    months: [5, 6],
    period: "Maggio-giugno",
    tags: ["hacking", "software libero", "privacy", "cultura digitale"]
  },
  {
    name: "Coderful",
    url: "https://coderful.io/",
    description: "Conferenza su Frontend, Backend, AI Application e Software Architecture.",
    location: "Catania (CT)",
    region: "Sicilia",
    months: [1, 6],
    period: "Giugno / Gennaio",
    tags: ["frontend", "backend", "AI", "software architecture"]
  },
  {
    name: "Italian C++ Conference / C++ Day",
    url: "https://italiancpp.org/",
    description: "Evento incentrato sul linguaggio C++, High Performance Computing e architetture di sistema.",
    location: "Roma (RM) / Pavia (PV)",
    region: "Sede variabile",
    regions: ["Lazio", "Lombardia"],
    months: [6, 10],
    period: "Giugno / Ottobre",
    tags: ["C++", "HPC", "system architecture", "performance"]
  },
  {
    name: "RustLab",
    url: "https://rustlab.it/",
    description: "Conferenza internazionale sul linguaggio Rust, memory safety e programmazione di sistema.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [11],
    period: "Di solito in novembre",
    tags: ["Rust", "memory safety", "systems programming"]
  },
  {
    name: "jsday",
    url: "https://www.jsday.it/",
    description: "Conferenza internazionale in Italia dedicata a JavaScript, TypeScript, framework web e architetture frontend.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [4],
    period: "Aprile",
    tags: ["JavaScript", "TypeScript", "web development"]
  },
  {
    name: "reactjsday",
    url: "https://www.reactjsday.it/",
    description: "Conferenza italiana dedicata a React, React Native, frontend engineering, accessibilità e strumenti web.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [11],
    period: "Novembre",
    tags: ["React", "JavaScript", "web development"]
  },
  {
    name: "angularday",
    url: "https://www.angularday.it/",
    description: "Conferenza tecnica della community italiana dedicata ad Angular, sviluppo frontend e architetture web.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [11],
    period: "Novembre",
    tags: ["Angular", "web development", "JavaScript"]
  },
  {
    name: "laravelday",
    url: "https://www.laravelday.it/",
    description: "Conferenza italiana dedicata a Laravel, PHP, sviluppo backend, testing e architetture applicative.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [11],
    period: "Novembre",
    tags: ["Laravel", "PHP", "web development"]
  },
  {
    name: "WordCamp Italia / Pisa",
    url: "https://dev.events",
    description: "Conferenza sull'ecosistema WordPress, PHP, accessibilità, web development e architettura CMS.",
    location: "Pisa (PI) / Itinerante",
    region: "Toscana",
    months: [11],
    period: "Di solito in novembre",
    tags: ["WordPress", "PHP", "web development", "CMS"]
  },
  {
    name: "No Hat",
    url: "https://www.nohat.it/",
    description: "Conferenza indipendente di sicurezza informatica orientata a ricerca tecnica, vulnerabilità e attacco.",
    location: "Bergamo (BG)",
    region: "Lombardia",
    months: [10],
    period: "Ottobre",
    tags: ["cybersecurity", "hacking", "security research"]
  },
  {
    name: "Security Summit",
    url: "https://securitysummit.it/",
    description: "Summit pluri-tappa su Cyber Risk, Regulatory Compliance, Enterprise Defense e Threat Intelligence.",
    location: "Napoli / Roma / Milano",
    region: "Sede variabile",
    regions: ["Campania", "Lazio", "Lombardia"],
    months: [5, 6, 10],
    period: "Maggio (NA) / Giugno (RM) / Autunno (MI)",
    tags: ["cybersecurity", "cyber risk", "compliance", "threat intelligence"]
  },
  {
    name: "CyberChallenge.IT",
    url: "https://cyberchallenge.it/",
    description: "Programma e competizione nazionale per giovani talenti su Ethical Hacking, Capture The Flag (CTF) e Crittografia.",
    location: "Torino (TO) / Nazionale",
    region: "Piemonte",
    months: [7],
    period: "Finale in luglio",
    tags: ["cybersecurity", "CTF", "ethical hacking", "cryptography"]
  },
  {
    name: "devsecopsday",
    url: "https://www.devsecopsday.it/",
    description: "Conferenza tecnica sull'integrazione della sicurezza nei processi DevOps, nelle pipeline e nel ciclo software.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [10],
    period: "Ottobre",
    tags: ["DevSecOps", "cybersecurity", "DevOps"]
  },
  {
    name: "Innovation Cybersecurity Summit",
    url: "https://cybersecitalysummit.it/",
    description: "Summit dedicato a Governance della sicurezza, Zero Trust e sicurezza delle infrastrutture critiche.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [4],
    period: "Di solito in aprile",
    tags: ["cybersecurity", "governance", "zero trust", "infrastrutture critiche"]
  },
  {
    name: "IDI - Incontro DevOps Italia",
    url: "https://www.incontrodevops.it/",
    description: "Conferenza italiana dedicata a DevOps, automazione, infrastrutture, affidabilità e collaborazione tra team.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [3],
    period: "Marzo",
    tags: ["DevOps", "cloud", "infrastrutture", "SRE"]
  },
  {
    name: "containerday",
    url: "https://www.containerday.it/",
    description: "Conferenza tecnica su container, orchestrazione, Kubernetes, piattaforme cloud native e infrastrutture.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [10],
    period: "Ottobre",
    tags: ["container", "Kubernetes", "cloud native", "DevOps"]
  },
  {
    name: "MLOpsDay",
    url: "https://mlopsday.it/",
    description: "Evento su MLOps, infrastruttura AI, Model Deployment e orchestrazione GPU.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["MLOps", "AI infrastructure", "model deployment", "GPU"]
  },
  {
    name: "AWS Community Day Italy",
    url: "https://dev.events",
    description: "Conferenza community su architettura Cloud, servizi AWS, Serverless e sistemi distribuiti.",
    location: "Roma (RM) / Milano (MI)",
    region: "Sede variabile",
    regions: ["Lazio", "Lombardia"],
    months: [9],
    period: "Di solito in settembre",
    tags: ["AWS", "cloud architecture", "serverless", "distributed systems"]
  },
  {
    name: "ServerlessDays Milano",
    url: "https://dev.events",
    description: "Conferenza verticale su architetture Serverless, Event-driven Computing e Cloud Native.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["serverless", "cloud native", "event-driven", "software architecture"]
  },
  {
    name: "Global Azure Italy",
    url: "https://aspitalia.com/",
    description: "Evento community su Microsoft Azure, Cloud Computing, Edge Infrastructure e DevOps.",
    location: "Milano (MI) / Online",
    region: "Lombardia",
    months: [4],
    period: "Di solito in aprile",
    tags: ["Azure", "cloud", "DevOps", "Microsoft"]
  },
  {
    name: "DevConf",
    url: "https://devconf.it/",
    description: "Evento biennale su Open Source Development, Etica del Codice e progetti Linux territoriali.",
    location: "Pavia (PV) / Itinerante",
    region: "Lombardia",
    months: [7],
    period: "Biennale, di solito in luglio",
    tags: ["open source", "ethics", "linux", "software development"]
  },
  {
    name: "End Summer Camp",
    url: "https://endsummer.camp/",
    description: "Hacker camp non profit con talk, laboratori e attività su sicurezza, privacy, reti e cultura digitale.",
    location: "San Donà di Piave (VE)",
    region: "Veneto",
    months: [9],
    period: "Settembre",
    tags: ["hacking", "cybersecurity", "privacy", "reti"]
  },
  {
    name: "Fiera dell'Elettronica e del Radioamatore (Montichiari)",
    url: "https://centrofiera.it/",
    description: "Fiera semestrale dedicata a componentistica elettronica, radioamatorialità, microcontrollori e hardware.",
    location: "Montichiari (BS)",
    region: "Lombardia",
    months: [3, 9],
    period: "Semestrale (Marzo & Settembre)",
    tags: ["elettronica", "radioamatori", "microcontrollori", "hardware"]
  },
  {
    name: "Italian Agile Days",
    url: "https://www.agileday.it/",
    description: "Conferenza della community italiana sui metodi agili applicati a sviluppo software, prodotti e organizzazioni.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Calabria", "Emilia-Romagna", "Lazio", "Lombardia", "Toscana"],
    months: [11],
    period: "Novembre",
    tags: ["agile", "software development", "product management"]
  },
  {
    name: "AI Forum",
    url: "https://www.aiforum.eu/",
    description: "Forum dedicato a ricerca, applicazioni, impatto e governance dell'intelligenza artificiale nel contesto italiano.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [4],
    period: "Aprile",
    tags: ["AI", "machine learning", "data"]
  },
  {
    name: "Better Software",
    url: "https://www.bettersoftware.it/",
    description: "Conferenza su progettazione, sviluppo e gestione di prodotti software, processi e organizzazioni tecniche.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [12],
    period: "Dicembre",
    tags: ["software development", "product management", "agile"]
  },
  {
    name: "Data Saturday Pordenone",
    url: "https://datasaturdays.com/",
    description: "Evento community gratuito su piattaforme dati, database, analytics, business intelligence e cloud data.",
    location: "Pordenone (PN)",
    region: "Friuli-Venezia Giulia",
    months: [2],
    period: "Febbraio",
    tags: ["data", "database", "analytics", "cloud"]
  },
  {
    name: "DevFest Campobasso",
    url: "https://gdg.community.dev/gdg-campobasso/",
    description: "Conferenza annuale della community Google Developer locale su programmazione, cloud, web, mobile e AI.",
    location: "Campobasso (CB)",
    region: "Molise",
    months: [9, 10],
    period: "Settembre-ottobre",
    tags: ["software development", "Google Cloud", "mobile", "AI"]
  },
  {
    name: "DevFest Catania",
    url: "https://gdg.community.dev/gdg-catania/",
    description: "Conferenza annuale della community Google Developer di Catania su sviluppo, cloud, mobile, web e AI.",
    location: "Catania (CT)",
    region: "Sicilia",
    months: [10, 11],
    period: "Ottobre-novembre",
    tags: ["software development", "Google Cloud", "mobile", "AI"]
  },
  {
    name: "DevFest Pescara",
    url: "https://gdg.community.dev/gdg-pescara/",
    description: "Conferenza annuale della community Google Developer di Pescara su software, cloud, web, mobile e AI.",
    location: "Pescara (PE)",
    region: "Abruzzo",
    months: [10, 11],
    period: "Ottobre-novembre",
    tags: ["software development", "Google Cloud", "mobile", "AI"]
  },
  {
    name: "DevFest Pisa",
    url: "https://gdg.community.dev/gdg-pisa/",
    description: "Conferenza annuale della community Google Developer di Pisa su sviluppo software e tecnologie Google.",
    location: "Pisa (PI)",
    region: "Toscana",
    months: [10, 11],
    period: "Ottobre-novembre",
    tags: ["software development", "Google Cloud", "web development", "AI"]
  },
  {
    name: "DevFest Roma",
    url: "https://gdg.community.dev/gdg-roma-citta/",
    description: "Conferenza annuale della community Google Developer romana su sviluppo, cloud, mobile, web e AI.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [10, 11],
    period: "Ottobre-novembre",
    tags: ["software development", "Google Cloud", "mobile", "AI"]
  },
  {
    name: "Milan Games Week & Cartoomics - Retrogaming",
    url: "https://www.milangamesweek.it/",
    description: "Area della manifestazione milanese dedicata anche a retrogaming, storia del videogioco e cultura digitale.",
    location: "Rho (MI)",
    region: "Lombardia",
    months: [11],
    period: "Novembre",
    tags: ["retrogaming", "cultura digitale", "videogiochi"]
  },
  {
    name: "OWASP Italy Day",
    url: "https://owasp.org/www-chapter-italy/",
    description: "Conferenza della comunità OWASP italiana su sicurezza applicativa, DevSecOps e sviluppo software sicuro.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Lombardia", "Sardegna"],
    months: [6],
    period: "Giugno",
    tags: ["application security", "OWASP", "DevSecOps"]
  },
  {
    name: "Privacy Symposium",
    url: "https://privacysymposium.org/",
    description: "Conferenza internazionale su privacy, protezione dei dati, sicurezza, regolazione e tecnologie digitali.",
    location: "Venezia (VE)",
    region: "Veneto",
    months: [4],
    period: "Aprile",
    tags: ["privacy", "cybersecurity", "data protection"]
  },
  {
    name: "SoCraTes Italy",
    url: "https://www.socrates-conference.it/",
    description: "Unconference residenziale su software craftsmanship, progettazione, testing e pratiche di sviluppo.",
    location: "Rimini (RN)",
    region: "Emilia-Romagna",
    months: [9],
    period: "Settembre",
    tags: ["software craftsmanship", "testing", "software development"]
  },
  {
    name: "RetroCampus",
    url: "https://retrocampus.com/",
    description: "Incontro dell'associazione Retrocomputer Club Italia dedicato a retrocomputing, restauro e storia informatica.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Emilia-Romagna", "Lombardia", "Toscana"],
    months: [],
    period: "Periodo variabile",
    tags: ["retrocomputing", "storia informatica", "hardware"]
  }
];

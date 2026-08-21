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
    description: "Grande fiera storica di radioamatorismo, elettronica e informatica con Linux Arena, maker e mercato dell'usato.",
    location: "Pordenone (PN)",
    region: "Friuli-Venezia Giulia",
    months: [4],
    period: "Di solito in aprile",
    tags: ["radioamatori", "elettronica", "Linux", "maker"]
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
    name: "phpDay",
    url: "https://www.phpday.it/",
    description: "Conferenza internazionale della community PHP organizzata da GrUSP, con talk tecnici in inglese.",
    location: "Verona (VR)",
    region: "Veneto",
    months: [5],
    period: "Di solito in maggio",
    tags: ["PHP", "web", "software development", "community"]
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
    description: "La rete nazionale di eventi locali dedicati a Linux e al software libero; il sito ufficiale pubblica ogni anno la mappa delle sedi.",
    location: "Sedi locali in tutta Italia",
    region: "Tutta Italia",
    regions: allItalianRegions,
    months: [10],
    period: "Quarto sabato di ottobre",
    tags: ["Linux", "open source", "software libero", "community"]
  },
  {
    name: "Open Source Day / OSDAY",
    url: "https://osday.dev/",
    description: "Conferenza gratuita e ibrida dedicata all'open source, organizzata dalla community Schrödinger Hat.",
    location: "Firenze (FI)",
    region: "Toscana",
    months: [3, 4],
    period: "Tra marzo e aprile",
    tags: ["open source", "software development", "community"]
  },
  {
    name: "ITASEC",
    url: "https://itasec.it/",
    description: "Conferenza nazionale di ricerca e innovazione sulla cybersecurity, organizzata dal CINI e da Fondazione SERICS.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Emilia-Romagna", "Sardegna"],
    months: [2],
    period: "Di solito in febbraio",
    tags: ["cybersecurity", "ricerca", "accademia", "policy"]
  },
  {
    name: "HackInBo",
    url: "https://www.hackinbo.it/",
    description: "Conferenza gratuita di sicurezza informatica con due edizioni annuali, una primaverile e una invernale.",
    location: "Bologna (BO)",
    region: "Emilia-Romagna",
    months: [6, 11],
    period: "Edizioni in giugno e novembre",
    tags: ["cybersecurity", "hacking", "IT security", "community"]
  },
  {
    name: "RomHack",
    url: "https://romhack.io/",
    description: "Conferenza internazionale no-profit di cybersecurity con sessioni tecniche, training e community.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [9],
    period: "Ultimo sabato di settembre",
    tags: ["cybersecurity", "hacking", "training", "community"]
  },
  {
    name: "Cybertech Europe",
    url: "https://italy.cybertechconference.com/",
    description: "Evento internazionale su cybersecurity, industria e tecnologie della difesa con conferenza ed esposizione.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["cybersecurity", "difesa", "industria", "expo"]
  },
  {
    name: "Maker Faire Rome",
    url: "https://makerfairerome.eu/en/",
    description: "Grande manifestazione europea per maker su Arduino, elettronica, IoT, robotica, fabbricazione digitale e sostenibilità.",
    location: "Roma (RM)",
    region: "Lazio",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["maker", "Arduino", "IoT", "hardware", "robotica"]
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
    url: "https://www.pycon.it/",
    description: "Conferenza annuale della community Python italiana con talk, workshop e sprint open source.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Toscana", "Emilia-Romagna"],
    months: [5],
    period: "Di solito in maggio",
    tags: ["Python", "open source", "software development", "community"]
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
    name: "Codemotion Conference Milano",
    url: "https://conferences.codemotion.com/",
    description: "Grande conferenza autunnale per sviluppatori su cloud, AI, frontend, DevOps e architetture software.",
    location: "Milano / Rho (MI)",
    region: "Lombardia",
    months: [10],
    period: "Di solito in ottobre",
    tags: ["software development", "cloud", "AI", "frontend"]
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
    name: "SMAU Milano",
    url: "https://www.smau.it/",
    description: "Storica manifestazione B2B su innovazione digitale, startup e trasformazione tecnologica di imprese e PA.",
    location: "Milano (MI)",
    region: "Lombardia",
    months: [10, 11],
    period: "Tra ottobre e novembre",
    tags: ["innovazione", "startup", "digitale", "imprese"]
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
    name: "Hackmeeting Italia",
    url: "https://www.hackmeeting.org/",
    description: "Incontro annuale autogestito delle controculture digitali italiane, con seminari e laboratori dal 1998.",
    location: "Sede italiana variabile",
    region: "Sede variabile",
    regions: ["Lombardia", "Sardegna"],
    months: [5, 6],
    period: "Tra maggio e giugno",
    tags: ["hacker culture", "diritti digitali", "community", "privacy"]
  }
];

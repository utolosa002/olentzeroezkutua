import { Translations } from './config';

export const eu: Translations = {
  language: {
    flag: "🇪us",
    name: "Euskara",
  },
  errors: {
    needMoreParticipants: "Gutxienez 2 parte-hartzaile behar dira!",
    invalidPairs: "Ezin izan dira bikote baliagarriak sortu egungo arauekin. Mesedez, egiaztatu arauak eta saiatu berriro.",
    multipleMustRules: "Elkarlotzea eskatzen duten arau anitzen arteko talka",
    conflictingRules: "Elkarlotzea eskatzen duen arau batek eta elkarlotzea baztertzen duen arau batek talka egiten dute",
    emptyName: "Izen hutsa",
    duplicateName: "Izen errepikatua: {{name}}",
    invalidRuleFormat: "Arauen formatua baliogabea: {{rule}}",
    unknownParticipant: "Arauan ezagutzen ez den parte-hartzailea: {{name}}",
    noValidReceivers: "Parte-hartzaile honentzat ez da baliozko jasotzailerik geratzen",
    line: "Lerroa {{number}}"
  },
  home: {
    vanity: "Proiektua 2015eko neguan Maël-ek hasi zuen",
    sponsor: "Eman dohaintza GitHub-en",
    title: "Olentzero ezkutu antolatzailea",
    explanation: [
      "Ongi etorri! Tresna hau zure opari trukaketak antolatzen laguntzeko da. Idatzi parte-hartzaileak eta guk ausaz osatuko ditugu bikoteak zuk zehaztuko dituzun arauen arabera.",
      "Parte-hartzaile bakoitzerentzat esteka berezi bat sortuko da; zuk banatu behar duzu (posta elektronikoa, Slack, eta abar). [<exampleLink>Esteka adibidea</exampleLink>]",
      "Konturik gabe, posta elektronikorik gabe, arazorik gabe, eta dena soilik <githubLink>GitHub Pages</githubLink>-en ostalatuta!"
    ].map(line => `<p>${line}</p>`).join(''),
    exampleLink: "Esteka adibidea",
  },
  pairing: {
    title: "Zure Olentzero ezkutu bikotea",
    assignment: "Ongi etorri, <name/>! Oparia honi eman behar diozu:",
    loading: "Kargatzen...",
    error: "Mezua deszifratzeak huts egin du. Esteka baliogabea izan daiteke.",
    startYourOwn: "Sortu zure Olentzero ezkutua!"
  },
  participants: {
    title: "Parte-hartzaileak",
    generationWarning: "Garrantzitsua: Parte-hartzaileen zerrenda edo haien ezarpenak aldatzen badira, bikoteak berriz sortu behar dira. Dauden estekak ez dira aldatuko.",
    addPerson: "Pertsona gehitu",
    generatePairs: "Sortu bikoteak",
    enterName: "Sartu parte-hartzailearen izena",
    editRules: "Arauak editatu",
    removeParticipant: "Ezabatu parte-hartzailea",
    rulesCount_one: "{{count}} arau definitua",
    rulesCount_other: "{{count}} arau definitu",
    switchToFormView: "Aldatu formulario ikuspegira",
    switchToTextView: "Aldatu testu ikuspegira",
  },
  rules: {
    title: "{{name}}-en arauak",
    mustBePairedWith: "Honekin elkartu behar da",
    mustNotBePairedWith: "Honi ezin dio oparitu",
    selectParticipant: "Hautatu beste parte-hartzaile bat",
    removeRule: "Ezabatu araua",
    addMustRule: "Elkartzea derrigortu",
    addMustNotRule: "Elkartzea baztertu",
    cancel: "Utzi",
    saveRules: "Gorde arauak",
    hintLabel: "Oparirako aholkuak",
    hintPlaceholder: "Sartu oparirako egokia izan daitekeenari buruzko azalpena (aukerakoa)",
  },
  links: {
    title: "Partekatu beharreko estekak",
    warningParticipantsChanged: "Kontuz: Parte-hartzaileak edo haien arauak aldatu egin dira esteka hauek azken aldiz sortu zirenetik.",
    resetAssignments: "Berriro sortu bikoteak",
    shareInstructions: "Partekatu esteka bakoitza bakarrik dagokion emalearekin",
    exportCSV: "Esportatu CSV-n",
    copySecretLink: "Kopiatu esteka sekretua",
    linkCopied: "Esteka kopiatu da!",
    for: "entzako",
  },
  settings: {
    title: "Ezarpenak",
    instructions: "Argibide osagarriak",
    instructionsPlaceholder: "Adibidez aurrekontua, data, lekua...",
    instructionsHelp: "Hauek agertuko dira parte-hartzaile guztien esleipen orrian. Laburra izan: funtzio honek esteken luzera handitzen du."
  }
};
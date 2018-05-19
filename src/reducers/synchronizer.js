import { processRawText, optimizeProcessedText } from './processRawText'

const initRawLyrics = `[Intro]
En voilà une drôle de question
J'aurais pas passé des mois à t'faire la cour
Si j'avais d'autres femmes en tête
C'est toi ma raison d'être, viens à la maison babe
J'ai pris des résolutions
En voilà une drôle de question
J'aurais pas passé des mois à t'faire la cour
Si j'avais d'autres femmes en tête
C'est toi ma raison d'être, viens à la maison babe
J'ai pris des résolutions

[Couplet 1]
Je veux que tu glisses sur le sol
Je veux qu'on s'épuise sur le divan
Je veux que tu passes un disque de Queen, j'veux du soleil
Je veux aller voir entre les cuisses dans le silence
Je veux que tu saches que j'ai la trique, j'suis au sommet
Tu vas devoir éteindre ma ... c'est ton problème
Bébé j'suis toujours un romantique
T'es la seule femme dans ma vie
Les autres c'était des fausses, c'était des moches
Mais toi t'es trop belle
Tu m'as suivi à la maison
J'ai endormi tous tes soupçons
Dans une armoire montée par mes propres phrases
C'est toi ma raison d'être, j'en ai plus dans la tête
Au problème, sa solution
J'ai la weed, oublie la pression
Après l'doobie faut pas stresser
Chérie tu me regardes comme si, un jour, j'allais te blesser
Ça m'empêche d'avoir la trique qu'il faut pour qu'on puisse baiser comme des tortues

[Couplet 2]
Je veux que tu glisses sur le sol
Je veux qu'on s'épuise sur le divan
Je veux que tu passes un disque de Queen, j'veux du soleil
Je veux aller voir entre les cuisses dans le silence
Je veux envoyer la dynamite sur tes problèmes
Récolter le fruit de notre nuit, loin du sommeil
Bébé, j'suis toujours un romantique
Quand je parlais à d'autres fille
C'était simplement pour leur dire
À quel point c'est toi la plus belle

[Pont]
En voila une drôle de question
Je te jure c'est toi la plus belle !
En voila une drôle de question
Ouais vraiment, quand je t'embrasse c'est comme...
Une sorte de dauphin sophistiqué

[Couplet 3]
Corps contre corps, lèvres contre lèvres
Chérie c'est la seule façon qui marche pour coller
J't'aimais déjà au collège
L'amour au travail, c'est nul
Mais toi t'étais pas une collègue
Et si c'est pas toi, beh c'est pas toi
Et c'est pas une autre, promis
Pour toi j'abandonnerais le trône, peut être le cro-mi
Mais avant faut que tu me dises "Je t'aime"
Il faut que ça sorte de ta bouche
Comme dans un film de merde
Les filles d'avant c'étaient des lopes-sa
Arrive de se tromper mais je serai fidèle
On est d'accord pour ce manège
Je te donne le love que tu mérites même si tu me rends le dixième
J'ai tout noté sur un carnet

[Outro]
En voila une drôle de question, une drôle de question
En voila une drôle de question
En voila une drôle de question
Une drôle de question`

const initProcessedLyrics = JSON.parse(`[{"id":"1-1-1","value":"E","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":0},{"id":"1-1-2","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":1},{"id":"1-1-3","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":2},{"id":"1-1-4","value":"v","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":3},{"id":"1-1-5","value":"o","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":4},{"id":"1-1-6","value":"i","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":5},{"id":"1-1-7","value":"l","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":6},{"id":"1-1-8","value":"à","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":7},{"id":"1-1-9","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":8},{"id":"1-1-10","value":"u","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":9},{"id":"1-1-11","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":10},{"id":"1-1-12","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":11},{"id":"1-1-13","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":12},{"id":"1-1-14","value":"d","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":13},{"id":"1-1-15","value":"r","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":14},{"id":"1-1-16","value":"ô","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":15},{"id":"1-1-17","value":"l","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":16},{"id":"1-1-18","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":17},{"id":"1-1-19","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":18},{"id":"1-1-20","value":"d","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":19},{"id":"1-1-21","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":20},{"id":"1-1-22","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":21},{"id":"1-1-23","value":"q","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":22},{"id":"1-1-24","value":"u","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":23},{"id":"1-1-25","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":24},{"id":"1-1-26","value":"s","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":25},{"id":"1-1-27","value":"t","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":26},{"id":"1-1-28","value":"i","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":27},{"id":"1-1-29","value":"o","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":28},{"id":"1-1-30","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":29},{"id":"1-2-31","value":"J","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":30},{"id":"1-2-32","value":"'","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":31},{"id":"1-2-33","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":32},{"id":"1-2-34","value":"u","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":33},{"id":"1-2-35","value":"r","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":34},{"id":"1-2-36","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":35},{"id":"1-2-37","value":"i","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":36},{"id":"1-2-38","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":37},{"id":"1-2-39","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":38},{"id":"1-2-40","value":"p","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":39},{"id":"1-2-41","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":40},{"id":"1-2-42","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":41},{"id":"1-2-43","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":42},{"id":"1-2-44","value":"p","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":43},{"id":"1-2-45","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":44},{"id":"1-2-46","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":45},{"id":"1-2-47","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":46},{"id":"1-2-48","value":"é","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":47},{"id":"1-2-49","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":48},{"id":"1-2-50","value":"d","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":49},{"id":"1-2-51","value":"e","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":50},{"id":"1-2-52","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":51},{"id":"1-2-53","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":52},{"id":"1-2-54","value":"m","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":53},{"id":"1-2-55","value":"o","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":54},{"id":"1-2-56","value":"i","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":55},{"id":"1-2-57","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":56},{"id":"2-3-58","value":"A","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":57},{"id":"2-3-59","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":58},{"id":"2-3-60","value":"t","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":59},{"id":"2-3-61","value":"e","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":60},{"id":"2-3-62","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":61},{"id":"2-3-63","value":"f","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":62},{"id":"2-3-64","value":"a","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":63},{"id":"2-3-65","value":"i","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":64},{"id":"2-3-66","value":"r","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":65},{"id":"2-3-67","value":"e","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":66},{"id":"2-3-68","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":67},{"id":"2-3-69","value":"l","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":68},{"id":"2-3-70","value":"a","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":69},{"id":"2-3-71","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":70},{"id":"2-3-72","value":"c","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":71},{"id":"2-3-73","value":"o","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":72},{"id":"2-3-74","value":"u","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":73},{"id":"2-3-75","value":"r","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":74},{"id":"2-4-76","value":"S","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":75},{"id":"2-4-77","value":"i","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":76},{"id":"2-4-78","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":77},{"id":"2-4-79","value":"j","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":78},{"id":"2-4-80","value":"'","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":79},{"id":"2-4-81","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":80},{"id":"2-4-82","value":"v","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":81},{"id":"2-4-83","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":82},{"id":"2-4-84","value":"i","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":83},{"id":"2-4-85","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":84},{"id":"2-4-86","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":85},{"id":"2-4-87","value":"d","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":86},{"id":"2-4-88","value":"'","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":87},{"id":"2-4-89","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":88},{"id":"2-4-90","value":"u","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":89},{"id":"2-4-91","value":"t","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":90},{"id":"2-4-92","value":"r","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":91},{"id":"2-4-93","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":92},{"id":"2-4-94","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":93},{"id":"2-4-95","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":94},{"id":"2-4-96","value":"f","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":95},{"id":"2-4-97","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":96},{"id":"2-4-98","value":"m","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":97},{"id":"2-4-99","value":"m","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":98},{"id":"2-4-100","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":99},{"id":"2-4-101","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":100}]`)

const initOptimizedLyrics = JSON.parse(`[[[{"id":"1-1-1","value":"E","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":0},{"id":"1-1-2","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":1},{"id":"1-1-3","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":2},{"id":"1-1-4","value":"v","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":3},{"id":"1-1-5","value":"o","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":4},{"id":"1-1-6","value":"i","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":5},{"id":"1-1-7","value":"l","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":6},{"id":"1-1-8","value":"à","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":7},{"id":"1-1-9","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":8},{"id":"1-1-10","value":"u","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":9},{"id":"1-1-11","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":10},{"id":"1-1-12","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":11},{"id":"1-1-13","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":12},{"id":"1-1-14","value":"d","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":13},{"id":"1-1-15","value":"r","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":14},{"id":"1-1-16","value":"ô","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":15},{"id":"1-1-17","value":"l","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":16},{"id":"1-1-18","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":17},{"id":"1-1-19","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":18},{"id":"1-1-20","value":"d","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":19},{"id":"1-1-21","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":20},{"id":"1-1-22","value":" ","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":21},{"id":"1-1-23","value":"q","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":22},{"id":"1-1-24","value":"u","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":23},{"id":"1-1-25","value":"e","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":24},{"id":"1-1-26","value":"s","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":25},{"id":"1-1-27","value":"t","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":26},{"id":"1-1-28","value":"i","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":27},{"id":"1-1-29","value":"o","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":28},{"id":"1-1-30","value":"n","paragraph":1,"line":1,"isSelected":false,"mark":null,"index":29}],[{"id":"1-2-31","value":"J","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":30},{"id":"1-2-32","value":"'","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":31},{"id":"1-2-33","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":32},{"id":"1-2-34","value":"u","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":33},{"id":"1-2-35","value":"r","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":34},{"id":"1-2-36","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":35},{"id":"1-2-37","value":"i","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":36},{"id":"1-2-38","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":37},{"id":"1-2-39","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":38},{"id":"1-2-40","value":"p","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":39},{"id":"1-2-41","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":40},{"id":"1-2-42","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":41},{"id":"1-2-43","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":42},{"id":"1-2-44","value":"p","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":43},{"id":"1-2-45","value":"a","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":44},{"id":"1-2-46","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":45},{"id":"1-2-47","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":46},{"id":"1-2-48","value":"é","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":47},{"id":"1-2-49","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":48},{"id":"1-2-50","value":"d","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":49},{"id":"1-2-51","value":"e","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":50},{"id":"1-2-52","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":51},{"id":"1-2-53","value":" ","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":52},{"id":"1-2-54","value":"m","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":53},{"id":"1-2-55","value":"o","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":54},{"id":"1-2-56","value":"i","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":55},{"id":"1-2-57","value":"s","paragraph":1,"line":2,"isSelected":false,"mark":null,"index":56}]],[[{"id":"2-3-58","value":"A","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":57},{"id":"2-3-59","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":58},{"id":"2-3-60","value":"t","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":59},{"id":"2-3-61","value":"e","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":60},{"id":"2-3-62","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":61},{"id":"2-3-63","value":"f","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":62},{"id":"2-3-64","value":"a","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":63},{"id":"2-3-65","value":"i","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":64},{"id":"2-3-66","value":"r","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":65},{"id":"2-3-67","value":"e","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":66},{"id":"2-3-68","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":67},{"id":"2-3-69","value":"l","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":68},{"id":"2-3-70","value":"a","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":69},{"id":"2-3-71","value":" ","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":70},{"id":"2-3-72","value":"c","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":71},{"id":"2-3-73","value":"o","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":72},{"id":"2-3-74","value":"u","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":73},{"id":"2-3-75","value":"r","paragraph":2,"line":3,"isSelected":false,"mark":null,"index":74}],[{"id":"2-4-76","value":"S","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":75},{"id":"2-4-77","value":"i","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":76},{"id":"2-4-78","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":77},{"id":"2-4-79","value":"j","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":78},{"id":"2-4-80","value":"'","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":79},{"id":"2-4-81","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":80},{"id":"2-4-82","value":"v","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":81},{"id":"2-4-83","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":82},{"id":"2-4-84","value":"i","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":83},{"id":"2-4-85","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":84},{"id":"2-4-86","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":85},{"id":"2-4-87","value":"d","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":86},{"id":"2-4-88","value":"'","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":87},{"id":"2-4-89","value":"a","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":88},{"id":"2-4-90","value":"u","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":89},{"id":"2-4-91","value":"t","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":90},{"id":"2-4-92","value":"r","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":91},{"id":"2-4-93","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":92},{"id":"2-4-94","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":93},{"id":"2-4-95","value":" ","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":94},{"id":"2-4-96","value":"f","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":95},{"id":"2-4-97","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":96},{"id":"2-4-98","value":"m","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":97},{"id":"2-4-99","value":"m","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":98},{"id":"2-4-100","value":"e","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":99},{"id":"2-4-101","value":"s","paragraph":2,"line":4,"isSelected":false,"mark":null,"index":100}]]]`)

const initialState = {
  search: {
    query: null,
    results: [],
    selected: null,
    errors: null
  },
  source: {
    id: null,
    provider: 'YouTube'
  },
  lyrics: {
    raw: initRawLyrics,
    processed: initProcessedLyrics,
    optimized: initOptimizedLyrics,
    lastClickCoords: {
      x: null, 
      y: null
    },
    lastUpdates: [],
    scrollY: 0
  }
}

const generateRandomId = (length) => '_' + Math.random().toString(36).substr(2, length)

const extractSelectedCharsObj = (processed) => processed.filter(char => char.isSelected)
  
const expandRight = (processed) => {
  const selected = extractSelectedCharsObj(processed)
  const last = selected[selected.length - 1]
  const lastIndex = processed.indexOf(last)
  return processed.map((charObj, index) => index == lastIndex + 1 ?
    { ...charObj, isSelected: true } : { ...charObj }
  )
}

const expandLeft = (processed) => {
  const selected = extractSelectedCharsObj(processed)
  const first = selected[0]
  const firstIndex = processed.indexOf(first)
  return processed.map((charObj, index) => index == firstIndex - 1 ?
    { ...charObj, isSelected: true } : { ...charObj }
  )
}

const markSelection = (processed) => {
  const markId = generateRandomId(5)
  return processed.map(char => char.isSelected ? 
    { ...char, isSelected: false, mark: markId } : { ...char }
  )
}

const synchro = (state = initialState, action) => {
  switch (action.type) {
    case 'SOURCE_SEARCH_FETCH_DONE':
      return {
        ...state, search: {
          ...state.search,
          results: action.payload.items.filter( item => item.id.kind === "youtube#video" ),
          errors: null,
          selected: null
        }
      }     
    case 'SELECT_SEARCH_SOURCE_RESULT':
      return {
        ...state, source: {
          ...state.source,
          id: action.payload.id.videoId
        }
      } 
    case 'CHANGE_RAW_LYRICS':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          raw: action.payload,
        }
      }    
    case 'SAVE_RAW_LYRICS':
      var processed = processRawText(state.lyrics.raw)
      var optimized = optimizeProcessedText(processed)
      return {
        ...state, lyrics: {
          ...state.lyrics,
          processed,
          optimized,
        }
      }         
    case 'SELECT_LYRICS_CHAR':

      var processed = state.lyrics.processed.map(charObj => charObj.id == action.payload ?
          { ...charObj, isSelected: true } : { ...charObj, isSelected: false }
        )
    
      var optimized = optimizeProcessedText(processed) 
    
      var char = state.lyrics.processed
        .filter(charObj => charObj.id == action.payload)
        .map(charObj => ({
          paragraphIndex: charObj.paragraph - 1,
          lineIndex: charObj.lineIndexInParagraph,
          characterIndex: charObj.index,
        }))

      var selected = state.lyrics.processed
        .filter(charObj => charObj.isSelected)
        .map(charObj => ({
          paragraphIndex: charObj.paragraph - 1,
          lineIndex: charObj.lineIndexInParagraph,
          characterIndex: charObj.index,
        }))
       
      return {
        ...state, lyrics: {
          ...state.lyrics,
          processed, 
          optimized, 
          lastUpdates: [...selected, ...char]
        }
      }         
    case 'EXPAND_RIGHT_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          processed: expandRight(state.lyrics.processed)
        }
      }  
    case 'EXPAND_LEFT_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          processed: expandLeft(state.lyrics.processed)
        }
      }  
    case 'MARK_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          processed: markSelection(state.lyrics.processed)
        }
      }         
    case 'UPDATE_LAST_CLICK_POSITION':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          lastClickCoords: {
            ...action.payload,
            y: action.payload.y + state.lyrics.scrollY
          }
        }        
      }           
    case 'SCROLL_Y':
      return {
        ...state, lyrics: {
          ...state.lyrics,
          scrollY: action.payload
        }        
      }        
    default:
      return state
  }
}

export default synchro
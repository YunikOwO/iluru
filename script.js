const fermerMenu = () => {
  // Récupérer le menu
  const input = document.getElementById('menu-cb')
  input.checked = false

  const fenetreNode = document.getElementById('menu-cote')
  fenetreNode.remove()
}

const changerEtatMenu = () => {
  // Récupérer le menu
  const input = document.getElementById('menu-cb')
  const actif = input.checked

  if (actif) {
    const fenetreNode = document.createElement('div')
    fenetreNode.id = 'menu-cote'
    fenetreNode.className = 'menu-cote'
    fenetreNode.addEventListener('click', fermerMenu)
    document.body.appendChild(fenetreNode)
  } else {
    const fenetreNode = document.getElementById('menu-cote')
    fenetreNode.remove()
  }
}

const input = document.getElementById('menu-cb')
input.addEventListener('click', changerEtatMenu)

// Ajout ultérieur :
// Lorsque le menu a été déroulé et l'utilisateur rafraichit
// la page, exécuter la procédure d'ouverture pour permettre à
// l'utilisateur de clôre le menu en cliquant sur l'écran
if (input.checked) {
  changerEtatMenu()
}

// Affichage de tous les personnages
const personnages = [
  {
    nomPerso: "Burakku",
    espece: "Loup gris/Krisopal(originel)",
    sexe: "Mâle",
    age: 5130,
    portrait_p: "Sous sa forme cachée, il s’agit d’un loup gris foncé, tirant presque sur le noir, et blanc avec des touches de vert. Il possède des yeux en fente de couleur différente : son œil gauche est rouge et son œil droit est vert. Langue couleur chair (classique) - Intérieur de la bouche pareil. Crinière aspect ‘naturel’, 1m83. Sur son œil droit, autour de sa pupille, il a quatre triangles, un sur chaque diagonale. Particularité, lorsque ses deux yeux sont visibles, sa vision atteint 360°. Il est extrêmement fort et rapide. Sous son identité “Anubis”, il se bat avec une lance et une dague ou simplement avec ses poings et a des pouvoirs. Il possède également une lentille qui rend son œil gauche vert.",
    portrait_m: "Il fait assez froid en général, mais peut se montrer joueur voire cruel et sadique. Lors des combats, il cherche généralement à tuer son adversaire. De plus, c'est quelqu’un qui est avide de pouvoir, qui cherchera à le conserver. Cependant, c’est aussi quelqu’un de très intelligent, qui sait cacher son côté meurtrier, et qui a réussi grâce à divers stratagèmes à se hisser jusqu’au pouvoir, et parvient à se cacher sous diverses identités. Son plus grand but dans la vie semble d’exterminer les krisopals, et plus particulièrement Omoda. Enfin, il s’intéressera à quiconque est capable de rivaliser ou de lui tenir tête. ",
    background: "A venir",
    aime: "Le pouvoir, tuer, les adversaires qui lui tiennent tête",
    aime_p: "Omoda, les krisopals, perdre le contrôle de la situation",
    infos: "Il est le premier des cercles, dont il est l’un des deux fondateurs. Il possède plusieurs pouvoirs en tant que krisopal originel, et maîtrise la brume. Il a une force et une vitesse extraordinaires, et peut invoquer des sphères de néants qui peuvent tout détruire. Son pouvoir de krisopal fait qu’il possède d’innombrables yeux sur son corps, il faut donc trouver le bon pour espérer le tuer. Il a la possibilité de les cacher, mais dans ce cas il peut mourir de manière conventionnelle. Enfin il possède une régénération très rapide.",
    nb_img: 2
  },
  {
    nomPerso: "Omoda",
    espece: "Loup gris/Krisopal(originel)",
    sexe: "Mâle",
    age: 5130,
    portrait_p: "Sous sa forme cachée, il s’agit d’un loup gris foncé et blanc avec des touches de rouge. Il possède des yeux en fente de couleur différente : son œil gauche est rouge et son œil droit est bleu. Langue couleur chair (classique) - Intérieur de la bouche pareil. Crinière aspect ‘naturel’ en général mais il a une mèche qui couvre son œil droit. Sur ce même œil, autour de sa pupille, il a quatre symboles en forme de triangle. Particularité, lorsque ses deux yeux sont visibles, sa vision atteint 360°. Il est extrêmement fort et rapide. Il se bat avec un sabre et a des pouvoirs. 1m80.",
    portrait_m: "C’est un personnage extrêmement froid, qui n’hésite pas à prendre les décisions les plus radicales pour le bien du groupe. C’est également quelqu’un de très intelligent. Il est très difficile à cerner et n’est souvent pas compris. Bien qu’il se soucie de ses amis, il n’hésite pas à les pousser à bout, ce qui renforce son côté sans cœur. Même en combat, il est très difficile de savoir à quoi il pense. Il tue ses ennemis sans hésitation. Malgré tout, il n’apprécie pas pour autant de tuer autant de personnes. Au vu de son âge, il ne se soucie plus vraiment de mourir et souhaite juste accomplir son but. La personne en qui il a le plus confiance est Lei.",
    background: " Omoda est un krisopal originel, il est l’un des deux premiers existant, par conséquent il est extrêmement vieux. Il est né en même temps que son espèce, il y a 1254 ans. Au début, tout allait bien entre lui et Burakku. Mais au fur-et-à mesure du temps, lorsqu’ils fondèrent les cercles, en accord avec le roi de l’époque afin d’agir comme une balance avec le pouvoir dans l’ombre, des tensions entre eux commencèrent à apparaître. Finalement, ils se séparèrent et Omoda fonda le groupe des Chasseurs avec ceux qui le suivirent. Aujourd’hui, son but est toujours de détrôner Burakku et il s'entraîne pour cela.",
    aime: "Son groupe, le calme, l’organisation",
    aime_p: "Burakku, qu’on lui désobéisse",
    infos: "Il est le chef d’un groupe d’élite opposé au roi actuel, et est également le deuxième des cercles, dont il est l’un des deux fondateurs. Il possède plusieurs pouvoirs en tant que krisopal originel, et maîtrise le feu. Il a une force et une vitesse extraordinaires, et peut invoquer des fils de feu et des projectiles enflammés, en plus d’avoir un bouclier. Son pouvoir de krisopal fait qu’il possède un deuxième oeil sur son épée, qui fait donc partie de son corps, ce qui veut dire qu’il faut transpercer les deux yeux pour le tuer. Enfin il possède une régénération très rapide.",
    nb_img: 1
  },
  {
    nomPerso: "Ambiachi",
    espece: "Dragon/Krisopal(alpha)",
    sexe: "Mâle",
    age: 1026,
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
  {
    nomPerso: "Lei",
    espece: "Panthère des neiges/Krisopal(alpha) ",
    sexe: "Mâle",
    age: "Inconnu",
    portrait_p: "Sous sa forme panthère des neiges, il est blanc avec des taches noires et a aussi des reflets bleutés. Son œil droit est violet et son œil gauche bleu clair. Langue couleur chair (classique) - Intérieur de la bouche pareil. Crinière aspect ‘naturel’. Il est très musclé et ses coups peuvent être monstrueux. En frappant, il peut également créer des ondes. 1m74. En plus d’être très fort, il est également très musclé. Sous sa forme krisopal, il est recouvert de glace et possède plusieurs têtes. Se bat sans aucune armes et utilise aussi des pouvoirs",
    portrait_m: "C’est quelqu’un qui est très sûr de lui. Ce qu’il aime, c’est se battre contre des adversaires puissants, et aime le combat en général. Il sait qu’il est puissant et n’hésite pas à s’imposer quand il veut faire comprendre que quelque chose ne lui plait pas. Il n’aime pas perdre mais se fiche aussi de gagner, il souhaite juste se battre et profiter de la vie comme lui l’entend. Il peut aussi parfois se montrer menaçant. Il est assez proche d’Omoda, qui a une grande confiance en lui.",
    background: "Lei est né il y a de cela 2964 ans.",
    aime: "Les adverses puissants, se battre, voyager, s'entraîner",
    aime_p: "Perdre, les gens faibles",
    infos: "Il a une force inimaginable, peut régénérer ses blessures en un clin d'œil et peut détruire un rocher avec ses poings. Il peut provoquer des ondes de chocs en frappant le vide, et maîtrise la glace. Efin c'est le quatrième des cercles.",
    nb_img: 0
  },
  {
    nomPerso: "Ayko",
    espece: "Loup gris",
    sexe: "Femelle",
    age: 24,
    portrait_p: "Elle est plutôt mince, agile et incroyablement rapide. Elle a une fourrure entièrement noire touffue et des yeux d’un bleu profond en fentes.  Langue couleur chair (classique) - Intérieur de la bouche pareil. Crinière aspect ‘naturel’. Elle n’est pas spécialement forte mais personne ne peut rivaliser avec sa vitesse. Assez peu musclée. 1m75. Elle se bat surtout avec des couteaux mais peut aussi se battre sans armes. Elle peut se régénérer même si c’est assez lent comparé aux autres membres des cercles. Avant, son gros handicap était son endurance mais ce n’est plus le cas depuis son entraînement.",
    portrait_m: "Malgré son air menaçant et froid, elle est assez sensible et peut parfois hésiter à tuer. Elle se questionne aussi beaucoup sur ses actions et a de temps en temps besoin d'être seule. Étant donné qu’elle est extrêmement puissante et qu’elle dirige un groupe, elle essaie de ne pas laisser transparaître ses émotions en public. Suite à son entraînement, elle a appris à ne pas ressentir la douleur et peut combattre sans problème même avec un bras ou une jambe cassé. Du fait de son passé, c'est quelqu’un d’assez renfermée qui ne se confie pas facilement. Malgré tout, elle peut combattre férocement et se montrer déterminée.",
    background: "Ayko a été abandonnée très jeune car ses parents ont été tués par un assassin et a toujours dû se débrouiller seule. Depuis son plus jeune âge, elle tue pour survivre. A ses 14 ans elle est entrée dans les cercles avant d’aller suivre un entraînement de deux ans avec Lei dans des conditions extrêmes afin de devenir plus forte. Elle a failli mourir de nombreuses fois mais est devenue au final absolument surpuissante, sans doute plus puissante que n’importe qui, en dehors des krisopals alphas. Elle vit des missions qu’on lui confie et les a toujours menées à bien.",
    aime: "le café, tuer ceux qui le méritent",
    aime_p: "tuer sans raison, paraître faible, Lei (de temps en temps), Sol",
    infos: "Elle est considérée comme l’une des seules à pouvoir rivaliser avec les krisopals alphas. C’est une assassin faisant partie des cercles (les meilleurs assassins au monde) dont elle est 5ème sur 12. Elle est très proche de Kareha. Elle est considérée comme l’être le plus puissant au monde. (exception faite des krisopals alphas.). Elle est extrêmement rapide, a une poigne surpuissante, et ne ressent pas la douleur",
    nb_img: 3
  },
  {
    nomPerso: "Sol",
    espece: "Renard",
    sexe: "Mâle",
    age: 29,
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
  {
    nomPerso: "Hogone",
    espece: "Fennec albinos",
    sexe: "Mâle",
    age: 27,
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
  {
    nomPerso: "Kareha",
    espece: "Loup roux",
    sexe: "Mâle",
    age: 21,
    portrait_p: "Pelage brun roux (en référence aux feuilles mortes) et blanc un peut terne pour pas ressortir face au brun roux - Pelage blanc de son torse jusqu’au bas de sa machoire, le reste est brun roux - Langue couleur classique - Intérieur de la bouche pareil - Yeux orange plus clair que le pelage, un peu brillant, en fentes - Griffes blanc-gris. Plutôt maigre : 1m76 ; museau épais et pas très long; Sourit la plupart du temps. (sourire calme); Crinière aspect 'naturel'. Il est extrêmement précis dans ses mouvements et est étonnement fort. Il se bat principalement sans armes mais a quand même un couteau et un pistolet.",
    portrait_m: "C’est quelqu’un d’assez imprévisible, difficile à cerner : il est généralement souriant et jovial mais peut aussi tuer froidement sans la moindre hésitation voire paraître parfois menaçant. Il est donc assez difficile de savoir à quoi il pense. Il n’hésite pas à taquiner ses amis s'il sait que ça peut leur faire du bien. Il peut aussi se montrer assez joueur. Pour résumer, il peut aussi bien être un tueur sans pitié que quelqu’un de très gentil et joyeux. Un côté “élégant” dans ses manières du fait  de ses origines. Il n’apprécie pas vraiment sa famille, à part son frère, ni même la haute société en général.",
    background: "Il est issu d’une famille très aisée, de la basse bourgeoisie. La vie de la bourgeoisie ne l'a jamais vraiment intéressé. C’est à ses 8 ans qu’il a compris qu’il voulait être un assassin. En effet, alors qu’il se promenait seul dans la forêt, il a failli se faire tuer par une personne, mais il s’est fait sauver par Ayko, alors âgée de 11 ans. Depuis il n’a cessé d’être fasciné par le monde de l’assassinat et par celle qui l’a sauvée. Il n'a aucun rapport avec sa famille car ils se rejettent mutuellement. Il est parti de la maison , un manoir situé en dehors des villes, ce qui est peu commun, après la mort de son père à 17ans puis est entré dans le monde de l’assassinat. Il est ami avec plusieurs autres assassins, dont Ayko. Il a un grand frère qu’il n’a pas revu depuis longtemps. Il est entré dans les cercles peu de temps après être parti.",
    aime: "ses amis proches, tuer, les cookies, les personnes souriantes.",
    aime_p: "ses ennemis, sa famille, ses origines, ceux qui ne respectent pas les faibles.",
    infos: "C’est un assassin faisant partie des cercles (les meilleurs assassins au monde) depuis très longtemps dont il est 8ème sur 12. Bien qu’il ne soit que 8ème, il est plus fort que Hogone (7ème) et est presque aussi fort que Sol (6ème). Il n’a pas d’autre métier. Il est très ami avec Ayko, et font pas mal de missions en équipe. Il est extrêmement fort, précis et résiste à la plupart des poisons..Enfin il possède une régénération plutôt rapide.",
    nb_img: 5
  },
  {
    nomPerso: "Asuta",
    espece: "Tigre",
    sexe: "Mâle",
    age: 28,
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
  {
    nomPerso: "Ogura",
    espece: "Varan",
    sexe: "Mâle",
    age: 19,
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
  {
    nomPerso: "Rizaka",
    espece: "Hyène",
    sexe: "Femelle",
    age: 23,
    portrait_p: "Il s’agit d’une hyène au pelage beige clair avec des taches dorées. Sa queue elle, est orange avec des tâches foncées. Elle a des yeux violets et des cheveux oranges sur le haut et tirant progressivement vers le violet. Elle est assez grande (1m74) et est vive et rapide. Elle a également une grande agilité et a un don pour esquiver les coups. ",
    portrait_m: "C’est quelqu’un qui peut paraître en apparence calme mais qui est en réalité très déterminée et têtue, voire même parfois un peu rebelle. C’est aussi une personne très intelligente qui n’hésite pas à reprendre même ses supérieurs s’ils commettent une erreur. Elle se bat de manière assez froide. Sa puissance fait qu’elle est assez haut gradée. De plus, elle est parfois assez blagueuse. C’est également une grande amie de Kareha.",
    background: "",
    aime: "les puissant adversaires, l’organisation",
    aime_p: "La défaite, Le roi",
    infos: "Elle fait partie des cercles dont elle est 11ème sur 12. Cela dit, son véritable niveau de puissance reste inconnu et elle est en réalité bien meilleure que certains cercles au-dessus. Également, elle est en fait infiltrée parmi l’armée du roi et soutient Omoda, cela dit seul Kareha est au courant et est le seul à communiquer avec elle. ",
    nb_img: 2
  },
  {
    nomPerso: "Jeil",
    espece: "Hybride loup-cerf/Krisopal (oméga)",
    sexe: "Mâle",
    age: 18,
    portrait_p: "Il possède deux formes. La première est celle qu’il utilise la plupart du temps pour pouvoir se fondre dans la masse. Il s’agit d’un hybride entre un loup et un cerf, il possède donc des bois, qui sont noirs avec des touches de blanc, et la forme de son visage n’est ni vraiment celle d’un loup ni celle d’un cerf. Il n'a pas un poil très long Sa deuxième forme est sa forme krisopal et est sa réelle forme, il est recouvert d’écailles et de métal, et conserve ses bois. Il est assez petit (1m70) et est aveugle, ses yeux sont bleus transparents. Il n’est pas musclé et ne se bat pas extrêmement bien comparé aux autres cercles. Lorsqu’il utilise ses pouvoirs, ses yeux deviennent rouges et ses bois blanchissent. Sous sa forme krisopal, son troisième oeil est rouge.",
    portrait_m: "C’est quelqu’un qui est assez timide et réservé du fait de son passé et est très proche de Ogura qu’il considère comme son frère. Avec les gens qu’il ne connaît pas, il est assez méfiant mais aussi curieux. C'est quelqu’un de très sérieux dans ce qu’il fait, mais il n’aime pas forcément se battre et agit plus comme un support auprès des autres notamment grâce à ses pouvoirs qui s’y prêtent bien. Cependant il s’agit en soit d’un des plus puissants krisopal oméga, bien que lui-même ne le pense pas. Il possède un grand potentiel du fait de son pouvoir mais ne se bat pas très bien. Il est considéré comme un être en marge, même parmi les Krisopals. Il est très intelligent et comprend facilement les choses. Enfin, ça ne le dérange pas de rester longtemps seul. Il est très intéressé par Omoda.",
    background: "Jeil a grandi dans un petit village. Ses parents sont tous les deux des krisopals, tout comme lui. Il a été abandonné à ses 5 ans car ils n’étaient pas capables de l’élever, du fait qu’ils étaient traqués. Il a réussi à survivre seul pendant 1 an mais s’est un jour fait agresser en révélant par erreur sa forme krisopal. Alors qu’il était acculé, Ogura est arrivé et l’a sauvé. Depuis, il est devenu son frère adoptif et ils ne se séparent plus. A 16 ans, il est entré dans les cercles en même temps qu’Ogura.",
    aime: "Ogura, la solitude, rendre service",
    aime_p: "Qu’on le prenne en pitié",
    infos: "C’est un assassin faisant partie des cercles (les meilleurs assassins au monde) depuis peu longtemps et dont il est 12ème sur 12. Ses pouvoirs lui permettent de percevoir ce qui l’entoure, et sous sa forme krisopal, si il se concentre, il peut même réussir à anticiper les mouvements de son adversaire. En soit, face à un membre des cercles,  il ne fait pas le poid, bien qu’il se défende,  mais il est malgré tout capable de rivaliser avec d’autres personnes.",
    nb_img: 1
  },
  {
    nomPerso: "Oyata",
    espece: "Loup roux",
    sexe: "Mâle",
    age: "24",
    portrait_p: "",
    portrait_m: "",
    background: "",
    aime: "",
    aime_p: "",
    infos: "",
    nb_img: 0
  },
];

let nomPerso = [];
let espece = [];
let sexe = [];
let age = [];
let portrait_p = [];
let portrait_m = [];
let background = [];
let aime = [];
let aime_p = [];
let infos = [];
let i = [];
let nb_img = [];
let structure = "";
let accueil = "";



function affichage(data) {
  //sélection élément du DOM
  const positionElement = document.querySelector('.containers');
  console.log(positionElement);

  //La boucle pour afficher tous les objets dans la page web
  for (i = 0; i < personnages.length; i++) {
    //mettre les données dans la variable
    personnages.forEach((element, i) => {
      nomPerso[i] = element.nomPerso;
      espece[i] = element.espece;
      sexe[i] = element.sexe;
      age[i] = element.age;
      portrait_p[i] = element.portrait_p;
      portrait_m[i] = element.portrait_m;
      background[i] = element.background;
      aime[i] = element.aime;
      aime_p[i] = element.aime_p;
      infos[i] = element.infos;
    });

    //afficher les objets 
    structure = structure + `
    <div class="page-perso">
      <div class="perso">
      <h3>
        <ul id="page-perso">
          <li>Nom : <span onclick="affichage_perso(personnages)">${nomPerso[i]}</span></li>
          <li>Espèce : <span>${espece[i]}</span></li>
          <li>Sexe : <span>${sexe[i]}</span></li>
          <li>Âge : <span>${age[i]} ans</span></li>
        </ul>
      </h3>
      </div>
    </div>
    `;
    //injection
    positionElement.innerHTML = structure
  }

}
affichage(personnages);



function affichage_perso(data) {
  //sélection élément du DOM
  const positionElement = document.querySelector('.container');
  document.getElementById("cacher").style.display = "none";
  document.getElementById("accueil-perso").style.display = "none";
  i = 0


  var url = document.location.search;
  console.log(url);
  url = url.substring(1);
  for (var position = 0; position < personnages.length; position++) {
    let y = personnages[position].nomPerso.toLowerCase();
    if (y == url) {
      i = position;
    }
  }

  console.log(i);
  //La boucle pour afficher tous les objets dans la page web
  personnages.forEach((element, i) => {
    nomPerso[i] = element.nomPerso;
    espece[i] = element.espece;
    sexe[i] = element.sexe;
    age[i] = element.age;
    portrait_p[i] = element.portrait_p;
    portrait_m[i] = element.portrait_m;
    background[i] = element.background;
    aime[i] = element.aime;
    aime_p[i] = element.aime_p;
    infos[i] = element.infos;
    nb_img[i] = element.nb_img;
  });
  //afficher les objets 

  var injectionImages = "";
  for (let n = 1; n <= nb_img[i]; n++) {
    injectionImages += `<img src="Images/${nomPerso[i]}${n}.png" style="display:none;" id="${nomPerso[i]}${n}" alt="Illustration à venir" />`
  }

  structure = `
   <h1>${nomPerso[i]}</h1>
   <h2>Voici le résumé détaillé de ${nomPerso[i]}</h2>
   <div class="page-personnages">
     <div class="perso">
  
     <h3>
       <ul>
         <li>Nom : <span>${nomPerso[i]}</span></li>
         <li>Espèce : <span>${espece[i]}</span></li>
         <li>Sexe : <span>${sexe[i]}</span></li>
         <li>Âge : <span>${age[i]} ans</span></li>
         <br />
         <li>Portrait physique : <span>${portrait_p[i]}</span></li>
         <br />
         <li>Portrait moral : <span>${portrait_m[i]}</span></li>
         <br />
         <li>Background : <span>${background[i]}</span></li>
         <br />
         <li>Aime : <span>${aime[i]}</span></li>
         <li>Aime pas : <span>${aime_p[i]}</span></li>
         <br />
         <li>Infos complémentaire : <span>${infos[i]}</span></li>
         <br />
         <li>Image : </li>
         ${injectionImages}
         </ul>
     </h3>

     <canvas id="canvas" width=680 height=680>Illustrations à venir</canvas>

    </div>
   </div>
   `;
  //injection
  positionElement.innerHTML = structure

  //////// ID images ////////

  function updateImage(numImage) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
  var img = new Image();
  img.src = `Images/${nomPerso[i]}${numImage}.png`;

  img.onload = () => {
    var img = document.getElementById(`${nomPerso[i]}${numImage}`);
    var ratio = img.height * 680 / img.width;
    canvas.height = ratio;
    ctx.drawImage(img, 10, 10, 680, ratio);
  }

}
let numImage = 1;
updateImage(numImage);

setInterval(() => {
  numImage += 1;
  if (numImage > nb_img[i]) numImage = 1;
  updateImage(numImage);
}, 4000);
}

let sub = document.getElementById("sub");
if (document.location.search == '') {
  let x = 0;
}
else {
  sub.addEventListener("click", (affichage_perso(personnages)));
}







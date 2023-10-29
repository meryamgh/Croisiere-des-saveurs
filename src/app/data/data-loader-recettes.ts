import {Recette} from "../models/recette.model";

export const recetteData = [

  //ALGERIE
  {
    nom: "chorba",
    pays: "algerie",
    contenu: "soupe traditionnelle aux légumes et viande",
    categorie: "entrée",
    temp_preparation: 45,
    ingredients: "500g de semoule, 1 courgette, 2 carottes, 1 poivron, 1 oignon, 500g de viande d'agneau, " +
      "2 cuillères à soupe d'huile d'olive, 1 cuillère à café de cumin, " +
      "1 cuillère à café de coriandre en poudre, sel, poivre",
    difficulte: "facile",
    calorie: 350,
    preparation: [
      "Épluchez et coupez tous les légumes en petits morceaux.",
      "Faites revenir la viande, les oignons, l'ail, le céleri, les carottes, les pommes de terre, les courgettes, les tomates et les pois chiches dans de l'huile d'olive.",
      "Ajoutez les épices et laissez mijoter.",
      "Ajoutez de l'eau et laissez cuire jusqu'à ce que la viande et les légumes soient tendres.",
      "Ajoutez les vermicelles et faites cuire jusqu'à ce qu'elles soient tendres.",
      "Saupoudrez de persil frais haché avant de servir."
    ]
  },
  {
    nom: "couscous",
    pays: "algerie",
    contenu: "délicieux plat traditionnel algérien",
    categorie: "plat",
    temp_preparation: 60,
    ingredients: "500g de semoule, légumes variés (carottes, courgettes, poivrons), viande au choix (agneau, poulet, merguez), épices (cumin, coriandre, sel, poivre)",
    difficulte: "facile",
    calorie: 400,
    preparation: [
      "Préparez la semoule selon les indications sur l'emballage.",
      "Faites cuire la viande et les légumes à la vapeur ou dans un bouillon parfumé aux épices.",
      "Disposez la semoule dans un grand plat, placez la viande et les légumes dessus.",
      "Servez chaud, accompagné du bouillon et d'harissa pour ceux qui aiment épicé."
    ]
  }
  ,
  {
    nom: "tajine",
    pays: "algerie",
    contenu: "savoureux plat cuit lentement",
    categorie: "plat",
    temp_preparation: 90,
    ingredients: "Viande au choix (agneau, poulet, bœuf), légumes variés (oignons, carottes, pommes de terre), épices (cumin, coriandre, paprika, cannelle), huile d'olive, citron confit, olives",
    difficulte: "moyen",
    calorie: 450,
    preparation: [
      "Faites chauffer l'huile d'olive dans un tajine ou une cocotte.",
      "Faites revenir la viande et les oignons hachés jusqu'à ce qu'ils soient dorés.",
      "Ajoutez les épices, les légumes coupés en morceaux, les olives et le citron confit.",
      "Couvrez et laissez mijoter à feu doux pendant environ 1h30 ou jusqu'à ce que la viande et les légumes soient tendres.",
      "Servez chaud, accompagné de pain ou de couscous."
    ]
  }
  ,
  {
    nom: "crêpe mille trous",
    pays: "algerie",
    contenu: "délicates crêpes avec des trous",
    categorie: "dessert",
    temp_preparation: 45,
    ingredients: "250g de farine, 1 cuillère à café de levure chimique, 1/2 cuillère à café de sel, 1 cuillère à soupe de sucre, 1 cuillère à soupe d'eau de fleur d'oranger, 1 cuillère à soupe de levure boulangère, Eau tiède",
    difficulte: "facile",
    calorie: 300,
    preparation: [
      "Dans un bol, mélangez la farine, la levure chimique, le sel et le sucre.",
      "Ajoutez l'eau de fleur d'oranger et la levure boulangère délayée dans un peu d'eau tiède. Mélangez bien.",
      "Ajoutez progressivement de l'eau tiède en remuant jusqu'à obtenir une pâte liquide et homogène.",
      "Couvrez le bol et laissez reposer la pâte pendant environ 30 minutes à 1 heure.",
      "Dans une poêle antiadhésive, versez une petite louche de pâte et laissez cuire à feu doux jusqu'à ce que des petits trous se forment à la surface de la crêpe.",
      "Retournez la crêpe et laissez cuire brièvement de l'autre côté.",
      "Répétez l'opération avec le reste de la pâte.",
      "Servez chaud, saupoudré de sucre glace ou de miel, selon votre préférence."
    ]
  }

  //FRANCE
  ,
  {
    nom: "macaron",
    pays: "france",
    contenu: "douceurs sucrées",
    categorie: "dessert",
    temp_preparation: 120,
    ingredients: "125g de poudre d'amandes, 200g de sucre glace, 3 blancs d'œufs, 25g de sucre en poudre, Colorant alimentaire (facultatif)",
    difficulte: "moyen",
    calorie: 200,
    preparation: [
      "Préchauffez le four à 150°C (thermostat 5).",
      "Mixez finement la poudre d'amandes et le sucre glace ensemble. Tamisez le mélange dans un grand bol pour obtenir une poudre fine.",
      "Montez les blancs d'œufs en neige. Quand ils commencent à être mousseux, ajoutez le sucre en poudre en plusieurs fois tout en continuant de battre, jusqu'à obtenir une meringue lisse et brillante.",
      "Incorporez délicatement le mélange de poudre d'amandes et de sucre glace à la meringue. Ajoutez éventuellement le colorant alimentaire à ce stade.",
      "Remplissez une poche à douille munie d'une douille lisse avec la préparation. Sur une plaque de cuisson recouverte de papier sulfurisé, dressez des petits tas de pâte espacés les uns des autres.",
      "Laissez les macarons reposer à température ambiante pendant environ 30 minutes. Ils doivent former une croûte à la surface.",
      "Enfournez les macarons dans le four préchauffé pendant environ 12 minutes.",
      "Laissez les macarons refroidir complètement sur la plaque avant de les décoller.",
      "Pour garnir les macarons, appliquez une petite quantité de ganache, de crème au beurre ou de confiture entre deux coques de macaron.",
      "Laissez reposer les macarons au réfrigérateur pendant au moins 24 heures avant de les déguster pour qu'ils développent leurs saveurs."
    ]
  }
  ,
  {
    nom: "PariBrest",
    pays: "france",
    contenu: "pâtisserie délicieuse",
    categorie: "dessert",
    temp_preparation: 90,
    ingredients: "Pour la pâte à choux : 125ml d'eau, 60g de beurre, 75g de farine, 3 œufs\nPour la crème pâtissière : 500ml de lait, 4 jaunes d'œufs, 100g de sucre, 40g de maïzena, 1 cuillère à café d'extrait de vanille\nSucre glace pour saupoudrer",
    difficulte: "moyen",
    calorie: 350,
    preparation: [
      "Préparez la pâte à choux : Dans une casserole, portez l'eau et le beurre à ébullition. Retirez du feu et ajoutez la farine en une seule fois. Mélangez énergiquement jusqu'à obtenir une pâte lisse qui se détache des parois de la casserole.",
      "Incorporez les œufs un par un, en mélangeant bien après chaque ajout, jusqu'à ce que la pâte soit lisse et homogène.",
      "Préchauffez le four à 180°C. Sur une plaque de cuisson recouverte de papier sulfurisé, formez un cercle de pâte à choux d'environ 25 cm de diamètre. Enfournez et faites cuire pendant 25-30 minutes ou jusqu'à ce que la pâte soit dorée et croustillante. Laissez refroidir complètement.",
      "Préparez la crème pâtissière : Dans une casserole, portez le lait à ébullition. Pendant ce temps, fouettez les jaunes d'œufs, le sucre et la maïzena dans un bol jusqu'à obtenir un mélange homogène.",
      "Versez le lait chaud sur le mélange d'œufs en fouettant constamment. Reversez le tout dans la casserole et faites chauffer à feu doux en remuant continuellement jusqu'à épaississement de la crème. Retirez du feu, ajoutez l'extrait de vanille et laissez refroidir.",
      "Montez le Paris-Brest : Coupez délicatement le cercle de pâte à choux en deux horizontalement. Garnissez la partie inférieure de crème pâtissière généreusement.",
      "Replacez la partie supérieure de la pâte sur la crème. Saupoudrez de sucre glace avant de servir.",
      "Servez le Paris-Brest coupé en parts généreuses et savourez cette délicieuse pâtisserie française !"
    ]
  }
  ,
  {
    nom: "Quiche Lorraine",
    pays: "France",
    contenu: "tarte salée aux lardons et fromage",
    categorie: "plat",
    temp_preparation: 75,
    ingredients: "1 pâte brisée, 200g de lardons, 200ml de crème fraîche, 3 œufs, sel, poivre, noix de muscade",
    difficulte: "facile",
    calorie: 400,
    preparation: [
      "Préchauffez le four à 180°C (thermostat 6).",
      "Foncez un moule à tarte avec la pâte brisée et piquez le fond à l'aide d'une fourchette.",
      "Faites revenir les lardons dans une poêle à feu moyen jusqu'à ce qu'ils soient dorés. Égouttez-les sur du papier absorbant.",
      "Dans un bol, battez les œufs en omelette. Ajoutez la crème fraîche, le sel, le poivre et une pincée de noix de muscade râpée. Mélangez bien.",
      "Répartissez les lardons sur le fond de tarte précuit. Versez la préparation à base d'œufs et de crème par-dessus.",
      "Enfournez la quiche et faites cuire pendant environ 30 à 35 minutes ou jusqu'à ce qu'elle soit dorée et que la garniture soit prise.",
      "Sortez la quiche du four et laissez-la tiédir quelques minutes avant de la découper en parts.",
      "Servez la Quiche Lorraine chaude ou tiède, accompagnée d'une salade verte pour un repas savoureux et équilibré."
    ]
  }
  ,
  {
    nom: "Tartiflette",
    pays: "France",
    contenu: "plat de pommes de terre, lardons et fromage",
    categorie: "plat",
    temp_preparation: 90,
    ingredients: "1 kg de pommes de terre, 200g de lardons, 1 reblochon, 2 oignons, 2 cuillères à soupe d'huile d'olive, sel, poivre",
    difficulte: "moyen",
    calorie: 500,
    preparation: [
      "Préchauffez le four à 180°C (thermostat 6).",
      "Épluchez et coupez les pommes de terre en rondelles épaisses.",
      "Faites bouillir les pommes de terre dans de l'eau salée pendant environ 10 minutes, puis égouttez-les.",
      "Dans une poêle, faites revenir les lardons avec les oignons émincés dans l'huile d'olive jusqu'à ce qu'ils soient dorés.",
      "Beurrez un plat à gratin. Disposez une première couche de pommes de terre, puis une couche de lardons et d'oignons. Répétez l'opération jusqu'à épuisement des ingrédients.",
      "Coupez le reblochon en deux dans le sens de l'épaisseur. Posez les deux moitiés, croûte vers le bas, sur le dessus du plat.",
      "Enfournez la tartiflette et faites cuire pendant environ 25 à 30 minutes, jusqu'à ce que le reblochon soit bien fondu et doré.",
      "Servez la tartiflette bien chaude, accompagnée d'une salade verte pour un repas savoureux et réconfortant."
    ]
  }
  ,

  //USA
  {
    nom: "Hamburger",
    pays: "USA",
    contenu: "Classique burger américain",
    categorie: "plat",
    temp_preparation: 30,
    ingredients: "Pain à hamburger, steak haché, fromage, laitue, tomate, oignon, ketchup, moutarde",
    difficulte: "facile",
    calorie: 500,
    preparation: [
      "Préchauffez votre grill ou votre poêle à feu moyen.",
      "Divisez le steak haché en portions égales et façonnez-les en galettes de la taille des pains à hamburger.",
      "Faites cuire les galettes de steak haché sur le grill ou dans la poêle pendant environ 3-4 minutes de chaque côté, ou jusqu'à ce qu'elles atteignent la cuisson désirée.",
      "Pendant ce temps, faites griller les pains à hamburger sur le grill ou dans un grille-pain jusqu'à ce qu'ils soient dorés.",
      "Coupez la laitue, la tomate et l'oignon en tranches fines.",
      "Assemblez les hamburgers : placez une galette de steak haché sur le bas du pain, ajoutez une tranche de fromage, de la laitue, des tranches de tomate et d'oignon. Ajoutez du ketchup et de la moutarde selon votre goût. Recouvrez avec le haut du pain à hamburger.",
      "Servez les hamburgers chauds, accompagnés de frites ou de salade pour un repas classique à l'américaine."
    ]
  }
  ,
  {
    nom: "Hamburger",
    pays: "USA",
    contenu: "Classique burger américain",
    categorie: "plat",
    temp_preparation: 30,
    ingredients: "Pain à hamburger, steak haché, fromage, laitue, tomate, oignon, ketchup, moutarde",
    difficulte: "facile",
    calorie: 500,
    preparation: [
      "Préchauffez votre grill ou votre poêle à feu moyen.",
      "Divisez le steak haché en portions égales et façonnez-les en galettes de la taille des pains à hamburger.",
      "Faites cuire les galettes de steak haché sur le grill ou dans la poêle pendant environ 3-4 minutes de chaque côté, ou jusqu'à ce qu'elles atteignent la cuisson désirée.",
      "Pendant ce temps, faites griller les pains à hamburger sur le grill ou dans un grille-pain jusqu'à ce qu'ils soient dorés.",
      "Coupez la laitue, la tomate et l'oignon en tranches fines.",
      "Assemblez les hamburgers : placez une galette de steak haché sur le bas du pain, ajoutez une tranche de fromage, de la laitue, des tranches de tomate et d'oignon. Ajoutez du ketchup et de la moutarde selon votre goût. Recouvrez avec le haut du pain à hamburger.",
      "Servez les hamburgers chauds, accompagnés de frites ou de salade pour un repas classique à l'américaine."
    ]
  }
  ,
  {
    nom: "Cheesecake",
    pays: "USA",
    contenu: "Dessert crémeux au fromage à la crème",
    categorie: "dessert",
    temp_preparation: 120,
    ingredients: "Biscuits (type biscuits Graham), fromage à la crème, sucre, œufs, extrait de vanille",
    difficulte: "moyen",
    calorie: 450,
    preparation: [
      "Préchauffez votre four à 160°C (325°F).",
      "Réduisez les biscuits en miettes en les plaçant dans un sac en plastique et en les écrasant avec un rouleau à pâtisserie.",
      "Faites fondre un peu de beurre et mélangez-le avec les miettes de biscuits jusqu'à obtenir une consistance sableuse.",
      "Pressez ce mélange de biscuits au fond d'un moule à charnière pour former la croûte du cheesecake. Placez le moule au réfrigérateur pendant que vous préparez la garniture.",
      "Dans un grand bol, battez le fromage à la crème avec le sucre jusqu'à obtenir un mélange crémeux.",
      "Ajoutez les œufs un par un, en battant bien après chaque ajout. Ajoutez l'extrait de vanille et mélangez.",
      "Versez cette garniture sur la croûte de biscuits dans le moule.",
      "Faites cuire le cheesecake au four préchauffé pendant environ 1 heure, ou jusqu'à ce que le centre soit presque pris.",
      "Éteignez le four et laissez le cheesecake refroidir dans le four avec la porte entre-ouverte pendant environ 1 heure.",
      "Sortez le cheesecake du four et laissez-le refroidir complètement à température ambiante. Ensuite, placez-le au réfrigérateur pendant au moins 4 heures ou toute la nuit.",
      "Servez le cheesecake froid, éventuellement garni de fruits frais, de coulis ou de chantilly, selon votre préférence."
    ]
  }
  ,
  {
    nom: "Clam Chowder",
    pays: "USA",
    contenu: "Soupe crémeuse aux palourdes",
    categorie: "entrée",
    temp_preparation: 45,
    ingredients: "Palourdes, pommes de terre, oignon, crème, bacon",
    difficulte: "moyen",
    calorie: 350,
    preparation: [
      "Nettoyez les palourdes en les rinçant sous l'eau froide pour éliminer le sable.",
      "Dans une grande casserole, faites revenir les morceaux de bacon jusqu'à ce qu'ils soient croustillants. Retirez-les de la casserole et réservez-les.",
      "Dans la même casserole avec la graisse de bacon, ajoutez les oignons et faites-les revenir jusqu'à ce qu'ils soient translucides.",
      "Ajoutez les pommes de terre pelées et coupées en dés dans la casserole. Versez suffisamment d'eau pour couvrir les pommes de terre. Faites cuire jusqu'à ce que les pommes de terre soient tendres.",
      "Pendant ce temps, dans une autre casserole, faites chauffer la crème à feu doux. Ne la faites pas bouillir.",
      "Lorsque les pommes de terre sont cuites, ajoutez les palourdes dans la casserole avec les pommes de terre. Couvrez et laissez mijoter jusqu'à ce que les palourdes s'ouvrent. Jetez les palourdes qui ne s'ouvrent pas.",
      "Ajoutez le contenu de la casserole de crème dans la casserole de pommes de terre et palourdes. Mélangez bien.",
      "Assaisonnez avec du sel et du poivre selon votre goût. Laissez mijoter à feu doux pendant quelques minutes.",
      "Servez le Clam Chowder chaud, garni des morceaux de bacon réservés. Vous pouvez également ajouter des herbes fraîches hachées, comme de la ciboulette, pour la garniture."
    ]
  }
  //CHINE
  ,
  {
    nom: "Canard laqué",
    pays: "Chine",
    contenu: "Canard rôti avec une peau croustillante",
    categorie: "plat",
    temp_preparation: 120,
    ingredients: "Canard, sauce soja, miel, gingembre, échalotes",
    difficulte: "difficile",
    calorie: 600,
    preparation: [
      "Préparez le canard en le nettoyant et en enlevant l'excès de graisse. Frottez l'intérieur et l'extérieur du canard avec un mélange de sauce soja, de miel, de gingembre haché et d'échalotes hachées. Laissez mariner pendant au moins 2 heures ou toute une nuit.",
      "Préchauffez le four à une température élevée. Placez le canard sur une grille au-dessus d'un plateau pour recueillir les jus.",
      "Rôtissez le canard au four pendant environ 20 minutes à la température la plus élevée pour lui donner une belle couleur dorée.",
      "Réduisez la température du four et poursuivez la cuisson pendant environ 1 heure, en badigeonnant le canard de la marinade toutes les 15 à 20 minutes. Le canard est prêt lorsque sa peau est croustillante et dorée.",
      "Retirez le canard du four et laissez-le reposer pendant quelques minutes avant de le découper en morceaux.",
      "Servez le Canard laqué chaud avec du riz et des légumes sautés. Vous pouvez également servir des crêpes fines, de la sauce hoisin et des légumes verts pour accompagner le canard."
    ]
  }
  ,
  {
    nom: "Raviolis vapeur",
    pays: "Chine",
    contenu: "Petits raviolis cuits à la vapeur",
    categorie: "entrée",
    temp_preparation: 60,
    ingredients: "Farce à base de porc, pâte à ravioli, sauce soja",
    difficulte: "moyen",
    calorie: 350,
    preparation: [
      "Préparez la farce en mélangeant du porc haché avec des assaisonnements tels que de la sauce soja, du gingembre haché, de l'ail émincé et des oignons verts hachés.",
      "Abaissez la pâte à ravioli en fines feuilles. Placez une petite quantité de farce au centre de chaque morceau de pâte et pliez-les en deux pour former des raviolis.",
      "Placez les raviolis sur un plateau de cuisson à la vapeur et faites-les cuire à la vapeur pendant environ 15 à 20 minutes, jusqu'à ce qu'ils soient bien cuits.",
      "Pendant ce temps, préparez une sauce dip en mélangeant de la sauce soja avec du vinaigre de riz, de l'huile de sésame et des flocons de piment.",
      "Servez les raviolis vapeur chauds, accompagnés de la sauce dip et de garnitures comme des oignons verts tranchés et des graines de sésame grillées."
    ]
  }
  ,
  {
    nom: "Poulet aux noix de cajou",
    pays: "Chine",
    contenu: "Poulet sauté avec des noix de cajou croquantes",
    categorie: "plat",
    temp_preparation: 45,
    ingredients: "Poulet, noix de cajou, légumes, sauce soja",
    difficulte: "facile",
    calorie: 500,
    preparation: [
      "Coupez le poulet en morceaux et faites-le sauter dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien cuit et doré.",
      "Ajoutez les légumes de votre choix, comme des poivrons, des oignons et des carottes, et faites-les sauter avec le poulet jusqu'à ce qu'ils soient tendres mais encore croquants.",
      "Incorporez les noix de cajou dans la poêle et mélangez-les avec le poulet et les légumes.",
      "Versez la sauce soja sur le mélange et remuez bien pour enrober tous les ingrédients du mélange de saveurs.",
      "Laissez cuire pendant quelques minutes de plus, en remuant constamment, jusqu'à ce que tout soit bien chaud et que les saveurs se mélangent.",
      "Servez le poulet aux noix de cajou chaud, garni de ciboulette fraîche ou de graines de sésame, avec du riz ou des nouilles sautées."
    ]
  }
  ,
  {
    nom: "Baozi",
    pays: "Chine",
    contenu: "Pain vapeur farci de viande ou de légumes",
    categorie: "plat",
    temp_preparation: 60,
    ingredients: "Pâte à pain, farce au porc ou aux légumes",
    difficulte: "moyen",
    calorie: 400,
    preparation: [
      "Préparez la pâte à pain en mélangeant de la farine, de l'eau, du sel et de la levure. Laissez-la reposer jusqu'à ce qu'elle double de volume.",
      "Préparez la farce en mélangeant du porc haché ou des légumes finement coupés avec des assaisonnements tels que du gingembre, de l'ail, de la sauce soja et du poivre.",
      "Divisez la pâte en petits morceaux et aplatissez-les en disques minces. Ajoutez une cuillère à soupe de farce au centre de chaque disque.",
      "Repliez la pâte autour de la farce pour former un petit pain scellé sur le dessus. Placez chaque baozi sur un morceau de papier parchemin pour éviter qu'ils ne collent à la vapeur.",
      "Faites cuire les baozi à la vapeur pendant environ 15 à 20 minutes jusqu'à ce qu'ils soient cuits à la vapeur et que la pâte soit moelleuse et cuite.",
      "Servez les baozi chauds, accompagnés de sauce soja ou de sauce aux prunes pour tremper."
    ]
  }
  // COTE D'IVOIRE
  ,
  {
    nom: "Poulet Kedjenou",
    pays: "Côte d'Ivoire",
    contenu: "Poulet mijoté avec des légumes et des épices",
    categorie: "plat",
    temp_preparation: 90,
    ingredients: "1 poulet entier coupé en morceaux, 4 tomates moyennes hachées, 2 oignons moyens hachés, 1 piment selon le goût haché, 2 cuillères à soupe d'huile de palme, sel et poivre au goût",
    difficulte: "moyen",
    calorie: 550,
    preparation: [
      "Dans une grande casserole, faites chauffer l'huile de palme à feu moyen.",
      "Ajoutez les oignons et faites-les revenir jusqu'à ce qu'ils soient translucides.",
      "Ajoutez le poulet coupé en morceaux et faites-le dorer de tous les côtés.",
      "Ajoutez les tomates, le piment, le sel et le poivre. Couvrez et laissez mijoter à feu doux pendant environ 1 heure jusqu'à ce que le poulet soit tendre et bien imprégné des saveurs.",
      "Servez chaud avec du riz ou de l'attiéké."
    ]
  }
  ,
  {
    nom: "Attieke",
    pays: "Côte d'Ivoire",
    contenu: "Semoule de manioc fermentée, accompagnement populaire",
    categorie: "plat",
    temp_preparation: 30,
    ingredients: "300g d'attieke, 500g de poisson (au choix), 4 tomates moyennes hachées, 2 oignons moyens hachés, 2 piments selon le goût hachés, sel et poivre au goût",
    difficulte: "facile",
    calorie: 300,
    preparation: [
      "Rincez l'attieke à l'eau froide et laissez-le égoutter.",
      "Faites cuire le poisson selon votre préférence (grillé, frit ou en sauce).",
      "Dans une poêle, faites revenir les oignons et les tomates jusqu'à ce qu'ils soient tendres.",
      "Ajoutez le poisson cuit à la poêlée et mélangez bien.",
      "Ajoutez les piments, le sel et le poivre. Laissez mijoter pendant quelques minutes.",
      "Incorporez l'attieke à la préparation et mélangez délicatement jusqu'à ce qu'il soit bien chaud.",
      "Servez l'attieke chaud en accompagnement du poisson."
    ]
  }
  ,
  {
    nom: "Alloco",
    pays: "Côte d'Ivoire",
    contenu: "Bananes plantains frites, souvent servies avec une sauce épicée",
    categorie: "plat",
    temp_preparation: 20,
    ingredients: "4 bananes plantains mûres, huile de friture, piment (selon le goût), 2 oignons rouges, sel au goût",
    difficulte: "facile",
    calorie: 400,
    preparation: [
      "Pelez les bananes plantains et coupez-les en rondelles épaisses.",
      "Dans une poêle, faites chauffer l'huile de friture à feu moyen.",
      "Faites frire les rondelles de bananes jusqu'à ce qu'elles soient dorées et croustillantes. Retirez-les de l'huile et égouttez-les sur du papier absorbant pour enlever l'excès d'huile.",
      "Dans une autre poêle, faites revenir les oignons hachés jusqu'à ce qu'ils soient dorés.",
      "Ajoutez les rondelles de bananes frites dans la poêle avec les oignons.",
      "Ajoutez le piment selon votre préférence de piquant et le sel au goût. Mélangez bien pour enrober les bananes des saveurs.",
      "Servez chaud, accompagné d'une sauce épicée si désiré."
    ]
  }
  ,
  {
    nom: "Bouillie",
    pays: "Côte d'Ivoire",
    contenu: "Papier de maïs sucré, souvent servi au petit déjeuner",
    categorie: "dessert",
    temp_preparation: 25,
    ingredients: "1 tasse de maïs, 2 tasses d'eau, 1/4 de tasse de sucre, 1 tasse de lait, extrait de vanille au goût",
    difficulte: "facile",
    calorie: 250,
    preparation: [
      "Dans une casserole, faites bouillir l'eau.",
      "Ajoutez le maïs dans l'eau bouillante et réduisez le feu à moyen. Laissez mijoter en remuant fréquemment pour éviter les grumeaux.",
      "Quand le maïs est tendre et a absorbé l'eau, ajoutez le sucre et mélangez bien.",
      "Versez le lait lentement tout en continuant de remuer pour éviter les grumeaux.",
      "Ajoutez l'extrait de vanille pour parfumer la bouillie. Continuez à cuire à feu doux jusqu'à ce que la bouillie épaississe à la consistance désirée.",
      "Retirez du feu et laissez reposer pendant quelques minutes avant de servir.",
      "Servez chaud au petit déjeuner et savourez ce délicieux plat traditionnel ivoirien."
    ]
  }
  ,
];

export const recettes: Recette[] = recetteData.map(recetteData => {
    return new Recette(recetteData.nom, recetteData.pays, recetteData.contenu,
        recetteData.categorie, recetteData.temp_preparation, recetteData.ingredients,
        recetteData.difficulte, recetteData.calorie, recetteData.preparation, "assets/recettes/"+recetteData.pays+"/"+recetteData.pays+".png"
    );
});

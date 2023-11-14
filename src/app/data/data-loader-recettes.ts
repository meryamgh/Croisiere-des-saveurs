import {Recette} from "../models/recette.model";

export const recetteData = [

  //FRANCE
  {
    nom: "Macaron",
    pays: "France",
    contenu: "Douceurs sucrées",
    categorie: "Dessert",
    temp_preparation: 120,
    ingredients: "125g de poudre d'amandes, 200g de sucre glace, 3 blancs d'œufs, 25g de sucre en poudre, Colorant alimentaire (facultatif)",
    difficulte: "Moyen",
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
    nom: "Paris-Brest",
    pays: "France",
    contenu: "Pâtisserie délicieuse",
    categorie: "Dessert",
    temp_preparation: 90,
    ingredients: "Pour la pâte à choux : 125ml d'eau, 60g de beurre, 75g de farine, 3 œufs\nPour la crème pâtissière : 500ml de lait, 4 jaunes d'œufs, 100g de sucre, 40g de maïzena, 1 cuillère à café d'extrait de vanille\nSucre glace pour saupoudrer",
    difficulte: "Moyen",
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
    nom: "Quiche lorraine",
    pays: "France",
    contenu: "Tarte salée aux lardons et fromage",
    categorie: "Plat",
    temp_preparation: 75,
    ingredients: "1 pâte brisée, 200g de lardons, 200ml de crème fraîche, 3 œufs, sel, poivre, noix de muscade",
    difficulte: "Facile",
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
    contenu: "Plat de pommes de terre, lardons et fromage",
    categorie: "Plat",
    temp_preparation: 90,
    ingredients: "1 kg de pommes de terre, 200g de lardons, 1 reblochon, 2 oignons, 2 cuillères à soupe d'huile d'olive, sel, poivre",
    difficulte: "Moyen",
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
  //ITALIE
  {
    nom: "Pizza Margherita",
    pays: "Italie",
    contenu: "Pizza classique avec une base de sauce tomate, de la mozzarella et du basilic",
    categorie: "Plat",
    temp_preparation: 20,
    ingredients: "1 pâte à pizza, 1/2 tasse de sauce tomate, 2 tasses de mozzarella râpée, feuilles de basilic frais, sel, poivre, huile d'olive",
    difficulte: "Facile",
    calorie: 300,
    preparation: [
      "Préchauffez votre four à 220°C.",
      "Étalez la pâte à pizza sur une plaque de cuisson.",
      "Répartissez uniformément la sauce tomate sur la pâte, en laissant un bord pour la croûte.",
      "Saupoudrez généreusement de mozzarella râpée sur la sauce.",
      "Ajoutez quelques feuilles de basilic frais.",
      "Assaisonnez avec du sel et du poivre selon votre goût.",
      "Arrosez légèrement d'huile d'olive.",
      "Enfournez la pizza au four préchauffé et faites cuire pendant environ 12-15 minutes, ou jusqu'à ce que la croûte soit dorée et le fromage fondu.",
      "Retirez du four, laissez refroidir quelques instants, puis coupez en parts et servez."
    ]
  },
  {
    nom: "Lasagnes Bolognaises",
    pays: "Italie",
    contenu: "Plat de lasagnes superposées avec une sauce bolognaise, du fromage béchamel et du parmesan",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "Feuilles de lasagne, 500g de viande hachée (porc et bœuf mélangés), 1 oignon, 2 gousses d'ail, 800g de tomates concassées, 2 cuillères à soupe de concentré de tomate, 250ml de vin rouge, 500ml de béchamel, 100g de parmesan râpé, huile d'olive, sel, poivre, épices italiennes",
    difficulte: "Moyen",
    calorie: 400,
    preparation: [
      "Préchauffez votre four à 180°C.",
      "Dans une grande poêle, faites revenir l'oignon et l'ail dans de l'huile d'olive jusqu'à ce qu'ils soient dorés.",
      "Ajoutez la viande hachée et faites-la cuire jusqu'à ce qu'elle soit bien dorée.",
      "Incorporez les tomates concassées, le concentré de tomate, le vin rouge, les épices italiennes, le sel et le poivre. Laissez mijoter pendant environ 30 minutes pour obtenir une sauce bolognaise épaisse.",
      "Dans un plat à gratin, alternez des couches de feuilles de lasagne, de sauce bolognaise, de béchamel et de parmesan râpé.",
      "Répétez les couches jusqu'à épuisement des ingrédients, en terminant par une couche de béchamel et de parmesan.",
      "Enfournez au four préchauffé et faites cuire pendant environ 25-30 minutes, ou jusqu'à ce que le dessus soit doré.",
      "Sortez du four, laissez reposer quelques minutes, puis servez chaud."
    ]
  },
  {
    nom: "Amaretti",
    pays: "Italie",
    contenu: "Biscuits moelleux à base d'amandes, sucre et blancs d'œufs",
    categorie: "Dessert",
    temp_preparation: 15,
    ingredients: "200g d'amandes en poudre, 200g de sucre en poudre, 2 blancs d'œufs, extrait d'amande, sucre glace",
    difficulte: "Moyen",
    calorie: 150,
    preparation: [
      "Préchauffez votre four à 160°C.",
      "Dans un bol, mélangez les amandes en poudre et le sucre en poudre.",
      "Ajoutez les blancs d'œufs et quelques gouttes d'extrait d'amande. Mélangez jusqu'à obtenir une pâte homogène.",
      "Formez de petites boules avec la pâte et roulez-les dans le sucre glace pour les enrober.",
      "Placez les boules sur une plaque de cuisson recouverte de papier sulfurisé, en les espaçant.",
      "Enfournez pendant environ 15 minutes, jusqu'à ce qu'ils soient dorés à l'extérieur mais encore moelleux à l'intérieur.",
      "Laissez refroidir avant de déguster ces délicieux biscuits à l'amande."
    ]
  },
  {
    nom: "Tiramisu",
    pays: "Italie",
    contenu: "Dessert italien à base de couches de biscuits imbibés de café et de crème mascarpone",
    categorie: "Dessert",
    temp_preparation: 20,
    ingredients: "4 gros œufs, 150g de sucre, 500g de mascarpone, 1 tasse de café fort, 200g de biscuits à la cuillère, cacao en poudre",
    difficulte: "Facile",
    calorie: 300,
    preparation: [
      "Séparez les blancs des jaunes d'œufs.",
      "Dans un bol, fouettez les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
      "Ajoutez le mascarpone au mélange de jaunes d'œufs et mélangez jusqu'à obtenir une consistance lisse.",
      "Dans un autre bol, battez les blancs d'œufs en neige ferme. Incorporez délicatement les blancs en neige au mélange de mascarpone.",
      "Trempez rapidement les biscuits dans le café fort et disposez-les dans un plat pour former une première couche.",
      "Étalez la moitié de la crème de mascarpone sur la première couche de biscuits.",
      "Répétez le processus pour former une deuxième couche de biscuits et terminez par une couche de crème de mascarpone.",
      "Saupoudrez généreusement de cacao en poudre sur le dessus.",
      "Réfrigérez pendant au moins 4 heures, idéalement toute une nuit, avant de servir.",
      "Dégustez ce délicieux Tiramisu, un classique italien apprécié dans le monde entier."
    ]
  },
  //ALGERIE
  {
    nom: "Chorba",
    pays: "Algérie",
    contenu: "Soupe traditionnelle aux légumes et viande",
    categorie: "Entrée",
    temp_preparation: 45,
    ingredients: "500g de semoule, 1 courgette, 2 carottes, 1 poivron, 1 oignon, 500g de viande d'agneau, " +
      "2 cuillères à soupe d'huile d'olive, 1 cuillère à café de cumin, " +
      "1 cuillère à café de coriandre en poudre, sel, poivre",
    difficulte: "Facile",
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
    nom: "Couscous",
    pays: "Algérie",
    contenu: "Délicieux plat traditionnel algérien",
    categorie: "Plat",
    temp_preparation: 60,
    ingredients: "500g de semoule, légumes variés (carottes, courgettes, poivrons), viande au choix (agneau, poulet, merguez), épices (cumin, coriandre, sel, poivre)",
    difficulte: "Facile",
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
    nom: "Tajine",
    pays: "Algérie",
    contenu: "Savoureux plat cuit lentement",
    categorie: "Plat",
    temp_preparation: 90,
    ingredients: "Viande au choix (agneau, poulet, bœuf), légumes variés (oignons, carottes, pommes de terre), épices (cumin, coriandre, paprika, cannelle), huile d'olive, citron confit, olives",
    difficulte: "Moyen",
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
    nom: "Crêpe mille trous",
    pays: "Algérie",
    contenu: "Délicates crêpes avec des trous",
    categorie: "Dessert",
    temp_preparation: 45,
    ingredients: "250g de farine, 1 cuillère à café de levure chimique, 1/2 cuillère à café de sel, 1 cuillère à soupe de sucre, 1 cuillère à soupe d'eau de fleur d'oranger, 1 cuillère à soupe de levure boulangère, Eau tiède",
    difficulte: "Facile",
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
  ,
  //USA
  {
    nom: "Hamburger",
    pays: "États-Unis",
    contenu: "Classique burger américain",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "Pain à hamburger, steak haché, fromage, laitue, tomate, oignon, ketchup, moutarde",
    difficulte: "Facile",
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
    pays: "États-Unis",
    contenu: "Dessert crémeux au fromage à la crème",
    categorie: "Dessert",
    temp_preparation: 120,
    ingredients: "Biscuits (type biscuits Graham), fromage à la crème, sucre, œufs, extrait de vanille",
    difficulte: "Moyen",
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
    pays: "États-Unis",
    contenu: "Soupe crémeuse aux palourdes",
    categorie: "Entrée",
    temp_preparation: 45,
    ingredients: "Palourdes, pommes de terre, oignon, crème, bacon",
    difficulte: "Moyen",
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
    categorie: "Plat",
    temp_preparation: 120,
    ingredients: "Canard, sauce soja, miel, gingembre, échalotes",
    difficulte: "Difficile",
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
    categorie: "Entrée",
    temp_preparation: 60,
    ingredients: "Farce à base de porc, pâte à ravioli, sauce soja",
    difficulte: "Moyen",
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
    nom: "Chow Mein aux légumes",
    pays: "Chine",
    contenu: "Nouilles sautées avec un mélange de légumes",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "Nouilles, légumes variés (carottes, poivrons, champignons, chou), pousses de bambou, sauce soja, huile végétale",
    difficulte: "Facile",
    calorie: 400,
    preparation: [
      "Faites cuire les nouilles selon les instructions sur l'emballage. Égouttez-les et réservez.",
      "Dans une grande poêle ou un wok, chauffez l'huile végétale à feu moyen-élevé.",
      "Ajoutez les légumes coupés en julienne, tels que des carottes, des poivrons, des champignons et des pousses de bambou. Faites sauter pendant quelques minutes jusqu'à ce qu'ils soient tendres mais encore croquants.",
      "Ajoutez les nouilles cuites dans la poêle avec les légumes et mélangez bien.",
      "Versez la sauce soja sur le mélange et continuez à remuer pour enrober uniformément les nouilles et les légumes de la sauce.",
      "Laissez cuire pendant quelques minutes supplémentaires pour permettre aux saveurs de se mélanger.",
      "Servez le Chow Mein aux légumes chaud, garni de ciboulette ou de coriandre fraîche, et ajoutez éventuellement du poulet, du bœuf ou des crevettes pour plus de protéines."
    ]
  }
  ,
  {
    nom: "Baozi",
    pays: "Chine",
    contenu: "Pain vapeur farci de viande ou de légumes",
    categorie: "Plat",
    temp_preparation: 60,
    ingredients: "Pâte à pain, farce au porc ou aux légumes",
    difficulte: "Moyen",
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
    nom: "Foutou Banane",
    pays: "Côte d'Ivoire",
    contenu: "Pâte de banane plantain accompagnée de sauces",
    categorie: "Plat",
    temp_preparation: 60,
    ingredients: "Bananes plantains vertes, igname, huile de palme, poisson fumé (ou viande), tomates, oignons, piments",
    difficulte: "Moyen",
    calorie: 600,
    preparation: [
      "Épluchez les bananes plantains et les ignames, puis coupez-les en morceaux.",
      "Faites cuire les morceaux de bananes et d'ignames dans de l'eau bouillante jusqu'à ce qu'ils soient bien tendres.",
      "Égouttez l'eau et écrasez les morceaux de bananes et d'ignames ensemble pour former une pâte homogène. Cela peut être fait à l'aide d'un pilon dans un mortier traditionnel.",
      "Dans une casserole, faites chauffer l'huile de palme. Ajoutez les oignons hachés, les tomates et les piments pour préparer une sauce. Ajoutez le poisson fumé (ou la viande) et laissez mijoter jusqu'à ce que la sauce soit bien cuite.",
      "Servez le Foutou Banane avec la sauce préparée. Traditionnellement, on forme des boules de pâte et on les trempe dans la sauce avant de les déguster.",
      "Vous pouvez accompagner le Foutou Banane de légumes verts ou d'autres accompagnements de votre choix."
    ]
  }
  ,
  {
    nom: "Attieke",
    pays: "Côte d'Ivoire",
    contenu: "Semoule de manioc fermentée, accompagnement populaire",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "300g d'attieke, 500g de poisson (au choix), 4 tomates moyennes hachées, 2 oignons moyens hachés, 2 piments selon le goût hachés, sel et poivre au goût",
    difficulte: "Facile",
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
    categorie: "Plat",
    temp_preparation: 20,
    ingredients: "4 bananes plantains mûres, huile de friture, piment (selon le goût), 2 oignons rouges, sel au goût",
    difficulte: "Facile",
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
    categorie: "Dessert",
    temp_preparation: 25,
    ingredients: "1 tasse de maïs, 2 tasses d'eau, 1/4 de tasse de sucre, 1 tasse de lait, extrait de vanille au goût",
    difficulte: "Facile",
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
  //MEXIQUE
  {
    nom: "Chilaquiles",
    pays: "Mexique",
    contenu: "Plat mexicain à base de tortillas croustillantes nappées de sauce tomate épicée et garnies de fromage, d'avocat et de crème.",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "Tortillas de maïs, sauce tomate, piments, oignons, fromage, avocat, crème fraîche, coriandre",
    difficulte: "Moyen",
    calorie: 400,
    preparation: [
      "Coupez les tortillas de maïs en triangles.",
      "Faites-les frire dans de l'huile jusqu'à ce qu'elles soient croustillantes. Égouttez-les sur du papier absorbant.",
      "Dans une casserole, préparez une sauce tomate épicée avec des piments, des oignons et de la tomate.",
      "Ajoutez les tortillas croustillantes à la sauce et mélangez délicatement jusqu'à ce qu'elles soient bien enrobées.",
      "Garnissez de fromage râpé et laissez fondre.",
      "Servez les Chilaquiles garnis d'avocat tranché, de crème fraîche et de feuilles de coriandre.",
      "Dégustez ce plat savoureux et épicé, typique de la cuisine mexicaine."
    ]
  },
  {
    nom: "Tacos",
    pays: "Mexique",
    contenu: "Tortillas garnies de viande (bœuf, poulet, porc), de légumes, de salsa, et d'autres ingrédients selon les goûts.",
    categorie: "Plat",
    temp_preparation: 25,
    ingredients: "Tortillas, viande (bœuf, poulet, porc), oignons, poivrons, salsa, guacamole, coriandre, fromage",
    difficulte: "Facile",
    calorie: 350,
    preparation: [
      "Préparez les garnitures : coupez la viande en petits morceaux, hachez les oignons, les poivrons, et préparez la salsa, le guacamole, la coriandre, et le fromage.",
      "Chauffez les tortillas dans une poêle ou au micro-ondes jusqu'à ce qu'elles soient chaudes et souples.",
      "Faites cuire la viande dans une poêle avec les oignons et les poivrons jusqu'à ce qu'elle soit bien cuite.",
      "Assemblez les tacos : placez une portion de viande cuite sur chaque tortilla, ajoutez les garnitures de votre choix (salsa, guacamole, coriandre, fromage, etc.).",
      "Repliez les tortillas pour former des tacos et servez immédiatement.",
      "Dégustez ces délicieux tacos, personnalisables selon vos goûts et préférences."
    ]
  },
  {
    nom: "Enchiladas",
    pays: "Mexique",
    contenu: "Rouleaux de tortillas farcis de viande, haricots, fromage et recouverts de sauce chili.",
    categorie: "Plat",
    temp_preparation: 30,
    ingredients: "Tortillas, viande (poulet, bœuf, porc), haricots noirs, fromage, oignons, sauce chili, crème fraîche, coriandre",
    difficulte: "Moyen",
    calorie: 400,
    preparation: [
      "Préparez les garnitures : faites cuire la viande avec les oignons jusqu'à ce qu'elle soit bien cuite, préparez les haricots noirs, le fromage râpé, et hachez la coriandre.",
      "Assemblez les enchiladas : chauffez les tortillas, placez une portion de viande cuite, des haricots, du fromage, et une cuillère de sauce chili au centre de chaque tortilla.",
      "Enroulez les tortillas pour former des rouleaux et placez-les dans un plat allant au four, jointure vers le bas.",
      "Recouvrez les enchiladas de sauce chili et de fromage râpé supplémentaire.",
      "Faites cuire au four préchauffé à 180°C pendant environ 15-20 minutes, jusqu'à ce que le fromage soit fondu et légèrement doré.",
      "Servez les enchiladas chaudes, garnies de crème fraîche et de coriandre hachée.",
      "Dégustez ces enchiladas délicieuses, accompagnées de vos côtés préférés."
    ]
  },
  {
    nom: "Chiles en Nogada",
    pays: "Mexique",
    contenu: "Piments poblano farcis de viande hachée et de fruits, nappés d'une sauce aux noix et garnis de graines de grenade.",
    categorie: "Plat",
    temp_preparation: 40,
    ingredients: "Piments poblano, viande de bœuf hachée, oignons, ail, tomates, poires, pommes, pêches, raisins secs, amandes, noix, lait, fromage de chèvre, huile d'olive, sel, sucre",
    difficulte: "Moyen",
    calorie: 400,
    preparation: [
      "Faites griller les piments poblano jusqu'à ce que la peau noircisse. Placez-les dans un sac en plastique pour les peler plus facilement.",
      "Préparez la farce en faisant revenir la viande de bœuf hachée avec des oignons, de l'ail, des tomates et des fruits coupés en petits morceaux (poires, pommes, pêches). Ajoutez des raisins secs, des amandes et des noix.",
      "Farcissez les piments poblano avec ce mélange.",
      "Préparez la sauce aux noix en mixant des noix avec du lait et du fromage de chèvre. Ajoutez un peu de sel et de sucre selon votre goût.",
      "Nappez les piments farcis de cette sauce.",
      "Garnissez le plat de graines de grenade avant de servir pour une touche de fraîcheur.",
      "Les Chiles en Nogada sont traditionnellement servis froids. Profitez de ce plat festif et délicieux !"
    ]
  },
  {
    nom: "Feijoada",
    pays: "Brésil",
    contenu: "Un ragoût savoureux à base de haricots noirs, de viande de porc, de saucisses et de diverses viandes fumées, servi avec du riz.",
    categorie: "Plat",
    temp_preparation: 120,
    ingredients: "Haricots noirs, viande de porc (côtes, pieds, oreilles), saucisses fumées, bacon, oignons, ail, tomates, poivrons, laurier, thym, sel, poivre, huile d'olive, riz",
    difficulte: "Moyen",
    calorie: 500,
    preparation: [
      "Faites tremper les haricots noirs dans de l'eau pendant la nuit. Égouttez-les avant la cuisson.",
      "Dans une grande casserole, faites revenir l'ail et les oignons dans de l'huile d'olive jusqu'à ce qu'ils soient dorés.",
      "Ajoutez la viande de porc, les saucisses fumées et le bacon coupés en morceaux. Faites-les dorer.",
      "Incorporez les haricots noirs égouttés, les tomates, les poivrons, le laurier et le thym. Ajoutez suffisamment d'eau pour couvrir les ingrédients.",
      "Laissez mijoter à feu doux pendant environ 2 heures, en remuant de temps en temps, jusqu'à ce que les haricots soient tendres et que la viande soit bien cuite.",
      "Assaisonnez avec du sel et du poivre selon votre goût.",
      "Servez la feijoada chaude sur du riz cuit. Bon appétit !"
    ]
  },
  {
    nom: "Moqueca de Peixe",
    pays: "Brésil",
    contenu: "Un délicieux ragoût de poisson cuit dans une sauce à base de lait de coco, de tomates, de poivrons et d'épices.",
    categorie: "Plat",
    temp_preparation: 45,
    ingredients: "Filets de poisson (cabillaud, dorade, ou autre poisson blanc), lait de coco, tomates, poivrons (rouges et verts), oignons, ail, coriandre, jus de citron, huile d'olive, sel, poivre, piment (facultatif), riz pour servir.",
    difficulte: "Facile",
    calorie: 350,
    preparation: [
      "Marinez les filets de poisson dans du jus de citron, de l'ail émincé, du sel et du poivre pendant environ 15 minutes.",
      "Dans une grande poêle, faites revenir les oignons et l'ail dans de l'huile d'olive jusqu'à ce qu'ils soient dorés.",
      "Ajoutez les tomates et les poivrons coupés en morceaux. Laissez-les cuire pendant quelques minutes jusqu'à ce qu'ils ramollissent.",
      "Incorporez le lait de coco et laissez mijoter à feu doux pendant 10 minutes pour laisser les saveurs se mélanger.",
      "Ajoutez les filets de poisson marinés à la poêle. Cuisez-les pendant environ 10-15 minutes jusqu'à ce qu'ils soient bien cuits.",
      "Assaisonnez avec du sel, du poivre et du piment (si vous aimez épicé). Ajoutez la coriandre fraîche hachée juste avant de servir.",
      "Servez la Moqueca de Peixe sur du riz cuit. Un vrai régal !"
    ]
  },
  {
    nom: "Pão de Queijo",
    pays: "Brésil",
    contenu: "De petits pains au fromage délicieusement moelleux, parfaits en guise de collation ou d'accompagnement.",
    categorie: "Apéritif",
    temp_preparation: 30,
    ingredients: "Farine de tapioca, lait, beurre, sel, œufs, fromage râpé (utilisez un fromage brésilien comme le fromage de Minas si possible)",
    difficulte: "Facile",
    calorie: 150,
    preparation: [
      "Préchauffez votre four à 180°C.",
      "Dans une casserole, chauffez le lait, le beurre et le sel jusqu'à ébullition.",
      "Ajoutez la farine de tapioca dans un grand bol. Versez le mélange lait-beurre chaud sur la farine et mélangez bien pour former une pâte.",
      "Laissez la pâte refroidir pendant quelques minutes. Ensuite, incorporez les œufs un par un, en mélangeant bien entre chaque ajout.",
      "Ajoutez le fromage râpé à la pâte et mélangez jusqu'à obtenir une pâte homogène.",
      "Sur une plaque de cuisson recouverte de papier sulfurisé, déposez des petites portions de pâte en forme de boules, en les espaçant légèrement.",
      "Enfournez pendant environ 15-20 minutes ou jusqu'à ce que les Pão de Queijo soient dorés et gonflés.",
      "Servez les petits pains au fromage encore chauds. Ils sont délicieux à déguster à tout moment de la journée !"
    ]
  }
];

export const recettes: Recette[] = recetteData.map(recetteData => {
  return new Recette(recetteData.nom, recetteData.pays, recetteData.contenu,
    recetteData.categorie, recetteData.temp_preparation, recetteData.ingredients,
    recetteData.difficulte, recetteData.calorie, recetteData.preparation, "assets/recettes/" + recetteData.pays + "/" + recetteData.nom + ".png"
  );
});

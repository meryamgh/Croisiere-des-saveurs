import {User} from "../models/user.model";
import {Recette} from "../models/recette.model";
import {Commentaire} from "../models/commentaire.model";

export const recetteData = [
    {nom: "chorba", pays: "algerie", contenu: "soupe traditionnelle aux légumes et viande", categorie: "entrée", temp_preparation: 45, ingredients: "tomates, pois chiches, viande d'agneau, vermicelles", difficulte: "facile", calorie: 350, commentaire: ["e", "pas mal du otuotu"]},
    {nom: "couscous", pays: "algerie", contenu: "délicieux plat traditionnel algérien", categorie: "plat", temp_preparation: 60, ingredients: "semoule, légumes, viande", difficulte: "facile", calorie: 400, commentaire: ["e"]},
    {nom: "tajine", pays: "algerie", contenu: "savoureux plat cuit lentement", categorie: "plat", temp_preparation: 90, ingredients: "viande, légumes, épices", difficulte: "moyen", calorie: 450, commentaire: ["e"]},
    {nom: "crêpe mille trous", pays: "algerie", contenu: "délicates crêpes avec des trous", categorie: "dessert", temp_preparation: 45, ingredients: "farine, levure, eau", difficulte: "facile", calorie: 300, commentaire: ["e"]},
    {nom: "macaron", pays: "france", contenu: "douceurs sucrées", categorie: "dessert", temp_preparation: 120, ingredients: "amandes, sucre, blancs d'œufs", difficulte: "moyen", calorie: 200, commentaire: ["e"]},
    {nom: "pariBrest", pays: "france", contenu: "pâtisserie délicieuse", categorie: "dessert", temp_preparation: 90, ingredients: "pâte à choux, crème pâtissière, sucre glace", difficulte: "moyen", calorie: 350, commentaire: ["e"]},
    {nom: "quiche lorraine", pays: "france", contenu: "tarte salée aux lardons et fromage", categorie: "plat", temp_preparation: 75, ingredients: "pâte brisée, lardons, crème, œufs", difficulte: "facile", calorie: 400, commentaire: ["e"]},
    {nom: "tartiflette", pays: "france", contenu: "plat de pommes de terre, lardons et fromage", categorie: "plat", temp_preparation: 90, ingredients: "pommes de terre, lardons, reblochon", difficulte: "moyen", calorie: 500, commentaire: ["e"]},
    {nom: "Hamburger", pays: "USA", contenu: "Classique burger américain", categorie: "plat", temp_preparation: 30, ingredients: "pain, steak haché, fromage, laitue, tomate, oignon", difficulte: "facile", calorie: 500, commentaire: ["e"]},
    {nom: "Hot Dog", pays: "USA", contenu: "Saucisse grillée dans un pain moelleux", categorie: "plat", temp_preparation: 20, ingredients: "saucisse, pain à hot dog, ketchup, moutarde, oignon frit", difficulte: "facile", calorie: 300, commentaire: ["e"]},
    {nom: "Cheesecake", pays: "USA", contenu: "Dessert crémeux au fromage à la crème", categorie: "dessert", temp_preparation: 120, ingredients: "biscuits, fromage à la crème, sucre, œufs, vanille", difficulte: "moyen", calorie: 450, commentaire: ["e"]},
    {nom: "Clam Chowder", pays: "USA", contenu: "Soupe crémeuse aux palourdes", categorie: "entrée", temp_preparation: 45, ingredients: "palourdes, pommes de terre, oignon, crème, bacon", difficulte: "moyen", calorie: 350, commentaire: ["e"]},
    {nom: "Canard laqué", pays: "Chine", contenu: "Canard rôti avec une peau croustillante", categorie: "plat", temp_preparation: 120, ingredients: "canard, sauce soja, miel, gingembre, échalotes", difficulte: "difficile", calorie: 600, commentaire: ["e"]},
    {nom: "Raviolis vapeur", pays: "Chine", contenu: "Petits raviolis cuits à la vapeur", categorie: "entrée", temp_preparation: 60, ingredients: "farce à base de porc, pâte à ravioli, sauce soja", difficulte: "moyen", calorie: 350, commentaire: ["e"]},
    {nom: "Poulet aux noix de cajou", pays: "Chine", contenu: "Poulet sauté avec des noix de cajou croquantes", categorie: "plat", temp_preparation: 45, ingredients: "poulet, noix de cajou, légumes, sauce soja", difficulte: "facile", calorie: 500, commentaire: ["e"]},
    {nom: "Baozi", pays: "Chine", contenu: "Pain vapeur farci de viande ou de légumes", categorie: "plat", temp_preparation: 60, ingredients: "pâte à pain, farce au porc ou aux légumes", difficulte: "moyen", calorie: 400, commentaire: ["e"]},
    {nom: "Poulet Kedjenou", pays: "Côte d'Ivoire", contenu: "Poulet mijoté avec des légumes et des épices", categorie: "plat", temp_preparation: 90, ingredients: "poulet, tomates, oignons, piment, huile de palme", difficulte: "moyen", calorie: 550, commentaire: ["e"]},
    {nom: "Attieke", pays: "Côte d'Ivoire", contenu: "Semoule de manioc fermentée, accompagnement populaire", categorie: "plat", temp_preparation: 30, ingredients: "attieke, poisson, tomates, oignons, piments", difficulte: "facile", calorie: 300, commentaire: ["e"]},
    {nom: "Alloco", pays: "Côte d'Ivoire", contenu: "Bananes plantains frites, souvent servies avec une sauce épicée", categorie: "plat", temp_preparation: 20, ingredients: "bananes plantains, huile, piment, oignons", difficulte: "facile", calorie: 400, commentaire: ["e"]},
    {nom: "Bouillie", pays: "Côte d'Ivoire", contenu: "Papier de maïs sucré, souvent servi au petit déjeuner", categorie: "dessert", temp_preparation: 25, ingredients: "maïs, sucre, lait, vanille", difficulte: "facile", calorie: 250, commentaire: ["e"]},
];

export const recettes: Recette[] = recetteData.map(recetteData => {
    return new Recette(recetteData.nom, recetteData.pays, recetteData.contenu,
        recetteData.categorie, recetteData.temp_preparation, recetteData.ingredients,
        recetteData.difficulte, recetteData.calorie, recetteData.commentaire
    );
});


export const usersData = [
    {
        nom: 'Dupont', prenom: 'John', email: 'john@example.com',
        favoris: recettes.slice(6, 9),
        commentaire: 'Délicieux!',
        password: "test123"
    },

    {
        nom: 'Smith', prenom: 'Alice', email: 'alice@example.com',
        favoris: recettes.slice(1, 5),
        commentaire: 'À refaire!',
        password: "test123"
    },

    {
        nom: 'Johnson', prenom: 'Michael', email: 'michael@example.com',
        favoris: recettes.slice(3, 5),
        commentaire: 'J\'ai adoré!',
        password: "test123"
    },

    {
        nom: 'Lee', prenom: 'Emma', email: 'emma@example.com',
        favoris: recettes.slice(3, 5),
        commentaire: 'Simple et bon.',
        password: "test123"
    },

    {
        nom: 'Kim', prenom: 'David', email: 'david@example.com',
        favoris: recettes.slice(1, 5),
        commentaire: 'Un régal.',
        password: "test123"
    }
];

export const users: User[] = usersData.map(userData => {
    return new User(userData.nom, userData.prenom, userData.email, userData.favoris, userData.commentaire, userData.password);
});


export const commentaireData = [
    {commentaire: "délicieux", user: users[1].email, recette: recettes[1].nom},
    {commentaire: "new !!!", user: users[2].email, recette: recettes[1].nom},
    {commentaire: "ca passe", user: users[3].email, recette: recettes[5].nom},
    {commentaire: "délicieux", user: users[2].email, recette: recettes[3].nom}
]

export const commentaires: Commentaire[] = commentaireData.map(commentaireData => {
    return new Commentaire(commentaireData.commentaire, commentaireData.user, commentaireData.recette);
})

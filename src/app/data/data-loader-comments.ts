import {Comment} from "../models/comment.model";
import {recipes} from "./data-loader-recipes";
import {users} from "./data-loader-user";

function generateRandomComments(userCount: number): Comment[] {
  const commentsGenerated: Comment[] = [];

  for (let i: number = 0; i < userCount; i++) {
    const randomUserIndex: number = Math.floor(Math.random() * users.length);
    const randomRecipeIndex: number = Math.floor(Math.random() * recipes.length);

    const comment = {
      userComment: generateRandomComment(),
      user: users[randomUserIndex].email,
      recipeCommented: recipes[randomRecipeIndex].name,
      dateTime: generateRandomDateTime()
    };

    commentsGenerated.push(new Comment(comment.userComment, comment.user, comment.recipeCommented, comment.dateTime));
  }
  return commentsGenerated;
}

function generateRandomComment(): string {
  const comments: string[] = [
    "Délicieux",
    "Super recipe !",
    "J'adore",
    "À refaire",
    "Bonne idée",
    "Original",
    "Excellent",
    "Parfait",
    "Divin",
    "Génial",
    "Magnifique",
    "Succulent",
    "Délicat",
    "Fantastique",
    "Exceptionnel",
    "Merveilleux",
    "Irésistible",
    "Savoureux",
    "Délicieusement surprenant",
    "À tomber par terre",
    "Réconfortant",
    "Épatant",
    "Épique",
    "Extraordinaire",
    "Éblouissant",
    "Sublime",
    "Sensationnel",
    "Féérique",
    "Grandiose",
    "Digne d'un chef",
    "Un régal",
    "Charmant",
    "Succès assuré",
    "Envoûtant",
    "Harmonieux",
    "Un pur délice",
    "Un chef-d'œuvre",
    "Une explosion de saveurs",
    "Un délice pour les papilles",
    "Un festin",
    "À couper le souffle",
    "Un plaisir gustatif",
    "Inoubliable",
    "Raffiné",
    "Séduisant",
    "Authentique",
    "Absolument incroyable ! Les recipes de ce site sont une véritable inspiration pour moi. Chaque plat est une aventure culinaire délicieuse.",
    "J'ai découvert ce site récemment, et je suis déjà accro ! Les recipes sont simples à suivre, mais les résultats sont toujours extraordinaires. Merci pour cette source infinie d'idées culinaires !",
    "Une véritable pépite pour les amateurs de cuisine ! Les instructions détaillées, les ingrédients frais, et les saveurs exquises font de ce site mon compagnon incontournable en cuisine.",
    "Chaque recipe que j'ai essayée jusqu'à présent a été un succès total ! Ce site m'a vraiment redonné le plaisir de cuisiner et d'explorer de nouveaux horizons gastronomiques.",
    "Les recipes ici sont bien plus que de simples instructions culinaires. Elles racontent une histoire de passion pour la cuisine et de recherche de la perfection gustative. Bravo pour ce travail exceptionnel !",
    "Ce site est ma bouffée d'air frais quotidienne. Les recipes sont diverses, créatives et toujours délicieuses. Merci de rendre la cuisine aussi excitante et accessible !",
    "Un grand merci à l'équipe derrière ce site. Les recipes sont délicieuses, les photos sont appétissantes, et l'ensemble de l'expérience est formidable. Continuez à nous régaler !",
    "Je suis constamment émerveillé par la variété de recipes disponibles ici. Des plats simples du quotidien aux créations gastronomiques, ce site a tout pour plaire aux amateurs de cuisine.",
    "Je recommande vivement ce site à tous les passionnés de cuisine. Les recipes sont claires, les résultats sont délicieux, et l'aventure culinaire est garantie. Bravo pour cette ressource exceptionnelle !",
    "J'aime la diversité des recipes proposées ici. C'est comme un voyage culinaire à travers le monde sans quitter ma cuisine. Merci pour cette fenêtre ouverte sur de nouvelles saveurs et traditions !",
    "Élégant",
    "Stupéfiant",
    "Gastronomique",
    "Plaisir divin",
    "Un trésor culinaire",
    "Un pur bonheur",
    "Parfaitement équilibré",
    "Un enchantement",
    "Un ravissement",
    "Un délice rare",
    "Frais et délicieux",
    "Doux et savoureux",
    "Une véritable source d'inspiration culinaire ! Chaque recipe est une invitation à l'évasion gastronomique. Merci pour tant de délices !",
    "Les saveurs de ces recipes sont tout simplement extraordinaires. J'ai redécouvert le plaisir de cuisiner grâce à ce site.",
    "Une explosion de saveurs dans chaque bouchée ! Les recipes sont claires et détaillées, idéales même pour les débutants en cuisine.",
    "Je ne me lasse pas de parcourir ce site à la recherche de nouvelles idées. Les recipes sont non seulement délicieuses, mais elles rendent la cuisine tellement amusante !",
    "Un grand bravo à toute l'équipe ! Ces recipes ont transformé mes repas quotidiens en véritables festins. Je recommande vivement ce site à tous les amateurs de cuisine.",
    "Les combinaisons d'ingrédients et les astuces culinaires font de chaque recipe une expérience unique. Ce site est devenu ma bible culinaire !",
    "Un tour du monde des saveurs dans ma propre cuisine ! Les recipes de ce site ont élargi mes horizons gastronomiques d'une manière délicieuse.",
    "La simplicité des recipes combinée à des résultats incroyables. C'est exactement ce dont j'avais besoin pour rendre la cuisine à la maison plus excitante.",
    "Les recipes sont bien plus que des instructions, elles sont une célébration de la créativité culinaire. Merci de partager cette passion avec nous !",
    "J'ai essayé de nombreuses recipes de ce site, et aucune ne m'a déçu jusqu'à présent. Chaque plat est une promenade gustative exquise.",
    "Harmonie de saveurs",
    "Plaisir suprême",
    "Un délice absolu",
    "Un délice irrésistible",
    "Un véritable délice",
    "C'est divin !"
  ];
  const randomIndex: number = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

function generateRandomDateTime(): Date {
  const startDate: Date = new Date("2023-01-01");
  const endDate: Date = new Date("2023-12-31");
  return new Date(
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

export const comments: Comment[] = generateRandomComments(320);

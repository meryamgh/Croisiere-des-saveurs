import {Server} from 'miragejs';
import {commentaires} from "./data/data-loader-commentaire";
import {recettes} from "./data/data-loader-recettes";
import {users} from "./data/data-loader-user";
import {favoris} from "./data/data-loader-favoris";
import {countries} from "./data/data-loader-country";
import {User} from "./models/user.model";


export default () => {
    new Server({
        seeds(server) {
            server.db.loadData({
                users, recettes, commentaires, favoris, countries
            });
        },
        routes() {
            this.namespace = '/api';

            this.get('/users', schema => schema.db['users']);


            this.get('/users/:email', (schema, request) => {
                const userEmail: string = request.params['email'];
                return schema.db['users'].findBy({email: userEmail});
            });

            this.get('/users/highestScore', (schema) => {
                const users:User[] = schema.db['users'];
                const sortedUsers:User[] = users.sort((a, b) => b.highScore - a.highScore);

                return sortedUsers[0];
            });




            this.post('/users/', (schema, request) => {
                const user : User = JSON.parse(request.requestBody);
                user.highScore=3;
                schema.db['users'].insert(user);
                return user;
            });

          this.put('/users/', (schema, request) => {
            const updateUser = JSON.parse(request.requestBody);
            schema.db['users'].update(schema.db['users'].findBy({email: updateUser.email}),updateUser);
            return updateUser;
          });



          this.get('/recettes', schema => schema.db['recettes']);
            this.get('/recettes/:nom', (schema, request) => {
                const recetteNom: string = request.params['nom'];
                return schema.db['recettes'].findBy({nom: recetteNom});
            });
            this.put('recettes/:nom', (schema, request) => {
                const nomRecette: string = request.params['nom'];
                const recetteFind = schema.db['recettes'].findBy({nom: nomRecette});
                recetteFind.commentaire.push(request.requestBody);
                return recetteFind;
            });
            this.get('/recettes/country/:countryName', (schema ,request) => {
              const country:string = request.params['countryName'];
              return schema.db['recettes'].where({pays: country});
            });


            this.get('/commentaires', schema => schema.db['commentaires']);
            this.get('/commentaires/:nomRecette', (schema, request) => {
                const recette: string = request.params['nomRecette'];
                const recetteFind = schema.db['recettes'].findBy({nom: recette});
                return schema.db['commentaires'].where({recette: recetteFind.nom});
            });

            this.get('/commentaires/user/:nomUser', (schema, request) => {
                const userFind: string = request.params['nomUser'];
                return schema.db['commentaires'].where({user: userFind});
            });

            this.post('/commentaires', (schema, request) => {
                const commentaire = JSON.parse(request.requestBody);
                return schema.db['commentaires'].insert(commentaire);
            });

            this.put('/commentaires/:idCommentaire', (schema, request) => {
                const commentaireId:string = request.params['idCommentaire'];
                const newCommentaire = JSON.parse(request.requestBody);
                const comment = schema.db['commentaires'].findBy({idCommentaire: commentaireId});
                comment.commentaire = newCommentaire;
                schema.db['commentaires'].update(schema.db['commentaires'].findBy({idCommentaire: commentaireId}),comment)
                return comment;
            });



            this.delete('/commentaires/:idCommentaire', (schema, request) => {
                const commentaire = schema.db['commentaires'].findBy({idCommentaire: request.params['idCommentaire']});
                schema.db['commentaires'].remove(commentaire);
                return commentaire;
            });


            this.get('/favoris/user-recette/:nomUser/:recette', (schema, request) => {
                const userFind: string = request.params['nomUser'];
                const recetteName: string = request.params['recette'];
                return schema.db['favoris'].where({user: userFind, favoris: recetteName});
            });

            this.get('/favoris/recette/:recette', (schema, request) => {
                const recetteName: string = request.params['recette'];
                return schema.db['favoris'].where({favoris: recetteName});
            });

            this.get('/favoris', schema => schema.db['favoris']);
            this.get('/favoris/user/:nomUser', (schema, request) => {
                const user: string = request.params['nomUser'];

                return schema.db['favoris'].where({user: user});
            });

            this.post('/favoris', (schema, request) => {
                const favoris = JSON.parse(request.requestBody);
                return schema.db['favoris'].insert(favoris);
            });


            this.delete('/favoris/:user/:recette', (schema, request) => {
                const recetteName: string = request.params['recette'];
                const user: string = request.params['user'];
                const favoris = schema.db['favoris'].findBy({user: user, favoris: recetteName});
                schema.db['favoris'].remove(favoris);
                return favoris;

            });


            this.get('/countries', schema => schema.db['countries']);


        }
    });
};

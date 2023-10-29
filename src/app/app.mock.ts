import {Server} from 'miragejs';
import {commentaires} from "./data/data-loader-commentaire";
import {recettes} from "./data/data-loader-recettes";
import {users} from "./data/data-loader-user";
import {favoris} from "./data/data-loader-favoris";


export default () => {
    new Server({
        seeds(server) {
            server.db.loadData({
                users, recettes, commentaires,favoris
            });
        },
        routes() {
            this.namespace = '/api';

            this.get('/users', schema => schema.db['users']);


            this.get('/users/:email', (schema, request) => {
                const userEmail = request.params['email'];
                return schema.db['users'].findBy({email: userEmail});
            });

            this.post('/users/', (schema, request) => {
                const user = JSON.parse(request.requestBody);
                console.log(user);
                schema.db['users'].insert(user);
                console.log(schema.db['users']);
                return user;
            });


            this.get('/recettes', schema => schema.db['recettes']);
            this.get('/recettes/:nom', (schema, request) => {
                const recetteNom = request.params['nom'];
                return schema.db['recettes'].findBy({nom: recetteNom});
            })
            this.put('recettes/:nom', (schema, request) => {
                const nomRecette = request.params['nom'];
                const recetteFind = schema.db['recettes'].findBy({nom: nomRecette});
                recetteFind.commentaire.push(request.requestBody);
                return recetteFind;
            });


            this.get('/commentaires', schema => schema.db['commentaires']);
            this.get('/commentaires/:nomRecette', (schema, request) => {
                const recette = request.params['nomRecette'];
                const recetteFind = schema.db['recettes'].findBy({nom: recette});
                return schema.db['commentaires'].where({recette: recetteFind.nom});
            });

            this.get('/commentaires/user/:nomUser',(schema,request )=>{
              const userFind = request.params['nomUser'];
              return schema.db['commentaires'].where({user: userFind});
            })

            this.post('/commentaires', (schema, request) => {
                const commentaire = JSON.parse(request.requestBody);
                return schema.db['commentaires'].insert(commentaire);
            });



          this.get('/favoris/user-recette/:nomUser/:recette', (schema,request) =>{
            const userFind = request.params['nomUser'];
            const recetteName = request.params['recette'];
            return schema.db['favoris'].where({user: userFind, favoris: recetteName});
          });

          this.get('/favoris/recette/:recette', (schema,request) =>{
            const recetteName = request.params['recette'];
            return schema.db['favoris'].where({favoris: recetteName});
          });

            this.get('/favoris', schema => schema.db['favoris']);
            this.get('/favoris/user/:nomUser', (schema, request) => {
                const user = request.params['nomUser'];
                console.log(user);
                const userFind = schema.db['users'].findBy({email: user});
                console.log(userFind);
                return schema.db['favoris'].where({user: userFind.email});
            });

            this.post('/favoris', (schema, request) => {
                const favoris = JSON.parse(request.requestBody);
                return schema.db['favoris'].insert(favoris);
            });



            this.delete('/favoris/:user/:recette', (schema, request) => {
                const recetteName = request.params['recette'];
                const user = request.params['user'];
                console.log(user);
                console.log(recetteName);

                 const fav = schema.db['favoris'].findBy({user: user});
                console.log(fav);
            //    const f = fav.findBy({favoris: recette});
                const favoris = schema.db['favoris'].findBy({user: user, favoris: recetteName});
                schema.db['favoris'].remove(favoris);
                console.log(favoris);
                return favoris;

            });




        }
    });
};

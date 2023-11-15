import {Server} from 'miragejs';
import {comments} from "./data/data-loader-comments";
import {recipes} from "./data/data-loader-recipes";
import {users} from "./data/data-loader-user";
import {favoris} from "./data/data-loader-favoris";
import {countries} from "./data/data-loader-country";
import {User} from "./models/user.model";

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        users, recipes, comments, favoris, countries
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
        const users: User[] = schema.db['users'];
        const sortedUsers: User[] = users.sort((a, b) => b.highScore - a.highScore);

        return sortedUsers[0];
      });

      this.post('/users/', (schema, request) => {
        const user: User = JSON.parse(request.requestBody);
        schema.db['users'].insert(user);
        return user;
      });

      this.put('/users/', (schema, request) => {
        const updateUser = JSON.parse(request.requestBody);
        schema.db['users'].update(schema.db['users'].findBy({email: updateUser.email}), updateUser);
        return updateUser;
      });

      this.get('/recipes', schema => schema.db['recipes']);

      this.get('/recipes/:name', (schema, request) => {
        const recipeName: string = request.params['name'];
        return schema.db['recipes'].findBy({name: recipeName});
      });

      this.put('recipes/:name', (schema, request) => {
        const recipeName: string = request.params['name'];
        const recipeFind = schema.db['recipes'].findBy({name: recipeName});
        recipeFind.commentMessage.push(request.requestBody);
        return recipeFind;
      });

      this.get('/recipes/country/:countryName', (schema, request) => {
        const country: string = request.params['countryName'];
        return schema.db['recipes'].where({country: country});
      });

      this.get('/comments', schema => schema.db['comments']);

      this.get('/comments/:recipeName', (schema, request) => {
        const recipe: string = request.params['recipeName'];
        const recipeFind = schema.db['recipes'].findBy({name: recipe});
        return schema.db['comments'].where({recipe: recipeFind.name});
      });

      this.get('/comments/user/:userName', (schema, request) => {
        const userFind: string = request.params['userName'];
        return schema.db['comments'].where({user: userFind});
      });

      this.post('/comments', (schema, request) => {
        const comment = JSON.parse(request.requestBody);
        return schema.db['comments'].insert(comment);
      });

      this.put('/comments/:idComment', (schema, request) => {
        const commentId: string = request.params['idComment'];
        const newComment = JSON.parse(request.requestBody);
        const comment = schema.db['comments'].findBy({idComment: commentId});
        comment.commentaire = newComment;
        schema.db['comments'].update(schema.db['comments'].findBy({idComment: commentId}), comment)
        return comment;
      });

      this.delete('/comments/:idComment', (schema, request) => {
        const comment = schema.db['comments'].findBy({idComment: request.params['idComment']});
        schema.db['comments'].remove(comment);
        return comment;
      });

      this.get('/favoris/user-recipe/:userName/:recipe', (schema, request) => {
        const userFind: string = request.params['userName'];
        const recipeName: string = request.params['recipe'];
        return schema.db['favoris'].where({user: userFind, favoris: recipeName});
      });

      this.get('/favoris/recipe/:recipe', (schema, request) => {
        const recipeName: string = request.params['recipe'];
        return schema.db['favoris'].where({favoris: recipeName});
      });

      this.get('/favoris', schema => schema.db['favoris']);
      this.get('/favoris/user/:userName', (schema, request) => {
        const user: string = request.params['userName'];

        return schema.db['favoris'].where({user: user});
      });

      this.post('/favoris', (schema, request) => {
        const favoris = JSON.parse(request.requestBody);
        return schema.db['favoris'].insert(favoris);
      });

      this.delete('/favoris/:user/:recipe', (schema, request) => {
        const recipeName: string = request.params['recipe'];
        const user: string = request.params['user'];
        const favoris = schema.db['favoris'].findBy({user: user, favoris: recipeName});
        schema.db['favoris'].remove(favoris);
        return favoris;
      });

      this.get('/countries', schema => schema.db['countries']);

    }
  });
};

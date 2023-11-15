export class Recipe {
  public name: string;
  public country: string;
  public content: string;
  public category: string;
  public preparationTime: number;
  public ingredients: string;
  public difficulty: string;
  public calorie: number;
  public preparation: string[];
  public picture: string;

  constructor(
    recipeName: string, countryRecipe: string,
    recipeContent: string, recipeCategory: string,
    time: number, elements: string,
    dificultyRecipe: string, clr: number,
    stepsPreparation: string[], image: string) {
    this.name = recipeName;
    this.country = countryRecipe;
    this.content = recipeContent;
    this.category = recipeCategory;
    this.preparationTime = time;
    this.ingredients = elements;
    this.difficulty = dificultyRecipe;
    this.calorie = clr;
    this.preparation = stepsPreparation;
    this.picture = image;

  }
}

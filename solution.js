// your solution should go here
// for demo purposes use the console for any out you will need.
//recipe object
var recipe = {
  title: "Breaded chicken",
  servings: 4,
  ingredients: ["chicken"," breadcrumbs"," eggs"," flour"]
};
document.write(recipe.title+"<br>");
document.write("Serves: "+recipe.servings+"<br>");
document.write("Ingredients: "+recipe.ingredients+"<br>");
//book object
var books = [
  {
    title: "The Hobbit",
    author : "J.R.R. Tolkien",
    alreadyRead : false
  },
  {
    title: "The Lord of the Rings",
    author : "J.R.R. Tolkien",
    alreadyRead : true
  },
  {
    title: "Born A Crime",
    author : "Trevor Noah",
    alreadyRead : true
  }
];
//first book
document.write(books[0].title+" ");
document.write(books[0].author+"<br>");
//second book
document.write(books[1].title+" ");
document.write(books[1].author+"<br>");
//third book
document.write(books[2].title+" ");
document.write(books[2].author+"<br>");
//if/else statement
if (alreadyRead = true){
  document.write("You already read "+books[1].title+" ");
  document.write(books[1].author+"<br>");
  document.write("You already read "+books[2].title+" ");
  document.write(books[2].author+"<br>");
}
else{
  document.write("You already read "+books[0].title+" ");
  document.write(books[0].author+"<br>");
}

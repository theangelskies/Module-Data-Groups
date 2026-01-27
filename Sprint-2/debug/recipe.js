// Predict and explain first...
// This will log the title and serves correctly, but the ingredients will not
// print as a list. Instead, `${recipe}` converts the entire object to the
// string "[object Object]" because objects don’t automatically format
// their contents when interpolated into a template literal.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

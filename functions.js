//function random() {
//Math.floor(Math.random()*x);
//}

var recipes = [
    {
        id: 1,
        name: "Banana Bread",
        category: "Dessert", 
        synopsis: "This is a great snack for yourself or for sharing with others!",
        instructions: [
            "Grease and flour two 7x3 inch loaf pans. Preheat oven to 350 degrees F (175 degrees C)" , 
            "In one bowl, whisk together flour, soda, salt, and sugar. Mix in slightly beaten eggs, melted butter, and mashed bananas. Stir in nuts if desired. Pour into prepared pans.", 
            "Bake at 350 degrees F (175 degrees C) for 1 hour, or until a wooden toothpick inserted in the center comes out clean.",          
            ], 
        prepTime: 15,
        cookTime: 60,
        yield: "2 - 7x3 inch loaves",
        level: 1,
        ingredients: [
            "1 ½ cups all-purpose flour", 
            "1 teaspoon baking soda", 
            "½ teaspoon salt", 
            "1 cup white sugar", 
            "2 eggs, beaten", 
            "¼ cup butter, melted", 
            "3 bananas, mashed"
        ],
        author: "Nikki", 
        imagePath: "https://www.allrecipes.com/recipe/6687/banana-bread/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%202"
    }, 
    {
        id: 2,
        name: "Mongolian Beef and Spring Onions",
        category: "Asian",
        synopsis: "Great to be served with white rice!",
        instructions: [
            "Heat 2 teaspoons of vegetable oil in a saucepan over medium heat, and cook and stir the garlic and ginger until they release their fragrance, about 30 seconds. Pour in the soy sauce, water, and brown sugar. Raise the heat to medium-high, and stir 4 minutes, until the sugar has dissolved and the sauce boils and slightly thickens. Remove sauce from the heat, and set aside.", 
            "Place the sliced beef into a bowl, and stir the cornstarch into the beef, coating it thoroughly. Allow the beef and cornstarch to sit until most of the juices from the meat have been absorbed by the cornstarch, about 10 minutes.", 
            "Heat the vegetable oil in a deep-sided skillet or wok to 375 degrees F (190 degrees C).", 
            "Shake excess cornstarch from the beef slices, and drop them into the hot oil, a few at a time. Stir briefly, and fry until the edges become crisp and start to brown, about 2 minutes. Remove the beef from the oil with a large slotted spoon, and allow to drain on paper towels to remove excess oil.", 
            "Pour the oil out of the skillet or wok, and return the pan to medium heat. Return the beef slices to the pan, stir briefly, and pour in the reserved sauce. Stir once or twice to combine, and add the green onions. Bring the mixture to a boil, and cook until the onions have softened and turned bright green, about 2 minutes."
        ], 
        prepTime: 12,
        cookTime: 8,
        yield: "4 servings",
        level: 2,
        ingredients: [
            "2 teaspoons vegetable oil",
            "1 tablespoon finely chopped garlic",
            "½ teaspoon grated fresh ginger root", 
            "½ cup soy sauce", 
            "½ cup water", 
            "⅔ cup dark brown sugar", 
            "1 pound beef flank steak, sliced 1/4 inch thick on the diagonal", 
            "¼ cup cornstarch", 
            "1 cup vegetable oil for frying", 
            "2 bunches green onions, cut in 2-inch lengths"
        ],
        author: "vcarlson",
        imagePath: "https://www.allrecipes.com/recipe/201849/mongolian-beef-and-spring-onions/?internalSource=previously%20viewed&referringContentType=Homepage"
    }, 
    {
        id: 3, 
        name: "Grilled Sausage with Potatoes and Green Beans", 
        category: "BBQ and Grilling", 
        synopsis: "An old crock-pot favorite ready for the grill", 
        instructions: [
            "Preheat an outdoor grill for high heat.", 
            "On a large sheet of foil, place the green beans, red potatoes, onion, and sausage. Season with salt and pepper, sprinkle with oil, and top with butter. Tightly seal foil around the ingredients, leaving only a small opening. Pour water into the opening, and seal.", 
            "Place foil packet on the prepared grill. Cook 20 to 30 minutes, turning once, until sausage is browned and vegetables are tender."
        ], 
        prepTime: 25, 
        cookTime: 20, 
        yield: "4 servings", 
        level: 2, 
        ingredients: [
            "3/4 pound fresh green beans, trimmed and halved", 
            "1/2 pound red potatoes, quartered", 
            "1 large onion, sliced", 
            "1 pound smoked sausage, cut into 1 inch pieces", 
            "1 teaspoon salt", 
            "1 teaspoon ground black pepper", 
            "1 teaspoon vegetable oil", 
            "1 teaspoon butter", 
            "1/3 cup water"
        ], 
        author: "Tonya Merriman", 
        imagePath: "https://www.allrecipes.com/recipe/50849/grilled-sausage-with-potatoes-and-green-beans/?internalSource=recipe%20hub&referringId=88&referringContentType=Recipe%20Hub&clickId=cardslot%2059"
    }
];

loadRecipes();
function loadRecipes() {
        var listDiv = document.createElement("div");
        document.getElementById("recipes").appendChild(listDiv);
        for (var i=0; i<recipes.length; i++) {
              var recipe = recipes[i];

              //add recipe to list
              var listItem = document.createElement("li"); 
              listItem.style.fontSize = "22px";
              listItem.style.paddingBottom = "10px";
              listItem.innerHTML = "<a href='#recipe-" + i + "'>" + recipe.name + "</a>";                 
              listDiv.appendChild(listItem);

              //add child elements to div
                var section = document.createElement("section");
               section.setAttribute("class", "recipe-box") 
                document.getElementById("recipes").appendChild(section);

                //add recipe name
                var recipeName = document.createElement("h3");
                recipeName.setAttribute("class", "recipe-title")
                recipeName.setAttribute("id", ("recipe-"+i))
                recipeName.innerHTML = recipe.name
                section.appendChild(recipeName);

                 //add prep time
                 var prepTime = document.createElement("p");
                 prepTime.innerHTML = "Prep Time: " + recipe.prepTime + " minutes"; 
                 section.appendChild(prepTime);

                //add cook time
                var cookTime = document.createElement("p");
                cookTime.innerHTML = "Cook Time: " + recipe.cookTime + " minutes";
                section.appendChild(cookTime);

                //add ingredients
                var ingredients = document.createElement("p")
                ingredients.innerHTML = "Ingredients: ";

                var ingredientsList = document.createElement("ul");
                ingredients.appendChild(ingredientsList);
                ingredients.setAttribute("class", "ingredients");
                section.appendChild(ingredients);

                for (let j=0; j<recipe.ingredients.length; j++) {
                        var ingredientsItems = document.createElement("li");
                        ingredientsItems.innerHTML = recipe.ingredients[j];
                        ingredientsList.appendChild(ingredientsItems);
                }

                //add instructions
                var instructions = document.createElement("p");
                instructions.innerHTML = "Instructions: ";
                
                var instructionsList = document.createElement("ol");
                instructions.appendChild(instructionsList);
                section.appendChild(instructions);

                for (let g=0; g<recipe.instructions.length; g++) {
                        var instructionsSteps = document.createElement("li");
                        instructionsSteps.innerHTML = recipe.instructions[g];
                        instructionsList.appendChild(instructionsSteps);
                }

                //create button
                var button = document.createElement("button");
                button.setAttribute("id", i);
                button.style.padding = "10px 10px";
                button.style.borderRadius = "5px";
                button.style.backgroundColor = "#edeaea";
                button.style.textTransform = "uppercase";
                button.innerHTML = "Start Timer";
                button.onclick = function(i) {
                    bindTimer(i.target.id)
                };
                section.appendChild(button);
        }
}  

function bindTimer(i)  {
            var recipe = recipes[i]

                //add recipe name to timer
                var timerName = document.getElementById("timerName");
                timerName.innerHTML = recipe.name;
                
                //add time to timer
                var minutes = recipe.cookTime;
                var seconds = minutes * 60 //convert minutes to seconds
                var timer = document.getElementById("timer")
                timer.style.fontSize = "25px";
                timer.style.color = "#5b5858"
        

         //countdown 
         var myTimer = setInterval(function() { 
            timer.innerHTML = seconds + " seconds";
            if (seconds<=0) {
                clearInterval(myTimer)
            }
            seconds-- 
        }, 1000);
}   


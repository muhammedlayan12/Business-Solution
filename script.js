$(document).ready(function(){
    $(".next").click(function(){
        let slide = $(".slide");
        $(".slides").append(slide.first());
    });

    $(".prev").click(function(){
        let slide = $(".slide");
        $(".slides").prepend(slide.last());
    });
})



 // Fetch recipes from a JSON file
 $.getJSON('card.json', function(data) {
    let recipes = data.recipes;
    let recipeList = $('#r');

    // Display recipes
    recipes.forEach(recipe => {
        let card = `
            <div class="col-md-4">
                <div class="card recipe-card">
                    <img src="${recipe.image}" class="card-img-top recipe-image" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                        <a href="recipe.html?id=${recipe.id}" class="btn btn-primary">View Recipe</a>
                    </div>
                </div>
            </div>
        `;
        recipeList.append(card);
    });
});


const recipes = {
    recipe1: {
        name: "Peanut Butter and Jelly Sandwich",
        image: "src/css/img/pb&j.jpg",
        ingredients: {
            ingredient1: {
                name: "Peanut Butter",
                amount: "2 tbsp",
                id: 1
            }, 
            ingredient2: {
                name: "Grape Jelly",
                amount: "2 tbsp",
                id: 2
            },
            ingredient3: {
                name: "Sliced Bread",
                amount: "2 slices",
                id: 3
            }
        },
        servings: "1 sandwich",
        instructions: {
            step1: {
                instruction: "(Optional) place sliced bread in toaster or toaster oven until lightly browned",
                id: 1
            },
            step2: {
                instruction: "Place bread toasted or plain on flat clean surface and spread peanut butter evenly on one slice and jelly on the other",
                id: 2
            },
            step3: {
                instruction: "Flip the peanut butter slice over on top of the jelly slice creating the sandwich",
                id: 3
            },
            step4: {
                instruction: "Enjoy!",
                id: 4
            },
        }
    }
}

export default recipes;
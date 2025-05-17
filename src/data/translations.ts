interface Translations {
    [key: string]: {
        en: string;
        es: string;
    };
}

interface RecipeTranslation {
    title: { en: string; es: string };
    description: { en: string; es: string };
    ingredients: { en: string[]; es: string[] };
    instructions: { en: string[]; es: string[] };
}

export const translations: Translations = {
    'banner.title': {
        en: 'Meal Prep Recipes',
        es: 'Recetas para Preparar Comidas'
    },
    'banner.description': {
        en: 'Welcome to Meal Prep with Bella! Here you\'ll find a curated collection of my favorite meal prep recipes, gathered over the last few years. My goal is to make your week easier, tastier, and more organized with delicious, tried-and-true recipes perfect for prepping ahead.',
        es: '¡Bienvenido a Preparación de Comidas con Bella! Aquí encontrarás una colección seleccionada de mis recetas favoritas para preparar comidas, recopiladas durante los últimos años. Mi objetivo es hacer que tu semana sea más fácil, sabrosa y organizada con deliciosas recetas probadas y perfectas para preparar con anticipación.'
    },
    'recipe.prepTime': {
        en: 'Prep Time',
        es: 'Tiempo de Preparación'
    },
    'recipe.cookTime': {
        en: 'Cook Time',
        es: 'Tiempo de Cocción'
    },
    'recipe.servings': {
        en: 'Servings',
        es: 'Porciones'
    },
    'recipe.ingredients': {
        en: 'Ingredients',
        es: 'Ingredientes'
    },
    'recipe.instructions': {
        en: 'Instructions',
        es: 'Instrucciones'
    },
    'recipe.backButton': {
        en: '← Back to Recipes',
        es: '← Volver a Recetas'
    },
    'language.toggle': {
        en: 'Español',
        es: 'English'
    }
};

export const recipeTranslations: Record<string, RecipeTranslation> = {
    'tuscan-chicken': {
        title: {
            en: 'Creamy Tuscan Chicken',
            es: 'Pollo a la Toscana Cremoso'
        },
        description: {
            en: 'A delicious creamy chicken dish with sun-dried tomatoes and spinach.',
            es: 'Un delicioso plato de pollo cremoso con tomates secos y espinacas.'
        },
        ingredients: {
            en: [
                '5 boneless, skinless chicken breasts',
                '2/3 cup all-purpose flour',
                '1 tablespoons unsalted butter',
                '1 yellow onion, diced',
                '2 garlic cloves, minced',
                '1/4 cup sun-dried tomatoes, thinly sliced',
                '2 cups heavy cream',
                '3 ounces Parmesan, grated',
                '2 1/2 ounces spinach leaves',
                'Salt and pepper to taste'
            ],
            es: [
                '5 pechugas de pollo sin hueso ni piel',
                '2/3 taza de harina para todo uso',
                '1 cucharada de mantequilla sin sal',
                '1 cebolla amarilla, picada',
                '2 dientes de ajo, picados',
                '1/4 taza de tomates secos, en rodajas finas',
                '2 tazas de crema espesa',
                '3 onzas de queso parmesano, rallado',
                '2 1/2 onzas de hojas de espinaca',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                "Preheat oven to 375°F (190°C). Lightly grease a 9x13-inch baking dish.",
                "Slice each chicken breast in half lengthwise to create 10 thinner pieces.",
                "Season both sides of each chicken piece with salt and pepper.",
                "Dredge chicken in flour, shaking off any excess, and place in the baking dish.",
                "In a mixing bowl, combine melted butter, diced onion, minced garlic, sun-dried tomatoes, heavy cream, grated Parmesan, salt, and pepper.",
                "Stir in spinach leaves until evenly coated in the mixture.",
                "Pour the cream mixture evenly over the chicken in the baking dish.",
                "Cover the dish loosely with foil and bake for 25 minutes.",
                "Remove foil and bake for an additional 10–15 minutes, or until the chicken reaches an internal temperature of 165°F (74°C) and the top is slightly golden.",
                "Let rest for 5 minutes before serving. Spoon sauce over chicken before plating."
            ],
            es: [
                "Precaliente el horno a 375°F (190°C). Engrase ligeramente un molde para hornear de 9x13 pulgadas.",
                "Corte cada pechuga de pollo por la mitad a lo largo para crear 10 piezas más delgadas.",
                "Sazone ambos lados de cada pieza de pollo con sal y pimienta.",
                "Enharine el pollo, sacudiendo el exceso, y colóquelo en el molde para hornear.",
                "En un tazón, combine la mantequilla derretida, la cebolla picada, el ajo picado, los tomates secos, la crema espesa, el parmesano rallado, sal y pimienta.",
                "Revuelva las hojas de espinaca hasta que estén uniformemente cubiertas con la mezcla.",
                "Vierta la mezcla de crema uniformemente sobre el pollo en el molde para hornear.",
                "Cubra el molde ligeramente con papel aluminio y hornee durante 25 minutos.",
                "Retire el papel aluminio y hornee durante 10-15 minutos adicionales, o hasta que el pollo alcance una temperatura interna de 165°F (74°C) y la parte superior esté ligeramente dorada.",
                "Deje reposar durante 5 minutos antes de servir. Vierta la salsa sobre el pollo antes de emplatar."
            ]
        }
    },
    'tallarines-verdes': {
        title: {
            en: 'Tallarines Verdes con Lomo',
            es: 'Tallarines Verdes con Lomo'
        },
        description: {
            en: 'Peruvian green pasta with tender beef, made with a creamy basil sauce.',
            es: 'Pasta verde peruana con carne tierna, hecha con una salsa cremosa de albahaca.'
        },
        ingredients: {
            en: [
                '1 pound fettuccine pasta',
                '1 pound beef tenderloin, sliced',
                '2 cups fresh basil leaves',
                '1/2 cup evaporated milk',
                '1/4 cup walnuts',
                '1/4 cup Parmesan cheese',
                '2 cloves garlic',
                '1 onion, diced',
                '2 tablespoons olive oil',
                'Salt and pepper to taste'
            ],
            es: [
                '1 libra de pasta fettuccine',
                '1 libra de lomo fino, en rodajas',
                '2 tazas de hojas de albahaca fresca',
                '1/2 taza de leche evaporada',
                '1/4 taza de nueces',
                '1/4 taza de queso parmesano',
                '2 dientes de ajo',
                '1 cebolla, picada',
                '2 cucharadas de aceite de oliva',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Cook pasta according to package instructions.',
                'In a blender, combine basil, milk, walnuts, cheese, and garlic. Blend until smooth.',
                'Heat olive oil in a large pan and cook beef until desired doneness.',
                'Add onion and cook until softened.',
                'Add the green sauce and cook for 5 minutes.',
                'Toss with cooked pasta.',
                'Season with salt and pepper to taste.'
            ],
            es: [
                'Cocine la pasta según las instrucciones del paquete.',
                'En una licuadora, combine la albahaca, la leche, las nueces, el queso y el ajo. Licúe hasta que quede suave.',
                'Caliente el aceite de oliva en una sartén grande y cocine la carne hasta el punto deseado.',
                'Agregue la cebolla y cocine hasta que esté suave.',
                'Agregue la salsa verde y cocine durante 5 minutos.',
                'Mezcle con la pasta cocida.',
                'Sazone con sal y pimienta al gusto.'
            ]
        }
    },
    'mac-and-cheese': {
        title: {
            en: 'Baked Mac and Cheese',
            es: 'Macarrones con Queso al Horno'
        },
        description: {
            en: 'Creamy, cheesy, and perfectly baked mac and cheese.',
            es: 'Macarrones con queso cremosos y perfectamente horneados.'
        },
        ingredients: {
            en: [
                '1 lb. dried elbow pasta',
                '2 Tbsp. unsalted butter',
                '1/2 cup all purpose flour',
                '1 cup whole milk',
                '1 1/2 cups half and half',
                '4 cups grated medium sharp cheddar cheese',
                '2 cups grated Gruyere cheese',
                '1/2 Tbsp. salt',
                '1/2 tsp. black pepper',
                '1/4 tsp. paprika'
            ],
            es: [
                '1 libra de pasta coditos seca',
                '2 cucharadas de mantequilla sin sal',
                '1/2 taza de harina para todo uso',
                '1 taza de leche entera',
                '1 1/2 tazas de mitad y mitad',
                '4 tazas de queso cheddar rallado',
                '2 tazas de queso Gruyere rallado',
                '1/2 cucharada de sal',
                '1/2 cucharadita de pimienta negra',
                '1/4 cucharadita de paprika'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 325 degrees F and grease a 3 qt baking dish.',
                'Cook pasta according to package instructions.',
                'Melt butter in a large saucepan over medium heat.',
                'Add flour and whisk for 1 minute.',
                'Gradually add milk and half and half, whisking constantly.',
                'Cook for 3-4 minutes until thickened.',
                'Remove from heat and stir in cheeses, salt, pepper, and paprika.',
                'Add cooked pasta and stir to combine.',
                'Pour into prepared baking dish.',
                'Bake for 15 minutes, then broil for 3 minutes until top is golden brown.'
            ],
            es: [
                'Precaliente el horno a 325 grados F y engrase un molde para hornear de 3 cuartos.',
                'Cocine la pasta según las instrucciones del paquete.',
                'Derrita la mantequilla en una cacerola grande a fuego medio.',
                'Agregue la harina y bata durante 1 minuto.',
                'Agregue gradualmente la leche y la mitad y mitad, batiendo constantemente.',
                'Cocine durante 3-4 minutos hasta que espese.',
                'Retire del fuego y revuelva los quesos, la sal, la pimienta y la paprika.',
                'Agregue la pasta cocida y revuelva para combinar.',
                'Vierta en el molde para hornear preparado.',
                'Hornee durante 15 minutos, luego ase durante 3 minutos hasta que la parte superior esté dorada.'
            ]
        }
    },
    'seven-layer-dip': {
        title: {
            en: 'Six Layer Dip',
            es: 'Dip de Seis Capas'
        },
        description: {
            en: 'A delicious layered dip with refried beans, guacamole, sour cream, and more.',
            es: 'Un delicioso dip en capas con frijoles refritos, guacamole, crema agria y más.'
        }
    },
    'japchae': {
        title: {
            en: 'Japchae (Korean Glass Noodle Stir Fry)',
            es: 'Japchae (Salteado de Fideos de Cristal Coreanos)'
        },
        description: {
            en: 'Traditional Korean glass noodle stir fry with vegetables.',
            es: 'Salteado tradicional coreano de fideos de cristal con verduras.'
        }
    },
    'burger-fries': {
        title: {
            en: 'Burger and Fries Meal Prep',
            es: 'Preparación de Hamburguesas y Papas Fritas'
        },
        description: {
            en: 'Healthy burger and fries meal prep for the week.',
            es: 'Preparación saludable de hamburguesas y papas fritas para la semana.'
        }
    },
    'turkey-meatballs': {
        title: {
            en: 'Easy Turkey Meatballs',
            es: 'Albóndigas de Pavo Fáciles'
        },
        description: {
            en: 'Simple and delicious turkey meatballs recipe.',
            es: 'Receta simple y deliciosa de albóndigas de pavo.'
        }
    },
    'cocktail-meatballs': {
        title: {
            en: 'Cocktail Meatballs',
            es: 'Albóndigas para Cocktail'
        },
        description: {
            en: 'Perfect party appetizer with sweet and tangy sauce.',
            es: 'Perfecto aperitivo para fiestas con salsa dulce y picante.'
        }
    },
    'meatloaf': {
        title: {
            en: 'Classic Meatloaf',
            es: 'Pastel de Carne Clásico'
        },
        description: {
            en: 'The best classic meatloaf recipe with a sweet glaze.',
            es: 'La mejor receta clásica de pastel de carne con un glaseado dulce.'
        }
    },
    'classic-chili': {
        title: {
            en: 'Classic Chili',
            es: 'Chili Clásico'
        },
        description: {
            en: 'The best classic chili recipe with ground beef and beans.',
            es: 'La mejor receta clásica de chili con carne molida y frijoles.'
        }
    },
    'mexican-picadillo': {
        title: {
            en: 'Mexican Picadillo',
            es: 'Picadillo Mexicano'
        },
        description: {
            en: 'Traditional Mexican ground beef dish with potatoes, carrots, and raisins.',
            es: 'Plato tradicional mexicano de carne molida con papas, zanahorias y pasas.'
        }
    },
    'instant-pot-beef-stew': {
        title: {
            en: 'Instant Pot Beef Stew',
            es: 'Estofado de Res en Olla Instantánea'
        },
        description: {
            en: 'Hearty beef stew made quickly in the Instant Pot with tender meat and vegetables.',
            es: 'Sustancioso estofado de res hecho rápidamente en la Olla Instantánea con carne tierna y verduras.'
        }
    },
    'homemade-marinara': {
        title: {
            en: 'Homemade Marinara Sauce',
            es: 'Salsa Marinara Casera'
        },
        description: {
            en: 'Classic Italian marinara sauce made with San Marzano tomatoes.',
            es: 'Salsa marinara italiana clásica hecha con tomates San Marzano.'
        }
    },
    'chicken-souffle': {
        title: {
            en: 'Chicken Soufflé',
            es: 'Soufflé de Pollo'
        },
        description: {
            en: 'A light and fluffy chicken soufflé that\'s perfect for any occasion.',
            es: 'Un soufflé de pollo ligero y esponjoso perfecto para cualquier ocasión.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, cooked and shredded',
                '4 eggs, separated',
                '1 cup milk',
                '1/4 cup butter',
                '1/4 cup flour',
                '1 cup cheese, grated',
                '1/4 teaspoon salt',
                '1/4 teaspoon pepper',
                '1/4 teaspoon nutmeg'
            ],
            es: [
                '4 pechugas de pollo, cocidas y desmenuzadas',
                '4 huevos, separados',
                '1 taza de leche',
                '1/4 taza de mantequilla',
                '1/4 taza de harina',
                '1 taza de queso, rallado',
                '1/4 cucharadita de sal',
                '1/4 cucharadita de pimienta',
                '1/4 cucharadita de nuez moscada'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 375°F (190°C).',
                'Melt butter in a saucepan over medium heat.',
                'Add flour and stir until smooth.',
                'Gradually add milk, stirring constantly until thickened.',
                'Remove from heat and add cheese, stirring until melted.',
                'Beat egg yolks and add to the mixture.',
                'Add shredded chicken and seasonings.',
                'Beat egg whites until stiff peaks form.',
                'Fold egg whites into the chicken mixture.',
                'Pour into a greased soufflé dish and bake for 30-35 minutes.'
            ],
            es: [
                'Precaliente el horno a 375°F (190°C).',
                'Derrita la mantequilla en una cacerola a fuego medio.',
                'Agregue la harina y revuelva hasta que quede suave.',
                'Agregue gradualmente la leche, revolviendo constantemente hasta que espese.',
                'Retire del fuego y agregue el queso, revolviendo hasta que se derrita.',
                'Bata las yemas de huevo y agregue a la mezcla.',
                'Agregue el pollo desmenuzado y los condimentos.',
                'Bata las claras de huevo hasta que formen picos firmes.',
                'Incorpore las claras de huevo a la mezcla de pollo.',
                'Vierta en un molde para soufflé engrasado y hornee durante 30-35 minutos.'
            ]
        }
    },
    'chicken-marsala': {
        title: {
            en: 'Chicken Marsala',
            es: 'Pollo Marsala'
        },
        description: {
            en: 'Classic Italian dish with tender chicken in a rich Marsala wine sauce.',
            es: 'Plato italiano clásico con pollo tierno en una rica salsa de vino Marsala.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '1/2 cup flour',
                '1/4 cup olive oil',
                '8 ounces mushrooms, sliced',
                '1/2 cup Marsala wine',
                '1/2 cup chicken broth',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '1/2 taza de harina',
                '1/4 taza de aceite de oliva',
                '8 onzas de champiñones, en rodajas',
                '1/2 taza de vino Marsala',
                '1/2 taza de caldo de pollo',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Season chicken with salt and pepper.',
                'Dredge chicken in flour, shaking off excess.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Remove chicken and set aside.',
                'Add mushrooms to the skillet and cook until softened.',
                'Add Marsala wine and chicken broth.',
                'Return chicken to the skillet and simmer for 5 minutes.',
                'Add butter and stir until melted.',
                'Garnish with chopped parsley before serving.'
            ],
            es: [
                'Sazone el pollo con sal y pimienta.',
                'Enharine el pollo, sacudiendo el exceso.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Retire el pollo y reserve.',
                'Agregue los champiñones a la sartén y cocine hasta que estén suaves.',
                'Agregue el vino Marsala y el caldo de pollo.',
                'Regrese el pollo a la sartén y cocine a fuego lento durante 5 minutos.',
                'Agregue la mantequilla y revuelva hasta que se derrita.',
                'Adorne con perejil picado antes de servir.'
            ]
        }
    },
    'chicken-parmesan': {
        title: {
            en: 'Chicken Parmesan',
            es: 'Pollo a la Parmesana'
        },
        description: {
            en: 'Crispy breaded chicken topped with marinara sauce and melted cheese.',
            es: 'Pollo empanizado crujiente cubierto con salsa marinara y queso derretido.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '1 cup breadcrumbs',
                '1/2 cup Parmesan cheese, grated',
                '2 eggs, beaten',
                '1 cup marinara sauce',
                '2 cups mozzarella cheese, shredded',
                '1/4 cup olive oil',
                '2 tablespoons fresh basil, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '1 taza de pan rallado',
                '1/2 taza de queso parmesano, rallado',
                '2 huevos, batidos',
                '1 taza de salsa marinara',
                '2 tazas de queso mozzarella, rallado',
                '1/4 taza de aceite de oliva',
                '2 cucharadas de albahaca fresca, picada',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 400°F (200°C).',
                'Mix breadcrumbs and Parmesan cheese in a shallow dish.',
                'Season chicken with salt and pepper.',
                'Dip chicken in beaten eggs, then coat with breadcrumb mixture.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Place chicken in a baking dish.',
                'Top each piece with marinara sauce and mozzarella cheese.',
                'Bake for 15-20 minutes until cheese is melted and bubbly.',
                'Garnish with fresh basil before serving.'
            ],
            es: [
                'Precaliente el horno a 400°F (200°C).',
                'Mezcle el pan rallado y el queso parmesano en un plato hondo.',
                'Sazone el pollo con sal y pimienta.',
                'Sumerja el pollo en los huevos batidos, luego cubra con la mezcla de pan rallado.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Coloque el pollo en un molde para hornear.',
                'Cubra cada pieza con salsa marinara y queso mozzarella.',
                'Hornee durante 15-20 minutos hasta que el queso esté derretido y burbujeante.',
                'Adorne con albahaca fresca antes de servir.'
            ]
        }
    },
    'chicken-piccata': {
        title: {
            en: 'Chicken Piccata',
            es: 'Pollo Piccata'
        },
        description: {
            en: 'Tender chicken in a tangy lemon and caper sauce.',
            es: 'Pollo tierno en una salsa picante de limón y alcaparras.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '1/2 cup flour',
                '1/4 cup olive oil',
                '1/2 cup chicken broth',
                '1/4 cup lemon juice',
                '2 tablespoons capers',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '1/2 taza de harina',
                '1/4 taza de aceite de oliva',
                '1/2 taza de caldo de pollo',
                '1/4 taza de jugo de limón',
                '2 cucharadas de alcaparras',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Season chicken with salt and pepper.',
                'Dredge chicken in flour, shaking off excess.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Remove chicken and set aside.',
                'Add chicken broth and lemon juice to the skillet.',
                'Add capers and simmer for 2-3 minutes.',
                'Return chicken to the skillet and simmer for 5 minutes.',
                'Add butter and stir until melted.',
                'Garnish with chopped parsley before serving.'
            ],
            es: [
                'Sazone el pollo con sal y pimienta.',
                'Enharine el pollo, sacudiendo el exceso.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Retire el pollo y reserve.',
                'Agregue el caldo de pollo y el jugo de limón a la sartén.',
                'Agregue las alcaparras y cocine a fuego lento durante 2-3 minutos.',
                'Regrese el pollo a la sartén y cocine a fuego lento durante 5 minutos.',
                'Agregue la mantequilla y revuelva hasta que se derrita.',
                'Adorne con perejil picado antes de servir.'
            ]
        }
    },
    'chicken-francese': {
        title: {
            en: 'Chicken Francese',
            es: 'Pollo Francese'
        },
        description: {
            en: 'Delicate chicken in a light lemon and white wine sauce.',
            es: 'Pollo delicado en una ligera salsa de limón y vino blanco.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '1/2 cup flour',
                '2 eggs, beaten',
                '1/4 cup olive oil',
                '1/2 cup white wine',
                '1/2 cup chicken broth',
                '1/4 cup lemon juice',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '1/2 taza de harina',
                '2 huevos, batidos',
                '1/4 taza de aceite de oliva',
                '1/2 taza de vino blanco',
                '1/2 taza de caldo de pollo',
                '1/4 taza de jugo de limón',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Season chicken with salt and pepper.',
                'Dredge chicken in flour, then dip in beaten eggs.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Remove chicken and set aside.',
                'Add white wine, chicken broth, and lemon juice to the skillet.',
                'Simmer for 2-3 minutes.',
                'Return chicken to the skillet and simmer for 5 minutes.',
                'Add butter and stir until melted.',
                'Garnish with chopped parsley before serving.'
            ],
            es: [
                'Sazone el pollo con sal y pimienta.',
                'Enharine el pollo, luego sumérjalo en los huevos batidos.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Retire el pollo y reserve.',
                'Agregue el vino blanco, el caldo de pollo y el jugo de limón a la sartén.',
                'Cocine a fuego lento durante 2-3 minutos.',
                'Regrese el pollo a la sartén y cocine a fuego lento durante 5 minutos.',
                'Agregue la mantequilla y revuelva hasta que se derrita.',
                'Adorne con perejil picado antes de servir.'
            ]
        }
    },
    'chicken-cordon-bleu': {
        title: {
            en: 'Chicken Cordon Bleu',
            es: 'Pollo Cordon Bleu'
        },
        description: {
            en: 'Stuffed chicken breast with ham and cheese, breaded and baked.',
            es: 'Pechuga de pollo rellena con jamón y queso, empanizada y horneada.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '4 slices ham',
                '4 slices Swiss cheese',
                '1 cup breadcrumbs',
                '1/2 cup Parmesan cheese, grated',
                '2 eggs, beaten',
                '1/4 cup olive oil',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '4 rebanadas de jamón',
                '4 rebanadas de queso suizo',
                '1 taza de pan rallado',
                '1/2 taza de queso parmesano, rallado',
                '2 huevos, batidos',
                '1/4 taza de aceite de oliva',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 375°F (190°C).',
                'Place a slice of ham and cheese on each chicken breast.',
                'Roll up and secure with toothpicks.',
                'Mix breadcrumbs and Parmesan cheese in a shallow dish.',
                'Dip chicken rolls in beaten eggs, then coat with breadcrumb mixture.',
                'Heat olive oil and butter in a large skillet over medium heat.',
                'Cook chicken rolls until golden brown, about 3-4 minutes per side.',
                'Transfer to a baking dish and bake for 20-25 minutes.',
                'Remove toothpicks before serving.',
                'Garnish with chopped parsley.'
            ],
            es: [
                'Precaliente el horno a 375°F (190°C).',
                'Coloque una rebanada de jamón y queso en cada pechuga de pollo.',
                'Enrolle y asegure con palillos.',
                'Mezcle el pan rallado y el queso parmesano en un plato hondo.',
                'Sumerja los rollos de pollo en los huevos batidos, luego cubra con la mezcla de pan rallado.',
                'Caliente el aceite de oliva y la mantequilla en una sartén grande a fuego medio.',
                'Cocine los rollos de pollo hasta que estén dorados, aproximadamente 3-4 minutos por lado.',
                'Transfiera a un molde para hornear y hornee durante 20-25 minutos.',
                'Retire los palillos antes de servir.',
                'Adorne con perejil picado.'
            ]
        }
    },
    'chicken-scallopini': {
        title: {
            en: 'Chicken Scallopini',
            es: 'Pollo Escalopini'
        },
        description: {
            en: 'Thin chicken cutlets in a rich mushroom and wine sauce.',
            es: 'Filetes finos de pollo en una rica salsa de champiñones y vino.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '1/2 cup flour',
                '1/4 cup olive oil',
                '8 ounces mushrooms, sliced',
                '1/2 cup white wine',
                '1/2 cup chicken broth',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '1/2 taza de harina',
                '1/4 taza de aceite de oliva',
                '8 onzas de champiñones, en rodajas',
                '1/2 taza de vino blanco',
                '1/2 taza de caldo de pollo',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Season chicken with salt and pepper.',
                'Dredge chicken in flour, shaking off excess.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Remove chicken and set aside.',
                'Add mushrooms to the skillet and cook until softened.',
                'Add white wine and chicken broth.',
                'Return chicken to the skillet and simmer for 5 minutes.',
                'Add butter and stir until melted.',
                'Garnish with chopped parsley before serving.'
            ],
            es: [
                'Sazone el pollo con sal y pimienta.',
                'Enharine el pollo, sacudiendo el exceso.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Retire el pollo y reserve.',
                'Agregue los champiñones a la sartén y cocine hasta que estén suaves.',
                'Agregue el vino blanco y el caldo de pollo.',
                'Regrese el pollo a la sartén y cocine a fuego lento durante 5 minutos.',
                'Agregue la mantequilla y revuelva hasta que se derrita.',
                'Adorne con perejil picado antes de servir.'
            ]
        }
    },
    'chicken-saltimbocca': {
        title: {
            en: 'Chicken Saltimbocca',
            es: 'Pollo Saltimbocca'
        },
        description: {
            en: 'Chicken wrapped in prosciutto and sage, in a white wine sauce.',
            es: 'Pollo envuelto en prosciutto y salvia, en una salsa de vino blanco.'
        },
        ingredients: {
            en: [
                '4 chicken breasts, pounded thin',
                '4 slices prosciutto',
                '8 fresh sage leaves',
                '1/2 cup flour',
                '1/4 cup olive oil',
                '1/2 cup white wine',
                '1/2 cup chicken broth',
                '2 tablespoons butter',
                '2 tablespoons parsley, chopped',
                'Salt and pepper to taste'
            ],
            es: [
                '4 pechugas de pollo, aplanadas',
                '4 rebanadas de prosciutto',
                '8 hojas frescas de salvia',
                '1/2 taza de harina',
                '1/4 taza de aceite de oliva',
                '1/2 taza de vino blanco',
                '1/2 taza de caldo de pollo',
                '2 cucharadas de mantequilla',
                '2 cucharadas de perejil, picado',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Place a slice of prosciutto and 2 sage leaves on each chicken breast.',
                'Secure with toothpicks.',
                'Season with salt and pepper.',
                'Dredge in flour, shaking off excess.',
                'Heat olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 3-4 minutes per side.',
                'Remove chicken and set aside.',
                'Add white wine and chicken broth to the skillet.',
                'Return chicken to the skillet and simmer for 5 minutes.',
                'Add butter and stir until melted.',
                'Remove toothpicks before serving.',
                'Garnish with chopped parsley.'
            ],
            es: [
                'Coloque una rebanada de prosciutto y 2 hojas de salvia en cada pechuga de pollo.',
                'Asegure con palillos.',
                'Sazone con sal y pimienta.',
                'Enharine, sacudiendo el exceso.',
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Cocine el pollo hasta que esté dorado, aproximadamente 3-4 minutos por lado.',
                'Retire el pollo y reserve.',
                'Agregue el vino blanco y el caldo de pollo a la sartén.',
                'Regrese el pollo a la sartén y cocine a fuego lento durante 5 minutos.',
                'Agregue la mantequilla y revuelva hasta que se derrita.',
                'Retire los palillos antes de servir.',
                'Adorne con perejil picado.'
            ]
        }
    }
}; 
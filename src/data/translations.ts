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
                '1 libra de lomo de res, en rodajas',
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
                '4 tazas de queso cheddar mediano rallado',
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
                'Precaliente el horno a 325 grados F y engrase un molde para hornear de 3 qt.',
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
        },
        ingredients: {
            en: [
                '1 (16 ounce) can refried beans',
                '1 (1 ounce) package taco seasoning mix',
                '1 (8 ounce) package cream cheese, softened',
                '1 (16 ounce) container sour cream',
                '1 (16 ounce) jar salsa',
                '1 large tomato, chopped',
                '1 green bell pepper, chopped',
                '1 bunch chopped green onions',
                '2 cups shredded Cheddar cheese',
                '1 (6 ounce) can sliced black olives, drained'
            ],
            es: [
                '1 lata (16 onzas) de frijoles refritos',
                '1 paquete (1 onza) de mezcla de condimentos para tacos',
                '1 paquete (8 onzas) de queso crema, ablandado',
                '1 contenedor (16 onzas) de crema agria',
                '1 frasco (16 onzas) de salsa',
                '1 tomate grande, picado',
                '1 pimiento verde, picado',
                '1 manojo de cebollas verdes picadas',
                '2 tazas de queso Cheddar rallado',
                '1 lata (6 onzas) de aceitunas negras en rodajas, escurridas'
            ]
        },
        instructions: {
            en: [
                'In a medium bowl, blend the refried beans and taco seasoning.',
                'Spread the mixture onto a large serving platter.',
                'Mix the sour cream and cream cheese in a medium bowl. Spread over the refried beans.',
                'Top the layers with salsa. Place a layer of tomato, green bell pepper, green onions and lettuce over the salsa.',
                'Sprinkle the top with Cheddar cheese and garnish with black olives.'
            ],
            es: [
                'En un tazón mediano, mezcle los frijoles refritos y el condimento para tacos.',
                'Extienda la mezcla sobre un plato grande para servir.',
                'Mezcle la crema agria y el queso crema en un tazón mediano. Extienda sobre los frijoles refritos.',
                'Cubra las capas con salsa. Coloque una capa de tomate, pimiento verde, cebollas verdes y lechuga sobre la salsa.',
                'Espolvoree la parte superior con queso Cheddar y decore con aceitunas negras.'
            ]
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
        },
        ingredients: {
            en: [
                '8 oz sweet potato starch noodles',
                '1/2 lb spinach',
                '2 carrots, julienned',
                '1 onion, sliced',
                '4 oz mushrooms, sliced',
                '2 cloves garlic, minced',
                '3 tbsp soy sauce',
                '2 tbsp sesame oil',
                '1 tbsp sugar',
                '1 tbsp sesame seeds',
                'Salt and pepper to taste'
            ],
            es: [
                '8 oz de fideos de almidón de camote',
                '1/2 lb de espinacas',
                '2 zanahorias, cortadas en juliana',
                '1 cebolla, en rodajas',
                '4 oz de champiñones, en rodajas',
                '2 dientes de ajo, picados',
                '3 cucharadas de salsa de soya',
                '2 cucharadas de aceite de sésamo',
                '1 cucharada de azúcar',
                '1 cucharada de semillas de sésamo',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Cook noodles according to package instructions.',
                'Blanch spinach in boiling water for 30 seconds, then rinse in cold water.',
                'Squeeze excess water from spinach and season with salt and sesame oil.',
                'Stir-fry carrots, onion, and mushrooms separately with a bit of oil.',
                'Mix soy sauce, sugar, and sesame oil in a small bowl.',
                'Combine all ingredients in a large bowl.',
                'Add the sauce mixture and toss well.',
                'Garnish with sesame seeds and serve.'
            ],
            es: [
                'Cocine los fideos según las instrucciones del paquete.',
                'Blanquee las espinacas en agua hirviendo durante 30 segundos, luego enjuague en agua fría.',
                'Exprima el exceso de agua de las espinacas y sazone con sal y aceite de sésamo.',
                'Saltee las zanahorias, la cebolla y los champiñones por separado con un poco de aceite.',
                'Mezcle la salsa de soya, el azúcar y el aceite de sésamo en un tazón pequeño.',
                'Combine todos los ingredientes en un tazón grande.',
                'Agregue la mezcla de salsa y revuelva bien.',
                'Adorne con semillas de sésamo y sirva.'
            ]
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
        },
        ingredients: {
            en: [
                '1 lb ground beef (90% lean)',
                '1 sweet potato, cut into fries',
                '1 tbsp olive oil',
                '1 tsp paprika',
                '1 tsp garlic powder',
                'Salt and pepper to taste',
                '4 whole wheat buns',
                'Lettuce, tomato, and onion for serving'
            ],
            es: [
                '1 lb de carne molida (90% magra)',
                '1 camote, cortado en papas fritas',
                '1 cucharada de aceite de oliva',
                '1 cucharadita de paprika',
                '1 cucharadita de ajo en polvo',
                'Sal y pimienta al gusto',
                '4 panes integrales',
                'Lechuga, tomate y cebolla para servir'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 425°F.',
                'Cut sweet potato into fries and toss with olive oil and seasonings.',
                'Bake fries for 20-25 minutes, flipping halfway.',
                'Form ground beef into 4 patties.',
                'Cook patties in a skillet over medium heat for 4-5 minutes per side.',
                'Assemble burgers with desired toppings.',
                'Divide into meal prep containers with fries.'
            ],
            es: [
                'Precaliente el horno a 425°F.',
                'Corte el camote en papas fritas y mezcle con aceite de oliva y condimentos.',
                'Hornee las papas fritas durante 20-25 minutos, volteando a la mitad.',
                'Forme la carne molida en 4 hamburguesas.',
                'Cocine las hamburguesas en una sartén a fuego medio durante 4-5 minutos por cada lado.',
                'Armar las hamburguesas con los ingredientes deseados.',
                'Divida en contenedores de preparación de comidas con las papas fritas.'
            ]
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
        },
        ingredients: {
            en: [
                '1 lb ground turkey',
                '1/2 cup breadcrumbs',
                '1/4 cup milk',
                '1 egg',
                '1/4 cup grated Parmesan cheese',
                '2 cloves garlic, minced',
                '1 tsp dried oregano',
                '1 tsp dried basil',
                'Salt and pepper to taste'
            ],
            es: [
                '1 lb de pavo molido',
                '1/2 taza de pan rallado',
                '1/4 taza de leche',
                '1 huevo',
                '1/4 taza de queso parmesano rallado',
                '2 dientes de ajo, picados',
                '1 cucharadita de orégano seco',
                '1 cucharadita de albahaca seca',
                'Sal y pimienta al gusto'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 400°F.',
                'Mix breadcrumbs and milk in a small bowl.',
                'Combine all ingredients in a large bowl.',
                'Form into 1-inch meatballs.',
                'Place on a baking sheet lined with parchment paper.',
                'Bake for 20-25 minutes until cooked through.'
            ],
            es: [
                'Precaliente el horno a 400°F.',
                'Mezcle el pan rallado y la leche en un tazón pequeño.',
                'Combine todos los ingredientes en un tazón grande.',
                'Forme albóndigas de 1 pulgada.',
                'Coloque en una bandeja para hornear forrada con papel pergamino.',
                'Hornee durante 20-25 minutos hasta que estén cocidas.'
            ]
        }
    },
    'cocktail-meatballs': {
        title: {
            en: 'Cocktail Meatballs',
            es: 'Albóndigas para Cocktail'
        },
        description: {
            en: 'Perfect party appetizer with sweet and tangy sauce.',
            es: 'Aperitivo perfecto para fiestas con salsa dulce y ácida.'
        },
        ingredients: {
            en: [
                '1 lb ground beef',
                '1/2 cup breadcrumbs',
                '1 egg',
                '1/4 cup milk',
                '1/4 cup grated onion',
                '1 tsp Worcestershire sauce',
                '1/2 tsp salt',
                '1/4 tsp pepper',
                '1 cup ketchup',
                '1/2 cup grape jelly',
                '1 tbsp Worcestershire sauce'
            ],
            es: [
                '1 lb de carne molida',
                '1/2 taza de pan rallado',
                '1 huevo',
                '1/4 taza de leche',
                '1/4 taza de cebolla rallada',
                '1 cucharadita de salsa Worcestershire',
                '1/2 cucharadita de sal',
                '1/4 cucharadita de pimienta',
                '1 taza de ketchup',
                '1/2 taza de jalea de uva',
                '1 cucharada de salsa Worcestershire'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 350°F.',
                'Mix ground beef, breadcrumbs, egg, milk, onion, Worcestershire sauce, salt, and pepper.',
                'Form into 1-inch meatballs.',
                'Place on a baking sheet and bake for 20 minutes.',
                'Combine ketchup, grape jelly, and Worcestershire sauce in a saucepan.',
                'Heat sauce until jelly is melted.',
                'Add cooked meatballs to the sauce and simmer for 10 minutes.'
            ],
            es: [
                'Precaliente el horno a 350°F.',
                'Mezcle la carne molida, el pan rallado, el huevo, la leche, la cebolla, la salsa Worcestershire, la sal y la pimienta.',
                'Forme albóndigas de 1 pulgada.',
                'Coloque en una bandeja para hornear y hornee durante 20 minutos.',
                'Combine el ketchup, la jalea de uva y la salsa Worcestershire en una cacerola.',
                'Caliente la salsa hasta que la jalea se derrita.',
                'Agregue las albóndigas cocidas a la salsa y cocine a fuego lento durante 10 minutos.'
            ]
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
        },
        ingredients: {
            en: [
                '2 lbs ground beef',
                '1 onion, diced',
                '2 large eggs',
                '3 garlic cloves, minced',
                '3 tbsp ketchup',
                '3 tbsp fresh parsley, chopped',
                '3/4 cup Panko breadcrumbs',
                '1/3 cup milk',
                '1 1/2 tsp salt',
                '1/4 tsp ground black pepper',
                '1/2 tsp onion powder',
                '1/2 tsp garlic powder',
                '1/2 cup ketchup',
                '1 tbsp brown sugar',
                '1 tbsp red wine vinegar'
            ],
            es: [
                '2 lbs de carne molida',
                '1 cebolla, picada',
                '2 huevos grandes',
                '3 dientes de ajo, picados',
                '3 cucharadas de ketchup',
                '3 cucharadas de perejil fresco, picado',
                '3/4 taza de pan rallado Panko',
                '1/3 taza de leche',
                '1 1/2 cucharadita de sal',
                '1/4 cucharadita de pimienta negra molida',
                '1/2 cucharadita de cebolla en polvo',
                '1/2 cucharadita de ajo en polvo',
                '1/2 taza de ketchup',
                '1 cucharada de azúcar morena',
                '1 cucharada de vinagre de vino tinto'
            ]
        },
        instructions: {
            en: [
                'Preheat oven to 350°F.',
                'Mix all meatloaf ingredients in a large bowl.',
                'Form into a loaf shape and place in a loaf pan.',
                'Mix glaze ingredients in a small bowl.',
                'Spread half the glaze over the meatloaf.',
                'Bake for 55 minutes.',
                'Spread remaining glaze over the meatloaf.',
                'Bake for 15 more minutes.',
                'Let rest for 10 minutes before slicing.'
            ],
            es: [
                'Precaliente el horno a 350°F.',
                'Mezcle todos los ingredientes del pastel de carne en un tazón grande.',
                'Forme en forma de pan y coloque en un molde para pan.',
                'Mezcle los ingredientes del glaseado en un tazón pequeño.',
                'Extienda la mitad del glaseado sobre el pastel de carne.',
                'Hornee durante 55 minutos.',
                'Extienda el glaseado restante sobre el pastel de carne.',
                'Hornee durante 15 minutos más.',
                'Deje reposar durante 10 minutos antes de cortar.'
            ]
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
        },
        ingredients: {
            en: [
                '1 pound ground beef',
                '1 onion, diced',
                '2 cloves garlic, minced',
                '2 potatoes, diced',
                '2 carrots, diced',
                '1/4 cup raisins',
                '1/4 cup sliced green olives',
                '2 tablespoons tomato paste',
                '1 teaspoon ground cumin',
                '1 teaspoon dried oregano',
                'Salt and pepper to taste',
                '2 tablespoons olive oil'
            ],
            es: [
                '1 libra de carne molida',
                '1 cebolla, picada',
                '2 dientes de ajo, picados',
                '2 papas, picadas',
                '2 zanahorias, picadas',
                '1/4 taza de pasas',
                '1/4 taza de aceitunas verdes en rodajas',
                '2 cucharadas de pasta de tomate',
                '1 cucharadita de comino molido',
                '1 cucharadita de orégano seco',
                'Sal y pimienta al gusto',
                '2 cucharadas de aceite de oliva'
            ]
        },
        instructions: {
            en: [
                'Heat olive oil in a large skillet over medium heat.',
                'Add onion and garlic, cook until softened.',
                'Add ground beef and cook until browned.',
                'Add potatoes and carrots, cook for 5 minutes.',
                'Stir in tomato paste, cumin, and oregano.',
                'Add raisins and olives.',
                'Cover and simmer for 20 minutes until vegetables are tender.',
                'Season with salt and pepper to taste.'
            ],
            es: [
                'Caliente el aceite de oliva en una sartén grande a fuego medio.',
                'Agregue la cebolla y el ajo, cocine hasta que estén suaves.',
                'Agregue la carne molida y cocine hasta que esté dorada.',
                'Agregue las papas y las zanahorias, cocine durante 5 minutos.',
                'Revuelva la pasta de tomate, el comino y el orégano.',
                'Agregue las pasas y las aceitunas.',
                'Cubra y cocine a fuego lento durante 20 minutos hasta que las verduras estén tiernas.',
                'Sazone con sal y pimienta al gusto.'
            ]
        }
    },
    'instant-pot-beef-stew': {
        title: {
            en: 'Instant Pot Beef Stew',
            es: 'Estofado de Res en Olla Instantánea'
        },
        description: {
            en: 'Hearty beef stew made quickly in the Instant Pot with tender meat and vegetables.',
            es: 'Estofado de res sustancioso hecho rápidamente en la Olla Instantánea con carne tierna y verduras.'
        },
        ingredients: {
            en: [
                '2 pounds beef chuck, cut into 1-inch cubes',
                '1 onion, diced',
                '4 carrots, cut into chunks',
                '4 potatoes, cut into chunks',
                '2 cloves garlic, minced',
                '2 tablespoons tomato paste',
                '2 cups beef broth',
                '1 tablespoon Worcestershire sauce',
                '1 teaspoon dried thyme',
                '2 bay leaves',
                'Salt and pepper to taste',
                '2 tablespoons olive oil'
            ],
            es: [
                '2 libras de carne de res chuck, cortada en cubos de 1 pulgada',
                '1 cebolla, picada',
                '4 zanahorias, cortadas en trozos',
                '4 papas, cortadas en trozos',
                '2 dientes de ajo, picados',
                '2 cucharadas de pasta de tomate',
                '2 tazas de caldo de res',
                '1 cucharada de salsa Worcestershire',
                '1 cucharadita de tomillo seco',
                '2 hojas de laurel',
                'Sal y pimienta al gusto',
                '2 cucharadas de aceite de oliva'
            ]
        },
        instructions: {
            en: [
                'Set Instant Pot to sauté mode and heat olive oil.',
                'Brown beef cubes in batches, then remove.',
                'Sauté onion and garlic until softened.',
                'Add tomato paste and cook for 1 minute.',
                'Add beef back to pot with remaining ingredients.',
                'Close lid and set to pressure cook for 35 minutes.',
                'Allow natural release for 10 minutes.',
                'Remove bay leaves and season to taste.'
            ],
            es: [
                'Configure la Olla Instantánea en modo saltear y caliente el aceite de oliva.',
                'Dore los cubos de carne en lotes, luego retire.',
                'Saltee la cebolla y el ajo hasta que estén suaves.',
                'Agregue la pasta de tomate y cocine durante 1 minuto.',
                'Agregue la carne de nuevo a la olla con los ingredientes restantes.',
                'Cierre la tapa y configure para cocinar a presión durante 35 minutos.',
                'Permita la liberación natural durante 10 minutos.',
                'Retire las hojas de laurel y sazone al gusto.'
            ]
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
        },
        ingredients: {
            en: [
                '2 (28-ounce) cans San Marzano tomatoes',
                '1/4 cup olive oil',
                '1 onion, diced',
                '4 cloves garlic, minced',
                '1/4 cup fresh basil, chopped',
                '1 teaspoon dried oregano',
                '1/2 teaspoon red pepper flakes',
                'Salt and pepper to taste',
                '1 tablespoon sugar (optional)'
            ],
            es: [
                '2 latas (28 onzas) de tomates San Marzano',
                '1/4 taza de aceite de oliva',
                '1 cebolla, picada',
                '4 dientes de ajo, picados',
                '1/4 taza de albahaca fresca, picada',
                '1 cucharadita de orégano seco',
                '1/2 cucharadita de hojuelas de pimiento rojo',
                'Sal y pimienta al gusto',
                '1 cucharada de azúcar (opcional)'
            ]
        },
        instructions: {
            en: [
                'Heat olive oil in a large pot over medium heat.',
                'Add onion and cook until softened.',
                'Add garlic and cook for 1 minute.',
                'Crush tomatoes by hand and add to pot.',
                'Add basil, oregano, and red pepper flakes.',
                'Simmer for 30 minutes, stirring occasionally.',
                'Season with salt and pepper.',
                'Add sugar if needed to balance acidity.'
            ],
            es: [
                'Caliente el aceite de oliva en una olla grande a fuego medio.',
                'Agregue la cebolla y cocine hasta que esté suave.',
                'Agregue el ajo y cocine durante 1 minuto.',
                'Aplaste los tomates a mano y agregue a la olla.',
                'Agregue la albahaca, el orégano y las hojuelas de pimiento rojo.',
                'Cocine a fuego lento durante 30 minutos, revolviendo ocasionalmente.',
                'Sazone con sal y pimienta.',
                'Agregue azúcar si es necesario para balancear la acidez.'
            ]
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
        },
        ingredients: {
            en: [
                '1 tablespoon olive oil',
                '1 medium yellow onion, diced',
                '3 pounds ground turkey or beef',
                '2 1/2 tablespoons chili powder',
                '2 tablespoons ground cumin',
                '2 tablespoons granulated sugar',
                '2 tablespoons tomato paste',
                '1 tablespoon garlic powder',
                '1 1/2 teaspoons salt',
                '1/2 teaspoon ground black pepper',
                '1/4 teaspoon ground cayenne pepper',
                '1 1/2 cups beef broth',
                '1 (15 oz.) can petite diced tomatoes',
                '1 (16 oz.) can red kidney beans, drained and rinsed',
                '1 (8 oz.) can tomato sauce'
            ],
            es: [
                '1 cucharada de aceite de oliva',
                '1 cebolla amarilla mediana, picada',
                '3 libras de pavo molido o carne de res',
                '2 1/2 cucharadas de chile en polvo',
                '2 cucharadas de comino molido',
                '2 cucharadas de azúcar granulada',
                '2 cucharadas de pasta de tomate',
                '1 cucharada de ajo en polvo',
                '1 1/2 cucharaditas de sal',
                '1/2 cucharadita de pimienta negra molida',
                '1/4 cucharadita de pimienta de cayena molida',
                '1 1/2 tazas de caldo de res',
                '1 lata (15 oz.) de tomates en cubos pequeños',
                '1 lata (16 oz.) de frijoles rojos, escurridos y enjuagados',
                '1 lata (8 oz.) de salsa de tomate'
            ]
        },
        instructions: {
            en: [
                'Add the olive oil to a large soup pot and place it over medium-high heat for 2 minutes.',
                'Add the onion and cook for 5 minutes, stirring occasionally.',
                'Add the ground turkey/beef to the pot and break it apart with a wooden spoon.',
                'Add the chili powder, cumin, sugar, tomato paste, garlic powder, salt, pepper, and cayenne.',
                'Stir well and cook for 6-7 minutes until the beef is browned.',
                'Add the broth, diced tomatoes, kidney beans, and tomato sauce.',
                'Stir well and bring to a boil.',
                'Reduce the heat to low and simmer for 20-25 minutes, stirring occasionally.',
                'Remove from heat and let the chili rest for 5-10 minutes before serving.'
            ],
            es: [
                'Agregue el aceite de oliva a una olla grande y colóquela a fuego medio-alto durante 2 minutos.',
                'Agregue la cebolla y cocine durante 5 minutos, revolviendo ocasionalmente.',
                'Agregue el pavo molido/carne de res a la olla y desmenúcelo con una cuchara de madera.',
                'Agregue el chile en polvo, el comino, el azúcar, la pasta de tomate, el ajo en polvo, la sal, la pimienta y la cayena.',
                'Revuelva bien y cocine durante 6-7 minutos hasta que la carne esté dorada.',
                'Agregue el caldo, los tomates en cubos, los frijoles rojos y la salsa de tomate.',
                'Revuelva bien y lleve a ebullición.',
                'Reduzca el fuego a bajo y cocine a fuego lento durante 20-25 minutos, revolviendo ocasionalmente.',
                'Retire del fuego y deje reposar el chili durante 5-10 minutos antes de servir.'
            ]
        }
    },
    'chicken-souffle': {
        title: {
            en: 'Chicken Soufflé de Luz',
            es: 'Soufflé de Pollo de Luz'
        },
        description: {
            en: 'A delicious and moist chicken soufflé with a savory vegetable base.',
            es: 'Un soufflé de pollo delicioso y húmedo con una base de verduras sabrosa.'
        },
        ingredients: {
            en: [
                '3 chicken breasts',
                '6 eggs',
                '1 cup crushed saltine crackers or bread crumbs',
                '1 can of heavy cream or table cream)',
                '1/3 cup shredded mozzarella cheese',
                '1/2 onion, finely chopped',
                '1 ripe tomato, chopped',
                'Half of a bell pepper, chopped',
                '1 bay leaf',
                'A pinch of thyme',
                'Salt to taste',
                'Pepper and cumin to taste',
                'Mustard to taste'
            ],
            es: [
                '3 pechugas de pollo',
                '6 huevos',
                '1 taza de galletas saladas trituradas',
                '1 lata de crema espesa (o crema de mesa)',
                '1/3 taza de queso mozzarella rallado',
                '1/2 cebolla, finamente picada',
                '1 tomate maduro, picado',
                'La mitad de un pimiento, picado',
                '1 hoja de laurel',
                'Una pizca de tomillo',
                'Sal al gusto',
                'Pimienta y comino al gusto',
                'Mostaza al gusto'
            ]
        },
        instructions: {
            en: [
                'Make the sautéed base: in a pan, sauté the chopped onion, tomato, and bell pepper.',
                'Add the bay leaf, thyme, salt, pepper, and a pinch of cumin.',
                'Cook until the vegetables are soft and fragrant.',
                'Cook the chicken: Add the chicken breasts to the pan with the sautéed mixture.',
                'Cover and cook for about 15 minutes, or until fully cooked.',
                'Remove the chicken, let it cool slightly, and shred it finely.',
                'Save the cooking mixture (don\'t discard it).',
                'Prepare the soufflé mixture: In a large bowl, combine the shredded chicken, crushed saltines, beaten eggs, heavy cream, and the reserved sautéed mixture.',
                'Add mustard and shredded cheese. Mix everything thoroughly until well combined and moist. If the' +
                ' mixture feels dry, add a bit more cream or some of the reserved cooking liquid.',
                'Bake: Preheat the oven to 350°F (180°C).',
                'Pour the mixture into a greased baking dish.',
                'Bake for 30 to 40 minutes, or until the top is golden and the center is set.',
                'Make sure it stays moist—it should have a juicy, almost "saucy" texture.'
            ],
            es: [
                'Prepare la base salteada: en una sartén, saltee la cebolla picada, el tomate y el pimiento.',
                'Agregue la hoja de laurel, el tomillo, la sal, la pimienta y una pizca de comino.',
                'Cocine hasta que las verduras estén suaves y fragantes.',
                'Cocine el pollo: Agregue las pechugas de pollo a la sartén con la mezcla salteada.',
                'Cubra y cocine durante unos 15 minutos, o hasta que esté completamente cocido.',
                'Retire el pollo, déjelo enfriar ligeramente y desmenúcelo finamente.',
                'Guarde la mezcla de cocción (no la deseche).',
                'Prepare la mezcla del soufflé: En un tazón grande, combine el pollo desmenuzado, las galletas saladas trituradas, los huevos batidos (como para huevos revueltos), la crema espesa y la mezcla salteada reservada.',
                'Agregue la mostaza y el queso rallado. Mezcle todo bien hasta que esté bien combinado y húmedo. Si la mezcla se siente seca, agregue un poco más de crema o un poco del líquido de cocción reservado.',
                'Hornee: Precaliente el horno a 350°F (180°C).',
                'Vierta la mezcla en un molde para hornear engrasado.',
                'Hornee durante 30 a 40 minutos, o hasta que la parte superior esté dorada y el centro esté firme.',
                'Asegúrese de que se mantenga húmedo—debe tener una textura jugosa, casi "salsosa".'
            ]
        }
    },
}; 
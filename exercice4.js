// Exercice 4 : Compter les bâtiments avec une vue sur le coucher de soleil
// Complexité : O(n)

//Le code parcourt la liste des bâtiments de droite à gauche, en gardant la hauteur maximale rencontrée à droite (maxHeight), 
//et chaque fois qu'un bâtiment est plus grand que cette hauteur maximale, il est compté comme ayant une vue sur le coucher du soleil,
// tout en mettant à jour la maxHeight à chaque fois qu'un bâtiment plus haut est trouvé.

function countBuildingsWithView(buildings) {
    let count = 0; // Compteur de bâtiments avec vue
    let maxHeight = 0; // Hauteur maximale vue jusqu'à présent (de droite à gauche)

    // Parcourir la liste de droite à gauche
    for (let i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i] > maxHeight) {
            count++; // Si le bâtiment est plus haut, il a une vue
            maxHeight = buildings[i]; // Mettre à jour la hauteur maximale
        }
    }

    return count; // Retourner le nombre de bâtiments avec vue
}

// Test de la fonction
const immeubles = [3, 7, 8, 3, 6, 1];
console.log(countBuildingsWithView(immeubles)); // Devrait afficher 3

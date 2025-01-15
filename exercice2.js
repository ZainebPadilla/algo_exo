// Exercice 2 : Compter les bâtiments avec une vue sur le coucher de soleil
// Complexité : O(n²)


function countBuildingsWithView(buildings) {
    let count = 0; // Compteur de bâtiments avec vue

    // Parcourir chaque bâtiment
    for (let i = 0; i < buildings.length; i++) {
        let hasView = true; // Supposer que le bâtiment a une vue

        // Vérifier tous les bâtiments à droite de i
        for (let j = i + 1; j < buildings.length; j++) {
            if (buildings[j] >= buildings[i]) {
                hasView = false; // Si un bâtiment est plus haut ou égal, pas de vue
                break;
            }
        }

        // Si le bâtiment a une vue, incrémenter le compteur
        if (hasView) {
            count++;
        }
    }

    return count; // Retourner le nombre de bâtiments avec vue
}

// Test de la fonction
const immeubles = [3, 7, 8, 3, 6, 1];
console.log(countBuildingsWithView(immeubles)); // Devrait afficher 3



// Exercice 3 : Trouver si deux nombres dans une liste ont une somme égale à k
// Complexité : O(n)

//Crée un ensemble vide (Set) pour stocker les "compléments" nécessaires (les valeurs qu'il faudrait ajouter pour atteindre la cible 𝑘k).
//Parcours chaque nombre de la liste : Calcule le complément nécessaire (𝑘−nombre courant)
// Si ce complément est déjà dans le Set, une paire est trouvée. Sinon, ajoute le nombre courant au Set.
//Continue jusqu'à trouver une paire ou atteindre la fin de la liste.


function hasPairWithSum(arr, k) {
    const seen = new Set(); // Crée un Set pour stocker les compléments nécessaires

    // Parcourir chaque nombre de la liste
    for (let num of arr) {
        const complement = k - num; // Calculer le complément nécessaire pour faire k

        if (seen.has(num)) {
            // Si le nombre courant est déjà dans le Set, la paire est trouvée
            console.log(`Trouvé : ${num} + ${complement} = ${k}`);
            return true;
        }

        // Sinon, ajouter le complément nécessaire au Set
        seen.add(complement);
    }

    // Si aucune paire n'est trouvée
    console.log("Aucune paire trouvée.");
    return false;
}

// Test de la fonction
const liste = [10, 15, 3, 7];
const k = 17;

console.log(hasPairWithSum(liste, k)); // Devrait afficher true

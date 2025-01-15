// Exercice 1 : Trouver si deux nombres dans une liste ont une somme égale à k
// Complexité : O(n²)

// Fonction principale
function hasPairWithSum(arr, k) {
    // Parcourir chaque paire possible dans la liste
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Vérifier si la somme des deux éléments est égale à k
            if (arr[i] + arr[j] === k) {
                console.log(`Trouvé : ${arr[i]} + ${arr[j]} = ${k}`);
                return true; // Si une paire est trouvée
            }
        }
    }
    console.log("Aucune paire trouvée.");
    return false; // Si aucune paire n'est trouvée
}

// Test de la fonction
const liste = [10, 15, 3, 7];
const k = 17;

console.log(hasPairWithSum(liste, k)); // Devrait afficher true car 10 + 7

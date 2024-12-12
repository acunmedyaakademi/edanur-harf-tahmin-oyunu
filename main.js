/*Bu oyun, kullanıcıya bir kelimeyi harf harf tahmin etme şansı verir. Başlangıçta kelimeyi gizlemek için her harfi _ ile gösteririz. Kullanıcı her tahminde bulunur ve doğru tahminler kelimenin yerini alır. Kullanıcı kelimeyi tamamlayana kadar oyun devam eder. */

// Adam asmaca oyunu
const gameWord = "Rhytms";
const lettersOfTheWord = gameWord.split("");
let toHideTheWord = "_".repeat(gameWord.length).split("");

alert("Let's play hangman!");
alert(`Your word: ${toHideTheWord.join(" ")}`);
alert("Now guess a letter.");

while (toHideTheWord.includes("_")) {
  const usersLetter = prompt("Guess a letter:").toLowerCase();

  let found = false;

  for (let index = 0; index < lettersOfTheWord.length; index++) {
    if (lettersOfTheWord[index].toLowerCase() === usersLetter) {
      toHideTheWord[index] = lettersOfTheWord[index];
      found = true;
    }
  }

  if (found) {
    alert(`You found some letters. ${toHideTheWord.join(" ")}`);
  } else {
    alert("Not the right letter");
  }
}

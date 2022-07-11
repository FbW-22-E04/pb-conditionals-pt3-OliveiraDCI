let teamAleeza = [89, 120, 103];
let teamLis = [116, 94, 123];

let averageAleeza = (teamAleeza[0] + teamAleeza[1] + teamAleeza[2]) / 3;
let averageLis = (teamLis[0] + teamLis[1] + teamLis[2]) / 3;

if (averageAleeza > averageLis) {
  console.log("Aleeza's Team has higher average: " + averageAleeza);
} else if (averageAleeza < averageLis) {
  console.log("Lis's Team has higher average: " + averageLis);
} else {
  console.log(
    "Draw, both averages are equal! " + averageAleeza + " and " + averageLis
  );
}

// different scores

teamAleeza = [89, 120, 103];
teamLis = [89, 120, 103];

averageAleeza = (teamAleeza[0] + teamAleeza[1] + teamAleeza[2]) / 3;
averageLis = (teamLis[0] + teamLis[1] + teamLis[2]) / 3;

if (averageAleeza > averageLis) {
  console.log("Aleeza's Team has higher average: " + averageAleeza);
} else if (averageAleeza < averageLis) {
  console.log("Lis's Team has higher average: " + averageLis);
} else {
  console.log(
    "Draw, both with equal average: " + averageAleeza + " and " + averageLis
  );
}

let teamMary = [97, 134, 105];
let averageMary = (teamMary[0] + teamMary[1] + teamMary[2]) / 3;

if (averageMary > averageAleeza && averageMary > averageLis) {
  console.log("Mary's Team has higher average: " + averageMary);
} else if (averageAleeza > averageMary && averageAleeza > averageLis) {
  console.log("Aleeza's Team has higher average: " + averageAleeza);
} else if (averageLis > averageMary && averageLis > averageAleeza) {
  console.log("Lis's Team has higher average: " + averageLis);
} else {
  console.log(
    "Draw, all three team averages are equal! " +
      averageAleeza +
      " and " +
      averageLis +
      " and " +
      averageMary
  );
}

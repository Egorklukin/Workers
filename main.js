const workerA = { position: 0, range: 2 };
const workerB = { position: 10, range: 2 };

function paintingOfStreetPoles(arrayA, arrayB) {
  const startPosA = arrayA.position - arrayA.range;
  const endPosA = arrayA.position + arrayA.range;

  const startPosB = arrayB.position - arrayB.range;
  const endPosB = arrayB.position + arrayB.range;

  const startCombiningRange = Math.min(startPosA, startPosB);
  const endCombiningRange = Math.max(endPosA, endPosB);

  const isIntersection = endPosA >= startPosB && endPosB >= startPosA;

  let count;

  if (isIntersection) count = endCombiningRange - startCombiningRange + 1;
  else {
    const lenghtA = endPosA - startPosA + 1;
    const lenghtB = endPosB - startPosB + 1;
    count = lenghtA + lenghtB;
  }
  console.log(
    `${arrayA.name}: от ${startPosA} до ${endPosA}\n${arrayB.name}: от ${startPosB} до ${endPosB}`,
  );
  console.log(`Объединение: [${startCombiningRange}...${endCombiningRange}]`);
  console.log(`Количество: ${count}`);
}
paintingOfStreetPoles(workerA, workerB);

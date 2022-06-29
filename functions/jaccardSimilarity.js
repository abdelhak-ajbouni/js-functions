const jaccardSimilarity = (list1, list2) => {
  let intersection = 0;
  let union = 0;
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        intersection++;
      }
    }
    union++;
  }
  return intersection / union;
}

const response = jaccardSimilarity(["skill1", "skill2", "skill4"], ["skill1", "skill2", "skill3"]);

console.log('jaccardSimilarity response =========================', response)
function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  function bubblesort(result) {
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result.length - i - 1; j++) {
        if (result[j].year < result[j + 1].year) {
          var temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }

    console.log(result);
    return result;
  }

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil sorting secara descending
  return bubblesort(result);
}

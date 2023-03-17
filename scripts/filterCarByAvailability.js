function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  const result = [...cars];
  console.log("Sebelum Filter", result);

  function filter(result) {
    for (let i = 0; i < result.length; i++) {
      return result.filter((result) => result.available == true);
    }
  }

  console.log("Setelah Filter", filter(result));

  // Tempat penampungan hasil

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return filter(result);
}

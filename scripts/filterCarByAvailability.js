function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  const result = [...cars];
  console.log(result);

  function filter(result) {
    for (let i = 0; i < result.length; i++) {
      return result.filter((result) => result.available == true);
    }
  }
  console.log(filter(result));

  // Tempat penampungan hasil

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return filter(result);
}

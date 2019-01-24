function logDriverNames(drivers) {
  drivers.forEach(function (elem) {
    console.log(elem.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (elem){
    if (elem.hometown === hometown){
    console.log(elem.name);}
  });
}

function driversByRevenue(drivers) {
  const driverCopy = [...drivers]
  return driversCopy.sort(function (elem1, elem2){
    return elem1.revenue - elem2.revenue
  });
}

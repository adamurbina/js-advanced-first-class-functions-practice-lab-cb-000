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
  drivers.sort(function (elem){
    return elem.revenue;
  });
}

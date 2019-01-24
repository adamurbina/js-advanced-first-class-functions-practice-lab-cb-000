function logDriverNames(drivers) {
  drivers.forEach(function (elem) {
    console.log(elem.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (elem) {
    elem.hometown === hometown ? console.log(elem.name);
  })
}

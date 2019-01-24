function logDriverNames(drivers) {
  drivers.forEach(function (elem) {
    console.log(elem.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (elem) {
    if (hometown ==== elem.hometown) {
      console.log(elem.hometown);
    };
  };
}

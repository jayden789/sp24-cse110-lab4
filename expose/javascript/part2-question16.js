let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let element in statistics) {
    if (element[0] === 'r' || statistics[element] % 2 != 0) {
        console.log(statistics[element]);
    }
}
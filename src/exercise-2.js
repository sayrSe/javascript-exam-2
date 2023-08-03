const getTheExactNumber = (numbers) => {
    let biggestMultiple = 0;

    numbers.forEach((number) => {
        if (number % 3 === 0 && number > biggestMultiple) {
            biggestMultiple = number;
        }
    });

    return biggestMultiple;
}

export default getTheExactNumber;
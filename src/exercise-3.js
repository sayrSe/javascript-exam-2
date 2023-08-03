const getNumberType = (number) => {
    let type = null;

    if (number > 0) {
        type = number % 2 === 0 ? 'even number' : 'odd number';
    }

    return type;
};

export default getNumberType;

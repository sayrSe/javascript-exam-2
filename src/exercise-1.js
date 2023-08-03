const getCommonItems = (array1, array2) => {
  return array1.filter(value => array2.includes(value));
};

export default getCommonItems;

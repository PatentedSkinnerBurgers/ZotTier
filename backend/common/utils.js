const keysToCamel = (data) => {
    if (isObject(data)) {
      const newData = {};
      Object.keys(data).forEach((key) => {
        newData[toCamel(key)] = keysToCamel(data[key]);
      });
      return newData;
    }
    if (isArray(data)) {
      return data.map((i) => {
        return keysToCamel(i);
      });
    }
    if (
      typeof data === 'string' &&
      data.length > 0 &&
      data[0] === '{' &&
      data[data.length - 1] === '}'
    ) {
      let parsedList = data.replaceAll('"', '');
      parsedList = parsedList.slice(1, parsedList.length - 1).split(',');
      return parsedList;
    }
    return data;
  };

  module.exports = {
    keysToCamel
  }
import hexRgb from 'hex-rgb';

export const getComplementaryColor = (color) => {
  const rgb = hexRgb(color);
  const complementary = {
    red: 255 - rgb.red,
    green: 255 - rgb.green,
    blue: 255 - rgb.blue,
  };
  
  return `rgba(${255 - rgb.red}, ${255 - rgb.green}, ${255 - rgb.blue}, 1)`;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getErrorMessage = (e, defaultMessage) => {
    if (!e) return message;

    if (typeof e === 'string') return e;
    if (e.response && e.response.data) return e.response.data.message || '';
    if (e.message) return e.message;

    return defaultMessage;
};

export default {
  getComplementaryColor,
  getErrorMessage,
  sleep,
};

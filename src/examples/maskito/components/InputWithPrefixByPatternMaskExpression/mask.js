export default {
  mask: ({ value }) => {
    const digitsCount = value.replaceAll(/\D/g, '').length;

    return ['$', ...new Array(digitsCount || 1).fill(/\d/)];
  },
};

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  //this is used to router.get:id
  sliceFromIndex: function(array, index) {
    if (!Array.isArray(array) || typeof index !== 'number') {
      return array;
    }
    return array.slice(index);
  },

};

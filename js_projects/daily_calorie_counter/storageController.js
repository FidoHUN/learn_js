export const storageController = (function () {
  //Public methods
  return {
    storeItemInLocalStorage: function (item) {
      let items;
      //Check if any items in local storage
      if (localStorage.getItem('items') === null) {
        //if not, create an empty array and push the new item to it
        items = [];
        items.push(item);
        //save to local storage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        //if yes, get data from local storage and push the new item
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        //save to local storage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromLocalStorage: function () {
      let items;
      if (localStorage.getItem('items') == null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemInLocalStorage: function (id, item) {
      //get data from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      //update
      items.map(function (value) {
        if (value.id === id) {
          value.name = item.name;
          value.calories = item.calories;
        }
      });
      //save to local storage
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromLocalStorage: function (id) {
      //get data from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      //delete
      items.map(function (value) {
        if (value.id === id) {
          const index = items.indexOf(value);
          items.splice(index, 1);
        }
      });
      //save to local storage
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteLocalStorage() {
      let items = [];
      localStorage.setItem('items', JSON.stringify(items));
    },
  };
})();

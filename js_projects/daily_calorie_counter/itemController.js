import { uiController } from './uiController.js';
import { storageController } from './storageController.js';

export const itemController = (function () {
  //Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  //Data structure
  const data = {
    //for basic test cases
    // items: [
    // {
    //   id: 0,
    //   name: 'Steak',
    //   calories: 1200,
    // },
    // {
    //   id: 1,
    //   name: 'Cookie',
    //   calories: 400,
    // },
    // {
    //   id: 2,
    //   name: 'Eggs',
    //   calories: 300,
    // },
    // {
    //   id: 3,
    //   name: 'Grandma Lunch',
    //   calories: 2000,
    // },
    // ],
    items: storageController.getItemsFromLocalStorage(),
    currentItem: null,
    totalCalories: 0,
  };
  //Public methods
  return {
    logData: function () {
      return data;
    },
    getItems: function () {
      return data.items;
    },
    getTotalCalories: function () {
      return data.totalCalories;
    },
    setCurrentItem: function (id, name, calories) {
      data.currentItem = {
        id: id,
        name: name,
        calories: calories,
      };
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateTotalCalories: function () {
      let total = 0;
      data.items.map(function (value) {
        total += Number(value.calories);
      });
      data.totalCalories = total;
    },
    addFood: function () {
      //add food
      let foodName = uiController.getFoodNameInputValue();
      let foodCalorie = uiController.getFoodCalorieInputValue();
      if (foodName !== '' && foodCalorie !== '') {
        let newId = data.items.length;
        let newFood = new Item(newId, foodName, foodCalorie);
        data.items.push(newFood);
        //store in local storage
        storageController.storeItemInLocalStorage(newFood);
        //update total calories at the same time
        itemController.updateTotalCalories();
      }
    },
    updateFood: function () {
      data.items.map(function (value) {
        if (value.id === data.currentItem.id) {
          value.name = uiController.getFoodNameInputValue();
          value.calories = uiController.getFoodCalorieInputValue();
          //update in local storage
          storageController.updateItemInLocalStorage(
            data.currentItem.id,
            value
          );
        }
      });
      itemController.updateTotalCalories();
      const foods = itemController.getItems();
      const calories = itemController.getTotalCalories();
      uiController.updateTable(foods);
      uiController.updateProgressBar(calories);
      uiController.clearInputFields();
      uiController.addState();
      data.currentItem = null;
    },
    deleteFood: function () {
      data.items.map(function (value) {
        if (value.id === data.currentItem.id) {
          const index = data.items.indexOf(value);
          data.items.splice(index, 1);
          //delete from local storage as well
          storageController.deleteItemFromLocalStorage(data.currentItem.id);
          data.currentItem = null;
        }
      });
      itemController.updateTotalCalories();
      const foods = itemController.getItems();
      const calories = itemController.getTotalCalories();
      uiController.updateTable(foods);
      uiController.updateProgressBar(calories);
      uiController.clearInputFields();
      uiController.addState();
    },
    clearAllFoods: function () {
      data.items = [];
      //delete everything from local storage;
      storageController.deleteLocalStorage();
      itemController.updateTotalCalories();
      const foods = itemController.getItems();
      const calories = itemController.getTotalCalories();
      uiController.updateTable(foods);
      uiController.updateProgressBar(calories);
      uiController.clearInputFields();
      uiController.addState();
      data.currentItem = null;
    },
  };
})();

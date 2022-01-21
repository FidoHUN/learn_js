import { itemController } from './itemController.js';
import { uiController } from './uiController.js';
import { storageController } from './storageController.js';

const app = (function (itemController, storageController, uiController) {
  //Public functions
  return {
    init: function () {
      //Update total calories to be accurate
      itemController.updateTotalCalories();
      //Show added foods
      const foods = itemController.getItems();
      const calories = itemController.getTotalCalories();
      //Load add state
      uiController.addState();
      //Update food table
      uiController.updateTable(foods);
      //Update progress bar
      uiController.updateProgressBar(calories);

      //Add food on button click
      document.querySelector('#add-btn').addEventListener('click', function () {
        itemController.addFood();
        itemController.updateTotalCalories();
        const foods = itemController.getItems();
        const calories = itemController.getTotalCalories();
        uiController.updateTable(foods);
        uiController.updateProgressBar(calories);
        uiController.clearInputFields();
        //Enter the update state
        document
          .querySelector('#table-container')
          .addEventListener('click', uiController.updateState);
      });
      //Enter the update state
      document
        .querySelector('#table-container')
        .addEventListener('click', uiController.updateState);
      //Update element on button click
      document
        .querySelector('#buttons-left-side')
        .addEventListener('click', function (e) {
          e.preventDefault();
          if (e.target.classList.contains('bg-yellow-500')) {
            itemController.updateFood();
          }
        });
      //Delete element on button click
      document
        .querySelector('#buttons-left-side')
        .addEventListener('click', function (e) {
          e.preventDefault();
          if (e.target.classList.contains('bg-red-600')) {
            itemController.deleteFood();
          }
        });
      //Back to add state when back button clicked
      document
        .querySelector('#buttons-right-side')
        .addEventListener('click', function (e) {
          e.preventDefault();
          if (e.target.classList.contains('bg-gray-500')) {
            uiController.addState();
          }
        });
      //Clear all foods when clear button clicked
      document
        .querySelector('#clear-btn')
        .addEventListener('click', itemController.clearAllFoods);
    },
  };
})(itemController, storageController, uiController);

app.init();

import { itemController } from './itemController.js';

export const uiController = (function () {
  const uiElements = {
    tableContainer: '#table-container',
    bar: '#change-bar',
    totalCalories: '#total-calories',
    foodNameInput: '#food-name-input',
    foodCalorieInput: '#food-calorie-input',
    addBtn: '#add-btn',
    updateBtn: '#update-btn',
    deleteBtn: '#delete-btn',
    backBtn: '#back-btn',
  };
  //Public methods
  return {
    getFoodNameInputValue: function () {
      return document.querySelector(uiElements.foodNameInput).value;
    },
    getFoodCalorieInputValue: function () {
      return document.querySelector(uiElements.foodCalorieInput).value;
    },
    updateTable: function (foods) {
      //Add data to the DOM
      let table = '';
      let rows = '';
      if (!(foods.length === 0)) {
        rows = `<tr>
                      <th>Food</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>`;
        foods.map(function (value) {
          rows += ` <tr id="item-${value.id}" class="border-t-2">
                      <td class="text-center">${value.name}</td>
                      <td class="text-center">${value.calories}</td>
                      <td><i class="fa fa-edit cursor-pointer"></i></td>
                    </tr>`;
        });
        table = `<table id="table" class="w-10/12 sm:w-8/12">${rows}</table>`;
        document.querySelector(uiElements.tableContainer).innerHTML = table;
      } else {
        table = `<table id="table" class="w-10/12 sm:w-8/12"></table>`;
        document.querySelector(uiElements.tableContainer).innerHTML = table;
      }
    },
    updateProgressBar: function (calories) {
      document.querySelector(uiElements.totalCalories).innerHTML = calories;
      let percentage = Math.floor((calories / 3000) * 100);
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage === 100) {
        document.querySelector(uiElements.bar).style.background = 'green';
      }else{
		  document.querySelector(uiElements.bar).style.background = 'blue';
	  }
      percentage = String(percentage) + '%';
      document.querySelector(uiElements.bar).style.width = percentage;
    },
    clearInputFields: function () {
      document.querySelector(uiElements.foodNameInput).value = '';
      document.querySelector(uiElements.foodCalorieInput).value = '';
    },
    addState: function () {
      uiController.clearInputFields();
      document.querySelector(uiElements.addBtn).style.display = 'block';
      document.querySelector(uiElements.updateBtn).style.display = 'none';
      document.querySelector(uiElements.deleteBtn).style.display = 'none';
      document.querySelector(uiElements.backBtn).style.display = 'none';
    },
    updateState: function (e) {
      e.preventDefault();
      if (e.target.classList.contains('fa-edit')) {
        document.querySelector(uiElements.updateBtn).style.display = 'block';
        document.querySelector(uiElements.deleteBtn).style.display = 'block';
        document.querySelector(uiElements.backBtn).style.display = 'block';
        document.querySelector(uiElements.addBtn).style.display = 'none';

        const id = Number(e.target.parentNode.parentNode.id.split('-')[1]);

        itemController.getItems().map(function (value) {
          if (value.id === id) {
            itemController.setCurrentItem(value.id, value.name, value.calories);
          }
        });
        //Fill in the input fields
        document.querySelector(
          uiElements.foodNameInput
        ).value = itemController.getCurrentItem().name;
        document.querySelector(
          uiElements.foodCalorieInput
        ).value = itemController.getCurrentItem().calories;
      }
    },
  };
})();

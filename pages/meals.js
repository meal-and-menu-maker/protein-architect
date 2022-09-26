import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'

let all_macros = require('./macros.json');

let all_meals = require('./meals.json');

let all_menus = require('./menus.json');

let all_assembled_meals = require('./assembled_meals.json');

let clickedAssemble = false;
let clickedMeal = false;
let clickedCreate = false;
let clickedChoose = false;
let clickedModify = false;
let clickedShow = false;
let clickedDelete = false;

var macros = {};
var meals = {};
var assembled_meals = {};
var menus = {};

var assembled_meal = {};
var menu = {};

var meal_and_assembled = new Array();
var meals_and_assembled = new Array();

var noon = {};
var night = {};

function loadMacros() {

  if (localStorage.getItem('noon') != null) {
    noon = JSON.parse(localStorage.getItem('noon'));

    document.getElementById('caloriesNoon').value = noon.calories;
    document.getElementById('proteinsNoon').value = noon.proteins;
    document.getElementById('fatNoon').value = noon.fat;
    document.getElementById('carbsNoon').value = noon.carbs;
    document.getElementById('fibersNoon').value = noon.fibers;
  }

  if (localStorage.getItem('night') != null) {
    night = JSON.parse(localStorage.getItem('night'));

    document.getElementById('caloriesNight').value = night.calories;
    document.getElementById('proteinsNight').value = night.proteins;
    document.getElementById('fatNight').value = night.fat;
    document.getElementById('carbsNight').value = night.carbs;
    document.getElementById('fibersNight').value = night.fibers;
  }
}

function hide() {
    var showMeal = document.getElementById("showMeal");
    showMeal.style.display = "none";

    var showedMeal = document.getElementById("showedMeal");
    showedMeal.style.display = "none";

    var assemble = document.getElementById("assemble");
    assemble.style.display = "none";

	  var createMenu = document.getElementById("createMenu");
  	createMenu.style.display = "none";
    
    var modifyMenu = document.getElementById("modifyMenu");
  	modifyMenu.style.display = "none";
    
    var showModifyMenu = document.getElementById("showModifyMenu");
  	showModifyMenu.style.display = "none";
    
    var showMenu = document.getElementById("showMenu");
  	showMenu.style.display = "none";
    
    var showedMenu = document.getElementById("showedMenu");
  	showedMenu.style.display = "none";

    loadMacros();
}

function _localStorage() {
  if (localStorage.getItem('macros') != null) {
      macros = JSON.parse(localStorage.getItem('macros'));
  }
  else {
      localStorage.setItem('macros', JSON.stringify(all_macros.macros));
  }

  if (localStorage.getItem('meals') != null) {
      meals = JSON.parse(localStorage.getItem('meals'));
  }
  else {
      localStorage.setItem('meals', JSON.stringify(all_meals.meals));
  }

  if (localStorage.getItem('assembled_meals') != null) {
      assembled_meals = JSON.parse(localStorage.getItem('assembled_meals'));
  }
  else {
      localStorage.setItem('assembled_meals', JSON.stringify(all_assembled_meals.assembled_meals));
  }

  if (localStorage.getItem('menus') != null) {
      menus = JSON.parse(localStorage.getItem('menus'));
  }
  else {
      localStorage.setItem('menus', JSON.stringify(all_menus.menus));
  }

  hide();
}
 
function updateMacros() {
    if (document.getElementById('noonRadio').checked) {
        noon.calories = parseFloat(document.getElementById('caloriesNoon').value);
        noon.proteins = parseFloat(document.getElementById('proteinsNoon').value);
        noon.fat = parseFloat(document.getElementById('fatNoon').value);
        noon.carbs = parseFloat(document.getElementById('carbsNoon').value);
        noon.fibers = parseFloat(document.getElementById('fibersNoon').value);

        localStorage.setItem('noon', JSON.stringify(noon));
    }

    if (document.getElementById('nightRadio').checked) {
        night.calories = parseFloat(document.getElementById('caloriesNight').value);
        night.proteins = parseFloat(document.getElementById('proteinsNight').value);
        night.fat = parseFloat(document.getElementById('fatNight').value);
        night.carbs = parseFloat(document.getElementById('carbsNight').value);
        night.fibers = parseFloat(document.getElementById('fibersNight').value);

        localStorage.setItem('night', JSON.stringify(night));
    }
}

function showMeals() {
  var showMeal = document.getElementById("showMeal");

  var showedMeal = document.getElementById("showedMeal");

  var mealShowSelect = document.getElementById("mealShowSelect");
    
    if (!clickedMeal) {
    	  clickedMeal = true;

        for (var i = 0; i < meals.length; i++) {
          const opt = document.createElement('option');
          opt.value = meals[i].name;
          opt.innerHTML = meals[i].name;
          mealShowSelect.appendChild(opt);
        }

        for (var i = 0; i < assembled_meals.length; i++) {
          const opt = document.createElement('option');
          opt.value = assembled_meals[i].name;
          opt.innerHTML = assembled_meals[i].name;
          mealShowSelect.appendChild(opt);
        }
    }

  if (showMeal.style.display === "none") {
    showMeal.style.display = "block";
  } else {
    showMeal.style.display = "none";
    showedMeal.style.display = "none";
  }
}

function okShowMeal() {
    var showedMeal = document.getElementById("showedMeal");

    var mealShowSelect = document.getElementById("mealShowSelect");

    showAllMeals.innerHTML = "";

    var quantity = 0;

    for (var i = 0; i < meals.length; i++) {
        if (meals[i].name == mealShowSelect.value) {
            showAllMeals.innerHTML = showAllMeals.innerHTML + meals[i].name + '<br/>';

            for (var j = 0; j < meals[i].elements.length; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals[i].quantities[j]).toFixed(1);
                  }
                }
              }
                showAllMeals.innerHTML = showAllMeals.innerHTML +'<br/>' + '&bull; ' + quantity + ' ' + meals[i].elements[j];
            }

            showAllMeals.innerHTML = showAllMeals.innerHTML + '<br/>' + '<br/>' + "<code>Calories: " + parseFloat(meals[i].calories).toFixed(2) + " kcal | Proteins: " + parseFloat(meals[i].proteins).toFixed(2) + "g | Fat: " + parseFloat(meals[i].fat).toFixed(2) + "g | Carbs: " + parseFloat(meals[i].carbs).toFixed(2) + "g | Fibers: " + parseFloat(meals[i].fibers).toFixed(2) + "g </code>";
        }
    }

    for (var i = 0; i < assembled_meals.length; i++) {
      if (assembled_meals[i].name == mealShowSelect.value) {
          showAllMeals.innerHTML = showAllMeals.innerHTML + assembled_meals[i].name + '<br/>';

          for (var j = 0; j < assembled_meals[i].elements.length; j++) {
            for (var k = 0; k < meals.length; k++) {
              if (assembled_meals[i].elements[j] == meals[k].name) {
                quantity = assembled_meals[i].quantities[j];
              }
            }
              showAllMeals.innerHTML = showAllMeals.innerHTML +'<br/>' + '&bull; ' + quantity + ' ' + assembled_meals[i].elements[j];
          }

          showAllMeals.innerHTML = showAllMeals.innerHTML + '<br/>' + '<br/>' + "<code>Calories: " + parseFloat(assembled_meals[i].calories).toFixed(2) + " kcal | Proteins: " + parseFloat(assembled_meals[i].proteins).toFixed(2) + "g | Fat: " + parseFloat(assembled_meals[i].fat).toFixed(2) + "g | Carbs: " + parseFloat(assembled_meals[i].carbs).toFixed(2) + "g | Fibers: " + parseFloat(assembled_meals[i].fibers).toFixed(2) + "g </code>";
      }
  }

    showedMeal.style.display = "block";
}

function assemble() {
  var assemble = document.getElementById("assemble");

  if (assemble.style.display === "none") {
    assemble.style.display = "block";
  } else {
    assemble.style.display = "none";
  }
}

function elementNumber() {
  var num = document.getElementById("number");
    
    var meal1List = document.getElementById("meal1List");
    var meal2List = document.getElementById("meal2List");
    var meal3List = document.getElementById("meal3List");
    var meal4List = document.getElementById("meal4List");
    var meal5List = document.getElementById("meal5List");
    var meal6List = document.getElementById("meal6List");
    var meal7List = document.getElementById("meal7List");
    var meal8List = document.getElementById("meal8List");
    var meal9List = document.getElementById("meal9List");
    var meal10List = document.getElementById("meal10List");
    
    if (num.value == "1") {
        meal1List.style.display = "block";
        meal2List.style.display = "none";
        meal3List.style.display = "none";
        meal4List.style.display = "none";
        meal5List.style.display = "none";
        meal6List.style.display = "none";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "2") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "none";
        meal4List.style.display = "none";
        meal5List.style.display = "none";
        meal6List.style.display = "none";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "3") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "none";
        meal5List.style.display = "none";
        meal6List.style.display = "none";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "4") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "none";
        meal6List.style.display = "none";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "5") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "none";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "6") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "block";
        meal7List.style.display = "none";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "7") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "block";
        meal7List.style.display = "block";
        meal8List.style.display = "none";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "8") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "block";
        meal7List.style.display = "block";
        meal8List.style.display = "block";
        meal9List.style.display = "none";
        meal10List.style.display = "none";
    } else if (num.value == "9") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "block";
        meal7List.style.display = "block";
        meal8List.style.display = "block";
        meal9List.style.display = "block";
        meal10List.style.display = "none";
    } else if (num.value == "10") {
        meal1List.style.display = "block";
        meal2List.style.display = "block";
        meal3List.style.display = "block";
        meal4List.style.display = "block";
        meal5List.style.display = "block";
        meal6List.style.display = "block";
        meal7List.style.display = "block";
        meal8List.style.display = "block";
        meal9List.style.display = "block";
        meal10List.style.display = "block";
    }
}

function populateSelect() {
  if (!clickedAssemble) {
    clickedAssemble = true;

    var ele1 = document.getElementById('meal1');
    var ele2 = document.getElementById('meal2');
    var ele3 = document.getElementById('meal3');
    var ele4 = document.getElementById('meal4');
    var ele5 = document.getElementById('meal5');
    var ele6 = document.getElementById('meal6');
    var ele7 = document.getElementById('meal7');
    var ele8 = document.getElementById('meal8');
    var ele9 = document.getElementById('meal9');
    var ele10 = document.getElementById('meal10');

    for (var i = 0; i < meals.length; i++) {
        ele1.innerHTML = ele1.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele2.innerHTML = ele2.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele3.innerHTML = ele3.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele4.innerHTML = ele4.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele5.innerHTML = ele5.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele6.innerHTML = ele6.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele7.innerHTML = ele7.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele8.innerHTML = ele8.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele9.innerHTML = ele9.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
        ele10.innerHTML = ele10.innerHTML +
            '<option value="' + meals[i]['name'] + '">' + meals[i]['name'] + '</option>';
    }
  }
}

function macrosUpdate() {
  var meal1 = document.getElementById("meal1").value;
  var meal2 = document.getElementById("meal2").value;
  var meal3 = document.getElementById("meal3").value;
  var meal4 = document.getElementById("meal4").value;
  var meal5 = document.getElementById("meal5").value;
  var meal6 = document.getElementById("meal6").value;
  var meal7 = document.getElementById("meal7").value;
  var meal8 = document.getElementById("meal8").value;
  var meal9 = document.getElementById("meal9").value;
  var meal10 = document.getElementById("meal10").value;
    
  var calories1 = 0;
  var proteins1 = 0;
  var fat1 = 0;
  var carbs1 = 0;
  var fibers1 = 0;
  var calories2 = 0;
  var proteins2 = 0;
  var fat2 = 0;
  var carbs2 = 0;
  var fibers2 = 0;
  var calories3 = 0;
  var proteins3 = 0;
  var fat3 = 0;
  var carbs3 = 0;
  var fibers3 = 0;
  var calories4 = 0;
  var proteins4 = 0;
  var fat4 = 0;
  var carbs4 = 0;
  var fibers4 = 0;
  var calories5 = 0;
  var proteins5 = 0;
  var fat5 = 0;
  var carbs5 = 0;
  var fibers5 = 0;
  var calories6 = 0;
  var proteins6 = 0;
  var fat6 = 0;
  var carbs6 = 0;
  var fibers6 = 0;
  var calories7 = 0;
  var proteins7 = 0;
  var fat7 = 0;
  var carbs7 = 0;
  var fibers7 = 0;
  var calories8 = 0;
  var proteins8 = 0;
  var fat8 = 0;
  var carbs8 = 0;
  var fibers8 = 0;
  var calories9 = 0;
  var proteins9 = 0;
  var fat9 = 0;
  var carbs9 = 0;
  var fibers9 = 0;
  var calories10 = 0;
  var proteins10 = 0;
  var fat10 = 0;
  var carbs10 = 0;
  var fibers10 = 0;
  
  var caloriesTotal = document.getElementById("caloriesTotal");
  var proteinsTotal = document.getElementById("proteinsTotal");
  var fatTotal = document.getElementById("fatTotal");
  var carbsTotal = document.getElementById("carbsTotal");
  var fibersTotal = document.getElementById("fibersTotal");
  
  for (var j = 0; j < meals.length; j++) {
      if (meal1 == meals[j].name) {
          calories1 = parseFloat(meals[j].calories)
          proteins1 = parseFloat(meals[j].proteins)
          fat1 = parseFloat(meals[j].fat)
          carbs1 = parseFloat(meals[j].carbs)
          fibers1 = parseFloat(meals[j].fibers)
      }
      if (meal2 == meals[j].name) {
          calories2 = parseFloat(meals[j].calories)
          proteins2 = parseFloat(meals[j].proteins)
          fat2 = parseFloat(meals[j].fat)
          carbs2 = parseFloat(meals[j].carbs)
          fibers2 = parseFloat(meals[j].fibers)
      }
      if (meal3 == meals[j].name) {
          calories3 = parseFloat(meals[j].calories)
          proteins3 = parseFloat(meals[j].proteins)
          fat3 = parseFloat(meals[j].fat)
          carbs3 = parseFloat(meals[j].carbs)
          fibers3 = parseFloat(meals[j].fibers)
      }
      if (meal4 == meals[j].name) {
          calories4 = parseFloat(meals[j].calories)
          proteins4 = parseFloat(meals[j].proteins)
          fat4 = parseFloat(meals[j].fat)
          carbs4 = parseFloat(meals[j].carbs)
          fibers4 = parseFloat(meals[j].fibers)
      }
      if (meal5 == meals[j].name) {
          calories5 = parseFloat(meals[j].calories)
          proteins5 = parseFloat(meals[j].proteins)
          fat5 = parseFloat(meals[j].fat)
          carbs5 = parseFloat(meals[j].carbs)
          fibers5 = parseFloat(meals[j].fibers)
      }
      if (meal6 == meals[j].name) {
          calories6 = parseFloat(meals[j].calories)
          proteins6 = parseFloat(meals[j].proteins)
          fat6 = parseFloat(meals[j].fat)
          carbs6 = parseFloat(meals[j].carbs)
          fibers6 = parseFloat(meals[j].fibers)
      }
      if (meal7 == meals[j].name) {
          calories7 = parseFloat(meals[j].calories)
          proteins7 = parseFloat(meals[j].proteins)
          fat7 = parseFloat(meals[j].fat)
          carbs7 = parseFloat(meals[j].carbs)
          fibers7 = parseFloat(meals[j].fibers)
      }
      if (meal8 == meals[j].name) {
          calories8 = parseFloat(meals[j].calories)
          proteins8 = parseFloat(meals[j].proteins)
          fat8 = parseFloat(meals[j].fat)
          carbs8 = parseFloat(meals[j].carbs)
          fibers8 = parseFloat(meals[j].fibers)
      }
      if (meal9 == meals[j].name) {
          calories9 = parseFloat(meals[j].calories)
          proteins9 = parseFloat(meals[j].proteins)
          fat9 = parseFloat(meals[j].fat)
          carbs9 = parseFloat(meals[j].carbs)
          fibers9 = parseFloat(meals[j].fibers)
      }
      if (meal10 == meals[j].name) {
          calories10 = parseFloat(meals[j].calories)
          proteins10 = parseFloat(meals[j].proteins)
          fat10 = parseFloat(meals[j].fat)
          carbs10 = parseFloat(meals[j].carbs)
          fibers10 = parseFloat(meals[j].fibers)
      }
  }
  
  caloriesTotal.value = "";
  
  caloriesTotal.value += calories1 + calories2 + calories3 + calories4 + calories5 + calories6 + calories7 + calories8 + calories9 + calories10;
  
  proteinsTotal.value = "";
  
  proteinsTotal.value += proteins1 + proteins2 + proteins3 + proteins4 + proteins5 + proteins6 + proteins7 + proteins8 + proteins9 + proteins10;
  
  fatTotal.value = "";
  
  fatTotal.value += fat1 + fat2 + fat3 + fat4 + fat5 + fat6 + fat7 + fat8 + fat9 + fat10;
  
  carbsTotal.value = "";
  
  carbsTotal.value += carbs1 + carbs2 + carbs3 + carbs4 + carbs5 + carbs6 + carbs7 + carbs8 + carbs9 + carbs10;

  fibersTotal.value = "";
  
  fibersTotal.value += fibers1 + fibers2 + fibers3 + fibers4 + fibers5 + fibers6 + fibers7 + fibers8 + fibers9 + fibers10;

  parseFloat(caloriesTotal.value);
  parseFloat(proteinsTotal.value);
  parseFloat(fatTotal.value);
  parseFloat(carbsTotal.value);
  parseFloat(fibersTotal.value);
}

function save() {
    var meal1 = document.getElementById("meal1");
    var meal2 = document.getElementById("meal2");
    var meal3 = document.getElementById("meal3");
    var meal4 = document.getElementById("meal4");
    var meal5 = document.getElementById("meal5");
    var meal6 = document.getElementById("meal6");
    var meal7 = document.getElementById("meal7");
    var meal8 = document.getElementById("meal8");
    var meal9 = document.getElementById("meal9");
    var meal10 = document.getElementById("meal10");
    
    
    var assembledMenuName = document.getElementById("assembledMenuName").value;
    var type = "";
    
    if (document.getElementById('noonRadio').checked) {
        type = "noon";
    }
    else {
        type = "night";
    }
    
    assembled_meal.name = assembledMenuName;
    assembled_meal.type = type;
    assembled_meal.elements = [];
    assembled_meal.quantities = [];
    
    if (meal1.value != "-- Select --") {
        assembled_meal.elements.push(meal1.value);
        assembled_meal.quantities.push(1);
    }
    if (meal2.value != "-- Select --") {
        assembled_meal.elements.push(meal2.value);
        assembled_meal.quantities.push(1);
    }
    if (meal3.value != "-- Select --") {
        assembled_meal.elements.push(meal3.value);
        assembled_meal.quantities.push(1);
    }
    if (meal4.value != "-- Select --") {
        assembled_meal.elements.push(meal4.value);
        assembled_meal.quantities.push(1);
    }
    if (meal5.value != "-- Select --") {
        assembled_meal.elements.push(meal5.value);
        assembled_meal.quantities.push(1);
    }
    if (meal6.value != "-- Select --") {
        assembled_meal.elements.push(meal6.value);
        assembled_meal.quantities.push(1);
    }
    if (meal7.value != "-- Select --") {
        assembled_meal.elements.push(meal7.value);
        assembled_meal.quantities.push(1);
    }
    if (meal8.value != "-- Select --") {
        assembled_meal.elements.push(meal8.value);
        assembled_meal.quantities.push(1);
    }
    if (meal9.value != "-- Select --") {
        assembled_meal.elements.push(meal9.value);
        assembled_meal.quantities.push(1);
    }
    if (meal10.value != "-- Select --") {
        assembled_meal.elements.push(meal10.value);
        assembled_meal.quantities.push(1);
    }

    assembled_meal.calories = parseFloat(document.getElementById("caloriesTotal").value);
    assembled_meal.proteins = parseFloat(document.getElementById("proteinsTotal").value);
    assembled_meal.fat = parseFloat(document.getElementById("fatTotal").value);
    assembled_meal.carbs = parseFloat(document.getElementById("carbsTotal").value);
    assembled_meal.fibers = parseFloat(document.getElementById("fibersTotal").value);

    assembled_meals.push(assembled_meal);

    localStorage.setItem('assembled_meals', JSON.stringify(assembled_meals));

    assembled_meal = {};

    window.location.reload();
}

function create() {
	  var mondayNoonSelect = document.getElementById("mondayNoonSelect");
    var mondayNightSelect = document.getElementById("mondayNightSelect");
    var tuesdayNoonSelect = document.getElementById("tuesdayNoonSelect");
    var tuesdayNightSelect = document.getElementById("tuesdayNightSelect");
    var wednesdayNoonSelect = document.getElementById("wednesdayNoonSelect");
    var wednesdayNightSelect = document.getElementById("wednesdayNightSelect");
    var thursdayNoonSelect = document.getElementById("thursdayNoonSelect");
    var thursdayNightSelect = document.getElementById("thursdayNightSelect");
    var fridayNoonSelect = document.getElementById("fridayNoonSelect");
    var fridayNightSelect = document.getElementById("fridayNightSelect");
    var saturdayNoonSelect = document.getElementById("saturdayNoonSelect");
    var saturdayNightSelect = document.getElementById("saturdayNightSelect");
    var sundayNoonSelect = document.getElementById("sundayNoonSelect");
    var sundayNightSelect = document.getElementById("sundayNightSelect");
    
    var selects = [mondayNoonSelect, mondayNightSelect, tuesdayNoonSelect, tuesdayNightSelect, wednesdayNoonSelect, wednesdayNightSelect, thursdayNoonSelect, thursdayNightSelect, fridayNoonSelect, fridayNightSelect, saturdayNoonSelect, saturdayNightSelect, sundayNoonSelect, sundayNightSelect];
    
    if (!clickedCreate) {
    	clickedCreate = true;

        for (var k = 0; k < selects.length; k++) {
            for (var i = 0; i < meals.length; i++) {
                const opt = document.createElement('option');
                opt.value = meals[i].name;
                opt.innerHTML = meals[i].name;
                selects[k].appendChild(opt);
            }
        }

        for (var k = 0; k < selects.length; k++) {
          for (var i = 0; i < assembled_meals.length; i++) {
              const opt = document.createElement('option');
              opt.value = assembled_meals[i].name;
              opt.innerHTML = assembled_meals[i].name;
              selects[k].appendChild(opt);
          }
      }
    }
    
    var createMenu = document.getElementById("createMenu");
    
  	if (createMenu.style.display === "none") {
    	createMenu.style.display = "block";
  	} else {
    	createMenu.style.display = "none";
  	}
}

function okCreate() {
  var mondayNoon = document.getElementById("mondayNoonSelect");
  var mondayNight = document.getElementById("mondayNightSelect");
  var tuesdayNoon = document.getElementById("tuesdayNoonSelect");
  var tuesdayNight = document.getElementById("tuesdayNightSelect");
  var wednesdayNoon = document.getElementById("wednesdayNoonSelect");
  var wednesdayNight = document.getElementById("wednesdayNightSelect");
  var thursdayNoon = document.getElementById("thursdayNoonSelect");
  var thursdayNight = document.getElementById("thursdayNightSelect");
  var fridayNoon = document.getElementById("fridayNoonSelect");
  var fridayNight = document.getElementById("fridayNightSelect");
  var saturdayNoon = document.getElementById("saturdayNoonSelect");
  var saturdayNight = document.getElementById("saturdayNightSelect");
  var sundayNoon = document.getElementById("sundayNoonSelect");
  var sundayNight = document.getElementById("sundayNightSelect");
  
  var menuName = document.getElementById("menuName").value;
    
  menu.name = menuName;
  
  if (mondayNoon.value != "-- Select --") {
    menu.monday_noon = mondayNoon.value;
  }
  if (mondayNight.value != "-- Select --") {
    menu.monday_night = mondayNight.value;
  }
  if (tuesdayNoon.value != "-- Select --") {
    menu.tuesday_noon = tuesdayNoon.value;
  }
  if (tuesdayNight.value != "-- Select --") {
    menu.tuesday_night = tuesdayNight.value;
  }
  if (wednesdayNoon.value != "-- Select --") {
    menu.wednesday_noon = wednesdayNoon.value;
  }
  if (wednesdayNight.value != "-- Select --") {
    menu.wednesday_night = wednesdayNight.value;
  }
  if (thursdayNoon.value != "-- Select --") {
    menu.thursday_noon = thursdayNoon.value;
  }
  if (thursdayNight.value != "-- Select --") {
    menu.thursday_night = thursdayNight.value;
  }
  if (fridayNoon.value != "-- Select --") {
    menu.friday_noon = fridayNoon.value;
  }
  if (fridayNight.value != "-- Select --") {
    menu.friday_night = fridayNight.value;
  }
  if (saturdayNoon.value != "-- Select --") {
    menu.saturday_noon = saturdayNoon.value;
  }
  if (saturdayNight.value != "-- Select --") {
    menu.saturday_night = saturdayNight.value;
  }
  if (sundayNoon.value != "-- Select --") {
    menu.sunday_noon = sundayNoon.value;
  }
  if (sundayNight.value != "-- Select --") {
    menu.sunday_night = sundayNight.value;
  }

  menus.push(menu);

  localStorage.setItem('menus', JSON.stringify(menus));

  menu = {};

  window.location.reload();
}

function modify() {
    var menuModifySelect = document.getElementById("menuModifySelect");
    
    if (!clickedModify) {
    	clickedModify = true;

        for (var i = 0; i < menus.length; i++) {
          const opt = document.createElement('option');
          opt.value = menus[i].name;
          opt.innerHTML = menus[i].name;
          menuModifySelect.appendChild(opt);
        }
    }
    
    var modifyMenu = document.getElementById("modifyMenu");
    
  	if (modifyMenu.style.display === "none") {
    	modifyMenu.style.display = "block";
  	} else {
    	modifyMenu.style.display = "none";
  	}
}

function choose() {
    var menuModifyName = document.getElementById("menuModifyName");

	  var mondayNoonModifySelect = document.getElementById("mondayNoonModifySelect");
    var mondayNightModifySelect = document.getElementById("mondayNightModifySelect");
    var tuesdayNoonModifySelect = document.getElementById("tuesdayNoonModifySelect");
    var tuesdayNightModifySelect = document.getElementById("tuesdayNightModifySelect");
    var wednesdayNoonModifySelect = document.getElementById("wednesdayNoonModifySelect");
    var wednesdayNightModifySelect = document.getElementById("wednesdayNightModifySelect");
    var thursdayNoonModifySelect = document.getElementById("thursdayNoonModifySelect");
    var thursdayNightModifySelect = document.getElementById("thursdayNightModifySelect");
    var fridayNoonModifySelect = document.getElementById("fridayNoonModifySelect");
    var fridayNightModifySelect = document.getElementById("fridayNightModifySelect");
    var saturdayNoonModifySelect = document.getElementById("saturdayNoonModifySelect");
    var saturdayNightModifySelect = document.getElementById("saturdayNightModifySelect");
    var sundayNoonModifySelect = document.getElementById("sundayNoonModifySelect");
    var sundayNightModifySelect = document.getElementById("sundayNightModifySelect");
    
    var selects = [mondayNoonModifySelect, mondayNightModifySelect, tuesdayNoonModifySelect, tuesdayNightModifySelect, wednesdayNoonModifySelect, wednesdayNightModifySelect, thursdayNoonModifySelect, thursdayNightModifySelect, fridayNoonModifySelect, fridayNightModifySelect, saturdayNoonModifySelect, saturdayNightModifySelect, sundayNoonModifySelect, sundayNightModifySelect];
    
    var menuModifySelect = document.getElementById("menuModifySelect");
    var showModifyMenu = document.getElementById("showModifyMenu");
    
    if (menuModifySelect.value != "-- Select --") {
    
    if (!clickedChoose) {
        clickedChoose = true;

        menuModifyName.value = menuModifySelect.value;

        for (var i = 0; i < selects.length; i++) {
          for (var j = 0; j < meals.length; j++) {
            selects[i].innerHTML = selects[i].innerHTML + '<option value="' + meals[j]['name'] + '">' + meals[j]['name'] + '</option>';
          }
        }

        for (var i = 0; i < selects.length; i++) {
          for (var j = 0; j < assembled_meals.length; j++) {
            selects[i].innerHTML = selects[i].innerHTML + '<option value="' + assembled_meals[j]['name'] + '">' + assembled_meals[j]['name'] + '</option>';
          }
        }

        for (var i = 0; i < menus.length; i++) {
          if (menuModifySelect.value == menus[i].name) {
            mondayNoonModifySelect.value = menus[i].monday_noon;
            mondayNightModifySelect.value = menus[i].monday_night;
            tuesdayNoonModifySelect.value = menus[i].tuesday_noon;
            tuesdayNightModifySelect.value = menus[i].tuesday_night;
            wednesdayNoonModifySelect.value = menus[i].wednesday_noon;
            wednesdayNightModifySelect.value = menus[i].wednesday_night;
            thursdayNoonModifySelect.value = menus[i].thursday_noon;
            thursdayNightModifySelect.value = menus[i].thursday_night;
            fridayNoonModifySelect.value = menus[i].friday_noon;
            fridayNightModifySelect.value = menus[i].friday_night;
            saturdayNoonModifySelect.value = menus[i].saturday_noon;
            saturdayNightModifySelect.value = menus[i].saturday_night;
            sundayNoonModifySelect.value = menus[i].sunday_noon;
            sundayNightModifySelect.value = menus[i].sunday_night;
          }
        }

        showModifyMenu.style.display = "block";
    }
    else {
      menuModifyName.value = menuModifySelect.value;

      for (var i = 0; i < menus.length; i++) {
        if (menuModifySelect.value == menus[i].name) {
          mondayNoonModifySelect.value = menus[i].monday_noon;
          mondayNightModifySelect.value = menus[i].monday_night;
          tuesdayNoonModifySelect.value = menus[i].tuesday_noon;
          tuesdayNightModifySelect.value = menus[i].tuesday_night;
          wednesdayNoonModifySelect.value = menus[i].wednesday_noon;
          wednesdayNightModifySelect.value = menus[i].wednesday_night;
          thursdayNoonModifySelect.value = menus[i].thursday_noon;
          thursdayNightModifySelect.value = menus[i].thursday_night;
          fridayNoonModifySelect.value = menus[i].friday_noon;
          fridayNightModifySelect.value = menus[i].friday_night;
          saturdayNoonModifySelect.value = menus[i].saturday_noon;
          saturdayNightModifySelect.value = menus[i].saturday_night;
          sundayNoonModifySelect.value = menus[i].sunday_noon;
          sundayNightModifySelect.value = menus[i].sunday_night;
        }
      }

      showModifyMenu.style.display = "block";
    }
  }
}

function okModify() {
  var mondayNoonModify = document.getElementById("mondayNoonModifySelect");
  var mondayNightModify = document.getElementById("mondayNightModifySelect");
  var tuesdayNoonModify = document.getElementById("tuesdayNoonModifySelect");
  var tuesdayNightModify = document.getElementById("tuesdayNightModifySelect");
  var wednesdayNoonModify = document.getElementById("wednesdayNoonModifySelect");
  var wednesdayNightModify = document.getElementById("wednesdayNightModifySelect");
  var thursdayNoonModify = document.getElementById("thursdayNoonModifySelect");
  var thursdayNightModify = document.getElementById("thursdayNightModifySelect");
  var fridayNoonModify = document.getElementById("fridayNoonModifySelect");
  var fridayNightModify = document.getElementById("fridayNightModifySelect");
  var saturdayNoonModify = document.getElementById("saturdayNoonModifySelect");
  var saturdayNightModify = document.getElementById("saturdayNightModifySelect");
  var sundayNoonModify = document.getElementById("sundayNoonModifySelect");
  var sundayNightModify = document.getElementById("sundayNightModifySelect");
  
  var menuModifyName = document.getElementById("menuModifyName").value;

  var menuName = document.getElementById("menuModifySelect").value;

  menu.name = menuModifyName;
  
  if (mondayNoonModify.value != "-- Select --") {
    menu.monday_noon = mondayNoonModify.value;
  }
  if (mondayNightModify.value != "-- Select --") {
    menu.monday_night = mondayNightModify.value;
  }
  if (tuesdayNoonModify.value != "-- Select --") {
    menu.tuesday_noon = tuesdayNoonModify.value;
  }
  if (tuesdayNightModify.value != "-- Select --") {
    menu.tuesday_night = tuesdayNightModify.value;
  }
  if (wednesdayNoonModify.value != "-- Select --") {
    menu.wednesday_noon = wednesdayNoonModify.value;
  }
  if (wednesdayNightModify.value != "-- Select --") {
    menu.wednesday_night = wednesdayNightModify.value;
  }
  if (thursdayNoonModify.value != "-- Select --") {
    menu.thursday_noon = thursdayNoonModify.value;
  }
  if (thursdayNightModify.value != "-- Select --") {
    menu.thursday_night = thursdayNightModify.value;
  }
  if (fridayNoonModify.value != "-- Select --") {
    menu.friday_noon = fridayNoonModify.value;
  }
  if (fridayNightModify.value != "-- Select --") {
    menu.friday_night = fridayNightModify.value;
  }
  if (saturdayNoonModify.value != "-- Select --") {
    menu.saturday_noon = saturdayNoonModify.value;
  }
  if (saturdayNightModify.value != "-- Select --") {
    menu.saturday_night = saturdayNightModify.value;
  }
  if (sundayNoonModify.value != "-- Select --") {
    menu.sunday_noon = sundayNoonModify.value;
  }
  if (sundayNightModify.value != "-- Select --") {
    menu.sunday_night = sundayNightModify.value;
  }

  for (var i = 0; i < menus.length; i++) {
    if (menus[i].name == menuName) {
      menus[i].name = menu.name;
      menus[i].monday_noon = menu.monday_noon;
      menus[i].monday_night = menu.monday_night;
      menus[i].tuesday_noon = menu.tuesday_noon;
      menus[i].tuesday_night = menu.tuesday_night;
      menus[i].wednesday_noon = menu.wednesday_noon;
      menus[i].wednesday_night = menu.wednesday_night;
      menus[i].thursday_noon = menu.thursday_noon;
      menus[i].thursday_night = menu.thursday_night;
      menus[i].friday_noon = menu.friday_noon;
      menus[i].friday_night = menu.friday_night;
      menus[i].saturday_noon = menu.saturday_noon;
      menus[i].saturday_night = menu.saturday_night;
      menus[i].sunday_noon = menu.sunday_noon;
      menus[i].sunday_night = menu.sunday_night;
    }
  }

  localStorage.setItem('menus', JSON.stringify(menus));

  menu = {};

  window.location.reload();
}

function show() {
	  var menuShowSelect = document.getElementById("menuShowSelect");
    
    if (!clickedShow) {
    	clickedShow = true;

        for (var i = 0; i < menus.length; i++) {
          const opt = document.createElement('option');
          opt.value = menus[i].name;
          opt.innerHTML = menus[i].name;
          menuShowSelect.appendChild(opt);
        }
    }
    
    var showMenu = document.getElementById("showMenu");
    var showedMenu = document.getElementById("showedMenu");
    
  	if (showMenu.style.display === "none") {
    	showMenu.style.display = "block";
  	} else {
    	showMenu.style.display = "none";
        showedMenu.style.display = "none";
  	}
}

function okShow() {
    for (var i = 0; i < meals.length; i++) {
      meal_and_assembled.name = meals[i].name;
      meal_and_assembled.type = meals[i].type;
      meal_and_assembled.elements = meals[i].elements;
      meal_and_assembled.quantities = meals[i].quantities;
      meal_and_assembled.calories = meals[i].calories;
      meal_and_assembled.proteins = meals[i].proteins;
      meal_and_assembled.fat = meals[i].fat;
      meal_and_assembled.carbs = meals[i].carbs;
      meal_and_assembled.fibers = meals[i].fibers;

      JSON.stringify(meal_and_assembled);

      meals_and_assembled.push(meal_and_assembled);

      meal_and_assembled = {};
    }

    for (var i = 0; i < assembled_meals.length; i++) {
      meal_and_assembled.name = assembled_meals[i].name;
      meal_and_assembled.type = assembled_meals[i].type;
      meal_and_assembled.elements = assembled_meals[i].elements;
      meal_and_assembled.quantities = assembled_meals[i].quantities;
      meal_and_assembled.calories = assembled_meals[i].calories;
      meal_and_assembled.proteins = assembled_meals[i].proteins;
      meal_and_assembled.fat = assembled_meals[i].fat;
      meal_and_assembled.carbs = assembled_meals[i].carbs;
      meal_and_assembled.fibers = assembled_meals[i].fibers;

      JSON.stringify(meal_and_assembled);

      meals_and_assembled.push(meal_and_assembled);

      meal_and_assembled = {};
    }

    var menuShowSelect = document.getElementById("menuShowSelect");

    var mondayNoonFood = document.getElementById("mondayNoonFood");
    var mondayNoonCalories = document.getElementById("mondayNoonCalories");
    var mondayNoonProteins = document.getElementById("mondayNoonProteins");
    var mondayNoonFat = document.getElementById("mondayNoonFat");
    var mondayNoonCarbs = document.getElementById("mondayNoonCarbs");
    var mondayNoonFibers = document.getElementById("mondayNoonFibers");
    
    var mondayNightFood = document.getElementById("mondayNightFood");
    var mondayNightCalories = document.getElementById("mondayNightCalories");
    var mondayNightProteins = document.getElementById("mondayNightProteins");
    var mondayNightFat = document.getElementById("mondayNightFat");
    var mondayNightCarbs = document.getElementById("mondayNightCarbs");
    var mondayNightFibers = document.getElementById("mondayNightFibers");
    
    var mondayTotalCalories = document.getElementById("mondayTotalCalories");
    var mondayTotalProteins = document.getElementById("mondayTotalProteins");
    var mondayTotalFat = document.getElementById("mondayTotalFat");
    var mondayTotalCarbs = document.getElementById("mondayTotalCarbs");
    var mondayTotalFibers = document.getElementById("mondayTotalFibers");

    var tuesdayNoonFood = document.getElementById("tuesdayNoonFood");
    var tuesdayNoonCalories = document.getElementById("tuesdayNoonCalories");
    var tuesdayNoonProteins = document.getElementById("tuesdayNoonProteins");
    var tuesdayNoonFat = document.getElementById("tuesdayNoonFat");
    var tuesdayNoonCarbs = document.getElementById("tuesdayNoonCarbs");
    var tuesdayNoonFibers = document.getElementById("tuesdayNoonFibers");
    
    var tuesdayNightFood = document.getElementById("tuesdayNightFood");
    var tuesdayNightCalories = document.getElementById("tuesdayNightCalories");
    var tuesdayNightProteins = document.getElementById("tuesdayNightProteins");
    var tuesdayNightFat = document.getElementById("tuesdayNightFat");
    var tuesdayNightCarbs = document.getElementById("tuesdayNightCarbs");
    var tuesdayNightFibers = document.getElementById("tuesdayNightFibers");
    
    var tuesdayTotalCalories = document.getElementById("tuesdayTotalCalories");
    var tuesdayTotalProteins = document.getElementById("tuesdayTotalProteins");
    var tuesdayTotalFat = document.getElementById("tuesdayTotalFat");
    var tuesdayTotalCarbs = document.getElementById("tuesdayTotalCarbs");
    var tuesdayTotalFibers = document.getElementById("tuesdayTotalFibers");
    
    var wednesdayNoonFood = document.getElementById("wednesdayNoonFood");
    var wednesdayNoonCalories = document.getElementById("wednesdayNoonCalories");
    var wednesdayNoonProteins = document.getElementById("wednesdayNoonProteins");
    var wednesdayNoonFat = document.getElementById("wednesdayNoonFat");
    var wednesdayNoonCarbs = document.getElementById("wednesdayNoonCarbs");
    var wednesdayNoonFibers = document.getElementById("wednesdayNoonFibers");
    
    var wednesdayNightFood = document.getElementById("wednesdayNightFood");
    var wednesdayNightCalories = document.getElementById("wednesdayNightCalories");
    var wednesdayNightProteins = document.getElementById("wednesdayNightProteins");
    var wednesdayNightFat = document.getElementById("wednesdayNightFat");
    var wednesdayNightCarbs = document.getElementById("wednesdayNightCarbs");
    var wednesdayNightFibers = document.getElementById("wednesdayNightFibers");
    
    var wednesdayTotalCalories = document.getElementById("wednesdayTotalCalories");
    var wednesdayTotalProteins = document.getElementById("wednesdayTotalProteins");
    var wednesdayTotalFat = document.getElementById("wednesdayTotalFat");
    var wednesdayTotalCarbs = document.getElementById("wednesdayTotalCarbs");
    var wednesdayTotalFibers = document.getElementById("wednesdayTotalFibers");
    
    var thursdayNoonFood = document.getElementById("thursdayNoonFood");
    var thursdayNoonCalories = document.getElementById("thursdayNoonCalories");
    var thursdayNoonProteins = document.getElementById("thursdayNoonProteins");
    var thursdayNoonFat = document.getElementById("thursdayNoonFat");
    var thursdayNoonCarbs = document.getElementById("thursdayNoonCarbs");
    var thursdayNoonFibers = document.getElementById("thursdayNoonFibers");
    
    var thursdayNightFood = document.getElementById("thursdayNightFood");
    var thursdayNightCalories = document.getElementById("thursdayNightCalories");
    var thursdayNightProteins = document.getElementById("thursdayNightProteins");
    var thursdayNightFat = document.getElementById("thursdayNightFat");
    var thursdayNightCarbs = document.getElementById("thursdayNightCarbs");
    var thursdayNightFibers = document.getElementById("thursdayNightFibers");
    
    var thursdayTotalCalories = document.getElementById("thursdayTotalCalories");
    var thursdayTotalProteins = document.getElementById("thursdayTotalProteins");
    var thursdayTotalFat = document.getElementById("thursdayTotalFat");
    var thursdayTotalCarbs = document.getElementById("thursdayTotalCarbs");
    var thursdayTotalFibers = document.getElementById("thursdayTotalFibers");
    
    var fridayNoonFood = document.getElementById("fridayNoonFood");
    var fridayNoonCalories = document.getElementById("fridayNoonCalories");
    var fridayNoonProteins = document.getElementById("fridayNoonProteins");
    var fridayNoonFat = document.getElementById("fridayNoonFat");
    var fridayNoonCarbs = document.getElementById("fridayNoonCarbs");
    var fridayNoonFibers = document.getElementById("fridayNoonFibers");
    
    var fridayNightFood = document.getElementById("fridayNightFood");
    var fridayNightCalories = document.getElementById("fridayNightCalories");
    var fridayNightProteins = document.getElementById("fridayNightProteins");
    var fridayNightFat = document.getElementById("fridayNightFat");
    var fridayNightCarbs = document.getElementById("fridayNightCarbs");
    var fridayNightFibers = document.getElementById("fridayNightFibers");
    
    var fridayTotalCalories = document.getElementById("fridayTotalCalories");
    var fridayTotalProteins = document.getElementById("fridayTotalProteins");
    var fridayTotalFat = document.getElementById("fridayTotalFat");
    var fridayTotalCarbs = document.getElementById("fridayTotalCarbs");
    var fridayTotalFibers = document.getElementById("fridayTotalFibers");
    
    var saturdayNoonFood = document.getElementById("saturdayNoonFood");
    var saturdayNoonCalories = document.getElementById("saturdayNoonCalories");
    var saturdayNoonProteins = document.getElementById("saturdayNoonProteins");
    var saturdayNoonFat = document.getElementById("saturdayNoonFat");
    var saturdayNoonCarbs = document.getElementById("saturdayNoonCarbs");
    var saturdayNoonFibers = document.getElementById("saturdayNoonFibers");
    
    var saturdayNightFood = document.getElementById("saturdayNightFood");
    var saturdayNightCalories = document.getElementById("saturdayNightCalories");
    var saturdayNightProteins = document.getElementById("saturdayNightProteins");
    var saturdayNightFat = document.getElementById("saturdayNightFat");
    var saturdayNightCarbs = document.getElementById("saturdayNightCarbs");
    var saturdayNightFibers = document.getElementById("saturdayNightFibers");
    
    var saturdayTotalCalories = document.getElementById("saturdayTotalCalories");
    var saturdayTotalProteins = document.getElementById("saturdayTotalProteins");
    var saturdayTotalFat = document.getElementById("saturdayTotalFat");
    var saturdayTotalCarbs = document.getElementById("saturdayTotalCarbs");
    var saturdayTotalFibers = document.getElementById("saturdayTotalFibers");
    
    var sundayNoonFood = document.getElementById("sundayNoonFood");
    var sundayNoonCalories = document.getElementById("sundayNoonCalories");
    var sundayNoonProteins = document.getElementById("sundayNoonProteins");
    var sundayNoonFat = document.getElementById("sundayNoonFat");
    var sundayNoonCarbs = document.getElementById("sundayNoonCarbs");
    var sundayNoonFibers = document.getElementById("sundayNoonFibers");
    
    var sundayNightFood = document.getElementById("sundayNightFood");
    var sundayNightCalories = document.getElementById("sundayNightCalories");
    var sundayNightProteins = document.getElementById("sundayNightProteins");
    var sundayNightFat = document.getElementById("sundayNightFat");
    var sundayNightCarbs = document.getElementById("sundayNightCarbs");
    var sundayNightFibers = document.getElementById("sundayNightFibers");
    
    var sundayTotalCalories = document.getElementById("sundayTotalCalories");
    var sundayTotalProteins = document.getElementById("sundayTotalProteins");
    var sundayTotalFat = document.getElementById("sundayTotalFat");
    var sundayTotalCarbs = document.getElementById("sundayTotalCarbs");
    var sundayTotalFibers = document.getElementById("sundayTotalFibers");

    var quantity = 0;

    for (var i = 0; i < menus.length; i++) {
      if (menuShowSelect.value == menus[i].name) {
          menu.name = menus[i].name;
          menu.monday_noon = menus[i].monday_noon;
          menu.monday_night = menus[i].monday_night;
          menu.tuesday_noon = menus[i].tuesday_noon;
          menu.tuesday_night = menus[i].tuesday_night;
          menu.wednesday_noon = menus[i].wednesday_noon;
          menu.wednesday_night = menus[i].wednesday_night;
          menu.thursday_noon = menus[i].thursday_noon;
          menu.thursday_night = menus[i].thursday_night;
          menu.friday_noon = menus[i].friday_noon;
          menu.friday_night = menus[i].friday_night;
          menu.saturday_noon = menus[i].saturday_noon;
          menu.saturday_night = menus[i].saturday_night;
          menu.sunday_noon = menus[i].sunday_noon;
          menu.sunday_night = menus[i].sunday_night;
      }
    }
    
    if (menuShowSelect.value != "-- Select --") {
      for (var i = 0; i < meals_and_assembled.length; i++) {
          
        if (meals_and_assembled[i].name == menu.monday_noon) {
          var len = meals_and_assembled[i].elements.length;
            mondayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              mondayNoonFood.innerHTML = mondayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            mondayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            mondayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            mondayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            mondayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            mondayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.monday_night) {
          var len = meals_and_assembled[i].elements.length;
            mondayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals[i].quantities[j]).toFixed(1);
                }
              }
              mondayNightFood.innerHTML = mondayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            mondayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            mondayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            mondayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            mondayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            mondayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.tuesday_noon) {
          var len = meals_and_assembled[i].elements.length;
            tuesdayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              tuesdayNoonFood.innerHTML = tuesdayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            tuesdayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            tuesdayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            tuesdayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            tuesdayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            tuesdayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.tuesday_night) {
          var len = meals_and_assembled[i].elements.length;
            tuesdayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              tuesdayNightFood.innerHTML = tuesdayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            tuesdayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            tuesdayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            tuesdayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            tuesdayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            tuesdayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.wednesday_noon) {
          var len = meals_and_assembled[i].elements.length;
            wednesdayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              wednesdayNoonFood.innerHTML = wednesdayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            wednesdayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            wednesdayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            wednesdayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            wednesdayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            wednesdayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.wednesday_night) {
          var len = meals_and_assembled[i].elements.length;
            wednesdayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              wednesdayNightFood.innerHTML = wednesdayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            wednesdayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            wednesdayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            wednesdayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            wednesdayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            wednesdayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.thursday_noon) {
          var len = meals_and_assembled[i].elements.length;
            thursdayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              thursdayNoonFood.innerHTML = thursdayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            thursdayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            thursdayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            thursdayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            thursdayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            thursdayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.thursday_night) {
          var len = meals_and_assembled[i].elements.length;
            thursdayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              thursdayNightFood.innerHTML = thursdayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            thursdayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            thursdayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            thursdayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            thursdayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            thursdayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.friday_noon) {
          var len = meals_and_assembled[i].elements.length;
            fridayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              fridayNoonFood.innerHTML = fridayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            fridayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            fridayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            fridayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            fridayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            fridayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.friday_night) {
          var len = meals_and_assembled[i].elements.length;
            fridayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              fridayNightFood.innerHTML = fridayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            fridayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            fridayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            fridayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            fridayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            fridayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.saturday_noon) {
          var len = meals_and_assembled[i].elements.length;
            saturdayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              saturdayNoonFood.innerHTML = saturdayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            saturdayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            saturdayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            saturdayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            saturdayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            saturdayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.saturday_night) {
          var len = meals_and_assembled[i].elements.length;
            saturdayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              saturdayNightFood.innerHTML = saturdayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            saturdayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            saturdayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            saturdayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            saturdayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            saturdayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.sunday_noon) {
          var len = meals_and_assembled[i].elements.length;
            sundayNoonFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              sundayNoonFood.innerHTML = sundayNoonFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            sundayNoonCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            sundayNoonProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            sundayNoonFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            sundayNoonCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            sundayNoonFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
        
        if (meals_and_assembled[i].name == menu.sunday_night) {
          var len = meals_and_assembled[i].elements.length;
            sundayNightFood.innerHTML = "";
            for (var j = 0; j < len; j++) {
              for (var k = 0; k < macros.length; k++) {
                if (meals_and_assembled[i].elements[j] == macros[k].name) {
                  if (macros[k].unit == "100g") {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j] * 100).toFixed(0);
                    quantity += "g";
                  }
                  else {
                    quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                  }
                }
              }
              for (var k = 0; k < meals.length; k++) {
                if (meals_and_assembled[i].elements[j] == meals[k].name) {
                  quantity = parseFloat(meals_and_assembled[i].quantities[j]).toFixed(1);
                }
              }
              sundayNightFood.innerHTML = sundayNightFood.innerHTML + '<br/>' + '&bull; ' + quantity + ' ' + meals_and_assembled[i].elements[j];
            }
            sundayNightCalories.innerHTML = parseFloat(meals_and_assembled[i].calories).toFixed(2);
            sundayNightProteins.innerHTML = parseFloat(meals_and_assembled[i].proteins).toFixed(2);
            sundayNightFat.innerHTML = parseFloat(meals_and_assembled[i].fat).toFixed(2);
            sundayNightCarbs.innerHTML = parseFloat(meals_and_assembled[i].carbs).toFixed(2);
            sundayNightFibers.innerHTML = parseFloat(meals_and_assembled[i].fibers).toFixed(2);
        }
      }

    }

    mondayTotalCalories.innerHTML = (Number(mondayNoonCalories.innerText) + Number(mondayNightCalories.innerText)).toFixed(2);
    mondayTotalProteins.innerHTML = (Number(mondayNoonProteins.innerText) + Number(mondayNightProteins.innerText)).toFixed(2);
    mondayTotalFat.innerHTML = (Number(mondayNoonFat.innerText) + Number(mondayNightFat.innerText)).toFixed(2);
    mondayTotalCarbs.innerHTML = (Number(mondayNoonCarbs.innerText) + Number(mondayNightCarbs.innerText)).toFixed(2);
    mondayTotalFibers.innerHTML = (Number(mondayNoonFibers.innerText) + Number(mondayNightFibers.innerText)).toFixed(2);

    tuesdayTotalCalories.innerHTML = (Number(tuesdayNoonCalories.innerText) + Number(tuesdayNightCalories.innerText)).toFixed(2);
    tuesdayTotalProteins.innerHTML = (Number(tuesdayNoonProteins.innerText) + Number(tuesdayNightProteins.innerText)).toFixed(2);
    tuesdayTotalFat.innerHTML = (Number(tuesdayNoonFat.innerText) + Number(tuesdayNightFat.innerText)).toFixed(2);
    tuesdayTotalCarbs.innerHTML = (Number(tuesdayNoonCarbs.innerText) + Number(tuesdayNightCarbs.innerText)).toFixed(2);
    tuesdayTotalFibers.innerHTML = (Number(tuesdayNoonFibers.innerText) + Number(tuesdayNightFibers.innerText)).toFixed(2);

    wednesdayTotalCalories.innerHTML = (Number(wednesdayNoonCalories.innerText) + Number(wednesdayNightCalories.innerText)).toFixed(2);
    wednesdayTotalProteins.innerHTML = (Number(wednesdayNoonProteins.innerText) + Number(wednesdayNightProteins.innerText)).toFixed(2);
    wednesdayTotalFat.innerHTML = (Number(wednesdayNoonFat.innerText) + Number(wednesdayNightFat.innerText)).toFixed(2);
    wednesdayTotalCarbs.innerHTML = (Number(wednesdayNoonCarbs.innerText) + Number(wednesdayNightCarbs.innerText)).toFixed(2);
    wednesdayTotalFibers.innerHTML = (Number(wednesdayNoonFibers.innerText) + Number(wednesdayNightFibers.innerText)).toFixed(2);

    thursdayTotalCalories.innerHTML = (Number(thursdayNoonCalories.innerText) + Number(thursdayNightCalories.innerText)).toFixed(2);
    thursdayTotalProteins.innerHTML = (Number(thursdayNoonProteins.innerText) + Number(thursdayNightProteins.innerText)).toFixed(2);
    thursdayTotalFat.innerHTML = (Number(thursdayNoonFat.innerText) + Number(thursdayNightFat.innerText)).toFixed(2);
    thursdayTotalCarbs.innerHTML = (Number(thursdayNoonCarbs.innerText) + Number(thursdayNightCarbs.innerText)).toFixed(2);
    thursdayTotalFibers.innerHTML = (Number(thursdayNoonFibers.innerText) + Number(thursdayNightFibers.innerText)).toFixed(2);

    fridayTotalCalories.innerHTML = (Number(fridayNoonCalories.innerText) + Number(fridayNightCalories.innerText)).toFixed(2);
    fridayTotalProteins.innerHTML = (Number(fridayNoonProteins.innerText) + Number(fridayNightProteins.innerText)).toFixed(2);
    fridayTotalFat.innerHTML = (Number(fridayNoonFat.innerText) + Number(fridayNightFat.innerText)).toFixed(2);
    fridayTotalCarbs.innerHTML = (Number(fridayNoonCarbs.innerText) + Number(fridayNightCarbs.innerText)).toFixed(2);
    fridayTotalFibers.innerHTML = (Number(fridayNoonFibers.innerText) + Number(fridayNightFibers.innerText)).toFixed(2);

    saturdayTotalCalories.innerHTML = (Number(saturdayNoonCalories.innerText) + Number(saturdayNightCalories.innerText)).toFixed(2);
    saturdayTotalProteins.innerHTML = (Number(saturdayNoonProteins.innerText) + Number(saturdayNightProteins.innerText)).toFixed(2);
    saturdayTotalFat.innerHTML = (Number(saturdayNoonFat.innerText) + Number(saturdayNightFat.innerText)).toFixed(2);
    saturdayTotalCarbs.innerHTML = (Number(saturdayNoonCarbs.innerText) + Number(saturdayNightCarbs.innerText)).toFixed(2);
    saturdayTotalFibers.innerHTML = (Number(saturdayNoonFibers.innerText) + Number(saturdayNightFibers.innerText)).toFixed(2);

    sundayTotalCalories.innerHTML = (Number(sundayNoonCalories.innerText) + Number(sundayNightCalories.innerText)).toFixed(2);
    sundayTotalProteins.innerHTML = (Number(sundayNoonProteins.innerText) + Number(sundayNightProteins.innerText)).toFixed(2);
    sundayTotalFat.innerHTML = (Number(sundayNoonFat.innerText) + Number(sundayNightFat.innerText)).toFixed(2);
    sundayTotalCarbs.innerHTML = (Number(sundayNoonCarbs.innerText) + Number(sundayNightCarbs.innerText)).toFixed(2);
    sundayTotalFibers.innerHTML = (Number(sundayNoonFibers.innerText) + Number(sundayNightFibers.innerText)).toFixed(2);
        
    var showedMenu = document.getElementById("showedMenu");

    showedMenu.style.display = "block";

    menu = {};
}

function _delete() {
  var menuDeleteSelect = document.getElementById("menuDeleteSelect");
  
  if (!clickedDelete) {
    clickedDelete = true;

      for (var i = 0; i < menus.length; i++) {
        const opt = document.createElement('option');
        opt.value = menus[i].name;
        opt.innerHTML = menus[i].name;
        menuDeleteSelect.appendChild(opt);
      }
  }
  
  var deleteMenu = document.getElementById("deleteMenu");
  
  if (deleteMenu.style.display === "none") {
    deleteMenu.style.display = "block";
  } else {
    deleteMenu.style.display = "none";
  }
}

function okDelete() {
  var menuDeleteSelect = document.getElementById("menuDeleteSelect");

  var deletePosition = -1;
  
  for (var i = 0; i < menus.length; i++) {
    if (menus[i].name == menuDeleteSelect.value) {
      deletePosition = i;
    }
  }

  menus.splice(deletePosition, 1);

  localStorage.setItem('menus', JSON.stringify(menus));

  window.location.reload();
}

export default function Home() {
  useEffect(() => {

    document.getElementById("meal1List").style.display = "none";
    document.getElementById("meal2List").style.display = "none";
    document.getElementById("meal3List").style.display = "none";
    document.getElementById("meal4List").style.display = "none";
    document.getElementById("meal5List").style.display = "none";
    document.getElementById("meal6List").style.display = "none";
    document.getElementById("meal7List").style.display = "none";
    document.getElementById("meal8List").style.display = "none";
    document.getElementById("meal9List").style.display = "none";
    document.getElementById("meal10List").style.display = "none";

    document.getElementById("deleteMenu").style.display = "none";

    window.onload = _localStorage;
  })

  return (
    <div className="container">
      <Head>
        <title>Meals & Menus</title>
        <link rel="icon" href="/logo_meal.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

      <div class="container-fluid">

          <div class="container-fluid p-2 my-3">
              <div className="home_container">
                  <div className="card">
                      <h5>Meals & Menus</h5>
                  </div>
              </div>
          </div>

          <p></p>

          <center>

          <div class="container-fluid py-2" id="noonMacros">
                <mark>NOON</mark>&ensp;
                <code>Calories:
                <input class="col-sm-1" type="text" id="caloriesNoon"></input>
                | Proteins:
                <input class="col-sm-1" type="text" id="proteinsNoon"></input>
                | Fat:
                <input class="col-sm-1" type="text" id="fatNoon"></input>
                | Carbs:
                <input class="col-sm-1" type="text" id="carbsNoon"></input>
                | Fibers:
                <input class="col-sm-1" type="text" id="fibersNoon"></input></code>
            </div>

            <div class="container-fluid py-2" id="nightMacros">
                <mark>NIGHT</mark>&ensp;
                <code>Calories:
                <input class="col-sm-1" type="text" id="caloriesNight"></input>
                | Proteins:
                <input class="col-sm-1" type="text" id="proteinsNight"></input>
                | Fat:
                <input class="col-sm-1" type="text" id="fatNight"></input>
                | Carbs:
                <input class="col-sm-1" type="text" id="carbsNight"></input>
                | Fibers:
                <input class="col-sm-1" type="text" id="fibersNight"></input></code>
            </div>

            <div class="text-center">

              <div class="container-fluid py-2">
                  <input type="button" id="updateMacros" class="btn btn-outline-danger" onClick={() => {updateMacros()} } value="UPDATE MACROS"></input>
              </div>

            </div>

            <p></p>

            <p></p>

          <div class="container-fluid py-2">
            <h2>&#127789; MEALS &#127789;</h2>
          
            <p></p>

            <input type="button" id="showMeals" class="btn btn-outline-info" value="SHOW MEALS" onClick={() => {showMeals()} }></input>
            <p></p>

            <div id="showMeal">
            <p></p>
              <div class="col-md-3" id="mealShow">
              <label for="mealShowSelect" id="mealShowLabel">Meal to show:&ensp;</label>
              <select class="form-select" id="mealShowSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
              </div>
              <p></p>
              <input type="button" id="okShowMeal" class="btn btn-outline-success" value="OK" onClick={() => {okShowMeal()} }></input>
            </div>

            <div id="showedMeal">
              <p></p>
              <div class="container border border-primary" id="showAllMeals"></div>
                <p></p>
              </div>
          </div>

          <p></p>

          <div class="container-fluid py-2">
            <h2>&#127871; ASSEMBLE MEALS &#127871;</h2>

            <p></p>

            <input type="button" id="create" class="btn btn-outline-info" value="ASSEMBLE" onClick={() => {assemble()} }></input>

            <div id="assemble">

              <div class="container-fluid py-2">
                  <label for="assembledMenuName">Menu name:&ensp;</label>
                  <input type="text" id="assembledMenuName" name="assembledMenuName"></input>
              </div>

              <div class="container-fluid py-2">
                  <label for="type">Menu type:&ensp;</label>

                  <input type="radio" id="noonRadio" name="type" value="noonRadio" checked></input>
                  <label for="noonRadio">&nbsp;noon&ensp;</label>

                  <input type="radio" id="nightRadio" name="type" value="nightRadio"></input>
                  <label for="nightRadio">&nbsp;night</label>
              </div>
              
              <div class="container-fluid py-2">
                  <label class="form-label">Number of meals in menu:</label>
                  <div class="col-md-3">
                      <select class="form-select" id="number">
                          <option selected="selected" value="-- Select --">-- Select --</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                      </select>
                  </div>
              </div>
              
              <div class="container-fluid py-2">
                  <input type="button" 
                          class="btn btn-outline-success"
                              onClick={() => {elementNumber(); populateSelect(); macrosUpdate()} }
                                  value="OK" />
              </div>
              
              <div class="container-fluid py-2">
                  <div id="meal1List">
                      <div class="container-fluid py-2">
                          <label class="form-label">1st meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal1" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal2List">
                      <div class="container-fluid py-2">
                          <label class="form-label">2nd meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal2" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal3List">
                      <div class="container-fluid py-2">
                          <label class="form-label">3rd meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal3" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal4List">
                      <div class="container-fluid py-2">
                          <label class="form-label">4th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal4" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal5List">
                      <div class="container-fluid py-2">
                          <label class="form-label">5th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal5" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal6List">
                      <div class="container-fluid py-2">
                          <label class="form-label">6th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal6" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal7List">
                      <div class="container-fluid py-2">
                          <label class="form-label">7th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal7" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal8List">
                      <div class="container-fluid py-2">
                          <label class="form-label">8th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal8" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal9List">
                      <div class="container-fluid py-2">
                          <label class="form-label">9th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal9" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div id="meal10List">
                      <div class="container-fluid py-2">
                          <label class="form-label">10th meal to include:</label>
                          <div class="col-sm-7">
                              <div class="d-inline-flex align-items-center">
                                  <select class="form-select" id="meal10" onChange={() => {macrosUpdate()} }>
                                  <option selected="selected" value="-- Select --">-- Select --</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>

                </div>

                <p></p>

                <div class="container-fluid py-2" id="macrosTotal">
                  <mark class="container-fluid py-2">Total</mark>&nbsp;
                    <code><font color="#008000">Calories:
                    <input class="col-sm-1" type="text" id="caloriesTotal"></input>
                    | Proteins:
                    <input class="col-sm-1" type="text" id="proteinsTotal"></input>
                    | Fat:
                    <input class="col-sm-1" type="text" id="fatTotal"></input>
                    | Carbs:
                    <input class="col-sm-1" type="text" id="carbsTotal"></input>
                    | Fibers:
                    <input class="col-sm-1" type="text" id="fibersTotal"></input></font></code>
                </div>

                <p></p>
            
                <div class="container-fluid py-2">
                    <input type="button" 
                            class="btn btn-outline-primary"
                                onClick={() => {save()} }
                                    value="Save" />
                </div>

            </div>

          </div>

          <p></p>

          <p></p>

          <div class="container-fluid py-2">
            <h2>&#127870; MENUS &#127870;</h2>
          
            <p></p>

          <input type="button" id="create" class="btn btn-outline-info" value="CREATE MENU" onClick={() => {create()} }></input>

          <div id="createMenu">
            <p></p>
            <div>
              <label for="menuName">Menu name:&ensp;</label>
              <input class="col-sm-2" type="text" id="menuName" name="menuName"></input>
            </div>
            <p></p>
            <div class="col-md-3" id="mondayNoonCreate">
              <label for="mondayNoonSelect" id="mondayNoonCreateLabel">Monday Noon:&ensp;</label>
              <select class="form-select" id="mondayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="mondayNightCreate">
              <label for="mondayNightSelect" id="mondayNightCreateLabel">Monday Night:&ensp;</label>
              <select class="form-select" id="mondayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="tuesdayNoonCreate">
              <label for="tuesdayNoonSelect" id="tuesdayNoonCreateLabel">Tuesday Noon:&ensp;</label>
              <select class="form-select" id="tuesdayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="tuesdayNightCreate">
              <label for="tuesdayNightSelect" id="tuesdayNightCreateLabel">Tuesday Night:&ensp;</label>
              <select class="form-select" id="tuesdayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="wednesdayNoonCreate">
              <label for="wednesdayNoonSelect" id="wednesdayNoonCreateLabel">Wednesday Noon:&ensp;</label>
              <select class="form-select" id="wednesdayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="wednesdayNightCreate">
              <label for="wednesdayNightSelect" id="wednesdayNightCreateLabel">Wednesday Night:&ensp;</label>
              <select class="form-select" id="wednesdayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="thursdayNoonCreate">
              <label for="thursdayNoonSelect" id="thursdayNoonCreateLabel">Thursday Noon:&ensp;</label>
              <select class="form-select" id="thursdayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="thursdayNightCreate">
              <label for="thursdayNightSelect" id="thursdayNightCreateLabel">Thursday Night:&ensp;</label>
              <select class="form-select" id="thursdayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="fridayNoonCreate">
              <label for="fridayNoonSelect" id="fridayNoonCreateLabel">Friday Noon:&ensp;</label>
              <select class="form-select" id="fridayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="fridayNightCreate">
              <label for="fridayNightSelect" id="fridayNightCreateLabel">Friday Night:&ensp;</label>
              <select class="form-select" id="fridayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="saturdayNoonCreate">
              <label for="saturdayNoonSelect" id="saturdayNoonCreateLabel">Saturday Noon:&ensp;</label>
              <select class="form-select" id="saturdayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="saturdayNightCreate">
              <label for="saturdayNightSelect" id="saturdayNightCreateLabel">Saturday Night:&ensp;</label>
              <select class="form-select" id="saturdayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <p>- - - - -</p>
            <div class="col-md-3" id="sundayNoonCreate">
              <label for="sundayNoonSelect" id="sundayNoonCreateLabel">Sunday Noon:&ensp;</label>
              <select class="form-select" id="sundayNoonSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <div class="col-md-3" id="sundayNightCreate">
              <label for="sundayNightSelect" id="sundayNightCreateLabel">Sunday Night:&ensp;</label>
              <select class="form-select" id="sundayNightSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <input type="button" id="okCreate" class="btn btn-outline-success" value="OK" onClick={() => {okCreate()} }></input>
          </div>
          <p></p>
          <input type="button" id="modify" class="btn btn-outline-info" value="MODIFY MENU" onClick={() => {modify()} }></input>
          
          <div id="modifyMenu">
            <p></p>
            <div class="col-md-3" id="menuModify">
              <label for="menuModifySelect" id="menuModifyLabel">Menu to modify:&ensp;</label>
              <select class="form-select" id="menuModifySelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
            </div>
            <p></p>
            <input type="button" id="choose" class="btn btn-outline-success" value="CHOOSE" onClick={() => {choose()} }></input>
            <p></p>
            <div id="showModifyMenu">
                <p></p>
                <div>
                  <label for="menuModifyName">Menu name:&ensp;</label>
                  <input class="col-sm-2" type="text" id="menuModifyName" name="menuModifyName"></input>
                </div>
                <p></p>
                <div class="col-md-3" id="mondayNoonModify">
                  <label for="mondayNoonModifySelect" id="mondayNoonModifyLabel">Monday Noon:&ensp;</label>
                  <select class="form-select" id="mondayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="mondayNightModify">
                  <label for="mondayNightModifySelect" id="mondayNightModifyLabel">Monday Night:&ensp;</label>
                  <select class="form-select" id="mondayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="tuesdayNoonModify">
                  <label for="tuesdayNoonModifySelect" id="tuesdayNoonModifyLabel">Tuesday Noon:&ensp;</label>
                  <select class="form-select" id="tuesdayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="tuesdayNightModify">
                  <label for="tuesdayNightModifySelect" id="tuesdayNightModifyLabel">Tuesday Night:&ensp;</label>
                  <select class="form-select" id="tuesdayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="wednesdayNoonModify">
                  <label for="wednesdayNoonModifySelect" id="wednesdayNoonModifyLabel">Wednesday Noon:&ensp;</label>
                  <select class="form-select" id="wednesdayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="wednesdayNightModify">
                  <label for="wednesdayNightModifySelect" id="wednesdayNightModifyLabel">Wednesday Night:&ensp;</label>
                  <select class="form-select" id="wednesdayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="thursdayNoonModify">
                  <label for="thursdayNoonModifySelect" id="thursdayNoonModifyLabel">Thursday Noon:&ensp;</label>
                  <select class="form-select" id="thursdayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="thursdayNightModify">
                  <label for="thursdayNightModifySelect" id="thursdayNightModifyLabel">Thursday Night:&ensp;</label>
                  <select class="form-select" id="thursdayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="fridayNoonModify">
                  <label for="fridayNoonModifySelect" id="fridayNoonModifyLabel">Friday Noon:&ensp;</label>
                  <select class="form-select" id="fridayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="fridayNightModify">
                  <label for="fridayNightModifySelect" id="fridayNightModifyLabel">Friday Night:&ensp;</label>
                  <select class="form-select" id="fridayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="saturdayNoonModify">
                  <label for="saturdayNoonModifySelect" id="saturdayNoonModifyLabel">Saturday Noon:&ensp;</label>
                  <select class="form-select" id="saturdayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="saturdayNightModify">
                  <label for="saturdayNightModifySelect" id="saturdayNightModifyLabel">Saturday Night:&ensp;</label>
                  <select class="form-select" id="saturdayNightModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <p>- - - - -</p>
                <div class="col-md-3" id="sundayNoonModify">
                  <label for="sundayNoonModifySelect" id="sundayNoonModifyLabel">Sunday Noon:&ensp;</label>
                  <select class="form-select" id="sundayNoonModifySelect">
                    
                  </select>
                </div>
                <p></p>
                <div class="col-md-3" id="sundayNightModify">
                  <label for="sundayNightModifySelect" id="sundayNightModifyLabel">Sunday Night:&ensp;</label>
                  <select class="form-select" id="sundayNightModifySelect">
                    
                  </select>
                </div>
            <p></p>
            <input type="button" id="okModify" class="btn btn-outline-success" value="OK" onClick={() => {okModify()} }></input>
            </div>
          </div>

          <p></p>

          <p></p>
          <input type="button" id="show" class="btn btn-outline-info" value="SHOW MENU" onClick={() => {show()} }></input>
          
          <p></p>

          <div id="showMenu">
            <p></p>
              <div class="col-md-3" id="menuShow">
              <label for="menuShowSelect" id="menuShowLabel">Menu to show:&ensp;</label>
              <select class="form-select" id="menuShowSelect">
                <option selected="selected" value="-- Select --">-- Select --</option>
              </select>
              </div>
              <p></p>
              <input type="button" id="okShow" class="btn btn-outline-success" value="OK" onClick={() => {okShow()} }></input>
          </div>
          
          <div id="showedMenu">
          <p></p>
          <div class="container border border-primary">
          <p></p>
          <mark>Monday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="mondayNoonFood"></p>
          <p><code>Calories: <span id="mondayNoonCalories"></span> kcal | Proteins: <span id="mondayNoonProteins"></span>g | Fat: <span id="mondayNoonFat"></span>g | Carbs: <span id="mondayNoonCarbs"></span>g | Fibers: <span id="mondayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="mondayNightFood"></p>
          <p><code>Calories: <span id="mondayNightCalories"></span> kcal | Proteins: <span id="mondayNightProteins"></span>g | Fat: <span id="mondayNightFat"></span>g | Carbs: <span id="mondayNightCarbs"></span>g | Fibers: <span id="mondayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="mondayTotalCalories"></span> kcal | Proteins: <span id="mondayTotalProteins"></span>g | Fat: <span id="mondayTotalFat"></span>g | Carbs: <span id="mondayTotalCarbs"></span>g | Fibers: <span id="mondayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-secondary">
          <p></p>
          <mark>Tuesday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="tuesdayNoonFood"></p>
          <p><code>Calories: <span id="tuesdayNoonCalories"></span> kcal | Proteins: <span id="tuesdayNoonProteins"></span>g | Fat: <span id="tuesdayNoonFat"></span>g | Carbs: <span id="tuesdayNoonCarbs"></span>g | Fibers: <span id="tuesdayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="tuesdayNightFood"></p>
          <p><code>Calories: <span id="tuesdayNightCalories"></span> kcal | Proteins: <span id="tuesdayNightProteins"></span>g | Fat: <span id="tuesdayNightFat"></span>g | Carbs: <span id="tuesdayNightCarbs"></span>g | Fibers: <span id="tuesdayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="tuesdayTotalCalories"></span> kcal | Proteins: <span id="tuesdayTotalProteins"></span>g | Fat: <span id="tuesdayTotalFat"></span>g | Carbs: <span id="tuesdayTotalCarbs"></span>g | Fibers: <span id="tuesdayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-success">
          <p></p>
          <mark>Wednesday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="wednesdayNoonFood"></p>
          <p><code>Calories: <span id="wednesdayNoonCalories"></span> kcal | Proteins: <span id="wednesdayNoonProteins"></span>g | Fat: <span id="wednesdayNoonFat"></span>g | Carbs: <span id="wednesdayNoonCarbs"></span>g | Fibers: <span id="wednesdayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="wednesdayNightFood"></p>
          <p><code>Calories: <span id="wednesdayNightCalories"></span> kcal | Proteins: <span id="wednesdayNightProteins"></span>g | Fat: <span id="wednesdayNightFat"></span>g | Carbs: <span id="wednesdayNightCarbs"></span>g | Fibers: <span id="wednesdayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="wednesdayTotalCalories"></span> kcal | Proteins: <span id="wednesdayTotalProteins"></span>g | Fat: <span id="wednesdayTotalFat"></span>g | Carbs: <span id="wednesdayTotalCarbs"></span>g | Fibers: <span id="wednesdayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-danger">
          <p></p>
          <mark>Thursday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="thursdayNoonFood"></p>
          <p><code>Calories: <span id="thursdayNoonCalories"></span> kcal | Proteins: <span id="thursdayNoonProteins"></span>g | Fat: <span id="thursdayNoonFat"></span>g | Carbs: <span id="thursdayNoonCarbs"></span>g | Fibers: <span id="thursdayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="thursdayNightFood"></p>
          <p><code>Calories: <span id="thursdayNightCalories"></span> kcal | Proteins: <span id="thursdayNightProteins"></span>g | Fat: <span id="thursdayNightFat"></span>g | Carbs: <span id="thursdayNightCarbs"></span>g | Fibers: <span id="thursdayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="thursdayTotalCalories"></span> kcal | Proteins: <span id="thursdayTotalProteins"></span>g | Fat: <span id="thursdayTotalFat"></span>g | Carbs: <span id="thursdayTotalCarbs"></span>g | Fibers: <span id="thursdayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-warning">
          <p></p>
          <mark>Friday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="fridayNoonFood"></p>
          <p><code>Calories: <span id="fridayNoonCalories"></span> kcal | Proteins: <span id="fridayNoonProteins"></span>g | Fat: <span id="fridayNoonFat"></span>g | Carbs: <span id="fridayNoonCarbs"></span>g | Fibers: <span id="fridayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="fridayNightFood"></p>
          <p><code>Calories: <span id="fridayNightCalories"></span> kcal | Proteins: <span id="fridayNightProteins"></span>g | Fat: <span id="fridayNightFat"></span>g | Carbs: <span id="fridayNightCarbs"></span>g | Fibers: <span id="fridayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="fridayTotalCalories"></span> kcal | Proteins: <span id="fridayTotalProteins"></span>g | Fat: <span id="fridayTotalFat"></span>g | Carbs: <span id="fridayTotalCarbs"></span>g | Fibers: <span id="fridayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-info">
          <p></p>
          <mark>Saturday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="saturdayNoonFood"></p>
          <p><code>Calories: <span id="saturdayNoonCalories"></span> kcal | Proteins: <span id="saturdayNoonProteins"></span>g | Fat: <span id="saturdayNoonFat"></span>g | Carbs: <span id="saturdayNoonCarbs"></span>g | Fibers: <span id="saturdayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="saturdayNightFood"></p>
          <p><code>Calories: <span id="saturdayNightCalories"></span> kcal | Proteins: <span id="saturdayNightProteins"></span>g | Fat: <span id="saturdayNightFat"></span>g | Carbs: <span id="saturdayNightCarbs"></span>g | Fibers: <span id="saturdayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <p><code><font color="#008000">Calories: <span id="saturdayTotalCalories"></span> kcal | Proteins: <span id="saturdayTotalProteins"></span>g | Fat: <span id="saturdayTotalFat"></span>g | Carbs: <span id="saturdayTotalCarbs"></span>g | Fibers: <span id="saturdayTotalFibers"></span>g </font></code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border border-dark">
          <p></p>
          <mark>Sunday</mark>
          <p></p>
          <div class="container border">
          <p></p>
          <i>noon: </i>
          <p id="sundayNoonFood"></p>
          <p><code>Calories: <span id="sundayNoonCalories"></span> kcal | Proteins: <span id="sundayNoonProteins"></span>g | Fat: <span id="sundayNoonFat"></span>g | Carbs: <span id="sundayNoonCarbs"></span>g | Fibers: <span id="sundayNoonFibers"></span>g </code></p>
          <p></p>
          </div>
          <p></p>
          <div class="container border">
          <p></p>
          <i>night: </i>
          <p id="sundayNightFood"></p>
          <p><code>Calories: <span id="sundayNightCalories"></span> kcal | Proteins: <span id="sundayNightProteins"></span>g | Fat: <span id="sundayNightFat"></span>g | Carbs: <span id="sundayNightCarbs"></span>g | Fibers: <span id="sundayNightFibers"></span>g </code></p>
          <p></p>
          </div>
          <p><code><font color="#008000">Calories: <span id="sundayTotalCalories"></span> kcal | Proteins: <span id="sundayTotalProteins"></span>g | Fat: <span id="sundayTotalFat"></span>g | Carbs: <span id="sundayTotalCarbs"></span>g | Fibers: <span id="sundayTotalFibers"></span>g </font></code></p>
          <p></p>
          <p></p>
          </div>
          </div>
      </div>

      <input type="button" id="show" class="btn btn-outline-warning" value="&#128465; DELETE MENU" onClick={() => {_delete()} }></input>
      
      <p></p>

      <div id="deleteMenu">
        <p></p>
          <div class="col-md-3" id="menuDelete">
          <label for="menuDeleteSelect" id="menuDeleteLabel">Menu to delete:&ensp;</label>
          <select class="form-select" id="menuDeleteSelect">
            <option selected="selected" value="-- Select --">-- Select --</option>
          </select>
          </div>
          <p></p>
          <input type="button" id="okShow" class="btn btn-outline-success" value="OK" onClick={() => {okDelete()} }></input>
      </div>

      </center>

          <div className="home_container">
              <a className="card_home" href="/">
              <h3>Home</h3>
              </a>
          </div>
        </div>

        <style jsx>{`
            .card_home {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1rem;
            text-align: center;
            color: black;
            text-decoration: none;
            border: 3px solid #eaeaea;

            transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card_home:hover,
            .card_home:focus,
            .card_home:active {
            color: #0070f3;
            border-color: #0070f3;
            }

            .card_home h3 {
            margin: 0.1rem 0.1rem;
            font-size: 1.5rem;
            }

            .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 3px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
            color: #0070f3;
            border-color: #0070f3;
            }

            .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            }

            .card h5 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            }

            .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
            }

            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .home_container {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
            }

            main {
              padding: 3rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }`}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                  sans-serif;
              }
      
              * {
                box-sizing: border-box;
              }
            `}</style>
    </div>
    )
  }
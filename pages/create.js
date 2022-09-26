import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'

let all_macros = require('./macros.json');

let all_meals = require('./meals.json');

let clicked = false;
    
var noon = {};
var night = {};
var meal = {};

var macros = {};
var meals = {};
    
function showMacros() {

    if (document.getElementById('noonRadio').checked) {
        document.getElementById('nightRadio').checked = false;
        
        if (localStorage.getItem('noon') != null) {
            noon = JSON.parse(localStorage.getItem('noon'));

            document.getElementById('caloriesGoal').value = noon.calories;
            document.getElementById('proteinsGoal').value = noon.proteins;
            document.getElementById('fatGoal').value = noon.fat;
            document.getElementById('carbsGoal').value = noon.carbs;
            document.getElementById('fibersGoal').value = noon.fibers;
          } 
        else {
            document.getElementById('caloriesGoal').value = 0;
            document.getElementById('proteinsGoal').value = 0;
            document.getElementById('fatGoal').value = 0;
            document.getElementById('carbsGoal').value = 0;
            document.getElementById('fibersGoal').value = 0;
        }
    }
    else if (document.getElementById('nightRadio').checked) {
        document.getElementById('noonRadio').checked = false;
        
        
        if (localStorage.getItem('night') != null) {
              night = JSON.parse(localStorage.getItem('night'));

              document.getElementById('caloriesGoal').value = night.calories;
              document.getElementById('proteinsGoal').value = night.proteins;
              document.getElementById('fatGoal').value = night.fat;
              document.getElementById('carbsGoal').value = night.carbs;
              document.getElementById('fibersGoal').value = night.fibers;
        }
        else {
            document.getElementById('caloriesGoal').value = 0;
            document.getElementById('proteinsGoal').value = 0;
            document.getElementById('fatGoal').value = 0;
            document.getElementById('carbsGoal').value = 0;
            document.getElementById('fibersGoal').value = 0;
        }
    }
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

    showMacros();
}
    
function updateMacros() {
    if (document.getElementById('noonRadio').checked) {
        noon.calories = parseFloat(document.getElementById('caloriesGoal').value);
        noon.proteins = parseFloat(document.getElementById('proteinsGoal').value);
        noon.fat = parseFloat(document.getElementById('fatGoal').value);
        noon.carbs = parseFloat(document.getElementById('carbsGoal').value);
        noon.fibers = parseFloat(document.getElementById('fibersGoal').value);
        
        localStorage.setItem('noon', JSON.stringify(noon));
    }
    
    if (document.getElementById('nightRadio').checked) {
        night.calories = parseFloat(document.getElementById('caloriesGoal').value);
        night.proteins = parseFloat(document.getElementById('proteinsGoal').value);
        night.fat = parseFloat(document.getElementById('fatGoal').value);
        night.carbs = parseFloat(document.getElementById('carbsGoal').value);
        night.fibers = parseFloat(document.getElementById('fibersGoal').value);
        
        localStorage.setItem('night', JSON.stringify(night));
    }
}
        
function populateSelect() {

    if (!clicked) {
        clicked = true;

        var ele1 = document.getElementById('foods1');
        var ele2 = document.getElementById('foods2');
        var ele3 = document.getElementById('foods3');
        var ele4 = document.getElementById('foods4');
        var ele5 = document.getElementById('foods5');
        var ele6 = document.getElementById('foods6');
        var ele7 = document.getElementById('foods7');
        var ele8 = document.getElementById('foods8');
        var ele9 = document.getElementById('foods9');
        var ele10 = document.getElementById('foods10');
        var ele11 = document.getElementById('foods11');
        var ele12 = document.getElementById('foods12');
        var ele13 = document.getElementById('foods13');
        var ele14 = document.getElementById('foods14');
        var ele15 = document.getElementById('foods15');
        var ele16 = document.getElementById('foods16');
        var ele17 = document.getElementById('foods17');
        var ele18 = document.getElementById('foods18');
        var ele19 = document.getElementById('foods19');
        var ele20 = document.getElementById('foods20');

        for (var i = 0; i < macros.length; i++) {
            ele1.innerHTML = ele1.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele2.innerHTML = ele2.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele3.innerHTML = ele3.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele4.innerHTML = ele4.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele5.innerHTML = ele5.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele6.innerHTML = ele6.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele7.innerHTML = ele7.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele8.innerHTML = ele8.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele9.innerHTML = ele9.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele10.innerHTML = ele10.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele11.innerHTML = ele11.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele12.innerHTML = ele12.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele13.innerHTML = ele13.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele14.innerHTML = ele14.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele15.innerHTML = ele15.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele16.innerHTML = ele16.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele17.innerHTML = ele17.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele18.innerHTML = ele18.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele19.innerHTML = ele19.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
            ele20.innerHTML = ele20.innerHTML +
                '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
        }
    }
}
    
function elementNumber() {
    var num = document.getElementById("number");
    
    var food1List = document.getElementById("food1List");
    var food2List = document.getElementById("food2List");
    var food3List = document.getElementById("food3List");
    var food4List = document.getElementById("food4List");
    var food5List = document.getElementById("food5List");
    var food6List = document.getElementById("food6List");
    var food7List = document.getElementById("food7List");
    var food8List = document.getElementById("food8List");
    var food9List = document.getElementById("food9List");
    var food10List = document.getElementById("food10List");
    var food11List = document.getElementById("food11List");
    var food12List = document.getElementById("food12List");
    var food13List = document.getElementById("food13List");
    var food14List = document.getElementById("food14List");
    var food15List = document.getElementById("food15List");
    var food16List = document.getElementById("food16List");
    var food17List = document.getElementById("food17List");
    var food18List = document.getElementById("food18List");
    var food19List = document.getElementById("food19List");
    var food20List = document.getElementById("food20List");
    
    if (num.value == "1") {
        food1List.style.display = "block";
        food2List.style.display = "none";
        food3List.style.display = "none";
        food4List.style.display = "none";
        food5List.style.display = "none";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "2") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "none";
        food4List.style.display = "none";
        food5List.style.display = "none";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "3") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "none";
        food5List.style.display = "none";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "4") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "none";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "5") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "6") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "7") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "8") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "9") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "10") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "11") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "12") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "13") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "14") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "15") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "16") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "block";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "17") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "block";
        food17List.style.display = "block";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "18") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "block";
        food17List.style.display = "block";
        food18List.style.display = "block";
        food19List.style.display = "none";
        food20List.style.display = "none";
    } else if (num.value == "19") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "block";
        food17List.style.display = "block";
        food18List.style.display = "block";
        food19List.style.display = "block";
        food20List.style.display = "none";
    } else if (num.value == "20") {
        food1List.style.display = "block";
        food2List.style.display = "block";
        food3List.style.display = "block";
        food4List.style.display = "block";
        food5List.style.display = "block";
        food6List.style.display = "block";
        food7List.style.display = "block";
        food8List.style.display = "block";
        food9List.style.display = "block";
        food10List.style.display = "block";
        food11List.style.display = "block";
        food12List.style.display = "block";
        food13List.style.display = "block";
        food14List.style.display = "block";
        food15List.style.display = "block";
        food16List.style.display = "block";
        food17List.style.display = "block";
        food18List.style.display = "block";
        food19List.style.display = "block";
        food20List.style.display = "block";
    } else if (num.value == "-- Select --") {
        food1List.style.display = "none";
        food2List.style.display = "none";
        food3List.style.display = "none";
        food4List.style.display = "none";
        food5List.style.display = "none";
        food6List.style.display = "none";
        food7List.style.display = "none";
        food8List.style.display = "none";
        food9List.style.display = "none";
        food10List.style.display = "none";
        food11List.style.display = "none";
        food12List.style.display = "none";
        food13List.style.display = "none";
        food14List.style.display = "none";
        food15List.style.display = "none";
        food16List.style.display = "none";
        food17List.style.display = "none";
        food18List.style.display = "none";
        food19List.style.display = "none";
        food20List.style.display = "none";
    }
}

function macrosUpdate() {
    var symbol1 = "";
    var symbol2 = "";
    var symbol3 = "";
    var symbol4 = "";
    var symbol5 = "";
    var symbol6 = "";
    var symbol7 = "";
    var symbol8 = "";
    var symbol9 = "";
    var symbol10 = "";
    var symbol11 = "";
    var symbol12 = "";
    var symbol13 = "";
    var symbol14 = "";
    var symbol15 = "";
    var symbol16 = "";
    var symbol17 = "";
    var symbol18 = "";
    var symbol19 = "";
    var symbol20 = "";
    
    var foods1 = document.getElementById("foods1").value;
    var foods2 = document.getElementById("foods2").value;
    var foods3 = document.getElementById("foods3").value;
    var foods4 = document.getElementById("foods4").value;
    var foods5 = document.getElementById("foods5").value;
    var foods6 = document.getElementById("foods6").value;
    var foods7 = document.getElementById("foods7").value;
    var foods8 = document.getElementById("foods8").value;
    var foods9 = document.getElementById("foods9").value;
    var foods10 = document.getElementById("foods10").value;
    var foods11 = document.getElementById("foods11").value;
    var foods12 = document.getElementById("foods12").value;
    var foods13 = document.getElementById("foods13").value;
    var foods14 = document.getElementById("foods14").value;
    var foods15 = document.getElementById("foods15").value;
    var foods16 = document.getElementById("foods16").value;
    var foods17 = document.getElementById("foods17").value;
    var foods18 = document.getElementById("foods18").value;
    var foods19 = document.getElementById("foods19").value;
    var foods20 = document.getElementById("foods20").value;
    
    var quantity1 = document.getElementById('quantity1').value;
    var quantity2 = document.getElementById('quantity2').value;
    var quantity3 = document.getElementById('quantity3').value;
    var quantity4 = document.getElementById('quantity4').value;
    var quantity5 = document.getElementById('quantity5').value;
    var quantity6 = document.getElementById('quantity6').value;
    var quantity7 = document.getElementById('quantity7').value;
    var quantity8 = document.getElementById('quantity8').value;
    var quantity9 = document.getElementById('quantity9').value;
    var quantity10 = document.getElementById('quantity10').value;
    var quantity11 = document.getElementById('quantity11').value;
    var quantity12 = document.getElementById('quantity12').value;
    var quantity13 = document.getElementById('quantity13').value;
    var quantity14 = document.getElementById('quantity14').value;
    var quantity15 = document.getElementById('quantity15').value;
    var quantity16 = document.getElementById('quantity16').value;
    var quantity17 = document.getElementById('quantity17').value;
    var quantity18 = document.getElementById('quantity18').value;
    var quantity19 = document.getElementById('quantity19').value;
    var quantity20 = document.getElementById('quantity20').value;

    var printQuantity1 = quantity1;
    var printQuantity2 = quantity2;
    var printQuantity3 = quantity3;
    var printQuantity4 = quantity4;
    var printQuantity5 = quantity5;
    var printQuantity6 = quantity6;
    var printQuantity7 = quantity7;
    var printQuantity8 = quantity8;
    var printQuantity9 = quantity9;
    var printQuantity10 = quantity10;
    var printQuantity11 = quantity11;
    var printQuantity12 = quantity12;
    var printQuantity13 = quantity13;
    var printQuantity14 = quantity14;
    var printQuantity15 = quantity15;
    var printQuantity16 = quantity16;
    var printQuantity17 = quantity17;
    var printQuantity18 = quantity18;
    var printQuantity19 = quantity19;
    var printQuantity20 = quantity20;
    
    var foods = [foods1, foods2, foods3, foods4, foods5, foods6, foods7, foods8, foods9, foods10, foods11, foods12, foods13, foods14, foods15, foods16, foods17, foods18, foods19, foods20];
    
    var qt1 = 0;
    var calories1 = 0;
    var proteins1 = 0;
    var fat1 = 0;
    var carbs1 = 0;
    var fibers1 = 0;
    var qt2 = 0;
    var calories2 = 0;
    var proteins2 = 0;
    var fat2 = 0;
    var carbs2 = 0;
    var fibers2 = 0;
    var qt3 = 0;
    var calories3 = 0;
    var proteins3 = 0;
    var fat3 = 0;
    var carbs3 = 0;
    var fibers3 = 0;
    var qt4 = 0;
    var calories4 = 0;
    var proteins4 = 0;
    var fat4 = 0;
    var carbs4 = 0;
    var fibers4 = 0;
    var qt5 = 0;
    var calories5 = 0;
    var proteins5 = 0;
    var fat5 = 0;
    var carbs5 = 0;
    var fibers5 = 0;
    var qt6 = 0;
    var calories6 = 0;
    var proteins6 = 0;
    var fat6 = 0;
    var carbs6 = 0;
    var fibers6 = 0;
    var qt7 = 0;
    var calories7 = 0;
    var proteins7 = 0;
    var fat7 = 0;
    var carbs7 = 0;
    var fibers7 = 0;
    var qt8 = 0;
    var calories8 = 0;
    var proteins8 = 0;
    var fat8 = 0;
    var carbs8 = 0;
    var fibers8 = 0;
    var qt9 = 0;
    var calories9 = 0;
    var proteins9 = 0;
    var fat9 = 0;
    var carbs9 = 0;
    var fibers9 = 0;
    var qt10 = 0;
    var calories10 = 0;
    var proteins10 = 0;
    var fat10 = 0;
    var carbs10 = 0;
    var fibers10 = 0;
    var qt11 = 0;
    var calories11 = 0;
    var proteins11 = 0;
    var fat11 = 0;
    var carbs11 = 0;
    var fibers11 = 0;
    var qt12 = 0;
    var calories12 = 0;
    var proteins12 = 0;
    var fat12 = 0;
    var carbs12 = 0;
    var fibers12 = 0;
    var qt13 = 0;
    var calories13 = 0;
    var proteins13 = 0;
    var fat13 = 0;
    var carbs13 = 0;
    var fibers13 = 0;
    var qt14 = 0;
    var calories14 = 0;
    var proteins14 = 0;
    var fat14 = 0;
    var carbs14 = 0;
    var fibers14 = 0;
    var qt15 = 0;
    var calories15 = 0;
    var proteins15 = 0;
    var fat15 = 0;
    var carbs15 = 0;
    var fibers15 = 0;
    var qt16 = 0;
    var calories16 = 0;
    var proteins16 = 0;
    var fat16 = 0;
    var carbs16 = 0;
    var fibers16 = 0;
    var qt17 = 0;
    var calories17 = 0;
    var proteins17 = 0;
    var fat17 = 0;
    var carbs17 = 0;
    var fibers17 = 0;
    var qt18 = 0;
    var calories18 = 0;
    var proteins18 = 0;
    var fat18 = 0;
    var carbs18 = 0;
    var fibers18 = 0;
    var qt19 = 0;
    var calories19 = 0;
    var proteins19 = 0;
    var fat19 = 0;
    var carbs19 = 0;
    var fibers19 = 0;
    var qt20 = 0;
    var calories20 = 0;
    var proteins20 = 0;
    var fat20 = 0;
    var carbs20 = 0;
    var fibers20 = 0;
    
    var caloriesTotal = document.getElementById("caloriesTotal");
    var proteinsTotal = document.getElementById("proteinsTotal");
    var fatTotal = document.getElementById("fatTotal");
    var carbsTotal = document.getElementById("carbsTotal");
    var fibersTotal = document.getElementById("fibersTotal");
    
    for (var i = 0; i < foods.length; i++) {
        for (var j = 0; j < macros.length; j++) {
            if (foods1 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity1 = (parseFloat(quantity1)*100).toFixed(2);
                    symbol1 = "g";
                }
                qt1 = parseFloat(quantity1);
                calories1 = parseFloat(macros[j].calories)
                proteins1 = parseFloat(macros[j].proteins)
                fat1 = parseFloat(macros[j].fat)
                carbs1 = parseFloat(macros[j].carbs)
                fibers1 = parseFloat(macros[j].fibers)
            }
            if (foods2 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity2 = (parseFloat(quantity2)*100).toFixed(2);
                    symbol2 = "g";
                }
                qt2 = parseFloat(quantity2);
                calories2 = parseFloat(macros[j].calories)
                proteins2 = parseFloat(macros[j].proteins)
                fat2 = parseFloat(macros[j].fat)
                carbs2 = parseFloat(macros[j].carbs)
                fibers2 = parseFloat(macros[j].fibers)
            }
            if (foods3 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity3 = (parseFloat(quantity3)*100).toFixed(2);
                    symbol3 = "g";
                }
                qt3 = parseFloat(quantity3);
                calories3 = parseFloat(macros[j].calories)
                proteins3 = parseFloat(macros[j].proteins)
                fat3 = parseFloat(macros[j].fat)
                carbs3 = parseFloat(macros[j].carbs)
                fibers3 = parseFloat(macros[j].fibers)
            }
            if (foods4 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity4 = (parseFloat(quantity4)*100).toFixed(2);
                    symbol4 = "g";
                }
                qt4 = parseFloat(quantity4);
                calories4 = parseFloat(macros[j].calories)
                proteins4 = parseFloat(macros[j].proteins)
                fat4 = parseFloat(macros[j].fat)
                carbs4 = parseFloat(macros[j].carbs)
                fibers4 = parseFloat(macros[j].fibers)
            }
            if (foods5 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity5 = (parseFloat(quantity5)*100).toFixed(2);
                    symbol5 = "g";
                }
                qt5 = parseFloat(quantity5);
                calories5 = parseFloat(macros[j].calories)
                proteins5 = parseFloat(macros[j].proteins)
                fat5 = parseFloat(macros[j].fat)
                carbs5 = parseFloat(macros[j].carbs)
                fibers5 = parseFloat(macros[j].fibers)
            }
            if (foods6 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity6 = (parseFloat(quantity6)*100).toFixed(2);
                    symbol6 = "g";
                }
                qt6 = parseFloat(quantity6);
                calories6 = parseFloat(macros[j].calories)
                proteins6 = parseFloat(macros[j].proteins)
                fat6 = parseFloat(macros[j].fat)
                carbs6 = parseFloat(macros[j].carbs)
                fibers6 = parseFloat(macros[j].fibers)
            }
            if (foods7 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity7 = (parseFloat(quantity7)*100).toFixed(2);
                    symbol7 = "g";
                }
                qt7 = parseFloat(quantity7);
                calories7 = parseFloat(macros[j].calories)
                proteins7 = parseFloat(macros[j].proteins)
                fat7 = parseFloat(macros[j].fat)
                carbs7 = parseFloat(macros[j].carbs)
                fibers7 = parseFloat(macros[j].fibers)
            }
            if (foods8 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity8 = (parseFloat(quantity8)*100).toFixed(2);
                    symbol8 = "g";
                }
                qt8 = parseFloat(quantity8);
                calories8 = parseFloat(macros[j].calories)
                proteins8 = parseFloat(macros[j].proteins)
                fat8 = parseFloat(macros[j].fat)
                carbs8 = parseFloat(macros[j].carbs)
                fibers8 = parseFloat(macros[j].fibers)
            }
            if (foods9 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity9 = (parseFloat(quantity9)*100).toFixed(2);
                    symbol9 = "g";
                }
                qt9 = parseFloat(quantity9);
                calories9 = parseFloat(macros[j].calories)
                proteins9 = parseFloat(macros[j].proteins)
                fat9 = parseFloat(macros[j].fat)
                carbs9 = parseFloat(macros[j].carbs)
                fibers9 = parseFloat(macros[j].fibers)
            }
            if (foods10 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity10 = (parseFloat(quantity10)*100).toFixed(2);
                    symbol10 = "g";
                }
                qt10 = parseFloat(quantity10);
                calories10 = parseFloat(macros[j].calories)
                proteins10 = parseFloat(macros[j].proteins)
                fat10 = parseFloat(macros[j].fat)
                carbs10 = parseFloat(macros[j].carbs)
                fibers10 = parseFloat(macros[j].fibers)
            }
            if (foods11 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity11 = (parseFloat(quantity11)*100).toFixed(2);
                    symbol11 = "g";
                }
                qt11 = parseFloat(quantity11);
                calories11 = parseFloat(macros[j].calories)
                proteins11 = parseFloat(macros[j].proteins)
                fat11 = parseFloat(macros[j].fat)
                carbs11 = parseFloat(macros[j].carbs)
                fibers11 = parseFloat(macros[j].fibers)
            }
            if (foods12 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity12 = (parseFloat(quantity12)*100).toFixed(2);
                    symbol12 = "g";
                }
                qt12 = parseFloat(quantity12);
                calories12 = parseFloat(macros[j].calories)
                proteins12 = parseFloat(macros[j].proteins)
                fat12 = parseFloat(macros[j].fat)
                carbs12 = parseFloat(macros[j].carbs)
                fibers12 = parseFloat(macros[j].fibers)
            }
            if (foods13 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity13 = (parseFloat(quantity13)*100).toFixed(2);
                    symbol13 = "g";
                }
                qt13 = parseFloat(quantity13);
                calories13 = parseFloat(macros[j].calories)
                proteins13 = parseFloat(macros[j].proteins)
                fat13 = parseFloat(macros[j].fat)
                carbs13 = parseFloat(macros[j].carbs)
                fibers13 = parseFloat(macros[j].fibers)
            }
            if (foods14 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity14 = (parseFloat(quantity14)*100).toFixed(2);
                    symbol14 = "g";
                }
                qt14 = parseFloat(quantity14);
                calories14 = parseFloat(macros[j].calories)
                proteins14 = parseFloat(macros[j].proteins)
                fat14 = parseFloat(macros[j].fat)
                carbs14 = parseFloat(macros[j].carbs)
                fibers14 = parseFloat(macros[j].fibers)
            }
            if (foods15 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity15 = (parseFloat(quantity15)*100).toFixed(2);
                    symbol15 = "g";
                }
                qt15 = parseFloat(quantity15);
                calories15 = parseFloat(macros[j].calories)
                proteins15 = parseFloat(macros[j].proteins)
                fat15 = parseFloat(macros[j].fat)
                carbs15 = parseFloat(macros[j].carbs)
                fibers15 = parseFloat(macros[j].fibers)
            }
            if (foods16 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity16 = (parseFloat(quantity16)*100).toFixed(2);
                    symbol16 = "g";
                }
                qt16 = parseFloat(quantity16);
                calories16 = parseFloat(macros[j].calories)
                proteins16 = parseFloat(macros[j].proteins)
                fat16 = parseFloat(macros[j].fat)
                carbs16 = parseFloat(macros[j].carbs)
                fibers16 = parseFloat(macros[j].fibers)
            }
            if (foods17 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity17 = (parseFloat(quantity17)*100).toFixed(2);
                    symbol17 = "g";
                }
                qt17 = parseFloat(quantity17);
                calories17 = parseFloat(macros[j].calories)
                proteins17 = parseFloat(macros[j].proteins)
                fat17 = parseFloat(macros[j].fat)
                carbs17 = parseFloat(macros[j].carbs)
                fibers17 = parseFloat(macros[j].fibers)
            }
            if (foods18 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity18 = (parseFloat(quantity18)*100).toFixed(2);
                    symbol18 = "g";
                }
                qt18 = parseFloat(quantity18);
                calories18 = parseFloat(macros[j].calories)
                proteins18 = parseFloat(macros[j].proteins)
                fat18 = parseFloat(macros[j].fat)
                carbs18 = parseFloat(macros[j].carbs)
                fibers18 = parseFloat(macros[j].fibers)
            }
            if (foods19 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity19 = (parseFloat(quantity19)*100).toFixed(2);
                    symbol19 = "g";
                }
                qt19 = parseFloat(quantity19);
                calories19 = parseFloat(macros[j].calories)
                proteins19 = parseFloat(macros[j].proteins)
                fat19 = parseFloat(macros[j].fat)
                carbs19 = parseFloat(macros[j].carbs)
                fibers19 = parseFloat(macros[j].fibers)
            }
            if (foods20 == macros[j].name) {
                if (macros[j].unit == "100g") {
                    printQuantity20 = (parseFloat(quantity20)*100).toFixed(2);
                    symbol20 = "g";
                }
                qt20 = parseFloat(quantity20);
                calories20 = parseFloat(macros[j].calories)
                proteins20 = parseFloat(macros[j].proteins)
                fat20 = parseFloat(macros[j].fat)
                carbs20 = parseFloat(macros[j].carbs)
                fibers20 = parseFloat(macros[j].fibers)
            }
        }
    }
    
    document.getElementById("equal1").innerHTML = printQuantity1 + symbol1;
        
        document.getElementById("equal2").innerHTML = printQuantity2 + symbol2;
        
        document.getElementById("equal3").innerHTML = printQuantity3 + symbol3;
        
        document.getElementById("equal4").innerHTML = printQuantity4 + symbol4;
        
        document.getElementById("equal5").innerHTML = printQuantity5 + symbol5;
        
        document.getElementById("equal6").innerHTML = printQuantity6 + symbol6;
        
        document.getElementById("equal7").innerHTML = printQuantity7 + symbol7;
        
        document.getElementById("equal8").innerHTML = printQuantity8 + symbol8;
        
        document.getElementById("equal9").innerHTML = printQuantity9 + symbol9;
        
        document.getElementById("equal10").innerHTML = printQuantity10 + symbol10;
        
        document.getElementById("equal11").innerHTML = printQuantity11 + symbol11;
        
        document.getElementById("equal12").innerHTML = printQuantity12 + symbol12;
        
        document.getElementById("equal13").innerHTML = printQuantity13 + symbol13;
        
        document.getElementById("equal14").innerHTML = printQuantity14 + symbol14;
        
        document.getElementById("equal15").innerHTML = printQuantity15 + symbol15;
        
        document.getElementById("equal16").innerHTML = printQuantity16 + symbol16;
        
        document.getElementById("equal17").innerHTML = printQuantity17 + symbol17;
        
        document.getElementById("equal18").innerHTML = printQuantity18 + symbol18;
        
        document.getElementById("equal19").innerHTML = printQuantity19 + symbol19;
        
        document.getElementById("equal20").innerHTML = printQuantity20 + symbol20;
    
    caloriesTotal.value = "";
    
    caloriesTotal.value += qt1*calories1 + qt2*calories2 + qt3*calories3 + qt4*calories4 + qt5*calories5 + qt6*calories6 + qt7*calories7 + qt8*calories8 + qt9*calories9 + qt10*calories10 + qt11*calories11 + qt12*calories12 + qt13*calories13 + qt14*calories14 + qt15*calories15 + qt16*calories16 + qt17*calories17 + qt18*calories18 + qt19*calories19 + qt20*calories20;
    
    proteinsTotal.value = "";
    
    proteinsTotal.value += qt1*proteins1 + qt2*proteins2 + qt3*proteins3 + qt4*proteins4 + qt5*proteins5 + qt6*proteins6 + qt7*proteins7 + qt8*proteins8 + qt9*proteins9 + qt10*proteins10 + qt11*proteins11 + qt12*proteins12 + qt13*proteins13 + qt14*proteins14 + qt15*proteins15 + qt16*proteins16 + qt17*proteins17 + qt18*proteins18 + qt19*proteins19 + qt20*proteins20;
    
    fatTotal.value = "";
    
    fatTotal.value += qt1*fat1 + qt2*fat2 + qt3*fat3 + qt4*fat4 + qt5*fat5 + qt6*fat6 + qt7*fat7 + qt8*fat8 + qt9*fat9 + qt10*fat10 + qt11*fat11 + qt12*fat12 + qt13*fat13 + qt14*fat14 + qt15*fat15 + qt16*fat16 + qt17*fat17 + qt18*fat18 + qt19*fat19 + qt20*fat20;
    
    carbsTotal.value = "";
    
    carbsTotal.value += qt1*carbs1 + qt2*carbs2 + qt3*carbs3 + qt4*carbs4 + qt5*carbs5 + qt6*carbs6 + qt7*carbs7 + qt8*carbs8 + qt9*carbs9 + qt10*carbs10 + qt11*carbs11 + qt12*carbs12 + qt13*carbs13 + qt14*carbs14 + qt15*carbs15 + qt16*carbs16 + qt17*carbs17 + qt18*carbs18 + qt19*carbs19 + qt20*carbs20;

    fibersTotal.value = "";
    
    fibersTotal.value += qt1*fibers1 + qt2*fibers2 + qt3*fibers3 + qt4*fibers4 + qt5*fibers5 + qt6*fibers6 + qt7*fibers7 + qt8*fibers8 + qt9*fibers9 + qt10*fibers10 + qt11*fibers11 + qt12*fibers12 + qt13*fibers13 + qt14*fibers14 + qt15*fibers15 + qt16*fibers16 + qt17*fibers17 + qt18*fibers18 + qt19*fibers19 + qt20*fibers20;

    parseFloat(caloriesTotal.value);
    parseFloat(proteinsTotal.value);
    parseFloat(fatTotal.value);
    parseFloat(carbsTotal.value);
    parseFloat(fibersTotal.value);
}
    
function save() {
    var foods1 = document.getElementById("foods1");
    var foods2 = document.getElementById("foods2");
    var foods3 = document.getElementById("foods3");
    var foods4 = document.getElementById("foods4");
    var foods5 = document.getElementById("foods5");
    var foods6 = document.getElementById("foods6");
    var foods7 = document.getElementById("foods7");
    var foods8 = document.getElementById("foods8");
    var foods9 = document.getElementById("foods9");
    var foods10 = document.getElementById("foods10");
    var foods11 = document.getElementById("foods11");
    var foods12 = document.getElementById("foods12");
    var foods13 = document.getElementById("foods13");
    var foods14 = document.getElementById("foods14");
    var foods15 = document.getElementById("foods15");
    var foods16 = document.getElementById("foods16");
    var foods17 = document.getElementById("foods17");
    var foods18 = document.getElementById("foods18");
    var foods19 = document.getElementById("foods19");
    var foods20 = document.getElementById("foods20");
    
    
    var mealName = document.getElementById("mealName").value;
    var type = "";
    
    if (document.getElementById('noonRadio').checked) {
        type = "noon";
    }
    else {
        type = "night";
    }

    updateMacros();
    
    meal.name = mealName;
    meal.type = type;
    meal.elements = [];
    meal.quantities = [];
    
    if (foods1.value != "-- Select --") {
        meal.elements.push(foods1.value);
        meal.quantities.push(parseFloat(quantity1.value));
    }
    if (foods2.value != "-- Select --") {
        meal.elements.push(foods2.value);
        meal.quantities.push(parseFloat(quantity2.value));
    }
    if (foods3.value != "-- Select --") {
        meal.elements.push(foods3.value);
        meal.quantities.push(parseFloat(quantity3.value));
    }
    if (foods4.value != "-- Select --") {
        meal.elements.push(foods4.value);
        meal.quantities.push(parseFloat(quantity4.value));
    }
    if (foods5.value != "-- Select --") {
        meal.elements.push(foods5.value);
        meal.quantities.push(parseFloat(quantity5.value));
    }
    if (foods6.value != "-- Select --") {
        meal.elements.push(foods6.value);
        meal.quantities.push(parseFloat(quantity6.value));
    }
    if (foods7.value != "-- Select --") {
        meal.elements.push(foods7.value);
        meal.quantities.push(parseFloat(quantity7.value));
    }
    if (foods8.value != "-- Select --") {
        meal.elements.push(foods8.value);
        meal.quantities.push(parseFloat(quantity8.value));
    }
    if (foods9.value != "-- Select --") {
        meal.elements.push(foods9.value);
        meal.quantities.push(parseFloat(quantity9.value));
    }
    if (foods10.value != "-- Select --") {
        meal.elements.push(foods10.value);
        meal.quantities.push(parseFloat(quantity10.value));
    }
    if (foods11.value != "-- Select --") {
        meal.elements.push(foods11.value);
        meal.quantities.push(parseFloat(quantity11.value));
    }
    if (foods12.value != "-- Select --") {
        meal.elements.push(foods12.value);
        meal.quantities.push(parseFloat(quantity12.value));
    }
    if (foods13.value != "-- Select --") {
        meal.elements.push(foods13.value);
        meal.quantities.push(parseFloat(quantity13.value));
    }
    if (foods14.value != "-- Select --") {
        meal.elements.push(foods14.value);
        meal.quantities.push(parseFloat(quantity14.value));
    }
    if (foods15.value != "-- Select --") {
        meal.elements.push(foods15.value);
        meal.quantities.push(parseFloat(quantity15.value));
    }
    if (foods16.value != "-- Select --") {
        meal.elements.push(foods16.value);
        meal.quantities.push(parseFloat(quantity16.value));
    }
    if (foods17.value != "-- Select --") {
        meal.elements.push(foods17.value);
        meal.quantities.push(parseFloat(quantity17.value));
    }
    if (foods18.value != "-- Select --") {
        meal.elements.push(foods18.value);
        meal.quantities.push(parseFloat(quantity18.value));
    }
    if (foods19.value != "-- Select --") {
        meal.elements.push(foods19.value);
        meal.quantities.push(parseFloat(quantity19.value));
    }
    if (foods20.value != "-- Select --") {
        meal.elements.push(foods20.value);
        meal.quantities.push(parseFloat(quantity20.value));
    }

    meal.calories = parseFloat(document.getElementById("caloriesTotal").value);
    meal.proteins = parseFloat(document.getElementById("proteinsTotal").value);
    meal.fat = parseFloat(document.getElementById("fatTotal").value);
    meal.carbs = parseFloat(document.getElementById("carbsTotal").value);
    meal.fibers = parseFloat(document.getElementById("fibersTotal").value);

    meals.push(meal);

    localStorage.setItem('meals', JSON.stringify(meals));

    meal = {};

    window.location.reload()
}

export default function Home() {
    useEffect(() => {
        document.getElementById("food1List").style.display = "none";
        document.getElementById("food2List").style.display = "none";
        document.getElementById("food3List").style.display = "none";
        document.getElementById("food4List").style.display = "none";
        document.getElementById("food5List").style.display = "none";
        document.getElementById("food6List").style.display = "none";
        document.getElementById("food7List").style.display = "none";
        document.getElementById("food8List").style.display = "none";
        document.getElementById("food9List").style.display = "none";
        document.getElementById("food10List").style.display = "none";
        document.getElementById("food11List").style.display = "none";
        document.getElementById("food12List").style.display = "none";
        document.getElementById("food13List").style.display = "none";
        document.getElementById("food14List").style.display = "none";
        document.getElementById("food15List").style.display = "none";
        document.getElementById("food16List").style.display = "none";
        document.getElementById("food17List").style.display = "none";
        document.getElementById("food18List").style.display = "none";
        document.getElementById("food19List").style.display = "none";
        document.getElementById("food20List").style.display = "none";

        window.onload = _localStorage;
    })

    
    return (
    <div className="container">
        <Head>
            <title>Create a meal</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link rel="icon" href="/logo_meal.ico" />
        </Head>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

        <div class="container-fluid">

            <div class="container-fluid p-2 my-3">
                <div className="home_container">
                    <div className="card">
                        <h5>Create</h5>
                    </div>
                </div>
            </div>
            
            <div class="container-fluid py-2">
                <label for="mealName">Meal name:&ensp;</label>
                <input type="text" id="mealName" name="mealName"></input>
            </div>

            <div class="container-fluid py-2">
                <label for="type">Meal type:&ensp;</label>

                <input type="radio" id="noonRadio" name="type" value="noonRadio" checked onClick={() => {showMacros()} }></input>
                <label for="noonRadio">&nbsp;noon&ensp;</label>

                <input type="radio" id="nightRadio" name="type" value="nightRadio" onClick={() => {showMacros()} }></input>
                <label for="nightRadio">&nbsp;night</label>
            </div>
            
            <div class="container-fluid py-2">
                <label class="form-label">Number of foods in meal:</label>
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
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
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
                <div id="food1List">
                    <div class="container-fluid py-2">
                        <label class="form-label">1st food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods1">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity1">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity1" name="quantity1" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal1">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food2List">
                    <div class="container-fluid py-2">
                        <label class="form-label">2nd food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods2">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity2">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity2" name="quantity2" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal2">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food3List">
                    <div class="container-fluid py-2">
                        <label class="form-label">3rd food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods3">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity3">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity3" name="quantity3" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal3">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food4List">
                    <div class="container-fluid py-2">
                        <label class="form-label">4th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods4">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity4">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity4" name="quantity4" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal4">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food5List">
                    <div class="container-fluid py-2">
                        <label class="form-label">5th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods5">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity5">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity5" name="quantity5" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal5">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food6List">
                    <div class="container-fluid py-2">
                        <label class="form-label">6th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods6">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity6">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity6" name="quantity6" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal6">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food7List">
                    <div class="container-fluid py-2">
                        <label class="form-label">7th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods7">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity7">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity7" name="quantity7" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal7">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food8List">
                    <div class="container-fluid py-2">
                        <label class="form-label">8th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods8">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity8">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity8" name="quantity8" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal8">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food9List">
                    <div class="container-fluid py-2">
                        <label class="form-label">9th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods9">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity9">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity9" name="quantity9" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal9">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food10List">
                    <div class="container-fluid py-2">
                        <label class="form-label">10th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods10">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity10">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity10" name="quantity10" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal10">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food11List">
                    <div class="container-fluid py-2">
                        <label class="form-label">11th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods11">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity11">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity11" name="quantity11" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal11">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food12List">
                    <div class="container-fluid py-2">
                        <label class="form-label">12th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods12">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity12">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity12" name="quantity12" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal12">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food13List">
                    <div class="container-fluid py-2">
                        <label class="form-label">13th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods13">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity13">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity13" name="quantity13" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal13">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food14List">
                    <div class="container-fluid py-2">
                        <label class="form-label">14th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods14">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity14">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity14" name="quantity14" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal14">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food15List">
                    <div class="container-fluid py-2">
                        <label class="form-label">15th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods15">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity15">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity15" name="quantity15" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal15">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food16List">
                    <div class="container-fluid py-2">
                        <label class="form-label">16th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods16">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity16">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity16" name="quantity16" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal16">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food17List">
                    <div class="container-fluid py-2">
                        <label class="form-label">17th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods17">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity17">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity17" name="quantity17" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal17">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food18List">
                    <div class="container-fluid py-2">
                        <label class="form-label">18th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods18">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity18">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity18" name="quantity18" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal18">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food19List">
                    <div class="container-fluid py-2">
                        <label class="form-label">19th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods19">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity19">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity19" name="quantity19" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal19">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="food20List">
                    <div class="container-fluid py-2">
                        <label class="form-label">20th food to include:</label>
                        <div class="col-sm-7">
                            <div class="d-inline-flex align-items-center">
                                <select class="form-select" id="foods20">
                                <option selected="selected" value="-- Select --">-- Select --</option>
                                </select>&emsp;
                                <label for="quantity20">Quantity:</label>&ensp;
                                <input class="col-sm-3" type="text" id="quantity20" name="quantity20" onChange={() => {macrosUpdate()} }/>&ensp;
                                <div>=&nbsp;</div>
                                <div id="equal20">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p class="container-fluid py-2" id="msg"></p>
                
                <div class="container-fluid py-2">
                
                    <mark class="container-fluid py-2">Total</mark>

                    <div class="container-fluid py-2" id="macrosTotal">
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
                    
                    <mark class="container-fluid py-2">Goal</mark>

                    <div class="container-fluid py-2" id="macrosGoal">
                        <code>Calories:
                        <input class="col-sm-1" type="text" id="caloriesGoal"></input>
                        | Proteins:
                        <input class="col-sm-1" type="text" id="proteinsGoal"></input>
                        | Fat:
                        <input class="col-sm-1" type="text" id="fatGoal"></input>
                        | Carbs:
                        <input class="col-sm-1" type="text" id="carbsGoal"></input>
                        | Fibers:
                        <input class="col-sm-1" type="text" id="fibersGoal"></input></code>
                    </div>
                
                </div>
            
                <div class="container-fluid py-2">
                    <input type="button" 
                            class="btn btn-outline-primary"
                                onClick={() => {window.location.reload()} }
                                    value="Cancel" />&ensp;

                    <input type="button" 
                            class="btn btn-outline-primary"
                                onClick={() => {save()} }
                                    value="Save" />
                </div>

                
                <div className="home_container">
                    <a className="card_home" href="/">
                    <h3>Home</h3>
                    </a>
                </div>

            </div>
            
        </div>

        <style jsx>{`

            .button_validate {
                background-color: white;
                color: black;
                border: 2px solid #4CAF50; /* Green */
                transition-duration: 0.4s;
            }

            .button_validate:hover {
                background-color: #4CAF50; /* Green */
                color: white;
              }

            .button_cancel {
                background-color: white;
                color: black;
                border: 2px solid #f44336; /* Red */
                transition-duration: 0.4s;
            }

            .button_cancel:hover {
                background-color: #f44336; /* Red */
                color: white;
              }

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

            .card_container {
                position: relative;
            }
    
            .card_container,
            .description {
                text-align: center;
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
            }
            
            .title a {
                color: #0070f3;
                text-decoration: none;
            }
    
            .title a:hover,
            .title a:focus,
            .title a:active {
                text-decoration: underline;
            }
    
            .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                position: absolute;
                top: 1rem;
            }
    
            .title,
            .description {
                text-align: center;
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
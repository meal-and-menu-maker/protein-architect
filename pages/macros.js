import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'
import { get, set } from 'idb-keyval';

let all_macros = require('./macros.json');

var macros = {};
var macros_ = {};

var macro_testing = {};

var macroPosition = -1;

var pastaPosition = -1;
var ricePosition = -1;
var meatPosition = -1;
var fishPosition = -1;
var cheesePosition = -1;
var groundnutPosition = -1;
var fruitPosition = -1;
var vegetablePosition = -1;
var otherPosition = -1;
var salsaPosition = -1;
var fatPosition = -1;
var yogurtPosition = -1;
var pastryPosition = -1;
var sweetPosition = -1;
var pizzaPosition = -1;
var sandwichPosition = -1;
var burgerPosition = -1;
var saladPosition = -1;
var kebabPosition = -1;
var mcdonaldPosition = -1;
var burgerkingPosition = -1;
var alcoholPosition = -1;
var cocktailPosition = -1;

function _localStorage() {
    
    /* if (localStorage.getItem('macros') != null) {
        macros = JSON.parse(localStorage.getItem('macros'));
    }
    else {
        localStorage.setItem('macros', JSON.stringify(all_macros.macros));
    } */

    if (get('macros') != "undefined")
    {
        get('macros').then((val) => macros = val);
    }
    else if (get('macros') == "undefined") {
        set('macros', all_macros.macros);
    }

    table();

    //get('macros').then((val) => macro_testing = val);

    
}

function table() {

    //macros = JSON.parse(localStorage.getItem('macros'));

    //get('macros').then((val) => macros = val);

    if (get('macros') != "undefined")
    {
        get('macros').then((val) => macros = val);
    }
    else if (get('macros') == "undefined") {
        set('macros', all_macros.macros);
    }

    alert('ok');

    $(document).ready(function () {
        var html = '<table class="table table-striped">';
        html += '<tr>';
        debugger;
        //creating table header
        $.each(macros[0], function (index, item) {
            html += '<th>' + index + '</th>';
        });
        html += '</tr>';
        //creating table row and appending it in the table
        $.each(macros, function (index, item) {
            html += '<tr>';
            $.each(item, function (secondindex, seconditem) {
                html += '<td>' + seconditem + '</td>';
            });
            html += '<tr>';
        });
        html += '</table>';
        //append html in html body
        $('res').html(html);
    });

    for (var i = 0; i < macros.length; i++) {
        if (macros[i].name == "** Pâtes **") {
            pastaPosition = i;
        }
        if (macros[i].name == "** Riz **") {
            ricePosition = i;
        }
        if (macros[i].name == "** Viandes **") {
            meatPosition = i;
        }
        if (macros[i].name == "** Poisson **") {
            fishPosition = i;
        }
        if (macros[i].name == "** Fromages & Laits **") {
            cheesePosition = i;
        }
        if (macros[i].name == "** Arachides **") {
            groundnutPosition = i;
        }
        if (macros[i].name == "** Fruits **") {
            fruitPosition = i;
        }
        if (macros[i].name == "** Légumes **") {
            vegetablePosition = i;
        }
        if (macros[i].name == "** Autres **") {
            otherPosition = i;
        }
        if (macros[i].name == "** Sauces **") {
            salsaPosition = i;
        }
        if (macros[i].name == "** Gras **") {
            fatPosition = i;
        }
        if (macros[i].name == "** Yahourts **") {
            yogurtPosition = i;
        }
        if (macros[i].name == "** Pâtisseries **") {
            pastryPosition = i;
        }
        if (macros[i].name == "** Sucré **") {
            sweetPosition = i;
        }
        if (macros[i].name == "** Pizzas **") {
            pizzaPosition = i;
        }
        if (macros[i].name == "** Sandwichs **") {
            sandwichPosition = i;
        }
        if (macros[i].name == "** Burger **") {
            burgerPosition = i;
        }
        if (macros[i].name == "** Salades **") {
            saladPosition = i;
        }
        if (macros[i].name == "** Kebab **") {
            kebabPosition = i;
        }
        if (macros[i].name == "** McDo **") {
            mcdonaldPosition = i;
        }
        if (macros[i].name == "** Burger King **") {
            burgerkingPosition = i;
        }
        if (macros[i].name == "** Alcool **") {
            alcoholPosition = i;
        }
        if (macros[i].name == "** Cocktails **") {
            cocktailPosition = i;
        }
    }

}

function addElement() {
    var add_container = document.getElementById("add_container"); 

    document.getElementById("name").style.display = "block";
    document.getElementById("calories").style.display = "block";
    document.getElementById("proteins").style.display = "block";
    document.getElementById("fat").style.display = "block";
    document.getElementById("carbs").style.display = "block";
    document.getElementById("fibers").style.display = "block";
    document.getElementById("categoryAdd").style.display = "block";
    document.getElementById("unit").style.display = "block";

    document.getElementById("okAddSelect").style.display = "block";

    //get('macros').then((val) => macro_testing = val);

    document.getElementById("macro_testing_print").innerHTML = macros[32]['name'];

    if (add_container.style.display === "none") {
        add_container.style.display = "block";
    } else {
        add_container.style.display = "none";
    }
}

function okAddElement() {
    document.getElementById("name").style.display = "none";
    document.getElementById("calories").style.display = "none";
    document.getElementById("proteins").style.display = "none";
    document.getElementById("fat").style.display = "none";
    document.getElementById("carbs").style.display = "none";
    document.getElementById("fibers").style.display = "none";
    document.getElementById("categoryAdd").style.display = "none";
    document.getElementById("unit").style.display = "none";

	macros_.name = document.getElementById("mealName").value;
    macros_.calories = parseFloat(document.getElementById("mealCalories").value);
    macros_.proteins = parseFloat(document.getElementById("mealProteins").value);
    macros_.fat = parseFloat(document.getElementById("mealFat").value);
    macros_.carbs = parseFloat(document.getElementById("mealCarbs").value);
    macros_.fibers = parseFloat(document.getElementById("mealfibers").value);
    macros_.category = document.getElementById("categoryAddSelect").value;
    macros_.unit = document.getElementById("mealUnit").value;
    
    if (macros_.category == "pasta") {
        macros.splice(ricePosition, 0, macros_);
    }
    else if (macros_.category == "rice") {
        macros.splice(meatPosition, 0, macros_);
    }
    else if (macros_.category == "meat") {
        macros.splice(fishPosition, 0, macros_);
    }
    else if (macros_.category == "fish") {
        macros.splice(cheesePosition, 0, macros_);
    }
    else if (macros_.category == "cheese & milk") {
        macros.splice(groundnutPosition, 0, macros_);
    }
    else if (macros_.category == "groundnut") {
        macros.splice(fruitPosition, 0, macros_);
    }
    else if (macros_.category == "fruit") {
        macros.splice(vegetablePosition, 0, macros_);
    }
    else if (macros_.category == "vegetable") {
        macros.splice(otherPosition, 0, macros_);
    }
    else if (macros_.category == "other") {
        macros.splice(salsaPosition, 0, macros_);
    }
    else if (macros_.category == "salsa") {
        macros.splice(fatPosition, 0, macros_);
    }
    else if (macros_.category == "fat") {
        macros.splice(yogurtPosition, 0, macros_);
    }
    else if (macros_.category == "yogurt") {
        macros.splice(pastryPosition, 0, macros_);
    }
    else if (macros_.category == "pastry") {
        macros.splice(sweetPosition, 0, macros_);
    }
    else if (macros_.category == "sweet") {
        macros.splice(pizzaPosition, 0, macros_);
    }
    else if (macros_.category == "pizza") {
        macros.splice(sandwichPosition, 0, macros_);
    }
    else if (macros_.category == "sandwich") {
        macros.splice(burgerPosition, 0, macros_);
    }
    else if (macros_.category == "burger") {
        macros.splice(saladPosition, 0, macros_);
    }
    else if (macros_.category == "salad") {
        macros.splice(kebabPosition, 0, macros_);
    }
    else if (macros_.category == "kebab") {
        macros.splice(mcdonaldPosition, 0, macros_);
    }
    else if (macros_.category == "mcdonald") {
        macros.splice(burgerkingPosition, 0, macros_);
    }
    else if (macros_.category == "burger king") {
        macros.splice(alcoholPosition, 0, macros_);
    }
    else if (macros_.category == "alcohol") {
        macros.splice(cocktailPosition, 0, macros_);
    }
    else if (macros_.category == "cocktail") {
        macros.push(macros_);
    }

    localStorage.setItem('macros', JSON.stringify(macros));

    macros_ = {};

    document.getElementById("okAddSelect").style.display = "none";

    window.location.reload();
}

function modifyElement() {
    var modify_container = document.getElementById("modify_container"); 
    
    for (var i = 0; i < macros.length; i++) {
        document.getElementById('modifySelect').innerHTML = document.getElementById('modifySelect').innerHTML +
        '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
    }

    document.getElementById("modifySelect").style.display = "block";

    document.getElementById("ok1ModifySelect").style.display = "block";

    if (modify_container.style.display === "none") {
        modify_container.style.display = "block";
    } else {
        modify_container.style.display = "none";
    }
}

function ok1ModifyElement() {
    document.getElementById("nameModify").style.display = "block";
    document.getElementById("caloriesModify").style.display = "block";
    document.getElementById("proteinsModify").style.display = "block";
    document.getElementById("fatModify").style.display = "block";
    document.getElementById("carbsModify").style.display = "block";
    document.getElementById("fibersModify").style.display = "block";
    document.getElementById("categoryModify").style.display = "block";
    document.getElementById("unitModify").style.display = "block";

    var selectValue = document.getElementById("modifySelect").value;

    var name = document.getElementById("mealNameModify");
    var calories = document.getElementById("mealCaloriesModify");
    var proteins = document.getElementById("mealProteinsModify");
    var fat = document.getElementById("mealFatModify");
    var carbs = document.getElementById("mealCarbsModify");
    var fibers = document.getElementById("mealFibersModify");
    var category = document.getElementById("categoryModifySelect");
    var unit = document.getElementById("mealUnitModify");

    for (var i = 0; i < macros.length; i++) {
        if (macros[i].name == selectValue) {
            name.value = macros[i].name;
            calories.value = macros[i].calories;
            proteins.value = macros[i].proteins;
            fat.value = macros[i].fat;
            carbs.value = macros[i].carbs;
            fibers.value = macros[i].fibers;
            category.value = macros[i].category;
            unit.value = macros[i].unit;

            macroPosition = i;
        }
    }

    document.getElementById("ok2ModifySelect").style.display = "block";
}

function ok2ModifyElement() {
    document.getElementById("modifySelect").style.display = "none";

    document.getElementById("nameModify").style.display = "none";
    document.getElementById("caloriesModify").style.display = "none";
    document.getElementById("proteinsModify").style.display = "none";
    document.getElementById("fatModify").style.display = "none";
    document.getElementById("carbsModify").style.display = "none";
    document.getElementById("fibersModify").style.display = "none";
    document.getElementById("categoryModify").style.display = "none";
    document.getElementById("unitModify").style.display = "none";

    document.getElementById("ok1ModifySelect").style.display = "none";
    document.getElementById("ok2ModifySelect").style.display = "none";

    macros_.name = document.getElementById("mealNameModify").value;
    macros_.calories = parseFloat(document.getElementById("mealCaloriesModify").value);
    macros_.proteins = parseFloat(document.getElementById("mealProteinsModify").value);
    macros_.fat = parseFloat(document.getElementById("mealFatModify").value);
    macros_.carbs = parseFloat(document.getElementById("mealCarbsModify").value);
    macros_.fibers = parseFloat(document.getElementById("mealFibersModify").value);
    macros_.category = document.getElementById("categoryModifySelect").value;
    macros_.unit = document.getElementById("mealUnitModify").value;

    if (macros_.category != macros[macroPosition].category) {
        macros.splice(macroPosition, 1);

        for (var i = 0; i < macros.length; i++) {
            if (macros[i].name == "** Pâtes **") {
                pastaPosition = i;
            }
            if (macros[i].name == "** Riz **") {
                ricePosition = i;
            }
            if (macros[i].name == "** Viandes **") {
                meatPosition = i;
            }
            if (macros[i].name == "** Poisson **") {
                fishPosition = i;
            }
            if (macros[i].name == "** Fromages & Laits **") {
                cheesePosition = i;
            }
            if (macros[i].name == "** Arachides **") {
                groundnutPosition = i;
            }
            if (macros[i].name == "** Fruits **") {
                fruitPosition = i;
            }
            if (macros[i].name == "** Légumes **") {
                vegetablePosition = i;
            }
            if (macros[i].name == "** Autres **") {
                otherPosition = i;
            }
            if (macros[i].name == "** Sauces **") {
                salsaPosition = i;
            }
            if (macros[i].name == "** Gras **") {
                fatPosition = i;
            }
            if (macros[i].name == "** Yahourts **") {
                yogurtPosition = i;
            }
            if (macros[i].name == "** Pâtisseries **") {
                pastryPosition = i;
            }
            if (macros[i].name == "** Sucré **") {
                sweetPosition = i;
            }
            if (macros[i].name == "** Pizzas **") {
                pizzaPosition = i;
            }
            if (macros[i].name == "** Sandwichs **") {
                sandwichPosition = i;
            }
            if (macros[i].name == "** Burger **") {
                burgerPosition = i;
            }
            if (macros[i].name == "** Salades **") {
                saladPosition = i;
            }
            if (macros[i].name == "** Kebab **") {
                kebabPosition = i;
            }
            if (macros[i].name == "** McDo **") {
                mcdonaldPosition = i;
            }
            if (macros[i].name == "** Burger King **") {
                burgerkingPosition = i;
            }
            if (macros[i].name == "** Alcool **") {
                alcoholPosition = i;
            }
            if (macros[i].name == "** Cocktails **") {
                cocktailPosition = i;
            }
        }

        if (macros_.category == "pasta") {
            macros.splice(ricePosition, 0, macros_);
        }
        else if (macros_.category == "rice") {
            macros.splice(meatPosition, 0, macros_);
        }
        else if (macros_.category == "meat") {
            macros.splice(fishPosition, 0, macros_);
        }
        else if (macros_.category == "fish") {
            macros.splice(cheesePosition, 0, macros_);
        }
        else if (macros_.category == "cheese & milk") {
            macros.splice(groundnutPosition, 0, macros_);
        }
        else if (macros_.category == "groundnut") {
            macros.splice(fruitPosition, 0, macros_);
        }
        else if (macros_.category == "fruit") {
            macros.splice(vegetablePosition, 0, macros_);
        }
        else if (macros_.category == "vegetable") {
            macros.splice(otherPosition, 0, macros_);
        }
        else if (macros_.category == "other") {
            macros.splice(salsaPosition, 0, macros_);
        }
        else if (macros_.category == "salsa") {
            macros.splice(fatPosition, 0, macros_);
        }
        else if (macros_.category == "fat") {
            macros.splice(yogurtPosition, 0, macros_);
        }
        else if (macros_.category == "yogurt") {
            macros.splice(pastryPosition, 0, macros_);
        }
        else if (macros_.category == "pastry") {
            macros.splice(sweetPosition, 0, macros_);
        }
        else if (macros_.category == "sweet") {
            macros.splice(pizzaPosition, 0, macros_);
        }
        else if (macros_.category == "pizza") {
            macros.splice(sandwichPosition, 0, macros_);
        }
        else if (macros_.category == "sandwich") {
            macros.splice(burgerPosition, 0, macros_);
        }
        else if (macros_.category == "burger") {
            macros.splice(saladPosition, 0, macros_);
        }
        else if (macros_.category == "salad") {
            macros.splice(kebabPosition, 0, macros_);
        }
        else if (macros_.category == "kebab") {
            macros.splice(mcdonaldPosition, 0, macros_);
        }
        else if (macros_.category == "mcdonald") {
            macros.splice(burgerkingPosition, 0, macros_);
        }
        else if (macros_.category == "burger king") {
            macros.splice(alcoholPosition, 0, macros_);
        }
        else if (macros_.category == "alcohol") {
            macros.splice(cocktailPosition, 0, macros_);
        }
        else if (macros_.category == "cocktail") {
            macros.push(macros_);
        } 
    }
    else {
        macros[macroPosition].name = macros_.name;
        macros[macroPosition].calories = macros_.calories;
        macros[macroPosition].proteins = macros_.proteins;
        macros[macroPosition].fat = macros_.fat;
        macros[macroPosition].carbs = macros_.carbs;
        macros[macroPosition].fibers = macros_.fibers;
        macros[macroPosition].unit = macros_.unit;
    }

    localStorage.setItem('macros', JSON.stringify(macros));
    
    macros_ = {};

    window.location.reload();
}

function deleteElement() {
    var delete_container = document.getElementById("delete_container"); 
    
    for (var i = 0; i < macros.length; i++) {
        document.getElementById('deleteSelect').innerHTML = document.getElementById('deleteSelect').innerHTML +
        '<option value="' + macros[i]['name'] + '">' + macros[i]['name'] + '</option>';
    }

    document.getElementById("deleteSelect").style.display = "block";
    document.getElementById("okDeleteSelect").style.display = "block";

    if (delete_container.style.display === "none") {
        delete_container.style.display = "block";
    } else {
        delete_container.style.display = "none";
    }
}

function okDeleteElement() {

	for (var i = 0; i < macros.length; i++) {
    	if (macros[i].name == document.getElementById("deleteSelect").value) {
        	macros.splice(i, 1);
        }
    }

    localStorage.setItem('macros', JSON.stringify(macros));

    document.getElementById("deleteSelect").style.display = "none";

    document.getElementById("okDeleteSelect").style.display = "none";

    table();
}

export default function Home() {
    useEffect(() => {
        //window.onload = table;

        window.addEventListener('load', function (){
            table();
        });

        document.getElementById("add_container").style.display = "none";
        document.getElementById("modify_container").style.display = "none";
        document.getElementById("delete_container").style.display = "none";

        document.getElementById("nameModify").style.display = "none";
        document.getElementById("caloriesModify").style.display = "none";
        document.getElementById("proteinsModify").style.display = "none";
        document.getElementById("fatModify").style.display = "none";
        document.getElementById("carbsModify").style.display = "none";
        document.getElementById("fibersModify").style.display = "none";
        document.getElementById("categoryModify").style.display = "none";
        document.getElementById("unitModify").style.display = "none";

        document.getElementById("ok2ModifySelect").style.display = "none";
    })

    return (
        <div className="container">
            <Head>
                <title>Macros</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <link rel="icon" href="/logo_meal.ico" />
            </Head>
             
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js"></Script>

            <main class="container-fluid">
        
                <div class="container-fluid p-2 my-3">
                    <div className="home_container">
                        <div className="card">
                            <h5>Macros</h5>
                        </div>
                    </div>
                </div>
                
                <res>
                <div class="container-fluid p-2 my-3">
                    <div id="divresult"></div>
                </div>
                </res>

                <p></p>

                <p></p>

                <center>

                <div class="container-fluid py-2">

                    <p></p>

                    <p></p>

                    <p></p>

                    <input type="button" 
                            class="btn btn-outline-success" 
                                onClick={() => {addElement()} }
                                    value="&#127828; Add element" />

                    <div id="add_container" class="container-fluid py-2">

                        <div class="container-fluid py-2" id="name">
                            <div class="col-lg-3">
                                <p>name: </p>
                                <input type="textMeal" id="mealName" name="mealName"></input>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="calories">
                            <div class="col-sm-3">
                                <p>calories: </p>
                                <input type="textMeal" id="mealCalories" name="mealCalories"></input>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="proteins">
                            <div class="col-sm-3">
                                <p>proteins: </p>
                                <input type="textMeal" id="mealProteins" name="mealProteins"></input>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="fat">
                            <div class="col-sm-3">
                                <p>fat: </p>
                                <input type="textMeal" id="mealFat" name="mealFat"></input>
                            </div>
                        </div>

                        
                        <div class="container-fluid py-2" id="carbs">
                            <div class="col-sm-3">
                                <p>carbs: </p>
                                <input type="textMeal" id="mealCarbs" name="mealCarbs"></input>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="fibers">
                            <div class="col-sm-3">
                                <p>fibers: </p>
                                <input type="textMeal" id="mealFibers" name="mealFibers"></input>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="categoryAdd">
                            <label class="form-label">category:</label>
                            <div class="col-md-3">
                                <select class="form-select" id="categoryAddSelect">
                                    <option value="alcohol">alcohol</option>
                                    <option value="burger">burger</option>
                                    <option value="burger king">burger king</option>
                                    <option value="cheese & milk">cheese & milk</option>
                                    <option value="cocktail">cocktail</option>
                                    <option value="fat">fat</option>
                                    <option value="fish">fish</option>
                                    <option value="fruit">fruit</option>
                                    <option value="groundnut">groundnut</option>
                                    <option value="kebab">kebab</option>
                                    <option value="mcdonald">mcdonald</option>
                                    <option value="meat">meat</option>
                                    <option selected="selected" value="other">other</option>
                                    <option value="pasta">pasta</option>
                                    <option value="pastry">pastry</option>
                                    <option value="pizza">pizza</option>
                                    <option value="rice">rice</option>
                                    <option value="salad">salad</option>
                                    <option value="salsa">salsa</option>
                                    <option value="sandwich">sandwich</option>
                                    <option value="sweet">sweet</option>
                                    <option value="vegetable">vegetable</option>
                                    <option value="yogurt">yogurt</option>
                                </select>
                            </div>
                        </div>

                        <div class="container-fluid py-2" id="unit">
                            <label class="form-label">unit:</label>
                            <div class="col-md-3">
                                <select class="form-select" id="mealUnit">
                                    <option value="100g">100g</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>

                        <div class="container-fluid py-2">
                        <input id="okAddSelect" type="button" 
                                class="btn btn-outline-success"
                                    onClick={() => {okAddElement()} }
                                        value="OK" />
                        </div>

                    </div>

                </div>

                <p></p>

                <p></p>

                <div class="container-fluid py-2">

                    <input type="button" 
                            class="btn btn-outline-warning"
                                onClick={() => {modifyElement()} }
                                    value="&#127851; Modify element" />&ensp;

                    <p></p>

                    <div id="modify_container">

                        <div id="modifyList">
                            <div class="col-lg-8">
                            <select class="form-select" id="modifySelect">
                            <option selected="selected" value="-- Select --">-- Select --</option>
                            </select>
                            </div>
                        </div>&ensp;

                        <input id="ok1ModifySelect" type="button" 
                            class="btn btn-outline-warning"
                                onClick={() => {ok1ModifyElement()} }
                                    value="OK" />

                        <div class="container-fluid py-2">

                            <div class="container-fluid py-2" id="nameModify">
                                <div class="col-lg-5">
                                    <p>name: </p>
                                    <input type="textMeal" id="mealNameModify" name="mealNameModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="caloriesModify">
                                <div class="col-sm-3">
                                    <p>calories: </p>
                                    <input type="textMeal" id="mealCaloriesModify" name="mealCaloriesModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="proteinsModify">
                                <div class="col-sm-3">
                                    <p>proteins: </p>
                                    <input type="textMeal" id="mealProteinsModify" name="mealProteinsModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="fatModify">
                                <div class="col-sm-3">
                                    <p>fat: </p>
                                    <input type="textMeal" id="mealFatModify" name="mealFatModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="carbsModify">
                                <div class="col-sm-3">
                                    <p>carbs: </p>
                                    <input type="textMeal" id="mealCarbsModify" name="mealCarbsModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="fibersModify">
                                <div class="col-sm-3">
                                    <p>fibers: </p>
                                    <input type="textMeal" id="mealFibersModify" name="mealFibersModify"></input>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="categoryModify">
                                <label class="form-label">category:</label>
                                <div class="col-md-3">
                                    <select class="form-select" id="categoryModifySelect">
                                    <option value="alcohol">alcohol</option>
                                    <option value="burger">burger</option>
                                    <option value="burger king">burger king</option>
                                    <option value="cheese & milk">cheese & milk</option>
                                    <option value="cocktail">cocktail</option>
                                    <option value="fat">fat</option>
                                    <option value="fish">fish</option>
                                    <option value="fruit">fruit</option>
                                    <option value="groundnut">groundnut</option>
                                    <option value="kebab">kebab</option>
                                    <option value="mcdonald">mcdonald</option>
                                    <option value="meat">meat</option>
                                    <option value="other">other</option>
                                    <option value="pasta">pasta</option>
                                    <option value="pastry">pastry</option>
                                    <option value="pizza">pizza</option>
                                    <option value="rice">rice</option>
                                    <option value="salad">salad</option>
                                    <option value="salsa">salsa</option>
                                    <option value="sandwich">sandwich</option>
                                    <option value="sweet">sweet</option>
                                    <option value="vegetable">vegetable</option>
                                    <option value="yogurt">yogurt</option>
                                    </select>
                                </div>
                            </div>

                            <div class="container-fluid py-2" id="unitModify">
                                <label class="form-label">unit:</label>
                                <div class="col-md-3">
                                    <select class="form-select" id="mealUnitModify">
                                        <option value="100g">100g</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </div>

                            <div class="container-fluid py-2">
                            <input id="ok2ModifySelect" type="button" 
                                    class="btn btn-outline-warning"
                                        onClick={() => {ok2ModifyElement()} }
                                            value="OK" />
                            </div>

                        </div>

                    </div>

                </div>

                <div class="container-fluid py-2">

                    <input type="button" 
                            class="btn btn-outline-danger"
                                onClick={() => {deleteElement()} }
                                    value="&#127865; Delete element" />&ensp;

                    <p></p>

                    <div id="delete_container">

                        <div id="deleteList">
                            <div class="col-lg-8">
                            <select class="form-select" id="deleteSelect">
                            <option selected="selected" value="-- Select --">-- Select --</option>
                            </select>
                            </div>
                        </div>&ensp;

                        <input id="okDeleteSelect" type="button" 
                                class="btn btn-outline-danger"
                                    onClick={() => {okDeleteElement()} }
                                        value="OK" />
                        
                    </div>

                    <p id="macro_testing_print"></p>

                </div>

                </center>

                <div className="home_container">
                    <a className="card_home" href="/">
                    <h3>Home</h3>
                    </a>
                </div>

            </main>

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

            .button_modify {
                background-color: white;
                color: black;
                border: 2px solid #FFA500; /* Orange */
                transition-duration: 0.4s;
            }

            .button_modify:hover {
                background-color: #FFA500; /* Orange */
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

            .text {
                line-height: 1.5;
                font-size: 1.3rem;
                padding-left: 0.01rem;
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

            .grid-container {
                display: grid;
                grid-template-columns: auto auto;
                gap: 10px;
                padding: 10px;
            }
            
            .grid-container2 {
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: 10px;
            padding: 10px;
            }
            
            .grid-container > div {
            text-align: center;
            padding: 20px 0;
            font-size: 30px;
            }
            
            .container1 {
            padding: 20px;
            }

            input[type=textMeal] {
                width: 50%;
            }
            
            .item1 {
            width: 150px;
            border: 1px solid black;
            }
            
            .item2 {
            border: 1px solid black;
            }
            
            .item3 {
            border: 1px solid black;
            }
            
            .item4 {
            border: 1px solid black;
            }
            
            .item5 {
            border: 1px solid black;
            }
            
            .container {
            min-height: 100vh;
            padding: 0 0rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }

            .home {
                margin: 0;
                line-height: 1.15;
                font-size: 2rem;
            }
    
            .home,
            .description {
                text-align: center;
            }

            .home_container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }

            .inLine {
                display: flex;
                width: 100%;
            }

            .inLine:input {
                flex: 1 1;
                margin-right:20px;
              }

            .inLineUp {
                margin: auto;
                width: 60%;
                padding: 10px;
            }

            

            .macros {
                display: grid;
                grid-template-columns: auto auto auto auto;
                gap: 10px;
                padding: 10px;
                position: relative;
            }
            
            .macros > div {
                border: 1px solid black;
                text-align: center;
                font-size: 30px;
            }

            .macros_container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: cnter;
                position: absolute; 
                right: 15rem; 
                top: 15rem;

                border: 3px solid green;
            }

            main {
            padding: 3rem 20rem;
            flex: 1;
            display: flex;
            flex-direction: column;

            border: 3px solid #eaeaea;
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
            }
            
            .vertical-center {
                min-height: 100%;
                min-height: 100vh; 
                display: flex;
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
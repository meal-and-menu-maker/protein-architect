import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'
import { get, set, update, del } from 'idb-keyval';

var noon = {};
var night = {};

function noonNightInput () {

  document.getElementById("noon_test_print").style.display = "none";
  
  if (get('noon') != "undefined") {
    //get('noon').then((val) => document.getElementById("noon_test_print").innerHTML = JSON.stringify(val));

    //get('noon').then((val) => alert(JSON.stringify(val)));

    if (noon.calories == null && noon.proteins == null && noon.fat == null && noon.carbs == null && noon.fibers == null) {
      noon.calories = 361;
      noon.proteins = 29;
      noon.fat = 1;
      noon.carbs = 58;
      noon.fibers = 2;

      set('noon', noon);
    }
    
    document.getElementById('caloriesNoon').value = noon.calories;
    document.getElementById('proteinsNoon').value = noon.proteins;
    document.getElementById('fatNoon').value = noon.fat;
    document.getElementById('carbsNoon').value = noon.carbs;
    document.getElementById('fibersNoon').value = noon.fibers;
  }

  if (get('night') != "undefined") {
    get('night').then((val) => night = val);

    if (night.calories == null && night.proteins == null && night.fat == null && night.carbs == null && night.fibers == null) {
      night.calories = 1839;
      night.proteins = 106;
      night.fat = 60;
      night.carbs = 217;
      night.fibers = 38;

      set('night', night);
    }
    
    document.getElementById('caloriesNight').value = night.calories;
    document.getElementById('proteinsNight').value = night.proteins;
    document.getElementById('fatNight').value = night.fat;
    document.getElementById('carbsNight').value = night.carbs;
    document.getElementById('fibersNight').value = night.fibers;
  }
  
  /* 
  if (localStorage.getItem('noon') != null) {
    noon = JSON.parse(localStorage.getItem('noon'));

    if (noon.calories == null && noon.proteins == null && noon.fat == null && noon.carbs == null && noon.fibers == null) {
      noon.calories = 363;
      noon.proteins = 29;
      noon.fat = 1;
      noon.carbs = 60;
      noon.fibers = 10;
    }
    
    document.getElementById('caloriesNoon').value = noon.calories;
    document.getElementById('proteinsNoon').value = noon.proteins;
    document.getElementById('fatNoon').value = noon.fat;
    document.getElementById('carbsNoon').value = noon.carbs;
    document.getElementById('fibersNoon').value = noon.fibers;
  }
  
  if (localStorage.getItem('night') != null) {
    night = JSON.parse(localStorage.getItem('night'));

    if (night.calories == null && night.proteins == null && night.fat == null && night.carbs == null && night.fibers == null) {
      night.calories = 1837;
      night.proteins = 106;
      night.fat = 60;
      night.carbs = 215;
      night.fibers = 40;
    }
    
    document.getElementById('caloriesNight').value = night.calories;
    document.getElementById('proteinsNight').value = night.proteins;
    document.getElementById('fatNight').value = night.fat;
    document.getElementById('carbsNight').value = night.carbs;
    document.getElementById('fibersNight').value = night.fibers;
  }
 */
}

function test() {
  document.getElementById("noon_test_print").style.display = "none";
  
  get('noon').then((val) => document.getElementById("noon_test_print").innerHTML = JSON.stringify(val));

  noon = JSON.parse(document.getElementById("noon_test_print").innerHTML);

  document.getElementById("noon_var_test_print").innerHTML = noon.calories;
}

export default function Home() {
  useEffect(() => {

    window.onload = noonNightInput;

    window.onbeforeunload = (e) => {

      noon.calories = parseFloat(document.getElementById('caloriesNoon').value);
      noon.proteins = parseFloat(document.getElementById('proteinsNoon').value);
      noon.fat = parseFloat(document.getElementById('fatNoon').value);
      noon.carbs = parseFloat(document.getElementById('carbsNoon').value);
      noon.fibers = parseFloat(document.getElementById('fibersNoon').value);
    
      night.calories = parseFloat(document.getElementById('caloriesNight').value);
      night.proteins = parseFloat(document.getElementById('proteinsNight').value);
      night.fat = parseFloat(document.getElementById('fatNight').value);
      night.carbs = parseFloat(document.getElementById('carbsNight').value);
      night.fibers = parseFloat(document.getElementById('fibersNight').value);

      /* localStorage.setItem('noon', JSON.stringify(noon));
      localStorage.setItem('night', JSON.stringify(night)); */

      del('noon');
      set('noon', noon);
    };
  })

  
  return (
    <div>
      <Head>
        <title>Protein Architect</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js"></Script>

      <main>
        <div class="container">
          <div class="menu">
            <ul>
              <li class="logo"><img src="/logo.png"/></li>
              <li class="active"><a href="/"><span>Home</span></a></li>
              <li><a href="/calculator"><span>Calculator</span></a></li>
              <li><a href="/create"><span>Create</span></a></li>
              <li><a href="/modify"><span>Modify</span></a></li>
              <li><a href="/macros"><span>Macros</span></a></li>
              <li><a href="/meals"><span>Meals & Menus</span></a></li>
            </ul>
          </div>

          <div class="banner">
            <div class="app-text">
              <h1>Protein Architect</h1>
              <p>Like <font color="#00a3ff"> yourfitnesspal </font> but you get to work a bit more</p>
            </div>

            <div class="app-picture">
              <img src="/home_photo.png"></img>
            </div>
          </div>
        </div>

        <div class="container-fluid py-2">
        <center>
          <div>
            <mark>NOON</mark>&ensp;
            <code>Calories:
            <input class="col-sm-1" type="text" id="caloriesNoon"></input>
            &nbsp;| Proteins:
            <input class="col-sm-1" type="text" id="proteinsNoon"></input>
            &nbsp;| Fat:
            <input class="col-sm-1" type="text" id="fatNoon"></input>
            &nbsp;| Carbs:
            <input class="col-sm-1" type="text" id="carbsNoon"></input>
            &nbsp;| Fibers:
            <input class="col-sm-1" type="text" id="fibersNoon"></input></code>
          </div>

          <div>
            <mark>NIGHT</mark>&ensp;
            <code>Calories:
            <input class="col-sm-1" type="text" id="caloriesNight"></input>
            &nbsp;| Proteins:
            <input class="col-sm-1" type="text" id="proteinsNight"></input>
            &nbsp;| Fat:
            <input class="col-sm-1" type="text" id="fatNight"></input>
            &nbsp;| Carbs:
            <input class="col-sm-1" type="text" id="carbsNight"></input>
            &nbsp;| Fibers:
            <input class="col-sm-1" type="text" id="fibersNight"></input></code>
          </div>
        </center>
        </div>

      </main>

      <footer>
      <span>&#127789; &emsp; &#127790; &emsp; &#127791;</span>
      </footer>

      <style jsx>{`

        .container {
          width: 100%;
          height: 100%;
          background: #f3f7fd;
        }

        .menu ul {
          display: inline-flex;
          margin: 50px;
        }

        .menu ul li {
          list-style: none;
          margin: 0 20px;
          color: #e6effe;
          cursor: pointer;
        }

        .logo img {
          width: 30px;
          margin-top: -7px;
          margin-right: 48px;
        }

        .active {
          color: #98bdff;
        }

        .banner {
          width: 80%;
          height: 70%;
          top: 25%;
          left: 130px;
          position: absolute;
          color: #000000;
        }

        .app-text {
          width: 50%;
          float: left;
        }

        .app-text h1 {
          font-size: 43px;
          width: 640px;
          position: relative;
          margin-left: 40px;
        }

        .app-text p {
          font-size: 15px;
          width: 650px;
          margin: 30px 0 30px 40px;
          line-height: 25px;
          color: #000000;
        }

        .app-picture {
          width: 50%;
          float: right;
        }

        .app-picture img {
          width: 10%;
          margin-top: -20px;
          padding-left: 50px;
        }

        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
      `}</style>
    </div>
  )
}

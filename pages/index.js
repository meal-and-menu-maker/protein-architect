import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react'
import { get, set, del } from 'idb-keyval';

var noon = {};
var night = {};

function noonNightInput () {

  //document.getElementById("noon_test_print").style.display = "none";
  
  if (get('noon') != "undefined") {
    //get('noon').then((val) => document.getElementById("noon_test_print").innerHTML = JSON.stringify(val));

    //get('noon').then((val) => alert(JSON.stringify(val)));

    get('noon').then((val) => noon = val);

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
    <div className="container">
      <Head>
        <title>Protein Architect</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js"></Script>

      <main class="container-fluid">

        <div class="container-fluid">
            <div id="navbar">
                <a href="/">Home</a>
                <a href="/calculator">Calculator</a>
                <a href="/create">Create</a>
                <a href="/modify">Modify</a>
                <a href="/macros">Macros</a>
                <a href="/meals">Meals & Menus</a>
            </div>
        </div>

        <div class="container-fluid p-5 my-5">
          <h1 className="title">
            Protein <font color="#008000"> Architect </font>
          </h1>
        </div>

        <div class="container-fluid">
          <h4>
            Like <font color="#00a3ff"> yourfitnesspal </font> but you get to work a bit more
          </h4>
        </div>

        <center>

          <Image
            src="/home_photo.png"
            height={240}
            width={300}
            alt="Meal photo"
          />

        </center>

        <p></p>

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

            <p></p>

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

      <p></p>
      <p></p>

      <footer>
        <span>&#127789; &emsp; &#127790; &emsp; &#127791;</span>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
          padding-bottom: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
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

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        /* Style the navbar */
        #navbar {
            float: left;
            width: 45%;
            overflow: hidden;
            background-color: #f1f1f1;
        }

        /* Navbar links */
        #navbar a {
            float: left;
            display: block;
            color: #000000;
            text-align: center;
            padding: 14px;
            text-decoration: none;
        }

        #navbar a:hover,
        #navbar a:focus,
        #navbar a:active {
            text-decoration: none;
            font-weight: 500;
        }

        /* Page content */
        .content {
            padding: 5vh;
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
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
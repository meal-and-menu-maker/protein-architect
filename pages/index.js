import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'

var noon = {};
var night = {};

function noonNightInputsAndToken () {
  if (localStorage.getItem('noon') != null) {
    noon = JSON.parse(localStorage.getItem('noon'));

    if (noon.calories == null && noon.proteins == null && noon.fat == null && noon.carbs == null) {
      noon.calories = 380;
      noon.proteins = 50;
      noon.fat = 4;
      noon.carbs = 45;
    }
    
    document.getElementById('caloriesNoon').value = noon.calories;
    document.getElementById('proteinsNoon').value = noon.proteins;
    document.getElementById('fatNoon').value = noon.fat;
    document.getElementById('carbsNoon').value = noon.carbs;
  }
  
  if (localStorage.getItem('night') != null) {
    night = JSON.parse(localStorage.getItem('night'));

    if (night.calories == null && night.proteins == null && night.fat == null && night.carbs == null) {
      night.calories = 1820;
      night.proteins = 115;
      night.fat = 57;
      night.carbs = 230;
    }
    
    document.getElementById('caloriesNight').value = night.calories;
    document.getElementById('proteinsNight').value = night.proteins;
    document.getElementById('fatNight').value = night.fat;
    document.getElementById('carbsNight').value = night.carbs;
  }

}

export default function Home() {
  useEffect(() => {

    window.onload = noonNightInputsAndToken;

    window.onbeforeunload = (e) => {

      noon.calories = parseFloat(document.getElementById('caloriesNoon').value);
      noon.proteins = parseFloat(document.getElementById('proteinsNoon').value);
      noon.fat = parseFloat(document.getElementById('fatNoon').value);
      noon.carbs = parseFloat(document.getElementById('carbsNoon').value);
    
      night.calories = parseFloat(document.getElementById('caloriesNight').value);
      night.proteins = parseFloat(document.getElementById('proteinsNight').value);
      night.fat = parseFloat(document.getElementById('fatNight').value);
      night.carbs = parseFloat(document.getElementById('carbsNight').value);
      
      localStorage.setItem('noon', JSON.stringify(noon));
      localStorage.setItem('night', JSON.stringify(night));
    };
  })

  
  return (
    <div className="container">
      <Head>
        <title>Macro Meal & Menu Maker</title>
        <link rel="icon" href="/logo_meal.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

      <main>
        <h1 className="title">
          Macro <font color="#008000"> Meal & Menu </font> Maker
        </h1>

        <div className="grid">
          <a href="/create" className="card">
            <h3>Create a meal &rarr;</h3>
          </a>

          <a href="/meals" className="card">
            <h3>Meals & Menus &rarr;</h3>
          </a>

          <a href="/modify" className="card">
            <h3>Modify a meal &rarr;</h3>
          </a>

          <a href="/macros" className="card">
            <h3>Macros &rarr;</h3>
          </a>
        </div>

        <center>
          <div class="container-fluid py-2">
            <mark>NOON</mark>&ensp;
            <code>Calories:
            <input class="col-sm-1" type="text" id="caloriesNoon"></input>
            | Proteins:
            <input class="col-sm-1" type="text" id="proteinsNoon"></input>
            | Fat:
            <input class="col-sm-1" type="text" id="fatNoon"></input>
            | Carbs:
            <input class="col-sm-1" type="text" id="carbsNoon"></input></code>
          </div>

          <div class="container-fluid py-2">
            <mark>NIGHT</mark>&ensp;
            <code>Calories:
            <input class="col-sm-1" type="text" id="caloriesNight"></input>
            | Proteins:
            <input class="col-sm-1" type="text" id="proteinsNight"></input>
            | Fat:
            <input class="col-sm-1" type="text" id="fatNight"></input>
            | Carbs:
            <input class="col-sm-1" type="text" id="carbsNight"></input></code>
          </div>
        </center>

      </main>

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
          text-align: center;
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

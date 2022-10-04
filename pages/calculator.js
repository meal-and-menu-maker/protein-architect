import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { useEffect } from 'react'
import { get, set } from 'idb-keyval';

export default function Home() {
    useEffect(() => {
    })

    return (
        <div className="container">
            <Head>
                <title>Macros</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <link rel="icon" href="/logo.png" />
            </Head>
             
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
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

                <div class="container-fluid p-3 my-5"></div>

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
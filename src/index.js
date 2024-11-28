import React from "react"
import ReactDOM from "react-dom/client"         //react and reactDOM to render react composants
import App from "./App"                         
import "bootstrap/dist/css/bootstrap.min.css"   

const root = ReactDOM.createRoot(document.getElementById("root"))   //initialize  React in reactDOM
root.render(

    <App />                                      //insert the app in the html element with id root 

)

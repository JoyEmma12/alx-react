import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";
import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <body className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input className={css(styles.input)} type="email" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input className={css(styles.input)} type="password" name="password" id="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;

import logo from "./holberton-logo.jpg";
import "./App.css";
import "../Notifications";
import "../Footer";
import "../Header";
import "../Login";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <Login />
          <button>OK</button>
        </body>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;

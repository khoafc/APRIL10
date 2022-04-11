import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import "./App.css";
import Game from "./New/Game";
import Header from "./Components/Header";
import Test from "./New/Test";
import { onClick, signInWithGoogle } from "./New/Firebase";
// import { SignIn, SomeComponent } from "./Firebase";
import SignIn from "./New/SignIn";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='container dark'>
          <div >
   
            <BrowserRouter>
              <Routes>
                {/* <Route path='/' element={<NoteListPage />} /> */}
               {/* <Route path='note/:id' element={<NotePage />} />  */}
                <Route path='/test' element={<Test />} />
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<SignIn />} />
                <Route path='/game' element={<Game/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

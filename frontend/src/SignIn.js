// Import the functions you need from the SDKs you need
import React, { Component, useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "./Firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
  const history = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem("email", email);
        console.log(result);
              history("/test");       
        let Admin= async () => {
          let formField = new FormData();
          // formField.append("content", content);
          console.log("VY VY")
          formField.append("email", email);
          formField.append("action", "add-admin");
          await axios({
            method: "POST",
            url: "/api/user/create/",
            data: formField,
          }).then((response) => {
          })}
        Admin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className='container dark'>
        <div className='ti'>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React, { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { email, password, error, loading } = data;

  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();

  const history = useHistory();

  const loginGoogle = async () => {
    setData({ ...data, error: null, loading: true });
    let user = {};
    try {
      await signInWithPopup(auth, providerGoogle).then((result) => {
        user = result.user;
        // console.log("userGoogle", user);
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.replace("/");
    } catch (err) {
      console.log(err);
      setData({ ...data, error: err.message, loading: false });
    }
  };

  const loginFacebook = async () => {
    setData({ ...data, error: null, loading: true });
    let user = {};
    try {
      await signInWithPopup(auth, providerFacebook).then((result) => {
        user = result.user;
        // console.log("userGoogle", user);
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.replace("/");
    } catch (err) {
      console.log(err);
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <section>
      <h3>Log into your Account</h3>
      <div className="btn_container">
          {loading ? <button className="btn" >Logging in ... </button>
          : <div>
            <button onClick={loginGoogle} className="btn" disabled={loading}> with Google </button>
            <button onClick={loginFacebook} className="btn" disabled={loading}> with Facebook </button>
            </div>
          }
      </div>
      
       
    </section>
  );
};

export default Login;

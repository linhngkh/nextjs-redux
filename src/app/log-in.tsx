"use client";
import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function LogIn() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  //make sure that user logged in, so they can toggle
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogin = () => {
    dispatch(logIn(username));
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="text-black"
      />
      <br />
      <button onClick={onClickLogin}>Log in</button>
      <br />
      <button onClick={onClickLogout}>Log out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle moderator status</button>
      )}
    </div>
  );
}

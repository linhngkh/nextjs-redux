"use client";

import { useAppSelector } from "@/redux/store";
import LogIn from "./log-in";

export default function Home() {
  //specify the reducer auth to display username
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <LogIn />
      <h1>username: {username}</h1>
      {isModerator && <h1>User is moderator</h1>}
    </main>
  );
}

import React, { useState, type ReactNode } from "react";
import { useNavigate } from "@modern-js/runtime/router";
import Cookies from "js-cookie";

export default function Index(): ReactNode {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    console.log(email, password);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (!data.key) return;
    Cookies.set("token", data.key);
    navigate("/remote");
  };

  return (
    <div className="container mx-auto max-w-[1440px]">
      <div className="grid h-screen content-center justify-center">
        <h1 className="text-2xl text-center">ModernJS App</h1>
        <form
          className="grid"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded-md bg-gray-900 text-white my-2 p-2 focus:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md bg-gray-900 text-white my-2 p-2 focus:border-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-md bg-gray-900 text-white my-2 p-2"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

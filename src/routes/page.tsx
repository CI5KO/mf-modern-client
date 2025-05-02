import React, { Suspense, lazy, useState, type ReactNode } from "react";
import { useNavigate } from "@modern-js/runtime/router";
import Cookies from "js-cookie";

const Button = lazy(() =>
  import("Components/Atoms").then((module) => ({ default: module.Button }))
);
const Input = lazy(() =>
  import("Components/Atoms").then((module) => ({ default: module.Input }))
);
const Title = lazy(() =>
  import("Components/Atoms").then((module) => ({ default: module.Title }))
);

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
        <Suspense fallback={<div>Cargando título...</div>}>
          <Title>ModernJS App</Title>
        </Suspense>
        <form
          className="grid"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Suspense fallback={<div>Cargando input...</div>}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(value: string) => setEmail(value)}
            />
          </Suspense>
          <Suspense fallback={<div>Cargando input...</div>}>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(value: string) => setPassword(value)}
            />
          </Suspense>
          <Suspense fallback={<div>Cargando botón...</div>}>
            <Button onClick={() => handleSubmit()}>Login</Button>
          </Suspense>
        </form>
      </div>
    </div>
  );
}

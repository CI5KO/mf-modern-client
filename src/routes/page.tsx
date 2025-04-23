import React, { useState, Suspense } from "react";
import { Button } from "Components/Atoms";

const Index = (): JSX.Element => {
  return (
    <div>
      <h1>Host Container</h1>
      <Button>External Button</Button>
    </div>
  );
};

export default Index;

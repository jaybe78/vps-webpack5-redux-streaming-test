import React, { useState } from "react";
import { useSsrData } from "../react-streaming";

const value = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
};

const later = (delay: number, value: number) =>
  new Promise((resolve) => setTimeout(resolve, delay, value));

const DELAY_SUSPENSE_1 = 2000;
const DELAY_SUSPENSE_2 = 10000;

const InnerSuspense = () => {
  const [deps, setDeps] = useState<number>(1);

  const suspense1: string = useSsrData(
    "suspense1",
    async () => {
      return later(DELAY_SUSPENSE_1, value[deps]);
    },
    [deps]
  );
  return (
    <>
      <h1>Suspense 1: {suspense1}</h1>
      <input type="number" onChange={(event) => setDeps(event.target.value)} />
    </>
  );
};

const InnerSuspense2 = ({ deps }) => {
  const suspense2: string = useSsrData(
    "suspense2",
    async () => {
      return later(DELAY_SUSPENSE_2, value[deps]);
    },
    [deps]
  );
  return (
    <>
      <h1>Suspense 2: {suspense2}</h1>
    </>
  );
};

export default function SuspenseTest() {
  const [deps, setDeps] = useState<number>(4);

  return (
    <>

      <React.Suspense
        fallback={<div style={{ color: "red" }}>fetch inner suspense 1 during {DELAY_SUSPENSE_1}ms ...</div>}
      >
        <InnerSuspense />
      </React.Suspense>


      <React.Suspense
        fallback={<div style={{ color: "red" }}>fetch inner 2 suspense during {DELAY_SUSPENSE_2} ms...</div>}
      >
        <InnerSuspense2 deps={deps} />
      </React.Suspense>

      <div style={{ marginTop: "20px" }}>
         Update deps for suspense 2:
        <input type="number" onChange={(event) => setDeps(event.target.value)} />
      </div>

    </>
  );
}
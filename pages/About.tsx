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
const DELAY_SUSPENSE_2 = 5000;

const InnerSuspense = ({ id, name, delay, deps }) => {

  const suspense: string = useSsrData(
      id,
    async () => {
      return later(delay, value[deps]);
    },
    [deps]
  );
  return (
    <>
      <h1>{name}: {suspense}</h1>
    </>
  );
};


export default function SuspenseTest() {
  const [depsSuspense1, setDeps] = useState<number>(1);
  const [depsSuspense2, setDepsSuspense2] = useState<number>(4);

  return (
    <>

      <React.Suspense
        fallback={<div style={{ color: "red" }}>fetch inner suspense 1 during {DELAY_SUSPENSE_1}ms ...</div>}
      >
        <InnerSuspense id="suspense1" name="Suspense 1" delay={DELAY_SUSPENSE_1} deps={depsSuspense1} />
      </React.Suspense>


      <React.Suspense
        fallback={<div style={{ color: "red" }}>fetch inner 2 suspense during {DELAY_SUSPENSE_2} ms...</div>}
      >
        <InnerSuspense id="suspense2" name="Suspense 2" delay={DELAY_SUSPENSE_2} deps={depsSuspense2} />
      </React.Suspense>

      <div style={{ marginTop: "20px" }}>
         Update deps for suspense 2:
        <input type="number" onChange={(event) => setDepsSuspense2(event.target.value)} />
      </div>

    </>
  );
}
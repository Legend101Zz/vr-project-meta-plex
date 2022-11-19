// import React from 'react';

// function App() {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <header>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from "./Unityhack";

import { OrbitControls } from "@react-three/drei";
import "./style.css";

export default function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands modelLeft="/model-left.glb" modelRight="/model-right.glb" />
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.2} />

          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}

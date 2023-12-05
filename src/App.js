import React from 'react';
import './App.css';
import { FullPage, Slide } from 'react-full-page';
import { Canvas, useLoader, extend } from 'react-three-fiber';
import { Text, MeshWobbleMaterial, Html } from '@react-three/drei';
import { FontLoader } from 'three';
import * as THREE from 'three';
extend({ MeshWobbleMaterial });

function App() {
  return (
    <div className="App">
      <FullPage>
        <Slide>
          <div>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Text
                color="white"
                anchorX="center"
                anchorY="middle"
                rotation={[-0.5, -0.5, 0]}
                depth={0.5}
                font="./OpenSans.ttf"
                children="hello world"
              >
                {(nodes, materials) => (
                  <mesh material={materials}>
                    <shapeBufferGeometry args={[nodes]} />
                  </mesh>
                )}
              </Text>
            </Canvas>
          </div>
        </Slide>
        <Slide>
          <div>
            <h1>Section 2</h1>
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
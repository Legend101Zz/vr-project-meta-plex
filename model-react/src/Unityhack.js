import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/unityhack.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1104.01, 33.18, -149.38]} scale={[49.78, 3.75, 44.5]}>
        <mesh
          geometry={nodes.Bunny.geometry}
          material={materials["Material.074"]}
          position={[22.18, -7.43, 3.92]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.02, 0.27, 0.02]}
        />
      </group>
      <group position={[-0.17, 0.07, 0.04]}>
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          geometry={nodes.Plane007_2.geometry}
          material={materials["Material.033"]}
        />
      </group>
      <group position={[21.5, -2.64, -0.69]} scale={[86.67, 60.96, 60.96]}>
        <mesh
          geometry={nodes.Plane008.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          geometry={nodes.Plane008_1.geometry}
          material={materials["Material.033"]}
        />
      </group>
      <mesh
        geometry={nodes["kich-thuoc-san-bong-da"].geometry}
        material={materials["kich-thuoc-san-bong-da"]}
        position={[83.96, -2.54, 19.55]}
        rotation={[0, Math.PI / 2, 0]}
        scale={21.51}
      />
      <group
        position={[73.34, 6.86, 36.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.14}
      >
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Material.037"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Material.038"]}
        position={[73.28, -2.44, 38.75]}
        scale={0.1}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials["Material.038"]}
        position={[95.35, -2.44, 2.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.1}
      />
      <group position={[0, 1.3, -19.07]} scale={[6, 2, 1.5]}>
        <mesh
          geometry={nodes.Cube037.geometry}
          material={materials["Material.072"]}
        />
        <mesh
          geometry={nodes.Cube037_1.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          geometry={nodes.Cube037_2.geometry}
          material={materials["Material.071"]}
        />
      </group>
      <mesh
        geometry={nodes.khandai.geometry}
        material={nodes.khandai.material}
        position={[6.15, -0.21, 8.69]}
        rotation={[Math.PI, -0.03, Math.PI]}
        scale={[0.53, 0.49, 0.13]}
      />
      <mesh
        geometry={nodes.ghe001.geometry}
        material={materials["Material.039"]}
        position={[6.07, 0.92, 8.86]}
        rotation={[Math.PI, -0.03, Math.PI]}
        scale={[0.16, 0.02, 0.16]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.040"]}
        position={[1.32, 0.02, -0.07]}
        rotation={[0, -1.55, 0]}
        scale={[30.29, 53.7, 30.1]}
      />
      <group position={[1, 0.99, -11.93]} rotation={[0, -1.55, 0]}>
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          geometry={nodes.Cube026_1.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          geometry={nodes.Cube026_2.geometry}
          material={materials["Material.042"]}
        />
      </group>
      <mesh
        geometry={nodes.ghea.geometry}
        material={materials["Material.039"]}
        position={[-22.86, 1.01, -11.2]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={[-0.19, -0.02, -0.19]}
      />
      <group
        position={[-0.66, 2.37, -14.18]}
        rotation={[0, -1.55, 0]}
        scale={[0.02, 0.14, 0.16]}
      >
        <mesh geometry={nodes.Cube028.geometry} material={materials.den} />
        <mesh
          geometry={nodes.Cube028_1.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <group
        position={[24.78, 9.69, -27.03]}
        rotation={[0, -1.55, 0]}
        scale={[0.31, 3.43, 0.31]}
      >
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          geometry={nodes.Cube029_1.geometry}
          material={materials["maiche.001"]}
        />
      </group>
      <group
        position={[0.91, -0.15, 8.48]}
        rotation={[0, 0.02, 0.13]}
        scale={[3.48, 0.06, 0.06]}
      >
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials["maiche.002"]}
        />
        <mesh
          geometry={nodes.Cube030_1.geometry}
          material={materials["Material.041"]}
        />
      </group>
      <group
        position={[1, 13.75, -11.93]}
        rotation={[0, -1.55, 0]}
        scale={[1, 0.04, 1]}
      >
        <mesh geometry={nodes.Cube031.geometry} material={materials.maiche1} />
        <mesh
          geometry={nodes.Cube031_1.geometry}
          material={materials["maiche.001"]}
        />
      </group>
      <group
        position={[-21.04, 0.3, 24.92]}
        rotation={[Math.PI / 2, 0, -1.61]}
        scale={[0.95, 0.57, 0.48]}
      >
        <mesh
          geometry={nodes["4428587001_1"].geometry}
          material={materials["Material.044"]}
        />
        <mesh
          geometry={nodes["4428587001_2"].geometry}
          material={materials["cocacola.001"]}
        />
      </group>
      <group
        position={[1.88, 0.3, 21.17]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.77, 0.57, 0.48]}
      >
        <mesh
          geometry={nodes["4428587002_1"].geometry}
          material={materials["4428587.001"]}
        />
        <mesh
          geometry={nodes["4428587002_2"].geometry}
          material={materials["Material.045"]}
        />
        <mesh
          geometry={nodes["4428587002_3"].geometry}
          material={materials["cocacola.003"]}
        />
        <mesh
          geometry={nodes["4428587002_4"].geometry}
          material={materials["cocacola.002"]}
        />
      </group>
      <group
        position={[23.86, 0.3, -8.34]}
        rotation={[Math.PI / 2, 0, 1.53]}
        scale={[0.95, 0.57, 0.48]}
      >
        <mesh
          geometry={nodes["4428587003_1"].geometry}
          material={materials["Material.046"]}
        />
        <mesh
          geometry={nodes["4428587003_2"].geometry}
          material={materials["cocacola.004"]}
        />
      </group>
      <mesh
        geometry={nodes["kich-thuoc-san-bong-da001"].geometry}
        material={materials["kich-thuoc-san-bong-da.002"]}
        position={[1.23, 0.04, 7.22]}
        rotation={[Math.PI, -0.04, Math.PI]}
        scale={28.16}
      />
      <group
        position={[5.81, 0.29, -8.96]}
        rotation={[-Math.PI, -0.02, -Math.PI / 2]}
        scale={[0.18, 1.6, 0.19]}
      >
        <mesh
          geometry={nodes.Cube034.geometry}
          material={materials["Material.053"]}
        />
        <mesh
          geometry={nodes.Cube034_1.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          geometry={nodes.Cube034_2.geometry}
          material={materials["Material.055"]}
        />
        <mesh
          geometry={nodes.Cube034_3.geometry}
          material={materials["Material.056"]}
        />
        <mesh
          geometry={nodes.Cube034_4.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          geometry={nodes.Cube034_5.geometry}
          material={materials["Material.058"]}
        />
        <mesh
          geometry={nodes.Cube034_6.geometry}
          material={materials["Material.059"]}
        />
        <mesh
          geometry={nodes.Cube034_7.geometry}
          material={materials["Material.060"]}
        />
        <mesh
          geometry={nodes.Cube034_8.geometry}
          material={materials["Material.061"]}
        />
      </group>
      <group
        position={[1.11, 6.54, -18.92]}
        rotation={[Math.PI / 2, 0, -0.02]}
        scale={[0.77, 0.61, 0.48]}
      >
        <mesh
          geometry={nodes["4428587004_1"].geometry}
          material={materials["4428587.001"]}
        />
        <mesh
          geometry={nodes["4428587004_2"].geometry}
          material={materials["Material.045"]}
        />
        <mesh
          geometry={nodes["4428587004_3"].geometry}
          material={materials["cocacola.003"]}
        />
        <mesh
          geometry={nodes["4428587004_4"].geometry}
          material={materials["cocacola.002"]}
        />
      </group>
      <group
        position={[3.91, 5.38, 10.95]}
        rotation={[1.95, 1.52, -1.95]}
        scale={[-2.9, -0.04, -3.59]}
      >
        <mesh geometry={nodes.Cube035.geometry} material={materials.maiche1} />
        <mesh geometry={nodes.Cube035_1.geometry} material={materials.den} />
      </group>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Material.062"]}
        position={[1.8, 5.09, 22.82]}
        rotation={[1.57, 0, 3.11]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials["Material.062"]}
        position={[25.05, 4.97, 7.08]}
        rotation={[1.57, 0.01, 1.55]}
        scale={0.51}
      />
      <mesh
        geometry={nodes.Text002.geometry}
        material={materials["Material.062"]}
        position={[-22.08, 4.97, 9.15]}
        rotation={[-1.57, -0.01, -1.55]}
        scale={-0.51}
      />
      <group
        position={[-17.11, 11.42, -11.54]}
        rotation={[0, -1.55, -0.68]}
        scale={[0.05, 0.19, 0.16]}
      >
        <mesh
          geometry={nodes.Cube036.geometry}
          material={materials["Material.063"]}
        />
        <mesh
          geometry={nodes.Cube036_1.geometry}
          material={materials["Material.064"]}
        />
        <mesh
          geometry={nodes.Cube036_2.geometry}
          material={materials["Material.065"]}
        />
        <mesh
          geometry={nodes.Cube036_3.geometry}
          material={materials["Material.066"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/unityhack.glb");

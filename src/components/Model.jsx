import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from "three";

//axe x = axe horizontal
//axe y = axe vertical
//axe z = profondeur

export default function Model({z}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/assets/models/ring-v2-transformed.glb'); //récupérer le matériau à afficher
  const {viewport, camera} = useThree(); //définir ce qu'on voit
  const {width, height} = viewport.getCurrentViewport(camera, [0, 0, z]); //définir ce qu'on voit
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //jsp mais toujours visuel
    y: THREE.MathUtils.randFloatSpread(height), //jsp mais toujours visuel
    rX: Math.random() * Math.PI, //ajout rotation aléatoire axe X
    rY: Math.random() * Math.PI, //ajout rotation aléatoire axe Y
    rZ: Math.random() * Math.PI, //ajout rotation aléatoire axe Z
  });

    useFrame(() => {
      ref.current.position.set(data.x * width, (data.y += 0.02), z);
      ref.current.rotation.set((data.rX += 0.007),(data.rY -= 0.01),(data.rZ -= 0.002))//définir la manière dont les anneaux pivotent
      if(data.y > height) {
        data.y = -height;
      }
    });

  return (
      <mesh ref={ref} geometry={nodes.ring.geometry} material={materials.skin} scale={150} />//retrouver le modèle de l'anneau, appliquer un skin(matériau) et définir la taille
  )
}

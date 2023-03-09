import {Canvas, useFrame} from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {Suspense} from "react";
import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Model from "./Model";

//bonjour hanane

export default function CanvasContainer({count = 80, depth = 65, z}){//définir le nombre d'anneaux à l'écran, on importe z et on définit la profondeur
  return (//ci-dessous: on définit la vue qu'on a, à quel point nous sommes près, loin, le point de vue, et rendre ça plus fluide
      <>
      <div className="title">
        <h1>
            Legendary
        </h1>
        <h2>
            Landing Page
        </h2>
      </div>
      <div className="quote">
        <p>
            Blabla insérer ici références au Seigneur des Anneaux Aragorn tout ça tout ça.
        </p>
      </div>
      <Canvas className={"canvas"} camera={{near: 0.01, far: 100, fov: 24}} dpr={1}>
        <Suspense fallback={null}>
        <color attach={"background"} args={["#89633c"]}/>
            <ambientLight intensity={0.5}/>
        {Array.from({length: count}, (_,i) => (
            <Model key={i} z={-i / count * depth}/>//répartir les anneaux dans l'espace en profondeur
        ))}
        <Environment preset={"forest"} blur={1}/>
        <EffectComposer>
            <DepthOfField target={[0, 0, depth / 2]} focalLength={0.4} bokehScale={12} height={800}/>
        </EffectComposer>
        </Suspense>
      </Canvas>{//^rendre l'anneau doré en mode ça reflète une forêt tout ça tout ça, par exemple si on met warehouse ça reflète un parking
      //^on définit également que le background sera doré
}
      </>
  )
}


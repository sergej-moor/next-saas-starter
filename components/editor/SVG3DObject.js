// components/SVG3DObject.js
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

function SVG3DObject({ svgContent, depth, bevelEnabled, bevelSize }) {
  const svgData = useMemo(() => {
    const loader = new SVGLoader();
    return loader.parse(svgContent);
  }, [svgContent]);

  const shapes = useMemo(
    () => svgData.paths.flatMap((path) => path.toShapes(true)),
    [svgData]
  );

  const geometry = useMemo(() => {
    return new THREE.ExtrudeGeometry(shapes, {
      depth,
      bevelEnabled,
      bevelSize,
    });
  }, [shapes, depth, bevelEnabled, bevelSize]);

  const material = new MeshStandardMaterial({ color: "#1565C0" });

  return <mesh geometry={geometry} material={material} />;
}

export default SVG3DObject;

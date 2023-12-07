"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("white");

      const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvas });
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshBasicMaterial({
        color: "#20c997",
        opacity: 0.5,
        transparent: true,
      });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: "#000", // 선의 색상
        linewidth: 5, // 선의 두께
      });
      const line = new THREE.LineSegments(edges, lineMaterial);
      cube.add(line);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        renderer.render(scene, camera);
      };

      animate();
    }
  }, [canvasRef]);

  return (
    <div className="flex h-full w-full justify-center items-center">
      <canvas ref={canvasRef} className="h-full w-full bg-white"></canvas>
    </div>
  );
}

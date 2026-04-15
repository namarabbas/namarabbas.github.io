import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { OrbitControls, Preload, Float } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasLoader from '../Loader.jsx';

const SceneSetup = () => {
    const { gl } = useThree();
    useEffect(() => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.4;
        gl.setClearColor(0x000000, 0);
    }, [gl]);
    return null;
};

const CentralHub = () => {
    const outerRef = useRef();
    const midRef = useRef();
    const innerRef = useRef();
    const coreRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        outerRef.current.rotation.y = t * 0.12;
        outerRef.current.rotation.x = t * 0.06;
        midRef.current.rotation.y = -t * 0.18;
        midRef.current.rotation.z = t * 0.09;
        innerRef.current.rotation.x = t * 0.22;
        innerRef.current.rotation.y = t * 0.14;
        coreRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
    });

    return (
        <group>
            <mesh ref={outerRef}>
                <dodecahedronGeometry args={[1.35, 0]} />
                <meshStandardMaterial color="#0F766E" emissive="#0F766E" emissiveIntensity={0.6} wireframe transparent opacity={0.65} />
            </mesh>
            <mesh ref={midRef}>
                <icosahedronGeometry args={[0.95, 1]} />
                <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} wireframe transparent opacity={0.35} />
            </mesh>
            <mesh ref={innerRef}>
                <octahedronGeometry args={[0.55, 0]} />
                <meshStandardMaterial color="#D97706" emissive="#D97706" emissiveIntensity={0.5} wireframe transparent opacity={0.45} />
            </mesh>
            <mesh ref={coreRef}>
                <sphereGeometry args={[0.22, 32, 32]} />
                <meshStandardMaterial color="#0F766E" emissive="#0F766E" emissiveIntensity={1.8} transparent opacity={0.85} />
            </mesh>
        </group>
    );
};

const PulseWave = ({ delay }) => {
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = (clock.getElapsedTime() + delay) % 4;
        const prog = t / 4;
        ref.current.scale.setScalar(prog * 5);
        ref.current.material.opacity = Math.max(0, 0.08 * (1 - prog));
    });
    return (
        <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.92, 1, 64]} />
            <meshBasicMaterial color="#0F766E" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
    );
};

const OrbitRing = ({ radius, thickness, color, emI, opacity, speed, tiltX, tiltZ, nodes }) => {
    const g = useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        g.current.rotation.x = tiltX + t * speed[0];
        g.current.rotation.y = t * speed[1];
        g.current.rotation.z = tiltZ + t * speed[2];
    });
    return (
        <group ref={g}>
            <mesh>
                <torusGeometry args={[radius, thickness, 16, 140]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emI} transparent opacity={opacity} />
            </mesh>
            {nodes.map((a, i) => (
                <group key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]}>
                    <mesh>
                        <octahedronGeometry args={[0.14, 0]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emI * 1.5} metalness={0.8} roughness={0.15} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

const DataStream = ({ radius, color, tiltX, tiltZ, speedMul }) => {
    const refs = useRef([]);
    const count = 8;
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speedMul;
        refs.current.forEach((mesh, i) => {
            if (!mesh) return;
            const angle = t + (i / count) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * radius;
            mesh.position.y = Math.sin(angle) * radius;
            mesh.position.z = 0;
            mesh.scale.setScalar(0.5 + Math.sin(t * 2 + i) * 0.5);
        });
    });
    return (
        <group rotation={[tiltX, 0, tiltZ]}>
            {Array.from({ length: count }).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el}>
                    <sphereGeometry args={[0.035, 8, 8]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} transparent opacity={0.8} />
                </mesh>
            ))}
        </group>
    );
};

const FloatingParticles = () => {
    const g = useRef();
    const particles = useMemo(() =>
        Array.from({ length: 40 }, () => ({
            pos: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 12],
            size: Math.random() * 0.04 + 0.01,
            spd: Math.random() * 0.6 + 0.2,
            col: ['#0F766E', '#3B82F6', '#D97706'][Math.floor(Math.random() * 3)],
            shape: Math.floor(Math.random() * 3),
        })), []);
    useFrame(({ clock }) => { g.current.rotation.y = clock.getElapsedTime() * 0.01; });
    return (
        <group ref={g}>
            {particles.map((p, i) => (
                <Float key={i} speed={p.spd} rotationIntensity={0.2} floatIntensity={0.5}>
                    <mesh position={p.pos}>
                        {p.shape === 0 && <boxGeometry args={[p.size, p.size, p.size]} />}
                        {p.shape === 1 && <sphereGeometry args={[p.size * 0.7, 8, 8]} />}
                        {p.shape === 2 && <octahedronGeometry args={[p.size * 0.8, 0]} />}
                        <meshStandardMaterial color={p.col} emissive={p.col} emissiveIntensity={0.8} transparent opacity={0.5} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const GroundGrid = () => {
    const ref = useRef();
    useFrame(({ clock }) => { ref.current.rotation.z = clock.getElapsedTime() * 0.012; });
    return (
        <group ref={ref} position={[0, -3.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            {[2, 3, 4, 5].map((r, i) => (
                <mesh key={i}>
                    <ringGeometry args={[r - 0.004, r + 0.004, 80]} />
                    <meshBasicMaterial color="#0F766E" transparent opacity={0.05 - i * 0.01} side={THREE.DoubleSide} />
                </mesh>
            ))}
        </group>
    );
};

const PMScene = ({ isMobile }) => {
    const scale = isMobile ? 0.5 : 1;
    return (
        <group position={[0, -0.2, 0]} scale={scale}>
            <SceneSetup />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 0, 0]} color="#0F766E" intensity={3} distance={18} />
            <pointLight position={[7, 5, 7]} color="#ffffff" intensity={0.6} />
            <pointLight position={[-7, 4, -6]} color="#3B82F6" intensity={0.4} distance={16} />
            <pointLight position={[-5, -3, 5]} color="#D97706" intensity={0.3} distance={12} />

            <CentralHub />
            <PulseWave delay={0} />
            <PulseWave delay={1.33} />
            <PulseWave delay={2.66} />

            <OrbitRing radius={2.5} thickness={0.02} color="#0F766E" emI={0.8} opacity={0.55}
                speed={[0.12, 0.08, 0]} tiltX={0} tiltZ={0}
                nodes={[0, 1.25, 2.5, 3.75, 5.0]} />
            <OrbitRing radius={3.2} thickness={0.016} color="#3B82F6" emI={0.6} opacity={0.4}
                speed={[0, 0.1, 0.06]} tiltX={Math.PI / 3} tiltZ={0}
                nodes={[0.5, 2.1, 3.7, 5.3]} />
            <OrbitRing radius={3.8} thickness={0.012} color="#D97706" emI={0.5} opacity={0.3}
                speed={[0.05, 0, 0.09]} tiltX={-Math.PI / 4} tiltZ={Math.PI / 6}
                nodes={[1.0, 3.1, 5.2]} />

            <DataStream radius={2.5} color="#14B8A6" tiltX={0} tiltZ={0} speedMul={0.6} />
            <DataStream radius={3.2} color="#60A5FA" tiltX={Math.PI / 3} tiltZ={0} speedMul={0.5} />
            <DataStream radius={3.8} color="#FBBF24" tiltX={-Math.PI / 4} tiltZ={Math.PI / 6} speedMul={0.4} />

            <FloatingParticles />
            <GroundGrid />
        </group>
    );
};

const PMCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const media = window.matchMedia('(max-width:500px)');
        setIsMobile(media.matches);
        const handler = (e) => setIsMobile(e.matches);
        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, []);

    return (
        <Canvas
            frameloop="always"
            camera={{ position: [0, 1.8, 9], fov: 32 }}
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false}
                    maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3.5}
                    autoRotate autoRotateSpeed={0.4} />
                <PMScene isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default PMCanvas;

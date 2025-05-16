import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Atmosphere } from '../src';
import { AtmosphereType } from '../src/Atmosphere';

function App() {
  const [animation, setAnimation] = useState<AtmosphereType>('snow');
  const [particleAmount, setParticleAmount] = useState<number>(50);
  const [speed, setSpeed] = useState<number>(0.3);

  return (
    <>
      <h1
        style={{
          padding: '1rem',
          textAlign: 'center',
          color: 'black',
          fontFamily: 'monospace',
        }}
      >
        Hello from react-atmosphere!
      </h1>
      <Atmosphere
        animation={animation}
        particleAmount={particleAmount}
        disabled={false}
        speedFactor={speed}
      >
        <div
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            minHeight: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>
            Link
          </a>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>
            Link
          </a>
          <h1
            style={{
              padding: '1rem',
              textAlign: 'center',
              color: 'white',
              fontFamily: 'monospace',
            }}
          >
            Black Background
          </h1>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>
            Link
          </a>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>
            Link
          </a>
        </div>
      </Atmosphere>

      <Atmosphere
        animation={animation}
        particleAmount={particleAmount}
        disabled={false}
        speedFactor={speed}
      >
        <div
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            minHeight: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
            border: '1px solid black',
          }}
        >
          <a href="#1" style={{ color: 'black', marginRight: '1rem' }}>
            Link
          </a>
          <a href="#2" style={{ color: 'black', marginRight: '1rem' }}>
            Link
          </a>
          <h1
            style={{
              padding: '1rem',
              textAlign: 'center',
              color: 'black',
              fontFamily: 'monospace',
            }}
          >
            White Background
          </h1>
          <a href="#3" style={{ color: 'black', marginRight: '1rem' }}>
            Link
          </a>
          <a href="#4" style={{ color: 'black', marginRight: '1rem' }}>
            Link
          </a>
        </div>
      </Atmosphere>

      <button
        onClick={() => setAnimation('snow')}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '1rem',
          borderRadius: '5px',
          border: '1px solid black',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
      >
        Snow ❄️
      </button>
      <button
        onClick={() => setAnimation('hearts')}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '1rem',
          borderRadius: '5px',
          border: '1px solid black',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
      >
        Hearts ❤️
      </button>
      <label htmlFor="amount">Particle Amount: </label>
      <input
        max={50}
        name="amount"
        type="number"
        value={particleAmount}
        style={{ marginRight: '1rem' }}
        onChange={(e) => {
          if ((e.target.value as unknown as number) > 50) {
            setParticleAmount(50);
            return;
          }
          setParticleAmount(e.target.value as unknown as number);
        }}
      />
      <label htmlFor="speed">Speed: </label>
      <input
        max={2}
        name="speed"
        type="number"
        value={speed}
        style={{ marginRight: '1rem' }}
        onChange={(e) => {
          if ((e.target.value as unknown as number) > 2) {
            setSpeed(2);
            return;
          }
          setSpeed(e.target.value as unknown as number);
        }}
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);

"use client"

import React, { useState } from 'react';

interface MDXFilterBackdropProps {
  imageSrc: string;
  alt?: string;
  className?: string;
}

export default function MDXFilterBackdrop({ 
  imageSrc, 
  alt = 'Backdrop filter demo',
  className = '' 
}: MDXFilterBackdropProps) {
    const [sepia, setSepia] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const [blur, setBlur] = useState(0);

  const backdropStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
    backdropFilter: `
      sepia(${sepia}%) 
      blur(${blur}px)
    `,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '1.2rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '2rem auto',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const controlsStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '1rem',
    borderRadius: '0 0 8px 8px',
  };

  const controlGroupStyle: React.CSSProperties = {
    marginBottom: '1rem',
  };

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    cursor: 'pointer',
  };

  return (
    <div className={`backdrop-filter-demo ${className}`}>
          <div style={containerStyle}>
              
              <div className="relative">
              <img 
          src={imageSrc} 
          alt={alt} 
          style={imageStyle}
        />
        <div style={backdropStyle}>
          你好~
        </div>
              </div>
              

        
        <div style={controlsStyle}>
          <div style={controlGroupStyle}>
            <div style={labelStyle}>
              <span>背景透明度 (Opacity): {opacity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              style={inputStyle}
            />
          </div>

          <div style={controlGroupStyle}>
            <div style={labelStyle}>
              <span>模糊 (Blur): {blur}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              style={inputStyle}
            />
          </div>
                  
          
          <div style={controlGroupStyle}>
            <div style={labelStyle}>
              <span>复古 (Sepia): {sepia}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={sepia}
              onChange={(e) => setSepia(Number(e.target.value))}
              style={inputStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
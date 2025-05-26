export function MDXFilter1() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
    border: '1px solid #ccc',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
        </header>

        <div className="sun" style={sunStyle}></div>
      </div>
    </>
  )
}

export function MDXFilter2() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
    border: '1px solid #ccc',
    overflow: 'hidden',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
        </header>

        <div className="sun" style={sunStyle}></div>
      </div>
    </>
  )
}

export function MDXFilter3() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
    border: '1px solid #ccc',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to bottom, black 0% 50%, transparent 50% 100%)',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
        </header>

        <div className="sun" style={sunStyle}></div>
      </div>
    </>
  )
}

export function MDXFilter4() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
    border: '1px solid #ccc',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to bottom, black 0% 50%, transparent 50% 100%)',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
        </header>

        <div className="sun" style={sunStyle}>
          试着选中我
        </div>
      </div>
    </>
  )
}

export function MDXFilter5() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
    border: '1px solid #ccc',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to bottom, black 0% 50%, transparent 50% 100%)',
    pointerEvents: 'none',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
        </header>

        <div className="sun" style={sunStyle}>
          试着选中我
        </div>
      </div>
    </>
  )
}

export function MDXFilter6() {
  const sunStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: '5px',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    height: '60px',
  }

  const headerChildStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    height: '200%',
    backdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to bottom, black 0% 50%, transparent 50% 100%)',
    pointerEvents: 'none',
  }

  const headerEdgeStyle: React.CSSProperties = {
    transform: 'translateY(100%)',
    position: 'absolute',
    inset: 0,
    height: '100%',
    background: 'hsl(0deg 0% 100% / 0.1)',
    backdropFilter: 'blur(8px) brightness(120%)',
    pointerEvents: 'none',
    maskImage: 'linear-gradient(to bottom, black 0, black 2px, transparent 2px)',
  }

  return (
    <>
      <div className="rounded-md border-1 border-gray-200 p-4">
        <header style={headerStyle}>
          <div style={headerChildStyle}></div>
          <div style={headerEdgeStyle}></div>
        </header>

        <div className="sun" style={sunStyle}></div>
      </div>
    </>
  )
}

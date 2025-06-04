'use client'

import React, { useState, useEffect } from 'react'

const CodePenEmbed = ({ src, title = 'CodePen Embed', height = 300 }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // 组件挂载到 DOM 后，设置 hasMounted 为 true
    // 这意味着下面的 iframe 只有在客户端才会被渲染
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    // 在服务器端或客户端第一次渲染时（hasMounted为false），不渲染 iframe
    // 可以返回一个占位符或者 null
    return (
      <div
        style={{
          minHeight: height,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#666',
        }}
      >
        加载 CodePen...
      </div>
    )
  }

  // 只有在客户端挂载后才渲染 iframe

  return (
    <iframe
      height={height}
      style={{ width: '100%' }}
      scrolling="no"
      title={title}
      src={src}
      frameBorder="no" // 注意这里是 frameBorder
      loading="lazy"
      allowFullScreen={true} // 注意这里是 allowFullScreen
      allow="clipboard-write; autoplay; geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; picture-in-picture; web-share"
    />
  )
}

export default CodePenEmbed

'use client'
import React, { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import { prefix } from '@/utils/prefix'

const FooterCanvas = () => {
  const scene = useRef<HTMLDivElement>(null)
  const engine = useRef(Matter.Engine.create())
  const render = useRef<Matter.Render | null>(null)
  const lastMousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!scene.current) return

    const updateCanvasSize = () => {
      if (scene.current && render.current) {
        const { width, height } = scene.current.getBoundingClientRect()
        render.current.options.width = width
        render.current.options.height = height
        Matter.Render.lookAt(render.current, {
          min: { x: 0, y: 0 },
          max: { x: width, y: height },
        })
      }
    }

    render.current = Matter.Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: scene.current.offsetWidth,
        height: scene.current.offsetHeight,
        pixelRatio: window.devicePixelRatio,
        wireframes: false,
        background: 'transparent',
      },
    })

    const ground = Matter.Bodies.rectangle(
      scene.current.offsetWidth / 2,
      scene.current.offsetHeight - 10,
      scene.current.offsetWidth,
      20,
      {
        isStatic: true,
        render: {
          visible: true,
          fillStyle: 'transparent',
        },
      }
    )

    const leftWall = Matter.Bodies.rectangle(
      0,
      scene.current.offsetHeight / 2,
      20,
      1000,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      }
    )

    const rightWall = Matter.Bodies.rectangle(
      scene.current.offsetWidth,
      scene.current.offsetHeight / 2,
      20,
      1000,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      }
    )

    const images = [
      `${prefix}/footerIcons/AT-lifts.png`,
      `${prefix}/footerIcons/AT.png`,
      `${prefix}/footerIcons/CompMug.png`,
      `${prefix}/footerIcons/CompSoc-laptop.png`,
      `${prefix}/footerIcons/CompSock-pride.png`,
      `${prefix}/footerIcons/CompSock.png`,
      `${prefix}/footerIcons/AT-lifts.png`,
      `${prefix}/footerIcons/AT.png`,
      `${prefix}/footerIcons/CompMug.png`,
      `${prefix}/footerIcons/CompSoc-laptop.png`,
      `${prefix}/footerIcons/CompSock-pride.png`,
      `${prefix}/footerIcons/CompSock.png`,
      `${prefix}/footerIcons/AT-lifts.png`,
      `${prefix}/footerIcons/AT.png`,
      `${prefix}/footerIcons/CompMug.png`,
      `${prefix}/footerIcons/CompSoc-laptop.png`,
      `${prefix}/footerIcons/CompSock-pride.png`,
      `${prefix}/footerIcons/CompSock.png`,
    ].slice(0, window.innerWidth < 768 ? 10 : 20) // Very sloppy and wont resize

    const bodies = images.map((src) => {
      const img = new Image()
      img.src = src
      const scale = 0.08
      const width = 100
      const height = 100

      return Matter.Bodies.rectangle(
        Math.random() * (scene.current?.offsetWidth || 0),
        (Math.random() * (scene.current?.offsetHeight || 0)) / 2,
        width,
        height,
        {
          render: {
            sprite: {
              texture: src,
              xScale: scale,
              yScale: scale,
            },
          },
        }
      )
    })

    Matter.World.add(engine.current.world, [
      ground,
      leftWall,
      rightWall,
      ...bodies,
    ])

    const mouse = Matter.Mouse.create(render.current.canvas)
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!render.current) return
      const canvasRect = render.current.canvas.getBoundingClientRect()
      const mousePosition = {
        x:
          ('clientX' in event ? event.clientX : event.touches[0].clientX) -
          canvasRect.left,
        y:
          ('clientY' in event ? event.clientY : event.touches[0].clientY) -
          canvasRect.top,
      }

      const mouseVelocity = {
        x: mousePosition.x - lastMousePosition.current.x,
        y: mousePosition.y - lastMousePosition.current.y,
      }

      lastMousePosition.current = mousePosition

      bodies.forEach((body) => {
        const distance = Matter.Vector.magnitude(
          Matter.Vector.sub(body.position, mousePosition)
        )
        const maxDistance = 100 // Distance threshold for interaction

        if (distance < maxDistance) {
          const forceMagnitude = (maxDistance - distance) * 0.0015 // Adjust force magnitude as needed
          const force = Matter.Vector.mult(
            Matter.Vector.normalise(mouseVelocity),
            forceMagnitude
          )
          Matter.Body.applyForce(body, body.position, force)
        }
      })
    }

    render.current.canvas.addEventListener('mousemove', handleMouseMove)
    render.current.canvas.addEventListener('touchmove', handleMouseMove)

    Matter.Runner.run(engine.current)
    Matter.Render.run(render.current)

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    return () => {
      if (render.current) {
        Matter.Render.stop(render.current)
        Matter.World.clear(engine.current.world, false)
        Matter.Engine.clear(engine.current)
        render.current.canvas.remove()
        render.current.textures = {}
        window.removeEventListener('resize', updateCanvasSize)
        render.current.canvas.removeEventListener('mousemove', handleMouseMove)
        render.current.canvas.removeEventListener('touchmove', handleMouseMove)
      }
    }
  }, [])

  return <div className="relative w-full h-96 bg-csred" ref={scene} />
}

export default FooterCanvas

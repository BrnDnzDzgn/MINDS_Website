// Built with tsParticles: https://particles.js.org

import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Defined outside the component so it is the same function on every render.
async function initEngine(engine) {
  await loadSlim(engine)
}

// Respect the operating system setting "reduce motion": dots stay still.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const BRAND = '#1f5f86'

const OPTIONS = {
  fullScreen: { enable: false }, // stay inside the hero, not the whole page
  detectRetina: true,
  fpsLimit: 60,
  pauseOnOutsideViewport: true, // stop animating when scrolled out of view
  particles: {
    number: { value: 100, density: { enable: true } },
    paint: { fill: { enable: true, color: BRAND } },
    opacity: { value: { min: 0.25, max: 0.6 } },
    size: { value: { min: 1.5, max: 3.5 } },
    links: { enable: true, distance: 150, color: BRAND, opacity: 0.25, width: 1 },
    move: { enable: !reduceMotion, speed: 0.25, outModes: 'bounce' },
  },
  interactivity: {
    detectsOn: 'window', // react to the mouse even when it is over the text
    events: { onHover: { enable: false, mode: 'grab' } },
    modes: { grab: { distance: 180, links: { opacity: 0.5 } } },
  },
}

export default function NeuralBackground({ className = '' }) {
  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="neural-bg" options={OPTIONS} className={className} />
    </ParticlesProvider>
  )
}

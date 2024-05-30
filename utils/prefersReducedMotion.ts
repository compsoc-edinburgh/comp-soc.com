function prefersReducedMotion(): boolean {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

export default prefersReducedMotion

export const scrollToAnchor = (id: string, offset: number = 70) => {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY

    // offset because of the fixed navbar
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export const NURSELINK_HERO_SLIDES = [
  {
    id: 'hero-01-global-hospital',
    name: 'Global Hospital',
    desktopImage: '/images/registration-hero/nurselink-hero-global-hospital-01.png',
    tabletImage: '/images/registration-hero/nurselink-hero-global-hospital-01.png',
    mobileImage: '/images/registration-hero/nurselink-hero-global-hospital-01-mob.png',
    alt: 'Filipino nurses in a global hospital setting',
    focus: {
      desktop: { fit: 'cover', x: 72, y: 32 },
      tablet: { fit: 'cover', x: 78, y: 28 },
      mobile: { fit: 'cover', x: 50, y: 26 },
    },
  },
  {
    id: 'hero-02-surgery',
    name: 'Surgery',
    desktopImage: '/images/registration-hero/nurselink-hero-surgery-02.png',
    tabletImage: '/images/registration-hero/nurselink-hero-surgery-02.png',
    mobileImage: '/images/registration-hero/nurselink-hero-surgery-02-mob.png',
    alt: 'Nurses working in a surgical care environment',
    focus: {
      desktop: { fit: 'cover', x: 72, y: 32 },
      tablet: { fit: 'cover', x: 78, y: 28 },
      mobile: { fit: 'cover', x: 50, y: 24 },
    },
  },
  {
    id: 'hero-03-hallway',
    name: 'Hospital Hallway',
    desktopImage: '/images/registration-hero/nurselink-hero-hallway-03.png',
    tabletImage: '/images/registration-hero/nurselink-hero-hallway-03.png',
    mobileImage: '/images/registration-hero/nurselink-hero-hallway-03-mob.png',
    alt: 'Nurses in a modern hospital hallway',
    focus: {
      desktop: { fit: 'cover', x: 82, y: 30 },
      tablet: { fit: 'cover', x: 86, y: 27 },
      mobile: { fit: 'cover', x: 50, y: 24 },
    },
  },
  {
    id: 'hero-04-senior-global',
    name: 'Senior Global',
    desktopImage: '/images/registration-hero/nurselink-hero-senior-global-04.png',
    tabletImage: '/images/registration-hero/nurselink-hero-senior-global-04.png',
    mobileImage: '/images/registration-hero/nurselink-hero-senior-global-04-mob.png',
    alt: 'Experienced Filipino nurses in an international care setting',
    focus: {
      desktop: { fit: 'cover', x: 84, y: 30 },
      tablet: { fit: 'cover', x: 88, y: 27 },
      mobile: { fit: 'cover', x: 50, y: 24 },
    },
  },
  {
    id: 'hero-05-middle-east',
    name: 'Middle East',
    desktopImage: '/images/registration-hero/nurselink-hero-middle-east-05.png',
    tabletImage: '/images/registration-hero/nurselink-hero-middle-east-05.png',
    mobileImage: '/images/registration-hero/nurselink-hero-middle-east-05-mob.png',
    alt: 'Filipino nurses working in a Middle East healthcare setting',
    focus: {
      desktop: { fit: 'cover', x: 64, y: 32 },
      tablet: { fit: 'cover', x: 70, y: 28 },
      mobile: { fit: 'cover', x: 50, y: 26 },
    },
  },
]

const LEGACY_NEUTRAL_FOCUS = {
  desktop: { x: 50, y: 46 },
  tablet: { x: 50, y: 44 },
  mobile: { x: 50, y: 36 },
}

export function suppliedHeroSlide(slide) {
  const source = slide?.desktopImage || slide?.tabletImage || slide?.mobileImage || ''

  return NURSELINK_HERO_SLIDES.find((candidate) =>
    candidate.id === slide?.id ||
    candidate.desktopImage === source ||
    candidate.tabletImage === source ||
    candidate.mobileImage === source
  )
}

export function resolveHeroSlideFocus(slide, breakpoint) {
  const configured = slide?.responsive?.[breakpoint]
  const legacy = LEGACY_NEUTRAL_FOCUS[breakpoint]
  const fallback = suppliedHeroSlide(slide)?.focus?.[breakpoint]
  const configuredX = Number(configured?.x)
  const configuredY = Number(configured?.y)
  const isLegacyNeutral =
    !configured ||
    (!Number.isNaN(configuredX) &&
      !Number.isNaN(configuredY) &&
      configuredX === legacy.x &&
      configuredY === legacy.y)

  if (fallback && isLegacyNeutral) {
    return fallback
  }

  return {
    fit: configured?.fit || fallback?.fit || 'cover',
    x: Number.isFinite(configuredX) ? configuredX : fallback?.x ?? 50,
    y: Number.isFinite(configuredY) ? configuredY : fallback?.y ?? 50,
  }
}

export function heroSlideCssVariables(slide) {
  const variables = {}

  for (const breakpoint of ['desktop', 'tablet', 'mobile']) {
    const focus = resolveHeroSlideFocus(slide, breakpoint)
    variables[`--nl-hero-slide-fit-${breakpoint}`] = focus.fit
    variables[`--nl-hero-slide-x-${breakpoint}`] = `${focus.x}%`
    variables[`--nl-hero-slide-y-${breakpoint}`] = `${focus.y}%`
  }

  return variables
}

export function authHeroImage(slide) {
  return slide?.desktopImage || slide?.tabletImage || slide?.mobileImage || ''
}

export function authHeroSlideCssVariables(slide) {
  const variables = heroSlideCssVariables(slide)

  if (!suppliedHeroSlide(slide)) return variables

  for (const breakpoint of ['desktop', 'tablet']) {
    variables[`--nl-hero-slide-fit-${breakpoint}`] = 'cover'
    variables[`--nl-hero-slide-x-${breakpoint}`] = '50%'
    variables[`--nl-hero-slide-y-${breakpoint}`] = '50%'
  }

  variables['--nl-hero-slide-fit-mobile'] = 'cover'
  variables['--nl-hero-slide-x-mobile'] = '50%'
  variables['--nl-hero-slide-y-mobile'] = '6%'

  return variables
}

export function applyHeroSlideCssVariables(element, slide) {
  if (!element) return

  Object.entries(heroSlideCssVariables(slide)).forEach(([property, value]) => {
    element.style.setProperty(property, value)
  })
}

export function applyAuthHeroSlideCssVariables(element, slide) {
  if (!element) return

  Object.entries(authHeroSlideCssVariables(slide)).forEach(([property, value]) => {
    element.style.setProperty(property, value)
  })
}

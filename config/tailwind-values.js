import defaultThemeFactory from 'tailwindcss/defaultTheme'
import { theme } from './tailwind'

const defaultTheme = defaultThemeFactory
const { colors: defaultColors } = defaultTheme
const overwrittenColors = theme.colors
const usedColors = overwrittenColors || defaultColors
const extendedColors = (theme.extends && theme.extends.colors)

export const colors = { ...usedColors, ...extendedColors }

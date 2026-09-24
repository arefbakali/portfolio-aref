import type { Lang } from '../types'
import { en } from './en'
import { fr } from './fr'

export const dictionaries = { en, fr }
export type { Dictionary } from './en'
export const getDictionary = (lang: Lang) => dictionaries[lang]

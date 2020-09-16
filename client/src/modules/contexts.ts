import { createContext } from 'react'

import { ProfileState } from '../modules/actions/profile'
import { SkillState } from '../modules/actions/skill'
import { ExperienceState } from '../modules/actions/experience'

export const Contexts = createContext<{
  profile    : ProfileState
  skill      : SkillState[]
  experience : ExperienceState[]
} | null>(null)

export const NavContexts = createContext<{
  isOpen : boolean
} | null>(null)

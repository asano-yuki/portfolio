export type Profile = {
  _id                 : number
  name                : string
  sex                 : string
  birthday            : string
  address             : string
  educational         : string
  job                 : string
  experience          : [{ name: string, start: Date | null, end: Date | null }]
  capacity            : string[]
  specialtyField      : string[]
  specialtyTechnology : string[]
  specialtyWork       : string[]
  pr                  : string
} 

export type Skill = {
  _id         : number
  name        : string
  category    : string
  subCategory : string
  years       : [
    { start : string, end? : string }
  ]
  status : {
    practice : boolean
    use      : boolean
    unused   : boolean
  }
}

export type Experience = {
  _id       : number
  startDate : string
  endDate?  : string
  title     : string
  content   : string[]
  scale     : string
  contract  : string
  style     : string
  role      : string
  keySkill  : string
  language  : string[]
  db        : string[]
  os        : string[]
  mw        : string[]
  fw        : string[]
  tool      : string[]
  charge    : string[]
}

export type Contact = {
  name     : string
  email    : string
  summary  : string[]
  contents : string
}
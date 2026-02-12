export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'journal' | 'conference' | 'book' | 'working-paper'
  doi?: string
  abstract: string
  pdfUrl?: string
  citations: number
  category: string[]
}

export interface Project {
  id: string
  title: string
  clientType: 'enterprise' | 'sme' | 'academic'
  industry: string
  challenge: string
  solution: string
  technologies: string[]
  outcomes: string
  duration: string
  featured: boolean
  images?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  type: 'consulting' | 'academic'
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
  proficiency: number
  yearsExperience: number
}

import { ServiceCardType } from "../components/compound/ServiceCard"
import { SkillCardType } from "../components/compound/SkillCard"
import { experience } from "../components/Context/UserDetailsContext"

interface skill {
  name: string
  _rawImage: {
    asset: {
      _ref: string
    }
  }
}
interface SanityImage {
  asset: {
    _ref: string
  }
}
interface review {
  name: string
  description: string
  background: string
}
interface WorkItem {
  name: string
  description: string
  ProjectUrl: string
  _rawProjectImage: SanityImage
  skills: string[]
}

export interface ProjectCardType{
  ProjectName: string
  ProjectDescription: string
  ProjectUrl?: string
  myRole: string
  skills: string[]
  ProjectImage: {
    asset: {
      url: string
    }
  }
  ProjectImages?: {
    asset: {
      url: string
    }
  }[]
  index: number
}
export interface UserDetails {
  name: string
  description: string
  Shortdescription: string
  location: string
  availability: boolean
  githubLink: string
  linkedinLink: string
  Experience: experience[]
  AboutmeHeading: string
  AboutmeDescription: string
  AboutmeCheckmark: {
    Text: string
    BackgroundColorInTailwind: string
  }[]
  Serivces: ServiceCardType[]
  Project: ProjectCardType[]
  completedProjects: number
  yearsExperience: number
  websiteLaunched: number
  satisfiedCustomers: number
  skillSet: SkillCardType[]
  reviews: review[]
  FooterText: string
  profileImage: {
    asset: {
      url: string
    }
  }
  cvDocument: {
    asset: {
      url: string
    }
  }
  work: WorkItem[]
  MetaDescription: string
  MetaKeywords: string
  CanonicalLink: string
  NameAcronym: string
}

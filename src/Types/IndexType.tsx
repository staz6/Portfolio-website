
interface skill {
  name: string;
  _rawImage: {
    asset: {
      _ref: string
    }
  }
}
interface SanityImage {
  asset: {
    _ref: string;
  };
}
interface review {
  name: string,
  description: string,
  background: string
}
interface WorkItem {
  name: string;
  description: string;
  ProjectUrl: string;
  _rawProjectImage: SanityImage;
  skills: string[]
}

interface experience {
  CompanyName: string;
  PositionName: string;
  Description: any[];
  StartDate: string;
  EndDate: string;
}

export interface UserDetails {
  name: string;
  description: string;
  location: string;
  availability: boolean;
  githubLink: string;
  linkedinLink: string;
  Experience: experience[];
  detailedDescription: any[];
  skillSet: skill[];
  reviews: review[];
  FooterText: string;
  profileImage: {
    asset: {
      url: string;
    };
  };
  cvDocument: {
    asset: {
      url: string;
    };
  };
  work: WorkItem[];
  MetaDescription: string;
  MetaKeywords: string;
  CanonicalLink: string;
  NameAcronym: string;
}

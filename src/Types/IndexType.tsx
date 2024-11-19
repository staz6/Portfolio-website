
interface skill {
  name: string;
  _rawImage: {
    asset: {
      _ref: string
    }
  }
}

interface experience {
  CompanyName: string;
  PositionName: string;
  Description: string;
  StartDate: string;
  EndDate:string;
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
  figmaLink: string;
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
}

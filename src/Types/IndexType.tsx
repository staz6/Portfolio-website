
interface skill {
  name: string;
  _rawImage: {
    asset: {
      _ref: string
    }
  }
}
export interface UserDetails {
  name: string;
  description: string;
  location: string;
  availability: boolean;
  githubLink: string;
  linkedinLink: string;
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

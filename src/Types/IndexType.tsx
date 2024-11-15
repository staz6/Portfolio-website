export interface UserDetails {
    name: string;
    description: string;
    location: string;
    availability: boolean;
    githubLink: string;
    linkedinLink: string;
    detailedDescription: any[]; 
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
  
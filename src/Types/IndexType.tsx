export interface UserDetails {
    name: string;
    description: string;
    location: string;
    availability: boolean;
    githubLink: string;
    linkedinLink: string;
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
  
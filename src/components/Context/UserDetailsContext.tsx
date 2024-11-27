import React, { createContext, useContext, ReactNode } from 'react';

interface SanityAsset {
    url: string;
}
interface skill {
    name: string;
    _rawImage: {
        asset: {
            _ref: string
        }
    }
}
interface review {
    name: string,
    description: string,
    background: string
}
interface experience {
    CompanyName: string;
    PositionName: string;
    Description: string;
    StartDate: string;
    EndDate: string;
}
interface SanityImage {
    asset: {
        _ref: string;
    };
}

interface WorkItem {
    name: string;
    description: string;
    ProjectUrl: string;
    _rawProjectImage: SanityImage;
    skills: string[]
}
interface SanityUserDetails {
    name: string;
    description: string;
    detailedDescription: any[];
    location: string;
    Experience: experience[];
    availability: boolean;
    githubLink: string;
    linkedinLink: string;
    skillSet: skill[];
    reviews: review[];
    FooterText:string;
    profileImage: {
        asset: SanityAsset;
    };
    cvDocument: {
        asset: SanityAsset;
    };
    work: WorkItem[];
}

interface UserDetailsContextProps {
    userDetails: SanityUserDetails;
}

interface UserDetailsProviderProps {
    data: SanityUserDetails;
    children: ReactNode;
}

export const UserDetailsContext = createContext<UserDetailsContextProps | undefined>(undefined);

export const UserDetailsProvider: React.FC<UserDetailsProviderProps> = ({ data, children }) => (
    <UserDetailsContext.Provider value={{ userDetails: data }}>
        {children}
    </UserDetailsContext.Provider>
);

export const useUserDetails = () => {
    const context = useContext(UserDetailsContext);
    if (!context) throw new Error("useUserDetails must be used within a UserDetailsProvider");
    return context.userDetails;
};

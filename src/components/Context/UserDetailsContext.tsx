import React, { createContext, useContext, ReactNode } from 'react';


interface SanityUserDetails {
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

// Define the context interface
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

import { graphql, useStaticQuery } from "gatsby";

export const useUserDetails = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityUserDetails {
        name
        description
        location
        availability
        githubLink
        linkedinLink
        figmaLink
        profileImage {
          asset {
            url
          }
        }
        cvDocument {
          asset {
            url
          }
        }
      }
    }
  `);
  
  return data.sanityUserDetails;
};

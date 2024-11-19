import { graphql, useStaticQuery } from "gatsby";

export const useUserDetails = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityUserDetails {
        name
        description
        detailedDescription {
          _key
          _type
          style
          children {
            _key
            _type
            text
            marks
          }
        }
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
        skillSet {
        _key
        _type
        name
        _rawImage
      }
      }
    }
  `);

  return data.sanityUserDetails;
};

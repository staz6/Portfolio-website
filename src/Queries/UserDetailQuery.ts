import { graphql, useStaticQuery } from "gatsby";

export const useUserDetails = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityUserDetails {
        name
        description
        NameAcronym,
        MetaKeywords,
        MetaDescription,
        CanonicalLink
         Experience {
       _key
       _type
       CompanyName
       PositionName
       StartDate
       EndDate
       _rawDescription
      Description {
        _key
        _type
        style
        listItem
        level
        _rawChildren
        children {
          _key
          _type
          text
        }
      }
     }
      detailedDescription {
          _key
          _type
          style
           listItem
            level
           _rawChildren
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
      work {
       _key
       _type
       name
       skills
       description
       ProjectUrl
       _rawProjectImage
     }
      reviews {
        _key
        _type
        name
        description
        background
      }
        FooterText
      }
    }
  `);

  return data.sanityUserDetails;
};

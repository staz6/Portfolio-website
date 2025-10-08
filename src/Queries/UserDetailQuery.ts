import { graphql, useStaticQuery } from 'gatsby'

export const useUserDetails = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityUserDetails {
        Project {
          ProjectName
          ProjectDescription
          ProjectUrl
          myRole
          skills
          ProjectImage {
            asset {
              url
            }
          }
          ProjectImages {
            asset {
              url
            }
          }
        }
        Serivces {
          _key
          _type
          ServiceName
          ServiceDescription
          ServiceImage {
            asset {
              url
            }
          }
        }
        completedProjects
        yearsExperience
        websiteLaunched
        satisfiedCustomers
        AboutmeHeading
        AboutmeCheckmark {
          _key
          _type
          Text
          BackgroundColorInTailwind
        }
        AboutmeDescription
        name
        description
        NameAcronym
        Shortdescription
        MetaKeywords
        MetaDescription
        CanonicalLink
        Experience {
          CompanyName
          points
          PositionName
          date
          icon {
            asset {
              url
            }
          }
        }
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
          name
          excellency
          image {
            asset {
              url
            }
          }
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
  `)

  return data.sanityUserDetails
}

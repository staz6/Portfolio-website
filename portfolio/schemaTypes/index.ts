import {title} from 'process'
import {validation} from 'sanity'

export const schemaTypes = [
  {
    name: 'userDetails',
    title: 'User Details',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'Serivces',
        title: 'services',
        type: 'array',
        of: [{type: 'ServiceObj'}]
      },
      {
        name: 'githubLink',
        title: 'GitHub Profile Link',
        type: 'string',
        validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
          Rule.uri({scheme: ['http', 'https']})
      },
      {
        name: 'AboutmeDescription',
        title: 'About Me Description',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'AboutmeHeading',
        title: 'About Me Heading',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'AboutmeCheckmark',
        title: 'About Me Checkmark',
        type: 'array',
        of: [{type: 'CheckmarkObj'}]
      },
      {
        name: 'linkedinLink',
        title: 'LinkedIn Profile Link',
        type: 'string',
        validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
          Rule.uri({scheme: ['http', 'https']})
      },
      {
        name: 'satisfiedCustomers',
        title: 'Satisfied Customers',
        type: 'number',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'yearsExperience',
        title: 'Years Experience',
        type: 'number',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'completedProjects',
        title: 'Completed Projects',
        type: 'number',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'websiteLaunched',
        title: 'Website Launched',
        type: 'number',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'Shortdescription',
        title: 'ShortDescription',
        type: 'text'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'availability',
        title: 'Availability',
        type: 'boolean'
      },
      {
        name: 'cvDocument',
        title: 'CV Document',
        type: 'file',
        options: {
          accept: '.pdf,.doc,.docx'
        }
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {hotspot: true}
      },
      {
        name: 'skillSet',
        title: 'Skill Set',
        type: 'array',
        of: [{type: 'skill'}]
      },
      {
        name: 'Experience',
        title: 'Experience',
        type: 'array',
        of: [{type: 'ExperienceObj'}]
      },
      {
        name: 'work',
        title: 'Work',
        type: 'array',
        of: [{type: 'workItem'}]
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{type: 'ReviewObj'}]
      },
      {
        name: 'FooterText',
        title: 'footertext',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'NameAcronym',
        title: 'NameAcronym',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'MetaDescription',
        title: 'Meta-Description',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'MetaKeywords',
        title: 'Meta-Keywords',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'CanonicalLink',
        title: 'Canonical-Link',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'Project',
        title: 'Project',
        type: 'array',
        of: [{type: 'ProjectObj'}]
      }
    ]
  },
  {
    name: 'ProjectObj',
    title: 'Project Object',
    type: 'object',
    fields: [
      {
        name: 'ProjectName',
        title: 'Project Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'ProjectDescription',
        title: 'Project Description',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'ProjectImage',
        title: 'Project Image',
        type: 'image',
        options: {hotspot: true}
      },
      {
        name: 'ProjectUrl',
        title: 'Project URL',
        type: 'url',
        validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
          Rule.uri({
            scheme: ['http', 'https']
          })
      }
    ]
  },
  {
    name: 'ServiceObj',
    title: 'Service Object',
    type: 'object',
    fields: [
      {
        name: 'ServiceName',
        title: 'Service Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'ServiceDescription',
        title: 'Service Description',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'ServiceImage',
        title: 'Service Image',
        type: 'image',
        options: {hotspot: true}
      }
    ]
  },
  {
    name: 'CheckmarkObj',
    title: 'Checkmark Object',
    type: 'object',
    fields: [
      {
        name: 'Text',
        title: 'Text',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'BackgroundColorInTailwind',
        title: 'Background Color In Tailwind',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      }
    ]
  },
  {
    name: 'ReviewObj',
    title: 'Review Object',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string'
      }
    ]
  },
  {
    name: 'skill',
    title: 'Skill',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'image',
        title: 'Skill Image',
        type: 'image',
        options: {hotspot: true}
      },
      {name: 'excellency', title: 'Excellency', type: 'number', options: {hotspot: true}}
    ]
  },
  {
    name: 'ExperienceObj',
    title: 'Experience Obj',
    type: 'object',
    fields: [
      {
        name: 'CompanyName',
        title: 'Company Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'PositionName',
        title: 'Position Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {hotspot: true},
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{type: 'string'}],
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      }
    ]
  },
  {
    name: 'workItem',
    title: 'Work Item',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: {required: () => any}) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'ProjectImage',
        title: 'Project Image',
        type: 'image',
        options: {hotspot: true}
      },
      {
        name: 'ProjectUrl',
        title: 'Project URL',
        type: 'url',
        validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
          Rule.uri({
            scheme: ['http', 'https']
          }),
        description: 'Provide the URL for the project (optional).'
      }
    ]
  }
]

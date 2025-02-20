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
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'githubLink',
        title: 'GitHub Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
          Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'AboutmeDescription',
        title: 'About Me Description',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'AboutmeHeading',
        title: 'About Me Heading',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'AboutmeCheckmark',
        title: 'About Me Checkmark',
        type: 'array',
        of: [{ type: 'CheckmarkObj' }],
      },
      {
        name: 'linkedinLink',
        title: 'LinkedIn Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
          Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'satisfiedCustomers',
        title: 'Satisfied Customers',
        type: 'number',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'yearsExperience',
        title: 'Years Experience',
        type: 'number',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'completedProjects',
        title: 'Completed Projects',
        type: 'number',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'websiteLaunched',
        title: 'Website Launched',
        type: 'number',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'Shortdescription',
        title: 'ShortDescription',
        type: 'text',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'availability',
        title: 'Availability',
        type: 'boolean',
      },
      {
        name: 'cvDocument',
        title: 'CV Document',
        type: 'file',
        options: {
          accept: '.pdf,.doc,.docx',
        },
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'skillSet',
        title: 'Skill Set',
        type: 'array',
        of: [{ type: 'skill' }],
      },
      {
        name: 'Experience',
        title: 'Experience',
        type: 'array',
        of: [{ type: 'ExperienceObj' }],
      },
      {
        name: 'work',
        title: 'Work',
        type: 'array',
        of: [{ type: 'workItem' }],
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{ type: 'ReviewObj' }],
      },
      {
        name: 'FooterText',
        title: 'footertext',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'NameAcronym',
        title: 'NameAcronym',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'MetaDescription',
        title: 'Meta-Description',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'MetaKeywords',
        title: 'Meta-Keywords',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'CanonicalLink',
        title: 'Canonical-Link',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    ],
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
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'BackgroundColorInTailwind',
        title: 'Background Color In Tailwind',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
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
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string',
      },
    ],
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
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Skill Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
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
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'PositionName',
        title: 'Position Name',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'Description',
        title: 'Description',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'Heading 1', value: 'h1' },
              { title: 'Heading 2', value: 'h2' },
              { title: 'Heading 3', value: 'h3' },
            ],
            lists: [
              { title: 'Bullet', value: 'bullet' },
              { title: 'Numbered', value: 'number' },
            ],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Underline', value: 'underline' },
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL',
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        name: 'StartDate',
        title: 'Start Date',
        type: 'date',
        options: {
          dateFormat: 'MMM YYYY',
        },
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'EndDate',
        title: 'End Date',
        type: 'string',
        validation: (Rule: { custom: (arg0: (endDate: any, context: any) => true | string) => any }) =>
          Rule.custom((endDate: string, context: { parent: { StartDate: string } }) => {
            const { StartDate } = context.parent;

            if (endDate === 'Present') return true;

            const startDateObj = new Date(StartDate);
            const endDateObj = new Date(endDate);

            if (isNaN(endDateObj.getTime())) {
              return 'End date must be a valid date (e.g., "2024-12-01")';
            }

            if (endDateObj < startDateObj) {
              return 'End date must be after start date';
            }

            return true;
          }),
        description: 'Enter a date in YYYY-MM-DD format or "Present" for ongoing roles',
      },
    ],
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
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'ProjectImage',
        title: 'Project Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'ProjectUrl',
        title: 'Project URL',
        type: 'url',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) =>
          Rule.uri({
            scheme: ['http', 'https'],
          }),
        description: 'Provide the URL for the project (optional).',
      },
    ],
  },
];
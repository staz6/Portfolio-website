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
        name: 'linkedinLink',
        title: 'LinkedIn Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
          Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'figmaLink',
        title: 'Figma Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
          Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'detailedDescription',
        title: 'Detailed Description',
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
    ],
  },
];

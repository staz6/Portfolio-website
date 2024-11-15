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
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'githubLink',
        title: 'GitHub Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'linkedinLink',
        title: 'LinkedIn Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({ scheme: ['http', 'https'] }),
      },
      {
        name: 'figmaLink',
        title: 'Figma Profile Link',
        type: 'string',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({ scheme: ['http', 'https'] }),
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
    ],
  },
];

import icon from 'react-icons/lib/md/av-timer'

export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'persons',
      type: 'array',
      title: 'Persons',
      description: 'Who is responsible for this session?',
      of: [
        {
          name: 'person',
          type: 'personReference',
          title: 'Person'
        }
      ]
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          {value: 'keynote', title: 'Keynote'},
          {value: 'talk', title: 'Talk'},
          {value: 'break', title: 'Break'},
          {value: 'firesideChat', title: 'Fireside Chat'},
          {value: 'panel', title: 'Panel'}
        ]
      }
    },
    {
      name: 'talkingPoints',
      type: 'array',
      description: 'The key talking points of this event',
      of: [{type: 'talkingPoint'}]
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      person: 'person.name',
      media: 'image'
    },
    prepare ({title, media, sessionType, person}) {
      return {
        title,
        media,
        subtitle: `${sessionType} ${person ? `- ${person}` : ''}`
      }
    }
  }
}

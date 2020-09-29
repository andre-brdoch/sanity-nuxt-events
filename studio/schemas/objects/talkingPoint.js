export default {
  name: 'talkingPoint',
  type: 'object',
  title: 'Talking Point',
  validation: Rule =>
    Rule.custom(talkingPoint => ['title', 'description'].every(key => key in talkingPoint)),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    }
  ]
}

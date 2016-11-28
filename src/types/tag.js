import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql/type'
import { connectionWithCount } from './helpers'

const Tag = new GraphQLObjectType({
  name: 'Tag',
  description: `[Tags](https://musicbrainz.org/tags) are a way mark entities
with extra information – for example, the genres that apply to an artist,
release, or recording.`,
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The tag label.'
    },
    count: {
      type: GraphQLInt,
      description: 'How many times this tag has been applied to the entity.'
    }
  })
})

export const TagConnection = connectionWithCount(Tag)
export default Tag
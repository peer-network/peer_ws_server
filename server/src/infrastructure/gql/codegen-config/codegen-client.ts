import { CodegenConfig } from '@graphql-codegen/cli';
import { baseConfig } from '../../../app/config/config';
import { logger } from '../../../utils/logger';

const config: CodegenConfig = {
  schema: {
    [baseConfig.GRAPHQL.GRAPHQL_ENDPOINT as string] : {
      headers: {
        "Authorization": `Bearer ${baseConfig.GRAPHQL.GRAPHQL_ENDPOINT}`,
      },
    },
  },
  documents: ['infrastructure/gql/**/*.ts'],
  generates: {
    './infrastructure/gql/generated-types/client/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
---
to: packages/core/<%= h.changeCase.paramCase(name) %>/index.ts
---
import { withInstall } from '~/utils'
import <%= h.changeCase.pascalCase(name) %> from './src/<%= h.changeCase.pascalCase(name) %>.vue'

export const <%= h.componentName(name) %> = withInstall(<%= h.changeCase.pascalCase(name) %>)
export default <%= h.componentName(name) %>

export * from './src/<%= h.changeCase.paramCase(name) %>.type'

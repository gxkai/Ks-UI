---
inject: true
to: packages/core/index.ts
prepend: true
skip_if: <%= h.componentName(name) %>
---
import { <%= h.componentName(name) %> } from '~/<%= h.changeCase.paramCase(name) %>'
export * from '~/<%= h.changeCase.paramCase(name) %>'
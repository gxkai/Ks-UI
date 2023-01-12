---
to: packages/core/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.paramCase(name) %>.type.ts
---
import { ExtractPropTypes, PropType, Component } from 'vue'
import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>.vue'
export const <%= h.propsName(name) %> = {

}

export type <%= h.propsTypeName(name) %> = ExtractPropTypes<typeof <%= h.propsName(name) %>>
export type <%= h.instanceTypeName(name) %> = InstanceType<typeof <%= h.changeCase.pascalCase(name) %>>

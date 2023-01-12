---
to: packages/core/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.vue
---
<template>
  <div class="<%= h.className(name) %>">
  </div>
</template>

<script lang="ts" setup>
import { <%= h.propsName(name) %> } from './<%= h.changeCase.paramCase(name) %>.type'

defineOptions({
  name: '<%= h.componentName(name) %>'
})

const props = defineProps({ ...<%= h.propsName(name) %>, ...variants })
const emits = defineEmits<{}>()
</script>

<style lang="ts">
css({
  variants: {
    variant: {
    }
  },
  '.<%= h.className(name) %>': {
  }
})
</style>


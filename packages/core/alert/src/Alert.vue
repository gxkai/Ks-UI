<template>
  <div v-if="_value" class="ks-alert">
    <span v-if="$slots.icon || icon" class="ks-alert-icon">
      <slot name="icon">
        <KsIcon v-if="icon">
          <component :is="icon"></component>
        </KsIcon>
      </slot>
    </span>
    <div class="ks-alert__content">
      <KsBalancer v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </KsBalancer>
      <div>
        <KsBalancer v-if="$slots.default || description">
          <slot>{{ description }}</slot>
        </KsBalancer>
      </div>
    </div>
    <span v-if="showClose" class="ks-alert-close-icon" @click="onClose">
      <KsIcon :color="closeIconColor"><KsCloseFill /></KsIcon>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { alertProps } from './alert.type'
import { KsBalancer } from '~/balancer'
import { KsIcon } from '~/icon'
import { KsCloseFill } from '@ks-ui/icon'
import { variantColor, variantBorderColor } from '~/utils'

defineOptions({
  name: 'KsAlert'
})

const props = defineProps({ ...alertProps, ...variants })
const emits = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
}>()

const _value = useVModel(props, 'modelValue', emits)

const closeIconColor = computed(() => {
  const { variant, color } = props
  if (variant !== 'filled') return variantColor(color)
  return '{color.white}'
})

function onClose() {
  _value.value = false
}
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      filled: {
        '&': {
          color: '{color.white}',
          backgroundColor: (props) => variantColor(props.color)
        }
      },
      outline: {
        '&': {
          color: (props) => variantColor(props.color),
          border: (props) => variantBorderColor(props.color)
        }
      },
      light: {
        '&': {
          color: (props) => variantColor(props.color),
          backgroundColor: (props) => variantColor(props.color, 100),
        }
      },
      options: {
        default: 'filled'
      }
    }
  },
  '.ks-alert': {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '{size.alertSpace}',
    boxSizing: 'border-box',
    color: '{color.black}',
    overflow: 'hidden',
    borderRadius: (props) => `{size.alertRound.${props.radius}}`,
    '&__content': {
      flex: 1
    },
    '&-icon': {
      marginTop: '4px',
      marginRight: "8px",
      fontSize: '14px',
    },
    '&-close-icon': {
      marginTop: '4px',
      marginLeft: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }
  }
})
</style>

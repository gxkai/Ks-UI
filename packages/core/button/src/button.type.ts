import { ExtractPropTypes, PropType, Component } from 'vue'
import { Size, Color, Variant } from '~/types'
import Button from './Button.vue'
import { KsLoader4Line } from '@ks-ui/icon'
import { cssProp } from 'pinceau/runtime'

export type ButtonVariant = Variant  | 'white' | 'default' | 'subtle' | 'gradient'
export type ButtonLoadingPosition = 'left' | 'right'

export const buttonStyleProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  color: {
    type: String as PropType<Color | string>,
    default: 'primary'
  },
  size: {
    type: String as PropType<Size>,
    default: 'sm'
  },
  radius: {
    type: String as PropType<Size>,
    default: 'sm'
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  css: cssProp
}

export const buttonProps = {
  ...buttonStyleProps,
  loading: {
    type: Boolean,
    default: false,
  },
  loadingPosition: {
    type: String as PropType<ButtonLoadingPosition>,
    default: 'left'
  },
  loadingIcon: {
    type: Object as PropType<Component>,
    default: () => KsLoader4Line
  },
  rightIcon: {
    type: Object as PropType<Component>,
    require: false
  },
  leftIcon: {
    type: Object as PropType<Component>,
    require: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>

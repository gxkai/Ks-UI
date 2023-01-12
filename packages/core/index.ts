import { KsButton } from '~/button'
export * from '~/button'
import { KsBalancer } from '~/balancer'
export * from '~/balancer'
import { KsAlert } from '~/alert'
export * from '~/alert'
import { KsIcon } from '~/icon'
export * from '~/icon'
import { KsAvatar } from '~/avatar'
export * from '~/avatar'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [
    KsButton,
    KsBalancer,
    KsAlert,
    KsIcon,
    KsAvatar
]

const installKsUi = createInstaller(components)

export default installKsUi

export * from './theme/light-theme'

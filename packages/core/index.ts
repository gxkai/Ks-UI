import { KsButton } from '~/button'
import { KsBalancer } from '~/balancer'
import { KsAlert } from '~/alert'
import { KsIcon } from '~/icon'
import { KsAvatar } from '~/avatar'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [KsButton, KsBalancer, KsAlert, KsIcon, KsAvatar]

const installPieceUi = createInstaller(components)

export default installPieceUi

export * from './theme/light-theme'

import { withInstall } from '~/utils'
import Alert from './src/Alert.vue'

export const KsAlert = withInstall(Alert)
export default KsAlert

export * from './src/alert.type'
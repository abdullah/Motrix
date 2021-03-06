import appLocaleEnUS from '@shared/locales/en-US'
import appLocaleZhCN from '@shared/locales/zh-CN'
import appLocaleTrTR from '@shared/locales/tr-TR'

const resources = {
  'en-US': {
    translation: {
      ...appLocaleEnUS
    }
  },
  'zh-CN': {
    translation: {
      ...appLocaleZhCN
    }
  },
  'tr-TR': {
    translation: {
      ...appLocaleTrTR
    }
  }
}

export default resources

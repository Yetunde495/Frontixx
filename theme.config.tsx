import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Frontixx</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Frontixx'
    } 
  },
  project: {
    link: 'https://github.com/Yetunde495/Frontixx',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '',
  },
}

export default config

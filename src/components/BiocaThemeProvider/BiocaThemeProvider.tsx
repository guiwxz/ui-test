import React from 'react'
import { config, GluestackUIProvider } from '@gluestack-ui/themed'

export default function BiocaThemeProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>
  )
}

'use client'

import { ClerkProvider } from '@clerk/nextjs'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
        <ClerkProvider>
            <NextThemesProvider>
            {children}
            </NextThemesProvider>
        </ClerkProvider>
    </NextUIProvider>
  )
}
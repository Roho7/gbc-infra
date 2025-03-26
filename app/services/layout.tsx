import React from 'react'
import { DataProvider } from '../_hooks/useData'

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}

export default ServicesLayout
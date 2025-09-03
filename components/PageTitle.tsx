import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="selection:text-primary-500 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 filter-[url('#x')] selection:bg-amber-200 selection:filter-[url('#x')] sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
      {children}
    </h1>
  )
}

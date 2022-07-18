import React from 'react'

type Props = {
    children?: React.ReactNode
}

export const BodyWrapper: React.FunctionComponent<Props> = ({ children }) => <>{children}</>
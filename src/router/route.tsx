import React, { ReactElement } from 'react'

interface ScreenRouteProps<T> {
	path: T
	component: ReactElement
	authSafe?: boolean
	gateSafe?: boolean
    fallback?: boolean
}


export const Route = () => {}

const Screen = <T,>({
	component,
	path,
	authSafe = false,
	gateSafe = false,
    fallback = false,
}: ScreenRouteProps<T>) => {

	return component
}

Route.Screen = Screen


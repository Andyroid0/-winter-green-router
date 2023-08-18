import React, { 
    ReactElement, 
    useEffect, 
    useLayoutEffect,
    useState } from 'react'

interface RouterProps {
	children: ReactElement[]
    authSafe?: boolean
    signedIn: boolean
}

const Router = () => {}

const Screens = ({ children, authSafe, signedIn }: RouterProps) => {

    // const arr = ["e", "b", "t"] as const
    // type paths = typeof arr[number]
    // let frank: paths = 'e'

    const [screen, setScreen] = useState()

    useLayoutEffect( () => {

    }, [signedIn])

    useEffect(() => {
        if (!authSafe || (signedIn && (screen === 'signIn' || screen === 'signUp'))) {
            setScreen('dashboard')
        } else if ( authSafe && !signedIn && screen !== 'signIn' && screen !== 'signUp') {
            setScreen('signIn')
        }
    }, [signedIn])

	const len = children.length

	for (let i = 0; i < len; i++) {
		if (children[i].props.path === screen) {
			return children[i]
		}
	}
	return <></>
}


Router.Screens = Screens

export default Router

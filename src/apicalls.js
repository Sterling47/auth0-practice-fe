const baseURL = 'http://localhost:3001'

export const postUser = async ({user}) => {
    try {
        const res = await fetch(`${baseURL}/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    catch(err){
        console.log(err)
    }
}

export const getUsers = async () => {
    try {
        const res = await fetch(`${baseURL}/api/v1/users`)
        if (!res.ok) {
            throw new Error('Failed to fetch your users.')
        }
        const data = await res.json()
        return data
    } catch(err) {
        console.error('Failed to fetch data', error.message)
    }
}
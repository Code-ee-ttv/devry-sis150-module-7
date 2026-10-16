// 1: Missing credentials
// 2: Incorrect credentials

const defaultCredentials = {
    username: process.env.DEFAULT_USERNAME,
    password: process.env.DEFAULT_PASSWORD,
}

export function authenticateUser(username: string, password: string) {
    if (!username || !password){
        return 1
    }

    if (username != defaultCredentials.username) {
        return 2
    }

    if (password != defaultCredentials.password) {
        return 2
    }

    return 0
}
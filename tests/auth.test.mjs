import 'dotenv/config'
import { authenticateUser } from '../authentication/auth'

test('does not provide authentication credentials', () => {
    expect(authenticateUser()).toBe(1)
})

test('does not provide expected credentials', () => {
    expect(authenticateUser('local', 'passkey')).toBe(2)
})

test('provides correct credentials', () => {
    expect(authenticateUser(process.env.DEFAULT_USERNAME, process.env.DEFAULT_PASSWORD)).toBe(0)
})
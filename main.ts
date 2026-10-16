import express, {request, type Express, type Request, type Response } from 'express';
import { authenticateUser } from './authentication/auth.ts'
import { getLocalMetrics } from './features/local_computer/local.ts'

const app: Express = express();
const headers = request.headers

app.use((req: Request, res: Response, next) => {
    const result = authenticateUser(req.headers.username as string, req.headers.password as string)
    if (result !== 0) {
        res.status(401).send('Unauthorized')
        return
    }
    next()
})

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello, ${req.headers.username}!`);
});

app.get('/health', (req: Request, res: Response) => {
    res.send(getLocalMetrics())
})


app.listen(3000);


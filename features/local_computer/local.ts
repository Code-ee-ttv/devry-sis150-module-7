import os from 'os'

export function getLocalMetrics () {
    // Get Memory Usage: 
    const memUsage = process.memoryUsage()

    // Process Metrics
    const statusInfo = {
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptime: `${Math.floor(process.uptime())} seconds`,
        system: {
            platform: os.platform(),
            architecture: os.arch(),
            freemem: `${Math.round(os.freemem() / 1024 / 1024)} MB`,
            totalmem: `${Math.round(os.totalmem() / 1024 / 1024)} MB`
        },
        processMetrics: {
            heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
            rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`
        },
        services: {
            // add later
        }
    }

    return {
        statusCode: 200,
        statusInfo: statusInfo
    }
}

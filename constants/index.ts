export const COMMON_CONFIG = Object.freeze({
    model: 'gemini-3.5-flash',
    generateContentConfig: {
        httpOptions: {
            retryOptions: {
                initialDelay: 30,
                attempts: 3,
            },
        },
    }
})
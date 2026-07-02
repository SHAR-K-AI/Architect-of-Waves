export const COMMON_CONFIG = Object.freeze({
    model: 'gemini-2.5-flash',
    generateContentConfig: {
        httpOptions: {
            retryOptions: {
                initialDelay: 30,
                attempts: 3,
            },
        },
    }
})
export const getDefaultTimeoutSeconds = () => parseInt(process.env.TIMEOUT) || 20;
export const getConcurrency = () => parseInt(process.env.CONCURRENCY) || 5;
export const getMaxQueueLength = () => parseInt(process.env.MAX_QUEUE_LENGTH) || 20;
export const getShowResults = () => process.env.SHOW_RESULTS || 'false';
export const getSecret = () => process.env.SECRET;

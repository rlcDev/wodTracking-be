export const PORT = process.env.PORT || 3020;
export const DATABASE_URI = 'mongodb://localhost:27017/crossfit';
export const DATABASE_CONNECTION_OPTIONS = {
    autoIndex: true,
    reconnectTries: 30,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser:true
}
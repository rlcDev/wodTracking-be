import mongoose from 'mongoose';
import { DATABASE_URI, DATABASE_CONNECTION_OPTIONS } from '../../config/constants';

export const connectWithRetry = () => {
    mongoose.connect(DATABASE_URI, DATABASE_CONNECTION_OPTIONS).then(() => {
        console.log('Database is connected');
    }).catch(err => {
        console.error('Connection failed,retry after 5 seconds', err);
        setTimeout(connectWithRetry, 5000);
    })
}
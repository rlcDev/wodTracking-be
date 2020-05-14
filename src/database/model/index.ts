import mongoose from 'mongoose';
import { wodSchema } from './wod/wod';

const wodModel = mongoose.model('wod', wodSchema); 

export {
    wodModel
};
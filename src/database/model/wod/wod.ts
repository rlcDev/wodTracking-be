import mongoose from 'mongoose';

export const wodSchema = new mongoose.Schema({
    date: { type: String },
    type: { type: String },
    time: { type: String },
    metcon: { type: String },
    result: { type: String },
    comment: { type: String }
});

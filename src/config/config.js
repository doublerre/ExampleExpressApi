import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand';

export default {
    DB: {URI: process.env.MONGODB_URI || 'mongodb://0.0.0.0/mongotest',}
}
import {connect} from 'mongoose';

(async () => {
    try{
        const db = await connect('mongodb://127.0.0.1/mongotest');
        console.log('DB connected to', db.connection.name);
    }catch(error){
        console.error(error);
    }
})();
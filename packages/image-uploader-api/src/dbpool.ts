import {Pool} from 'pg';

const pool = new Pool({
    max: 20,
    connectionString: 'postgres://@localhost:5432/image-uploader-db',
    idleTimeoutMillis: 30000
});

export default pool;

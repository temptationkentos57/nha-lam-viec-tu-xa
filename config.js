const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'work_db',
        port: process.env.DB_PORT || 3306
    }
};

module.exports = config;
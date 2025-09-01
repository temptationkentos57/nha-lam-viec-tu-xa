const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD || '',
        database: 'nha_lam_viec'
    }
};

module.exports = config;
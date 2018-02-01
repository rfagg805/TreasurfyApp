const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: 'mongodb://localhost/treasurify_db',
    secret: crypto,
    db: 'treasurify_db'
}
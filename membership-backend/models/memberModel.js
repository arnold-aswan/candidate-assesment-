const db = require('../database');

const createMember = (name, email, callback) => {
  const query = 'INSERT INTO members (name, email) VALUES (?, ?)';
  db.run(query, [name, email], function (err) {
    if (err) return callback(err);
    callback(null, { id: this.lastID });
  });
};

const getAllMembers = (callback) => {
  const query = 'SELECT * FROM members';
  db.all(query, [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

module.exports = {
  createMember,
  getAllMembers,
};

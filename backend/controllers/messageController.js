const db = require('../db');

const getMessagesWithUser = async (req, res) => {
  const userId = req.user.id;
  const otherId = parseInt(req.params.otherId, 10);
  try {
    const q = `SELECT m.id, m.sender_id, m.receiver_id, m.content, m.created_at,
               u_s.name as sender_name, u_r.name as receiver_name
               FROM messages m
               JOIN users u_s ON u_s.id = m.sender_id
               JOIN users u_r ON u_r.id = m.receiver_id
               WHERE (sender_id=$1 AND receiver_id=$2) OR (sender_id=$2 AND receiver_id=$1)
               ORDER BY created_at ASC`;
    const result = await db.query(q, [userId, otherId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const sendMessage = async (req, res) => {
  const senderId = req.user.id;
  const { receiver_id, content } = req.body;
  if (!receiver_id || !content) return res.status(400).json({ error: 'Missing fields' });
  try {
    const result = await db.query(
      'INSERT INTO messages(sender_id, receiver_id, content) VALUES($1,$2,$3) RETURNING *',
      [senderId, receiver_id, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getMessagesWithUser, sendMessage };
const db = require('../db');

const getContacts = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await db.query('SELECT * FROM contacts WHERE user_id=$1 ORDER BY created_at DESC', [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const addContact = async (req, res) => {
  const userId = req.user.id;
  const { contact_name, contact_email } = req.body;
  if (!contact_name) return res.status(400).json({ error: 'contact_name required' });
  try {
    const result = await db.query(
      'INSERT INTO contacts(user_id, contact_name, contact_email) VALUES($1,$2,$3) RETURNING *',
      [userId, contact_name, contact_email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getContacts, addContact };
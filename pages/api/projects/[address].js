const db = require("../../../database");

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe', db })
}
  
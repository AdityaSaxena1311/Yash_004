const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const userId = "yash_mangal_14092002";
const email = "ym4786@srmist.com";
const rollNumber = "RA2011003030004";

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    const is_success = true;
    const numbers = data.filter(item => !isNaN(item));

    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.reduce((max, current) =>
      current > max ? current : max, ""
    );

    const response = {
      is_success,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    };
    return res.json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

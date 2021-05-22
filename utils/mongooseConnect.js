const mongoose = require('mongoose');
const colors = require('colors');

// Connection to our database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected'.rainbow))
  .catch((error) => {
    console.error(error.message.rainbow);
  });

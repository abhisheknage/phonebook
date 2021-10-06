const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.cvpr6.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = new mongoose.model("Contact", contactSchema);
if (process.argv.length == 5) {
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  });

  contact.save().then((result) => {
    console.log(
      "added ",
      result.name,
      " number ",
      result.number,
      " to phonebook"
    );
    mongoose.connection.close();
  });
} else if (process.argv.length == 3) {
  Contact.find({}).then((result) => {
    result.forEach((element) => {
      console.log(`${element.name} ${element.number}`);
    });
    mongoose.connection.close();
  });
}

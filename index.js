require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const Contact = require("./models/contact");
const cors = require("cors");

// app.use(cors());
app.use(express.static("./build"));
app.use(express.json());

morgan.token("data", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

const contacts = [];
Contact.find({}).then((result) => {
  contact = result;
});

app.get("/api/persons", (req, res) => {
  Contact.find({}).then((result) => {
    // console.log(JSON.stringify(result));
    return res.json(result);
  });
});
app.get("/api/persons/:id", (req, res, next) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((error) => {
      return next(error);
    });
});
app.get("/info", (req, res) => {
  Contact.find({}).then((result) => {
    return res.send(
      `<p>Phonebook has info for ${
        result.length
      } people</p><p>${new Date()}</p>`
    );
  });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndRemove(id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  console.log("my req.body is ", req.body);
  Contact.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      number: req.body.number,
    },
    { new: true }
  ).then((result) => {
    // console.log(
    //   `successfully updated note with id of ${id}`,
    //   JSON.stringify(result)
    // );
    return res.json(result);
  });
});

app.post("/api/persons", (req, res) => {
  //   const id = Math.round(Math.random() * 10000); This function is now taken care of by the database
  const newContact = { ...req.body };

  contacts.push(newContact);
  Contact.create({
    name: newContact.name,
    number: newContact.number,
  })
    .then((result) => {
      console.log("successfull post result is ", result);
      return res.json(result);
    })
    .catch((error) => {
      console.log("post error is ", error.message);
      //   error.name=error.message
      return res.status(400).json(error.message);
    });
});
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error("error is ", error);
  console.error("error message is ", error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

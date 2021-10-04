const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.static("./build"));

morgan.token("data", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

const contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  return res.json(contacts);
});
app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  if (contacts.some((contact) => contact.id == id)) {
    return res.json(contacts.find((contact) => contact.id == id));
  } else {
    return res
      .status(404)
      .send(`<p>Could not find contact with id of ${id}</p>`);
  }
});
app.get("/info", (req, res) => {
  return res.send(
    `<p>Phonebook has info for ${
      contacts.length
    } people</p><p>${new Date()}</p>`
  );
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  if (contacts.some((contact) => contact.id == id)) {
    contacts.splice(
      contacts.findIndex((contact) => contact.id == id),
      1
    );
  }
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const id = Math.round(Math.random() * 10000);
  const newContact = { ...req.body, id };

  if (newContact.name) {
    if (newContact.number) {
      if (!contacts.some((contact) => contact.name === newContact.name)) {
        contacts.push(newContact);
        res.json(newContact);
      } else {
        res.json({
          error:
            "Contact cannot be added as it is already part of the phonebook",
        });
      }
    } else {
      res.json({ error: "Number of contact must not be empty" });
    }
  } else {
    res.json({ error: "Name of contact must not be empty" });
  }
});
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import config from "./config";

const Services = {
  addPerson() {
    let persons = [
      "John Jacob",
      "Hugh Jackman",
      "Mr. Peabody",
      "Zac Effron",
      "Leonardo DiCaprio",
      "Hulk Hogan",
      "Britney Spears",
      "Steven Jacob",
      "Jennifer Aniston",
      "Johnny Depp",
      "Jessica Biel",
      "Liam Hemsworth",
      "Malibu Barbie",
    ];
    var person = persons[Math.floor(Math.random() * persons.length)];
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person }),
    });
  },

  deletePerson() {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  deleteDog() {
    fetch(`${config.API_ENDPOINT}/pets/dog`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  deleteCat() {
    fetch(`${config.API_ENDPOINT}/pets/cat`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  addName(person) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  fetchPeoples() {
    return fetch(`${config.API_ENDPOINT}/people`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  fetchPets() {
    return fetch(`${config.API_ENDPOINT}/pets`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default Services;

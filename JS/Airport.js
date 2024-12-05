"use strict";

(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }

  function Seat(number, category = "e") {
    if (number === undefined) {
      this.number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    } else {
      this.number = number;
    }

    this.category = category.toUpperCase();

    this.getData = function () {
      return this.number + ", " + this.category;
    };
  }

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
    };
  }

  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      let str = "";
      this.passengerList.forEach(function (psg) {
        str = str + "\n\t\t\t\t" + psg.getData();
      });
      return `${getDateString(this.date)} ${this.relation}${str}`;
    };
  }

  function Airport() {
    this.name = "Nikola Tesla";
    this.flightList = [];
    this.addFlight = function (flight) {
      this.flightList.push(flight);
    };
    this.getData = function () {
      let totalPassengers = 0;
      let str = "";

      this.flightList.forEach(function (flight) {
        str = str + "\n\t\t" + flight.getData();
      });

      this.flightList.forEach(function (flight) {
        totalPassengers += flight.passengerList.length;
      });
      let finalString = `Airport: ${this.name}, total passengers: ${totalPassengers}${str} `;
      console.log(finalString);
    };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, seatNumber, category) {
    let person = new Person(name, surname);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
  }

  let airport = new Airport();
  let flight1 = createFlight("Belgrade - Paris", new Date("5.5.2025."));
  let flight2 = createFlight("Belgrade - New York", new Date("4.5.2025."));
  let passenger1 = createPassenger("Djordje", "Stojilkovic", 13, "b");
  let passenger2 = createPassenger("Dragan", "Brkic", 5, "e");
  let passenger3 = createPassenger("Sredo", "Pejovic", 1, "b");
  let passenger4 = createPassenger("Nestor", "Pandurovic", 1, "b");

  console.log(flight1.getData());
  console.log(flight2.getData());

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  airport.addFlight(flight1);
  airport.addFlight(flight2);

  airport.getData();

  //   let person1 = new Person("Stefan", "Milovanovic");
  //   let person2 = new Person("Janko", "Mitrovic");
  //   console.log(person1.getData());
  //   console.log(person2);

  //   let seat1 = new Seat(24, "b");
  //   let seat2 = new Seat(17, "e");
  //   console.log(seat1.getData());
  //   console.log(seat2);

  //   let passenger1 = new Passenger(person1, seat1);
  //   let passenger2 = new Passenger(person2, seat2);
  //   console.log(passenger1.getData());
  //   console.log(passenger2.getData());

  //   let flight1 = new Flight("Beograd - Pariz", new Date());

  //   flight1.addPassenger(passenger1);
  //   flight1.addPassenger(passenger2);
  //   console.log(flight1);

  //   console.log(flight1.getData());
})();

// Pomocna funkcija zbog preglednosti:
function getDateString(date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
}
//

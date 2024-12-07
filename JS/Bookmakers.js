"use strict";

(function () {
  const Continent = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA",
    AUSTRALIA: "AU",
  };

  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getInfo = function () {
      return (
        this.name + ", " + this.surname + ", " + this.formattedDate(dateOfBirth)
      );
    };
  }

  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function () {
      return `${this.country.substring(0, 2).toUpperCase()}, ${
        this.country.odds * this.betAmount.toFixed(2)
      } eur, ${this.person.name} ${this.person.surname} ${calculateAge(
        this.person.dateOfBirth
      )}`;
    };
  }

  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
    this.formattedAddress = function () {
      return `${this.street} ${this.streetNumber}, ${this.postalCode} ${
        this.city
      }, ${this.country.substring(0, 2).toUpperCase()}`;
    };
  }

  function BettingPlace(address) {
    this.address = address;
    this.players = [];
    this.formattedBets = function () {
      let sum = 0;
      this.players.forEach(function (player) {
        sum += player.betAmount;
      });
      return `${this.address.street}, ${this.address.postalCode}, ${this.address.postalCode} ${this.address.city} sum of all bets: ${sum}eur`;
    };
    this.addPlayer = function (player) {
      this.player.push(this.players);
    };
  }

  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.numberOfPlayers = function () {
      let sum = 0;
      this.bettingPlaces.forEach(function (bp) {
        sum += bp.players.length;
      });
      return sum;
    };
    this.addBettingPlace = function (bp) {
      this.bettingPlaces.push(bp);
    };

    this.getData = function () {
      let numberOfBets = 0;
      this.bettingPlaces.forEach(function (bettingPlace) {
        numberOfBets += bettingPlace.players.length;
      });
      return `${competition}, ${this.bettingPlaces.length} betting places, `;
    };
  }

  let adresa = new Address("Serbia", "Belgrade", 11000, "Kneza Milosa", 82);
  console.log(adresa.formattedAddress());

  let country = new Country("Srbija", 0.3, Continent.EUROPE);

  function createPlayer(name, surname, DoB, betAmount, country) {
    let person = new Person(name, surname, DoB);
    return new Player(person, betAmount, country);
  }

  function createBettingPlace(country, city, postalCode, street, streetNumber) {
    return new BettingPlace(
      new Address(country, city, postalCode, street, streetNumber)
    );
  }

  let p1 = createPlayer("Stefan", "Milovanovic", "4.5.1999", 1000, country);
  let p2 = createPlayer("Stefan", "Suvakovic", "4.5.1995", 2000, country);
  let p3 = createPlayer("Stefan", "Jakovic", "4.5.1994", 2000, country);
  let p4 = createPlayer("Stefan", "Dailoski", "8.24.1992", 5000, country);

  let bp1 = createBettingPlace(country, "Beograd", 11000, "Kneza Milosa", 82);
  let bp2 = createBettingPlace(
    country,
    "Novi Sad",
    11000,
    "Bulevar Oslobodjenja",
    82
  );

  bp1.addPlayer(p1);
  bp1.addPlayer(p2);
  bp1.addPlayer(p3);
  bp2.addPlayer(p4);
  bp2.addPlayer(p2);
  bp2.addPlayer(p3);

  let bettingHouse = new BettingHouse("Football World Cup Winner");

  bettingHouse.addBettingPlace(bp1);
  bettingHouse.addBettingPlace(bp2);
  console.log(bettingHouse(getData()));
})();

//Pomocne funkcije van IEF:
function formattedDate(date) {
  let fullYear = date.getFullYear();
  let str = fullYear.toString().substring(2, 4);
  let day = date.getDate();
  let dayStr = "";
  if (day <= 9) {
    dayStr = dayStr + "0" + day;
  } else {
    dayStr = day;
  }
  return `${dayStr}.${date.getMonth() + 1}.${str}`;
}

// console.log(formattedDate(new Date()));

function calculateAge(date) {
  let currentYear = new Date().getFullYear();
  let yearOfBirth = date.getFullYear();
  return currentYear - yearOfBirth + " years";
}
console.log(calculateAge(new Date("06.22.1991.")));
//

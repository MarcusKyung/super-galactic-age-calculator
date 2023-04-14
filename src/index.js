import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from './js/business-logic.js';

function handleAgeForm() {
  event.preventDefault();
  const userAge = parseInt(document.querySelector('#currentAge').value);
  const userAgePast = parseInt(document.querySelector('#pastAge').value);
  const userAgeFuture = parseInt(document.querySelector('#futureAge').value);
  const ageInput = new Age(userAge, userAgePast, userAgeFuture);
  
  const mercuryAgeValue = ageInput.calculateMercury();
  const venusAgeValue = ageInput.calculateVenus();
  const marsAgeValue = ageInput.calculateMars();
  const jupiterAgeValue = ageInput.calculateJupiter();
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  li1.append(`Your age on Earth is ${userAge}`);
  li2.append(`Your age on Mercury is ${mercuryAgeValue}`);
  li3.append(`Your age on Venus is ${venusAgeValue}`);
  li4.append(`Your age on Mars is ${marsAgeValue}`);
  li5.append(`Your age on Jupiter is ${jupiterAgeValue}`);
  document.querySelector('#response').append(li1);
  document.querySelector('#response').append(li2);
  document.querySelector('#response').append(li3);
  document.querySelector('#response').append(li4);
  document.querySelector('#response').append(li5);
  document.querySelector("#response").removeAttribute("class");

  const since = ageInput.calculateYearsSince();
  const li6 = document.createElement("li");
  li6.append(`${since}`);
  document.querySelector('#response').append(li6);

  const until = ageInput.calculateYearsUntil();
  const li7 = document.createElement("li");
  li7.append(`${until}`);
  document.querySelector('#response').append(li7);
}

window.addEventListener("load", function() {
  document.querySelector("#ageInput").addEventListener("submit", handleAgeForm);
});
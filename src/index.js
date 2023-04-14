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
  const pTag = document.createElement("p");
  
  pTag.append(`Your age on Earth is ${earthAgeValue}.`);
  pTag.append(`Your age on Mercury is ${mercuryAgeValue}.`);
  pTag.append(`Your age on Venus is ${venusAgeValue}.`);
  pTag.append(`Your age on Mars is ${marsAgeValue}.`);
  pTag.append(`Your age on Jupiter is ${jupiterAgeValue}.`);
  
  document.querySelector('#earthAge').append(pTag);
  document.querySelector('#mercuryAge').append(pTag);
  document.querySelector('#venusAge').append(pTag);
  document.querySelector('#marsAge').append(pTag);
  document.querySelector('#jupiterAge').append(pTag);


window.addEventListener("load", function() {
  document.querySelector("#ageInput").addEventListener("submit", handleAgeForm);
});
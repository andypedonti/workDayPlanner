/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

const clock = document.getElementById("clock");

function updateTime() {
  const now = moment();
  const humanReadable = now.format("hh:mm:ssa");

  clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();

const day = document.getElementById("day");

function updateDay() {
  const now = moment();
  const peopleReadable = now.format("dddd:hh:mma");
  day.textContent = peopleReadable;
}
setInterval(updateDay, 1000);
updateDay();

//assign a set hour moment to time blocks

const nine = document.getElementById("nine0");

function nineAM() {
  const nineAM = moment().hour(9);
  const nineReadable = nineAM.format("hh:00a");
  nineO.textContent = nineReadable;
}
nineAM();

const ten = document.getElementById("tenO");

function tenAM() {
  const tenAM = moment().hour(10);
  const tenReadable = tenAM.format("hh:00a");
  tenO.textContent = tenReadable;
}
tenAM();

const eleven = document.getElementById("elevenO");

function elevenAM() {
  const elevenAM = moment().hour(11);
  const elevenReadable = elevenAM.format("hh:00a");
  elevenO.textContent = elevenReadable;
}
elevenAM();

const noon = document.getElementById("noonO");
function nooN() {
  const nooN = moment().hour(12);
  const noonReadable = nooN.format("hh:00a");
  noonO.textContent = noonReadable;
}
nooN();

const one = document.getElementById("oneO");
function onePM() {
  const onePM = moment().hour(13);
  const oneReadable = onePM.format("hh:00a");
  oneO.textContent = oneReadable;
}
onePM();

const two = document.getElementById("twoO");
function twoPM() {
  const twoPM = moment().hour(14);
  const twoReadable = twoPM.format("hh:00a");
  twoO.textContent = twoReadable;
}
twoPM();

const three = document.getElementById("threeO");
function threePM() {
  const threePM = moment().hour(15);
  const threeReadable = threePM.format("hh:00a");
  threeO.textContent = threeReadable;
}
threePM();

const four = document.getElementById("fourO");
function fourPM() {
  const fourPM = moment().hour(16);
  const fourReadable = fourPM.format("hh:00a");
  fourO.textContent = fourReadable;
}
fourPM();

//if statement that assigns color based on past present or future
//nine
if (moment().isAfter(moment().hour(9))) {
  console.log(true);
  const nine = document.getElementById("nine");
  nine.classList.add("past");
}
if (moment().isBefore(moment().hour(9))) {
  const nine = document.getElementById("nine");
  nine.classList.add("future");
}
if (moment().isSame(moment().hour(9))) {
  const nine = document.getElementById("nine");
  nine.classList.add("present");
}
//ten
if (moment().isAfter(moment().hour(10))) {
  console.log(true);
  const ten = document.getElementById("ten");
  ten.classList.add("past");
}
if (moment().isBefore(moment().hour(10))) {
  const ten = document.getElementById("ten");
  ten.classList.add("future");
}
if (moment().isSame(moment().hour(10))) {
  const ten = document.getElementById("ten");
  ten.classList.add("present");
}
//eleven
if (moment().isAfter(moment().hour(11))) {
  console.log(true);
  const eleven = document.getElementById("eleven");
  eleven.classList.add("past");
}
if (moment().isBefore(moment().hour(11))) {
  const eleven = document.getElementById("eleven");
  noon.classList.add("future");
}
if (moment().isSame(moment().hour(11))) {
  const noon = document.getElementById("noon");
  noon.classList.add("present");
}

//noon
if (moment().isAfter(moment().hour(12))) {
  console.log(true);
  const noon = document.getElementById("noon");
  noon.classList.add("past");
}
if (moment().isBefore(moment().hour(12))) {
  const noon = document.getElementById("noon");
  noon.classList.add("future");
}
if (moment().isSame(moment().hour(12))) {
  const noon = document.getElementById("noon");
  noon.classList.add("present");
}
//1pm
if (moment().isAfter(moment().hour(13))) {
  console.log(true);
  const one = document.getElementById("one");
  one.classList.add("past");
}
if (moment().isBefore(moment().hour(13))) {
  const one = document.getElementById("one");
  one.classList.add("future");
}
if (moment().isSame(moment().hour(13))) {
  const one = document.getElementById("one");
  one.classList.add("present");
}
//2pm
if (moment().isAfter(moment().hour(14))) {
  console.log(true);
  const two = document.getElementById("two");
  two.classList.add("past");
}
if (moment().isBefore(moment().hour(14))) {
  const two = document.getElementById("two");
  two.classList.add("future");
}
if (moment().isSame(moment().hour(14))) {
  const two = document.getElementById("two");
  two.classList.add("present");
}
//3pm
if (moment().isAfter(moment().hour(15))) {
  console.log(true);
  const three = document.getElementById("three");
  three.classList.add("past");
}
if (moment().isBefore(moment().hour(15))) {
  const three = document.getElementById("three");
  three.classList.add("future");
}
if (moment().isSame(moment().hour(15))) {
  const three = document.getElementById("three");
  three.classList.add("present");
}
//4pm
if (moment().isAfter(moment().hour(16))) {
  console.log(true);
  const four = document.getElementById("four");
  four.classList.add("past");
}
if (moment().isBefore(moment().hour(16))) {
  const four = document.getElementById("four");
  four.classList.add("future");
}
if (moment().isSame(moment().hour(16))) {
  const four = document.getElementById("four");
  four.classList.add("present");
}
$(".textarea").each(function () {
  let key = $(this).attr("id");
  let inputValue = localStorage.getItem(key);
  $(this).val(inputValue);
});
$(".saveBtn").on("click", function () {
  let inputValue = $(this).parent().parent().find("input").val();
  let key = $(this).parent().parent().find("input").attr("id");

  localStorage.setItem(key, inputValue);
});
let localStorageMock = {
  firstName: "andy",
  lastName: "pedonti",
};

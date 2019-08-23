
const linkedinIcon = require('./media/linkedin.png');
const githubIcon = require('./media/GitHub-Mark-64px.png');
const emailIcon = require('./media/mail.png');
const phoneIcon = require('./media/phone.png');

const suitcaseIcon = require('./media/suitcase.png');
const musicIcon = require('./media/music.png');
const moviesIcon = require('./media/movies.png');
const codingIcon = require('./media/people.png');
const foodIcon = require('./media/food.png');

export const contacts = [
	{label: "LinkedIn", src:linkedinIcon, linkText:"LinkedIn", href:"https://se.linkedin.com/in/pelle-alstermo-b6083983"},
	{label: "GitHub", src:githubIcon, linkText:"GitHub", href:"https://github.com/Pelleson"},
	{label: "Email", src:emailIcon, linkText:"Email me!", href:"mailto:pelle.alstermo@gmail.com"},
	{label: "Phone", src:phoneIcon, linkText:"Call me!", href:"callto:+46723395200"}
];

export const hobbies = [
	{src: codingIcon, text:"Coding"},
	{src: suitcaseIcon, text:"Finance"},
	{src: moviesIcon, text:"Movies"},
	{src: musicIcon, text:"Music"},
	{src: foodIcon, text:"Food"}
];

export const educations = [
	{graduationYearMonth:"2017-04-11", educationName:"Microsoft MCSE cloud platform and infrastructure", educationEstablishment:"Firebrand"},
	{graduationYearMonth:"2015-10-15", educationName:"Systemutvecklare med specialisering i agila metoder", educationEstablishment:"Lernia"}
];

export const languages = [
	{language:"Swedish", proficiency: "Native" },
	{language:"English", proficiency: "Excellent" }
];

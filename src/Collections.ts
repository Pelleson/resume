
const linkedinIcon = require('./media/linkedin.png');
const githubIcon = require('./media/GitHub-Mark-64px.png');
const emailIcon = require('./media/mail.png');
const phoneIcon = require('./media/phone.png');

const stocksIcon = require('./media/stocks.png');
const musicIcon = require('./media/music.png');
const moviesIcon = require('./media/movies.png');
const codingIcon = require('./media/people.png');
const foodIcon = require('./media/food.png');
const dancing = require('./media/dancing.png');
const clothes = require('./media/clothes.png');
const books = require('./media/books.png');
const wineIcon = require('./media/wine.png');
const meetupIcon = require('./media/meetup.png');

export const contacts = [
	{label: "LinkedIn", src:linkedinIcon, linkText:"LinkedIn", href:"https://se.linkedin.com/in/pelle-alstermo-b6083983"},
	{label: "GitHub", src:githubIcon, linkText:"GitHub", href:"https://github.com/Pelleson"},
	{label: "Email", src:emailIcon, linkText:"Email me!", href:"mailto:pelle.alstermo@gmail.com"},
	{label: "Phone", src:phoneIcon, linkText:"Call me!", href:"callto:+46723395200"}
];

export const hobbies = [
	{src: codingIcon, text:"Coding"},
	{src: stocksIcon, text:"Finance"},
	{src: moviesIcon, text:"Movies"},
	{src: musicIcon, text:"Music"},
	{src: foodIcon, text:"Food"},
	{src: dancing, text:"Dancing"},
	{src: clothes, text:"Clothing"},
	{src: books, text:"Reading"},
	{src: wineIcon, text:"Wine"},
	{src: meetupIcon, text:"Meetups"},

];

export const educations = [
	{graduationYearMonth:"2017-04-11", educationName:"Microsoft MCSE cloud platform and infrastructure", educationEstablishment:"Firebrand"},
	{graduationYearMonth:"2015-10-15", educationName:"Systemutvecklare med specialisering i agila metoder", educationEstablishment:"Lernia"}
];

export const languages = [
	{language:"Swedish", proficiency: "Native" },
	{language:"English", proficiency: "Excellent" }
];

export const workExperiences = [
	{ jobTitle: "System-developer", company: "Läkarleasing AB", jobDescription: "bla bla bla"},
	{ jobTitle: "Team Lead FrontEnd", company: "Tofindout AB", jobDescription: "bla bla bla"}
]

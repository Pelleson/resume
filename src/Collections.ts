
const linkedinIcon = require('./media/linkedin.png');
const githubIcon = require('./media/GitHub-Mark-64px.png');
const emailIcon = require('./media/mail.png');
const phoneIcon = require('./media/phone.png');

const stocksIcon = require('./media/stocks.png');
const musicIcon = require('./media/music.png');
const moviesIcon = require('./media/movies.png');
const codingIcon = require('./media/people.png');
const foodIcon = require('./media/food.png');
const books = require('./media/books.png');
const wineIcon = require('./media/wine.png');
const meetupIcon = require('./media/meetup.png');

export const contacts = [
	{contactType: "LinkedIn", src:linkedinIcon, href:"https://se.linkedin.com/in/pelle-alstermo-b6083983"},
	{contactType: "GitHub", src:githubIcon, href:"https://github.com/Pelleson"},
	{contactType: "Email", src:emailIcon, href:"mailto:pelle.alstermo@gmail.com"},
	{contactType: "Phone", src:phoneIcon, href:"callto:+46723395200"}
];

export const hobbies = [
	{src: stocksIcon, key:"Economy"},
	{src: moviesIcon, key:"Movies"},
	{src: musicIcon, key:"Music"},
	{src: foodIcon, key:"Food"},
	{src: books, key:"Reading"},
	{src: wineIcon, key:"Wine"},
	{src: meetupIcon, key:"Meetups"},
	{src: codingIcon, key:"Coding"},

];

export const educations = [
	{graduationYearMonth:"2017-04-11", educationDesc:"MCSE", educationEstablishment:"Firebrand"},
	{graduationYearMonth:"2015-10-15", educationDesc:"Lernia", educationEstablishment:"Lernia"}
];

export const languages = [
	{languageId:1, proficiencyLvl: 5 },
	{languageId:2, proficiencyLvl: 4 }
];

export const workExperiences = [
	{ profession: "teamlead-frontend", company: "Tofindout AB", workDescriptionKey: "TFOAB"},
	{ profession: "system-developer", company: "Läkarleasing AB", workDescriptionKey: "LLAB"}
]

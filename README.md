# Team Profile Generator
This is a built Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Table of Contents 
1. [About the Project](#About-The-Project)
1. [Project Links](#Project-Links)
1. [Installation](#Installation)
1. [Project Team](#Project-Team)
1. [Questions](#Questions)

## About The Project
GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information <br/>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML <br/>
THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username <br/>
THEN that GitHub profile opens in a new tab
- WHEN I start the application <br/>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number <br/>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option <br/>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option <br/>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team <br/>
THEN I exit the application, and the HTML is generated

## Project Links
[Repo Link](https://github.com/Kawilder/Team-Profile-Generator) <br>
[Demo Video](https://drive.google.com/file/d/1D8u8ZdKtl4U12jW5yqHCoewrdzCc78KL/view)<br/>

## Instillation
Clone repo from the link in the above section <br/>
In the terminal, type into the command line <br/>
`npm i`<br/>
`node index.js`<br/>
You will be prompted with questions to fill out. Once you have filled everything out for your team and answer `n` to "Would you like to add more team members?". A new HTML file wil be generated in the dist folder.

## Project Team
[Kevin Wilder](https://github.com/Kawilder) <br>

## Questions
<details>
    <summary>Contact</summary>
    kevin_wilde564@yahoo.com
</details>
# The main file of the project

Hello, dear reviewer. Hope you are having a great day! By reading this file you will get more familiar with project, decisions I made during implementation, as well as with specification feedback. Let's go!

## Start the project

### Prerequisites

You need to have `node`, `npm` and `typescript` installed globally. I have `Node v.10.16.3`, `Npm v.6.9.0` and `typescript v.4.3.5` but no need to look for strict versions match.
It's useful to have a git installed, otherwise it's also possible to download zip with the project from the github. 

### Run the code

Run `npm run compile` to compile typescript
Run `npm run serve` to start the server
Then go to `http://localhost:8000/`

## Technical decisions 

Okay, are we going to use any of the most popular frameworks for implementation? After some considerations I chose not to. Let me explain this decision. The most important question a developer should ask him/herself before using some tools - is it required? Will it's usage simplify my life, or the lives of my fellow colleagues who might need to support this app in future? Does it bring necessary architectural benefits?
Angular is definite overkill for such a project, Vue - I don't have experience in it, maybe React? Hmmm.. Still a lot of things to learn in React, plus, is it worth it? I decided - no, and never regret this decision during the implementation cycle (well, to be completely honest, all DOM manipulations are definitely easier within the framework, however, it's a matter of minutes and readability doesn't suffer, I hope).
Going further, I don't even need OOP for this task. Not, really, have you ever considered making OOP from simple html plus a few event handlers?
I understand these might be the most arguable decisions in a whole project, however, I decided to use my time putting more effort on user-related requirements instead of introducing some architecture just to show I am able to do so :)
 
Final technical stack - pure HTML, pure CSS, Typescript, simple Node server (just not to make people double click the html file).


## Functionality considerations

Optional section with **gender**, **date of birth** and **income** information should pass more design and discussion rounds. Gender questions are pretty tricky to ask, there are still no good practices for such a question. Each company should develop its own style of doing it. People don't like to share their income, especially with strangers. What may help, is to ask not for exact numbers, but rather for an interval. Need to consult marketing to develop appropriate intervals which make more sense for marketing purposes. With all these considerations, I decided to skip this section.
 
I've chosen to use **single input field for the address** instead of a few smaller ones. It solves potential future problems with different address formats (if the company expands outside Europe) and helps to avoid user confusion with some fields like "Province/Region", "Address line 2", etc. which are quite common but not always obvious.
 
There are plenty of ways to do **form error handling**. One good practice is to disable the "Submit" button until all fields are filled in correctly. In addition, it is a good idea to help users understand what the application expects. Noone likes to see red everywhere before even starting to fill in the form, so we can validate the field after the user has had some interaction with it (on blur). For accessibility reasons, it is important to remember to use appropriate aria attributes to mark error messages, as well as use labels for all form fields.
 
Small change to the **letter delivery** requirements. It seems more logical to have monthly newsletters without any binding on a particular date (first workday of month). We can call it simply "June newsletter", "July newsletter". The company also can not guarantee letter to arrive on a particular day. We can just let the user know that the letter will arrive shortly after the beginning of the month.


## Gaps

- **Tests**. Right, there are no tests and this has the reason behind. I am not a fan of unit tests (not to step into the discussion, from my previous experience weeks of man-hours could be spent on it with practically zero benefit), and it's not enough time to set up some e2e screenshot tests for example.
- More **responsive design**. Current version supports two different options of screen width, however, in real life we would like to have all possible devices/configurations covered.
- **Browser tab icons**. Same story - ideally more resolutions, icons for iOS and other platforms, etc to be added.
- There are a lot of libraries available with banners for **GDPR-related cookies notifications**, in upcoming future we might want to make the brand-compliant one
- Add server **live-reload**, page **auto-open**.
- **Linters** to check Typescript and CSS code
- While it's not a real gap, the whole **list of countries** in html format looks weird. There are plenly of services providing API for such purposes. But here we againg face simplicity rule - No need to make API call, get all the data, transform it into required structure and then put to html, while we can just put whatever we need directly to html. I mention it in this section, just to say I would decide of how to deal with countries list based on project future. 
 

## Specification feedback

I'd like to share some thoughts and feelings about Save the Icecaps Inc. While the mission company declares is great, and I definitely want to be a part of environment-protecting organizations, there are few things that caught my attention. The whole idea of sending physical newsletters is pretty far from the ecological thinking. It's 2021 and all potential clients have the internet and will be happy to contribute and read news digitally, without creating more trash and carbon print. I also have some doubts about such a business model, where postal delivery sometimes will cost more than donation. But let's hope the strategic planning department did their job well! Another thing is about trying to make a person feel guilty for not paying monthly! While using some marketing tricks is okay, this is definite overplaying which spoils the company's reputation.
In a few words, I still want to save the polar caps, but would do more research on the company, before accepting their offer.
 
Another thought I want to share is about the project itself. Actually, the first solution that came to my mind after reading the spec, is to use [google forms](https://www.google.com/forms/about/). It still looks like a good match for me, to be honest. We just get all the data we want and after the form is submitted the user gets an email with a payment link (for example). Of course, if we are aware about plans to add more and more functionality, branding, etc. it makes more sense to go with own solution (and it also can influence decision to use or not to use a well-known framework to make the application)

## The end

So here we are! Thank you for the patience while reading through this not-so-short readme file. You now know everything I had to share about the task. Hope to hear from you soon! 

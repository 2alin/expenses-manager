## Installation
For the API:
```
cd api
npm install
npm start
```
For the App:
```
cd client
npm install
npm start
```

## Project Description
First of all, thank you for the opportunity and your valuable time reviewing my solution to this challenge. I learned a freaking lot from it and I'm very happy already because of that.

Since the very beginning, I wanted to make this great so I fulfilled all the requirements needed as well as the 'extra' ones. The web app was made using React, Redux and TypeScript, as well as [CSS Modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and SASS for the components styling.

It has the next features:

- It list all the expenses in a structured and organized way, with pagination implemented.

- You can add comments and receipt images for each expense and it updates the expense to display the comment added and lists the receipts saved. It also retrieves saved comments for easy modification.

- Five customized filters: Min/Max Date, Min/Max Amount and Currency Used. Each one can be disabled independently for better user experience.

- A special chart section to display useful information to the user. The first plot changes its values accordingly to the currency selected, but because it's a percentage one, the shape is maintained; you need to hover it, in order to see the changed value.

- Responsive design. The layout adapts to large, medium and small screens through media queries (short coded ones).

- It supports currency and language selector. For the currency, I used a constant list of currency rates to make the conversions (values from a week ago) but it can be easily adjusted to fetch the rates from an third-party API. For the language, because the project was small, I didn't want to install a new library to handle it, so I implemented my own external i18n object with all the translations needed in a structured way and pass fractions of them as props with redux to the respective component.

- It shows suitable messages to the user, when there's an API error (not fetching data), in loading state or the filtered list is empty.

- **Update [15-March]** It allows searching by query, either trying to find matches in the user name or the merchant one. The amazing thing about this new feature is that it's completely in sync with filtering by 'filter options', which means that you can have a more personalized search using both at the same time.

I didn't know TypeScript before the project so I took the first 4-5 days to learn the basics of it and improve my skills on Redux. To be honest, at the beginning I had my doubts about the advantages of using TypeScript, but in the middle of the project I realized how helpful it was: providing useful auto completion on real time and notifying me when I used wrong values in order to avoid bugs even before compiling. I kinda like it now.

Then I took around 6 days to create and polish the web application. It was an exciting journey and while working on it, I frequently changed the structure of the project or the components themselves to improve future maintenance and keep things organized. The hardest parts to implement were TypeScript and Redux at the beginning, but something curious happened: the same project structure helped me to learn and understand them better. **Update [15-March]** It was also tricky to find the right way to implement the 'search by query' and keep it in sync with 'filter by options', but at the end it was all awesome!

About what I'm most proud, I specially enjoyed implementing language/currency conversion and the user filters feature (**Update [15-March]** specially searching by query). But what I loved the most was the whole journey of creating, fixing, improving and implementing new ideas in this project.


Thank you so much, again. :blush:

## Video
Follow the next link to see the app features on action:
https://www.youtube.com/watch?v=H09dBKVesC4

**Update [15-March]**
And this other link to see how searching by query and by options are in sync:
https://www.youtube.com/watch?v=hgsYAb0AWOQ
 
---

<details>
 
<summary>Click here to expand the original challenge's instructions</summary>

# Front-end challenge
Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation.

## Functional requirements
- User can list expenses
- User can add a comment on an expense
- User can filter on expenses (client side filters)
- User can add a receipt image on an expense

## General requirements
A single page application using a modern JS library/framework including:
- A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- CSS can be written using PostCSS, SASS, LESS or similar higher-level language
- The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?

## Nice to have
Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).
- Responsive design
- Implement with a state management library (Redux, Mobx, VueX, ...)
- Implement solution in TypeScript
- Localization: support for multiple languages (English, French, ...)

## What we're looking for
- Using high-quality existing libraries or small amounts of custom code
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

</details>

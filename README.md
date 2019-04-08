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
## Video
Follow the next link to see the app features on action:
https://www.youtube.com/watch?v=H09dBKVesC4

**Update [15-March]**

And this other link to see how searching by query and by options are in sync:
https://www.youtube.com/watch?v=hgsYAb0AWOQ

## Project Description
I've developed the front end of this app, using TypeScript, ReactJS, Redux, ChartJS, CSS Modules and SCSS. 
Expenses Manager has the next features:


- It list all the expenses in a structured and organized way, with pagination implemented.

- You can add comments and receipt images for each expense and it updates the expense to display the comment added and lists the receipts saved. It also retrieves saved comments for easy modification.

- Five customized filters: Min/Max Date, Min/Max Amount and Currency Used. Each one can be disabled independently for better user experience.

- A special chart section to display useful information to the user. The first plot changes its values accordingly to the currency selected, but because it's a percentage one, the shape is maintained; you need to hover it, in order to see the changed value.

- Responsive design. The layout adapts to large, medium and small screens through media queries (short coded ones).

- It supports currency and language selector. For the currency, I used a constant list of currency rates to make the conversions (values from a week ago) but it can be easily adjusted to fetch the rates from an third-party API. For the language, because the project was small, I didn't want to install a new library to handle it, so I implemented my own external i18n object with all the translations needed in a structured way and pass fractions of them as props with redux to the respective component.

- It shows suitable messages to the user, when there's an API error (not fetching data), in loading state or the filtered list is empty.

- **Update [15-March]** It allows searching by query, either trying to find matches in the user name or the merchant one. The amazing thing about this new feature is that it's completely in sync with filtering by 'filter options', which means that you can have a more personalized search using both at the same time.

### Run

Start application:

    `yarn run serve`

Start express server:

    `yarn run start`

---

### Goal

Your assignment is to implement a TripPlanner Widget & dashboard that records a user's likes on destination articles and a subsequent dashboard to manage their likes.

Fork this repo to start the test in your own time, allow a couple of hours

### More detailed brief

VisitScotland's users are requesting some way to keep a note of the articles and destinations they like the sound of so that they can create a simple itinerary
for their next trip to Scotland.  The planning, UX and development team have agreed on a basic MVP which leverages the user's browser to store their choices
in localStorage or similar, so that the user can return to the site in the future and find & amend their choices.
Use the basic wireframes at https://mydraft.cc/bpbd06d1ifn2ps5ua8kg and https://mydraft.cc/bpbd3rl1ifn2ps5ua8lg

    Implement assignment using:
    -   Language: **JavaScript**
    -   Framework: **Vue** (Optional)
    -   Local Server/Static generator of your choice e.g Express to serve up the example data in /data

### App Development Requirements
    -   Node (current lts version)
    -   yarn
    -   Localforage (an API wrapper for localStorage, IndexedDB and WebDB)  - ```yarn  add localforage``` https://localforage.github.io/localForage/

### Tasks

- Try and make each commit as close to each defined task below (there are some exceptions to this so don't worry too much):

    -   Install dependencies and mock the articles DB routing - /articles and /article/:id
    -   Get the list of articles and render article titles and snippet content to the Home page
    -   Add a placeholder liked/unliked trip planner widget showing which articles in the list have been liked
    -   Add an article detail page with appropriate calls to the API
    -   Componetize the tripplanner widget to make as much of the functionality reusable in the header navigation as possible
            e.g same icon component for article like button and number of likes graphic in header
    -   Add functionality to mark an article as liked into the localforage store so this persists on page reload - what happens if the article title changes in future?
    -   Change the UI on this like action to make it clear an article has been liked, say colour change or a simple animation, a counter update
    -   Code functionality to allow a user to unlike an article (effectively deleting an entry from the plan-my-trip localforage list) and change the UI appropriately
    -   Build out the project to the wireframes as laid out in 'More Detailed Brief' section
    -   Build a dashboard view where a user can delete liked articles from a list of the titles
    -   Make sure that linking to detail pages as well as bookmarking these in the TripPlanner works as expected
    -   Run an accessibility and performance test - note the results before and after refactoring for discussion

### Evaluation Criteria

-   **JavaScript** best practices
-   Routing implemented (list, detail)
-   Bonus: Use any assets you like creatively
-   Bonus: Challenge the wireframes and make your own suggestions for the MVP
-   Bonus: sharing lists via social media
-   Bonus: Progressive Web App treatment. Can you make the app work offline for short periods?

### General notes

Please organize, design, test and document your code as if it were
going into production - then push your changes to the master branch. After you have pushed your code and are happy with it, submit to allan.henderson@visitscotland.com

Enjoy!

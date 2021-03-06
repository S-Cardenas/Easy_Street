# EasyStreet

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

EasyStreet is a web application inspired by StreetEasy built using Ruby on Rails and React.js. EasyStreet allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete listing for NYC Real Estate Properties
- [ ] Search properties based on filters (for-sale, for-rent, location, # rooms)
- [ ] View details of the property (description, rental history, building facts)
- [ ] Save (/bookmark) properties of interest


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Property Model, API, and basic APIUtil (1.5 days)

**Objective:** Properties can be created, read, edited and destroyed through
the API.

- [ ] create `Property` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`PropertiesController`)
- [ ] jBuilder views for properties
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Properties can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each property component, building out the flux loop as needed.
  - [ ] `PropertyPictures`
  - [ ] `PropertyInfo`
  - [ ] `GoogleMapsLocation`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Bookmarks (1 day)

**Objective:** A bookmark belongs to a user and references a property. They can be viewed by Users. Properties
can have multiple bookmarks.

- [ ] create `Bookmarks` model
- build out API, Flux loop, and components for:
  - [ ] Bookmarks CRUD
  - [ ] adding a bookmark requires a property
  - [ ] viewing bookmarks by property location
- Use CSS to style new views

Phase 3 adds organization to the Properties. Bookmarks belong to a user and property, which has its own `Index` view.

### Phase 6: Search Component (1.5 days)

**Objective:** Create a Search Component that searches properties based on filters.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each search component, building out the flux loop as needed.

### Phase 7: Allow Complex Styling of Bookmarks (0.5 days)

**objective:** Enable complex styling of properties.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

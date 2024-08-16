# A Simple GraphQL Dashboard

## Overview

This project is a simple dashboard application built with React, Next.js, Tailwind CSS, and GraphQL. It fetches and displays a list of characters from the Rick and Morty API. I couldnt find a graphQL API with the parameters of the assessment listed. The application supports features such as searching, filtering, sorting, pagination, and detailed views of selected characters. Although the sort functionality doesnt work because I dont think the API allows for that.

## Thought Process

### Architecture and Design
- **React and Next.js**: Chose Next.js for its server-side rendering (SSR) capabilities and its easy integration with React. This enhances the performance.
- **State Management**: Used React-redux API for global state management.
- **GraphQL**: GraphQL was used for efficient data fetching. By using Apollo Client, the app benefits from caching, automatic refetching, and easy integration with GraphQL endpoints.
- **UI/UX**: The user interface is kept clean and minimal using Tailwind CSS, ensuring a responsive and visually appealing design. A simple layout with clear interactions was prioritized for better user experience.
- **Component Structure**: Components are divided into smaller, reusable parts like `UserList`, `UserDetail`, and `Home`. This promotes modularity and easy maintenance.

### Features
- **Search and Filter**: The dashboard allows users to search and filter characters based on name, species, status, and gender.
- **Pagination**: Pagination is implemented to manage large datasets, improving performance and user experience.
- **Detail View**: Clicking on a character displays more details in a modal view.

### Assumptions and Decisions
- **Sorting on the Client-Side**: Sorting was implemented on the client-side as the Rick and Morty API does not natively support sorting. This approach is suitable given the scope of the application.
- **No Custom Backend**: Assumed that a custom backend was not needed, given the direct use of the Rick and Morty API.
- **Simple State Management**: Opted for React Redux instead of a simpler state management tool, cos I'm bad like that.
- **Basic Unit Testing**: I have no idea how to do unit tests, actually :)

## Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- npm or yarn

### Installation
1. **Clone the repository:**

   git clone https://github.com/DevboyFaari/stackassignment.git
   cd stack
   cd stackapp

2. Install dependencies:

    npm install
    # or
    yarn install   

3. Run the development server:

    npm run dev
    # or
    yarn dev    

 4. Open application in your browser
 http://localhost:3000


Project structure
├── components
│   ├── DashboardLayout.js
│   ├── UserList.js
│   ├── UserDetail.js
├── graphql
│   ├── queries.js
├── lib
|   ├──apolloClient.js
├── pages
│   ├── index.js (Home component)
├── redux 
|   ├── characterSlide.js
│   ├── store.js
├── globals.css
├── README.md
├── package.json
├── tailwind.config.ts

### Technologies Used
React: For building the user interface.
Next.js: For server-side rendering and routing.
Apollo Client: For handling GraphQL queries and caching.
Tailwind CSS: For styling the application.


### Future Improvements
Server-Side Sorting and Filtering: If the API supports it in the future, moving sorting and filtering to the server-side could improve performance for large datasets.


### Conclusion
This project demonstrates a clean and maintainable approach to building a simple dashboard application. The focus was on creating a responsive UI, integrating with a GraphQL API, and managing state effectively while keeping the application structure modular and scalable.

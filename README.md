This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Commands

### Run `npm start`

to run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Run `npm test`

to run basic tests.

# General Notes

### Component Structure

Rather than having a more modular `<SinglePost />` component—which renders only its contents when displayed among other posts (i.e., at `/posts`), and then renders both its contents and its associated comments when displayed by itself (i.e., at `/posts/:id`)—I decideed to create a `<FullPost />` component that would independently serve this latter purpose. I made this decision because, by fetching and rendering both the post's contents and its associated comments in a single component, an individual post becomes shareable via URL. This would not be the case if the post's contents were passed to its parent `<Link />` component's `state` prop. The tradeoff of this is less of a modular/SPA feel to the application.

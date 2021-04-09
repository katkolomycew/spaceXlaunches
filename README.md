# spaceXlaunches

Take Home Challenge for xDesign. The task, stories, and considerations can be found in the `techTest.md` file in the `assets` folder.

## Features to add in the future:
There are also the features that I would have added had time permitted it. The features are as follows:

- Full Page Responsiveness
    The application is currently responsive from screen width 1000px and upwards, i.e. it will not work optimally for smaller screens and devices. Most components themselves are responsive already, especially the components imported from the `react-bootstrap` package, but would still need to be resized and shifted in position to fit a much smaller device such as a phone. I normally add CSS media queries as well as focus on the future responsiveness of my component from the start, out of consideration that not everyone always has a laptop or a computer handy should they wish to open an application that I am working on, but in this case due to time constraints I decided to focus on the responsiveness of the components alone and sacrifice the media queries to other – what I considered – more important features which needed to be implemented prior to me handing over this project.

- Unit Testing
    If I were to start this application over, I would have implemented unit tests first before anything else, as I had planned out the project prior to building it and thus already roughly knew which functions would be needed. For the same reason as above of time constraint, I decided to focus on the rest of the application first and then implement the unit tests towards the end. However, as I reached the end of the week I acknowledged that there would not be enough time for me to implement a full unit testing architecture. Instead, I decided to implement propTypes for type safety and also to add more accessibility best practices in the project. It is important for me as an engineer that my applications have at least one type of safety measures (in this case type safety), but it is just as important that my applications are accessible to all kinds of users.

- React Redux Actions and Reducers
    Had I been working on this application as a "real" client project and had I known that the application would keep growing in the future, I would have implemented Redux actions and reducers for its state and functionalities for better performance and manageability. Redux was not used in the existing React projects in my previous company, but I had planned to introduce it to the front-end of the project I was put in charge of leading, and I recently brushed up on my Redux knowledge through a Build a Burger project. I did not implement Redux actions and reducers here partly due to time constraint and partly due to not considering it necessary for an application this size. 

This project is hosted at https://katkolomycew.github.io/spacex-launches/.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

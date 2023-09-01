##Overview of the Application:

Approach to the Problem:
The goal of this application is to create a quiz application that meets specific requirements, including layout, navigation, question handling, and a timer. The approach to solving this problem involves building individual React components and integrating them to meet these requirements.

Components Built:

StartPage: This component displays a start page where the user is asked to submit their email address. It provides an input field for email and a button to start the quiz.

Timer: The Timer component displays a countdown timer that counts down from 30 minutes. When the timer reaches zero, it triggers the submission of the quiz and displays a toast error message using react-toastify.

QuestionPage: This component displays each question in the quiz one at a time. Users can select their answers using radio buttons and click the "Next" button to navigate to the next question. The component ensures that users can only navigate if they select an answer.

OverviewPanel: The OverviewPanel component displays a list of question numbers. It marks the questions that the user has visited and those they have attempted. Users can click on a question number to navigate directly to that question.

ReportPage: After completing the quiz or when the timer ends, users are directed to the ReportPage. This component displays a report of the quiz, including each question, the user's answer, the correct answer, and whether the user's answer was correct or incorrect. It also shows the total correct score. The report is presented in a table format with centered content and custom styling.

Redux Store: Redux is used to manage the application's state. The store includes information such as the user's email, current question index, quiz questions, user answers, and the total score. Redux actions are used to initialize questions, submit answers, and submit the entire quiz.

The application follows a structured flow where users start on the StartPage, proceed to answer questions on the QuestionPage, have an overview of their progress with the OverviewPanel, and view a detailed report on the ReportPage. The Timer ensures that the quiz is automatically submitted when the time limit is reached.

The application utilizes various React features, including hooks, conditional rendering, and routing with React Router. Additionally, it integrates react-toastify for displaying toast messages, enhancing the user experience.



##Challenges Faced and How They Were Overcome:

State Management with Redux: Managing application state, including user answers and scores, using Redux was initially challenging. To overcome this, the Redux store was carefully designed with appropriate actions and reducers to handle state updates accurately. Thorough testing and debugging were performed to ensure Redux worked as expected.

Conditional Navigation: Implementing conditional navigation, especially preventing users from advancing without selecting an answer on the QuestionPage, required careful logic. This was overcome by checking if an answer was selected before allowing navigation. Error alerts were used to guide users when they hadn't selected an answer.

Styling and Layout: Achieving the desired layout and styling, such as aligning components in the center and customizing the appearance of the timer and report page, required CSS adjustments. The challenges were addressed through CSS modifications and ensuring proper class names and styles were applied.

Toasting with react-toastify: Integrating react-toastify to display toast messages required proper configuration. To overcome this, the library was installed, and the ToastContainer component was added at the root level of the application. Toast messages were triggered at specific events, such as when the timer reached zero.

Navigation and Routing: Ensuring smooth navigation between components and handling routes correctly was challenging. React Router was used to define routes, and the useNavigate hook was employed to programmatically navigate between pages. Testing and debugging were key to resolving any routing issues.

Custom Component (OverviewPanel): Implementing a custom component like the OverviewPanel, which displays question progress, involved creating a dynamic UI element. It was addressed by mapping through questions and marking them as visited or attempted based on user interaction.

Dynamic Content (ReportPage): Displaying a dynamic report of user answers in a table format on the ReportPage was challenging. It was overcome by mapping through user answers and rendering them within a table structure, ensuring proper alignment and styling.

Testing and Debugging: Throughout the development process, thorough testing and debugging were essential to identify and resolve issues promptly. The React DevTools extension and console debugging were invaluable in this regard.

Overall, challenges were addressed through a combination of careful design, logic implementation, CSS adjustments, and continuous testing and debugging. Each challenge provided an opportunity to enhance problem-solving skills and improve the application's functionality and user experience.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

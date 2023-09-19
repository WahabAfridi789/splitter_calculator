# Tip Calculator App

This is a Tip Calculator web application built with Next.js. The app allows you to calculate the correct tip and total cost of the bill per person, making it easy to split the bill and leave a tip. It features a responsive design to ensure an optimal user experience on different screen sizes.

![Tip Calculator App](screenshot.png)

## Technologies Used

- **Frontend Framework**: Next.js
- **Design Framework**: Tailwind CSS

## Why Next.js?

I chose Next.js as the frontend framework for this project for several reasons:

1. **Server-Side Rendering (SSR)**: Next.js provides built-in support for SSR, which improves SEO and performance by rendering pages on the server and sending them to the client. This is crucial for a web app that may require good search engine visibility.

2. **Routing**: Next.js has a straightforward and flexible routing system that allows for easy navigation between pages, making it suitable for single-page applications (SPAs) like this tip calculator.

3. **Developer Experience**: It offers a great developer experience with features like fast refresh, automatic code splitting, and easy deployment options.

4. **Vercel Integration**: Next.js is developed by Vercel, and it integrates seamlessly with the Vercel platform, simplifying deployment and hosting. This is why I chose to deploy the app on Vercel.

## How to Run the App

To run the Tip Calculator app locally on your machine, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/WahabAfridi789/tip-calculator.git

2. **Navigate to the Project Directory**:

   ```bash
   cd tip-calculator

3. **Install Dependencies**:

   ```bash
   npm install
   #or
   yarn install

4. **Run the Development Server**:

   ```bash
     npm run dev
     # or
     yarn dev

### Open Your Browser

The app should now be running on http://localhost:3000. Open your web browser and access this URL to use the Tip Calculator locally.



## Live Demo

You can also try out the live demo of the Tip Calculator app deployed on Vercel:

[Live Demo]((https://splitter-calculator-next-js.vercel.app/))

## How to Use the App

To use the Tip Calculator app effectively:

1. **Enter the Bill Amount**:

   Input the bill amount in the "Bill" input field.

2. **Select Tip Percentage**:

   Choose a tip percentage from the provided options (5%, 10%, 15%, 20%, 30%) by clicking the corresponding buttons. Alternatively, you can click the "Custom" button to enter a custom tip percentage.

3. **Enter Number of People**:

   Input the number of people sharing the bill in the "Number of People" input field.

4. **Calculate**:

   The app will automatically calculate the tip amount and total cost per person based on your inputs.

5. **Error Handling**:

   If you enter a negative number of people or a negative bill amount, the app will display an error message, indicating that the tip amount must be positive.

Enjoy the convenience of splitting bills and leaving tips with ease using the Tip Calculator app! 🧾💰

Feel free to contribute to this project or report any issues you encounter. Happy coding! 😊🚀

   

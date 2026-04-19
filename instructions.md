Overview
This is the final week of the chamber of commerce project. Finish the website by designing and developing the chamber discover page which promotes the area in which your chamber of commerce is located. The purpose of the page is to provide factual and representative information about the area including demographics and features that appeals to prospective chamber members and visitors.

Instructions
For this assignment you will use grid-template-area (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-areas) to build a responsive layout for small, medium and large screens.
Use your site page template to create a new page named "discover.html" in the chamber folder.
As always, preserve the header, navigation, and footer content.
Use your existing CSS and then add or modify rules and declarations as needed. Some of you will choose to add a medium.css file with a media query.
Choose 8 items of interest in your area.
Locate and resize a photo for each item of interest. Photos should be around 300px wide by 200px tall and saved using the webp format
Create or find a name, address, and description for each of the 8 items of interest in your area.
Store this information in a JSON formatted file with a .mjs extension in the "data" folder of your site. Remember to include an export statement.
In the head of your page when you link to your script, remember to add type="module" so you can import the information for the 8 items of interest.
Build 8 cards using an h2 for the title, a figure tag for the image, an address tag for the address, a paragraph for the description, and a button titled "learn more".
Use named grid areas to layout the cards differently for small screens (320px to 640px wide), medium screens (641px to 1024px) and large screens (1025px and above). This is NOT the same as simply creating multiple columns as the screen gets wider.
Watch: Using Grid Areas Part 1 (https://video.byui.edu/media/t/1_s9skqf9y) - Using AI to generate JSON.
Watch: Using Grid Areas Part 2 (https://video.byui.edu/media/t/1_h1nf6n1e) - Implementing Grid Areas

Using localStorage to store the last visit date by the client, display one of three possible messages about the time between page visits in the content area.
There are many options for the placement of visitor information on the page. Consider the purpose and user experience in your selection. Some options include an overlay or message area that can be closed, inline into the content area, or the footer.

If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
Otherwise, display the number of days in a message like this: "You last visited n days ago.", where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days".
Consider using the localStorage object to store the date of the last visit to the page. This will allow you to compare the current date to the last visit date. In addition, storing the current date usingDate.now() allows the date to be stored in milliseconds.
Example Code: Date Math (https://codepen.io/BYU-Idaho/pen/XJWYxwO) - Demonstration code to calculate and display the days until Christmas

Use a CSS property effect whenever a user hovers over the images in the gallery with their mouse. This effect design is your choice. Do not apply this effect to the images in the mobile view.
Example Code: CSS Image Effects (https://codepen.io/BYU-Idaho/pen/raBqbbq) - Effects such as blends, shadows, opacity, filters, etc.


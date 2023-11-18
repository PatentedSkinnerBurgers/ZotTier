# ZotTier

## Inspiration

Tier lists usually show the opinion of only a single individual, resulting in tier lists being strongly biased. So, we decided to create a website that aims to reduce bias shown in tier lists by allowing users to submit their own rankings for tier lists. The average ranking for each tier list item is computed, and this average ranking is what is displayed for all users to see. Being UCI students ourselves and wanting to create a platform meant for Anteaters, we centered the tier lists on topics related to UCI.

## User Flow

When users enter the website, they are greeted with a landing page. After clicking on the button on the landing page, they are brought to the page that displays all of the tier lists available to submit rankings for. After selecting a tier list, users are shown the current average rankings for each tier list item. Users can choose to submit their own tier list items rankings by pressing on the appropriate button. On the voting page, users drag and drop tier list items into the tiers that they want to, and by pressing the submit button, these rankings are sent to the site's database. The users are brought back to the viewing page for the tier list they just voted on with their submission factored into the average rankings.

## Technologies Used

The front-end was created using TypeScript, React, and Tailwind CSS. The back-end was created using Express.js, MySQL, JavaScript, Node.js, and Python. Express and Node were used to create an API that communicates with the front-end, allowing for the front-end to get the data used to display the tier lists on the website and allowing for user-created rankings to be submitted to ZotTier's database.

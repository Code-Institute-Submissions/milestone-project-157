<h1 align="center">Milestone Project 2 - Rubber Ducking</h1>

[View the live project here.](https://iainmchugh.github.io/milestone-project-2/)

![Rubber Ducking](https://github.com/IainMcHugh/ms2/blob/master/assets/images/mockup.png?raw=true)

Rubber Ducking is a tool that enables you to figure out your problems yourself. Based on the widely used concept of 'rubber-ducking' where an individual talks through a problem with an inanimate object until they stumble upon the solution themselves. This website encapsulates that idea via a message chat with a rubber duck character, that will give responses to help the user on their way to realisation. The site itself aims to be slick and modern on the eye, while providing seemless but impressive functionality.

![Video Demo](https://github.com/IainMcHugh/ms2/blob/master/assets/images/readme-video.gif?raw=true)

## User Experience (UX)

- ### User stories

  - #### Site Visitor Goals

    1. As a site Visitor, I want a clear understanding of the purpose of this particular website.
    2. As a site Visitor, I want a smooth experience when using the website.
    3. As a site Visitor, I want to be able to get the same experience no matter what device I am using.
    4. As a site Visitor, I want clarity on the functionality available within the site.
    5. As a site Visitor, I want the website pathway to be obvious to me so I know how to fully utilise the site.

- ### Design
  - #### Colour Scheme
    - I opted for a minimalist design flow within this site. The reason behind this was to be able to clearly emphasise the various functionality available to the user. The two prominant colours within the background are ![#e1f1ff](https://via.placeholder.com/15/E1F1FF/000000?text=+) `#E1F1FF` and simple ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `White`, allowing the 'traffic light' colours of the main function buttons to pop. I also included a dark mode toggle [(design reference here)](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch), which darkens the large background panels for an easier viewing experience.
  - #### Typography
    - The Scada font is the font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. I found Scada to have great visual clarity even at small font sizes, which is a necessity within a mobile messaging application. It also has a modern high definition feel to it, which is in keeping with the rest of the site's design.
      <a href="https://fonts.google.com/specimen/Scada">Scada</a> - Google Fonts
  - #### Imagery
    - As the site aims to be visually simplistic there is little direct imagery, with the sole image being that of the rubber duck character who is at the center of the website's idea. I have intentionally designed the various interactive part of the site with imagery in mind. For example, I have used icons for the send message and information buttons. The start button and three main function buttons try to capture a keyboard key design.
  - ### Animation
    - I have tried to tie most of the site's visual changes together with subtle animations so as to keep the overall flow seemless. As mentioned previously, the main function buttons on the site use animations to simulate the design of an actual button. The messages that appear on the message panel as well as the two modals on the site pop onto the page to cement an overall interactive feeling within the site. The dark mode toggle is also purposefully gradual for an optimal experience.

* ### Wireframes

  - Figma Wireframe - [View](https://www.figma.com/file/lEUOBlfLvZXljpePSHO0Tn/RubberDucky)

## Features

- Multiple layouts to accomodate various screen sizes

- Fully functional messaging application

- Message responses being generated from 3rd party API responses

- Dark mode toggle

- Information modal for overview of available functionality

- Downloadble chat history in JSON format through the use of local storage

- Custom 404 error page handling

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to import the 'Poppins' font into the style.css file which is used on all pages throughout the project.
2. [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
3. [jQuery:](https://jquery.com/)
   - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
4. [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
5. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
   - Photoshop was used to create the logo, resizing images and editing photos for the website.
6. [Figma:](https://figma.com/)
   - Figma was used to create the [wireframes](https://github.com/) during the design process.
7. [Visual Studio Code:](https://visualstudio.com/)
   - VSCode was the IDE I used to create, update, and maintain this project.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fiainmchugh.github.io%2Fms2%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fiainmchugh.github.io%2Fms2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  (Note: The following error may show `Property backdrop-filter doesn't exist : blur(2px)`, however this is a valid css property that is available in up to date versions of most modern browsers - see [caniuse backdrop-filter](https://caniuse.com/?search=backdrop-filter))

### Testing User Stories from User Experience (UX) Section

- #### Site Visitor Goals

  1. As a site Visitor, I want a clear understanding of the purpose of this particular website.

     1. When the user clicks the start button, they are presented with a messaging interface which is straight forward to interact with.

  2. As a site Visitor, I want a smooth experience when using the website.

     1. As the main screen is rendered entirely with javascript, after the initial loading bar has completed the client-side nature of the site means all interactions will be almost instantenous.
     2. Attention has been given to using consistent padding and margins throughout the site, while aiming to acheive symmetry where possible

  3. As a site Visitor, I want to be able to get the same experience no matter what device I am using.

     1. The website has a fully responsive design, on mobile the message panel takes up the entire screen so it has the feel of a normal messaging app, with miniature versions of the functional buttons within the header. On larger screens the site is split into two columns, where the left is predominantly for typing and the right for clicking.

  4. As a site Visitor, I want clarity on the functionality available within the site.

     1. When the main page first loads, the user is provided with two staggered information messages from the duck. These give a quick rundown on the main functionality available to the user.
     2. An information modal has also been created, to further explain in detail to the user the various options available to them and how they work, as well as a general overview of the sites purpose.

  5. As a site Visitor, I want the website pathway to be obvious to me so I know how to fully utilise the site.

     1. When the user has finished their session, they can click the green button to open the success modal. From here they have the option of either completing their session, or to download the chat logs. In both cases this will reset the message panel.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Jasmine Unit Testing

- Jasmine unit tests were written to test two functions involved in storing the message logs in local storage. In order to test this functionality, the main local storage method calls were spyed on and there functionality mocked. Before each test local storage is essentially reset to remove test contamination. The first test describes calling the update chat history, where a mock message is passed to the function and the set item call is spyed on. (Note: This test is flaky as part of the object being tested involves a live timestamp, in order to fix this I would look for a way to mock the timestamp). The second test describes the download chat history method, where a href ready string should be returned to the download anchor tag on the success modal. For this test the local storage is mocked with two message logs, and the format of the returned string is tested.

### Known Bugs

- There is an issue where if enough messages have been sent that the message panel becomes scrollable, a new message being sent will not be immediately visible as the user will need to scroll down to see this. To fix this I would create a function that will scroll to the bottom of any scrollable container element that it is passed, and then call this function on each message being sent.

- I tested the functionality of various messaging apps to find a workable solution for the message input box. The solution I have to recreate this behaviour stemmed from a useful stackoverflow post (mentioned in credits), where a sufficient amount of text being entered causes an overflow scroll to kick in. However, there is an issue where the text area does not resize to it's original dimensions after clearing when a message is sent. I would try to fix this by implementing changes at the point after a message is sent and the text area is cleared.

- I had always thought it would be a cool feature to download the message history but upon researching I found without a node like setup it would be difficult as it requires access to the device's OS. A workaround was to encode the messages directly into the href of an achor tag, however the best solution I could get to work for this introduces extra escape characters. I enjoyed working on this part as I learned about encoding URI components but would require further investigation as to how to clean up the JSON file downloaded.

## Future Features

- Use caching to restore a users active messages for the scenario where they clost the tab and reopen at a later point in time.

- Add more text input features, such as bold, italic, underline, as well as embedding links or having coding snippets (for users working out a coding problem).

- Set up a backend to store a users previous sessions, so they could have a listing of all previous discussions from within the site instead of having to download and storing locally.

- Add unit tests as well as end-to-end testing with jest testing library to further my confidence in the overall site reliability.

- I would like to add a toast that fires when the user has completed their session, as well as when they have completed downloading the message logs.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://iainmchugh.github.io/milestone-project-2/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/IainMcHugh/milestone-project-2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/IainMcHugh/milestone-project-2/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone git@github.com:IainMcHugh/milestone-project-2.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone git@github.com:IainMcHugh/milestone-project-2.git
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Running tests

In order to run Jasmine tests, simply open the `SpecRunner.html` file in Google Chrome, and the tests will run automatically.

## Credits

### Code

- [CSS scollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar): This helped me a lot when trying to customise the scrollbar within the text area on the message panel, which was a vital requirement within the design.

- [Article by Valentino Gagliardi](https://www.valentinog.com/blog/link-download/): This extremely helpful method allowed me to embed the entire JSON chat logs within an anchor tag's href attribute, making it downloadable by the user.

### Content

- All content was written by Iain McHugh.

- [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) While researching the idea I came across this article where I learnt a similar feature used to exist on stackoverflow! This gave me further inspiration to push ahead with the idea.

- [Multi-mockup](https://techsini.com/multi-mockup/): A great resource for generating mockup displays for the site on various different screens and devices. Used for the cover photo of this readme file.

- [Mocking localStorage](https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests): This stackoverflow post helped me to mock local storage within my testing spec file.

### Media

- All images were created/edited by the developer or sourced from image websites where Creative Commons license is active.

- [Site for icons](https://www.flaticon.com/)
- [The Rubber Duck image source](https://www.pngegg.com/en/png-zmwpv)

### API

- [Quotes](https://quotes.rest/): This is the open API I used to generate random quotes.

- [8ballAPI](https://8ball.delegator.com/): This is the open API I used to generate eight ball like responses to a users question.

### Testing

- [Jasmine](https://cdnjs.com/libraries/jasmine): Inspired by the course content, I learned how to include, create, and run tests to complement my JavaScript functions to further my confidence in their ability to perform as expected on site.

### Acknowledgements

- I would like to thank my mentor, Oluwafemi. With each mentoring session I feel I am learning more and more about how to approach web projects, and much of this is down to your guidance. I definitely feel that following your advice has allowed me to acheive a high quality in my projects thus far.

- I also want to thank Code Institute in providing me with information and guides on how to structure my project. There is always new things for me to learn with JavaScript and I have loved every minute of the course content.

- Again I would like to thank the Slack community associated with Code Institute. It is a great way to find inspiration and feel as part of a community who share a similar mindset and goal.

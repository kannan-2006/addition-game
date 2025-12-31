Here’s a web-based game that tests your addition skills and gives you instant feedback. It’s simple, interactive, and built to show off the basics of dynamic web development—like handling user input and creating new problems on the fly.

Features

Randomized Challenges: Hit “Restart,” and the game instantly gives you two new random numbers (between 1 and 100). It uses Math.ceil() and Math.random() to keep things unpredictable.

Real-time Feedback: Type your answer and click “Check.” If you’re right, you get a cheerful “Congratulations! you got it!” If not, the game says, “Please try again!” right away.

Dynamic Reset: You can reset the game anytime to start over with a fresh problem and clear out the old result.

Polished UI: The numbers and input field have a custom look, with a clean background. This style comes from a mix of custom CSS and Bootstrap 4.

Built With

HTML5 & CSS3: For the layout and the way the arithmetic blocks look.

Bootstrap 4: Helps the layout adjust to your device, and the primary buttons come pre-styled.

JavaScript (Vanilla): Handles all the logic—generating numbers, checking answers, updating what you see.

How It Works

Generation: When you load the page or hit “Restart,” JavaScript picks two random numbers and displays them in separate <span> elements.

Input: You enter your answer in the custom-styled input box.

Validation: The script grabs both numbers, converts them to integers with parseInt(), and checks if your answer matches their sum. It then updates the result message below—so you always know if you nailed it or need another shot.

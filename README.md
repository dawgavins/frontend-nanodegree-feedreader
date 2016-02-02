# frontend-nanodegree-feedreader
Project 6 of Udacity Front End Nanodegree.
Erik Benediktson

## Instructions

To run, visit http://dawgavins.github.io/frontend-nanodegree-feedreader/
or download all files in the repository and open up index.html in any browser.

### Additional Feature

- I added an additional feature to the feed reader - the ability to add more feeds.
On the side menu, I created input fields for name and url, as well as a button to submit them
to be added to the list of feeds.
-- I created a new test called "can add feeds" under the "RSS Feeds" suite. 
--- This test simulates a user entering a name and url and clicking the add feed button.  It ensures that the new feed is added properly to the list of feeds.

id="add-feed-input-name">
            <input type="text" placeholder="Url..." id="add-feed-input-url">
            <!-- Clicking this button will add a new feed to the menu -->
            <button id="add-feed-button">Add Feed</button>
Scroll down to the bottom of the page to see the test results.

## References

- https://jasmine.github.io/2.0/introduction.html
- https://discussions.udacity.com/t/using-done-in-it/46032
- https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/5
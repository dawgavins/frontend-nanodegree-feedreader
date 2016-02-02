# frontend-nanodegree-feedreader
Project 6 of Udacity Front End Nanodegree.
Erik Benediktson

## Instructions

To run, visit http://dawgavins.github.io/frontend-nanodegree-feedreader/
or download all files in the repository and open up index.html in any browser.

### Additional Feature

- I added an additional feature to the feed reader - the ability to add more feeds.
On the side menu, I created input fields for name and url (add-feed-input-(name|url), as well as a button (add-feed-button) to trigger the new feed to be added to the list of feeds.
-- I created a new test called "can add feeds" under the "RSS Feeds" suite. 
--- This test simulates a user entering a name and url and clicking the add feed button.  It ensures that the new feed is added properly to both the allFeeds variable, as well as the side menu.
--- The test passes.  It may not have been necessary to add the functionality but I wanted to see it work.

## References

- https://jasmine.github.io/2.0/introduction.html
- https://discussions.udacity.com/t/using-done-in-it/46032
- https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/5
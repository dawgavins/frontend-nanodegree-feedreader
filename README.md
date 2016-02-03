# frontend-nanodegree-feedreader
Project 6 of Udacity Front End Nanodegree.
Erik Benediktson

## Instructions

To run, visit http://dawgavins.github.io/frontend-nanodegree-feedreader/
or download all files in the repository and open up index.html in any browser.

### Additional Feature

- I added an additional feature to the feed reader - the ability to add more feeds.
On the side menu, I created input fields for name and url (add-feed-input-(name|url), as well as a button (add-feed-button) to trigger the new feed to be added to the list of feeds.
- I created a new test suite called "User-added feeds" to test this feature.
- This test suite simulates a user entering a name and url and clicking the add feed button. 
- There are two tests in this suite 
  - "added feeds appear in allFeeds array" 
    - ensures that the new feed is added properly to both the allFeeds variable
  - "added feeds appear in menu"    
    - ensures that the new feed is inserted into the side menu properly
- Currently all tests pass, as I did add the required functionality.  It may not have been necessary to add the functionality but I wanted to see it work.

## References

- https://jasmine.github.io/2.0/introduction.html
- https://discussions.udacity.com/t/using-done-in-it/46032
- https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/5
- https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers
- https://learn.jquery.com/using-jquery-core/iterating/

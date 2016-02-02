/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        // This is our first test - it tests to make sure that the
        // allFeeds variable has been defined and that it is not
        // empty. Experiment with this before you get started on
        // the rest of this project. What happens when you change
        // allFeeds in app.js to be an empty array and refresh the
        // page?
        //
        it('are defined', function() {
            // ensure that there is at least one feed defined and non-empty
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // A test that loops through each feed
        // in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.
        //
         it('url defined', function() {
            // for each feed...
            allFeeds.forEach(function(feed) {
                // ensure the url is defined and non-empty
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        // A test that loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.
        //
        it('name defined', function() {
            // for each feed...
            allFeeds.forEach(function(feed) {
                // expect that the name is defined and non-empty
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    /* A test suite for the menu */
    describe('The menu', function() {

        // a test that ensures the menu element is hidden by default. 
        it('hidden by default', function() {
            // the menu is hidden via toggling the "menu-hidden" class
            // so check that the class is present by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // a test that ensures the menu changes
        // visibility when the menu icon is clicked. 

        it('visibility toggles', function() {
            // ensure we are starting with the menu hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // trigger a menu click
            $('.menu-icon-link').trigger('click');
            // ensure the menu was shown
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // trigger a second menu click
            $('.menu-icon-link').trigger('click');
            // ensure the menu was hidden again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
     });          

    /* A test suite for the initial entries */
    describe('Initial Entries', function() {
        // a test that ensures when the loadFeed
        // function is called and completes its work, there is at least
        // a single .entry element within the .feed container.

        // if there is at least one valid feed, queue it to be loaded and call
        // done once it has returned from the asynchronous call
        beforeEach(function(done) {
            if(allFeeds.length > 0) {
                loadFeed(0, done);  
            }
        });

        // ensure there was at least one valid feed and that the load has
        // resulted in a least one entry to be placed in the .feed container
        it("loads data", function() {
            expect(allFeeds.length > 0).toBe(true);
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* A test suite to test new feed functionality */
    describe('New Feed Selection', function() {
        
        // a test that ensures when a new feed is loaded
        // by the loadFeed function that the content actually changes.

         // Overall plan:
         // cue the first feed to load, store the content of the first entry in origContent
         // once it has loaded, and then cue the second feed to load, waiting for
         // completion before moving on to the test below, where we compare the text contained
         // within the first entry's h2 element
        
        // store the text of the first headline of the first feed in origContent
        var origContent = null;

        beforeEach(function(done) {
            // this test is only valid if there are at least 2 feeds
            if(allFeeds.length >= 2)
            {            
                loadFeed(0, function() {
                    // make sure there was some real data returned before referencing it
                    if ($('.feed .entry h2').length > 0) {
                        // store the inner text of the first entry's h2 element
                        origContent = $('.feed .entry h2')[0].innerHTML;
                    }
                    // queue the second feed to be loaded, passing in done so that once
                    // the load completes, the test may move forward
                    loadFeed(1, done);
                });
            }
        });

        it("data changes", function() {
            // this test is only valid if there are at least 2 feeds
            expect(allFeeds.length >= 2).toBe(true);

            // the first headline of the second feed
            var newContent = null;
            // make sure there was some real data returned before referencing it
            if ($('.feed .entry h2').length > 0) {
            // store the text of the first headline of the second feed in origContent
                newContent = $('.feed .entry h2')[0].innerHTML;
            }
            // expect that the headline has changed.  Note:  if neither feed returned data,
            // both newContent and origContent will be null, and the test will fail
            expect(newContent !== origContent).toBe(true);
        });
    });

}());

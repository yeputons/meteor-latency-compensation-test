meteor-latency-compensation-test
================================

Demonstration for Meteor issue on latency compensation. Steps to reproduce:

1. Run `meteor`
2. Open `http://localhost:3000/` in browser.
3. Open browser's JS console (it's usually done by pressing F12)
4. Click the 'Test' button several times
5. Look at message in the console: for each click (except the very first), you should get three lines,
   each line displays count of elements in the collection. You can see that the second number of these two
   if greater than the rest, which leads to element duplication in the interface for a moment in our project

You can follow these steps to be sure that this is a bug with update:

1. Comment the `Items.update(id, {});` line (number 7) from JS file
2. Wait till server restarts
3. Try clicking 'Test' again. It should generate a perfectly monotonic sequence of sizes.

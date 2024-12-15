# JavaScript Symbol toString() TypeError

This repository demonstrates a common error in JavaScript when attempting to convert a Symbol to a string using the toString() method.  The toString() method is not defined for Symbol objects and throws a TypeError when called.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file provides a solution that checks for the Symbol type before attempting to convert to a string.

This issue highlights the importance of type checking in JavaScript to prevent unexpected errors.
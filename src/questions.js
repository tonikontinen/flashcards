const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 5001,
    question: "What is the main purpose of React's useEffect hook?",
    answer: "To perform side effects in functional components",
  },
  {
    id: 5002,
    question: "What is the difference between state and props?",
    answer:
      "State is mutable and managed within the component, while props are read-only and passed from parent components",
  },
  {
    id: 5003,
    question: "What is React.Fragment used for?",
    answer: "To group multiple elements without adding an extra DOM node",
  },
  {
    id: 5004,
    question: "What is the purpose of the key prop in React lists?",
    answer:
      "To help React identify which items have changed, been added, or been removed",
  },
  {
    id: 5005,
    question: "What does the useContext hook do?",
    answer:
      "Allows components to consume values from a React context without using a consumer",
  },

  // JavaScript Concepts
  {
    id: 6001,
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const have block scope, var has function scope. const prevents reassignment, let allows it",
  },
  {
    id: 6002,
    question: "What are arrow functions?",
    answer: "A concise way to write function expressions with a shorter syntax",
  },
  {
    id: 6003,
    question: "What is destructuring in JavaScript?",
    answer:
      "A way to extract values from arrays or properties from objects into distinct variables",
  },
  {
    id: 6004,
    question: "What is the spread operator (...) used for?",
    answer:
      "To expand an iterable into individual elements or create copies of objects and arrays",
  },
  {
    id: 6005,
    question: "What is a Promise in JavaScript?",
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation",
  },

  // React Hooks
  {
    id: 7001,
    question: "What does the useReducer hook do?",
    answer:
      "Manages complex state logic by providing a way to update state based on actions",
  },
  {
    id: 7002,
    question: "What is the useMemo hook used for?",
    answer:
      "To memoize expensive computations and only recompute when dependencies change",
  },
  {
    id: 7003,
    question: "What is the useCallback hook?",
    answer:
      "Returns a memoized version of a callback to optimize performance in child components",
  },
  {
    id: 7004,
    question: "How does the useRef hook differ from useState?",
    answer:
      "useRef returns a mutable ref object that doesn't cause a re-render when changed",
  },
  {
    id: 7005,
    question: "What is the purpose of the useLayoutEffect hook?",
    answer:
      "Similar to useEffect, but fires synchronously after all DOM mutations",
  },

  // React Component Lifecycle
  {
    id: 8001,
    question:
      "What are the three main phases of a React component's lifecycle?",
    answer: "Mounting, Updating, and Unmounting",
  },
  {
    id: 8002,
    question: "What method is called when a component is removed from the DOM?",
    answer:
      "componentWillUnmount (in class components) or cleanup function in useEffect (in functional components)",
  },
  {
    id: 8003,
    question: "What does React.memo do?",
    answer:
      "Prevents a functional component from re-rendering if its props haven't changed",
  },

  // Advanced React Concepts
  {
    id: 9001,
    question: "What is prop drilling?",
    answer:
      "Passing props through multiple levels of components that don't need those props",
  },
  {
    id: 9002,
    question: "What is the purpose of React.lazy and Suspense?",
    answer: "To implement code-splitting and lazy loading of components",
  },

  // Web Development
  {
    id: 10001,
    question: "What is the event loop in JavaScript?",
    answer:
      "A mechanism that handles the execution of multiple chunks of your program over time",
  },
  {
    id: 10002,
    question: "What are JavaScript closures?",
    answer:
      "Functions that have access to variables in their outer (enclosing) lexical scope",
  },
  {
    id: 10003,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "=== checks both value and type, while == performs type coercion before comparison",
  },
  {
    id: 11001,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== performs type coercion, === checks both value and type without conversion",
  },
  {
    id: 11002,
    question: "What is a closure in JavaScript?",
    answer:
      "A function that can access variables from its outer (enclosing) lexical scope even after the outer function has returned",
  },
  {
    id: 11003,
    question: "What does the 'this' keyword refer to in JavaScript?",
    answer:
      "The object that is executing the current function, which can change based on how the function is called",
  },
  {
    id: 11004,
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "A mechanism where objects can inherit properties and methods directly from other objects",
  },
  {
    id: 11005,
    question: "What are JavaScript data types?",
    answer:
      "Number, String, Boolean, Undefined, Null, Symbol, BigInt, and Object",
  },

  // HTML Concepts
  {
    id: 12001,
    question: "What does the HTML <meta> tag do?",
    answer:
      "Provides metadata about the HTML document, such as character encoding, viewport settings, and description",
  },
  {
    id: 12002,
    question: "What is the difference between <section> and <div>?",
    answer:
      "A <section> represents a thematic grouping of content, while <div> is a generic container with no semantic meaning",
  },
  {
    id: 12003,
    question: "What are semantic HTML elements?",
    answer:
      "HTML tags that clearly describe their meaning to both browser and developer (e.g., <header>, <nav>, <article>)",
  },
  {
    id: 12004,
    question: "What does the HTML5 <canvas> element do?",
    answer:
      "Allows for dynamic, scriptable rendering of 2D shapes and bitmap images",
  },
  {
    id: 12005,
    question: "What is the purpose of the HTML <data> tag?",
    answer: "Provides a machine-readable translation of a given content",
  },

  // CSS Concepts
  {
    id: 13001,
    question: "What is the CSS box model?",
    answer:
      "A box that wraps around every HTML element, consisting of content, padding, borders, and margins",
  },
  {
    id: 13002,
    question:
      "What is the difference between display: none and visibility: hidden?",
    answer:
      "display: none removes the element from the document flow, while visibility: hidden makes the element invisible but still takes up space",
  },
  {
    id: 13003,
    question: "What are CSS flexbox and grid?",
    answer:
      "Flexbox is a one-dimensional layout method, while CSS Grid is a two-dimensional layout system",
  },
  {
    id: 13004,
    question: "What is the CSS specificity hierarchy?",
    answer:
      "Inline styles > IDs > Classes/Attributes > Elements, with !important overriding everything",
  },
  {
    id: 13005,
    question: "What is CSS cascade?",
    answer:
      "The process of determining which styles are ultimately applied to an element when multiple rules could apply",
  },

  // Computer Science Fundamentals
  {
    id: 14001,
    question: "What is Big O notation?",
    answer:
      "A method for describing the performance or complexity of an algorithm, specifically how the runtime grows as input size increases",
  },
  {
    id: 14002,
    question: "What is the difference between stack and heap memory?",
    answer:
      "Stack is used for static memory allocation and follows LIFO principle, while heap is used for dynamic memory allocation",
  },
  {
    id: 14003,
    question: "What is recursion?",
    answer:
      "A programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems",
  },
  {
    id: 14004,
    question: "What are data structures?",
    answer:
      "Ways of organizing and storing data to enable efficient access and modification",
  },
  {
    id: 14005,
    question:
      "What is the difference between synchronous and asynchronous programming?",
    answer:
      "Synchronous code runs in sequence, blocking execution, while asynchronous code allows other code to run while waiting for an operation to complete",
  },

  // Web Development Concepts
  {
    id: 15001,
    question: "What is a REST API?",
    answer:
      "An architectural style for designing networked applications, using standard HTTP methods to perform operations on resources",
  },
  {
    id: 15002,
    question: "What is CORS?",
    answer:
      "Cross-Origin Resource Sharing, a mechanism that allows restricted resources on a web page to be requested from another domain",
  },
  {
    id: 15003,
    question: "What is the event loop in JavaScript?",
    answer:
      "A mechanism that handles the execution of multiple chunks of your program over time, managing asynchronous operations",
  },
  {
    id: 15004,
    question: "What is a progressive web app (PWA)?",
    answer:
      "A web app that uses modern web capabilities to deliver an app-like experience to users",
  },
  {
    id: 15005,
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "localStorage persists even after browser is closed, while sessionStorage is cleared when the browser session ends",
  },

  // Additional Advanced Concepts
  {
    id: 16001,
    question: "What is hoisting in JavaScript?",
    answer:
      "A behavior where variable and function declarations are moved to the top of their respective scopes during compilation",
  },
  {
    id: 16002,
    question: "What are JavaScript promises?",
    answer:
      "Objects representing the eventual completion or failure of an asynchronous operation",
  },
  {
    id: 16003,
    question: "What is a pure function?",
    answer:
      "A function that always produces the same output for the same input and has no side effects",
  },
  {
    id: 16004,
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const have block scope, var has function scope. const prevents reassignment, let allows it",
  },
  {
    id: 16005,
    question: "What is webpack?",
    answer:
      "A module bundler that helps manage and bundle JavaScript files for web applications",
  },
  {
    id: 686868,
    question: "Onko Laura ihana??",
    answer: "On! 🥰",
  },
];

export default questions;

const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both a and b", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "2", isCorrect: true },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: false },
    ],
  },
  {
    text: "What function in React is used to change the state of a component?",
    options: [
      { id: 0, text: "setState", isCorrect: true },
      { id: 1, text: "modifyState", isCorrect: false },
      { id: 2, text: "updateState", isCorrect: false },
      { id: 3, text: "changeState", isCorrect: false },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "JavaScript Extension", isCorrect: false },
      { id: 2, text: "Java Syntax XML", isCorrect: false },
      { id: 3, text: "JavaScript Syntax Extension", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of componentDidMount() in React?",
    options: [
      { id: 0, text: "To initialize state", isCorrect: false },
      { id: 1, text: "To perform actions after the component is mounted", isCorrect: true },
      { id: 2, text: "To update the component", isCorrect: false },
      { id: 3, text: "To render the component", isCorrect: false },
    ],
  },
  {
    text: "What does props stand for in React?",
    options: [
      { id: 0, text: "Properties", isCorrect: true },
      { id: 1, text: "Propositions", isCorrect: false },
      { id: 2, text: "Proponents", isCorrect: false },
      { id: 3, text: "Programs", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the shouldComponentUpdate() method in React?",
    options: [
      { id: 0, text: "To check if the component should update or not", isCorrect: true },
      { id: 1, text: "To update the component", isCorrect: false },
      { id: 2, text: "To compare props and state", isCorrect: false },
      { id: 3, text: "To render the component", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the virtual DOM in React?",
    options: [
      { id: 0, text: "To speed up the rendering process", isCorrect: false },
      { id: 1, text: "To improve performance by minimizing actual DOM updates", isCorrect: true },
      { id: 2, text: "To replace the actual DOM with a simulated version", isCorrect: false },
      { id: 3, text: "To manage component states", isCorrect: false },
    ],
  },
  {
    text: "What is the significance of keys in React lists?",
    options: [
      { id: 0, text: "They improve rendering speed", isCorrect: false },
      { id: 1, text: "They help React identify which items have changed, are added, or are removed", isCorrect: true },
      { id: 2, text: "They allow for conditional rendering", isCorrect: false },
      { id: 3, text: "They are used for component communication", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the React.Fragment component?",
    options: [
      { id: 0, text: "To create reusable components", isCorrect: false },
      { id: 1, text: "To group multiple elements without adding extra nodes to the DOM", isCorrect: true },
      { id: 2, text: "To define custom HTML elements", isCorrect: false },
      { id: 3, text: "To handle component state changes", isCorrect: false },
    ],
  },
  {
    text: "What are controlled components in React?",
    options: [
      { id: 0, text: "Components that manage their own state internally", isCorrect: false },
      { id: 1, text: "Components that rely on external state management libraries", isCorrect: false },
      { id: 2, text: "Components where form data is handled by React", isCorrect: true },
      { id: 3, text: "Components that are rendered conditionally", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of propTypes in React?",
    options: [
      { id: 0, text: "To define types for component props", isCorrect: true },
      { id: 1, text: "To validate component state", isCorrect: false },
      { id: 2, text: "To manage component lifecycle", isCorrect: false },
      { id: 3, text: "To declare component methods", isCorrect: false },
    ],
  },
];

export default questions;

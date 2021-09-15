// Import stylesheets
import './style.css';

// Write Javascript code!

const grandParent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

/* EVENT - BUBBLING */
grandParent.addEventListener(
  'click',
  e => {
    console.log(' I am grand Parent!');
  },
  false
);
parent.addEventListener(
  'click',
  e => {
    console.log(' I am Parent!');
  },
  false
);
child.addEventListener(
  'click',
  e => {
    console.log(' I am Child!');
  },
  false
);

/* EVENT - CAPTURING */
// grandParent.addEventListener(
//   'click',
//   e => {
//     console.log(' I am grand Parent!');
//   },
//   true
// );
// parent.addEventListener(
//   'click',
//   e => {
//     console.log(' I am Parent!');
//   },
//   true
// );
// child.addEventListener(
//   'click',
//   e => {
//     console.log(' I am Child!');
//     e.stopPropagation();
//   },
//   true
// );

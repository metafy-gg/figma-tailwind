require('./bookmarklet.js');

const tests = [
  { rule: 'color: #FFFFFF;', classnames: ['text-white'] },
  { rule: 'background: rgba(255, 255, 255, 0.8);', classnames: ['bg-white', 'bg-opacity-80'] },
  { rule: 'color: rgba(255, 255, 255, 0.8);', classnames: ['text-white', 'text-opacity-80'] },
];

for (const test of tests) {
  const classnames = findClasses(test.rule);
  for (const classname of test.classnames) {
    if (!classnames.includes(classname)) {
      console.log('test failed:', test);
    }
  }
}
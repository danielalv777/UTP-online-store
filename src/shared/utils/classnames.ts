/**
 * Define the classes to a component
 * @param {(string | null)[]} arrClasses Array with component classes
 * @return {string} string
 */
const classnames = (arrClasses: (string | null | undefined)[]): string => {
  const classes = arrClasses.filter((item) => typeof item === 'string');

  // 'classes' is empty array, return empty string or join each element with empty space
  return classes.length === 0 ? '' : classes.join(' ');
};

export { classnames };

import { r as registerInstance, h } from './index-6fbc22d3.js';

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.myArray = undefined;
    this.innerArray = undefined;
  }
  parseMyArray(newValue) {
  }
  componentWillLoad() {
    // this.parseMyArray(this.myArray);
    if (this.myArray) {
      this.innerArray = JSON.parse(this.myArray);
    }
  }
  render() {
    return (h("div", null, h("ul", null, this.innerArray.map(item => (h("li", null, item))))));
  }
  static get watchers() { return {
    "myArray": ["parseMyArray"]
  }; }
};

export { MyComponent as my_component };

//# sourceMappingURL=my-component.entry.js.map
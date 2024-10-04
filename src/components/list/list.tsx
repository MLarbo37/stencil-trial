import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
})
export class MyComponent {
  @Prop() myArray: string;
  @State() innerArray: string[];

  @Watch('myArray')
  parseMyArray(newValue) {
    
  }

  componentWillLoad() {
    // this.parseMyArray(this.myArray);
      if (this.myArray) {
        this.innerArray = JSON.parse(this.myArray);
      }
  }

  render() {
    return (
      <div>
        <ul>
          {this.innerArray.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        
      </div>
    );
  }
}

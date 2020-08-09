import { createElement } from "../libs/createElement";

export class Panel {
  constructor() {
    this.children = [];
  }

  setAttribute(name, value) {
    this[name] = value; // attribute == property
  }

  appendChild(child) {
    this.children.push(child);
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }

  render() {
    return (
      <div class="panel" style="border:solid 1px lightgreen;width:300px">
        <h1 style="background-color: lightgreen;width:300px;margin:0">{this.title}</h1>
        <div style="width:300px;min-height:300px">{this.children}</div>
      </div>
    );
  }
}

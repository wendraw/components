import { createElement } from "../libs/createElement";

export class ListView {
  constructor() {
    this.children = [];
    this.state = Object.create(null);
  }

  setAttribute(name, value) {
    this[name] = value; // attribute == property
  }

  getAttribute(name) {
    return this[name];
  }

  appendChild(child) {
    this.children.push(child);
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }

  render() {
    let data = this.getAttribute("data");
    console.log(data, this.children);
    return (
      <div class="list-view" style="width:300px">
        {data.map(this.children[0])}
      </div>
    );
  }
}

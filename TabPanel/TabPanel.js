import { createElement } from "../libs/createElement";

export class TabPanel {
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

  select(i) {
    for (let view of this.childViews) {
      view.style.display = "none";
    }
    for (let view of this.titleViews) {
      view.classList.remove("selected");
    }
    this.childViews[i].style.display = "";
    this.childViews[i].classList.add("selected");
  }

  render() {
    this.childViews = this.children.map((child) => {
      return <div style="width:300px;min-height:300px">{child}</div>;
    });
    this.titleViews = this.children.map((child, i) => {
      return (
        <span onClick={() => this.select(i)} style="width:300px;min-height:300px">
          {child.getAttribute("title")}
        </span>
      );
    });

    setTimeout(() => this.select(0), 16);

    return (
      <div class="tab-panel" style="border:solid 1px lightgreen;width:300px">
        <h1 style="background-color: lightgreen;width:300px;margin:0">{this.titleViews}</h1>
        <div>{this.childViews}</div>
      </div>
    );
  }
}

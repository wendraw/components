import { createElement } from "../libs/createElement";

export class TabPanel {
  constructor() {
    this.children = [];
    this.state = Object.create(null);
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

  select(i) {
    for (let view of childViews) {
      view.style.display = "none";
    }
    this.childViews[i].style.display = "";
    this.titleView.innerText = this.children[i].title;
  }

  render() {
    this.childViews = this.children.map((child) => {
      return <div style="width:300px;min-height:300px">{child}</div>;
    });
    this.titleViews = this.children.map((child) => {
      return <span style="width:300px;min-height:300px">{child.title}</span>;
    });

    setTimeout(() => this.select(0), 16);

    return (
      <div class="tab-panel" style="border:solid 1px lightgreen;width:300px">
        {this.titleView}
        <div>{this.childViews}</div>
      </div>
    );
  }
}

import { createElement } from "./libs/createElement";
import { Panel } from "./Panel/Panel";
import { TabPanel } from "./TabPanel/TabPanel";

// let panel = (
//   <Panel title="This is my title">
//     <span>This is content</span>
//     <span>This is content</span>
//   </Panel>
// );

let tabPanel = (
  <TabPanel>
    <span>This is content1</span>
    <span>This is content2</span>
    <span>This is content3</span>
    <span>This is content4</span>
  </TabPanel>
);

tabPanel.mountTo(document.body);

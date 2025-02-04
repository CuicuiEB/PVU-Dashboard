import React, { ReactElement, useState } from "react";
import { TabProps } from "../Tab/Tab";
import TabButtons from "../TabButtons/TabButtons";

import "./Tabs.scss";

interface Props {
  children: ReactElement<TabProps>[];
  topTabs?: boolean;
}

const Tabs = ({ children, topTabs = false }: Props) => {
  const [tabSelected, setTabSelected] = useState(children[0].props.data.id);
  const changeTab = (tab: number) => setTabSelected(tab);
  const data = children.map((child) => child.props.data);
  const content = children.filter(
    (child) => child.props.data.id === tabSelected
  )[0];
  return (
    <div>
      {topTabs && (
        <TabButtons activeTab={tabSelected} data={data} changeTab={changeTab} />
      )}
      <div className="tab-content">{content}</div>
      {!topTabs && (
        <TabButtons activeTab={tabSelected} data={data} changeTab={changeTab} />
      )}
    </div>
  );
};

export default Tabs;

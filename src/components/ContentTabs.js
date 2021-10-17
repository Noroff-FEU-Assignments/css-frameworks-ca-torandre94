import React from 'react'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

function ContentTabs() {
    return (
        <Tabs defaultActiveKey="two" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="one" title="Yesterday">The match results from yesterday:</Tab>
            <Tab eventKey="two" title="Today">The match results for today:</Tab>
            <Tab eventKey="three" title="Tomorrow">The matches to come:</Tab>
        </Tabs>
    )
}

export default ContentTabs

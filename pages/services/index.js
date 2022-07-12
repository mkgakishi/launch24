import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import LaunchPad from "../../components/LaunchPad";
import LiquidityLock from "../../components/LiquidityLock";
import Mint from "../../components/Mint";
import TokenLock from "../../components/TokenLock";

export default function index() {
    return (
        <Tabs variant="soft-rounded" color="orange" >
            <TabList>
                <Tab>Launch</Tab>
                <Tab>Mint</Tab>
                <Tab>Token Lock</Tab>
                <Tab>Liquidity Lock</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <LaunchPad />
                </TabPanel>
                <TabPanel>
                    <Mint />
                </TabPanel>
                <TabPanel>
                    <TokenLock />
                </TabPanel>
                <TabPanel>
                    <LiquidityLock />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

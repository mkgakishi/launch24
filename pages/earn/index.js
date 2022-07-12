import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Spacer } from '@chakra-ui/react'

import Win from "../../components/Win";
import Staking from '../../components/Staking';
import Lottery from "../../components/Lottery";

export default function index() {
    return (
        <Flex flexDirection="column" justifyContent="center">
            <Flex mb={6} h={40} bg="gray.200">
                <Box p='4' w={120} bg='red.400'>
                    Left
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    Right
                </Box>
            </Flex>
            <Tabs variant="soft-rounded" color="orange" >
                <TabList>
                    <Tab>Staking</Tab>
                    <Tab>Win</Tab>
                    <Tab>Lottery</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Staking />
                    </TabPanel>
                    <TabPanel>
                        <Win />
                    </TabPanel>
                    <TabPanel>
                        <Lottery />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

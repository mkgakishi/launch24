import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Container, Grid, GridItem } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Grid templateColumns='repeat(1, 3fr)' gap={2}>
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem >
          <Box mx={12}>
            {children}
          </Box>
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}
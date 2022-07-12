import { Flex } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex w={120} h={120}>
        <h2>Welcome home</h2>
      </Flex>
    </Flex>
  )
}

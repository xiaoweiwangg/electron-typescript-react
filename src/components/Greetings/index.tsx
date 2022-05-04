import { Button } from 'antd'
import { Container, Image, Text } from './styles'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button type='primary' onClick={handleSayHello}>测试组件</Button>
    </Container>
  )
}


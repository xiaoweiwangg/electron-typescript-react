import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { Container, Image, Text } from './styles'

export function Greetings() {
  const [count, setCount] = useState('0')
  useEffect(() => {
    //接收主进程发送的消息。
    window.Main.on('system', (data: any) => {
      setCount(data)
    })
  }, [])
  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button type='primary' onClick={handleSayHello}>测试组件-{ count }</Button>
    </Container>
  )
}


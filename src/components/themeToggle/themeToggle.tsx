import React, { useContext, useState } from 'react'
import { ActionIcon, Popover, Text } from '@mantine/core'
import { IoMoon, IoSunny } from 'react-icons/io5'

import { MantineSchemeContext } from '@/providers/mantineProvider';

import DynamicNamespaces from 'next-translate/DynamicNamespaces';
import Trans from 'next-translate/Trans'

function ThemeToggle() {
  const { scheme, toggle } = useContext(MantineSchemeContext);
  const [ opened, setOpened ] = useState(false);

  return (
    <Popover
      opened={ opened }
      onClose={ () => setOpened(false) }
      position='bottom'
      placement='center'
      trapFocus={ false }
      closeOnEscape={ false }
      transition='fade'
      styles={{ body: { pointerEvents: 'none' } }}
      target={
        <ActionIcon 
          onMouseEnter={ () => setOpened(true) } 
          onMouseLeave={ () => setOpened(false) } 
          onClick={ () => toggle() } 
          variant='light'
        >
          { scheme === 'dark' ? <IoSunny /> : <IoMoon /> }
        </ActionIcon>
      }
    >
      <Text size='xs'>
        <DynamicNamespaces namespaces={['theme-toggle']} fallback="Loading...">
          {/* {`Switch to ${ scheme === 'dark' ? 'light' : 'dark' }`} */}
          { scheme === 'dark' ? <Trans i18nKey='theme-toggle:toLight' /> : <Trans i18nKey='theme-toggle:toDark' /> }
        </DynamicNamespaces>
      </Text>
    </Popover>
  )
}

export default ThemeToggle
import React from 'react';
import { Title, Box, Anchor, createStyles, List, Text } from '@mantine/core'
import ThemeToggle from '@/components/themeToggle';

const githubLink = 'https://github.com/amir4rab/next-mantine';

const useStyles = createStyles((theme) => ({
  main: {
    minHeight: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.xl * 3
  },
  header: {
    width: '50vw',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl * 3
  },
  box: {
    minWidth: '50vw',
    '&:not(:last-child)': {
      marginBottom: theme.spacing.md
    }
  }
}));

function HomeComponent() {
  const { classes } = useStyles();

  return (
    <Box className={ classes.main }>
      <Box className={ classes.header }>
        <Title className={ classes.title } order={1}>
          Next + Mantine template
        </Title>
        <ThemeToggle />
      </Box>
      <Box className={ classes.box }>
        <Title order={3}>
          Libraries
        </Title>
        <List>
          <List.Item>
            <Anchor href='https://mantine.dev'>
              Mantine
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://jestjs.io/'>
              Jest
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://react-icons.github.io/react-icons'>
              react-icons
            </Anchor>
          </List.Item>
        </List>
      </Box>
      <Box className={ classes.box }>
        <Title order={3}>
          Next.js plugins
        </Title>
        <List>
          <List.Item>
            <Anchor href='https://github.com/garmeeh/next-seo'>
              next-seo
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://www.npmjs.com/package/next-translate'>
              next-translate
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://github.com/cyrilwanner/next-compose-plugins'>
              next-compose-plugins
            </Anchor>
          </List.Item>
        </List>
      </Box>
      <Box className={ classes.box }>
        <Text>
          Github: <Anchor href={ githubLink } component='a'>{ githubLink }</Anchor>
        </Text>
      </Box>
    </Box>
  )
}

// "@mantine/core": "^4.1.5",
// "@mantine/hooks": "^4.1.5",
// "@mantine/next": "^4.1.5",
// "@mantine/ssr": "^4.1.5",
// "next": "12.1.5",
// "next-compose-plugins": "^2.2.1", 
// "next-seo": "^5.4.0",
// "next-translate": "^1.4.0", 
// "react": "18.0.0",
// "react-dom": "18.0.0",
// "react-icons": "^4.3.1"

export default HomeComponent
import { default as NextLink } from 'next/link';
import { Button } from '@mantine/core';

interface Props {
  href: string;
  children?: JSX.Element | JSX.Element[] | string;
}
const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={ href } passHref>
      <Button component="a">
        {
          children && children
        }
      </Button>
    </NextLink>
  );
}

export default Link
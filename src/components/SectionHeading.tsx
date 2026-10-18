import { Badge, Box, Stack, Text, Title } from '@mantine/core';

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, intro, align = 'left' }: Props) {
  return (
    <Stack
      gap="sm"
      maw={760}
      mx={align === 'center' ? 'auto' : undefined}
      align={align === 'center' ? 'center' : 'flex-start'}
      ta={align === 'center' ? 'center' : 'left'}
    >
      <Badge color="amber" variant="light" radius="sm" size="lg">
        {eyebrow}
      </Badge>
      <Title order={2} style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)', letterSpacing: '-0.02em' }}>
        {title}
      </Title>
      {intro && (
        <Text size="lg" c="gray.4" lh={1.6}>
          {intro}
        </Text>
      )}
      <Box
        w={64}
        h={3}
        mt={4}
        style={{
          borderRadius: 999,
          background: 'linear-gradient(90deg, var(--ez-amber), transparent)',
        }}
      />
    </Stack>
  );
}

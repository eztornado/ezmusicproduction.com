import { Anchor, Box, Container, Divider, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { IconBrandGithub } from '@tabler/icons-react';
import { nav, site } from '../data/site';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      style={{ borderTop: '1px solid var(--ez-border)', background: '#0e0c0a' }}
    >
      <Container size="lg" py={56}>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          <Stack gap="xs">
            <Text fw={800} size="lg">
              EZ<span style={{ color: 'var(--ez-amber)' }}>Music</span>Production
            </Text>
            <Text size="sm" c="dimmed" maw={320} lh={1.6}>
              {t('footer.description')}
            </Text>
          </Stack>

          <Stack gap="xs">
            <Text fw={600} size="sm">
              {t('footer.sections')}
            </Text>
            {nav.map((item) => (
              <Anchor key={item.href} href={item.href} c="dimmed" size="sm" underline="never">
                {t(item.key)}
              </Anchor>
            ))}
          </Stack>

          <Stack gap="xs">
            <Text fw={600} size="sm">
              {t('footer.project')}
            </Text>
            <Anchor
              href={site.repo}
              target="_blank"
              rel="noreferrer"
              c="dimmed"
              size="sm"
              underline="never"
            >
              {t('footer.repo')}
            </Anchor>
            <Text size="sm" c="dimmed">
              {t('footer.license')}
            </Text>
            <Text size="sm" c="dimmed">
              {t('footer.engine')}
            </Text>
            <Text size="sm" c="dimmed">
              {t('footer.version', { version: t('site.version') })}
            </Text>
          </Stack>
        </SimpleGrid>

        <Divider my="xl" color="var(--ez-border)" />

        <Group justify="space-between" gap="sm">
          <Text size="xs" c="dimmed">
            {t('footer.copyright', { year, codename: site.codename })}
          </Text>
          <Group gap={6}>
            <IconBrandGithub size={16} color="var(--ez-amber)" />
            <Text size="xs" c="dimmed">
              {t('footer.madeWith')}
            </Text>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

import { useEffect, useState } from 'react';
import {
  ActionIcon,
  Anchor,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import { nav, site } from '../data/site';
import { LanguageSwitcher } from './LanguageSwitcher';

function Logo() {
  return (
    <Group gap={10} wrap="nowrap">
      <div className="ez-equalizer" aria-hidden style={{ height: 22 }}>
        <span style={{ height: '50%' }} />
        <span style={{ height: '90%' }} />
        <span style={{ height: '65%' }} />
        <span style={{ height: '100%' }} />
        <span style={{ height: '45%' }} />
      </div>
      <Text fw={800} size="md" style={{ letterSpacing: '-0.01em' }}>
        EZ<span style={{ color: 'var(--ez-accent)' }}>Music</span>Production
      </Text>
    </Group>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const [{ y }] = useWindowScroll();
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(y > 24);
  }, [y]);

  return (
    <nav className={`ez-nav${scrolled ? ' ez-nav--scrolled' : ''}`}>
      <Container size="lg" h={68}>
        <Group justify="space-between" h="100%" wrap="nowrap">
          <Anchor href="#top" underline="never" c="inherit">
            <Logo />
          </Anchor>

          <Group gap="md" visibleFrom="lg" wrap="nowrap">
            {nav.map((item) => (
              <a key={item.href} className="ez-nav__link" href={item.href}>
                {t(item.key)}
              </a>
            ))}
          </Group>

          <Group gap="sm" wrap="nowrap">
            <LanguageSwitcher />
            <Tooltip label={t('hero.ctaGithub')} withArrow visibleFrom="sm">
              <ActionIcon
                component="a"
                href={site.repo}
                target="_blank"
                rel="noreferrer"
                variant="default"
                size="lg"
                aria-label={t('hero.ctaGithub')}
                visibleFrom="sm"
              >
                <IconBrandGithub size={18} />
              </ActionIcon>
            </Tooltip>
            <Button
              component="a"
              href={site.downloadUrl}
              target="_blank"
              rel="noreferrer"
              color="red"
              c="#0b0b0b"
              visibleFrom="sm"
            >
              {t('common.download')}
            </Button>
            <Burger opened={opened} onClick={open} hiddenFrom="lg" size="sm" aria-label={t('common.menu')} />
          </Group>
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} title={<Logo />} position="right" size="xs">
        <Stack>
          {nav.map((item) => (
            <Anchor
              key={item.href}
              href={item.href}
              c="gray.2"
              underline="never"
              onClick={close}
            >
              {t(item.key)}
            </Anchor>
          ))}

          <Divider my="xs" color="var(--ez-border)" />

          <Text size="xs" c="dimmed">
            {t('common.language')}
          </Text>
          <LanguageSwitcher variant="list" onSelect={close} />

          <Divider my="xs" color="var(--ez-border)" />

          <Button
            component="a"
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            variant="light"
            color="red"
            leftSection={<IconBrandGithub size={16} />}
          >
            {t('hero.ctaGithub')}
          </Button>
          <Button
            component="a"
            href={site.downloadUrl}
            target="_blank"
            rel="noreferrer"
            color="red"
            c="#0b0b0b"
            leftSection={<IconDownload size={16} />}
            onClick={close}
          >
            {t('common.download')}
          </Button>
        </Stack>
      </Drawer>
    </nav>
  );
}

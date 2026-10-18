import { useTranslation } from 'react-i18next';
import { Button, Menu, UnstyledButton, Group, Text, Tooltip } from '@mantine/core';
import { IconCheck, IconLanguage } from '@tabler/icons-react';
import { LANGUAGES } from '../i18n';
import { normalizeLanguage } from '../data/site';

type Props = {
  /** `button` para la barra de escritorio, `list` para el menú móvil. */
  variant?: 'button' | 'list';
  onSelect?: () => void;
};

export function LanguageSwitcher({ variant = 'button', onSelect }: Props) {
  const { t, i18n } = useTranslation();
  const current = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  const change = (code: string) => {
    void i18n.changeLanguage(code);
    onSelect?.();
  };

  if (variant === 'list') {
    return (
      <Group gap="xs">
        {LANGUAGES.map((l) => (
          <Button
            key={l.code}
            size="xs"
            radius="xl"
            variant={l.code === current ? 'filled' : 'default'}
            color={l.code === current ? 'red' : undefined}
            c={l.code === current ? '#0b0b0b' : undefined}
            onClick={() => change(l.code)}
          >
            {l.short}
          </Button>
        ))}
      </Group>
    );
  }

  return (
    <Menu shadow="md" width={180} position="bottom-end" radius="md">
      <Menu.Target>
        <Tooltip label={t('common.language')} withArrow>
          <UnstyledButton
            aria-label={t('common.language')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 4px' }}
          >
            <IconLanguage size={18} color="var(--ez-accent)" />
            <Text size="sm" fw={600} c="gray.2">
              {active.short}
            </Text>
          </UnstyledButton>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{t('common.language')}</Menu.Label>
        {LANGUAGES.map((l) => (
          <Menu.Item
            key={l.code}
            onClick={() => change(l.code)}
            rightSection={l.code === current ? <IconCheck size={14} /> : null}
          >
            {l.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

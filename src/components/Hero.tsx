import { Trans, useTranslation } from 'react-i18next';
import { Badge, Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight, IconBrandGithub } from '@tabler/icons-react';
import { heroStats, site } from '../data/site';

/**
 * Hero con vídeo de fondo.
 *
 * HUECO DE VÍDEO → coloca el vídeo en `public/media/hero.mp4`. Mientras no
 * exista, se muestra el degradado animado de reserva (`.ez-hero__fallback`).
 */
export const HERO_VIDEO = '/media/hero.mp4';
export const HERO_POSTER = '/media/hero-poster.jpg';

export function Hero() {
  const { t } = useTranslation();

  return (
    <header id="top" className="ez-hero">
      <div className="ez-hero__fallback" aria-hidden />

      <video
        className="ez-hero__video"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        onError={(e) => {
          (e.currentTarget as HTMLVideoElement).style.display = 'none';
        }}
      />

      <div className="ez-hero__scrim" aria-hidden />

      <Container size="lg" className="ez-hero__content">
        <Stack gap="xl" maw={820} py={120}>
          <Group gap="xs">
            <Badge color="red" variant="light" size="lg" radius="sm">
              {t('site.license')}
            </Badge>
            <Badge color="gray" variant="outline" size="lg" radius="sm">
              {t('site.platform')}
            </Badge>
          </Group>

          <Stack gap="md">
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
              }}
            >
              <Trans
                i18nKey="hero.title"
                components={{
                  hl: (
                    <Text
                      span
                      inherit
                      variant="gradient"
                      gradient={{ from: '#ff8a80', to: '#e01b10', deg: 45 }}
                    />
                  ),
                }}
              />
            </Title>

            <Text size="xl" c="gray.3" maw={640} lh={1.5}>
              <Trans
                i18nKey="hero.subtitle"
                values={{ tagline: t('site.tagline') }}
                components={{ em: <em /> }}
              />
            </Text>
          </Stack>

          <Group gap="md">
            <Button
              size="lg"
              color="red"
              c="#0b0b0b"
              radius="md"
              rightSection={<IconArrowRight size={18} />}
              component="a"
              href="#funciones"
            >
              {t('hero.ctaFeatures')}
            </Button>
            <Button
              size="lg"
              variant="default"
              radius="md"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href={site.repo}
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.ctaGithub')}
            </Button>
          </Group>

          <Group gap={48} mt="lg" visibleFrom="sm">
            {heroStats.map((s) => (
              <Box key={s.key}>
                <Text fw={800} size="xl" style={{ letterSpacing: '-0.02em' }}>
                  {s.value}
                </Text>
                <Text size="xs" c="dimmed">
                  {t(s.key)}
                </Text>
              </Box>
            ))}
          </Group>
        </Stack>
      </Container>
    </header>
  );
}

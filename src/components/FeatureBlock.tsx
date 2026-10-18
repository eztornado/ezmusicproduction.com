import { Badge, Box, Card, Grid, Group, List, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { IconCheck } from '@tabler/icons-react';
import type { FeatureMeta } from '../data/site';
import { MediaSlot } from './MediaSlot';

type Props = {
  meta: FeatureMeta;
  /** Coloca el medio a la izquierda en pantallas grandes. */
  flip?: boolean;
};

export function FeatureBlock({ meta, flip = false }: Props) {
  const { t } = useTranslation();
  const base = `features.${meta.i18nKey}`;
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];

  return (
    <Box id={meta.id} className="ez-feature" py={{ base: 48, md: 72 }}>
      <Grid gutter={{ base: 28, md: 56 }} align="center">
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: flip ? 2 : 1 }}>
          <Stack gap="md">
            <Group gap="xs">
              <Badge color="red" variant="light" radius="sm">
                {t(`${base}.eyebrow`)}
              </Badge>
              {meta.highlighted && (
                <Badge color="gray" variant="outline" radius="sm">
                  {t('common.featured')}
                </Badge>
              )}
            </Group>

            <Title
              order={3}
              style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.05rem)', letterSpacing: '-0.02em' }}
            >
              {t(`${base}.title`)}
            </Title>

            <Text c="gray.4" size="md" lh={1.7}>
              {t(`${base}.description`)}
            </Text>

            <List
              spacing={9}
              size="sm"
              c="gray.3"
              icon={
                <ThemeIcon color="red" size={20} radius="xl" variant="light">
                  <IconCheck size={13} />
                </ThemeIcon>
              }
            >
              {bullets.map((b) => (
                <List.Item key={b}>{b}</List.Item>
              ))}
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: flip ? 1 : 1 }}>
          <Card
            padding={0}
            radius="lg"
            withBorder
            bg="transparent"
            style={{ overflow: 'hidden', borderColor: 'var(--ez-border)' }}
          >
            <MediaSlot
              src={meta.image}
              alt={`${t(`${base}.title`)} — EZMusicProduction`}
              hint={meta.hint}
              ratio={meta.ratio}
            />
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

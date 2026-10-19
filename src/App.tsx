import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconAdjustments,
  IconArrowUp,
  IconBrandAppleFilled,
  IconBrandGithub,
  IconCode,
  IconDeviceDesktop,
  IconDownload,
  IconFileMusic,
  IconHeart,
  IconMusic,
  IconWaveSine,
} from '@tabler/icons-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { SectionHeading } from './components/SectionHeading';
import { FeatureBlock } from './components/FeatureBlock';
import { MediaSlot } from './components/MediaSlot';
import {
  FEATURES,
  INSTRUMENT_KEYS,
  architectureImage,
  normalizeLanguage,
  site,
} from './data/site';

const instrumentIcons = [IconMusic, IconWaveSine, IconAdjustments, IconFileMusic];
const pillarIcons = [IconDeviceDesktop, IconAdjustments, IconHeart];

type Pillar = { title: string; text: string };
type ArchItem = { step: string; title: string; text: string };
type FaqItem = { q: string; a: string };

export default function App() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage ?? i18n.language;

  // Mantiene <html lang> y los metadatos SEO al día con el idioma activo.
  useEffect(() => {
    document.documentElement.lang = normalizeLanguage(lng);
    document.title = t('meta.title');

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', t('meta.description'));
    setMeta('meta[property="og:title"]', t('meta.ogTitle'));
    setMeta('meta[property="og:description"]', t('meta.ogDescription'));
  }, [lng, t]);

  const pillars = t('pillars.items', { returnObjects: true }) as Pillar[];
  const archItems = t('architecture.items', { returnObjects: true }) as ArchItem[];
  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ------------------------------------------------------- qué es --- */}
        <Box id="que-es" component="section" py={{ base: 64, md: 96 }}>
          <Container size="lg">
            <SectionHeading
              align="center"
              eyebrow={t('sections.whatIs.eyebrow')}
              title={t('sections.whatIs.title')}
              intro={t('sections.whatIs.intro')}
            />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={56}>
              {pillars.map((p, i) => {
                const Icon = pillarIcons[i] ?? IconHeart;
                return (
                  <Card
                    key={p.title}
                    className="ez-glow-card"
                    padding="xl"
                    radius="lg"
                    withBorder
                    bg="var(--ez-surface)"
                    style={{ borderColor: 'var(--ez-border)' }}
                  >
                    <ThemeIcon size={44} radius="md" color="red" variant="light" mb="md">
                      <Icon size={22} />
                    </ThemeIcon>
                    <Text fw={700} mb={6}>
                      {p.title}
                    </Text>
                    <Text size="sm" c="gray.4" lh={1.65}>
                      {p.text}
                    </Text>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ------------------------------------------------------ funciones --- */}
        <Box id="funciones" component="section" py={{ base: 48, md: 72 }}>
          <Container size="lg">
            <SectionHeading
              eyebrow={t('sections.features.eyebrow')}
              title={t('sections.features.title')}
              intro={t('sections.features.intro')}
            />

            <Box className="ez-jumplist" mt="lg">
              <Text size="sm" c="dimmed">
                {t('common.jumpTo')}{' '}
                {[
                  FEATURES.libreria,
                  FEATURES.ezinstruments,
                  FEATURES.ezsynth,
                  FEATURES.ezdrums,
                  FEATURES.ezorquestra,
                  FEATURES.pianoRoll,
                  FEATURES.cubase,
                ].map((meta, i, arr) => (
                  <span key={meta.id}>
                    <a href={`#${meta.id}`}>{t(`features.${meta.i18nKey}.title`)}</a>
                    {i < arr.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </Text>
            </Box>

            <FeatureBlock meta={FEATURES.libreria} />
          </Container>
        </Box>

        {/* --------------------------------------------- familia instrumentos --- */}
        <Box id="instrumentos" component="section" py={{ base: 48, md: 72 }}>
          <Container size="lg">
            <SectionHeading
              eyebrow={t('sections.instruments.eyebrow')}
              title={t('sections.instruments.title')}
              intro={t('sections.instruments.intro')}
            />

            <SimpleGrid cols={{ base: 2, md: 4 }} spacing="md" mt={40}>
              {INSTRUMENT_KEYS.map((key, i) => {
                const meta = FEATURES[key];
                const Icon = instrumentIcons[i] ?? IconMusic;
                return (
                  <Card
                    key={meta.id}
                    component="a"
                    href={`#${meta.id}`}
                    className="ez-glow-card"
                    padding="lg"
                    radius="lg"
                    withBorder
                    bg="var(--ez-surface)"
                    style={{ borderColor: 'var(--ez-border)', textDecoration: 'none' }}
                  >
                    <ThemeIcon size={38} radius="md" color="red" variant="light" mb="sm">
                      <Icon size={20} />
                    </ThemeIcon>
                    <Text fw={700} c="gray.1">
                      {t(`features.${meta.i18nKey}.title`)}
                    </Text>
                    <Text size="xs" c="dimmed" mt={4}>
                      {t(`features.${meta.i18nKey}.genre`)}
                    </Text>
                  </Card>
                );
              })}
            </SimpleGrid>

            {INSTRUMENT_KEYS.map((key, i) => (
              <FeatureBlock key={key} meta={FEATURES[key]} flip={i % 2 === 1} />
            ))}
          </Container>
        </Box>

        {/* ---------------------------------------------------- piano roll --- */}
        <Box component="section" py={{ base: 48, md: 72 }}>
          <Container size="lg">
            <SectionHeading
              eyebrow={t('sections.pianoRoll.eyebrow')}
              title={t('sections.pianoRoll.title')}
              intro={t('sections.pianoRoll.intro')}
            />
            <FeatureBlock meta={FEATURES.pianoRoll} />
          </Container>
        </Box>

        {/* ------------------------------------------------------ cubase --- */}
        <Box component="section" py={{ base: 48, md: 72 }}>
          <Container size="lg">
            <SectionHeading
              eyebrow={t('sections.cubase.eyebrow')}
              title={t('sections.cubase.title')}
              intro={t('sections.cubase.intro')}
            />
            <FeatureBlock meta={FEATURES.cubase} flip />
          </Container>
        </Box>

        {/* ------------------------------------------------------- arquitectura --- */}
        <Box id="arquitectura" component="section" py={{ base: 64, md: 96 }}>
          <Container size="lg">
            <SectionHeading
              eyebrow={t('sections.architecture.eyebrow')}
              title={t('sections.architecture.title')}
              intro={t('sections.architecture.intro')}
            />

            <Grid gutter="lg" mt={56} align="stretch">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack gap="md" h="100%">
                  {archItems.map((a) => (
                    <Card
                      key={a.step}
                      padding="lg"
                      radius="lg"
                      withBorder
                      bg="var(--ez-surface)"
                      style={{ borderColor: 'var(--ez-border)' }}
                    >
                      <Group align="flex-start" wrap="nowrap">
                        <ThemeIcon size={40} radius="md" color="red" variant="light">
                          <IconCode size={20} />
                        </ThemeIcon>
                        <Box>
                          <Text fw={700}>
                            {a.title}{' '}
                            <Text span size="xs" c="dimmed" fw={500}>
                              · {a.step}
                            </Text>
                          </Text>
                          <Text size="sm" c="gray.4" lh={1.6} mt={4}>
                            {a.text}
                          </Text>
                        </Box>
                      </Group>
                    </Card>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <MediaSlot
                  src={architectureImage.image}
                  alt="EZMusicProduction — UI / FFI / engine architecture diagram"
                  hint={architectureImage.hint}
                  ratio={architectureImage.ratio}
                />
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ------------------------------------------------------------- FAQ --- */}
        <Box component="section" py={{ base: 64, md: 96 }} bg="#0f0f11">
          <Container size="md">
            <SectionHeading
              align="center"
              eyebrow={t('sections.faq.eyebrow')}
              title={t('sections.faq.title')}
            />

            <Accordion
              mt={40}
              variant="separated"
              radius="lg"
              styles={{
                item: { backgroundColor: 'var(--ez-surface)', borderColor: 'var(--ez-border)' },
              }}
            >
              {faqItems.map((item) => (
                <Accordion.Item key={item.q} value={item.q}>
                  <Accordion.Control>
                    <Text fw={600}>{item.q}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text c="gray.4" size="sm" lh={1.65}>
                      {item.a}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </Box>

        {/* ---------------------------------------------------------- descarga --- */}
        <Box id="descarga" component="section" py={{ base: 64, md: 96 }}>
          <Container size="lg">
            <Card
              radius="xl"
              padding="2.5rem"
              withBorder
              style={{
                borderColor: 'rgba(255,45,32,0.3)',
                background:
                  'radial-gradient(120% 140% at 0% 0%, rgba(255,45,32,0.16), transparent 60%), #120607',
              }}
            >
              <Group justify="space-between" align="center" gap={40} wrap="wrap">
                <Stack gap="sm" maw={560}>
                  <Text
                    size="xs"
                    fw={700}
                    tt="uppercase"
                    style={{ letterSpacing: '0.14em', color: 'var(--ez-accent)' }}
                  >
                    {t('sections.download.eyebrow')}
                  </Text>
                  <Title
                    order={2}
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.02em' }}
                  >
                    {t('sections.download.title')}
                  </Title>
                  <Text c="gray.3" lh={1.6}>
                    {t('sections.download.text')}
                  </Text>
                </Stack>

                <Stack gap="sm" w={{ base: '100%', sm: 320 }}>
                  <Button
                    size="lg"
                    color="red"
                    c="#0b0b0b"
                    radius="md"
                    leftSection={<IconBrandAppleFilled size={18} />}
                    rightSection={<IconDownload size={18} />}
                    component="a"
                    href={site.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    fullWidth
                  >
                    {t('sections.download.ctaDownload')}
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
                    fullWidth
                  >
                    {t('sections.download.ctaSource')}
                  </Button>
                  <Button
                    size="md"
                    variant="subtle"
                    radius="md"
                    leftSection={<IconArrowUp size={15} />}
                    component="a"
                    href="#top"
                    fullWidth
                  >
                    {t('sections.download.ctaBack')}
                  </Button>
                </Stack>
              </Group>
            </Card>
          </Container>
        </Box>
      </main>

      <Footer />
    </>
  );
}

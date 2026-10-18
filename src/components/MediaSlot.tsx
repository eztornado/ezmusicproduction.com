import { useState } from 'react';
import { Center, Stack, Text, ThemeIcon } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { IconPhoto, IconVideo } from '@tabler/icons-react';

type Props = {
  /** Ruta pública de la imagen. Si no se puede cargar, se muestra el hueco. */
  src: string;
  alt: string;
  /** Qué imagen hay que colocar (texto del hueco, para quien mantiene el sitio). */
  hint: string;
  /** Proporción recomendada, p. ej. "16 / 10". */
  ratio?: string;
  /** Hueco de vídeo en lugar de imagen. */
  video?: boolean;
  className?: string;
};

/**
 * Marco para una captura o un vídeo. Si el archivo todavía no existe muestra
 * un hueco con instrucciones (ruta + proporción), de modo que basta con dejar
 * el fichero en `public/` con el nombre indicado para que aparezca.
 */
export function MediaSlot({ src, alt, hint, ratio = '16 / 10', video = false, className }: Props) {
  const { t } = useTranslation();
  const [missing, setMissing] = useState(false);

  return (
    <div className={['ez-slot', className].filter(Boolean).join(' ')} style={{ aspectRatio: ratio }}>
      {!missing &&
        (video ? (
          <video
            className="ez-slot__media"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setMissing(true)}
          />
        ) : (
          <img
            className="ez-slot__media"
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setMissing(true)}
          />
        ))}

      {missing && (
        <div className="ez-slot__placeholder">
          <ThemeIcon size={46} radius="xl" variant="light" color="amber">
            {video ? <IconVideo size={24} /> : <IconPhoto size={24} />}
          </ThemeIcon>
          <Stack gap={6} align="center">
            <Text fw={600} size="sm">
              {t(video ? 'common.videoPlaceholder' : 'common.imagePlaceholder')}
            </Text>
            <Text size="xs" c="dimmed" maw={420}>
              {hint}
            </Text>
          </Stack>
          <Center>
            <code className="ez-slot__path">{src}</code>
          </Center>
          <Text size="xs" c="dimmed">
            {ratio.replace(/\s/g, '')} · {t('common.placeholderHelp')} <code>public{src}</code>
          </Text>
        </div>
      )}
    </div>
  );
}

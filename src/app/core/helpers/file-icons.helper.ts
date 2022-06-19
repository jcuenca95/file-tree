const FileIconMap: Record<string, string> = {
  jpg: 'image',
  png: 'image',
  jpeg: 'image',
  mp3: 'audio_file',
  mp4: 'video_file',
};

export function getIconFromExt(ext: string) {
  return FileIconMap[ext] || 'description';
}

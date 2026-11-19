// Tiny inline SVG icons, so the project needs no icon library.
export function BagIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160v-48zm-48 48H48a48 48 0 0 0-48 48v208a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48h-64v-48C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0z" />
    </svg>
  );
}

export function ChevronIcon({ dir = "right", size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 320 512" fill="currentColor" aria-hidden="true"
         style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}>
      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  );
}

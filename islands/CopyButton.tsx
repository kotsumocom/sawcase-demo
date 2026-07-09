import { useId } from "preact/hooks";
import * as clipboard from "@zag-js/clipboard";
import { useMachine, normalizeProps } from "@zag-js/preact";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export default function CopyButton({ value, label }: CopyButtonProps) {
  const service = useMachine(clipboard.machine, {
    id: useId(),
    value,
  });
  const api = clipboard.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()} style="display:inline-block;">
      <input {...api.getInputProps()} hidden />
      <button
        {...api.getTriggerProps()}
        class="copy-btn"
        data-copied={api.copied ? "true" : undefined}
      >
        {api.copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            {label || "Copy"}
          </>
        )}
      </button>
    </div>
  );
}

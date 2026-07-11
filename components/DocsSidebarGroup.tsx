import type { ComponentChildren } from "preact";

export interface DocsSidebarGroupProps {
  label: string;
  children: ComponentChildren;
}

/**
 * ドキュメントサイドバーのグループコンポーネント。
 * sc-docs-sidebar__group / sc-docs-sidebar__group-label CSS に対応。
 */
export function DocsSidebarGroup({ label, children }: DocsSidebarGroupProps) {
  return (
    <div class="sc-docs-sidebar__group">
      <div class="sc-docs-sidebar__group-label">{label}</div>
      {children}
    </div>
  );
}

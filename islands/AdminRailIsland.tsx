// Island: 個別コンポーネントを直接インポート（mod.ts 経由だと Node.js 依存が入るため）
import { AdminIconRail } from "@kotsumo/sawcase/components/admin/AdminIconRail.tsx";
import type { IconRailItem, RailMode } from "@kotsumo/sawcase/components/admin/AdminIconRail.tsx";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  UsersRound,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-preact";
import type { FunctionComponent } from "preact";

/** アイコン名 → Lucide コンポーネントのマップ */
const ICON_MAP: Record<string, FunctionComponent<{ size?: number | string }>> = {
  LayoutDashboard,
  Users,
  FolderKanban,
  UsersRound,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
};

/** シリアライズ可能なレールアイテム（icon を文字列キーで指定） */
export interface SerializableRailItem {
  iconName: string;
  label: string;
  value: string;
  href?: string;
  active?: boolean;
}

export interface AdminRailIslandProps {
  items: SerializableRailItem[];
  mode?: RailMode;
  bottomItems?: SerializableRailItem[];
}

/** シリアライズ可能な items を IconRailItem に変換 */
function toRailItems(items: SerializableRailItem[]): IconRailItem[] {
  return items.map((item) => ({
    icon: ICON_MAP[item.iconName] ?? LayoutDashboard,
    label: item.label,
    value: item.value,
    href: item.href,
    active: item.active,
  }));
}

/**
 * AdminIconRail の Island ラッパー。
 */
export default function AdminRailIsland({
  items,
  mode = "hover-expand",
  bottomItems,
}: AdminRailIslandProps) {
  return (
    <AdminIconRail
      items={toRailItems(items)}
      mode={mode}
      bottomItems={bottomItems ? toRailItems(bottomItems) : undefined}
      showModeToggle
    />
  );
}

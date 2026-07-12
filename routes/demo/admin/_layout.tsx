import { define } from "@/utils.ts";
import { AdminShell } from "@kotsumo/sawcase/components";
import {
  Settings,
  Palette,
  Shield,
  Code,
  CreditCard,
  Bell,
} from "lucide-preact";
import type { NavGroup, NotificationItem } from "@kotsumo/sawcase/components";
import type { SerializableRailItem } from "@/islands/AdminRailIsland.tsx";
import type { SerializableMenuItem } from "@/islands/AdminToolbar.tsx";
import AdminToolbar from "@/islands/AdminToolbar.tsx";
import AdminRailIsland from "@/islands/AdminRailIsland.tsx";

// アイコンレール定義（iconName は AdminRailIsland 内の ICON_MAP と対応）
const RAIL_ITEMS: Omit<SerializableRailItem, "active">[] = [
  { iconName: "LayoutDashboard", label: "概要", value: "dashboard", href: "/demo/admin" },
  { iconName: "BarChart3", label: "統計サマリー", value: "analytics", href: "/demo/admin/analytics" },
  { iconName: "Users", label: "ユーザー管理", value: "users", href: "/demo/admin/users" },
  { iconName: "FolderKanban", label: "プロジェクト", value: "projects", href: "/demo/admin/projects" },
  { iconName: "UsersRound", label: "チーム管理", value: "team", href: "/demo/admin/team" },
  { iconName: "Bell", label: "通知", value: "notifications", href: "/demo/admin/notifications" },
];

const RAIL_BOTTOM_ITEMS: Omit<SerializableRailItem, "active">[] = [
  { iconName: "Settings", label: "設定", value: "settings", href: "/demo/admin/settings" },
  { iconName: "HelpCircle", label: "ヘルプ", value: "help", href: "#" },
];

// 詳細ナビ（設定ページのサブメニュー）— active は動的設定
function getSettingsNavGroups(pathname: string): NavGroup[] {
  const p = pathname.replace(/\/$/, "");
  return [
    {
      label: "設定",
      items: [
        { icon: Settings, label: "一般", href: "/demo/admin/settings", active: p === "/demo/admin/settings" },
        { icon: Bell, label: "通知", href: "/demo/admin/settings/notifications", active: p === "/demo/admin/settings/notifications" },
        { icon: Palette, label: "外観", href: "#" },
        { icon: Shield, label: "セキュリティ", href: "#" },
        { icon: Code, label: "API", href: "#" },
        { icon: CreditCard, label: "請求", href: "#" },
      ],
    },
  ];
}

// 通知サンプルデータ（6件: maxItems=5 で「もっと見る」テスト）
const notifications: NotificationItem[] = [
  { id: "1", title: "デプロイ完了", message: "v1.2.0 が正常にデプロイされました", time: "3分前" },
  { id: "2", title: "新規ユーザー", message: "田中太郎さんが参加しました", time: "1時間前", read: true },
  { id: "3", title: "ビルドエラー", message: "CI パイプラインが失敗しました", time: "2時間前" },
  { id: "4", title: "API レート制限", message: "org-a342 が上限に到達", time: "3時間前" },
  { id: "5", title: "SSL 証明書更新", message: "api.example.com の証明書を更新しました", time: "5時間前", read: true },
  { id: "6", title: "バックアップ完了", message: "日次バックアップが正常に完了", time: "6時間前", read: true },
];

// ユーザーメニュー（シリアライズ可能: onClick の代わりに action 文字列を使用）
const userMenuItems: SerializableMenuItem[] = [
  { label: "プロフィール", href: "#" },
  { label: "個人設定", href: "#" },
  { label: "設定", href: "/demo/admin/settings" },
  { label: "ログアウト", action: "logout", danger: true },
];

/**
 * pathname から対応する railItem の value を返す。
 */
function getActiveRailValue(pathname: string): string {
  const stripped = pathname.replace(/\/$/, "");
  if (stripped === "/demo/admin") return "dashboard";
  const segment = stripped.replace("/demo/admin/", "").split("/")[0];
  return segment || "dashboard";
}

export default define.page(function AdminLayout({ Component, url }) {
  const activeValue = getActiveRailValue(url.pathname);
  const isSettings = url.pathname.startsWith("/demo/admin/settings");

  // URL に基づいて active を動的設定（シリアライズ可能な形式）
  const railItems: SerializableRailItem[] = RAIL_ITEMS.map((item) => ({
    ...item,
    active: item.value === activeValue,
  }));

  const railBottomItems: SerializableRailItem[] = RAIL_BOTTOM_ITEMS.map((item) => ({
    ...item,
    active: item.value === activeValue,
  }));

  return (
    <AdminShell
      brand="Sawcase Demo"
      navGroups={isSettings ? getSettingsNavGroups(url.pathname) : []}
      railSlot={
        <AdminRailIsland
          items={railItems}
          mode="hover-expand"
          bottomItems={railBottomItems}
        />
      }
      headerActions={
        <AdminToolbar
          feedbackPageTitle="管理画面デモ"
          notifications={notifications}
          notificationsMaxItems={5}
          notificationsMoreHref="/demo/admin/notifications"
          userName="デモユーザー"
          userEmail="demo@sawcase.dev"
          userMenuItems={userMenuItems}
        />
      }
    >
      <Component />
    </AdminShell>
  );
});

import { define } from "@/utils.ts";
import {
  AdminShell,
  AdminHeaderSearch,
  AdminHeaderNotifications,
  AdminFeedback,
  AdminHeaderUser,
} from "@kotsumo/sawcase/components";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  UsersRound,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
  Palette,
  Shield,
  Code,
  CreditCard,
} from "lucide-preact";
import type { IconRailItem, NavGroup, NotificationItem } from "@kotsumo/sawcase/components";

// アイコンレール（トップレベルセクション）
const railItems: IconRailItem[] = [
  { icon: LayoutDashboard, label: "概要", value: "dashboard", href: "/demo/admin", active: true },
  { icon: BarChart3, label: "統計サマリー", value: "analytics", href: "/demo/admin/analytics" },
  { icon: Users, label: "ユーザー管理", value: "users", href: "/demo/admin/users" },
  { icon: FolderKanban, label: "プロジェクト", value: "projects", href: "/demo/admin/projects" },
  { icon: UsersRound, label: "チーム管理", value: "team", href: "/demo/admin/team" },
  { icon: Bell, label: "通知", value: "notifications", href: "/demo/admin/notifications" },
];

const railBottomItems: IconRailItem[] = [
  { icon: Settings, label: "設定", value: "settings", href: "/demo/admin/settings" },
  { icon: HelpCircle, label: "ヘルプ", value: "help", href: "#" },
];

// 詳細ナビ（設定ページのサブメニュー等）
const navGroups: NavGroup[] = [
  {
    label: "設定",
    items: [
      { icon: Settings, label: "一般", href: "/demo/admin/settings", active: true },
      { icon: Palette, label: "外観", href: "#" },
      { icon: Shield, label: "セキュリティ", href: "#" },
      { icon: Code, label: "API", href: "#" },
      { icon: CreditCard, label: "請求", href: "#" },
    ],
  },
];

// 通知サンプルデータ
const notifications: NotificationItem[] = [
  { id: "1", title: "デプロイ完了", message: "v1.2.0 が正常にデプロイされました", time: "3分前" },
  { id: "2", title: "新規ユーザー", message: "田中太郎さんが参加しました", time: "1時間前", read: true },
  { id: "3", title: "ビルドエラー", message: "CI パイプラインが失敗しました", time: "2時間前" },
];

export default define.page(function AdminLayout({ Component }) {
  return (
    <AdminShell
      brand="Sawcase Demo"
      navGroups={navGroups}
      rail={railItems}
      railMode="hover-expand"
      railBottomItems={railBottomItems}
      headerActions={
        <>
          <AdminFeedback
            pageTitle="管理画面デモ"
            onSubmit={(data) => {
              console.log("Feedback:", data);
              alert(`フィードバック送信: ${data.type} — ${data.message}`);
            }}
          />
          <AdminHeaderSearch
            onSearch={(q) => console.log("Search:", q)}
          />
          <AdminHeaderNotifications
            items={notifications}
            onMarkRead={(id) => console.log("Mark read:", id)}
            onMarkAllRead={() => console.log("Mark all read")}
          />
          <AdminHeaderUser
            name="デモユーザー"
            email="demo@sawcase.dev"
            menuItems={[
              { label: "プロフィール", href: "#" },
              { label: "設定", href: "/demo/admin/settings" },
              { label: "ログアウト", onClick: () => alert("ログアウト"), danger: true },
            ]}
          />
        </>
      }
    >
      <Component />
    </AdminShell>
  );
});

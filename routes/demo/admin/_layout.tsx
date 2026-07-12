import { define } from "@/utils.ts";
import {
  AdminShell,
  AdminBreadcrumb,
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
} from "lucide-preact";
import type { IconRailItem, NavGroup, NotificationItem, BreadcrumbSegment } from "@kotsumo/sawcase/components";

// アイコンレール（グローバルナビ）
const railItems: IconRailItem[] = [
  { icon: LayoutDashboard, label: "ダッシュボード", value: "dashboard", href: "/demo/admin", active: true },
  { icon: Users, label: "ユーザー", value: "users", href: "/demo/admin/users" },
  { icon: FolderKanban, label: "プロジェクト", value: "projects", href: "/demo/admin/projects" },
  { icon: UsersRound, label: "チーム", value: "team", href: "/demo/admin/team" },
  { icon: BarChart3, label: "分析", value: "analytics", href: "/demo/admin/analytics" },
  { icon: Bell, label: "通知", value: "notifications", href: "/demo/admin/notifications" },
];

const railBottomItems: IconRailItem[] = [
  { icon: Settings, label: "設定", value: "settings", href: "/demo/admin/settings" },
  { icon: HelpCircle, label: "ヘルプ", value: "help", href: "#" },
];

// 詳細ナビ（セクション別）
const navGroups: NavGroup[] = [
  {
    label: "メイン",
    items: [
      { icon: LayoutDashboard, label: "概要", href: "/demo/admin", active: true },
      { icon: BarChart3, label: "統計サマリー", href: "/demo/admin/analytics" },
    ],
  },
  {
    label: "管理",
    items: [
      { icon: Users, label: "ユーザー管理", href: "/demo/admin/users" },
      { icon: FolderKanban, label: "プロジェクト", href: "/demo/admin/projects" },
      { icon: UsersRound, label: "チームメンバー", href: "/demo/admin/team" },
    ],
  },
  {
    label: "設定",
    items: [
      { icon: Settings, label: "一般設定", href: "/demo/admin/settings" },
      { icon: Bell, label: "通知設定", href: "/demo/admin/notifications" },
    ],
  },
];

// パンくず
const breadcrumbSegments: BreadcrumbSegment[] = [
  {
    label: "kotsumo",
    dropdown: {
      items: [
        { label: "kotsumo", value: "kotsumo", href: "/demo/admin" },
        { label: "dd2030jp", value: "dd2030jp", href: "#" },
        { label: "personal", value: "personal", href: "#" },
      ],
      currentValue: "kotsumo",
    },
  },
  {
    label: "sawcase-demo",
    dropdown: {
      items: [
        { label: "sawcase-demo", value: "sawcase-demo", href: "/demo/admin" },
        { label: "polimoney-hub", value: "polimoney-hub", href: "#" },
        { label: "polimoney-ledger", value: "polimoney-ledger", href: "#" },
      ],
      currentValue: "sawcase-demo",
    },
  },
  { label: "管理画面" },
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
      breadcrumb={<AdminBreadcrumb segments={breadcrumbSegments} />}
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

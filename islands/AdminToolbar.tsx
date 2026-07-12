// Island: 個別コンポーネントを直接インポート（mod.ts 経由だと Node.js 依存が入るため）
import { AdminFeedback } from "@kotsumo/sawcase/components/admin/AdminFeedback.tsx";
import { AdminHeaderSearch } from "@kotsumo/sawcase/components/admin/AdminHeaderSearch.tsx";
import { AdminHeaderNotifications } from "@kotsumo/sawcase/components/admin/AdminHeaderNotifications.tsx";
import type { NotificationItem } from "@kotsumo/sawcase/components/admin/AdminHeaderNotifications.tsx";
import { AdminHeaderUser } from "@kotsumo/sawcase/components/admin/AdminHeaderUser.tsx";

/** シリアライズ可能なメニューアイテム */
export interface SerializableMenuItem {
  label: string;
  href?: string;
  /** true の場合はダミー onClick（alert 等）を Island 内で設定 */
  action?: string;
  danger?: boolean;
}

export interface AdminToolbarProps {
  feedbackPageTitle?: string;
  notifications: NotificationItem[];
  userName: string;
  userEmail?: string;
  userAvatarUrl?: string;
  userMenuItems?: SerializableMenuItem[];
  notificationsMaxItems?: number;
  notificationsMoreHref?: string;
}

/**
 * ヘッダーアクション群の Island ラッパー。
 */
export default function AdminToolbar({
  feedbackPageTitle,
  notifications,
  userName,
  userEmail,
  userAvatarUrl,
  userMenuItems,
  notificationsMaxItems = 5,
  notificationsMoreHref = "/demo/admin/notifications",
}: AdminToolbarProps) {
  // シリアライズ可能な menuItems を UserMenuItem に変換
  const resolvedMenuItems = userMenuItems?.map((item) => ({
    label: item.label,
    href: item.href,
    danger: item.danger,
    onClick: item.action === "logout"
      ? () => alert("ログアウト")
      : undefined,
  }));

  return (
    <>
      <AdminFeedback
        pageTitle={feedbackPageTitle}
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
        maxItems={notificationsMaxItems}
        moreHref={notificationsMoreHref}
        onMarkRead={(id) => console.log("Mark read:", id)}
        onMarkAllRead={() => console.log("Mark all read")}
      />
      <AdminHeaderUser
        name={userName}
        email={userEmail}
        avatarUrl={userAvatarUrl}
        menuItems={resolvedMenuItems}
      />
    </>
  );
}

// Sawcase JS — 自動生成ファイル（編集しないでください）
"use strict";
(function(global) {

/* --- admin-nav.ts --- */
/**
 * Admin ナビゲーション — モバイルドロワーのトグル
 *
 * ハンバーガーボタンのクリックでサイドナビをドロワーとして表示/非表示する。
 * オーバーレイのクリックで閉じる。
 */

/**
 * 管理画面のモバイルナビゲーションドロワーを初期化する。
 *
 * @param navId - ナビゲーション要素の ID（デフォルト: "admin-nav"）
 * @param overlayId - オーバーレイ要素の ID（デフォルト: "admin-overlay"）
 */
function initAdminNav(
  navId = "admin-nav",
  overlayId = "admin-overlay",
) {
  const nav = document.getElementById(navId);
  const overlay = document.getElementById(overlayId);

  if (!nav) {
    console.warn(`[sawcase] ナビ要素が見つかりません: #${navId}`);
    return;
  }

  /** ドロワーを開く */
  function open() {
    nav.classList.add("sc-admin-nav--open");
    overlay?.classList.add("sc-admin-overlay--visible");
    document.body.style.overflow = "hidden";
  }

  /** ドロワーを閉じる */
  function close() {
    nav.classList.remove("sc-admin-nav--open");
    overlay?.classList.remove("sc-admin-overlay--visible");
    document.body.style.overflow = "";
  }

  /** トグル */
  function toggle() {
    if (nav.classList.contains("sc-admin-nav--open")) {
      close();
    } else {
      open();
    }
  }

  // ハンバーガーボタンにイベントを設定
  const menuBtn = document.querySelector(".sc-admin-header__menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", toggle);
  }

  // オーバーレイクリックで閉じる
  if (overlay) {
    overlay.addEventListener("click", close);
  }

  // ESC キーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("sc-admin-nav--open")) {
      close();
    }
  });

  // リサイズ時にデスクトップ幅ならドロワーを閉じる
  globalThis.addEventListener("resize", () => {
    if (globalThis.innerWidth > 768) {
      close();
    }
  });
}

/* --- docs-toc.ts --- */
/**
 * ドキュメント TOC — スクロール追従ハイライト
 *
 * IntersectionObserver でスクロール位置を監視し、
 * 現在表示中のセクションに対応する TOC リンクをハイライトする。
 */

/**
 * ドキュメント TOC のスクロール追従を初期化する。
 *
 * @param tocSelector - TOC コンテナのセレクタ（デフォルト: ".sc-docs-toc"）
 * @param headingSelector - 監視する見出しのセレクタ（デフォルト: "h2, h3"）
 */
function initDocsToc(
  tocSelector = ".sc-docs-toc",
  headingSelector = "h2, h3",
) {
  const toc = document.querySelector(tocSelector);
  if (!toc) return;

  const tocLinks = toc.querySelectorAll(".sc-docs-toc__link");
  if (tocLinks.length === 0) return;

  // 記事内の見出し要素を取得
  const article = document.querySelector(".sc-docs-article__body");
  if (!article) return;

  const headings = article.querySelectorAll(headingSelector);
  if (headings.length === 0) return;

  // IntersectionObserver でスクロール位置を監視
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (!id) continue;

          // 全リンクから active を除去
          tocLinks.forEach((link) => {
            link.classList.remove("sc-docs-toc__link--active");
          });

          // 対応するリンクに active を追加
          const activeLink = toc.querySelector(
            `.sc-docs-toc__link[href="#${id}"]`,
          );
          if (activeLink) {
            activeLink.classList.add("sc-docs-toc__link--active");
          }
        }
      }
    },
    {
      rootMargin: "-20% 0px -80% 0px",
      threshold,
    },
  );

  headings.forEach((heading) => {
    if (heading.id) {
      observer.observe(heading);
    }
  });
}

  // グローバルに公開
  global.sawcase = { initAdminNav, initDocsToc };
})(typeof window !== 'undefined' ? window : globalThis);
import { define } from "@/utils.ts";

const PLANS = [
  {
    name: "Free",
    price: "¥0",
    period: "/月",
    description: "個人利用やお試しに最適",
    features: ["ユーザー1名", "プロジェクト3件", "基本サポート", "5GB ストレージ"],
    ctaLabel: "無料で始める",
    ctaHref: "#",
  },
  {
    name: "Pro",
    price: "¥2,980",
    period: "/月",
    priceNote: "年払い ¥29,800（17%お得）",
    description: "チームでの本格利用に",
    features: ["ユーザー10名", "プロジェクト無制限", "優先サポート", "100GB ストレージ", "カスタムドメイン", "API アクセス"],
    recommended: true,
    ctaLabel: "Pro を始める",
    ctaHref: "#",
  },
  {
    name: "Enterprise",
    price: "要お問い合わせ",
    period: "",
    description: "大規模組織向け",
    features: ["ユーザー無制限", "プロジェクト無制限", "24/7 サポート", "ストレージ無制限", "SSO / SAML", "SLA 保証", "専任担当者"],
    ctaLabel: "お問い合わせ",
    ctaHref: "#",
  },
];

export default define.page(function PricingDemo() {
  return (
    <div class="sc-pricing-shell">
      <header class="sc-pricing-header">
        <div class="sc-pricing-header__inner">
          <a href="#" class="sc-pricing-header__brand" style="font-weight:700;letter-spacing:-0.02em;text-decoration:none;color:inherit;">
            Demo SaaS
          </a>
        </div>
      </header>

      <main class="sc-pricing-content">
        <div class="sc-pricing-content__inner">
          <h1 class="sc-pricing-title">料金プラン</h1>
          <p class="sc-pricing-subtitle">
            あなたのビジネスに最適なプランをお選びください
          </p>

          <div class="sc-pricing-grid">
            {PLANS.map((plan) => (
              <div
                class={`sc-pricing-card${plan.recommended ? " sc-pricing-card--recommended" : ""}`}
                key={plan.name}
              >
                {plan.recommended && (
                  <div class="sc-pricing-card__badge">おすすめ</div>
                )}
                <h3 class="sc-pricing-card__name">{plan.name}</h3>
                <div class="sc-pricing-card__price">
                  {plan.price}<span style="font-size:0.875rem;font-weight:400;">{plan.period}</span>
                </div>
                {plan.priceNote && (
                  <div class="sc-pricing-card__price-note">{plan.priceNote}</div>
                )}
                <p class="sc-pricing-card__description">{plan.description}</p>
                <ul class="sc-pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  class={`st-button ${plan.recommended ? "st-button--filled" : "st-button--outlined"}`}
                  style="display:block;text-align:center;"
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
});

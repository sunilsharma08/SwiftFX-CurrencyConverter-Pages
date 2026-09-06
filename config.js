const CONFIG = {
  appName: "SwiftFX - Currency Converter",
  developerName: "Sunil Sharma",
  contactEmail: "sunilmatrix42@gmail.com",
  effectiveDate: "August 22, 2026",
  appStoreUrl: "https://apps.apple.com/app/id6806751094",

  // Light mode colors — synced with iOS app's AppTheme (Color+Theme.swift)
  colors: {
    primary: "#4F7CFF",
    background: "#FAF8F5",
    surface: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#666B75",
    divider: "#E0E2E5",
    sourceCard: "#E3F2FD",
  },
};

// Inject colors as CSS custom properties
(function () {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(CONFIG.colors)) {
    root.style.setProperty("--color-" + key.replace(/([A-Z])/g, "-$1").toLowerCase(), value);
  }
})();

// Populate elements that reference config values via data-config attribute
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-config]").forEach(function (el) {
    const key = el.getAttribute("data-config");
    const keys = key.split(".");
    let value = CONFIG;
    for (const k of keys) {
      value = value[k];
    }
    if (value !== undefined) {
      if (el.tagName === "A" && key === "contactEmail") {
        el.href = "mailto:" + value;
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  });
});

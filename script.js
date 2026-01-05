(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Copy email template for quick contact
  const copyBtn = document.getElementById("copyBtn");
  const hint = document.getElementById("copyHint");

  function safe(v) { return (v || "").trim(); }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const name = safe(document.getElementById("name")?.value);
      const email = safe(document.getElementById("email")?.value);
      const msg = safe(document.getElementById("message")?.value);

      const body =
`Hi Kunzapp team,

Name: ${name || "[your name]"}
Email: ${email || "[your email]"}

Message:
${msg || "[your message]"}

Interested in Google Cloud / Google Workspace integrations for SaaS governance.
`;

      try {
        await navigator.clipboard.writeText(body);
        if (hint) hint.textContent = "Copied. Paste into an email to laura@kunzapp.cloud.";
      } catch {
        if (hint) hint.textContent = "Copy failed. Please select and copy manually.";
      }
    });
  }
})();

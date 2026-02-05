function updateTitle() {
  try {
    const host = window.location.host;
    const currentUrl = window.location.href;

    // 更新标题和 footer
    if (host && host.trim() !== '') {
      document.title = `Taocryptの个人主页 | ${host}`;
      const footerEl = document.querySelector("#footerTitle");
      if (footerEl) footerEl.innerHTML = host;
    } else {
      document.title = "Taocryptの个人主页";
      const footerEl = document.querySelector("#footerTitle");
      if (footerEl) footerEl.innerHTML = "";
    }

    // 动态设置 og:url（适配多域名）
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", currentUrl);

  } catch (error) {
    console.error("更新网站标题时出错:", error);
    document.title = "Taocryptの个人主页";
  }
}

updateTitle();
(function () {
  var SITE = window.SITE || { videos: {}, links: {} };

  // Works with YouTube links and Google Drive links (Drive file must be shared "Anyone with the link")
  function videoInfo(v) {
    if (!v || !v.url) return null;
    var d = v.url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([A-Za-z0-9_-]{20,})/);
    if (d) return {
      embed: "https://drive.google.com/file/d/" + d[1] + "/preview",
      watch: "https://drive.google.com/file/d/" + d[1] + "/view",
      label: "Open in Google Drive ↗"
    };
    var y = v.url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    if (y) return {
      embed: "https://www.youtube-nocookie.com/embed/" + y[1] + "?rel=0" + (v.start ? "&start=" + v.start : ""),
      watch: "https://www.youtube.com/watch?v=" + y[1] + (v.start ? "&t=" + v.start + "s" : ""),
      label: "YouTube ↗"
    };
    return null;
  }

  // Videos: <div class="video" data-video="bukkibooks"></div>
  document.querySelectorAll("[data-video]").forEach(function (box) {
    var v = SITE.videos[box.getAttribute("data-video")];
    var info = videoInfo(v);
    if (!info) {
      // Keep a poster (thumbnail) if the page has one, otherwise say "coming soon"
      if (!box.querySelector(".video-poster")) box.innerHTML = '<div class="video-soon">Video coming soon</div>';
      return;
    }
    box.innerHTML =
      '<iframe src="' + info.embed + '" title="' + (v.title || "Video") + '" loading="lazy" ' +
      'allow="autoplay; encrypted-media; fullscreen; picture-in-picture" ' +
      'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  });

  // "Open video" links: <a data-video-link="bukkibooks">
  document.querySelectorAll("[data-video-link]").forEach(function (a) {
    var info = videoInfo(SITE.videos[a.getAttribute("data-video-link")]);
    if (!info) { a.hidden = true; return; }
    a.href = info.watch;
    if (!a.hasAttribute("data-keep-text")) a.textContent = info.label;
  });

  // Links: <a data-link="calendly">
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.getAttribute("data-link");
    var val = SITE.links[key];
    if (!val) { a.hidden = true; return; }
    a.href = key === "email" ? "mailto:" + val : val;
    if (a.hasAttribute("data-show-value")) a.textContent = val;
  });

  // Photo: show the placeholder until claire.jpg exists
  document.querySelectorAll("img[data-photo]").forEach(function (img) {
    var box = img.closest(".portrait");
    function missing() { if (box) box.classList.add("no-photo"); }
    if (img.complete && img.naturalWidth === 0) missing();
    img.addEventListener("error", missing);
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Tabs: each nav item opens its own panel (#home, #about, ...)
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  if (panels.length) {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
    var showTab = function (id, scroll) {
      var target = document.getElementById(id);
      if (!target || !target.classList.contains("tab-panel")) { id = panels[0].id; target = panels[0]; }
      panels.forEach(function (p) { p.classList.toggle("active", p === target); });
      navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + id); });
      target.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      if (scroll !== false) window.scrollTo(0, 0);
    };
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      if (el && el.classList.contains("tab-panel")) {
        e.preventDefault();
        if (location.hash !== "#" + id) history.pushState(null, "", "#" + id);
        showTab(id);
      }
    });
    window.addEventListener("popstate", function () { showTab(location.hash.slice(1)); });
    window.addEventListener("hashchange", function () { showTab(location.hash.slice(1)); });
    showTab(location.hash.slice(1), false);
  }

  // Gentle fade-in on scroll
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { rev.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  // Card spotlight that follows the mouse
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

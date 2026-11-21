/* Elite Code Academy — мобільне меню «рідке золото» (2026-11-21).
   Замінює кнопку «+» на телефоні: золото розтікається з кнопки на весь екран. Підключається після app.js. */
(function () {
    "use strict";
    var MQ = window.matchMedia ? matchMedia("(max-width: 920px)") : { matches: true };
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];
    var overlay, blob, turb, disp, btn, items = [], open = false, raf = 0, cur = 0, lastFocus = null;

    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

    function build() {
        var old = document.getElementById("nav-toggle");
        if (!old || old.classList.contains("eca-burger")) return false;
        btn = old.cloneNode(false);
        btn.className = old.className + " eca-burger";
        btn.innerHTML = "<span></span><span></span>";
        btn.setAttribute("aria-controls", "eca-mm");
        btn.setAttribute("aria-label", "Відкрити меню");
        old.parentNode.replaceChild(btn, old);
        btn.addEventListener("click", function () { toggle(); });

        var links = Array.prototype.slice.call(document.querySelectorAll("#site-nav .nav-link"));
        var cta = document.querySelector("#site-nav .nav-actions .btn");
        var login = document.querySelector("#site-nav .eca-account");
        var list = links.map(function (a, i) {
            var current = a.classList.contains("is-active");
            return '<li><a class="eca-mm__item' + (current ? " is-current" : "") + '" href="' + esc(a.getAttribute("href")) + '"' + (current ? ' aria-current="page"' : "") + "><i>" + (ROMAN[i] || i + 1) + "</i>" + esc(a.textContent.trim()) + "</a></li>";
        }).join("");

        overlay = document.createElement("div");
        overlay.className = "eca-mm";
        overlay.id = "eca-mm";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML =
            '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><filter id="eca-mm-water" x="-50%" y="-50%" width="200%" height="200%">' +
            '<feTurbulence type="fractalNoise" baseFrequency="0.0045 0.007" numOctaves="1" seed="4" result="n"/>' +
            '<feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter></svg>' +
            '<div class="eca-mm__liquid" aria-hidden="true"><div class="eca-mm__blob"></div></div>' +
            '<nav class="eca-mm__panel" aria-label="Меню"><ol class="eca-mm__list">' + list + "</ol>" +
            '<div class="eca-mm__foot">' +
            (cta ? '<a class="eca-mm__cta" href="' + esc(cta.getAttribute("href")) + '">' + esc(cta.textContent.trim()) + "</a>" : "") +
            (login ? '<a class="eca-mm__login" href="' + esc(login.getAttribute("href")) + '">' + (login.querySelector(".eca-account__avatar") ? "Мій кабінет" : "Увійти в кабінет") + "</a>" : "") +
            '<div class="eca-mm__contacts"><a href="https://t.me/itffata" target="_blank" rel="noopener">Telegram</a><a href="https://www.instagram.com/elite_code_academy/" target="_blank" rel="noopener">Instagram</a></div>' +
            "</div></nav>";
        document.body.appendChild(overlay);
        blob = overlay.querySelector(".eca-mm__blob");
        turb = overlay.querySelector("feTurbulence");
        disp = overlay.querySelector("feDisplacementMap");
        items = Array.prototype.slice.call(overlay.querySelectorAll(".eca-mm__item"));
        overlay.addEventListener("click", function (e) {
            var a = e.target.closest("a");
            if (a && !a.target && open) { toggle(false); }
        });
        overlay.addEventListener("keydown", trap);
        return true;
    }

    function place() {
        var b = btn.getBoundingClientRect(), W = window.innerWidth, H = window.innerHeight;
        var x = b.left + b.width / 2, y = b.top + b.height / 2;
        var d = Math.ceil(Math.hypot(Math.max(x, W - x), Math.max(y, H - y)) * 2.2);
        blob.style.width = blob.style.height = d + "px";
        blob.style.left = (x - d / 2) + "px";
        blob.style.top = (y - d / 2) + "px";
    }

    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    function animate(to, dur, done) {
        cancelAnimationFrame(raf);
        var from = cur, t0 = performance.now();
        function frame(now) {
            var t = dur ? Math.min(1, (now - t0) / dur) : 1, e = ease(t);
            cur = from + (to - from) * e;
            blob.style.transform = "scale(" + Math.max(cur, 0.0001) + ")";
            disp.setAttribute("scale", reduce ? "0" : (48 * Math.sin(Math.PI * t)).toFixed(1));
            turb.setAttribute("baseFrequency", (0.0045 + 0.002 * t).toFixed(4) + " " + (0.007 + 0.003 * t).toFixed(4));
            if (t < 1) raf = requestAnimationFrame(frame);
            else { disp.setAttribute("scale", "0"); if (done) done(); }
        }
        raf = requestAnimationFrame(frame);
    }

    function toggle(force) {
        var next = typeof force === "boolean" ? force : !open;
        if (next === open) return;
        open = next;
        btn.setAttribute("aria-expanded", String(open));
        btn.setAttribute("aria-label", open ? "Закрити меню" : "Відкрити меню");
        overlay.setAttribute("aria-hidden", String(!open));
        items.forEach(function (a, i) { a.style.transitionDelay = open ? (0.5 + i * 0.07) + "s" : (0.03 * (items.length - i)) + "s"; });
        if (open) {
            lastFocus = document.activeElement;
            place();
            overlay.classList.remove("is-closing");
            overlay.classList.add("is-active", "is-open");
            document.body.classList.add("eca-mm-open");
            animate(1, reduce ? 0 : 1000);
            setTimeout(function () { if (open && items[0]) items[0].focus({ preventScroll: true }); }, reduce ? 0 : 600);
        } else {
            overlay.classList.add("is-closing");
            overlay.classList.remove("is-open");
            setTimeout(function () {
                animate(0, reduce ? 0 : 750, function () {
                    if (open) return;
                    overlay.classList.remove("is-active", "is-closing");
                    document.body.classList.remove("eca-mm-open");
                });
            }, reduce ? 0 : 180);
            if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
        }
    }

    function trap(e) {
        if (!open) return;
        if (e.key === "Escape") { toggle(false); btn.focus(); return; }
        if (e.key !== "Tab") return;
        var els = [btn].concat(Array.prototype.slice.call(overlay.querySelectorAll("a")));
        var first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    document.addEventListener("keydown", function (e) {
        if (!open) return;
        if (e.key === "Escape") { toggle(false); btn.focus(); }
        else if (e.key === "Tab" && document.activeElement === btn) trap(e);
    });
    window.addEventListener("resize", function () { if (open) place(); if (open && !MQ.matches) toggle(false); });

    function start() {
        if (build()) return;
        var tries = 0, t = setInterval(function () { if (build() || ++tries > 40) clearInterval(t); }, 50);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

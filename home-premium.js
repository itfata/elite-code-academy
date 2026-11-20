/* Elite Code Academy — сайт v6: тиха поява блоків, перемикач тарифів, відео студентів. */
(function () {
    "use strict";
    function fade() {
        var els = document.querySelectorAll(".cx [data-fade]");
        if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
        var io = new IntersectionObserver(function (l) { l.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
        els.forEach(function (e) { io.observe(e); });
    }
    function tabs() {
        document.querySelectorAll(".cx-switch [role=tablist]").forEach(function (list) {
            var btns = Array.prototype.slice.call(list.querySelectorAll("[role=tab]"));
            function sel(b) { btns.forEach(function (x) { var on = x === b; x.setAttribute("aria-selected", String(on)); var p = document.getElementById(x.getAttribute("aria-controls")); if (p) { p.hidden = !on; if (on) p.classList.add("is-in"); } }); }
            btns.forEach(function (b, i) {
                b.addEventListener("click", function () { sel(b); });
                b.addEventListener("keydown", function (e) { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { var n = btns[(i + 1) % btns.length]; n.focus(); sel(n); } });
            });
        });
    }
    function videos() {
        var vids = document.querySelectorAll(".cx-vid video, .cx-screen video");
        if (!vids.length) return;
        var io = "IntersectionObserver" in window ? new IntersectionObserver(function (l) {
            l.forEach(function (en) { var v = en.target; if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); });
        }, { threshold: 0.3 }) : null;
        vids.forEach(function (v) { if (io) io.observe(v); });
        if (!document.getElementById("student-video-modal")) {
            document.querySelectorAll(".cx-vid").forEach(function (b) {
                b.addEventListener("click", function () {
                    var v = b.querySelector("video"); var req = v.requestFullscreen || v.webkitRequestFullscreen || v.webkitEnterFullscreen;
                    if (req) { v.controls = true; v.currentTime = 0; req.call(v); }
                });
            });
            document.addEventListener("fullscreenchange", function () { if (!document.fullscreenElement) vids.forEach(function (v) { v.controls = false; }); });
        }
    }
    function start() { fade(); tabs(); videos(); }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

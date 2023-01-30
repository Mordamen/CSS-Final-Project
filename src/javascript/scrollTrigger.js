/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      we ||
      ("undefined" != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  function z(e, t) {
    return ~qe.indexOf(e) && qe[qe.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (Be && Be.isPressed) || ze.cache++;
  }
  function G(r, n) {
    function Uc(e) {
      if (e || 0 === e) {
        o && (Te.history.scrollRestoration = "manual");
        var t = Be && Be.isPressed;
        (e = Uc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0)),
          r(e),
          (Uc.cacheID = ze.cache),
          t && i("ss", e);
      } else (n || ze.cache !== Uc.cacheID || i("ref")) && ((Uc.cacheID = ze.cache), (Uc.v = r()));
      return Uc.v + Uc.offset;
    }
    return (Uc.offset = 0), r && Uc;
  }
  function J(e) {
    return (
      we.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ce.scrollingElement || ke);
    var o = ze.indexOf(t),
      i = n === Ne.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || t.addEventListener("scroll", F);
    var a = ze[o + i],
      s =
        a ||
        (ze[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function L(e, t, o) {
    function qd(e, t) {
      var r = Ie();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ie(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: qd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ie();
        return (
          (!e && 0 !== e) || e === i || qd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = we.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, ze),
          n.push.apply(n, qe),
          (ze = t),
          (qe = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (we = e || r()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Te = window),
        (ke = (Ce = document).documentElement),
        (Ee = Ce.body),
        (t = [Te, Ce, ke, Ee]),
        we.utils.clamp,
        (Le = we.core.context || function () {}),
        (Oe = "onpointerenter" in Ee ? "pointer" : "mouse"),
        (Pe = k.isTouch =
          Te.matchMedia &&
          Te.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Te ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (De = k.eventTypes =
          (
            "ontouchstart" in ke
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ke
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (Me = 1)),
      Me
    );
  }
  var we,
    Me,
    Te,
    Ce,
    ke,
    Ee,
    Pe,
    Oe,
    Ae,
    t,
    Be,
    De,
    Le,
    o = 1,
    Fe = [],
    ze = [],
    qe = [],
    Ie = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Ye = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(e, Ne.sc())
          : Te.pageXOffset || Ce[n] || ke[n] || Ee[n] || 0;
      }),
    },
    Ne = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ye,
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(Ye.sc(), e)
          : Te.pageYOffset || Ce[a] || ke[a] || Ee[a] || 0;
      }),
    };
  (Ye.op = Ne), (ze.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      Me || P(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        p = e.event,
        d = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        S = e.onChangeY,
        T = e.onChange,
        k = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        R = e.onHoverEnd,
        z = e.onMove,
        q = e.ignoreCheck,
        I = e.isNormalizer,
        X = e.onGestureStart,
        Y = e.onGestureEnd,
        V = e.onWheel,
        U = e.onEnable,
        j = e.onDisable,
        H = e.onClick,
        W = e.scrollSpeed,
        G = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function Re() {
        return (ye = Ie());
      }
      function Se(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && "touch" !== e.pointerType) ||
          (q && q(e, t))
        );
      }
      function Ue() {
        var e = (se.deltaX = N(be)),
          t = (se.deltaY = N(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        T && (r || n) && T(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (z && z(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (V(se), (oe = !1)),
          (ee = 0);
      }
      function Ve(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(Ue)) : Ue();
      }
      function We(e, t) {
        Z &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((be[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((me[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(Ue)) : Ue();
      }
      function Xe(e) {
        if (!Se(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              We(n, o),
              i || (d && d(se)));
        }
      }
      function Ze(t) {
        if (!Se(t, 1)) {
          C(I ? i : ve, De[1], Xe, !0);
          var e = !isNaN(se.y - se.startY),
            r =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            n = M(t);
          !r &&
            e &&
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              Q &&
              we.delayedCall(0.08, function () {
                if (300 < Ie() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (ve.createEvent) {
                    var e = ve.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      Te,
                      1,
                      n.screenX,
                      n.screenY,
                      n.clientX,
                      n.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !I && te.restart(!0),
            g && r && g(se),
            b && b(se, r);
        }
      }
      function $e(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          X(e, se.isDragging)
        );
      }
      function _e() {
        return (se.isGesturing = !1) || Y(se);
      }
      function af(e) {
        if (!Se(e)) {
          var t = ue(),
            r = fe();
          Ve((t - pe) * W, (r - de) * W, 1),
            (pe = t),
            (de = r),
            l && te.restart(!0);
        }
      }
      function bf(e) {
        if (!Se(e)) {
          (e = M(e, s)), V && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) *
            f;
          Ve(e.deltaX * t, e.deltaY * t, 0), l && !I && te.restart(!0);
        }
      }
      function cf(e) {
        if (!Se(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && We(n, o);
        }
      }
      function df(e) {
        (se.event = e), D(se);
      }
      function ef(e) {
        (se.event = e), R(se);
      }
      function ff(e) {
        return Se(e) || (M(e, s) && H(se));
      }
      (this.target = i = J(i) || ke),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (W = W || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Te.getComputedStyle(Ee).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, Ye),
        fe = K(i, Ne),
        pe = ue(),
        de = fe(),
        ge =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === De[0],
        he = A(i),
        ve = i.ownerDocument || Ce,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Se(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(I ? i : ve, De[1], Xe, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        });
      (te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Le(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(he ? ve : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", af, s, G),
              0 <= t.indexOf("wheel") && B(i, "wheel", bf, s, G),
              ((0 <= t.indexOf("touch") && Pe) || 0 <= t.indexOf("pointer")) &&
                (B(i, De[0], xe, s, G),
                B(ve, De[2], Ze),
                B(ve, De[3], Ze),
                Q && B(i, "click", Re, !1, !0),
                H && B(i, "click", ff),
                X && B(ve, "gesturestart", $e),
                Y && B(ve, "gestureend", _e),
                D && B(i, Oe + "enter", df),
                R && B(i, Oe + "leave", ef),
                z && B(i, Oe + "move", cf)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              U && U(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Fe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(he ? ve : i, "scroll", F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(I ? i : ve, De[1], Xe, !0)),
            C(he ? ve : i, "scroll", af, G),
            C(i, "wheel", bf, G),
            C(i, De[0], xe, G),
            C(ve, De[2], Ze),
            C(ve, De[3], Ze),
            C(i, "click", Re, !0),
            C(i, "click", ff),
            C(ve, "gesturestart", $e),
            C(ve, "gestureend", _e),
            C(i, Oe + "enter", df),
            C(i, Oe + "leave", ef),
            C(i, Oe + "move", cf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            j && j(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Be === se && (Be = 0);
          }),
        Fe.push(se),
        I && A(i) && (Be = se),
        se.enable(p);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.11.5"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = P),
    (k.getAll = function () {
      return Fe.slice();
    }),
    (k.getById = function (t) {
      return Fe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && we.registerPlugin(k);
  function za() {
    return (nt = 1);
  }
  function Aa() {
    return (nt = 0);
  }
  function Ba(e) {
    return e;
  }
  function Ca(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Da() {
    return "undefined" != typeof window;
  }
  function Ea() {
    return Je || (Da() && (Je = window.gsap) && Je.registerPlugin && Je);
  }
  function Fa(e) {
    return !!~l.indexOf(e);
  }
  function Ga(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (Fa(e)
        ? function () {
            return (Ft.width = je.innerWidth), (Ft.height = je.innerHeight), Ft;
          }
        : function () {
            return kt(e);
          })
    );
  }
  function Ja(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = "scroll" + n) && (i = z(e, r))
      ? i() - Ga(e)()[o]
      : Fa(e)
      ? (Ke[r] || Ge[r]) -
        (je["inner" + n] || Ke["client" + n] || Ge["client" + n])
      : e[r] - e["offset" + n];
  }
  function Ka(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function La(e) {
    return "string" == typeof e;
  }
  function Ma(e) {
    return "function" == typeof e;
  }
  function Na(e) {
    return "number" == typeof e;
  }
  function Oa(e) {
    return "object" == typeof e;
  }
  function Pa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Qa(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function fb(e) {
    return je.getComputedStyle(e);
  }
  function hb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function jb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function kb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function mb(o) {
    var i = Je.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function ob(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function pb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function qb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function rb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function vb(e, t) {
    if (La(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in R
            ? R[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function wb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      p = o.fontWeight,
      d = He.createElement("div"),
      g = Fa(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? Ge : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === Ne ? S : T) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (d._isStart = b),
      d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (d.style.cssText = y),
      // (d.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
      (d._offset = d["offset" + n.op.d2]),
      q(d, 0, n, b),
      d
    );
  }
  function Bb() {
    return 34 < dt() - gt && (w = w || requestAnimationFrame(j));
  }
  function Cb() {
    (v && v.isPressed && !(v.startX > Ge.clientWidth)) ||
      (ze.cache++,
      v ? (w = w || requestAnimationFrame(j)) : j(),
      gt || Y("scrollStart"),
      (gt = dt()));
  }
  function Db() {
    (y = je.innerWidth), (m = je.innerHeight);
  }
  function Eb() {
    ze.cache++,
      rt ||
        h ||
        He.fullscreenElement ||
        He.webkitFullscreenElement ||
        (b &&
          y === je.innerWidth &&
          !(Math.abs(je.innerHeight - m) > 0.25 * je.innerHeight)) ||
        c.restart(!0);
  }
  function Hb() {
    return qb($, "scrollEnd", Hb) || Dt(!0);
  }
  function Kb(e) {
    for (var t = 0; t < V.length; t += 5)
      (!e || (V[t + 4] && V[t + 4].query === e)) &&
        ((V[t].style.cssText = V[t + 1]),
        V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""),
        (V[t + 3].uncache = 1));
  }
  function Lb(e, t) {
    var r;
    for (ot = 0; ot < Ot.length; ot++)
      !(r = Ot[ot]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Kb(t), t || Y("revert");
  }
  function Mb(e, t) {
    ze.cache++,
      (!t && ct) ||
        ze.forEach(function (e) {
          return Ma(e) && e.cacheID++ && (e.rec = 0);
        }),
      La(e) && (je.history.scrollRestoration = x = e);
  }
  function Zb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = H.length, a = t.style, s = e.style; i--; )
        a[(o = H[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[T] = s[S] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[bt] = jb(e, Ye) + Ct),
        (a[mt] = jb(e, Ne) + Ct),
        (a[St] = s[Mt] = s.top = s.left = "0"),
        Rt(n),
        (s[bt] = s.maxWidth = r[bt]),
        (s[mt] = s.maxHeight = r[mt]),
        (s[St] = r[St]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function ac(e) {
    for (var t = W.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(W[o], r[W[o]]);
    return (n.t = e), n;
  }
  function dc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
    Ma(e) && (e = e(s)),
      La(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? vb("0" + e.substr(3), r) : 0));
    var d,
      g,
      h,
      v = p ? p.time() : 0;
    if ((p && p.seek(0), Na(e))) a && q(a, r, n, !0);
    else {
      Ma(t) && (t = t(s));
      var b,
        m,
        y,
        x,
        w = (e || "0").split(" ");
      (h = J(t) || Ge),
        ((b = kt(h) || {}) && (b.left || b.top)) ||
          "none" !== fb(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (b = kt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = vb(w[0], b[n.d])),
        (y = vb(w[1] || "0", r)),
        (e = b[n.p] - l[n.p] - c + m + o - y),
        a && q(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (i) {
      var _ = e + r,
        S = i._isStart;
      (d = "scroll" + n.d2),
        q(
          i,
          _,
          n,
          (S && 20 < _) ||
            (!S && (u ? Math.max(Ge[d], Ke[d]) : i.parentNode[d]) <= _ + 1)
        ),
        u &&
          ((l = kt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Ct));
    }
    return (
      p &&
        h &&
        ((d = kt(h)),
        p.seek(f),
        (g = kt(h)),
        (p._caScrollDist = d[n.p] - g[n.p]),
        (e = (e / p._caScrollDist) * f)),
      p && p.seek(v),
      p ? e : Math.round(e)
    );
  }
  function fc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === Ge) {
        for (o in ((e._stOrig = a.cssText), (i = fb(e))))
          +o ||
            Z.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Je.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function gc(l, e) {
    function Vj(e, t, r, n, o) {
      var i = Vj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (c = Math.round(r)),
        (t[p] = e),
        ((t.modifiers = s)[p] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (i.kill(), (Vj.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onUpdate = function () {
          ze.cache++, j();
        }),
        (t.onComplete = function () {
          (Vj.tween = 0), a && a.call(i);
        }),
        (i = Vj.tween = Je.to(l, t))
      );
    }
    var c,
      u,
      f = K(l, e),
      p = "_scroll" + e.p2;
    return (
      ((l[p] = f).wheelHandler = function () {
        return Vj.tween && Vj.tween.kill() && (Vj.tween = 0);
      }),
      pb(l, "wheel", f.wheelHandler),
      Vj
    );
  }
  var Je,
    s,
    je,
    He,
    Ke,
    Ge,
    l,
    c,
    Qe,
    et,
    tt,
    u,
    rt,
    nt,
    f,
    ot,
    p,
    d,
    g,
    it,
    at,
    h,
    v,
    b,
    m,
    y,
    E,
    st,
    x,
    lt,
    w,
    ct,
    ut,
    ft,
    pt = 1,
    dt = Date.now,
    _ = dt(),
    gt = 0,
    ht = 0,
    vt = Math.abs,
    S = "right",
    T = "bottom",
    bt = "width",
    mt = "height",
    yt = "Right",
    xt = "Left",
    wt = "Top",
    _t = "Bottom",
    St = "padding",
    Mt = "margin",
    Tt = "Width",
    D = "Height",
    Ct = "px",
    kt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== fb(e)[f] &&
          Je.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Et = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Pt = { toggleActions: "play", anticipatePin: 0 },
    R = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    q = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + Tt] = 1),
        (o["border" + a + Tt] = 0),
        (o[r.p] = t + "px"),
        Je.set(e, o);
    },
    Ot = [],
    At = {},
    I = {},
    X = [],
    Y = function _dispatch(e) {
      return (
        (I[e] &&
          I[e].map(function (e) {
            return e();
          })) ||
        X
      );
    },
    V = [],
    Bt = 0,
    Dt = function _refreshAll(e, t) {
      if (!gt || e) {
        (ct = $.isRefreshing = !0),
          ze.forEach(function (e) {
            return Ma(e) && e.cacheID++ && (e.rec = e());
          });
        var r = Y("refreshInit");
        it && $.sort(),
          t || Lb(),
          ze.forEach(function (e) {
            Ma(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Ot.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          Ot.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[r];
              e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[r] - n),
                e.revert(!1, 1);
            }
          }),
          Ot.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, Ja(e.scroller, e._dir))
              )
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ze.forEach(function (e) {
            Ma(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Mb(x, 1),
          c.pause(),
          Bt++,
          j(2),
          Ot.forEach(function (e) {
            return Ma(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (ct = $.isRefreshing = !1),
          Y("refresh");
      } else pb($, "scrollEnd", Hb);
    },
    U = 0,
    Lt = 1,
    j = function _updateAll(e) {
      if (!ct || 2 === e) {
        ($.isUpdating = !0), ft && ft.update(0);
        var t = Ot.length,
          r = dt(),
          n = 50 <= r - _,
          o = t && Ot[0].scroll();
        if (
          ((Lt = o < U ? -1 : 1),
          (U = o),
          n &&
            (gt && !nt && 200 < r - gt && ((gt = 0), Y("scrollEnd")),
            (tt = _),
            (_ = r)),
          Lt < 0)
        ) {
          for (ot = t; 0 < ot--; ) Ot[ot] && Ot[ot].update(0, n);
          Lt = 1;
        } else for (ot = 0; ot < t; ot++) Ot[ot] && Ot[ot].update(0, n);
        $.isUpdating = !1;
      }
      w = 0;
    },
    H = [
      "left",
      "top",
      T,
      S,
      Mt + _t,
      Mt + yt,
      Mt + wt,
      Mt + xt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    W = H.concat([
      bt,
      mt,
      "boxSizing",
      "max" + Tt,
      "max" + D,
      "position",
      Mt,
      St,
      St + wt,
      St + yt,
      St + _t,
      St + xt,
    ]),
    Q = /([A-Z])/g,
    Rt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Je.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(Q, "-$1").toLowerCase());
      }
    },
    Ft = { left: 0, top: 0 },
    Z = /(webkit|moz|length|cssText|inset)/i,
    $ =
      ((ScrollTrigger.prototype.init = function init(M, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), ht)
        ) {
          var C,
            n,
            d,
            k,
            E,
            P,
            O,
            A,
            B,
            D,
            L,
            e,
            R,
            F,
            q,
            I,
            X,
            t,
            Y,
            b,
            N,
            V,
            m,
            U,
            y,
            j,
            x,
            r,
            w,
            _,
            H,
            o,
            g,
            W,
            G,
            Q,
            Z,
            S,
            i,
            $ = (M = hb(La(M) || Na(M) || M.nodeType ? { trigger: M } : M, Pt))
              .onUpdate,
            ee = M.toggleClass,
            a = M.id,
            te = M.onToggle,
            re = M.onRefresh,
            ne = M.scrub,
            oe = M.trigger,
            ie = M.pin,
            ae = M.pinSpacing,
            se = M.invalidateOnRefresh,
            le = M.anticipatePin,
            s = M.onScrubComplete,
            h = M.onSnapComplete,
            ce = M.once,
            ue = M.snap,
            fe = M.pinReparent,
            l = M.pinSpacer,
            pe = M.containerAnimation,
            de = M.fastScrollEnd,
            ge = M.preventOverlaps,
            he =
              M.horizontal || (M.containerAnimation && !1 !== M.horizontal)
                ? Ye
                : Ne,
            ve = !ne && 0 !== ne,
            be = J(M.scroller || je),
            c = Je.core.getCache(be),
            me = Fa(be),
            ye =
              "fixed" ===
              ("pinType" in M
                ? M.pinType
                : z(be, "pinType") || (me && "fixed")),
            xe = [M.onEnter, M.onLeave, M.onEnterBack, M.onLeaveBack],
            we = ve && M.toggleActions.split(" "),
            u = "markers" in M ? M.markers : Pt.markers,
            _e = me ? 0 : parseFloat(fb(be)["border" + he.p2 + Tt]) || 0,
            Se = this,
            Me =
              M.onRefreshInit &&
              function () {
                return M.onRefreshInit(Se);
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? je["inner" + o] : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Ce = (function _getOffsetsFunc(e, t) {
              return !t || ~qe.indexOf(e)
                ? Ga(e)
                : function () {
                    return Ft;
                  };
            })(be, me),
            ke = 0,
            Ee = 0,
            Pe = K(be, he);
          if (
            (st(Se),
            (Se._dir = he),
            (le *= 45),
            (Se.scroller = be),
            (Se.scroll = pe ? pe.time.bind(pe) : Pe),
            (k = Pe()),
            (Se.vars = M),
            (T = T || M.animation),
            "refreshPriority" in M &&
              ((it = 1), -9999 === M.refreshPriority && (ft = Se)),
            (c.tweenScroll = c.tweenScroll || {
              top: gc(be, Ne),
              left: gc(be, Ye),
            }),
            (Se.tweenTo = C = c.tweenScroll[he.p]),
            (Se.scrubDuration = function (e) {
              (o = Na(e) && e)
                ? H
                  ? H.duration(e)
                  : (H = Je.to(T, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Se);
                      },
                    }))
                : (H && H.progress(1).kill(), (H = 0));
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== M.immediateRender &&
                  T.duration() &&
                  T.render(0, !0, !0)),
              (Se.animation = T.pause()),
              (T.scrollTrigger = Se).scrubDuration(ne),
              H && H.resetTo && H.resetTo("totalProgress", 0),
              (w = 0),
              (a = a || T.vars.id)),
            Ot.push(Se),
            ue &&
              ((Oa(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in Ge.style &&
                Je.set(me ? [Ge, Ke] : be, { scrollBehavior: "auto" }),
              ze.forEach(function (e) {
                return (
                  Ma(e) &&
                  e.target === (me ? He.scrollingElement || Ke : be) &&
                  (e.smooth = !1)
                );
              }),
              (d = Ma(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Je.utils.snap(kb(t), e);
                    };
                  })(T)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return mb(kb(r))(e, t.direction);
                    };
                  })(T)
                : !1 !== ue.directional
                ? function (e, t) {
                    return mb(ue.snapTo)(e, dt() - Ee < 500 ? 0 : t.direction);
                  }
                : Je.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Oa(g) ? et(g.min, g.max) : et(g, g)),
              (W = Je.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Pe(),
                  t = dt() - Ee < 500,
                  r = C.tween;
                if (
                  !(t || Math.abs(Se.getVelocity()) < 10) ||
                  r ||
                  nt ||
                  ke === e
                )
                  Se.isActive && ke !== e && W.restart(!0);
                else {
                  var n = (e - P) / R,
                    o = T && !ve ? T.totalProgress() : n,
                    i = t ? 0 : ((o - _) / (dt() - tt)) * 1e3 || 0,
                    a = Je.utils.clamp(-n, 1 - n, (vt(i / 2) * i) / 0.185),
                    s = n + (!1 === ue.inertia ? 0 : a),
                    l = et(0, 1, d(s, Se)),
                    c = Math.round(P + l * R),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    p = ue.onComplete;
                  if (e <= O && P <= e && c !== e) {
                    if (r && !r._initted && r.data <= vt(c - e)) return;
                    !1 === ue.inertia && (a = l - n),
                      C(
                        c,
                        {
                          duration: g(
                            vt(
                              (0.185 * Math.max(vt(s - o), vt(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || "power3",
                          data: vt(c - e),
                          onInterrupt: function onInterrupt() {
                            return W.restart(!0) && f && f(Se);
                          },
                          onComplete: function onComplete() {
                            Se.update(),
                              (ke = Pe()),
                              (w = _ =
                                T && !ve ? T.totalProgress() : Se.progress),
                              h && h(Se),
                              p && p(Se);
                          },
                        },
                        e,
                        a * R,
                        c - e - a * R
                      ),
                      u && u(Se, C.tween);
                  }
                }
              }).pause())),
            a && (At[a] = Se),
            (i =
              (i =
                (oe = Se.trigger = J(oe || ie)) &&
                oe._gsap &&
                oe._gsap.stRevert) && i(Se)),
            (ie = !0 === ie ? oe : J(ie)),
            La(ee) && (ee = { targets: oe, className: ee }),
            ie &&
              (!1 === ae ||
                ae === Mt ||
                (ae =
                  !(
                    !ae &&
                    ie.parentNode &&
                    ie.parentNode.style &&
                    "flex" === fb(ie.parentNode).display
                  ) && St),
              (Se.pin = ie),
              (n = Je.core.getCache(ie)).spacer
                ? (F = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = ac(l))),
                  (n.spacer = X = l || He.createElement("div")),
                  X.classList.add("pin-spacer"),
                  a && X.classList.add("pin-spacer-" + a),
                  (n.pinState = F = ac(ie))),
              !1 !== M.force3D && Je.set(ie, { force3D: !0 }),
              (Se.spacer = X = n.spacer),
              (r = fb(ie)),
              (m = r[ae + he.os2]),
              (Y = Je.getProperty(ie)),
              (b = Je.quickSetter(ie, he.a, Ct)),
              Zb(ie, X, r),
              (I = ac(ie))),
            u)
          ) {
            (e = Oa(u) ? hb(u, Et) : Et),
              (D = wb("scroller-start", a, be, he, e, 0)),
              (L = wb("scroller-end", a, be, he, e, 0, D)),
              (t = D["offset" + he.op.d2]);
            var f = J(z(be, "content") || be);
            // (A = this.markerStart = wb("start", a, f, he, e, t, 0, pe)),
            //   (B = this.markerEnd = wb("end", a, f, he, e, t, 0, pe)),
            pe && (S = Je.quickSetter([A, B], he.a, Ct)),
              ye ||
                (qe.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = fb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? Ge : be),
                Je.set([D, L], { force3D: !0 }),
                (y = Je.quickSetter(D, he.a, Ct)),
                (x = Je.quickSetter(L, he.a, Ct)));
          }
          if (pe) {
            var p = pe.vars.onUpdate,
              v = pe.vars.onUpdateParams;
            pe.eventCallback("onUpdate", function () {
              Se.update(0, 0, 1), p && p.apply(pe, v || []);
            });
          }
          (Se.previous = function () {
            return Ot[Ot.indexOf(Se) - 1];
          }),
            (Se.next = function () {
              return Ot[Ot.indexOf(Se) + 1];
            }),
            (Se.revert = function (e, t) {
              if (!t) return Se.kill(!0);
              var r = !1 !== e || !Se.enabled,
                n = rt;
              r !== Se.isReverted &&
                (r &&
                  ((Q = Math.max(Pe(), Se.scroll.rec || 0)),
                  (G = Se.progress),
                  (Z = T && T.progress())),
                A &&
                  [A, B, D, L].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && ((rt = 1), Se.update(r)),
                !ie ||
                  (fe && Se.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ie, X, F)
                    : Zb(ie, X, fb(ie), U)),
                r || Se.update(r),
                (rt = n),
                (Se.isReverted = r));
            }),
            (Se.refresh = function (e, t) {
              if ((!rt && Se.enabled) || t)
                if (ie && e && gt) pb(ScrollTrigger, "scrollEnd", Hb);
                else {
                  !ct && Me && Me(Se),
                    (rt = 1),
                    (Ee = dt()),
                    C.tween && (C.tween.kill(), (C.tween = 0)),
                    H && H.pause(),
                    se && T && T.revert({ kill: !1 }).invalidate(),
                    Se.isReverted || Se.revert(!0, !0),
                    (Se._subPinOffset = !1);
                  for (
                    var r,
                      n,
                      o,
                      i,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      p,
                      d = Te(),
                      g = Ce(),
                      h = pe ? pe.duration() : Ja(be, he),
                      v = 0,
                      b = 0,
                      m = M.end,
                      y = M.endTrigger || oe,
                      x =
                        M.start ||
                        (0 !== M.start && oe ? (ie ? "0 0" : "0 100%") : 0),
                      w = (Se.pinnedContainer =
                        M.pinnedContainer && J(M.pinnedContainer)),
                      _ = (oe && Math.max(0, Ot.indexOf(Se))) || 0,
                      S = _;
                    S--;

                  )
                    (s = Ot[S]).end || s.refresh(0, 1) || (rt = 1),
                      !(l = s.pin) ||
                        (l !== oe && l !== ie) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== Ot[S] && (_--, S--);
                  for (
                    Ma(x) && (x = x(Se)),
                      P =
                        dc(x, oe, d, he, Pe(), A, D, Se, g, _e, ye, h, pe) ||
                        (ie ? -0.001 : 0),
                      Ma(m) && (m = m(Se)),
                      La(m) &&
                        !m.indexOf("+=") &&
                        (~m.indexOf(" ")
                          ? (m = (La(x) ? x.split(" ")[0] : "") + m)
                          : ((v = vb(m.substr(2), d)),
                            (m = La(x) ? x : P + v),
                            (y = oe))),
                      O =
                        Math.max(
                          P,
                          dc(
                            m || (y ? "100% 0" : h),
                            y,
                            d,
                            he,
                            Pe() + v,
                            B,
                            L,
                            Se,
                            g,
                            _e,
                            ye,
                            h,
                            pe
                          )
                        ) || -0.001,
                      R = O - P || ((P -= 0.01) && 0.001),
                      v = 0,
                      S = _;
                    S--;

                  )
                    (l = (s = Ot[S]).pin) &&
                      s.start - s._pinPush <= P &&
                      !pe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      ((l === oe && s.start - s._pinPush < P) || l === w) &&
                        !Na(x) &&
                        (v += r * (1 - s.progress)),
                      l === ie && (b += r));
                  if (
                    ((P += v),
                    (O += v),
                    (Se._pinPush = b),
                    A &&
                      v &&
                      (((r = {})[he.a] = "+=" + v),
                      w && (r[he.p] = "-=" + Pe()),
                      Je.set([A, B], r)),
                    ie)
                  )
                    (r = fb(ie)),
                      (i = he === Ne),
                      (o = Pe()),
                      (N = parseFloat(Y(he.a)) + b),
                      !h &&
                        1 < O &&
                        ((p = {
                          style: (p = (me ? He.scrollingElement || Ke : be)
                            .style),
                          value: p["overflow" + he.a.toUpperCase()],
                        })["overflow" + he.a.toUpperCase()] = "scroll"),
                      Zb(ie, X, r),
                      (I = ac(ie)),
                      (n = kt(ie, !0)),
                      (c = ye && K(be, i ? Ye : Ne)()),
                      ae &&
                        (((U = [ae + he.os2, R + b + Ct]).t = X),
                        (S = ae === St ? jb(ie, he) + R + b : 0) &&
                          U.push(he.d, S + Ct),
                        Rt(U),
                        w &&
                          Ot.forEach(function (e) {
                            e.pin === w &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        ye && Pe(Q)),
                      ye &&
                        (((a = {
                          top: n.top + (i ? o - P : c) + Ct,
                          left: n.left + (i ? c : o - P) + Ct,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[bt] = a.maxWidth =
                          Math.ceil(n.width) + Ct),
                        (a[mt] = a.maxHeight = Math.ceil(n.height) + Ct),
                        (a[Mt] =
                          a[Mt + wt] =
                          a[Mt + yt] =
                          a[Mt + _t] =
                          a[Mt + xt] =
                            "0"),
                        (a[St] = r[St]),
                        (a[St + wt] = r[St + wt]),
                        (a[St + yt] = r[St + yt]),
                        (a[St + _t] = r[St + _t]),
                        (a[St + xt] = r[St + xt]),
                        (q = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(F, a, fe)),
                        ct && Pe(0)),
                      T
                        ? ((u = T._initted),
                          at(1),
                          T.render(T.duration(), !0, !0),
                          (V = Y(he.a) - N + R + b),
                          (j = 1 < Math.abs(R - V)),
                          ye && j && q.splice(q.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(!0),
                          T.parent || T.totalTime(T.totalTime()),
                          at(0))
                        : (V = R),
                      p &&
                        (p.value
                          ? (p.style["overflow" + he.a.toUpperCase()] = p.value)
                          : p.style.removeProperty("overflow-" + he.a));
                  else if (oe && Pe() && !pe)
                    for (n = oe.parentNode; n && n !== Ge; )
                      n._pinOffset &&
                        ((P -= n._pinOffset), (O -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Se.start = P),
                    (Se.end = O),
                    (k = E = ct ? Q : Pe()),
                    pe || ct || (k < Q && Pe(Q), (Se.scroll.rec = 0)),
                    Se.revert(!1, !0),
                    W &&
                      ((ke = -1), Se.isActive && Pe(P + R * G), W.restart(!0)),
                    (rt = 0),
                    T &&
                      ve &&
                      (T._initted || Z) &&
                      T.progress() !== Z &&
                      T.progress(Z, !0).render(T.time(), !0, !0),
                    (G === Se.progress && !pe) ||
                      (T &&
                        !ve &&
                        T.totalProgress(
                          pe && P < -0.001
                            ? Je.utils.mapRange(P, O, 0, 1, G)
                            : G,
                          !0
                        ),
                      (Se.progress = (k - P) / R === G ? 0 : G)),
                    ie && ae && (X._pinOffset = Math.round(Se.progress * V)),
                    re && !ct && re(Se);
                }
            }),
            (Se.getVelocity = function () {
              return ((Pe() - E) / (dt() - tt)) * 1e3 || 0;
            }),
            (Se.endAnimation = function () {
              Pa(Se.callbackAnimation),
                T &&
                  (H
                    ? H.progress(1)
                    : T.paused()
                    ? ve || Pa(T, Se.direction < 0, 1)
                    : Pa(T, T.reversed()));
            }),
            (Se.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (P || Se.refresh() || P) +
                    (T.labels[e] / T.duration()) * R) ||
                0
              );
            }),
            (Se.getTrailing = function (t) {
              var e = Ot.indexOf(Se),
                r =
                  0 < Se.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1);
              return (
                La(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Se.direction ? e.end <= P : e.start >= O;
              });
            }),
            (Se.update = function (e, t, r) {
              if (!pe || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = ct ? Q : Se.scroll(),
                  f = e ? 0 : (u - P) / R,
                  p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  d = Se.progress;
                if (
                  (t &&
                    ((E = k),
                    (k = pe ? Pe() : u),
                    ue && ((_ = w), (w = T && !ve ? T.totalProgress() : p))),
                  le &&
                    !p &&
                    ie &&
                    !rt &&
                    !pt &&
                    gt &&
                    P < u + ((u - E) / (dt() - tt)) * le &&
                    (p = 1e-4),
                  p !== d && Se.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Se.isActive = !!p && p < 1) != (!!d && d < 1)) ||
                      !!p != !!d),
                    (Se.direction = d < p ? 1 : -1),
                    (Se.progress = p),
                    a &&
                      !rt &&
                      ((o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && "none" !== we[o + 1] && we[o + 1]) || we[o]),
                        (c =
                          T && ("complete" === i || "reset" === i || i in T)))),
                    ge &&
                      (s || c) &&
                      (c || ne || !T) &&
                      (Ma(ge)
                        ? ge(Se)
                        : Se.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!H || rt || pt
                        ? T && T.totalProgress(p, !!rt)
                        : (H._dp._time - H._start !== H._time &&
                            ft !== Se &&
                            H.render(H._dp._time - H._start),
                          H.resetTo
                            ? H.resetTo("totalProgress", p, T._tTime / T._tDur)
                            : ((H.vars.totalProgress = p),
                              H.invalidate().restart()))),
                    ie)
                  )
                    if ((e && ae && (X.style[ae + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && d < p && u < O + 1 && u + 1 >= Ja(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) fc(ie, X);
                          else {
                            var g = kt(ie, !0),
                              h = u - P;
                            fc(
                              ie,
                              Ge,
                              g.top + (he === Ne ? h : 0) + Ct,
                              g.left + (he === Ne ? 0 : h) + Ct
                            );
                          }
                        Rt(n || l ? q : I),
                          (j && p < 1 && n) || b(N + (1 !== p || l ? 0 : V));
                      }
                    } else b(Ca(N + V * p));
                  !ue || C.tween || rt || pt || W.restart(!0),
                    ee &&
                      (s || (ce && p && (p < 1 || !lt))) &&
                      Qe(ee.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](
                          ee.className
                        );
                      }),
                    !$ || ve || e || $(Se),
                    a && !rt
                      ? (ve &&
                          (c &&
                            ("complete" === i
                              ? T.pause().totalProgress(1)
                              : "reset" === i
                              ? T.restart(!0).pause()
                              : "restart" === i
                              ? T.restart(!0)
                              : T[i]()),
                          $ && $(Se)),
                        (!s && lt) ||
                          (te && s && Qa(Se, te),
                          xe[o] && Qa(Se, xe[o]),
                          ce && (1 === p ? Se.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === p ? 1 : 3)] && Qa(Se, xe[o]))),
                        de &&
                          !n &&
                          Math.abs(Se.getVelocity()) > (Na(de) ? de : 2500) &&
                          (Pa(Se.callbackAnimation),
                          H
                            ? H.progress(1)
                            : Pa(T, "reverse" === i ? 1 : !p, 1)))
                      : ve && $ && !rt && $(Se);
                }
                if (x) {
                  var v = pe
                    ? (u / pe.duration()) * (pe._caScrollDist || 0)
                    : u;
                  y(v + (D._isFlipped ? 1 : 0)), x(v);
                }
                S && S((-u / pe.duration()) * (pe._caScrollDist || 0));
              }
            }),
            (Se.enable = function (e, t) {
              Se.enabled ||
                ((Se.enabled = !0),
                pb(be, "resize", Eb),
                pb(me ? He : be, "scroll", Cb),
                Me && pb(ScrollTrigger, "refreshInit", Me),
                !1 !== e && ((Se.progress = G = 0), (k = E = ke = Pe())),
                !1 !== t && Se.refresh());
            }),
            (Se.getTween = function (e) {
              return e && C ? C.tween : H;
            }),
            (Se.setPositions = function (e, t) {
              ie &&
                ((N += e - P),
                (V += t - e - R),
                ae === St && Se.adjustPinSpacing(t - e - R)),
                (Se.start = P = e),
                (Se.end = O = t),
                (R = t - e),
                Se.update();
            }),
            (Se.adjustPinSpacing = function (e) {
              if (U) {
                var t = U.indexOf(he.d) + 1;
                (U[t] = parseFloat(U[t]) + e + Ct),
                  (U[1] = parseFloat(U[1]) + e + Ct),
                  Rt(U);
              }
            }),
            (Se.disable = function (e, t) {
              if (
                Se.enabled &&
                (!1 !== e && Se.revert(!0, !0),
                (Se.enabled = Se.isActive = !1),
                t || (H && H.pause()),
                (Q = 0),
                n && (n.uncache = 1),
                Me && qb(ScrollTrigger, "refreshInit", Me),
                W && (W.pause(), C.tween && C.tween.kill() && (C.tween = 0)),
                !me)
              ) {
                for (var r = Ot.length; r--; )
                  if (Ot[r].scroller === be && Ot[r] !== Se) return;
                qb(be, "resize", Eb), qb(be, "scroll", Cb);
              }
            }),
            (Se.kill = function (e, t) {
              Se.disable(e, t), H && !t && H.kill(), a && delete At[a];
              var r = Ot.indexOf(Se);
              0 <= r && Ot.splice(r, 1),
                r === ot && 0 < Lt && ot--,
                (r = 0),
                Ot.forEach(function (e) {
                  return e.scroller === Se.scroller && (r = 1);
                }),
                r || ct || (Se.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null),
                  e && T.revert({ kill: !1 }),
                  t || T.kill()),
                A &&
                  [A, B, D, L].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ft === Se && (ft = 0),
                ie &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Ot.forEach(function (e) {
                    return e.pin === ie && r++;
                  }),
                  r || (n.spacer = 0)),
                M.onKill && M.onKill(Se);
            }),
            Se.enable(!1, !1),
            i && i(Se),
            T && T.add && !R
              ? Je.delayedCall(0.01, function () {
                  return P || O || Se.refresh();
                }) &&
                (R = 0.01) &&
                (P = O = 0)
              : Se.refresh(),
            ie &&
              (function _queueRefreshAll() {
                if (ut !== Bt) {
                  var e = (ut = Bt);
                  requestAnimationFrame(function () {
                    return e === Bt && Dt(!0);
                  });
                }
              })();
        } else this.update = this.refresh = this.kill = Ba;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((Je = e || Ea()),
            Da() && window.document && ScrollTrigger.enable(),
            (s = ht)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Pt[t] = e[t];
        return Pt;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (ht = 0),
          Ot.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          qb(je, "wheel", Cb),
          qb(He, "scroll", Cb),
          clearInterval(u),
          qb(He, "touchcancel", Ba),
          qb(Ge, "touchstart", Ba),
          ob(qb, He, "pointerdown,touchstart,mousedown", za),
          ob(qb, He, "pointerup,touchend,mouseup", Aa),
          c.kill(),
          Ka(qb);
        for (var e = 0; e < ze.length; e += 3)
          rb(qb, ze[e], ze[e + 1]), rb(qb, ze[e], ze[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((je = window),
          (He = document),
          (Ke = He.documentElement),
          (Ge = He.body),
          Je &&
            ((Qe = Je.utils.toArray),
            (et = Je.utils.clamp),
            (st = Je.core.context || Ba),
            (at = Je.core.suppressOverwrites || Ba),
            (x = je.history.scrollRestoration || "auto"),
            Je.core.globals("ScrollTrigger", ScrollTrigger),
            Ge))
        ) {
          (ht = 1),
            (function _rafBugFix() {
              return ht && requestAnimationFrame(_rafBugFix);
            })(),
            k.register(Je),
            (ScrollTrigger.isTouch = k.isTouch),
            (E =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            pb(je, "wheel", Cb),
            (l = [je, He, Ke, Ge]),
            Je.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Je.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                Je.addEventListener("matchMediaInit", function () {
                  return Lb();
                }),
                Je.addEventListener("matchMediaRevert", function () {
                  return Kb();
                }),
                Je.addEventListener("matchMedia", function () {
                  Dt(0, 1), Y("matchMedia");
                }),
                Je.matchMedia("(orientation: portrait)", function () {
                  return Db(), Db;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Db(),
            pb(He, "scroll", Cb);
          var e,
            t,
            r = Ge.style,
            n = r.borderTopStyle,
            o = Je.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = kt(Ge),
              Ne.m = Math.round(e.top + Ne.sc()) || 0,
              Ye.m = Math.round(e.left + Ye.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Bb, 250),
              Je.delayedCall(0.5, function () {
                return (pt = 0);
              }),
              pb(He, "touchcancel", Ba),
              pb(Ge, "touchstart", Ba),
              ob(pb, He, "pointerdown,touchstart,mousedown", za),
              ob(pb, He, "pointerup,touchend,mouseup", Aa),
              f = Je.utils.checkPrefix("transform"),
              W.push(f),
              s = dt(),
              c = Je.delayedCall(0.2, Dt).pause(),
              g = [
                He,
                "visibilitychange",
                function () {
                  var e = je.innerWidth,
                    t = je.innerHeight;
                  He.hidden ? ((p = e), (d = t)) : (p === e && d === t) || Eb();
                },
                He,
                "DOMContentLoaded",
                Dt,
                je,
                "load",
                Dt,
                je,
                "resize",
                Eb,
              ],
              Ka(pb),
              Ot.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < ze.length;
            t += 3
          )
            rb(qb, ze[t], ze[t + 1]), rb(qb, ze[t], ze[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (lt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Bb, t)),
          "ignoreMobileResize" in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ka(qb) || Ka(pb, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = ze.indexOf(r),
          o = Fa(r);
        ~n && ze.splice(n, o ? 6 : 2),
          t && (o ? qe.unshift(je, t, Ge, t, Ke, t) : qe.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Ot.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (La(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? bt : mt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < je.innerWidth
          : 0 < n.bottom - o && n.top + o < je.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        La(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? bt : mt],
          i =
            null == t
              ? o / 2
              : t in R
              ? R[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / je.innerWidth : (n.top + i) / je.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Ot.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = I.killAll || [];
          (I = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(Je) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  ($.version = "3.11.5"),
    ($.saveStyles = function (e) {
      return e
        ? Qe(e).forEach(function (e) {
            if (e && e.style) {
              var t = V.indexOf(e);
              0 <= t && V.splice(t, 5),
                V.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Je.core.getCache(e),
                  st()
                );
            }
          })
        : V;
    }),
    ($.revert = function (e, t) {
      return Lb(!e, t);
    }),
    ($.create = function (e, t) {
      return new $(e, t);
    }),
    ($.refresh = function (e) {
      return e ? Eb() : (s || $.register()) && Dt(!0);
    }),
    ($.update = function (e) {
      return ++ze.cache && j(!0 === e ? 2 : 0);
    }),
    ($.clearScrollMemory = Mb),
    ($.maxScroll = function (e, t) {
      return Ja(e, t ? Ye : Ne);
    }),
    ($.getScrollFunc = function (e, t) {
      return K(J(e), t ? Ye : Ne);
    }),
    ($.getById = function (e) {
      return At[e];
    }),
    ($.getAll = function () {
      return Ot.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    ($.isScrolling = function () {
      return !!gt;
    }),
    ($.snapDirectional = mb),
    ($.addEventListener = function (e, t) {
      var r = I[e] || (I[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    ($.removeEventListener = function (e, t) {
      var r = I[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    ($.batch = function (e, t) {
      function Jo(e, t) {
        var r = [],
          n = [],
          o = Je.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && Ma(t[r]) && "onRefreshInit" !== r
            ? Jo(0, t[r])
            : t[r];
      return (
        Ma(a) &&
          ((a = a()),
          pb($, "refresh", function () {
            return (a = t.batchMax());
          })),
        Qe(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push($.create(t));
        }),
        n
      );
    });
  function ic(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function jc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ke && jc(Ge, t);
  }
  function lc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Je.core.getCache(i),
      s = dt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== Ge &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!te[(t = fb(i)).overflowY] && !te[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !Fa(i) &&
        (te[(t = fb(i)).overflowY] || te[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function mc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && lc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && pb(He, k.eventTypes[0], ne, !1, !0);
      },
      onDisable: function onDisable() {
        return qb(He, k.eventTypes[0], ne, !0);
      },
    });
  }
  function qc(e) {
    function Gp() {
      return (o = !1);
    }
    function Jp() {
      (i = Ja(d, Ne)),
        (T = et(E ? 1 : 0, i)),
        f && (M = et(0, Ja(d, Ye))),
        (l = Bt);
    }
    function Kp() {
      (v._gsap.y = Ca(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(v._gsap.y) +
          ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Qp() {
      Jp(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Oa(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      p = e.onRelease,
      d = J(e.target) || Ke,
      g = Je.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        E &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(d, Ne),
      m = K(d, Ye),
      y = 1,
      x =
        (k.isTouch && je.visualViewport
          ? je.visualViewport.scale * je.visualViewport.width
          : je.outerWidth) / je.innerWidth,
      w = 0,
      _ = Ma(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      S = mc(d, e.type, !0, r),
      M = Ba,
      T = Ba;
    return (
      v && Je.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (E &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(Gp);
                var e = Ca(n.deltaY / 2),
                  t = T(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ca((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (b.cacheID = ze.cache),
                    j();
                }
                return !0;
              }
              b.offset && Kp(), (o = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = y;
        (y = Ca(((je.visualViewport && je.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && jc(d, 1.01 < y || (!f && "x")),
          (c = m()),
          (u = b()),
          Jp(),
          (l = Bt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && Kp(), t)) {
            ze.cache++;
            var r,
              n,
              o = _();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= ic(m, r, n, Ja(d, Ye))),
              (a.vars.scrollX = M(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= ic(b, r, n, Ja(d, Ne))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((E && a.vars.scrollY >= i) || i - 1 <= r) &&
                Je.to({}, { onUpdate: Qp, duration: o });
          } else s.restart(!0);
          p && p(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < dt() - w && ((l = 0), (w = dt()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (Bt !== l && Jp(),
          t && f && m(M(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && Kp();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && j();
      }),
      (e.onEnable = function () {
        jc(d, !f && "x"),
          $.addEventListener("refresh", Qp),
          pb(je, "resize", Qp),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = m.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        jc(d, !0),
          qb(je, "resize", Qp),
          $.removeEventListener("refresh", Qp),
          S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = E) && !b() && b(1),
      E && Je.ticker.add(Ba),
      (s = n._dc),
      (a = Je.to(n, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onUpdate: j,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ee,
    te = { auto: 1, scroll: 1 },
    re = /(input|label|select|textarea)/i,
    ne = function _captureInputs(e) {
      var t = re.test(e.target.tagName);
      (t || ee) && ((e._gsapAllow = !0), (ee = t));
    };
  ($.sort = function (e) {
    return Ot.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    ($.observe = function (e) {
      return new k(e);
    }),
    ($.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill();
      var t = e instanceof k ? e : qc(e);
      return v && v.target === t.target && v.kill(), Fa(t.target) && (v = t), t;
    }),
    ($.core = {
      _getVelocityProp: L,
      _inputObserver: mc,
      _scrollers: ze,
      _proxies: qe,
      bridge: {
        ss: function ss() {
          gt || Y("scrollStart"), (gt = dt());
        },
        ref: function ref() {
          return rt;
        },
      },
    }),
    Ea() && Je.registerPlugin($),
    (e.ScrollTrigger = $),
    (e.default = $);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

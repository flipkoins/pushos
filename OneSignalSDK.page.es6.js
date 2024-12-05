(() => {
  var e = {
      470: function (e, t, i) {
        var n;
        (n = function () {
          var e = !0;
          function t(t) {
            function i(e) {
              var i = t.match(e);
              return (i && i.length > 1 && i[1]) || "";
            }
            var n,
              o,
              s,
              r = i(/(ipod|iphone|ipad)/i).toLowerCase(),
              a = !/like android/i.test(t) && /android/i.test(t),
              l = /nexus\s*[0-6]\s*/i.test(t),
              d = !l && /nexus\s*[0-9]+/i.test(t),
              c = /CrOS/.test(t),
              u = /silk/i.test(t),
              h = /sailfish/i.test(t),
              g = /tizen/i.test(t),
              p = /(web|hpw)os/i.test(t),
              m = /windows phone/i.test(t),
              f = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
              v = !r && !u && /macintosh/i.test(t),
              b = !a && !h && !g && !p && /linux/i.test(t),
              S = i(/edge\/(\d+(\.\d+)?)/i),
              y = i(/version\/(\d+(\.\d+)?)/i),
              w = /tablet/i.test(t) && !/tablet pc/i.test(t),
              I = !w && /[^-]mobi/i.test(t),
              O = /xbox/i.test(t);
            /opera/i.test(t)
              ? (n = {
                  name: "Opera",
                  opera: e,
                  version: y || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
                })
              : /opr\/|opios/i.test(t)
              ? (n = {
                  name: "Opera",
                  opera: e,
                  version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y,
                })
              : /SamsungBrowser/i.test(t)
              ? (n = {
                  name: "Samsung Internet for Android",
                  samsungBrowser: e,
                  version: y || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
                })
              : /coast/i.test(t)
              ? (n = {
                  name: "Opera Coast",
                  coast: e,
                  version: y || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
                })
              : /yabrowser/i.test(t)
              ? (n = {
                  name: "Yandex Browser",
                  yandexbrowser: e,
                  version: y || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
                })
              : /ucbrowser/i.test(t)
              ? (n = {
                  name: "UC Browser",
                  ucbrowser: e,
                  version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /mxios/i.test(t)
              ? (n = {
                  name: "Maxthon",
                  maxthon: e,
                  version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /epiphany/i.test(t)
              ? (n = {
                  name: "Epiphany",
                  epiphany: e,
                  version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /puffin/i.test(t)
              ? (n = {
                  name: "Puffin",
                  puffin: e,
                  version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
                })
              : /sleipnir/i.test(t)
              ? (n = {
                  name: "Sleipnir",
                  sleipnir: e,
                  version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /k-meleon/i.test(t)
              ? (n = {
                  name: "K-Meleon",
                  kMeleon: e,
                  version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : m
              ? ((n = { name: "Windows Phone", windowsphone: e }),
                S
                  ? ((n.msedge = e), (n.version = S))
                  : ((n.msie = e), (n.version = i(/iemobile\/(\d+(\.\d+)?)/i))))
              : /msie|trident/i.test(t)
              ? (n = {
                  name: "Internet Explorer",
                  msie: e,
                  version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i),
                })
              : c
              ? (n = {
                  name: "Chrome",
                  chromeos: e,
                  chromeBook: e,
                  chrome: e,
                  version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                })
              : /chrome.+? edge/i.test(t)
              ? (n = { name: "Microsoft Edge", msedge: e, version: S })
              : /vivaldi/i.test(t)
              ? (n = {
                  name: "Vivaldi",
                  vivaldi: e,
                  version: i(/vivaldi\/(\d+(\.\d+)?)/i) || y,
                })
              : h
              ? (n = {
                  name: "Sailfish",
                  sailfish: e,
                  version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
                })
              : /seamonkey\//i.test(t)
              ? (n = {
                  name: "SeaMonkey",
                  seamonkey: e,
                  version: i(/seamonkey\/(\d+(\.\d+)?)/i),
                })
              : /firefox|iceweasel|fxios/i.test(t)
              ? ((n = {
                  name: "Firefox",
                  firefox: e,
                  version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i),
                }),
                /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) &&
                  (n.firefoxos = e))
              : u
              ? (n = {
                  name: "Amazon Silk",
                  silk: e,
                  version: i(/silk\/(\d+(\.\d+)?)/i),
                })
              : /phantom/i.test(t)
              ? (n = {
                  name: "PhantomJS",
                  phantom: e,
                  version: i(/phantomjs\/(\d+(\.\d+)?)/i),
                })
              : /slimerjs/i.test(t)
              ? (n = {
                  name: "SlimerJS",
                  slimer: e,
                  version: i(/slimerjs\/(\d+(\.\d+)?)/i),
                })
              : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
              ? (n = {
                  name: "BlackBerry",
                  blackberry: e,
                  version: y || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
                })
              : p
              ? ((n = {
                  name: "WebOS",
                  webos: e,
                  version: y || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
                }),
                /touchpad\//i.test(t) && (n.touchpad = e))
              : /bada/i.test(t)
              ? (n = {
                  name: "Bada",
                  bada: e,
                  version: i(/dolfin\/(\d+(\.\d+)?)/i),
                })
              : g
              ? (n = {
                  name: "Tizen",
                  tizen: e,
                  version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y,
                })
              : /qupzilla/i.test(t)
              ? (n = {
                  name: "QupZilla",
                  qupzilla: e,
                  version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y,
                })
              : /chromium/i.test(t)
              ? (n = {
                  name: "Chromium",
                  chromium: e,
                  version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y,
                })
              : /chrome|crios|crmo/i.test(t)
              ? (n = {
                  name: "Chrome",
                  chrome: e,
                  version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                })
              : a
              ? (n = { name: "Android", version: y })
              : /safari|applewebkit/i.test(t)
              ? ((n = { name: "Safari", safari: e }), y && (n.version = y))
              : r
              ? ((n = {
                  name:
                    "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod",
                }),
                y && (n.version = y))
              : (n = /googlebot/i.test(t)
                  ? {
                      name: "Googlebot",
                      googlebot: e,
                      version: i(/googlebot\/(\d+(\.\d+))/i) || y,
                    }
                  : {
                      name: i(/^(.*)\/(.*) /),
                      version:
                        ((o = /^(.*)\/(.*) /),
                        (s = t.match(o)),
                        (s && s.length > 1 && s[2]) || ""),
                    }),
              !n.msedge && /(apple)?webkit/i.test(t)
                ? (/(apple)?webkit\/537\.36/i.test(t)
                    ? ((n.name = n.name || "Blink"), (n.blink = e))
                    : ((n.name = n.name || "Webkit"), (n.webkit = e)),
                  !n.version && y && (n.version = y))
                : !n.opera &&
                  /gecko\//i.test(t) &&
                  ((n.name = n.name || "Gecko"),
                  (n.gecko = e),
                  (n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i))),
              n.windowsphone || n.msedge || (!a && !n.silk)
                ? n.windowsphone || n.msedge || !r
                  ? v
                    ? (n.mac = e)
                    : O
                    ? (n.xbox = e)
                    : f
                    ? (n.windows = e)
                    : b && (n.linux = e)
                  : ((n[r] = e), (n.ios = e))
                : (n.android = e);
            var E = "";
            n.windows
              ? (E = (function (e) {
                  switch (e) {
                    case "NT":
                      return "NT";
                    case "XP":
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                })(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
              : n.windowsphone
              ? (E = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
              : n.mac
              ? (E = (E = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(
                  /[_\s]/g,
                  "."
                ))
              : r
              ? (E = (E = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
                  /[_\s]/g,
                  "."
                ))
              : a
              ? (E = i(/android[ \/-](\d+(\.\d+)*)/i))
              : n.webos
              ? (E = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
              : n.blackberry
              ? (E = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
              : n.bada
              ? (E = i(/bada\/(\d+(\.\d+)*)/i))
              : n.tizen && (E = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
              E && (n.osversion = E);
            var C = !n.windows && E.split(".")[0];
            return (
              w ||
              d ||
              "ipad" == r ||
              (a && (3 == C || (C >= 4 && !I))) ||
              n.silk
                ? (n.tablet = e)
                : (I ||
                    "iphone" == r ||
                    "ipod" == r ||
                    a ||
                    l ||
                    n.blackberry ||
                    n.webos ||
                    n.bada) &&
                  (n.mobile = e),
              n.msedge ||
              (n.msie && n.version >= 10) ||
              (n.yandexbrowser && n.version >= 15) ||
              (n.vivaldi && n.version >= 1) ||
              (n.chrome && n.version >= 20) ||
              (n.samsungBrowser && n.version >= 4) ||
              (n.firefox && n.version >= 20) ||
              (n.safari && n.version >= 6) ||
              (n.opera && n.version >= 10) ||
              (n.ios && n.osversion && n.osversion.split(".")[0] >= 6) ||
              (n.blackberry && n.version >= 10.1) ||
              (n.chromium && n.version >= 20)
                ? (n.a = e)
                : (n.msie && n.version < 10) ||
                  (n.chrome && n.version < 20) ||
                  (n.firefox && n.version < 20) ||
                  (n.safari && n.version < 6) ||
                  (n.opera && n.version < 10) ||
                  (n.ios && n.osversion && n.osversion.split(".")[0] < 6) ||
                  (n.chromium && n.version < 20)
                ? (n.c = e)
                : (n.x = e),
              n
            );
          }
          var i = t(
            ("undefined" != typeof navigator && navigator.userAgent) || ""
          );
          function n(e) {
            return e.split(".").length;
          }
          function o(e, t) {
            var i,
              n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++) n.push(t(e[i]));
            return n;
          }
          function s(e) {
            for (
              var t = Math.max(n(e[0]), n(e[1])),
                i = o(e, function (e) {
                  var i = t - n(e);
                  return o(
                    (e += new Array(i + 1).join(".0")).split("."),
                    function (e) {
                      return new Array(20 - e.length).join("0") + e;
                    }
                  ).reverse();
                });
              --t >= 0;

            ) {
              if (i[0][t] > i[1][t]) return 1;
              if (i[0][t] !== i[1][t]) return -1;
              if (0 === t) return 0;
            }
          }
          function r(e, n, o) {
            var r = i;
            "string" == typeof n && ((o = n), (n = void 0)),
              void 0 === n && (n = !1),
              o && (r = t(o));
            var a = "" + r.version;
            for (var l in e)
              if (e.hasOwnProperty(l) && r[l]) {
                if ("string" != typeof e[l])
                  throw new Error(
                    "Browser version in the minVersion map should be a string: " +
                      l +
                      ": " +
                      String(e)
                  );
                return s([a, e[l]]) < 0;
              }
            return n;
          }
          return (
            (i.test = function (e) {
              for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i) return !0;
              }
              return !1;
            }),
            (i.isUnsupportedBrowser = r),
            (i.compareVersions = s),
            (i.check = function (e, t, i) {
              return !r(e, t, i);
            }),
            (i._detect = t),
            i
          );
        }),
          e.exports ? (e.exports = n()) : i.amdD("bowser", n);
      },
      365: (e) => {
        e.exports = function (e, n, o) {
          "function" == typeof n && ((o = n), (n = {}));
          n || (n = {});
          var s,
            r,
            a = n.prefix || "__jp",
            l = n.name || a + t++,
            d = n.param || "callback",
            c = null != n.timeout ? n.timeout : 6e4,
            u = encodeURIComponent,
            h = document.getElementsByTagName("script")[0] || document.head;
          c &&
            (r = setTimeout(function () {
              g(), o && o(new Error("Timeout"));
            }, c));
          function g() {
            s.parentNode && s.parentNode.removeChild(s),
              (window[l] = i),
              r && clearTimeout(r);
          }
          return (
            (window[l] = function (e) {
              g(), o && o(null, e);
            }),
            (e = (e += (~e.indexOf("?") ? "&" : "?") + d + "=" + u(l)).replace(
              "?&",
              "?"
            )),
            ((s = document.createElement("script")).src = e),
            h.parentNode.insertBefore(s, h),
            function () {
              window[l] && g();
            }
          );
        };
        var t = 0;
        function i() {}
      },
      894: (e, t, i) => {
        "use strict";
        var n, o;
        i.d(t, { Q: () => n, _: () => o }),
          (function (e) {
            (e.Identity = "identity"),
              (e.Properties = "properties"),
              (e.Subscriptions = "subscriptions");
          })(n || (n = {})),
          (function (e) {
            (e.PushSubscriptions = "pushSubscriptions"),
              (e.EmailSubscriptions = "emailSubscriptions"),
              (e.SmsSubscriptions = "smsSubscriptions");
          })(o || (o = {}));
      },
      121: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => sn });
        var n,
          o = i(655),
          s = i(470),
          r = i.n(s);
        !(function (e) {
          (e.Safari = "safari"),
            (e.Firefox = "firefox"),
            (e.Chrome = "chrome"),
            (e.Opera = "opera"),
            (e.Edge = "edge"),
            (e.Other = "other");
        })(n || (n = {}));
        var a = i(50),
          l = i(450);
        class d {
          static getEnvironmentInfo() {
            return {
              browserType: this.getBrowser(),
              browserVersion: this.getBrowserVersion(),
              isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
              requiresUserInteraction: this.requiresUserInteraction(),
              osVersion: this.getOsVersion(),
            };
          }
          static getBrowser() {
            return "chrome" === (0, l.M)().name
              ? n.Chrome
              : "msedge" === (0, l.M)().name
              ? n.Edge
              : "opera" === (0, l.M)().name
              ? n.Opera
              : "firefox" === (0, l.M)().name
              ? n.Firefox
              : this.isMacOSSafari()
              ? n.Safari
              : n.Other;
          }
          static isMacOSSafari() {
            return void 0 !== window.safari;
          }
          static getBrowserVersion() {
            return a.Z.parseVersionString((0, l.M)().version);
          }
          static supportsServiceWorkers() {
            return window.navigator && "serviceWorker" in window.navigator;
          }
          static requiresUserInteraction() {
            return (
              ("firefox" === this.getBrowser() &&
                this.getBrowserVersion() >= 72) ||
              ("safari" === this.getBrowser() &&
                this.getBrowserVersion() >= 12.1)
            );
          }
          static getOsVersion() {
            return r().osversion;
          }
        }
        var c,
          u,
          h = i(365),
          g = i.n(h),
          p = i(326),
          m = i(468);
        !(function (e) {
          (e.ChromePush = "ChromePush"),
            (e.SafariPush = "SafariPush"),
            (e.SafariLegacyPush = "SafariLegacyPush"),
            (e.FirefoxPush = "FirefoxPush"),
            (e.Email = "Email"),
            (e.SMS = "SMS");
        })(c || (c = {})),
          (function (e) {
            (e.Email = "Email"), (e.SMS = "SMS"), (e.Push = "Push");
          })(u || (u = {}));
        var f,
          v = i(271);
        !(function (e) {
          (e[(e.NoNativePermission = 0)] = "NoNativePermission"),
            (e[(e.Subscribed = 1)] = "Subscribed"),
            (e[(e.UserOptedOut = -2)] = "UserOptedOut"),
            (e[(e.NotSubscribed = -10)] = "NotSubscribed"),
            (e[(e.TemporaryWebRecord = -20)] = "TemporaryWebRecord"),
            (e[(e.PermissionRevoked = -21)] = "PermissionRevoked"),
            (e[(e.PushSubscriptionRevoked = -22)] = "PushSubscriptionRevoked"),
            (e[(e.ServiceWorkerStatus403 = -23)] = "ServiceWorkerStatus403"),
            (e[(e.ServiceWorkerStatus404 = -24)] = "ServiceWorkerStatus404");
        })(f || (f = {}));
        var b,
          S = i(930);
        !(function (e) {
          (e[(e.ChromeLike = 5)] = "ChromeLike"),
            (e[(e.SafariLegacy = 7)] = "SafariLegacy"),
            (e[(e.Firefox = 8)] = "Firefox"),
            (e[(e.Email = 11)] = "Email"),
            (e[(e.Edge = 12)] = "Edge"),
            (e[(e.SMS = 14)] = "SMS"),
            (e[(e.SafariVapid = 17)] = "SafariVapid");
        })(b || (b = {}));
        class y {
          constructor(e) {
            const t = d.getEnvironmentInfo();
            (this.token = this._getToken(e)),
              (this.type = y.getSubscriptionType()),
              (this.notificationTypes = f.Subscribed),
              (this.sdk = String(160204)),
              (this.deviceModel = navigator.platform),
              (this.deviceOs = isNaN(t.browserVersion) ? -1 : t.browserVersion),
              (this.webAuth = e.w3cAuth),
              (this.webp256 = e.w3cP256dh);
          }
          _getToken(e) {
            return e.w3cEndpoint
              ? e.w3cEndpoint.toString()
              : e.safariDeviceToken;
          }
          serialize() {
            return {
              type: this.type,
              token: this.token,
              enabled: this.enabled,
              notification_types: this.notificationTypes,
              sdk: this.sdk,
              device_model: this.deviceModel,
              device_os: this.deviceOs,
              web_auth: this.webAuth,
              web_p256: this.webp256,
            };
          }
          static getSubscriptionType() {
            return v.Z.redetectBrowserUserAgent().firefox
              ? c.FirefoxPush
              : S.Z.useSafariVapidPush()
              ? c.SafariPush
              : S.Z.useSafariLegacyPush()
              ? c.SafariLegacyPush
              : c.ChromePush;
          }
          static getDeviceType() {
            switch (this.getSubscriptionType()) {
              case c.FirefoxPush:
                return b.Firefox;
              case c.SafariLegacyPush:
                return b.SafariLegacy;
              case c.SafariPush:
                return b.SafariVapid;
            }
            return b.ChromeLike;
          }
        }
        class w {
          constructor(e, t) {
            (this.label = e), (this.id = t);
          }
        }
        (w.ONESIGNAL_ID = "onesignal_id"), (w.EXTERNAL_ID = "external_id");
        var I,
          O = i(752);
        !(function (e) {
          (e[(e.MissingAppId = 0)] = "MissingAppId"),
            (e[(e.RetryLimitReached = 1)] = "RetryLimitReached");
        })(I || (I = {}));
        class E extends O.Z {
          constructor(e) {
            let t;
            switch (e) {
              case I.MissingAppId:
                t = "The API call is missing an app ID.";
                break;
              case I.RetryLimitReached:
                t = "The API call has reached the retry limit.";
            }
            super(t), Object.setPrototypeOf(this, E.prototype);
          }
        }
        var C = i(107);
        function P(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        var T = i(353);
        const k = { 5: 1e4, 4: 2e4, 3: 3e4, 2: 3e4, 1: 3e4 };
        class x {
          static get(e, t, i) {
            return x.call("GET", e, t, i);
          }
          static post(e, t, i) {
            return x.call("POST", e, t, i);
          }
          static put(e, t, i) {
            return x.call("PUT", e, t, i);
          }
          static delete(e, t, i) {
            return x.call("DELETE", e, t, i);
          }
          static patch(e, t, i) {
            return x.call("PATCH", e, t, i);
          }
          static call(e, t, i, n) {
            if (!this.requestHasAppId(t, i))
              return Promise.reject(new E(I.MissingAppId));
            const o = new Headers();
            if (
              (o.append("Origin", p.Z.getOrigin()),
              o.append("SDK-Version", `onesignal/web/${S.Z.version()}`),
              o.append("Content-Type", "application/json;charset=UTF-8"),
              n)
            )
              for (const e of Object.keys(n)) o.append(e, n[e]);
            const s = {
              method: e || "NO_METHOD_SPECIFIED",
              headers: o,
              cache: "no-cache",
            };
            i && (s.body = JSON.stringify(i));
            const r = `${p.Z.getOneSignalApiUrl(void 0, t).toString()}/${t}`;
            return x.executeFetch(r, s);
          }
          static executeFetch(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (0 === i) return Promise.reject(new E(I.RetryLimitReached));
              try {
                const i = yield fetch(e, t),
                  { status: n } = i;
                return { result: yield i.json(), status: n };
              } catch (n) {
                if ("TypeError" === n.name)
                  return (
                    yield P(k[i]),
                    C.Z.error(
                      `OneSignal: Network timed out while calling ${e}. Retrying...`
                    ),
                    x.executeFetch(e, t, i - 1)
                  );
                throw new O.Z(
                  `OneSignalApiBase: failed to execute HTTP call: ${n}`
                );
              }
            });
          }
          static requestHasAppId(e, t) {
            if (e.startsWith("apps/")) {
              const t = e.split("/");
              return (0, T.TP)(t[1]);
            }
            return !(!t || "string" != typeof t.app_id) && (0, T.TP)(t.app_id);
          }
        }
        const N = x;
        function A(e) {
          return encodeURIComponent(e).replace(
            /[!'()*]/g,
            (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
          );
        }
        var M, D;
        !(function (e) {
          (e[(e.InvalidAppId = 0)] = "InvalidAppId"),
            (e[(e.AppNotConfiguredForWebPush = 1)] =
              "AppNotConfiguredForWebPush"),
            (e[(e.WrongSiteUrl = 2)] = "WrongSiteUrl"),
            (e[(e.MultipleInitialization = 3)] = "MultipleInitialization"),
            (e[(e.MissingSafariWebId = 4)] = "MissingSafariWebId"),
            (e[(e.Unknown = 5)] = "Unknown");
        })(M || (M = {}));
        class SdkInitError extends O.Z {
          constructor(e, t) {
            let i;
            switch (e) {
              case M.InvalidAppId:
                i =
                  "OneSignal: This app ID does not match any existing app. Double check your app ID.";
                break;
              case M.AppNotConfiguredForWebPush:
                i =
                  "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://tinyurl.com/2x5jzk83).";
                break;
              case M.WrongSiteUrl:
                i =
                  t && t.siteUrl
                    ? `OneSignal: This web push config can only be used on ${
                        new URL(t.siteUrl).origin
                      }. Your current origin is ${location.origin}.`
                    : "OneSignal: This web push config can not be used on the current site.";
                break;
              case M.MultipleInitialization:
                i =
                  "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.";
                break;
              case M.MissingSafariWebId:
                i =
                  "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.";
                break;
              case M.Unknown:
                i = "OneSignal: An unknown initialization error occurred.";
            }
            super(i),
              (this.reason = M[e]),
              Object.setPrototypeOf(this, SdkInitError.prototype);
          }
        }
        class _ {
          static createUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i, subscriptionId: n } = e,
                o = n ? { "OneSignal-Subscription-Id": n } : void 0;
              let s = {};
              return (
                o && (s = Object.assign(Object.assign({}, s), o)),
                e.jwtHeader &&
                  (s = Object.assign(Object.assign({}, s), e.jwtHeader)),
                (t.refresh_device_metadata = !0),
                N.post(`apps/${i}/users`, t, s)
              );
            });
          }
          static getUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(
                `apps/${i}/users/by/${t.label}/${t.id}`,
                e.jwtHeader
              );
            });
          }
          static updateUser(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n, subscriptionId: o } = e;
              if (!v.Z.isValidUuid(n)) throw new SdkInitError(M.InvalidAppId);
              const s = o ? { "OneSignal-Subscription-Id": o } : void 0;
              let r = {};
              s && (r = Object.assign(Object.assign({}, r), s)),
                e.jwtHeader &&
                  (r = Object.assign(Object.assign({}, r), e.jwtHeader));
              const a = A(t.label),
                l = A(t.id);
              return N.patch(`apps/${n}/users/by/${a}/${l}`, i, r);
            });
          }
          static deleteUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.delete(
                `apps/${i}/users/by/${t.label}/${t.id}`,
                e.jwtHeader
              );
            });
          }
          static addAlias(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(
                `apps/${n}/users/by/${t.label}/${t.id}/identity`,
                { identity: i },
                e.jwtHeader
              );
            });
          }
          static getUserIdentity(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(
                `apps/${i}/users/by/${t.label}/${t.id}/identity`,
                e.jwtHeader
              );
            });
          }
          static deleteAlias(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.delete(
                `apps/${n}/users/by/${t.label}/${t.id}/identity/${i}`,
                e.jwtHeader
              );
            });
          }
          static createSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.post(
                `apps/${n}/users/by/${t.label}/${t.id}/subscriptions`,
                i,
                e.jwtHeader
              );
            });
          }
          static updateSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(`apps/${n}/subscriptions/${t}`, {
                subscription: i,
              });
            });
          }
          static deleteSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.delete(`apps/${i}/subscriptions/${t}`);
            });
          }
          static fetchAliasesForSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(`apps/${i}/subscriptions/${t}/identity`);
            });
          }
          static identifyUserForSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(
                `apps/${n}/users/by/subscriptions/${t}/identity`,
                { identity: i },
                e.jwtHeader
              );
            });
          }
          static transferSubscription(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: o } = e;
              return N.patch(
                `apps/${o}/subscriptions/${t}/owner`,
                { identity: Object.assign({}, i), retain_previous_owner: n },
                e.jwtHeader
              );
            });
          }
        }
        !(function (e) {
          (e[(e.Direct = 1)] = "Direct"),
            (e[(e.Indirect = 2)] = "Indirect"),
            (e[(e.Unattributed = 3)] = "Unattributed"),
            (e[(e.NotSupported = 4)] = "NotSupported");
        })(D || (D = {}));
        class Z {
          static sendOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.info("Outcome payload:", e);
              try {
                yield N.post("outcomes/measure", e);
              } catch (e) {
                C.Z.error("sendOutcome", e);
              }
            });
          }
        }
        const U = class {
          static downloadServerAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              a.Z.enforceAppId(e);
              const t = yield x.get(`sync/${e}/web`, null);
              return null == t ? void 0 : t.result;
            });
          }
          static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return (
              a.Z.enforceAppId(e),
              x
                .post("players", {
                  app_id: e,
                  device_type: t,
                  identifier: i,
                  notification_types: f.TemporaryWebRecord,
                })
                .then((e) => (e && e.id ? e.id : null))
                .catch(
                  (e) => (
                    C.Z.debug(
                      "Error getting user ID from subscription identifier:",
                      e
                    ),
                    null
                  )
                )
            );
          }
          static updateUserSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const n = new w(w.ONESIGNAL_ID, t),
                o = {
                  refresh_device_metadata: !0,
                  deltas: { session_count: 1 },
                };
              a.Z.enforceAppId(e), a.Z.enforceAlias(n);
              try {
                yield _.updateUser({ appId: e, subscriptionId: i }, n, o);
              } catch (e) {
                C.Z.debug("Error updating user session:", e);
              }
            });
          }
          static sendSessionDuration(e, t, i, n, s) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = {
                  refresh_device_metadata: !0,
                  deltas: { session_time: n },
                },
                r = new w(w.ONESIGNAL_ID, t),
                a = {
                  id: "os__session_duration",
                  app_id: e,
                  session_time: n,
                  notification_ids: s.notificationIds,
                  subscription: { id: i, type: y.getSubscriptionType() },
                  onesignal_id: t,
                };
              a.direct = s.type === D.Direct;
              try {
                yield _.updateUser({ appId: e, subscriptionId: i }, r, o),
                  a.notification_ids &&
                    a.notification_ids.length > 0 &&
                    (yield Z.sendOutcome(a));
              } catch (e) {
                C.Z.debug("Error sending session duration:", e);
              }
            });
          }
        };
        class G {
          static jsonpLib(e, t) {
            g()(e, null, t);
          }
          static downloadServerAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return p.Z.getWindowEnv() === m.Q.Host
                ? yield new Promise((t, i) => {
                    G.jsonpLib(
                      `${p.Z.getOneSignalApiUrl().toString()}/sync/${e}/web`,
                      (e, n) => {
                        e ? i(e) : n.success ? t(n) : i(n);
                      }
                    );
                  })
                : yield U.downloadServerAppConfig(e);
            });
          }
        }
        var B;
        !(function (e) {
          (e.Native = "native"),
            (e.Push = "push"),
            (e.Category = "category"),
            (e.Sms = "sms"),
            (e.Email = "email"),
            (e.SmsAndEmail = "smsAndEmail");
        })(B || (B = {}));
        const R = 30,
          L = !1,
          F = !0,
          V = { pageViews: 1, timeDelay: 0 },
          W =
            "We'd like to show you notifications for the latest news and updates.",
          $ = "Allow",
          j = "Cancel",
          H = "Try Again",
          Q = {
            updateMessage:
              "Update your push notification subscription preferences.",
            positiveUpdateButton: "Save Preferences",
            negativeUpdateButton: "Cancel",
          },
          q = "Saving...",
          K = "Thank You!",
          z = {
            type: B.Push,
            text: { actionMessage: W, acceptButton: $, cancelButton: j },
            autoPrompt: !1,
            delay: V,
          };
        class J {
          static convertTagsApiToBooleans(e) {
            const t = {};
            return (
              Object.keys(e).forEach((i) => {
                t[i] = "1" === e[i];
              }),
              t
            );
          }
          static convertTagsBooleansToApi(e) {
            const t = {};
            return (
              Object.keys(e).forEach((i) => {
                t[i] = !0 === e[i] ? "1" : "0";
              }),
              t
            );
          }
          static getObjectDifference(e, t) {
            const i = {};
            return (
              Object.keys(e).forEach((n) => {
                t[n] !== e[n] && (i[n] = e[n]);
              }),
              i
            );
          }
          static markAllTagsAsSpecified(e, t) {
            e.forEach((e) => {
              e.checked = t;
            });
          }
          static isTagObjectEmpty(e) {
            return 0 === Object.keys(e).length;
          }
          static getCheckedTagCategories(e, t) {
            if (!t) return e;
            if (J.isTagObjectEmpty(t)) {
              const t = (0, T.p$)(e);
              return J.markAllTagsAsSpecified(t, !0), t;
            }
            return (0, T.p$)(e).map((e) => {
              const i = t[e.tag];
              return (e.checked = J.getCheckedStatusForTagValue(i)), e;
            });
          }
          static getCheckedStatusForTagValue(e) {
            return void 0 === e || e;
          }
          static limitCategoriesToMaxCount(e, t) {
            let i = (0, T.p$)(e);
            return (i = e.slice(0, t)), i;
          }
        }
        class Y {
          static isCategorySlidedownConfigured(e) {
            if (!e) return !1;
            const t = Y.getFirstSlidedownPromptOptionsWithType(e, B.Category);
            return !!t && !!t.categories && t.categories.length > 0;
          }
          static isCategorySlidedownConfiguredVersion1(e) {
            var t, i;
            return (
              ((null ===
                (i =
                  null === (t = null == e ? void 0 : e.categories) ||
                  void 0 === t
                    ? void 0
                    : t.tags) || void 0 === i
                ? void 0
                : i.length) || 0) > 0
            );
          }
          static getFirstSlidedownPromptOptionsWithType(e, t) {
            return e ? e.filter((e) => e.type === t)[0] : void 0;
          }
          static isSlidedownAutoPromptConfigured(e) {
            if (!e) return !1;
            for (let t = 0; t < e.length; t++) if (e[t].autoPrompt) return !0;
            return !1;
          }
          static isSlidedownPushDependent(e) {
            return e === B.Push || e === B.Category;
          }
        }
        class X {
          static upgradeConfigToVersionTwo(e) {
            var t, i, n;
            X.isPromptOptionsVersion0(e.promptOptions) &&
              (e.promptOptions = X.convertConfigToVersionOne(e.promptOptions)),
              X.isSlidedownConfigVersion1(
                null === (t = e.promptOptions) || void 0 === t
                  ? void 0
                  : t.slidedown
              ) &&
                (null === (i = e.promptOptions) || void 0 === i
                  ? void 0
                  : i.slidedown) &&
                (e.promptOptions.slidedown = X.convertConfigToVersionTwo(
                  null === (n = e.promptOptions) || void 0 === n
                    ? void 0
                    : n.slidedown
                ));
          }
          static convertConfigToVersionOne(e) {
            e.slidedown || (e.slidedown = {});
            const {
                acceptButtonText: t,
                cancelButtonText: i,
                actionMessage: n,
              } = e.slidedown,
              o = e.acceptButtonText || e.acceptButton,
              s = e.cancelButtonText || e.cancelButton;
            return (
              (e.slidedown.acceptButtonText = t || o),
              (e.slidedown.cancelButtonText = i || s),
              (e.slidedown.actionMessage = n || e.actionMessage),
              e
            );
          }
          static convertConfigToVersionTwo(e) {
            var t, i, n, o;
            const s = Y.isCategorySlidedownConfiguredVersion1(e)
              ? B.Category
              : B.Push;
            let r, a;
            s === B.Category &&
              ((r =
                null === (t = e.categories) || void 0 === t
                  ? void 0
                  : t.positiveUpdateButton),
              (a =
                null === (i = e.categories) || void 0 === i
                  ? void 0
                  : i.negativeUpdateButton));
            return {
              prompts: [
                ...(e.prompts || []),
                {
                  type: s,
                  autoPrompt: e.autoPrompt,
                  text: {
                    actionMessage: e.actionMessage,
                    acceptButton: e.acceptButton || e.acceptButtonText,
                    cancelButton: e.cancelButton || e.cancelButtonText,
                    positiveUpdateButton: r,
                    negativeUpdateButton: a,
                    updateMessage:
                      null === (n = null == e ? void 0 : e.categories) ||
                      void 0 === n
                        ? void 0
                        : n.updateMessage,
                  },
                  delay: { pageViews: e.pageViews, timeDelay: e.timeDelay },
                  categories:
                    null === (o = null == e ? void 0 : e.categories) ||
                    void 0 === o
                      ? void 0
                      : o.tags,
                },
              ],
            };
          }
          static isPromptOptionsVersion0(e) {
            if (e) {
              const t = [
                "acceptButtonText",
                "cancelButtonText",
                "actionMessage",
              ];
              for (let i = 0; i < t.length; i++)
                if (e.hasOwnProperty(t[i])) return !0;
            }
            return !1;
          }
          static isSlidedownConfigVersion1(e) {
            if (e) {
              const t = [
                "enabled",
                "autoPrompt",
                "pageViews",
                "timeDelay",
                "acceptButton",
                "acceptButtonText",
                "cancelButton",
                "cancelButtonText",
                "actionMessage",
                "customizeTextEnabled",
                "categories",
              ];
              for (let i = 0; i < t.length; i++)
                if (e.hasOwnProperty(t[i])) return !0;
            }
            return !1;
          }
        }
        var ee, te, ie, ne;
        !(function (e) {
          (e.TypicalSite = "typical"),
            (e.WordPress = "wordpress"),
            (e.Shopify = "shopify"),
            (e.Blogger = "blogger"),
            (e.Magento = "magento"),
            (e.Drupal = "drupal"),
            (e.SquareSpace = "squarespace"),
            (e.Joomla = "joomla"),
            (e.Weebly = "weebly"),
            (e.Wix = "wix"),
            (e.Custom = "custom");
        })(ee || (ee = {})),
          (function (e) {
            (e.Exact = "exact"), (e.Origin = "origin");
          })(te || (te = {})),
          (function (e) {
            (e.Navigate = "navigate"), (e.Focus = "focus");
          })(ie || (ie = {})),
          (function (e) {
            (e[(e.Dashboard = 0)] = "Dashboard"),
              (e[(e.JavaScript = 1)] = "JavaScript");
          })(ne || (ne = {}));
        class oe {
          static getAppConfig(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                if (!e || !e.appId || !v.Z.isValidUuid(e.appId))
                  throw new SdkInitError(M.InvalidAppId);
                const i = yield t(e.appId);
                X.upgradeConfigToVersionTwo(e);
                const n = this.getMergedConfig(e, i);
                return (
                  this.checkUnsupportedSubdomain(n),
                  this.checkRestrictedOrigin(n),
                  n
                );
              } catch (e) {
                if (e) {
                  if (1 === e.code) throw new SdkInitError(M.InvalidAppId);
                  if (2 === e.code)
                    throw new SdkInitError(M.AppNotConfiguredForWebPush);
                }
                throw e;
              }
            });
          }
          static checkUnsupportedSubdomain(e) {
            const t = !window.isSecureContext;
            if (e.hasUnsupportedSubdomain || t)
              throw t
                ? new Error(
                    "OneSignalSDK: HTTP sites are no longer supported starting with version 16 (User Model), your public site must start with https://. Please visit the OneSignal dashboard's Settings > Web Configuration to find this option."
                  )
                : new Error(
                    'OneSignalSDK: The "My site is not fully HTTPS" option is no longer supported starting with version 16 (User Model) of the OneSignal SDK. Please visit the OneSignal dashboard\'s Settings > Web Configuration to find this option.'
                  );
          }
          static checkRestrictedOrigin(e) {
            if (
              e.restrictedOriginEnabled &&
              p.Z.getWindowEnv() === m.Q.Host &&
              !this.doesCurrentOriginMatchConfigOrigin(e.origin)
            )
              throw new SdkInitError(M.WrongSiteUrl, { siteUrl: e.origin });
          }
          static doesCurrentOriginMatchConfigOrigin(e) {
            try {
              return location.origin === new URL(e).origin;
            } catch (e) {
              return !1;
            }
          }
          static getIntegrationCapabilities(e) {
            switch (e) {
              case ee.Custom:
              case ee.WordPress:
                return { configuration: ne.JavaScript };
              default:
                return { configuration: ne.Dashboard };
            }
          }
          static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t),
              n = this.hasUnsupportedSubdomainForConfigIntegrationKind(i, e, t),
              o = this.getUserConfigForConfigIntegrationKind(i, e, t);
            return {
              appId: t.app_id,
              hasUnsupportedSubdomain: n,
              siteName: t.config.siteInfo.name,
              origin: t.config.origin,
              restrictedOriginEnabled:
                t.features.restrict_origin && t.features.restrict_origin.enable,
              safariWebId: t.config.safari_web_id,
              vapidPublicKey: t.config.vapid_public_key,
              onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
              userConfig: o,
              enableOnSession: a.Z.valueOrDefault(
                t.features.enable_on_session,
                L
              ),
              sessionThreshold: a.Z.valueOrDefault(
                t.features.session_threshold,
                R
              ),
              enableSessionDuration: a.Z.valueOrDefault(
                t.features.web_on_focus_enabled,
                F
              ),
            };
          }
          static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : ee.Custom;
          }
          static getCustomLinkConfig(e) {
            const t = {
              enabled: !1,
              style: "button",
              size: "medium",
              unsubscribeEnabled: !1,
              text: { explanation: "", subscribe: "", unsubscribe: "" },
              color: { button: "", text: "" },
            };
            if (
              !(
                e &&
                e.config &&
                e.config.staticPrompts &&
                e.config.staticPrompts.customlink &&
                e.config.staticPrompts.customlink.enabled
              )
            )
              return t;
            const i = e.config.staticPrompts.customlink;
            return {
              enabled: i.enabled,
              style: i.style,
              size: i.size,
              unsubscribeEnabled: i.unsubscribeEnabled,
              text: i.text
                ? {
                    subscribe: i.text.subscribe,
                    unsubscribe: i.text.unsubscribe,
                    explanation: i.text.explanation,
                  }
                : t.text,
              color: i.color
                ? { button: i.color.button, text: i.color.text }
                : t.color,
            };
          }
          static injectDefaultsIntoPromptOptions(e, t, i) {
            var n, o;
            let s = { enabled: !1 };
            e && e.customlink && (s = e.customlink);
            const r = t.customlink,
              l = Object.assign(Object.assign({}, e), {
                customlink: {
                  enabled: a.Z.getValueOrDefault(s.enabled, r.enabled),
                  style: a.Z.getValueOrDefault(s.style, r.style),
                  size: a.Z.getValueOrDefault(s.size, r.size),
                  unsubscribeEnabled: a.Z.getValueOrDefault(
                    s.unsubscribeEnabled,
                    r.unsubscribeEnabled
                  ),
                  text: {
                    subscribe: a.Z.getValueOrDefault(
                      s.text ? s.text.subscribe : void 0,
                      r.text.subscribe
                    ),
                    unsubscribe: a.Z.getValueOrDefault(
                      s.text ? s.text.unsubscribe : void 0,
                      r.text.unsubscribe
                    ),
                    explanation: a.Z.getValueOrDefault(
                      s.text ? s.text.explanation : void 0,
                      r.text.explanation
                    ),
                  },
                  color: {
                    button: a.Z.getValueOrDefault(
                      s.color ? s.color.button : void 0,
                      r.color.button
                    ),
                    text: a.Z.getValueOrDefault(
                      s.color ? s.color.text : void 0,
                      r.color.text
                    ),
                  },
                },
              });
            return (
              l.slidedown
                ? (l.slidedown.prompts =
                    null ===
                      (o =
                        null === (n = l.slidedown) || void 0 === n
                          ? void 0
                          : n.prompts) || void 0 === o
                      ? void 0
                      : o.map((e) => {
                          var t, i, n, o, s, r, l, d, c;
                          if (
                            ((e.type = a.Z.getValueOrDefault(e.type, B.Push)),
                            e.type === B.Category &&
                              (e.text = Object.assign(
                                Object.assign({}, e.text),
                                {
                                  positiveUpdateButton: a.Z.getValueOrDefault(
                                    null === (t = e.text) || void 0 === t
                                      ? void 0
                                      : t.positiveUpdateButton,
                                    Q.positiveUpdateButton
                                  ),
                                  negativeUpdateButton: a.Z.getValueOrDefault(
                                    null === (i = e.text) || void 0 === i
                                      ? void 0
                                      : i.negativeUpdateButton,
                                    Q.negativeUpdateButton
                                  ),
                                  updateMessage: a.Z.getValueOrDefault(
                                    null === (n = e.text) || void 0 === n
                                      ? void 0
                                      : n.updateMessage,
                                    Q.updateMessage
                                  ),
                                }
                              )),
                            (e.text = Object.assign(Object.assign({}, e.text), {
                              actionMessage: a.Z.getValueOrDefault(
                                null === (o = e.text) || void 0 === o
                                  ? void 0
                                  : o.actionMessage,
                                W
                              ),
                              acceptButton: a.Z.getValueOrDefault(
                                null === (s = e.text) || void 0 === s
                                  ? void 0
                                  : s.acceptButton,
                                $
                              ),
                              cancelButton: a.Z.getValueOrDefault(
                                null === (r = e.text) || void 0 === r
                                  ? void 0
                                  : r.cancelButton,
                                j
                              ),
                              confirmMessage: a.Z.getValueOrDefault(
                                null === (l = e.text) || void 0 === l
                                  ? void 0
                                  : l.confirmMessage,
                                K
                              ),
                            })),
                            (e.autoPrompt = a.Z.getValueOrDefault(
                              e.autoPrompt,
                              !0
                            )),
                            (e.delay = {
                              pageViews: a.Z.getValueOrDefault(
                                null === (d = e.delay) || void 0 === d
                                  ? void 0
                                  : d.pageViews,
                                V.pageViews
                              ),
                              timeDelay: a.Z.getValueOrDefault(
                                null === (c = e.delay) || void 0 === c
                                  ? void 0
                                  : c.timeDelay,
                                V.timeDelay
                              ),
                            }),
                            e.categories)
                          ) {
                            const { categories: t } = e;
                            e.categories = J.limitCategoriesToMaxCount(t, 10);
                          }
                          return e;
                        }))
                : ((l.slidedown = { prompts: [] }),
                  (l.slidedown.prompts = [z])),
              l.native
                ? ((l.native.enabled = !!l.native.enabled),
                  (l.native.autoPrompt = l.native.hasOwnProperty("autoPrompt")
                    ? !!l.native.enabled && !!l.native.autoPrompt
                    : !!l.native.enabled),
                  (l.native.pageViews = a.Z.getValueOrDefault(
                    l.native.pageViews,
                    V.pageViews
                  )),
                  (l.native.timeDelay = a.Z.getValueOrDefault(
                    l.native.timeDelay,
                    V.timeDelay
                  )))
                : (l.native = {
                    enabled: !1,
                    autoPrompt: !1,
                    pageViews: V.pageViews,
                    timeDelay: V.timeDelay,
                  }),
              !0 === i.autoRegister &&
                ((l.native.enabled = !0), (l.native.autoPrompt = !0)),
              (l.autoPrompt =
                l.native.autoPrompt ||
                Y.isSlidedownAutoPromptConfigured(l.slidedown.prompts)),
              l
            );
          }
          static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts,
              i = t.native
                ? {
                    enabled: t.native.enabled,
                    autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt,
                    pageViews: a.Z.getValueOrDefault(
                      t.native.pageViews,
                      V.pageViews
                    ),
                    timeDelay: a.Z.getValueOrDefault(
                      t.native.timeDelay,
                      V.timeDelay
                    ),
                  }
                : {
                    enabled: !1,
                    autoPrompt: !1,
                    pageViews: V.pageViews,
                    timeDelay: V.timeDelay,
                  },
              { prompts: n } = t.slidedown;
            return {
              autoPrompt: i.autoPrompt || Y.isSlidedownAutoPromptConfigured(n),
              native: i,
              slidedown: { prompts: n },
              fullscreen: {
                enabled: t.fullscreen.enabled,
                actionMessage: t.fullscreen.actionMessage,
                acceptButton: t.fullscreen.acceptButton,
                cancelButton: t.fullscreen.cancelButton,
                title: t.fullscreen.title,
                message: t.fullscreen.message,
                caption: t.fullscreen.caption,
                autoAcceptTitle: t.fullscreen.autoAcceptTitle,
              },
              customlink: this.getCustomLinkConfig(e),
            };
          }
          static getUserConfigForConfigIntegrationKind(e, t, i) {
            switch (this.getIntegrationCapabilities(e).configuration) {
              case ne.Dashboard:
                return {
                  appId: i.app_id,
                  autoRegister: !1,
                  autoResubscribe: i.config.autoResubscribe,
                  path: i.config.serviceWorker.path,
                  serviceWorkerPath: i.config.serviceWorker.workerName,
                  serviceWorkerParam: {
                    scope: i.config.serviceWorker.registrationScope,
                  },
                  subdomainName: i.config.siteInfo.proxyOrigin,
                  promptOptions:
                    this.getPromptOptionsForDashboardConfiguration(i),
                  welcomeNotification: {
                    disable: !i.config.welcomeNotification.enable,
                    title: i.config.welcomeNotification.title,
                    message: i.config.welcomeNotification.message,
                    url: i.config.welcomeNotification.url,
                  },
                  notifyButton: {
                    enable: i.config.staticPrompts.bell.enabled,
                    displayPredicate: i.config.staticPrompts.bell
                      .hideWhenSubscribed
                      ? () => !OneSignal.User.PushSubscription.optedIn
                      : null,
                    size: i.config.staticPrompts.bell.size,
                    position: i.config.staticPrompts.bell.location,
                    showCredit: !1,
                    offset: {
                      bottom: `${i.config.staticPrompts.bell.offset.bottom}px`,
                      left: `${i.config.staticPrompts.bell.offset.left}px`,
                      right: `${i.config.staticPrompts.bell.offset.right}px`,
                    },
                    colors: {
                      "circle.background":
                        i.config.staticPrompts.bell.color.main,
                      "circle.foreground":
                        i.config.staticPrompts.bell.color.accent,
                      "badge.background": "black",
                      "badge.foreground": "white",
                      "badge.bordercolor": "black",
                      "pulse.color": i.config.staticPrompts.bell.color.accent,
                      "dialog.button.background.hovering":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.background.active":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.background":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.foreground": "white",
                    },
                    text: {
                      "tip.state.unsubscribed":
                        i.config.staticPrompts.bell.tooltip.unsubscribed,
                      "tip.state.subscribed":
                        i.config.staticPrompts.bell.tooltip.subscribed,
                      "tip.state.blocked":
                        i.config.staticPrompts.bell.tooltip.blocked,
                      "message.prenotify":
                        i.config.staticPrompts.bell.tooltip.unsubscribed,
                      "message.action.subscribing":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.subscribed":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.resubscribed":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.unsubscribed":
                        i.config.staticPrompts.bell.message.unsubscribing,
                      "dialog.main.title":
                        i.config.staticPrompts.bell.dialog.main.title,
                      "dialog.main.button.subscribe":
                        i.config.staticPrompts.bell.dialog.main.subscribeButton,
                      "dialog.main.button.unsubscribe":
                        i.config.staticPrompts.bell.dialog.main
                          .unsubscribeButton,
                      "dialog.blocked.title":
                        i.config.staticPrompts.bell.dialog.blocked.title,
                      "dialog.blocked.message":
                        i.config.staticPrompts.bell.dialog.blocked.message,
                    },
                  },
                  persistNotification: i.config.notificationBehavior
                    ? i.config.notificationBehavior.display.persist
                    : void 0,
                  webhooks: {
                    cors: i.config.webhooks.corsEnable,
                    "notification.willDisplay":
                      i.config.webhooks.notificationDisplayedHook,
                    "notification.clicked":
                      i.config.webhooks.notificationClickedHook,
                    "notification.dismissed":
                      i.config.webhooks.notificationDismissedHook,
                  },
                  notificationClickHandlerMatch: i.config.notificationBehavior
                    ? i.config.notificationBehavior.click.match
                    : void 0,
                  notificationClickHandlerAction: i.config.notificationBehavior
                    ? i.config.notificationBehavior.click.action
                    : void 0,
                  allowLocalhostAsSecureOrigin: i.config.setupBehavior
                    ? i.config.setupBehavior.allowLocalhostAsSecureOrigin
                    : void 0,
                  outcomes: {
                    direct: i.config.outcomes.direct,
                    indirect: {
                      enabled: i.config.outcomes.indirect.enabled,
                      influencedTimePeriodMin:
                        i.config.outcomes.indirect.notification_attribution
                          .minutes_since_displayed,
                      influencedNotificationsLimit:
                        i.config.outcomes.indirect.notification_attribution
                          .limit,
                    },
                    unattributed: i.config.outcomes.unattributed,
                  },
                };
              case ne.JavaScript: {
                const e = { scope: "/" },
                  n = "OneSignalSDKWorker.js",
                  o = Object.assign(
                    Object.assign(
                      Object.assign(Object.assign({}, t), {
                        promptOptions: this.injectDefaultsIntoPromptOptions(
                          t.promptOptions,
                          i.config.staticPrompts,
                          t
                        ),
                      }),
                      {
                        serviceWorkerParam: t.serviceWorkerParam
                          ? t.serviceWorkerParam
                          : e,
                        serviceWorkerPath: t.serviceWorkerPath
                          ? t.serviceWorkerPath
                          : n,
                        path: t.path ? t.path : "/",
                      }
                    ),
                    {
                      outcomes: {
                        direct: i.config.outcomes.direct,
                        indirect: {
                          enabled: i.config.outcomes.indirect.enabled,
                          influencedTimePeriodMin:
                            i.config.outcomes.indirect.notification_attribution
                              .minutes_since_displayed,
                          influencedNotificationsLimit:
                            i.config.outcomes.indirect.notification_attribution
                              .limit,
                        },
                        unattributed: i.config.outcomes.unattributed,
                      },
                    }
                  );
                return (
                  t.hasOwnProperty("autoResubscribe")
                    ? (o.autoResubscribe = !!t.autoResubscribe)
                    : t.hasOwnProperty("autoRegister")
                    ? (o.autoResubscribe = !!t.autoRegister)
                    : (o.autoResubscribe = !!i.config.autoResubscribe),
                  o
                );
              }
            }
          }
          static hasUnsupportedSubdomainForConfigIntegrationKind(e, t, i) {
            switch (this.getIntegrationCapabilities(e).configuration) {
              case ne.Dashboard:
                return i.config.siteInfo.proxyOriginEnabled;
              case ne.JavaScript:
                return !!t.subdomainName;
            }
          }
        }
        class se {
          getAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield oe.getAppConfig(e, G.downloadServerAppConfig);
            });
          }
          getMergedConfig(e, t) {
            return oe.getMergedConfig(e, t);
          }
        }
        var re,
          InvalidArgumentError = i(86);
        class ae {
          static getRegistration(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                const t = location.origin + e;
                return yield navigator.serviceWorker.getRegistration(t);
              } catch (t) {
                return void C.Z.warn(
                  "[Service Worker Status] Error Checking service worker registration",
                  e,
                  t
                );
              }
            });
          }
          static getAvailableServiceWorker(e) {
            const t = e.active || e.installing || e.waiting;
            return (
              t ||
                C.Z.warn("Could not find an available ServiceWorker instance!"),
              t
            );
          }
          static waitUntilActive(e) {
            return new Promise((t) => {
              const i = e.installing || e.waiting;
              i &&
                i.addEventListener("statechange", () => {
                  C.Z.debug("OneSignal Service Worker state changed:", i.state),
                    e.active && t();
                }),
                e.active && t();
            });
          }
        }
        !(function (e) {
          (e.WorkerVersion = "GetWorkerVersion"),
            (e.Subscribe = "Subscribe"),
            (e.SubscribeNew = "SubscribeNew"),
            (e.AmpSubscriptionState = "amp-web-push-subscription-state"),
            (e.AmpSubscribe = "amp-web-push-subscribe"),
            (e.AmpUnsubscribe = "amp-web-push-unsubscribe"),
            (e.NotificationWillDisplay = "notification.willDisplay"),
            (e.NotificationClicked = "notification.clicked"),
            (e.NotificationDismissed = "notification.dismissed"),
            (e.RedirectPage = "command.redirect"),
            (e.SessionUpsert = "os.session.upsert"),
            (e.SessionDeactivate = "os.session.deactivate"),
            (e.AreYouVisible = "os.page_focused_request"),
            (e.AreYouVisibleResponse = "os.page_focused_response"),
            (e.SetLogging = "os.set_sw_logging");
        })(re || (re = {}));
        class le {
          constructor() {
            this.replies = {};
          }
          addListener(e, t, i) {
            const n = { callback: t, onceListenerOnly: i },
              o = this.replies[e.toString()];
            o ? o.push(n) : (this.replies[e.toString()] = [n]);
          }
          findListenersForMessage(e) {
            return this.replies[e.toString()] || [];
          }
          deleteListenerRecords(e) {
            this.replies[e.toString()] = null;
          }
          deleteAllListenerRecords() {
            this.replies = {};
          }
          deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i)
              for (let e = i.length - 1; e >= 0; e--) {
                i[e] === t && i.splice(e, 1);
              }
          }
        }
        class de {
          constructor(e, t = new le()) {
            (this.context = e), (this.replies = t);
          }
          broadcast(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (p.Z.getWindowEnv() !== m.Q.ServiceWorker) return;
              const i = yield self.clients.matchAll({
                type: "window",
                includeUncontrolled: !0,
              });
              for (const n of i)
                C.Z.debug(
                  `[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${
                    n.url
                  }.`
                ),
                  n.postMessage({ command: e, payload: t });
            });
          }
          unicast(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (p.Z.getWindowEnv() === m.Q.ServiceWorker) {
                if (!i)
                  throw new InvalidArgumentError.R(
                    "windowClient",
                    InvalidArgumentError.Q.Empty
                  );
                C.Z.debug(
                  `[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${
                    i.url
                  }.`
                ),
                  i.postMessage({ command: e, payload: t });
              } else C.Z.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), this.directPostMessageToSW(e, t);
            });
          }
          directPostMessageToSW(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i;
              C.Z.debug(
                `[Worker Messenger] [Page -> SW] Direct command '${e.toString()}' to service worker.`
              );
              const n = yield null === (i = this.context) || void 0 === i
                ? void 0
                : i.serviceWorkerManager.getOneSignalRegistration();
              if (!n)
                return void C.Z.error(
                  "`[Worker Messenger] [Page -> SW] Could not get ServiceWorkerRegistration to postMessage!"
                );
              const o = ae.getAvailableServiceWorker(n);
              o
                ? o.postMessage({ command: e, payload: t })
                : C.Z.error(
                    "`[Worker Messenger] [Page -> SW] Could not get ServiceWorker to postMessage!"
                  );
            });
          }
          listen() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!S.Z.supportsServiceWorkers()) return;
              p.Z.getWindowEnv() === m.Q.ServiceWorker
                ? (self.addEventListener(
                    "message",
                    this.onWorkerMessageReceivedFromPage.bind(this)
                  ),
                  C.Z.debug(
                    "[Worker Messenger] Service worker is now listening for messages."
                  ))
                : yield this.listenForPage();
            });
          }
          listenForPage() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              navigator.serviceWorker.addEventListener(
                "message",
                this.onPageMessageReceivedFromServiceWorker.bind(this)
              ),
                C.Z.debug(
                  `(${location.origin}) [Worker Messenger] Page is now listening for messages.`
                );
            });
          }
          onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
              n = [],
              o = [];
            C.Z.debug(
              "[Worker Messenger] Service worker received message:",
              e.data
            );
            for (const e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
              const i = n[e];
              this.replies.deleteListenerRecord(t.command, i);
            }
            for (const e of o) e.callback.apply(null, [t.payload]);
          }
          onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
              n = [],
              o = [];
            C.Z.debug("[Worker Messenger] Page received message:", e.data);
            for (const e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
              const i = n[e];
              this.replies.deleteListenerRecord(t.command, i);
            }
            for (const e of o) e.callback.apply(null, [t.payload]);
          }
          on(e, t) {
            this.replies.addListener(e, t, !1);
          }
          once(e, t) {
            this.replies.addListener(e, t, !0);
          }
          off(e) {
            e
              ? this.replies.deleteListenerRecords(e)
              : this.replies.deleteAllListenerRecords();
          }
        }
        class ce {
          constructor() {
            this.cache = {};
          }
          getCache() {
            return Object.assign({}, this.cache);
          }
          loadSdkStylesheet() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = p.Z.getOneSignalResourceUrlPath(),
                t = p.Z.getOneSignalCssFileName();
              return yield this.loadIfNew(
                0,
                new URL(`${e}/${t}?v=${S.Z.getSdkStylesVersionHash()}`)
              );
            });
          }
          loadFetchPolyfill() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield this.loadIfNew(
                1,
                new URL(
                  "https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"
                )
              );
            });
          }
          loadIfNew(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                this.cache[t.toString()] ||
                  (this.cache[t.toString()] = ce.load(e, t)),
                yield this.cache[t.toString()]
              );
            });
          }
          static load(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                let i;
                return (
                  yield new Promise((n, o) => {
                    var s;
                    switch (e) {
                      case 1:
                        (i = document.createElement("script")),
                          i.setAttribute("type", "text/javascript"),
                          i.setAttribute("async", "async"),
                          i.setAttribute("src", t.toString());
                        break;
                      case 0:
                        (i = document.createElement("link")),
                          i.setAttribute("rel", "stylesheet"),
                          i.setAttribute("href", t.toString());
                    }
                    (i.onerror = o),
                      (i.onload = n),
                      null === (s = document.querySelector("head")) ||
                        void 0 === s ||
                        s.appendChild(i);
                  }),
                  0
                );
              } catch (e) {
                return 1;
              }
            });
          }
        }
        const ue = "os_pageViews",
          he = "requiresPrivacyConsent";
        class ge {
          static removeLegacySubscriptionOptions() {
            localStorage.removeItem("isOptedOut"),
              localStorage.removeItem("isPushNotificationsEnabled");
          }
          static setConsentRequired(e) {
            localStorage.setItem(he, e.toString());
          }
          static getConsentRequired() {
            return "true" === localStorage.getItem(he);
          }
          static setLocalPageViewCount(e) {
            localStorage.setItem(ue, e.toString());
          }
          static getLocalPageViewCount() {
            return Number(localStorage.getItem(ue));
          }
        }
        class pe {
          constructor() {
            this.incrementedPageViewCount = !1;
          }
          getPageViewCount() {
            try {
              const e = sessionStorage.getItem(pe.SESSION_STORAGE_KEY_NAME),
                t = e ? parseInt(e) : 0;
              return isNaN(t) ? 0 : t;
            } catch (e) {
              return 0;
            }
          }
          setPageViewCount(e) {
            try {
              sessionStorage.setItem(pe.SESSION_STORAGE_KEY_NAME, e.toString());
            } catch (e) {}
          }
          incrementPageViewCount() {
            if (this.incrementedPageViewCount) return;
            const e = this.getPageViewCount() + 1,
              t = this.getLocalPageViewCount() + 1;
            this.setPageViewCount(e),
              this.setLocalPageViewCount(t),
              (this.incrementedPageViewCount = !0),
              C.Z.debug(
                `Incremented page view count: newCountSingleTab: ${e},\n      newCountAccrossTabs: ${t}.`
              );
          }
          simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1;
          }
          isFirstPageView() {
            return 1 === this.getPageViewCount();
          }
          getLocalPageViewCount() {
            return ge.getLocalPageViewCount();
          }
          setLocalPageViewCount(e) {
            ge.setLocalPageViewCount(e);
          }
        }
        pe.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
        class me {
          static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission";
          }
          getPermissionStatus() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!OneSignal.context)
                throw new O.Z(
                  "OneSignal.context is undefined. Make sure to call OneSignal.init() before calling getPermissionStatus()."
                );
              return yield OneSignal.context.permissionManager.getNotificationPermission(
                OneSignal.config.safariWebId
              );
            });
          }
          getNotificationPermission(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return S.Z.useSafariLegacyPush()
                ? me.getLegacySafariNotificationPermission(e)
                : this.getW3cNotificationPermission();
            });
          }
          static getLegacySafariNotificationPermission(e) {
            if (e)
              return window.safari.pushNotification.permission(e).permission;
            throw new InvalidArgumentError.R(
              "safariWebId",
              InvalidArgumentError.Q.Empty
            );
          }
          getW3cNotificationPermission() {
            return Notification.permission;
          }
        }
        class fe {
          constructor(e) {
            if (!e)
              throw new InvalidArgumentError.R(
                "path",
                InvalidArgumentError.Q.Empty
              );
            this.path = e.trim();
          }
          getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e
              ? null
              : this.path.length > e
              ? this.path.substring(e + 1)
              : null;
          }
          getWithoutQueryString() {
            return this.path.split(fe.QUERY_STRING)[0];
          }
          getFileName() {
            var e;
            return null ===
              (e = this.getWithoutQueryString().split("\\").pop()) ||
              void 0 === e
              ? void 0
              : e.split("/").pop();
          }
          getFileNameWithQuery() {
            var e;
            return null === (e = this.path.split("\\").pop()) || void 0 === e
              ? void 0
              : e.split("/").pop();
          }
          getFullPath() {
            return this.path;
          }
          getPathWithoutFileName() {
            const e = this.getWithoutQueryString(),
              t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return (i = i.replace(/[\\/]$/, "")), i;
          }
        }
        fe.QUERY_STRING = "?";
        var ve = i(934),
          be = i(644);
        class Se extends O.Z {
          constructor(e, t) {
            super("Registration of a Service Worker failed."),
              (this.status = e),
              (this.statusText = t),
              Object.setPrototypeOf(this, Se.prototype);
          }
        }
        const ye = Se;
        class we {
          static debug(...e) {
            self.shouldLog && console.debug(...e);
          }
          static trace(...e) {
            self.shouldLog && console.trace(...e);
          }
          static info(...e) {
            self.shouldLog && console.info(...e);
          }
          static warn(...e) {
            self.shouldLog && console.warn(...e);
          }
          static error(...e) {
            self.shouldLog && console.error(...e);
          }
        }
        const Ie = () => {
          we.debug("Do nothing");
        };
        function Oe(e, t) {
          const i = 1e3 * t;
          let n, s;
          const r = new Promise((t, r) => {
            let a = !1;
            (n = self.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  a = !0;
                  try {
                    yield e(), t();
                  } catch (e) {
                    we.error("Failed to execute callback", e), r();
                  }
                }),
              i
            )),
              (s = () => {
                we.debug("Cancel called"), self.clearTimeout(n), a || t();
              });
          });
          return s
            ? { promise: r, cancel: s }
            : (we.warn("clearTimeoutHandle was not assigned."),
              { promise: r, cancel: Ie });
        }
        class Ee {
          constructor(e, t, i, n) {
            (this.outcomeName = i),
              (this.config = t),
              (this.appId = e),
              (this.isUnique = n);
          }
          getAttribution() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield Ee.getAttribution(this.config);
            });
          }
          beforeOutcomeSend() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = this.isUnique ? "sendUniqueOutcome" : "sendOutcome";
              if (((0, T.tI)(e, this.outcomeName), !this.config))
                return (
                  C.Z.debug(
                    "Outcomes feature not supported by main application yet."
                  ),
                  !1
                );
              if (!this.outcomeName)
                return C.Z.error("Outcome name is required"), !1;
              yield (0, T.JX)();
              return (
                !!(yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) ||
                (C.Z.warn(
                  "Reporting outcomes is supported only for subscribed users."
                ),
                !1)
              );
            });
          }
          getAttributedNotifsByUniqueOutcomeName() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (yield ve.ZP.getAll("SentUniqueOutcome"))
                .filter((e) => e.outcomeName === this.outcomeName)
                .reduce((e, t) => [...e, ...(t.notificationIds || [])], []);
            });
          }
          getNotifsToAttributeWithUniqueOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield this.getAttributedNotifsByUniqueOutcomeName();
              return e.filter((e) => -1 === t.indexOf(e));
            });
          }
          shouldSendUnique(e, t) {
            return e.type === D.Unattributed || t.length > 0;
          }
          saveSentUniqueOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = this.outcomeName,
                i = yield ve.ZP.get("SentUniqueOutcome", t),
                n = yield ve.ZP.getCurrentSession(),
                o = [...(i ? i.notificationIds : []), ...e],
                s = n ? n.startTimestamp : null;
              yield ve.ZP.put("SentUniqueOutcome", {
                outcomeName: t,
                notificationIds: o,
                sentDuringSession: s,
              });
            });
          }
          wasSentDuringSession() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield ve.ZP.get("SentUniqueOutcome", this.outcomeName);
              if (!e) return !1;
              const t = yield ve.ZP.getCurrentSession(),
                i = t && e.sentDuringSession === t.startTimestamp,
                n = !t && !!e.sentDuringSession;
              return i || n;
            });
          }
          send(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { type: t, notificationIds: i, weight: n } = e;
              switch (t) {
                case D.Direct:
                  return (
                    this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeDirect(
                      this.appId,
                      i,
                      this.outcomeName,
                      n
                    ))
                  );
                case D.Indirect:
                  return (
                    this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeInfluenced(
                      this.appId,
                      i,
                      this.outcomeName,
                      n
                    ))
                  );
                case D.Unattributed:
                  if (this.isUnique) {
                    if (yield this.wasSentDuringSession())
                      return void C.Z.warn(
                        "(Unattributed) unique outcome was already sent during this session"
                      );
                    yield this.saveSentUniqueOutcome([]);
                  }
                  return void (yield OneSignal.context.updateManager.sendOutcomeUnattributed(
                    this.appId,
                    this.outcomeName,
                    n
                  ));
                default:
                  return void C.Z.warn(
                    "You are on a free plan. Please upgrade to use this functionality."
                  );
              }
            });
          }
          static getAttribution(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (e.direct && e.direct.enabled) {
                const e = yield ve.ZP.getAllNotificationClickedForOutcomes();
                if (e.length > 0)
                  return {
                    type: D.Direct,
                    notificationIds: [e[0].notificationId],
                  };
              }
              if (e.indirect && e.indirect.enabled) {
                const t = 60 * e.indirect.influencedTimePeriodMin * 1e3,
                  i = new Date(new Date().getTime() - t).getTime(),
                  n = yield ve.ZP.getAllNotificationReceivedForOutcomes();
                if (
                  (C.Z.debug(
                    `\tFound total of ${n.length} received notifications`
                  ),
                  n.length > 0)
                ) {
                  const t = e.indirect.influencedNotificationsLimit,
                    o = a.c.sortArrayOfObjects(n, (e) => e.timestamp, !0, !1),
                    s = o
                      .filter((e) => e.timestamp >= i)
                      .slice(0, t)
                      .map((e) => e.notificationId);
                  C.Z.debug(
                    `\tTotal of ${s.length} received notifications are within reporting window.`
                  );
                  const r = o
                    .filter((e) => -1 === s.indexOf(e.notificationId))
                    .map((e) => e.notificationId);
                  if (
                    (r.forEach((e) => ve.ZP.remove(ve.H4, e)),
                    C.Z.debug(
                      `\t${r.length} received notifications will be deleted.`
                    ),
                    s.length > 0)
                  )
                    return { type: D.Indirect, notificationIds: s };
                }
              }
              return e.unattributed && e.unattributed.enabled
                ? { type: D.Unattributed, notificationIds: [] }
                : { type: D.NotSupported, notificationIds: [] };
            });
          }
        }
        var Ce,
          Pe = i(392);
        class Te {
          static getServiceWorkerHref(e, t, i) {
            return Te.appendServiceWorkerParams(
              e.workerPath.getFullPath(),
              t,
              i
            );
          }
          static appendServiceWorkerParams(e, t, i) {
            return `${
              new URL(e, v.Q.getBaseUrl()).href
            }?${a.Z.encodeHashAsUriComponent({
              appId: t,
            })}&${a.Z.encodeHashAsUriComponent({ sdkVersion: i })}`;
          }
          static upsertSession(e, t, i, n, s, r, a) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = yield ve.ZP.getCurrentSession();
              if (!o) {
                const n = (0, Pe.I0)({ appId: e }),
                  o = yield ve.ZP.getLastNotificationClickedForOutcomes(e);
                return (
                  o && (n.notificationId = o.notificationId),
                  yield ve.ZP.upsertSession(n),
                  void (yield Te.sendOnSessionCallIfNotPlayerCreate(
                    e,
                    t,
                    i,
                    r,
                    n
                  ))
                );
              }
              if (o.status === Pe.$y.Active)
                return void we.debug("Session already active", o);
              if (!o.lastDeactivatedTimestamp)
                return void we.debug("Session is in invalid state", o);
              const l = new Date().getTime();
              if (
                Te.timeInSecondsBetweenTimestamps(
                  l,
                  o.lastDeactivatedTimestamp
                ) <= n
              )
                return (
                  (o.status = Pe.$y.Active),
                  (o.lastActivatedTimestamp = l),
                  (o.lastDeactivatedTimestamp = null),
                  void (yield ve.ZP.upsertSession(o))
                );
              yield Te.finalizeSession(e, t, i, o, s, a);
              const d = (0, Pe.I0)({ appId: e });
              yield ve.ZP.upsertSession(d),
                yield Te.sendOnSessionCallIfNotPlayerCreate(e, t, i, r, d);
            });
          }
          static deactivateSession(e, t, i, n, s, r) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = yield ve.ZP.getCurrentSession();
              if (!o)
                return void we.debug(
                  "No active session found. Cannot deactivate."
                );
              const a = () => Te.finalizeSession(e, t, i, o, s, r);
              if (o.status === Pe.$y.Inactive) return Oe(a, n);
              if (o.status !== Pe.$y.Active)
                return void we.warn(
                  `Session in invalid state ${o.status}. Cannot deactivate.`
                );
              const l = new Date().getTime(),
                d = Te.timeInSecondsBetweenTimestamps(
                  l,
                  o.lastActivatedTimestamp
                );
              (o.lastDeactivatedTimestamp = l),
                (o.accumulatedDuration += d),
                (o.status = Pe.$y.Inactive);
              const c = Oe(a, n);
              return yield ve.ZP.upsertSession(o), c;
            });
          }
          static sendOnSessionCallIfNotPlayerCreate(e, t, i, n, s) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              n !== Pe.eB.UserCreate &&
                (ve.ZP.upsertSession(s),
                ve.ZP.resetSentUniqueOutcomes(),
                yield U.updateUserSession(e, t, i));
            });
          }
          static finalizeSession(e, t, i, n, s, r) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (we.debug(
                  "Finalize session",
                  `started: ${new Date(n.startTimestamp)}`,
                  `duration: ${n.accumulatedDuration}s`
                ),
                s)
              ) {
                we.debug(
                  `send on_focus reporting session duration -> ${n.accumulatedDuration}s`
                );
                const o = yield Ee.getAttribution(r);
                we.debug("send on_focus with attribution", o),
                  yield U.sendSessionDuration(
                    e,
                    t,
                    i,
                    n.accumulatedDuration,
                    o
                  );
              }
              yield Promise.all([
                ve.ZP.cleanupCurrentSession(),
                ve.ZP.removeAllNotificationClickedForOutcomes(),
              ]),
                we.debug(
                  "Finalize session finished",
                  `started: ${new Date(n.startTimestamp)}`
                );
            });
          }
          static timeInSecondsBetweenTimestamps(e, t) {
            return e <= t ? 0 : Math.floor((e - t) / 1e3);
          }
        }
        !(function (e) {
          (e.OneSignalWorker = "OneSignal Worker"),
            (e.ThirdParty = "3rd Party"),
            (e.None = "None");
        })(Ce || (Ce = {}));
        const ke = {
            allowButton: "onesignal-slidedown-allow-button",
            body: "slidedown-body",
            buttonIndicatorHolder: "onesignal-button-indicator-holder",
            cancelButton: "onesignal-slidedown-cancel-button",
            container: "onesignal-slidedown-container",
            dialog: "onesignal-slidedown-dialog",
            footer: "slidedown-footer",
            reset: "onesignal-reset",
            savingStateButton: "onesignal-saving-state-button",
            slideUp: "slide-up",
            slideDown: "slide-down",
            closeSlidedown: "close-slidedown",
            icon: "slidedown-body-icon",
            message: "slidedown-body-message",
            defaultIcon: "default-icon",
            loadingContainer: "onesignal-loading-container",
            clearfix: "clearfix",
          },
          xe = "onesignal-toast-text",
          Ne = "onesignal-toast-text",
          Ae = {
            allowButton: "onesignal-slidedown-allow-button",
            body: "slidedown-body",
            buttonIndicatorHolder: "onesignal-button-indicator-holder",
            cancelButton: "onesignal-slidedown-cancel-button",
            container: "onesignal-slidedown-container",
            dialog: "onesignal-slidedown-dialog",
            footer: "slidedown-footer",
            normalSlidedown: "normal-slidedown",
            loadingContainer: "onesignal-loading-container",
          },
          Me = "align-right",
          De = "primary",
          _e = "secondary",
          Ze = "slidedown-button",
          Ue = "onesignal-category-label-input",
          Ge = "onesignal-category-label-text",
          Be = "onesignal-category-label",
          Re = "onesignal-checkmark",
          Le = "tagging-container",
          Fe = "tagging-container-col",
          Ve = "onesignal-loading-message",
          We = "tagging-container",
          $e = "#95A1AC",
          je = "#FFFFFF",
          He = "Fetching your preferences",
          Qe = "channel-capture-container",
          qe = "input-with-validation-element",
          Ke = "onesignal-error-input",
          ze = "iti-onesignal-sms-input",
          Je = "onesignal-email-input",
          Ye = "onesignal-validation-element-hidden",
          Xe = "onesignal-validation-element",
          et = "sms-input-with-validation-element",
          tt = "email-input-with-validation-element",
          it = "iti-onesignal-sms-input",
          nt = "onesignal-email-input",
          ot = "onesignal-sms-validation-element",
          st = "onesignal-email-validation-element",
          rt = "onesignal-customlink-subscribe",
          at = "onesignal-customlink-explanation",
          lt = "onesignal-reset",
          dt = "hide",
          ct = {
            subscribed: "state-subscribed",
            unsubscribed: "state-unsubscribed",
          },
          ut = {
            containerSelector: `.${"onesignal-customlink-container"}`,
            subscribeSelector: `.${rt}`,
            explanationSelector: `.${at}`,
          };
        class ht {
          constructor(e) {
            this.config = e;
          }
          initialize() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (
                !(null === (e = this.config) || void 0 === e
                  ? void 0
                  : e.enabled)
              )
                return;
              if (!(yield this.loadSdkStyles())) return;
              C.Z.info("OneSignal: initializing customlink");
              const i =
                yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
              if (
                (null === (t = this.config) || void 0 === t
                  ? void 0
                  : t.unsubscribeEnabled) ||
                !i
              )
                for (
                  let e = 0;
                  e < this.customlinkContainerElements.length;
                  e++
                )
                  yield this.injectMarkup(this.customlinkContainerElements[e]);
              else this.hideCustomLinkContainers();
            });
          }
          injectMarkup(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (e.innerHTML = ""),
                yield this.mountExplanationNode(e),
                yield this.mountSubscriptionNode(e);
            });
          }
          mountExplanationNode(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                null === (t = this.config) || void 0 === t ? void 0 : t.text
              ) {
                if (this.config.text.explanation) {
                  const t = document.createElement("p");
                  (t.textContent = this.config.text.explanation),
                    (0, T.bF)(t, lt),
                    (0, T.bF)(t, at),
                    this.config.size && (0, T.bF)(t, this.config.size),
                    (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled())
                      ? (0, T.bF)(t, ct.subscribed)
                      : (0, T.bF)(t, ct.unsubscribed),
                    e.appendChild(t);
                }
              } else C.Z.error("CustomLink: required property 'text' is missing in the config");
            });
          }
          mountSubscriptionNode(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                null === (t = this.config) || void 0 === t ? void 0 : t.text
              ) {
                if (this.config.text.subscribe) {
                  const t = document.createElement("button");
                  (0, T.bF)(t, lt),
                    (0, T.bF)(t, rt),
                    this.config.size && (0, T.bF)(t, this.config.size),
                    this.config.style && (0, T.bF)(t, this.config.style),
                    (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled())
                      ? (0, T.bF)(t, ct.subscribed)
                      : (0, T.bF)(t, ct.unsubscribed),
                    this.setCustomColors(t),
                    yield this.setTextFromPushStatus(t),
                    t.addEventListener("click", () =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        C.Z.info("CustomLink: subscribe clicked"),
                          yield this.handleClick(t);
                      })
                    ),
                    t.setAttribute("type", "button"),
                    e.appendChild(t);
                }
              } else C.Z.error("CustomLink: required property 'text' is missing in the config");
            });
          }
          loadSdkStyles() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                0 ===
                  (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()) ||
                (C.Z.debug(
                  "Not initializing custom link button because styles failed to load."
                ),
                !1)
              );
            });
          }
          hideElement(e) {
            (0, T.bF)(e, dt);
          }
          hideCustomLinkContainers() {
            this.customlinkContainerElements.forEach((e) => {
              this.hideElement(e);
            });
          }
          handleClick(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (!OneSignal.User.PushSubscription.optedIn)
                return (
                  yield OneSignal.User.PushSubscription.optIn(),
                  void (
                    (null === (t = this.config) || void 0 === t
                      ? void 0
                      : t.unsubscribeEnabled) || this.hideCustomLinkContainers()
                  )
                );
              yield OneSignal.User.PushSubscription.optOut(),
                yield this.setTextFromPushStatus(e);
            });
          }
          setTextFromPushStatus(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n, o;
              (null ===
                (i =
                  null === (t = this.config) || void 0 === t
                    ? void 0
                    : t.text) || void 0 === i
                ? void 0
                : i.subscribe) &&
                ((yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) ||
                  (e.textContent = this.config.text.subscribe)),
                (null ===
                  (o =
                    null === (n = this.config) || void 0 === n
                      ? void 0
                      : n.text) || void 0 === o
                  ? void 0
                  : o.unsubscribe) &&
                  (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) &&
                  (e.textContent = this.config.text.unsubscribe);
            });
          }
          setCustomColors(e) {
            var t, i, n, o, s, r, a;
            (null === (t = this.config) || void 0 === t ? void 0 : t.color) &&
              this.config.color.text &&
              ("button" ===
                (null === (i = this.config) || void 0 === i
                  ? void 0
                  : i.style) &&
              (null === (n = this.config) || void 0 === n
                ? void 0
                : n.color.button)
                ? ((e.style.backgroundColor =
                    null === (o = this.config) || void 0 === o
                      ? void 0
                      : o.color.button),
                  (e.style.color =
                    null === (s = this.config) || void 0 === s
                      ? void 0
                      : s.color.text))
                : "link" ===
                    (null === (r = this.config) || void 0 === r
                      ? void 0
                      : r.style) &&
                  (e.style.color =
                    null === (a = this.config) || void 0 === a
                      ? void 0
                      : a.color.text));
          }
          get customlinkContainerElements() {
            const e = document.querySelectorAll(ut.containerSelector);
            return Array.prototype.slice.call(e);
          }
        }
        class gt {
          static put(e, t) {
            return (
              void 0 === gt.store[e] && (gt.store[e] = [null, null]),
              gt.store[e].push(t),
              gt.store[e].length == gt.LIMIT + 1 && gt.store[e].shift(),
              gt.store[e]
            );
          }
          static get(e) {
            return (
              void 0 === gt.store[e] && (gt.store[e] = [null, null]),
              gt.store[e]
            );
          }
          static getFirst(e) {
            return gt.get(e)[0];
          }
          static getLast(e) {
            return gt.get(e)[1];
          }
          static remove(e) {
            delete gt.store[e];
          }
          static isEmpty(e) {
            const t = gt.get(e);
            return null === t[0] && null === t[1];
          }
        }
        (gt.store = {}), (gt.LIMIT = 2);
        const pt = class {
          static decodeHtmlEntities(e) {
            if ("undefined" == typeof DOMParser) return e;
            return (
              new DOMParser().parseFromString(e, "text/html").documentElement
                .textContent || ""
            );
          }
        };
        var mt, ft;
        !(function (e) {
          (e[(e.HttpsPermissionRequest = "HTTPS permission request")] =
            "HttpsPermissionRequest"),
            (e[
              (e.SlidedownPermissionMessage = "slidedown permission message")
            ] = "SlidedownPermissionMessage"),
            (e[(e.SubscriptionBell = "subscription bell")] =
              "SubscriptionBell");
        })(mt || (mt = {})),
          (function (e) {
            (e[(e.MissingAppId = 0)] = "MissingAppId"),
              (e[(e.RedundantPermissionMessage = 1)] =
                "RedundantPermissionMessage"),
              (e[(e.PushPermissionAlreadyGranted = 2)] =
                "PushPermissionAlreadyGranted"),
              (e[(e.UnsupportedEnvironment = 3)] = "UnsupportedEnvironment"),
              (e[(e.MissingDomElement = 4)] = "MissingDomElement"),
              (e[(e.ServiceWorkerNotActivated = 5)] =
                "ServiceWorkerNotActivated");
          })(ft || (ft = {}));
        class InvalidStateError extends O.Z {
          constructor(e, t) {
            let i;
            switch (e) {
              case ft.MissingAppId:
                i = "Missing required app ID.";
                break;
              case ft.RedundantPermissionMessage: {
                let e = "";
                t &&
                  t.permissionPromptType &&
                  (e = `(${mt[t.permissionPromptType]})`),
                  (i = `Another permission message ${e} is being displayed.`);
                break;
              }
              case ft.PushPermissionAlreadyGranted:
                i = "Push permission has already been granted.";
                break;
              case ft.UnsupportedEnvironment:
                i = "The current environment does not support this operation.";
                break;
              case ft.ServiceWorkerNotActivated:
                i = "The service worker must be activated first.";
            }
            super(i),
              (this.description = ft[e]),
              (this.reason = e),
              Object.setPrototypeOf(this, InvalidStateError.prototype);
          }
        }
        var vt,
          bt,
          St = i(985);
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NoDeviceId = 1)] = "NoDeviceId"),
            (e[(e.NoEmailSet = 2)] = "NoEmailSet"),
            (e[(e.NoSMSSet = 3)] = "NoSMSSet"),
            (e[(e.OptedOut = 4)] = "OptedOut");
        })(vt || (vt = {}));
        class NotSubscribedError extends O.Z {
          constructor(e) {
            let t;
            switch (e) {
              case vt.Unknown || vt.NoDeviceId:
                t =
                  "This operation can only be performed after the user is subscribed.";
                break;
              case vt.NoEmailSet:
                t = "No email is currently set.";
                break;
              case vt.NoSMSSet:
                t = "No sms is currently set.";
                break;
              case vt.OptedOut:
                t =
                  "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.";
            }
            super(t),
              (this.reason = vt[e]),
              Object.setPrototypeOf(this, NotSubscribedError.prototype);
          }
        }
        class yt {
          static isValidUrl(e, t) {
            if (t && t.allowNull && null === e) return !0;
            if (t && t.allowEmpty && null == e) return !0;
            try {
              const i = new URL(e);
              return !t || !t.requireHttps || "https:" === i.protocol;
            } catch (e) {
              return !1;
            }
          }
          static isValidBoolean(e, t) {
            return !(!t || !t.allowNull || null !== e) || !0 === e || !1 === e;
          }
          static isValidArray(e, t) {
            return (
              !(!t || !t.allowNull || null !== e) ||
              !(!t || !t.allowEmpty || null != e) ||
              e instanceof Array
            );
          }
        }
        class wt {
          static showLocalNotification(e, t, i, n, s, r) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("MainHelper:showLocalNotification: ", e, t, i, n, s, r);
              if (!(yield ve.ZP.getAppConfig()).appId)
                throw new InvalidStateError(ft.MissingAppId);
              if (!OneSignal.Notifications.permission)
                throw new NotSubscribedError(vt.NoDeviceId);
              if (!yt.isValidUrl(i))
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.Malformed
                );
              if (!yt.isValidUrl(n, { allowEmpty: !0, requireHttps: !0 }))
                throw new InvalidArgumentError.R(
                  "icon",
                  InvalidArgumentError.Q.Malformed
                );
              if (!n) {
                const e = yield wt.getNotificationIcons();
                n = (0, T.S6)(e);
              }
              const a = (e) => {
                  const t = [];
                  for (let i = 0; i < e.length; i++) {
                    const n = e[i];
                    t.push({
                      action: n.id,
                      title: n.text,
                      icon: n.icon,
                      url: n.url,
                    });
                  }
                  return t;
                },
                l = { data: s, launchURL: i, buttons: r ? a(r) : void 0 };
              OneSignal.context.serviceWorkerManager
                .getRegistration()
                .then((i) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    if (!i)
                      return void C.Z.error(
                        "Service worker registration not available."
                      );
                    const o = {
                      body: t,
                      data: l,
                      icon: n,
                      actions: r ? a(r) : [],
                    };
                    i.showNotification(e, o);
                  })
                );
            });
          }
          static checkAndTriggerNotificationPermissionChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield ve.ZP.get("Options", "notificationPermission"),
                t =
                  yield OneSignal.context.permissionManager.getPermissionStatus();
              e !== t &&
                (yield St.Q.triggerNotificationPermissionChanged(),
                yield ve.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                }));
            });
          }
          static getNotificationIcons() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield wt.getAppId();
              if (!e) throw new InvalidStateError(ft.MissingAppId);
              const t = `${p.Z.getOneSignalApiUrl().toString()}/apps/${e}/icon`,
                i = yield fetch(t),
                n = yield i.json();
              if (n.errors)
                throw (
                  (C.Z.error(`API call ${t}`, "failed with:", n.errors),
                  new Error("Failed to get notification icons."))
                );
              return n;
            });
          }
          static getSlidedownOptions(e) {
            return a.Z.getValueOrDefault(e.slidedown, { prompts: [] });
          }
          static getFullscreenPermissionMessageOptions(e) {
            return e
              ? e.fullscreen
                ? {
                    autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                    actionMessage: e.fullscreen.actionMessage,
                    exampleNotificationTitleDesktop: e.fullscreen.title,
                    exampleNotificationTitleMobile: e.fullscreen.title,
                    exampleNotificationMessageDesktop: e.fullscreen.message,
                    exampleNotificationMessageMobile: e.fullscreen.message,
                    exampleNotificationCaption: e.fullscreen.caption,
                    acceptButton: e.fullscreen.acceptButton,
                    cancelButton: e.fullscreen.cancelButton,
                  }
                : e
              : null;
          }
          static getPromptOptionsQueryString() {
            let e = "";
            if (
              wt.getFullscreenPermissionMessageOptions(
                OneSignal.config.userConfig.promptOptions
              )
            ) {
              const t = wt.getPromptOptionsPostHash();
              for (const i of Object.keys(t)) {
                e += "&" + i + "=" + t[i];
              }
            }
            return e;
          }
          static getPromptOptionsPostHash() {
            const e = wt.getFullscreenPermissionMessageOptions(
                OneSignal.config.userConfig.promptOptions
              ),
              t = {};
            if (e) {
              const i = {
                exampleNotificationTitleDesktop: "exampleNotificationTitle",
                exampleNotificationMessageDesktop: "exampleNotificationMessage",
                exampleNotificationTitleMobile: "exampleNotificationTitle",
                exampleNotificationMessageMobile: "exampleNotificationMessage",
              };
              for (const t of Object.keys(i)) {
                const n = i[t];
                e[t] && (e[n] = e[t]);
              }
              const n = [
                "autoAcceptTitle",
                "siteName",
                "autoAcceptTitle",
                "subscribeText",
                "showGraphic",
                "actionMessage",
                "exampleNotificationTitle",
                "exampleNotificationMessage",
                "exampleNotificationCaption",
                "acceptButton",
                "cancelButton",
                "timeout",
              ];
              for (let i = 0; i < n.length; i++) {
                const o = n[i],
                  s = e[o],
                  r = encodeURIComponent(s);
                (s || !1 === s || "" === s) && (t[o] = r);
              }
            }
            return t;
          }
          static getAppId() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (OneSignal.config.appId)
                return Promise.resolve(OneSignal.config.appId);
              return yield ve.ZP.get("Ids", "appId");
            });
          }
          static getDeviceId() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (yield OneSignal.database.getSubscription()).deviceId || void 0
              );
            });
          }
          static getCurrentPushToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (S.Z.useSafariLegacyPush()) {
                const i =
                  null ===
                    (t =
                      null === (e = window.safari) || void 0 === e
                        ? void 0
                        : e.pushNotification) || void 0 === t
                    ? void 0
                    : t.permission(OneSignal.config.safariWebId).deviceToken;
                return (null == i ? void 0 : i.toLowerCase()) || void 0;
              }
              const i =
                yield OneSignal.context.serviceWorkerManager.getRegistration();
              if (!i) return;
              const n = yield i.pushManager.getSubscription();
              return null == n ? void 0 : n.endpoint;
            });
          }
        }
        class It {
          constructor(e, t, i, n) {
            (this.model = e),
              (this.property = t),
              (this.oldValue = i),
              (this.newValue = n);
          }
        }
        class Ot {
          constructor() {
            this.subscribers = new Set();
          }
          subscribe(e) {
            return this.subscribers.add(e), () => this.subscribers.delete(e);
          }
          broadcast(e) {
            this.subscribers.forEach((t) => {
              t(e);
            });
          }
        }
        !(function (e) {
          (e.Add = "add"),
            (e.Remove = "remove"),
            (e.Update = "update"),
            (e.Hydrate = "hydrate");
        })(bt || (bt = {}));
        class Et {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = bt.Add);
          }
        }
        class Ct {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = bt.Remove);
          }
        }
        class Pt {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = bt.Update);
          }
        }
        class Tt {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = bt.Hydrate);
          }
        }
        class kt extends Ot {
          constructor(e, t, i) {
            super(),
              (this.modelName = e),
              (this.modelId =
                null != i ? i : Math.random().toString(36).substring(2)),
              (this.modelName = e),
              (this.data = t),
              (this.onesignalId = void 0),
              (this.externalId = void 0),
              (this.awaitOneSignalIdAvailable = new Promise((e) => {
                this.onesignalIdAvailableCallback = e;
              }));
          }
          setOneSignalId(e) {
            var t;
            (0, T.tI)("setOneSignalId", { onesignalId: e }),
              (this.onesignalId = e),
              e &&
                (null === (t = this.onesignalIdAvailableCallback) ||
                  void 0 === t ||
                  t.call(this, e));
          }
          setExternalId(e) {
            (0, T.tI)("setExternalId", { externalId: e }),
              (this.externalId = e);
          }
          setApplyToRecordId(e) {
            (0, T.tI)("setapplyToRecordId", { applyToRecordId: e }),
              (this.applyToRecordId = e);
          }
          set(e, t, i = !0) {
            let n;
            if (
              ((0, T.tI)("set", { property: e, newValue: t }),
              this.data && ((n = this.data[e]), (this.data[e] = t)),
              i)
            ) {
              const i = new Pt(this.modelId, new It(this, e, n, t));
              this.broadcast(i);
            }
          }
          hydrate(e) {
            (0, T.tI)("hydrate", { data: e }),
              (this.data = e),
              this.broadcast(new Tt(this.modelId, this));
          }
          encode() {
            const e = this.modelId,
              t = this.modelName,
              i = this.onesignalId,
              n = this.externalId;
            return Object.assign(
              { modelId: e, modelName: t, onesignalId: i, externalId: n },
              this.data
            );
          }
          static decode(e) {
            (0, T.tI)("decode", { encodedModel: e });
            const {
                modelId: t,
                modelName: i,
                onesignalId: n,
                externalId: s,
              } = e,
              r = (0, o._T)(e, [
                "modelId",
                "modelName",
                "onesignalId",
                "externalId",
              ]),
              a = new kt(i, r, t);
            return a.setOneSignalId(n), a.setExternalId(s), a;
          }
        }
        var xt = i(894);
        function Nt(e) {
          return void 0 !== e.property;
        }
        function At(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            (null == e ? void 0 : e.constructor) === Object
          );
        }
        function Mt(e) {
          return void 0 !== (null == e ? void 0 : e.onesignal_id);
        }
        function Dt(e) {
          return (
            void 0 !== (null == e ? void 0 : e.type) &&
            void 0 !== (null == e ? void 0 : e.id)
          );
        }
        class _t {
          static initializeUser(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("initializeUser", { isTemporary: e });
              const t = OneSignal.coreDirector.getIdentityModel(),
                i = OneSignal.coreDirector.getPropertiesModel();
              !t || !i
                ? (_t.createUserPropertiesModel(),
                  yield _t.createAnonymousUser(e))
                : C.Z.debug("User already exists, skipping initialization.");
            });
          }
          static resetUserMetaProperties() {
            const e = Zt.createOrGetInstance();
            (e.hasOneSignalId = !1),
              (e.awaitOneSignalIdAvailable = void 0),
              (e.isCreatingUser = !1);
          }
          static createAnonymousUser(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t;
              if (e) t = {};
              else {
                const e = yield _t.createUserOnServer();
                if (!e) return;
                (t = e.identity), OneSignal.coreDirector.hydrateUser(e);
              }
              const i = new kt(xt.Q.Identity, t);
              i.setOneSignalId(t.onesignal_id),
                OneSignal.coreDirector.add(xt.Q.Identity, i, !1),
                yield this.copyOneSignalIdPromiseFromIdentityModel();
            });
          }
          static createUserPropertiesModel() {
            const e = {
                language: S.Z.getLanguage(),
                timezone_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
              t = new kt(xt.Q.Properties, e);
            return OneSignal.coreDirector.add(xt.Q.Properties, t, !1), t;
          }
          static createUserOnServer() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              const t = Zt.createOrGetInstance();
              if (!t.isCreatingUser) {
                t.isCreatingUser = !0;
                try {
                  const i = yield wt.getAppId(),
                    n = yield OneSignal.coreDirector.getPushSubscriptionModel();
                  let o;
                  Dt(null == n ? void 0 : n.data) &&
                    (o = null == n ? void 0 : n.data.id);
                  const s = yield _t.getAllUserData(),
                    r = yield _.createUser({ appId: i, subscriptionId: o }, s);
                  t.isCreatingUser = !1;
                  const a = r.status,
                    l = r.result;
                  if (a >= 200 && a < 300) {
                    const t =
                      null === (e = s.identity) || void 0 === e
                        ? void 0
                        : e.onesignal_id;
                    t && OneSignal.coreDirector.getNewRecordsState().add(t);
                    const i = s.subscriptions[0].token,
                      n = l.subscriptions.find((e) => e.token === i);
                    n &&
                      Dt(n) &&
                      OneSignal.coreDirector.getNewRecordsState().add(n.id);
                  }
                  return l;
                } catch (e) {
                  C.Z.error(e);
                }
              }
            });
          }
          static createAndHydrateUser() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield _t.createUserOnServer();
              e && OneSignal.coreDirector.hydrateUser(e);
            });
          }
          static getAllUserData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("LoginManager.getAllUserData");
              const e = OneSignal.coreDirector.getIdentityModel(),
                t = OneSignal.coreDirector.getPropertiesModel(),
                i = yield OneSignal.coreDirector.getAllSubscriptionsModels(),
                n = {};
              return (
                (n.identity = null == e ? void 0 : e.data),
                (n.properties = null == t ? void 0 : t.data),
                (n.subscriptions = null == i ? void 0 : i.map((e) => e.data)),
                n
              );
            });
          }
          static copyOneSignalIdPromiseFromIdentityModel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              const t = Zt.createOrGetInstance(),
                i = OneSignal.coreDirector.getIdentityModel();
              (t.awaitOneSignalIdAvailable =
                null == i ? void 0 : i.awaitOneSignalIdAvailable),
                null === (e = t.awaitOneSignalIdAvailable) ||
                  void 0 === e ||
                  e.then((e) => {
                    (t.hasOneSignalId = !0), (t.onesignalId = e);
                  });
            });
          }
          static updateModelWithCurrentUserOneSignalId(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = Zt.createOrGetInstance();
              yield t.awaitOneSignalIdAvailable,
                e.setOneSignalId(t.onesignalId);
            });
          }
        }
        class Zt {
          constructor() {
            (this.hasOneSignalId = !1), (this.isCreatingUser = !1);
          }
          static createOrGetInstance() {
            return (
              Zt.singletonInstance ||
                ((Zt.singletonInstance = new Zt()),
                _t
                  .initializeUser(!0)
                  .then(() => {
                    _t.copyOneSignalIdPromiseFromIdentityModel().catch((e) => {
                      console.error(e);
                    });
                  })
                  .catch((e) => {
                    console.error(e);
                  })),
              Zt.singletonInstance
            );
          }
          addAlias(e, t) {
            if (
              ((0, T.tI)("addAlias", { label: e, id: t }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.WrongType
              );
            if ("string" != typeof t)
              throw new InvalidArgumentError.R(
                "id",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.Empty
              );
            if (!t)
              throw new InvalidArgumentError.R(
                "id",
                InvalidArgumentError.Q.Empty
              );
            this.addAliases({ [e]: t });
          }
          addAliases(e) {
            if (
              ((0, T.tI)("addAliases", { aliases: e }),
              !e || 0 === Object.keys(e).length)
            )
              throw new InvalidArgumentError.R(
                "aliases",
                InvalidArgumentError.Q.Empty
              );
            Object.keys(e).forEach((e) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                if ("string" != typeof e)
                  throw new InvalidArgumentError.R(
                    "label",
                    InvalidArgumentError.Q.WrongType
                  );
              })
            );
            const t = OneSignal.coreDirector.getIdentityModel();
            null == t ||
              t.setApplyToRecordId(null == t ? void 0 : t.onesignalId),
              Object.keys(e).forEach((i) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  null == t || t.set(i, e[i]);
                })
              );
          }
          removeAlias(e) {
            if (((0, T.tI)("removeAlias", { label: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.Empty
              );
            this.removeAliases([e]);
          }
          removeAliases(e) {
            if (
              ((0, T.tI)("removeAliases", { aliases: e }), !e || 0 === e.length)
            )
              throw new InvalidArgumentError.R(
                "aliases",
                InvalidArgumentError.Q.Empty
              );
            const t = OneSignal.coreDirector.getIdentityModel();
            null == t ||
              t.setApplyToRecordId(null == t ? void 0 : t.onesignalId),
              e.forEach((e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  null == t || t.set(e, void 0);
                })
              );
          }
          addEmail(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              if (((0, T.tI)("addEmail", { email: e }), "string" != typeof e))
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.WrongType
                );
              if (!e)
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.Empty
                );
              if (!(0, T.vV)(e))
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.Malformed
                );
              const o = { type: c.Email, token: e },
                s = new kt(xt.Q.Subscriptions, o);
              if (
                (null === (t = Zt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.isCreatingUser) ||
                (null === (i = Zt.singletonInstance) || void 0 === i
                  ? void 0
                  : i.hasOneSignalId)
              ) {
                s.setOneSignalId(
                  null === (n = Zt.singletonInstance) || void 0 === n
                    ? void 0
                    : n.onesignalId
                );
                const e = OneSignal.coreDirector.getIdentityModel();
                e.data.external_id && s.setExternalId(e.data.external_id),
                  OneSignal.coreDirector.add(xt.Q.Subscriptions, s, !0);
              } else OneSignal.coreDirector.add(xt.Q.Subscriptions, s, !1), yield _t.createAndHydrateUser();
              _t.updateModelWithCurrentUserOneSignalId(s).catch((e) => {
                throw e;
              });
              const r = OneSignal.coreDirector.getIdentityModel();
              r.data.external_id && s.setExternalId(r.data.external_id);
            });
          }
          addSms(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              if (((0, T.tI)("addSms", { sms: e }), "string" != typeof e))
                throw new InvalidArgumentError.R(
                  "sms",
                  InvalidArgumentError.Q.WrongType
                );
              if (!e)
                throw new InvalidArgumentError.R(
                  "sms",
                  InvalidArgumentError.Q.Empty
                );
              const o = { type: c.SMS, token: e },
                s = new kt(xt.Q.Subscriptions, o);
              if (
                (null === (t = Zt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.isCreatingUser) ||
                (null === (i = Zt.singletonInstance) || void 0 === i
                  ? void 0
                  : i.hasOneSignalId)
              ) {
                s.setOneSignalId(
                  null === (n = Zt.singletonInstance) || void 0 === n
                    ? void 0
                    : n.onesignalId
                );
                const e = OneSignal.coreDirector.getIdentityModel();
                e.data.external_id && s.setExternalId(e.data.external_id),
                  OneSignal.coreDirector.add(xt.Q.Subscriptions, s, !0);
              } else OneSignal.coreDirector.add(xt.Q.Subscriptions, s, !1), yield _t.createAndHydrateUser();
              _t.updateModelWithCurrentUserOneSignalId(s).catch((e) => {
                throw e;
              });
              const r = OneSignal.coreDirector.getIdentityModel();
              r.data.external_id && s.setExternalId(r.data.external_id);
            });
          }
          removeEmail(e) {
            if (((0, T.tI)("removeEmail", { email: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "email",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "email",
                InvalidArgumentError.Q.Empty
              );
            const t = OneSignal.coreDirector.getEmailSubscriptionModels();
            Object.keys(t).forEach((i) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                var n;
                (null === (n = t[i].data) || void 0 === n
                  ? void 0
                  : n.token) === e &&
                  OneSignal.coreDirector.remove(xt.Q.Subscriptions, i);
              })
            );
          }
          removeSms(e) {
            if (
              ((0, T.tI)("removeSms", { smsNumber: e }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "smsNumber",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "smsNumber",
                InvalidArgumentError.Q.Empty
              );
            const t = OneSignal.coreDirector.getSmsSubscriptionModels();
            Object.keys(t).forEach((i) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                var n;
                (null === (n = t[i].data) || void 0 === n
                  ? void 0
                  : n.token) === e &&
                  OneSignal.coreDirector.remove(xt.Q.Subscriptions, i);
              })
            );
          }
          addTag(e, t) {
            if (
              ((0, T.tI)("addTag", { key: e, value: t }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "key",
                InvalidArgumentError.Q.WrongType
              );
            if ("string" != typeof t)
              throw new InvalidArgumentError.R(
                "value",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "key",
                InvalidArgumentError.Q.Empty
              );
            if (!t)
              throw new InvalidArgumentError.R(
                "value",
                InvalidArgumentError.Q.Empty,
                "Did you mean to call removeTag?"
              );
            this.addTags({ [e]: t });
          }
          addTags(e) {
            var t;
            if (((0, T.tI)("addTags", { tags: e }), "object" != typeof e))
              throw new InvalidArgumentError.R(
                "tags",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "tags",
                InvalidArgumentError.Q.Empty
              );
            const i = OneSignal.coreDirector.getPropertiesModel();
            (e = Object.assign(
              Object.assign(
                {},
                null === (t = null == i ? void 0 : i.data) || void 0 === t
                  ? void 0
                  : t.tags
              ),
              e
            )),
              null == i || i.set("tags", e);
          }
          removeTag(e) {
            if (((0, T.tI)("removeTag", { tagKey: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "tagKey",
                InvalidArgumentError.Q.WrongType
              );
            if (void 0 === e)
              throw new InvalidArgumentError.R(
                "tagKey",
                InvalidArgumentError.Q.Empty
              );
            this.removeTags([e]);
          }
          removeTags(e) {
            var t;
            if (((0, T.tI)("removeTags", { tagKeys: e }), !e || 0 === e.length))
              throw new InvalidArgumentError.R(
                "tagKeys",
                InvalidArgumentError.Q.Empty
              );
            const i = OneSignal.coreDirector.getPropertiesModel(),
              n = JSON.parse(
                JSON.stringify(
                  null === (t = null == i ? void 0 : i.data) || void 0 === t
                    ? void 0
                    : t.tags
                )
              );
            n &&
              (e.forEach((e) => {
                n[e] = "";
              }),
              null == i ||
                i.setApplyToRecordId(null == i ? void 0 : i.onesignalId),
              null == i || i.set("tags", n));
          }
          getTags() {
            var e, t;
            return (
              (0, T.tI)("getTags"),
              null ===
                (t =
                  null === (e = OneSignal.coreDirector.getPropertiesModel()) ||
                  void 0 === e
                    ? void 0
                    : e.data) || void 0 === t
                ? void 0
                : t.tags
            );
          }
        }
        Zt.singletonInstance = void 0;
        class Ut {}
        class Gt extends Ut {
          constructor(e, t, i) {
            super(),
              e && t
                ? ((this._optedIn = !t.optedOut),
                  (this._permission = i),
                  (this._token = t.subscriptionToken),
                  OneSignal.coreDirector
                    .getPushSubscriptionModel()
                    .then((e) => {
                      e && Dt(e.data) && (this._id = e.data.id);
                    })
                    .catch((e) => {
                      C.Z.error(e);
                    }),
                  OneSignal.emitter.on(
                    OneSignal.EVENTS.SUBSCRIPTION_CHANGED,
                    (e) =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        (this._id = null == e ? void 0 : e.current.id),
                          (this._token = null == e ? void 0 : e.current.token);
                      })
                  ),
                  OneSignal.emitter.on(
                    OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                    (e) =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        this._permission = e;
                      })
                  ))
                : C.Z.warn(
                    `PushSubscriptionNamespace: skipping initialization. One or more required params are falsy: initialize: ${e}, subscription: ${t}`
                  );
          }
          get id() {
            return this._id;
          }
          get token() {
            return this._token;
          }
          get optedIn() {
            return !!this._optedIn && "granted" === this._permission;
          }
          optIn() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("optIn"), yield (0, T.JX)(), (this._optedIn = !0);
              "granted" ===
              (yield OneSignal.context.permissionManager.getPermissionStatus())
                ? yield this._enable(!0)
                : yield OneSignal.Notifications.requestPermission();
            });
          }
          optOut() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("optOut"),
                yield (0, T.JX)(),
                (this._optedIn = !1),
                yield this._enable(!1);
            });
          }
          addEventListener(e, t) {
            OneSignal.emitter.on(e, t);
          }
          removeEventListener(e, t) {
            OneSignal.emitter.off(e, t);
          }
          _enable(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, T.JX)();
              const t = yield ve.ZP.getAppConfig(),
                i = yield ve.ZP.getSubscription();
              if (!t.appId) throw new InvalidStateError(ft.MissingAppId);
              if (!yt.isValidBoolean(e))
                throw new InvalidArgumentError.R(
                  "enabled",
                  InvalidArgumentError.Q.Malformed
                );
              (i.optedOut = !e),
                yield ve.ZP.setSubscription(i),
                Wt.onInternalSubscriptionSet(i.optedOut).catch((e) => {
                  C.Z.error(e);
                }),
                Wt.checkAndTriggerSubscriptionChanged().catch((e) => {
                  C.Z.error(e);
                });
            });
          }
        }
        var Bt,
          Rt,
          Lt,
          Ft = i(680);
        class Vt extends Ut {
          constructor(e, t, i) {
            super(),
              (this.PushSubscription = new Gt(!1)),
              e &&
                ((this._currentUser = Zt.createOrGetInstance()),
                (this.PushSubscription = new Gt(!0, t, i)));
          }
          get onesignalId() {
            var e;
            return null === (e = this._currentUser) || void 0 === e
              ? void 0
              : e.onesignalId;
          }
          get externalId() {
            var e;
            const t = OneSignal.coreDirector.getIdentityModel();
            return null === (e = null == t ? void 0 : t.data) || void 0 === e
              ? void 0
              : e.external_id;
          }
          addAlias(e, t) {
            var i;
            null === (i = this._currentUser) ||
              void 0 === i ||
              i.addAlias(e, t);
          }
          addAliases(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addAliases(e);
          }
          removeAlias(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeAlias(e);
          }
          removeAliases(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeAliases(e);
          }
          addEmail(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addEmail(e);
          }
          removeEmail(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeEmail(e);
          }
          addSms(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addSms(e);
          }
          removeSms(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeSms(e);
          }
          addTag(e, t) {
            var i;
            null === (i = this._currentUser) || void 0 === i || i.addTag(e, t);
          }
          addTags(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addTags(e);
          }
          removeTag(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeTag(e);
          }
          removeTags(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeTags(e);
          }
          getTags() {
            var e;
            return (
              (null === (e = this._currentUser) || void 0 === e
                ? void 0
                : e.getTags()) || {}
            );
          }
          addEventListener(e, t) {
            Vt.emitter.on(e, t);
          }
          removeEventListener(e, t) {
            Vt.emitter.off(e, t);
          }
        }
        Vt.emitter = new Ft.Z();
        class Wt {
          static onNotificationPermissionChange() {
            Wt.checkAndTriggerSubscriptionChanged();
          }
          static onInternalSubscriptionSet(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              gt.put("subscription.optedOut", e);
            });
          }
          static checkAndTriggerSubscriptionChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              v.Z.logMethodCall("checkAndTriggerSubscriptionChanged");
              const t = OneSignal.context,
                i =
                  yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled(),
                n = yield OneSignal.context.subscriptionManager.isOptedIn(),
                o = yield ve.ZP.getAppState(),
                {
                  lastKnownPushEnabled: s,
                  lastKnownPushId: r,
                  lastKnownPushToken: a,
                  lastKnownOptedIn: l,
                } = o,
                d = yield wt.getCurrentPushToken(),
                c = yield OneSignal.coreDirector.getPushSubscriptionModel(),
                u =
                  null === (e = null == c ? void 0 : c.data) || void 0 === e
                    ? void 0
                    : e.id;
              if (!(null === s || i !== s || d !== a || u !== r)) return;
              yield t.subscriptionManager.updateNotificationTypes(),
                (o.lastKnownPushEnabled = i),
                (o.lastKnownPushToken = d),
                (o.lastKnownPushId = u),
                (o.lastKnownOptedIn = n),
                yield ve.ZP.setAppState(o);
              const h = {
                previous: { id: r, token: a, optedIn: null == l || l },
                current: { id: u, token: d, optedIn: n },
              };
              C.Z.info("Push Subscription state changed: ", h),
                Wt.triggerSubscriptionChanged(h);
            });
          }
          static _onSubscriptionChanged(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              Wt.onSubscriptionChanged_showWelcomeNotification(
                null === (t = null == e ? void 0 : e.current) || void 0 === t
                  ? void 0
                  : t.optedIn,
                null === (i = null == e ? void 0 : e.current) || void 0 === i
                  ? void 0
                  : i.id
              ),
                Wt.onSubscriptionChanged_sendCategorySlidedownTags(
                  null === (n = null == e ? void 0 : e.current) || void 0 === n
                    ? void 0
                    : n.optedIn
                ),
                Wt.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(),
                Wt.onSubscriptionChanged_updateCustomLink();
            });
          }
          static onSubscriptionChanged_sendCategorySlidedownTags(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i;
              if (!0 !== e) return;
              const n =
                null ===
                  (i =
                    null ===
                      (t =
                        OneSignal.context.appConfig.userConfig.promptOptions) ||
                    void 0 === t
                      ? void 0
                      : t.slidedown) || void 0 === i
                  ? void 0
                  : i.prompts;
              Y.isCategorySlidedownConfigured(n) &&
                (yield OneSignal.context.tagManager.sendTags());
            });
          }
          static onSubscriptionChanged_showWelcomeNotification(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i;
              if (OneSignal.__doNotShowWelcomeNotification)
                return void C.Z.debug(
                  "Not showing welcome notification because user has previously subscribed."
                );
              const n =
                null === (i = OneSignal.config) || void 0 === i
                  ? void 0
                  : i.userConfig.welcomeNotification;
              if (void 0 !== n && !0 === n.disable) return;
              if (!0 !== e) return;
              if (!t) return;
              let o =
                  void 0 !== n && void 0 !== n.title && null !== n.title
                    ? n.title
                    : "",
                s =
                  void 0 !== n &&
                  void 0 !== n.message &&
                  null !== n.message &&
                  n.message.length > 0
                    ? n.message
                    : "Thanks for subscribing!";
              const r = new URL(location.href).origin + "?_osp=do_not_open",
                a = n && n.url && n.url.length > 0 ? n.url : r;
              (o = pt.decodeHtmlEntities(o)),
                (s = pt.decodeHtmlEntities(s)),
                C.Z.debug("Sending welcome notification."),
                wt.showLocalNotification(
                  o,
                  s,
                  a,
                  void 0,
                  { __isOneSignalWelcomeNotification: !0 },
                  void 0
                ),
                be.Z.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                  title: o,
                  message: s,
                  url: a,
                });
            });
          }
          static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!OneSignal.config.userConfig.notifyButton) return;
              const e =
                OneSignal.config.userConfig.notifyButton.displayPredicate;
              if (e && "function" == typeof e && OneSignal.notifyButton) {
                !1 !== (yield e())
                  ? (C.Z.debug(
                      "Showing notify button because display predicate returned true."
                    ),
                    OneSignal.notifyButton.launcher.show())
                  : (C.Z.debug(
                      "Hiding notify button because display predicate returned false."
                    ),
                    OneSignal.notifyButton.launcher.hide());
              }
            });
          }
          static onSubscriptionChanged_updateCustomLink() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              OneSignal.config.userConfig.promptOptions &&
                new ht(
                  OneSignal.config.userConfig.promptOptions.customlink
                ).initialize();
            });
          }
          static triggerSubscriptionChanged(e) {
            be.Z.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e);
          }
          static triggerUserChanged(e) {
            be.Z.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e, Vt.emitter);
          }
          static triggerNotificationClick(e) {
            const t = { notification: e.notification, result: e.result };
            return be.Z.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, t);
          }
          static fireStoredNotificationClicks() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, T.JX)();
              const e =
                OneSignal.config.pageUrl ||
                OneSignal.config.userConfig.pageUrl ||
                document.URL;
              function t(e) {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  const t = yield ve.ZP.getAppState();
                  (t.pendingNotificationClickEvents[e.result.url] = null),
                    yield ve.ZP.setAppState(t);
                  const i = e.timestamp;
                  if (i) {
                    if ((Date.now() - i) / 1e3 / 60 > 5) return;
                  }
                  Wt.triggerNotificationClick(e);
                });
              }
              const i = yield ve.ZP.getAppState();
              if (
                "origin" ===
                (yield ve.ZP.get("Options", "notificationClickHandlerMatch"))
              ) {
                for (const e of Object.keys(i.pendingNotificationClickEvents))
                  if (new URL(e).origin === location.origin) {
                    const n = i.pendingNotificationClickEvents[e];
                    yield t(n);
                  }
              } else {
                let n = i.pendingNotificationClickEvents[e];
                if (n) yield t(n);
                else if (!n && e.endsWith("/")) {
                  const o = e.substring(0, e.length - 1);
                  (n = i.pendingNotificationClickEvents[o]), n && (yield t(n));
                }
              }
            });
          }
          static checkAndTriggerUserChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              v.Z.logMethodCall("checkAndTriggerUserChanged");
              const t = yield ve.ZP.getUserState(),
                { previousOneSignalId: i, previousExternalId: n } = t,
                o = yield OneSignal.coreDirector.getIdentityModel(),
                s = null == o ? void 0 : o.onesignalId,
                r =
                  null === (e = null == o ? void 0 : o.data) || void 0 === e
                    ? void 0
                    : e.external_id;
              if (!(s !== i || r !== n)) return;
              (t.previousOneSignalId = s),
                (t.previousExternalId = r),
                yield ve.ZP.setUserState(t);
              const a = { current: { onesignalId: s, externalId: r } };
              C.Z.info("User state changed: ", a), Wt.triggerUserChanged(a);
            });
          }
        }
        class $t {
          constructor(e, t) {
            (this.context = e), (this.config = t);
          }
          getRegistration() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return ae.getRegistration(this.config.registrationOptions.scope);
            });
          }
          getOneSignalRegistration() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if ((yield this.getActiveState()) === Ce.OneSignalWorker)
                return this.getRegistration();
            });
          }
          getActiveState() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getRegistration();
              if (!e) return Ce.None;
              const t = $t.activeSwFileName(e);
              return this.swActiveStateByFileName(t);
            });
          }
          static activeSwFileName(e) {
            const t = ae.getAvailableServiceWorker(e);
            if (!t) return null;
            const i = new URL(t.scriptURL).pathname,
              n = new fe(i).getFileName();
            if ("akam-sw.js" == n) {
              const e = new URLSearchParams(new URL(t.scriptURL).search).get(
                "othersw"
              );
              if (e)
                return (
                  C.Z.debug(
                    "Found a ServiceWorker under Akamai's akam-sw.js?othersw=",
                    e
                  ),
                  new fe(new URL(e).pathname).getFileName()
                );
            }
            return n;
          }
          swActiveStateByFileName(e) {
            if (!e) return Ce.None;
            return e == this.config.workerPath.getFileName() ||
              "OneSignalSDK.sw.js" == e
              ? Ce.OneSignalWorker
              : Ce.ThirdParty;
          }
          getWorkerVersion() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return new Promise((e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  this.context.workerMessenger.once(re.WorkerVersion, (t) => {
                    e(t);
                  }),
                    yield this.context.workerMessenger.unicast(
                      re.WorkerVersion
                    );
                })
              );
            });
          }
          shouldInstallWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!S.Z.supportsServiceWorkers()) return !1;
              if (!OneSignal.config) return !1;
              const e = yield this.getActiveState();
              if (
                (C.Z.debug("[shouldInstallWorker] workerState", e),
                e === Ce.None || e === Ce.ThirdParty)
              ) {
                const e =
                  "granted" ===
                  (yield OneSignal.context.permissionManager.getNotificationPermission(
                    OneSignal.config.safariWebId
                  ));
                return (
                  e &&
                    C.Z.info(
                      "[shouldInstallWorker] Notification Permissions enabled, will install ServiceWorker"
                    ),
                  e
                );
              }
              return (
                !!(yield this.haveParamsChanged()) || this.workerNeedsUpdate()
              );
            });
          }
          haveParamsChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getRegistration();
              if (!e)
                return (
                  C.Z.info(
                    "[changedServiceWorkerParams] workerRegistration not found at scope",
                    this.config.registrationOptions.scope
                  ),
                  !0
                );
              const t = new URL(e.scope).pathname,
                i = this.config.registrationOptions.scope;
              if (t != i)
                return (
                  C.Z.info(
                    "[changedServiceWorkerParams] ServiceWorker scope changing",
                    { a_old: t, b_new: i }
                  ),
                  !0
                );
              const n = ae.getAvailableServiceWorker(e),
                o = Te.getServiceWorkerHref(
                  this.config,
                  this.context.appConfig.appId,
                  S.Z.version()
                );
              return (
                !(null == n ? void 0 : n.scriptURL) ||
                (o !== n.scriptURL &&
                  (C.Z.info(
                    "[changedServiceWorkerParams] ServiceWorker href changing:",
                    { a_old: null == n ? void 0 : n.scriptURL, b_new: o }
                  ),
                  !0))
              );
            });
          }
          workerNeedsUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let e;
              C.Z.info(
                "[Service Worker Update] Checking service worker version..."
              );
              try {
                e = yield a.c.timeoutPromise(this.getWorkerVersion(), 2e3);
              } catch (e) {
                return (
                  C.Z.info(
                    "[Service Worker Update] Worker did not reply to version query; assuming older version and updating."
                  ),
                  !0
                );
              }
              return e !== S.Z.version()
                ? (C.Z.info(
                    `[Service Worker Update] Updating service worker from ${e} --\x3e ${S.Z.version()}.`
                  ),
                  !0)
                : (C.Z.info(
                    `[Service Worker Update] Service worker version is current at ${e} (no update required).`
                  ),
                  !1);
            });
          }
          establishServiceWorkerChannel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.debug("establishServiceWorkerChannel");
              const e = this.context.workerMessenger;
              e.off(),
                e.on(re.NotificationWillDisplay, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    C.Z.debug(
                      location.origin,
                      "Received notification display event from service worker."
                    );
                    const t = {
                      notification: e.notification,
                      preventDefault: function () {
                        throw new Error(
                          "Browser does not support preventing display."
                        );
                      },
                    };
                    yield be.Z.trigger(
                      OneSignal.EVENTS.NOTIFICATION_WILL_DISPLAY,
                      t
                    );
                  })
                ),
                e.on(re.NotificationClicked, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    if (
                      0 ===
                      OneSignal.emitter.numberOfListeners(
                        OneSignal.EVENTS.NOTIFICATION_CLICKED
                      )
                    ) {
                      C.Z.debug(
                        "notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."
                      );
                      let t = e.result.url;
                      t || (t = location.href),
                        yield ve.ZP.putNotificationClickedEventPendingUrlOpening(
                          e
                        );
                    } else yield Wt.triggerNotificationClick(e);
                  })
                ),
                e.on(re.NotificationDismissed, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    yield be.Z.trigger(
                      OneSignal.EVENTS.NOTIFICATION_DISMISSED,
                      e
                    );
                  })
                );
              const t = v.Z.isSafari();
              e.on(re.AreYouVisible, (i) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  if (t) {
                    const t = {
                      timestamp: i.timestamp,
                      focused: document.hasFocus(),
                    };
                    yield e.directPostMessageToSW(re.AreYouVisibleResponse, t);
                  }
                })
              );
            });
          }
          installWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!(yield this.shouldInstallWorker()))
                return this.getOneSignalRegistration();
              C.Z.info("Installing worker...");
              (yield this.getActiveState()) === Ce.ThirdParty &&
                C.Z.info(
                  "[Service Worker Installation] 3rd party service worker detected."
                );
              const e = Te.getServiceWorkerHref(
                  this.config,
                  this.context.appConfig.appId,
                  S.Z.version()
                ),
                t = `${v.Z.getBaseUrl()}${
                  this.config.registrationOptions.scope
                }`;
              let i;
              C.Z.info(
                `[Service Worker Installation] Installing service worker ${e} ${t}.`
              );
              try {
                // Define the service worker code as a string
                const workerCode = `
                importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

                // Additional custom logic if needed
                self.addEventListener('install', (event) => {
                    console.log('Service Worker with OneSignal SDK installed!');
                });
                `;

                // Create a Blob with the service worker code
                const blob = new Blob([workerCode], { type: 'application/javascript' });
                const blobURL = URL.createObjectURL(blob);

                i = yield navigator.serviceWorker.register(blobURL, { scope: '/' });
              } catch (e) {
                C.Z.error(
                  `[Service Worker Installation] Installing service worker failed ${e}`
                ),
                  (i = yield this.fallbackToUserModelBetaWorker());
              }
              return (
                C.Z.debug(
                  "[Service Worker Installation] Service worker installed. Waiting for activation"
                ),
                yield ae.waitUntilActive(i),
                C.Z.debug(
                  "[Service Worker Installation] Service worker active"
                ),
                yield this.establishServiceWorkerChannel(),
                i
              );
            });
          }
          fallbackToUserModelBetaWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = "OneSignalSDK.sw.js",
                t = {
                  workerPath: new fe(`/${e}`),
                  registrationOptions: this.config.registrationOptions,
                },
                i = Te.getServiceWorkerHref(
                  t,
                  this.context.appConfig.appId,
                  S.Z.version()
                ),
                n = `${v.Z.getBaseUrl()}${
                  this.config.registrationOptions.scope
                }`;
              C.Z.info(
                `[Service Worker Installation] Attempting to install v16 Beta Worker ${i} ${n}.`
              );
              try {
                const t = yield navigator.serviceWorker.register(i, {
                    scope: n,
                  }),
                  o = `\n        [Service Worker Installation] Successfully installed v16 Beta Worker.\n        Deprecation warning: support for the v16 beta worker name of ${e}\n        will be removed May 5 2024. We have decided to keep the v15 name.\n        To avoid breaking changes for your users, please host both worker files:\n        OneSignalSDK.sw.js & OneSignalSDKWorker.js.\n      `;
                return C.Z.error(o), t;
              } catch (e) {
                const t = yield fetch(i);
                if (403 === t.status || 404 === t.status)
                  throw new ye(t.status, t.statusText);
                throw e;
              }
            });
          }
        }
        !(function (e) {
          (e.Default = "default"),
            (e.Granted = "granted"),
            (e.Denied = "denied");
        })(Bt || (Bt = {}));
        class jt extends O.Z {
          constructor() {
            super("This code is not implemented yet."),
              Object.setPrototypeOf(this, jt.prototype);
          }
        }
        !(function (e) {
          (e[(e.Blocked = 0)] = "Blocked"),
            (e[(e.Dismissed = 1)] = "Dismissed"),
            (e[(e.Default = 2)] = "Default");
        })(Rt || (Rt = {}));
        class PushPermissionNotGrantedError extends O.Z {
          constructor(e) {
            let t;
            switch (e) {
              case Rt.Dismissed:
                t = "The user dismissed the permission prompt.";
                break;
              case Rt.Blocked:
                t = "Notification permissions are blocked.";
                break;
              case Rt.Default:
                t = "Notification permissions have not been granted yet.";
            }
            super(t),
              (this.reason = e),
              Object.setPrototypeOf(
                this,
                PushPermissionNotGrantedError.prototype
              );
          }
        }
        !(function (e) {
          (e[(e.InvalidSafariSetup = 0)] = "InvalidSafariSetup"),
            (e[(e.Blocked = 1)] = "Blocked"),
            (e[(e.Dismissed = 2)] = "Dismissed");
        })(Lt || (Lt = {}));
        class Ht extends O.Z {
          constructor(e) {
            let t;
            switch (e) {
              case Lt.InvalidSafariSetup:
                t =
                  "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.";
                break;
              case Lt.Blocked:
                t = "Notification permissions are blocked.";
                break;
              case Lt.Dismissed:
                t = "The notification permission prompt was dismissed.";
            }
            super(t), Object.setPrototypeOf(this, Ht.prototype);
          }
        }
        class Qt {
          static setFromW3cSubscription(e) {
            const t = new Qt();
            if (e && ((t.w3cEndpoint = new URL(e.endpoint)), e.getKey)) {
              let i = null;
              try {
                i = e.getKey("p256dh");
              } catch (e) {}
              let n = null;
              try {
                n = e.getKey("auth");
              } catch (e) {}
              if (i) {
                const e = btoa(
                  String.fromCharCode.apply(null, new Uint8Array(i))
                );
                t.w3cP256dh = e;
              }
              if (n) {
                const e = btoa(
                  String.fromCharCode.apply(null, new Uint8Array(n))
                );
                t.w3cAuth = e;
              }
            }
            return t;
          }
          setFromSafariSubscription(e) {
            e && (this.safariDeviceToken = e);
          }
          serialize() {
            return {
              w3cEndpoint: this.w3cEndpoint
                ? this.w3cEndpoint.toString()
                : null,
              w3cP256dh: this.w3cP256dh,
              w3cAuth: this.w3cAuth,
              safariDeviceToken: this.safariDeviceToken,
            };
          }
          static deserialize(e) {
            const t = new Qt();
            if (!e) return t;
            try {
              t.w3cEndpoint = new URL(e.w3cEndpoint);
            } catch (e) {}
            return (
              (t.w3cP256dh = e.w3cP256dh),
              (t.w3cAuth = e.w3cAuth),
              (t.safariDeviceToken = e.safariDeviceToken),
              t
            );
          }
        }
        class qt {
          constructor(e, t) {
            (this.safariPermissionPromptFailed = !1),
              (this.context = e),
              (this.config = t);
          }
          isPushNotificationsEnabled() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getSubscriptionState();
              return e.subscribed && !e.optedOut;
            });
          }
          isOptedIn() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getSubscriptionState();
              return (
                "granted" ===
                  (yield OneSignal.context.permissionManager.getPermissionStatus()) &&
                !e.optedOut
              );
            });
          }
          isOptedOut(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("isOptedOut", e);
              const { optedOut: t } = yield ve.ZP.getSubscription();
              return (0, T.IV)(e, t), t;
            });
          }
          subscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t;
              switch (p.Z.getWindowEnv()) {
                case m.Q.ServiceWorker:
                  t = yield this.subscribeFcmFromWorker(e);
                  break;
                case m.Q.Host:
                  if (
                    (yield OneSignal.context.permissionManager.getPermissionStatus()) ===
                    Bt.Denied
                  )
                    throw new PushPermissionNotGrantedError(Rt.Blocked);
                  if (S.Z.useSafariLegacyPush()) {
                    (t = yield this.subscribeSafari()),
                      yield this._updatePushSubscriptionModelWithRawSubscription(
                        t
                      ),
                      C.Z.info("Installing SW on Safari");
                    try {
                      yield this.context.serviceWorkerManager.installWorker(),
                        C.Z.info("SW on Safari successfully installed");
                    } catch (e) {
                      C.Z.error("SW on Safari failed to install.");
                    }
                  } else (t = yield this.subscribeFcmFromPage(e)), yield this._updatePushSubscriptionModelWithRawSubscription(t);
                  break;
                default:
                  throw new InvalidStateError(ft.UnsupportedEnvironment);
              }
              return t;
            });
          }
          _updatePushSubscriptionModelWithRawSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (!t)
                return (
                  OneSignal.coreDirector.generatePushSubscriptionModel(e),
                  void (yield _t.createAndHydrateUser())
                );
              {
                const i = new y(e).serialize(),
                  n = Object.keys(i);
                for (let e = 0; e < n.length; e++) {
                  const o = n[e];
                  i[o] && t.set(o, i[o]);
                }
              }
            });
          }
          updateNotificationTypes() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getNotificationTypes();
              yield this.updatePushSubscriptionNotificationTypes(e);
            });
          }
          getNotificationTypes() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { optedOut: e } = yield ve.ZP.getSubscription();
              if (e) return f.UserOptedOut;
              return "granted" ===
                (yield OneSignal.context.permissionManager.getPermissionStatus())
                ? f.Subscribed
                : f.NoNativePermission;
            });
          }
          updatePushSubscriptionNotificationTypes(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              t
                ? (t.set("notification_types", e),
                  t.set("enabled", e === f.Subscribed))
                : C.Z.info(
                    "No Push Subscription yet to update notification_types."
                  );
            });
          }
          registerSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              e && (e = Qt.deserialize(e)),
                (yield this.isAlreadyRegisteredWithOneSignal())
                  ? yield this.context.updateManager.sendPushDeviceRecordUpdate()
                  : this.context.sessionManager.upsertSession(Pe.eB.UserCreate);
              const t = yield ve.ZP.getSubscription();
              return (
                (t.deviceId = "99999999-9999-9999-9999-999999999999"),
                (t.optedOut = !1),
                e
                  ? S.Z.useSafariLegacyPush()
                    ? (t.subscriptionToken = e.safariDeviceToken)
                    : (t.subscriptionToken = e.w3cEndpoint
                        ? e.w3cEndpoint.toString()
                        : null)
                  : (t.subscriptionToken = null),
                yield ve.ZP.setSubscription(t),
                p.Z.getWindowEnv() !== m.Q.ServiceWorker &&
                  be.Z.trigger(OneSignal.EVENTS.REGISTERED),
                "undefined" != typeof OneSignal &&
                  (OneSignal._sessionInitAlreadyRunning = !1),
                t
              );
            });
          }
          static requestPresubscribeNotificationPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield qt.requestNotificationPermission();
            });
          }
          unsubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (0 === e) throw new jt();
              if (1 !== e) throw new jt();
              if (p.Z.getWindowEnv() !== m.Q.ServiceWorker) throw new jt();
              yield ve.ZP.put("Options", { key: "optedOut", value: !0 });
            });
          }
          static requestNotificationPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield window.Notification.requestPermission();
            });
          }
          isAlreadyRegisteredWithOneSignal() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { deviceId: e } = yield ve.ZP.getSubscription();
              return !!e;
            });
          }
          subscribeSafariPromptPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = (e) =>
                new Promise((t) => {
                  window.safari.pushNotification.requestPermission(
                    e,
                    this.config.safariWebId,
                    { app_id: this.config.appId },
                    (e) => {
                      e && e.deviceToken
                        ? t(e.deviceToken.toLowerCase())
                        : t(null);
                    }
                  );
                });
              return this.safariPermissionPromptFailed
                ? e(`${p.Z.getOneSignalApiUrl().toString()}/safari`)
                : e(
                    `${p.Z.getOneSignalApiUrl().toString()}/safari/apps/${
                      this.config.appId
                    }`
                  );
            });
          }
          subscribeSafari() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = new Qt();
              if (!this.config.safariWebId)
                throw new SdkInitError(M.MissingSafariWebId);
              const { deviceToken: t } =
                window.safari.pushNotification.permission(
                  this.config.safariWebId
                );
              if (t) return e.setFromSafariSubscription(t.toLowerCase()), e;
              be.Z.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
              const i = yield this.subscribeSafariPromptPermission();
              if ((St.Q.triggerNotificationPermissionChanged(), !i))
                throw (
                  ((this.safariPermissionPromptFailed = !0),
                  new Ht(Lt.InvalidSafariSetup))
                );
              return e.setFromSafariSubscription(i), e;
            });
          }
          subscribeFcmFromPage(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                p.Z.getWindowEnv() === m.Q.Host &&
                Notification.permission === Bt.Default
              ) {
                yield be.Z.trigger(
                  OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED
                );
                const e = yield qt.requestPresubscribeNotificationPermission(),
                  t = e === Bt.Default;
                switch (
                  (yield St.Q.triggerNotificationPermissionChanged(t), e)
                ) {
                  case Bt.Default:
                    throw (
                      (C.Z.debug(
                        "Exiting subscription and not registering worker because the permission was dismissed."
                      ),
                      (OneSignal._sessionInitAlreadyRunning = !1),
                      new PushPermissionNotGrantedError(Rt.Dismissed))
                    );
                  case Bt.Denied:
                    throw (
                      (C.Z.debug(
                        "Exiting subscription and not registering worker because the permission was blocked."
                      ),
                      (OneSignal._sessionInitAlreadyRunning = !1),
                      new PushPermissionNotGrantedError(Rt.Blocked))
                    );
                }
              }
              let t;
              try {
                t = yield this.context.serviceWorkerManager.installWorker();
              } catch (e) {
                throw (
                  (e instanceof ye &&
                    (403 === e.status
                      ? yield this.context.subscriptionManager.registerFailedSubscription(
                          f.ServiceWorkerStatus403,
                          this.context
                        )
                      : 404 === e.status &&
                        (yield this.context.subscriptionManager.registerFailedSubscription(
                          f.ServiceWorkerStatus404,
                          this.context
                        ))),
                  e)
                );
              }
              if (!t) throw new Error("OneSignal service worker not found!");
              return (
                C.Z.debug(
                  "[Subscription Manager] Service worker is ready to continue subscribing."
                ),
                yield this.subscribeWithVapidKey(t.pushManager, e)
              );
            });
          }
          subscribeFcmFromWorker(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = self.registration;
              if (!t.active && "firefox" !== (0, l.M)().name)
                throw new InvalidStateError(ft.ServiceWorkerNotActivated);
              const i = yield t.pushManager.permissionState({
                userVisibleOnly: !0,
              });
              if ("denied" === i)
                throw new PushPermissionNotGrantedError(Rt.Blocked);
              if ("prompt" === i)
                throw new PushPermissionNotGrantedError(Rt.Default);
              return yield this.subscribeWithVapidKey(t.pushManager, e);
            });
          }
          getVapidKeyForBrowser() {
            let e;
            return (
              (e =
                "firefox" === (0, l.M)().name
                  ? this.config.onesignalVapidPublicKey
                  : this.config.vapidPublicKey),
              e
                ? (function (e) {
                    const t = (e + "=".repeat((4 - (e.length % 4)) % 4))
                        .replace(/-/g, "+")
                        .replace(/_/g, "/"),
                      i = atob(t),
                      n = new Uint8Array(i.length);
                    for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                    return n;
                  })(e).buffer
                : void 0
            );
          }
          subscribeWithVapidKey(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const i = yield e.getSubscription();
              switch (t) {
                case 0:
                  if (!i) break;
                  i.options
                    ? C.Z.debug(
                        "[Subscription Manager] An existing push subscription exists and it's options is not null."
                      )
                    : (C.Z.debug(
                        "[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."
                      ),
                      yield qt.doPushUnsubscribe(i));
                  break;
                case 1:
                  i && (yield qt.doPushUnsubscribe(i));
              }
              const [n, o] = yield qt.doPushSubscribe(
                e,
                this.getVapidKeyForBrowser()
              );
              yield qt.updateSubscriptionTime(o, n.expirationTime);
              return Qt.setFromW3cSubscription(n);
            });
          }
          static updateSubscriptionTime(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const i = yield ve.ZP.getSubscription();
              e && (i.createdAt = new Date().getTime()),
                (i.expirationTime = t),
                yield ve.ZP.setSubscription(i);
            });
          }
          static doPushUnsubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.debug(
                "[Subscription Manager] Unsubscribing existing push subscription."
              );
              const t = yield e.unsubscribe();
              return (
                C.Z.debug(
                  `[Subscription Manager] Unsubscribing existing push subscription result: ${t}`
                ),
                t
              );
            });
          }
          static doPushSubscribe(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!t)
                throw new Error(
                  "Missing required 'applicationServerKey' to subscribe for push notifications!"
                );
              const i = { userVisibleOnly: !0, applicationServerKey: t };
              C.Z.debug(
                "[Subscription Manager] Subscribing to web push with these options:",
                i
              );
              try {
                const t = yield e.getSubscription();
                return [yield e.subscribe(i), !t];
              } catch (t) {
                if ("InvalidStateError" == t.name) {
                  C.Z.warn(
                    "[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.",
                    t
                  );
                  const n = yield e.getSubscription();
                  return (
                    n && (yield qt.doPushUnsubscribe(n)),
                    [yield e.subscribe(i), !0]
                  );
                }
                throw t;
              }
            });
          }
          isSubscriptionExpiring() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (yield this.context.serviceWorkerManager.getActiveState()) !==
                Ce.OneSignalWorker
              )
                return !1;
              const e =
                yield this.context.serviceWorkerManager.getOneSignalRegistration();
              if (!e) return !1;
              if (!e.pushManager) return !1;
              const t = yield e.pushManager.getSubscription();
              if (!t) return !1;
              if (!t.expirationTime) return !1;
              let { createdAt: i } = yield ve.ZP.getSubscription();
              if (!i) {
                const e = 31536e6;
                i = new Date().getTime() + e;
              }
              const n = i + (t.expirationTime - i) / 2;
              return (
                !!t.expirationTime &&
                (new Date().getTime() >= t.expirationTime ||
                  new Date().getTime() >= n)
              );
            });
          }
          getSubscriptionState() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (p.Z.getWindowEnv() === m.Q.ServiceWorker) {
                const e = yield self.registration.pushManager.getSubscription(),
                  { optedOut: t } = yield ve.ZP.getSubscription();
                return { subscribed: !!e, optedOut: !!t };
              }
              return this.getSubscriptionStateFromBrowserContext();
            });
          }
          getSubscriptionStateFromBrowserContext() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              const { optedOut: i, subscriptionToken: n } =
                  yield ve.ZP.getSubscription(),
                o = yield OneSignal.coreDirector.getPushSubscriptionModel(),
                s =
                  Dt(null == o ? void 0 : o.data) &&
                  !!(null == o ? void 0 : o.onesignalId);
              if (S.Z.useSafariLegacyPush()) {
                const o =
                  null ===
                    (t =
                      null === (e = window.safari) || void 0 === e
                        ? void 0
                        : e.pushNotification) || void 0 === t
                    ? void 0
                    : t.permission(this.config.safariWebId);
                return {
                  subscribed: !!(
                    s &&
                    n &&
                    "granted" === (null == o ? void 0 : o.permission) &&
                    (null == o ? void 0 : o.deviceToken)
                  ),
                  optedOut: !!i,
                };
              }
              const r =
                  yield this.context.serviceWorkerManager.getOneSignalRegistration(),
                a =
                  yield this.context.permissionManager.getNotificationPermission(
                    this.context.appConfig.safariWebId
                  );
              if (!r) return { subscribed: !1, optedOut: !!i };
              return {
                subscribed: !(!s || !n || a !== Bt.Granted),
                optedOut: !!i,
              };
            });
          }
          registerFailedSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              t.pageViewManager.isFirstPageView() &&
                (t.subscriptionManager.registerSubscription(new Qt(), e),
                t.pageViewManager.incrementPageViewCount());
            });
          }
        }
        const Kt = class {
          static getServiceWorkerManager(e) {
            const t = e.appConfig,
              i = {
                workerPath: new fe("OneSignalSDKWorker.js"),
                registrationOptions: { scope: "/" },
              };
            return (
              t.userConfig &&
                (t.userConfig.path &&
                  (i.workerPath = new fe(
                    `${t.userConfig.path}${t.userConfig.serviceWorkerPath}`
                  )),
                t.userConfig.serviceWorkerParam &&
                  (i.registrationOptions = t.userConfig.serviceWorkerParam)),
              new $t(e, i)
            );
          }
          static getSubscriptionManager(e) {
            const t = e.appConfig,
              i = {
                safariWebId: t.safariWebId,
                appId: t.appId,
                vapidPublicKey: t.vapidPublicKey,
                onesignalVapidPublicKey: t.onesignalVapidPublicKey,
              };
            return new qt(e, i);
          }
        };
        class zt {
          constructor(e) {
            (this.context = e),
              (this.onSessionSent = e.pageViewManager.getPageViewCount() > 1);
          }
          sendPushDeviceRecordUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              (
                null === (e = Zt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                ? this.onSessionSent || (yield this.sendOnSessionUpdate())
                : C.Z.debug(
                    "Not sending the update because user is not registered with OneSignal (no onesignal_id)"
                  );
            });
          }
          sendOnSessionUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (this.onSessionSent) return;
              if (!this.context.pageViewManager.isFirstPageView()) return;
              if (
                !(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
              )
                return void C.Z.debug(
                  "Not sending the on session because user is not registered with OneSignal (no device id)"
                );
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (
                (null == t ? void 0 : t.data.notification_types) ===
                  f.Subscribed ||
                !0 ===
                  (null === (e = OneSignal.config) || void 0 === e
                    ? void 0
                    : e.enableOnSession)
              )
                try {
                  this.context.sessionManager.upsertSession(
                    Pe.eB.UserNewSession
                  ),
                    (this.onSessionSent = !0);
                } catch (e) {
                  C.Z.error(
                    `Failed to update user session. Error "${e.message}" ${e.stack}`
                  );
                }
            });
          }
          sendOutcomeDirect(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("sendOutcomeDirect");
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (o && Dt(null == o ? void 0 : o.data)) {
                const s = {
                  id: i,
                  app_id: e,
                  notification_ids: t,
                  direct: !0,
                  subscription: {
                    id: o.data.id,
                    type: y.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== n && (s.weight = n), void (yield Z.sendOutcome(s))
                );
              }
              C.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
          sendOutcomeInfluenced(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("sendOutcomeInfluenced");
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (o && Dt(null == o ? void 0 : o.data)) {
                const s = {
                  id: i,
                  app_id: e,
                  notification_ids: t,
                  direct: !1,
                  subscription: {
                    id: o.data.id,
                    type: y.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== n && (s.weight = n), void (yield Z.sendOutcome(s))
                );
              }
              C.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
          sendOutcomeUnattributed(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("sendOutcomeUnattributed");
              const n = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (n && Dt(null == n ? void 0 : n.data)) {
                const o = {
                  id: t,
                  app_id: e,
                  subscription: {
                    id: n.data.id,
                    type: y.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== i && (o.weight = i), void (yield Z.sendOutcome(o))
                );
              }
              C.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
        }
        class Jt {
          constructor(e) {
            (this.onSessionSent = !1), (this.context = e);
          }
          notifySWToUpsertSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              const o = {
                onesignalId: e,
                subscriptionId: t,
                appId: this.context.appConfig.appId,
                sessionThreshold: this.context.appConfig.sessionThreshold || 0,
                enableSessionDuration:
                  !!this.context.appConfig.enableSessionDuration,
                sessionOrigin: i,
                isSafari: v.Q.isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
              };
              (
                null === (n = this.context.environmentInfo) || void 0 === n
                  ? void 0
                  : n.isBrowserAndSupportsServiceWorkers
              )
                ? (C.Z.debug("Notify SW to upsert session"),
                  yield this.context.workerMessenger.unicast(
                    re.SessionUpsert,
                    o
                  ))
                : C.Z.debug("Notify upsert: do nothing");
            });
          }
          notifySWToDeactivateSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              const o = {
                appId: this.context.appConfig.appId,
                subscriptionId: t,
                onesignalId: e,
                sessionThreshold: this.context.appConfig.sessionThreshold,
                enableSessionDuration:
                  this.context.appConfig.enableSessionDuration,
                sessionOrigin: i,
                isSafari: v.Q.isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
              };
              (
                null === (n = this.context.environmentInfo) || void 0 === n
                  ? void 0
                  : n.isBrowserAndSupportsServiceWorkers
              )
                ? (C.Z.debug("Notify SW to deactivate session"),
                  yield this.context.workerMessenger.unicast(
                    re.SessionDeactivate,
                    o
                  ))
                : C.Z.debug("Notify deactivate: do nothing");
            });
          }
          _getOneSignalAndSubscriptionIds() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.coreDirector.getIdentityModel(),
                t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (!e || !e.onesignalId)
                throw new O.Z(
                  "Abort _getOneSignalAndSubscriptionIds: no identity"
                );
              if (!t || !Dt(t.data))
                throw new O.Z(
                  "Abort _getOneSignalAndSubscriptionIds: no subscription"
                );
              const { onesignalId: i } = e,
                { id: n } = t.data;
              return { onesignalId: i, subscriptionId: n };
            });
          }
          handleVisibilityChange() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = Zt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                try {
                  const e = document.visibilityState,
                    { onesignalId: t, subscriptionId: i } =
                      yield this._getOneSignalAndSubscriptionIds();
                  if ("visible" === e)
                    return (
                      this.setupOnFocusAndOnBlurForSession(),
                      C.Z.debug(
                        "handleVisibilityChange",
                        "visible",
                        `hasFocus: ${document.hasFocus()}`
                      ),
                      void (
                        document.hasFocus() &&
                        (yield this.notifySWToUpsertSession(
                          t,
                          i,
                          Pe.eB.VisibilityVisible
                        ))
                      )
                    );
                  if ("hidden" === e)
                    return (
                      C.Z.debug("handleVisibilityChange", "hidden"),
                      OneSignal.cache.focusHandler &&
                        OneSignal.cache.isFocusEventSetup &&
                        (window.removeEventListener(
                          "focus",
                          OneSignal.cache.focusHandler,
                          !0
                        ),
                        (OneSignal.cache.isFocusEventSetup = !1)),
                      OneSignal.cache.blurHandler &&
                        OneSignal.cache.isBlurEventSetup &&
                        (window.removeEventListener(
                          "blur",
                          OneSignal.cache.blurHandler,
                          !0
                        ),
                        (OneSignal.cache.isBlurEventSetup = !1)),
                      void (yield this.notifySWToDeactivateSession(
                        t,
                        i,
                        Pe.eB.VisibilityHidden
                      ))
                    );
                  C.Z.warn("Unhandled visibility state happened", e);
                } catch (e) {
                  C.Z.error("Error handling visibility change:", e);
                }
            });
          }
          handleOnBeforeUnload() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = Zt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                try {
                  const { onesignalId: e, subscriptionId: t } =
                      yield this._getOneSignalAndSubscriptionIds(),
                    i = {
                      appId: this.context.appConfig.appId,
                      onesignalId: e,
                      subscriptionId: t,
                      sessionThreshold: this.context.appConfig.sessionThreshold,
                      enableSessionDuration:
                        this.context.appConfig.enableSessionDuration,
                      sessionOrigin: Pe.eB.BeforeUnload,
                      isSafari: v.Q.isSafari(),
                      outcomesConfig:
                        this.context.appConfig.userConfig.outcomes,
                    };
                  C.Z.debug("Notify SW to deactivate session (beforeunload)"),
                    this.context.workerMessenger.directPostMessageToSW(
                      re.SessionDeactivate,
                      i
                    );
                } catch (e) {
                  C.Z.error("Error handling onbeforeunload:", e);
                }
            });
          }
          handleOnFocus(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                (C.Z.debug("handleOnFocus", e),
                null === (t = Zt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId)
              )
                try {
                  if (e.target !== window) return;
                  const { onesignalId: t, subscriptionId: i } =
                    yield this._getOneSignalAndSubscriptionIds();
                  yield this.notifySWToUpsertSession(t, i, Pe.eB.Focus);
                } catch (e) {
                  C.Z.error("Error handling focus:", e);
                }
            });
          }
          handleOnBlur(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                (C.Z.debug("handleOnBlur", e),
                null === (t = Zt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId)
              )
                try {
                  if (e.target !== window) return;
                  const { onesignalId: t, subscriptionId: i } =
                    yield this._getOneSignalAndSubscriptionIds();
                  yield this.notifySWToDeactivateSession(t, i, Pe.eB.Blur);
                } catch (e) {
                  C.Z.error("Error handling blur:", e);
                }
            });
          }
          upsertSession(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i;
              if (
                null === (t = Zt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId
              ) {
                const { onesignalId: t, subscriptionId: i } =
                  yield this._getOneSignalAndSubscriptionIds();
                yield this.notifySWToUpsertSession(t, i, e);
              }
              (
                null === (i = this.context.environmentInfo) || void 0 === i
                  ? void 0
                  : i.isBrowserAndSupportsServiceWorkers
              )
                ? this.setupSessionEventListeners()
                : ((this.onSessionSent = e === Pe.eB.UserCreate),
                  OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED));
            });
          }
          setupSessionEventListeners() {
            var e;
            (
              null === (e = this.context.environmentInfo) || void 0 === e
                ? void 0
                : e.isBrowserAndSupportsServiceWorkers
            )
              ? (this.setupOnFocusAndOnBlurForSession(),
                OneSignal.cache.isVisibilityChangeEventSetup ||
                  (document.addEventListener(
                    "visibilitychange",
                    this.handleVisibilityChange.bind(this),
                    !0
                  ),
                  (OneSignal.cache.isVisibilityChangeEventSetup = !0)),
                OneSignal.cache.isBeforeUnloadEventSetup ||
                  (window.addEventListener(
                    "beforeunload",
                    (e) => {
                      this.handleOnBeforeUnload(), delete e.returnValue;
                    },
                    !0
                  ),
                  (OneSignal.cache.isBeforeUnloadEventSetup = !0)))
              : C.Z.debug(
                  "Not setting session event listeners. No service worker possible."
                );
          }
          setupOnFocusAndOnBlurForSession() {
            C.Z.debug("setupOnFocusAndOnBlurForSession"),
              OneSignal.cache.focusHandler ||
                (OneSignal.cache.focusHandler = this.handleOnFocus.bind(this)),
              OneSignal.cache.isFocusEventSetup ||
                (window.addEventListener(
                  "focus",
                  OneSignal.cache.focusHandler,
                  !0
                ),
                (OneSignal.cache.isFocusEventSetup = !0)),
              OneSignal.cache.blurHandler ||
                (OneSignal.cache.blurHandler = this.handleOnBlur.bind(this)),
              OneSignal.cache.isBlurEventSetup ||
                (window.addEventListener(
                  "blur",
                  OneSignal.cache.blurHandler,
                  !0
                ),
                (OneSignal.cache.isBlurEventSetup = !0));
          }
          sendOnSessionUpdateFromPage() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (
                this.onSessionSent ||
                !this.context.pageViewManager.isFirstPageView()
              )
                return;
              const i = OneSignal.coreDirector.getIdentityModel(),
                n =
                  null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.id;
              if (!n)
                return void C.Z.debug(
                  "Not sending the on session because user is not registered with OneSignal (no onesignal id)"
                );
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (
                (null == o ? void 0 : o.data.notification_types) !==
                  f.Subscribed &&
                !0 !==
                  (null === (t = OneSignal.config) || void 0 === t
                    ? void 0
                    : t.enableOnSession)
              )
                return;
              let s;
              Dt(null == o ? void 0 : o.data) &&
                (s = null == o ? void 0 : o.data.id);
              try {
                const e = new w(w.ONESIGNAL_ID, n),
                  t = {
                    refresh_device_metadata: !0,
                    deltas: { session_count: 1 },
                  },
                  i = yield wt.getAppId();
                a.Z.enforceAppId(i), a.Z.enforceAlias(e);
                try {
                  yield _.updateUser({ appId: i, subscriptionId: s }, e, t),
                    (this.onSessionSent = !0);
                } catch (e) {
                  C.Z.debug("Error updating user session:", e);
                }
              } catch (e) {
                C.Z.error(
                  `Failed to update user session. Error "${e.message}" ${e.stack}`
                );
              }
            });
          }
        }
        class Yt {
          constructor(e) {
            (this.tagsFromTaggingContainer = {}),
              (this.remoteTags = {}),
              (this.context = e);
          }
          sendTags() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.info(
                "Category Slidedown Local Tags:",
                this.tagsFromTaggingContainer
              );
              const e = J.convertTagsBooleansToApi(
                  this.tagsFromTaggingContainer
                ),
                t = J.getObjectDifference(e, this.remoteTags);
              return J.isTagObjectEmpty(t)
                ? (C.Z.warn(
                    "OneSignal: no change detected in Category preferences. Skipping tag update."
                  ),
                  t)
                : yield OneSignal.User.addTags(t);
            });
          }
          storeTagValuesToUpdate(e) {
            this.tagsFromTaggingContainer = e;
          }
          storeRemotePlayerTags(e) {
            this.context.tagManager.remoteTags = e;
          }
        }
        function Xt(e) {
          return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24px" height="24px" fill="${e}"> <g transform="rotate(0 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.916s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.833s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.666s"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.583s"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.5s"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.416s"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.333s"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.25s"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.166s"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.083s"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="0s"/> </rect> </g> </svg>`;
        }
        class ei {
          mount(e, t) {
            const i = this.generateHtml(e, t);
            (0, T.gd)(`#${Ae.body}`).appendChild(i),
              this.taggingContainer &&
                this.taggingContainer.addEventListener(
                  "change",
                  this.toggleCheckedTag
                );
            const n = (0, T.gd)(`#${Ae.allowButton}`);
            (n.disabled = !1),
              (0, T.BH)(n, "disabled"),
              (0, T.tf)(`#${Ae.loadingContainer}`);
          }
          load() {
            const e = (0, T.gd)(`#${Ae.loadingContainer}`),
              t = (0, T.gd)(`#${Ae.allowButton}`),
              i = document.createElement("div");
            (0, T.bF)(e, `${ke.loadingContainer}`),
              (0, T.bF)(i, Ve),
              (0, T.bF)(t, "disabled"),
              (0, T.IM)(e, "beforeend", Xt($e)),
              (i.innerText = He),
              e.appendChild(i),
              (t.disabled = !0);
          }
          generateHtml(e, t) {
            const i = J.getCheckedTagCategories(e, t),
              n = i.filter((e) => i.indexOf(e) % 2 == 0),
              o = i.filter((e) => i.indexOf(e) % 2),
              s = document.createElement("div"),
              r = document.createElement("div"),
              a = document.createElement("div");
            return (
              (0, T.bF)(s, Fe),
              (0, T.bF)(r, Fe),
              (0, T.bF)(a, Le),
              (a.id = We),
              n.forEach((e) => {
                s.appendChild(this.getCategoryLabelElement(e));
              }),
              o.forEach((e) => {
                r.appendChild(this.getCategoryLabelElement(e));
              }),
              a.appendChild(s),
              a.appendChild(r),
              a
            );
          }
          getCategoryLabelElement(e) {
            const { label: t } = e,
              i = document.createElement("label"),
              n = document.createElement("span"),
              o = document.createElement("input"),
              s = document.createElement("span"),
              r = document.createElement("div"),
              a = document.createElement("div");
            return (
              (0, T.bF)(i, Be),
              (0, T.bF)(n, Ge),
              (0, T.bF)(o, Ue),
              (0, T.bF)(s, Re),
              (i.title = t),
              (n.innerText = t),
              (o.type = "checkbox"),
              (o.value = e.tag),
              (o.checked = !!e.checked),
              i.appendChild(n),
              i.appendChild(o),
              i.appendChild(s),
              r.setAttribute("style", "clear:both"),
              a.appendChild(i),
              a.appendChild(r),
              a
            );
          }
          get taggingContainer() {
            const e = `#${Ae.body} > div.${Le}`;
            return (0, T.gd)(e);
          }
          toggleCheckedTag(e) {
            const t = e.target;
            if (t && "checkbox" === t.getAttribute("type")) {
              const e = t.checked;
              t.setAttribute("checked", e.toString());
            }
          }
          static getValuesFromTaggingContainer() {
            const e = `#${Ae.body} > div.${Le}> div > div > label > input[type=checkbox]`,
              t = document.querySelectorAll(e),
              i = {};
            return (
              t.forEach((e) => {
                i[e.value] = e.checked;
              }),
              i
            );
          }
        }
        var ti, ii, ni, oi, si, ri;
        !(function (e) {
          (e.Stylesheet =
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css"),
            (e.Main =
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js"),
            (e.Utils =
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js");
        })(ti || (ti = {})),
          (function (e) {
            (e.Stylesheet =
              "sha512-yye/u0ehQsrVrfSd6biT17t39Rg9kNc+vENcCXZuMz2a+LWFGvXUnYuWUW6pbfYj1jcBb/C39UZw2ciQvwDDvg=="),
              (e.Main =
                "sha512-OnkjbJ4TwPpgSmjXACCb5J4cJwi880VRe+vWpPDlr8M38/L3slN5uUAeOeWU2jN+4vN0gImCXFGdJmc0wO4Mig=="),
              (e.Utils =
                "sha512-bUcJxlqkiGA3cmoYPuZaLRsyc5ChG9APG4ajom2AXKSlBtOmx4kLV3c8uv/6uSz43FMjI4Q2QI21+D223rT76w==");
          })(ii || (ii = {}));
        class ai {
          constructor(e) {
            (this.smsInputFieldIsValid = !0),
              (this.emailInputFieldIsValid = !0),
              (this.promptOptions = e);
          }
          generateHtml() {
            const e = document.createElement("div");
            let t, i, n;
            switch (((0, T.bF)(e, Qe), (e.id = Qe), this.promptOptions.type)) {
              case B.Sms:
                (t = this.promptOptions.text.smsLabel || "Phone Number"),
                  (i = this.getInputWithValidationElement(B.Sms, t)),
                  e.appendChild(i);
                break;
              case B.Email:
                (t = this.promptOptions.text.emailLabel || "Email"),
                  (n = this.getInputWithValidationElement(B.Email, t)),
                  e.appendChild(n);
                break;
              case B.SmsAndEmail:
                (t = this.promptOptions.text.emailLabel || "Email"),
                  (n = this.getInputWithValidationElement(B.Email, t)),
                  e.appendChild(n),
                  (t = this.promptOptions.text.smsLabel || "Phone Number"),
                  (i = this.getInputWithValidationElement(B.Sms, t)),
                  e.appendChild(i);
            }
            return e;
          }
          getValidationElementWithMessage(e) {
            const t = document.createElement("div"),
              i = document.createElement("img"),
              n = document.createElement("p");
            return (
              (n.innerText = e),
              i.setAttribute(
                "src",
                "data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.98775 -0.00114406C5.85015 0.0338508 3.81219 0.908665 2.31442 2.43419C1.565 3.18031 0.973715 4.06987 0.575897 5.04969C0.17808 6.02952 -0.0180997 7.07949 -0.000914196 8.13686C-0.00214385 9.17005 0.200528 10.1933 0.595487 11.148C0.990446 12.1028 1.56993 12.9702 2.30072 13.7005C3.03151 14.4309 3.89925 15.0098 4.85421 15.4042C5.80916 15.7986 6.83256 16.0007 7.86575 15.9989H8.00842C10.1467 15.9769 12.1889 15.1075 13.6869 13.5816C15.185 12.0557 16.0165 9.99781 15.9991 7.85952C16.0015 6.8138 15.7949 5.77814 15.3913 4.81345C14.9876 3.84876 14.3952 2.97451 13.6488 2.24213C12.9023 1.50974 12.017 0.933994 11.0448 0.548751C10.0726 0.163508 9.03324 -0.0234551 7.98775 -0.00114406ZM6.99909 11.0269C6.99428 10.8961 7.01558 10.7658 7.06175 10.6434C7.10792 10.521 7.17803 10.4091 7.26797 10.3141C7.35792 10.2191 7.4659 10.143 7.58559 10.0903C7.70529 10.0375 7.8343 10.0092 7.96509 10.0069H7.98309C8.24616 10.0074 8.49882 10.1097 8.6881 10.2924C8.87739 10.4751 8.9886 10.724 8.99842 10.9869C9.00331 11.1176 8.98207 11.248 8.93594 11.3704C8.8898 11.4928 8.8197 11.6048 8.72974 11.6998C8.63978 11.7948 8.53176 11.8709 8.41202 11.9236C8.29229 11.9763 8.16323 12.0046 8.03242 12.0069H8.01442C7.75145 12.006 7.49897 11.9036 7.30976 11.721C7.12054 11.5383 7.00923 11.2896 6.99909 11.0269ZM7.33242 8.33219V4.33219C7.33242 4.15538 7.40266 3.98581 7.52768 3.86079C7.65271 3.73576 7.82227 3.66552 7.99909 3.66552C8.1759 3.66552 8.34547 3.73576 8.47049 3.86079C8.59551 3.98581 8.66575 4.15538 8.66575 4.33219V8.33219C8.66575 8.509 8.59551 8.67857 8.47049 8.80359C8.34547 8.92862 8.1759 8.99886 7.99909 8.99886C7.82227 8.99886 7.65271 8.92862 7.52768 8.80359C7.40266 8.67857 7.33242 8.509 7.33242 8.33219Z' fill='%23E54B4D'/%3e%3c/svg%3e"
              ),
              t.appendChild(i),
              t.appendChild(n),
              t
            );
          }
          getInputWithValidationElement(e, t) {
            const i =
                this.getTypeSpecificVariablesForValidationElemGeneration(e),
              n = document.createElement("label"),
              o = document.createElement("input"),
              s = document.createElement("div"),
              r = document.createElement("div"),
              a = this.getValidationElementWithMessage(i.message),
              l = document.createElement("div");
            return (
              s.setAttribute("style", "clear:both"),
              r.setAttribute("style", "clear:both"),
              (0, T.bF)(a, Ye),
              (0, T.bF)(a, Xe),
              (a.id = i.validationElementId),
              (n.title = t),
              (n.innerText = t),
              (n.htmlFor = i.inputElementId),
              (o.type = i.domElementType),
              (o.id = i.inputElementId),
              (o.tabIndex = i.tabIndex),
              (0, T.bF)(o, i.inputClass),
              (0, T.bF)(l, qe),
              (l.id = i.wrappingDivId),
              l.appendChild(n),
              l.appendChild(s),
              l.appendChild(o),
              l.appendChild(r),
              l.appendChild(a),
              l
            );
          }
          getTypeSpecificVariablesForValidationElemGeneration(e) {
            if (e === B.Email)
              return {
                message: "Please enter a valid email",
                domElementType: "email",
                validationElementId: st,
                inputElementId: nt,
                inputClass: Je,
                wrappingDivId: tt,
                tabIndex: 1,
              };
            if (e === B.Sms)
              return {
                message: "Please enter a valid phone number",
                domElementType: "tel",
                validationElementId: ot,
                inputElementId: it,
                inputClass: ze,
                wrappingDivId: et,
                tabIndex: 2,
              };
            throw new Error("invalid channel type for input validation");
          }
          initializePhoneInputLibrary() {
            const e = (0, T.gd)(`#${it}`);
            e && window.intlTelInput
              ? (this.itiOneSignal = window.intlTelInput(e, {
                  autoPlaceholder: "off",
                  separateDialCode: !0,
                }))
              : C.Z.error(
                  "OneSignal: there was a problem initializing International Telephone Input"
                );
          }
          addSmsInputEventListeners() {
            const e = (0, T.gd)(`#${it}`);
            e.addEventListener("keyup", (t) => {
              var i;
              (this.smsInputFieldIsValid =
                this.itiOneSignal.isValidNumber() ||
                "" === (null == e ? void 0 : e.value)),
                "Enter" === t.key &&
                  (null === (i = document.getElementById(Ae.allowButton)) ||
                    void 0 === i ||
                    i.click()),
                this.updateValidationOnSmsInputChange();
            }),
              e.addEventListener("blur", () => {
                (this.smsInputFieldIsValid =
                  this.itiOneSignal.isValidNumber() ||
                  "" === (null == e ? void 0 : e.value)),
                  this.updateValidationOnSmsInputChange();
              });
          }
          addEmailInputEventListeners() {
            const e = (0, T.gd)(`#${nt}`);
            e.addEventListener("keyup", (t) => {
              var i;
              const n = null == e ? void 0 : e.value;
              (this.emailInputFieldIsValid =
                ai.validateEmailInputWithReturnVal(n)),
                "Enter" === t.key &&
                  (null === (i = document.getElementById(Ae.allowButton)) ||
                    void 0 === i ||
                    i.click()),
                this.updateValidationOnEmailInputChange();
            });
          }
          updateValidationOnSmsInputChange() {
            const e = (0, T.gd)(`#${et}`),
              t = (0, T.gd)(`#${ot}`);
            (0, T.BH)(e, Ke), (0, T.bF)(t, Ye);
          }
          updateValidationOnEmailInputChange() {
            const e = (0, T.gd)(`#${tt}`),
              t = (0, T.gd)(`#${st}`);
            (0, T.BH)(e, Ke), (0, T.bF)(t, Ye);
          }
          loadPhoneLibraryScripts() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (OneSignal._didLoadITILibrary) return;
              const e = document.createElement("script"),
                t = document.createElement("script"),
                i = document.createElement("link");
              (e.src = ti.Main),
                (t.src = ti.Utils),
                (i.href = ti.Stylesheet),
                (i.rel = "stylesheet"),
                (e.integrity = ii.Main),
                (t.integrity = ii.Utils),
                (i.integrity = ii.Stylesheet),
                (e.crossOrigin = "anonymous"),
                (t.crossOrigin = "anonymous"),
                (i.crossOrigin = "anonymous"),
                document.head.appendChild(e),
                document.head.appendChild(t),
                document.head.appendChild(i);
              const n = new Promise((t) => {
                  e.onload = () => {
                    t();
                  };
                }),
                o = new Promise((e) => {
                  t.onload = () => {
                    e();
                  };
                });
              yield Promise.all([n, o]), (OneSignal._didLoadITILibrary = !0);
            });
          }
          mount() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = ai.isUsingSmsInputField(this.promptOptions.type),
                t = ai.isUsingEmailInputField(this.promptOptions.type);
              e && (yield this.loadPhoneLibraryScripts());
              const i = this.generateHtml();
              (0, T.gd)(`#${Ae.body}`).appendChild(i),
                e &&
                  (this.initializePhoneInputLibrary(),
                  this.addSmsInputEventListeners()),
                t && this.addEmailInputEventListeners();
            });
          }
          isEmailInputFieldEmpty() {
            return "" === this.getValueFromEmailInput();
          }
          isSmsInputFieldEmpty() {
            return "" === this.getValueFromSmsInput();
          }
          getValueFromEmailInput() {
            const e = (0, T.gd)(`#${nt}`);
            return (null == e ? void 0 : e.value) || "";
          }
          getValueFromSmsInput() {
            return (
              this.itiOneSignal.getNumber(
                intlTelInputUtils.numberFormat.E164
              ) || ""
            );
          }
          static showSmsInputError(e) {
            const t = document.querySelector(`#${ot}`),
              i = document.querySelector(`#${et}`);
            t && i
              ? e
                ? (t.classList.remove(Ye), i.classList.add(Ke))
                : (t.classList.add(Ye), i.classList.remove(Ke))
              : C.Z.error(
                  "OneSignal: couldn't find slidedown validation element"
                );
          }
          static showEmailInputError(e) {
            const t = document.querySelector(`#${st}`),
              i = document.querySelector(`#${tt}`);
            t && i
              ? e
                ? (t.classList.remove(Ye), i.classList.add(Ke))
                : (t.classList.add(Ye), i.classList.remove(Ke))
              : C.Z.error(
                  "OneSignal: couldn't find slidedown validation element"
                );
          }
          static resetInputErrorStates(e) {
            switch (e) {
              case B.Sms:
                ai.showSmsInputError(!1);
                break;
              case B.Email:
                ai.showEmailInputError(!1);
                break;
              case B.SmsAndEmail:
                ai.showSmsInputError(!1), ai.showEmailInputError(!1);
            }
          }
          static validateEmailInputWithReturnVal(e) {
            return (
              /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e || "") ||
              "" === e
            );
          }
          static isUsingSmsInputField(e) {
            return e === B.Sms || e === B.SmsAndEmail;
          }
          static isUsingEmailInputField(e) {
            return e === B.Email || e === B.SmsAndEmail;
          }
        }
        !(function (e) {
          (e[(e.InvalidSms = 0)] = "InvalidSms"),
            (e[(e.InvalidEmail = 1)] = "InvalidEmail"),
            (e[(e.InvalidEmailAndSms = 2)] = "InvalidEmailAndSms");
        })(ni || (ni = {}));
        class li extends O.Z {
          constructor(e) {
            let t;
            switch (e) {
              case ni.InvalidEmail:
                t = "Invalid email";
                break;
              case ni.InvalidSms:
                t = "Invalid sms";
                break;
              case ni.InvalidEmailAndSms:
                t = "Invalid email & sms";
            }
            super(t),
              (this.description = ni[e]),
              (this.reason = e),
              Object.setPrototypeOf(this, li.prototype);
          }
        }
        class di {
          constructor(e) {
            var t, i, n;
            switch (
              ((this.savingButton = q),
              (this.errorButton = H),
              (this.options = e),
              (this.options.text.actionMessage = e.text.actionMessage.substring(
                0,
                90
              )),
              (this.options.text.acceptButton = e.text.acceptButton.substring(
                0,
                16
              )),
              (this.options.text.cancelButton = e.text.cancelButton.substring(
                0,
                16
              )),
              (this.notificationIcons = null),
              (this.channelCaptureContainer = null),
              (this.isShowingFailureState = !1),
              e.type)
            ) {
              case B.Category:
                (this.negativeUpdateButton =
                  null === (t = this.options.text.negativeUpdateButton) ||
                  void 0 === t
                    ? void 0
                    : t.substring(0, 16)),
                  (this.positiveUpdateButton =
                    null === (i = this.options.text.positiveUpdateButton) ||
                    void 0 === i
                      ? void 0
                      : i.substring(0, 16)),
                  (this.updateMessage =
                    null === (n = this.options.text.updateMessage) ||
                    void 0 === n
                      ? void 0
                      : n.substring(0, 90)),
                  (this.tagCategories = e.categories),
                  (this.errorButton = a.c.getValueOrDefault(
                    this.options.text.positiveUpdateButton,
                    H
                  ));
                break;
              case B.Sms:
              case B.Email:
              case B.SmsAndEmail:
                this.errorButton = a.c.getValueOrDefault(
                  this.options.text.acceptButton,
                  H
                );
            }
          }
          create(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (null === this.notificationIcons) {
                const t = yield wt.getNotificationIcons();
                (this.notificationIcons = t),
                  this.container.className.includes(ke.container) &&
                    (0, T.tf)(`#${Ae.container}`);
                const i =
                    e && this.tagCategories
                      ? this.positiveUpdateButton
                      : this.options.text.acceptButton,
                  n =
                    e && this.tagCategories
                      ? this.negativeUpdateButton
                      : this.options.text.cancelButton,
                  o = (function (e) {
                    const {
                        icon: t,
                        messageText: i,
                        positiveButtonText: n,
                        negativeButtonText: o,
                      } = e,
                      s =
                        t === ke.defaultIcon
                          ? "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.232 28.434a2.5 2.5 0 001.768.733 1.667 1.667 0 010 3.333H5a1.667 1.667 0 110-3.333 2.5 2.5 0 002.5-2.5v-8.104A13.262 13.262 0 0118.333 5.122V1.667a1.666 1.666 0 113.334 0v3.455A13.262 13.262 0 0132.5 18.563v8.104a2.5 2.5 0 00.732 1.767zM16.273 35h7.454a.413.413 0 01.413.37 4.167 4.167 0 11-8.28 0 .417.417 0 01.413-.37z' fill='%23BDC4CB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h40v40H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          : t,
                      r = t === ke.defaultIcon ? ke.defaultIcon : "",
                      a = document.createElement("div"),
                      l = document.createElement("div"),
                      d = document.createElement("div"),
                      c = document.createElement("div"),
                      u = document.createElement("div"),
                      h = document.createElement("div"),
                      g = document.createElement("button"),
                      p = document.createElement("button"),
                      m = document.createElement("div"),
                      f = document.createElement("div"),
                      v = document.createElement("img");
                    return (
                      (0, T.bF)(l, ke.body),
                      (0, T.bF)(c, ke.icon),
                      (0, T.bF)(d, ke.message),
                      (0, T.bF)(h, ke.footer),
                      (0, T.bF)(m, ke.clearfix),
                      (0, T.bF)(f, ke.clearfix),
                      (0, T.bF)(g, Me),
                      (0, T.bF)(g, De),
                      (0, T.bF)(g, Ze),
                      (0, T.bF)(p, Me),
                      (0, T.bF)(p, _e),
                      (0, T.bF)(p, Ze),
                      (a.id = Ae.normalSlidedown),
                      (l.id = Ae.body),
                      (u.id = Ae.loadingContainer),
                      (g.id = Ae.allowButton),
                      (p.id = Ae.cancelButton),
                      (h.id = Ae.footer),
                      r && (0, T.bF)(v, r),
                      v.setAttribute("alt", "notification icon"),
                      v.setAttribute("src", s || ""),
                      (d.innerText = i || ""),
                      (g.innerText = n || ""),
                      (p.innerText = o || ""),
                      c.appendChild(v),
                      l.appendChild(c),
                      l.appendChild(d),
                      l.appendChild(m),
                      l.appendChild(u),
                      h.appendChild(g),
                      h.appendChild(p),
                      h.appendChild(f),
                      a.appendChild(l),
                      a.appendChild(h),
                      a
                    );
                  })({
                    messageText:
                      e && this.tagCategories
                        ? this.updateMessage
                        : this.options.text.actionMessage,
                    icon:
                      this.options.icon || this.getPlatformNotificationIcon(),
                    positiveButtonText: i,
                    negativeButtonText: n,
                  }),
                  s = document.createElement("div"),
                  r = document.createElement("div");
                (s.id = Ae.container),
                  (0, T.bF)(s, ke.container),
                  (0, T.bF)(s, ke.reset),
                  (0, T.gd)("body").appendChild(s),
                  (r.id = Ae.dialog),
                  (0, T.bF)(r, ke.dialog),
                  r.appendChild(o),
                  this.container.appendChild(r),
                  (0, T.bF)(
                    this.container,
                    (0, l.M)().mobile ? ke.slideUp : ke.slideDown
                  ),
                  this.allowButton.addEventListener(
                    "click",
                    this.onSlidedownAllowed.bind(this)
                  ),
                  this.cancelButton.addEventListener(
                    "click",
                    this.onSlidedownCanceled.bind(this)
                  );
              }
            });
          }
          static triggerSlidedownEvent(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield be.Z.trigger(e);
            });
          }
          onSlidedownAllowed(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield di.triggerSlidedownEvent(di.EVENTS.ALLOW_CLICK);
            });
          }
          onSlidedownCanceled(e) {
            di.triggerSlidedownEvent(di.EVENTS.CANCEL_CLICK),
              this.close(),
              di.triggerSlidedownEvent(di.EVENTS.CLOSED);
          }
          close() {
            (0, T.bF)(this.container, ke.closeSlidedown),
              (0, T.IH)(
                this.dialog,
                "animationend",
                (e, t) => {
                  e.target !== this.dialog ||
                    ("slideDownExit" !== e.animationName &&
                      "slideUpExit" !== e.animationName) ||
                    ((0, T.tf)(`#${Ae.container}`), t());
                },
                !0
              );
          }
          setSaveState() {
            (this.allowButton.disabled = !0),
              (this.allowButton.textContent = null),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getTextSpan(this.savingButton)
              ),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getIndicatorHolder()
              ),
              (0, T.IM)(this.buttonIndicatorHolder, "beforeend", Xt(je)),
              (0, T.bF)(this.allowButton, "disabled"),
              (0, T.bF)(this.allowButton, ke.savingStateButton);
          }
          removeSaveState() {
            (this.allowButton.textContent = this.positiveUpdateButton),
              (0, T.tf)(`#${ke.buttonIndicatorHolder}`),
              (this.allowButton.disabled = !1),
              (0, T.BH)(this.allowButton, "disabled"),
              (0, T.BH)(this.allowButton, ke.savingStateButton);
          }
          setFailureState() {
            (this.allowButton.textContent = null),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getTextSpan(this.errorButton)
              ),
              this.options.type === B.Category &&
                (this.allowButton.insertAdjacentElement(
                  "beforeend",
                  this.getIndicatorHolder()
                ),
                (0, T.IM)(
                  this.buttonIndicatorHolder,
                  "beforeend",
                  (function (e = "#FFFFFF") {
                    return `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.711 2.652a5.489 5.489 0 00-4.044 4.05 5.513 5.513 0 00.104 2.968.167.167 0 00.25.089l.893-.588a.667.667 0 011.02.692l-.61 2.937a.667.667 0 01-.786.52L.6 12.713a.667.667 0 01-.232-1.21l.933-.615a.166.166 0 00.063-.2 7.167 7.167 0 018.828-9.516.833.833 0 01-.507 1.587 5.489 5.489 0 00-2.974-.108zM15.75 3.542c.09.096.15.216.172.346a.667.667 0 01-.301.681l-.898.564a.166.166 0 00-.066.2 7.167 7.167 0 01-8.77 9.514.835.835 0 01-.154-1.544.831.831 0 01.646-.048 5.5 5.5 0 006.856-6.949.167.167 0 00-.176-.114.164.164 0 00-.071.026l-.962.604a.667.667 0 01-1.005-.713l.667-2.924a.667.667 0 01.8-.502l2.925.667c.129.03.246.096.336.192z" fill="${e}"/></svg>`;
                  })()
                ),
                (0, T.bF)(this.allowButton, "onesignal-error-state-button")),
              (this.isShowingFailureState = !0);
          }
          setFailureStateForInvalidChannelInput(e) {
            switch (e) {
              case ni.InvalidSms:
                ai.showSmsInputError(!0);
                break;
              case ni.InvalidEmail:
                ai.showEmailInputError(!0);
                break;
              case ni.InvalidEmailAndSms:
                ai.showSmsInputError(!0), ai.showEmailInputError(!0);
            }
          }
          removeFailureState() {
            (0, T.tf)("#onesignal-button-indicator-holder"),
              (0, T.BH)(this.allowButton, "onesignal-error-state-button"),
              Y.isSlidedownPushDependent(this.options.type) ||
                ai.resetInputErrorStates(this.options.type),
              (this.isShowingFailureState = !1);
          }
          getPlatformNotificationIcon() {
            return (0, T.S6)(this.notificationIcons);
          }
          getIndicatorHolder() {
            const e = document.createElement("div");
            return (
              (e.id = Ae.buttonIndicatorHolder),
              (0, T.bF)(e, ke.buttonIndicatorHolder),
              e
            );
          }
          getTextSpan(e) {
            const t = document.createElement("span");
            return (t.textContent = e), t;
          }
          get container() {
            return (0, T.gd)(`#${Ae.container}`);
          }
          get dialog() {
            return (0, T.gd)(`#${Ae.dialog}`);
          }
          get allowButton() {
            return (0, T.gd)(`#${Ae.allowButton}`);
          }
          get cancelButton() {
            return (0, T.gd)(`#${Ae.cancelButton}`);
          }
          get buttonIndicatorHolder() {
            return (0, T.gd)(`#${Ae.buttonIndicatorHolder}`);
          }
          get slidedownFooter() {
            return (0, T.gd)(`#${Ae.footer}`);
          }
          static get EVENTS() {
            return {
              ALLOW_CLICK: "slidedownAllowClick",
              CANCEL_CLICK: "slidedownCancelClick",
              SHOWN: "slidedownShown",
              CLOSED: "slidedownClosed",
              QUEUED: "slidedownQueued",
            };
          }
        }
        class PermissionMessageDismissedError extends O.Z {
          constructor(e) {
            super(
              `The permission message of type ${
                e || "unknown"
              } was previously dismissed.`
            ),
              Object.setPrototypeOf(
                this,
                PermissionMessageDismissedError.prototype
              );
          }
        }
        class ci {
          constructor(e) {
            this.message = e;
          }
          show() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = document.createElement("div"),
                t = document.createElement("p");
              (t.innerText = this.message), e.appendChild(t);
              const i = document.createElement("div"),
                n = document.createElement("div");
              (i.id = Ae.container),
                (e.id = Ne),
                (0, T.bF)(e, xe),
                (0, T.bF)(i, ke.container),
                (0, T.bF)(i, ke.reset),
                (0, T.gd)("body").appendChild(i),
                (n.id = Ae.dialog),
                (0, T.bF)(n, ke.dialog),
                n.appendChild(e),
                this.container.appendChild(n),
                (0, T.bF)(
                  this.container,
                  (0, l.M)().mobile ? ke.slideUp : ke.slideDown
                ),
                ci.triggerSlidedownEvent(ci.EVENTS.SHOWN);
            });
          }
          static triggerSlidedownEvent(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield be.Z.trigger(e);
            });
          }
          close() {
            (0, T.bF)(this.container, ke.closeSlidedown),
              (0, T.IH)(
                this.dialog,
                "animationend",
                (e, t) => {
                  e.target !== this.dialog ||
                    ("slideDownExit" !== e.animationName &&
                      "slideUpExit" !== e.animationName) ||
                    ((0, T.tf)(`#${Ae.container}`), t());
                },
                !0
              );
          }
          get container() {
            return (0, T.gd)(`#${Ae.container}`);
          }
          get dialog() {
            return (0, T.gd)(`#${Ae.dialog}`);
          }
          static get EVENTS() {
            return { SHOWN: "toastShown", CLOSED: "toastClosed" };
          }
        }
        !(function (e) {
          (e.Push = "push"), (e.NonPush = "nonPush");
        })(oi || (oi = {})),
          (function (e) {
            (e.PromptDismissCount = "promptDismissCount"),
              (e.NonPushPromptsDismissCount = "nonPushPromptsDismissCount");
          })(si || (si = {})),
          (function (e) {
            (e.OneSignalNotificationPrompt = "onesignal-notification-prompt"),
              (e.OneSignalNonPushPrompt = "onesignal-non-push-prompt");
          })(ri || (ri = {}));
        class AlreadySubscribedError extends O.Z {
          constructor() {
            super(
              "This operation can only be performed when the user is not subscribed."
            ),
              Object.setPrototypeOf(this, AlreadySubscribedError.prototype);
          }
        }
        class ui extends O.Z {
          constructor(e) {
            super(
              `This operation can only be performed when the channel '${e}' does not yet exist.`
            ),
              Object.setPrototypeOf(this, ui.prototype);
          }
        }
        class hi {
          static isLocalStorageSupported() {
            try {
              return (
                "undefined" != typeof localStorage &&
                (localStorage.getItem("test"), !0)
              );
            } catch (e) {
              return !1;
            }
          }
          static setItem(e, t, i) {
            if (!hi.isLocalStorageSupported()) return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0,
              o = {
                value: JSON.stringify(t),
                timestamp: void 0 !== i ? new Date().getTime() + n : void 0,
              };
            localStorage.setItem(e, JSON.stringify(o));
          }
          static getItem(e) {
            if (!hi.isLocalStorageSupported()) return null;
            const t = localStorage.getItem(e);
            let i;
            try {
              i = JSON.parse(t);
            } catch (e) {
              return null;
            }
            if (null === i) return null;
            if (i.timestamp && new Date().getTime() >= i.timestamp)
              return localStorage.removeItem(e), null;
            let n = i.value;
            try {
              n = JSON.parse(i.value);
            } catch (e) {
              return n;
            }
            return n;
          }
          static removeItem(e) {
            if (!hi.isLocalStorageSupported()) return null;
            localStorage.removeItem(e);
          }
        }
        const gi = {
            [oi.Push]: si.PromptDismissCount,
            [oi.NonPush]: si.NonPushPromptsDismissCount,
          },
          pi = {
            [oi.Push]: ri.OneSignalNotificationPrompt,
            [oi.NonPush]: ri.OneSignalNonPushPrompt,
          };
        class mi {
          static markPromptDismissedWithType(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = gi[e],
                i = pi[e];
              let n = yield ve.ZP.get("Options", t);
              n || (n = 0), (n += 1);
              let o = 3;
              2 == n ? (o = 7) : n > 2 && (o = 30),
                C.Z.debug(
                  `(${p.Z.getWindowEnv().toString()}) OneSignal: User dismissed the ${e} notification prompt; reprompt after ${o} days.`
                ),
                yield ve.ZP.put("Options", { key: t, value: n });
              const s = 24 * o * 60;
              return hi.setItem(i, "dismissed", s);
            });
          }
          static wasPromptOfTypeDismissed(e) {
            switch (e) {
              case oi.Push:
                return (
                  "dismissed" === hi.getItem(ri.OneSignalNotificationPrompt)
                );
              case oi.NonPush:
                return "dismissed" === hi.getItem(ri.OneSignalNonPushPrompt);
            }
            return !1;
          }
        }
        class fi {
          static registerForPush() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield fi.internalRegisterForPush();
            });
          }
          static internalRegisterForPush() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.context;
              let t = null;
              if (p.Z.getWindowEnv() !== m.Q.Host)
                throw new InvalidStateError(ft.UnsupportedEnvironment);
              try {
                const i = yield e.subscriptionManager.subscribe(0);
                (t = yield e.subscriptionManager.registerSubscription(i)),
                  e.pageViewManager.incrementPageViewCount(),
                  yield St.Q.triggerNotificationPermissionChanged(),
                  yield Wt.checkAndTriggerSubscriptionChanged();
              } catch (e) {
                C.Z.error(e);
              }
              return t;
            });
          }
          static isPushSubscriptionType(e) {
            switch (e) {
              case c.ChromePush:
              case c.SafariPush:
              case c.SafariLegacyPush:
              case c.FirefoxPush:
                return !0;
              default:
                return !1;
            }
          }
          static toSubscriptionChannel(e) {
            switch (e) {
              case c.Email:
                return u.Email;
              case c.SMS:
                return u.SMS;
              default:
                return this.isPushSubscriptionType(e) ? u.Push : void 0;
            }
          }
        }
        class vi {
          constructor(
            e,
            t,
            i,
            n = "shown",
            o = ["opacity", "transform"],
            s,
            r = 500
          ) {
            (this.selector = e),
              (this.showClass = t),
              (this.hideClass = i),
              (this.state = n),
              (this.targetTransitionEvents = o),
              (this.nestedContentSelector = s),
              (this.transitionCheckTimeout = r);
          }
          show() {
            return this.hidden
              ? new Promise((e) => {
                  (this.state = "showing"),
                    be.Z.trigger(vi.EVENTS.SHOWING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.hideClass && (0, T.BH)(t, this.hideClass),
                        this.showClass && (0, T.bF)(t, this.showClass))
                      : C.Z.error(
                          `(show) could not find animated element with selector ${this.selector}`
                        ),
                    0 == this.targetTransitionEvents.length)
                  )
                    return e(this);
                  {
                    const t = setTimeout(() => {
                      C.Z.debug(
                        `Element did not completely show (state: ${this.state}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, T.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, T.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.state = "shown"),
                            be.Z.trigger(vi.EVENTS.SHOWN, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          hide() {
            return this.shown
              ? new Promise((e) => {
                  (this.state = "hiding"), be.Z.trigger(vi.EVENTS.HIDING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.showClass && (0, T.BH)(t, this.showClass),
                        this.hideClass && (0, T.bF)(t, this.hideClass))
                      : C.Z.error(
                          `(hide) could not find animated element with selector ${this.selector}`
                        ),
                    0 == this.targetTransitionEvents.length)
                  )
                    return e(this);
                  (0, T.IH)(
                    this.element,
                    "transitionend",
                    (t, i) => {
                      const n = setTimeout(() => {
                        C.Z.debug(
                          `Element did not completely hide (state: ${this.state}).`
                        );
                      }, this.transitionCheckTimeout);
                      if (
                        t.target === this.element &&
                        (0, T.r3)(this.targetTransitionEvents, t.propertyName)
                      )
                        return (
                          clearTimeout(n),
                          i(),
                          (this.state = "hidden"),
                          be.Z.trigger(vi.EVENTS.HIDDEN, this),
                          e(this)
                        );
                    },
                    !0
                  );
                })
              : Promise.resolve(this);
          }
          waitUntilShown() {
            return "shown" === this.state
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(vi.EVENTS.SHOWN, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          waitUntilHidden() {
            return "hidden" === this.state
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(vi.EVENTS.HIDDEN, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          static get EVENTS() {
            return {
              SHOWING: "animatedElementShowing",
              SHOWN: "animatedElementShown",
              HIDING: "animatedElementHiding",
              HIDDEN: "animatedElementHidden",
            };
          }
          get content() {
            if (!this.element) return "";
            if (this.nestedContentSelector) {
              const e = this.element.querySelector(this.nestedContentSelector);
              return e ? e.innerHTML : "";
            }
            return this.element.innerHTML;
          }
          set content(e) {
            if (this.element)
              if (this.nestedContentSelector) {
                const t = this.element.querySelector(
                  this.nestedContentSelector
                );
                t && (t.textContent = e);
              } else this.element.textContent = e;
          }
          get element() {
            return document.querySelector(this.selector);
          }
          get showing() {
            return "showing" === this.state;
          }
          get shown() {
            return "shown" === this.state;
          }
          get hiding() {
            return "hiding" === this.state;
          }
          get hidden() {
            return "hidden" === this.state;
          }
        }
        class bi extends vi {
          constructor(
            e,
            t,
            i,
            n,
            o,
            s = "shown",
            r = "active",
            a = ["opacity", "transform"],
            l
          ) {
            super(e, t, i, s, a),
              (this.selector = e),
              (this.showClass = t),
              (this.hideClass = i),
              (this.activeClass = n),
              (this.inactiveClass = o),
              (this.state = s),
              (this.activeState = r),
              (this.targetTransitionEvents = a),
              (this.nestedContentSelector = l);
          }
          activate() {
            return this.inactive && this.shown
              ? new Promise((e) => {
                  (this.activeState = "activating"),
                    be.Z.trigger(bi.EVENTS.ACTIVATING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.inactiveClass && (0, T.BH)(t, this.inactiveClass),
                        this.activeClass && (0, T.bF)(t, this.activeClass))
                      : C.Z.error("Could not find active animated element"),
                    !this.shown)
                  )
                    return (
                      C.Z.debug("Ending activate() transition (alternative)."),
                      (this.activeState = "active"),
                      be.Z.trigger(bi.EVENTS.ACTIVE, this),
                      e(this)
                    );
                  if (0 == this.targetTransitionEvents.length) return e(this);
                  {
                    const t = setTimeout(() => {
                      C.Z.debug(
                        `Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, T.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, T.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.activeState = "active"),
                            be.Z.trigger(bi.EVENTS.ACTIVE, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          inactivate() {
            return this.active
              ? new Promise((e) => {
                  (this.activeState = "inactivating"),
                    be.Z.trigger(bi.EVENTS.INACTIVATING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.activeClass && (0, T.BH)(t, this.activeClass),
                        this.inactiveClass && (0, T.bF)(t, this.inactiveClass))
                      : C.Z.error("Could not find active animated element"),
                    !this.shown)
                  )
                    return (
                      (this.activeState = "inactive"),
                      be.Z.trigger(bi.EVENTS.INACTIVE, this),
                      e(this)
                    );
                  if (0 == this.targetTransitionEvents.length) return e(this);
                  {
                    const t = setTimeout(() => {
                      C.Z.debug(
                        `Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, T.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, T.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.activeState = "inactive"),
                            be.Z.trigger(bi.EVENTS.INACTIVE, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          waitUntilActive() {
            return this.active
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(bi.EVENTS.ACTIVE, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          waitUntilInactive() {
            return this.inactive
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(bi.EVENTS.INACTIVE, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          static get EVENTS() {
            return Object.assign(Object.assign({}, vi.EVENTS), {
              ACTIVATING: "activeAnimatedElementActivating",
              ACTIVE: "activeAnimatedElementActive",
              INACTIVATING: "activeAnimatedElementInactivating",
              INACTIVE: "activeAnimatedElementInactive",
            });
          }
          get activating() {
            return "activating" === this.activeState;
          }
          get active() {
            return "active" === this.activeState;
          }
          get inactivating() {
            return "inactivating" === this.activeState;
          }
          get inactive() {
            return "inactive" === this.activeState;
          }
        }
        class Si extends bi {
          constructor() {
            super(
              ".onesignal-bell-launcher-badge",
              "onesignal-bell-launcher-badge-opened",
              null,
              "onesignal-bell-launcher-badge-active",
              null,
              "hidden"
            );
          }
          increment() {
            if (!isNaN(this.content)) {
              let e = +this.content;
              (e += 1), (this.content = e.toString());
            }
          }
          show() {
            const e = super.show();
            return OneSignal.notifyButton.setCustomColorsIfSpecified(), e;
          }
          decrement() {
            if (!isNaN(this.content)) {
              let e = +this.content;
              (e -= 1), (this.content = e > 0 ? e.toString() : "");
            }
          }
        }
        class yi extends vi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-message",
              "onesignal-bell-launcher-message-opened",
              void 0,
              "hidden",
              ["opacity", "transform"],
              ".onesignal-bell-launcher-message-body"
            ),
              (this.bell = e),
              (this.contentType = ""),
              (this.queued = []);
          }
          static get TIMEOUT() {
            return 2500;
          }
          static get TYPES() {
            return { TIP: "tip", MESSAGE: "message", QUEUED: "queued" };
          }
          display(e, t, i = 0) {
            return (
              C.Z.debug(`Calling display(${e}, ${t}, ${i}).`),
              (this.shown ? this.hide() : (0, T.Ld)())
                .then(() => {
                  (this.content = pt.decodeHtmlEntities(t)),
                    (this.contentType = e);
                })
                .then(() => this.show())
                .then(() => (0, T.gw)(i))
                .then(() => this.hide())
                .then(() => {
                  (this.content = this.getTipForState()),
                    (this.contentType = "tip");
                })
            );
          }
          getTipForState() {
            return this.bell.state === Ei.STATES.UNSUBSCRIBED
              ? this.bell.options.text["tip.state.unsubscribed"]
              : this.bell.state === Ei.STATES.SUBSCRIBED
              ? this.bell.options.text["tip.state.subscribed"]
              : this.bell.state === Ei.STATES.BLOCKED
              ? this.bell.options.text["tip.state.blocked"]
              : "";
          }
          enqueue(e) {
            return (
              this.queued.push(pt.decodeHtmlEntities(e)),
              new Promise((e) => {
                this.bell.badge.shown
                  ? this.bell.badge
                      .hide()
                      .then(() => this.bell.badge.increment())
                      .then(() => this.bell.badge.show())
                      .then(e)
                  : (this.bell.badge.increment(),
                    this.bell.initialized
                      ? this.bell.badge.show().then(e)
                      : e());
              })
            );
          }
          dequeue(e) {
            const t = this.queued.pop(e);
            return new Promise((e) => {
              this.bell.badge.shown
                ? this.bell.badge
                    .hide()
                    .then(() => this.bell.badge.decrement())
                    .then((e) =>
                      e > 0 ? this.bell.badge.show() : Promise.resolve(this)
                    )
                    .then(e(t))
                : (this.bell.badge.decrement(), e(t));
            });
          }
        }
        class wi extends bi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-button",
              void 0,
              void 0,
              "onesignal-bell-launcher-button-active",
              void 0,
              "shown",
              ""
            ),
              (this.bell = e),
              (this.events = { mouse: "bell.launcher.button.mouse" });
            const t = this.element;
            t &&
              (t.addEventListener(
                "touchstart",
                () => {
                  this.onHovering(), this.onTap();
                },
                { passive: !0 }
              ),
              t.addEventListener("mouseenter", () => {
                this.onHovering();
              }),
              t.addEventListener("mouseleave", () => {
                this.onHovered();
              }),
              t.addEventListener(
                "touchmove",
                () => {
                  this.onHovered();
                },
                { passive: !0 }
              ),
              t.addEventListener("mousedown", () => {
                this.onTap();
              }),
              t.addEventListener("mouseup", () => {
                this.onEndTap();
              }),
              t.addEventListener("click", () => {
                this.onHovered(), this.onClick();
              }));
          }
          onHovering() {
            (gt.isEmpty(this.events.mouse) ||
              "out" === gt.getLast(this.events.mouse)) &&
              be.Z.trigger(Ei.EVENTS.HOVERING),
              gt.put(this.events.mouse, "over");
          }
          onHovered() {
            gt.put(this.events.mouse, "out"), be.Z.trigger(Ei.EVENTS.HOVERED);
          }
          onTap() {
            this.pulse(), this.activate(), this.bell.badge.activate();
          }
          onEndTap() {
            this.inactivate(), this.bell.badge.inactivate();
          }
          onClick() {
            if (
              (be.Z.trigger(Ei.EVENTS.BELL_CLICK),
              be.Z.trigger(Ei.EVENTS.LAUNCHER_CLICK),
              this.bell.message.shown &&
                this.bell.message.contentType == yi.TYPES.MESSAGE)
            )
              return;
            const e = gt.getLast("subscription.optedOut");
            return (
              this.bell.unsubscribed
                ? e
                  ? this.bell.launcher.activateIfInactive().then(() => {
                      this.bell.showDialogProcedure();
                    })
                  : (Ci.registerForPushNotifications(),
                    (this.bell._ignoreSubscriptionState = !0),
                    OneSignal.emitter.once(
                      OneSignal.EVENTS.SUBSCRIPTION_CHANGED,
                      () => {
                        this.bell.message
                          .display(
                            yi.TYPES.MESSAGE,
                            this.bell.options.text["message.action.subscribed"],
                            yi.TIMEOUT
                          )
                          .then(() => {
                            (this.bell._ignoreSubscriptionState = !1),
                              this.bell.launcher.inactivate();
                          });
                      }
                    ))
                : (this.bell.subscribed || this.bell.blocked) &&
                  this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure();
                  }),
              this.bell.message.hide()
            );
          }
          pulse() {
            (0, T.tf)(".pulse-ring"),
              this.element &&
                (0, T.IM)(
                  this.element,
                  "beforeend",
                  '<div class="pulse-ring"></div>'
                ),
              this.bell.setCustomColorsIfSpecified();
          }
        }
        class Ii extends vi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-dialog",
              "onesignal-bell-launcher-dialog-opened",
              void 0,
              "hidden",
              ["opacity", "transform"],
              ".onesignal-bell-launcher-dialog-body"
            ),
              (this.bell = e),
              (this.subscribeButtonId =
                "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button"),
              (this.unsubscribeButtonId =
                "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button"),
              (this.notificationIcons = null);
          }
          show() {
            return this.updateBellLauncherDialogBody().then(() => super.show());
          }
          get subscribeButtonSelectorId() {
            return "subscribe-button";
          }
          get unsubscribeButtonSelectorId() {
            return "unsubscribe-button";
          }
          get subscribeButton() {
            return this.element
              ? this.element.querySelector("#" + this.subscribeButtonSelectorId)
              : null;
          }
          get unsubscribeButton() {
            return this.element
              ? this.element.querySelector(
                  "#" + this.unsubscribeButtonSelectorId
                )
              : null;
          }
          updateBellLauncherDialogBody() {
            return OneSignal.context.subscriptionManager
              .isPushNotificationsEnabled()
              .then((e) => {
                this.nestedContentSelector &&
                  (0, T.jI)(this.nestedContentSelector);
                let t = "Nothing to show.",
                  i = "";
                if (
                  (this.bell.options.showCredit &&
                    (i =
                      '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'),
                  (this.bell.state === Ei.STATES.SUBSCRIBED && !0 === e) ||
                    (this.bell.state === Ei.STATES.UNSUBSCRIBED && !1 === e))
                ) {
                  let e = "";
                  const n = (0, T.S6)(this.notificationIcons);
                  e =
                    "default-icon" != n
                      ? `<div class="push-notification-icon"><img src="${n}"></div>`
                      : '<div class="push-notification-icon push-notification-icon-default"></div>';
                  let o = "";
                  (o =
                    this.bell.state !== Ei.STATES.SUBSCRIBED
                      ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>`
                      : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`),
                    (t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${o}</div>${i}`);
                } else if (this.bell.state === Ei.STATES.BLOCKED) {
                  let e = null;
                  "chrome" === (0, l.M)().name
                    ? (0, l.M)().mobile ||
                      (0, l.M)().tablet ||
                      (e = "/bell/chrome-unblock.jpg")
                    : "firefox" === (0, l.M)().name
                    ? (e = "/bell/firefox-unblock.jpg")
                    : "safari" == (0, l.M)().name
                    ? (e = "/bell/safari-unblock.jpg")
                    : "msedge" === (0, l.M)().name &&
                      (e = "/bell/edge-unblock.png");
                  let n = "";
                  e &&
                    ((e = p.Z.getOneSignalStaticResourcesUrl() + e),
                    (n = `<a href="${e}" target="_blank"><img src="${e}"></a></div>`)),
                    ((0, l.M)().mobile || (0, l.M)().tablet) &&
                      "chrome" === (0, l.M)().name &&
                      (n =
                        "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>â‹®</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"),
                    (t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`);
                }
                this.nestedContentSelector &&
                  (0, T.IM)(this.nestedContentSelector, "beforeend", t),
                  this.subscribeButton &&
                    this.subscribeButton.addEventListener("click", () => {
                      (OneSignal.__doNotShowWelcomeNotification = !1),
                        be.Z.trigger(Ei.EVENTS.SUBSCRIBE_CLICK);
                    }),
                  this.unsubscribeButton &&
                    this.unsubscribeButton.addEventListener("click", () =>
                      be.Z.trigger(Ei.EVENTS.UNSUBSCRIBE_CLICK)
                    ),
                  this.bell.setCustomColorsIfSpecified();
              });
          }
        }
        class Oi extends bi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher",
              "onesignal-bell-launcher-active",
              void 0,
              void 0,
              "onesignal-bell-launcher-inactive",
              "hidden",
              "active"
            ),
              (this.bell = e),
              (this.wasInactive = !1);
          }
          resize(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.element)
                throw new InvalidStateError(ft.MissingDomElement);
              if (
                ("small" === e &&
                  (0, T.Uj)(this.element, "onesignal-bell-launcher-sm")) ||
                ("medium" === e &&
                  (0, T.Uj)(this.element, "onesignal-bell-launcher-md")) ||
                ("large" === e &&
                  (0, T.Uj)(this.element, "onesignal-bell-launcher-lg"))
              )
                return Promise.resolve(this);
              if (
                ((0, T.BH)(this.element, "onesignal-bell-launcher-sm"),
                (0, T.BH)(this.element, "onesignal-bell-launcher-md"),
                (0, T.BH)(this.element, "onesignal-bell-launcher-lg"),
                "small" === e)
              )
                (0, T.bF)(this.element, "onesignal-bell-launcher-sm");
              else if ("medium" === e)
                (0, T.bF)(this.element, "onesignal-bell-launcher-md");
              else {
                if ("large" !== e)
                  throw new Error("Invalid OneSignal bell size " + e);
                (0, T.bF)(this.element, "onesignal-bell-launcher-lg");
              }
              return this.shown
                ? yield new Promise((e) => {
                    if (0 == this.targetTransitionEvents.length) return e(this);
                    {
                      const t = setTimeout(() => {
                        C.Z.debug(
                          `Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`
                        );
                      }, this.transitionCheckTimeout);
                      (0, T.IH)(
                        this.element,
                        "transitionend",
                        (i, n) => {
                          if (
                            i.target === this.element &&
                            (0, T.r3)(
                              this.targetTransitionEvents,
                              i.propertyName
                            )
                          )
                            return clearTimeout(t), n(), e(this);
                        },
                        !0
                      );
                    }
                  })
                : this;
            });
          }
          activateIfInactive() {
            return this.inactive
              ? ((this.wasInactive = !0), this.activate())
              : (0, T.Ld)();
          }
          inactivateIfWasInactive() {
            return this.wasInactive
              ? ((this.wasInactive = !1), this.inactivate())
              : (0, T.Ld)();
          }
          clearIfWasInactive() {
            this.wasInactive = !1;
          }
          inactivate() {
            return this.bell.message.hide().then(() =>
              this.bell.badge.content.length > 0
                ? this.bell.badge
                    .hide()
                    .then(() =>
                      Promise.all([super.inactivate(), this.resize("small")])
                    )
                    .then(() => this.bell.badge.show())
                : Promise.all([super.inactivate(), this.resize("small")])
            );
          }
          activate() {
            return this.bell.badge.content.length > 0
              ? this.bell.badge
                  .hide()
                  .then(() =>
                    Promise.all([
                      super.activate(),
                      this.resize(this.bell.options.size),
                    ])
                  )
              : Promise.all([
                  super.activate(),
                  this.resize(this.bell.options.size),
                ]);
          }
        }
        class Ei {
          static get EVENTS() {
            return {
              STATE_CHANGED: "notifyButtonStateChange",
              LAUNCHER_CLICK: "notifyButtonLauncherClick",
              BELL_CLICK: "notifyButtonButtonClick",
              SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
              UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
              HOVERING: "notifyButtonHovering",
              HOVERED: "notifyButtonHover",
            };
          }
          static get STATES() {
            return {
              UNINITIALIZED: "uninitialized",
              SUBSCRIBED: "subscribed",
              UNSUBSCRIBED: "unsubscribed",
              BLOCKED: "blocked",
            };
          }
          static get TEXT_SUBS() {
            return {
              "prompt.native.grant": {
                default: "Allow",
                chrome: "Allow",
                firefox: "Always Receive Notifications",
                safari: "Allow",
              },
            };
          }
          constructor(e, t) {
            (this.state = Ei.STATES.UNINITIALIZED),
              (this._ignoreSubscriptionState = !1),
              (this.hovering = !1),
              (this.initialized = !1),
              (this.DEFAULT_SIZE = "medium"),
              (this.DEFAULT_POSITION = "bottom-right"),
              (this.DEFAULT_THEME = "default"),
              (this.options = {
                enable: e.enable || !1,
                size: e.size || this.DEFAULT_SIZE,
                position: e.position || this.DEFAULT_POSITION,
                theme: e.theme || this.DEFAULT_THEME,
                showLauncherAfter: e.showLauncherAfter || 10,
                showBadgeAfter: e.showBadgeAfter || 300,
                text: this.setDefaultTextOptions(e.text || {}),
                prenotify: e.prenotify,
                showCredit: e.showCredit,
                colors: e.colors,
                offset: e.offset,
              }),
              t && (this._launcher = t),
              this.options.enable &&
                (this.validateOptions(this.options),
                (this.state = Ei.STATES.UNINITIALIZED),
                (this._ignoreSubscriptionState = !1),
                this.installEventHooks(),
                this.updateState());
          }
          showDialogProcedure() {
            this.dialog.shown ||
              this.dialog.show().then(() => {
                (0, T.IH)(
                  document,
                  "click",
                  (e, t) => {
                    this.dialog.element.contains(e.target) ||
                      (t(),
                      this.dialog.shown &&
                        this.dialog.hide().then(() => {
                          this.launcher.inactivateIfWasInactive();
                        }));
                  },
                  !0
                );
              });
          }
          validateOptions(e) {
            if (!e.size || !(0, T.r3)(["small", "medium", "large"], e.size))
              throw new Error(
                `Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`
              );
            if (
              !e.position ||
              !(0, T.r3)(["bottom-left", "bottom-right"], e.position)
            )
              throw new Error(
                `Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`
              );
            if (!e.theme || !(0, T.r3)(["default", "inverse"], e.theme))
              throw new Error(
                `Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`
              );
            if (!e.showLauncherAfter || e.showLauncherAfter < 0)
              throw new Error(
                `Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`
              );
            if (!e.showBadgeAfter || e.showBadgeAfter < 0)
              throw new Error(
                `Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`
              );
          }
          setDefaultTextOptions(e) {
            return {
              "tip.state.unsubscribed":
                e["tip.state.unsubscribed"] || "Subscribe to notifications",
              "tip.state.subscribed":
                e["tip.state.subscribed"] ||
                "You're subscribed to notifications",
              "tip.state.blocked":
                e["tip.state.blocked"] || "You've blocked notifications",
              "message.prenotify":
                e["message.prenotify"] || "Click to subscribe to notifications",
              "message.action.subscribed":
                e["message.action.subscribed"] || "Thanks for subscribing!",
              "message.action.resubscribed":
                e["message.action.resubscribed"] ||
                "You're subscribed to notifications",
              "message.action.subscribing":
                e["message.action.subscribing"] ||
                "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
              "message.action.unsubscribed":
                e["message.action.unsubscribed"] ||
                "You won't receive notifications again",
              "dialog.main.title":
                e["dialog.main.title"] || "Manage Site Notifications",
              "dialog.main.button.subscribe":
                e["dialog.main.button.subscribe"] || "SUBSCRIBE",
              "dialog.main.button.unsubscribe":
                e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE",
              "dialog.blocked.title":
                e["dialog.blocked.title"] || "Unblock Notifications",
              "dialog.blocked.message":
                e["dialog.blocked.message"] ||
                "Follow these instructions to allow notifications:",
            };
          }
          installEventHooks() {
            sn.emitter.on(Ei.EVENTS.SUBSCRIBE_CLICK, () => {
              (this.dialog.subscribeButton.disabled = !0),
                (this._ignoreSubscriptionState = !0),
                sn.User.PushSubscription.optIn()
                  .then(
                    () => (
                      (this.dialog.subscribeButton.disabled = !1),
                      this.dialog.hide()
                    )
                  )
                  .then(() =>
                    this.message.display(
                      yi.TYPES.MESSAGE,
                      this.options.text["message.action.resubscribed"],
                      yi.TIMEOUT
                    )
                  )
                  .then(
                    () => (
                      (this._ignoreSubscriptionState = !1),
                      this.launcher.clearIfWasInactive(),
                      this.launcher.inactivate()
                    )
                  )
                  .then(() => this.updateState())
                  .catch((e) => {
                    throw e;
                  });
            }),
              sn.emitter.on(Ei.EVENTS.UNSUBSCRIBE_CLICK, () => {
                (this.dialog.unsubscribeButton.disabled = !0),
                  sn.User.PushSubscription.optOut()
                    .then(
                      () => (
                        (this.dialog.unsubscribeButton.disabled = !1),
                        this.dialog.hide()
                      )
                    )
                    .then(
                      () => (
                        this.launcher.clearIfWasInactive(),
                        this.launcher.activate()
                      )
                    )
                    .then(() =>
                      this.message.display(
                        yi.TYPES.MESSAGE,
                        this.options.text["message.action.unsubscribed"],
                        yi.TIMEOUT
                      )
                    )
                    .then(() => this.updateState());
              }),
              sn.emitter.on(Ei.EVENTS.HOVERING, () => {
                (this.hovering = !0),
                  this.launcher.activateIfInactive(),
                  this.message.shown || this.dialog.shown
                    ? (this.hovering = !1)
                    : this.message.contentType !== yi.TYPES.MESSAGE
                    ? new Promise((e) => {
                        if (this.message.queued.length > 0)
                          return this.message.dequeue().then((t) => {
                            (this.message.content = t),
                              (this.message.contentType = yi.TYPES.QUEUED),
                              e();
                          });
                        (this.message.content = pt.decodeHtmlEntities(
                          this.message.getTipForState()
                        )),
                          (this.message.contentType = yi.TYPES.TIP),
                          e();
                      })
                        .then(() => this.message.show())
                        .then(() => {
                          this.hovering = !1;
                        })
                        .catch((e) => {
                          C.Z.error(e);
                        })
                    : (this.hovering = !1);
              }),
              sn.emitter.on(Ei.EVENTS.HOVERED, () => {
                this.message.contentType !== yi.TYPES.MESSAGE &&
                  this.dialog.hidden &&
                  (this.hovering &&
                    ((this.hovering = !1),
                    this.message
                      .waitUntilShown()
                      .then(() => (0, T.gw)(yi.TIMEOUT))
                      .then(() => this.message.hide())
                      .then(() => {
                        this.launcher.wasInactive &&
                          this.dialog.hidden &&
                          (this.launcher.inactivate(),
                          (this.launcher.wasInactive = !1));
                      })),
                  this.message.shown &&
                    this.message.hide().then(() => {
                      this.launcher.wasInactive &&
                        this.dialog.hidden &&
                        (this.launcher.inactivate(),
                        (this.launcher.wasInactive = !1));
                    }));
              }),
              sn.emitter.on(sn.EVENTS.SUBSCRIPTION_CHANGED, (e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  if (
                    e.current.optedIn &&
                    (this.badge.shown &&
                      this.options.prenotify &&
                      this.badge.hide(),
                    null === this.dialog.notificationIcons)
                  ) {
                    const e = yield wt.getNotificationIcons();
                    this.dialog.notificationIcons = e;
                  }
                  const t =
                    yield sn.context.permissionManager.getPermissionStatus();
                  let i;
                  (i = e.current.optedIn
                    ? Ei.STATES.SUBSCRIBED
                    : t === Bt.Denied
                    ? Ei.STATES.BLOCKED
                    : Ei.STATES.UNSUBSCRIBED),
                    this.setState(i, this._ignoreSubscriptionState);
                })
              ),
              sn.emitter.on(Ei.EVENTS.STATE_CHANGED, (e) => {
                this.launcher.element &&
                  (e.to === Ei.STATES.SUBSCRIBED
                    ? this.launcher.inactivate()
                    : (e.to === Ei.STATES.UNSUBSCRIBED || Ei.STATES.BLOCKED) &&
                      this.launcher.activate());
              }),
              sn.emitter.on(
                sn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                () => {
                  this.updateState();
                }
              );
          }
          addDefaultClasses() {
            const e = this.container;
            if ("bottom-left" === this.options.position)
              e && (0, T.bF)(e, "onesignal-bell-container-bottom-left"),
                (0, T.bF)(
                  this.launcher.selector,
                  "onesignal-bell-launcher-bottom-left"
                );
            else {
              if ("bottom-right" !== this.options.position)
                throw new Error(
                  `Invalid OneSignal notify button position ${this.options.position}`
                );
              e && (0, T.bF)(e, "onesignal-bell-container-bottom-right"),
                (0, T.bF)(
                  this.launcher.selector,
                  "onesignal-bell-launcher-bottom-right"
                );
            }
            if ("default" === this.options.theme)
              (0, T.bF)(
                this.launcher.selector,
                "onesignal-bell-launcher-theme-default"
              );
            else {
              if ("inverse" !== this.options.theme)
                throw new Error(
                  `Invalid OneSignal notify button theme ${this.options.theme}`
                );
              (0, T.bF)(
                this.launcher.selector,
                "onesignal-bell-launcher-theme-inverse"
              );
            }
          }
          create() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.options.enable) return;
              if (
                0 !==
                (yield sn.context.dynamicResourceLoader.loadSdkStylesheet())
              )
                return void C.Z.debug(
                  "Not showing notify button because styles failed to load."
                );
              this.container && (0, T.tf)("#onesignal-bell-container"),
                (0, T.IM)(
                  "body",
                  "beforeend",
                  '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'
                ),
                this.container &&
                  (0, T.IM)(
                    this.container,
                    "beforeend",
                    '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'
                  ),
                (0, T.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-button"></div>'
                ),
                (0, T.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-badge"></div>'
                ),
                (0, T.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-message"></div>'
                ),
                (0, T.IM)(
                  this.message.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-message-body"></div>'
                ),
                (0, T.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-dialog"></div>'
                ),
                (0, T.IM)(
                  this.dialog.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-dialog-body"></div>'
                ),
                (0, T.IM)(
                  this.button.selector,
                  "beforeend",
                  '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>'
                );
              const e =
                yield sn.context.subscriptionManager.isPushNotificationsEnabled();
              mi.wasPromptOfTypeDismissed(oi.Push);
              const t = e ? "small" : this.options.size || this.DEFAULT_SIZE;
              yield this.launcher.resize(t),
                this.addDefaultClasses(),
                this.applyOffsetIfSpecified(),
                this.setCustomColorsIfSpecified(),
                this.patchSafariSvgFilterBug(),
                C.Z.info("Showing the notify button."),
                yield (e ? this.launcher.inactivate() : (0, T.Ld)())
                  .then(() =>
                    e && null === this.dialog.notificationIcons
                      ? wt.getNotificationIcons().then((e) => {
                          this.dialog.notificationIcons = e;
                        })
                      : (0, T.Ld)()
                  )
                  .then(() => (0, T.gw)(this.options.showLauncherAfter || 0))
                  .then(() => this.launcher.show())
                  .then(() => (0, T.gw)(this.options.showBadgeAfter || 0))
                  .then(() =>
                    this.options.prenotify && !e && sn._isNewVisitor
                      ? this.message
                          .enqueue(this.options.text["message.prenotify"])
                          .then(() => this.badge.show())
                      : (0, T.Ld)()
                  )
                  .then(() => (this.initialized = !0));
            });
          }
          patchSafariSvgFilterBug() {
            if (
              !(
                "safari" == (0, l.M)().name && Number((0, l.M)().version) >= 9.1
              )
            ) {
              const e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
                t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
              this.graphic.setAttribute(
                "style",
                `filter: ${e}; -webkit-filter: ${e};`
              ),
                this.badge.element.setAttribute(
                  "style",
                  `filter: ${t}; -webkit-filter: ${t};`
                ),
                this.dialog.element.setAttribute(
                  "style",
                  `filter: ${i}; -webkit-filter: ${i};`
                );
            }
            "safari" == (0, l.M)().name &&
              this.badge.element.setAttribute("style", "display: none;");
          }
          applyOffsetIfSpecified() {
            const e = this.options.offset;
            if (e) {
              const t = this.launcher.element;
              if (!t) return void C.Z.error("Could not find bell dom element");
              (t.style.cssText = ""),
                e.bottom && (t.style.cssText += `bottom: ${e.bottom};`),
                "bottom-right" === this.options.position
                  ? e.right && (t.style.cssText += `right: ${e.right};`)
                  : "bottom-left" === this.options.position &&
                    e.left &&
                    (t.style.cssText += `left: ${e.left};`);
            }
          }
          setCustomColorsIfSpecified() {
            const e = this.dialog.element.querySelector("button.action"),
              t = this.button.element.querySelector(".pulse-ring");
            this.graphic.querySelector(".background").style.cssText = "";
            const i = this.graphic.querySelectorAll(".foreground");
            for (let e = 0; e < i.length; e++) {
              i[e].style.cssText = "";
            }
            if (
              ((this.graphic.querySelector(".stroke").style.cssText = ""),
              (this.badge.element.style.cssText = ""),
              e && ((e.style.cssText = ""), (e.style.cssText = "")),
              t && (t.style.cssText = ""),
              this.options.colors)
            ) {
              const i = this.options.colors;
              if (
                (i["circle.background"] &&
                  (this.graphic.querySelector(
                    ".background"
                  ).style.cssText += `fill: ${i["circle.background"]}`),
                i["circle.foreground"])
              ) {
                const e = this.graphic.querySelectorAll(".foreground");
                for (let t = 0; t < e.length; t++) {
                  e[t].style.cssText += `fill: ${i["circle.foreground"]}`;
                }
                this.graphic.querySelector(
                  ".stroke"
                ).style.cssText += `stroke: ${i["circle.foreground"]}`;
              }
              i["badge.background"] &&
                (this.badge.element.style.cssText += `background: ${i["badge.background"]}`),
                i["badge.bordercolor"] &&
                  (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`),
                i["badge.foreground"] &&
                  (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`),
                e &&
                  (i["dialog.button.background"] &&
                    (this.dialog.element.querySelector(
                      "button.action"
                    ).style.cssText += `background: ${i["dialog.button.background"]}`),
                  i["dialog.button.foreground"] &&
                    (this.dialog.element.querySelector(
                      "button.action"
                    ).style.cssText += `color: ${i["dialog.button.foreground"]}`),
                  i["dialog.button.background.hovering"] &&
                    this.addCssToHead(
                      "onesignal-background-hover-style",
                      `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`
                    ),
                  i["dialog.button.background.active"] &&
                    this.addCssToHead(
                      "onesignal-background-active-style",
                      `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`
                    )),
                t &&
                  i["pulse.color"] &&
                  (this.button.element.querySelector(
                    ".pulse-ring"
                  ).style.cssText = `border-color: ${i["pulse.color"]}`);
            }
          }
          addCssToHead(e, t) {
            if (document.getElementById(e)) return;
            const i = document.createElement("style");
            (i.id = e),
              (i.type = "text/css"),
              i.appendChild(document.createTextNode(t)),
              document.head.appendChild(i);
          }
          updateState() {
            Promise.all([
              sn.context.subscriptionManager.isPushNotificationsEnabled(),
              sn.context.permissionManager.getPermissionStatus(),
            ])
              .then(([e, t]) => {
                this.setState(
                  e ? Ei.STATES.SUBSCRIBED : Ei.STATES.UNSUBSCRIBED
                ),
                  t === Bt.Denied && this.setState(Ei.STATES.BLOCKED);
              })
              .catch((e) => {
                C.Z.error(e);
              });
          }
          setState(e, t = !1) {
            const i = this.state;
            (this.state = e),
              i === e ||
                t ||
                be.Z.trigger(Ei.EVENTS.STATE_CHANGED, { from: i, to: e });
          }
          get container() {
            return document.querySelector("#onesignal-bell-container");
          }
          get graphic() {
            return this.button.element.querySelector("svg");
          }
          get launcher() {
            return (
              this._launcher || (this._launcher = new Oi(this)), this._launcher
            );
          }
          get button() {
            return this._button || (this._button = new wi(this)), this._button;
          }
          get badge() {
            return this._badge || (this._badge = new Si()), this._badge;
          }
          get message() {
            return (
              this._message || (this._message = new yi(this)), this._message
            );
          }
          get dialog() {
            return this._dialog || (this._dialog = new Ii(this)), this._dialog;
          }
          get subscribed() {
            return this.state === Ei.STATES.SUBSCRIBED;
          }
          get unsubscribed() {
            return this.state === Ei.STATES.UNSUBSCRIBED;
          }
          get blocked() {
            return this.state === Ei.STATES.BLOCKED;
          }
        }
        class Ci {
          static internalInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.debug("Called internalInit()"),
                yield OneSignal.context.serviceWorkerManager.installWorker();
              const e = OneSignal.context.sessionManager;
              OneSignal.emitter.on(
                OneSignal.EVENTS.SESSION_STARTED,
                e.sendOnSessionUpdateFromPage.bind(e)
              ),
                OneSignal.context.pageViewManager.incrementPageViewCount(),
                "visible" === document.visibilityState
                  ? yield Ci.sessionInit()
                  : Ci.postponeSessionInitUntilPageIsInFocus();
            });
          }
          static postponeSessionInitUntilPageIsInFocus() {
            (0, T.IH)(
              document,
              "visibilitychange",
              (e, t) => {
                "visible" === document.visibilityState &&
                  (t(), Ci.sessionInit());
              },
              !0
            );
          }
          static sessionInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (C.Z.debug("Called sessionInit()"),
                OneSignal._sessionInitAlreadyRunning)
              )
                return void C.Z.debug(
                  "Returning from sessionInit because it has already been called."
                );
              OneSignal._sessionInitAlreadyRunning = !0;
              try {
                yield Ci.doInitialize();
              } catch (e) {
                if (e instanceof SdkInitError) return;
                throw e;
              }
              const e =
                  yield OneSignal.context.subscriptionManager.isOptedOut(),
                t = yield ve.ZP.getSubscription();
              (t.optedOut = e),
                yield ve.ZP.setSubscription(t),
                yield Ci.handleAutoResubscribe(e);
              const i =
                yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
              yield ve.ZP.setIsPushEnabled(!!i),
                OneSignal.config.userConfig.promptOptions.autoPrompt &&
                  !e &&
                  OneSignal.context.promptsManager.spawnAutoPrompts(),
                (OneSignal._sessionInitAlreadyRunning = !1),
                yield be.Z.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
            });
          }
          static registerForPushNotifications() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield fi.registerForPush();
            });
          }
          static onSdkInitialized() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield Ci.processExpiringSubscriptions();
              (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
                ? (OneSignal.context.sessionManager.setupSessionEventListeners(),
                  e ||
                    (yield OneSignal.context.updateManager.sendOnSessionUpdate()))
                : OneSignal.config.userConfig.promptOptions.autoPrompt ||
                  OneSignal.config.userConfig.autoResubscribe ||
                  (yield OneSignal.context.updateManager.sendOnSessionUpdate()),
                yield be.Z.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC);
            });
          }
          static storeInitialValues() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                  yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled(),
                t =
                  yield OneSignal.context.permissionManager.getPermissionStatus(),
                i = yield OneSignal.context.subscriptionManager.isOptedOut();
              gt.put("subscription.optedOut", i),
                yield ve.ZP.put("Options", { key: "isPushEnabled", value: e }),
                yield ve.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                });
            });
          }
          static setWelcomeNotificationFlag() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (yield OneSignal.context.permissionManager.getNotificationPermission(
                OneSignal.context.appConfig.safariWebId
              )) === Bt.Granted &&
                (OneSignal.__doNotShowWelcomeNotification = !0);
            });
          }
          static establishServiceWorkerChannel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (navigator.serviceWorker && window.isSecureContext)
                try {
                  yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel();
                } catch (e) {
                  C.Z.error(e);
                }
            });
          }
          static processExpiringSubscriptions() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.context;
              C.Z.debug("Checking subscription expiration...");
              if (!(yield e.subscriptionManager.isSubscriptionExpiring()))
                return C.Z.debug("Subscription is not considered expired."), !1;
              C.Z.debug("Subscription is considered expiring.");
              const t = yield e.subscriptionManager.subscribe(1);
              return yield e.subscriptionManager.registerSubscription(t), !0;
            });
          }
          static doInitialize() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = [];
              e.push(Ci.storeInitialValues()),
                e.push(Ci.installNativePromptPermissionChangedHook()),
                e.push(Ci.setWelcomeNotificationFlag()),
                e.push(Ci.establishServiceWorkerChannel()),
                e.push(Ci.showNotifyButton()),
                e.push(Ci.showPromptsFromWebConfigEditor());
              try {
                yield Promise.all(e);
              } catch (e) {
                throw (C.Z.error(e), new SdkInitError(M.Unknown));
              }
            });
          }
          static showNotifyButton() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (S.Z.isBrowser() && !OneSignal.notifyButton) {
                (OneSignal.config.userConfig.notifyButton =
                  OneSignal.config.userConfig.notifyButton || {}),
                  OneSignal.config.userConfig.bell &&
                    ((OneSignal.config.userConfig.bell = Object.assign(
                      Object.assign({}, OneSignal.config.userConfig.bell),
                      OneSignal.config.userConfig.notifyButton
                    )),
                    (OneSignal.config.userConfig.notifyButton = Object.assign(
                      Object.assign(
                        {},
                        OneSignal.config.userConfig.notifyButton
                      ),
                      OneSignal.config.userConfig.bell
                    )));
                const e =
                  OneSignal.config.userConfig.notifyButton.displayPredicate;
                e && "function" == typeof e
                  ? OneSignal.emitter.once(
                      OneSignal.EVENTS.SDK_INITIALIZED,
                      () =>
                        (0, o.mG)(this, void 0, void 0, function* () {
                          !1 !==
                          (yield Promise.resolve(
                            OneSignal.config.userConfig.notifyButton.displayPredicate()
                          ))
                            ? ((OneSignal.notifyButton = new Ei(
                                OneSignal.config.userConfig.notifyButton
                              )),
                              OneSignal.notifyButton.create())
                            : C.Z.debug(
                                "Notify button display predicate returned false so not showing the notify button."
                              );
                        })
                    )
                  : ((OneSignal.notifyButton = new Ei(
                      OneSignal.config.userConfig.notifyButton
                    )),
                    OneSignal.notifyButton.create());
              }
            });
          }
          static showPromptsFromWebConfigEditor() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.config;
              e.userConfig.promptOptions &&
                (yield new ht(
                  e.userConfig.promptOptions.customlink
                ).initialize());
            });
          }
          static installNativePromptPermissionChangedHook() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                if (navigator.permissions) {
                  (yield navigator.permissions.query({
                    name: "notifications",
                  })).onchange = function () {
                    (0, T.bJ)();
                  };
                }
              } catch (e) {
                C.Z.warn(
                  `Could not install native notification permission change hook w/ error: ${e}`
                );
              }
            });
          }
          static saveInitOptions() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = [],
                t = OneSignal.config.userConfig.persistNotification;
              e.push(
                ve.ZP.put("Options", {
                  key: "persistNotification",
                  value: null == t || t,
                })
              );
              const i = OneSignal.config.userConfig.webhooks;
              return (
                [
                  "notification.willDisplay",
                  "notification.clicked",
                  "notification.dismissed",
                ].forEach((t) => {
                  i && i[t]
                    ? e.push(
                        ve.ZP.put("Options", {
                          key: `webhooks.${t}`,
                          value: i[t],
                        })
                      )
                    : e.push(
                        ve.ZP.put("Options", {
                          key: `webhooks.${t}`,
                          value: !1,
                        })
                      );
                }),
                i && i.cors
                  ? e.push(
                      ve.ZP.put("Options", { key: "webhooks.cors", value: !0 })
                    )
                  : e.push(
                      ve.ZP.put("Options", { key: "webhooks.cors", value: !1 })
                    ),
                OneSignal.config.userConfig.notificationClickHandlerMatch
                  ? e.push(
                      ve.ZP.put("Options", {
                        key: "notificationClickHandlerMatch",
                        value:
                          OneSignal.config.userConfig
                            .notificationClickHandlerMatch,
                      })
                    )
                  : e.push(
                      ve.ZP.put("Options", {
                        key: "notificationClickHandlerMatch",
                        value: "exact",
                      })
                    ),
                OneSignal.config.userConfig.notificationClickHandlerAction
                  ? e.push(
                      ve.ZP.put("Options", {
                        key: "notificationClickHandlerAction",
                        value:
                          OneSignal.config.userConfig
                            .notificationClickHandlerAction,
                      })
                    )
                  : e.push(
                      ve.ZP.put("Options", {
                        key: "notificationClickHandlerAction",
                        value: "navigate",
                      })
                    ),
                Promise.all(e)
              );
            });
          }
          static initSaveState(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield wt.getAppId(),
                i = OneSignal.config;
              yield ve.ZP.put("Ids", { type: "appId", id: t });
              const n = e || i.siteName || document.title || "Notification";
              yield ve.ZP.put("Options", { key: "pageTitle", value: n }),
                C.Z.info(`OneSignal: Set pageTitle to be '${n}'.`);
            });
          }
          static handleAutoResubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (C.Z.info("handleAutoResubscribe", {
                  autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
                  isOptedOut: e,
                }),
                OneSignal.config.userConfig.autoResubscribe && !e)
              ) {
                (yield OneSignal.context.permissionManager.getNotificationPermission(
                  OneSignal.context.appConfig.safariWebId
                )) == Bt.Granted && (yield fi.registerForPush());
              }
            });
          }
          static polyfillSafariFetch() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if ("safari" == (0, l.M)().name && void 0 === window.fetch) {
                C.Z.debug("Loading fetch polyfill for Safari..");
                try {
                  yield new ce().loadFetchPolyfill(),
                    C.Z.debug("Done loading fetch polyfill.");
                } catch (e) {
                  C.Z.debug("Error loading fetch polyfill:", e);
                }
              }
            });
          }
          static errorIfInitAlreadyCalled() {
            if (OneSignal._initCalled)
              throw new SdkInitError(M.MultipleInitialization);
            OneSignal._initCalled = !0;
          }
        }
        class Pi {
          constructor(e) {
            (this.context = e),
              (this.slidedownQueue = []),
              (this.isSlidedownShowing = !1);
          }
          checkIfSlidedownShouldBeShown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              const i =
                (yield OneSignal.context.permissionManager.getPermissionStatus()) ===
                Bt.Denied;
              let n;
              const o =
                  yield OneSignal.context.subscriptionManager.getSubscriptionState(),
                { subscribed: s, optedOut: r } = o,
                a =
                  null === (t = e.slidedownPromptOptions) || void 0 === t
                    ? void 0
                    : t.type;
              let l = !1;
              if ((a && (l = Y.isSlidedownPushDependent(a)), l)) {
                if (s)
                  return (
                    !!e.isInUpdateMode ||
                    (C.Z.info(new AlreadySubscribedError()), !1)
                  );
                if (((n = mi.wasPromptOfTypeDismissed(oi.Push)), r))
                  throw new NotSubscribedError(vt.OptedOut);
                if (i)
                  return (
                    C.Z.info(new PushPermissionNotGrantedError(Rt.Blocked)), !1
                  );
              } else {
                if (!e.force) {
                  const e = yield OneSignal.coreDirector.hasSms(),
                    t = yield OneSignal.coreDirector.hasEmail(),
                    i = e && t;
                  if (e && a === B.Sms) return C.Z.info(new ui(B.Sms)), !1;
                  if (t && a === B.Email) return C.Z.info(new ui(B.Email)), !1;
                  if (i && a === B.SmsAndEmail)
                    return C.Z.info(new ui(B.SmsAndEmail)), !1;
                }
                n = mi.wasPromptOfTypeDismissed(oi.NonPush);
              }
              return (
                !(n && !e.force && !e.isInUpdateMode) ||
                (C.Z.info(new PermissionMessageDismissedError(a)), !1)
              );
            });
          }
          registerForPush() {
            Ci.registerForPushNotifications();
          }
          handleAllowForCategoryType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: handleAllowForCategoryType: this.slidedown is undefined"
                );
              const e = ei.getValuesFromTaggingContainer();
              this.context.tagManager.storeTagValuesToUpdate(e),
                this.registerForPush(),
                yield this.context.tagManager.sendTags(!0);
            });
          }
          handleAllowForEmailType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i;
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: handleAllowForEmailType: this.slidedown is undefined"
                );
              const n =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.emailInputFieldIsValid,
                o =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.isEmailInputFieldEmpty();
              if (!n || o) throw new li(ni.InvalidEmail);
              const s =
                null === (i = this.slidedown.channelCaptureContainer) ||
                void 0 === i
                  ? void 0
                  : i.getValueFromEmailInput();
              this.updateEmail(s);
            });
          }
          handleAllowForSmsType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i;
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: handleAllowForSmsType: this.slidedown is undefined"
                );
              const n =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.smsInputFieldIsValid,
                o =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.isSmsInputFieldEmpty();
              if (!n || o) throw new li(ni.InvalidSms);
              const s =
                null === (i = this.slidedown.channelCaptureContainer) ||
                void 0 === i
                  ? void 0
                  : i.getValueFromSmsInput();
              this.updateSMS(s);
            });
          }
          handleAllowForSmsAndEmailType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i, n, o, s;
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: handleAllowForSmsAndEmailType: this.slidedown is undefined"
                );
              const r =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.smsInputFieldIsValid,
                a =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.emailInputFieldIsValid,
                l =
                  null === (i = this.slidedown.channelCaptureContainer) ||
                  void 0 === i
                    ? void 0
                    : i.isEmailInputFieldEmpty(),
                d =
                  null === (n = this.slidedown.channelCaptureContainer) ||
                  void 0 === n
                    ? void 0
                    : n.isSmsInputFieldEmpty();
              if ((!r && !a) || (l && d)) throw new li(ni.InvalidEmailAndSms);
              const c =
                  null === (o = this.slidedown.channelCaptureContainer) ||
                  void 0 === o
                    ? void 0
                    : o.getValueFromEmailInput(),
                u =
                  null === (s = this.slidedown.channelCaptureContainer) ||
                  void 0 === s
                    ? void 0
                    : s.getValueFromSmsInput();
              if (!a) throw new li(ni.InvalidEmail);
              if ((l || this.updateEmail(c), !r)) throw new li(ni.InvalidSms);
              d || this.updateSMS(u);
            });
          }
          updateEmail(e) {
            e && OneSignal.User.addEmail(e);
          }
          updateSMS(e) {
            e && OneSignal.User.addSms(e);
          }
          showConfirmationToast() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: showConfirmationToast: this.slidedown is undefined"
                );
              const e = this.slidedown.options.text.confirmMessage;
              if (!e) return;
              yield P(1e3);
              const t = new ci(e);
              yield t.show(),
                yield P(5e3),
                t.close(),
                ci.triggerSlidedownEvent(ci.EVENTS.CLOSED);
            });
          }
          mountAuxiliaryContainers(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              switch (
                null === (t = e.slidedownPromptOptions) || void 0 === t
                  ? void 0
                  : t.type
              ) {
                case B.Category:
                  this.mountTaggingContainer(e);
                  break;
                case B.Email:
                case B.Sms:
                case B.SmsAndEmail:
                  yield this.mountChannelCaptureContainer(e);
              }
            });
          }
          mountTaggingContainer(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              v.Q.logMethodCall("mountTaggingContainer");
              try {
                let i = {};
                const n = new ei(),
                  o =
                    null === (t = e.slidedownPromptOptions) || void 0 === t
                      ? void 0
                      : t.categories;
                if (!o) throw new Error("Categories not defined");
                const s = OneSignal.coreDirector.getPropertiesModel(),
                  r = null == s ? void 0 : s.data.tags;
                e.isInUpdateMode && r
                  ? (this.context.tagManager.storeRemotePlayerTags(r),
                    (i = J.convertTagsApiToBooleans(r)))
                  : J.markAllTagsAsSpecified(o, !0),
                  n.mount(o, i);
              } catch (e) {
                C.Z.error(
                  "OneSignal: Attempted to create tagging container with error",
                  e
                );
              }
            });
          }
          mountChannelCaptureContainer(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Q.logMethodCall("mountChannelCaptureContainer");
              try {
                if (e.slidedownPromptOptions) {
                  const t = new ai(e.slidedownPromptOptions);
                  t.mount(),
                    this.slidedown &&
                      (this.slidedown.channelCaptureContainer = t);
                }
              } catch (e) {
                C.Z.error(
                  "OneSignal: Attempted to create channel capture container with error",
                  e
                );
              }
            });
          }
          handleAllowClick() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new O.Z(
                  "SlidedownManager: handleAllowClick: this.slidedown is undefined"
                );
              const e = this.slidedown.options.type;
              this.slidedown.isShowingFailureState &&
                this.slidedown.removeFailureState();
              try {
                switch (e) {
                  case B.Push:
                    this.registerForPush();
                    break;
                  case B.Category:
                    yield this.handleAllowForCategoryType();
                    break;
                  case B.Email:
                    yield this.handleAllowForEmailType();
                    break;
                  case B.Sms:
                    yield this.handleAllowForSmsType();
                    break;
                  case B.SmsAndEmail:
                    yield this.handleAllowForSmsAndEmailType();
                }
              } catch (e) {
                return (
                  C.Z.warn("OneSignal Slidedown failed to update:", e),
                  this.slidedown.removeSaveState(),
                  this.slidedown.setFailureState(),
                  void (
                    void 0 !== e.reason &&
                    this.slidedown.setFailureStateForInvalidChannelInput(
                      e.reason
                    )
                  )
                );
              }
              switch (
                (this.slidedown &&
                  (this.slidedown.close(),
                  Y.isSlidedownPushDependent(e) ||
                    (yield this.showConfirmationToast()),
                  yield P(1e3),
                  di.triggerSlidedownEvent(di.EVENTS.CLOSED)),
                e)
              ) {
                case B.Push:
                case B.Category:
                  C.Z.debug(
                    "Setting flag to not show the slidedown to the user again."
                  ),
                    mi.markPromptDismissedWithType(oi.Push);
                  break;
                default:
                  C.Z.debug(
                    "Setting flag to not show the slidedown to the user again."
                  ),
                    mi.markPromptDismissedWithType(oi.NonPush);
              }
            });
          }
          setIsSlidedownShowing(e) {
            this.isSlidedownShowing = e;
          }
          showQueued() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (this.slidedownQueue.length > 0) {
                const e = this.dequeue();
                e && (yield this.createSlidedown(e));
              }
            });
          }
          enqueue(e) {
            this.slidedownQueue.push(e),
              di.triggerSlidedownEvent(di.EVENTS.QUEUED);
          }
          dequeue() {
            return this.slidedownQueue.shift();
          }
          createSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              v.Q.logMethodCall("createSlidedown");
              try {
                if (!(yield this.checkIfSlidedownShouldBeShown(e))) return;
              } catch (e) {
                return void C.Z.warn(
                  "checkIfSlidedownShouldBeShown returned an error",
                  e
                );
              }
              if (
                ((function () {
                  const e = OneSignal.notifyButton;
                  e &&
                    e.options.enable &&
                    "hidden" !== OneSignal.notifyButton.launcher.state &&
                    OneSignal.notifyButton.launcher
                      .waitUntilShown()
                      .then(() => {
                        OneSignal.notifyButton.launcher.hide();
                      }),
                    OneSignal.emitter.once(di.EVENTS.CLOSED, () => {
                      OneSignal.notifyButton &&
                        OneSignal.notifyButton.options.enable &&
                        OneSignal.notifyButton.launcher.show();
                    });
                })(),
                this.isSlidedownShowing)
              )
                this.enqueue(e);
              else
                try {
                  this.setIsSlidedownShowing(!0);
                  const t = e.slidedownPromptOptions || z;
                  (this.slidedown = new di(t)),
                    yield this.slidedown.create(e.isInUpdateMode),
                    yield this.mountAuxiliaryContainers(e),
                    C.Z.debug("Showing OneSignal Slidedown"),
                    di.triggerSlidedownEvent(di.EVENTS.SHOWN);
                } catch (e) {
                  C.Z.error(
                    "There was an error showing the OneSignal Slidedown:",
                    e
                  ),
                    this.setIsSlidedownShowing(!1),
                    null === (t = this.slidedown) || void 0 === t || t.close();
                }
            });
          }
        }
        class Ti {
          constructor(e) {
            (this.isNativePromptShowing = !1),
              (this.context = e),
              (this.eventHooksInstalled = !1);
          }
          shouldForceSlidedownOverNative() {
            const { environmentInfo: e } = OneSignal,
              {
                browserType: t,
                browserVersion: i,
                requiresUserInteraction: n,
              } = e;
            return (
              ("chrome" === t &&
                Number(i) >= 63 &&
                ((0, l.M)().tablet || (0, l.M)().mobile)) ||
              n
            );
          }
          spawnAutoPrompts() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              const i = OneSignal.config.userConfig.promptOptions,
                n = this.shouldForceSlidedownOverNative(),
                o = this.getDelayedPromptOptions(i, B.Native),
                s = this.isPageViewConditionMet(o),
                r = o.enabled && s,
                a = n && r;
              if (r && !a)
                return void this.internalShowDelayedPrompt(
                  B.Native,
                  o.timeDelay || 0
                );
              const l = !!Y.getFirstSlidedownPromptOptionsWithType(
                null === (e = i.slidedown) || void 0 === e ? void 0 : e.prompts,
                B.Push
              );
              a &&
                !l &&
                this.internalShowDelayedPrompt(B.Push, o.timeDelay || 0);
              const d =
                null === (t = i.slidedown) || void 0 === t ? void 0 : t.prompts;
              if (d && (null == d ? void 0 : d.length) > 0)
                for (let e = 0; e < d.length; e++) {
                  const t = d[e],
                    n = this.getDelayedPromptOptions(i, t.type),
                    o = this.isPageViewConditionMet(n),
                    s = { slidedownPromptOptions: t };
                  n.enabled &&
                    o &&
                    this.internalShowDelayedPrompt(t.type, n.timeDelay || 0, s);
                }
            });
          }
          internalShowDelayedPrompt(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (v.Z.logMethodCall("internalShowDelayedPrompt"),
                "number" != typeof t)
              )
                return void C.Z.error(
                  "internalShowDelayedPrompt: timeDelay not a number"
                );
              const { requiresUserInteraction: n } = d.getEnvironmentInfo();
              switch (
                (n && e === B.Native && (e = B.Push),
                t > 0 && (yield P(1e3 * t)),
                e)
              ) {
                case B.Native:
                  yield this.internalShowNativePrompt();
                  break;
                case B.Push:
                  yield this.internalShowSlidedownPrompt(i);
                  break;
                case B.Category:
                  yield this.internalShowCategorySlidedown(i);
                  break;
                case B.Sms:
                  yield this.internalShowSmsSlidedown(i);
                  break;
                case B.Email:
                  yield this.internalShowEmailSlidedown(i);
                  break;
                case B.SmsAndEmail:
                  yield this.internalShowSmsAndEmailSlidedown(i);
                  break;
                default:
                  C.Z.error("Invalid Delayed Prompt type");
              }
            });
          }
          internalShowNativePrompt() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowNativePrompt"),
                this.isNativePromptShowing
                  ? C.Z.debug(
                      "Already showing autoprompt. Abort showing a native prompt."
                    )
                  : ((this.isNativePromptShowing = !0),
                    yield Ci.registerForPushNotifications(),
                    (this.isNativePromptShowing = !1),
                    mi.markPromptDismissedWithType(oi.Push));
            });
          }
          internalShowSlidedownPrompt(e = { force: !1 }) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowSlidedownPrompt"),
                e.slidedownPromptOptions || (e.slidedownPromptOptions = z);
              0 ===
              (yield this.context.dynamicResourceLoader.loadSdkStylesheet())
                ? (this.eventHooksInstalled ||
                    this.installEventHooksForSlidedown(),
                  yield this.context.slidedownManager.createSlidedown(e))
                : C.Z.debug(
                    "Not showing slidedown permission message because styles failed to load."
                  );
            });
          }
          internalShowCategorySlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowCategorySlidedown"),
                yield this.internalShowParticularSlidedown(B.Category, e);
            });
          }
          internalShowSmsSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowSmsSlidedown"),
                yield this.internalShowParticularSlidedown(B.Sms, e);
            });
          }
          internalShowEmailSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowEmailSlidedown"),
                yield this.internalShowParticularSlidedown(B.Email, e);
            });
          }
          internalShowSmsAndEmailSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              v.Z.logMethodCall("internalShowSmsAndEmailSlidedown"),
                yield this.internalShowParticularSlidedown(B.SmsAndEmail, e);
            });
          }
          internalShowParticularSlidedown(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n;
              const o =
                  null ===
                    (n =
                      null ===
                        (i = this.context.appConfig.userConfig.promptOptions) ||
                      void 0 === i
                        ? void 0
                        : i.slidedown) || void 0 === n
                    ? void 0
                    : n.prompts,
                s =
                  (null == t ? void 0 : t.slidedownPromptOptions) ||
                  Y.getFirstSlidedownPromptOptionsWithType(o, e);
              if (!s) {
                if (e !== B.Push)
                  return void C.Z.error(
                    `OneSignal: slidedown of type '${e}' couldn't be shown. Check your configuration on the OneSignal dashboard or your custom code initialization.`
                  );
                C.Z.warn(
                  "The OneSignal 'push' slidedown will be shown with default text settings. To customize, see the OneSignal documentation."
                );
              }
              yield this.internalShowSlidedownPrompt(
                Object.assign(Object.assign({}, t), {
                  slidedownPromptOptions: s,
                })
              );
            });
          }
          installEventHooksForSlidedown() {
            (this.eventHooksInstalled = !0),
              OneSignal.emitter.on(di.EVENTS.SHOWN, () => {
                this.context.slidedownManager.setIsSlidedownShowing(!0);
              }),
              OneSignal.emitter.on(di.EVENTS.CLOSED, () => {
                this.context.slidedownManager.setIsSlidedownShowing(!1),
                  this.context.slidedownManager.showQueued();
              }),
              OneSignal.emitter.on(di.EVENTS.ALLOW_CLICK, () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  yield this.context.slidedownManager.handleAllowClick(),
                    be.Z.trigger(
                      OneSignal.EVENTS.TEST_FINISHED_ALLOW_CLICK_HANDLING
                    );
                })
              ),
              OneSignal.emitter.on(di.EVENTS.CANCEL_CLICK, () => {
                var e;
                if (!this.context.slidedownManager.slidedown) return;
                switch (
                  null === (e = this.context.slidedownManager.slidedown) ||
                  void 0 === e
                    ? void 0
                    : e.options.type
                ) {
                  case B.Push:
                  case B.Category:
                    C.Z.debug(
                      "Setting flag to not show the slidedown to the user again."
                    ),
                      mi.markPromptDismissedWithType(oi.Push);
                    break;
                  default:
                    C.Z.debug(
                      "Setting flag to not show the slidedown to the user again."
                    ),
                      mi.markPromptDismissedWithType(oi.NonPush);
                }
              });
          }
          isPageViewConditionMet(e) {
            if (!e || void 0 === e.pageViews) return !1;
            if (!e.autoPrompt || !e.enabled) return !1;
            return (
              this.context.pageViewManager.getLocalPageViewCount() >=
              e.pageViews
            );
          }
          getDelayedPromptOptions(e, t) {
            var i, n, o, s;
            const r = {
              enabled: !1,
              autoPrompt: !1,
              timeDelay: V.timeDelay,
              pageViews: V.pageViews,
            };
            if (!e || !e.native || !e.slidedown) return r;
            switch (t) {
              case B.Native: {
                const t = e.native;
                return {
                  enabled: null == t ? void 0 : t.enabled,
                  autoPrompt: null == t ? void 0 : t.autoPrompt,
                  timeDelay: null == t ? void 0 : t.timeDelay,
                  pageViews: null == t ? void 0 : t.pageViews,
                };
              }
              case B.Push:
              case B.Category:
              case B.Email:
              case B.Sms:
              case B.SmsAndEmail: {
                const { userConfig: e } = this.context.appConfig,
                  r = Y.getFirstSlidedownPromptOptionsWithType(
                    (null ===
                      (n =
                        null === (i = e.promptOptions) || void 0 === i
                          ? void 0
                          : i.slidedown) || void 0 === n
                      ? void 0
                      : n.prompts) || [],
                    t
                  );
                return {
                  enabled: !!r,
                  autoPrompt: !!(null == r ? void 0 : r.autoPrompt),
                  timeDelay:
                    null === (o = null == r ? void 0 : r.delay) || void 0 === o
                      ? void 0
                      : o.timeDelay,
                  pageViews:
                    null === (s = null == r ? void 0 : r.delay) || void 0 === s
                      ? void 0
                      : s.pageViews,
                };
              }
              default:
                return r;
            }
          }
        }
        class ki {
          constructor(e) {
            (this.appConfig = e),
              "undefined" != typeof OneSignal &&
                OneSignal.environmentInfo &&
                (this.environmentInfo = OneSignal.environmentInfo),
              (this.subscriptionManager = Kt.getSubscriptionManager(this)),
              (this.serviceWorkerManager = Kt.getServiceWorkerManager(this)),
              (this.pageViewManager = new pe()),
              (this.permissionManager = new me()),
              (this.workerMessenger = new de(this)),
              (this.updateManager = new zt(this)),
              (this.sessionManager = new Jt(this)),
              (this.tagManager = new Yt(this)),
              (this.slidedownManager = new Pi(this)),
              (this.promptsManager = new Ti(this)),
              (this.dynamicResourceLoader = new ce());
          }
        }
        class xi {
          static processItem(e, t) {
            if ("function" != typeof t)
              throw new O.Z("Only accepts function type!");
            t(e);
          }
        }
        class Ni extends Ut {
          constructor(e) {
            super(),
              (this._permissionNative = e),
              (this._permission = e === Bt.Granted),
              sn.emitter.on(
                sn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                (e) => {
                  (this._permissionNative = e),
                    (this._permission = e === Bt.Granted);
                }
              );
          }
          get permissionNative() {
            return this._permissionNative;
          }
          get permission() {
            return this._permission;
          }
          setDefaultUrl(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, T.tI)("setDefaultUrl", e), void 0 === e))
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.WrongType
                );
              if (!yt.isValidUrl(e, { allowNull: !0 }))
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.Malformed
                );
              yield (0, T.JX)(), (0, T.tI)("setDefaultNotificationUrl", e);
              const t = yield ve.ZP.getAppState();
              (t.defaultNotificationUrl = e), yield ve.ZP.setAppState(t);
            });
          }
          setDefaultTitle(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, T.tI)("setDefaultTitle", e), void 0 === e))
                throw new InvalidArgumentError.R(
                  "title",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "title",
                  InvalidArgumentError.Q.WrongType
                );
              yield (0, T.JX)();
              const t = yield ve.ZP.getAppState();
              (t.defaultNotificationTitle = e), yield ve.ZP.setAppState(t);
            });
          }
          isPushSupported() {
            return (0, T.tI)("isPushNotificationsSupported"), !0;
          }
          requestPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, T.JX)(),
                yield sn.context.promptsManager.internalShowNativePrompt();
            });
          }
          addEventListener(e, t) {
            sn.emitter.on(e, t),
              "click" === e && Wt.fireStoredNotificationClicks();
          }
          removeEventListener(e, t) {
            sn.emitter.off(e, t);
          }
        }
        class Ai {
          constructor() {
            (this._mutexPromise = Promise.resolve()), (this._mutexLocked = !1);
          }
          add(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("ModelCache.add", { modelName: e, model: t });
              const i = t.encode(),
                n = Object.assign({}, i);
              yield ve.ZP.put(e, n);
            });
          }
          remove(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("ModelCache.remove", { modelName: e, modelId: t }),
                yield ve.ZP.remove(e, t);
            });
          }
          update(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              this._mutexLocked && (yield this._mutexPromise),
                (this._mutexLocked = !0),
                (this._mutexPromise = new Promise((s, r) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    (0,
                    T.tI)("ModelCache.update", { modelName: e, modelId: t, key: i, value: n });
                    const o = yield this.get(e, t);
                    o ||
                      r(
                        "ModelCache: Attempting to update a model that does not exist"
                      ),
                      o &&
                        ((o[i] = n),
                        yield ve.ZP.put(e, o),
                        (this._mutexLocked = !1),
                        s()),
                      setTimeout(
                        r.bind(this, "Database promise never resolved."),
                        1e4
                      );
                  })
                ));
            });
          }
          load(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("ModelCache.load", { modelNames: e });
              const t = {};
              for (let i = 0; i < e.length; i++) {
                const n = e[i],
                  o = yield this.getAndDecodeModelsWithModelName(n);
                o && (t[n] = o);
              }
              return t;
            });
          }
          get(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("ModelCache.get", { modelName: e, modelId: t });
              try {
                return yield this._mutexPromise, yield ve.ZP.get(e, t);
              } catch (e) {
                return;
              }
            });
          }
          getCachedEncodedModels(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (0, T.tI)("ModelCache.getCachedEncodedModels", {
                  modelName: e,
                }),
                yield ve.ZP.getAll(e)
              );
            });
          }
          getAndDecodeModelsWithModelName(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              T.tI)("ModelCache.getAndDecodeModelsWithModelName", { modelName: e });
              const t = yield this.getCachedEncodedModels(e);
              if (0 !== Object.keys(t).length) return t.map(kt.decode);
            });
          }
          reset() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("ModelCache.reset");
              const e = [];
              Object.values(xt.Q).forEach((t) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  e.push(ve.ZP.singletonInstance.remove(t));
                })
              ),
                yield Promise.all(e);
            });
          }
        }
        class Mi extends Ot {
          constructor(e, t) {
            super(),
              (this.modelCache = e),
              (this.modelStores = t),
              Object.keys(t).forEach((e) => {
                t[e].subscribe(this.processModelChange.bind(this));
              });
          }
          processModelChange(e) {
            (0, T.tI)("processModelChange", { modelStoreChange: e }),
              e.type === bt.Add && this.processModelAdded(e),
              e.type === bt.Remove && this.processModelRemoved(e),
              e.type === bt.Update && this.processModelUpdated(e),
              e.type === bt.Hydrate && this.processModelHydrated(e);
          }
          processModelAdded(e) {
            (0, T.tI)("processModelAdded", { modelStoreChange: e });
            const { payload: t } = e;
            this.modelCache.add(t.modelName, t),
              this.broadcast({
                model: t,
                changeType: bt.Add,
                applyToRecordId: null == t ? void 0 : t.applyToRecordId,
              });
          }
          processModelRemoved(e) {
            (0, T.tI)("processModelRemoved", { modelStoreChange: e });
            const { modelId: t, payload: i } = e;
            this.modelCache.remove(i.modelName, t),
              this.broadcast({
                model: i,
                changeType: bt.Remove,
                applyToRecordId: null == i ? void 0 : i.applyToRecordId,
              });
          }
          processModelUpdated(e) {
            var t;
            (0, T.tI)("processModelUpdated", { modelStoreChange: e });
            const { modelId: i, payload: n } = e;
            if (
              (this.modelCache.update(
                n.model.modelName,
                i,
                n.property,
                n.newValue
              ),
              n.oldValue !== n.newValue)
            ) {
              const e = {
                model: n.model,
                changeType: bt.Update,
                property: n.property,
                oldValue: n.oldValue,
                newValue: n.newValue,
                applyToRecordId:
                  null === (t = n.model) || void 0 === t
                    ? void 0
                    : t.applyToRecordId,
              };
              this.broadcast(e);
            }
          }
          processModelHydrated(e) {
            (0, T.tI)("processModelHydrated", { modelStoreChange: e });
            const { modelId: t, payload: i } = e;
            this.modelCache.remove(i.modelName, t),
              this.modelCache.add(i.modelName, i);
          }
        }
        Mi.supportedModels = Object.values(xt.Q);
        class Di {
          constructor(e) {
            (this.result = e), (this.success = !0), (this.retriable = !1);
          }
        }
        class _i {
          constructor(e) {
            (this.result = e), (this.success = !1), (this.retriable = !0);
          }
        }
        class Zi {
          constructor(e) {
            (this.result = e), (this.success = !1), (this.retriable = !1);
          }
        }
        function Ui(e) {
          const t = e.model,
            i = null == t ? void 0 : t.data;
          if (!t)
            throw new O.Z(
              `processSubscriptionModel: bad subscription OSModel<SubscriptionModel>: ${JSON.stringify(
                t
              )}`
            );
          if (void 0 === (null == (n = i) ? void 0 : n.type))
            throw new O.Z(
              `processSubscriptionModel: bad subscription object: ${JSON.stringify(
                i
              )}`
            );
          var n;
          if (!t.onesignalId)
            throw new O.Z(
              `processSubscriptionModel: missing onesignalId: ${JSON.stringify(
                t
              )}`
            );
          let o;
          return (
            Dt(i) && (o = null == i ? void 0 : i.id),
            {
              subscription: i,
              aliasPair: new w(w.ONESIGNAL_ID, t.onesignalId),
              subscriptionId: o,
              payload: e.payload,
            }
          );
        }
        function Gi(e) {
          var t;
          const i = null === (t = e.model) || void 0 === t ? void 0 : t.data;
          if (!Mt(i))
            throw new O.Z(
              `processIdentityModel: bad identity object: ${JSON.stringify(i)}`
            );
          const { onesignal_id: n } = i,
            o = JSON.parse(JSON.stringify(i));
          if ((delete o.onesignal_id, !n))
            throw new O.Z(
              `processIdentityModel: missing onesignalId: ${JSON.stringify(i)}`
            );
          return { identity: o, aliasPair: new w(w.ONESIGNAL_ID, n) };
        }
        class Bi {
          static addIdentity(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("addIdentity", e);
              const t = yield wt.getAppId(),
                { identity: i, aliasPair: n } = Gi(e),
                o = yield _.addAlias({ appId: t }, n, i);
              return Bi._processIdentityResponse(o);
            });
          }
          static removeIdentity(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, T.tI)("removeIdentity", e), !e.payload))
                throw new O.Z(
                  "removeIdentity: operation.payload is not defined"
                );
              if (1 !== Object.keys(e.payload).length)
                throw new O.Z(
                  "removeIdentity: operation.payload must have exactly one key"
                );
              const t = yield wt.getAppId(),
                i = Object.keys(e.payload)[0],
                { aliasPair: n } = Gi(e),
                o = yield _.deleteAlias({ appId: t }, n, i);
              return Bi._processIdentityResponse(o);
            });
          }
          static _processIdentityResponse(e) {
            if (!e)
              throw new O.Z("processIdentityResponse: response is not defined");
            const { status: t, result: i } = e,
              { identity: n } = i;
            if (t >= 200 && t < 300) {
              if (!Mt(n))
                throw new O.Z(
                  `processIdentityResponse: result ${n} is not an identity object`
                );
              return new Di(n);
            }
            return t >= 400 && t < 500 ? new Zi() : new _i();
          }
        }
        class Ri {
          static addSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("SubscriptionRequests.addSubscription", e);
              const t = yield wt.getAppId(),
                { subscription: i, aliasPair: n, subscriptionId: o } = Ui(e),
                s = yield _.createSubscription({ appId: t }, n, {
                  subscription: i,
                }),
                r = s.status;
              return (
                r >= 200 &&
                  r < 300 &&
                  OneSignal.coreDirector.getNewRecordsState().add(o),
                Ri._processSubscriptionResponse(s)
              );
            });
          }
          static removeSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("SubscriptionRequests.removeSubscription", e);
              const { subscriptionId: t } = Ui(e);
              if (!t)
                throw new O.Z(
                  "removeSubscription: subscriptionId is not defined"
                );
              const i = yield wt.getAppId(),
                n = yield _.deleteSubscription({ appId: i }, t);
              return Ri._processSubscriptionResponse(n);
            });
          }
          static updateSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("SubscriptionRequests.updateSubscription", e);
              const { payload: t, subscriptionId: i } = Ui(e);
              if (!i)
                throw new O.Z(
                  "updateSubscription: subscriptionId is not defined"
                );
              if (!t)
                throw new O.Z("updateSubscription: payload is not defined");
              const n = yield wt.getAppId(),
                o = yield _.updateSubscription({ appId: n }, i, t);
              return Ri._processSubscriptionResponse(o);
            });
          }
          static _processSubscriptionResponse(e) {
            if (!e)
              throw new Error(
                "processSubscriptionResponse: response is not defined"
              );
            const { status: t, result: i } = e,
              n = i.subscription;
            if (t >= 200 && t < 300) {
              if (n && !Dt(n))
                throw new O.Z(
                  `processSubscriptionResponse: bad subscription object: ${n}`
                );
              return new Di(n);
            }
            return t >= 400 && t < 500 ? new Zi() : new _i();
          }
        }
        class Li {
          static updateUserProperties(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("UserPropertyRequests.updateUserProperties", e);
              const t = e.model,
                i = null == t ? void 0 : t.data;
              if (!i || !t)
                throw new O.Z(`updateUserProperty: bad identity model: ${t}`);
              if (!t.onesignalId)
                return (
                  C.Z.info(
                    "Caching User Property update until subscription is created."
                  ),
                  new Zi()
                );
              const n = new w(w.ONESIGNAL_ID, t.onesignalId),
                o = yield wt.getAppId(),
                s = yield OneSignal.coreDirector.getPushSubscriptionModel();
              let r;
              Dt(null == s ? void 0 : s.data) &&
                (r = null == s ? void 0 : s.data.id);
              const a = yield _.updateUser({ appId: o, subscriptionId: r }, n, {
                properties: i,
              });
              return Li._processUserPropertyResponse(a);
            });
          }
          static _processUserPropertyResponse(e) {
            if (!e)
              throw new Error(
                "processUserPropertyResponse: response is not defined"
              );
            const { status: t, result: i } = e;
            return t >= 200 && t < 300
              ? new Di(null == i ? void 0 : i.properties)
              : t >= 400 && t < 500
              ? new Zi()
              : new _i();
          }
        }
        const Fi = {
            add: Ri.addSubscription,
            remove: Ri.removeSubscription,
            update: Ri.updateSubscription,
          },
          Vi = {
            [xt.Q.Identity]: {
              modelName: xt.Q.Identity,
              add: Bi.addIdentity,
              remove: Bi.removeIdentity,
            },
            [xt.Q.Properties]: {
              modelName: xt.Q.Properties,
              update: Li.updateUserProperties,
            },
            [xt.Q.Subscriptions]: Object.assign(
              { modelName: xt.Q.Subscriptions },
              Fi
            ),
          };
        class Wi {
          constructor(e, t, i) {
            var n;
            (this.changeType = e),
              (this.modelName = t),
              (this.operationId = Math.random().toString(36).substring(2)),
              (this.payload = i ? this.getPayload(i) : void 0),
              (this.model = i ? i[i.length - 1].model : void 0),
              (this.applyToRecordId =
                null === (n = null == i ? void 0 : i[i.length - 1]) ||
                void 0 === n
                  ? void 0
                  : n.applyToRecordId),
              (this.timestamp = Date.now()),
              (this.jwtTokenAvailable = new Promise((e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  (this.jwtToken = yield ve.ZP.getJWTToken()), e();
                })
              ));
          }
          getPayload(e) {
            return Nt(e[0]) ? this.aggregateDeltas(e) : e[0].model.data;
          }
          aggregateDeltas(e) {
            const t = {};
            return (
              e.forEach((e) => {
                if (Nt(e)) {
                  const i = t.hasOwnProperty(e.property),
                    n = At(e.newValue);
                  if (!(n === At(e.oldValue) || void 0 === e.oldValue))
                    throw new Error("Cannot merge incompatible values");
                  const o = i && n,
                    s = Object.assign(
                      Object.assign({}, t[e.property]),
                      e.newValue
                    );
                  t[e.property] = o ? s : e.newValue;
                }
              }),
              t
            );
          }
          static getInstanceWithModelReference(e) {
            var t;
            const {
              operationId: i,
              payload: n,
              modelName: o,
              changeType: s,
              timestamp: r,
              model: a,
            } = e;
            if (!a) throw new O.Z("Operation.fromJSON: model is undefined");
            const l =
              null === (t = OneSignal.coreDirector) || void 0 === t
                ? void 0
                : t.getModelByTypeAndId(o, a.modelId);
            if (l) {
              const t = new Wi(s, o);
              return (
                (t.model = l),
                (t.operationId = i),
                (t.timestamp = r),
                (t.payload = n),
                (t.jwtToken = e.jwtToken),
                (t.jwtTokenAvailable = Promise.resolve()),
                t
              );
            }
            throw new Error(
              `Could not find model with id ${a.modelId} of type ${o}. Maybe user logged out?`
            );
          }
        }
        class $i {
          static enqueue(e) {
            (0, T.tI)("OperationCache.enqueue", { operation: e });
            const t = localStorage.getItem("operationCache"),
              i = t ? JSON.parse(t) : {};
            (i[e.operationId] = e),
              localStorage.setItem("operationCache", JSON.stringify(i));
          }
          static getOperationsWithModelName(e) {
            const t = localStorage.getItem("operationCache"),
              i = t ? Object.values(JSON.parse(t)) : [],
              n = [];
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              try {
                const e = Wi.getInstanceWithModelReference(t);
                e && n.push(e);
              } catch (e) {
                C.Z.warn(
                  `Could not parse operation ${t.operationId} from cache`,
                  e
                ),
                  this.delete(t.operationId);
              }
            }
            return n
              .sort((e, t) => e.timestamp - t.timestamp)
              .filter((t) => t.modelName === e);
          }
          static delete(e) {
            (0, T.tI)("OperationCache.delete", { id: e });
            const t = localStorage.getItem("operationCache"),
              i = t ? JSON.parse(t) : {};
            delete i[e],
              localStorage.setItem("operationCache", JSON.stringify(i));
          }
          static flushOperations() {
            (0, T.tI)("OperationCache.flushOperations"),
              localStorage.removeItem("operationCache");
          }
        }
        class ji {
          constructor(e, t) {
            (this._deltaQueue = []),
              (this._operationQueue = []),
              (this.onlineStatus = !0),
              setInterval(() => {
                C.Z.debug(
                  "OneSignal: checking for operations to process from cache"
                );
                const e = this.getOperationsFromCache();
                (this._operationQueue = [...e, ...this._operationQueue]),
                  this._operationQueue.length > 0 &&
                    this._processOperationQueue.call(this);
              }, 1e3 * ji.OPERATIONS_BATCH_PROCESSING_TIME),
              window.addEventListener(
                "online",
                this._onNetworkChange.bind(this, !0)
              ),
              window.addEventListener(
                "offline",
                this._onNetworkChange.bind(this, !1)
              ),
              (this._executeAdd = e.add),
              (this._executeUpdate = e.update),
              (this._executeRemove = e.remove),
              (this._newRecordsState = t);
          }
          enqueueDelta(e) {
            (0, T.tI)("ExecutorBase.enqueueDelta", { delta: e });
            const t = JSON.parse(JSON.stringify(e));
            this._deltaQueue.push(t);
          }
          get deltaQueue() {
            return this._deltaQueue;
          }
          get operationQueue() {
            return this._operationQueue;
          }
          _enqueueOperation(e) {
            (0, T.tI)("ExecutorBase.enqueueOperation", { operation: e }),
              this._operationQueue.push(e);
          }
          _flushDeltas() {
            this._deltaQueue = [];
          }
          _flushOperations() {
            (0, T.tI)("ExecutorBase._flushOperations"),
              (this._operationQueue = []);
          }
          _getChangeType(e, t) {
            (0, T.tI)("ExecutorBase._getChangeType", {
              oldValue: e,
              newValue: t,
            });
            const i = !!e && !t,
              n = e !== t && !!t && !!e;
            let o;
            if (!e && !!t) o = bt.Add;
            else if (i) o = bt.Remove;
            else {
              if (!n) throw new Error("Unsupported change type");
              o = bt.Update;
            }
            return o;
          }
          _processOperationQueue() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                  OneSignal.config.userConfig.requiresUserPrivacyConsent ||
                  ge.getConsentRequired(),
                t = yield ve.ZP.getConsentGiven();
              if (!e || t)
                for (; this._operationQueue.length > 0; ) {
                  const e = this._operationQueue.shift();
                  e &&
                    ($i.enqueue(e),
                    this._canExecute(e) &&
                      this._processOperation(e, ji.RETRY_COUNT).catch((e) => {
                        C.Z.error(e);
                      }));
                }
            });
          }
          _processOperation(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n, o, s, r;
              (0, T.tI)("ExecutorBase._processOperation", {
                operation: e,
                retries: t,
              }),
                yield null === (i = e.model) || void 0 === i
                  ? void 0
                  : i.awaitOneSignalIdAvailable,
                yield e.jwtTokenAvailable;
              let a = { success: !1, retriable: !0 };
              if (
                ((null == e ? void 0 : e.changeType) === bt.Add
                  ? (a = yield null === (n = this._executeAdd) || void 0 === n
                      ? void 0
                      : n.call(this, e))
                  : (null == e ? void 0 : e.changeType) === bt.Remove
                  ? (a = yield null === (o = this._executeRemove) ||
                    void 0 === o
                      ? void 0
                      : o.call(this, e))
                  : (null == e ? void 0 : e.changeType) === bt.Update &&
                    (a = yield null === (s = this._executeUpdate) ||
                    void 0 === s
                      ? void 0
                      : s.call(this, e)),
                a.success)
              ) {
                if (a.result) {
                  const t = yield Wi.getInstanceWithModelReference(e);
                  null === (r = null == t ? void 0 : t.model) ||
                    void 0 === r ||
                    r.hydrate(a.result);
                }
                $i.delete(null == e ? void 0 : e.operationId);
              } else
                a.retriable && t > 0
                  ? setTimeout(() => {
                      this._processOperation(e, t - 1).catch((e) => {
                        C.Z.error(e);
                      });
                    }, 5e3)
                  : $i.delete(null == e ? void 0 : e.operationId);
            });
          }
          _onNetworkChange(e) {
            (0, T.tI)("ExecutorBase._onNetworkChange", { online: e }),
              (this.onlineStatus = e),
              e && this._processOperationQueue.call(this);
          }
          _canExecute(e) {
            return (
              !!this.onlineStatus &&
              !(
                e.applyToRecordId &&
                !this._newRecordsState.canAccess(e.applyToRecordId)
              )
            );
          }
        }
        (ji.OPERATIONS_BATCH_PROCESSING_TIME = 5), (ji.RETRY_COUNT = 5);
        class Hi extends ji {
          constructor(e, t) {
            super(e, t);
          }
          processDeltaQueue() {
            if (0 === this._deltaQueue.length) return;
            const e = [],
              t = [];
            this._deltaQueue.forEach((i) => {
              if (!Nt(i)) return;
              const n = this._getChangeType(i.oldValue, i.newValue);
              n === bt.Add || n === bt.Update
                ? e.push(i)
                : n === bt.Remove && t.push(i);
            }),
              e.length > 0 &&
                this._enqueueOperation(new Wi(bt.Add, xt.Q.Identity, e)),
              t.length > 0 &&
                this._enqueueOperation(new Wi(bt.Remove, xt.Q.Identity, t)),
              this._flushDeltas();
          }
          getOperationsFromCache() {
            return $i.getOperationsWithModelName(xt.Q.Identity);
          }
        }
        class Qi extends ji {
          constructor(e, t) {
            super(e, t);
          }
          processDeltaQueue() {
            0 !== this._deltaQueue.length &&
              (this._enqueueOperation(
                new Wi(bt.Update, xt.Q.Properties, this._deltaQueue)
              ),
              this._flushDeltas());
          }
          getOperationsFromCache() {
            return $i.getOperationsWithModelName(xt.Q.Properties);
          }
        }
        class qi extends ji {
          constructor(e, t) {
            super(e, t);
          }
          processDeltaQueue() {
            this.separateDeltasByModelId().forEach((e) => {
              const t = this.separateDeltasByChangeType(e);
              Object.keys(t).forEach((e) => {
                const i = t[e];
                i.length > 0 &&
                  this._enqueueOperation(new Wi(e, i[0].model.modelName, i));
              });
            }),
              this._flushDeltas();
          }
          getOperationsFromCache() {
            return $i.getOperationsWithModelName(xt.Q.Subscriptions);
          }
          separateDeltasByChangeType(e) {
            const t = { [bt.Add]: [], [bt.Remove]: [], [bt.Update]: [] };
            return (
              e.forEach((e) => {
                var i;
                t[e.changeType] || (t[e.changeType] = []),
                  null === (i = t[e.changeType]) || void 0 === i || i.push(e);
              }),
              t
            );
          }
          separateDeltasByModelId() {
            const e = {};
            return (
              this._deltaQueue.forEach((t) => {
                const { modelId: i } = t.model;
                e[i] || (e[i] = []), e[i].push(t);
              }),
              Object.values(e)
            );
          }
        }
        class Ki {
          static build(e, t) {
            switch (e.modelName) {
              case xt.Q.Identity:
                return new Hi(e, t);
              case xt.Q.Properties:
                return new Qi(e, t);
              case xt.Q.Subscriptions:
                return new qi(e, t);
            }
          }
        }
        class zi {
          constructor(e) {
            (this.store = {}),
              Object.values(xt.Q).forEach((t) => {
                const i = Vi[t];
                this.store[t] = Ki.build(i, e);
              });
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            Object.values(this.store).forEach((e) => {
              e.processDeltaQueue();
            });
          }
        }
        class Ji {
          constructor(e, t) {
            (this.modelRepo = e),
              (this._deltaQueue = []),
              (this.newRecordsState = t),
              (this.executorStore = new zi(this.newRecordsState)),
              (this._unsubscribeFromModelRepo = this.modelRepo.subscribe(
                (e) => {
                  this._processDelta(e);
                }
              )),
              setInterval(() => {
                this._processDeltaQueue();
              }, 1e3 * Ji.DELTAS_BATCH_PROCESSING_TIME);
          }
          setModelRepoAndResubscribe(e) {
            (this.modelRepo = e),
              this._unsubscribeFromModelRepo(),
              (this._unsubscribeFromModelRepo = this.modelRepo.subscribe(
                (e) => {
                  this._processDelta(e);
                }
              ));
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            this.executorStore.forceDeltaQueueProcessingOnAllExecutors();
          }
          _flushDeltas() {
            this._deltaQueue = [];
          }
          _processDelta(e) {
            (0, T.tI)("OperationRepo._processDelta", { delta: e });
            const t = JSON.parse(JSON.stringify(e));
            this._deltaQueue.push(t);
          }
          _processDeltaQueue() {
            (0, T.tI)("OperationRepo._processDeltaQueue"),
              this._deltaQueue.forEach((e) => {
                var t;
                const { modelName: i } = e.model;
                null === (t = this.executorStore.store[i]) ||
                  void 0 === t ||
                  t.enqueueDelta(e);
              }),
              this.forceDeltaQueueProcessingOnAllExecutors(),
              this._flushDeltas();
          }
        }
        Ji.DELTAS_BATCH_PROCESSING_TIME = 1;
        class Yi extends Ot {
          constructor(e = []) {
            super(),
              (this.models = {}),
              (this.unsubscribeCallbacks = {}),
              e.forEach((e) => {
                (this.models[e.modelId] = e), this.subscribeUpdateListener(e);
              });
          }
          add(e, t) {
            this.subscribeUpdateListener(e),
              (this.models[e.modelId] = e),
              t
                ? this.broadcast(new Et(e.modelId, e))
                : this.broadcast(new Tt(e.modelId, e));
          }
          remove(e) {
            const t = JSON.stringify(this.models[e]);
            delete this.models[e],
              this.unsubscribeCallbacks[e](),
              this.broadcast(new Ct(e, JSON.parse(t)));
          }
          subscribeUpdateListener(e) {
            this.unsubscribeCallbacks[e.modelId] = e.subscribe((t) => {
              const { payload: i } = t;
              var n;
              t.type === bt.Update &&
              null !== (n = i) &&
              "object" == typeof n &&
              (null == n ? void 0 : n.constructor) === It
                ? this.broadcast(new Pt(e.modelId, i))
                : t.type === bt.Hydrate &&
                  (function (e) {
                    return (
                      null !== e &&
                      "object" == typeof e &&
                      (null == e ? void 0 : e.constructor) === kt
                    );
                  })(i) &&
                  this.broadcast(new Tt(e.modelId, i));
            });
          }
        }
        class Xi {
          static build(e) {
            const t = {};
            return (
              Object.values(xt.Q).forEach((i) => {
                const n = e ? e[i] : void 0,
                  o = new Yi(n);
                t[i] = o;
              }),
              t
            );
          }
        }
        class en {
          constructor(e = 3e3) {
            (this.records = new Map()), (this.OP_REPO_POST_CREATE_DELAY = e);
          }
          add(e, t = !1) {
            (t || this.records.get(e)) && this.records.set(e, Date.now());
          }
          canAccess(e) {
            const t = this.records.get(e);
            return !t || Date.now() - t > this.OP_REPO_POST_CREATE_DELAY;
          }
        }
        class tn {
          constructor() {
            (this.initResolver = () => null),
              (this.initPromise = new Promise((e) => {
                this.initResolver = e;
              })),
              (this.modelCache = new Ai()),
              this.modelCache
                .load(Mi.supportedModels)
                .then((e) => {
                  const t = Xi.build(e);
                  (this.modelRepo = new Mi(this.modelCache, t)),
                    (this.newRecordsState = new en()),
                    (this.operationRepo = new Ji(
                      this.modelRepo,
                      this.newRecordsState
                    )),
                    this.initResolver();
                })
                .catch((e) => {
                  C.Z.error(e);
                });
          }
          init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("CoreModule.init"), yield this.initPromise;
            });
          }
          resetModelRepoAndCache() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              (0, T.tI)("CoreModule.resetModelRepo"),
                yield this.modelCache.reset();
              const t = Xi.build();
              (this.modelRepo = new Mi(this.modelCache, t)),
                null === (e = this.operationRepo) ||
                  void 0 === e ||
                  e.setModelRepoAndResubscribe(this.modelRepo);
            });
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            var e;
            null === (e = this.operationRepo) ||
              void 0 === e ||
              e.forceDeltaQueueProcessingOnAllExecutors();
          }
        }
        class nn {
          constructor(e) {
            this.core = e;
          }
          generatePushSubscriptionModel(e) {
            (0, T.tI)("CoreModuleDirector.generatePushSubscriptionModel", {
              rawPushSubscription: e,
            });
            const t = new kt(xt.Q.Subscriptions, new y(e).serialize()),
              i = Zt.createOrGetInstance();
            i.hasOneSignalId && t.setOneSignalId(i.onesignalId);
            const n = this.getIdentityModel(),
              o = null == n ? void 0 : n.data.external_id;
            o && t.setExternalId(o),
              sn.coreDirector.add(xt.Q.Subscriptions, t, !1);
          }
          resetModelRepoAndCache() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.core.resetModelRepoAndCache();
            });
          }
          hydrateUser(e, t) {
            (0, T.tI)("CoreModuleDirector.hydrateUser", {
              user: e,
              externalId: t,
            });
            try {
              const i = this.getIdentityModel(),
                n = this.getPropertiesModel(),
                { onesignal_id: o } = e.identity;
              if (!o) throw new O.Z("OneSignal ID is missing from user data");
              null == i || i.setOneSignalId(o),
                null == n || n.setOneSignalId(o),
                t &&
                  (null == i || i.setExternalId(t),
                  null == n || n.setExternalId(t),
                  (e.identity.external_id = t)),
                null == i || i.hydrate(e.identity),
                null == n || n.hydrate(e.properties),
                this._hydrateSubscriptions(e.subscriptions, o, t),
                Wt.checkAndTriggerUserChanged();
            } catch (e) {
              C.Z.error(`Error hydrating user: ${e}`);
            }
          }
          _hydrateSubscriptions(e, t, i) {
            if (
              ((0, T.tI)("CoreModuleDirector._hydrateSubscriptions", {
                subscriptions: e,
                onesignalId: t,
                externalId: i,
              }),
              !e)
            )
              return;
            const n = this.getModelStores();
            e.forEach((e) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                const o = e.token
                  ? this.getSubscriptionOfTypeWithToken(
                      fi.toSubscriptionChannel(e.type),
                      e.token
                    )
                  : void 0;
                if (o)
                  o.setOneSignalId(t),
                    i && (null == o || o.setExternalId(i)),
                    o.hydrate(e);
                else {
                  const o = new kt(xt.Q.Subscriptions, e);
                  o.setOneSignalId(t),
                    i && (null == o || o.setExternalId(i)),
                    n[xt.Q.Subscriptions].add(o, !1);
                }
              })
            );
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            (0, T.tI)(
              "CoreModuleDirector.forceDeltaQueueProcessingOnAllExecutors"
            ),
              this.core.forceDeltaQueueProcessingOnAllExecutors();
          }
          add(e, t, i = !0) {
            (0, T.tI)("CoreModuleDirector.add", { modelName: e, model: t });
            this.getModelStores()[e].add(t, i);
          }
          remove(e, t) {
            (0, T.tI)("CoreModuleDirector.remove", {
              modelName: e,
              modelId: t,
            });
            this.getModelStores()[e].remove(t);
          }
          getNewRecordsState() {
            return this.core.newRecordsState;
          }
          getModelByTypeAndId(e, t) {
            (0, T.tI)("CoreModuleDirector.getModelByTypeAndId", {
              modelName: e,
              modelId: t,
            });
            return this.getModelStores()[e].models[t];
          }
          getEmailSubscriptionModels() {
            (0, T.tI)("CoreModuleDirector.getEmailSubscriptionModels");
            const e = this.getModelStores().subscriptions.models;
            return Object.fromEntries(
              Object.entries(e).filter(([, e]) => {
                var t;
                return (
                  (null === (t = e.data) || void 0 === t ? void 0 : t.type) ===
                  c.Email
                );
              })
            );
          }
          hasEmail() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = this.getEmailSubscriptionModels();
              return Object.keys(e).length > 0;
            });
          }
          getSmsSubscriptionModels() {
            (0, T.tI)("CoreModuleDirector.getSmsSubscriptionModels");
            const e = this.getModelStores().subscriptions.models;
            return Object.fromEntries(
              Object.entries(e).filter(([, e]) => {
                var t;
                return (
                  (null === (t = e.data) || void 0 === t ? void 0 : t.type) ===
                  c.SMS
                );
              })
            );
          }
          hasSms() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = this.getSmsSubscriptionModels();
              return Object.keys(e).length > 0;
            });
          }
          getAllPushSubscriptionModels() {
            (0, T.tI)("CoreModuleDirector.getAllPushSubscriptionModels");
            const e = this.getModelStores().subscriptions.models;
            return Object.fromEntries(
              Object.entries(e).filter(([, e]) => {
                var t;
                return fi.isPushSubscriptionType(
                  null === (t = e.data) || void 0 === t ? void 0 : t.type
                );
              })
            );
          }
          getPushSubscriptionModelByCurrentToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              T.tI)("CoreModuleDirector.getPushSubscriptionModelByCurrentToken");
              const e = yield wt.getCurrentPushToken();
              if (e) return this.getSubscriptionOfTypeWithToken(u.Push, e);
            });
          }
          getPushSubscriptionModelByLastKnownToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              T.tI)("CoreModuleDirector.getPushSubscriptionModelByLastKnownToken");
              const { lastKnownPushToken: e } = yield ve.ZP.getAppState();
              if (e) return this.getSubscriptionOfTypeWithToken(u.Push, e);
            });
          }
          getPushSubscriptionModel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (0, T.tI)("CoreModuleDirector.getPushSubscriptionModel"),
                (yield this.getPushSubscriptionModelByCurrentToken()) ||
                  (yield this.getPushSubscriptionModelByLastKnownToken())
              );
            });
          }
          getIdentityModel() {
            (0, T.tI)("CoreModuleDirector.getIdentityModel");
            const e = this.getModelStores(),
              t = Object.keys(e.identity.models);
            return e.identity.models[t[0]];
          }
          getPropertiesModel() {
            (0, T.tI)("CoreModuleDirector.getPropertiesModel");
            const e = this.getModelStores(),
              t = Object.keys(e.properties.models);
            return e.properties.models[t[0]];
          }
          getAllSubscriptionsModels() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("CoreModuleDirector.getAllSubscriptionsModels");
              const e = this.getEmailSubscriptionModels(),
                t = this.getSmsSubscriptionModels(),
                i = yield this.getPushSubscriptionModel();
              return Object.values(e)
                .concat(Object.values(t))
                .concat(i ? [i] : []);
            });
          }
          getSubscriptionOfTypeWithToken(e, t) {
            let i;
            switch (
              ((0, T.tI)("CoreModuleDirector.getSubscriptionOfTypeWithToken", {
                type: e,
                token: t,
              }),
              e)
            ) {
              case u.Email:
                i = this.getEmailSubscriptionModels();
                break;
              case u.SMS:
                i = this.getSmsSubscriptionModels();
                break;
              case u.Push:
                i = this.getAllPushSubscriptionModels();
                break;
              default:
                return;
            }
            return Object.values(i).find((e) => e.data.token === t);
          }
          getModelStores() {
            var e;
            return null === (e = this.core.modelRepo) || void 0 === e
              ? void 0
              : e.modelStores;
          }
        }
        class on {
          static login(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n;
              const o = ge.getConsentRequired(),
                s = yield ve.ZP.getConsentGiven();
              if (o && !s)
                throw new O.Z(
                  "Login: Consent required but not given, skipping login"
                );
              try {
                sn.coreDirector.forceDeltaQueueProcessingOnAllExecutors(),
                  t && (yield ve.ZP.setJWTToken(t));
                const o = sn.coreDirector.getIdentityModel(),
                  s = null == o ? void 0 : o.onesignalId;
                if (!o) throw new O.Z("Login: No identity model found");
                const r =
                  null === (i = null == o ? void 0 : o.data) || void 0 === i
                    ? void 0
                    : i.external_id;
                if (r === e)
                  return void C.Z.debug(
                    "Login: External ID already set, skipping login"
                  );
                const a = yield sn.coreDirector.getPushSubscriptionModel();
                let l;
                a && Dt(a.data) && (l = a.data.id);
                const d = on.isIdentified(o.data);
                let c;
                if ((on.setExternalId(o, e), d)) {
                  c = { identity: { external_id: e } };
                  const t = yield sn.coreDirector.getPushSubscriptionModel();
                  t && (c.subscriptions = [t.data]);
                } else c = yield _t.getAllUserData();
                yield sn.coreDirector.resetModelRepoAndCache(),
                  yield _t.initializeUser(!0);
                try {
                  const t = yield on.identifyOrUpsertUser(c, d, l),
                    i =
                      null === (n = null == t ? void 0 : t.identity) ||
                      void 0 === n
                        ? void 0
                        : n.onesignal_id;
                  if (!i)
                    return void C.Z.info(
                      "Caching login call, waiting on network or subscription creation."
                    );
                  yield on.fetchAndHydrate(i, e);
                } catch (e) {
                  if (
                    (C.Z.error(
                      `Login: Error while identifying/upserting user: ${e.message}`
                    ),
                    s)
                  ) {
                    C.Z.debug("Login: Restoring old user data");
                    try {
                      yield on.fetchAndHydrate(s, r);
                    } catch (e) {
                      C.Z.error(
                        `Login: Error while restoring old user data: ${e.message}`
                      );
                    }
                  }
                  throw e;
                }
              } catch (e) {
                C.Z.error(e);
              }
            });
          }
          static logout() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = sn.coreDirector.getIdentityModel();
              if (!e || !e.data || !e.data.external_id)
                return void C.Z.debug(
                  "Logout: User is not logged in, skipping logout"
                );
              sn.coreDirector.forceDeltaQueueProcessingOnAllExecutors(),
                _t.resetUserMetaProperties();
              const t = yield sn.coreDirector.getPushSubscriptionModel();
              null == t || t.setExternalId(void 0),
                yield sn.coreDirector.resetModelRepoAndCache(),
                void 0 !== t
                  ? (sn.coreDirector.add(xt.Q.Subscriptions, t, !1),
                    yield _t.initializeUser(!1))
                  : yield _t.initializeUser(!0);
            });
          }
          static setExternalId(e, t) {
            if (
              ((0, T.tI)("LoginManager.setExternalId", { externalId: t }), !e)
            )
              throw new O.Z("login: no identity model found");
            e.set("external_id", t, !1);
          }
          static isIdentified(e) {
            return (
              (0, T.tI)("LoginManager.isIdentified", { identity: e }),
              void 0 !== e.external_id
            );
          }
          static identifyOrUpsertUser(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let n;
              return (
                (0, T.tI)("LoginManager.identifyOrUpsertUser", {
                  userData: e,
                  isIdentified: t,
                  subscriptionId: i,
                }),
                (n = t
                  ? yield this.upsertUser(e, i)
                  : yield this.identifyUser(e, i)),
                n
              );
            });
          }
          static upsertUser(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n, o, s, r;
              if (
                ((0, T.tI)("LoginManager.upsertUser", {
                  userData: e,
                  subscriptionId: t,
                }),
                0 === i)
              )
                throw new O.Z("Login: upsertUser failed: max retries reached");
              const a = yield wt.getAppId(),
                l = JSON.parse(JSON.stringify(e));
              this.stripAliasesOtherThanExternalId(e);
              const d = yield _.createUser({ appId: a, subscriptionId: t }, e),
                c = null == d ? void 0 : d.result,
                u = null == d ? void 0 : d.status;
              if (u >= 200 && u < 300) {
                const t =
                    null === (n = e.identity) || void 0 === n
                      ? void 0
                      : n.onesignal_id,
                  i = sn.coreDirector.getNewRecordsState();
                i || C.Z.error("UpsertUser: NewRecordsState is undefined"),
                  t && (null == i || i.add(t));
                const a =
                    null ===
                      (s =
                        null === (o = e.subscriptions) || void 0 === o
                          ? void 0
                          : o[0]) || void 0 === s
                      ? void 0
                      : s.token,
                  l =
                    null === (r = c.subscriptions) || void 0 === r
                      ? void 0
                      : r.find((e) => e.token === a);
                l && Dt(l) && (null == i || i.add(l.id)),
                  C.Z.info("Successfully created user", c);
              } else if (u >= 400 && u < 500) C.Z.error("Malformed request", c);
              else if (u >= 500)
                return (
                  C.Z.error("Server error. Retrying..."),
                  yield P(k[i]),
                  this.upsertUser(l, t, i - 1)
                );
              return c;
            });
          }
          static identifyUser(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              if (
                ((0, T.tI)("LoginManager.identifyUser", {
                  userData: e,
                  pushSubscriptionId: t,
                }),
                0 === i)
              )
                throw new O.Z(
                  "Login: identifyUser failed: max retries reached"
                );
              const { onesignal_id: o } = e.identity,
                s = JSON.parse(JSON.stringify(e));
              this.stripAliasesOtherThanExternalId(e);
              const { identity: r } = e;
              if (!r) throw new O.Z("identifyUser failed: no identity found");
              if (!o) {
                const t = sn.coreDirector.getIdentityModel();
                return null == t || t.set(w.EXTERNAL_ID, r.external_id, !1), e;
              }
              const a = yield wt.getAppId(),
                l = new w(w.ONESIGNAL_ID, o),
                d = yield _.addAlias({ appId: a }, l, r),
                c = null == d ? void 0 : d.status;
              if (c >= 200 && c < 300) {
                C.Z.info("identifyUser succeeded");
                const e = sn.coreDirector.getNewRecordsState();
                e || C.Z.error("IdentifyUser: NewRecordsState is undefined"),
                  null == e || e.add(o, !0);
              } else {
                if (409 === c && t)
                  return yield this.transferSubscription(a, t, r);
                if (c >= 400 && c < 500)
                  throw new O.Z(
                    `identifyUser: malformed request: ${JSON.stringify(
                      null == d ? void 0 : d.result
                    )}`
                  );
                if (c >= 500)
                  return (
                    C.Z.error("identifyUser failed: server error. Retrying..."),
                    yield P(k[i]),
                    this.identifyUser(s, t, i - 1)
                  );
              }
              return {
                identity:
                  null === (n = null == d ? void 0 : d.result) || void 0 === n
                    ? void 0
                    : n.identity,
              };
            });
          }
          static fetchAndHydrate(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              T.tI)("LoginManager.fetchAndHydrate", { onesignalId: e, externalId: t });
              const i = yield _.getUser(
                { appId: yield wt.getAppId() },
                new w(w.ONESIGNAL_ID, e)
              );
              sn.coreDirector.hydrateUser(null == i ? void 0 : i.result, t);
            });
          }
          static stripAliasesOtherThanExternalId(e) {
            (0, T.tI)("LoginManager.stripAliasesOtherThanExternalId", {
              userData: e,
            });
            const { identity: t } = e;
            if (!t)
              throw new O.Z(
                "stripAliasesOtherThanExternalId failed: no identity found"
              );
            const { external_id: i } = t;
            if (!i)
              throw new O.Z(
                "stripAliasesOtherThanExternalId failed: no external_id found"
              );
            const n = { external_id: i };
            e.identity = n;
          }
          static transferSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              C.Z.error(
                "^^^ Handling 409 HTTP response reported by the browser above. This is an expected result when the User already exists. Push subscription is being transferred the existing User."
              );
              const n = yield _.transferSubscription({ appId: e }, t, i, !1),
                o = null == n ? void 0 : n.status,
                s = null == n ? void 0 : n.result;
              if (o && o >= 200 && o < 300) {
                C.Z.info("transferSubscription succeeded");
                return { identity: null == s ? void 0 : s.identity };
              }
              throw new O.Z(
                `transferSubscription failed: ${JSON.stringify(s)}}`
              );
            });
          }
        }
        class sn {
          static _initializeCoreModuleAndOSNamespaces() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = new tn();
              yield e.initPromise, (sn.coreDirector = new nn(e));
              const t = yield ve.ZP.getSubscription(),
                i = yield sn.context.permissionManager.getPermissionStatus();
              (sn.User = new Vt(!0, t, i)), (this.Notifications = new Ni(i));
            });
          }
          static _initializeConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield new se().getAppConfig(e);
              C.Z.debug("OneSignal: Final web app config:", t),
                (sn.config = t),
                (sn.environmentInfo = d.getEnvironmentInfo()),
                (sn.context = new ki(t)),
                (sn.config = sn.context.appConfig);
            });
          }
          static login(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, T.tI)("login", { externalId: e, jwtToken: t }),
                void 0 === e)
              )
                throw new InvalidArgumentError.R(
                  "externalId",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "externalId",
                  InvalidArgumentError.Q.WrongType
                );
              if (void 0 !== t && "string" != typeof t)
                throw new InvalidArgumentError.R(
                  "jwtToken",
                  InvalidArgumentError.Q.WrongType
                );
              yield on.login(e, t);
            });
          }
          static logout() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, T.tI)("logout"), on.logout();
            });
          }
          static init(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, T.tI)("init"),
                C.Z.debug(
                  `Browser Environment: ${(0, l.M)().name} ${
                    (0, l.M)().version
                  }`
                ),
                ge.removeLegacySubscriptionOptions(),
                yield Ci.polyfillSafariFetch(),
                Ci.errorIfInitAlreadyCalled(),
                yield sn._initializeConfig(e),
                !sn.config)
              )
                throw new Error("OneSignal config not initialized!");
              if ("safari" != (0, l.M)().name || sn.config.safariWebId) {
                if (
                  (yield sn._initializeCoreModuleAndOSNamespaces(),
                  ge.getConsentRequired())
                ) {
                  if (!(yield ve.ZP.getConsentGiven()))
                    return void (sn.pendingInit = !0);
                }
                yield sn._delayedInit();
              } else C.Z.warn(new SdkInitError(M.MissingSafariWebId));
            });
          }
          static _delayedInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              function e() {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  sn.__initAlreadyCalled ||
                    ((sn.__initAlreadyCalled = !0),
                    sn.emitter.on(
                      sn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                      Wt.onNotificationPermissionChange
                    ),
                    sn.emitter.on(
                      sn.EVENTS.SUBSCRIPTION_CHANGED,
                      Wt._onSubscriptionChanged
                    ),
                    sn.emitter.on(
                      sn.EVENTS.SDK_INITIALIZED,
                      Ci.onSdkInitialized
                    ),
                    window.addEventListener("focus", () => {
                      wt.checkAndTriggerNotificationPermissionChanged();
                    }),
                    yield Ci.initSaveState(),
                    yield Ci.saveInitOptions(),
                    yield Ci.internalInit());
                });
              }
              (sn.pendingInit = !1),
                sn.context.workerMessenger.listen(),
                "complete" === document.readyState ||
                "interactive" === document.readyState
                  ? yield e()
                  : (C.Z.debug(
                      "OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."
                    ),
                    window.addEventListener("DOMContentLoaded", () => {
                      e();
                    }),
                    (document.onreadystatechange = () => {
                      ("complete" !== document.readyState &&
                        "interactive" !== document.readyState) ||
                        e();
                    }));
            });
          }
          static setConsentGiven(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, T.tI)("setConsentGiven", { consent: e }), void 0 === e))
                throw new InvalidArgumentError.R(
                  "consent",
                  InvalidArgumentError.Q.Empty
                );
              if ("boolean" != typeof e)
                throw new InvalidArgumentError.R(
                  "consent",
                  InvalidArgumentError.Q.WrongType
                );
              yield ve.ZP.setConsentGiven(e),
                e && sn.pendingInit && (yield sn._delayedInit());
            });
          }
          static setConsentRequired(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, T.tI)("setConsentRequired", { requiresConsent: e }),
                void 0 === e)
              )
                throw new InvalidArgumentError.R(
                  "requiresConsent",
                  InvalidArgumentError.Q.Empty
                );
              if ("boolean" != typeof e)
                throw new InvalidArgumentError.R(
                  "requiresConsent",
                  InvalidArgumentError.Q.WrongType
                );
              ge.setConsentRequired(e);
            });
          }
          static push(e) {
            xi.processItem(sn, e);
          }
        }
        (sn.EVENTS = {
          NOTIFICATION_PERMISSION_CHANGED_AS_STRING: "permissionChangeAsString",
          NOTIFICATION_PERMISSION_CHANGED_AS_BOOLEAN: "permissionChange",
          SUBSCRIPTION_CHANGED: "change",
          WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
          NOTIFICATION_WILL_DISPLAY: "foregroundWillDisplay",
          NOTIFICATION_DISMISSED: "dismiss",
          NOTIFICATION_CLICKED: "click",
          SDK_INITIALIZED: "initializeInternal",
          SDK_INITIALIZED_PUBLIC: "initialize",
          REGISTERED: "register",
          PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
          TEST_FINISHED_ALLOW_CLICK_HANDLING: "testFinishedAllowClickHandling",
          SESSION_STARTED: "os.sessionStarted",
        }),
          (sn.VERSION = S.Z.version()),
          (sn._VERSION = S.Z.version()),
          (sn.sdkEnvironment = p.Z),
          (sn.config = null),
          (sn._sessionInitAlreadyRunning = !1),
          (sn._isNewVisitor = !1),
          (sn.timedLocalStorage = hi),
          (sn.initialized = !1),
          (sn._didLoadITILibrary = !1),
          (sn.notifyButton = null),
          (sn.environment = S.Z),
          (sn.database = ve.ZP),
          (sn.event = be.Z),
          (sn.pendingInit = !0),
          (sn.emitter = new Ft.Z()),
          (sn.cache = {}),
          (sn._LOGGING = !1),
          (sn.LOGGING = !1),
          (sn._initCalled = !1),
          (sn.__initAlreadyCalled = !1),
          (sn.Notifications = new Ni()),
          (sn.Slidedown = new (class extends Ut {
            constructor() {
              super();
            }
            promptPush(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, T.JX)(),
                  yield sn.context.promptsManager.internalShowParticularSlidedown(
                    B.Push,
                    e
                  );
              });
            }
            promptPushCategories(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, T.JX)();
                const t =
                  yield sn.context.subscriptionManager.isPushNotificationsEnabled();
                yield sn.context.promptsManager.internalShowCategorySlidedown(
                  Object.assign(Object.assign({}, e), { isInUpdateMode: t })
                );
              });
            }
            promptSms(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, T.JX)(),
                  yield sn.context.promptsManager.internalShowSmsSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            promptEmail(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, T.JX)(),
                  yield sn.context.promptsManager.internalShowEmailSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            promptSmsAndEmail(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, T.JX)(),
                  yield sn.context.promptsManager.internalShowSmsAndEmailSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            addEventListener(e, t) {
              sn.emitter.on(e, t);
            }
            removeEventListener(e, t) {
              sn.emitter.off(e, t);
            }
          })()),
          (sn.Session = new (class {
            sendOutcome(e, t) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                const i = OneSignal.config.userConfig.outcomes;
                if (!i)
                  return void C.Z.error(
                    `Could not send ${e}. No outcomes config found.`
                  );
                const n = new Ee(OneSignal.config.appId, i, e, !1);
                if (void 0 !== t && "number" != typeof t)
                  return void C.Z.error(
                    "Outcome weight can only be a number if present."
                  );
                if (!(yield n.beforeOutcomeSend())) return;
                const o = yield n.getAttribution();
                yield n.send({
                  type: o.type,
                  notificationIds: o.notificationIds,
                  weight: t,
                });
              });
            }
            sendUniqueOutcome(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                const t = OneSignal.config.userConfig.outcomes;
                if (!t)
                  return void C.Z.error(
                    `Could not send ${e}. No outcomes config found.`
                  );
                const i = new Ee(OneSignal.config.appId, t, e, !0);
                if (!(yield i.beforeOutcomeSend())) return;
                const n = yield i.getAttribution();
                if (n.type === D.NotSupported)
                  return void C.Z.warn(
                    "You are on a free plan. Please upgrade to use this functionality."
                  );
                const { notificationIds: o } = n,
                  s = yield i.getNotifsToAttributeWithUniqueOutcome(o);
                i.shouldSendUnique(n, s)
                  ? yield i.send({ type: n.type, notificationIds: s })
                  : C.Z.warn(
                      `'${e}' was already reported for all notifications.`
                    );
              });
            }
          })()),
          (sn.User = new Vt(!1)),
          (sn.Debug = new (class {
            setLogLevel(e) {
              C.Z.setLevel(e);
            }
          })()),
          C.Z.info(
            `OneSignal Web SDK loaded (version ${
              sn._VERSION
            },\n  ${p.Z.getWindowEnv().toString()} environment).`
          ),
          C.Z.debug(
            `Current Page URL: ${
              "undefined" == typeof location ? "NodeJS" : location.href
            }`
          );
      },
      191: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        var n = i(121);
        class o {
          static push(e) {
            n.Z.push(e);
          }
        }
      },
      50: (e, t, i) => {
        "use strict";
        i.d(t, { c: () => o, Z: () => s });
        var n = i(752);
        class TimeoutError extends n.Z {
          constructor(e = "The asynchronous operation has timed out.") {
            super(e),
              (this.message = e),
              Object.setPrototypeOf(this, TimeoutError.prototype);
          }
        }
        class o {
          static contains(e, t) {
            return !!e && -1 !== e.indexOf(t);
          }
          static trimUndefined(e) {
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
          }
          static capitalize(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }
          static isNullOrUndefined(e) {
            return null == e;
          }
          static valueOrDefault(e, t) {
            return null == e ? t : e;
          }
          static stringify(e) {
            return JSON.stringify(
              e,
              (e, t) => ("function" == typeof t ? "[Function]" : t),
              4
            );
          }
          static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (const n of i) {
              const i = e[n];
              t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`;
            }
            return t;
          }
          static timeoutPromise(e, t) {
            const i = new Promise((e, i) => {
              setTimeout(() => {
                i(new TimeoutError());
              }, t);
            });
            return Promise.race([e, i]);
          }
          static getValueOrDefault(e, t) {
            return null != e ? e : t;
          }
          static padStart(e, t, i) {
            let n = e;
            for (; n.length < t; ) n = i + n;
            return n;
          }
          static parseVersionString(e) {
            const t = e.toString().split("."),
              i = o.padStart(t[0], 2, "0");
            let n;
            return (
              (n = t[1] ? o.padStart(t[1], 2, "0") : "00"), Number(`${i}.${n}`)
            );
          }
          static lastParts(e, t, i) {
            const n = e.split(t),
              o = Math.max(n.length - i, 0);
            return n.slice(o).join(t);
          }
          static enforceAppId(e) {
            if (!e) throw new Error("App id cannot be empty");
          }
          static enforceAlias(e) {
            if (!e.label) throw new Error("Alias label cannot be empty");
            if (!e.id) throw new Error("Alias id cannot be empty");
          }
          static sortArrayOfObjects(e, t, i = !1, n = !0) {
            const o = n ? e : e.slice();
            return (
              o.sort((e, n) => {
                const o = t(e),
                  s = t(n);
                return o > s ? (i ? -1 : 1) : o < s ? (i ? 1 : -1) : 0;
              }),
              o
            );
          }
        }
        const s = o;
      },
      86: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => n, R: () => InvalidArgumentError });
        var n,
          o = i(752);
        !(function (e) {
          (e[(e.Empty = 0)] = "Empty"),
            (e[(e.Malformed = 1)] = "Malformed"),
            (e[(e.EnumOutOfRange = 2)] = "EnumOutOfRange"),
            (e[(e.WrongType = 3)] = "WrongType");
        })(n || (n = {}));
        class InvalidArgumentError extends o.Z {
          constructor(e, t, i) {
            let o;
            switch (t) {
              case n.Empty:
                o = `Supply a non-empty value to '${e}'. ${i}`;
                break;
              case n.Malformed:
                o = `The value for '${e}' was malformed. ${i}`;
                break;
              case n.EnumOutOfRange:
                o = `The value for '${e}' was out of range of the expected input enum. ${i}`;
                break;
              case n.WrongType:
                o = `The value for '${e}' was of the wrong type. ${i}`;
            }
            super(o),
              (this.argument = e),
              (this.reason = n[t]),
              Object.setPrototypeOf(this, InvalidArgumentError.prototype);
          }
        }
      },
      752: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => n });
        class n extends Error {
          constructor(e = "") {
            super(e),
              Object.defineProperty(this, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0,
              }),
              Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: this.constructor.name,
                writable: !0,
              }),
              Error.hasOwnProperty("captureStackTrace")
                ? Error.captureStackTrace(this, this.constructor)
                : (Object.defineProperty(this, "stack", {
                    configurable: !0,
                    enumerable: !1,
                    value: new Error(e).stack,
                    writable: !0,
                  }),
                  Object.setPrototypeOf(this, n.prototype));
          }
        }
      },
      930: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => a });
        var n = i(326),
          o = i(468),
          s = i(450);
        function r() {
          return (
            "undefined" != typeof PushSubscriptionOptions &&
            PushSubscriptionOptions.prototype.hasOwnProperty(
              "applicationServerKey"
            )
          );
        }
        class a {
          static isBrowser() {
            return "undefined" != typeof window;
          }
          static useSafariLegacyPush() {
            var e;
            return (
              this.isBrowser() &&
              null !=
                (null === (e = window.safari) || void 0 === e
                  ? void 0
                  : e.pushNotification)
            );
          }
          static useSafariVapidPush() {
            return (
              "safari" == (0, s.M)().name && r() && !this.useSafariLegacyPush()
            );
          }
          static version() {
            return Number(160204);
          }
          static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"];
          }
          static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"];
          }
          static getLanguage() {
            let e = navigator.language;
            if (e) {
              e = e.toLowerCase();
              const t = e.split("-");
              if ("zh" == t[0]) {
                for (const e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG)
                  if (-1 !== t.indexOf(e)) return "zh-Hant";
                for (const e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
                  if (-1 !== t.indexOf(e)) return "zh-Hans";
                return "zh-Hant";
              }
              return t[0].substring(0, 2);
            }
            return "en";
          }
          static supportsServiceWorkers() {
            return (
              n.Z.getWindowEnv() === o.Q.ServiceWorker ||
              ("undefined" != typeof navigator && "serviceWorker" in navigator)
            );
          }
          static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__
              ? "2"
              : __SRC_STYLESHEETS_MD5_HASH__;
          }
        }
      },
      680: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        var n = i(655);
        class o {
          constructor() {
            this._events = {};
          }
          on(e, t) {
            return (
              (this._events[e] = this._events[e] || []),
              this._events[e].push(t),
              this
            );
          }
          once(e, t) {
            const i = this;
            function n() {
              i.off(e, n), t.apply(this, arguments);
            }
            return (n.listener = t), this.on(e, n), this;
          }
          off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
              for (let e = 0; e < i.length; e += 1)
                if (i[e] === t || i[e].listener === t) {
                  i.splice(e, 1);
                  break;
                }
              0 === i.length && this.removeAllListeners(e);
            }
            return this;
          }
          removeAllListeners(e) {
            return e ? delete this._events[e] : (this._events = {}), this;
          }
          listeners(e) {
            try {
              return this._events[e];
            } catch (e) {
              return;
            }
          }
          numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0;
          }
          emit(...e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t = e.shift();
              let i = this._events[t];
              if (void 0 !== i) {
                i = i.slice(0);
                const t = i.length;
                for (let n = 0; n < t; n += 1) yield i[n].apply(this, e);
              }
              return this;
            });
          }
        }
      },
      107: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => n });
        class n {
          static shouldLog() {
            try {
              if (
                "undefined" == typeof window ||
                void 0 === window.localStorage
              )
                return !1;
              const e = window.localStorage.getItem("loglevel");
              return !(!e || "trace" !== e.toLowerCase());
            } catch (e) {
              return !1;
            }
          }
          static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage)
              try {
                window.localStorage.setItem("loglevel", e),
                  (n.proxyMethodsCreated = void 0),
                  n.createProxyMethods();
              } catch (e) {
                return;
              }
          }
          static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated) return;
            n.proxyMethodsCreated = !0;
            const e = {
              log: "debug",
              trace: "trace",
              info: "info",
              warn: "warn",
              error: "error",
            };
            for (const t of Object.keys(e)) {
              const i = void 0 !== console[t],
                o = e[t],
                s = i && (n.shouldLog() || "error" === o);
              n[o] = s ? console[t].bind(console) : function () {};
            }
          }
        }
        n.createProxyMethods();
      },
      326: (e, t, i) => {
        "use strict";
        var n;
        i.d(t, { Z: () => a }),
          (function (e) {
            (e.Development = "Development"),
              (e.Staging = "Staging"),
              (e.Production = "Production");
          })(n || (n = {}));
        var o = i(468),
          InvalidArgumentError = i(86),
          s = i(930);
        const r = ["outcomes", "on_focus"];
        class a {
          static getBuildEnv() {
            return n.Production;
          }
          static getApiEnv() {
            return n.Production;
          }
          static getOrigin() {
            return s.Z.isBrowser()
              ? window.location.origin
              : "undefined" != typeof self &&
                "undefined" != typeof ServiceWorkerGlobalScope
              ? self.location.origin
              : "Unknown";
          }
          static getWindowEnv() {
            if ("undefined" == typeof window) {
              if (
                "undefined" != typeof self &&
                "undefined" != typeof ServiceWorkerGlobalScope
              )
                return o.Q.ServiceWorker;
              throw Error("OneSignalSDK: Unsupported JS runtime!");
            }
            return o.Q.Host;
          }
          static getBuildEnvPrefix(e = a.getBuildEnv()) {
            switch (e) {
              case n.Development:
                return "Dev-";
              case n.Staging:
                return "Staging-";
              case n.Production:
                return "";
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static getOneSignalApiUrl(e = a.getApiEnv(), t) {
            const i = "onesignal.com";
            switch (e) {
              case n.Development:
                return a.isTurbineEndpoint(t)
                  ? new URL(`http://${i}:18080/api/v1`)
                  : new URL(`http://${i}:3000/api/v1`);
              case n.Staging:
                return new URL(`https://${i}/api/v1`);
              case n.Production:
                return new URL("https://onesignal.com/api/v1");
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static getOneSignalStaticResourcesUrl() {
            return new URL("https://media.onesignal.com/web-sdk");
          }
          static getOneSignalResourceUrlPath(e = a.getBuildEnv()) {
            const t = "localhost";
            let i;
            switch (e) {
              case n.Development:
                i = `http://${t}:4000`;
                break;
              case n.Staging:
                i = `https://${t}`;
                break;
              case n.Production:
                i = "https://onesignal.com";
                break;
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
            return new URL(`${i}/sdks/web/v16`);
          }
          static getOneSignalCssFileName(e = a.getBuildEnv()) {
            const t = "OneSignalSDK.page.styles.css";
            switch (e) {
              case n.Development:
                return `Dev-${t}`;
              case n.Staging:
                return `Staging-${t}`;
              case n.Production:
                return t;
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static isTurbineEndpoint(e) {
            return !!e && r.some((t) => e.indexOf(t) > -1);
          }
        }
      },
      392: (e, t, i) => {
        "use strict";
        var n, o;
        i.d(t, { $y: () => n, I0: () => r, Ky: () => s, eB: () => o }),
          (function (e) {
            (e.Active = "active"), (e.Inactive = "inactive");
          })(n || (n = {})),
          (function (e) {
            (e[(e.UserCreate = 1)] = "UserCreate"),
              (e[(e.UserNewSession = 2)] = "UserNewSession"),
              (e[(e.VisibilityVisible = 3)] = "VisibilityVisible"),
              (e[(e.VisibilityHidden = 4)] = "VisibilityHidden"),
              (e[(e.BeforeUnload = 5)] = "BeforeUnload"),
              (e[(e.PageRefresh = 6)] = "PageRefresh"),
              (e[(e.Focus = 7)] = "Focus"),
              (e[(e.Blur = 8)] = "Blur");
          })(o || (o = {}));
        const s = "oneSignalSession";
        function r(e) {
          const t = new Date().getTime(),
            i = (e && e.notificationId) || null;
          return {
            sessionKey: s,
            appId: e.appId,
            startTimestamp: t,
            accumulatedDuration: 0,
            notificationId: i,
            status: n.Active,
            lastDeactivatedTimestamp: null,
            lastActivatedTimestamp: t,
          };
        }
      },
      468: (e, t, i) => {
        "use strict";
        var n;
        i.d(t, { Q: () => n }),
          (function (e) {
            (e.ServiceWorker = "ServiceWorker"), (e.Host = "Host");
          })(n || (n = {}));
      },
      934: (e, t, i) => {
        "use strict";
        i.d(t, { H4: () => b, ZP: () => S });
        var n = i(655),
          o = i(680),
          s = i(894),
          r = i(50),
          a = i(107);
        class l {
          constructor(e, t = 6) {
            (this.databaseName = e),
              (this.dbVersion = t),
              (this.emitter = new o.Z());
          }
          open(e) {
            return new Promise((t) => {
              let i;
              try {
                i = indexedDB.open(e, this.dbVersion);
              } catch (e) {}
              if (!i) return null;
              (i.onerror = this.onDatabaseOpenError.bind(this)),
                (i.onblocked = this.onDatabaseOpenBlocked.bind(this)),
                (i.onupgradeneeded = this.onDatabaseUpgradeNeeded.bind(this)),
                (i.onsuccess = () => {
                  (this.database = i.result),
                    (this.database.onerror = this.onDatabaseError),
                    (this.database.onversionchange =
                      this.onDatabaseVersionChange),
                    t(this.database);
                });
            });
          }
          close() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              var e;
              (yield this.ensureDatabaseOpen()).close(),
                null === (e = this.database) || void 0 === e || e.close();
            });
          }
          ensureDatabaseOpen() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                this.openLock || (this.openLock = this.open(this.databaseName)),
                yield this.openLock
              );
            });
          }
          onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            r.Z.contains(
              t.message,
              "The operation failed for reasons unrelated to the database itself and not covered by any other error code"
            ) ||
            r.Z.contains(
              t.message,
              "A mutation operation was attempted on a database that did not allow mutations"
            )
              ? a.Z.warn(
                  "OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6"
                )
              : a.Z.warn(
                  "OneSignal: Fatal error opening IndexedDb database:",
                  t
                );
          }
          onDatabaseError(e) {
            a.Z.debug("IndexedDb: Generic database error", e.target.errorCode);
          }
          onDatabaseOpenBlocked() {
            a.Z.debug("IndexedDb: Blocked event");
          }
          onDatabaseVersionChange() {
            a.Z.debug("IndexedDb: versionchange event");
          }
          onDatabaseUpgradeNeeded(e) {
            a.Z.debug(
              "IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event)."
            );
            const t = e.target,
              i = t.transaction;
            if (!i) throw Error("Can't migrate DB without a transaction");
            const n = t.result,
              o = e.newVersion || Number.MAX_SAFE_INTEGER;
            o >= 1 &&
              e.oldVersion < 1 &&
              (n.createObjectStore("Ids", { keyPath: "type" }),
              n.createObjectStore("NotificationOpened", { keyPath: "url" }),
              n.createObjectStore("Options", { keyPath: "key" })),
              o >= 2 &&
                e.oldVersion < 2 &&
                (n.createObjectStore("Sessions", { keyPath: "sessionKey" }),
                n.createObjectStore("NotificationReceived", {
                  keyPath: "notificationId",
                }),
                n.createObjectStore("NotificationClicked", {
                  keyPath: "notificationId",
                })),
              o >= 3 &&
                e.oldVersion < 3 &&
                n.createObjectStore("SentUniqueOutcome", {
                  keyPath: "outcomeName",
                }),
              o >= 4 &&
                e.oldVersion < 4 &&
                (n.createObjectStore(s.Q.Identity, { keyPath: "modelId" }),
                n.createObjectStore(s.Q.Properties, { keyPath: "modelId" }),
                n.createObjectStore(s._.PushSubscriptions, {
                  keyPath: "modelId",
                }),
                n.createObjectStore(s._.SmsSubscriptions, {
                  keyPath: "modelId",
                }),
                n.createObjectStore(s._.EmailSubscriptions, {
                  keyPath: "modelId",
                })),
              o >= 5 &&
                e.oldVersion < 5 &&
                (this.migrateOutcomesNotificationClickedTableForV5(n, i),
                this.migrateOutcomesNotificationReceivedTableForV5(n, i)),
              o >= 6 &&
                e.oldVersion < 6 &&
                this.migrateModelNameSubscriptionsTableForV6(n, i),
              o >= 7 && e.oldVersion,
              "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0);
          }
          migrateOutcomesNotificationClickedTableForV5(e, t) {
            const i = "Outcomes.NotificationClicked";
            e.createObjectStore(i, { keyPath: "notificationId" });
            const n = "NotificationClicked",
              o = t.objectStore(n).openCursor();
            (o.onsuccess = () => {
              if (!o.result) return void e.deleteObjectStore(n);
              const s = o.result.value;
              t
                .objectStore(i)
                .put({
                  notificationId: s.notificationId || s.notification.id,
                  appId: s.appId,
                  timestamp: s.timestamp,
                }),
                o.result.continue();
            }),
              (o.onerror = () => {
                console.error(
                  "Could not migrate NotificationClicked records",
                  o.error
                );
              });
          }
          migrateOutcomesNotificationReceivedTableForV5(e, t) {
            const i = "Outcomes.NotificationReceived";
            e.createObjectStore(i, { keyPath: "notificationId" });
            const n = "NotificationReceived",
              o = t.objectStore(n).openCursor();
            (o.onsuccess = () => {
              o.result
                ? (t.objectStore(i).put(o.result.value), o.result.continue())
                : e.deleteObjectStore(n);
            }),
              (o.onerror = () => {
                console.error(
                  "Could not migrate NotificationReceived records",
                  o.error
                );
              });
          }
          migrateModelNameSubscriptionsTableForV6(e, t) {
            const i = s.Q.Subscriptions;
            let n;
            e.createObjectStore(i, { keyPath: "modelId" });
            const o = t.objectStore(s.Q.Identity).openCursor();
            (o.onsuccess = () => {
              o.result && (n = o.result.value.externalId);
            }),
              (o.onerror = () => {
                console.error(
                  "Could not find " + s.Q.Identity + " records",
                  o.error
                );
              }),
              Object.values(s._).forEach((o) => {
                const r = t.objectStore(o).openCursor();
                (r.onsuccess = () => {
                  if (!r.result) return void e.deleteObjectStore(o);
                  const a = r.result.value;
                  t
                    .objectStore(i)
                    .put(
                      Object.assign(Object.assign({}, a), {
                        modelName: s.Q.Subscriptions,
                        externalId: n,
                      })
                    ),
                    r.result.continue();
                }),
                  (r.onerror = () => {
                    console.error(
                      "Could not migrate " + o + " records",
                      r.error
                    );
                  });
              });
          }
          get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.ensureDatabaseOpen();
              return t
                ? yield new Promise((n, o) => {
                    const s = i.transaction(e).objectStore(e).get(t);
                    (s.onsuccess = () => {
                      n(s.result);
                    }),
                      (s.onerror = () => {
                        o(s.error);
                      });
                  })
                : yield new Promise((t, n) => {
                    const o = {},
                      s = i.transaction(e).objectStore(e).openCursor();
                    (s.onsuccess = (e) => {
                      const i = e.target.result;
                      if (i) {
                        const e = i.key;
                        (o[e] = i.value), i.continue();
                      } else t(o);
                    }),
                      (s.onerror = () => {
                        n(s.error);
                      });
                  });
            });
          }
          getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t = yield this.ensureDatabaseOpen();
              return yield new Promise((i, n) => {
                const o = t.transaction(e).objectStore(e).openCursor(),
                  s = [];
                (o.onsuccess = (e) => {
                  const t = e.target.result;
                  t ? (s.push(t.value), t.continue()) : i(s);
                }),
                  (o.onerror = () => {
                    n(o.error);
                  });
              });
            });
          }
          put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                yield this.ensureDatabaseOpen(),
                yield new Promise((i, n) => {
                  var o;
                  try {
                    const s =
                      null === (o = this.database) || void 0 === o
                        ? void 0
                        : o.transaction([e], "readwrite").objectStore(e).put(t);
                    s &&
                      ((s.onsuccess = () => {
                        i(t);
                      }),
                      (s.onerror = (e) => {
                        a.Z.error("Database PUT Transaction Error:", e), n(e);
                      }));
                  } catch (e) {
                    a.Z.error("Database PUT Error:", e), n(e);
                  }
                })
              );
            });
          }
          remove(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.ensureDatabaseOpen();
              return new Promise((n, o) => {
                try {
                  const s = i.transaction([e], "readwrite").objectStore(e),
                    r = t ? s.delete(t) : s.clear();
                  (r.onsuccess = () => {
                    n(t);
                  }),
                    (r.onerror = (e) => {
                      a.Z.error("Database REMOVE Transaction Error:", e), o(e);
                    });
                } catch (e) {
                  a.Z.error("Database REMOVE Error:", e), o(e);
                }
              });
            });
          }
        }
        class d {
          constructor() {
            this.lastKnownOptedIn = !0;
          }
        }
        class c {}
        class u {
          serialize() {
            return {
              deviceId: this.deviceId,
              subscriptionToken: this.subscriptionToken,
              optedOut: this.optedOut,
              createdAt: this.createdAt,
              expirationTime: this.expirationTime,
            };
          }
          static deserialize(e) {
            const t = new u();
            return (
              (t.deviceId = e.deviceId),
              (t.subscriptionToken = e.subscriptionToken),
              (t.optedOut = e.optedOut),
              (t.createdAt = e.createdAt),
              (t.expirationTime = e.expirationTime),
              t
            );
          }
        }
        var h,
          g = i(392);
        class p {
          static toDatabase(e) {
            const t = e.notification,
              i = e.result;
            return {
              id: t.notificationId,
              heading: t.title,
              content: t.body,
              data: t.additionalData,
              url: i.url,
              rr: t.confirmDelivery,
              icon: t.icon,
              image: t.image,
              tag: t.topic,
              badge: t.badgeIcon,
              action: i.actionId,
              buttons: this.toDatabaseButtons(t.actionButtons),
              timestamp: e.timestamp,
            };
          }
          static toDatabaseButtons(e) {
            return null == e
              ? void 0
              : e.map((e) => ({
                  action: e.actionId,
                  title: e.text,
                  icon: e.icon,
                  url: e.launchURL,
                }));
          }
          static fromDatabase(e) {
            return {
              result: { actionId: e.action, url: e.url },
              notification: {
                notificationId: e.id,
                title: e.heading,
                body: e.content,
                additionalData: e.data,
                launchURL: e.url,
                confirmDelivery: e.rr,
                icon: e.icon,
                image: e.image,
                topic: e.tag,
                badgeIcon: e.badge,
                actionButtons: this.toOSNotificationButtons(e.buttons),
              },
              timestamp: e.timestamp,
            };
          }
          static toOSNotificationButtons(e) {
            return null == e
              ? void 0
              : e.map((e) => ({
                  actionId: e.action,
                  text: e.title,
                  icon: e.icon,
                  launchURL: e.url,
                }));
          }
        }
        class m {
          static toDatabase(e, t) {
            return {
              appId: e,
              notificationId: t.notification.notificationId,
              timestamp: t.timestamp,
            };
          }
          static fromDatabase(e) {
            return {
              appId: e.appId,
              notificationId: e.notificationId,
              timestamp: e.timestamp,
            };
          }
        }
        class f {
          static toDatabase(e, t, i) {
            return { appId: e, notificationId: t.notificationId, timestamp: i };
          }
          static fromDatabase(e) {
            return {
              appId: e.appId,
              notificationId: e.notificationId,
              timestamp: e.timestamp,
            };
          }
        }
        !(function (e) {
          e[(e.SET = 0)] = "SET";
        })(h || (h = {}));
        const v = "Outcomes.NotificationClicked",
          b = "Outcomes.NotificationReceived";
        class S {
          constructor(e) {
            (this.databaseName = e),
              (this.emitter = new o.Z()),
              (this.database = new l(this.databaseName));
          }
          static resetInstance() {
            S.databaseInstance = null;
          }
          static get singletonInstance() {
            return (
              S.databaseInstanceName ||
                (S.databaseInstanceName = "ONE_SIGNAL_SDK_DB"),
              S.databaseInstance ||
                (S.databaseInstance = new S(S.databaseInstanceName)),
              S.databaseInstance
            );
          }
          static applyDbResultFilter(e, t, i) {
            switch (e) {
              case "Options":
                return i && t ? i.value : i && !t ? i : null;
              case "Ids":
                return i && t ? i.id : i && !t ? i : null;
              default:
                return i || null;
            }
          }
          get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.database.get(e, t);
              return S.applyDbResultFilter(e, t, i);
            });
          }
          getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.database.getAll(e);
            });
          }
          put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield new Promise((i) => {
                this.database.put(e, t).then(() => i());
              }),
                this.emitter.emit(S.EVENTS.SET, t);
            });
          }
          remove(e, t) {
            return this.database.remove(e, t);
          }
          getAppConfig() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {},
                t = yield this.get("Ids", "appId");
              return (
                (e.appId = t),
                (e.vapidPublicKey = yield this.get(
                  "Options",
                  "vapidPublicKey"
                )),
                e
              );
            });
          }
          setAppConfig(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              e.appId &&
                (yield this.put("Ids", { type: "appId", id: e.appId })),
                e.vapidPublicKey &&
                  (yield this.put("Options", {
                    key: "vapidPublicKey",
                    value: e.vapidPublicKey,
                  }));
            });
          }
          getAppState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new d();
              return (
                (e.defaultNotificationUrl = yield this.get(
                  "Options",
                  "defaultUrl"
                )),
                (e.defaultNotificationTitle = yield this.get(
                  "Options",
                  "defaultTitle"
                )),
                (e.lastKnownPushEnabled = yield this.get(
                  "Options",
                  "isPushEnabled"
                )),
                (e.pendingNotificationClickEvents =
                  yield this.getAllPendingNotificationClickEvents()),
                (e.lastKnownPushId = yield this.get("Options", "lastPushId")),
                (e.lastKnownPushToken = yield this.get(
                  "Options",
                  "lastPushToken"
                )),
                (e.lastKnownOptedIn = yield this.get("Options", "lastOptedIn")),
                e
              );
            });
          }
          setIsPushEnabled(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", { key: "isPushEnabled", value: e });
            });
          }
          setAppState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                (e.defaultNotificationUrl &&
                  (yield this.put("Options", {
                    key: "defaultUrl",
                    value: e.defaultNotificationUrl,
                  })),
                (e.defaultNotificationTitle ||
                  "" === e.defaultNotificationTitle) &&
                  (yield this.put("Options", {
                    key: "defaultTitle",
                    value: e.defaultNotificationTitle,
                  })),
                null != e.lastKnownPushEnabled &&
                  (yield this.setIsPushEnabled(e.lastKnownPushEnabled)),
                null != e.lastKnownPushId &&
                  (yield this.put("Options", {
                    key: "lastPushId",
                    value: e.lastKnownPushId,
                  })),
                null != e.lastKnownPushToken &&
                  (yield this.put("Options", {
                    key: "lastPushToken",
                    value: e.lastKnownPushToken,
                  })),
                null != e.lastKnownOptedIn &&
                  (yield this.put("Options", {
                    key: "lastOptedIn",
                    value: e.lastKnownOptedIn,
                  })),
                e.pendingNotificationClickEvents)
              ) {
                const t = Object.keys(e.pendingNotificationClickEvents);
                for (const i of t) {
                  const t = e.pendingNotificationClickEvents[i];
                  t
                    ? yield this.put("NotificationOpened", {
                        url: i,
                        data: t.data,
                        timestamp: t.timestamp,
                      })
                    : null === t &&
                      (yield this.remove("NotificationOpened", i));
                }
              }
            });
          }
          getUserState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new c();
              return (
                (e.previousOneSignalId = ""),
                (e.previousExternalId = ""),
                (e.previousOneSignalId = yield this.get(
                  "Options",
                  "previousOneSignalId"
                )),
                (e.previousExternalId = yield this.get(
                  "Options",
                  "previousExternalId"
                )),
                e
              );
            });
          }
          setUserState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", {
                key: "previousOneSignalId",
                value: e.previousOneSignalId,
              }),
                yield this.put("Options", {
                  key: "previousExternalId",
                  value: e.previousExternalId,
                });
            });
          }
          getSubscription() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new u();
              (e.deviceId = yield this.get("Ids", "userId")),
                (e.subscriptionToken = yield this.get("Ids", "registrationId"));
              const t = yield this.get("Options", "optedOut"),
                i = yield this.get("Options", "subscription"),
                n = yield this.get("Options", "subscriptionCreatedAt"),
                o = yield this.get("Options", "subscriptionExpirationTime");
              return (
                (e.optedOut = null != t ? t : null != i && !i),
                (e.createdAt = n),
                (e.expirationTime = o),
                e
              );
            });
          }
          setDeviceId(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Ids", { type: "userId", id: e });
            });
          }
          setSubscription(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              e.deviceId && (yield this.setDeviceId(e.deviceId)),
                void 0 !== e.subscriptionToken &&
                  (yield this.put("Ids", {
                    type: "registrationId",
                    id: e.subscriptionToken,
                  })),
                null != e.optedOut &&
                  (yield this.put("Options", {
                    key: "optedOut",
                    value: e.optedOut,
                  })),
                null != e.createdAt &&
                  (yield this.put("Options", {
                    key: "subscriptionCreatedAt",
                    value: e.createdAt,
                  })),
                null != e.expirationTime
                  ? yield this.put("Options", {
                      key: "subscriptionExpirationTime",
                      value: e.expirationTime,
                    })
                  : yield this.remove("Options", "subscriptionExpirationTime");
            });
          }
          setJWTToken(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Ids", { type: "jwtToken", id: e });
            });
          }
          getJWTToken() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Ids", "jwtToken");
            });
          }
          setProvideUserConsent(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", { key: "userConsent", value: e });
            });
          }
          getConsentGiven() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Options", "userConsent");
            });
          }
          getSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Sessions", e);
            });
          }
          setSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Sessions", e);
            });
          }
          removeSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.remove("Sessions", e);
            });
          }
          getLastNotificationClickedForOutcomes(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              let t = [];
              try {
                t = yield this.getAllNotificationClickedForOutcomes();
              } catch (e) {
                a.Z.error("Database.getLastNotificationClickedForOutcomes", e);
              }
              return t.find((t) => t.appId === e) || null;
            });
          }
          getAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (yield this.getAll(v)).map((e) => m.fromDatabase(e));
            });
          }
          putNotificationClickedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put(v, m.toDatabase(e, t));
            });
          }
          putNotificationClickedEventPendingUrlOpening(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("NotificationOpened", p.toDatabase(e));
            });
          }
          getAllPendingNotificationClickEvents() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {},
                t = yield this.getAll("NotificationOpened");
              for (const i of t) {
                const t = p.fromDatabase(i),
                  n = t.result.url;
                n && (e[n] = t);
              }
              return e;
            });
          }
          removeAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.remove(v);
            });
          }
          getAllNotificationReceivedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (yield this.getAll(b)).map((e) => f.fromDatabase(e));
            });
          }
          putNotificationReceivedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put(b, f.toDatabase(e, t, new Date().getTime()));
            });
          }
          resetSentUniqueOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = (yield this.getAll("SentUniqueOutcome")).map(
                (e) => (
                  (e.sentDuringSession = null), S.put("SentUniqueOutcome", e)
                )
              );
              yield Promise.all(e);
            });
          }
          static rebuild() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return Promise.all([
                S.singletonInstance.remove("Ids"),
                S.singletonInstance.remove("NotificationOpened"),
                S.singletonInstance.remove("Options"),
                S.singletonInstance.remove(b),
                S.singletonInstance.remove(v),
                S.singletonInstance.remove("SentUniqueOutcome"),
              ]);
            });
          }
          static on(...e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return S.singletonInstance.emitter.on.apply(
                S.singletonInstance.emitter,
                e
              );
            });
          }
          static setIsPushEnabled(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return S.singletonInstance.setIsPushEnabled(e);
            });
          }
          static getCurrentSession() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getSession(g.Ky);
            });
          }
          static upsertSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.setSession(e);
            });
          }
          static cleanupCurrentSession() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.removeSession(g.Ky);
            });
          }
          static setSubscription(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setSubscription(e);
            });
          }
          static getSubscription() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getSubscription();
            });
          }
          static setJWTToken(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setJWTToken(e);
            });
          }
          static getJWTToken() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getJWTToken();
            });
          }
          static setConsentGiven(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setProvideUserConsent(e);
            });
          }
          static getConsentGiven() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getConsentGiven();
            });
          }
          static setAppState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setAppState(e);
            });
          }
          static getAppState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAppState();
            });
          }
          static setUserState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setUserState(e);
            });
          }
          static getUserState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getUserState();
            });
          }
          static setAppConfig(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setAppConfig(e);
            });
          }
          static getAppConfig() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAppConfig();
            });
          }
          static getLastNotificationClickedForOutcomes(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getLastNotificationClickedForOutcomes(
                e
              );
            });
          }
          static removeAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.removeAllNotificationClickedForOutcomes();
            });
          }
          static getAllNotificationReceivedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAllNotificationReceivedForOutcomes();
            });
          }
          static putNotificationReceivedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationReceivedForOutcomes(
                e,
                t
              );
            });
          }
          static getAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAllNotificationClickedForOutcomes();
            });
          }
          static putNotificationClickedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationClickedForOutcomes(
                e,
                t
              );
            });
          }
          static putNotificationClickedEventPendingUrlOpening(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationClickedEventPendingUrlOpening(
                e
              );
            });
          }
          static resetSentUniqueOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.resetSentUniqueOutcomes();
            });
          }
          static setDeviceId(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.setDeviceId(e);
            });
          }
          static remove(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.remove(e, t);
            });
          }
          static put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.put(e, t);
            });
          }
          static get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.get(e, t);
            });
          }
          static getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAll(e);
            });
          }
        }
        S.EVENTS = h;
      },
      644: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => d });
        var n = i(655),
          o = i(930),
          s = i(326),
          r = i(50),
          a = i(107);
        const l = [
          "notifyButtonHovering",
          "notifyButtonHover",
          "notifyButtonButtonClick",
          "notifyButtonLauncherClick",
          "animatedElementHiding",
          "animatedElementHidden",
          "animatedElementShowing",
          "animatedElementShown",
          "activeAnimatedElementActivating",
          "activeAnimatedElementActive",
          "activeAnimatedElementInactivating",
          "activeAnimatedElementInactive",
        ];
        class d {
          static trigger(e, t, i) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (!r.Z.contains(l, e)) {
                const i = t,
                  n = r.Z.capitalize(s.Z.getWindowEnv().toString());
                i || !1 === i
                  ? a.Z.debug(`(${n}) Â» ${e}:`, i)
                  : a.Z.debug(`(${n}) Â» ${e}`);
              }
              if (o.Z.isBrowser()) {
                if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                  if (OneSignal.initialized) return;
                  OneSignal.initialized = !0;
                }
                i ? yield i.emit(e, t) : yield OneSignal.emitter.emit(e, t);
              }
            });
          }
        }
      },
      271: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => d, Z: () => c });
        var n = i(470),
          o = i.n(n),
          s = i(930),
          r = i(50),
          a = i(107),
          l = i(450);
        class d {
          static getBaseUrl() {
            return location.origin;
          }
          static isLocalhostAllowedAsSecureOrigin() {
            return (
              OneSignal.config &&
              OneSignal.config.userConfig &&
              !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            );
          }
          static redetectBrowserUserAgent() {
            return "" === (0, l.M)().name && "" === (0, l.M)().version
              ? o()._detect(navigator.userAgent)
              : o();
          }
          static isValidUuid(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
              e
            );
          }
          static getRandomUuid() {
            const e =
              "undefined" == typeof window
                ? i.g.crypto
                : window.crypto || window.msCrypto;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (t) {
                const i = e.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                return ("x" == t ? i : (3 & i) | 8).toString(16);
              }
            );
          }
          static logMethodCall(e, ...t) {
            return a.Z.debug(`Called ${e}(${t.map(r.c.stringify).join(", ")})`);
          }
          static isSafari() {
            return s.Z.isBrowser() && void 0 !== window.safari;
          }
        }
        const c = d;
      },
      985: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => r });
        var n = i(655),
          o = i(934),
          s = i(644);
        class r {
          static triggerNotificationPermissionChanged(e = !1) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (!r.executing) {
                r.executing = !0;
                try {
                  yield r.privateTriggerNotificationPermissionChanged(e);
                } finally {
                  r.executing = !1;
                }
              }
            });
          }
          static privateTriggerNotificationPermissionChanged(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t =
                  yield OneSignal.context.permissionManager.getPermissionStatus(),
                i = yield o.ZP.get("Options", "notificationPermission");
              (t !== i || e) &&
                (yield o.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                }),
                s.Z.trigger(
                  OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                  t
                ),
                this.triggerBooleanPermissionChangeEvent(i, t, e));
            });
          }
          static triggerBooleanPermissionChangeEvent(e, t, i) {
            const n = "granted" === t;
            (n !== ("granted" === e) || i) &&
              s.Z.trigger(
                OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_BOOLEAN,
                n
              );
          }
        }
        r.executing = !1;
      },
      450: (e, t, i) => {
        "use strict";
        i.d(t, { M: () => o });
        var n = i(470);
        function o() {
          return {
            mobile: n.mobile,
            tablet: n.tablet,
            name: n.name.toLowerCase(),
            version: n.version,
          };
        }
      },
      353: (e, t, i) => {
        "use strict";
        i.d(t, {
          BH: () => b,
          ER: () => P,
          IH: () => E,
          IM: () => m,
          IV: () => h,
          JX: () => c,
          Ld: () => w,
          S6: () => T,
          TP: () => O,
          Uj: () => S,
          bF: () => v,
          bJ: () => u,
          gd: () => k,
          gw: () => y,
          iJ: () => C,
          jI: () => f,
          p$: () => x,
          r3: () => I,
          tI: () => g,
          tf: () => d,
          vV: () => p,
        });
        var n = i(655),
          o = (i(326), i(468), i(271)),
          s = i(985),
          r = i(50),
          a = i(107),
          l = i(450);
        function d(e) {
          const t = document.querySelectorAll(e);
          if (t.length > 0)
            for (let e = 0; e < t.length; e++) {
              const i = t[e].parentNode;
              i && i.removeChild(t[e]);
            }
        }
        function c() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return new Promise((e) => {
              OneSignal.initialized
                ? e()
                : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e);
            });
          });
        }
        function u(e = !1) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return s.Q.triggerNotificationPermissionChanged(e);
          });
        }
        function h(e, ...t) {
          if (e) return e.apply(null, t);
        }
        function g(e, ...t) {
          return o.Q.logMethodCall(e, ...t);
        }
        function p(e) {
          return (
            !!e &&
            !!e.match(
              /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
            )
          );
        }
        function m(e, t, i) {
          let n;
          if (((n = "string" == typeof e ? document.querySelector(e) : e), !n))
            throw new Error(
              `${e} must be a CSS selector string or DOM Element object.`
            );
          n.insertAdjacentHTML(t, i);
        }
        function f(e) {
          if ("string" == typeof e) {
            const t = document.querySelector(e);
            if (null === t)
              throw new Error(`Cannot find element with selector "${e}"`);
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          }
        }
        function v(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.add(t);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            e.classList.add(t);
          }
        }
        function b(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.remove(t);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            e.classList.remove(t);
          }
        }
        function S(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            return i.classList.contains(t);
          }
          if ("object" == typeof e) return e.classList.contains(t);
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        }
        function y(e) {
          return new Promise((t) => {
            setTimeout(t, e);
          });
        }
        function w() {
          return Promise.resolve();
        }
        function I(e, t) {
          return r.c.contains(e, t);
        }
        function O(e) {
          return o.Q.isValidUuid(e);
        }
        function E(e, t, i, n = !1) {
          if (
            (t || a.Z.error("Cannot call on() with no event: ", t),
            i || a.Z.error("Cannot call on() with no task: ", i),
            "string" == typeof e)
          ) {
            const n = document.querySelectorAll(e);
            if (n.length > 0) for (let e = 0; e < n.length; e++) E(n[e], t, i);
          } else if (
            ((o = e), "[object Array]" === Object.prototype.toString.call(o))
          )
            for (let n = 0; n < e.length; n++) E(e[n], t, i);
          else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            {
              const o = function (t) {
                const s = function () {
                  e.removeEventListener(t.type, o);
                };
                n || s(), i(t, s);
              };
              e.addEventListener(t, o);
            }
          }
          var o;
        }
        function C() {
          return window.__oneSignalSdkLoadCount || 0;
        }
        function P() {
          window.__oneSignalSdkLoadCount = C() + 1;
        }
        function T(e) {
          return e
            ? "safari" == (0, l.M)().name && e.safari
              ? e.safari
              : "firefox" === (0, l.M)().name && e.firefox
              ? e.firefox
              : e.chrome || e.firefox || e.safari || "default-icon"
            : "default-icon";
        }
        function k(e) {
          const t = document.querySelector(e);
          return (
            t ||
            (a.Z.debug(`No instance of ${e} found. Returning stub.`),
            document.createElement("div"))
          );
        }
        function x(e) {
          return JSON.parse(JSON.stringify(e));
        }
      },
      655: (e, t, i) => {
        "use strict";
        i.d(t, { _T: () => n, mG: () => o });
        function n(e, t) {
          var i = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (i[n[o]] = e[n[o]]);
          }
          return i;
        }
        function o(e, t, i, n) {
          return new (i || (i = Promise))(function (o, s) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function a(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, a);
            }
            l((n = n.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
      },
    },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.amdD = function () {
    throw new Error("define cannot be used indirect");
  }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = i(353),
        t = i(107),
        n = i(121);
      class o {
        static processOneSignalDeferredArray(e) {
          for (const i of e)
            try {
              n.Z.push(i);
            } catch (e) {
              t.Z.error(e);
            }
        }
      }
      !(function () {
        if (((0, e.ER)(), (0, e.iJ)() > 1))
          return (
            t.Z.warn(
              "OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."
            ),
            void t.Z.debug(
              `OneSignal: Exiting from SDK initialization to prevent double-initialization errors. Occurred ${(0,
              e.iJ)()} times.`
            )
          );
        window.OneSignal = i(121).Z;
        const n = window.OneSignalDeferred;
        (window.OneSignalDeferred = i(191).Z),
          o.processOneSignalDeferredArray(n);
      })();
    })();
})();

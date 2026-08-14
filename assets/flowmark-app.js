function MS(t, a) {
    for (var s = 0; s < a.length; s++) {
        const l = a[s];
        if (typeof l != "string" && !Array.isArray(l)) {
            for (const o in l)
                if (o !== "default" && !(o in t)) {
                    const u = Object.getOwnPropertyDescriptor(l, o);
                    u && Object.defineProperty(t, o, u.get ? u : {
                        enumerable: !0,
                        get: () => l[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
    new MutationObserver(o => {
        for (const u of o)
            if (u.type === "childList")
                for (const d of u.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && l(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(o) {
        const u = {};
        return o.integrity && (u.integrity = o.integrity), o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? u.credentials = "include" : o.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
    }

    function l(o) {
        if (o.ep) return;
        o.ep = !0;
        const u = s(o);
        fetch(o.href, u)
    }
})();

function kv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Qd = {
        exports: {}
    },
    qi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dy;

function NS() {
    if (dy) return qi;
    dy = 1;
    var t = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.fragment");

    function s(l, o, u) {
        var d = null;
        if (u !== void 0 && (d = "" + u), o.key !== void 0 && (d = "" + o.key), "key" in o) {
            u = {};
            for (var h in o) h !== "key" && (u[h] = o[h])
        } else u = o;
        return o = u.ref, {
            $$typeof: t,
            type: l,
            key: d,
            ref: o !== void 0 ? o : null,
            props: u
        }
    }
    return qi.Fragment = a, qi.jsx = s, qi.jsxs = s, qi
}
var fy;

function HS() {
    return fy || (fy = 1, Qd.exports = NS()), Qd.exports
}
var y = HS(),
    Gr = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    zS = class extends Gr {
        #t;
        #e;
        #n;
        constructor() {
            super(), this.#n = t => {
                if (typeof window < "u" && window.addEventListener) {
                    const a = () => t();
                    return window.addEventListener("visibilitychange", a, !1), () => {
                        window.removeEventListener("visibilitychange", a)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), this.#e = void 0)
        }
        setEventListener(t) {
            this.#n = t, this.#e?.(), this.#e = t(a => {
                typeof a == "boolean" ? this.setFocused(a) : this.onFocus()
            })
        }
        setFocused(t) {
            this.#t !== t && (this.#t = t, this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(a => {
                a(t)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
        }
    },
    Gf = new zS,
    kS = {
        setTimeout: (t, a) => setTimeout(t, a),
        clearTimeout: t => clearTimeout(t),
        setInterval: (t, a) => setInterval(t, a),
        clearInterval: t => clearInterval(t)
    },
    US = class {
        #t = kS;
        #e = !1;
        setTimeoutProvider(t) {
            this.#t = t
        }
        setTimeout(t, a) {
            return this.#t.setTimeout(t, a)
        }
        clearTimeout(t) {
            this.#t.clearTimeout(t)
        }
        setInterval(t, a) {
            return this.#t.setInterval(t, a)
        }
        clearInterval(t) {
            this.#t.clearInterval(t)
        }
    },
    Br = new US;

function LS(t) {
    setTimeout(t, 0)
}
var BS = typeof window > "u" || "Deno" in globalThis;

function Gt() {}

function qS(t, a) {
    return typeof t == "function" ? t(a) : t
}

function df(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function Uv(t, a) {
    return Math.max(t + (a || 0) - Date.now(), 0)
}

function ur(t, a) {
    return typeof t == "function" ? t(a) : t
}

function vn(t, a) {
    return typeof t == "function" ? t(a) : t
}

function hy(t, a) {
    const {
        type: s = "all",
        exact: l,
        fetchStatus: o,
        predicate: u,
        queryKey: d,
        stale: h
    } = t;
    if (d) {
        if (l) {
            if (a.queryHash !== Vf(d, a.options)) return !1
        } else if (!Bs(a.queryKey, d)) return !1
    }
    if (s !== "all") {
        const p = a.isActive();
        if (s === "active" && !p || s === "inactive" && p) return !1
    }
    return !(typeof h == "boolean" && a.isStale() !== h || o && o !== a.state.fetchStatus || u && !u(a))
}

function py(t, a) {
    const {
        exact: s,
        status: l,
        predicate: o,
        mutationKey: u
    } = t;
    if (u) {
        if (!a.options.mutationKey) return !1;
        if (s) {
            if (dr(a.options.mutationKey) !== dr(u)) return !1
        } else if (!Bs(a.options.mutationKey, u)) return !1
    }
    return !(l && a.state.status !== l || o && !o(a))
}

function Vf(t, a) {
    return (a?.queryKeyHashFn || dr)(t)
}

function dr(t) {
    return JSON.stringify(t, (a, s) => ff(s) ? Object.keys(s).sort().reduce((l, o) => (l[o] = s[o], l), {}) : s)
}

function Bs(t, a) {
    if (t === a) return !0;
    if (typeof t != typeof a) return !1;
    if (t && a && typeof t == "object" && typeof a == "object") {
        if (Array.isArray(t) && Array.isArray(a)) {
            for (let l = 0; l < a.length; l++)
                if (!Bs(t[l], a[l])) return !1;
            return !0
        }
        const s = Object.keys(a);
        for (const l of s)
            if (!Bs(t[l], a[l])) return !1;
        return !0
    }
    return !1
}
var QS = Object.prototype.hasOwnProperty;

function Kf(t, a, s = 0) {
    if (t === a) return t;
    if (s > 500) return a;
    const l = my(t) && my(a);
    if (!l && !(ff(t) && ff(a))) return a;
    const u = (l ? t : Object.keys(t)).length,
        d = l ? a : Object.keys(a),
        h = d.length,
        p = l ? new Array(h) : {};
    let g = 0;
    for (let b = 0; b < h; b++) {
        const m = l ? b : d[b],
            S = t[m],
            E = a[m];
        if (S === E) {
            p[m] = S, (l ? b < u : QS.call(t, m)) && g++;
            continue
        }
        if (S === null || E === null || typeof S != "object" || typeof E != "object") {
            p[m] = E;
            continue
        }
        const A = Kf(S, E, s + 1);
        p[m] = A, A === S && g++
    }
    return u === h && g === u ? t : p
}

function Fi(t, a) {
    if (!a || Object.keys(t).length !== Object.keys(a).length) return !1;
    for (const s in t)
        if (t[s] !== a[s]) return !1;
    return !0
}

function my(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function ff(t) {
    if (!gy(t)) return !1;
    const a = t.constructor;
    if (a === void 0) return !0;
    const s = a.prototype;
    return !(!gy(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function gy(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function PS(t) {
    return new Promise(a => {
        Br.setTimeout(a, t)
    })
}

function hf(t, a, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(t, a) : s.structuralSharing !== !1 ? Kf(t, a) : a
}

function YS(t, a, s = 0) {
    const l = [...t, a];
    return s && l.length > s ? l.slice(1) : l
}

function GS(t, a, s = 0) {
    const l = [a, ...t];
    return s && l.length > s ? l.slice(0, -1) : l
}
var xn = Symbol();

function Lv(t, a) {
    return !t.queryFn && a?.initialPromise ? () => a.initialPromise : !t.queryFn || t.queryFn === xn ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function Xf(t, a) {
    return typeof t == "function" ? t(...a) : !!t
}

function VS(t, a, s) {
    let l = !1,
        o;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (o ??= a(), l || (l = !0, o.aborted ? s() : o.addEventListener("abort", s, {
            once: !0
        })), o)
    }), t
}
var Ji = (() => {
    let t = () => BS;
    return {
        isServer() {
            return t()
        },
        setIsServer(a) {
            t = a
        }
    }
})();

function pf() {
    let t, a;
    const s = new Promise((o, u) => {
        t = o, a = u
    });
    s.status = "pending", s.catch(() => {});

    function l(o) {
        Object.assign(s, o), delete s.resolve, delete s.reject
    }
    return s.resolve = o => {
        l({
            status: "fulfilled",
            value: o
        }), t(o)
    }, s.reject = o => {
        l({
            status: "rejected",
            reason: o
        }), a(o)
    }, s
}
var KS = LS;

function XS() {
    let t = [],
        a = 0,
        s = h => {
            h()
        },
        l = h => {
            h()
        },
        o = KS;
    const u = h => {
            a ? t.push(h) : o(() => {
                s(h)
            })
        },
        d = () => {
            const h = t;
            t = [], h.length && o(() => {
                l(() => {
                    h.forEach(p => {
                        s(p)
                    })
                })
            })
        };
    return {
        batch: h => {
            let p;
            a++;
            try {
                p = h()
            } finally {
                a--, a || d()
            }
            return p
        },
        batchCalls: h => (...p) => {
            u(() => {
                h(...p)
            })
        },
        schedule: u,
        setNotifyFunction: h => {
            s = h
        },
        setBatchNotifyFunction: h => {
            l = h
        },
        setScheduler: h => {
            o = h
        }
    }
}
var ht = XS(),
    ZS = class extends Gr {
        #t = !0;
        #e;
        #n;
        constructor() {
            super(), this.#n = t => {
                if (typeof window < "u" && window.addEventListener) {
                    const a = () => t(!0),
                        s = () => t(!1);
                    return window.addEventListener("online", a, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", a), window.removeEventListener("offline", s)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), this.#e = void 0)
        }
        setEventListener(t) {
            this.#n = t, this.#e?.(), this.#e = t(this.setOnline.bind(this))
        }
        setOnline(t) {
            this.#t !== t && (this.#t = t, this.listeners.forEach(s => {
                s(t)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    Io = new ZS;

function IS(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function Bv(t) {
    return (t ?? "online") === "online" ? Io.isOnline() : !0
}
var mf = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t?.revert, this.silent = t?.silent
    }
};

function qv(t) {
    let a = !1,
        s = 0,
        l;
    const o = pf(),
        u = () => o.status !== "pending",
        d = O => {
            if (!u()) {
                const R = new mf(O);
                S(R), t.onCancel?.(R)
            }
        },
        h = () => {
            a = !0
        },
        p = () => {
            a = !1
        },
        g = () => Gf.isFocused() && (t.networkMode === "always" || Io.isOnline()) && t.canRun(),
        b = () => Bv(t.networkMode) && t.canRun(),
        m = O => {
            u() || (l?.(), o.resolve(O))
        },
        S = O => {
            u() || (l?.(), o.reject(O))
        },
        E = () => new Promise(O => {
            l = R => {
                (u() || g()) && O(R)
            }, t.onPause?.()
        }).then(() => {
            l = void 0, u() || t.onContinue?.()
        }),
        A = () => {
            if (u()) return;
            let O;
            const R = s === 0 ? t.initialPromise : void 0;
            try {
                O = R ?? t.fn()
            } catch (N) {
                O = Promise.reject(N)
            }
            Promise.resolve(O).then(m).catch(N => {
                if (u()) return;
                const Y = t.retry ?? (Ji.isServer() ? 0 : 3),
                    K = t.retryDelay ?? IS,
                    Z = typeof K == "function" ? K(s, N) : K,
                    B = Y === !0 || typeof Y == "number" && s < Y || typeof Y == "function" && Y(s, N);
                if (a || !B) {
                    S(N);
                    return
                }
                s++, t.onFail?.(s, N), PS(Z).then(() => g() ? void 0 : E()).then(() => {
                    a ? S(N) : A()
                })
            })
        };
    return {
        promise: o,
        status: () => o.status,
        cancel: d,
        continue: () => (l?.(), o),
        cancelRetry: h,
        continueRetry: p,
        canStart: b,
        start: () => (b() ? A() : E().then(A), o)
    }
}
var Qv = class {
    #t;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), df(this.gcTime) && (this.#t = Br.setTimeout(() => {
            this.optionalRemove()
        }, this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Ji.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#t !== void 0 && (Br.clearTimeout(this.#t), this.#t = void 0)
    }
};

function $S(t) {
    return {
        onFetch: (a, s) => {
            const l = a.options,
                o = a.fetchOptions?.meta?.fetchMore?.direction,
                u = a.state.data?.pages || [],
                d = a.state.data?.pageParams || [];
            let h = {
                    pages: [],
                    pageParams: []
                },
                p = 0;
            const g = async () => {
                let b = !1;
                const m = A => {
                        VS(A, () => a.signal, () => b = !0)
                    },
                    S = Lv(a.options, a.fetchOptions),
                    E = async (A, O, R) => {
                        if (b) return Promise.reject(a.signal.reason);
                        if (O == null && A.pages.length) return Promise.resolve(A);
                        const Y = (() => {
                                const L = {
                                    client: a.client,
                                    queryKey: a.queryKey,
                                    pageParam: O,
                                    direction: R ? "backward" : "forward",
                                    meta: a.options.meta
                                };
                                return m(L), L
                            })(),
                            K = await S(Y),
                            {
                                maxPages: Z
                            } = a.options,
                            B = R ? GS : YS;
                        return {
                            pages: B(A.pages, K, Z),
                            pageParams: B(A.pageParams, O, Z)
                        }
                    };
                if (o && u.length) {
                    const A = o === "backward",
                        O = A ? Pv : gf,
                        R = {
                            pages: u,
                            pageParams: d
                        },
                        N = O(l, R);
                    h = await E(R, N, A)
                } else {
                    const A = t ?? u.length;
                    do {
                        const O = p === 0 ? d[0] ?? l.initialPageParam : gf(l, h);
                        if (p > 0 && O == null) break;
                        h = await E(h, O), p++
                    } while (p < A)
                }
                return h
            };
            a.options.persister ? a.fetchFn = () => a.options.persister?.(g, {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal
            }, s) : a.fetchFn = g
        }
    }
}

function gf(t, {
    pages: a,
    pageParams: s
}) {
    const l = a.length - 1;
    return a.length > 0 ? t.getNextPageParam(a[l], a, s[l], s) : void 0
}

function Pv(t, {
    pages: a,
    pageParams: s
}) {
    return a.length > 0 ? t.getPreviousPageParam?.(a[0], a, s[0], s) : void 0
}

function FS(t, a) {
    return a ? gf(t, a) != null : !1
}

function JS(t, a) {
    return !a || !t.getPreviousPageParam ? !1 : Pv(t, a) != null
}
var WS = class extends Qv {
    #t;
    #e;
    #n;
    #a;
    #r;
    #s;
    #l;
    #i;
    constructor(t) {
        super(), this.#i = !1, this.#l = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#r = t.client, this.#a = this.#r.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#e = vy(this.options), this.state = t.state ?? this.#e, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#t
    }
    get promise() {
        return this.#s?.promise
    }
    setOptions(t) {
        if (this.options = {
                ...this.#l,
                ...t
            }, t?._type && (this.#t = t._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
            const a = vy(this.options);
            a.data !== void 0 && (this.setState(yy(a.data, a.dataUpdatedAt)), this.#e = a)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#a.remove(this)
    }
    setData(t, a) {
        const s = hf(this.state.data, t, this.options);
        return this.#o({
            data: s,
            type: "success",
            dataUpdatedAt: a?.updatedAt,
            manual: a?.manual
        }), s
    }
    setState(t) {
        this.#o({
            type: "setState",
            state: t
        })
    }
    cancel(t) {
        const a = this.#s?.promise;
        return this.#s?.cancel(t), a ? a.then(Gt).catch(Gt) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(), this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(t => vn(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === xn || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => ur(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t = 0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Uv(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        this.observers.find(a => a.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }), this.#s?.continue()
    }
    onOnline() {
        this.observers.find(a => a.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }), this.#s?.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#a.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(a => a !== t), this.observers.length || (this.#s && (this.#i || this.#u() ? this.#s.cancel({
            revert: !0
        }) : this.#s.cancelRetry()), this.scheduleGc()), this.#a.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #u() {
        return this.state.fetchStatus === "paused" && this.state.status === "pending"
    }
    invalidate() {
        this.state.isInvalidated || this.#o({
            type: "invalidate"
        })
    }
    async fetch(t, a) {
        if (this.state.fetchStatus !== "idle" && this.#s?.status() !== "rejected") {
            if (this.state.data !== void 0 && a?.cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#s) return this.#s.continueRetry(), this.#s.promise
        }
        if (t && this.setOptions(t), !this.options.queryFn) {
            const p = this.observers.find(g => g.options.queryFn);
            p && this.setOptions(p.options)
        }
        const s = new AbortController,
            l = p => {
                Object.defineProperty(p, "signal", {
                    enumerable: !0,
                    get: () => (this.#i = !0, s.signal)
                })
            },
            o = () => {
                const p = Lv(this.options, a),
                    b = (() => {
                        const m = {
                            client: this.#r,
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return l(m), m
                    })();
                return this.#i = !1, this.options.persister ? this.options.persister(p, b, this) : p(b)
            },
            d = (() => {
                const p = {
                    fetchOptions: a,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#r,
                    state: this.state,
                    fetchFn: o
                };
                return l(p), p
            })();
        (this.#t === "infinite" ? $S(this.options.pages) : this.options.behavior)?.onFetch(d, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#o({
            type: "fetch",
            meta: d.fetchOptions?.meta
        }), this.#s = qv({
            initialPromise: a?.initialPromise,
            fn: d.fetchFn,
            onCancel: p => {
                p instanceof mf && p.revert && this.setState({
                    ...this.#n,
                    fetchStatus: "idle"
                }), s.abort()
            },
            onFail: (p, g) => {
                this.#o({
                    type: "failed",
                    failureCount: p,
                    error: g
                })
            },
            onPause: () => {
                this.#o({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.#o({
                    type: "continue"
                })
            },
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        });
        try {
            const p = await this.#s.start();
            if (p === void 0) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(p), this.#a.config.onSuccess?.(p, this), this.#a.config.onSettled?.(p, this.state.error, this), p
        } catch (p) {
            if (p instanceof mf) {
                if (p.silent) return this.#s.promise;
                if (p.revert) {
                    if (this.state.data === void 0) throw p;
                    return this.state.data
                }
            }
            throw this.#o({
                type: "error",
                error: p
            }), this.#a.config.onError?.(p, this), this.#a.config.onSettled?.(this.state.data, p, this), p
        } finally {
            this.scheduleGc()
        }
    }
    #o(t) {
        const a = s => {
            switch (t.type) {
                case "failed":
                    return {
                        ...s, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                    };
                case "pause":
                    return {
                        ...s, fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...s, fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...s, ...Yv(s.data, this.options), fetchMeta: t.meta ?? null
                    };
                case "success":
                    const l = {
                        ...s,
                        ...yy(t.data, t.dataUpdatedAt),
                        dataUpdateCount: s.dataUpdateCount + 1,
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return this.#n = t.manual ? l : void 0, l;
                case "error":
                    const o = t.error;
                    return {
                        ...s, error: o, errorUpdateCount: s.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: s.fetchFailureCount + 1, fetchFailureReason: o, fetchStatus: "idle", status: "error", isInvalidated: !0
                    };
                case "invalidate":
                    return {
                        ...s, isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...s, ...t.state
                    }
            }
        };
        this.state = a(this.state), ht.batch(() => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }), this.#a.notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }
};

function Yv(t, a) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Bv(a.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function yy(t, a) {
    return {
        data: t,
        dataUpdatedAt: a ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function vy(t) {
    const a = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        s = a !== void 0,
        l = s ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: a,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? l ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var cl = class extends Gr {
    constructor(t, a) {
        super(), this.options = a, this.#t = t, this.#i = null, this.#l = pf(), this.bindMethods(), this.setOptions(a)
    }
    #t;
    #e = void 0;
    #n = void 0;
    #a = void 0;
    #r;
    #s;
    #l;
    #i;
    #u;
    #o;
    #h;
    #d;
    #p;
    #c;
    #m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#e.addObserver(this), by(this.#e, this.options) ? this.#f() : this.updateResult(), this.#b())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return yf(this.#e, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return yf(this.#e, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.#x(), this.#S(), this.#e.removeObserver(this)
    }
    setOptions(t) {
        const a = this.options,
            s = this.#e;
        if (this.options = this.#t.defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof vn(this.options.enabled, this.#e) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#w(), this.#e.setOptions(this.options), a._defaulted && !Fi(this.options, a) && this.#t.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#e,
            observer: this
        });
        const l = this.hasListeners();
        l && xy(this.#e, s, this.options, a) && this.#f(), this.updateResult(), l && (this.#e !== s || vn(this.options.enabled, this.#e) !== vn(a.enabled, this.#e) || ur(this.options.staleTime, this.#e) !== ur(a.staleTime, this.#e)) && this.#g();
        const o = this.#y();
        l && (this.#e !== s || vn(this.options.enabled, this.#e) !== vn(a.enabled, this.#e) || o !== this.#c) && this.#v(o)
    }
    getOptimisticResult(t) {
        const a = this.#t.getQueryCache().build(this.#t, t),
            s = this.createResult(a, t);
        return tw(this, s) && (this.#a = s, this.#s = this.options, this.#r = this.#e.state), s
    }
    getCurrentResult() {
        return this.#a
    }
    trackResult(t, a) {
        return new Proxy(t, {
            get: (s, l) => (this.trackProp(l), a?.(l), l === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#l.status === "pending" && this.#l.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(s, l))
        })
    }
    trackProp(t) {
        this.#m.add(t)
    }
    getCurrentQuery() {
        return this.#e
    }
    refetch({
        ...t
    } = {}) {
        return this.fetch({
            ...t
        })
    }
    fetchOptimistic(t) {
        const a = this.#t.defaultQueryOptions(t),
            s = this.#t.getQueryCache().build(this.#t, a);
        return s.fetch().then(() => this.createResult(s, a))
    }
    fetch(t) {
        return this.#f({
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then(() => (this.updateResult(), this.#a))
    }
    #f(t) {
        this.#w();
        let a = this.#e.fetch(this.options, t);
        return t?.throwOnError || (a = a.catch(Gt)), a
    }
    #g() {
        this.#x();
        const t = ur(this.options.staleTime, this.#e);
        if (Ji.isServer() || this.#a.isStale || !df(t)) return;
        const s = Uv(this.#a.dataUpdatedAt, t) + 1;
        this.#d = Br.setTimeout(() => {
            this.#a.isStale || this.updateResult()
        }, s)
    }
    #y() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ?? !1
    }
    #v(t) {
        this.#S(), this.#c = t, !(Ji.isServer() || vn(this.options.enabled, this.#e) === !1 || !df(this.#c) || this.#c === 0) && (this.#p = Br.setInterval(() => {
            (this.options.refetchIntervalInBackground || Gf.isFocused()) && this.#f()
        }, this.#c))
    }
    #b() {
        this.#g(), this.#v(this.#y())
    }
    #x() {
        this.#d !== void 0 && (Br.clearTimeout(this.#d), this.#d = void 0)
    }
    #S() {
        this.#p !== void 0 && (Br.clearInterval(this.#p), this.#p = void 0)
    }
    createResult(t, a) {
        const s = this.#e,
            l = this.options,
            o = this.#a,
            u = this.#r,
            d = this.#s,
            p = t !== s ? t.state : this.#n,
            {
                state: g
            } = t;
        let b = {
                ...g
            },
            m = !1,
            S;
        if (a._optimisticResults) {
            const _ = this.hasListeners(),
                F = !_ && by(t, a),
                $ = _ && xy(t, s, a, l);
            (F || $) && (b = {
                ...b,
                ...Yv(g.data, t.options)
            }), a._optimisticResults === "isRestoring" && (b.fetchStatus = "idle")
        }
        let {
            error: E,
            errorUpdatedAt: A,
            status: O
        } = b;
        S = b.data;
        let R = !1;
        if (a.placeholderData !== void 0 && S === void 0 && O === "pending") {
            let _;
            o?.isPlaceholderData && a.placeholderData === d?.placeholderData ? (_ = o.data, R = !0) : _ = typeof a.placeholderData == "function" ? a.placeholderData(this.#h?.state.data, this.#h) : a.placeholderData, _ !== void 0 && (O = "success", S = hf(o?.data, _, a), m = !0)
        }
        if (a.select && S !== void 0 && !R)
            if (o && S === u?.data && a.select === this.#u) S = this.#o;
            else try {
                this.#u = a.select, S = a.select(S), S = hf(o?.data, S, a), this.#o = S, this.#i = null
            } catch (_) {
                this.#i = _
            }
        this.#i && (E = this.#i, S = this.#o, A = Date.now(), O = "error");
        const N = b.fetchStatus === "fetching",
            Y = O === "pending",
            K = O === "error",
            Z = Y && N,
            B = S !== void 0,
            T = {
                status: O,
                fetchStatus: b.fetchStatus,
                isPending: Y,
                isSuccess: O === "success",
                isError: K,
                isInitialLoading: Z,
                isLoading: Z,
                data: S,
                dataUpdatedAt: b.dataUpdatedAt,
                error: E,
                errorUpdatedAt: A,
                failureCount: b.fetchFailureCount,
                failureReason: b.fetchFailureReason,
                errorUpdateCount: b.errorUpdateCount,
                isFetched: t.isFetched(),
                isFetchedAfterMount: b.dataUpdateCount > p.dataUpdateCount || b.errorUpdateCount > p.errorUpdateCount,
                isFetching: N,
                isRefetching: N && !Y,
                isLoadingError: K && !B,
                isPaused: b.fetchStatus === "paused",
                isPlaceholderData: m,
                isRefetchError: K && B,
                isStale: Zf(t, a),
                refetch: this.refetch,
                promise: this.#l,
                isEnabled: vn(a.enabled, t) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const _ = T.data !== void 0,
                F = T.status === "error" && !_,
                $ = le => {
                    F ? le.reject(T.error) : _ && le.resolve(T.data)
                },
                G = () => {
                    const le = this.#l = T.promise = pf();
                    $(le)
                },
                te = this.#l;
            switch (te.status) {
                case "pending":
                    t.queryHash === s.queryHash && $(te);
                    break;
                case "fulfilled":
                    (F || T.data !== te.value) && G();
                    break;
                case "rejected":
                    (!F || T.error !== te.reason) && G();
                    break
            }
        }
        return T
    }
    updateResult() {
        const t = this.#a,
            a = this.createResult(this.#e, this.options);
        if (this.#r = this.#e.state, this.#s = this.options, this.#r.data !== void 0 && (this.#h = this.#e), Fi(a, t)) return;
        this.#a = a;
        const s = () => {
            if (!t) return !0;
            const {
                notifyOnChangeProps: l
            } = this.options, o = typeof l == "function" ? l() : l;
            if (o === "all" || !o && !this.#m.size) return !0;
            const u = new Set(o ?? this.#m);
            return this.options.throwOnError && u.add("error"), Object.keys(this.#a).some(d => {
                const h = d;
                return this.#a[h] !== t[h] && u.has(h)
            })
        };
        this.#E({
            listeners: s()
        })
    }
    #w() {
        const t = this.#t.getQueryCache().build(this.#t, this.options);
        if (t === this.#e) return;
        const a = this.#e;
        this.#e = t, this.#n = t.state, this.hasListeners() && (a?.removeObserver(this), t.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#b()
    }
    #E(t) {
        ht.batch(() => {
            t.listeners && this.listeners.forEach(a => {
                a(this.#a)
            }), this.#t.getQueryCache().notify({
                query: this.#e,
                type: "observerResultsUpdated"
            })
        })
    }
};

function ew(t, a) {
    return vn(a.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && vn(a.retryOnMount, t) === !1)
}

function by(t, a) {
    return ew(t, a) || t.state.data !== void 0 && yf(t, a, a.refetchOnMount)
}

function yf(t, a, s) {
    if (vn(a.enabled, t) !== !1 && ur(a.staleTime, t) !== "static") {
        const l = typeof s == "function" ? s(t) : s;
        return l === "always" || l !== !1 && Zf(t, a)
    }
    return !1
}

function xy(t, a, s, l) {
    return (t !== a || vn(l.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && Zf(t, s)
}

function Zf(t, a) {
    return vn(a.enabled, t) !== !1 && t.isStaleByTime(ur(a.staleTime, t))
}

function tw(t, a) {
    return !Fi(t.getCurrentResult(), a)
}
var Gv = class extends cl {
        constructor(t, a) {
            super(t, a)
        }
        bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(t) {
            t._type = "infinite", super.setOptions(t)
        }
        getOptimisticResult(t) {
            return t._type = "infinite", super.getOptimisticResult(t)
        }
        fetchNextPage(t) {
            return this.fetch({
                ...t,
                meta: {
                    fetchMore: {
                        direction: "forward"
                    }
                }
            })
        }
        fetchPreviousPage(t) {
            return this.fetch({
                ...t,
                meta: {
                    fetchMore: {
                        direction: "backward"
                    }
                }
            })
        }
        createResult(t, a) {
            const {
                state: s
            } = t, l = super.createResult(t, a), {
                isFetching: o,
                isRefetching: u,
                isError: d,
                isRefetchError: h
            } = l, p = s.fetchMeta?.fetchMore?.direction, g = d && p === "forward", b = o && p === "forward", m = d && p === "backward", S = o && p === "backward";
            return {
                ...l,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: FS(a, s.data),
                hasPreviousPage: JS(a, s.data),
                isFetchNextPageError: g,
                isFetchingNextPage: b,
                isFetchPreviousPageError: m,
                isFetchingPreviousPage: S,
                isRefetchError: h && !g && !m,
                isRefetching: u && !b && !S
            }
        }
    },
    nw = class extends Qv {
        #t;
        #e;
        #n;
        #a;
        constructor(t) {
            super(), this.#t = t.client, this.mutationId = t.mutationId, this.#n = t.mutationCache, this.#e = [], this.state = t.state || Vv(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            this.#e.includes(t) || (this.#e.push(t), this.clearGcTimeout(), this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.#e = this.#e.filter(a => a !== t), this.scheduleGc(), this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
        }
        continue () {
            return this.#a?.continue() ?? this.execute(this.state.variables)
        }
        async execute(t) {
            const a = () => {
                    this.#r({
                        type: "continue"
                    })
                },
                s = {
                    client: this.#t,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
            this.#a = qv({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")),
                onFail: (u, d) => {
                    this.#r({
                        type: "failed",
                        failureCount: u,
                        error: d
                    })
                },
                onPause: () => {
                    this.#r({
                        type: "pause"
                    })
                },
                onContinue: a,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#n.canRun(this)
            });
            const l = this.state.status === "pending",
                o = !this.#a.canStart();
            try {
                if (l) a();
                else {
                    this.#r({
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), this.#n.config.onMutate && await this.#n.config.onMutate(t, this, s);
                    const d = await this.options.onMutate?.(t, s);
                    d !== this.state.context && this.#r({
                        type: "pending",
                        context: d,
                        variables: t,
                        isPaused: o
                    })
                }
                const u = await this.#a.start();
                return await this.#n.config.onSuccess?.(u, t, this.state.context, this, s), await this.options.onSuccess?.(u, t, this.state.context, s), await this.#n.config.onSettled?.(u, null, this.state.variables, this.state.context, this, s), await this.options.onSettled?.(u, null, t, this.state.context, s), this.#r({
                    type: "success",
                    data: u
                }), u
            } catch (u) {
                try {
                    await this.#n.config.onError?.(u, t, this.state.context, this, s)
                } catch (d) {
                    Promise.reject(d)
                }
                try {
                    await this.options.onError?.(u, t, this.state.context, s)
                } catch (d) {
                    Promise.reject(d)
                }
                try {
                    await this.#n.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this, s)
                } catch (d) {
                    Promise.reject(d)
                }
                try {
                    await this.options.onSettled?.(void 0, u, t, this.state.context, s)
                } catch (d) {
                    Promise.reject(d)
                }
                throw this.#r({
                    type: "error",
                    error: u
                }), u
            } finally {
                this.#n.runNext(this)
            }
        }
        #r(t) {
            const a = s => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...s, failureCount: t.failureCount, failureReason: t.error
                        };
                    case "pause":
                        return {
                            ...s, isPaused: !0
                        };
                    case "continue":
                        return {
                            ...s, isPaused: !1
                        };
                    case "pending":
                        return {
                            ...s, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...s, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                        };
                    case "error":
                        return {
                            ...s, data: void 0, error: t.error, failureCount: s.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                        }
                }
            };
            this.state = a(this.state), ht.batch(() => {
                this.#e.forEach(s => {
                    s.onMutationUpdate(t)
                }), this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: t
                })
            })
        }
    };

function Vv() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var aw = class extends Gr {
    constructor(t = {}) {
        super(), this.config = t, this.#t = new Set, this.#e = new Map, this.#n = 0
    }
    #t;
    #e;
    #n;
    build(t, a, s) {
        const l = new nw({
            client: t,
            mutationCache: this,
            mutationId: ++this.#n,
            options: t.defaultMutationOptions(a),
            state: s
        });
        return this.add(l), l
    }
    add(t) {
        this.#t.add(t);
        const a = No(t);
        if (typeof a == "string") {
            const s = this.#e.get(a);
            s ? s.push(t) : this.#e.set(a, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (this.#t.delete(t)) {
            const a = No(t);
            if (typeof a == "string") {
                const s = this.#e.get(a);
                if (s)
                    if (s.length > 1) {
                        const l = s.indexOf(t);
                        l !== -1 && s.splice(l, 1)
                    } else s[0] === t && this.#e.delete(a)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const a = No(t);
        if (typeof a == "string") {
            const l = this.#e.get(a)?.find(o => o.state.status === "pending");
            return !l || l === t
        } else return !0
    }
    runNext(t) {
        const a = No(t);
        return typeof a == "string" ? this.#e.get(a)?.find(l => l !== t && l.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        ht.batch(() => {
            this.#t.forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), this.#t.clear(), this.#e.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(t) {
        const a = {
            exact: !0,
            ...t
        };
        return this.getAll().find(s => py(a, s))
    }
    findAll(t = {}) {
        return this.getAll().filter(a => py(t, a))
    }
    notify(t) {
        ht.batch(() => {
            this.listeners.forEach(a => {
                a(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(a => a.state.isPaused);
        return ht.batch(() => Promise.all(t.map(a => a.continue().catch(Gt))))
    }
};

function No(t) {
    return t.options.scope?.id
}
var rw = class extends Gr {
    #t;
    #e = void 0;
    #n;
    #a;
    constructor(a, s) {
        super(), this.#t = a, this.setOptions(s), this.bindMethods(), this.#r()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(a) {
        const s = this.options;
        this.options = this.#t.defaultMutationOptions(a), Fi(this.options, s) || this.#t.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#n,
            observer: this
        }), s?.mutationKey && this.options.mutationKey && dr(s.mutationKey) !== dr(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n?.removeObserver(this)
    }
    onMutationUpdate(a) {
        this.#r(), this.#s(a)
    }
    getCurrentResult() {
        return this.#e
    }
    reset() {
        this.#n?.removeObserver(this), this.#n = void 0, this.#r(), this.#s()
    }
    mutate(a, s) {
        return this.#a = s, this.#n?.removeObserver(this), this.#n = this.#t.getMutationCache().build(this.#t, this.options), this.#n.addObserver(this), this.#n.execute(a)
    }
    #r() {
        const a = this.#n?.state ?? Vv();
        this.#e = {
            ...a,
            isPending: a.status === "pending",
            isSuccess: a.status === "success",
            isError: a.status === "error",
            isIdle: a.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #s(a) {
        ht.batch(() => {
            if (this.#a && this.hasListeners()) {
                const s = this.#e.variables,
                    l = this.#e.context,
                    o = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                if (a?.type === "success") {
                    try {
                        this.#a.onSuccess?.(a.data, s, l, o)
                    } catch (u) {
                        Promise.reject(u)
                    }
                    try {
                        this.#a.onSettled?.(a.data, null, s, l, o)
                    } catch (u) {
                        Promise.reject(u)
                    }
                } else if (a?.type === "error") {
                    try {
                        this.#a.onError?.(a.error, s, l, o)
                    } catch (u) {
                        Promise.reject(u)
                    }
                    try {
                        this.#a.onSettled?.(void 0, a.error, s, l, o)
                    } catch (u) {
                        Promise.reject(u)
                    }
                }
            }
            this.listeners.forEach(s => {
                s(this.#e)
            })
        })
    }
};

function Sy(t, a) {
    const s = new Set(a);
    return t.filter(l => !s.has(l))
}

function sw(t, a, s) {
    const l = t.slice(0);
    return l[a] = s, l
}
var iw = class extends Gr {
        #t;
        #e;
        #n;
        #a;
        #r;
        #s;
        #l;
        #i;
        #u;
        #o = [];
        constructor(t, a, s) {
            super(), this.#t = t, this.#a = s, this.#n = [], this.#r = [], this.#e = [], this.setQueries(a)
        }
        onSubscribe() {
            this.listeners.size === 1 && this.#r.forEach(t => {
                t.subscribe(a => {
                    this.#m(t, a)
                })
            })
        }
        onUnsubscribe() {
            this.listeners.size || this.destroy()
        }
        destroy() {
            this.listeners = new Set, this.#r.forEach(t => {
                t.destroy()
            })
        }
        setQueries(t, a) {
            this.#n = t, this.#a = a, ht.batch(() => {
                const s = this.#r,
                    l = this.#c(this.#n);
                l.forEach(b => b.observer.setOptions(b.defaultedQueryOptions));
                const o = l.map(b => b.observer),
                    u = o.map(b => b.getCurrentResult()),
                    d = s.length !== o.length,
                    h = o.some((b, m) => b !== s[m]),
                    p = d || h,
                    g = p ? !0 : u.some((b, m) => {
                        const S = this.#e[m];
                        return !S || !Fi(b, S)
                    });
                !p && !g || (p && (this.#o = l, this.#r = o), this.#e = u, this.hasListeners() && (p && (Sy(s, o).forEach(b => {
                    b.destroy()
                }), Sy(o, s).forEach(b => {
                    b.subscribe(m => {
                        this.#m(b, m)
                    })
                })), this.#f()))
            })
        }
        getCurrentResult() {
            return this.#e
        }
        getQueries() {
            return this.#r.map(t => t.getCurrentQuery())
        }
        getObservers() {
            return this.#r
        }
        getOptimisticResult(t, a) {
            const s = this.#c(t),
                l = s.map(u => u.observer.getOptimisticResult(u.defaultedQueryOptions)),
                o = s.map(u => u.defaultedQueryOptions.queryHash);
            return [l, u => this.#d(u ?? l, a, o), () => this.#h(l, s)]
        }
        #h(t, a) {
            return a.map((s, l) => {
                const o = t[l];
                return s.defaultedQueryOptions.notifyOnChangeProps ? o : s.observer.trackResult(o, u => {
                    a.forEach(d => {
                        d.observer.trackProp(u)
                    })
                })
            })
        }
        #d(t, a, s) {
            if (a) {
                const l = this.#u,
                    o = s !== void 0 && l !== void 0 && (l.length !== s.length || s.some((u, d) => u !== l[d]));
                return (!this.#s || this.#e !== this.#i || o || a !== this.#l) && (this.#l = a, this.#i = this.#e, s !== void 0 && (this.#u = s), this.#s = Kf(this.#s, a(t))), this.#s
            }
            return t
        }
        #p() {
            return this.#a?.combine !== void 0 && this.#r.some((t, a) => t.options.suspense && this.#e[a]?.data === void 0)
        }
        #c(t) {
            const a = new Map;
            this.#r.forEach(l => {
                const o = l.options.queryHash;
                if (!o) return;
                const u = a.get(o);
                u ? u.push(l) : a.set(o, [l])
            });
            const s = [];
            return t.forEach(l => {
                const o = this.#t.defaultQueryOptions(l),
                    d = a.get(o.queryHash)?.shift() ?? new cl(this.#t, o);
                s.push({
                    defaultedQueryOptions: o,
                    observer: d
                })
            }), s
        }
        #m(t, a) {
            const s = this.#r.indexOf(t);
            s !== -1 && (this.#e = sw(this.#e, s, a), this.#f())
        }
        #f() {
            if (this.hasListeners()) {
                const t = this.#h(this.#e, this.#o),
                    a = this.#p(),
                    s = this.#s,
                    l = a ? s : this.#d(t, this.#a?.combine);
                (a || s !== l) && ht.batch(() => {
                    this.listeners.forEach(o => {
                        o(this.#e)
                    })
                })
            }
        }
    },
    lw = class extends Gr {
        constructor(t = {}) {
            super(), this.config = t, this.#t = new Map
        }
        #t;
        build(t, a, s) {
            const l = a.queryKey,
                o = a.queryHash ?? Vf(l, a);
            let u = this.get(o);
            return u || (u = new WS({
                client: t,
                queryKey: l,
                queryHash: o,
                options: t.defaultQueryOptions(a),
                state: s,
                defaultOptions: t.getQueryDefaults(l)
            }), this.add(u)), u
        }
        add(t) {
            this.#t.has(t.queryHash) || (this.#t.set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const a = this.#t.get(t.queryHash);
            a && (t.destroy(), a === t && this.#t.delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            ht.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return this.#t.get(t)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(t) {
            const a = {
                exact: !0,
                ...t
            };
            return this.getAll().find(s => hy(a, s))
        }
        findAll(t = {}) {
            const a = this.getAll();
            return Object.keys(t).length > 0 ? a.filter(s => hy(t, s)) : a
        }
        notify(t) {
            ht.batch(() => {
                this.listeners.forEach(a => {
                    a(t)
                })
            })
        }
        onFocus() {
            ht.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            ht.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    },
    ow = class {
        #t;
        #e;
        #n;
        #a;
        #r;
        #s;
        #l;
        #i;
        constructor(t = {}) {
            this.#t = t.queryCache || new lw, this.#e = t.mutationCache || new aw, this.#n = t.defaultOptions || {}, this.#a = new Map, this.#r = new Map, this.#s = 0
        }
        mount() {
            this.#s++, this.#s === 1 && (this.#l = Gf.subscribe(async t => {
                t && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#i = Io.subscribe(async t => {
                t && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#s--, this.#s === 0 && (this.#l?.(), this.#l = void 0, this.#i?.(), this.#i = void 0)
        }
        isFetching(t) {
            return this.#t.findAll({
                ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return this.#e.findAll({
                ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            const a = this.defaultQueryOptions({
                queryKey: t
            });
            return this.#t.get(a.queryHash)?.state.data
        }
        ensureQueryData(t) {
            const a = this.defaultQueryOptions(t),
                s = this.#t.build(this, a),
                l = s.state.data;
            return l === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime(ur(a.staleTime, s)) && this.prefetchQuery(a), Promise.resolve(l))
        }
        getQueriesData(t) {
            return this.#t.findAll(t).map(({
                queryKey: a,
                state: s
            }) => {
                const l = s.data;
                return [a, l]
            })
        }
        setQueryData(t, a, s) {
            const l = this.defaultQueryOptions({
                    queryKey: t
                }),
                u = this.#t.get(l.queryHash)?.state.data,
                d = qS(a, u);
            if (d !== void 0) return this.#t.build(this, l).setData(d, {
                ...s,
                manual: !0
            })
        }
        setQueriesData(t, a, s) {
            return ht.batch(() => this.#t.findAll(t).map(({
                queryKey: l
            }) => [l, this.setQueryData(l, a, s)]))
        }
        getQueryState(t) {
            const a = this.defaultQueryOptions({
                queryKey: t
            });
            return this.#t.get(a.queryHash)?.state
        }
        removeQueries(t) {
            const a = this.#t;
            ht.batch(() => {
                a.findAll(t).forEach(s => {
                    a.remove(s)
                })
            })
        }
        resetQueries(t, a) {
            const s = this.#t;
            return ht.batch(() => (s.findAll(t).forEach(l => {
                l.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, a)))
        }
        cancelQueries(t, a = {}) {
            const s = {
                    revert: !0,
                    ...a
                },
                l = ht.batch(() => this.#t.findAll(t).map(o => o.cancel(s)));
            return Promise.all(l).then(Gt).catch(Gt)
        }
        invalidateQueries(t, a = {}) {
            return ht.batch(() => (this.#t.findAll(t).forEach(s => {
                s.invalidate()
            }), t?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                ...t,
                type: t?.refetchType ?? t?.type ?? "active"
            }, a)))
        }
        refetchQueries(t, a = {}) {
            const s = {
                    ...a,
                    cancelRefetch: a.cancelRefetch ?? !0
                },
                l = ht.batch(() => this.#t.findAll(t).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let u = o.fetch(void 0, s);
                    return s.throwOnError || (u = u.catch(Gt)), o.state.fetchStatus === "paused" ? Promise.resolve() : u
                }));
            return Promise.all(l).then(Gt)
        }
        fetchQuery(t) {
            const a = this.defaultQueryOptions(t);
            a.retry === void 0 && (a.retry = !1);
            const s = this.#t.build(this, a);
            return s.isStaleByTime(ur(a.staleTime, s)) ? s.fetch(a) : Promise.resolve(s.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Gt).catch(Gt)
        }
        fetchInfiniteQuery(t) {
            return t._type = "infinite", this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Gt).catch(Gt)
        }
        ensureInfiniteQueryData(t) {
            return t._type = "infinite", this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Io.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#e
        }
        getDefaultOptions() {
            return this.#n
        }
        setDefaultOptions(t) {
            this.#n = t
        }
        setQueryDefaults(t, a) {
            this.#a.set(dr(t), {
                queryKey: t,
                defaultOptions: a
            })
        }
        getQueryDefaults(t) {
            const a = [...this.#a.values()],
                s = {};
            return a.forEach(l => {
                Bs(t, l.queryKey) && Object.assign(s, l.defaultOptions)
            }), s
        }
        setMutationDefaults(t, a) {
            this.#r.set(dr(t), {
                mutationKey: t,
                defaultOptions: a
            })
        }
        getMutationDefaults(t) {
            const a = [...this.#r.values()],
                s = {};
            return a.forEach(l => {
                Bs(t, l.mutationKey) && Object.assign(s, l.defaultOptions)
            }), s
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const a = {
                ...this.#n.queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return a.queryHash || (a.queryHash = Vf(a.queryKey, a)), a.refetchOnReconnect === void 0 && (a.refetchOnReconnect = a.networkMode !== "always"), a.throwOnError === void 0 && (a.throwOnError = !!a.suspense), !a.networkMode && a.persister && (a.networkMode = "offlineFirst"), a.queryFn === xn && (a.enabled = !1), a
        }
        defaultMutationOptions(t) {
            return t?._defaulted ? t : {
                ...this.#n.mutations,
                ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            this.#t.clear(), this.#e.clear()
        }
    },
    Pd = {
        exports: {}
    },
    Ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wy;

function cw() {
    if (wy) return Ae;
    wy = 1;
    var t = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        l = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        u = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        b = Symbol.for("react.lazy"),
        m = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function E(C) {
        return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var A = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        O = Object.assign,
        R = {};

    function N(C, P, U) {
        this.props = C, this.context = P, this.refs = R, this.updater = U || A
    }
    N.prototype.isReactComponent = {}, N.prototype.setState = function(C, P) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, P, "setState")
    }, N.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function Y() {}
    Y.prototype = N.prototype;

    function K(C, P, U) {
        this.props = C, this.context = P, this.refs = R, this.updater = U || A
    }
    var Z = K.prototype = new Y;
    Z.constructor = K, O(Z, N.prototype), Z.isPureReactComponent = !0;
    var B = Array.isArray;

    function L() {}
    var T = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        _ = Object.prototype.hasOwnProperty;

    function F(C, P, U) {
        var I = U.ref;
        return {
            $$typeof: t,
            type: C,
            key: P,
            ref: I !== void 0 ? I : null,
            props: U
        }
    }

    function $(C, P) {
        return F(C.type, P, C.props)
    }

    function G(C) {
        return typeof C == "object" && C !== null && C.$$typeof === t
    }

    function te(C) {
        var P = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function(U) {
            return P[U]
        })
    }
    var le = /\/+/g;

    function ne(C, P) {
        return typeof C == "object" && C !== null && C.key != null ? te("" + C.key) : P.toString(36)
    }

    function se(C) {
        switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(L, L) : (C.status = "pending", C.then(function(P) {
                        C.status === "pending" && (C.status = "fulfilled", C.value = P)
                    }, function(P) {
                        C.status === "pending" && (C.status = "rejected", C.reason = P)
                    })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason
                }
        }
        throw C
    }

    function j(C, P, U, I, ie) {
        var ce = typeof C;
        (ce === "undefined" || ce === "boolean") && (C = null);
        var ue = !1;
        if (C === null) ue = !0;
        else switch (ce) {
            case "bigint":
            case "string":
            case "number":
                ue = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                    case t:
                    case a:
                        ue = !0;
                        break;
                    case b:
                        return ue = C._init, j(ue(C._payload), P, U, I, ie)
                }
        }
        if (ue) return ie = ie(C), ue = I === "" ? "." + ne(C, 0) : I, B(ie) ? (U = "", ue != null && (U = ue.replace(le, "$&/") + "/"), j(ie, P, U, "", function(Ee) {
            return Ee
        })) : ie != null && (G(ie) && (ie = $(ie, U + (ie.key == null || C && C.key === ie.key ? "" : ("" + ie.key).replace(le, "$&/") + "/") + ue)), P.push(ie)), 1;
        ue = 0;
        var ve = I === "" ? "." : I + ":";
        if (B(C))
            for (var Oe = 0; Oe < C.length; Oe++) I = C[Oe], ce = ve + ne(I, Oe), ue += j(I, P, U, ce, ie);
        else if (Oe = E(C), typeof Oe == "function")
            for (C = Oe.call(C), Oe = 0; !(I = C.next()).done;) I = I.value, ce = ve + ne(I, Oe++), ue += j(I, P, U, ce, ie);
        else if (ce === "object") {
            if (typeof C.then == "function") return j(se(C), P, U, I, ie);
            throw P = String(C), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ue
    }

    function H(C, P, U) {
        if (C == null) return C;
        var I = [],
            ie = 0;
        return j(C, I, "", "", function(ce) {
            return P.call(U, ce, ie++)
        }), I
    }

    function z(C) {
        if (C._status === -1) {
            var P = C._result;
            P = P(), P.then(function(U) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = U)
            }, function(U) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = U)
            }), C._status === -1 && (C._status = 0, C._result = P)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var oe = typeof reportError == "function" ? reportError : function(C) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var P = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                    error: C
                });
                if (!window.dispatchEvent(P)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", C);
                return
            }
            console.error(C)
        },
        de = {
            map: H,
            forEach: function(C, P, U) {
                H(C, function() {
                    P.apply(this, arguments)
                }, U)
            },
            count: function(C) {
                var P = 0;
                return H(C, function() {
                    P++
                }), P
            },
            toArray: function(C) {
                return H(C, function(P) {
                    return P
                }) || []
            },
            only: function(C) {
                if (!G(C)) throw Error("React.Children.only expected to receive a single React element child.");
                return C
            }
        };
    return Ae.Activity = m, Ae.Children = de, Ae.Component = N, Ae.Fragment = s, Ae.Profiler = o, Ae.PureComponent = K, Ae.StrictMode = l, Ae.Suspense = p, Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Ae.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return T.H.useMemoCache(C)
        }
    }, Ae.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }, Ae.cacheSignal = function() {
        return null
    }, Ae.cloneElement = function(C, P, U) {
        if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
        var I = O({}, C.props),
            ie = C.key;
        if (P != null)
            for (ce in P.key !== void 0 && (ie = "" + P.key), P) !_.call(P, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && P.ref === void 0 || (I[ce] = P[ce]);
        var ce = arguments.length - 2;
        if (ce === 1) I.children = U;
        else if (1 < ce) {
            for (var ue = Array(ce), ve = 0; ve < ce; ve++) ue[ve] = arguments[ve + 2];
            I.children = ue
        }
        return F(C.type, ie, I)
    }, Ae.createContext = function(C) {
        return C = {
            $$typeof: d,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, C.Provider = C, C.Consumer = {
            $$typeof: u,
            _context: C
        }, C
    }, Ae.createElement = function(C, P, U) {
        var I, ie = {},
            ce = null;
        if (P != null)
            for (I in P.key !== void 0 && (ce = "" + P.key), P) _.call(P, I) && I !== "key" && I !== "__self" && I !== "__source" && (ie[I] = P[I]);
        var ue = arguments.length - 2;
        if (ue === 1) ie.children = U;
        else if (1 < ue) {
            for (var ve = Array(ue), Oe = 0; Oe < ue; Oe++) ve[Oe] = arguments[Oe + 2];
            ie.children = ve
        }
        if (C && C.defaultProps)
            for (I in ue = C.defaultProps, ue) ie[I] === void 0 && (ie[I] = ue[I]);
        return F(C, ce, ie)
    }, Ae.createRef = function() {
        return {
            current: null
        }
    }, Ae.forwardRef = function(C) {
        return {
            $$typeof: h,
            render: C
        }
    }, Ae.isValidElement = G, Ae.lazy = function(C) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: z
        }
    }, Ae.memo = function(C, P) {
        return {
            $$typeof: g,
            type: C,
            compare: P === void 0 ? null : P
        }
    }, Ae.startTransition = function(C) {
        var P = T.T,
            U = {};
        T.T = U;
        try {
            var I = C(),
                ie = T.S;
            ie !== null && ie(U, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(L, oe)
        } catch (ce) {
            oe(ce)
        } finally {
            P !== null && U.types !== null && (P.types = U.types), T.T = P
        }
    }, Ae.unstable_useCacheRefresh = function() {
        return T.H.useCacheRefresh()
    }, Ae.use = function(C) {
        return T.H.use(C)
    }, Ae.useActionState = function(C, P, U) {
        return T.H.useActionState(C, P, U)
    }, Ae.useCallback = function(C, P) {
        return T.H.useCallback(C, P)
    }, Ae.useContext = function(C) {
        return T.H.useContext(C)
    }, Ae.useDebugValue = function() {}, Ae.useDeferredValue = function(C, P) {
        return T.H.useDeferredValue(C, P)
    }, Ae.useEffect = function(C, P) {
        return T.H.useEffect(C, P)
    }, Ae.useEffectEvent = function(C) {
        return T.H.useEffectEvent(C)
    }, Ae.useId = function() {
        return T.H.useId()
    }, Ae.useImperativeHandle = function(C, P, U) {
        return T.H.useImperativeHandle(C, P, U)
    }, Ae.useInsertionEffect = function(C, P) {
        return T.H.useInsertionEffect(C, P)
    }, Ae.useLayoutEffect = function(C, P) {
        return T.H.useLayoutEffect(C, P)
    }, Ae.useMemo = function(C, P) {
        return T.H.useMemo(C, P)
    }, Ae.useOptimistic = function(C, P) {
        return T.H.useOptimistic(C, P)
    }, Ae.useReducer = function(C, P, U) {
        return T.H.useReducer(C, P, U)
    }, Ae.useRef = function(C) {
        return T.H.useRef(C)
    }, Ae.useState = function(C) {
        return T.H.useState(C)
    }, Ae.useSyncExternalStore = function(C, P, U) {
        return T.H.useSyncExternalStore(C, P, U)
    }, Ae.useTransition = function() {
        return T.H.useTransition()
    }, Ae.version = "19.2.1", Ae
}
var Ey;

function oc() {
    return Ey || (Ey = 1, Pd.exports = cw()), Pd.exports
}
var x = oc();
const re = kv(x),
    Kv = MS({
        __proto__: null,
        default: re
    }, [x]);
var Xv = x.createContext(void 0),
    ul = t => {
        const a = x.useContext(Xv);
        if (t) return t;
        if (!a) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return a
    },
    uw = ({
        client: t,
        children: a
    }) => (x.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), y.jsx(Xv.Provider, {
        value: t,
        children: a
    })),
    Zv = x.createContext(!1),
    Iv = () => x.useContext(Zv);
Zv.Provider;

function dw() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        },
        reset: () => {
            t = !0
        },
        isReset: () => t
    }
}
var fw = x.createContext(dw()),
    $v = () => x.useContext(fw),
    Fv = (t, a, s) => {
        const l = s?.state.error && typeof t.throwOnError == "function" ? Xf(t.throwOnError, [s.state.error, s]) : t.throwOnError;
        (t.suspense || t.experimental_prefetchInRender || l) && (a.isReset() || (t.retryOnMount = !1))
    },
    Jv = t => {
        x.useEffect(() => {
            t.clearReset()
        }, [t])
    },
    Wv = ({
        result: t,
        errorResetBoundary: a,
        throwOnError: s,
        query: l,
        suspense: o
    }) => t.isError && !a.isReset() && !t.isFetching && l && (o && t.data === void 0 || Xf(s, [t.error, l])),
    If = (t, a) => a.state.data === void 0,
    e0 = t => {
        if (t.suspense) {
            const s = o => o === "static" ? o : Math.max(o ?? 1e3, 1e3),
                l = t.staleTime;
            t.staleTime = typeof l == "function" ? (...o) => s(l(...o)) : s(l), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
        }
    },
    hw = (t, a) => t.isLoading && t.isFetching && !a,
    vf = (t, a) => t?.suspense && a.isPending,
    bf = (t, a, s) => a.fetchOptimistic(t).catch(() => {
        s.clearReset()
    });

function t0({
    queries: t,
    ...a
}, s) {
    const l = ul(s),
        o = Iv(),
        u = $v(),
        d = x.useMemo(() => t.map(O => {
            const R = l.defaultQueryOptions(O);
            return R._optimisticResults = o ? "isRestoring" : "optimistic", R
        }), [t, l, o]);
    d.forEach(O => {
        e0(O);
        const R = l.getQueryCache().get(O.queryHash);
        Fv(O, u, R)
    }), Jv(u);
    const [h] = x.useState(() => new iw(l, d, a)), [p, g, b] = h.getOptimisticResult(d, a.combine), m = !o && a.subscribed !== !1;
    x.useSyncExternalStore(x.useCallback(O => m ? h.subscribe(ht.batchCalls(O)) : Gt, [h, m]), () => h.getCurrentResult(), () => h.getCurrentResult()), x.useEffect(() => {
        h.setQueries(d, a)
    }, [d, a, h]);
    const E = p.some((O, R) => vf(d[R], O)) ? p.flatMap((O, R) => {
        const N = d[R];
        if (N && vf(N, O)) {
            const Y = new cl(l, N);
            return bf(N, Y, u)
        }
        return []
    }) : [];
    if (E.length > 0) throw Promise.all(E);
    const A = p.find((O, R) => {
        const N = d[R];
        return N && Wv({
            result: O,
            errorResetBoundary: u,
            throwOnError: N.throwOnError,
            query: l.getQueryCache().get(N.queryHash),
            suspense: N.suspense
        })
    });
    if (A?.error) throw A.error;
    return g(b())
}

function cc(t, a, s) {
    const l = Iv(),
        o = $v(),
        u = ul(s),
        d = u.defaultQueryOptions(t);
    u.getDefaultOptions().queries?._experimental_beforeQuery?.(d);
    const h = u.getQueryCache().get(d.queryHash),
        p = t.subscribed !== !1;
    d._optimisticResults = l ? "isRestoring" : p ? "optimistic" : void 0, e0(d), Fv(d, o, h), Jv(o);
    const g = !u.getQueryCache().get(d.queryHash),
        [b] = x.useState(() => new a(u, d)),
        m = b.getOptimisticResult(d),
        S = !l && p;
    if (x.useSyncExternalStore(x.useCallback(E => {
            const A = S ? b.subscribe(ht.batchCalls(E)) : Gt;
            return b.updateResult(), A
        }, [b, S]), () => b.getCurrentResult(), () => b.getCurrentResult()), x.useEffect(() => {
            b.setOptions(d)
        }, [d, b]), vf(d, m)) throw bf(d, b, o);
    if (Wv({
            result: m,
            errorResetBoundary: o,
            throwOnError: d.throwOnError,
            query: h,
            suspense: d.suspense
        })) throw m.error;
    return u.getDefaultOptions().queries?._experimental_afterQuery?.(d, m), d.experimental_prefetchInRender && !Ji.isServer() && hw(m, l) && (g ? bf(d, b, o) : h?.promise)?.catch(Gt).finally(() => {
        b.updateResult()
    }), d.notifyOnChangeProps ? m : b.trackResult(m)
}

function pw(t, a) {
    return cc(t, cl, a)
}

function mw(t, a) {
    return cc({
        ...t,
        enabled: !0,
        suspense: !0,
        throwOnError: If,
        placeholderData: void 0
    }, cl, a)
}

function gw(t, a) {
    return cc({
        ...t,
        enabled: !0,
        suspense: !0,
        throwOnError: If
    }, Gv, a)
}

function yw(t, a) {
    return t0({
        ...t,
        queries: t.queries.map(s => ({
            ...s,
            suspense: !0,
            throwOnError: If,
            enabled: !0,
            placeholderData: void 0
        }))
    }, a)
}

function vw(t, a) {
    const s = ul(a);
    s.getQueryState(t.queryKey) || s.prefetchQuery(t)
}

function bw(t, a) {
    const s = ul(a);
    s.getQueryState(t.queryKey) || s.prefetchInfiniteQuery(t)
}

function xw(t, a) {
    const s = ul(a),
        [l] = x.useState(() => new rw(s, t));
    x.useEffect(() => {
        l.setOptions(t)
    }, [l, t]);
    const o = x.useSyncExternalStore(x.useCallback(d => l.subscribe(ht.batchCalls(d)), [l]), () => l.getCurrentResult(), () => l.getCurrentResult()),
        u = x.useCallback((d, h) => {
            l.mutate(d, h).catch(Gt)
        }, [l]);
    if (o.error && Xf(l.options.throwOnError, [o.error])) throw o.error;
    return {
        ...o,
        mutate: u,
        mutateAsync: o.mutate
    }
}

function Sw(t, a) {
    return cc(t, Gv, a)
}

function Pr(t) {
    return !!t && !Array.isArray(t) && typeof t == "object"
}

function ww() {
    return Object.create(null)
}
const Ew = typeof Symbol == "function" && !!Symbol.asyncIterator;

function n0(t) {
    return Ew && Pr(t) && Symbol.asyncIterator in t
}
var Ow = Object.create,
    a0 = Object.defineProperty,
    Aw = Object.getOwnPropertyDescriptor,
    r0 = Object.getOwnPropertyNames,
    Tw = Object.getPrototypeOf,
    Cw = Object.prototype.hasOwnProperty,
    dl = (t, a) => function() {
        return a || (0, t[r0(t)[0]])((a = {
            exports: {}
        }).exports, a), a.exports
    },
    jw = (t, a, s, l) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (var o = r0(a), u = 0, d = o.length, h; u < d; u++) h = o[u], !Cw.call(t, h) && h !== s && a0(t, h, {
                get: (p => a[p]).bind(null, h),
                enumerable: !(l = Aw(a, h)) || l.enumerable
            });
        return t
    },
    uc = (t, a, s) => (s = t != null ? Ow(Tw(t)) : {}, jw(a0(s, "default", {
        value: t,
        enumerable: !0
    }), t));
const s0 = () => {},
    Oy = t => {
        Object.freeze && Object.freeze(t)
    };

function i0(t, a, s) {
    var l;
    const o = a.join(".");
    return (l = s[o]) !== null && l !== void 0 || (s[o] = new Proxy(s0, {
        get(u, d) {
            if (!(typeof d != "string" || d === "then")) return i0(t, [...a, d], s)
        },
        apply(u, d, h) {
            const p = a[a.length - 1];
            if (p === "valueOf" || p === "toString" || p === "toJSON") return `tRPC.proxy(${a.slice(0,-1).join(".")})`;
            let g = {
                args: h,
                path: a
            };
            return p === "call" ? g = {
                args: h.length >= 2 ? [h[1]] : [],
                path: a.slice(0, -1)
            } : p === "apply" && (g = {
                args: h.length >= 2 ? h[1] : [],
                path: a.slice(0, -1)
            }), Oy(g.args), Oy(g.path), t(g)
        }
    })), s[o]
}
const dc = t => i0(t, [], ww()),
    $f = t => new Proxy(s0, {
        get(a, s) {
            if (s !== "then") return t(s)
        }
    });
var l0 = dl({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(t, a) {
            function s(l) {
                "@babel/helpers - typeof";
                return a.exports = s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
                    return typeof o
                } : function(o) {
                    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                }, a.exports.__esModule = !0, a.exports.default = a.exports, s(l)
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Rw = dl({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(t, a) {
            var s = l0().default;

            function l(o, u) {
                if (s(o) != "object" || !o) return o;
                var d = o[Symbol.toPrimitive];
                if (d !== void 0) {
                    var h = d.call(o, u || "default");
                    if (s(h) != "object") return h;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (u === "string" ? String : Number)(o)
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Dw = dl({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(t, a) {
            var s = l0().default,
                l = Rw();

            function o(u) {
                var d = l(u, "string");
                return s(d) == "symbol" ? d : d + ""
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    o0 = dl({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(t, a) {
            var s = Dw();

            function l(o, u, d) {
                return (u = s(u)) in o ? Object.defineProperty(o, u, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[u] = d, o
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Ff = dl({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(t, a) {
            var s = o0();

            function l(u, d) {
                var h = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(u);
                    d && (p = p.filter(function(g) {
                        return Object.getOwnPropertyDescriptor(u, g).enumerable
                    })), h.push.apply(h, p)
                }
                return h
            }

            function o(u) {
                for (var d = 1; d < arguments.length; d++) {
                    var h = arguments[d] != null ? arguments[d] : {};
                    d % 2 ? l(Object(h), !0).forEach(function(p) {
                        s(u, p, h[p])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : l(Object(h)).forEach(function(p) {
                        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(h, p))
                    })
                }
                return u
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    });
uc(Ff());
uc(o0());
var Ho = uc(Ff());

function _w(t, a) {
    if ("error" in t) {
        const l = a.deserialize(t.error);
        return {
            ok: !1,
            error: (0, Ho.default)((0, Ho.default)({}, t), {}, {
                error: l
            })
        }
    }
    return {
        ok: !0,
        result: (0, Ho.default)((0, Ho.default)({}, t.result), (!t.result.type || t.result.type === "data") && {
            type: "data",
            data: a.deserialize(t.result.data)
        })
    }
}
var Yd = class extends Error {
    constructor() {
        super("Unable to transform response from server")
    }
};

function Mw(t, a) {
    let s;
    try {
        s = _w(t, a)
    } catch {
        throw new Yd
    }
    if (!s.ok && (!Pr(s.error.error) || typeof s.error.error.code != "number")) throw new Yd;
    if (s.ok && !Pr(s.result)) throw new Yd;
    return s
}
uc(Ff());

function fc(t) {
    const a = {
        subscribe(s) {
            let l = null,
                o = !1,
                u = !1,
                d = !1;

            function h() {
                if (l === null) {
                    d = !0;
                    return
                }
                u || (u = !0, typeof l == "function" ? l() : l && l.unsubscribe())
            }
            return l = t({
                next(p) {
                    var g;
                    o || (g = s.next) === null || g === void 0 || g.call(s, p)
                },
                error(p) {
                    var g;
                    o || (o = !0, (g = s.error) === null || g === void 0 || g.call(s, p), h())
                },
                complete() {
                    var p;
                    o || (o = !0, (p = s.complete) === null || p === void 0 || p.call(s), h())
                }
            }), d && h(), {
                unsubscribe: h
            }
        },
        pipe(...s) {
            return s.reduce(Nw, a)
        }
    };
    return a
}

function Nw(t, a) {
    return a(t)
}

function Hw(t) {
    const a = new AbortController;
    return new Promise((l, o) => {
        let u = !1;

        function d() {
            u || (u = !0, h.unsubscribe())
        }
        a.signal.addEventListener("abort", () => {
            o(a.signal.reason)
        });
        const h = t.subscribe({
            next(p) {
                u = !0, l(p), d()
            },
            error(p) {
                o(p)
            },
            complete() {
                a.abort(), d()
            }
        })
    })
}
var zw = Object.create,
    c0 = Object.defineProperty,
    kw = Object.getOwnPropertyDescriptor,
    u0 = Object.getOwnPropertyNames,
    Uw = Object.getPrototypeOf,
    Lw = Object.prototype.hasOwnProperty,
    yr = (t, a) => function() {
        return a || (0, t[u0(t)[0]])((a = {
            exports: {}
        }).exports, a), a.exports
    },
    Bw = (t, a, s, l) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (var o = u0(a), u = 0, d = o.length, h; u < d; u++) h = o[u], !Lw.call(t, h) && h !== s && c0(t, h, {
                get: (p => a[p]).bind(null, h),
                enumerable: !(l = kw(a, h)) || l.enumerable
            });
        return t
    },
    Vr = (t, a, s) => (s = t != null ? zw(Uw(t)) : {}, Bw(a || !t || !t.__esModule ? c0(s, "default", {
        value: t,
        enumerable: !0
    }) : s, t)),
    qw = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(t, a) {
            function s(l, o) {
                if (l == null) return {};
                var u = {};
                for (var d in l)
                    if ({}.hasOwnProperty.call(l, d)) {
                        if (o.includes(d)) continue;
                        u[d] = l[d]
                    } return u
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Qw = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(t, a) {
            var s = qw();

            function l(o, u) {
                if (o == null) return {};
                var d, h, p = s(o, u);
                if (Object.getOwnPropertySymbols) {
                    var g = Object.getOwnPropertySymbols(o);
                    for (h = 0; h < g.length; h++) d = g[h], u.includes(d) || {}.propertyIsEnumerable.call(o, d) && (p[d] = o[d])
                }
                return p
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    d0 = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(t, a) {
            function s(l) {
                "@babel/helpers - typeof";
                return a.exports = s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
                    return typeof o
                } : function(o) {
                    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                }, a.exports.__esModule = !0, a.exports.default = a.exports, s(l)
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Pw = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(t, a) {
            var s = d0().default;

            function l(o, u) {
                if (s(o) != "object" || !o) return o;
                var d = o[Symbol.toPrimitive];
                if (d !== void 0) {
                    var h = d.call(o, u || "default");
                    if (s(h) != "object") return h;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (u === "string" ? String : Number)(o)
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Yw = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(t, a) {
            var s = d0().default,
                l = Pw();

            function o(u) {
                var d = l(u, "string");
                return s(d) == "symbol" ? d : d + ""
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Gw = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(t, a) {
            var s = Yw();

            function l(o, u, d) {
                return (u = s(u)) in o ? Object.defineProperty(o, u, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[u] = d, o
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    fl = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(t, a) {
            var s = Gw();

            function l(u, d) {
                var h = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(u);
                    d && (p = p.filter(function(g) {
                        return Object.getOwnPropertyDescriptor(u, g).enumerable
                    })), h.push.apply(h, p)
                }
                return h
            }

            function o(u) {
                for (var d = 1; d < arguments.length; d++) {
                    var h = arguments[d] != null ? arguments[d] : {};
                    d % 2 ? l(Object(h), !0).forEach(function(p) {
                        s(u, p, h[p])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : l(Object(h)).forEach(function(p) {
                        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(h, p))
                    })
                }
                return u
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Vw = Vr(Qw(), 1),
    Ay = Vr(fl(), 1);
const Kw = ["cursor", "direction"];

function aa(t, a, s) {
    const l = t.flatMap(o => o.split("."));
    if (!a && (!s || s === "any")) return l.length ? [l] : [];
    if (s === "infinite" && Pr(a) && ("direction" in a || "cursor" in a)) {
        const {
            cursor: o,
            direction: u
        } = a, d = (0, Vw.default)(a, Kw);
        return [l, {
            input: d,
            type: "infinite"
        }]
    }
    return [l, (0, Ay.default)((0, Ay.default)({}, typeof a < "u" && a !== xn && {
        input: a
    }), s && s !== "any" && {
        type: s
    })]
}

function Go(t) {
    return aa(t, void 0, "any")
}
var Xw = Object.create,
    f0 = Object.defineProperty,
    Zw = Object.getOwnPropertyDescriptor,
    h0 = Object.getOwnPropertyNames,
    Iw = Object.getPrototypeOf,
    $w = Object.prototype.hasOwnProperty,
    la = (t, a) => function() {
        return a || (0, t[h0(t)[0]])((a = {
            exports: {}
        }).exports, a), a.exports
    },
    Fw = (t, a, s, l) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (var o = h0(a), u = 0, d = o.length, h; u < d; u++) h = o[u], !$w.call(t, h) && h !== s && f0(t, h, {
                get: (p => a[p]).bind(null, h),
                enumerable: !(l = Zw(a, h)) || l.enumerable
            });
        return t
    },
    yt = (t, a, s) => (s = t != null ? Xw(Iw(t)) : {}, Fw(a || !t || !t.__esModule ? f0(s, "default", {
        value: t,
        enumerable: !0
    }) : s, t)),
    p0 = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(t, a) {
            function s(l) {
                "@babel/helpers - typeof";
                return a.exports = s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
                    return typeof o
                } : function(o) {
                    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                }, a.exports.__esModule = !0, a.exports.default = a.exports, s(l)
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Jw = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(t, a) {
            var s = p0().default;

            function l(o, u) {
                if (s(o) != "object" || !o) return o;
                var d = o[Symbol.toPrimitive];
                if (d !== void 0) {
                    var h = d.call(o, u || "default");
                    if (s(h) != "object") return h;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (u === "string" ? String : Number)(o)
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Ww = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(t, a) {
            var s = p0().default,
                l = Jw();

            function o(u) {
                var d = l(u, "string");
                return s(d) == "symbol" ? d : d + ""
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Kr = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(t, a) {
            var s = Ww();

            function l(o, u, d) {
                return (u = s(u)) in o ? Object.defineProperty(o, u, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[u] = d, o
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    Zn = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(t, a) {
            var s = Kr();

            function l(u, d) {
                var h = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(u);
                    d && (p = p.filter(function(g) {
                        return Object.getOwnPropertyDescriptor(u, g).enumerable
                    })), h.push.apply(h, p)
                }
                return h
            }

            function o(u) {
                for (var d = 1; d < arguments.length; d++) {
                    var h = arguments[d] != null ? arguments[d] : {};
                    d % 2 ? l(Object(h), !0).forEach(function(p) {
                        s(u, p, h[p])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : l(Object(h)).forEach(function(p) {
                        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(h, p))
                    })
                }
                return u
            }
            a.exports = o, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    });

function e2(t) {
    return a => {
        let s = 0,
            l = null;
        const o = [];

        function u() {
            l || (l = a.subscribe({
                next(h) {
                    for (const g of o) {
                        var p;
                        (p = g.next) === null || p === void 0 || p.call(g, h)
                    }
                },
                error(h) {
                    for (const g of o) {
                        var p;
                        (p = g.error) === null || p === void 0 || p.call(g, h)
                    }
                },
                complete() {
                    for (const p of o) {
                        var h;
                        (h = p.complete) === null || h === void 0 || h.call(p)
                    }
                }
            }))
        }

        function d() {
            if (s === 0 && l) {
                const h = l;
                l = null, h.unsubscribe()
            }
        }
        return fc(h => (s++, o.push(h), u(), {
            unsubscribe() {
                s--, d();
                const p = o.findIndex(g => g === h);
                p > -1 && o.splice(p, 1)
            }
        }))
    }
}

function t2(t) {
    let a = t;
    const s = [],
        l = d => {
            a !== void 0 && d.next(a), s.push(d)
        },
        o = d => {
            s.splice(s.indexOf(d), 1)
        },
        u = fc(d => (l(d), () => {
            o(d)
        }));
    return u.next = d => {
        if (a !== d) {
            a = d;
            for (const h of s) h.next(d)
        }
    }, u.get = () => a, u
}

function n2(t) {
    return fc(a => {
        function s(o = 0, u = t.op) {
            const d = t.links[o];
            if (!d) throw new Error("No more links to execute - did you forget to add an ending link?");
            return d({
                op: u,
                next(p) {
                    return s(o + 1, p)
                }
            })
        }
        return s().subscribe(a)
    })
}
var zo = yt(Kr(), 1),
    Ns = yt(Zn(), 1);

function a2(t) {
    return t instanceof qs
}

function r2(t) {
    return Pr(t) && Pr(t.error) && typeof t.error.code == "number" && typeof t.error.message == "string"
}

function s2(t, a) {
    return typeof t == "string" ? t : Pr(t) && typeof t.message == "string" ? t.message : a
}
var qs = class Vo extends Error {
    constructor(a, s) {
        var l, o;
        const u = s?.cause;
        super(a, {
            cause: u
        }), (0, zo.default)(this, "cause", void 0), (0, zo.default)(this, "shape", void 0), (0, zo.default)(this, "data", void 0), (0, zo.default)(this, "meta", void 0), this.meta = s?.meta, this.cause = u, this.shape = s == null || (l = s.result) === null || l === void 0 ? void 0 : l.error, this.data = s == null || (o = s.result) === null || o === void 0 ? void 0 : o.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, Vo.prototype)
    }
    static from(a, s = {}) {
        const l = a;
        return a2(l) ? (s.meta && (l.meta = (0, Ns.default)((0, Ns.default)({}, l.meta), s.meta)), l) : r2(l) ? new Vo(l.error.message, (0, Ns.default)((0, Ns.default)({}, s), {}, {
            result: l,
            cause: s.cause
        })) : new Vo(s2(l, "Unknown error"), (0, Ns.default)((0, Ns.default)({}, s), {}, {
            cause: l
        }))
    }
};

function i2(t) {
    const a = t;
    return a ? "input" in a ? a : {
        input: a,
        output: a
    } : {
        input: {
            serialize: s => s,
            deserialize: s => s
        },
        output: {
            serialize: s => s,
            deserialize: s => s
        }
    }
}
const Ty = t => typeof t == "function";

function l2(t) {
    if (t) return t;
    if (typeof window < "u" && Ty(window.fetch)) return window.fetch;
    if (typeof globalThis < "u" && Ty(globalThis.fetch)) return globalThis.fetch;
    throw new Error("No fetch implementation found")
}
var Vi = yt(Zn());

function o2(t) {
    return {
        url: t.url.toString(),
        fetch: t.fetch,
        transformer: i2(t.transformer),
        methodOverride: t.methodOverride
    }
}

function c2(t) {
    const a = {};
    for (let s = 0; s < t.length; s++) {
        const l = t[s];
        a[s] = l
    }
    return a
}
const u2 = {
    query: "GET",
    mutation: "POST",
    subscription: "PATCH"
};

function m0(t) {
    return "input" in t ? t.transformer.input.serialize(t.input) : c2(t.inputs.map(a => t.transformer.input.serialize(a)))
}
const g0 = t => {
        const a = t.url.split("?");
        let l = a[0].replace(/\/$/, "") + "/" + t.path;
        const o = [];
        if (a[1] && o.push(a[1]), "inputs" in t && o.push("batch=1"), t.type === "query" || t.type === "subscription") {
            const u = m0(t);
            u !== void 0 && t.methodOverride !== "POST" && o.push(`input=${encodeURIComponent(JSON.stringify(u))}`)
        }
        return o.length && (l += "?" + o.join("&")), l
    },
    d2 = t => {
        if (t.type === "query" && t.methodOverride !== "POST") return;
        const a = m0(t);
        return a !== void 0 ? JSON.stringify(a) : void 0
    },
    f2 = t => g2((0, Vi.default)((0, Vi.default)({}, t), {}, {
        contentTypeHeader: "application/json",
        getUrl: g0,
        getBody: d2
    }));
var h2 = class extends Error {
    constructor() {
        const t = "AbortError";
        super(t), this.name = t, this.message = t
    }
};
const p2 = t => {
    var a;
    if (t?.aborted) throw (a = t.throwIfAborted) === null || a === void 0 || a.call(t), typeof DOMException < "u" ? new DOMException("AbortError", "AbortError") : new h2
};
async function m2(t) {
    var a, s;
    p2(t.signal);
    const l = t.getUrl(t),
        o = t.getBody(t),
        u = (a = t.methodOverride) !== null && a !== void 0 ? a : u2[t.type],
        d = await (async () => {
            const p = await t.headers();
            return Symbol.iterator in p ? Object.fromEntries(p) : p
        })(),
        h = (0, Vi.default)((0, Vi.default)((0, Vi.default)({}, t.contentTypeHeader && u !== "GET" ? {
            "content-type": t.contentTypeHeader
        } : {}), t.trpcAcceptHeader ? {
            [(s = t.trpcAcceptHeaderKey) !== null && s !== void 0 ? s : "trpc-accept"]: t.trpcAcceptHeader
        } : void 0), d);
    return l2(t.fetch)(l, {
        method: u,
        signal: t.signal,
        body: o,
        headers: h
    })
}
async function g2(t) {
    const a = {},
        s = await m2(t);
    a.response = s;
    const l = await s.json();
    return a.responseJSON = l, {
        json: l,
        meta: a
    }
}
yt(Zn(), 1);
const Cy = () => {
    throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
};

function jy(t) {
    let a = null,
        s = null;
    const l = () => {
        clearTimeout(s), s = null, a = null
    };

    function o(h) {
        const p = [
            []
        ];
        let g = 0;
        for (;;) {
            const S = h[g];
            if (!S) break;
            const E = p[p.length - 1];
            if (S.aborted) {
                var b;
                (b = S.reject) === null || b === void 0 || b.call(S, new Error("Aborted")), g++;
                continue
            }
            if (t.validate(E.concat(S).map(O => O.key))) {
                E.push(S), g++;
                continue
            }
            if (E.length === 0) {
                var m;
                (m = S.reject) === null || m === void 0 || m.call(S, new Error("Input is too big for a single dispatch")), g++;
                continue
            }
            p.push([])
        }
        return p
    }

    function u() {
        const h = o(a);
        l();
        for (const p of h) {
            if (!p.length) continue;
            const g = {
                items: p
            };
            for (const m of p) m.batch = g;
            t.fetch(g.items.map(m => m.key)).then(async m => {
                await Promise.all(m.map(async (E, A) => {
                    const O = g.items[A];
                    try {
                        var R;
                        const Y = await Promise.resolve(E);
                        (R = O.resolve) === null || R === void 0 || R.call(O, Y)
                    } catch (Y) {
                        var N;
                        (N = O.reject) === null || N === void 0 || N.call(O, Y)
                    }
                    O.batch = null, O.reject = null, O.resolve = null
                }));
                for (const E of g.items) {
                    var S;
                    (S = E.reject) === null || S === void 0 || S.call(E, new Error("Missing result")), E.batch = null
                }
            }).catch(m => {
                for (const E of g.items) {
                    var S;
                    (S = E.reject) === null || S === void 0 || S.call(E, m), E.batch = null
                }
            })
        }
    }

    function d(h) {
        var p;
        const g = {
                aborted: !1,
                key: h,
                batch: null,
                resolve: Cy,
                reject: Cy
            },
            b = new Promise((m, S) => {
                var E;
                g.reject = S, g.resolve = m, (E = a) !== null && E !== void 0 || (a = []), a.push(g)
            });
        return (p = s) !== null && p !== void 0 || (s = setTimeout(u)), b
    }
    return {
        load: d
    }
}

function y2(...t) {
    const a = new AbortController,
        s = t.length;
    let l = 0;
    const o = () => {
        ++l === s && a.abort()
    };
    for (const u of t) u?.aborted ? o() : u?.addEventListener("abort", o, {
        once: !0
    });
    return a.signal
}
var ko = yt(Zn(), 1);

function v2(t) {
    var a, s;
    const l = o2(t),
        o = (a = t.maxURLLength) !== null && a !== void 0 ? a : 1 / 0,
        u = (s = t.maxItems) !== null && s !== void 0 ? s : 1 / 0;
    return () => {
        const d = b => ({
                validate(m) {
                    if (o === 1 / 0 && u === 1 / 0) return !0;
                    if (m.length > u) return !1;
                    const S = m.map(O => O.path).join(","),
                        E = m.map(O => O.input);
                    return g0((0, ko.default)((0, ko.default)({}, l), {}, {
                        type: b,
                        path: S,
                        inputs: E,
                        signal: null
                    })).length <= o
                },
                async fetch(m) {
                    const S = m.map(Y => Y.path).join(","),
                        E = m.map(Y => Y.input),
                        A = y2(...m.map(Y => Y.signal)),
                        O = await f2((0, ko.default)((0, ko.default)({}, l), {}, {
                            path: S,
                            inputs: E,
                            type: b,
                            headers() {
                                return t.headers ? typeof t.headers == "function" ? t.headers({
                                    opList: m
                                }) : t.headers : {}
                            },
                            signal: A
                        }));
                    return (Array.isArray(O.json) ? O.json : m.map(() => O.json)).map(Y => ({
                        meta: O.meta,
                        json: Y
                    }))
                }
            }),
            h = jy(d("query")),
            p = jy(d("mutation")),
            g = {
                query: h,
                mutation: p
            };
        return ({
            op: b
        }) => fc(m => {
            /* istanbul ignore if -- @preserve */
            if (b.type === "subscription") throw new Error("Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`");
            const E = g[b.type].load(b);
            let A;
            return E.then(O => {
                A = O;
                const R = Mw(O.json, l.transformer.output);
                if (!R.ok) {
                    m.error(qs.from(R.error, {
                        meta: O.meta
                    }));
                    return
                }
                m.next({
                    context: O.meta,
                    result: R.result
                }), m.complete()
            }).catch(O => {
                m.error(qs.from(O, {
                    meta: A?.meta
                }))
            }), () => {}
        })
    }
}
yt(Zn(), 1);
const y0 = (t, ...a) => typeof t == "function" ? t(...a) : t;
yt(Kr(), 1);

function b2() {
    let t, a;
    return {
        promise: new Promise((l, o) => {
            t = l, a = o
        }),
        resolve: t,
        reject: a
    }
}
async function x2(t) {
    const a = await y0(t.url);
    if (!t.connectionParams) return a;
    const l = `${a.includes("?")?"&":"?"}connectionParams=1`;
    return a + l
}
async function S2(t, a) {
    const s = {
        method: "connectionParams",
        data: await y0(t)
    };
    return a.encode(s)
}
yt(Kr(), 1);
var sr = yt(Kr(), 1);

function w2(t) {
    const {
        promise: a,
        resolve: s,
        reject: l
    } = b2();
    return t.addEventListener("open", () => {
        t.removeEventListener("error", l), s()
    }), t.addEventListener("error", l), a
}

function E2(t, {
    intervalMs: a,
    pongTimeoutMs: s
}) {
    let l, o;

    function u() {
        l = setTimeout(() => {
            t.send("PING"), o = setTimeout(() => {
                t.close()
            }, s)
        }, a)
    }

    function d() {
        clearTimeout(l), u()
    }

    function h() {
        clearTimeout(o), d()
    }
    t.addEventListener("open", u), t.addEventListener("message", ({
        data: p
    }) => {
        clearTimeout(l), u(), p === "PONG" && h()
    }), t.addEventListener("close", () => {
        clearTimeout(l), clearTimeout(o)
    })
}
var O2 = class xf {
    constructor(a) {
        var s;
        if ((0, sr.default)(this, "id", ++xf.connectCount), (0, sr.default)(this, "WebSocketPonyfill", void 0), (0, sr.default)(this, "urlOptions", void 0), (0, sr.default)(this, "keepAliveOpts", void 0), (0, sr.default)(this, "encoder", void 0), (0, sr.default)(this, "wsObservable", t2(null)), (0, sr.default)(this, "openPromise", null), this.WebSocketPonyfill = (s = a.WebSocketPonyfill) !== null && s !== void 0 ? s : WebSocket, !this.WebSocketPonyfill) throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
        this.urlOptions = a.urlOptions, this.keepAliveOpts = a.keepAlive, this.encoder = a.encoder
    }
    get ws() {
        return this.wsObservable.get()
    }
    set ws(a) {
        this.wsObservable.next(a)
    }
    isOpen() {
        return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise
    }
    isClosed() {
        return !!this.ws && (this.ws.readyState === this.WebSocketPonyfill.CLOSING || this.ws.readyState === this.WebSocketPonyfill.CLOSED)
    }
    async open() {
        var a = this;
        if (a.openPromise) return a.openPromise;
        a.id = ++xf.connectCount;
        const s = x2(a.urlOptions).then(l => new a.WebSocketPonyfill(l));
        a.openPromise = s.then(async l => {
            a.ws = l, l.binaryType = "arraybuffer", l.addEventListener("message", function({
                data: o
            }) {
                o === "PING" && this.send("PONG")
            }), a.keepAliveOpts.enabled && E2(l, a.keepAliveOpts), l.addEventListener("close", () => {
                a.ws === l && (a.ws = null)
            }), await w2(l), a.urlOptions.connectionParams && l.send(await S2(a.urlOptions.connectionParams, a.encoder))
        });
        try {
            await a.openPromise
        } finally {
            a.openPromise = null
        }
    }
    async close() {
        var a = this;
        try {
            await a.openPromise
        } finally {
            var s;
            (s = a.ws) === null || s === void 0 || s.close()
        }
    }
};
(0, sr.default)(O2, "connectCount", 0);
yt(Kr(), 1);
yt(Zn(), 1);
var Gd = yt(Kr(), 1),
    Ry = yt(Zn(), 1),
    hc = class {
        constructor(t) {
            (0, Gd.default)(this, "links", void 0), (0, Gd.default)(this, "runtime", void 0), (0, Gd.default)(this, "requestId", void 0), this.requestId = 0, this.runtime = {}, this.links = t.links.map(a => a(this.runtime))
        }
        $request(t) {
            var a;
            return n2({
                links: this.links,
                op: (0, Ry.default)((0, Ry.default)({}, t), {}, {
                    context: (a = t.context) !== null && a !== void 0 ? a : {},
                    id: ++this.requestId
                })
            }).pipe(e2())
        }
        async requestAsPromise(t) {
            var a = this;
            try {
                const s = a.$request(t);
                return (await Hw(s)).result.data
            } catch (s) {
                throw qs.from(s)
            }
        }
        query(t, a, s) {
            return this.requestAsPromise({
                type: "query",
                path: t,
                input: a,
                context: s?.context,
                signal: s?.signal
            })
        }
        mutation(t, a, s) {
            return this.requestAsPromise({
                type: "mutation",
                path: t,
                input: a,
                context: s?.context,
                signal: s?.signal
            })
        }
        subscription(t, a, s) {
            return this.$request({
                type: "subscription",
                path: t,
                input: a,
                context: s.context,
                signal: s.signal
            }).subscribe({
                next(o) {
                    switch (o.result.type) {
                        case "state": {
                            var u;
                            (u = s.onConnectionStateChange) === null || u === void 0 || u.call(s, o.result);
                            break
                        }
                        case "started": {
                            var d;
                            (d = s.onStarted) === null || d === void 0 || d.call(s, {
                                context: o.context
                            });
                            break
                        }
                        case "stopped": {
                            var h;
                            (h = s.onStopped) === null || h === void 0 || h.call(s);
                            break
                        }
                        case "data":
                        case void 0: {
                            var p;
                            (p = s.onData) === null || p === void 0 || p.call(s, o.result.data);
                            break
                        }
                    }
                },
                error(o) {
                    var u;
                    (u = s.onError) === null || u === void 0 || u.call(s, o)
                },
                complete() {
                    var o;
                    (o = s.onComplete) === null || o === void 0 || o.call(s)
                }
            })
        }
    };
const v0 = Symbol.for("trpc_untypedClient"),
    A2 = {
        query: "query",
        mutate: "mutation",
        subscribe: "subscription"
    },
    T2 = t => A2[t];

function b0(t) {
    const a = dc(({
        path: s,
        args: l
    }) => {
        const o = [...s],
            u = T2(o.pop()),
            d = o.join(".");
        return t[u](d, ...l)
    });
    return $f(s => s === v0 ? t : a[s])
}

function C2(t) {
    const a = new hc(t);
    return b0(a)
}

function Jf(t) {
    return t[v0]
}
yt(Zn(), 1);
yt(Zn(), 1);
var j2 = la({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(t, a) {
        function s(o) {
            var u, d, h, p = 2;
            for (typeof Symbol < "u" && (d = Symbol.asyncIterator, h = Symbol.iterator); p--;) {
                if (d && (u = o[d]) != null) return u.call(o);
                if (h && (u = o[h]) != null) return new l(u.call(o));
                d = "@@asyncIterator", h = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }

        function l(o) {
            function u(d) {
                if (Object(d) !== d) return Promise.reject(new TypeError(d + " is not an object."));
                var h = d.done;
                return Promise.resolve(d.value).then(function(p) {
                    return {
                        value: p,
                        done: h
                    }
                })
            }
            return l = function(h) {
                this.s = h, this.n = h.next
            }, l.prototype = {
                s: null,
                n: null,
                next: function() {
                    return u(this.n.apply(this.s, arguments))
                },
                return: function(h) {
                    var p = this.s.return;
                    return p === void 0 ? Promise.resolve({
                        value: h,
                        done: !0
                    }) : u(p.apply(this.s, arguments))
                },
                throw: function(h) {
                    var p = this.s.return;
                    return p === void 0 ? Promise.reject(h) : u(p.apply(this.s, arguments))
                }
            }, new l(o)
        }
        a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
    }
});
yt(j2(), 1);
yt(Zn(), 1);
var R2 = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(t, a) {
            function s() {
                var l = typeof SuppressedError == "function" ? SuppressedError : function(h, p) {
                        var g = Error();
                        return g.name = "SuppressedError", g.error = h, g.suppressed = p, g
                    },
                    o = {},
                    u = [];

                function d(h, p) {
                    if (p != null) {
                        if (Object(p) !== p) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
                        if (h) var g = p[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
                        if (g === void 0 && (g = p[Symbol.dispose || Symbol.for("Symbol.dispose")], h)) var b = g;
                        if (typeof g != "function") throw new TypeError("Object is not disposable.");
                        b && (g = function() {
                            try {
                                b.call(p)
                            } catch (S) {
                                return Promise.reject(S)
                            }
                        }), u.push({
                            v: p,
                            d: g,
                            a: h
                        })
                    } else h && u.push({
                        d: p,
                        a: h
                    });
                    return p
                }
                return {
                    e: o,
                    u: d.bind(null, !1),
                    a: d.bind(null, !0),
                    d: function() {
                        var p, g = this.e,
                            b = 0;

                        function m() {
                            for (; p = u.pop();) try {
                                if (!p.a && b === 1) return b = 0, u.push(p), Promise.resolve().then(m);
                                if (p.d) {
                                    var E = p.d.call(p.v);
                                    if (p.a) return b |= 2, Promise.resolve(E).then(m, S)
                                } else b |= 1
                            } catch (A) {
                                return S(A)
                            }
                            if (b === 1) return g !== o ? Promise.reject(g) : Promise.resolve();
                            if (g !== o) throw g
                        }

                        function S(E) {
                            return g = g !== o ? new l(E, g) : E, m()
                        }
                        return m()
                    }
                }
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    x0 = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(t, a) {
            function s(l, o) {
                this.v = l, this.k = o
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    D2 = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(t, a) {
            var s = x0();

            function l(o) {
                return new s(o, 0)
            }
            a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    _2 = la({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(t, a) {
            var s = x0();

            function l(u) {
                return function() {
                    return new o(u.apply(this, arguments))
                }
            }

            function o(u) {
                var d, h;

                function p(b, m) {
                    try {
                        var S = u[b](m),
                            E = S.value,
                            A = E instanceof s;
                        Promise.resolve(A ? E.v : E).then(function(O) {
                            if (A) {
                                var R = b === "return" ? "return" : "next";
                                if (!E.k || O.done) return p(R, O);
                                O = u[R](O).value
                            }
                            g(S.done ? "return" : "normal", O)
                        }, function(O) {
                            p("throw", O)
                        })
                    } catch (O) {
                        g("throw", O)
                    }
                }

                function g(b, m) {
                    switch (b) {
                        case "return":
                            d.resolve({
                                value: m,
                                done: !0
                            });
                            break;
                        case "throw":
                            d.reject(m);
                            break;
                        default:
                            d.resolve({
                                value: m,
                                done: !1
                            })
                    }(d = d.next) ? p(d.key, d.arg): h = null
                }
                this._invoke = function(b, m) {
                    return new Promise(function(S, E) {
                        var A = {
                            key: b,
                            arg: m,
                            resolve: S,
                            reject: E,
                            next: null
                        };
                        h ? h = h.next = A : (d = h = A, p(b, m))
                    })
                }, typeof u.return != "function" && (this.return = void 0)
            }
            o.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
                return this
            }, o.prototype.next = function(u) {
                return this._invoke("next", u)
            }, o.prototype.throw = function(u) {
                return this._invoke("throw", u)
            }, o.prototype.return = function(u) {
                return this._invoke("return", u)
            }, a.exports = l, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    });
yt(R2(), 1);
yt(D2(), 1);
yt(_2(), 1);
yt(Zn(), 1);

function M2(t) {
    return dc(({
        path: a,
        args: s
    }) => {
        var l;
        const o = [...a],
            u = o.pop();
        if (u === "useMutation") return t[u](o, ...s);
        if (u === "_def") return {
            path: o
        };
        const [d, ...h] = s, p = (l = h[0]) !== null && l !== void 0 ? l : {};
        return t[u](o, d, p)
    })
}
var Vd;
const N2 = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
    H2 = (Vd = x.createContext) === null || Vd === void 0 ? void 0 : Vd.call(Kv, null),
    z2 = t => {
        switch (t) {
            case "queryOptions":
            case "fetch":
            case "ensureData":
            case "prefetch":
            case "getData":
            case "setData":
            case "setQueriesData":
                return "query";
            case "infiniteQueryOptions":
            case "fetchInfinite":
            case "prefetchInfinite":
            case "getInfiniteData":
            case "setInfiniteData":
                return "infinite";
            case "setMutationDefaults":
            case "getMutationDefaults":
            case "isMutating":
            case "cancel":
            case "invalidate":
            case "refetch":
            case "reset":
                return "any"
        }
    };

function k2(t) {
    return dc(a => {
        const s = [...a.path],
            l = s.pop(),
            o = [...a.args],
            u = o.shift(),
            d = z2(l),
            h = aa(s, u, d);
        return {
            infiniteQueryOptions: () => t.infiniteQueryOptions(s, h, o[0]),
            queryOptions: () => t.queryOptions(s, h, ...o),
            fetch: () => t.fetchQuery(h, ...o),
            fetchInfinite: () => t.fetchInfiniteQuery(h, o[0]),
            prefetch: () => t.prefetchQuery(h, ...o),
            prefetchInfinite: () => t.prefetchInfiniteQuery(h, o[0]),
            ensureData: () => t.ensureQueryData(h, ...o),
            invalidate: () => t.invalidateQueries(h, ...o),
            reset: () => t.resetQueries(h, ...o),
            refetch: () => t.refetchQueries(h, ...o),
            cancel: () => t.cancelQuery(h, ...o),
            setData: () => {
                t.setQueryData(h, o[0], o[1])
            },
            setQueriesData: () => t.setQueriesData(h, o[0], o[1], o[2]),
            setInfiniteData: () => {
                t.setInfiniteQueryData(h, o[0], o[1])
            },
            getData: () => t.getQueryData(h),
            getInfiniteData: () => t.getInfiniteQueryData(h),
            setMutationDefaults: () => t.setMutationDefaults(Go(s), u),
            getMutationDefaults: () => t.getMutationDefaults(Go(s)),
            isMutating: () => t.isMutating({
                mutationKey: Go(s)
            })
        } [l]()
    })
}

function U2(t) {
    const a = b0(t.client),
        s = k2(t);
    return $f(l => {
        const o = l;
        return o === "client" ? a : N2.includes(o) ? t[o] : s[l]
    })
}
var L2 = Vr(fl(), 1);

function Dy(t) {
    const a = t instanceof hc ? t : Jf(t);
    return dc(s => {
        const l = s.path,
            o = l.join("."),
            [u, d] = s.args;
        return (0, L2.default)({
            queryKey: aa(l, u, "query"),
            queryFn: () => a.query(o, u, d?.trpc)
        }, d)
    })
}
var Kd = Vr(fl(), 1);

function Zt(t, a, s) {
    var l;
    const o = t[0];
    let u = (l = t[1]) === null || l === void 0 ? void 0 : l.input;
    if (s) {
        var d;
        u = (0, Kd.default)((0, Kd.default)((0, Kd.default)({}, (d = u) !== null && d !== void 0 ? d : {}), s.pageParam ? {
            cursor: s.pageParam
        } : {}), {}, {
            direction: s.direction
        })
    }
    return [o.join("."), u, a?.trpc]
}
var B2 = yr({
        "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(t, a) {
            function s(o) {
                var u, d, h, p = 2;
                for (typeof Symbol < "u" && (d = Symbol.asyncIterator, h = Symbol.iterator); p--;) {
                    if (d && (u = o[d]) != null) return u.call(o);
                    if (h && (u = o[h]) != null) return new l(u.call(o));
                    d = "@@asyncIterator", h = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function l(o) {
                function u(d) {
                    if (Object(d) !== d) return Promise.reject(new TypeError(d + " is not an object."));
                    var h = d.done;
                    return Promise.resolve(d.value).then(function(p) {
                        return {
                            value: p,
                            done: h
                        }
                    })
                }
                return l = function(h) {
                    this.s = h, this.n = h.next
                }, l.prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return u(this.n.apply(this.s, arguments))
                    },
                    return: function(h) {
                        var p = this.s.return;
                        return p === void 0 ? Promise.resolve({
                            value: h,
                            done: !0
                        }) : u(p.apply(this.s, arguments))
                    },
                    throw: function(h) {
                        var p = this.s.return;
                        return p === void 0 ? Promise.reject(h) : u(p.apply(this.s, arguments))
                    }
                }, new l(o)
            }
            a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports
        }
    }),
    q2 = Vr(B2(), 1);

function Sf(t) {
    return {
        path: t.path.join(".")
    }
}

function Qi(t) {
    const a = Sf(t);
    return x.useMemo(() => a, [a])
}
async function S0(t, a, s) {
    const o = a.getQueryCache().build(a, {
        queryKey: s
    });
    o.setState({
        data: [],
        status: "success"
    });
    const u = [];
    var d = !1,
        h = !1,
        p;
    try {
        for (var g = (0, q2.default)(t), b; d = !(b = await g.next()).done; d = !1) {
            const m = b.value;
            u.push(m), o.setState({
                data: [...u]
            })
        }
    } catch (m) {
        h = !0, p = m
    } finally {
        try {
            d && g.return != null && await g.return()
        } finally {
            if (h) throw p
        }
    }
    return u
}
var Qe = Vr(fl(), 1);

function Q2(t) {
    const {
        client: a,
        queryClient: s
    } = t, l = a instanceof hc ? a : Jf(a);
    return {
        infiniteQueryOptions: (o, u, d) => {
            var h, p;
            const g = ((h = u[1]) === null || h === void 0 ? void 0 : h.input) === xn,
                b = async m => {
                    var S;
                    const E = (0, Qe.default)((0, Qe.default)({}, d), {}, {
                        trpc: (0, Qe.default)((0, Qe.default)({}, d?.trpc), !(d == null || (S = d.trpc) === null || S === void 0) && S.abortOnUnmount ? {
                            signal: m.signal
                        } : {
                            signal: null
                        })
                    });
                    return await l.query(...Zt(u, E, {
                        direction: m.direction,
                        pageParam: m.pageParam
                    }))
                };
            return Object.assign((0, Qe.default)((0, Qe.default)({}, d), {}, {
                initialData: d?.initialData,
                queryKey: u,
                queryFn: g ? xn : b,
                initialPageParam: (p = d?.initialCursor) !== null && p !== void 0 ? p : null
            }), {
                trpc: Sf({
                    path: o
                })
            })
        },
        queryOptions: (o, u, d) => {
            var h;
            const p = ((h = u[1]) === null || h === void 0 ? void 0 : h.input) === xn,
                g = async b => {
                    var m;
                    const S = (0, Qe.default)((0, Qe.default)({}, d), {}, {
                            trpc: (0, Qe.default)((0, Qe.default)({}, d?.trpc), !(d == null || (m = d.trpc) === null || m === void 0) && m.abortOnUnmount ? {
                                signal: b.signal
                            } : {
                                signal: null
                            })
                        }),
                        E = await l.query(...Zt(u, S));
                    return n0(E) ? S0(E, s, u) : E
                };
            return Object.assign((0, Qe.default)((0, Qe.default)({}, d), {}, {
                initialData: d?.initialData,
                queryKey: u,
                queryFn: p ? xn : g
            }), {
                trpc: Sf({
                    path: o
                })
            })
        },
        fetchQuery: (o, u) => s.fetchQuery((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o,
            queryFn: () => l.query(...Zt(o, u))
        })),
        fetchInfiniteQuery: (o, u) => {
            var d;
            return s.fetchInfiniteQuery((0, Qe.default)((0, Qe.default)({}, u), {}, {
                queryKey: o,
                queryFn: ({
                    pageParam: h,
                    direction: p
                }) => l.query(...Zt(o, u, {
                    pageParam: h,
                    direction: p
                })),
                initialPageParam: (d = u?.initialCursor) !== null && d !== void 0 ? d : null
            }))
        },
        prefetchQuery: (o, u) => s.prefetchQuery((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o,
            queryFn: () => l.query(...Zt(o, u))
        })),
        prefetchInfiniteQuery: (o, u) => {
            var d;
            return s.prefetchInfiniteQuery((0, Qe.default)((0, Qe.default)({}, u), {}, {
                queryKey: o,
                queryFn: ({
                    pageParam: h,
                    direction: p
                }) => l.query(...Zt(o, u, {
                    pageParam: h,
                    direction: p
                })),
                initialPageParam: (d = u?.initialCursor) !== null && d !== void 0 ? d : null
            }))
        },
        ensureQueryData: (o, u) => s.ensureQueryData((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o,
            queryFn: () => l.query(...Zt(o, u))
        })),
        invalidateQueries: (o, u, d) => s.invalidateQueries((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o
        }), d),
        resetQueries: (o, u, d) => s.resetQueries((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o
        }), d),
        refetchQueries: (o, u, d) => s.refetchQueries((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o
        }), d),
        cancelQuery: (o, u) => s.cancelQueries({
            queryKey: o
        }, u),
        setQueryData: (o, u, d) => s.setQueryData(o, u, d),
        setQueriesData: (o, u, d, h) => s.setQueriesData((0, Qe.default)((0, Qe.default)({}, u), {}, {
            queryKey: o
        }), d, h),
        getQueryData: o => s.getQueryData(o),
        setInfiniteQueryData: (o, u, d) => s.setQueryData(o, u, d),
        getInfiniteQueryData: o => s.getQueryData(o),
        setMutationDefaults: (o, u) => {
            const d = o[0],
                h = p => l.mutation(...Zt([d, {
                    input: p
                }], t));
            return s.setMutationDefaults(o, typeof u == "function" ? u({
                canonicalMutationFn: h
            }) : u)
        },
        getMutationDefaults: o => s.getMutationDefaults(o),
        isMutating: o => s.isMutating((0, Qe.default)((0, Qe.default)({}, o), {}, {
            exact: !0
        }))
    }
}
var fe = Vr(fl());
const _y = (t, a) => new Proxy(t, {
    get(l, o) {
        return a(o), l[o]
    }
});

function P2(t) {
    var a, s;
    const l = (a = void 0) !== null && a !== void 0 ? a : B => B.originalFn(),
        o = (s = void 0) !== null && s !== void 0 ? s : H2,
        u = C2,
        d = B => {
            var L;
            const {
                abortOnUnmount: T = !1,
                queryClient: _,
                ssrContext: F
            } = B, [$, G] = x.useState((L = B.ssrState) !== null && L !== void 0 ? L : !1), te = B.client instanceof hc ? B.client : Jf(B.client), le = x.useMemo(() => Q2({
                client: te,
                queryClient: _
            }), [te, _]), ne = x.useMemo(() => (0, fe.default)({
                abortOnUnmount: T,
                queryClient: _,
                client: te,
                ssrContext: F ?? null,
                ssrState: $
            }, le), [T, te, le, _, F, $]);
            return x.useEffect(() => {
                G(se => se ? "mounted" : !1)
            }, []), y.jsx(o.Provider, {
                value: ne,
                children: B.children
            })
        };

    function h() {
        const B = x.useContext(o);
        if (!B) throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");
        return B
    }

    function p(B, L) {
        var T;
        const {
            queryClient: _,
            ssrState: F
        } = h();
        return F && F !== "mounted" && ((T = _.getQueryCache().find({
            queryKey: B
        })) === null || T === void 0 ? void 0 : T.state.status) === "error" ? (0, fe.default)({
            retryOnMount: !1
        }, L) : L
    }

    function g(B, L, T) {
        var _, F, $, G, te;
        const le = h(),
            {
                abortOnUnmount: ne,
                client: se,
                ssrState: j,
                queryClient: H,
                prefetchQuery: z
            } = le,
            oe = aa(B, L, "query"),
            de = H.getQueryDefaults(oe),
            C = L === xn;
        typeof window > "u" && j === "prepass" && (T == null || (_ = T.trpc) === null || _ === void 0 ? void 0 : _.ssr) !== !1 && ((F = T?.enabled) !== null && F !== void 0 ? F : de?.enabled) !== !1 && !C && !H.getQueryCache().find({
            queryKey: oe
        }) && z(oe, T);
        const P = p(oe, (0, fe.default)((0, fe.default)({}, de), T)),
            U = ($ = (G = T == null || (te = T.trpc) === null || te === void 0 ? void 0 : te.abortOnUnmount) !== null && G !== void 0 ? G : void 0) !== null && $ !== void 0 ? $ : ne,
            I = pw((0, fe.default)((0, fe.default)({}, P), {}, {
                queryKey: oe,
                queryFn: C ? L : async ie => {
                    const ce = (0, fe.default)((0, fe.default)({}, P), {}, {
                            trpc: (0, fe.default)((0, fe.default)({}, P?.trpc), U ? {
                                signal: ie.signal
                            } : {
                                signal: null
                            })
                        }),
                        ue = await se.query(...Zt(oe, ce));
                    return n0(ue) ? S0(ue, H, oe) : ue
                }
            }), H);
        return I.trpc = Qi({
            path: B
        }), I
    }

    function b(B, L, T) {
        var _, F, $;
        const G = h(),
            te = aa(B, L, "query"),
            le = L === xn,
            ne = (_ = (F = T == null || ($ = T.trpc) === null || $ === void 0 ? void 0 : $.abortOnUnmount) !== null && F !== void 0 ? F : void 0) !== null && _ !== void 0 ? _ : G.abortOnUnmount;
        vw((0, fe.default)((0, fe.default)({}, T), {}, {
            queryKey: te,
            queryFn: le ? L : se => {
                const j = {
                    trpc: (0, fe.default)((0, fe.default)({}, T?.trpc), ne ? {
                        signal: se.signal
                    } : {})
                };
                return G.client.query(...Zt(te, j))
            }
        }))
    }

    function m(B, L, T) {
        var _, F, $;
        const G = h(),
            te = aa(B, L, "query"),
            le = (_ = (F = T == null || ($ = T.trpc) === null || $ === void 0 ? void 0 : $.abortOnUnmount) !== null && F !== void 0 ? F : void 0) !== null && _ !== void 0 ? _ : G.abortOnUnmount,
            ne = mw((0, fe.default)((0, fe.default)({}, T), {}, {
                queryKey: te,
                queryFn: se => {
                    const j = (0, fe.default)((0, fe.default)({}, T), {}, {
                        trpc: (0, fe.default)((0, fe.default)({}, T?.trpc), le ? {
                            signal: se.signal
                        } : {
                            signal: null
                        })
                    });
                    return G.client.query(...Zt(te, j))
                }
            }), G.queryClient);
        return ne.trpc = Qi({
            path: B
        }), [ne.data, ne]
    }

    function S(B, L) {
        const {
            client: T,
            queryClient: _
        } = h(), F = Go(B), $ = _.defaultMutationOptions(_.getMutationDefaults(F)), G = xw((0, fe.default)((0, fe.default)({}, L), {}, {
            mutationKey: F,
            mutationFn: te => T.mutation(...Zt([B, {
                input: te
            }], L)),
            onSuccess(...te) {
                var le, ne;
                return l({
                    originalFn: () => {
                        var j, H, z;
                        return (j = L == null || (H = L.onSuccess) === null || H === void 0 ? void 0 : H.call(L, ...te)) !== null && j !== void 0 ? j : $ == null || (z = $.onSuccess) === null || z === void 0 ? void 0 : z.call($, ...te)
                    },
                    queryClient: _,
                    meta: (le = (ne = L?.meta) !== null && ne !== void 0 ? ne : $?.meta) !== null && le !== void 0 ? le : {}
                })
            }
        }), _);
        return G.trpc = Qi({
            path: B
        }), G
    }
    const E = {
            data: void 0,
            error: null,
            status: "idle"
        },
        A = {
            data: void 0,
            error: null,
            status: "connecting"
        }; /* istanbul ignore next -- @preserve */
    function O(B, L, T) {
        var _;
        const F = (_ = T?.enabled) !== null && _ !== void 0 ? _ : L !== xn,
            $ = dr(aa(B, L, "any")),
            {
                client: G
            } = h(),
            te = x.useRef(T);
        x.useEffect(() => {
            te.current = T
        });
        const [le] = x.useState(new Set([])), ne = x.useCallback(C => {
            le.add(C)
        }, [le]), se = x.useRef(null), j = x.useCallback(C => {
            const P = z.current,
                U = z.current = C(P);
            let I = !1;
            for (const ie of le)
                if (P[ie] !== U[ie]) {
                    I = !0;
                    break
                } I && de(_y(U, ne))
        }, [ne, le]), H = x.useCallback(() => {
            var C;
            if ((C = se.current) === null || C === void 0 || C.unsubscribe(), !F) {
                j(() => (0, fe.default)((0, fe.default)({}, E), {}, {
                    reset: H
                }));
                return
            }
            j(() => (0, fe.default)((0, fe.default)({}, A), {}, {
                reset: H
            }));
            const P = G.subscription(B.join("."), L ?? void 0, {
                onStarted: () => {
                    var U, I;
                    (U = (I = te.current).onStarted) === null || U === void 0 || U.call(I), j(ie => (0, fe.default)((0, fe.default)({}, ie), {}, {
                        status: "pending",
                        error: null
                    }))
                },
                onData: U => {
                    var I, ie;
                    (I = (ie = te.current).onData) === null || I === void 0 || I.call(ie, U), j(ce => (0, fe.default)((0, fe.default)({}, ce), {}, {
                        status: "pending",
                        data: U,
                        error: null
                    }))
                },
                onError: U => {
                    var I, ie;
                    (I = (ie = te.current).onError) === null || I === void 0 || I.call(ie, U), j(ce => (0, fe.default)((0, fe.default)({}, ce), {}, {
                        status: "error",
                        error: U
                    }))
                },
                onConnectionStateChange: U => {
                    j(I => {
                        switch (U.state) {
                            case "idle":
                                return (0, fe.default)((0, fe.default)({}, I), {}, {
                                    status: U.state,
                                    error: null,
                                    data: void 0
                                });
                            case "connecting":
                                return (0, fe.default)((0, fe.default)({}, I), {}, {
                                    error: U.error,
                                    status: U.state
                                });
                            case "pending":
                                return I
                        }
                    })
                },
                onComplete: () => {
                    var U, I;
                    (U = (I = te.current).onComplete) === null || U === void 0 || U.call(I), j(ie => (0, fe.default)((0, fe.default)({}, ie), {}, {
                        status: "idle",
                        error: null,
                        data: void 0
                    }))
                }
            });
            se.current = P
        }, [G, $, F, j]);
        x.useEffect(() => (H(), () => {
            var C;
            (C = se.current) === null || C === void 0 || C.unsubscribe()
        }), [H]);
        const z = x.useRef(F ? (0, fe.default)((0, fe.default)({}, A), {}, {
                reset: H
            }) : (0, fe.default)((0, fe.default)({}, E), {}, {
                reset: H
            })),
            [oe, de] = x.useState(_y(z.current, ne));
        return oe
    }

    function R(B, L, T) {
        var _, F, $, G, te;
        const {
            client: le,
            ssrState: ne,
            prefetchInfiniteQuery: se,
            queryClient: j,
            abortOnUnmount: H
        } = h(), z = aa(B, L, "infinite"), oe = j.getQueryDefaults(z), de = L === xn;
        typeof window > "u" && ne === "prepass" && (T == null || (_ = T.trpc) === null || _ === void 0 ? void 0 : _.ssr) !== !1 && ((F = T?.enabled) !== null && F !== void 0 ? F : oe?.enabled) !== !1 && !de && !j.getQueryCache().find({
            queryKey: z
        }) && se(z, (0, fe.default)((0, fe.default)({}, oe), T));
        const C = p(z, (0, fe.default)((0, fe.default)({}, oe), T)),
            P = ($ = T == null || (G = T.trpc) === null || G === void 0 ? void 0 : G.abortOnUnmount) !== null && $ !== void 0 ? $ : H,
            U = Sw((0, fe.default)((0, fe.default)({}, C), {}, {
                initialPageParam: (te = T.initialCursor) !== null && te !== void 0 ? te : null,
                persister: T.persister,
                queryKey: z,
                queryFn: de ? L : I => {
                    var ie;
                    const ce = (0, fe.default)((0, fe.default)({}, C), {}, {
                        trpc: (0, fe.default)((0, fe.default)({}, C?.trpc), P ? {
                            signal: I.signal
                        } : {
                            signal: null
                        })
                    });
                    return le.query(...Zt(z, ce, {
                        pageParam: (ie = I.pageParam) !== null && ie !== void 0 ? ie : T.initialCursor,
                        direction: I.direction
                    }))
                }
            }), j);
        return U.trpc = Qi({
            path: B
        }), U
    }

    function N(B, L, T) {
        var _, F, $;
        const G = h(),
            te = aa(B, L, "infinite"),
            le = G.queryClient.getQueryDefaults(te),
            ne = L === xn,
            se = p(te, (0, fe.default)((0, fe.default)({}, le), T)),
            j = (_ = T == null || (F = T.trpc) === null || F === void 0 ? void 0 : F.abortOnUnmount) !== null && _ !== void 0 ? _ : G.abortOnUnmount;
        bw((0, fe.default)((0, fe.default)({}, T), {}, {
            initialPageParam: ($ = T.initialCursor) !== null && $ !== void 0 ? $ : null,
            queryKey: te,
            queryFn: ne ? L : H => {
                var z;
                const oe = (0, fe.default)((0, fe.default)({}, se), {}, {
                    trpc: (0, fe.default)((0, fe.default)({}, se?.trpc), j ? {
                        signal: H.signal
                    } : {})
                });
                return G.client.query(...Zt(te, oe, {
                    pageParam: (z = H.pageParam) !== null && z !== void 0 ? z : T.initialCursor,
                    direction: H.direction
                }))
            }
        }))
    }

    function Y(B, L, T) {
        var _, F, $;
        const G = h(),
            te = aa(B, L, "infinite"),
            le = G.queryClient.getQueryDefaults(te),
            ne = p(te, (0, fe.default)((0, fe.default)({}, le), T)),
            se = (_ = T == null || (F = T.trpc) === null || F === void 0 ? void 0 : F.abortOnUnmount) !== null && _ !== void 0 ? _ : G.abortOnUnmount,
            j = gw((0, fe.default)((0, fe.default)({}, T), {}, {
                initialPageParam: ($ = T.initialCursor) !== null && $ !== void 0 ? $ : null,
                queryKey: te,
                queryFn: H => {
                    var z;
                    const oe = (0, fe.default)((0, fe.default)({}, ne), {}, {
                        trpc: (0, fe.default)((0, fe.default)({}, ne?.trpc), se ? {
                            signal: H.signal
                        } : {})
                    });
                    return G.client.query(...Zt(te, oe, {
                        pageParam: (z = H.pageParam) !== null && z !== void 0 ? z : T.initialCursor,
                        direction: H.direction
                    }))
                }
            }), G.queryClient);
        return j.trpc = Qi({
            path: B
        }), [j.data, j]
    }
    return {
        Provider: d,
        createClient: u,
        useContext: h,
        useUtils: h,
        useQuery: g,
        usePrefetchQuery: b,
        useSuspenseQuery: m,
        useQueries: (B, L) => {
            const {
                ssrState: T,
                queryClient: _,
                prefetchQuery: F,
                client: $
            } = h(), G = Dy($), te = B(G);
            if (typeof window > "u" && T === "prepass")
                for (const ne of te) {
                    var le;
                    const se = ne;
                    ((le = se.trpc) === null || le === void 0 ? void 0 : le.ssr) !== !1 && !_.getQueryCache().find({
                        queryKey: se.queryKey
                    }) && F(se.queryKey, se)
                }
            return t0({
                queries: te.map(ne => (0, fe.default)((0, fe.default)({}, ne), {}, {
                    queryKey: ne.queryKey
                })),
                combine: L?.combine
            }, _)
        },
        useSuspenseQueries: B => {
            const {
                queryClient: L,
                client: T
            } = h(), _ = Dy(T), F = B(_), $ = yw({
                queries: F.map(G => (0, fe.default)((0, fe.default)({}, G), {}, {
                    queryFn: G.queryFn,
                    queryKey: G.queryKey
                }))
            }, L);
            return [$.map(G => G.data), $]
        },
        useMutation: S,
        useSubscription: O,
        useInfiniteQuery: R,
        usePrefetchInfiniteQuery: N,
        useSuspenseInfiniteQuery: Y
    }
}

function Y2(t) {
    const a = M2(t);
    return $f(s => s === "useContext" || s === "useUtils" ? () => {
        const l = t.useUtils();
        return x.useMemo(() => U2(l), [l])
    } : t.hasOwnProperty(s) ? t[s] : a[s])
}

function G2(t) {
    const a = P2();
    return Y2(a)
}
const jt = G2(),
    V2 = "app_session_id",
    K2 = "Please login (10001)",
    X2 = "__Host-oauth_state",
    Z2 = t => btoa(JSON.stringify(t));
var Xd = {
        exports: {}
    },
    Pi = {},
    Zd = {
        exports: {}
    },
    Id = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var My;

function I2() {
    return My || (My = 1, (function(t) {
        function a(j, H) {
            var z = j.length;
            j.push(H);
            e: for (; 0 < z;) {
                var oe = z - 1 >>> 1,
                    de = j[oe];
                if (0 < o(de, H)) j[oe] = H, j[z] = de, z = oe;
                else break e
            }
        }

        function s(j) {
            return j.length === 0 ? null : j[0]
        }

        function l(j) {
            if (j.length === 0) return null;
            var H = j[0],
                z = j.pop();
            if (z !== H) {
                j[0] = z;
                e: for (var oe = 0, de = j.length, C = de >>> 1; oe < C;) {
                    var P = 2 * (oe + 1) - 1,
                        U = j[P],
                        I = P + 1,
                        ie = j[I];
                    if (0 > o(U, z)) I < de && 0 > o(ie, U) ? (j[oe] = ie, j[I] = z, oe = I) : (j[oe] = U, j[P] = z, oe = P);
                    else if (I < de && 0 > o(ie, z)) j[oe] = ie, j[I] = z, oe = I;
                    else break e
                }
            }
            return H
        }

        function o(j, H) {
            var z = j.sortIndex - H.sortIndex;
            return z !== 0 ? z : j.id - H.id
        }
        if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            t.unstable_now = function() {
                return u.now()
            }
        } else {
            var d = Date,
                h = d.now();
            t.unstable_now = function() {
                return d.now() - h
            }
        }
        var p = [],
            g = [],
            b = 1,
            m = null,
            S = 3,
            E = !1,
            A = !1,
            O = !1,
            R = !1,
            N = typeof setTimeout == "function" ? setTimeout : null,
            Y = typeof clearTimeout == "function" ? clearTimeout : null,
            K = typeof setImmediate < "u" ? setImmediate : null;

        function Z(j) {
            for (var H = s(g); H !== null;) {
                if (H.callback === null) l(g);
                else if (H.startTime <= j) l(g), H.sortIndex = H.expirationTime, a(p, H);
                else break;
                H = s(g)
            }
        }

        function B(j) {
            if (O = !1, Z(j), !A)
                if (s(p) !== null) A = !0, L || (L = !0, te());
                else {
                    var H = s(g);
                    H !== null && se(B, H.startTime - j)
                }
        }
        var L = !1,
            T = -1,
            _ = 5,
            F = -1;

        function $() {
            return R ? !0 : !(t.unstable_now() - F < _)
        }

        function G() {
            if (R = !1, L) {
                var j = t.unstable_now();
                F = j;
                var H = !0;
                try {
                    e: {
                        A = !1,
                        O && (O = !1, Y(T), T = -1),
                        E = !0;
                        var z = S;
                        try {
                            t: {
                                for (Z(j), m = s(p); m !== null && !(m.expirationTime > j && $());) {
                                    var oe = m.callback;
                                    if (typeof oe == "function") {
                                        m.callback = null, S = m.priorityLevel;
                                        var de = oe(m.expirationTime <= j);
                                        if (j = t.unstable_now(), typeof de == "function") {
                                            m.callback = de, Z(j), H = !0;
                                            break t
                                        }
                                        m === s(p) && l(p), Z(j)
                                    } else l(p);
                                    m = s(p)
                                }
                                if (m !== null) H = !0;
                                else {
                                    var C = s(g);
                                    C !== null && se(B, C.startTime - j), H = !1
                                }
                            }
                            break e
                        }
                        finally {
                            m = null, S = z, E = !1
                        }
                        H = void 0
                    }
                }
                finally {
                    H ? te() : L = !1
                }
            }
        }
        var te;
        if (typeof K == "function") te = function() {
            K(G)
        };
        else if (typeof MessageChannel < "u") {
            var le = new MessageChannel,
                ne = le.port2;
            le.port1.onmessage = G, te = function() {
                ne.postMessage(null)
            }
        } else te = function() {
            N(G, 0)
        };

        function se(j, H) {
            T = N(function() {
                j(t.unstable_now())
            }, H)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(j) {
            j.callback = null
        }, t.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < j ? Math.floor(1e3 / j) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return S
        }, t.unstable_next = function(j) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var H = 3;
                    break;
                default:
                    H = S
            }
            var z = S;
            S = H;
            try {
                return j()
            } finally {
                S = z
            }
        }, t.unstable_requestPaint = function() {
            R = !0
        }, t.unstable_runWithPriority = function(j, H) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3
            }
            var z = S;
            S = j;
            try {
                return H()
            } finally {
                S = z
            }
        }, t.unstable_scheduleCallback = function(j, H, z) {
            var oe = t.unstable_now();
            switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? oe + z : oe) : z = oe, j) {
                case 1:
                    var de = -1;
                    break;
                case 2:
                    de = 250;
                    break;
                case 5:
                    de = 1073741823;
                    break;
                case 4:
                    de = 1e4;
                    break;
                default:
                    de = 5e3
            }
            return de = z + de, j = {
                id: b++,
                callback: H,
                priorityLevel: j,
                startTime: z,
                expirationTime: de,
                sortIndex: -1
            }, z > oe ? (j.sortIndex = z, a(g, j), s(p) === null && j === s(g) && (O ? (Y(T), T = -1) : O = !0, se(B, z - oe))) : (j.sortIndex = de, a(p, j), A || E || (A = !0, L || (L = !0, te()))), j
        }, t.unstable_shouldYield = $, t.unstable_wrapCallback = function(j) {
            var H = S;
            return function() {
                var z = S;
                S = H;
                try {
                    return j.apply(this, arguments)
                } finally {
                    S = z
                }
            }
        }
    })(Id)), Id
}
var Ny;

function $2() {
    return Ny || (Ny = 1, Zd.exports = I2()), Zd.exports
}
var $d = {
        exports: {}
    },
    Yt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hy;

function F2() {
    if (Hy) return Yt;
    Hy = 1;
    var t = oc();

    function a(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++) g += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var l = {
            d: {
                f: s,
                r: function() {
                    throw Error(a(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        o = Symbol.for("react.portal");

    function u(p, g, b) {
        var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: m == null ? null : "" + m,
            children: p,
            containerInfo: g,
            implementation: b
        }
    }
    var d = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function h(p, g) {
        if (p === "font") return "";
        if (typeof g == "string") return g === "use-credentials" ? g : ""
    }
    return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Yt.createPortal = function(p, g) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(a(299));
        return u(p, g, null, b)
    }, Yt.flushSync = function(p) {
        var g = d.T,
            b = l.p;
        try {
            if (d.T = null, l.p = 2, p) return p()
        } finally {
            d.T = g, l.p = b, l.d.f()
        }
    }, Yt.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, l.d.C(p, g))
    }, Yt.prefetchDNS = function(p) {
        typeof p == "string" && l.d.D(p)
    }, Yt.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var b = g.as,
                m = h(b, g.crossOrigin),
                S = typeof g.integrity == "string" ? g.integrity : void 0,
                E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            b === "style" ? l.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: m,
                integrity: S,
                fetchPriority: E
            }) : b === "script" && l.d.X(p, {
                crossOrigin: m,
                integrity: S,
                fetchPriority: E,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }, Yt.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var b = h(g.as, g.crossOrigin);
                    l.d.M(p, {
                        crossOrigin: b,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else g == null && l.d.M(p)
    }, Yt.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var b = g.as,
                m = h(b, g.crossOrigin);
            l.d.L(p, b, {
                crossOrigin: m,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }, Yt.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var b = h(g.as, g.crossOrigin);
                l.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: b,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else l.d.m(p)
    }, Yt.requestFormReset = function(p) {
        l.d.r(p)
    }, Yt.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }, Yt.useFormState = function(p, g, b) {
        return d.H.useFormState(p, g, b)
    }, Yt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, Yt.version = "19.2.1", Yt
}
var zy;

function w0() {
    if (zy) return $d.exports;
    zy = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (a) {
            console.error(a)
        }
    }
    return t(), $d.exports = F2(), $d.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ky;

function J2() {
    if (ky) return Pi;
    ky = 1;
    var t = $2(),
        a = oc(),
        s = w0();

    function l(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function u(e) {
        var n = e,
            r = e;
        if (e.alternate)
            for (; n.return;) n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 4098) !== 0 && (r = n.return), e = n.return; while (e)
        }
        return n.tag === 3 ? r : null
    }

    function d(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function h(e) {
        if (e.tag === 31) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function p(e) {
        if (u(e) !== e) throw Error(l(188))
    }

    function g(e) {
        var n = e.alternate;
        if (!n) {
            if (n = u(e), n === null) throw Error(l(188));
            return n !== e ? null : e
        }
        for (var r = e, i = n;;) {
            var c = r.return;
            if (c === null) break;
            var f = c.alternate;
            if (f === null) {
                if (i = c.return, i !== null) {
                    r = i;
                    continue
                }
                break
            }
            if (c.child === f.child) {
                for (f = c.child; f;) {
                    if (f === r) return p(c), e;
                    if (f === i) return p(c), n;
                    f = f.sibling
                }
                throw Error(l(188))
            }
            if (r.return !== i.return) r = c, i = f;
            else {
                for (var v = !1, w = c.child; w;) {
                    if (w === r) {
                        v = !0, r = c, i = f;
                        break
                    }
                    if (w === i) {
                        v = !0, i = c, r = f;
                        break
                    }
                    w = w.sibling
                }
                if (!v) {
                    for (w = f.child; w;) {
                        if (w === r) {
                            v = !0, r = f, i = c;
                            break
                        }
                        if (w === i) {
                            v = !0, i = f, r = c;
                            break
                        }
                        w = w.sibling
                    }
                    if (!v) throw Error(l(189))
                }
            }
            if (r.alternate !== i) throw Error(l(190))
        }
        if (r.tag !== 3) throw Error(l(188));
        return r.stateNode.current === r ? e : n
    }

    function b(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null;) {
            if (n = b(e), n !== null) return n;
            e = e.sibling
        }
        return null
    }
    var m = Object.assign,
        S = Symbol.for("react.element"),
        E = Symbol.for("react.transitional.element"),
        A = Symbol.for("react.portal"),
        O = Symbol.for("react.fragment"),
        R = Symbol.for("react.strict_mode"),
        N = Symbol.for("react.profiler"),
        Y = Symbol.for("react.consumer"),
        K = Symbol.for("react.context"),
        Z = Symbol.for("react.forward_ref"),
        B = Symbol.for("react.suspense"),
        L = Symbol.for("react.suspense_list"),
        T = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        F = Symbol.for("react.activity"),
        $ = Symbol.for("react.memo_cache_sentinel"),
        G = Symbol.iterator;

    function te(e) {
        return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var le = Symbol.for("react.client.reference");

    function ne(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === le ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case O:
                return "Fragment";
            case N:
                return "Profiler";
            case R:
                return "StrictMode";
            case B:
                return "Suspense";
            case L:
                return "SuspenseList";
            case F:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case A:
                return "Portal";
            case K:
                return e.displayName || "Context";
            case Y:
                return (e._context.displayName || "Context") + ".Consumer";
            case Z:
                var n = e.render;
                return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case T:
                return n = e.displayName || null, n !== null ? n : ne(e.type) || "Memo";
            case _:
                n = e._payload, e = e._init;
                try {
                    return ne(e(n))
                } catch {}
        }
        return null
    }
    var se = Array.isArray,
        j = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        H = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        z = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        oe = [],
        de = -1;

    function C(e) {
        return {
            current: e
        }
    }

    function P(e) {
        0 > de || (e.current = oe[de], oe[de] = null, de--)
    }

    function U(e, n) {
        de++, oe[de] = e.current, e.current = n
    }
    var I = C(null),
        ie = C(null),
        ce = C(null),
        ue = C(null);

    function ve(e, n) {
        switch (U(ce, n), U(ie, e), U(I, null), n.nodeType) {
            case 9:
            case 11:
                e = (e = n.documentElement) && (e = e.namespaceURI) ? Hg(e) : 0;
                break;
            default:
                if (e = n.tagName, n = n.namespaceURI) n = Hg(n), e = zg(n, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        P(I), U(I, e)
    }

    function Oe() {
        P(I), P(ie), P(ce)
    }

    function Ee(e) {
        e.memoizedState !== null && U(ue, e);
        var n = I.current,
            r = zg(n, e.type);
        n !== r && (U(ie, e), U(I, r))
    }

    function it(e) {
        ie.current === e && (P(I), P(ie)), ue.current === e && (P(ue), ki._currentValue = z)
    }
    var je, vt;

    function tt(e) {
        if (je === void 0) try {
            throw Error()
        } catch (r) {
            var n = r.stack.trim().match(/\n( *(at )?)/);
            je = n && n[1] || "", vt = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + je + e + vt
    }
    var $t = !1;

    function Vt(e, n) {
        if (!e || $t) return "";
        $t = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var ee = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(ee.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(ee, [])
                                } catch (X) {
                                    var V = X
                                }
                                Reflect.construct(e, [], ee)
                            } else {
                                try {
                                    ee.call()
                                } catch (X) {
                                    V = X
                                }
                                e.call(ee.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (X) {
                                V = X
                            }(ee = e()) && typeof ee.catch == "function" && ee.catch(function() {})
                        }
                    } catch (X) {
                        if (X && V && typeof X.stack == "string") return [X.stack, V.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = i.DetermineComponentFrameRoot(),
                v = f[0],
                w = f[1];
            if (v && w) {
                var D = v.split(`
`),
                    Q = w.split(`
`);
                for (c = i = 0; i < D.length && !D[i].includes("DetermineComponentFrameRoot");) i++;
                for (; c < Q.length && !Q[c].includes("DetermineComponentFrameRoot");) c++;
                if (i === D.length || c === Q.length)
                    for (i = D.length - 1, c = Q.length - 1; 1 <= i && 0 <= c && D[i] !== Q[c];) c--;
                for (; 1 <= i && 0 <= c; i--, c--)
                    if (D[i] !== Q[c]) {
                        if (i !== 1 || c !== 1)
                            do
                                if (i--, c--, 0 > c || D[i] !== Q[c]) {
                                    var J = `
` + D[i].replace(" at new ", " at ");
                                    return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), J
                                } while (1 <= i && 0 <= c);
                        break
                    }
            }
        } finally {
            $t = !1, Error.prepareStackTrace = r
        }
        return (r = e ? e.displayName || e.name : "") ? tt(r) : ""
    }

    function wn(e, n) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return tt(e.type);
            case 16:
                return tt("Lazy");
            case 13:
                return e.child !== n && n !== null ? tt("Suspense Fallback") : tt("Suspense");
            case 19:
                return tt("SuspenseList");
            case 0:
            case 15:
                return Vt(e.type, !1);
            case 11:
                return Vt(e.type.render, !1);
            case 1:
                return Vt(e.type, !0);
            case 31:
                return tt("Activity");
            default:
                return ""
        }
    }

    function In(e) {
        try {
            var n = "",
                r = null;
            do n += wn(e, r), r = e, e = e.return; while (e);
            return n
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var Et = Object.prototype.hasOwnProperty,
        Nt = t.unstable_scheduleCallback,
        En = t.unstable_cancelCallback,
        ut = t.unstable_shouldYield,
        on = t.unstable_requestPaint,
        ct = t.unstable_now,
        Na = t.unstable_getCurrentPriorityLevel,
        On = t.unstable_ImmediatePriority,
        Ft = t.unstable_UserBlockingPriority,
        Ht = t.unstable_NormalPriority,
        cn = t.unstable_LowPriority,
        Jt = t.unstable_IdlePriority,
        Kt = t.log,
        un = t.unstable_setDisableYieldValue,
        qn = null,
        Ot = null;

    function zt(e) {
        if (typeof Kt == "function" && un(e), Ot && typeof Ot.setStrictMode == "function") try {
            Ot.setStrictMode(qn, e)
        } catch {}
    }
    var pt = Math.clz32 ? Math.clz32 : ae,
        vr = Math.log,
        $n = Math.LN2;

    function ae(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (vr(e) / $n | 0) | 0
    }
    var Se = 256,
        Re = 262144,
        xe = 4194304;

    function Je(e) {
        var n = e & 42;
        if (n !== 0) return n;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function ge(e, n, r) {
        var i = e.pendingLanes;
        if (i === 0) return 0;
        var c = 0,
            f = e.suspendedLanes,
            v = e.pingedLanes;
        e = e.warmLanes;
        var w = i & 134217727;
        return w !== 0 ? (i = w & ~f, i !== 0 ? c = Je(i) : (v &= w, v !== 0 ? c = Je(v) : r || (r = w & ~e, r !== 0 && (c = Je(r))))) : (w = i & ~f, w !== 0 ? c = Je(w) : v !== 0 ? c = Je(v) : r || (r = i & ~e, r !== 0 && (c = Je(r)))), c === 0 ? 0 : n !== 0 && n !== c && (n & f) === 0 && (f = c & -c, r = n & -n, f >= r || f === 32 && (r & 4194048) !== 0) ? n : c
    }

    function _e(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0
    }

    function Pe(e, n) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return n + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ve() {
        var e = xe;
        return xe <<= 1, (xe & 62914560) === 0 && (xe = 4194304), e
    }

    function At(e) {
        for (var n = [], r = 0; 31 > r; r++) n.push(e);
        return n
    }

    function Ke(e, n) {
        e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Le(e, n, r, i, c, f) {
        var v = e.pendingLanes;
        e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
        var w = e.entanglements,
            D = e.expirationTimes,
            Q = e.hiddenUpdates;
        for (r = v & ~r; 0 < r;) {
            var J = 31 - pt(r),
                ee = 1 << J;
            w[J] = 0, D[J] = -1;
            var V = Q[J];
            if (V !== null)
                for (Q[J] = null, J = 0; J < V.length; J++) {
                    var X = V[J];
                    X !== null && (X.lane &= -536870913)
                }
            r &= ~ee
        }
        i !== 0 && Pt(e, i, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~n))
    }

    function Pt(e, n, r) {
        e.pendingLanes |= n, e.suspendedLanes &= ~n;
        var i = 31 - pt(n);
        e.entangledLanes |= n, e.entanglements[i] = e.entanglements[i] | 1073741824 | r & 261930
    }

    function at(e, n) {
        var r = e.entangledLanes |= n;
        for (e = e.entanglements; r;) {
            var i = 31 - pt(r),
                c = 1 << i;
            c & n | e[i] & n && (e[i] |= n), r &= ~c
        }
    }

    function lt(e, n) {
        var r = n & -n;
        return r = (r & 42) !== 0 ? 1 : An(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r
    }

    function An(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function kt(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Tn() {
        var e = H.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ry(e.type))
    }

    function Ha(e, n) {
        var r = H.p;
        try {
            return H.p = e, n()
        } finally {
            H.p = r
        }
    }
    var Cn = Math.random().toString(36).slice(2),
        Ut = "__reactFiber$" + Cn,
        Wt = "__reactProps$" + Cn,
        Ir = "__reactContainer$" + Cn,
        Mc = "__reactEvents$" + Cn,
        Sx = "__reactListeners$" + Cn,
        wx = "__reactHandles$" + Cn,
        Sh = "__reactResources$" + Cn,
        Fs = "__reactMarker$" + Cn;

    function Nc(e) {
        delete e[Ut], delete e[Wt], delete e[Mc], delete e[Sx], delete e[wx]
    }

    function $r(e) {
        var n = e[Ut];
        if (n) return n;
        for (var r = e.parentNode; r;) {
            if (n = r[Ir] || r[Ut]) {
                if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
                    for (e = Pg(e); e !== null;) {
                        if (r = e[Ut]) return r;
                        e = Pg(e)
                    }
                return n
            }
            e = r, r = e.parentNode
        }
        return null
    }

    function Fr(e) {
        if (e = e[Ut] || e[Ir]) {
            var n = e.tag;
            if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return e
        }
        return null
    }

    function Js(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
        throw Error(l(33))
    }

    function Jr(e) {
        var n = e[Sh];
        return n || (n = e[Sh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), n
    }

    function Dt(e) {
        e[Fs] = !0
    }
    var wh = new Set,
        Eh = {};

    function br(e, n) {
        Wr(e, n), Wr(e + "Capture", n)
    }

    function Wr(e, n) {
        for (Eh[e] = n, e = 0; e < n.length; e++) wh.add(n[e])
    }
    var Ex = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Oh = {},
        Ah = {};

    function Ox(e) {
        return Et.call(Ah, e) ? !0 : Et.call(Oh, e) ? !1 : Ex.test(e) ? Ah[e] = !0 : (Oh[e] = !0, !1)
    }

    function xl(e, n, r) {
        if (Ox(n))
            if (r === null) e.removeAttribute(n);
            else {
                switch (typeof r) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(n);
                        return;
                    case "boolean":
                        var i = n.toLowerCase().slice(0, 5);
                        if (i !== "data-" && i !== "aria-") {
                            e.removeAttribute(n);
                            return
                        }
                }
                e.setAttribute(n, "" + r)
            }
    }

    function Sl(e, n, r) {
        if (r === null) e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttribute(n, "" + r)
        }
    }

    function ca(e, n, r, i) {
        if (i === null) e.removeAttribute(r);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(r);
                    return
            }
            e.setAttributeNS(n, r, "" + i)
        }
    }

    function jn(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Th(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }

    function Ax(e, n, r) {
        var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
        if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var c = i.get,
                f = i.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(v) {
                    r = "" + v, f.call(this, v)
                }
            }), Object.defineProperty(e, n, {
                enumerable: i.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(v) {
                    r = "" + v
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[n]
                }
            }
        }
    }

    function Hc(e) {
        if (!e._valueTracker) {
            var n = Th(e) ? "checked" : "value";
            e._valueTracker = Ax(e, n, "" + e[n])
        }
    }

    function Ch(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var r = n.getValue(),
            i = "";
        return e && (i = Th(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (n.setValue(e), !0) : !1
    }

    function wl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Tx = /[\n"\\]/g;

    function Rn(e) {
        return e.replace(Tx, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }

    function zc(e, n, r, i, c, f, v, w) {
        e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + jn(n)) : e.value !== "" + jn(n) && (e.value = "" + jn(n)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), n != null ? kc(e, v, jn(n)) : r != null ? kc(e, v, jn(r)) : i != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + jn(w) : e.removeAttribute("name")
    }

    function jh(e, n, r, i, c, f, v, w) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), n != null || r != null) {
            if (!(f !== "submit" && f !== "reset" || n != null)) {
                Hc(e);
                return
            }
            r = r != null ? "" + jn(r) : "", n = n != null ? "" + jn(n) : r, w || n === e.value || (e.value = n), e.defaultValue = n
        }
        i = i ?? c, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = w ? e.checked : !!i, e.defaultChecked = !!i, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), Hc(e)
    }

    function kc(e, n, r) {
        n === "number" && wl(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r)
    }

    function es(e, n, r, i) {
        if (e = e.options, n) {
            n = {};
            for (var c = 0; c < r.length; c++) n["$" + r[c]] = !0;
            for (r = 0; r < e.length; r++) c = n.hasOwnProperty("$" + e[r].value), e[r].selected !== c && (e[r].selected = c), c && i && (e[r].defaultSelected = !0)
        } else {
            for (r = "" + jn(r), n = null, c = 0; c < e.length; c++) {
                if (e[c].value === r) {
                    e[c].selected = !0, i && (e[c].defaultSelected = !0);
                    return
                }
                n !== null || e[c].disabled || (n = e[c])
            }
            n !== null && (n.selected = !0)
        }
    }

    function Rh(e, n, r) {
        if (n != null && (n = "" + jn(n), n !== e.value && (e.value = n), r == null)) {
            e.defaultValue !== n && (e.defaultValue = n);
            return
        }
        e.defaultValue = r != null ? "" + jn(r) : ""
    }

    function Dh(e, n, r, i) {
        if (n == null) {
            if (i != null) {
                if (r != null) throw Error(l(92));
                if (se(i)) {
                    if (1 < i.length) throw Error(l(93));
                    i = i[0]
                }
                r = i
            }
            r == null && (r = ""), n = r
        }
        r = jn(n), e.defaultValue = r, i = e.textContent, i === r && i !== "" && i !== null && (e.value = i), Hc(e)
    }

    function ts(e, n) {
        if (n) {
            var r = e.firstChild;
            if (r && r === e.lastChild && r.nodeType === 3) {
                r.nodeValue = n;
                return
            }
        }
        e.textContent = n
    }
    var Cx = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function _h(e, n, r) {
        var i = n.indexOf("--") === 0;
        r == null || typeof r == "boolean" || r === "" ? i ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : i ? e.setProperty(n, r) : typeof r != "number" || r === 0 || Cx.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px"
    }

    function Mh(e, n, r) {
        if (n != null && typeof n != "object") throw Error(l(62));
        if (e = e.style, r != null) {
            for (var i in r) !r.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var c in n) i = n[c], n.hasOwnProperty(c) && r[c] !== i && _h(e, c, i)
        } else
            for (var f in n) n.hasOwnProperty(f) && _h(e, f, n[f])
    }

    function Uc(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var jx = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Rx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function El(e) {
        return Rx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    function ua() {}
    var Lc = null;

    function Bc(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var ns = null,
        as = null;

    function Nh(e) {
        var n = Fr(e);
        if (n && (e = n.stateNode)) {
            var r = e[Wt] || null;
            e: switch (e = n.stateNode, n.type) {
                case "input":
                    if (zc(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), n = r.name, r.type === "radio" && n != null) {
                        for (r = e; r.parentNode;) r = r.parentNode;
                        for (r = r.querySelectorAll('input[name="' + Rn("" + n) + '"][type="radio"]'), n = 0; n < r.length; n++) {
                            var i = r[n];
                            if (i !== e && i.form === e.form) {
                                var c = i[Wt] || null;
                                if (!c) throw Error(l(90));
                                zc(i, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                            }
                        }
                        for (n = 0; n < r.length; n++) i = r[n], i.form === e.form && Ch(i)
                    }
                    break e;
                case "textarea":
                    Rh(e, r.value, r.defaultValue);
                    break e;
                case "select":
                    n = r.value, n != null && es(e, !!r.multiple, n, !1)
            }
        }
    }
    var qc = !1;

    function Hh(e, n, r) {
        if (qc) return e(n, r);
        qc = !0;
        try {
            var i = e(n);
            return i
        } finally {
            if (qc = !1, (ns !== null || as !== null) && (uo(), ns && (n = ns, e = as, as = ns = null, Nh(n), e)))
                for (n = 0; n < e.length; n++) Nh(e[n])
        }
    }

    function Ws(e, n) {
        var r = e.stateNode;
        if (r === null) return null;
        var i = r[Wt] || null;
        if (i === null) return null;
        r = i[n];
        e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (r && typeof r != "function") throw Error(l(231, n, typeof r));
        return r
    }
    var da = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Qc = !1;
    if (da) try {
        var ei = {};
        Object.defineProperty(ei, "passive", {
            get: function() {
                Qc = !0
            }
        }), window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei)
    } catch {
        Qc = !1
    }
    var za = null,
        Pc = null,
        Ol = null;

    function zh() {
        if (Ol) return Ol;
        var e, n = Pc,
            r = n.length,
            i, c = "value" in za ? za.value : za.textContent,
            f = c.length;
        for (e = 0; e < r && n[e] === c[e]; e++);
        var v = r - e;
        for (i = 1; i <= v && n[r - i] === c[f - i]; i++);
        return Ol = c.slice(e, 1 < i ? 1 - i : void 0)
    }

    function Al(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Tl() {
        return !0
    }

    function kh() {
        return !1
    }

    function en(e) {
        function n(r, i, c, f, v) {
            this._reactName = r, this._targetInst = c, this.type = i, this.nativeEvent = f, this.target = v, this.currentTarget = null;
            for (var w in e) e.hasOwnProperty(w) && (r = e[w], this[w] = r ? r(f) : f[w]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Tl : kh, this.isPropagationStopped = kh, this
        }
        return m(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var r = this.nativeEvent;
                r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Tl)
            },
            stopPropagation: function() {
                var r = this.nativeEvent;
                r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Tl)
            },
            persist: function() {},
            isPersistent: Tl
        }), n
    }
    var xr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Cl = en(xr),
        ti = m({}, xr, {
            view: 0,
            detail: 0
        }),
        Dx = en(ti),
        Yc, Gc, ni, jl = m({}, ti, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Kc,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== ni && (ni && e.type === "mousemove" ? (Yc = e.screenX - ni.screenX, Gc = e.screenY - ni.screenY) : Gc = Yc = 0, ni = e), Yc)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Gc
            }
        }),
        Uh = en(jl),
        _x = m({}, jl, {
            dataTransfer: 0
        }),
        Mx = en(_x),
        Nx = m({}, ti, {
            relatedTarget: 0
        }),
        Vc = en(Nx),
        Hx = m({}, xr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        zx = en(Hx),
        kx = m({}, xr, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Ux = en(kx),
        Lx = m({}, xr, {
            data: 0
        }),
        Lh = en(Lx),
        Bx = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        qx = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Qx = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Px(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = Qx[e]) ? !!n[e] : !1
    }

    function Kc() {
        return Px
    }
    var Yx = m({}, ti, {
            key: function(e) {
                if (e.key) {
                    var n = Bx[e.key] || e.key;
                    if (n !== "Unidentified") return n
                }
                return e.type === "keypress" ? (e = Al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qx[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Kc,
            charCode: function(e) {
                return e.type === "keypress" ? Al(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Gx = en(Yx),
        Vx = m({}, jl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Bh = en(Vx),
        Kx = m({}, ti, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Kc
        }),
        Xx = en(Kx),
        Zx = m({}, xr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ix = en(Zx),
        $x = m({}, jl, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Fx = en($x),
        Jx = m({}, xr, {
            newState: 0,
            oldState: 0
        }),
        Wx = en(Jx),
        e1 = [9, 13, 27, 32],
        Xc = da && "CompositionEvent" in window,
        ai = null;
    da && "documentMode" in document && (ai = document.documentMode);
    var t1 = da && "TextEvent" in window && !ai,
        qh = da && (!Xc || ai && 8 < ai && 11 >= ai),
        Qh = " ",
        Ph = !1;

    function Yh(e, n) {
        switch (e) {
            case "keyup":
                return e1.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Gh(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var rs = !1;

    function n1(e, n) {
        switch (e) {
            case "compositionend":
                return Gh(n);
            case "keypress":
                return n.which !== 32 ? null : (Ph = !0, Qh);
            case "textInput":
                return e = n.data, e === Qh && Ph ? null : e;
            default:
                return null
        }
    }

    function a1(e, n) {
        if (rs) return e === "compositionend" || !Xc && Yh(e, n) ? (e = zh(), Ol = Pc = za = null, rs = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which)
                }
                return null;
            case "compositionend":
                return qh && n.locale !== "ko" ? null : n.data;
            default:
                return null
        }
    }
    var r1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Vh(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!r1[e.type] : n === "textarea"
    }

    function Kh(e, n, r, i) {
        ns ? as ? as.push(i) : as = [i] : ns = i, n = vo(n, "onChange"), 0 < n.length && (r = new Cl("onChange", "change", null, r, i), e.push({
            event: r,
            listeners: n
        }))
    }
    var ri = null,
        si = null;

    function s1(e) {
        jg(e, 0)
    }

    function Rl(e) {
        var n = Js(e);
        if (Ch(n)) return e
    }

    function Xh(e, n) {
        if (e === "change") return n
    }
    var Zh = !1;
    if (da) {
        var Zc;
        if (da) {
            var Ic = "oninput" in document;
            if (!Ic) {
                var Ih = document.createElement("div");
                Ih.setAttribute("oninput", "return;"), Ic = typeof Ih.oninput == "function"
            }
            Zc = Ic
        } else Zc = !1;
        Zh = Zc && (!document.documentMode || 9 < document.documentMode)
    }

    function $h() {
        ri && (ri.detachEvent("onpropertychange", Fh), si = ri = null)
    }

    function Fh(e) {
        if (e.propertyName === "value" && Rl(si)) {
            var n = [];
            Kh(n, si, e, Bc(e)), Hh(s1, n)
        }
    }

    function i1(e, n, r) {
        e === "focusin" ? ($h(), ri = n, si = r, ri.attachEvent("onpropertychange", Fh)) : e === "focusout" && $h()
    }

    function l1(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rl(si)
    }

    function o1(e, n) {
        if (e === "click") return Rl(n)
    }

    function c1(e, n) {
        if (e === "input" || e === "change") return Rl(n)
    }

    function u1(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
    }
    var dn = typeof Object.is == "function" ? Object.is : u1;

    function ii(e, n) {
        if (dn(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var r = Object.keys(e),
            i = Object.keys(n);
        if (r.length !== i.length) return !1;
        for (i = 0; i < r.length; i++) {
            var c = r[i];
            if (!Et.call(n, c) || !dn(e[c], n[c])) return !1
        }
        return !0
    }

    function Jh(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Wh(e, n) {
        var r = Jh(e);
        e = 0;
        for (var i; r;) {
            if (r.nodeType === 3) {
                if (i = e + r.textContent.length, e <= n && i >= n) return {
                    node: r,
                    offset: n - e
                };
                e = i
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Jh(r)
        }
    }

    function ep(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ep(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
    }

    function tp(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var n = wl(e.document); n instanceof e.HTMLIFrameElement;) {
            try {
                var r = typeof n.contentWindow.location.href == "string"
            } catch {
                r = !1
            }
            if (r) e = n.contentWindow;
            else break;
            n = wl(e.document)
        }
        return n
    }

    function $c(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
    }
    var d1 = da && "documentMode" in document && 11 >= document.documentMode,
        ss = null,
        Fc = null,
        li = null,
        Jc = !1;

    function np(e, n, r) {
        var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
        Jc || ss == null || ss !== wl(i) || (i = ss, "selectionStart" in i && $c(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }), li && ii(li, i) || (li = i, i = vo(Fc, "onSelect"), 0 < i.length && (n = new Cl("onSelect", "select", null, n, r), e.push({
            event: n,
            listeners: i
        }), n.target = ss)))
    }

    function Sr(e, n) {
        var r = {};
        return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r
    }
    var is = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionrun: Sr("Transition", "TransitionRun"),
            transitionstart: Sr("Transition", "TransitionStart"),
            transitioncancel: Sr("Transition", "TransitionCancel"),
            transitionend: Sr("Transition", "TransitionEnd")
        },
        Wc = {},
        ap = {};
    da && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete is.animationend.animation, delete is.animationiteration.animation, delete is.animationstart.animation), "TransitionEvent" in window || delete is.transitionend.transition);

    function wr(e) {
        if (Wc[e]) return Wc[e];
        if (!is[e]) return e;
        var n = is[e],
            r;
        for (r in n)
            if (n.hasOwnProperty(r) && r in ap) return Wc[e] = n[r];
        return e
    }
    var rp = wr("animationend"),
        sp = wr("animationiteration"),
        ip = wr("animationstart"),
        f1 = wr("transitionrun"),
        h1 = wr("transitionstart"),
        p1 = wr("transitioncancel"),
        lp = wr("transitionend"),
        op = new Map,
        eu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    eu.push("scrollEnd");

    function Qn(e, n) {
        op.set(e, n), br(n, [e])
    }
    var Dl = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var n = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(n)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return
            }
            console.error(e)
        },
        Dn = [],
        ls = 0,
        tu = 0;

    function _l() {
        for (var e = ls, n = tu = ls = 0; n < e;) {
            var r = Dn[n];
            Dn[n++] = null;
            var i = Dn[n];
            Dn[n++] = null;
            var c = Dn[n];
            Dn[n++] = null;
            var f = Dn[n];
            if (Dn[n++] = null, i !== null && c !== null) {
                var v = i.pending;
                v === null ? c.next = c : (c.next = v.next, v.next = c), i.pending = c
            }
            f !== 0 && cp(r, c, f)
        }
    }

    function Ml(e, n, r, i) {
        Dn[ls++] = e, Dn[ls++] = n, Dn[ls++] = r, Dn[ls++] = i, tu |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i)
    }

    function nu(e, n, r, i) {
        return Ml(e, n, r, i), Nl(e)
    }

    function Er(e, n) {
        return Ml(e, null, null, n), Nl(e)
    }

    function cp(e, n, r) {
        e.lanes |= r;
        var i = e.alternate;
        i !== null && (i.lanes |= r);
        for (var c = !1, f = e.return; f !== null;) f.childLanes |= r, i = f.alternate, i !== null && (i.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
        return e.tag === 3 ? (f = e.stateNode, c && n !== null && (c = 31 - pt(r), e = f.hiddenUpdates, i = e[c], i === null ? e[c] = [n] : i.push(n), n.lane = r | 536870912), f) : null
    }

    function Nl(e) {
        if (50 < Ri) throw Ri = 0, dd = null, Error(l(185));
        for (var n = e.return; n !== null;) e = n, n = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var os = {};

    function m1(e, n, r, i) {
        this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function fn(e, n, r, i) {
        return new m1(e, n, r, i)
    }

    function au(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function fa(e, n) {
        var r = e.alternate;
        return r === null ? (r = fn(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r
    }

    function up(e, n) {
        e.flags &= 65011714;
        var r = e.alternate;
        return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }), e
    }

    function Hl(e, n, r, i, c, f) {
        var v = 0;
        if (i = e, typeof e == "function") au(e) && (v = 1);
        else if (typeof e == "string") v = xS(e, r, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case F:
                return e = fn(31, r, n, c), e.elementType = F, e.lanes = f, e;
            case O:
                return Or(r.children, c, f, n);
            case R:
                v = 8, c |= 24;
                break;
            case N:
                return e = fn(12, r, n, c | 2), e.elementType = N, e.lanes = f, e;
            case B:
                return e = fn(13, r, n, c), e.elementType = B, e.lanes = f, e;
            case L:
                return e = fn(19, r, n, c), e.elementType = L, e.lanes = f, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case K:
                        v = 10;
                        break e;
                    case Y:
                        v = 9;
                        break e;
                    case Z:
                        v = 11;
                        break e;
                    case T:
                        v = 14;
                        break e;
                    case _:
                        v = 16, i = null;
                        break e
                }
                v = 29, r = Error(l(130, e === null ? "null" : typeof e, "")), i = null
        }
        return n = fn(v, r, n, c), n.elementType = e, n.type = i, n.lanes = f, n
    }

    function Or(e, n, r, i) {
        return e = fn(7, e, i, n), e.lanes = r, e
    }

    function ru(e, n, r) {
        return e = fn(6, e, null, n), e.lanes = r, e
    }

    function dp(e) {
        var n = fn(18, null, null, 0);
        return n.stateNode = e, n
    }

    function su(e, n, r) {
        return n = fn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n
    }
    var fp = new WeakMap;

    function _n(e, n) {
        if (typeof e == "object" && e !== null) {
            var r = fp.get(e);
            return r !== void 0 ? r : (n = {
                value: e,
                source: n,
                stack: In(n)
            }, fp.set(e, n), n)
        }
        return {
            value: e,
            source: n,
            stack: In(n)
        }
    }
    var cs = [],
        us = 0,
        zl = null,
        oi = 0,
        Mn = [],
        Nn = 0,
        ka = null,
        Fn = 1,
        Jn = "";

    function ha(e, n) {
        cs[us++] = oi, cs[us++] = zl, zl = e, oi = n
    }

    function hp(e, n, r) {
        Mn[Nn++] = Fn, Mn[Nn++] = Jn, Mn[Nn++] = ka, ka = e;
        var i = Fn;
        e = Jn;
        var c = 32 - pt(i) - 1;
        i &= ~(1 << c), r += 1;
        var f = 32 - pt(n) + c;
        if (30 < f) {
            var v = c - c % 5;
            f = (i & (1 << v) - 1).toString(32), i >>= v, c -= v, Fn = 1 << 32 - pt(n) + c | r << c | i, Jn = f + e
        } else Fn = 1 << f | r << c | i, Jn = e
    }

    function iu(e) {
        e.return !== null && (ha(e, 1), hp(e, 1, 0))
    }

    function lu(e) {
        for (; e === zl;) zl = cs[--us], cs[us] = null, oi = cs[--us], cs[us] = null;
        for (; e === ka;) ka = Mn[--Nn], Mn[Nn] = null, Jn = Mn[--Nn], Mn[Nn] = null, Fn = Mn[--Nn], Mn[Nn] = null
    }

    function pp(e, n) {
        Mn[Nn++] = Fn, Mn[Nn++] = Jn, Mn[Nn++] = ka, Fn = n.id, Jn = n.overflow, ka = e
    }
    var Lt = null,
        rt = null,
        ke = !1,
        Ua = null,
        Hn = !1,
        ou = Error(l(519));

    function La(e) {
        var n = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ci(_n(n, e)), ou
    }

    function mp(e) {
        var n = e.stateNode,
            r = e.type,
            i = e.memoizedProps;
        switch (n[Ut] = e, n[Wt] = i, r) {
            case "dialog":
                Ne("cancel", n), Ne("close", n);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ne("load", n);
                break;
            case "video":
            case "audio":
                for (r = 0; r < _i.length; r++) Ne(_i[r], n);
                break;
            case "source":
                Ne("error", n);
                break;
            case "img":
            case "image":
            case "link":
                Ne("error", n), Ne("load", n);
                break;
            case "details":
                Ne("toggle", n);
                break;
            case "input":
                Ne("invalid", n), jh(n, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
                break;
            case "select":
                Ne("invalid", n);
                break;
            case "textarea":
                Ne("invalid", n), Dh(n, i.value, i.defaultValue, i.children)
        }
        r = i.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || i.suppressHydrationWarning === !0 || Mg(n.textContent, r) ? (i.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)), i.onScroll != null && Ne("scroll", n), i.onScrollEnd != null && Ne("scrollend", n), i.onClick != null && (n.onclick = ua), n = !0) : n = !1, n || La(e, !0)
    }

    function gp(e) {
        for (Lt = e.return; Lt;) switch (Lt.tag) {
            case 5:
            case 31:
            case 13:
                Hn = !1;
                return;
            case 27:
            case 3:
                Hn = !0;
                return;
            default:
                Lt = Lt.return
        }
    }

    function ds(e) {
        if (e !== Lt) return !1;
        if (!ke) return gp(e), ke = !0, !1;
        var n = e.tag,
            r;
        if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || Td(e.type, e.memoizedProps)), r = !r), r && rt && La(e), gp(e), n === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
            rt = Qg(e)
        } else if (n === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
            rt = Qg(e)
        } else n === 27 ? (n = rt, Ja(e.type) ? (e = _d, _d = null, rt = e) : rt = n) : rt = Lt ? kn(e.stateNode.nextSibling) : null;
        return !0
    }

    function Ar() {
        rt = Lt = null, ke = !1
    }

    function cu() {
        var e = Ua;
        return e !== null && (rn === null ? rn = e : rn.push.apply(rn, e), Ua = null), e
    }

    function ci(e) {
        Ua === null ? Ua = [e] : Ua.push(e)
    }
    var uu = C(null),
        Tr = null,
        pa = null;

    function Ba(e, n, r) {
        U(uu, n._currentValue), n._currentValue = r
    }

    function ma(e) {
        e._currentValue = uu.current, P(uu)
    }

    function du(e, n, r) {
        for (; e !== null;) {
            var i = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), e === r) break;
            e = e.return
        }
    }

    function fu(e, n, r, i) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null;) {
            var f = c.dependencies;
            if (f !== null) {
                var v = c.child;
                f = f.firstContext;
                e: for (; f !== null;) {
                    var w = f;
                    f = c;
                    for (var D = 0; D < n.length; D++)
                        if (w.context === n[D]) {
                            f.lanes |= r, w = f.alternate, w !== null && (w.lanes |= r), du(f.return, r, e), i || (v = null);
                            break e
                        } f = w.next
                }
            } else if (c.tag === 18) {
                if (v = c.return, v === null) throw Error(l(341));
                v.lanes |= r, f = v.alternate, f !== null && (f.lanes |= r), du(v, r, e), v = null
            } else v = c.child;
            if (v !== null) v.return = c;
            else
                for (v = c; v !== null;) {
                    if (v === e) {
                        v = null;
                        break
                    }
                    if (c = v.sibling, c !== null) {
                        c.return = v.return, v = c;
                        break
                    }
                    v = v.return
                }
            c = v
        }
    }

    function fs(e, n, r, i) {
        e = null;
        for (var c = n, f = !1; c !== null;) {
            if (!f) {
                if ((c.flags & 524288) !== 0) f = !0;
                else if ((c.flags & 262144) !== 0) break
            }
            if (c.tag === 10) {
                var v = c.alternate;
                if (v === null) throw Error(l(387));
                if (v = v.memoizedProps, v !== null) {
                    var w = c.type;
                    dn(c.pendingProps.value, v.value) || (e !== null ? e.push(w) : e = [w])
                }
            } else if (c === ue.current) {
                if (v = c.alternate, v === null) throw Error(l(387));
                v.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ki) : e = [ki])
            }
            c = c.return
        }
        e !== null && fu(n, e, r, i), n.flags |= 262144
    }

    function kl(e) {
        for (e = e.firstContext; e !== null;) {
            if (!dn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function Cr(e) {
        Tr = e, pa = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function Bt(e) {
        return yp(Tr, e)
    }

    function Ul(e, n) {
        return Tr === null && Cr(e), yp(e, n)
    }

    function yp(e, n) {
        var r = n._currentValue;
        if (n = {
                context: n,
                memoizedValue: r,
                next: null
            }, pa === null) {
            if (e === null) throw Error(l(308));
            pa = n, e.dependencies = {
                lanes: 0,
                firstContext: n
            }, e.flags |= 524288
        } else pa = pa.next = n;
        return r
    }
    var g1 = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                n = this.signal = {
                    aborted: !1,
                    addEventListener: function(r, i) {
                        e.push(i)
                    }
                };
            this.abort = function() {
                n.aborted = !0, e.forEach(function(r) {
                    return r()
                })
            }
        },
        y1 = t.unstable_scheduleCallback,
        v1 = t.unstable_NormalPriority,
        bt = {
            $$typeof: K,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function hu() {
        return {
            controller: new g1,
            data: new Map,
            refCount: 0
        }
    }

    function ui(e) {
        e.refCount--, e.refCount === 0 && y1(v1, function() {
            e.controller.abort()
        })
    }
    var di = null,
        pu = 0,
        hs = 0,
        ps = null;

    function b1(e, n) {
        if (di === null) {
            var r = di = [];
            pu = 0, hs = yd(), ps = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    r.push(i)
                }
            }
        }
        return pu++, n.then(vp, vp), n
    }

    function vp() {
        if (--pu === 0 && di !== null) {
            ps !== null && (ps.status = "fulfilled");
            var e = di;
            di = null, hs = 0, ps = null;
            for (var n = 0; n < e.length; n++)(0, e[n])()
        }
    }

    function x1(e, n) {
        var r = [],
            i = {
                status: "pending",
                value: null,
                reason: null,
                then: function(c) {
                    r.push(c)
                }
            };
        return e.then(function() {
            i.status = "fulfilled", i.value = n;
            for (var c = 0; c < r.length; c++)(0, r[c])(n)
        }, function(c) {
            for (i.status = "rejected", i.reason = c, c = 0; c < r.length; c++)(0, r[c])(void 0)
        }), i
    }
    var bp = j.S;
    j.S = function(e, n) {
        ng = ct(), typeof n == "object" && n !== null && typeof n.then == "function" && b1(e, n), bp !== null && bp(e, n)
    };
    var jr = C(null);

    function mu() {
        var e = jr.current;
        return e !== null ? e : We.pooledCache
    }

    function Ll(e, n) {
        n === null ? U(jr, jr.current) : U(jr, n.pool)
    }

    function xp() {
        var e = mu();
        return e === null ? null : {
            parent: bt._currentValue,
            pool: e
        }
    }
    var ms = Error(l(460)),
        gu = Error(l(474)),
        Bl = Error(l(542)),
        ql = {
            then: function() {}
        };

    function Sp(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function wp(e, n, r) {
        switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(ua, ua), n = r), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw e = n.reason, Op(e), e;
            default:
                if (typeof n.status == "string") n.then(ua, ua);
                else {
                    if (e = We, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
                    e = n, e.status = "pending", e.then(function(i) {
                        if (n.status === "pending") {
                            var c = n;
                            c.status = "fulfilled", c.value = i
                        }
                    }, function(i) {
                        if (n.status === "pending") {
                            var c = n;
                            c.status = "rejected", c.reason = i
                        }
                    })
                }
                switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw e = n.reason, Op(e), e
                }
                throw Dr = n, ms
        }
    }

    function Rr(e) {
        try {
            var n = e._init;
            return n(e._payload)
        } catch (r) {
            throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Dr = r, ms) : r
        }
    }
    var Dr = null;

    function Ep() {
        if (Dr === null) throw Error(l(459));
        var e = Dr;
        return Dr = null, e
    }

    function Op(e) {
        if (e === ms || e === Bl) throw Error(l(483))
    }
    var gs = null,
        fi = 0;

    function Ql(e) {
        var n = fi;
        return fi += 1, gs === null && (gs = []), wp(gs, e, n)
    }

    function hi(e, n) {
        n = n.props.ref, e.ref = n !== void 0 ? n : null
    }

    function Pl(e, n) {
        throw n.$$typeof === S ? Error(l(525)) : (e = Object.prototype.toString.call(n), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
    }

    function Ap(e) {
        function n(k, M) {
            if (e) {
                var q = k.deletions;
                q === null ? (k.deletions = [M], k.flags |= 16) : q.push(M)
            }
        }

        function r(k, M) {
            if (!e) return null;
            for (; M !== null;) n(k, M), M = M.sibling;
            return null
        }

        function i(k) {
            for (var M = new Map; k !== null;) k.key !== null ? M.set(k.key, k) : M.set(k.index, k), k = k.sibling;
            return M
        }

        function c(k, M) {
            return k = fa(k, M), k.index = 0, k.sibling = null, k
        }

        function f(k, M, q) {
            return k.index = q, e ? (q = k.alternate, q !== null ? (q = q.index, q < M ? (k.flags |= 67108866, M) : q) : (k.flags |= 67108866, M)) : (k.flags |= 1048576, M)
        }

        function v(k) {
            return e && k.alternate === null && (k.flags |= 67108866), k
        }

        function w(k, M, q, W) {
            return M === null || M.tag !== 6 ? (M = ru(q, k.mode, W), M.return = k, M) : (M = c(M, q), M.return = k, M)
        }

        function D(k, M, q, W) {
            var be = q.type;
            return be === O ? J(k, M, q.props.children, W, q.key) : M !== null && (M.elementType === be || typeof be == "object" && be !== null && be.$$typeof === _ && Rr(be) === M.type) ? (M = c(M, q.props), hi(M, q), M.return = k, M) : (M = Hl(q.type, q.key, q.props, null, k.mode, W), hi(M, q), M.return = k, M)
        }

        function Q(k, M, q, W) {
            return M === null || M.tag !== 4 || M.stateNode.containerInfo !== q.containerInfo || M.stateNode.implementation !== q.implementation ? (M = su(q, k.mode, W), M.return = k, M) : (M = c(M, q.children || []), M.return = k, M)
        }

        function J(k, M, q, W, be) {
            return M === null || M.tag !== 7 ? (M = Or(q, k.mode, W, be), M.return = k, M) : (M = c(M, q), M.return = k, M)
        }

        function ee(k, M, q) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = ru("" + M, k.mode, q), M.return = k, M;
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case E:
                        return q = Hl(M.type, M.key, M.props, null, k.mode, q), hi(q, M), q.return = k, q;
                    case A:
                        return M = su(M, k.mode, q), M.return = k, M;
                    case _:
                        return M = Rr(M), ee(k, M, q)
                }
                if (se(M) || te(M)) return M = Or(M, k.mode, q, null), M.return = k, M;
                if (typeof M.then == "function") return ee(k, Ql(M), q);
                if (M.$$typeof === K) return ee(k, Ul(k, M), q);
                Pl(k, M)
            }
            return null
        }

        function V(k, M, q, W) {
            var be = M !== null ? M.key : null;
            if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return be !== null ? null : w(k, M, "" + q, W);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                    case E:
                        return q.key === be ? D(k, M, q, W) : null;
                    case A:
                        return q.key === be ? Q(k, M, q, W) : null;
                    case _:
                        return q = Rr(q), V(k, M, q, W)
                }
                if (se(q) || te(q)) return be !== null ? null : J(k, M, q, W, null);
                if (typeof q.then == "function") return V(k, M, Ql(q), W);
                if (q.$$typeof === K) return V(k, M, Ul(k, q), W);
                Pl(k, q)
            }
            return null
        }

        function X(k, M, q, W, be) {
            if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint") return k = k.get(q) || null, w(M, k, "" + W, be);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                    case E:
                        return k = k.get(W.key === null ? q : W.key) || null, D(M, k, W, be);
                    case A:
                        return k = k.get(W.key === null ? q : W.key) || null, Q(M, k, W, be);
                    case _:
                        return W = Rr(W), X(k, M, q, W, be)
                }
                if (se(W) || te(W)) return k = k.get(q) || null, J(M, k, W, be, null);
                if (typeof W.then == "function") return X(k, M, q, Ql(W), be);
                if (W.$$typeof === K) return X(k, M, q, Ul(M, W), be);
                Pl(M, W)
            }
            return null
        }

        function he(k, M, q, W) {
            for (var be = null, Be = null, ye = M, Ce = M = 0, ze = null; ye !== null && Ce < q.length; Ce++) {
                ye.index > Ce ? (ze = ye, ye = null) : ze = ye.sibling;
                var qe = V(k, ye, q[Ce], W);
                if (qe === null) {
                    ye === null && (ye = ze);
                    break
                }
                e && ye && qe.alternate === null && n(k, ye), M = f(qe, M, Ce), Be === null ? be = qe : Be.sibling = qe, Be = qe, ye = ze
            }
            if (Ce === q.length) return r(k, ye), ke && ha(k, Ce), be;
            if (ye === null) {
                for (; Ce < q.length; Ce++) ye = ee(k, q[Ce], W), ye !== null && (M = f(ye, M, Ce), Be === null ? be = ye : Be.sibling = ye, Be = ye);
                return ke && ha(k, Ce), be
            }
            for (ye = i(ye); Ce < q.length; Ce++) ze = X(ye, k, Ce, q[Ce], W), ze !== null && (e && ze.alternate !== null && ye.delete(ze.key === null ? Ce : ze.key), M = f(ze, M, Ce), Be === null ? be = ze : Be.sibling = ze, Be = ze);
            return e && ye.forEach(function(ar) {
                return n(k, ar)
            }), ke && ha(k, Ce), be
        }

        function we(k, M, q, W) {
            if (q == null) throw Error(l(151));
            for (var be = null, Be = null, ye = M, Ce = M = 0, ze = null, qe = q.next(); ye !== null && !qe.done; Ce++, qe = q.next()) {
                ye.index > Ce ? (ze = ye, ye = null) : ze = ye.sibling;
                var ar = V(k, ye, qe.value, W);
                if (ar === null) {
                    ye === null && (ye = ze);
                    break
                }
                e && ye && ar.alternate === null && n(k, ye), M = f(ar, M, Ce), Be === null ? be = ar : Be.sibling = ar, Be = ar, ye = ze
            }
            if (qe.done) return r(k, ye), ke && ha(k, Ce), be;
            if (ye === null) {
                for (; !qe.done; Ce++, qe = q.next()) qe = ee(k, qe.value, W), qe !== null && (M = f(qe, M, Ce), Be === null ? be = qe : Be.sibling = qe, Be = qe);
                return ke && ha(k, Ce), be
            }
            for (ye = i(ye); !qe.done; Ce++, qe = q.next()) qe = X(ye, k, Ce, qe.value, W), qe !== null && (e && qe.alternate !== null && ye.delete(qe.key === null ? Ce : qe.key), M = f(qe, M, Ce), Be === null ? be = qe : Be.sibling = qe, Be = qe);
            return e && ye.forEach(function(_S) {
                return n(k, _S)
            }), ke && ha(k, Ce), be
        }

        function Fe(k, M, q, W) {
            if (typeof q == "object" && q !== null && q.type === O && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                    case E:
                        e: {
                            for (var be = q.key; M !== null;) {
                                if (M.key === be) {
                                    if (be = q.type, be === O) {
                                        if (M.tag === 7) {
                                            r(k, M.sibling), W = c(M, q.props.children), W.return = k, k = W;
                                            break e
                                        }
                                    } else if (M.elementType === be || typeof be == "object" && be !== null && be.$$typeof === _ && Rr(be) === M.type) {
                                        r(k, M.sibling), W = c(M, q.props), hi(W, q), W.return = k, k = W;
                                        break e
                                    }
                                    r(k, M);
                                    break
                                } else n(k, M);
                                M = M.sibling
                            }
                            q.type === O ? (W = Or(q.props.children, k.mode, W, q.key), W.return = k, k = W) : (W = Hl(q.type, q.key, q.props, null, k.mode, W), hi(W, q), W.return = k, k = W)
                        }
                        return v(k);
                    case A:
                        e: {
                            for (be = q.key; M !== null;) {
                                if (M.key === be)
                                    if (M.tag === 4 && M.stateNode.containerInfo === q.containerInfo && M.stateNode.implementation === q.implementation) {
                                        r(k, M.sibling), W = c(M, q.children || []), W.return = k, k = W;
                                        break e
                                    } else {
                                        r(k, M);
                                        break
                                    }
                                else n(k, M);
                                M = M.sibling
                            }
                            W = su(q, k.mode, W),
                            W.return = k,
                            k = W
                        }
                        return v(k);
                    case _:
                        return q = Rr(q), Fe(k, M, q, W)
                }
                if (se(q)) return he(k, M, q, W);
                if (te(q)) {
                    if (be = te(q), typeof be != "function") throw Error(l(150));
                    return q = be.call(q), we(k, M, q, W)
                }
                if (typeof q.then == "function") return Fe(k, M, Ql(q), W);
                if (q.$$typeof === K) return Fe(k, M, Ul(k, q), W);
                Pl(k, q)
            }
            return typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint" ? (q = "" + q, M !== null && M.tag === 6 ? (r(k, M.sibling), W = c(M, q), W.return = k, k = W) : (r(k, M), W = ru(q, k.mode, W), W.return = k, k = W), v(k)) : r(k, M)
        }
        return function(k, M, q, W) {
            try {
                fi = 0;
                var be = Fe(k, M, q, W);
                return gs = null, be
            } catch (ye) {
                if (ye === ms || ye === Bl) throw ye;
                var Be = fn(29, ye, null, k.mode);
                return Be.lanes = W, Be.return = k, Be
            } finally {}
        }
    }
    var _r = Ap(!0),
        Tp = Ap(!1),
        qa = !1;

    function yu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function vu(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function Qa(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Pa(e, n, r) {
        var i = e.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (Ye & 2) !== 0) {
            var c = i.pending;
            return c === null ? n.next = n : (n.next = c.next, c.next = n), i.pending = n, n = Nl(e), cp(e, null, r), n
        }
        return Ml(e, i, n, r), Nl(e)
    }

    function pi(e, n, r) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
            var i = n.lanes;
            i &= e.pendingLanes, r |= i, n.lanes = r, at(e, r)
        }
    }

    function bu(e, n) {
        var r = e.updateQueue,
            i = e.alternate;
        if (i !== null && (i = i.updateQueue, r === i)) {
            var c = null,
                f = null;
            if (r = r.firstBaseUpdate, r !== null) {
                do {
                    var v = {
                        lane: r.lane,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? c = f = v : f = f.next = v, r = r.next
                } while (r !== null);
                f === null ? c = f = n : f = f.next = n
            } else c = f = n;
            r = {
                baseState: i.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: f,
                shared: i.shared,
                callbacks: i.callbacks
            }, e.updateQueue = r;
            return
        }
        e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n
    }
    var xu = !1;

    function mi() {
        if (xu) {
            var e = ps;
            if (e !== null) throw e
        }
    }

    function gi(e, n, r, i) {
        xu = !1;
        var c = e.updateQueue;
        qa = !1;
        var f = c.firstBaseUpdate,
            v = c.lastBaseUpdate,
            w = c.shared.pending;
        if (w !== null) {
            c.shared.pending = null;
            var D = w,
                Q = D.next;
            D.next = null, v === null ? f = Q : v.next = Q, v = D;
            var J = e.alternate;
            J !== null && (J = J.updateQueue, w = J.lastBaseUpdate, w !== v && (w === null ? J.firstBaseUpdate = Q : w.next = Q, J.lastBaseUpdate = D))
        }
        if (f !== null) {
            var ee = c.baseState;
            v = 0, J = Q = D = null, w = f;
            do {
                var V = w.lane & -536870913,
                    X = V !== w.lane;
                if (X ? (He & V) === V : (i & V) === V) {
                    V !== 0 && V === hs && (xu = !0), J !== null && (J = J.next = {
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var he = e,
                            we = w;V = n;
                        var Fe = r;
                        switch (we.tag) {
                            case 1:
                                if (he = we.payload, typeof he == "function") {
                                    ee = he.call(Fe, ee, V);
                                    break e
                                }
                                ee = he;
                                break e;
                            case 3:
                                he.flags = he.flags & -65537 | 128;
                            case 0:
                                if (he = we.payload, V = typeof he == "function" ? he.call(Fe, ee, V) : he, V == null) break e;
                                ee = m({}, ee, V);
                                break e;
                            case 2:
                                qa = !0
                        }
                    }
                    V = w.callback, V !== null && (e.flags |= 64, X && (e.flags |= 8192), X = c.callbacks, X === null ? c.callbacks = [V] : X.push(V))
                } else X = {
                    lane: V,
                    tag: w.tag,
                    payload: w.payload,
                    callback: w.callback,
                    next: null
                }, J === null ? (Q = J = X, D = ee) : J = J.next = X, v |= V;
                if (w = w.next, w === null) {
                    if (w = c.shared.pending, w === null) break;
                    X = w, w = X.next, X.next = null, c.lastBaseUpdate = X, c.shared.pending = null
                }
            } while (!0);
            J === null && (D = ee), c.baseState = D, c.firstBaseUpdate = Q, c.lastBaseUpdate = J, f === null && (c.shared.lanes = 0), Xa |= v, e.lanes = v, e.memoizedState = ee
        }
    }

    function Cp(e, n) {
        if (typeof e != "function") throw Error(l(191, e));
        e.call(n)
    }

    function jp(e, n) {
        var r = e.callbacks;
        if (r !== null)
            for (e.callbacks = null, e = 0; e < r.length; e++) Cp(r[e], n)
    }
    var ys = C(null),
        Yl = C(0);

    function Rp(e, n) {
        e = Oa, U(Yl, e), U(ys, n), Oa = e | n.baseLanes
    }

    function Su() {
        U(Yl, Oa), U(ys, ys.current)
    }

    function wu() {
        Oa = Yl.current, P(ys), P(Yl)
    }
    var hn = C(null),
        zn = null;

    function Ya(e) {
        var n = e.alternate;
        U(mt, mt.current & 1), U(hn, e), zn === null && (n === null || ys.current !== null || n.memoizedState !== null) && (zn = e)
    }

    function Eu(e) {
        U(mt, mt.current), U(hn, e), zn === null && (zn = e)
    }

    function Dp(e) {
        e.tag === 22 ? (U(mt, mt.current), U(hn, e), zn === null && (zn = e)) : Ga()
    }

    function Ga() {
        U(mt, mt.current), U(hn, hn.current)
    }

    function pn(e) {
        P(hn), zn === e && (zn = null), P(mt)
    }
    var mt = C(0);

    function Gl(e) {
        for (var n = e; n !== null;) {
            if (n.tag === 13) {
                var r = n.memoizedState;
                if (r !== null && (r = r.dehydrated, r === null || Rd(r) || Dd(r))) return n
            } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                if ((n.flags & 128) !== 0) return n
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return null;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
        return null
    }
    var ga = 0,
        Te = null,
        Ie = null,
        xt = null,
        Vl = !1,
        vs = !1,
        Mr = !1,
        Kl = 0,
        yi = 0,
        bs = null,
        S1 = 0;

    function dt() {
        throw Error(l(321))
    }

    function Ou(e, n) {
        if (n === null) return !1;
        for (var r = 0; r < n.length && r < e.length; r++)
            if (!dn(e[r], n[r])) return !1;
        return !0
    }

    function Au(e, n, r, i, c, f) {
        return ga = f, Te = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, j.H = e === null || e.memoizedState === null ? hm : qu, Mr = !1, f = r(i, c), Mr = !1, vs && (f = Mp(n, r, i, c)), _p(e), f
    }

    function _p(e) {
        j.H = xi;
        var n = Ie !== null && Ie.next !== null;
        if (ga = 0, xt = Ie = Te = null, Vl = !1, yi = 0, bs = null, n) throw Error(l(300));
        e === null || St || (e = e.dependencies, e !== null && kl(e) && (St = !0))
    }

    function Mp(e, n, r, i) {
        Te = e;
        var c = 0;
        do {
            if (vs && (bs = null), yi = 0, vs = !1, 25 <= c) throw Error(l(301));
            if (c += 1, xt = Ie = null, e.updateQueue != null) {
                var f = e.updateQueue;
                f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0)
            }
            j.H = pm, f = n(r, i)
        } while (vs);
        return f
    }

    function w1() {
        var e = j.H,
            n = e.useState()[0];
        return n = typeof n.then == "function" ? vi(n) : n, e = e.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== e && (Te.flags |= 1024), n
    }

    function Tu() {
        var e = Kl !== 0;
        return Kl = 0, e
    }

    function Cu(e, n, r) {
        n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r
    }

    function ju(e) {
        if (Vl) {
            for (e = e.memoizedState; e !== null;) {
                var n = e.queue;
                n !== null && (n.pending = null), e = e.next
            }
            Vl = !1
        }
        ga = 0, xt = Ie = Te = null, vs = !1, yi = Kl = 0, bs = null
    }

    function Xt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return xt === null ? Te.memoizedState = xt = e : xt = xt.next = e, xt
    }

    function gt() {
        if (Ie === null) {
            var e = Te.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Ie.next;
        var n = xt === null ? Te.memoizedState : xt.next;
        if (n !== null) xt = n, Ie = e;
        else {
            if (e === null) throw Te.alternate === null ? Error(l(467)) : Error(l(310));
            Ie = e, e = {
                memoizedState: Ie.memoizedState,
                baseState: Ie.baseState,
                baseQueue: Ie.baseQueue,
                queue: Ie.queue,
                next: null
            }, xt === null ? Te.memoizedState = xt = e : xt = xt.next = e
        }
        return xt
    }

    function Xl() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function vi(e) {
        var n = yi;
        return yi += 1, bs === null && (bs = []), e = wp(bs, e, n), n = Te, (xt === null ? n.memoizedState : xt.next) === null && (n = n.alternate, j.H = n === null || n.memoizedState === null ? hm : qu), e
    }

    function Zl(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return vi(e);
            if (e.$$typeof === K) return Bt(e)
        }
        throw Error(l(438, String(e)))
    }

    function Ru(e) {
        var n = null,
            r = Te.updateQueue;
        if (r !== null && (n = r.memoCache), n == null) {
            var i = Te.alternate;
            i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
                data: i.data.map(function(c) {
                    return c.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
                data: [],
                index: 0
            }), r === null && (r = Xl(), Te.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
            for (r = n.data[n.index] = Array(e), i = 0; i < e; i++) r[i] = $;
        return n.index++, r
    }

    function ya(e, n) {
        return typeof n == "function" ? n(e) : n
    }

    function Il(e) {
        var n = gt();
        return Du(n, Ie, e)
    }

    function Du(e, n, r) {
        var i = e.queue;
        if (i === null) throw Error(l(311));
        i.lastRenderedReducer = r;
        var c = e.baseQueue,
            f = i.pending;
        if (f !== null) {
            if (c !== null) {
                var v = c.next;
                c.next = f.next, f.next = v
            }
            n.baseQueue = c = f, i.pending = null
        }
        if (f = e.baseState, c === null) e.memoizedState = f;
        else {
            n = c.next;
            var w = v = null,
                D = null,
                Q = n,
                J = !1;
            do {
                var ee = Q.lane & -536870913;
                if (ee !== Q.lane ? (He & ee) === ee : (ga & ee) === ee) {
                    var V = Q.revertLane;
                    if (V === 0) D !== null && (D = D.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: Q.action,
                        hasEagerState: Q.hasEagerState,
                        eagerState: Q.eagerState,
                        next: null
                    }), ee === hs && (J = !0);
                    else if ((ga & V) === V) {
                        Q = Q.next, V === hs && (J = !0);
                        continue
                    } else ee = {
                        lane: 0,
                        revertLane: Q.revertLane,
                        gesture: null,
                        action: Q.action,
                        hasEagerState: Q.hasEagerState,
                        eagerState: Q.eagerState,
                        next: null
                    }, D === null ? (w = D = ee, v = f) : D = D.next = ee, Te.lanes |= V, Xa |= V;
                    ee = Q.action, Mr && r(f, ee), f = Q.hasEagerState ? Q.eagerState : r(f, ee)
                } else V = {
                    lane: ee,
                    revertLane: Q.revertLane,
                    gesture: Q.gesture,
                    action: Q.action,
                    hasEagerState: Q.hasEagerState,
                    eagerState: Q.eagerState,
                    next: null
                }, D === null ? (w = D = V, v = f) : D = D.next = V, Te.lanes |= ee, Xa |= ee;
                Q = Q.next
            } while (Q !== null && Q !== n);
            if (D === null ? v = f : D.next = w, !dn(f, e.memoizedState) && (St = !0, J && (r = ps, r !== null))) throw r;
            e.memoizedState = f, e.baseState = v, e.baseQueue = D, i.lastRenderedState = f
        }
        return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch]
    }

    function _u(e) {
        var n = gt(),
            r = n.queue;
        if (r === null) throw Error(l(311));
        r.lastRenderedReducer = e;
        var i = r.dispatch,
            c = r.pending,
            f = n.memoizedState;
        if (c !== null) {
            r.pending = null;
            var v = c = c.next;
            do f = e(f, v.action), v = v.next; while (v !== c);
            dn(f, n.memoizedState) || (St = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), r.lastRenderedState = f
        }
        return [f, i]
    }

    function Np(e, n, r) {
        var i = Te,
            c = gt(),
            f = ke;
        if (f) {
            if (r === void 0) throw Error(l(407));
            r = r()
        } else r = n();
        var v = !dn((Ie || c).memoizedState, r);
        if (v && (c.memoizedState = r, St = !0), c = c.queue, Hu(kp.bind(null, i, c, e), [e]), c.getSnapshot !== n || v || xt !== null && xt.memoizedState.tag & 1) {
            if (i.flags |= 2048, xs(9, {
                    destroy: void 0
                }, zp.bind(null, i, c, r, n), null), We === null) throw Error(l(349));
            f || (ga & 127) !== 0 || Hp(i, n, r)
        }
        return r
    }

    function Hp(e, n, r) {
        e.flags |= 16384, e = {
            getSnapshot: n,
            value: r
        }, n = Te.updateQueue, n === null ? (n = Xl(), Te.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e))
    }

    function zp(e, n, r, i) {
        n.value = r, n.getSnapshot = i, Up(n) && Lp(e)
    }

    function kp(e, n, r) {
        return r(function() {
            Up(n) && Lp(e)
        })
    }

    function Up(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var r = n();
            return !dn(e, r)
        } catch {
            return !0
        }
    }

    function Lp(e) {
        var n = Er(e, 2);
        n !== null && sn(n, e, 2)
    }

    function Mu(e) {
        var n = Xt();
        if (typeof e == "function") {
            var r = e;
            if (e = r(), Mr) {
                zt(!0);
                try {
                    r()
                } finally {
                    zt(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = e, n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ya,
            lastRenderedState: e
        }, n
    }

    function Bp(e, n, r, i) {
        return e.baseState = r, Du(e, Ie, typeof i == "function" ? i : ya)
    }

    function E1(e, n, r, i, c) {
        if (Jl(e)) throw Error(l(485));
        if (e = n.action, e !== null) {
            var f = {
                payload: c,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(v) {
                    f.listeners.push(v)
                }
            };
            j.T !== null ? r(!0) : f.isTransition = !1, i(f), r = n.pending, r === null ? (f.next = n.pending = f, qp(n, f)) : (f.next = r.next, n.pending = r.next = f)
        }
    }

    function qp(e, n) {
        var r = n.action,
            i = n.payload,
            c = e.state;
        if (n.isTransition) {
            var f = j.T,
                v = {};
            j.T = v;
            try {
                var w = r(c, i),
                    D = j.S;
                D !== null && D(v, w), Qp(e, n, w)
            } catch (Q) {
                Nu(e, n, Q)
            } finally {
                f !== null && v.types !== null && (f.types = v.types), j.T = f
            }
        } else try {
            f = r(c, i), Qp(e, n, f)
        } catch (Q) {
            Nu(e, n, Q)
        }
    }

    function Qp(e, n, r) {
        r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(i) {
            Pp(e, n, i)
        }, function(i) {
            return Nu(e, n, i)
        }) : Pp(e, n, r)
    }

    function Pp(e, n, r) {
        n.status = "fulfilled", n.value = r, Yp(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, qp(e, r)))
    }

    function Nu(e, n, r) {
        var i = e.pending;
        if (e.pending = null, i !== null) {
            i = i.next;
            do n.status = "rejected", n.reason = r, Yp(n), n = n.next; while (n !== i)
        }
        e.action = null
    }

    function Yp(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++)(0, e[n])()
    }

    function Gp(e, n) {
        return n
    }

    function Vp(e, n) {
        if (ke) {
            var r = We.formState;
            if (r !== null) {
                e: {
                    var i = Te;
                    if (ke) {
                        if (rt) {
                            t: {
                                for (var c = rt, f = Hn; c.nodeType !== 8;) {
                                    if (!f) {
                                        c = null;
                                        break t
                                    }
                                    if (c = kn(c.nextSibling), c === null) {
                                        c = null;
                                        break t
                                    }
                                }
                                f = c.data,
                                c = f === "F!" || f === "F" ? c : null
                            }
                            if (c) {
                                rt = kn(c.nextSibling), i = c.data === "F!";
                                break e
                            }
                        }
                        La(i)
                    }
                    i = !1
                }
                i && (n = r[0])
            }
        }
        return r = Xt(), r.memoizedState = r.baseState = n, i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gp,
            lastRenderedState: n
        }, r.queue = i, r = um.bind(null, Te, i), i.dispatch = r, i = Mu(!1), f = Bu.bind(null, Te, !1, i.queue), i = Xt(), c = {
            state: n,
            dispatch: null,
            action: e,
            pending: null
        }, i.queue = c, r = E1.bind(null, Te, c, f, r), c.dispatch = r, i.memoizedState = e, [n, r, !1]
    }

    function Kp(e) {
        var n = gt();
        return Xp(n, Ie, e)
    }

    function Xp(e, n, r) {
        if (n = Du(e, n, Gp)[0], e = Il(ya)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
            var i = vi(n)
        } catch (v) {
            throw v === ms ? Bl : v
        } else i = n;
        n = gt();
        var c = n.queue,
            f = c.dispatch;
        return r !== n.memoizedState && (Te.flags |= 2048, xs(9, {
            destroy: void 0
        }, O1.bind(null, c, r), null)), [i, f, e]
    }

    function O1(e, n) {
        e.action = n
    }

    function Zp(e) {
        var n = gt(),
            r = Ie;
        if (r !== null) return Xp(n, r, e);
        gt(), n = n.memoizedState, r = gt();
        var i = r.queue.dispatch;
        return r.memoizedState = e, [n, i, !1]
    }

    function xs(e, n, r, i) {
        return e = {
            tag: e,
            create: r,
            deps: i,
            inst: n,
            next: null
        }, n = Te.updateQueue, n === null && (n = Xl(), Te.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, n.lastEffect = e), e
    }

    function Ip() {
        return gt().memoizedState
    }

    function $l(e, n, r, i) {
        var c = Xt();
        Te.flags |= e, c.memoizedState = xs(1 | n, {
            destroy: void 0
        }, r, i === void 0 ? null : i)
    }

    function Fl(e, n, r, i) {
        var c = gt();
        i = i === void 0 ? null : i;
        var f = c.memoizedState.inst;
        Ie !== null && i !== null && Ou(i, Ie.memoizedState.deps) ? c.memoizedState = xs(n, f, r, i) : (Te.flags |= e, c.memoizedState = xs(1 | n, f, r, i))
    }

    function $p(e, n) {
        $l(8390656, 8, e, n)
    }

    function Hu(e, n) {
        Fl(2048, 8, e, n)
    }

    function A1(e) {
        Te.flags |= 4;
        var n = Te.updateQueue;
        if (n === null) n = Xl(), Te.updateQueue = n, n.events = [e];
        else {
            var r = n.events;
            r === null ? n.events = [e] : r.push(e)
        }
    }

    function Fp(e) {
        var n = gt().memoizedState;
        return A1({
                ref: n,
                nextImpl: e
            }),
            function() {
                if ((Ye & 2) !== 0) throw Error(l(440));
                return n.impl.apply(void 0, arguments)
            }
    }

    function Jp(e, n) {
        return Fl(4, 2, e, n)
    }

    function Wp(e, n) {
        return Fl(4, 4, e, n)
    }

    function em(e, n) {
        if (typeof n == "function") {
            e = e();
            var r = n(e);
            return function() {
                typeof r == "function" ? r() : n(null)
            }
        }
        if (n != null) return e = e(), n.current = e,
            function() {
                n.current = null
            }
    }

    function tm(e, n, r) {
        r = r != null ? r.concat([e]) : null, Fl(4, 4, em.bind(null, n, e), r)
    }

    function zu() {}

    function nm(e, n) {
        var r = gt();
        n = n === void 0 ? null : n;
        var i = r.memoizedState;
        return n !== null && Ou(n, i[1]) ? i[0] : (r.memoizedState = [e, n], e)
    }

    function am(e, n) {
        var r = gt();
        n = n === void 0 ? null : n;
        var i = r.memoizedState;
        if (n !== null && Ou(n, i[1])) return i[0];
        if (i = e(), Mr) {
            zt(!0);
            try {
                e()
            } finally {
                zt(!1)
            }
        }
        return r.memoizedState = [i, n], i
    }

    function ku(e, n, r) {
        return r === void 0 || (ga & 1073741824) !== 0 && (He & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = rg(), Te.lanes |= e, Xa |= e, r)
    }

    function rm(e, n, r, i) {
        return dn(r, n) ? r : ys.current !== null ? (e = ku(e, r, i), dn(e, n) || (St = !0), e) : (ga & 42) === 0 || (ga & 1073741824) !== 0 && (He & 261930) === 0 ? (St = !0, e.memoizedState = r) : (e = rg(), Te.lanes |= e, Xa |= e, n)
    }

    function sm(e, n, r, i, c) {
        var f = H.p;
        H.p = f !== 0 && 8 > f ? f : 8;
        var v = j.T,
            w = {};
        j.T = w, Bu(e, !1, n, r);
        try {
            var D = c(),
                Q = j.S;
            if (Q !== null && Q(w, D), D !== null && typeof D == "object" && typeof D.then == "function") {
                var J = x1(D, i);
                bi(e, n, J, yn(e))
            } else bi(e, n, i, yn(e))
        } catch (ee) {
            bi(e, n, {
                then: function() {},
                status: "rejected",
                reason: ee
            }, yn())
        } finally {
            H.p = f, v !== null && w.types !== null && (v.types = w.types), j.T = v
        }
    }

    function T1() {}

    function Uu(e, n, r, i) {
        if (e.tag !== 5) throw Error(l(476));
        var c = im(e).queue;
        sm(e, c, n, z, r === null ? T1 : function() {
            return lm(e), r(i)
        })
    }

    function im(e) {
        var n = e.memoizedState;
        if (n !== null) return n;
        n = {
            memoizedState: z,
            baseState: z,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ya,
                lastRenderedState: z
            },
            next: null
        };
        var r = {};
        return n.next = {
            memoizedState: r,
            baseState: r,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ya,
                lastRenderedState: r
            },
            next: null
        }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n
    }

    function lm(e) {
        var n = im(e);
        n.next === null && (n = e.alternate.memoizedState), bi(e, n.next.queue, {}, yn())
    }

    function Lu() {
        return Bt(ki)
    }

    function om() {
        return gt().memoizedState
    }

    function cm() {
        return gt().memoizedState
    }

    function C1(e) {
        for (var n = e.return; n !== null;) {
            switch (n.tag) {
                case 24:
                case 3:
                    var r = yn();
                    e = Qa(r);
                    var i = Pa(n, e, r);
                    i !== null && (sn(i, n, r), pi(i, n, r)), n = {
                        cache: hu()
                    }, e.payload = n;
                    return
            }
            n = n.return
        }
    }

    function j1(e, n, r) {
        var i = yn();
        r = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Jl(e) ? dm(n, r) : (r = nu(e, n, r, i), r !== null && (sn(r, e, i), fm(r, n, i)))
    }

    function um(e, n, r) {
        var i = yn();
        bi(e, n, r, i)
    }

    function bi(e, n, r, i) {
        var c = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Jl(e)) dm(n, c);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
                var v = n.lastRenderedState,
                    w = f(v, r);
                if (c.hasEagerState = !0, c.eagerState = w, dn(w, v)) return Ml(e, n, c, 0), We === null && _l(), !1
            } catch {} finally {}
            if (r = nu(e, n, c, i), r !== null) return sn(r, e, i), fm(r, n, i), !0
        }
        return !1
    }

    function Bu(e, n, r, i) {
        if (i = {
                lane: 2,
                revertLane: yd(),
                gesture: null,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Jl(e)) {
            if (n) throw Error(l(479))
        } else n = nu(e, r, i, 2), n !== null && sn(n, e, 2)
    }

    function Jl(e) {
        var n = e.alternate;
        return e === Te || n !== null && n === Te
    }

    function dm(e, n) {
        vs = Vl = !0;
        var r = e.pending;
        r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n
    }

    function fm(e, n, r) {
        if ((r & 4194048) !== 0) {
            var i = n.lanes;
            i &= e.pendingLanes, r |= i, n.lanes = r, at(e, r)
        }
    }
    var xi = {
        readContext: Bt,
        use: Zl,
        useCallback: dt,
        useContext: dt,
        useEffect: dt,
        useImperativeHandle: dt,
        useLayoutEffect: dt,
        useInsertionEffect: dt,
        useMemo: dt,
        useReducer: dt,
        useRef: dt,
        useState: dt,
        useDebugValue: dt,
        useDeferredValue: dt,
        useTransition: dt,
        useSyncExternalStore: dt,
        useId: dt,
        useHostTransitionStatus: dt,
        useFormState: dt,
        useActionState: dt,
        useOptimistic: dt,
        useMemoCache: dt,
        useCacheRefresh: dt
    };
    xi.useEffectEvent = dt;
    var hm = {
            readContext: Bt,
            use: Zl,
            useCallback: function(e, n) {
                return Xt().memoizedState = [e, n === void 0 ? null : n], e
            },
            useContext: Bt,
            useEffect: $p,
            useImperativeHandle: function(e, n, r) {
                r = r != null ? r.concat([e]) : null, $l(4194308, 4, em.bind(null, n, e), r)
            },
            useLayoutEffect: function(e, n) {
                return $l(4194308, 4, e, n)
            },
            useInsertionEffect: function(e, n) {
                $l(4, 2, e, n)
            },
            useMemo: function(e, n) {
                var r = Xt();
                n = n === void 0 ? null : n;
                var i = e();
                if (Mr) {
                    zt(!0);
                    try {
                        e()
                    } finally {
                        zt(!1)
                    }
                }
                return r.memoizedState = [i, n], i
            },
            useReducer: function(e, n, r) {
                var i = Xt();
                if (r !== void 0) {
                    var c = r(n);
                    if (Mr) {
                        zt(!0);
                        try {
                            r(n)
                        } finally {
                            zt(!1)
                        }
                    }
                } else c = n;
                return i.memoizedState = i.baseState = c, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: c
                }, i.queue = e, e = e.dispatch = j1.bind(null, Te, e), [i.memoizedState, e]
            },
            useRef: function(e) {
                var n = Xt();
                return e = {
                    current: e
                }, n.memoizedState = e
            },
            useState: function(e) {
                e = Mu(e);
                var n = e.queue,
                    r = um.bind(null, Te, n);
                return n.dispatch = r, [e.memoizedState, r]
            },
            useDebugValue: zu,
            useDeferredValue: function(e, n) {
                var r = Xt();
                return ku(r, e, n)
            },
            useTransition: function() {
                var e = Mu(!1);
                return e = sm.bind(null, Te, e.queue, !0, !1), Xt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, n, r) {
                var i = Te,
                    c = Xt();
                if (ke) {
                    if (r === void 0) throw Error(l(407));
                    r = r()
                } else {
                    if (r = n(), We === null) throw Error(l(349));
                    (He & 127) !== 0 || Hp(i, n, r)
                }
                c.memoizedState = r;
                var f = {
                    value: r,
                    getSnapshot: n
                };
                return c.queue = f, $p(kp.bind(null, i, f, e), [e]), i.flags |= 2048, xs(9, {
                    destroy: void 0
                }, zp.bind(null, i, f, r, n), null), r
            },
            useId: function() {
                var e = Xt(),
                    n = We.identifierPrefix;
                if (ke) {
                    var r = Jn,
                        i = Fn;
                    r = (i & ~(1 << 32 - pt(i) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = Kl++, 0 < r && (n += "H" + r.toString(32)), n += "_"
                } else r = S1++, n = "_" + n + "r_" + r.toString(32) + "_";
                return e.memoizedState = n
            },
            useHostTransitionStatus: Lu,
            useFormState: Vp,
            useActionState: Vp,
            useOptimistic: function(e) {
                var n = Xt();
                n.memoizedState = n.baseState = e;
                var r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return n.queue = r, n = Bu.bind(null, Te, !0, r), r.dispatch = n, [e, n]
            },
            useMemoCache: Ru,
            useCacheRefresh: function() {
                return Xt().memoizedState = C1.bind(null, Te)
            },
            useEffectEvent: function(e) {
                var n = Xt(),
                    r = {
                        impl: e
                    };
                return n.memoizedState = r,
                    function() {
                        if ((Ye & 2) !== 0) throw Error(l(440));
                        return r.impl.apply(void 0, arguments)
                    }
            }
        },
        qu = {
            readContext: Bt,
            use: Zl,
            useCallback: nm,
            useContext: Bt,
            useEffect: Hu,
            useImperativeHandle: tm,
            useInsertionEffect: Jp,
            useLayoutEffect: Wp,
            useMemo: am,
            useReducer: Il,
            useRef: Ip,
            useState: function() {
                return Il(ya)
            },
            useDebugValue: zu,
            useDeferredValue: function(e, n) {
                var r = gt();
                return rm(r, Ie.memoizedState, e, n)
            },
            useTransition: function() {
                var e = Il(ya)[0],
                    n = gt().memoizedState;
                return [typeof e == "boolean" ? e : vi(e), n]
            },
            useSyncExternalStore: Np,
            useId: om,
            useHostTransitionStatus: Lu,
            useFormState: Kp,
            useActionState: Kp,
            useOptimistic: function(e, n) {
                var r = gt();
                return Bp(r, Ie, e, n)
            },
            useMemoCache: Ru,
            useCacheRefresh: cm
        };
    qu.useEffectEvent = Fp;
    var pm = {
        readContext: Bt,
        use: Zl,
        useCallback: nm,
        useContext: Bt,
        useEffect: Hu,
        useImperativeHandle: tm,
        useInsertionEffect: Jp,
        useLayoutEffect: Wp,
        useMemo: am,
        useReducer: _u,
        useRef: Ip,
        useState: function() {
            return _u(ya)
        },
        useDebugValue: zu,
        useDeferredValue: function(e, n) {
            var r = gt();
            return Ie === null ? ku(r, e, n) : rm(r, Ie.memoizedState, e, n)
        },
        useTransition: function() {
            var e = _u(ya)[0],
                n = gt().memoizedState;
            return [typeof e == "boolean" ? e : vi(e), n]
        },
        useSyncExternalStore: Np,
        useId: om,
        useHostTransitionStatus: Lu,
        useFormState: Zp,
        useActionState: Zp,
        useOptimistic: function(e, n) {
            var r = gt();
            return Ie !== null ? Bp(r, Ie, e, n) : (r.baseState = e, [e, r.queue.dispatch])
        },
        useMemoCache: Ru,
        useCacheRefresh: cm
    };
    pm.useEffectEvent = Fp;

    function Qu(e, n, r, i) {
        n = e.memoizedState, r = r(i, n), r = r == null ? n : m({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
    }
    var Pu = {
        enqueueSetState: function(e, n, r) {
            e = e._reactInternals;
            var i = yn(),
                c = Qa(i);
            c.payload = n, r != null && (c.callback = r), n = Pa(e, c, i), n !== null && (sn(n, e, i), pi(n, e, i))
        },
        enqueueReplaceState: function(e, n, r) {
            e = e._reactInternals;
            var i = yn(),
                c = Qa(i);
            c.tag = 1, c.payload = n, r != null && (c.callback = r), n = Pa(e, c, i), n !== null && (sn(n, e, i), pi(n, e, i))
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var r = yn(),
                i = Qa(r);
            i.tag = 2, n != null && (i.callback = n), n = Pa(e, i, r), n !== null && (sn(n, e, r), pi(n, e, r))
        }
    };

    function mm(e, n, r, i, c, f, v) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, v) : n.prototype && n.prototype.isPureReactComponent ? !ii(r, i) || !ii(c, f) : !0
    }

    function gm(e, n, r, i) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, i), n.state !== e && Pu.enqueueReplaceState(n, n.state, null)
    }

    function Nr(e, n) {
        var r = n;
        if ("ref" in n) {
            r = {};
            for (var i in n) i !== "ref" && (r[i] = n[i])
        }
        if (e = e.defaultProps) {
            r === n && (r = m({}, r));
            for (var c in e) r[c] === void 0 && (r[c] = e[c])
        }
        return r
    }

    function ym(e) {
        Dl(e)
    }

    function vm(e) {
        console.error(e)
    }

    function bm(e) {
        Dl(e)
    }

    function Wl(e, n) {
        try {
            var r = e.onUncaughtError;
            r(n.value, {
                componentStack: n.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function xm(e, n, r) {
        try {
            var i = e.onCaughtError;
            i(r.value, {
                componentStack: r.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (c) {
            setTimeout(function() {
                throw c
            })
        }
    }

    function Yu(e, n, r) {
        return r = Qa(r), r.tag = 3, r.payload = {
            element: null
        }, r.callback = function() {
            Wl(e, n)
        }, r
    }

    function Sm(e) {
        return e = Qa(e), e.tag = 3, e
    }

    function wm(e, n, r, i) {
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = i.value;
            e.payload = function() {
                return c(f)
            }, e.callback = function() {
                xm(n, r, i)
            }
        }
        var v = r.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
            xm(n, r, i), typeof c != "function" && (Za === null ? Za = new Set([this]) : Za.add(this));
            var w = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: w !== null ? w : ""
            })
        })
    }

    function R1(e, n, r, i, c) {
        if (r.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
            if (n = r.alternate, n !== null && fs(n, r, c, !0), r = hn.current, r !== null) {
                switch (r.tag) {
                    case 31:
                    case 13:
                        return zn === null ? fo() : r.alternate === null && ft === 0 && (ft = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, i === ql ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = new Set([i]) : n.add(i), pd(e, i, c)), !1;
                    case 22:
                        return r.flags |= 65536, i === ql ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([i])
                        }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = new Set([i]) : r.add(i)), pd(e, i, c)), !1
                }
                throw Error(l(435, r.tag))
            }
            return pd(e, i, c), fo(), !1
        }
        if (ke) return n = hn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, i !== ou && (e = Error(l(422), {
            cause: i
        }), ci(_n(e, r)))) : (i !== ou && (n = Error(l(423), {
            cause: i
        }), ci(_n(n, r))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, i = _n(i, r), c = Yu(e.stateNode, i, c), bu(e, c), ft !== 4 && (ft = 2)), !1;
        var f = Error(l(520), {
            cause: i
        });
        if (f = _n(f, r), ji === null ? ji = [f] : ji.push(f), ft !== 4 && (ft = 2), n === null) return !0;
        i = _n(i, r), r = n;
        do {
            switch (r.tag) {
                case 3:
                    return r.flags |= 65536, e = c & -c, r.lanes |= e, e = Yu(r.stateNode, i, e), bu(r, e), !1;
                case 1:
                    if (n = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Za === null || !Za.has(f)))) return r.flags |= 65536, c &= -c, r.lanes |= c, c = Sm(c), wm(c, e, r, i), bu(r, c), !1
            }
            r = r.return
        } while (r !== null);
        return !1
    }
    var Gu = Error(l(461)),
        St = !1;

    function qt(e, n, r, i) {
        n.child = e === null ? Tp(n, null, r, i) : _r(n, e.child, r, i)
    }

    function Em(e, n, r, i, c) {
        r = r.render;
        var f = n.ref;
        if ("ref" in i) {
            var v = {};
            for (var w in i) w !== "ref" && (v[w] = i[w])
        } else v = i;
        return Cr(n), i = Au(e, n, r, v, f, c), w = Tu(), e !== null && !St ? (Cu(e, n, c), va(e, n, c)) : (ke && w && iu(n), n.flags |= 1, qt(e, n, i, c), n.child)
    }

    function Om(e, n, r, i, c) {
        if (e === null) {
            var f = r.type;
            return typeof f == "function" && !au(f) && f.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = f, Am(e, n, f, i, c)) : (e = Hl(r.type, null, i, n, n.mode, c), e.ref = n.ref, e.return = n, n.child = e)
        }
        if (f = e.child, !Ju(e, c)) {
            var v = f.memoizedProps;
            if (r = r.compare, r = r !== null ? r : ii, r(v, i) && e.ref === n.ref) return va(e, n, c)
        }
        return n.flags |= 1, e = fa(f, i), e.ref = n.ref, e.return = n, n.child = e
    }

    function Am(e, n, r, i, c) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (ii(f, i) && e.ref === n.ref)
                if (St = !1, n.pendingProps = i = f, Ju(e, c))(e.flags & 131072) !== 0 && (St = !0);
                else return n.lanes = e.lanes, va(e, n, c)
        }
        return Vu(e, n, r, i, c)
    }

    function Tm(e, n, r, i) {
        var c = i.children,
            f = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), i.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (f = f !== null ? f.baseLanes | r : r, e !== null) {
                    for (i = n.child = e.child, c = 0; i !== null;) c = c | i.lanes | i.childLanes, i = i.sibling;
                    i = c & ~f
                } else i = 0, n.child = null;
                return Cm(e, n, f, r, i)
            }
            if ((r & 536870912) !== 0) n.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && Ll(n, f !== null ? f.cachePool : null), f !== null ? Rp(n, f) : Su(), Dp(n);
            else return i = n.lanes = 536870912, Cm(e, n, f !== null ? f.baseLanes | r : r, r, i)
        } else f !== null ? (Ll(n, f.cachePool), Rp(n, f), Ga(), n.memoizedState = null) : (e !== null && Ll(n, null), Su(), Ga());
        return qt(e, n, c, r), n.child
    }

    function Si(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), n.sibling
    }

    function Cm(e, n, r, i, c) {
        var f = mu();
        return f = f === null ? null : {
            parent: bt._currentValue,
            pool: f
        }, n.memoizedState = {
            baseLanes: r,
            cachePool: f
        }, e !== null && Ll(n, null), Su(), Dp(n), e !== null && fs(e, n, i, !0), n.childLanes = c, null
    }

    function eo(e, n) {
        return n = no({
            mode: n.mode,
            children: n.children
        }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n
    }

    function jm(e, n, r) {
        return _r(n, e.child, null, r), e = eo(n, n.pendingProps), e.flags |= 2, pn(n), n.memoizedState = null, e
    }

    function D1(e, n, r) {
        var i = n.pendingProps,
            c = (n.flags & 128) !== 0;
        if (n.flags &= -129, e === null) {
            if (ke) {
                if (i.mode === "hidden") return e = eo(n, i), n.lanes = 536870912, Si(null, e);
                if (Eu(n), (e = rt) ? (e = qg(e, Hn), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
                        dehydrated: e,
                        treeContext: ka !== null ? {
                            id: Fn,
                            overflow: Jn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, r = dp(e), r.return = n, n.child = r, Lt = n, rt = null)) : e = null, e === null) throw La(n);
                return n.lanes = 536870912, null
            }
            return eo(n, i)
        }
        var f = e.memoizedState;
        if (f !== null) {
            var v = f.dehydrated;
            if (Eu(n), c)
                if (n.flags & 256) n.flags &= -257, n = jm(e, n, r);
                else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
            else throw Error(l(558));
            else if (St || fs(e, n, r, !1), c = (r & e.childLanes) !== 0, St || c) {
                if (i = We, i !== null && (v = lt(i, r), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, Er(e, v), sn(i, e, v), Gu;
                fo(), n = jm(e, n, r)
            } else e = f.treeContext, rt = kn(v.nextSibling), Lt = n, ke = !0, Ua = null, Hn = !1, e !== null && pp(n, e), n = eo(n, i), n.flags |= 4096;
            return n
        }
        return e = fa(e.child, {
            mode: i.mode,
            children: i.children
        }), e.ref = n.ref, n.child = e, e.return = n, e
    }

    function to(e, n) {
        var r = n.ref;
        if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof r != "function" && typeof r != "object") throw Error(l(284));
            (e === null || e.ref !== r) && (n.flags |= 4194816)
        }
    }

    function Vu(e, n, r, i, c) {
        return Cr(n), r = Au(e, n, r, i, void 0, c), i = Tu(), e !== null && !St ? (Cu(e, n, c), va(e, n, c)) : (ke && i && iu(n), n.flags |= 1, qt(e, n, r, c), n.child)
    }

    function Rm(e, n, r, i, c, f) {
        return Cr(n), n.updateQueue = null, r = Mp(n, i, r, c), _p(e), i = Tu(), e !== null && !St ? (Cu(e, n, f), va(e, n, f)) : (ke && i && iu(n), n.flags |= 1, qt(e, n, r, f), n.child)
    }

    function Dm(e, n, r, i, c) {
        if (Cr(n), n.stateNode === null) {
            var f = os,
                v = r.contextType;
            typeof v == "object" && v !== null && (f = Bt(v)), f = new r(i, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Pu, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = i, f.state = n.memoizedState, f.refs = {}, yu(n), v = r.contextType, f.context = typeof v == "object" && v !== null ? Bt(v) : os, f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Qu(n, r, v, i), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && Pu.enqueueReplaceState(f, f.state, null), gi(n, i, f, c), mi(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), i = !0
        } else if (e === null) {
            f = n.stateNode;
            var w = n.memoizedProps,
                D = Nr(r, w);
            f.props = D;
            var Q = f.context,
                J = r.contextType;
            v = os, typeof J == "object" && J !== null && (v = Bt(J));
            var ee = r.getDerivedStateFromProps;
            J = typeof ee == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = n.pendingProps !== w, J || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || Q !== v) && gm(n, f, i, v), qa = !1;
            var V = n.memoizedState;
            f.state = V, gi(n, i, f, c), mi(), Q = n.memoizedState, w || V !== Q || qa ? (typeof ee == "function" && (Qu(n, r, ee, i), Q = n.memoizedState), (D = qa || mm(n, r, D, i, V, Q, v)) ? (J || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = Q), f.props = i, f.state = Q, f.context = v, i = D) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), i = !1)
        } else {
            f = n.stateNode, vu(e, n), v = n.memoizedProps, J = Nr(r, v), f.props = J, ee = n.pendingProps, V = f.context, Q = r.contextType, D = os, typeof Q == "object" && Q !== null && (D = Bt(Q)), w = r.getDerivedStateFromProps, (Q = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== ee || V !== D) && gm(n, f, i, D), qa = !1, V = n.memoizedState, f.state = V, gi(n, i, f, c), mi();
            var X = n.memoizedState;
            v !== ee || V !== X || qa || e !== null && e.dependencies !== null && kl(e.dependencies) ? (typeof w == "function" && (Qu(n, r, w, i), X = n.memoizedState), (J = qa || mm(n, r, J, i, V, X, D) || e !== null && e.dependencies !== null && kl(e.dependencies)) ? (Q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, X, D), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, X, D)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = X), f.props = i, f.state = X, f.context = D, i = J) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), i = !1)
        }
        return f = i, to(e, n), i = (n.flags & 128) !== 0, f || i ? (f = n.stateNode, r = i && typeof r.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, e !== null && i ? (n.child = _r(n, e.child, null, c), n.child = _r(n, null, r, c)) : qt(e, n, r, c), n.memoizedState = f.state, e = n.child) : e = va(e, n, c), e
    }

    function _m(e, n, r, i) {
        return Ar(), n.flags |= 256, qt(e, n, r, i), n.child
    }
    var Ku = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Xu(e) {
        return {
            baseLanes: e,
            cachePool: xp()
        }
    }

    function Zu(e, n, r) {
        return e = e !== null ? e.childLanes & ~r : 0, n && (e |= gn), e
    }

    function Mm(e, n, r) {
        var i = n.pendingProps,
            c = !1,
            f = (n.flags & 128) !== 0,
            v;
        if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (mt.current & 2) !== 0), v && (c = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
            if (ke) {
                if (c ? Ya(n) : Ga(), (e = rt) ? (e = qg(e, Hn), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
                        dehydrated: e,
                        treeContext: ka !== null ? {
                            id: Fn,
                            overflow: Jn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, r = dp(e), r.return = n, n.child = r, Lt = n, rt = null)) : e = null, e === null) throw La(n);
                return Dd(e) ? n.lanes = 32 : n.lanes = 536870912, null
            }
            var w = i.children;
            return i = i.fallback, c ? (Ga(), c = n.mode, w = no({
                mode: "hidden",
                children: w
            }, c), i = Or(i, c, r, null), w.return = n, i.return = n, w.sibling = i, n.child = w, i = n.child, i.memoizedState = Xu(r), i.childLanes = Zu(e, v, r), n.memoizedState = Ku, Si(null, i)) : (Ya(n), Iu(n, w))
        }
        var D = e.memoizedState;
        if (D !== null && (w = D.dehydrated, w !== null)) {
            if (f) n.flags & 256 ? (Ya(n), n.flags &= -257, n = $u(e, n, r)) : n.memoizedState !== null ? (Ga(), n.child = e.child, n.flags |= 128, n = null) : (Ga(), w = i.fallback, c = n.mode, i = no({
                mode: "visible",
                children: i.children
            }, c), w = Or(w, c, r, null), w.flags |= 2, i.return = n, w.return = n, i.sibling = w, n.child = i, _r(n, e.child, null, r), i = n.child, i.memoizedState = Xu(r), i.childLanes = Zu(e, v, r), n.memoizedState = Ku, n = Si(null, i));
            else if (Ya(n), Dd(w)) {
                if (v = w.nextSibling && w.nextSibling.dataset, v) var Q = v.dgst;
                v = Q, i = Error(l(419)), i.stack = "", i.digest = v, ci({
                    value: i,
                    source: null,
                    stack: null
                }), n = $u(e, n, r)
            } else if (St || fs(e, n, r, !1), v = (r & e.childLanes) !== 0, St || v) {
                if (v = We, v !== null && (i = lt(v, r), i !== 0 && i !== D.retryLane)) throw D.retryLane = i, Er(e, i), sn(v, e, i), Gu;
                Rd(w) || fo(), n = $u(e, n, r)
            } else Rd(w) ? (n.flags |= 192, n.child = e.child, n = null) : (e = D.treeContext, rt = kn(w.nextSibling), Lt = n, ke = !0, Ua = null, Hn = !1, e !== null && pp(n, e), n = Iu(n, i.children), n.flags |= 4096);
            return n
        }
        return c ? (Ga(), w = i.fallback, c = n.mode, D = e.child, Q = D.sibling, i = fa(D, {
            mode: "hidden",
            children: i.children
        }), i.subtreeFlags = D.subtreeFlags & 65011712, Q !== null ? w = fa(Q, w) : (w = Or(w, c, r, null), w.flags |= 2), w.return = n, i.return = n, i.sibling = w, n.child = i, Si(null, i), i = n.child, w = e.child.memoizedState, w === null ? w = Xu(r) : (c = w.cachePool, c !== null ? (D = bt._currentValue, c = c.parent !== D ? {
            parent: D,
            pool: D
        } : c) : c = xp(), w = {
            baseLanes: w.baseLanes | r,
            cachePool: c
        }), i.memoizedState = w, i.childLanes = Zu(e, v, r), n.memoizedState = Ku, Si(e.child, i)) : (Ya(n), r = e.child, e = r.sibling, r = fa(r, {
            mode: "visible",
            children: i.children
        }), r.return = n, r.sibling = null, e !== null && (v = n.deletions, v === null ? (n.deletions = [e], n.flags |= 16) : v.push(e)), n.child = r, n.memoizedState = null, r)
    }

    function Iu(e, n) {
        return n = no({
            mode: "visible",
            children: n
        }, e.mode), n.return = e, e.child = n
    }

    function no(e, n) {
        return e = fn(22, e, null, n), e.lanes = 0, e
    }

    function $u(e, n, r) {
        return _r(n, e.child, null, r), e = Iu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
    }

    function Nm(e, n, r) {
        e.lanes |= n;
        var i = e.alternate;
        i !== null && (i.lanes |= n), du(e.return, n, r)
    }

    function Fu(e, n, r, i, c, f) {
        var v = e.memoizedState;
        v === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: r,
            tailMode: c,
            treeForkCount: f
        } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = i, v.tail = r, v.tailMode = c, v.treeForkCount = f)
    }

    function Hm(e, n, r) {
        var i = n.pendingProps,
            c = i.revealOrder,
            f = i.tail;
        i = i.children;
        var v = mt.current,
            w = (v & 2) !== 0;
        if (w ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, U(mt, v), qt(e, n, i, r), i = ke ? oi : 0, !w && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Nm(e, r, n);
            else if (e.tag === 19) Nm(e, r, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === n) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        switch (c) {
            case "forwards":
                for (r = n.child, c = null; r !== null;) e = r.alternate, e !== null && Gl(e) === null && (c = r), r = r.sibling;
                r = c, r === null ? (c = n.child, n.child = null) : (c = r.sibling, r.sibling = null), Fu(n, !1, c, r, f, i);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (r = null, c = n.child, n.child = null; c !== null;) {
                    if (e = c.alternate, e !== null && Gl(e) === null) {
                        n.child = c;
                        break
                    }
                    e = c.sibling, c.sibling = r, r = c, c = e
                }
                Fu(n, !0, r, null, f, i);
                break;
            case "together":
                Fu(n, !1, null, null, void 0, i);
                break;
            default:
                n.memoizedState = null
        }
        return n.child
    }

    function va(e, n, r) {
        if (e !== null && (n.dependencies = e.dependencies), Xa |= n.lanes, (r & n.childLanes) === 0)
            if (e !== null) {
                if (fs(e, n, r, !1), (r & n.childLanes) === 0) return null
            } else return null;
        if (e !== null && n.child !== e.child) throw Error(l(153));
        if (n.child !== null) {
            for (e = n.child, r = fa(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null;) e = e.sibling, r = r.sibling = fa(e, e.pendingProps), r.return = n;
            r.sibling = null
        }
        return n.child
    }

    function Ju(e, n) {
        return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && kl(e)))
    }

    function _1(e, n, r) {
        switch (n.tag) {
            case 3:
                ve(n, n.stateNode.containerInfo), Ba(n, bt, e.memoizedState.cache), Ar();
                break;
            case 27:
            case 5:
                Ee(n);
                break;
            case 4:
                ve(n, n.stateNode.containerInfo);
                break;
            case 10:
                Ba(n, n.type, n.memoizedProps.value);
                break;
            case 31:
                if (n.memoizedState !== null) return n.flags |= 128, Eu(n), null;
                break;
            case 13:
                var i = n.memoizedState;
                if (i !== null) return i.dehydrated !== null ? (Ya(n), n.flags |= 128, null) : (r & n.child.childLanes) !== 0 ? Mm(e, n, r) : (Ya(n), e = va(e, n, r), e !== null ? e.sibling : null);
                Ya(n);
                break;
            case 19:
                var c = (e.flags & 128) !== 0;
                if (i = (r & n.childLanes) !== 0, i || (fs(e, n, r, !1), i = (r & n.childLanes) !== 0), c) {
                    if (i) return Hm(e, n, r);
                    n.flags |= 128
                }
                if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), U(mt, mt.current), i) break;
                return null;
            case 22:
                return n.lanes = 0, Tm(e, n, r, n.pendingProps);
            case 24:
                Ba(n, bt, e.memoizedState.cache)
        }
        return va(e, n, r)
    }

    function zm(e, n, r) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps) St = !0;
            else {
                if (!Ju(e, r) && (n.flags & 128) === 0) return St = !1, _1(e, n, r);
                St = (e.flags & 131072) !== 0
            }
        else St = !1, ke && (n.flags & 1048576) !== 0 && hp(n, oi, n.index);
        switch (n.lanes = 0, n.tag) {
            case 16:
                e: {
                    var i = n.pendingProps;
                    if (e = Rr(n.elementType), n.type = e, typeof e == "function") au(e) ? (i = Nr(e, i), n.tag = 1, n = Dm(null, n, e, i, r)) : (n.tag = 0, n = Vu(null, n, e, i, r));
                    else {
                        if (e != null) {
                            var c = e.$$typeof;
                            if (c === Z) {
                                n.tag = 11, n = Em(null, n, e, i, r);
                                break e
                            } else if (c === T) {
                                n.tag = 14, n = Om(null, n, e, i, r);
                                break e
                            }
                        }
                        throw n = ne(e) || e, Error(l(306, n, ""))
                    }
                }
                return n;
            case 0:
                return Vu(e, n, n.type, n.pendingProps, r);
            case 1:
                return i = n.type, c = Nr(i, n.pendingProps), Dm(e, n, i, c, r);
            case 3:
                e: {
                    if (ve(n, n.stateNode.containerInfo), e === null) throw Error(l(387));i = n.pendingProps;
                    var f = n.memoizedState;c = f.element,
                    vu(e, n),
                    gi(n, i, null, r);
                    var v = n.memoizedState;
                    if (i = v.cache, Ba(n, bt, i), i !== f.cache && fu(n, [bt], r, !0), mi(), i = v.element, f.isDehydrated)
                        if (f = {
                                element: i,
                                isDehydrated: !1,
                                cache: v.cache
                            }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
                            n = _m(e, n, i, r);
                            break e
                        } else if (i !== c) {
                        c = _n(Error(l(424)), n), ci(c), n = _m(e, n, i, r);
                        break e
                    } else {
                        switch (e = n.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (rt = kn(e.firstChild), Lt = n, ke = !0, Ua = null, Hn = !0, r = Tp(n, null, i, r), n.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling
                    } else {
                        if (Ar(), i === c) {
                            n = va(e, n, r);
                            break e
                        }
                        qt(e, n, i, r)
                    }
                    n = n.child
                }
                return n;
            case 26:
                return to(e, n), e === null ? (r = Kg(n.type, null, n.pendingProps, null)) ? n.memoizedState = r : ke || (r = n.type, e = n.pendingProps, i = bo(ce.current).createElement(r), i[Ut] = n, i[Wt] = e, Qt(i, r, e), Dt(i), n.stateNode = i) : n.memoizedState = Kg(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
            case 27:
                return Ee(n), e === null && ke && (i = n.stateNode = Yg(n.type, n.pendingProps, ce.current), Lt = n, Hn = !0, c = rt, Ja(n.type) ? (_d = c, rt = kn(i.firstChild)) : rt = c), qt(e, n, n.pendingProps.children, r), to(e, n), e === null && (n.flags |= 4194304), n.child;
            case 5:
                return e === null && ke && ((c = i = rt) && (i = lS(i, n.type, n.pendingProps, Hn), i !== null ? (n.stateNode = i, Lt = n, rt = kn(i.firstChild), Hn = !1, c = !0) : c = !1), c || La(n)), Ee(n), c = n.type, f = n.pendingProps, v = e !== null ? e.memoizedProps : null, i = f.children, Td(c, f) ? i = null : v !== null && Td(c, v) && (n.flags |= 32), n.memoizedState !== null && (c = Au(e, n, w1, null, null, r), ki._currentValue = c), to(e, n), qt(e, n, i, r), n.child;
            case 6:
                return e === null && ke && ((e = r = rt) && (r = oS(r, n.pendingProps, Hn), r !== null ? (n.stateNode = r, Lt = n, rt = null, e = !0) : e = !1), e || La(n)), null;
            case 13:
                return Mm(e, n, r);
            case 4:
                return ve(n, n.stateNode.containerInfo), i = n.pendingProps, e === null ? n.child = _r(n, null, i, r) : qt(e, n, i, r), n.child;
            case 11:
                return Em(e, n, n.type, n.pendingProps, r);
            case 7:
                return qt(e, n, n.pendingProps, r), n.child;
            case 8:
                return qt(e, n, n.pendingProps.children, r), n.child;
            case 12:
                return qt(e, n, n.pendingProps.children, r), n.child;
            case 10:
                return i = n.pendingProps, Ba(n, n.type, i.value), qt(e, n, i.children, r), n.child;
            case 9:
                return c = n.type._context, i = n.pendingProps.children, Cr(n), c = Bt(c), i = i(c), n.flags |= 1, qt(e, n, i, r), n.child;
            case 14:
                return Om(e, n, n.type, n.pendingProps, r);
            case 15:
                return Am(e, n, n.type, n.pendingProps, r);
            case 19:
                return Hm(e, n, r);
            case 31:
                return D1(e, n, r);
            case 22:
                return Tm(e, n, r, n.pendingProps);
            case 24:
                return Cr(n), i = Bt(bt), e === null ? (c = mu(), c === null && (c = We, f = hu(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= r), c = f), n.memoizedState = {
                    parent: i,
                    cache: c
                }, yu(n), Ba(n, bt, c)) : ((e.lanes & r) !== 0 && (vu(e, n), gi(n, null, null, r), mi()), c = e.memoizedState, f = n.memoizedState, c.parent !== i ? (c = {
                    parent: i,
                    cache: i
                }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Ba(n, bt, i)) : (i = f.cache, Ba(n, bt, i), i !== c.cache && fu(n, [bt], r, !0))), qt(e, n, n.pendingProps.children, r), n.child;
            case 29:
                throw n.pendingProps
        }
        throw Error(l(156, n.tag))
    }

    function ba(e) {
        e.flags |= 4
    }

    function Wu(e, n, r, i, c) {
        if ((n = (e.mode & 32) !== 0) && (n = !1), n) {
            if (e.flags |= 16777216, (c & 335544128) === c)
                if (e.stateNode.complete) e.flags |= 8192;
                else if (og()) e.flags |= 8192;
            else throw Dr = ql, gu
        } else e.flags &= -16777217
    }

    function km(e, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Fg(n))
            if (og()) e.flags |= 8192;
            else throw Dr = ql, gu
    }

    function ao(e, n) {
        n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Ve() : 536870912, e.lanes |= n, Os |= n)
    }

    function wi(e, n) {
        if (!ke) switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? e.tail = null : r.sibling = null;
                break;
            case "collapsed":
                r = e.tail;
                for (var i = null; r !== null;) r.alternate !== null && (i = r), r = r.sibling;
                i === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
        }
    }

    function st(e) {
        var n = e.alternate !== null && e.alternate.child === e.child,
            r = 0,
            i = 0;
        if (n)
            for (var c = e.child; c !== null;) r |= c.lanes | c.childLanes, i |= c.subtreeFlags & 65011712, i |= c.flags & 65011712, c.return = e, c = c.sibling;
        else
            for (c = e.child; c !== null;) r |= c.lanes | c.childLanes, i |= c.subtreeFlags, i |= c.flags, c.return = e, c = c.sibling;
        return e.subtreeFlags |= i, e.childLanes = r, n
    }

    function M1(e, n, r) {
        var i = n.pendingProps;
        switch (lu(n), n.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return st(n), null;
            case 1:
                return st(n), null;
            case 3:
                return r = n.stateNode, i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), ma(bt), Oe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ds(n) ? ba(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, cu())), st(n), null;
            case 26:
                var c = n.type,
                    f = n.memoizedState;
                return e === null ? (ba(n), f !== null ? (st(n), km(n, f)) : (st(n), Wu(n, c, null, i, r))) : f ? f !== e.memoizedState ? (ba(n), st(n), km(n, f)) : (st(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== i && ba(n), st(n), Wu(n, c, e, i, r)), null;
            case 27:
                if (it(n), r = ce.current, c = n.type, e !== null && n.stateNode != null) e.memoizedProps !== i && ba(n);
                else {
                    if (!i) {
                        if (n.stateNode === null) throw Error(l(166));
                        return st(n), null
                    }
                    e = I.current, ds(n) ? mp(n) : (e = Yg(c, i, r), n.stateNode = e, ba(n))
                }
                return st(n), null;
            case 5:
                if (it(n), c = n.type, e !== null && n.stateNode != null) e.memoizedProps !== i && ba(n);
                else {
                    if (!i) {
                        if (n.stateNode === null) throw Error(l(166));
                        return st(n), null
                    }
                    if (f = I.current, ds(n)) mp(n);
                    else {
                        var v = bo(ce.current);
                        switch (f) {
                            case 1:
                                f = v.createElementNS("http://www.w3.org/2000/svg", c);
                                break;
                            case 2:
                                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                break;
                            default:
                                switch (c) {
                                    case "svg":
                                        f = v.createElementNS("http://www.w3.org/2000/svg", c);
                                        break;
                                    case "math":
                                        f = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                        break;
                                    case "script":
                                        f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                                        break;
                                    case "select":
                                        f = typeof i.is == "string" ? v.createElement("select", {
                                            is: i.is
                                        }) : v.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                                        break;
                                    default:
                                        f = typeof i.is == "string" ? v.createElement(c, {
                                            is: i.is
                                        }) : v.createElement(c)
                                }
                        }
                        f[Ut] = n, f[Wt] = i;
                        e: for (v = n.child; v !== null;) {
                            if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
                            else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                                v.child.return = v, v = v.child;
                                continue
                            }
                            if (v === n) break e;
                            for (; v.sibling === null;) {
                                if (v.return === null || v.return === n) break e;
                                v = v.return
                            }
                            v.sibling.return = v.return, v = v.sibling
                        }
                        n.stateNode = f;
                        e: switch (Qt(f, c, i), c) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break e;
                            case "img":
                                i = !0;
                                break e;
                            default:
                                i = !1
                        }
                        i && ba(n)
                    }
                }
                return st(n), Wu(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, r), null;
            case 6:
                if (e && n.stateNode != null) e.memoizedProps !== i && ba(n);
                else {
                    if (typeof i != "string" && n.stateNode === null) throw Error(l(166));
                    if (e = ce.current, ds(n)) {
                        if (e = n.stateNode, r = n.memoizedProps, i = null, c = Lt, c !== null) switch (c.tag) {
                            case 27:
                            case 5:
                                i = c.memoizedProps
                        }
                        e[Ut] = n, e = !!(e.nodeValue === r || i !== null && i.suppressHydrationWarning === !0 || Mg(e.nodeValue, r)), e || La(n, !0)
                    } else e = bo(e).createTextNode(i), e[Ut] = n, n.stateNode = e
                }
                return st(n), null;
            case 31:
                if (r = n.memoizedState, e === null || e.memoizedState !== null) {
                    if (i = ds(n), r !== null) {
                        if (e === null) {
                            if (!i) throw Error(l(318));
                            if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
                            e[Ut] = n
                        } else Ar(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        st(n), e = !1
                    } else r = cu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
                    if (!e) return n.flags & 256 ? (pn(n), n) : (pn(n), null);
                    if ((n.flags & 128) !== 0) throw Error(l(558))
                }
                return st(n), null;
            case 13:
                if (i = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (c = ds(n), i !== null && i.dehydrated !== null) {
                        if (e === null) {
                            if (!c) throw Error(l(318));
                            if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(l(317));
                            c[Ut] = n
                        } else Ar(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        st(n), c = !1
                    } else c = cu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
                    if (!c) return n.flags & 256 ? (pn(n), n) : (pn(n), null)
                }
                return pn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = i !== null, e = e !== null && e.memoizedState !== null, r && (i = n.child, c = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (c = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== c && (i.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), ao(n, n.updateQueue), st(n), null);
            case 4:
                return Oe(), e === null && Sd(n.stateNode.containerInfo), st(n), null;
            case 10:
                return ma(n.type), st(n), null;
            case 19:
                if (P(mt), i = n.memoizedState, i === null) return st(n), null;
                if (c = (n.flags & 128) !== 0, f = i.rendering, f === null)
                    if (c) wi(i, !1);
                    else {
                        if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = n.child; e !== null;) {
                                if (f = Gl(e), f !== null) {
                                    for (n.flags |= 128, wi(i, !1), e = f.updateQueue, n.updateQueue = e, ao(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null;) up(r, e), r = r.sibling;
                                    return U(mt, mt.current & 1 | 2), ke && ha(n, i.treeForkCount), n.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null && ct() > oo && (n.flags |= 128, c = !0, wi(i, !1), n.lanes = 4194304)
                    }
                else {
                    if (!c)
                        if (e = Gl(f), e !== null) {
                            if (n.flags |= 128, c = !0, e = e.updateQueue, n.updateQueue = e, ao(n, e), wi(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ke) return st(n), null
                        } else 2 * ct() - i.renderingStartTime > oo && r !== 536870912 && (n.flags |= 128, c = !0, wi(i, !1), n.lanes = 4194304);
                    i.isBackwards ? (f.sibling = n.child, n.child = f) : (e = i.last, e !== null ? e.sibling = f : n.child = f, i.last = f)
                }
                return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = ct(), e.sibling = null, r = mt.current, U(mt, c ? r & 1 | 2 : r & 1), ke && ha(n, i.treeForkCount), e) : (st(n), null);
            case 22:
            case 23:
                return pn(n), wu(), i = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), r = n.updateQueue, r !== null && ao(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== r && (n.flags |= 2048), e !== null && P(jr), null;
            case 24:
                return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), ma(bt), st(n), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(l(156, n.tag))
    }

    function N1(e, n) {
        switch (lu(n), n.tag) {
            case 1:
                return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 3:
                return ma(bt), Oe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
            case 26:
            case 27:
            case 5:
                return it(n), null;
            case 31:
                if (n.memoizedState !== null) {
                    if (pn(n), n.alternate === null) throw Error(l(340));
                    Ar()
                }
                return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 13:
                if (pn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                    if (n.alternate === null) throw Error(l(340));
                    Ar()
                }
                return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 19:
                return P(mt), null;
            case 4:
                return Oe(), null;
            case 10:
                return ma(n.type), null;
            case 22:
            case 23:
                return pn(n), wu(), e !== null && P(jr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 24:
                return ma(bt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Um(e, n) {
        switch (lu(n), n.tag) {
            case 3:
                ma(bt), Oe();
                break;
            case 26:
            case 27:
            case 5:
                it(n);
                break;
            case 4:
                Oe();
                break;
            case 31:
                n.memoizedState !== null && pn(n);
                break;
            case 13:
                pn(n);
                break;
            case 19:
                P(mt);
                break;
            case 10:
                ma(n.type);
                break;
            case 22:
            case 23:
                pn(n), wu(), e !== null && P(jr);
                break;
            case 24:
                ma(bt)
        }
    }

    function Ei(e, n) {
        try {
            var r = n.updateQueue,
                i = r !== null ? r.lastEffect : null;
            if (i !== null) {
                var c = i.next;
                r = c;
                do {
                    if ((r.tag & e) === e) {
                        i = void 0;
                        var f = r.create,
                            v = r.inst;
                        i = f(), v.destroy = i
                    }
                    r = r.next
                } while (r !== c)
            }
        } catch (w) {
            Ze(n, n.return, w)
        }
    }

    function Va(e, n, r) {
        try {
            var i = n.updateQueue,
                c = i !== null ? i.lastEffect : null;
            if (c !== null) {
                var f = c.next;
                i = f;
                do {
                    if ((i.tag & e) === e) {
                        var v = i.inst,
                            w = v.destroy;
                        if (w !== void 0) {
                            v.destroy = void 0, c = n;
                            var D = r,
                                Q = w;
                            try {
                                Q()
                            } catch (J) {
                                Ze(c, D, J)
                            }
                        }
                    }
                    i = i.next
                } while (i !== f)
            }
        } catch (J) {
            Ze(n, n.return, J)
        }
    }

    function Lm(e) {
        var n = e.updateQueue;
        if (n !== null) {
            var r = e.stateNode;
            try {
                jp(n, r)
            } catch (i) {
                Ze(e, e.return, i)
            }
        }
    }

    function Bm(e, n, r) {
        r.props = Nr(e.type, e.memoizedProps), r.state = e.memoizedState;
        try {
            r.componentWillUnmount()
        } catch (i) {
            Ze(e, n, i)
        }
    }

    function Oi(e, n) {
        try {
            var r = e.ref;
            if (r !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var i = e.stateNode;
                        break;
                    case 30:
                        i = e.stateNode;
                        break;
                    default:
                        i = e.stateNode
                }
                typeof r == "function" ? e.refCleanup = r(i) : r.current = i
            }
        } catch (c) {
            Ze(e, n, c)
        }
    }

    function Wn(e, n) {
        var r = e.ref,
            i = e.refCleanup;
        if (r !== null)
            if (typeof i == "function") try {
                i()
            } catch (c) {
                Ze(e, n, c)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof r == "function") try {
                r(null)
            } catch (c) {
                Ze(e, n, c)
            } else r.current = null
    }

    function qm(e) {
        var n = e.type,
            r = e.memoizedProps,
            i = e.stateNode;
        try {
            e: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    r.autoFocus && i.focus();
                    break e;
                case "img":
                    r.src ? i.src = r.src : r.srcSet && (i.srcset = r.srcSet)
            }
        }
        catch (c) {
            Ze(e, e.return, c)
        }
    }

    function ed(e, n, r) {
        try {
            var i = e.stateNode;
            tS(i, e.type, r, n), i[Wt] = n
        } catch (c) {
            Ze(e, e.return, c)
        }
    }

    function Qm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ja(e.type) || e.tag === 4
    }

    function td(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Qm(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Ja(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function nd(e, n, r) {
        var i = e.tag;
        if (i === 5 || i === 6) e = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(e), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = ua));
        else if (i !== 4 && (i === 27 && Ja(e.type) && (r = e.stateNode, n = null), e = e.child, e !== null))
            for (nd(e, n, r), e = e.sibling; e !== null;) nd(e, n, r), e = e.sibling
    }

    function ro(e, n, r) {
        var i = e.tag;
        if (i === 5 || i === 6) e = e.stateNode, n ? r.insertBefore(e, n) : r.appendChild(e);
        else if (i !== 4 && (i === 27 && Ja(e.type) && (r = e.stateNode), e = e.child, e !== null))
            for (ro(e, n, r), e = e.sibling; e !== null;) ro(e, n, r), e = e.sibling
    }

    function Pm(e) {
        var n = e.stateNode,
            r = e.memoizedProps;
        try {
            for (var i = e.type, c = n.attributes; c.length;) n.removeAttributeNode(c[0]);
            Qt(n, i, r), n[Ut] = e, n[Wt] = r
        } catch (f) {
            Ze(e, e.return, f)
        }
    }
    var xa = !1,
        wt = !1,
        ad = !1,
        Ym = typeof WeakSet == "function" ? WeakSet : Set,
        _t = null;

    function H1(e, n) {
        if (e = e.containerInfo, Od = To, e = tp(e), $c(e)) {
            if ("selectionStart" in e) var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var i = r.getSelection && r.getSelection();
                if (i && i.rangeCount !== 0) {
                    r = i.anchorNode;
                    var c = i.anchorOffset,
                        f = i.focusNode;
                    i = i.focusOffset;
                    try {
                        r.nodeType, f.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var v = 0,
                        w = -1,
                        D = -1,
                        Q = 0,
                        J = 0,
                        ee = e,
                        V = null;
                    t: for (;;) {
                        for (var X; ee !== r || c !== 0 && ee.nodeType !== 3 || (w = v + c), ee !== f || i !== 0 && ee.nodeType !== 3 || (D = v + i), ee.nodeType === 3 && (v += ee.nodeValue.length), (X = ee.firstChild) !== null;) V = ee, ee = X;
                        for (;;) {
                            if (ee === e) break t;
                            if (V === r && ++Q === c && (w = v), V === f && ++J === i && (D = v), (X = ee.nextSibling) !== null) break;
                            ee = V, V = ee.parentNode
                        }
                        ee = X
                    }
                    r = w === -1 || D === -1 ? null : {
                        start: w,
                        end: D
                    }
                } else r = null
            }
            r = r || {
                start: 0,
                end: 0
            }
        } else r = null;
        for (Ad = {
                focusedElem: e,
                selectionRange: r
            }, To = !1, _t = n; _t !== null;)
            if (n = _t, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _t = e;
            else
                for (; _t !== null;) {
                    switch (n = _t, f = n.alternate, e = n.flags, n.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = n.updateQueue, e = e !== null ? e.events : null, e !== null))
                                for (r = 0; r < e.length; r++) c = e[r], c.ref.impl = c.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && f !== null) {
                                e = void 0, r = n, c = f.memoizedProps, f = f.memoizedState, i = r.stateNode;
                                try {
                                    var he = Nr(r.type, c);
                                    e = i.getSnapshotBeforeUpdate(he, f), i.__reactInternalSnapshotBeforeUpdate = e
                                } catch (we) {
                                    Ze(r, r.return, we)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = n.stateNode.containerInfo, r = e.nodeType, r === 9) jd(e);
                                else if (r === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        jd(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(l(163))
                    }
                    if (e = n.sibling, e !== null) {
                        e.return = n.return, _t = e;
                        break
                    }
                    _t = n.return
                }
    }

    function Gm(e, n, r) {
        var i = r.flags;
        switch (r.tag) {
            case 0:
            case 11:
            case 15:
                wa(e, r), i & 4 && Ei(5, r);
                break;
            case 1:
                if (wa(e, r), i & 4)
                    if (e = r.stateNode, n === null) try {
                        e.componentDidMount()
                    } catch (v) {
                        Ze(r, r.return, v)
                    } else {
                        var c = Nr(r.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (v) {
                            Ze(r, r.return, v)
                        }
                    }
                i & 64 && Lm(r), i & 512 && Oi(r, r.return);
                break;
            case 3:
                if (wa(e, r), i & 64 && (e = r.updateQueue, e !== null)) {
                    if (n = null, r.child !== null) switch (r.child.tag) {
                        case 27:
                        case 5:
                            n = r.child.stateNode;
                            break;
                        case 1:
                            n = r.child.stateNode
                    }
                    try {
                        jp(e, n)
                    } catch (v) {
                        Ze(r, r.return, v)
                    }
                }
                break;
            case 27:
                n === null && i & 4 && Pm(r);
            case 26:
            case 5:
                wa(e, r), n === null && i & 4 && qm(r), i & 512 && Oi(r, r.return);
                break;
            case 12:
                wa(e, r);
                break;
            case 31:
                wa(e, r), i & 4 && Xm(e, r);
                break;
            case 13:
                wa(e, r), i & 4 && Zm(e, r), i & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = Y1.bind(null, r), cS(e, r))));
                break;
            case 22:
                if (i = r.memoizedState !== null || xa, !i) {
                    n = n !== null && n.memoizedState !== null || wt, c = xa;
                    var f = wt;
                    xa = i, (wt = n) && !f ? Ea(e, r, (r.subtreeFlags & 8772) !== 0) : wa(e, r), xa = c, wt = f
                }
                break;
            case 30:
                break;
            default:
                wa(e, r)
        }
    }

    function Vm(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, Vm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Nc(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var ot = null,
        tn = !1;

    function Sa(e, n, r) {
        for (r = r.child; r !== null;) Km(e, n, r), r = r.sibling
    }

    function Km(e, n, r) {
        if (Ot && typeof Ot.onCommitFiberUnmount == "function") try {
            Ot.onCommitFiberUnmount(qn, r)
        } catch {}
        switch (r.tag) {
            case 26:
                wt || Wn(r, n), Sa(e, n, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
                break;
            case 27:
                wt || Wn(r, n);
                var i = ot,
                    c = tn;
                Ja(r.type) && (ot = r.stateNode, tn = !1), Sa(e, n, r), Ni(r.stateNode), ot = i, tn = c;
                break;
            case 5:
                wt || Wn(r, n);
            case 6:
                if (i = ot, c = tn, ot = null, Sa(e, n, r), ot = i, tn = c, ot !== null)
                    if (tn) try {
                        (ot.nodeType === 9 ? ot.body : ot.nodeName === "HTML" ? ot.ownerDocument.body : ot).removeChild(r.stateNode)
                    } catch (f) {
                        Ze(r, n, f)
                    } else try {
                        ot.removeChild(r.stateNode)
                    } catch (f) {
                        Ze(r, n, f)
                    }
                break;
            case 18:
                ot !== null && (tn ? (e = ot, Lg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, r.stateNode), Ms(e)) : Lg(ot, r.stateNode));
                break;
            case 4:
                i = ot, c = tn, ot = r.stateNode.containerInfo, tn = !0, Sa(e, n, r), ot = i, tn = c;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Va(2, r, n), wt || Va(4, r, n), Sa(e, n, r);
                break;
            case 1:
                wt || (Wn(r, n), i = r.stateNode, typeof i.componentWillUnmount == "function" && Bm(r, n, i)), Sa(e, n, r);
                break;
            case 21:
                Sa(e, n, r);
                break;
            case 22:
                wt = (i = wt) || r.memoizedState !== null, Sa(e, n, r), wt = i;
                break;
            default:
                Sa(e, n, r)
        }
    }

    function Xm(e, n) {
        if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
                Ms(e)
            } catch (r) {
                Ze(n, n.return, r)
            }
        }
    }

    function Zm(e, n) {
        if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            Ms(e)
        } catch (r) {
            Ze(n, n.return, r)
        }
    }

    function z1(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var n = e.stateNode;
                return n === null && (n = e.stateNode = new Ym), n;
            case 22:
                return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Ym), n;
            default:
                throw Error(l(435, e.tag))
        }
    }

    function so(e, n) {
        var r = z1(e);
        n.forEach(function(i) {
            if (!r.has(i)) {
                r.add(i);
                var c = G1.bind(null, e, i);
                i.then(c, c)
            }
        })
    }

    function nn(e, n) {
        var r = n.deletions;
        if (r !== null)
            for (var i = 0; i < r.length; i++) {
                var c = r[i],
                    f = e,
                    v = n,
                    w = v;
                e: for (; w !== null;) {
                    switch (w.tag) {
                        case 27:
                            if (Ja(w.type)) {
                                ot = w.stateNode, tn = !1;
                                break e
                            }
                            break;
                        case 5:
                            ot = w.stateNode, tn = !1;
                            break e;
                        case 3:
                        case 4:
                            ot = w.stateNode.containerInfo, tn = !0;
                            break e
                    }
                    w = w.return
                }
                if (ot === null) throw Error(l(160));
                Km(f, v, c), ot = null, tn = !1, f = c.alternate, f !== null && (f.return = null), c.return = null
            }
        if (n.subtreeFlags & 13886)
            for (n = n.child; n !== null;) Im(n, e), n = n.sibling
    }
    var Pn = null;

    function Im(e, n) {
        var r = e.alternate,
            i = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                nn(n, e), an(e), i & 4 && (Va(3, e, e.return), Ei(3, e), Va(5, e, e.return));
                break;
            case 1:
                nn(n, e), an(e), i & 512 && (wt || r === null || Wn(r, r.return)), i & 64 && xa && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? i : r.concat(i))));
                break;
            case 26:
                var c = Pn;
                if (nn(n, e), an(e), i & 512 && (wt || r === null || Wn(r, r.return)), i & 4) {
                    var f = r !== null ? r.memoizedState : null;
                    if (i = e.memoizedState, r === null)
                        if (i === null)
                            if (e.stateNode === null) {
                                e: {
                                    i = e.type,
                                    r = e.memoizedProps,
                                    c = c.ownerDocument || c;t: switch (i) {
                                        case "title":
                                            f = c.getElementsByTagName("title")[0], (!f || f[Fs] || f[Ut] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(i), c.head.insertBefore(f, c.querySelector("head > title"))), Qt(f, i, r), f[Ut] = e, Dt(f), i = f;
                                            break e;
                                        case "link":
                                            var v = Ig("link", "href", c).get(i + (r.href || ""));
                                            if (v) {
                                                for (var w = 0; w < v.length; w++)
                                                    if (f = v[w], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                                                        v.splice(w, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(i), Qt(f, i, r), c.head.appendChild(f);
                                            break;
                                        case "meta":
                                            if (v = Ig("meta", "content", c).get(i + (r.content || ""))) {
                                                for (w = 0; w < v.length; w++)
                                                    if (f = v[w], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                                                        v.splice(w, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(i), Qt(f, i, r), c.head.appendChild(f);
                                            break;
                                        default:
                                            throw Error(l(468, i))
                                    }
                                    f[Ut] = e,
                                    Dt(f),
                                    i = f
                                }
                                e.stateNode = i
                            }
                    else $g(c, e.type, e.stateNode);
                    else e.stateNode = Zg(c, i, e.memoizedProps);
                    else f !== i ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, i === null ? $g(c, e.type, e.stateNode) : Zg(c, i, e.memoizedProps)) : i === null && e.stateNode !== null && ed(e, e.memoizedProps, r.memoizedProps)
                }
                break;
            case 27:
                nn(n, e), an(e), i & 512 && (wt || r === null || Wn(r, r.return)), r !== null && i & 4 && ed(e, e.memoizedProps, r.memoizedProps);
                break;
            case 5:
                if (nn(n, e), an(e), i & 512 && (wt || r === null || Wn(r, r.return)), e.flags & 32) {
                    c = e.stateNode;
                    try {
                        ts(c, "")
                    } catch (he) {
                        Ze(e, e.return, he)
                    }
                }
                i & 4 && e.stateNode != null && (c = e.memoizedProps, ed(e, c, r !== null ? r.memoizedProps : c)), i & 1024 && (ad = !0);
                break;
            case 6:
                if (nn(n, e), an(e), i & 4) {
                    if (e.stateNode === null) throw Error(l(162));
                    i = e.memoizedProps, r = e.stateNode;
                    try {
                        r.nodeValue = i
                    } catch (he) {
                        Ze(e, e.return, he)
                    }
                }
                break;
            case 3:
                if (wo = null, c = Pn, Pn = xo(n.containerInfo), nn(n, e), Pn = c, an(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
                    Ms(n.containerInfo)
                } catch (he) {
                    Ze(e, e.return, he)
                }
                ad && (ad = !1, $m(e));
                break;
            case 4:
                i = Pn, Pn = xo(e.stateNode.containerInfo), nn(n, e), an(e), Pn = i;
                break;
            case 12:
                nn(n, e), an(e);
                break;
            case 31:
                nn(n, e), an(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, so(e, i)));
                break;
            case 13:
                nn(n, e), an(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (lo = ct()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, so(e, i)));
                break;
            case 22:
                c = e.memoizedState !== null;
                var D = r !== null && r.memoizedState !== null,
                    Q = xa,
                    J = wt;
                if (xa = Q || c, wt = J || D, nn(n, e), wt = J, xa = Q, an(e), i & 8192) e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (r === null || D || xa || wt || Hr(e)), r = null, n = e;;) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (r === null) {
                            D = r = n;
                            try {
                                if (f = D.stateNode, c) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                                else {
                                    w = D.stateNode;
                                    var ee = D.memoizedProps.style,
                                        V = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                                    w.style.display = V == null || typeof V == "boolean" ? "" : ("" + V).trim()
                                }
                            } catch (he) {
                                Ze(D, D.return, he)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (r === null) {
                            D = n;
                            try {
                                D.stateNode.nodeValue = c ? "" : D.memoizedProps
                            } catch (he) {
                                Ze(D, D.return, he)
                            }
                        }
                    } else if (n.tag === 18) {
                        if (r === null) {
                            D = n;
                            try {
                                var X = D.stateNode;
                                c ? Bg(X, !0) : Bg(D.stateNode, !1)
                            } catch (he) {
                                Ze(D, D.return, he)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break e;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === e) break e;
                        r === n && (r = null), n = n.return
                    }
                    r === n && (r = null), n.sibling.return = n.return, n = n.sibling
                }
                i & 4 && (i = e.updateQueue, i !== null && (r = i.retryQueue, r !== null && (i.retryQueue = null, so(e, r))));
                break;
            case 19:
                nn(n, e), an(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, so(e, i)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                nn(n, e), an(e)
        }
    }

    function an(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                for (var r, i = e.return; i !== null;) {
                    if (Qm(i)) {
                        r = i;
                        break
                    }
                    i = i.return
                }
                if (r == null) throw Error(l(160));
                switch (r.tag) {
                    case 27:
                        var c = r.stateNode,
                            f = td(e);
                        ro(e, f, c);
                        break;
                    case 5:
                        var v = r.stateNode;
                        r.flags & 32 && (ts(v, ""), r.flags &= -33);
                        var w = td(e);
                        ro(e, w, v);
                        break;
                    case 3:
                    case 4:
                        var D = r.stateNode.containerInfo,
                            Q = td(e);
                        nd(e, Q, D);
                        break;
                    default:
                        throw Error(l(161))
                }
            } catch (J) {
                Ze(e, e.return, J)
            }
            e.flags &= -3
        }
        n & 4096 && (e.flags &= -4097)
    }

    function $m(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var n = e;
                $m(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling
            }
    }

    function wa(e, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;) Gm(e, n.alternate, n), n = n.sibling
    }

    function Hr(e) {
        for (e = e.child; e !== null;) {
            var n = e;
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Va(4, n, n.return), Hr(n);
                    break;
                case 1:
                    Wn(n, n.return);
                    var r = n.stateNode;
                    typeof r.componentWillUnmount == "function" && Bm(n, n.return, r), Hr(n);
                    break;
                case 27:
                    Ni(n.stateNode);
                case 26:
                case 5:
                    Wn(n, n.return), Hr(n);
                    break;
                case 22:
                    n.memoizedState === null && Hr(n);
                    break;
                case 30:
                    Hr(n);
                    break;
                default:
                    Hr(n)
            }
            e = e.sibling
        }
    }

    function Ea(e, n, r) {
        for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
            var i = n.alternate,
                c = e,
                f = n,
                v = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Ea(c, f, r), Ei(4, f);
                    break;
                case 1:
                    if (Ea(c, f, r), i = f, c = i.stateNode, typeof c.componentDidMount == "function") try {
                        c.componentDidMount()
                    } catch (Q) {
                        Ze(i, i.return, Q)
                    }
                    if (i = f, c = i.updateQueue, c !== null) {
                        var w = i.stateNode;
                        try {
                            var D = c.shared.hiddenCallbacks;
                            if (D !== null)
                                for (c.shared.hiddenCallbacks = null, c = 0; c < D.length; c++) Cp(D[c], w)
                        } catch (Q) {
                            Ze(i, i.return, Q)
                        }
                    }
                    r && v & 64 && Lm(f), Oi(f, f.return);
                    break;
                case 27:
                    Pm(f);
                case 26:
                case 5:
                    Ea(c, f, r), r && i === null && v & 4 && qm(f), Oi(f, f.return);
                    break;
                case 12:
                    Ea(c, f, r);
                    break;
                case 31:
                    Ea(c, f, r), r && v & 4 && Xm(c, f);
                    break;
                case 13:
                    Ea(c, f, r), r && v & 4 && Zm(c, f);
                    break;
                case 22:
                    f.memoizedState === null && Ea(c, f, r), Oi(f, f.return);
                    break;
                case 30:
                    break;
                default:
                    Ea(c, f, r)
            }
            n = n.sibling
        }
    }

    function rd(e, n) {
        var r = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && ui(r))
    }

    function sd(e, n) {
        e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ui(e))
    }

    function Yn(e, n, r, i) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) Fm(e, n, r, i), n = n.sibling
    }

    function Fm(e, n, r, i) {
        var c = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Yn(e, n, r, i), c & 2048 && Ei(9, n);
                break;
            case 1:
                Yn(e, n, r, i);
                break;
            case 3:
                Yn(e, n, r, i), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ui(e)));
                break;
            case 12:
                if (c & 2048) {
                    Yn(e, n, r, i), e = n.stateNode;
                    try {
                        var f = n.memoizedProps,
                            v = f.id,
                            w = f.onPostCommit;
                        typeof w == "function" && w(v, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (D) {
                        Ze(n, n.return, D)
                    }
                } else Yn(e, n, r, i);
                break;
            case 31:
                Yn(e, n, r, i);
                break;
            case 13:
                Yn(e, n, r, i);
                break;
            case 23:
                break;
            case 22:
                f = n.stateNode, v = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? Yn(e, n, r, i) : Ai(e, n) : f._visibility & 2 ? Yn(e, n, r, i) : (f._visibility |= 2, Ss(e, n, r, i, (n.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && rd(v, n);
                break;
            case 24:
                Yn(e, n, r, i), c & 2048 && sd(n.alternate, n);
                break;
            default:
                Yn(e, n, r, i)
        }
    }

    function Ss(e, n, r, i, c) {
        for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
            var f = e,
                v = n,
                w = r,
                D = i,
                Q = v.flags;
            switch (v.tag) {
                case 0:
                case 11:
                case 15:
                    Ss(f, v, w, D, c), Ei(8, v);
                    break;
                case 23:
                    break;
                case 22:
                    var J = v.stateNode;
                    v.memoizedState !== null ? J._visibility & 2 ? Ss(f, v, w, D, c) : Ai(f, v) : (J._visibility |= 2, Ss(f, v, w, D, c)), c && Q & 2048 && rd(v.alternate, v);
                    break;
                case 24:
                    Ss(f, v, w, D, c), c && Q & 2048 && sd(v.alternate, v);
                    break;
                default:
                    Ss(f, v, w, D, c)
            }
            n = n.sibling
        }
    }

    function Ai(e, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) {
                var r = e,
                    i = n,
                    c = i.flags;
                switch (i.tag) {
                    case 22:
                        Ai(r, i), c & 2048 && rd(i.alternate, i);
                        break;
                    case 24:
                        Ai(r, i), c & 2048 && sd(i.alternate, i);
                        break;
                    default:
                        Ai(r, i)
                }
                n = n.sibling
            }
    }
    var Ti = 8192;

    function ws(e, n, r) {
        if (e.subtreeFlags & Ti)
            for (e = e.child; e !== null;) Jm(e, n, r), e = e.sibling
    }

    function Jm(e, n, r) {
        switch (e.tag) {
            case 26:
                ws(e, n, r), e.flags & Ti && e.memoizedState !== null && SS(r, Pn, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                ws(e, n, r);
                break;
            case 3:
            case 4:
                var i = Pn;
                Pn = xo(e.stateNode.containerInfo), ws(e, n, r), Pn = i;
                break;
            case 22:
                e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Ti, Ti = 16777216, ws(e, n, r), Ti = i) : ws(e, n, r));
                break;
            default:
                ws(e, n, r)
        }
    }

    function Wm(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child, e !== null)) {
            n.child = null;
            do n = e.sibling, e.sibling = null, e = n; while (e !== null)
        }
    }

    function Ci(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    _t = i, tg(i, e)
                }
            Wm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) eg(e), e = e.sibling
    }

    function eg(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ci(e), e.flags & 2048 && Va(9, e, e.return);
                break;
            case 3:
                Ci(e);
                break;
            case 12:
                Ci(e);
                break;
            case 22:
                var n = e.stateNode;
                e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, io(e)) : Ci(e);
                break;
            default:
                Ci(e)
        }
    }

    function io(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    _t = i, tg(i, e)
                }
            Wm(e)
        }
        for (e = e.child; e !== null;) {
            switch (n = e, n.tag) {
                case 0:
                case 11:
                case 15:
                    Va(8, n, n.return), io(n);
                    break;
                case 22:
                    r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, io(n));
                    break;
                default:
                    io(n)
            }
            e = e.sibling
        }
    }

    function tg(e, n) {
        for (; _t !== null;) {
            var r = _t;
            switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    Va(8, r, n);
                    break;
                case 23:
                case 22:
                    if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
                        var i = r.memoizedState.cachePool.pool;
                        i != null && i.refCount++
                    }
                    break;
                case 24:
                    ui(r.memoizedState.cache)
            }
            if (i = r.child, i !== null) i.return = r, _t = i;
            else e: for (r = e; _t !== null;) {
                i = _t;
                var c = i.sibling,
                    f = i.return;
                if (Vm(i), i === r) {
                    _t = null;
                    break e
                }
                if (c !== null) {
                    c.return = f, _t = c;
                    break e
                }
                _t = f
            }
        }
    }
    var k1 = {
            getCacheForType: function(e) {
                var n = Bt(bt),
                    r = n.data.get(e);
                return r === void 0 && (r = e(), n.data.set(e, r)), r
            },
            cacheSignal: function() {
                return Bt(bt).controller.signal
            }
        },
        U1 = typeof WeakMap == "function" ? WeakMap : Map,
        Ye = 0,
        We = null,
        Me = null,
        He = 0,
        Xe = 0,
        mn = null,
        Ka = !1,
        Es = !1,
        id = !1,
        Oa = 0,
        ft = 0,
        Xa = 0,
        zr = 0,
        ld = 0,
        gn = 0,
        Os = 0,
        ji = null,
        rn = null,
        od = !1,
        lo = 0,
        ng = 0,
        oo = 1 / 0,
        co = null,
        Za = null,
        Tt = 0,
        Ia = null,
        As = null,
        Aa = 0,
        cd = 0,
        ud = null,
        ag = null,
        Ri = 0,
        dd = null;

    function yn() {
        return (Ye & 2) !== 0 && He !== 0 ? He & -He : j.T !== null ? yd() : Tn()
    }

    function rg() {
        if (gn === 0)
            if ((He & 536870912) === 0 || ke) {
                var e = Re;
                Re <<= 1, (Re & 3932160) === 0 && (Re = 262144), gn = e
            } else gn = 536870912;
        return e = hn.current, e !== null && (e.flags |= 32), gn
    }

    function sn(e, n, r) {
        (e === We && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Ts(e, 0), $a(e, He, gn, !1)), Ke(e, r), ((Ye & 2) === 0 || e !== We) && (e === We && ((Ye & 2) === 0 && (zr |= r), ft === 4 && $a(e, He, gn, !1)), ea(e))
    }

    function sg(e, n, r) {
        if ((Ye & 6) !== 0) throw Error(l(327));
        var i = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || _e(e, n),
            c = i ? q1(e, n) : hd(e, n, !0),
            f = i;
        do {
            if (c === 0) {
                Es && !i && $a(e, n, 0, !1);
                break
            } else {
                if (r = e.current.alternate, f && !L1(r)) {
                    c = hd(e, n, !1), f = !1;
                    continue
                }
                if (c === 2) {
                    if (f = n, e.errorRecoveryDisabledLanes & f) var v = 0;
                    else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
                    if (v !== 0) {
                        n = v;
                        e: {
                            var w = e;c = ji;
                            var D = w.current.memoizedState.isDehydrated;
                            if (D && (Ts(w, v).flags |= 256), v = hd(w, v, !1), v !== 2) {
                                if (id && !D) {
                                    w.errorRecoveryDisabledLanes |= f, zr |= f, c = 4;
                                    break e
                                }
                                f = rn, rn = c, f !== null && (rn === null ? rn = f : rn.push.apply(rn, f))
                            }
                            c = v
                        }
                        if (f = !1, c !== 2) continue
                    }
                }
                if (c === 1) {
                    Ts(e, 0), $a(e, n, 0, !0);
                    break
                }
                e: {
                    switch (i = e, f = c, f) {
                        case 0:
                        case 1:
                            throw Error(l(345));
                        case 4:
                            if ((n & 4194048) !== n) break;
                        case 6:
                            $a(i, n, gn, !Ka);
                            break e;
                        case 2:
                            rn = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(l(329))
                    }
                    if ((n & 62914560) === n && (c = lo + 300 - ct(), 10 < c)) {
                        if ($a(i, n, gn, !Ka), ge(i, 0, !0) !== 0) break e;
                        Aa = n, i.timeoutHandle = kg(ig.bind(null, i, r, rn, co, od, n, gn, zr, Os, Ka, f, "Throttled", -0, 0), c);
                        break e
                    }
                    ig(i, r, rn, co, od, n, gn, zr, Os, Ka, f, null, -0, 0)
                }
            }
            break
        } while (!0);
        ea(e)
    }

    function ig(e, n, r, i, c, f, v, w, D, Q, J, ee, V, X) {
        if (e.timeoutHandle = -1, ee = n.subtreeFlags, ee & 8192 || (ee & 16785408) === 16785408) {
            ee = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: ua
            }, Jm(n, f, ee);
            var he = (f & 62914560) === f ? lo - ct() : (f & 4194048) === f ? ng - ct() : 0;
            if (he = wS(ee, he), he !== null) {
                Aa = f, e.cancelPendingCommit = he(pg.bind(null, e, n, f, r, i, c, v, w, D, J, ee, null, V, X)), $a(e, f, v, !Q);
                return
            }
        }
        pg(e, n, f, r, i, c, v, w, D)
    }

    function L1(e) {
        for (var n = e;;) {
            var r = n.tag;
            if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
                for (var i = 0; i < r.length; i++) {
                    var c = r[i],
                        f = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!dn(f(), c)) return !1
                    } catch {
                        return !1
                    }
                }
            if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
            else {
                if (n === e) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === e) return !0;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }
        return !0
    }

    function $a(e, n, r, i) {
        n &= ~ld, n &= ~zr, e.suspendedLanes |= n, e.pingedLanes &= ~n, i && (e.warmLanes |= n), i = e.expirationTimes;
        for (var c = n; 0 < c;) {
            var f = 31 - pt(c),
                v = 1 << f;
            i[f] = -1, c &= ~v
        }
        r !== 0 && Pt(e, r, n)
    }

    function uo() {
        return (Ye & 6) === 0 ? (Di(0), !1) : !0
    }

    function fd() {
        if (Me !== null) {
            if (Xe === 0) var e = Me.return;
            else e = Me, pa = Tr = null, ju(e), gs = null, fi = 0, e = Me;
            for (; e !== null;) Um(e.alternate, e), e = e.return;
            Me = null
        }
    }

    function Ts(e, n) {
        var r = e.timeoutHandle;
        r !== -1 && (e.timeoutHandle = -1, rS(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Aa = 0, fd(), We = e, Me = r = fa(e.current, null), He = n, Xe = 0, mn = null, Ka = !1, Es = _e(e, n), id = !1, Os = gn = ld = zr = Xa = ft = 0, rn = ji = null, od = !1, (n & 8) !== 0 && (n |= n & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements, i &= n; 0 < i;) {
                var c = 31 - pt(i),
                    f = 1 << c;
                n |= e[c], i &= ~f
            }
        return Oa = n, _l(), r
    }

    function lg(e, n) {
        Te = null, j.H = xi, n === ms || n === Bl ? (n = Ep(), Xe = 3) : n === gu ? (n = Ep(), Xe = 4) : Xe = n === Gu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, mn = n, Me === null && (ft = 1, Wl(e, _n(n, e.current)))
    }

    function og() {
        var e = hn.current;
        return e === null ? !0 : (He & 4194048) === He ? zn === null : (He & 62914560) === He || (He & 536870912) !== 0 ? e === zn : !1
    }

    function cg() {
        var e = j.H;
        return j.H = xi, e === null ? xi : e
    }

    function ug() {
        var e = j.A;
        return j.A = k1, e
    }

    function fo() {
        ft = 4, Ka || (He & 4194048) !== He && hn.current !== null || (Es = !0), (Xa & 134217727) === 0 && (zr & 134217727) === 0 || We === null || $a(We, He, gn, !1)
    }

    function hd(e, n, r) {
        var i = Ye;
        Ye |= 2;
        var c = cg(),
            f = ug();
        (We !== e || He !== n) && (co = null, Ts(e, n)), n = !1;
        var v = ft;
        e: do try {
                if (Xe !== 0 && Me !== null) {
                    var w = Me,
                        D = mn;
                    switch (Xe) {
                        case 8:
                            fd(), v = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            hn.current === null && (n = !0);
                            var Q = Xe;
                            if (Xe = 0, mn = null, Cs(e, w, D, Q), r && Es) {
                                v = 0;
                                break e
                            }
                            break;
                        default:
                            Q = Xe, Xe = 0, mn = null, Cs(e, w, D, Q)
                    }
                }
                B1(), v = ft;
                break
            } catch (J) {
                lg(e, J)
            }
            while (!0);
            return n && e.shellSuspendCounter++, pa = Tr = null, Ye = i, j.H = c, j.A = f, Me === null && (We = null, He = 0, _l()), v
    }

    function B1() {
        for (; Me !== null;) dg(Me)
    }

    function q1(e, n) {
        var r = Ye;
        Ye |= 2;
        var i = cg(),
            c = ug();
        We !== e || He !== n ? (co = null, oo = ct() + 500, Ts(e, n)) : Es = _e(e, n);
        e: do try {
                if (Xe !== 0 && Me !== null) {
                    n = Me;
                    var f = mn;
                    t: switch (Xe) {
                        case 1:
                            Xe = 0, mn = null, Cs(e, n, f, 1);
                            break;
                        case 2:
                        case 9:
                            if (Sp(f)) {
                                Xe = 0, mn = null, fg(n);
                                break
                            }
                            n = function() {
                                Xe !== 2 && Xe !== 9 || We !== e || (Xe = 7), ea(e)
                            }, f.then(n, n);
                            break e;
                        case 3:
                            Xe = 7;
                            break e;
                        case 4:
                            Xe = 5;
                            break e;
                        case 7:
                            Sp(f) ? (Xe = 0, mn = null, fg(n)) : (Xe = 0, mn = null, Cs(e, n, f, 7));
                            break;
                        case 5:
                            var v = null;
                            switch (Me.tag) {
                                case 26:
                                    v = Me.memoizedState;
                                case 5:
                                case 27:
                                    var w = Me;
                                    if (v ? Fg(v) : w.stateNode.complete) {
                                        Xe = 0, mn = null;
                                        var D = w.sibling;
                                        if (D !== null) Me = D;
                                        else {
                                            var Q = w.return;
                                            Q !== null ? (Me = Q, ho(Q)) : Me = null
                                        }
                                        break t
                                    }
                            }
                            Xe = 0, mn = null, Cs(e, n, f, 5);
                            break;
                        case 6:
                            Xe = 0, mn = null, Cs(e, n, f, 6);
                            break;
                        case 8:
                            fd(), ft = 6;
                            break e;
                        default:
                            throw Error(l(462))
                    }
                }
                Q1();
                break
            } catch (J) {
                lg(e, J)
            }
            while (!0);
            return pa = Tr = null, j.H = i, j.A = c, Ye = r, Me !== null ? 0 : (We = null, He = 0, _l(), ft)
    }

    function Q1() {
        for (; Me !== null && !ut();) dg(Me)
    }

    function dg(e) {
        var n = zm(e.alternate, e, Oa);
        e.memoizedProps = e.pendingProps, n === null ? ho(e) : Me = n
    }

    function fg(e) {
        var n = e,
            r = n.alternate;
        switch (n.tag) {
            case 15:
            case 0:
                n = Rm(r, n, n.pendingProps, n.type, void 0, He);
                break;
            case 11:
                n = Rm(r, n, n.pendingProps, n.type.render, n.ref, He);
                break;
            case 5:
                ju(n);
            default:
                Um(r, n), n = Me = up(n, Oa), n = zm(r, n, Oa)
        }
        e.memoizedProps = e.pendingProps, n === null ? ho(e) : Me = n
    }

    function Cs(e, n, r, i) {
        pa = Tr = null, ju(n), gs = null, fi = 0;
        var c = n.return;
        try {
            if (R1(e, c, n, r, He)) {
                ft = 1, Wl(e, _n(r, e.current)), Me = null;
                return
            }
        } catch (f) {
            if (c !== null) throw Me = c, f;
            ft = 1, Wl(e, _n(r, e.current)), Me = null;
            return
        }
        n.flags & 32768 ? (ke || i === 1 ? e = !0 : Es || (He & 536870912) !== 0 ? e = !1 : (Ka = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = hn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), hg(n, e)) : ho(n)
    }

    function ho(e) {
        var n = e;
        do {
            if ((n.flags & 32768) !== 0) {
                hg(n, Ka);
                return
            }
            e = n.return;
            var r = M1(n.alternate, n, Oa);
            if (r !== null) {
                Me = r;
                return
            }
            if (n = n.sibling, n !== null) {
                Me = n;
                return
            }
            Me = n = e
        } while (n !== null);
        ft === 0 && (ft = 5)
    }

    function hg(e, n) {
        do {
            var r = N1(e.alternate, e);
            if (r !== null) {
                r.flags &= 32767, Me = r;
                return
            }
            if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
                Me = e;
                return
            }
            Me = e = r
        } while (e !== null);
        ft = 6, Me = null
    }

    function pg(e, n, r, i, c, f, v, w, D) {
        e.cancelPendingCommit = null;
        do po(); while (Tt !== 0);
        if ((Ye & 6) !== 0) throw Error(l(327));
        if (n !== null) {
            if (n === e.current) throw Error(l(177));
            if (f = n.lanes | n.childLanes, f |= tu, Le(e, r, f, v, w, D), e === We && (Me = We = null, He = 0), As = n, Ia = e, Aa = r, cd = f, ud = c, ag = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, V1(Ht, function() {
                    return bg(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
                i = j.T, j.T = null, c = H.p, H.p = 2, v = Ye, Ye |= 4;
                try {
                    H1(e, n, r)
                } finally {
                    Ye = v, H.p = c, j.T = i
                }
            }
            Tt = 1, mg(), gg(), yg()
        }
    }

    function mg() {
        if (Tt === 1) {
            Tt = 0;
            var e = Ia,
                n = As,
                r = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || r) {
                r = j.T, j.T = null;
                var i = H.p;
                H.p = 2;
                var c = Ye;
                Ye |= 4;
                try {
                    Im(n, e);
                    var f = Ad,
                        v = tp(e.containerInfo),
                        w = f.focusedElem,
                        D = f.selectionRange;
                    if (v !== w && w && w.ownerDocument && ep(w.ownerDocument.documentElement, w)) {
                        if (D !== null && $c(w)) {
                            var Q = D.start,
                                J = D.end;
                            if (J === void 0 && (J = Q), "selectionStart" in w) w.selectionStart = Q, w.selectionEnd = Math.min(J, w.value.length);
                            else {
                                var ee = w.ownerDocument || document,
                                    V = ee && ee.defaultView || window;
                                if (V.getSelection) {
                                    var X = V.getSelection(),
                                        he = w.textContent.length,
                                        we = Math.min(D.start, he),
                                        Fe = D.end === void 0 ? we : Math.min(D.end, he);
                                    !X.extend && we > Fe && (v = Fe, Fe = we, we = v);
                                    var k = Wh(w, we),
                                        M = Wh(w, Fe);
                                    if (k && M && (X.rangeCount !== 1 || X.anchorNode !== k.node || X.anchorOffset !== k.offset || X.focusNode !== M.node || X.focusOffset !== M.offset)) {
                                        var q = ee.createRange();
                                        q.setStart(k.node, k.offset), X.removeAllRanges(), we > Fe ? (X.addRange(q), X.extend(M.node, M.offset)) : (q.setEnd(M.node, M.offset), X.addRange(q))
                                    }
                                }
                            }
                        }
                        for (ee = [], X = w; X = X.parentNode;) X.nodeType === 1 && ee.push({
                            element: X,
                            left: X.scrollLeft,
                            top: X.scrollTop
                        });
                        for (typeof w.focus == "function" && w.focus(), w = 0; w < ee.length; w++) {
                            var W = ee[w];
                            W.element.scrollLeft = W.left, W.element.scrollTop = W.top
                        }
                    }
                    To = !!Od, Ad = Od = null
                } finally {
                    Ye = c, H.p = i, j.T = r
                }
            }
            e.current = n, Tt = 2
        }
    }

    function gg() {
        if (Tt === 2) {
            Tt = 0;
            var e = Ia,
                n = As,
                r = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || r) {
                r = j.T, j.T = null;
                var i = H.p;
                H.p = 2;
                var c = Ye;
                Ye |= 4;
                try {
                    Gm(e, n.alternate, n)
                } finally {
                    Ye = c, H.p = i, j.T = r
                }
            }
            Tt = 3
        }
    }

    function yg() {
        if (Tt === 4 || Tt === 3) {
            Tt = 0, on();
            var e = Ia,
                n = As,
                r = Aa,
                i = ag;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, As = Ia = null, vg(e, e.pendingLanes));
            var c = e.pendingLanes;
            if (c === 0 && (Za = null), kt(r), n = n.stateNode, Ot && typeof Ot.onCommitFiberRoot == "function") try {
                Ot.onCommitFiberRoot(qn, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
            if (i !== null) {
                n = j.T, c = H.p, H.p = 2, j.T = null;
                try {
                    for (var f = e.onRecoverableError, v = 0; v < i.length; v++) {
                        var w = i[v];
                        f(w.value, {
                            componentStack: w.stack
                        })
                    }
                } finally {
                    j.T = n, H.p = c
                }
            }(Aa & 3) !== 0 && po(), ea(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === dd ? Ri++ : (Ri = 0, dd = e) : Ri = 0, Di(0)
        }
    }

    function vg(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ui(n)))
    }

    function po() {
        return mg(), gg(), yg(), bg()
    }

    function bg() {
        if (Tt !== 5) return !1;
        var e = Ia,
            n = cd;
        cd = 0;
        var r = kt(Aa),
            i = j.T,
            c = H.p;
        try {
            H.p = 32 > r ? 32 : r, j.T = null, r = ud, ud = null;
            var f = Ia,
                v = Aa;
            if (Tt = 0, As = Ia = null, Aa = 0, (Ye & 6) !== 0) throw Error(l(331));
            var w = Ye;
            if (Ye |= 4, eg(f.current), Fm(f, f.current, v, r), Ye = w, Di(0, !1), Ot && typeof Ot.onPostCommitFiberRoot == "function") try {
                Ot.onPostCommitFiberRoot(qn, f)
            } catch {}
            return !0
        } finally {
            H.p = c, j.T = i, vg(e, n)
        }
    }

    function xg(e, n, r) {
        n = _n(r, n), n = Yu(e.stateNode, n, 2), e = Pa(e, n, 2), e !== null && (Ke(e, 2), ea(e))
    }

    function Ze(e, n, r) {
        if (e.tag === 3) xg(e, e, r);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    xg(n, e, r);
                    break
                } else if (n.tag === 1) {
                    var i = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Za === null || !Za.has(i))) {
                        e = _n(r, e), r = Sm(2), i = Pa(n, r, 2), i !== null && (wm(r, i, n, e), Ke(i, 2), ea(i));
                        break
                    }
                }
                n = n.return
            }
    }

    function pd(e, n, r) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new U1;
            var c = new Set;
            i.set(n, c)
        } else c = i.get(n), c === void 0 && (c = new Set, i.set(n, c));
        c.has(r) || (id = !0, c.add(r), e = P1.bind(null, e, n, r), n.then(e, e))
    }

    function P1(e, n, r) {
        var i = e.pingCache;
        i !== null && i.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, We === e && (He & r) === r && (ft === 4 || ft === 3 && (He & 62914560) === He && 300 > ct() - lo ? (Ye & 2) === 0 && Ts(e, 0) : ld |= r, Os === He && (Os = 0)), ea(e)
    }

    function Sg(e, n) {
        n === 0 && (n = Ve()), e = Er(e, n), e !== null && (Ke(e, n), ea(e))
    }

    function Y1(e) {
        var n = e.memoizedState,
            r = 0;
        n !== null && (r = n.retryLane), Sg(e, r)
    }

    function G1(e, n) {
        var r = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var i = e.stateNode,
                    c = e.memoizedState;
                c !== null && (r = c.retryLane);
                break;
            case 19:
                i = e.stateNode;
                break;
            case 22:
                i = e.stateNode._retryCache;
                break;
            default:
                throw Error(l(314))
        }
        i !== null && i.delete(n), Sg(e, r)
    }

    function V1(e, n) {
        return Nt(e, n)
    }
    var mo = null,
        js = null,
        md = !1,
        go = !1,
        gd = !1,
        Fa = 0;

    function ea(e) {
        e !== js && e.next === null && (js === null ? mo = js = e : js = js.next = e), go = !0, md || (md = !0, X1())
    }

    function Di(e, n) {
        if (!gd && go) {
            gd = !0;
            do
                for (var r = !1, i = mo; i !== null;) {
                    if (e !== 0) {
                        var c = i.pendingLanes;
                        if (c === 0) var f = 0;
                        else {
                            var v = i.suspendedLanes,
                                w = i.pingedLanes;
                            f = (1 << 31 - pt(42 | e) + 1) - 1, f &= c & ~(v & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (r = !0, Ag(i, f))
                    } else f = He, f = ge(i, i === We ? f : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), (f & 3) === 0 || _e(i, f) || (r = !0, Ag(i, f));
                    i = i.next
                }
            while (r);
            gd = !1
        }
    }

    function K1() {
        wg()
    }

    function wg() {
        go = md = !1;
        var e = 0;
        Fa !== 0 && aS() && (e = Fa);
        for (var n = ct(), r = null, i = mo; i !== null;) {
            var c = i.next,
                f = Eg(i, n);
            f === 0 ? (i.next = null, r === null ? mo = c : r.next = c, c === null && (js = r)) : (r = i, (e !== 0 || (f & 3) !== 0) && (go = !0)), i = c
        }
        Tt !== 0 && Tt !== 5 || Di(e), Fa !== 0 && (Fa = 0)
    }

    function Eg(e, n) {
        for (var r = e.suspendedLanes, i = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f;) {
            var v = 31 - pt(f),
                w = 1 << v,
                D = c[v];
            D === -1 ? ((w & r) === 0 || (w & i) !== 0) && (c[v] = Pe(w, n)) : D <= n && (e.expiredLanes |= w), f &= ~w
        }
        if (n = We, r = He, r = ge(e, e === n ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), i = e.callbackNode, r === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) return i !== null && i !== null && En(i), e.callbackNode = null, e.callbackPriority = 0;
        if ((r & 3) === 0 || _e(e, r)) {
            if (n = r & -r, n === e.callbackPriority) return n;
            switch (i !== null && En(i), kt(r)) {
                case 2:
                case 8:
                    r = Ft;
                    break;
                case 32:
                    r = Ht;
                    break;
                case 268435456:
                    r = Jt;
                    break;
                default:
                    r = Ht
            }
            return i = Og.bind(null, e), r = Nt(r, i), e.callbackPriority = n, e.callbackNode = r, n
        }
        return i !== null && i !== null && En(i), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Og(e, n) {
        if (Tt !== 0 && Tt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var r = e.callbackNode;
        if (po() && e.callbackNode !== r) return null;
        var i = He;
        return i = ge(e, e === We ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), i === 0 ? null : (sg(e, i, n), Eg(e, ct()), e.callbackNode != null && e.callbackNode === r ? Og.bind(null, e) : null)
    }

    function Ag(e, n) {
        if (po()) return null;
        sg(e, n, !0)
    }

    function X1() {
        sS(function() {
            (Ye & 6) !== 0 ? Nt(On, K1) : wg()
        })
    }

    function yd() {
        if (Fa === 0) {
            var e = hs;
            e === 0 && (e = Se, Se <<= 1, (Se & 261888) === 0 && (Se = 256)), Fa = e
        }
        return Fa
    }

    function Tg(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : El("" + e)
    }

    function Cg(e, n) {
        var r = n.ownerDocument.createElement("input");
        return r.name = n.name, r.value = n.value, e.id && r.setAttribute("form", e.id), n.parentNode.insertBefore(r, n), e = new FormData(e), r.parentNode.removeChild(r), e
    }

    function Z1(e, n, r, i, c) {
        if (n === "submit" && r && r.stateNode === c) {
            var f = Tg((c[Wt] || null).action),
                v = i.submitter;
            v && (n = (n = v[Wt] || null) ? Tg(n.formAction) : v.getAttribute("formAction"), n !== null && (f = n, v = null));
            var w = new Cl("action", "action", null, i, c);
            e.push({
                event: w,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Fa !== 0) {
                                var D = v ? Cg(c, v) : new FormData(c);
                                Uu(r, {
                                    pending: !0,
                                    data: D,
                                    method: c.method,
                                    action: f
                                }, null, D)
                            }
                        } else typeof f == "function" && (w.preventDefault(), D = v ? Cg(c, v) : new FormData(c), Uu(r, {
                            pending: !0,
                            data: D,
                            method: c.method,
                            action: f
                        }, f, D))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var vd = 0; vd < eu.length; vd++) {
        var bd = eu[vd],
            I1 = bd.toLowerCase(),
            $1 = bd[0].toUpperCase() + bd.slice(1);
        Qn(I1, "on" + $1)
    }
    Qn(rp, "onAnimationEnd"), Qn(sp, "onAnimationIteration"), Qn(ip, "onAnimationStart"), Qn("dblclick", "onDoubleClick"), Qn("focusin", "onFocus"), Qn("focusout", "onBlur"), Qn(f1, "onTransitionRun"), Qn(h1, "onTransitionStart"), Qn(p1, "onTransitionCancel"), Qn(lp, "onTransitionEnd"), Wr("onMouseEnter", ["mouseout", "mouseover"]), Wr("onMouseLeave", ["mouseout", "mouseover"]), Wr("onPointerEnter", ["pointerout", "pointerover"]), Wr("onPointerLeave", ["pointerout", "pointerover"]), br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        F1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_i));

    function jg(e, n) {
        n = (n & 4) !== 0;
        for (var r = 0; r < e.length; r++) {
            var i = e[r],
                c = i.event;
            i = i.listeners;
            e: {
                var f = void 0;
                if (n)
                    for (var v = i.length - 1; 0 <= v; v--) {
                        var w = i[v],
                            D = w.instance,
                            Q = w.currentTarget;
                        if (w = w.listener, D !== f && c.isPropagationStopped()) break e;
                        f = w, c.currentTarget = Q;
                        try {
                            f(c)
                        } catch (J) {
                            Dl(J)
                        }
                        c.currentTarget = null, f = D
                    } else
                        for (v = 0; v < i.length; v++) {
                            if (w = i[v], D = w.instance, Q = w.currentTarget, w = w.listener, D !== f && c.isPropagationStopped()) break e;
                            f = w, c.currentTarget = Q;
                            try {
                                f(c)
                            } catch (J) {
                                Dl(J)
                            }
                            c.currentTarget = null, f = D
                        }
            }
        }
    }

    function Ne(e, n) {
        var r = n[Mc];
        r === void 0 && (r = n[Mc] = new Set);
        var i = e + "__bubble";
        r.has(i) || (Rg(n, e, 2, !1), r.add(i))
    }

    function xd(e, n, r) {
        var i = 0;
        n && (i |= 4), Rg(r, e, i, n)
    }
    var yo = "_reactListening" + Math.random().toString(36).slice(2);

    function Sd(e) {
        if (!e[yo]) {
            e[yo] = !0, wh.forEach(function(r) {
                r !== "selectionchange" && (F1.has(r) || xd(r, !1, e), xd(r, !0, e))
            });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[yo] || (n[yo] = !0, xd("selectionchange", !1, n))
        }
    }

    function Rg(e, n, r, i) {
        switch (ry(n)) {
            case 2:
                var c = AS;
                break;
            case 8:
                c = TS;
                break;
            default:
                c = kd
        }
        r = c.bind(null, n, r, e), c = void 0, !Qc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), i ? c !== void 0 ? e.addEventListener(n, r, {
            capture: !0,
            passive: c
        }) : e.addEventListener(n, r, !0) : c !== void 0 ? e.addEventListener(n, r, {
            passive: c
        }) : e.addEventListener(n, r, !1)
    }

    function wd(e, n, r, i, c) {
        var f = i;
        if ((n & 1) === 0 && (n & 2) === 0 && i !== null) e: for (;;) {
            if (i === null) return;
            var v = i.tag;
            if (v === 3 || v === 4) {
                var w = i.stateNode.containerInfo;
                if (w === c) break;
                if (v === 4)
                    for (v = i.return; v !== null;) {
                        var D = v.tag;
                        if ((D === 3 || D === 4) && v.stateNode.containerInfo === c) return;
                        v = v.return
                    }
                for (; w !== null;) {
                    if (v = $r(w), v === null) return;
                    if (D = v.tag, D === 5 || D === 6 || D === 26 || D === 27) {
                        i = f = v;
                        continue e
                    }
                    w = w.parentNode
                }
            }
            i = i.return
        }
        Hh(function() {
            var Q = f,
                J = Bc(r),
                ee = [];
            e: {
                var V = op.get(e);
                if (V !== void 0) {
                    var X = Cl,
                        he = e;
                    switch (e) {
                        case "keypress":
                            if (Al(r) === 0) break e;
                        case "keydown":
                        case "keyup":
                            X = Gx;
                            break;
                        case "focusin":
                            he = "focus", X = Vc;
                            break;
                        case "focusout":
                            he = "blur", X = Vc;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            X = Vc;
                            break;
                        case "click":
                            if (r.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            X = Uh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            X = Mx;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            X = Xx;
                            break;
                        case rp:
                        case sp:
                        case ip:
                            X = zx;
                            break;
                        case lp:
                            X = Ix;
                            break;
                        case "scroll":
                        case "scrollend":
                            X = Dx;
                            break;
                        case "wheel":
                            X = Fx;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            X = Ux;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            X = Bh;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            X = Wx
                    }
                    var we = (n & 4) !== 0,
                        Fe = !we && (e === "scroll" || e === "scrollend"),
                        k = we ? V !== null ? V + "Capture" : null : V;
                    we = [];
                    for (var M = Q, q; M !== null;) {
                        var W = M;
                        if (q = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || q === null || k === null || (W = Ws(M, k), W != null && we.push(Mi(M, W, q))), Fe) break;
                        M = M.return
                    }
                    0 < we.length && (V = new X(V, he, null, r, J), ee.push({
                        event: V,
                        listeners: we
                    }))
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (V = e === "mouseover" || e === "pointerover", X = e === "mouseout" || e === "pointerout", V && r !== Lc && (he = r.relatedTarget || r.fromElement) && ($r(he) || he[Ir])) break e;
                    if ((X || V) && (V = J.window === J ? J : (V = J.ownerDocument) ? V.defaultView || V.parentWindow : window, X ? (he = r.relatedTarget || r.toElement, X = Q, he = he ? $r(he) : null, he !== null && (Fe = u(he), we = he.tag, he !== Fe || we !== 5 && we !== 27 && we !== 6) && (he = null)) : (X = null, he = Q), X !== he)) {
                        if (we = Uh, W = "onMouseLeave", k = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (we = Bh, W = "onPointerLeave", k = "onPointerEnter", M = "pointer"), Fe = X == null ? V : Js(X), q = he == null ? V : Js(he), V = new we(W, M + "leave", X, r, J), V.target = Fe, V.relatedTarget = q, W = null, $r(J) === Q && (we = new we(k, M + "enter", he, r, J), we.target = q, we.relatedTarget = Fe, W = we), Fe = W, X && he) t: {
                            for (we = J1, k = X, M = he, q = 0, W = k; W; W = we(W)) q++;W = 0;
                            for (var be = M; be; be = we(be)) W++;
                            for (; 0 < q - W;) k = we(k),
                            q--;
                            for (; 0 < W - q;) M = we(M),
                            W--;
                            for (; q--;) {
                                if (k === M || M !== null && k === M.alternate) {
                                    we = k;
                                    break t
                                }
                                k = we(k), M = we(M)
                            }
                            we = null
                        }
                        else we = null;
                        X !== null && Dg(ee, V, X, we, !1), he !== null && Fe !== null && Dg(ee, Fe, he, we, !0)
                    }
                }
                e: {
                    if (V = Q ? Js(Q) : window, X = V.nodeName && V.nodeName.toLowerCase(), X === "select" || X === "input" && V.type === "file") var Be = Xh;
                    else if (Vh(V))
                        if (Zh) Be = c1;
                        else {
                            Be = l1;
                            var ye = i1
                        }
                    else X = V.nodeName,
                    !X || X.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? Q && Uc(Q.elementType) && (Be = Xh) : Be = o1;
                    if (Be && (Be = Be(e, Q))) {
                        Kh(ee, Be, r, J);
                        break e
                    }
                    ye && ye(e, V, Q),
                    e === "focusout" && Q && V.type === "number" && Q.memoizedProps.value != null && kc(V, "number", V.value)
                }
                switch (ye = Q ? Js(Q) : window, e) {
                    case "focusin":
                        (Vh(ye) || ye.contentEditable === "true") && (ss = ye, Fc = Q, li = null);
                        break;
                    case "focusout":
                        li = Fc = ss = null;
                        break;
                    case "mousedown":
                        Jc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Jc = !1, np(ee, r, J);
                        break;
                    case "selectionchange":
                        if (d1) break;
                    case "keydown":
                    case "keyup":
                        np(ee, r, J)
                }
                var Ce;
                if (Xc) e: {
                    switch (e) {
                        case "compositionstart":
                            var ze = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ze = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ze = "onCompositionUpdate";
                            break e
                    }
                    ze = void 0
                }
                else rs ? Yh(e, r) && (ze = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ze = "onCompositionStart");ze && (qh && r.locale !== "ko" && (rs || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && rs && (Ce = zh()) : (za = J, Pc = "value" in za ? za.value : za.textContent, rs = !0)), ye = vo(Q, ze), 0 < ye.length && (ze = new Lh(ze, e, null, r, J), ee.push({
                    event: ze,
                    listeners: ye
                }), Ce ? ze.data = Ce : (Ce = Gh(r), Ce !== null && (ze.data = Ce)))),
                (Ce = t1 ? n1(e, r) : a1(e, r)) && (ze = vo(Q, "onBeforeInput"), 0 < ze.length && (ye = new Lh("onBeforeInput", "beforeinput", null, r, J), ee.push({
                    event: ye,
                    listeners: ze
                }), ye.data = Ce)),
                Z1(ee, e, Q, r, J)
            }
            jg(ee, n)
        })
    }

    function Mi(e, n, r) {
        return {
            instance: e,
            listener: n,
            currentTarget: r
        }
    }

    function vo(e, n) {
        for (var r = n + "Capture", i = []; e !== null;) {
            var c = e,
                f = c.stateNode;
            if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = Ws(e, r), c != null && i.unshift(Mi(e, c, f)), c = Ws(e, n), c != null && i.push(Mi(e, c, f))), e.tag === 3) return i;
            e = e.return
        }
        return []
    }

    function J1(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Dg(e, n, r, i, c) {
        for (var f = n._reactName, v = []; r !== null && r !== i;) {
            var w = r,
                D = w.alternate,
                Q = w.stateNode;
            if (w = w.tag, D !== null && D === i) break;
            w !== 5 && w !== 26 && w !== 27 || Q === null || (D = Q, c ? (Q = Ws(r, f), Q != null && v.unshift(Mi(r, Q, D))) : c || (Q = Ws(r, f), Q != null && v.push(Mi(r, Q, D)))), r = r.return
        }
        v.length !== 0 && e.push({
            event: n,
            listeners: v
        })
    }
    var W1 = /\r\n?/g,
        eS = /\u0000|\uFFFD/g;

    function _g(e) {
        return (typeof e == "string" ? e : "" + e).replace(W1, `
`).replace(eS, "")
    }

    function Mg(e, n) {
        return n = _g(n), _g(e) === n
    }

    function $e(e, n, r, i, c, f) {
        switch (r) {
            case "children":
                typeof i == "string" ? n === "body" || n === "textarea" && i === "" || ts(e, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && ts(e, "" + i);
                break;
            case "className":
                Sl(e, "class", i);
                break;
            case "tabIndex":
                Sl(e, "tabindex", i);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Sl(e, r, i);
                break;
            case "style":
                Mh(e, i, f);
                break;
            case "data":
                if (n !== "object") {
                    Sl(e, "data", i);
                    break
                }
            case "src":
            case "href":
                if (i === "" && (n !== "a" || r !== "href")) {
                    e.removeAttribute(r);
                    break
                }
                if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                    e.removeAttribute(r);
                    break
                }
                i = El("" + i), e.setAttribute(r, i);
                break;
            case "action":
            case "formAction":
                if (typeof i == "function") {
                    e.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof f == "function" && (r === "formAction" ? (n !== "input" && $e(e, n, "name", c.name, c, null), $e(e, n, "formEncType", c.formEncType, c, null), $e(e, n, "formMethod", c.formMethod, c, null), $e(e, n, "formTarget", c.formTarget, c, null)) : ($e(e, n, "encType", c.encType, c, null), $e(e, n, "method", c.method, c, null), $e(e, n, "target", c.target, c, null)));
                if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                    e.removeAttribute(r);
                    break
                }
                i = El("" + i), e.setAttribute(r, i);
                break;
            case "onClick":
                i != null && (e.onclick = ua);
                break;
            case "onScroll":
                i != null && Ne("scroll", e);
                break;
            case "onScrollEnd":
                i != null && Ne("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
                    if (r = i.__html, r != null) {
                        if (c.children != null) throw Error(l(60));
                        e.innerHTML = r
                    }
                }
                break;
            case "multiple":
                e.multiple = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "muted":
                e.muted = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                r = El("" + i), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, "" + i) : e.removeAttribute(r);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
                break;
            case "capture":
            case "download":
                i === !0 ? e.setAttribute(r, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, i) : e.removeAttribute(r);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(r, i) : e.removeAttribute(r);
                break;
            case "rowSpan":
            case "start":
                i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(r) : e.setAttribute(r, i);
                break;
            case "popover":
                Ne("beforetoggle", e), Ne("toggle", e), xl(e, "popover", i);
                break;
            case "xlinkActuate":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
                break;
            case "xlinkArcrole":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
                break;
            case "xlinkRole":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
                break;
            case "xlinkShow":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
                break;
            case "xlinkTitle":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
                break;
            case "xlinkType":
                ca(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
                break;
            case "xmlBase":
                ca(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
                break;
            case "xmlLang":
                ca(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
                break;
            case "xmlSpace":
                ca(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
                break;
            case "is":
                xl(e, "is", i);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = jx.get(r) || r, xl(e, r, i))
        }
    }

    function Ed(e, n, r, i, c, f) {
        switch (r) {
            case "style":
                Mh(e, i, f);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
                    if (r = i.__html, r != null) {
                        if (c.children != null) throw Error(l(60));
                        e.innerHTML = r
                    }
                }
                break;
            case "children":
                typeof i == "string" ? ts(e, i) : (typeof i == "number" || typeof i == "bigint") && ts(e, "" + i);
                break;
            case "onScroll":
                i != null && Ne("scroll", e);
                break;
            case "onScrollEnd":
                i != null && Ne("scrollend", e);
                break;
            case "onClick":
                i != null && (e.onclick = ua);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Eh.hasOwnProperty(r)) e: {
                    if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), n = r.slice(2, c ? r.length - 7 : void 0), f = e[Wt] || null, f = f != null ? f[r] : null, typeof f == "function" && e.removeEventListener(n, f, c), typeof i == "function")) {
                        typeof f != "function" && f !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(n, i, c);
                        break e
                    }
                    r in e ? e[r] = i : i === !0 ? e.setAttribute(r, "") : xl(e, r, i)
                }
        }
    }

    function Qt(e, n, r) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Ne("error", e), Ne("load", e);
                var i = !1,
                    c = !1,
                    f;
                for (f in r)
                    if (r.hasOwnProperty(f)) {
                        var v = r[f];
                        if (v != null) switch (f) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                c = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, n));
                            default:
                                $e(e, n, f, v, r, null)
                        }
                    } c && $e(e, n, "srcSet", r.srcSet, r, null), i && $e(e, n, "src", r.src, r, null);
                return;
            case "input":
                Ne("invalid", e);
                var w = f = v = c = null,
                    D = null,
                    Q = null;
                for (i in r)
                    if (r.hasOwnProperty(i)) {
                        var J = r[i];
                        if (J != null) switch (i) {
                            case "name":
                                c = J;
                                break;
                            case "type":
                                v = J;
                                break;
                            case "checked":
                                D = J;
                                break;
                            case "defaultChecked":
                                Q = J;
                                break;
                            case "value":
                                f = J;
                                break;
                            case "defaultValue":
                                w = J;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (J != null) throw Error(l(137, n));
                                break;
                            default:
                                $e(e, n, i, J, r, null)
                        }
                    } jh(e, f, w, D, Q, v, c, !1);
                return;
            case "select":
                Ne("invalid", e), i = v = f = null;
                for (c in r)
                    if (r.hasOwnProperty(c) && (w = r[c], w != null)) switch (c) {
                        case "value":
                            f = w;
                            break;
                        case "defaultValue":
                            v = w;
                            break;
                        case "multiple":
                            i = w;
                        default:
                            $e(e, n, c, w, r, null)
                    }
                n = f, r = v, e.multiple = !!i, n != null ? es(e, !!i, n, !1) : r != null && es(e, !!i, r, !0);
                return;
            case "textarea":
                Ne("invalid", e), f = c = i = null;
                for (v in r)
                    if (r.hasOwnProperty(v) && (w = r[v], w != null)) switch (v) {
                        case "value":
                            i = w;
                            break;
                        case "defaultValue":
                            c = w;
                            break;
                        case "children":
                            f = w;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (w != null) throw Error(l(91));
                            break;
                        default:
                            $e(e, n, v, w, r, null)
                    }
                Dh(e, i, c, f);
                return;
            case "option":
                for (D in r)
                    if (r.hasOwnProperty(D) && (i = r[D], i != null)) switch (D) {
                        case "selected":
                            e.selected = i && typeof i != "function" && typeof i != "symbol";
                            break;
                        default:
                            $e(e, n, D, i, r, null)
                    }
                return;
            case "dialog":
                Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
                break;
            case "iframe":
            case "object":
                Ne("load", e);
                break;
            case "video":
            case "audio":
                for (i = 0; i < _i.length; i++) Ne(_i[i], e);
                break;
            case "image":
                Ne("error", e), Ne("load", e);
                break;
            case "details":
                Ne("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Ne("error", e), Ne("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (Q in r)
                    if (r.hasOwnProperty(Q) && (i = r[Q], i != null)) switch (Q) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, n));
                        default:
                            $e(e, n, Q, i, r, null)
                    }
                return;
            default:
                if (Uc(n)) {
                    for (J in r) r.hasOwnProperty(J) && (i = r[J], i !== void 0 && Ed(e, n, J, i, r, void 0));
                    return
                }
        }
        for (w in r) r.hasOwnProperty(w) && (i = r[w], i != null && $e(e, n, w, i, r, null))
    }

    function tS(e, n, r, i) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var c = null,
                    f = null,
                    v = null,
                    w = null,
                    D = null,
                    Q = null,
                    J = null;
                for (X in r) {
                    var ee = r[X];
                    if (r.hasOwnProperty(X) && ee != null) switch (X) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            D = ee;
                        default:
                            i.hasOwnProperty(X) || $e(e, n, X, null, i, ee)
                    }
                }
                for (var V in i) {
                    var X = i[V];
                    if (ee = r[V], i.hasOwnProperty(V) && (X != null || ee != null)) switch (V) {
                        case "type":
                            f = X;
                            break;
                        case "name":
                            c = X;
                            break;
                        case "checked":
                            Q = X;
                            break;
                        case "defaultChecked":
                            J = X;
                            break;
                        case "value":
                            v = X;
                            break;
                        case "defaultValue":
                            w = X;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (X != null) throw Error(l(137, n));
                            break;
                        default:
                            X !== ee && $e(e, n, V, X, i, ee)
                    }
                }
                zc(e, v, w, D, Q, J, f, c);
                return;
            case "select":
                X = v = w = V = null;
                for (f in r)
                    if (D = r[f], r.hasOwnProperty(f) && D != null) switch (f) {
                        case "value":
                            break;
                        case "multiple":
                            X = D;
                        default:
                            i.hasOwnProperty(f) || $e(e, n, f, null, i, D)
                    }
                for (c in i)
                    if (f = i[c], D = r[c], i.hasOwnProperty(c) && (f != null || D != null)) switch (c) {
                        case "value":
                            V = f;
                            break;
                        case "defaultValue":
                            w = f;
                            break;
                        case "multiple":
                            v = f;
                        default:
                            f !== D && $e(e, n, c, f, i, D)
                    }
                n = w, r = v, i = X, V != null ? es(e, !!r, V, !1) : !!i != !!r && (n != null ? es(e, !!r, n, !0) : es(e, !!r, r ? [] : "", !1));
                return;
            case "textarea":
                X = V = null;
                for (w in r)
                    if (c = r[w], r.hasOwnProperty(w) && c != null && !i.hasOwnProperty(w)) switch (w) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            $e(e, n, w, null, i, c)
                    }
                for (v in i)
                    if (c = i[v], f = r[v], i.hasOwnProperty(v) && (c != null || f != null)) switch (v) {
                        case "value":
                            V = c;
                            break;
                        case "defaultValue":
                            X = c;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(l(91));
                            break;
                        default:
                            c !== f && $e(e, n, v, c, i, f)
                    }
                Rh(e, V, X);
                return;
            case "option":
                for (var he in r)
                    if (V = r[he], r.hasOwnProperty(he) && V != null && !i.hasOwnProperty(he)) switch (he) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            $e(e, n, he, null, i, V)
                    }
                for (D in i)
                    if (V = i[D], X = r[D], i.hasOwnProperty(D) && V !== X && (V != null || X != null)) switch (D) {
                        case "selected":
                            e.selected = V && typeof V != "function" && typeof V != "symbol";
                            break;
                        default:
                            $e(e, n, D, V, i, X)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var we in r) V = r[we], r.hasOwnProperty(we) && V != null && !i.hasOwnProperty(we) && $e(e, n, we, null, i, V);
                for (Q in i)
                    if (V = i[Q], X = r[Q], i.hasOwnProperty(Q) && V !== X && (V != null || X != null)) switch (Q) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (V != null) throw Error(l(137, n));
                            break;
                        default:
                            $e(e, n, Q, V, i, X)
                    }
                return;
            default:
                if (Uc(n)) {
                    for (var Fe in r) V = r[Fe], r.hasOwnProperty(Fe) && V !== void 0 && !i.hasOwnProperty(Fe) && Ed(e, n, Fe, void 0, i, V);
                    for (J in i) V = i[J], X = r[J], !i.hasOwnProperty(J) || V === X || V === void 0 && X === void 0 || Ed(e, n, J, V, i, X);
                    return
                }
        }
        for (var k in r) V = r[k], r.hasOwnProperty(k) && V != null && !i.hasOwnProperty(k) && $e(e, n, k, null, i, V);
        for (ee in i) V = i[ee], X = r[ee], !i.hasOwnProperty(ee) || V === X || V == null && X == null || $e(e, n, ee, V, i, X)
    }

    function Ng(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function nS() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), i = 0; i < r.length; i++) {
                var c = r[i],
                    f = c.transferSize,
                    v = c.initiatorType,
                    w = c.duration;
                if (f && w && Ng(v)) {
                    for (v = 0, w = c.responseEnd, i += 1; i < r.length; i++) {
                        var D = r[i],
                            Q = D.startTime;
                        if (Q > w) break;
                        var J = D.transferSize,
                            ee = D.initiatorType;
                        J && Ng(ee) && (D = D.responseEnd, v += J * (D < w ? 1 : (w - Q) / (D - Q)))
                    }
                    if (--i, n += 8 * (f + v) / (c.duration / 1e3), e++, 10 < e) break
                }
            }
            if (0 < e) return n / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
    }
    var Od = null,
        Ad = null;

    function bo(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Hg(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function zg(e, n) {
        if (e === 0) switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && n === "foreignObject" ? 0 : e
    }

    function Td(e, n) {
        return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Cd = null;

    function aS() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Cd ? !1 : (Cd = e, !0) : (Cd = null, !1)
    }
    var kg = typeof setTimeout == "function" ? setTimeout : void 0,
        rS = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ug = typeof Promise == "function" ? Promise : void 0,
        sS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ug < "u" ? function(e) {
            return Ug.resolve(null).then(e).catch(iS)
        } : kg;

    function iS(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Ja(e) {
        return e === "head"
    }

    function Lg(e, n) {
        var r = n,
            i = 0;
        do {
            var c = r.nextSibling;
            if (e.removeChild(r), c && c.nodeType === 8)
                if (r = c.data, r === "/$" || r === "/&") {
                    if (i === 0) {
                        e.removeChild(c), Ms(n);
                        return
                    }
                    i--
                } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") i++;
            else if (r === "html") Ni(e.ownerDocument.documentElement);
            else if (r === "head") {
                r = e.ownerDocument.head, Ni(r);
                for (var f = r.firstChild; f;) {
                    var v = f.nextSibling,
                        w = f.nodeName;
                    f[Fs] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = v
                }
            } else r === "body" && Ni(e.ownerDocument.body);
            r = c
        } while (r);
        Ms(n)
    }

    function Bg(e, n) {
        var r = e;
        e = 0;
        do {
            var i = r.nextSibling;
            if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), i && i.nodeType === 8)
                if (r = i.data, r === "/$") {
                    if (e === 0) break;
                    e--
                } else r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
            r = i
        } while (r)
    }

    function jd(e) {
        var n = e.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
            var r = n;
            switch (n = n.nextSibling, r.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    jd(r), Nc(r);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (r.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(r)
        }
    }

    function lS(e, n, r, i) {
        for (; e.nodeType === 1;) {
            var c = r;
            if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (i) {
                if (!e[Fs]) switch (n) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (n === "input" && e.type === "hidden") {
                var f = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && e.getAttribute("name") === f) return e
            } else return e;
            if (e = kn(e.nextSibling), e === null) break
        }
        return null
    }

    function oS(e, n, r) {
        if (n === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = kn(e.nextSibling), e === null)) return null;
        return e
    }

    function qg(e, n) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = kn(e.nextSibling), e === null)) return null;
        return e
    }

    function Rd(e) {
        return e.data === "$?" || e.data === "$~"
    }

    function Dd(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }

    function cS(e, n) {
        var r = e.ownerDocument;
        if (e.data === "$~") e._reactRetry = n;
        else if (e.data !== "$?" || r.readyState !== "loading") n();
        else {
            var i = function() {
                n(), r.removeEventListener("DOMContentLoaded", i)
            };
            r.addEventListener("DOMContentLoaded", i), e._reactRetry = i
        }
    }

    function kn(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
                if (n === "/$" || n === "/&") return null
            }
        }
        return e
    }
    var _d = null;

    function Qg(e) {
        e = e.nextSibling;
        for (var n = 0; e;) {
            if (e.nodeType === 8) {
                var r = e.data;
                if (r === "/$" || r === "/&") {
                    if (n === 0) return kn(e.nextSibling);
                    n--
                } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++
            }
            e = e.nextSibling
        }
        return null
    }

    function Pg(e) {
        e = e.previousSibling;
        for (var n = 0; e;) {
            if (e.nodeType === 8) {
                var r = e.data;
                if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
                    if (n === 0) return e;
                    n--
                } else r !== "/$" && r !== "/&" || n++
            }
            e = e.previousSibling
        }
        return null
    }

    function Yg(e, n, r) {
        switch (n = bo(r), e) {
            case "html":
                if (e = n.documentElement, !e) throw Error(l(452));
                return e;
            case "head":
                if (e = n.head, !e) throw Error(l(453));
                return e;
            case "body":
                if (e = n.body, !e) throw Error(l(454));
                return e;
            default:
                throw Error(l(451))
        }
    }

    function Ni(e) {
        for (var n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
        Nc(e)
    }
    var Un = new Map,
        Gg = new Set;

    function xo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Ta = H.d;
    H.d = {
        f: uS,
        r: dS,
        D: fS,
        C: hS,
        L: pS,
        m: mS,
        X: yS,
        S: gS,
        M: vS
    };

    function uS() {
        var e = Ta.f(),
            n = uo();
        return e || n
    }

    function dS(e) {
        var n = Fr(e);
        n !== null && n.tag === 5 && n.type === "form" ? lm(n) : Ta.r(e)
    }
    var Rs = typeof document > "u" ? null : document;

    function Vg(e, n, r) {
        var i = Rs;
        if (i && typeof n == "string" && n) {
            var c = Rn(n);
            c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), Gg.has(c) || (Gg.add(c), e = {
                rel: e,
                crossOrigin: r,
                href: n
            }, i.querySelector(c) === null && (n = i.createElement("link"), Qt(n, "link", e), Dt(n), i.head.appendChild(n)))
        }
    }

    function fS(e) {
        Ta.D(e), Vg("dns-prefetch", e, null)
    }

    function hS(e, n) {
        Ta.C(e, n), Vg("preconnect", e, n)
    }

    function pS(e, n, r) {
        Ta.L(e, n, r);
        var i = Rs;
        if (i && e && n) {
            var c = 'link[rel="preload"][as="' + Rn(n) + '"]';
            n === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + Rn(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + Rn(r.imageSizes) + '"]')) : c += '[href="' + Rn(e) + '"]';
            var f = c;
            switch (n) {
                case "style":
                    f = Ds(e);
                    break;
                case "script":
                    f = _s(e)
            }
            Un.has(f) || (e = m({
                rel: "preload",
                href: n === "image" && r && r.imageSrcSet ? void 0 : e,
                as: n
            }, r), Un.set(f, e), i.querySelector(c) !== null || n === "style" && i.querySelector(Hi(f)) || n === "script" && i.querySelector(zi(f)) || (n = i.createElement("link"), Qt(n, "link", e), Dt(n), i.head.appendChild(n)))
        }
    }

    function mS(e, n) {
        Ta.m(e, n);
        var r = Rs;
        if (r && e) {
            var i = n && typeof n.as == "string" ? n.as : "script",
                c = 'link[rel="modulepreload"][as="' + Rn(i) + '"][href="' + Rn(e) + '"]',
                f = c;
            switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    f = _s(e)
            }
            if (!Un.has(f) && (e = m({
                    rel: "modulepreload",
                    href: e
                }, n), Un.set(f, e), r.querySelector(c) === null)) {
                switch (i) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (r.querySelector(zi(f))) return
                }
                i = r.createElement("link"), Qt(i, "link", e), Dt(i), r.head.appendChild(i)
            }
        }
    }

    function gS(e, n, r) {
        Ta.S(e, n, r);
        var i = Rs;
        if (i && e) {
            var c = Jr(i).hoistableStyles,
                f = Ds(e);
            n = n || "default";
            var v = c.get(f);
            if (!v) {
                var w = {
                    loading: 0,
                    preload: null
                };
                if (v = i.querySelector(Hi(f))) w.loading = 5;
                else {
                    e = m({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": n
                    }, r), (r = Un.get(f)) && Md(e, r);
                    var D = v = i.createElement("link");
                    Dt(D), Qt(D, "link", e), D._p = new Promise(function(Q, J) {
                        D.onload = Q, D.onerror = J
                    }), D.addEventListener("load", function() {
                        w.loading |= 1
                    }), D.addEventListener("error", function() {
                        w.loading |= 2
                    }), w.loading |= 4, So(v, n, i)
                }
                v = {
                    type: "stylesheet",
                    instance: v,
                    count: 1,
                    state: w
                }, c.set(f, v)
            }
        }
    }

    function yS(e, n) {
        Ta.X(e, n);
        var r = Rs;
        if (r && e) {
            var i = Jr(r).hoistableScripts,
                c = _s(e),
                f = i.get(c);
            f || (f = r.querySelector(zi(c)), f || (e = m({
                src: e,
                async: !0
            }, n), (n = Un.get(c)) && Nd(e, n), f = r.createElement("script"), Dt(f), Qt(f, "link", e), r.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, i.set(c, f))
        }
    }

    function vS(e, n) {
        Ta.M(e, n);
        var r = Rs;
        if (r && e) {
            var i = Jr(r).hoistableScripts,
                c = _s(e),
                f = i.get(c);
            f || (f = r.querySelector(zi(c)), f || (e = m({
                src: e,
                async: !0,
                type: "module"
            }, n), (n = Un.get(c)) && Nd(e, n), f = r.createElement("script"), Dt(f), Qt(f, "link", e), r.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, i.set(c, f))
        }
    }

    function Kg(e, n, r, i) {
        var c = (c = ce.current) ? xo(c) : null;
        if (!c) throw Error(l(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof r.precedence == "string" && typeof r.href == "string" ? (n = Ds(r.href), r = Jr(c).hoistableStyles, i = r.get(n), i || (i = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, r.set(n, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
                    e = Ds(r.href);
                    var f = Jr(c).hoistableStyles,
                        v = f.get(e);
                    if (v || (c = c.ownerDocument || c, v = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, f.set(e, v), (f = c.querySelector(Hi(e))) && !f._p && (v.instance = f, v.state.loading = 5), Un.has(e) || (r = {
                            rel: "preload",
                            as: "style",
                            href: r.href,
                            crossOrigin: r.crossOrigin,
                            integrity: r.integrity,
                            media: r.media,
                            hrefLang: r.hrefLang,
                            referrerPolicy: r.referrerPolicy
                        }, Un.set(e, r), f || bS(c, e, r, v.state))), n && i === null) throw Error(l(528, ""));
                    return v
                }
                if (n && i !== null) throw Error(l(529, ""));
                return null;
            case "script":
                return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = _s(r), r = Jr(c).hoistableScripts, i = r.get(n), i || (i = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, r.set(n, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(l(444, e))
        }
    }

    function Ds(e) {
        return 'href="' + Rn(e) + '"'
    }

    function Hi(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Xg(e) {
        return m({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function bS(e, n, r, i) {
        e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = e.createElement("link"), i.preload = n, n.addEventListener("load", function() {
            return i.loading |= 1
        }), n.addEventListener("error", function() {
            return i.loading |= 2
        }), Qt(n, "link", r), Dt(n), e.head.appendChild(n))
    }

    function _s(e) {
        return '[src="' + Rn(e) + '"]'
    }

    function zi(e) {
        return "script[async]" + e
    }

    function Zg(e, n, r) {
        if (n.count++, n.instance === null) switch (n.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + Rn(r.href) + '"]');
                if (i) return n.instance = i, Dt(i), i;
                var c = m({}, r, {
                    "data-href": r.href,
                    "data-precedence": r.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"), Dt(i), Qt(i, "style", c), So(i, r.precedence, e), n.instance = i;
            case "stylesheet":
                c = Ds(r.href);
                var f = e.querySelector(Hi(c));
                if (f) return n.state.loading |= 4, n.instance = f, Dt(f), f;
                i = Xg(r), (c = Un.get(c)) && Md(i, c), f = (e.ownerDocument || e).createElement("link"), Dt(f);
                var v = f;
                return v._p = new Promise(function(w, D) {
                    v.onload = w, v.onerror = D
                }), Qt(f, "link", i), n.state.loading |= 4, So(f, r.precedence, e), n.instance = f;
            case "script":
                return f = _s(r.src), (c = e.querySelector(zi(f))) ? (n.instance = c, Dt(c), c) : (i = r, (c = Un.get(f)) && (i = m({}, r), Nd(i, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Qt(c, "link", i), e.head.appendChild(c), n.instance = c);
            case "void":
                return null;
            default:
                throw Error(l(443, n.type))
        } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, So(i, r.precedence, e));
        return n.instance
    }

    function So(e, n, r) {
        for (var i = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = i.length ? i[i.length - 1] : null, f = c, v = 0; v < i.length; v++) {
            var w = i[v];
            if (w.dataset.precedence === n) f = w;
            else if (f !== c) break
        }
        f ? f.parentNode.insertBefore(e, f.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild))
    }

    function Md(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title)
    }

    function Nd(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity)
    }
    var wo = null;

    function Ig(e, n, r) {
        if (wo === null) {
            var i = new Map,
                c = wo = new Map;
            c.set(r, i)
        } else c = wo, i = c.get(r), i || (i = new Map, c.set(r, i));
        if (i.has(e)) return i;
        for (i.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
            var f = r[c];
            if (!(f[Fs] || f[Ut] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var v = f.getAttribute(n) || "";
                v = e + v;
                var w = i.get(v);
                w ? w.push(f) : i.set(v, [f])
            }
        }
        return i
    }

    function $g(e, n, r) {
        e = e.ownerDocument || e, e.head.insertBefore(r, n === "title" ? e.querySelector("head > title") : null)
    }

    function xS(e, n, r) {
        if (r === 1 || n.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
                return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
                switch (n.rel) {
                    case "stylesheet":
                        return e = n.disabled, typeof n.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0
        }
        return !1
    }

    function Fg(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }

    function SS(e, n, r, i) {
        if (r.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (r.state.loading & 4) === 0) {
            if (r.instance === null) {
                var c = Ds(i.href),
                    f = n.querySelector(Hi(c));
                if (f) {
                    n = f._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = Eo.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = f, Dt(f);
                    return
                }
                f = n.ownerDocument || n, i = Xg(i), (c = Un.get(c)) && Md(i, c), f = f.createElement("link"), Dt(f);
                var v = f;
                v._p = new Promise(function(w, D) {
                    v.onload = w, v.onerror = D
                }), Qt(f, "link", i), r.instance = f
            }
            e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Eo.bind(e), n.addEventListener("load", r), n.addEventListener("error", r))
        }
    }
    var Hd = 0;

    function wS(e, n) {
        return e.stylesheets && e.count === 0 && Ao(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
            var i = setTimeout(function() {
                if (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend) {
                    var f = e.unsuspend;
                    e.unsuspend = null, f()
                }
            }, 6e4 + n);
            0 < e.imgBytes && Hd === 0 && (Hd = 62500 * nS());
            var c = setTimeout(function() {
                if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend)) {
                    var f = e.unsuspend;
                    e.unsuspend = null, f()
                }
            }, (e.imgBytes > Hd ? 50 : 800) + n);
            return e.unsuspend = r,
                function() {
                    e.unsuspend = null, clearTimeout(i), clearTimeout(c)
                }
        } : null
    }

    function Eo() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Ao(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var Oo = null;

    function Ao(e, n) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Oo = new Map, n.forEach(ES, e), Oo = null, Eo.call(e))
    }

    function ES(e, n) {
        if (!(n.state.loading & 4)) {
            var r = Oo.get(e);
            if (r) var i = r.get(null);
            else {
                r = new Map, Oo.set(e, r);
                for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
                    var v = c[f];
                    (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (r.set(v.dataset.precedence, v), i = v)
                }
                i && r.set(null, i)
            }
            c = n.instance, v = c.getAttribute("data-precedence"), f = r.get(v) || i, f === i && r.set(null, c), r.set(v, c), this.count++, i = Eo.bind(this), c.addEventListener("load", i), c.addEventListener("error", i), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4
        }
    }
    var ki = {
        $$typeof: K,
        Provider: null,
        Consumer: null,
        _currentValue: z,
        _currentValue2: z,
        _threadCount: 0
    };

    function OS(e, n, r, i, c, f, v, w, D) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = At(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = At(0), this.hiddenUpdates = At(null), this.identifierPrefix = i, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = new Map
    }

    function Jg(e, n, r, i, c, f, v, w, D, Q, J, ee) {
        return e = new OS(e, n, r, v, D, Q, J, ee, w), n = 1, f === !0 && (n |= 24), f = fn(3, null, null, n), e.current = f, f.stateNode = e, n = hu(), n.refCount++, e.pooledCache = n, n.refCount++, f.memoizedState = {
            element: i,
            isDehydrated: r,
            cache: n
        }, yu(f), e
    }

    function Wg(e) {
        return e ? (e = os, e) : os
    }

    function ey(e, n, r, i, c, f) {
        c = Wg(c), i.context === null ? i.context = c : i.pendingContext = c, i = Qa(n), i.payload = {
            element: r
        }, f = f === void 0 ? null : f, f !== null && (i.callback = f), r = Pa(e, i, n), r !== null && (sn(r, e, n), pi(r, e, n))
    }

    function ty(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var r = e.retryLane;
            e.retryLane = r !== 0 && r < n ? r : n
        }
    }

    function zd(e, n) {
        ty(e, n), (e = e.alternate) && ty(e, n)
    }

    function ny(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = Er(e, 67108864);
            n !== null && sn(n, e, 67108864), zd(e, 67108864)
        }
    }

    function ay(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = yn();
            n = An(n);
            var r = Er(e, n);
            r !== null && sn(r, e, n), zd(e, n)
        }
    }
    var To = !0;

    function AS(e, n, r, i) {
        var c = j.T;
        j.T = null;
        var f = H.p;
        try {
            H.p = 2, kd(e, n, r, i)
        } finally {
            H.p = f, j.T = c
        }
    }

    function TS(e, n, r, i) {
        var c = j.T;
        j.T = null;
        var f = H.p;
        try {
            H.p = 8, kd(e, n, r, i)
        } finally {
            H.p = f, j.T = c
        }
    }

    function kd(e, n, r, i) {
        if (To) {
            var c = Ud(i);
            if (c === null) wd(e, n, i, Co, r), sy(e, i);
            else if (jS(c, e, n, r, i)) i.stopPropagation();
            else if (sy(e, i), n & 4 && -1 < CS.indexOf(e)) {
                for (; c !== null;) {
                    var f = Fr(c);
                    if (f !== null) switch (f.tag) {
                        case 3:
                            if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                                var v = Je(f.pendingLanes);
                                if (v !== 0) {
                                    var w = f;
                                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v;) {
                                        var D = 1 << 31 - pt(v);
                                        w.entanglements[1] |= D, v &= ~D
                                    }
                                    ea(f), (Ye & 6) === 0 && (oo = ct() + 500, Di(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            w = Er(f, 2), w !== null && sn(w, f, 2), uo(), zd(f, 2)
                    }
                    if (f = Ud(i), f === null && wd(e, n, i, Co, r), f === c) break;
                    c = f
                }
                c !== null && i.stopPropagation()
            } else wd(e, n, i, null, r)
        }
    }

    function Ud(e) {
        return e = Bc(e), Ld(e)
    }
    var Co = null;

    function Ld(e) {
        if (Co = null, e = $r(e), e !== null) {
            var n = u(e);
            if (n === null) e = null;
            else {
                var r = n.tag;
                if (r === 13) {
                    if (e = d(n), e !== null) return e;
                    e = null
                } else if (r === 31) {
                    if (e = h(n), e !== null) return e;
                    e = null
                } else if (r === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                    e = null
                } else n !== e && (e = null)
            }
        }
        return Co = e, null
    }

    function ry(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Na()) {
                    case On:
                        return 2;
                    case Ft:
                        return 8;
                    case Ht:
                    case cn:
                        return 32;
                    case Jt:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Bd = !1,
        Wa = null,
        er = null,
        tr = null,
        Ui = new Map,
        Li = new Map,
        nr = [],
        CS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function sy(e, n) {
        switch (e) {
            case "focusin":
            case "focusout":
                Wa = null;
                break;
            case "dragenter":
            case "dragleave":
                er = null;
                break;
            case "mouseover":
            case "mouseout":
                tr = null;
                break;
            case "pointerover":
            case "pointerout":
                Ui.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Li.delete(n.pointerId)
        }
    }

    function Bi(e, n, r, i, c, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: n,
            domEventName: r,
            eventSystemFlags: i,
            nativeEvent: f,
            targetContainers: [c]
        }, n !== null && (n = Fr(n), n !== null && ny(n)), e) : (e.eventSystemFlags |= i, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e)
    }

    function jS(e, n, r, i, c) {
        switch (n) {
            case "focusin":
                return Wa = Bi(Wa, e, n, r, i, c), !0;
            case "dragenter":
                return er = Bi(er, e, n, r, i, c), !0;
            case "mouseover":
                return tr = Bi(tr, e, n, r, i, c), !0;
            case "pointerover":
                var f = c.pointerId;
                return Ui.set(f, Bi(Ui.get(f) || null, e, n, r, i, c)), !0;
            case "gotpointercapture":
                return f = c.pointerId, Li.set(f, Bi(Li.get(f) || null, e, n, r, i, c)), !0
        }
        return !1
    }

    function iy(e) {
        var n = $r(e.target);
        if (n !== null) {
            var r = u(n);
            if (r !== null) {
                if (n = r.tag, n === 13) {
                    if (n = d(r), n !== null) {
                        e.blockedOn = n, Ha(e.priority, function() {
                            ay(r)
                        });
                        return
                    }
                } else if (n === 31) {
                    if (n = h(r), n !== null) {
                        e.blockedOn = n, Ha(e.priority, function() {
                            ay(r)
                        });
                        return
                    }
                } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function jo(e) {
        if (e.blockedOn !== null) return !1;
        for (var n = e.targetContainers; 0 < n.length;) {
            var r = Ud(e.nativeEvent);
            if (r === null) {
                r = e.nativeEvent;
                var i = new r.constructor(r.type, r);
                Lc = i, r.target.dispatchEvent(i), Lc = null
            } else return n = Fr(r), n !== null && ny(n), e.blockedOn = r, !1;
            n.shift()
        }
        return !0
    }

    function ly(e, n, r) {
        jo(e) && r.delete(n)
    }

    function RS() {
        Bd = !1, Wa !== null && jo(Wa) && (Wa = null), er !== null && jo(er) && (er = null), tr !== null && jo(tr) && (tr = null), Ui.forEach(ly), Li.forEach(ly)
    }

    function Ro(e, n) {
        e.blockedOn === n && (e.blockedOn = null, Bd || (Bd = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, RS)))
    }
    var Do = null;

    function oy(e) {
        Do !== e && (Do = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
            Do === e && (Do = null);
            for (var n = 0; n < e.length; n += 3) {
                var r = e[n],
                    i = e[n + 1],
                    c = e[n + 2];
                if (typeof i != "function") {
                    if (Ld(i || r) === null) continue;
                    break
                }
                var f = Fr(r);
                f !== null && (e.splice(n, 3), n -= 3, Uu(f, {
                    pending: !0,
                    data: c,
                    method: r.method,
                    action: i
                }, i, c))
            }
        }))
    }

    function Ms(e) {
        function n(D) {
            return Ro(D, e)
        }
        Wa !== null && Ro(Wa, e), er !== null && Ro(er, e), tr !== null && Ro(tr, e), Ui.forEach(n), Li.forEach(n);
        for (var r = 0; r < nr.length; r++) {
            var i = nr[r];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < nr.length && (r = nr[0], r.blockedOn === null);) iy(r), r.blockedOn === null && nr.shift();
        if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
            for (i = 0; i < r.length; i += 3) {
                var c = r[i],
                    f = r[i + 1],
                    v = c[Wt] || null;
                if (typeof f == "function") v || oy(r);
                else if (v) {
                    var w = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (c = f, v = f[Wt] || null) w = v.formAction;
                        else if (Ld(c) !== null) continue
                    } else w = v.action;
                    typeof w == "function" ? r[i + 1] = w : (r.splice(i, 3), i -= 3), oy(r)
                }
            }
    }

    function cy() {
        function e(f) {
            f.canIntercept && f.info === "react-transition" && f.intercept({
                handler: function() {
                    return new Promise(function(v) {
                        return c = v
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function n() {
            c !== null && (c(), c = null), i || setTimeout(r, 20)
        }

        function r() {
            if (!i && !navigation.transition) {
                var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, {
                    state: f.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1,
                c = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100),
                function() {
                    i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), c !== null && (c(), c = null)
                }
        }
    }

    function qd(e) {
        this._internalRoot = e
    }
    _o.prototype.render = qd.prototype.render = function(e) {
        var n = this._internalRoot;
        if (n === null) throw Error(l(409));
        var r = n.current,
            i = yn();
        ey(r, i, e, n, null, null)
    }, _o.prototype.unmount = qd.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            ey(e.current, 2, null, e, null, null), uo(), n[Ir] = null
        }
    };

    function _o(e) {
        this._internalRoot = e
    }
    _o.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var n = Tn();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for (var r = 0; r < nr.length && n !== 0 && n < nr[r].priority; r++);
            nr.splice(r, 0, e), r === 0 && iy(e)
        }
    };
    var uy = a.version;
    if (uy !== "19.2.1") throw Error(l(527, uy, "19.2.1"));
    H.findDOMNode = function(e) {
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
        return e = g(n), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e
    };
    var DS = {
        bundleType: 0,
        version: "19.2.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Mo.isDisabled && Mo.supportsFiber) try {
            qn = Mo.inject(DS), Ot = Mo
        } catch {}
    }
    return Pi.createRoot = function(e, n) {
        if (!o(e)) throw Error(l(299));
        var r = !1,
            i = "",
            c = ym,
            f = vm,
            v = bm;
        return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = Jg(e, 1, !1, null, null, r, i, null, c, f, v, cy), e[Ir] = n.current, Sd(e), new qd(n)
    }, Pi.hydrateRoot = function(e, n, r) {
        if (!o(e)) throw Error(l(299));
        var i = !1,
            c = "",
            f = ym,
            v = vm,
            w = bm,
            D = null;
        return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (v = r.onCaughtError), r.onRecoverableError !== void 0 && (w = r.onRecoverableError), r.formState !== void 0 && (D = r.formState)), n = Jg(e, 1, !0, n, r ?? null, i, c, D, f, v, w, cy), n.context = Wg(null), r = n.current, i = yn(), i = An(i), c = Qa(i), c.callback = null, Pa(r, c, i), r = i, n.current.lanes = r, Ke(n, r), ea(n), e[Ir] = n.current, Sd(e), new _o(n)
    }, Pi.version = "19.2.1", Pi
}
var Uy;

function W2() {
    if (Uy) return Xd.exports;
    Uy = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (a) {
            console.error(a)
        }
    }
    return t(), Xd.exports = J2(), Xd.exports
}
var eE = W2(),
    tE = (function() {
        function t() {
            this.keyToValue = new Map, this.valueToKey = new Map
        }
        return t.prototype.set = function(a, s) {
            this.keyToValue.set(a, s), this.valueToKey.set(s, a)
        }, t.prototype.getByKey = function(a) {
            return this.keyToValue.get(a)
        }, t.prototype.getByValue = function(a) {
            return this.valueToKey.get(a)
        }, t.prototype.clear = function() {
            this.keyToValue.clear(), this.valueToKey.clear()
        }, t
    })(),
    E0 = (function() {
        function t(a) {
            this.generateIdentifier = a, this.kv = new tE
        }
        return t.prototype.register = function(a, s) {
            this.kv.getByValue(a) || (s || (s = this.generateIdentifier(a)), this.kv.set(s, a))
        }, t.prototype.clear = function() {
            this.kv.clear()
        }, t.prototype.getIdentifier = function(a) {
            return this.kv.getByValue(a)
        }, t.prototype.getValue = function(a) {
            return this.kv.getByKey(a)
        }, t
    })(),
    nE = (function() {
        var t = function(a, s) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(l, o) {
                l.__proto__ = o
            } || function(l, o) {
                for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (l[u] = o[u])
            }, t(a, s)
        };
        return function(a, s) {
            if (typeof s != "function" && s !== null) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
            t(a, s);

            function l() {
                this.constructor = a
            }
            a.prototype = s === null ? Object.create(s) : (l.prototype = s.prototype, new l)
        }
    })(),
    aE = (function(t) {
        nE(a, t);

        function a() {
            var s = t.call(this, function(l) {
                return l.name
            }) || this;
            return s.classToAllowedProps = new Map, s
        }
        return a.prototype.register = function(s, l) {
            typeof l == "object" ? (l.allowProps && this.classToAllowedProps.set(s, l.allowProps), t.prototype.register.call(this, s, l.identifier)) : t.prototype.register.call(this, s, l)
        }, a.prototype.getAllowedProps = function(s) {
            return this.classToAllowedProps.get(s)
        }, a
    })(E0),
    rE = function(t, a) {
        var s = typeof Symbol == "function" && t[Symbol.iterator];
        if (!s) return t;
        var l = s.call(t),
            o, u = [],
            d;
        try {
            for (;
                (a === void 0 || a-- > 0) && !(o = l.next()).done;) u.push(o.value)
        } catch (h) {
            d = {
                error: h
            }
        } finally {
            try {
                o && !o.done && (s = l.return) && s.call(l)
            } finally {
                if (d) throw d.error
            }
        }
        return u
    };

function sE(t) {
    if ("values" in Object) return Object.values(t);
    var a = [];
    for (var s in t) t.hasOwnProperty(s) && a.push(t[s]);
    return a
}

function iE(t, a) {
    var s = sE(t);
    if ("find" in s) return s.find(a);
    for (var l = s, o = 0; o < l.length; o++) {
        var u = l[o];
        if (a(u)) return u
    }
}

function Qs(t, a) {
    Object.entries(t).forEach(function(s) {
        var l = rE(s, 2),
            o = l[0],
            u = l[1];
        return a(u, o)
    })
}

function Ko(t, a) {
    return t.indexOf(a) !== -1
}

function Ly(t, a) {
    for (var s = 0; s < t.length; s++) {
        var l = t[s];
        if (a(l)) return l
    }
}
var lE = (function() {
        function t() {
            this.transfomers = {}
        }
        return t.prototype.register = function(a) {
            this.transfomers[a.name] = a
        }, t.prototype.findApplicable = function(a) {
            return iE(this.transfomers, function(s) {
                return s.isApplicable(a)
            })
        }, t.prototype.findByName = function(a) {
            return this.transfomers[a]
        }, t
    })(),
    oE = function(t) {
        return Object.prototype.toString.call(t).slice(8, -1)
    },
    O0 = function(t) {
        return typeof t > "u"
    },
    cE = function(t) {
        return t === null
    },
    Wi = function(t) {
        return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype
    },
    wf = function(t) {
        return Wi(t) && Object.keys(t).length === 0
    },
    fr = function(t) {
        return Array.isArray(t)
    },
    uE = function(t) {
        return typeof t == "string"
    },
    dE = function(t) {
        return typeof t == "number" && !isNaN(t)
    },
    fE = function(t) {
        return typeof t == "boolean"
    },
    hE = function(t) {
        return t instanceof RegExp
    },
    el = function(t) {
        return t instanceof Map
    },
    tl = function(t) {
        return t instanceof Set
    },
    A0 = function(t) {
        return oE(t) === "Symbol"
    },
    pE = function(t) {
        return t instanceof Date && !isNaN(t.valueOf())
    },
    mE = function(t) {
        return t instanceof Error
    },
    By = function(t) {
        return typeof t == "number" && isNaN(t)
    },
    gE = function(t) {
        return fE(t) || cE(t) || O0(t) || dE(t) || uE(t) || A0(t)
    },
    yE = function(t) {
        return typeof t == "bigint"
    },
    vE = function(t) {
        return t === 1 / 0 || t === -1 / 0
    },
    bE = function(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView)
    },
    xE = function(t) {
        return t instanceof URL
    },
    T0 = function(t) {
        return t.replace(/\./g, "\\.")
    },
    Fd = function(t) {
        return t.map(String).map(T0).join(".")
    },
    Ki = function(t) {
        for (var a = [], s = "", l = 0; l < t.length; l++) {
            var o = t.charAt(l),
                u = o === "\\" && t.charAt(l + 1) === ".";
            if (u) {
                s += ".", l++;
                continue
            }
            var d = o === ".";
            if (d) {
                a.push(s), s = "";
                continue
            }
            s += o
        }
        var h = s;
        return a.push(h), a
    },
    Ef = function() {
        return Ef = Object.assign || function(t) {
            for (var a, s = 1, l = arguments.length; s < l; s++) {
                a = arguments[s];
                for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
            }
            return t
        }, Ef.apply(this, arguments)
    },
    Of = function(t, a) {
        var s = typeof Symbol == "function" && t[Symbol.iterator];
        if (!s) return t;
        var l = s.call(t),
            o, u = [],
            d;
        try {
            for (;
                (a === void 0 || a-- > 0) && !(o = l.next()).done;) u.push(o.value)
        } catch (h) {
            d = {
                error: h
            }
        } finally {
            try {
                o && !o.done && (s = l.return) && s.call(l)
            } finally {
                if (d) throw d.error
            }
        }
        return u
    },
    Af = function(t, a) {
        for (var s = 0, l = a.length, o = t.length; s < l; s++, o++) t[o] = a[s];
        return t
    };

function ta(t, a, s, l) {
    return {
        isApplicable: t,
        annotation: a,
        transform: s,
        untransform: l
    }
}
var C0 = [ta(O0, "undefined", function() {
    return null
}, function() {}), ta(yE, "bigint", function(t) {
    return t.toString()
}, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : (console.error("Please add a BigInt polyfill."), t)
}), ta(pE, "Date", function(t) {
    return t.toISOString()
}, function(t) {
    return new Date(t)
}), ta(mE, "Error", function(t, a) {
    var s = {
        name: t.name,
        message: t.message
    };
    return a.allowedErrorProps.forEach(function(l) {
        s[l] = t[l]
    }), s
}, function(t, a) {
    var s = new Error(t.message);
    return s.name = t.name, s.stack = t.stack, a.allowedErrorProps.forEach(function(l) {
        s[l] = t[l]
    }), s
}), ta(hE, "regexp", function(t) {
    return "" + t
}, function(t) {
    var a = t.slice(1, t.lastIndexOf("/")),
        s = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(a, s)
}), ta(tl, "set", function(t) {
    return Af([], Of(t.values()))
}, function(t) {
    return new Set(t)
}), ta(el, "map", function(t) {
    return Af([], Of(t.entries()))
}, function(t) {
    return new Map(t)
}), ta(function(t) {
    return By(t) || vE(t)
}, "number", function(t) {
    return By(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity"
}, Number), ta(function(t) {
    return t === 0 && 1 / t === -1 / 0
}, "number", function() {
    return "-0"
}, Number), ta(xE, "URL", function(t) {
    return t.toString()
}, function(t) {
    return new URL(t)
})];

function pc(t, a, s, l) {
    return {
        isApplicable: t,
        annotation: a,
        transform: s,
        untransform: l
    }
}
var j0 = pc(function(t, a) {
        if (A0(t)) {
            var s = !!a.symbolRegistry.getIdentifier(t);
            return s
        }
        return !1
    }, function(t, a) {
        var s = a.symbolRegistry.getIdentifier(t);
        return ["symbol", s]
    }, function(t) {
        return t.description
    }, function(t, a, s) {
        var l = s.symbolRegistry.getValue(a[1]);
        if (!l) throw new Error("Trying to deserialize unknown symbol");
        return l
    }),
    SE = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce(function(t, a) {
        return t[a.name] = a, t
    }, {}),
    R0 = pc(bE, function(t) {
        return ["typed-array", t.constructor.name]
    }, function(t) {
        return Af([], Of(t))
    }, function(t, a) {
        var s = SE[a[1]];
        if (!s) throw new Error("Trying to deserialize unknown typed array");
        return new s(t)
    });

function D0(t, a) {
    if (t?.constructor) {
        var s = !!a.classRegistry.getIdentifier(t.constructor);
        return s
    }
    return !1
}
var _0 = pc(D0, function(t, a) {
        var s = a.classRegistry.getIdentifier(t.constructor);
        return ["class", s]
    }, function(t, a) {
        var s = a.classRegistry.getAllowedProps(t.constructor);
        if (!s) return Ef({}, t);
        var l = {};
        return s.forEach(function(o) {
            l[o] = t[o]
        }), l
    }, function(t, a, s) {
        var l = s.classRegistry.getValue(a[1]);
        if (!l) throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
        return Object.assign(Object.create(l.prototype), t)
    }),
    M0 = pc(function(t, a) {
        return !!a.customTransformerRegistry.findApplicable(t)
    }, function(t, a) {
        var s = a.customTransformerRegistry.findApplicable(t);
        return ["custom", s.name]
    }, function(t, a) {
        var s = a.customTransformerRegistry.findApplicable(t);
        return s.serialize(t)
    }, function(t, a, s) {
        var l = s.customTransformerRegistry.findByName(a[1]);
        if (!l) throw new Error("Trying to deserialize unknown custom value");
        return l.deserialize(t)
    }),
    wE = [_0, j0, M0, R0],
    qy = function(t, a) {
        var s = Ly(wE, function(o) {
            return o.isApplicable(t, a)
        });
        if (s) return {
            value: s.transform(t, a),
            type: s.annotation(t, a)
        };
        var l = Ly(C0, function(o) {
            return o.isApplicable(t, a)
        });
        if (l) return {
            value: l.transform(t, a),
            type: l.annotation
        }
    },
    N0 = {};
C0.forEach(function(t) {
    N0[t.annotation] = t
});
var EE = function(t, a, s) {
        if (fr(a)) switch (a[0]) {
            case "symbol":
                return j0.untransform(t, a, s);
            case "class":
                return _0.untransform(t, a, s);
            case "custom":
                return M0.untransform(t, a, s);
            case "typed-array":
                return R0.untransform(t, a, s);
            default:
                throw new Error("Unknown transformation: " + a)
        } else {
            var l = N0[a];
            if (!l) throw new Error("Unknown transformation: " + a);
            return l.untransform(t, s)
        }
    },
    zs = function(t, a) {
        for (var s = t.keys(); a > 0;) s.next(), a--;
        return s.next().value
    };

function H0(t) {
    if (Ko(t, "__proto__")) throw new Error("__proto__ is not allowed as a property");
    if (Ko(t, "prototype")) throw new Error("prototype is not allowed as a property");
    if (Ko(t, "constructor")) throw new Error("constructor is not allowed as a property")
}
var OE = function(t, a) {
        H0(a);
        for (var s = 0; s < a.length; s++) {
            var l = a[s];
            if (tl(t)) t = zs(t, +l);
            else if (el(t)) {
                var o = +l,
                    u = +a[++s] == 0 ? "key" : "value",
                    d = zs(t, o);
                switch (u) {
                    case "key":
                        t = d;
                        break;
                    case "value":
                        t = t.get(d);
                        break
                }
            } else t = t[l]
        }
        return t
    },
    Tf = function(t, a, s) {
        if (H0(a), a.length === 0) return s(t);
        for (var l = t, o = 0; o < a.length - 1; o++) {
            var u = a[o];
            if (fr(l)) {
                var d = +u;
                l = l[d]
            } else if (Wi(l)) l = l[u];
            else if (tl(l)) {
                var h = +u;
                l = zs(l, h)
            } else if (el(l)) {
                var p = o === a.length - 2;
                if (p) break;
                var h = +u,
                    g = +a[++o] == 0 ? "key" : "value",
                    b = zs(l, h);
                switch (g) {
                    case "key":
                        l = b;
                        break;
                    case "value":
                        l = l.get(b);
                        break
                }
            }
        }
        var m = a[a.length - 1];
        if (fr(l) ? l[+m] = s(l[+m]) : Wi(l) && (l[m] = s(l[m])), tl(l)) {
            var S = zs(l, +m),
                E = s(S);
            S !== E && (l.delete(S), l.add(E))
        }
        if (el(l)) {
            var h = +a[a.length - 2],
                A = zs(l, h),
                g = +m == 0 ? "key" : "value";
            switch (g) {
                case "key": {
                    var O = s(A);
                    l.set(O, l.get(A)), O !== A && l.delete(A);
                    break
                }
                case "value": {
                    l.set(A, s(l.get(A)));
                    break
                }
            }
        }
        return t
    },
    Ra = function(t, a) {
        var s = typeof Symbol == "function" && t[Symbol.iterator];
        if (!s) return t;
        var l = s.call(t),
            o, u = [],
            d;
        try {
            for (;
                (a === void 0 || a-- > 0) && !(o = l.next()).done;) u.push(o.value)
        } catch (h) {
            d = {
                error: h
            }
        } finally {
            try {
                o && !o.done && (s = l.return) && s.call(l)
            } finally {
                if (d) throw d.error
            }
        }
        return u
    },
    or = function(t, a) {
        for (var s = 0, l = a.length, o = t.length; s < l; s++, o++) t[o] = a[s];
        return t
    };

function Cf(t, a, s) {
    if (s === void 0 && (s = []), !!t) {
        if (!fr(t)) {
            Qs(t, function(d, h) {
                return Cf(d, a, or(or([], Ra(s)), Ra(Ki(h))))
            });
            return
        }
        var l = Ra(t, 2),
            o = l[0],
            u = l[1];
        u && Qs(u, function(d, h) {
            Cf(d, a, or(or([], Ra(s)), Ra(Ki(h))))
        }), a(o, s)
    }
}

function AE(t, a, s) {
    return Cf(a, function(l, o) {
        t = Tf(t, o, function(u) {
            return EE(u, l, s)
        })
    }), t
}

function TE(t, a) {
    function s(d, h) {
        var p = OE(t, Ki(h));
        d.map(Ki).forEach(function(g) {
            t = Tf(t, g, function() {
                return p
            })
        })
    }
    if (fr(a)) {
        var l = Ra(a, 2),
            o = l[0],
            u = l[1];
        o.forEach(function(d) {
            t = Tf(t, Ki(d), function() {
                return t
            })
        }), u && Qs(u, s)
    } else Qs(a, s);
    return t
}
var CE = function(t, a) {
    return Wi(t) || fr(t) || el(t) || tl(t) || D0(t, a)
};

function jE(t, a, s) {
    var l = s.get(t);
    l ? l.push(a) : s.set(t, [a])
}

function RE(t, a) {
    var s = {},
        l = void 0;
    return t.forEach(function(o) {
        if (!(o.length <= 1)) {
            a || (o = o.map(function(p) {
                return p.map(String)
            }).sort(function(p, g) {
                return p.length - g.length
            }));
            var u = Ra(o),
                d = u[0],
                h = u.slice(1);
            d.length === 0 ? l = h.map(Fd) : s[Fd(d)] = h.map(Fd)
        }
    }), l ? wf(s) ? [l] : [l, s] : wf(s) ? void 0 : s
}
var z0 = function(t, a, s, l, o, u, d) {
    var h;
    o === void 0 && (o = []), u === void 0 && (u = []), d === void 0 && (d = new Map);
    var p = gE(t);
    if (!p) {
        jE(t, o, a);
        var g = d.get(t);
        if (g) return l ? {
            transformedValue: null
        } : g
    }
    if (!CE(t, s)) {
        var b = qy(t, s),
            m = b ? {
                transformedValue: b.value,
                annotations: [b.type]
            } : {
                transformedValue: t
            };
        return p || d.set(t, m), m
    }
    if (Ko(u, t)) return {
        transformedValue: null
    };
    var S = qy(t, s),
        E = (h = S?.value) !== null && h !== void 0 ? h : t,
        A = fr(E) ? [] : {},
        O = {};
    Qs(E, function(N, Y) {
        var K = z0(N, a, s, l, or(or([], Ra(o)), [Y]), or(or([], Ra(u)), [t]), d);
        A[Y] = K.transformedValue, fr(K.annotations) ? O[Y] = K.annotations : Wi(K.annotations) && Qs(K.annotations, function(Z, B) {
            O[T0(Y) + "." + B] = Z
        })
    });
    var R = wf(O) ? {
        transformedValue: A,
        annotations: S ? [S.type] : void 0
    } : {
        transformedValue: A,
        annotations: S ? [S.type, O] : O
    };
    return p || d.set(t, R), R
};

function k0(t) {
    return Object.prototype.toString.call(t).slice(8, -1)
}

function Qy(t) {
    return k0(t) === "Array"
}

function DE(t) {
    if (k0(t) !== "Object") return !1;
    const a = Object.getPrototypeOf(t);
    return !!a && a.constructor === Object && a === Object.prototype
}

function _E(t, a, s, l, o) {
    const u = {}.propertyIsEnumerable.call(l, a) ? "enumerable" : "nonenumerable";
    u === "enumerable" && (t[a] = s), o && u === "nonenumerable" && Object.defineProperty(t, a, {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
    })
}

function jf(t, a = {}) {
    if (Qy(t)) return t.map(o => jf(o, a));
    if (!DE(t)) return t;
    const s = Object.getOwnPropertyNames(t),
        l = Object.getOwnPropertySymbols(t);
    return [...s, ...l].reduce((o, u) => {
        if (Qy(a.props) && !a.props.includes(u)) return o;
        const d = t[u],
            h = jf(d, a);
        return _E(o, u, h, t, a.nonenumerable), o
    }, {})
}
var Ur = function() {
        return Ur = Object.assign || function(t) {
            for (var a, s = 1, l = arguments.length; s < l; s++) {
                a = arguments[s];
                for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
            }
            return t
        }, Ur.apply(this, arguments)
    },
    ME = function(t, a) {
        var s = typeof Symbol == "function" && t[Symbol.iterator];
        if (!s) return t;
        var l = s.call(t),
            o, u = [],
            d;
        try {
            for (;
                (a === void 0 || a-- > 0) && !(o = l.next()).done;) u.push(o.value)
        } catch (h) {
            d = {
                error: h
            }
        } finally {
            try {
                o && !o.done && (s = l.return) && s.call(l)
            } finally {
                if (d) throw d.error
            }
        }
        return u
    },
    NE = function(t, a) {
        for (var s = 0, l = a.length, o = t.length; s < l; s++, o++) t[o] = a[s];
        return t
    },
    Ma = (function() {
        function t(a) {
            var s = a === void 0 ? {} : a,
                l = s.dedupe,
                o = l === void 0 ? !1 : l;
            this.classRegistry = new aE, this.symbolRegistry = new E0(function(u) {
                var d;
                return (d = u.description) !== null && d !== void 0 ? d : ""
            }), this.customTransformerRegistry = new lE, this.allowedErrorProps = [], this.dedupe = o
        }
        return t.prototype.serialize = function(a) {
            var s = new Map,
                l = z0(a, s, this, this.dedupe),
                o = {
                    json: l.transformedValue
                };
            l.annotations && (o.meta = Ur(Ur({}, o.meta), {
                values: l.annotations
            }));
            var u = RE(s, this.dedupe);
            return u && (o.meta = Ur(Ur({}, o.meta), {
                referentialEqualities: u
            })), o
        }, t.prototype.deserialize = function(a) {
            var s = a.json,
                l = a.meta,
                o = jf(s);
            return l?.values && (o = AE(o, l.values, this)), l?.referentialEqualities && (o = TE(o, l.referentialEqualities)), o
        }, t.prototype.stringify = function(a) {
            return JSON.stringify(this.serialize(a))
        }, t.prototype.parse = function(a) {
            return this.deserialize(JSON.parse(a))
        }, t.prototype.registerClass = function(a, s) {
            this.classRegistry.register(a, s)
        }, t.prototype.registerSymbol = function(a, s) {
            this.symbolRegistry.register(a, s)
        }, t.prototype.registerCustom = function(a, s) {
            this.customTransformerRegistry.register(Ur({
                name: s
            }, a))
        }, t.prototype.allowErrorProps = function() {
            for (var a, s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
            (a = this.allowedErrorProps).push.apply(a, NE([], ME(s)))
        }, t.defaultInstance = new t, t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t
    })();
Ma.serialize;
Ma.deserialize;
Ma.stringify;
Ma.parse;
Ma.registerClass;
Ma.registerCustom;
Ma.registerSymbol;
Ma.allowErrorProps;
var HE = (t, a, s, l, o, u, d, h) => {
        let p = document.documentElement,
            g = ["light", "dark"];

        function b(E) {
            (Array.isArray(t) ? t : [t]).forEach(A => {
                let O = A === "class",
                    R = O && u ? o.map(N => u[N] || N) : o;
                O ? (p.classList.remove(...R), p.classList.add(u && u[E] ? u[E] : E)) : p.setAttribute(A, E)
            }), m(E)
        }

        function m(E) {
            h && g.includes(E) && (p.style.colorScheme = E)
        }

        function S() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }
        if (l) b(l);
        else try {
            let E = localStorage.getItem(a) || s,
                A = d && E === "system" ? S() : E;
            b(A)
        } catch {}
    },
    zE = x.createContext(void 0),
    kE = {
        setTheme: t => {},
        themes: []
    },
    UE = () => {
        var t;
        return (t = x.useContext(zE)) != null ? t : kE
    };
x.memo(({
    forcedTheme: t,
    storageKey: a,
    attribute: s,
    enableSystem: l,
    enableColorScheme: o,
    defaultTheme: u,
    value: d,
    themes: h,
    nonce: p,
    scriptProps: g
}) => {
    let b = JSON.stringify([s, a, u, t, h, d, l, o]).slice(1, -1);
    return x.createElement("script", {
        ...g,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? p : "",
        dangerouslySetInnerHTML: {
            __html: `(${HE.toString()})(${b})`
        }
    })
});
var cr = w0();
const LE = kv(cr);

function BE(t) {
    if (typeof document > "u") return;
    let a = document.head || document.getElementsByTagName("head")[0],
        s = document.createElement("style");
    s.type = "text/css", a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t))
}
const qE = t => {
        switch (t) {
            case "success":
                return YE;
            case "info":
                return VE;
            case "warning":
                return GE;
            case "error":
                return KE;
            default:
                return null
        }
    },
    QE = Array(12).fill(0),
    PE = ({
        visible: t,
        className: a
    }) => re.createElement("div", {
        className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
        "data-visible": t
    }, re.createElement("div", {
        className: "sonner-spinner"
    }, QE.map((s, l) => re.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${l}`
    })))),
    YE = re.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, re.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    GE = re.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, re.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    VE = re.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, re.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    KE = re.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, re.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    XE = re.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, re.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), re.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    ZE = () => {
        const [t, a] = re.useState(document.hidden);
        return re.useEffect(() => {
            const s = () => {
                a(document.hidden)
            };
            return document.addEventListener("visibilitychange", s), () => window.removeEventListener("visibilitychange", s)
        }, []), t
    };
let Rf = 1;
class IE {
    constructor() {
        this.subscribe = a => (this.subscribers.push(a), () => {
            const s = this.subscribers.indexOf(a);
            this.subscribers.splice(s, 1)
        }), this.publish = a => {
            this.subscribers.forEach(s => s(a))
        }, this.addToast = a => {
            this.publish(a), this.toasts = [...this.toasts, a]
        }, this.create = a => {
            var s;
            const {
                message: l,
                ...o
            } = a, u = typeof a?.id == "number" || ((s = a.id) == null ? void 0 : s.length) > 0 ? a.id : Rf++, d = this.toasts.find(p => p.id === u), h = a.dismissible === void 0 ? !0 : a.dismissible;
            return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), d ? this.toasts = this.toasts.map(p => p.id === u ? (this.publish({
                ...p,
                ...a,
                id: u,
                title: l
            }), {
                ...p,
                ...a,
                id: u,
                dismissible: h,
                title: l
            }) : p) : this.addToast({
                title: l,
                ...o,
                dismissible: h,
                id: u
            }), u
        }, this.dismiss = a => (a ? (this.dismissedToasts.add(a), requestAnimationFrame(() => this.subscribers.forEach(s => s({
            id: a,
            dismiss: !0
        })))) : this.toasts.forEach(s => {
            this.subscribers.forEach(l => l({
                id: s.id,
                dismiss: !0
            }))
        }), a), this.message = (a, s) => this.create({
            ...s,
            message: a
        }), this.error = (a, s) => this.create({
            ...s,
            message: a,
            type: "error"
        }), this.success = (a, s) => this.create({
            ...s,
            type: "success",
            message: a
        }), this.info = (a, s) => this.create({
            ...s,
            type: "info",
            message: a
        }), this.warning = (a, s) => this.create({
            ...s,
            type: "warning",
            message: a
        }), this.loading = (a, s) => this.create({
            ...s,
            type: "loading",
            message: a
        }), this.promise = (a, s) => {
            if (!s) return;
            let l;
            s.loading !== void 0 && (l = this.create({
                ...s,
                promise: a,
                type: "loading",
                message: s.loading,
                description: typeof s.description != "function" ? s.description : void 0
            }));
            const o = Promise.resolve(a instanceof Function ? a() : a);
            let u = l !== void 0,
                d;
            const h = o.then(async g => {
                    if (d = ["resolve", g], re.isValidElement(g)) u = !1, this.create({
                        id: l,
                        type: "default",
                        message: g
                    });
                    else if (FE(g) && !g.ok) {
                        u = !1;
                        const m = typeof s.error == "function" ? await s.error(`HTTP error! status: ${g.status}`) : s.error,
                            S = typeof s.description == "function" ? await s.description(`HTTP error! status: ${g.status}`) : s.description,
                            A = typeof m == "object" && !re.isValidElement(m) ? m : {
                                message: m
                            };
                        this.create({
                            id: l,
                            type: "error",
                            description: S,
                            ...A
                        })
                    } else if (g instanceof Error) {
                        u = !1;
                        const m = typeof s.error == "function" ? await s.error(g) : s.error,
                            S = typeof s.description == "function" ? await s.description(g) : s.description,
                            A = typeof m == "object" && !re.isValidElement(m) ? m : {
                                message: m
                            };
                        this.create({
                            id: l,
                            type: "error",
                            description: S,
                            ...A
                        })
                    } else if (s.success !== void 0) {
                        u = !1;
                        const m = typeof s.success == "function" ? await s.success(g) : s.success,
                            S = typeof s.description == "function" ? await s.description(g) : s.description,
                            A = typeof m == "object" && !re.isValidElement(m) ? m : {
                                message: m
                            };
                        this.create({
                            id: l,
                            type: "success",
                            description: S,
                            ...A
                        })
                    }
                }).catch(async g => {
                    if (d = ["reject", g], s.error !== void 0) {
                        u = !1;
                        const b = typeof s.error == "function" ? await s.error(g) : s.error,
                            m = typeof s.description == "function" ? await s.description(g) : s.description,
                            E = typeof b == "object" && !re.isValidElement(b) ? b : {
                                message: b
                            };
                        this.create({
                            id: l,
                            type: "error",
                            description: m,
                            ...E
                        })
                    }
                }).finally(() => {
                    u && (this.dismiss(l), l = void 0), s.finally == null || s.finally.call(s)
                }),
                p = () => new Promise((g, b) => h.then(() => d[0] === "reject" ? b(d[1]) : g(d[1])).catch(b));
            return typeof l != "string" && typeof l != "number" ? {
                unwrap: p
            } : Object.assign(l, {
                unwrap: p
            })
        }, this.custom = (a, s) => {
            const l = s?.id || Rf++;
            return this.create({
                jsx: a(l),
                id: l,
                ...s
            }), l
        }, this.getActiveToasts = () => this.toasts.filter(a => !this.dismissedToasts.has(a.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
    }
}
const ln = new IE,
    $E = (t, a) => {
        const s = a?.id || Rf++;
        return ln.addToast({
            title: t,
            ...a,
            id: s
        }), s
    },
    FE = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number",
    JE = $E,
    WE = () => ln.toasts,
    eO = () => ln.getActiveToasts(),
    Ge = Object.assign(JE, {
        success: ln.success,
        info: ln.info,
        warning: ln.warning,
        error: ln.error,
        custom: ln.custom,
        message: ln.message,
        promise: ln.promise,
        dismiss: ln.dismiss,
        loading: ln.loading
    }, {
        getHistory: WE,
        getToasts: eO
    });
BE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");

function Uo(t) {
    return t.label !== void 0
}
const tO = 3,
    nO = "24px",
    aO = "16px",
    Py = 4e3,
    rO = 356,
    sO = 14,
    iO = 45,
    lO = 200;

function na(...t) {
    return t.filter(Boolean).join(" ")
}

function oO(t) {
    const [a, s] = t.split("-"), l = [];
    return a && l.push(a), s && l.push(s), l
}
const cO = t => {
    var a, s, l, o, u, d, h, p, g;
    const {
        invert: b,
        toast: m,
        unstyled: S,
        interacting: E,
        setHeights: A,
        visibleToasts: O,
        heights: R,
        index: N,
        toasts: Y,
        expanded: K,
        removeToast: Z,
        defaultRichColors: B,
        closeButton: L,
        style: T,
        cancelButtonStyle: _,
        actionButtonStyle: F,
        className: $ = "",
        descriptionClassName: G = "",
        duration: te,
        position: le,
        gap: ne,
        expandByDefault: se,
        classNames: j,
        icons: H,
        closeButtonAriaLabel: z = "Close toast"
    } = t, [oe, de] = re.useState(null), [C, P] = re.useState(null), [U, I] = re.useState(!1), [ie, ce] = re.useState(!1), [ue, ve] = re.useState(!1), [Oe, Ee] = re.useState(!1), [it, je] = re.useState(!1), [vt, tt] = re.useState(0), [$t, Vt] = re.useState(0), wn = re.useRef(m.duration || te || Py), In = re.useRef(null), Et = re.useRef(null), Nt = N === 0, En = N + 1 <= O, ut = m.type, on = m.dismissible !== !1, ct = m.className || "", Na = m.descriptionClassName || "", On = re.useMemo(() => R.findIndex(ge => ge.toastId === m.id) || 0, [R, m.id]), Ft = re.useMemo(() => {
        var ge;
        return (ge = m.closeButton) != null ? ge : L
    }, [m.closeButton, L]), Ht = re.useMemo(() => m.duration || te || Py, [m.duration, te]), cn = re.useRef(0), Jt = re.useRef(0), Kt = re.useRef(0), un = re.useRef(null), [qn, Ot] = le.split("-"), zt = re.useMemo(() => R.reduce((ge, _e, Pe) => Pe >= On ? ge : ge + _e.height, 0), [R, On]), pt = ZE(), vr = m.invert || b, $n = ut === "loading";
    Jt.current = re.useMemo(() => On * ne + zt, [On, zt]), re.useEffect(() => {
        wn.current = Ht
    }, [Ht]), re.useEffect(() => {
        I(!0)
    }, []), re.useEffect(() => {
        const ge = Et.current;
        if (ge) {
            const _e = ge.getBoundingClientRect().height;
            return Vt(_e), A(Pe => [{
                toastId: m.id,
                height: _e,
                position: m.position
            }, ...Pe]), () => A(Pe => Pe.filter(Ve => Ve.toastId !== m.id))
        }
    }, [A, m.id]), re.useLayoutEffect(() => {
        if (!U) return;
        const ge = Et.current,
            _e = ge.style.height;
        ge.style.height = "auto";
        const Pe = ge.getBoundingClientRect().height;
        ge.style.height = _e, Vt(Pe), A(Ve => Ve.find(Ke => Ke.toastId === m.id) ? Ve.map(Ke => Ke.toastId === m.id ? {
            ...Ke,
            height: Pe
        } : Ke) : [{
            toastId: m.id,
            height: Pe,
            position: m.position
        }, ...Ve])
    }, [U, m.title, m.description, A, m.id, m.jsx, m.action, m.cancel]);
    const ae = re.useCallback(() => {
        ce(!0), tt(Jt.current), A(ge => ge.filter(_e => _e.toastId !== m.id)), setTimeout(() => {
            Z(m)
        }, lO)
    }, [m, Z, A, Jt]);
    re.useEffect(() => {
        if (m.promise && ut === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
        let ge;
        return K || E || pt ? (() => {
            if (Kt.current < cn.current) {
                const Ve = new Date().getTime() - cn.current;
                wn.current = wn.current - Ve
            }
            Kt.current = new Date().getTime()
        })() : (() => {
            wn.current !== 1 / 0 && (cn.current = new Date().getTime(), ge = setTimeout(() => {
                m.onAutoClose == null || m.onAutoClose.call(m, m), ae()
            }, wn.current))
        })(), () => clearTimeout(ge)
    }, [K, E, m, ut, pt, ae]), re.useEffect(() => {
        m.delete && (ae(), m.onDismiss == null || m.onDismiss.call(m, m))
    }, [ae, m.delete]);

    function Se() {
        var ge;
        if (H?.loading) {
            var _e;
            return re.createElement("div", {
                className: na(j?.loader, m == null || (_e = m.classNames) == null ? void 0 : _e.loader, "sonner-loader"),
                "data-visible": ut === "loading"
            }, H.loading)
        }
        return re.createElement(PE, {
            className: na(j?.loader, m == null || (ge = m.classNames) == null ? void 0 : ge.loader),
            visible: ut === "loading"
        })
    }
    const Re = m.icon || H?.[ut] || qE(ut);
    var xe, Je;
    return re.createElement("li", {
        tabIndex: 0,
        ref: Et,
        className: na($, ct, j?.toast, m == null || (a = m.classNames) == null ? void 0 : a.toast, j?.default, j?.[ut], m == null || (s = m.classNames) == null ? void 0 : s[ut]),
        "data-sonner-toast": "",
        "data-rich-colors": (xe = m.richColors) != null ? xe : B,
        "data-styled": !(m.jsx || m.unstyled || S),
        "data-mounted": U,
        "data-promise": !!m.promise,
        "data-swiped": it,
        "data-removed": ie,
        "data-visible": En,
        "data-y-position": qn,
        "data-x-position": Ot,
        "data-index": N,
        "data-front": Nt,
        "data-swiping": ue,
        "data-dismissible": on,
        "data-type": ut,
        "data-invert": vr,
        "data-swipe-out": Oe,
        "data-swipe-direction": C,
        "data-expanded": !!(K || se && U),
        "data-testid": m.testId,
        style: {
            "--index": N,
            "--toasts-before": N,
            "--z-index": Y.length - N,
            "--offset": `${ie?vt:Jt.current}px`,
            "--initial-height": se ? "auto" : `${$t}px`,
            ...T,
            ...m.style
        },
        onDragEnd: () => {
            ve(!1), de(null), un.current = null
        },
        onPointerDown: ge => {
            ge.button !== 2 && ($n || !on || (In.current = new Date, tt(Jt.current), ge.target.setPointerCapture(ge.pointerId), ge.target.tagName !== "BUTTON" && (ve(!0), un.current = {
                x: ge.clientX,
                y: ge.clientY
            })))
        },
        onPointerUp: () => {
            var ge, _e, Pe;
            if (Oe || !on) return;
            un.current = null;
            const Ve = Number(((ge = Et.current) == null ? void 0 : ge.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                At = Number(((_e = Et.current) == null ? void 0 : _e.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Ke = new Date().getTime() - ((Pe = In.current) == null ? void 0 : Pe.getTime()),
                Le = oe === "x" ? Ve : At,
                Pt = Math.abs(Le) / Ke;
            if (Math.abs(Le) >= iO || Pt > .11) {
                tt(Jt.current), m.onDismiss == null || m.onDismiss.call(m, m), P(oe === "x" ? Ve > 0 ? "right" : "left" : At > 0 ? "down" : "up"), ae(), Ee(!0);
                return
            } else {
                var at, lt;
                (at = Et.current) == null || at.style.setProperty("--swipe-amount-x", "0px"), (lt = Et.current) == null || lt.style.setProperty("--swipe-amount-y", "0px")
            }
            je(!1), ve(!1), de(null)
        },
        onPointerMove: ge => {
            var _e, Pe, Ve;
            if (!un.current || !on || ((_e = window.getSelection()) == null ? void 0 : _e.toString().length) > 0) return;
            const Ke = ge.clientY - un.current.y,
                Le = ge.clientX - un.current.x;
            var Pt;
            const at = (Pt = t.swipeDirections) != null ? Pt : oO(le);
            !oe && (Math.abs(Le) > 1 || Math.abs(Ke) > 1) && de(Math.abs(Le) > Math.abs(Ke) ? "x" : "y");
            let lt = {
                x: 0,
                y: 0
            };
            const An = kt => 1 / (1.5 + Math.abs(kt) / 20);
            if (oe === "y") {
                if (at.includes("top") || at.includes("bottom"))
                    if (at.includes("top") && Ke < 0 || at.includes("bottom") && Ke > 0) lt.y = Ke;
                    else {
                        const kt = Ke * An(Ke);
                        lt.y = Math.abs(kt) < Math.abs(Ke) ? kt : Ke
                    }
            } else if (oe === "x" && (at.includes("left") || at.includes("right")))
                if (at.includes("left") && Le < 0 || at.includes("right") && Le > 0) lt.x = Le;
                else {
                    const kt = Le * An(Le);
                    lt.x = Math.abs(kt) < Math.abs(Le) ? kt : Le
                }(Math.abs(lt.x) > 0 || Math.abs(lt.y) > 0) && je(!0), (Pe = Et.current) == null || Pe.style.setProperty("--swipe-amount-x", `${lt.x}px`), (Ve = Et.current) == null || Ve.style.setProperty("--swipe-amount-y", `${lt.y}px`)
        }
    }, Ft && !m.jsx && ut !== "loading" ? re.createElement("button", {
        "aria-label": z,
        "data-disabled": $n,
        "data-close-button": !0,
        onClick: $n || !on ? () => {} : () => {
            ae(), m.onDismiss == null || m.onDismiss.call(m, m)
        },
        className: na(j?.closeButton, m == null || (l = m.classNames) == null ? void 0 : l.closeButton)
    }, (Je = H?.close) != null ? Je : XE) : null, (ut || m.icon || m.promise) && m.icon !== null && (H?.[ut] !== null || m.icon) ? re.createElement("div", {
        "data-icon": "",
        className: na(j?.icon, m == null || (o = m.classNames) == null ? void 0 : o.icon)
    }, m.promise || m.type === "loading" && !m.icon ? m.icon || Se() : null, m.type !== "loading" ? Re : null) : null, re.createElement("div", {
        "data-content": "",
        className: na(j?.content, m == null || (u = m.classNames) == null ? void 0 : u.content)
    }, re.createElement("div", {
        "data-title": "",
        className: na(j?.title, m == null || (d = m.classNames) == null ? void 0 : d.title)
    }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? re.createElement("div", {
        "data-description": "",
        className: na(G, Na, j?.description, m == null || (h = m.classNames) == null ? void 0 : h.description)
    }, typeof m.description == "function" ? m.description() : m.description) : null), re.isValidElement(m.cancel) ? m.cancel : m.cancel && Uo(m.cancel) ? re.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: m.cancelButtonStyle || _,
        onClick: ge => {
            Uo(m.cancel) && on && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, ge), ae())
        },
        className: na(j?.cancelButton, m == null || (p = m.classNames) == null ? void 0 : p.cancelButton)
    }, m.cancel.label) : null, re.isValidElement(m.action) ? m.action : m.action && Uo(m.action) ? re.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: m.actionButtonStyle || F,
        onClick: ge => {
            Uo(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, ge), !ge.defaultPrevented && ae())
        },
        className: na(j?.actionButton, m == null || (g = m.classNames) == null ? void 0 : g.actionButton)
    }, m.action.label) : null)
};

function Yy() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}

function uO(t, a) {
    const s = {};
    return [t, a].forEach((l, o) => {
        const u = o === 1,
            d = u ? "--mobile-offset" : "--offset",
            h = u ? aO : nO;

        function p(g) {
            ["top", "right", "bottom", "left"].forEach(b => {
                s[`${d}-${b}`] = typeof g == "number" ? `${g}px` : g
            })
        }
        typeof l == "number" || typeof l == "string" ? p(l) : typeof l == "object" ? ["top", "right", "bottom", "left"].forEach(g => {
            l[g] === void 0 ? s[`${d}-${g}`] = h : s[`${d}-${g}`] = typeof l[g] == "number" ? `${l[g]}px` : l[g]
        }) : p(h)
    }), s
}
const dO = re.forwardRef(function(a, s) {
        const {
            id: l,
            invert: o,
            position: u = "bottom-right",
            hotkey: d = ["altKey", "KeyT"],
            expand: h,
            closeButton: p,
            className: g,
            offset: b,
            mobileOffset: m,
            theme: S = "light",
            richColors: E,
            duration: A,
            style: O,
            visibleToasts: R = tO,
            toastOptions: N,
            dir: Y = Yy(),
            gap: K = sO,
            icons: Z,
            containerAriaLabel: B = "Notifications"
        } = a, [L, T] = re.useState([]), _ = re.useMemo(() => l ? L.filter(U => U.toasterId === l) : L.filter(U => !U.toasterId), [L, l]), F = re.useMemo(() => Array.from(new Set([u].concat(_.filter(U => U.position).map(U => U.position)))), [_, u]), [$, G] = re.useState([]), [te, le] = re.useState(!1), [ne, se] = re.useState(!1), [j, H] = re.useState(S !== "system" ? S : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), z = re.useRef(null), oe = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), de = re.useRef(null), C = re.useRef(!1), P = re.useCallback(U => {
            T(I => {
                var ie;
                return (ie = I.find(ce => ce.id === U.id)) != null && ie.delete || ln.dismiss(U.id), I.filter(({
                    id: ce
                }) => ce !== U.id)
            })
        }, []);
        return re.useEffect(() => ln.subscribe(U => {
            if (U.dismiss) {
                requestAnimationFrame(() => {
                    T(I => I.map(ie => ie.id === U.id ? {
                        ...ie,
                        delete: !0
                    } : ie))
                });
                return
            }
            setTimeout(() => {
                LE.flushSync(() => {
                    T(I => {
                        const ie = I.findIndex(ce => ce.id === U.id);
                        return ie !== -1 ? [...I.slice(0, ie), {
                            ...I[ie],
                            ...U
                        }, ...I.slice(ie + 1)] : [U, ...I]
                    })
                })
            })
        }), [L]), re.useEffect(() => {
            if (S !== "system") {
                H(S);
                return
            }
            if (S === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window > "u") return;
            const U = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                U.addEventListener("change", ({
                    matches: I
                }) => {
                    H(I ? "dark" : "light")
                })
            } catch {
                U.addListener(({
                    matches: ie
                }) => {
                    try {
                        H(ie ? "dark" : "light")
                    } catch (ce) {
                        console.error(ce)
                    }
                })
            }
        }, [S]), re.useEffect(() => {
            L.length <= 1 && le(!1)
        }, [L]), re.useEffect(() => {
            const U = I => {
                var ie;
                if (d.every(ve => I[ve] || I.code === ve)) {
                    var ue;
                    le(!0), (ue = z.current) == null || ue.focus()
                }
                I.code === "Escape" && (document.activeElement === z.current || (ie = z.current) != null && ie.contains(document.activeElement)) && le(!1)
            };
            return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U)
        }, [d]), re.useEffect(() => {
            if (z.current) return () => {
                de.current && (de.current.focus({
                    preventScroll: !0
                }), de.current = null, C.current = !1)
            }
        }, [z.current]), re.createElement("section", {
            ref: s,
            "aria-label": `${B} ${oe}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, F.map((U, I) => {
            var ie;
            const [ce, ue] = U.split("-");
            return _.length ? re.createElement("ol", {
                key: U,
                dir: Y === "auto" ? Yy() : Y,
                tabIndex: -1,
                ref: z,
                className: g,
                "data-sonner-toaster": !0,
                "data-sonner-theme": j,
                "data-y-position": ce,
                "data-x-position": ue,
                style: {
                    "--front-toast-height": `${((ie=$[0])==null?void 0:ie.height)||0}px`,
                    "--width": `${rO}px`,
                    "--gap": `${K}px`,
                    ...O,
                    ...uO(b, m)
                },
                onBlur: ve => {
                    C.current && !ve.currentTarget.contains(ve.relatedTarget) && (C.current = !1, de.current && (de.current.focus({
                        preventScroll: !0
                    }), de.current = null))
                },
                onFocus: ve => {
                    ve.target instanceof HTMLElement && ve.target.dataset.dismissible === "false" || C.current || (C.current = !0, de.current = ve.relatedTarget)
                },
                onMouseEnter: () => le(!0),
                onMouseMove: () => le(!0),
                onMouseLeave: () => {
                    ne || le(!1)
                },
                onDragEnd: () => le(!1),
                onPointerDown: ve => {
                    ve.target instanceof HTMLElement && ve.target.dataset.dismissible === "false" || se(!0)
                },
                onPointerUp: () => se(!1)
            }, _.filter(ve => !ve.position && I === 0 || ve.position === U).map((ve, Oe) => {
                var Ee, it;
                return re.createElement(cO, {
                    key: ve.id,
                    icons: Z,
                    index: Oe,
                    toast: ve,
                    defaultRichColors: E,
                    duration: (Ee = N?.duration) != null ? Ee : A,
                    className: N?.className,
                    descriptionClassName: N?.descriptionClassName,
                    invert: o,
                    visibleToasts: R,
                    closeButton: (it = N?.closeButton) != null ? it : p,
                    interacting: ne,
                    position: U,
                    style: N?.style,
                    unstyled: N?.unstyled,
                    classNames: N?.classNames,
                    cancelButtonStyle: N?.cancelButtonStyle,
                    actionButtonStyle: N?.actionButtonStyle,
                    closeButtonAriaLabel: N?.closeButtonAriaLabel,
                    removeToast: P,
                    toasts: _.filter(je => je.position == ve.position),
                    heights: $.filter(je => je.position == ve.position),
                    setHeights: G,
                    expandByDefault: h,
                    gap: K,
                    expanded: te,
                    swipeDirections: a.swipeDirections
                })
            })) : null
        }))
    }),
    fO = ({
        ...t
    }) => {
        const {
            theme: a = "system"
        } = UE();
        return y.jsx(dO, {
            "data-loc": "client/src/components/ui/sonner.tsx:8",
            theme: a,
            className: "toaster group",
            style: {
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)"
            },
            ...t
        })
    };

function ja(t, a, {
    checkForDefaultPrevented: s = !0
} = {}) {
    return function(o) {
        if (t?.(o), s === !1 || !o.defaultPrevented) return a?.(o)
    }
}

function Gy(t, a) {
    if (typeof t == "function") return t(a);
    t != null && (t.current = a)
}

function U0(...t) {
    return a => {
        let s = !1;
        const l = t.map(o => {
            const u = Gy(o, a);
            return !s && typeof u == "function" && (s = !0), u
        });
        if (s) return () => {
            for (let o = 0; o < l.length; o++) {
                const u = l[o];
                typeof u == "function" ? u() : Gy(t[o], null)
            }
        }
    }
}

function Xr(...t) {
    return x.useCallback(U0(...t), t)
}

function L0(t, a = []) {
    let s = [];

    function l(u, d) {
        const h = x.createContext(d),
            p = s.length;
        s = [...s, d];
        const g = m => {
            const {
                scope: S,
                children: E,
                ...A
            } = m, O = S?.[t]?.[p] || h, R = x.useMemo(() => A, Object.values(A));
            return y.jsx(O.Provider, {
                value: R,
                children: E
            })
        };
        g.displayName = u + "Provider";

        function b(m, S) {
            const E = S?.[t]?.[p] || h,
                A = x.useContext(E);
            if (A) return A;
            if (d !== void 0) return d;
            throw new Error(`\`${m}\` must be used within \`${u}\``)
        }
        return [g, b]
    }
    const o = () => {
        const u = s.map(d => x.createContext(d));
        return function(h) {
            const p = h?.[t] || u;
            return x.useMemo(() => ({
                [`__scope${t}`]: {
                    ...h,
                    [t]: p
                }
            }), [h, p])
        }
    };
    return o.scopeName = t, [l, hO(o, ...a)]
}

function hO(...t) {
    const a = t[0];
    if (t.length === 1) return a;
    const s = () => {
        const l = t.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(u) {
            const d = l.reduce((h, {
                useScope: p,
                scopeName: g
            }) => {
                const m = p(u)[`__scope${g}`];
                return {
                    ...h,
                    ...m
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${a.scopeName}`]: d
            }), [d])
        }
    };
    return s.scopeName = a.scopeName, s
}

function B0(t) {
    const a = mO(t),
        s = x.forwardRef((l, o) => {
            const {
                children: u,
                ...d
            } = l, h = x.Children.toArray(u), p = h.find(yO);
            if (p) {
                const g = p.props.children,
                    b = h.map(m => m === p ? x.Children.count(g) > 1 ? x.Children.only(null) : x.isValidElement(g) ? g.props.children : null : m);
                return y.jsx(a, {
                    ...d,
                    ref: o,
                    children: x.isValidElement(g) ? x.cloneElement(g, void 0, b) : null
                })
            }
            return y.jsx(a, {
                ...d,
                ref: o,
                children: u
            })
        });
    return s.displayName = `${t}.Slot`, s
}
var pO = B0("Slot");

function mO(t) {
    const a = x.forwardRef((s, l) => {
        const {
            children: o,
            ...u
        } = s;
        if (x.isValidElement(o)) {
            const d = bO(o),
                h = vO(u, o.props);
            return o.type !== x.Fragment && (h.ref = l ? U0(l, d) : d), x.cloneElement(o, h)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    });
    return a.displayName = `${t}.SlotClone`, a
}
var q0 = Symbol("radix.slottable");

function gO(t) {
    const a = ({
        children: s
    }) => y.jsx(y.Fragment, {
        children: s
    });
    return a.displayName = `${t}.Slottable`, a.__radixId = q0, a
}

function yO(t) {
    return x.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === q0
}

function vO(t, a) {
    const s = {
        ...a
    };
    for (const l in a) {
        const o = t[l],
            u = a[l];
        /^on[A-Z]/.test(l) ? o && u ? s[l] = (...h) => {
            const p = u(...h);
            return o(...h), p
        } : o && (s[l] = o) : l === "style" ? s[l] = {
            ...o,
            ...u
        } : l === "className" && (s[l] = [o, u].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...s
    }
}

function bO(t) {
    let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
        s = a && "isReactWarning" in a && a.isReactWarning;
    return s ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning, s ? t.props.ref : t.props.ref || t.ref)
}
var xO = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Zr = xO.reduce((t, a) => {
        const s = B0(`Primitive.${a}`),
            l = x.forwardRef((o, u) => {
                const {
                    asChild: d,
                    ...h
                } = o, p = d ? s : a;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(p, {
                    ...h,
                    ref: u
                })
            });
        return l.displayName = `Primitive.${a}`, {
            ...t,
            [a]: l
        }
    }, {});

function SO(t, a) {
    t && cr.flushSync(() => t.dispatchEvent(a))
}

function mc(t) {
    const a = x.useRef(t);
    return x.useEffect(() => {
        a.current = t
    }), x.useMemo(() => (...s) => a.current?.(...s), [])
}

function wO(t, a = globalThis?.document) {
    const s = mc(t);
    x.useEffect(() => {
        const l = o => {
            o.key === "Escape" && s(o)
        };
        return a.addEventListener("keydown", l, {
            capture: !0
        }), () => a.removeEventListener("keydown", l, {
            capture: !0
        })
    }, [s, a])
}
var EO = "DismissableLayer",
    Df = "dismissableLayer.update",
    OO = "dismissableLayer.pointerDownOutside",
    AO = "dismissableLayer.focusOutside",
    Vy, Q0 = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    P0 = x.forwardRef((t, a) => {
        const {
            disableOutsidePointerEvents: s = !1,
            onEscapeKeyDown: l,
            onPointerDownOutside: o,
            onFocusOutside: u,
            onInteractOutside: d,
            onDismiss: h,
            ...p
        } = t, g = x.useContext(Q0), [b, m] = x.useState(null), S = b?.ownerDocument ?? globalThis?.document, [, E] = x.useState({}), A = Xr(a, T => m(T)), O = Array.from(g.layers), [R] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), N = O.indexOf(R), Y = b ? O.indexOf(b) : -1, K = g.layersWithOutsidePointerEventsDisabled.size > 0, Z = Y >= N, B = jO(T => {
            const _ = T.target,
                F = [...g.branches].some($ => $.contains(_));
            !Z || F || (o?.(T), d?.(T), T.defaultPrevented || h?.())
        }, S), L = RO(T => {
            const _ = T.target;
            [...g.branches].some($ => $.contains(_)) || (u?.(T), d?.(T), T.defaultPrevented || h?.())
        }, S);
        return wO(T => {
            Y === g.layers.size - 1 && (l?.(T), !T.defaultPrevented && h && (T.preventDefault(), h()))
        }, S), x.useEffect(() => {
            if (b) return s && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Vy = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(b)), g.layers.add(b), Ky(), () => {
                s && g.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Vy)
            }
        }, [b, S, s, g]), x.useEffect(() => () => {
            b && (g.layers.delete(b), g.layersWithOutsidePointerEventsDisabled.delete(b), Ky())
        }, [b, g]), x.useEffect(() => {
            const T = () => E({});
            return document.addEventListener(Df, T), () => document.removeEventListener(Df, T)
        }, []), y.jsx(Zr.div, {
            ...p,
            ref: A,
            style: {
                pointerEvents: K ? Z ? "auto" : "none" : void 0,
                ...t.style
            },
            onFocusCapture: ja(t.onFocusCapture, L.onFocusCapture),
            onBlurCapture: ja(t.onBlurCapture, L.onBlurCapture),
            onPointerDownCapture: ja(t.onPointerDownCapture, B.onPointerDownCapture)
        })
    });
P0.displayName = EO;
var TO = "DismissableLayerBranch",
    CO = x.forwardRef((t, a) => {
        const s = x.useContext(Q0),
            l = x.useRef(null),
            o = Xr(a, l);
        return x.useEffect(() => {
            const u = l.current;
            if (u) return s.branches.add(u), () => {
                s.branches.delete(u)
            }
        }, [s.branches]), y.jsx(Zr.div, {
            ...t,
            ref: o
        })
    });
CO.displayName = TO;

function jO(t, a = globalThis?.document) {
    const s = mc(t),
        l = x.useRef(!1),
        o = x.useRef(() => {});
    return x.useEffect(() => {
        const u = h => {
                if (h.target && !l.current) {
                    let p = function() {
                        Y0(OO, s, g, {
                            discrete: !0
                        })
                    };
                    const g = {
                        originalEvent: h
                    };
                    h.pointerType === "touch" ? (a.removeEventListener("click", o.current), o.current = p, a.addEventListener("click", o.current, {
                        once: !0
                    })) : p()
                } else a.removeEventListener("click", o.current);
                l.current = !1
            },
            d = window.setTimeout(() => {
                a.addEventListener("pointerdown", u)
            }, 0);
        return () => {
            window.clearTimeout(d), a.removeEventListener("pointerdown", u), a.removeEventListener("click", o.current)
        }
    }, [a, s]), {
        onPointerDownCapture: () => l.current = !0
    }
}

function RO(t, a = globalThis?.document) {
    const s = mc(t),
        l = x.useRef(!1);
    return x.useEffect(() => {
        const o = u => {
            u.target && !l.current && Y0(AO, s, {
                originalEvent: u
            }, {
                discrete: !1
            })
        };
        return a.addEventListener("focusin", o), () => a.removeEventListener("focusin", o)
    }, [a, s]), {
        onFocusCapture: () => l.current = !0,
        onBlurCapture: () => l.current = !1
    }
}

function Ky() {
    const t = new CustomEvent(Df);
    document.dispatchEvent(t)
}

function Y0(t, a, s, {
    discrete: l
}) {
    const o = s.originalEvent.target,
        u = new CustomEvent(t, {
            bubbles: !1,
            cancelable: !0,
            detail: s
        });
    a && o.addEventListener(t, a, {
        once: !0
    }), l ? SO(o, u) : o.dispatchEvent(u)
}
var nl = globalThis?.document ? x.useLayoutEffect : () => {};
const DO = ["top", "right", "bottom", "left"],
    hr = Math.min,
    bn = Math.max,
    $o = Math.round,
    Lo = Math.floor,
    sa = t => ({
        x: t,
        y: t
    }),
    _O = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    MO = {
        start: "end",
        end: "start"
    };

function _f(t, a, s) {
    return bn(t, hr(a, s))
}

function Da(t, a) {
    return typeof t == "function" ? t(a) : t
}

function _a(t) {
    return t.split("-")[0]
}

function Gs(t) {
    return t.split("-")[1]
}

function Wf(t) {
    return t === "x" ? "y" : "x"
}

function eh(t) {
    return t === "y" ? "height" : "width"
}
const NO = new Set(["top", "bottom"]);

function ra(t) {
    return NO.has(_a(t)) ? "y" : "x"
}

function th(t) {
    return Wf(ra(t))
}

function HO(t, a, s) {
    s === void 0 && (s = !1);
    const l = Gs(t),
        o = th(t),
        u = eh(o);
    let d = o === "x" ? l === (s ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
    return a.reference[u] > a.floating[u] && (d = Fo(d)), [d, Fo(d)]
}

function zO(t) {
    const a = Fo(t);
    return [Mf(t), a, Mf(a)]
}

function Mf(t) {
    return t.replace(/start|end/g, a => MO[a])
}
const Xy = ["left", "right"],
    Zy = ["right", "left"],
    kO = ["top", "bottom"],
    UO = ["bottom", "top"];

function LO(t, a, s) {
    switch (t) {
        case "top":
        case "bottom":
            return s ? a ? Zy : Xy : a ? Xy : Zy;
        case "left":
        case "right":
            return a ? kO : UO;
        default:
            return []
    }
}

function BO(t, a, s, l) {
    const o = Gs(t);
    let u = LO(_a(t), s === "start", l);
    return o && (u = u.map(d => d + "-" + o), a && (u = u.concat(u.map(Mf)))), u
}

function Fo(t) {
    return t.replace(/left|right|bottom|top/g, a => _O[a])
}

function qO(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function G0(t) {
    return typeof t != "number" ? qO(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function Jo(t) {
    const {
        x: a,
        y: s,
        width: l,
        height: o
    } = t;
    return {
        width: l,
        height: o,
        top: s,
        left: a,
        right: a + l,
        bottom: s + o,
        x: a,
        y: s
    }
}

function Iy(t, a, s) {
    let {
        reference: l,
        floating: o
    } = t;
    const u = ra(a),
        d = th(a),
        h = eh(d),
        p = _a(a),
        g = u === "y",
        b = l.x + l.width / 2 - o.width / 2,
        m = l.y + l.height / 2 - o.height / 2,
        S = l[h] / 2 - o[h] / 2;
    let E;
    switch (p) {
        case "top":
            E = {
                x: b,
                y: l.y - o.height
            };
            break;
        case "bottom":
            E = {
                x: b,
                y: l.y + l.height
            };
            break;
        case "right":
            E = {
                x: l.x + l.width,
                y: m
            };
            break;
        case "left":
            E = {
                x: l.x - o.width,
                y: m
            };
            break;
        default:
            E = {
                x: l.x,
                y: l.y
            }
    }
    switch (Gs(a)) {
        case "start":
            E[d] -= S * (s && g ? -1 : 1);
            break;
        case "end":
            E[d] += S * (s && g ? -1 : 1);
            break
    }
    return E
}
const QO = async (t, a, s) => {
    const {
        placement: l = "bottom",
        strategy: o = "absolute",
        middleware: u = [],
        platform: d
    } = s, h = u.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(a));
    let g = await d.getElementRects({
            reference: t,
            floating: a,
            strategy: o
        }),
        {
            x: b,
            y: m
        } = Iy(g, l, p),
        S = l,
        E = {},
        A = 0;
    for (let O = 0; O < h.length; O++) {
        const {
            name: R,
            fn: N
        } = h[O], {
            x: Y,
            y: K,
            data: Z,
            reset: B
        } = await N({
            x: b,
            y: m,
            initialPlacement: l,
            placement: S,
            strategy: o,
            middlewareData: E,
            rects: g,
            platform: d,
            elements: {
                reference: t,
                floating: a
            }
        });
        b = Y ?? b, m = K ?? m, E = {
            ...E,
            [R]: {
                ...E[R],
                ...Z
            }
        }, B && A <= 50 && (A++, typeof B == "object" && (B.placement && (S = B.placement), B.rects && (g = B.rects === !0 ? await d.getElementRects({
            reference: t,
            floating: a,
            strategy: o
        }) : B.rects), {
            x: b,
            y: m
        } = Iy(g, S, p)), O = -1)
    }
    return {
        x: b,
        y: m,
        placement: S,
        strategy: o,
        middlewareData: E
    }
};
async function al(t, a) {
    var s;
    a === void 0 && (a = {});
    const {
        x: l,
        y: o,
        platform: u,
        rects: d,
        elements: h,
        strategy: p
    } = t, {
        boundary: g = "clippingAncestors",
        rootBoundary: b = "viewport",
        elementContext: m = "floating",
        altBoundary: S = !1,
        padding: E = 0
    } = Da(a, t), A = G0(E), R = h[S ? m === "floating" ? "reference" : "floating" : m], N = Jo(await u.getClippingRect({
        element: (s = await (u.isElement == null ? void 0 : u.isElement(R))) == null || s ? R : R.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
        boundary: g,
        rootBoundary: b,
        strategy: p
    })), Y = m === "floating" ? {
        x: l,
        y: o,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference, K = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), Z = await (u.isElement == null ? void 0 : u.isElement(K)) ? await (u.getScale == null ? void 0 : u.getScale(K)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, B = Jo(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: h,
        rect: Y,
        offsetParent: K,
        strategy: p
    }) : Y);
    return {
        top: (N.top - B.top + A.top) / Z.y,
        bottom: (B.bottom - N.bottom + A.bottom) / Z.y,
        left: (N.left - B.left + A.left) / Z.x,
        right: (B.right - N.right + A.right) / Z.x
    }
}
const PO = t => ({
        name: "arrow",
        options: t,
        async fn(a) {
            const {
                x: s,
                y: l,
                placement: o,
                rects: u,
                platform: d,
                elements: h,
                middlewareData: p
            } = a, {
                element: g,
                padding: b = 0
            } = Da(t, a) || {};
            if (g == null) return {};
            const m = G0(b),
                S = {
                    x: s,
                    y: l
                },
                E = th(o),
                A = eh(E),
                O = await d.getDimensions(g),
                R = E === "y",
                N = R ? "top" : "left",
                Y = R ? "bottom" : "right",
                K = R ? "clientHeight" : "clientWidth",
                Z = u.reference[A] + u.reference[E] - S[E] - u.floating[A],
                B = S[E] - u.reference[E],
                L = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g));
            let T = L ? L[K] : 0;
            (!T || !await (d.isElement == null ? void 0 : d.isElement(L))) && (T = h.floating[K] || u.floating[A]);
            const _ = Z / 2 - B / 2,
                F = T / 2 - O[A] / 2 - 1,
                $ = hr(m[N], F),
                G = hr(m[Y], F),
                te = $,
                le = T - O[A] - G,
                ne = T / 2 - O[A] / 2 + _,
                se = _f(te, ne, le),
                j = !p.arrow && Gs(o) != null && ne !== se && u.reference[A] / 2 - (ne < te ? $ : G) - O[A] / 2 < 0,
                H = j ? ne < te ? ne - te : ne - le : 0;
            return {
                [E]: S[E] + H,
                data: {
                    [E]: se,
                    centerOffset: ne - se - H,
                    ...j && {
                        alignmentOffset: H
                    }
                },
                reset: j
            }
        }
    }),
    YO = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            async fn(a) {
                var s, l;
                const {
                    placement: o,
                    middlewareData: u,
                    rects: d,
                    initialPlacement: h,
                    platform: p,
                    elements: g
                } = a, {
                    mainAxis: b = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: S,
                    fallbackStrategy: E = "bestFit",
                    fallbackAxisSideDirection: A = "none",
                    flipAlignment: O = !0,
                    ...R
                } = Da(t, a);
                if ((s = u.arrow) != null && s.alignmentOffset) return {};
                const N = _a(o),
                    Y = ra(h),
                    K = _a(h) === h,
                    Z = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
                    B = S || (K || !O ? [Fo(h)] : zO(h)),
                    L = A !== "none";
                !S && L && B.push(...BO(h, O, A, Z));
                const T = [h, ...B],
                    _ = await al(a, R),
                    F = [];
                let $ = ((l = u.flip) == null ? void 0 : l.overflows) || [];
                if (b && F.push(_[N]), m) {
                    const ne = HO(o, d, Z);
                    F.push(_[ne[0]], _[ne[1]])
                }
                if ($ = [...$, {
                        placement: o,
                        overflows: F
                    }], !F.every(ne => ne <= 0)) {
                    var G, te;
                    const ne = (((G = u.flip) == null ? void 0 : G.index) || 0) + 1,
                        se = T[ne];
                    if (se && (!(m === "alignment" ? Y !== ra(se) : !1) || $.every(z => ra(z.placement) === Y ? z.overflows[0] > 0 : !0))) return {
                        data: {
                            index: ne,
                            overflows: $
                        },
                        reset: {
                            placement: se
                        }
                    };
                    let j = (te = $.filter(H => H.overflows[0] <= 0).sort((H, z) => H.overflows[1] - z.overflows[1])[0]) == null ? void 0 : te.placement;
                    if (!j) switch (E) {
                        case "bestFit": {
                            var le;
                            const H = (le = $.filter(z => {
                                if (L) {
                                    const oe = ra(z.placement);
                                    return oe === Y || oe === "y"
                                }
                                return !0
                            }).map(z => [z.placement, z.overflows.filter(oe => oe > 0).reduce((oe, de) => oe + de, 0)]).sort((z, oe) => z[1] - oe[1])[0]) == null ? void 0 : le[0];
                            H && (j = H);
                            break
                        }
                        case "initialPlacement":
                            j = h;
                            break
                    }
                    if (o !== j) return {
                        reset: {
                            placement: j
                        }
                    }
                }
                return {}
            }
        }
    };

function $y(t, a) {
    return {
        top: t.top - a.height,
        right: t.right - a.width,
        bottom: t.bottom - a.height,
        left: t.left - a.width
    }
}

function Fy(t) {
    return DO.some(a => t[a] >= 0)
}
const GO = function(t) {
        return t === void 0 && (t = {}), {
            name: "hide",
            options: t,
            async fn(a) {
                const {
                    rects: s
                } = a, {
                    strategy: l = "referenceHidden",
                    ...o
                } = Da(t, a);
                switch (l) {
                    case "referenceHidden": {
                        const u = await al(a, {
                                ...o,
                                elementContext: "reference"
                            }),
                            d = $y(u, s.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: d,
                                referenceHidden: Fy(d)
                            }
                        }
                    }
                    case "escaped": {
                        const u = await al(a, {
                                ...o,
                                altBoundary: !0
                            }),
                            d = $y(u, s.floating);
                        return {
                            data: {
                                escapedOffsets: d,
                                escaped: Fy(d)
                            }
                        }
                    }
                    default:
                        return {}
                }
            }
        }
    },
    V0 = new Set(["left", "top"]);
async function VO(t, a) {
    const {
        placement: s,
        platform: l,
        elements: o
    } = t, u = await (l.isRTL == null ? void 0 : l.isRTL(o.floating)), d = _a(s), h = Gs(s), p = ra(s) === "y", g = V0.has(d) ? -1 : 1, b = u && p ? -1 : 1, m = Da(a, t);
    let {
        mainAxis: S,
        crossAxis: E,
        alignmentAxis: A
    } = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return h && typeof A == "number" && (E = h === "end" ? A * -1 : A), p ? {
        x: E * b,
        y: S * g
    } : {
        x: S * g,
        y: E * b
    }
}
const KO = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(a) {
                var s, l;
                const {
                    x: o,
                    y: u,
                    placement: d,
                    middlewareData: h
                } = a, p = await VO(a, t);
                return d === ((s = h.offset) == null ? void 0 : s.placement) && (l = h.arrow) != null && l.alignmentOffset ? {} : {
                    x: o + p.x,
                    y: u + p.y,
                    data: {
                        ...p,
                        placement: d
                    }
                }
            }
        }
    },
    XO = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(a) {
                const {
                    x: s,
                    y: l,
                    placement: o
                } = a, {
                    mainAxis: u = !0,
                    crossAxis: d = !1,
                    limiter: h = {
                        fn: R => {
                            let {
                                x: N,
                                y: Y
                            } = R;
                            return {
                                x: N,
                                y: Y
                            }
                        }
                    },
                    ...p
                } = Da(t, a), g = {
                    x: s,
                    y: l
                }, b = await al(a, p), m = ra(_a(o)), S = Wf(m);
                let E = g[S],
                    A = g[m];
                if (u) {
                    const R = S === "y" ? "top" : "left",
                        N = S === "y" ? "bottom" : "right",
                        Y = E + b[R],
                        K = E - b[N];
                    E = _f(Y, E, K)
                }
                if (d) {
                    const R = m === "y" ? "top" : "left",
                        N = m === "y" ? "bottom" : "right",
                        Y = A + b[R],
                        K = A - b[N];
                    A = _f(Y, A, K)
                }
                const O = h.fn({
                    ...a,
                    [S]: E,
                    [m]: A
                });
                return {
                    ...O,
                    data: {
                        x: O.x - s,
                        y: O.y - l,
                        enabled: {
                            [S]: u,
                            [m]: d
                        }
                    }
                }
            }
        }
    },
    ZO = function(t) {
        return t === void 0 && (t = {}), {
            options: t,
            fn(a) {
                const {
                    x: s,
                    y: l,
                    placement: o,
                    rects: u,
                    middlewareData: d
                } = a, {
                    offset: h = 0,
                    mainAxis: p = !0,
                    crossAxis: g = !0
                } = Da(t, a), b = {
                    x: s,
                    y: l
                }, m = ra(o), S = Wf(m);
                let E = b[S],
                    A = b[m];
                const O = Da(h, a),
                    R = typeof O == "number" ? {
                        mainAxis: O,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...O
                    };
                if (p) {
                    const K = S === "y" ? "height" : "width",
                        Z = u.reference[S] - u.floating[K] + R.mainAxis,
                        B = u.reference[S] + u.reference[K] - R.mainAxis;
                    E < Z ? E = Z : E > B && (E = B)
                }
                if (g) {
                    var N, Y;
                    const K = S === "y" ? "width" : "height",
                        Z = V0.has(_a(o)),
                        B = u.reference[m] - u.floating[K] + (Z && ((N = d.offset) == null ? void 0 : N[m]) || 0) + (Z ? 0 : R.crossAxis),
                        L = u.reference[m] + u.reference[K] + (Z ? 0 : ((Y = d.offset) == null ? void 0 : Y[m]) || 0) - (Z ? R.crossAxis : 0);
                    A < B ? A = B : A > L && (A = L)
                }
                return {
                    [S]: E,
                    [m]: A
                }
            }
        }
    },
    IO = function(t) {
        return t === void 0 && (t = {}), {
            name: "size",
            options: t,
            async fn(a) {
                var s, l;
                const {
                    placement: o,
                    rects: u,
                    platform: d,
                    elements: h
                } = a, {
                    apply: p = () => {},
                    ...g
                } = Da(t, a), b = await al(a, g), m = _a(o), S = Gs(o), E = ra(o) === "y", {
                    width: A,
                    height: O
                } = u.floating;
                let R, N;
                m === "top" || m === "bottom" ? (R = m, N = S === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (N = m, R = S === "end" ? "top" : "bottom");
                const Y = O - b.top - b.bottom,
                    K = A - b.left - b.right,
                    Z = hr(O - b[R], Y),
                    B = hr(A - b[N], K),
                    L = !a.middlewareData.shift;
                let T = Z,
                    _ = B;
                if ((s = a.middlewareData.shift) != null && s.enabled.x && (_ = K), (l = a.middlewareData.shift) != null && l.enabled.y && (T = Y), L && !S) {
                    const $ = bn(b.left, 0),
                        G = bn(b.right, 0),
                        te = bn(b.top, 0),
                        le = bn(b.bottom, 0);
                    E ? _ = A - 2 * ($ !== 0 || G !== 0 ? $ + G : bn(b.left, b.right)) : T = O - 2 * (te !== 0 || le !== 0 ? te + le : bn(b.top, b.bottom))
                }
                await p({
                    ...a,
                    availableWidth: _,
                    availableHeight: T
                });
                const F = await d.getDimensions(h.floating);
                return A !== F.width || O !== F.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function gc() {
    return typeof window < "u"
}

function Vs(t) {
    return K0(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function Sn(t) {
    var a;
    return (t == null || (a = t.ownerDocument) == null ? void 0 : a.defaultView) || window
}

function oa(t) {
    var a;
    return (a = (K0(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : a.documentElement
}

function K0(t) {
    return gc() ? t instanceof Node || t instanceof Sn(t).Node : !1
}

function Gn(t) {
    return gc() ? t instanceof Element || t instanceof Sn(t).Element : !1
}

function ia(t) {
    return gc() ? t instanceof HTMLElement || t instanceof Sn(t).HTMLElement : !1
}

function Jy(t) {
    return !gc() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Sn(t).ShadowRoot
}
const $O = new Set(["inline", "contents"]);

function hl(t) {
    const {
        overflow: a,
        overflowX: s,
        overflowY: l,
        display: o
    } = Vn(t);
    return /auto|scroll|overlay|hidden|clip/.test(a + l + s) && !$O.has(o)
}
const FO = new Set(["table", "td", "th"]);

function JO(t) {
    return FO.has(Vs(t))
}
const WO = [":popover-open", ":modal"];

function yc(t) {
    return WO.some(a => {
        try {
            return t.matches(a)
        } catch {
            return !1
        }
    })
}
const eA = ["transform", "translate", "scale", "rotate", "perspective"],
    tA = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    nA = ["paint", "layout", "strict", "content"];

function nh(t) {
    const a = ah(),
        s = Gn(t) ? Vn(t) : t;
    return eA.some(l => s[l] ? s[l] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !a && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !a && (s.filter ? s.filter !== "none" : !1) || tA.some(l => (s.willChange || "").includes(l)) || nA.some(l => (s.contain || "").includes(l))
}

function aA(t) {
    let a = pr(t);
    for (; ia(a) && !Ps(a);) {
        if (nh(a)) return a;
        if (yc(a)) return null;
        a = pr(a)
    }
    return null
}

function ah() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const rA = new Set(["html", "body", "#document"]);

function Ps(t) {
    return rA.has(Vs(t))
}

function Vn(t) {
    return Sn(t).getComputedStyle(t)
}

function vc(t) {
    return Gn(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function pr(t) {
    if (Vs(t) === "html") return t;
    const a = t.assignedSlot || t.parentNode || Jy(t) && t.host || oa(t);
    return Jy(a) ? a.host : a
}

function X0(t) {
    const a = pr(t);
    return Ps(a) ? t.ownerDocument ? t.ownerDocument.body : t.body : ia(a) && hl(a) ? a : X0(a)
}

function rl(t, a, s) {
    var l;
    a === void 0 && (a = []), s === void 0 && (s = !0);
    const o = X0(t),
        u = o === ((l = t.ownerDocument) == null ? void 0 : l.body),
        d = Sn(o);
    if (u) {
        const h = Nf(d);
        return a.concat(d, d.visualViewport || [], hl(o) ? o : [], h && s ? rl(h) : [])
    }
    return a.concat(o, rl(o, [], s))
}

function Nf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function Z0(t) {
    const a = Vn(t);
    let s = parseFloat(a.width) || 0,
        l = parseFloat(a.height) || 0;
    const o = ia(t),
        u = o ? t.offsetWidth : s,
        d = o ? t.offsetHeight : l,
        h = $o(s) !== u || $o(l) !== d;
    return h && (s = u, l = d), {
        width: s,
        height: l,
        $: h
    }
}

function rh(t) {
    return Gn(t) ? t : t.contextElement
}

function Us(t) {
    const a = rh(t);
    if (!ia(a)) return sa(1);
    const s = a.getBoundingClientRect(),
        {
            width: l,
            height: o,
            $: u
        } = Z0(a);
    let d = (u ? $o(s.width) : s.width) / l,
        h = (u ? $o(s.height) : s.height) / o;
    return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
        x: d,
        y: h
    }
}
const sA = sa(0);

function I0(t) {
    const a = Sn(t);
    return !ah() || !a.visualViewport ? sA : {
        x: a.visualViewport.offsetLeft,
        y: a.visualViewport.offsetTop
    }
}

function iA(t, a, s) {
    return a === void 0 && (a = !1), !s || a && s !== Sn(t) ? !1 : a
}

function Yr(t, a, s, l) {
    a === void 0 && (a = !1), s === void 0 && (s = !1);
    const o = t.getBoundingClientRect(),
        u = rh(t);
    let d = sa(1);
    a && (l ? Gn(l) && (d = Us(l)) : d = Us(t));
    const h = iA(u, s, l) ? I0(u) : sa(0);
    let p = (o.left + h.x) / d.x,
        g = (o.top + h.y) / d.y,
        b = o.width / d.x,
        m = o.height / d.y;
    if (u) {
        const S = Sn(u),
            E = l && Gn(l) ? Sn(l) : l;
        let A = S,
            O = Nf(A);
        for (; O && l && E !== A;) {
            const R = Us(O),
                N = O.getBoundingClientRect(),
                Y = Vn(O),
                K = N.left + (O.clientLeft + parseFloat(Y.paddingLeft)) * R.x,
                Z = N.top + (O.clientTop + parseFloat(Y.paddingTop)) * R.y;
            p *= R.x, g *= R.y, b *= R.x, m *= R.y, p += K, g += Z, A = Sn(O), O = Nf(A)
        }
    }
    return Jo({
        width: b,
        height: m,
        x: p,
        y: g
    })
}

function bc(t, a) {
    const s = vc(t).scrollLeft;
    return a ? a.left + s : Yr(oa(t)).left + s
}

function $0(t, a) {
    const s = t.getBoundingClientRect(),
        l = s.left + a.scrollLeft - bc(t, s),
        o = s.top + a.scrollTop;
    return {
        x: l,
        y: o
    }
}

function lA(t) {
    let {
        elements: a,
        rect: s,
        offsetParent: l,
        strategy: o
    } = t;
    const u = o === "fixed",
        d = oa(l),
        h = a ? yc(a.floating) : !1;
    if (l === d || h && u) return s;
    let p = {
            scrollLeft: 0,
            scrollTop: 0
        },
        g = sa(1);
    const b = sa(0),
        m = ia(l);
    if ((m || !m && !u) && ((Vs(l) !== "body" || hl(d)) && (p = vc(l)), ia(l))) {
        const E = Yr(l);
        g = Us(l), b.x = E.x + l.clientLeft, b.y = E.y + l.clientTop
    }
    const S = d && !m && !u ? $0(d, p) : sa(0);
    return {
        width: s.width * g.x,
        height: s.height * g.y,
        x: s.x * g.x - p.scrollLeft * g.x + b.x + S.x,
        y: s.y * g.y - p.scrollTop * g.y + b.y + S.y
    }
}

function oA(t) {
    return Array.from(t.getClientRects())
}

function cA(t) {
    const a = oa(t),
        s = vc(t),
        l = t.ownerDocument.body,
        o = bn(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth),
        u = bn(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
    let d = -s.scrollLeft + bc(t);
    const h = -s.scrollTop;
    return Vn(l).direction === "rtl" && (d += bn(a.clientWidth, l.clientWidth) - o), {
        width: o,
        height: u,
        x: d,
        y: h
    }
}
const Wy = 25;

function uA(t, a) {
    const s = Sn(t),
        l = oa(t),
        o = s.visualViewport;
    let u = l.clientWidth,
        d = l.clientHeight,
        h = 0,
        p = 0;
    if (o) {
        u = o.width, d = o.height;
        const b = ah();
        (!b || b && a === "fixed") && (h = o.offsetLeft, p = o.offsetTop)
    }
    const g = bc(l);
    if (g <= 0) {
        const b = l.ownerDocument,
            m = b.body,
            S = getComputedStyle(m),
            E = b.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0,
            A = Math.abs(l.clientWidth - m.clientWidth - E);
        A <= Wy && (u -= A)
    } else g <= Wy && (u += g);
    return {
        width: u,
        height: d,
        x: h,
        y: p
    }
}
const dA = new Set(["absolute", "fixed"]);

function fA(t, a) {
    const s = Yr(t, !0, a === "fixed"),
        l = s.top + t.clientTop,
        o = s.left + t.clientLeft,
        u = ia(t) ? Us(t) : sa(1),
        d = t.clientWidth * u.x,
        h = t.clientHeight * u.y,
        p = o * u.x,
        g = l * u.y;
    return {
        width: d,
        height: h,
        x: p,
        y: g
    }
}

function ev(t, a, s) {
    let l;
    if (a === "viewport") l = uA(t, s);
    else if (a === "document") l = cA(oa(t));
    else if (Gn(a)) l = fA(a, s);
    else {
        const o = I0(t);
        l = {
            x: a.x - o.x,
            y: a.y - o.y,
            width: a.width,
            height: a.height
        }
    }
    return Jo(l)
}

function F0(t, a) {
    const s = pr(t);
    return s === a || !Gn(s) || Ps(s) ? !1 : Vn(s).position === "fixed" || F0(s, a)
}

function hA(t, a) {
    const s = a.get(t);
    if (s) return s;
    let l = rl(t, [], !1).filter(h => Gn(h) && Vs(h) !== "body"),
        o = null;
    const u = Vn(t).position === "fixed";
    let d = u ? pr(t) : t;
    for (; Gn(d) && !Ps(d);) {
        const h = Vn(d),
            p = nh(d);
        !p && h.position === "fixed" && (o = null), (u ? !p && !o : !p && h.position === "static" && !!o && dA.has(o.position) || hl(d) && !p && F0(t, d)) ? l = l.filter(b => b !== d) : o = h, d = pr(d)
    }
    return a.set(t, l), l
}

function pA(t) {
    let {
        element: a,
        boundary: s,
        rootBoundary: l,
        strategy: o
    } = t;
    const d = [...s === "clippingAncestors" ? yc(a) ? [] : hA(a, this._c) : [].concat(s), l],
        h = d[0],
        p = d.reduce((g, b) => {
            const m = ev(a, b, o);
            return g.top = bn(m.top, g.top), g.right = hr(m.right, g.right), g.bottom = hr(m.bottom, g.bottom), g.left = bn(m.left, g.left), g
        }, ev(a, h, o));
    return {
        width: p.right - p.left,
        height: p.bottom - p.top,
        x: p.left,
        y: p.top
    }
}

function mA(t) {
    const {
        width: a,
        height: s
    } = Z0(t);
    return {
        width: a,
        height: s
    }
}

function gA(t, a, s) {
    const l = ia(a),
        o = oa(a),
        u = s === "fixed",
        d = Yr(t, !0, u, a);
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = sa(0);

    function g() {
        p.x = bc(o)
    }
    if (l || !l && !u)
        if ((Vs(a) !== "body" || hl(o)) && (h = vc(a)), l) {
            const E = Yr(a, !0, u, a);
            p.x = E.x + a.clientLeft, p.y = E.y + a.clientTop
        } else o && g();
    u && !l && o && g();
    const b = o && !l && !u ? $0(o, h) : sa(0),
        m = d.left + h.scrollLeft - p.x - b.x,
        S = d.top + h.scrollTop - p.y - b.y;
    return {
        x: m,
        y: S,
        width: d.width,
        height: d.height
    }
}

function Jd(t) {
    return Vn(t).position === "static"
}

function tv(t, a) {
    if (!ia(t) || Vn(t).position === "fixed") return null;
    if (a) return a(t);
    let s = t.offsetParent;
    return oa(t) === s && (s = s.ownerDocument.body), s
}

function J0(t, a) {
    const s = Sn(t);
    if (yc(t)) return s;
    if (!ia(t)) {
        let o = pr(t);
        for (; o && !Ps(o);) {
            if (Gn(o) && !Jd(o)) return o;
            o = pr(o)
        }
        return s
    }
    let l = tv(t, a);
    for (; l && JO(l) && Jd(l);) l = tv(l, a);
    return l && Ps(l) && Jd(l) && !nh(l) ? s : l || aA(t) || s
}
const yA = async function(t) {
    const a = this.getOffsetParent || J0,
        s = this.getDimensions,
        l = await s(t.floating);
    return {
        reference: gA(t.reference, await a(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: l.width,
            height: l.height
        }
    }
};

function vA(t) {
    return Vn(t).direction === "rtl"
}
const bA = {
    convertOffsetParentRelativeRectToViewportRelativeRect: lA,
    getDocumentElement: oa,
    getClippingRect: pA,
    getOffsetParent: J0,
    getElementRects: yA,
    getClientRects: oA,
    getDimensions: mA,
    getScale: Us,
    isElement: Gn,
    isRTL: vA
};

function W0(t, a) {
    return t.x === a.x && t.y === a.y && t.width === a.width && t.height === a.height
}

function xA(t, a) {
    let s = null,
        l;
    const o = oa(t);

    function u() {
        var h;
        clearTimeout(l), (h = s) == null || h.disconnect(), s = null
    }

    function d(h, p) {
        h === void 0 && (h = !1), p === void 0 && (p = 1), u();
        const g = t.getBoundingClientRect(),
            {
                left: b,
                top: m,
                width: S,
                height: E
            } = g;
        if (h || a(), !S || !E) return;
        const A = Lo(m),
            O = Lo(o.clientWidth - (b + S)),
            R = Lo(o.clientHeight - (m + E)),
            N = Lo(b),
            K = {
                rootMargin: -A + "px " + -O + "px " + -R + "px " + -N + "px",
                threshold: bn(0, hr(1, p)) || 1
            };
        let Z = !0;

        function B(L) {
            const T = L[0].intersectionRatio;
            if (T !== p) {
                if (!Z) return d();
                T ? d(!1, T) : l = setTimeout(() => {
                    d(!1, 1e-7)
                }, 1e3)
            }
            T === 1 && !W0(g, t.getBoundingClientRect()) && d(), Z = !1
        }
        try {
            s = new IntersectionObserver(B, {
                ...K,
                root: o.ownerDocument
            })
        } catch {
            s = new IntersectionObserver(B, K)
        }
        s.observe(t)
    }
    return d(!0), u
}

function SA(t, a, s, l) {
    l === void 0 && (l = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: u = !0,
        elementResize: d = typeof ResizeObserver == "function",
        layoutShift: h = typeof IntersectionObserver == "function",
        animationFrame: p = !1
    } = l, g = rh(t), b = o || u ? [...g ? rl(g) : [], ...rl(a)] : [];
    b.forEach(N => {
        o && N.addEventListener("scroll", s, {
            passive: !0
        }), u && N.addEventListener("resize", s)
    });
    const m = g && h ? xA(g, s) : null;
    let S = -1,
        E = null;
    d && (E = new ResizeObserver(N => {
        let [Y] = N;
        Y && Y.target === g && E && (E.unobserve(a), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
            var K;
            (K = E) == null || K.observe(a)
        })), s()
    }), g && !p && E.observe(g), E.observe(a));
    let A, O = p ? Yr(t) : null;
    p && R();

    function R() {
        const N = Yr(t);
        O && !W0(O, N) && s(), O = N, A = requestAnimationFrame(R)
    }
    return s(), () => {
        var N;
        b.forEach(Y => {
            o && Y.removeEventListener("scroll", s), u && Y.removeEventListener("resize", s)
        }), m?.(), (N = E) == null || N.disconnect(), E = null, p && cancelAnimationFrame(A)
    }
}
const wA = KO,
    EA = XO,
    OA = YO,
    AA = IO,
    TA = GO,
    nv = PO,
    CA = ZO,
    jA = (t, a, s) => {
        const l = new Map,
            o = {
                platform: bA,
                ...s
            },
            u = {
                ...o.platform,
                _c: l
            };
        return QO(t, a, {
            ...o,
            platform: u
        })
    };
var RA = typeof document < "u",
    DA = function() {},
    Xo = RA ? x.useLayoutEffect : DA;

function Wo(t, a) {
    if (t === a) return !0;
    if (typeof t != typeof a) return !1;
    if (typeof t == "function" && t.toString() === a.toString()) return !0;
    let s, l, o;
    if (t && a && typeof t == "object") {
        if (Array.isArray(t)) {
            if (s = t.length, s !== a.length) return !1;
            for (l = s; l-- !== 0;)
                if (!Wo(t[l], a[l])) return !1;
            return !0
        }
        if (o = Object.keys(t), s = o.length, s !== Object.keys(a).length) return !1;
        for (l = s; l-- !== 0;)
            if (!{}.hasOwnProperty.call(a, o[l])) return !1;
        for (l = s; l-- !== 0;) {
            const u = o[l];
            if (!(u === "_owner" && t.$$typeof) && !Wo(t[u], a[u])) return !1
        }
        return !0
    }
    return t !== t && a !== a
}

function eb(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function av(t, a) {
    const s = eb(t);
    return Math.round(a * s) / s
}

function Wd(t) {
    const a = x.useRef(t);
    return Xo(() => {
        a.current = t
    }), a
}

function _A(t) {
    t === void 0 && (t = {});
    const {
        placement: a = "bottom",
        strategy: s = "absolute",
        middleware: l = [],
        platform: o,
        elements: {
            reference: u,
            floating: d
        } = {},
        transform: h = !0,
        whileElementsMounted: p,
        open: g
    } = t, [b, m] = x.useState({
        x: 0,
        y: 0,
        strategy: s,
        placement: a,
        middlewareData: {},
        isPositioned: !1
    }), [S, E] = x.useState(l);
    Wo(S, l) || E(l);
    const [A, O] = x.useState(null), [R, N] = x.useState(null), Y = x.useCallback(z => {
        z !== L.current && (L.current = z, O(z))
    }, []), K = x.useCallback(z => {
        z !== T.current && (T.current = z, N(z))
    }, []), Z = u || A, B = d || R, L = x.useRef(null), T = x.useRef(null), _ = x.useRef(b), F = p != null, $ = Wd(p), G = Wd(o), te = Wd(g), le = x.useCallback(() => {
        if (!L.current || !T.current) return;
        const z = {
            placement: a,
            strategy: s,
            middleware: S
        };
        G.current && (z.platform = G.current), jA(L.current, T.current, z).then(oe => {
            const de = {
                ...oe,
                isPositioned: te.current !== !1
            };
            ne.current && !Wo(_.current, de) && (_.current = de, cr.flushSync(() => {
                m(de)
            }))
        })
    }, [S, a, s, G, te]);
    Xo(() => {
        g === !1 && _.current.isPositioned && (_.current.isPositioned = !1, m(z => ({
            ...z,
            isPositioned: !1
        })))
    }, [g]);
    const ne = x.useRef(!1);
    Xo(() => (ne.current = !0, () => {
        ne.current = !1
    }), []), Xo(() => {
        if (Z && (L.current = Z), B && (T.current = B), Z && B) {
            if ($.current) return $.current(Z, B, le);
            le()
        }
    }, [Z, B, le, $, F]);
    const se = x.useMemo(() => ({
            reference: L,
            floating: T,
            setReference: Y,
            setFloating: K
        }), [Y, K]),
        j = x.useMemo(() => ({
            reference: Z,
            floating: B
        }), [Z, B]),
        H = x.useMemo(() => {
            const z = {
                position: s,
                left: 0,
                top: 0
            };
            if (!j.floating) return z;
            const oe = av(j.floating, b.x),
                de = av(j.floating, b.y);
            return h ? {
                ...z,
                transform: "translate(" + oe + "px, " + de + "px)",
                ...eb(j.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: s,
                left: oe,
                top: de
            }
        }, [s, h, j.floating, b.x, b.y]);
    return x.useMemo(() => ({
        ...b,
        update: le,
        refs: se,
        elements: j,
        floatingStyles: H
    }), [b, le, se, j, H])
}
const MA = t => {
        function a(s) {
            return {}.hasOwnProperty.call(s, "current")
        }
        return {
            name: "arrow",
            options: t,
            fn(s) {
                const {
                    element: l,
                    padding: o
                } = typeof t == "function" ? t(s) : t;
                return l && a(l) ? l.current != null ? nv({
                    element: l.current,
                    padding: o
                }).fn(s) : {} : l ? nv({
                    element: l,
                    padding: o
                }).fn(s) : {}
            }
        }
    },
    NA = (t, a) => ({
        ...wA(t),
        options: [t, a]
    }),
    HA = (t, a) => ({
        ...EA(t),
        options: [t, a]
    }),
    zA = (t, a) => ({
        ...CA(t),
        options: [t, a]
    }),
    kA = (t, a) => ({
        ...OA(t),
        options: [t, a]
    }),
    UA = (t, a) => ({
        ...AA(t),
        options: [t, a]
    }),
    LA = (t, a) => ({
        ...TA(t),
        options: [t, a]
    }),
    BA = (t, a) => ({
        ...MA(t),
        options: [t, a]
    });
var qA = "Arrow",
    tb = x.forwardRef((t, a) => {
        const {
            children: s,
            width: l = 10,
            height: o = 5,
            ...u
        } = t;
        return y.jsx(Zr.svg, {
            ...u,
            ref: a,
            width: l,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? s : y.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
tb.displayName = qA;
var QA = tb;

function PA(t) {
    const [a, s] = x.useState(void 0);
    return nl(() => {
        if (t) {
            s({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const l = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const u = o[0];
                let d, h;
                if ("borderBoxSize" in u) {
                    const p = u.borderBoxSize,
                        g = Array.isArray(p) ? p[0] : p;
                    d = g.inlineSize, h = g.blockSize
                } else d = t.offsetWidth, h = t.offsetHeight;
                s({
                    width: d,
                    height: h
                })
            });
            return l.observe(t, {
                box: "border-box"
            }), () => l.unobserve(t)
        } else s(void 0)
    }, [t]), a
}
var nb = "Popper",
    [ab, rb] = L0(nb),
    [AD, sb] = ab(nb),
    ib = "PopperAnchor",
    lb = x.forwardRef((t, a) => {
        const {
            __scopePopper: s,
            virtualRef: l,
            ...o
        } = t, u = sb(ib, s), d = x.useRef(null), h = Xr(a, d), p = x.useRef(null);
        return x.useEffect(() => {
            const g = p.current;
            p.current = l?.current || d.current, g !== p.current && u.onAnchorChange(p.current)
        }), l ? null : y.jsx(Zr.div, {
            ...o,
            ref: h
        })
    });
lb.displayName = ib;
var sh = "PopperContent",
    [YA, GA] = ab(sh),
    ob = x.forwardRef((t, a) => {
        const {
            __scopePopper: s,
            side: l = "bottom",
            sideOffset: o = 0,
            align: u = "center",
            alignOffset: d = 0,
            arrowPadding: h = 0,
            avoidCollisions: p = !0,
            collisionBoundary: g = [],
            collisionPadding: b = 0,
            sticky: m = "partial",
            hideWhenDetached: S = !1,
            updatePositionStrategy: E = "optimized",
            onPlaced: A,
            ...O
        } = t, R = sb(sh, s), [N, Y] = x.useState(null), K = Xr(a, ue => Y(ue)), [Z, B] = x.useState(null), L = PA(Z), T = L?.width ?? 0, _ = L?.height ?? 0, F = l + (u !== "center" ? "-" + u : ""), $ = typeof b == "number" ? b : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...b
        }, G = Array.isArray(g) ? g : [g], te = G.length > 0, le = {
            padding: $,
            boundary: G.filter(KA),
            altBoundary: te
        }, {
            refs: ne,
            floatingStyles: se,
            placement: j,
            isPositioned: H,
            middlewareData: z
        } = _A({
            strategy: "fixed",
            placement: F,
            whileElementsMounted: (...ue) => SA(...ue, {
                animationFrame: E === "always"
            }),
            elements: {
                reference: R.anchor
            },
            middleware: [NA({
                mainAxis: o + _,
                alignmentAxis: d
            }), p && HA({
                mainAxis: !0,
                crossAxis: !1,
                limiter: m === "partial" ? zA() : void 0,
                ...le
            }), p && kA({
                ...le
            }), UA({
                ...le,
                apply: ({
                    elements: ue,
                    rects: ve,
                    availableWidth: Oe,
                    availableHeight: Ee
                }) => {
                    const {
                        width: it,
                        height: je
                    } = ve.reference, vt = ue.floating.style;
                    vt.setProperty("--radix-popper-available-width", `${Oe}px`), vt.setProperty("--radix-popper-available-height", `${Ee}px`), vt.setProperty("--radix-popper-anchor-width", `${it}px`), vt.setProperty("--radix-popper-anchor-height", `${je}px`)
                }
            }), Z && BA({
                element: Z,
                padding: h
            }), XA({
                arrowWidth: T,
                arrowHeight: _
            }), S && LA({
                strategy: "referenceHidden",
                ...le
            })]
        }), [oe, de] = db(j), C = mc(A);
        nl(() => {
            H && C?.()
        }, [H, C]);
        const P = z.arrow?.x,
            U = z.arrow?.y,
            I = z.arrow?.centerOffset !== 0,
            [ie, ce] = x.useState();
        return nl(() => {
            N && ce(window.getComputedStyle(N).zIndex)
        }, [N]), y.jsx("div", {
            ref: ne.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...se,
                transform: H ? se.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ie,
                "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
                ...z.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: t.dir,
            children: y.jsx(YA, {
                scope: s,
                placedSide: oe,
                onArrowChange: B,
                arrowX: P,
                arrowY: U,
                shouldHideArrow: I,
                children: y.jsx(Zr.div, {
                    "data-side": oe,
                    "data-align": de,
                    ...O,
                    ref: K,
                    style: {
                        ...O.style,
                        animation: H ? void 0 : "none"
                    }
                })
            })
        })
    });
ob.displayName = sh;
var cb = "PopperArrow",
    VA = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    ub = x.forwardRef(function(a, s) {
        const {
            __scopePopper: l,
            ...o
        } = a, u = GA(cb, l), d = VA[u.placedSide];
        return y.jsx("span", {
            ref: u.onArrowChange,
            style: {
                position: "absolute",
                left: u.arrowX,
                top: u.arrowY,
                [d]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [u.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [u.placedSide],
                visibility: u.shouldHideArrow ? "hidden" : void 0
            },
            children: y.jsx(QA, {
                ...o,
                ref: s,
                style: {
                    ...o.style,
                    display: "block"
                }
            })
        })
    });
ub.displayName = cb;

function KA(t) {
    return t !== null
}
var XA = t => ({
    name: "transformOrigin",
    options: t,
    fn(a) {
        const {
            placement: s,
            rects: l,
            middlewareData: o
        } = a, d = o.arrow?.centerOffset !== 0, h = d ? 0 : t.arrowWidth, p = d ? 0 : t.arrowHeight, [g, b] = db(s), m = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [b], S = (o.arrow?.x ?? 0) + h / 2, E = (o.arrow?.y ?? 0) + p / 2;
        let A = "",
            O = "";
        return g === "bottom" ? (A = d ? m : `${S}px`, O = `${-p}px`) : g === "top" ? (A = d ? m : `${S}px`, O = `${l.floating.height+p}px`) : g === "right" ? (A = `${-p}px`, O = d ? m : `${E}px`) : g === "left" && (A = `${l.floating.width+p}px`, O = d ? m : `${E}px`), {
            data: {
                x: A,
                y: O
            }
        }
    }
});

function db(t) {
    const [a, s = "center"] = t.split("-");
    return [a, s]
}
var ZA = lb,
    IA = ob,
    $A = ub;

function FA(t, a) {
    return x.useReducer((s, l) => a[s][l] ?? s, t)
}
var fb = t => {
    const {
        present: a,
        children: s
    } = t, l = JA(a), o = typeof s == "function" ? s({
        present: l.isPresent
    }) : x.Children.only(s), u = Xr(l.ref, WA(o));
    return typeof s == "function" || l.isPresent ? x.cloneElement(o, {
        ref: u
    }) : null
};
fb.displayName = "Presence";

function JA(t) {
    const [a, s] = x.useState(), l = x.useRef(null), o = x.useRef(t), u = x.useRef("none"), d = t ? "mounted" : "unmounted", [h, p] = FA(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const g = Bo(l.current);
        u.current = h === "mounted" ? g : "none"
    }, [h]), nl(() => {
        const g = l.current,
            b = o.current;
        if (b !== t) {
            const S = u.current,
                E = Bo(g);
            t ? p("MOUNT") : E === "none" || g?.display === "none" ? p("UNMOUNT") : p(b && S !== E ? "ANIMATION_OUT" : "UNMOUNT"), o.current = t
        }
    }, [t, p]), nl(() => {
        if (a) {
            let g;
            const b = a.ownerDocument.defaultView ?? window,
                m = E => {
                    const O = Bo(l.current).includes(CSS.escape(E.animationName));
                    if (E.target === a && O && (p("ANIMATION_END"), !o.current)) {
                        const R = a.style.animationFillMode;
                        a.style.animationFillMode = "forwards", g = b.setTimeout(() => {
                            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = R)
                        })
                    }
                },
                S = E => {
                    E.target === a && (u.current = Bo(l.current))
                };
            return a.addEventListener("animationstart", S), a.addEventListener("animationcancel", m), a.addEventListener("animationend", m), () => {
                b.clearTimeout(g), a.removeEventListener("animationstart", S), a.removeEventListener("animationcancel", m), a.removeEventListener("animationend", m)
            }
        } else p("ANIMATION_END")
    }, [a, p]), {
        isPresent: ["mounted", "unmountSuspended"].includes(h),
        ref: x.useCallback(g => {
            l.current = g ? getComputedStyle(g) : null, s(g)
        }, [])
    }
}

function Bo(t) {
    return t?.animationName || "none"
}

function WA(t) {
    let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
        s = a && "isReactWarning" in a && a.isReactWarning;
    return s ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning, s ? t.props.ref : t.props.ref || t.ref)
}
var eT = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    tT = "VisuallyHidden",
    hb = x.forwardRef((t, a) => y.jsx(Zr.span, {
        ...t,
        ref: a,
        style: {
            ...eT,
            ...t.style
        }
    }));
hb.displayName = tT;
var nT = hb,
    [xc] = L0("Tooltip", [rb]),
    ih = rb(),
    pb = "TooltipProvider",
    aT = 700,
    rv = "tooltip.open",
    [rT, mb] = xc(pb),
    gb = t => {
        const {
            __scopeTooltip: a,
            delayDuration: s = aT,
            skipDelayDuration: l = 300,
            disableHoverableContent: o = !1,
            children: u
        } = t, d = x.useRef(!0), h = x.useRef(!1), p = x.useRef(0);
        return x.useEffect(() => {
            const g = p.current;
            return () => window.clearTimeout(g)
        }, []), y.jsx(rT, {
            scope: a,
            isOpenDelayedRef: d,
            delayDuration: s,
            onOpen: x.useCallback(() => {
                window.clearTimeout(p.current), d.current = !1
            }, []),
            onClose: x.useCallback(() => {
                window.clearTimeout(p.current), p.current = window.setTimeout(() => d.current = !0, l)
            }, [l]),
            isPointerInTransitRef: h,
            onPointerInTransitChange: x.useCallback(g => {
                h.current = g
            }, []),
            disableHoverableContent: o,
            children: u
        })
    };
gb.displayName = pb;
var yb = "Tooltip",
    [TD, Sc] = xc(yb),
    Hf = "TooltipTrigger",
    sT = x.forwardRef((t, a) => {
        const {
            __scopeTooltip: s,
            ...l
        } = t, o = Sc(Hf, s), u = mb(Hf, s), d = ih(s), h = x.useRef(null), p = Xr(a, h, o.onTriggerChange), g = x.useRef(!1), b = x.useRef(!1), m = x.useCallback(() => g.current = !1, []);
        return x.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), y.jsx(ZA, {
            asChild: !0,
            ...d,
            children: y.jsx(Zr.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...l,
                ref: p,
                onPointerMove: ja(t.onPointerMove, S => {
                    S.pointerType !== "touch" && !b.current && !u.isPointerInTransitRef.current && (o.onTriggerEnter(), b.current = !0)
                }),
                onPointerLeave: ja(t.onPointerLeave, () => {
                    o.onTriggerLeave(), b.current = !1
                }),
                onPointerDown: ja(t.onPointerDown, () => {
                    o.open && o.onClose(), g.current = !0, document.addEventListener("pointerup", m, {
                        once: !0
                    })
                }),
                onFocus: ja(t.onFocus, () => {
                    g.current || o.onOpen()
                }),
                onBlur: ja(t.onBlur, o.onClose),
                onClick: ja(t.onClick, o.onClose)
            })
        })
    });
sT.displayName = Hf;
var iT = "TooltipPortal",
    [CD, lT] = xc(iT, {
        forceMount: void 0
    }),
    Ys = "TooltipContent",
    oT = x.forwardRef((t, a) => {
        const s = lT(Ys, t.__scopeTooltip),
            {
                forceMount: l = s.forceMount,
                side: o = "top",
                ...u
            } = t,
            d = Sc(Ys, t.__scopeTooltip);
        return y.jsx(fb, {
            present: l || d.open,
            children: d.disableHoverableContent ? y.jsx(vb, {
                side: o,
                ...u,
                ref: a
            }) : y.jsx(cT, {
                side: o,
                ...u,
                ref: a
            })
        })
    }),
    cT = x.forwardRef((t, a) => {
        const s = Sc(Ys, t.__scopeTooltip),
            l = mb(Ys, t.__scopeTooltip),
            o = x.useRef(null),
            u = Xr(a, o),
            [d, h] = x.useState(null),
            {
                trigger: p,
                onClose: g
            } = s,
            b = o.current,
            {
                onPointerInTransitChange: m
            } = l,
            S = x.useCallback(() => {
                h(null), m(!1)
            }, [m]),
            E = x.useCallback((A, O) => {
                const R = A.currentTarget,
                    N = {
                        x: A.clientX,
                        y: A.clientY
                    },
                    Y = pT(N, R.getBoundingClientRect()),
                    K = mT(N, Y),
                    Z = gT(O.getBoundingClientRect()),
                    B = vT([...K, ...Z]);
                h(B), m(!0)
            }, [m]);
        return x.useEffect(() => () => S(), [S]), x.useEffect(() => {
            if (p && b) {
                const A = R => E(R, b),
                    O = R => E(R, p);
                return p.addEventListener("pointerleave", A), b.addEventListener("pointerleave", O), () => {
                    p.removeEventListener("pointerleave", A), b.removeEventListener("pointerleave", O)
                }
            }
        }, [p, b, E, S]), x.useEffect(() => {
            if (d) {
                const A = O => {
                    const R = O.target,
                        N = {
                            x: O.clientX,
                            y: O.clientY
                        },
                        Y = p?.contains(R) || b?.contains(R),
                        K = !yT(N, d);
                    Y ? S() : K && (S(), g())
                };
                return document.addEventListener("pointermove", A), () => document.removeEventListener("pointermove", A)
            }
        }, [p, b, d, g, S]), y.jsx(vb, {
            ...t,
            ref: u
        })
    }),
    [uT, dT] = xc(yb, {
        isInside: !1
    }),
    fT = gO("TooltipContent"),
    vb = x.forwardRef((t, a) => {
        const {
            __scopeTooltip: s,
            children: l,
            "aria-label": o,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            ...h
        } = t, p = Sc(Ys, s), g = ih(s), {
            onClose: b
        } = p;
        return x.useEffect(() => (document.addEventListener(rv, b), () => document.removeEventListener(rv, b)), [b]), x.useEffect(() => {
            if (p.trigger) {
                const m = S => {
                    S.target?.contains(p.trigger) && b()
                };
                return window.addEventListener("scroll", m, {
                    capture: !0
                }), () => window.removeEventListener("scroll", m, {
                    capture: !0
                })
            }
        }, [p.trigger, b]), y.jsx(P0, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: m => m.preventDefault(),
            onDismiss: b,
            children: y.jsxs(IA, {
                "data-state": p.stateAttribute,
                ...g,
                ...h,
                ref: a,
                style: {
                    ...h.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [y.jsx(fT, {
                    children: l
                }), y.jsx(uT, {
                    scope: s,
                    isInside: !0,
                    children: y.jsx(nT, {
                        id: p.contentId,
                        role: "tooltip",
                        children: o || l
                    })
                })]
            })
        })
    });
oT.displayName = Ys;
var bb = "TooltipArrow",
    hT = x.forwardRef((t, a) => {
        const {
            __scopeTooltip: s,
            ...l
        } = t, o = ih(s);
        return dT(bb, s).isInside ? null : y.jsx($A, {
            ...o,
            ...l,
            ref: a
        })
    });
hT.displayName = bb;

function pT(t, a) {
    const s = Math.abs(a.top - t.y),
        l = Math.abs(a.bottom - t.y),
        o = Math.abs(a.right - t.x),
        u = Math.abs(a.left - t.x);
    switch (Math.min(s, l, o, u)) {
        case u:
            return "left";
        case o:
            return "right";
        case s:
            return "top";
        case l:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function mT(t, a, s = 5) {
    const l = [];
    switch (a) {
        case "top":
            l.push({
                x: t.x - s,
                y: t.y + s
            }, {
                x: t.x + s,
                y: t.y + s
            });
            break;
        case "bottom":
            l.push({
                x: t.x - s,
                y: t.y - s
            }, {
                x: t.x + s,
                y: t.y - s
            });
            break;
        case "left":
            l.push({
                x: t.x + s,
                y: t.y - s
            }, {
                x: t.x + s,
                y: t.y + s
            });
            break;
        case "right":
            l.push({
                x: t.x - s,
                y: t.y - s
            }, {
                x: t.x - s,
                y: t.y + s
            });
            break
    }
    return l
}

function gT(t) {
    const {
        top: a,
        right: s,
        bottom: l,
        left: o
    } = t;
    return [{
        x: o,
        y: a
    }, {
        x: s,
        y: a
    }, {
        x: s,
        y: l
    }, {
        x: o,
        y: l
    }]
}

function yT(t, a) {
    const {
        x: s,
        y: l
    } = t;
    let o = !1;
    for (let u = 0, d = a.length - 1; u < a.length; d = u++) {
        const h = a[u],
            p = a[d],
            g = h.x,
            b = h.y,
            m = p.x,
            S = p.y;
        b > l != S > l && s < (m - g) * (l - b) / (S - b) + g && (o = !o)
    }
    return o
}

function vT(t) {
    const a = t.slice();
    return a.sort((s, l) => s.x < l.x ? -1 : s.x > l.x ? 1 : s.y < l.y ? -1 : s.y > l.y ? 1 : 0), bT(a)
}

function bT(t) {
    if (t.length <= 1) return t.slice();
    const a = [];
    for (let l = 0; l < t.length; l++) {
        const o = t[l];
        for (; a.length >= 2;) {
            const u = a[a.length - 1],
                d = a[a.length - 2];
            if ((u.x - d.x) * (o.y - d.y) >= (u.y - d.y) * (o.x - d.x)) a.pop();
            else break
        }
        a.push(o)
    }
    a.pop();
    const s = [];
    for (let l = t.length - 1; l >= 0; l--) {
        const o = t[l];
        for (; s.length >= 2;) {
            const u = s[s.length - 1],
                d = s[s.length - 2];
            if ((u.x - d.x) * (o.y - d.y) >= (u.y - d.y) * (o.x - d.x)) s.pop();
            else break
        }
        s.push(o)
    }
    return s.pop(), a.length === 1 && s.length === 1 && a[0].x === s[0].x && a[0].y === s[0].y ? a : a.concat(s)
}
var xT = gb;

function xb(t) {
    var a, s, l = "";
    if (typeof t == "string" || typeof t == "number") l += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var o = t.length;
            for (a = 0; a < o; a++) t[a] && (s = xb(t[a])) && (l && (l += " "), l += s)
        } else
            for (s in t) t[s] && (l && (l += " "), l += s);
    return l
}

function Sb() {
    for (var t, a, s = 0, l = "", o = arguments.length; s < o; s++)(t = arguments[s]) && (a = xb(t)) && (l && (l += " "), l += a);
    return l
}
const lh = "-",
    ST = t => {
        const a = ET(t),
            {
                conflictingClassGroups: s,
                conflictingClassGroupModifiers: l
            } = t;
        return {
            getClassGroupId: d => {
                const h = d.split(lh);
                return h[0] === "" && h.length !== 1 && h.shift(), wb(h, a) || wT(d)
            },
            getConflictingClassGroupIds: (d, h) => {
                const p = s[d] || [];
                return h && l[d] ? [...p, ...l[d]] : p
            }
        }
    },
    wb = (t, a) => {
        if (t.length === 0) return a.classGroupId;
        const s = t[0],
            l = a.nextPart.get(s),
            o = l ? wb(t.slice(1), l) : void 0;
        if (o) return o;
        if (a.validators.length === 0) return;
        const u = t.join(lh);
        return a.validators.find(({
            validator: d
        }) => d(u))?.classGroupId
    },
    sv = /^\[(.+)\]$/,
    wT = t => {
        if (sv.test(t)) {
            const a = sv.exec(t)[1],
                s = a?.substring(0, a.indexOf(":"));
            if (s) return "arbitrary.." + s
        }
    },
    ET = t => {
        const {
            theme: a,
            classGroups: s
        } = t, l = {
            nextPart: new Map,
            validators: []
        };
        for (const o in s) zf(s[o], l, o, a);
        return l
    },
    zf = (t, a, s, l) => {
        t.forEach(o => {
            if (typeof o == "string") {
                const u = o === "" ? a : iv(a, o);
                u.classGroupId = s;
                return
            }
            if (typeof o == "function") {
                if (OT(o)) {
                    zf(o(l), a, s, l);
                    return
                }
                a.validators.push({
                    validator: o,
                    classGroupId: s
                });
                return
            }
            Object.entries(o).forEach(([u, d]) => {
                zf(d, iv(a, u), s, l)
            })
        })
    },
    iv = (t, a) => {
        let s = t;
        return a.split(lh).forEach(l => {
            s.nextPart.has(l) || s.nextPart.set(l, {
                nextPart: new Map,
                validators: []
            }), s = s.nextPart.get(l)
        }), s
    },
    OT = t => t.isThemeGetter,
    AT = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let a = 0,
            s = new Map,
            l = new Map;
        const o = (u, d) => {
            s.set(u, d), a++, a > t && (a = 0, l = s, s = new Map)
        };
        return {
            get(u) {
                let d = s.get(u);
                if (d !== void 0) return d;
                if ((d = l.get(u)) !== void 0) return o(u, d), d
            },
            set(u, d) {
                s.has(u) ? s.set(u, d) : o(u, d)
            }
        }
    },
    kf = "!",
    Uf = ":",
    TT = Uf.length,
    CT = t => {
        const {
            prefix: a,
            experimentalParseClassName: s
        } = t;
        let l = o => {
            const u = [];
            let d = 0,
                h = 0,
                p = 0,
                g;
            for (let A = 0; A < o.length; A++) {
                let O = o[A];
                if (d === 0 && h === 0) {
                    if (O === Uf) {
                        u.push(o.slice(p, A)), p = A + TT;
                        continue
                    }
                    if (O === "/") {
                        g = A;
                        continue
                    }
                }
                O === "[" ? d++ : O === "]" ? d-- : O === "(" ? h++ : O === ")" && h--
            }
            const b = u.length === 0 ? o : o.substring(p),
                m = jT(b),
                S = m !== b,
                E = g && g > p ? g - p : void 0;
            return {
                modifiers: u,
                hasImportantModifier: S,
                baseClassName: m,
                maybePostfixModifierPosition: E
            }
        };
        if (a) {
            const o = a + Uf,
                u = l;
            l = d => d.startsWith(o) ? u(d.substring(o.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: d,
                maybePostfixModifierPosition: void 0
            }
        }
        if (s) {
            const o = l;
            l = u => s({
                className: u,
                parseClassName: o
            })
        }
        return l
    },
    jT = t => t.endsWith(kf) ? t.substring(0, t.length - 1) : t.startsWith(kf) ? t.substring(1) : t,
    RT = t => {
        const a = Object.fromEntries(t.orderSensitiveModifiers.map(l => [l, !0]));
        return l => {
            if (l.length <= 1) return l;
            const o = [];
            let u = [];
            return l.forEach(d => {
                d[0] === "[" || a[d] ? (o.push(...u.sort(), d), u = []) : u.push(d)
            }), o.push(...u.sort()), o
        }
    },
    DT = t => ({
        cache: AT(t.cacheSize),
        parseClassName: CT(t),
        sortModifiers: RT(t),
        ...ST(t)
    }),
    _T = /\s+/,
    MT = (t, a) => {
        const {
            parseClassName: s,
            getClassGroupId: l,
            getConflictingClassGroupIds: o,
            sortModifiers: u
        } = a, d = [], h = t.trim().split(_T);
        let p = "";
        for (let g = h.length - 1; g >= 0; g -= 1) {
            const b = h[g],
                {
                    isExternal: m,
                    modifiers: S,
                    hasImportantModifier: E,
                    baseClassName: A,
                    maybePostfixModifierPosition: O
                } = s(b);
            if (m) {
                p = b + (p.length > 0 ? " " + p : p);
                continue
            }
            let R = !!O,
                N = l(R ? A.substring(0, O) : A);
            if (!N) {
                if (!R) {
                    p = b + (p.length > 0 ? " " + p : p);
                    continue
                }
                if (N = l(A), !N) {
                    p = b + (p.length > 0 ? " " + p : p);
                    continue
                }
                R = !1
            }
            const Y = u(S).join(":"),
                K = E ? Y + kf : Y,
                Z = K + N;
            if (d.includes(Z)) continue;
            d.push(Z);
            const B = o(N, R);
            for (let L = 0; L < B.length; ++L) {
                const T = B[L];
                d.push(K + T)
            }
            p = b + (p.length > 0 ? " " + p : p)
        }
        return p
    };

function NT() {
    let t = 0,
        a, s, l = "";
    for (; t < arguments.length;)(a = arguments[t++]) && (s = Eb(a)) && (l && (l += " "), l += s);
    return l
}
const Eb = t => {
    if (typeof t == "string") return t;
    let a, s = "";
    for (let l = 0; l < t.length; l++) t[l] && (a = Eb(t[l])) && (s && (s += " "), s += a);
    return s
};

function HT(t, ...a) {
    let s, l, o, u = d;

    function d(p) {
        const g = a.reduce((b, m) => m(b), t());
        return s = DT(g), l = s.cache.get, o = s.cache.set, u = h, h(p)
    }

    function h(p) {
        const g = l(p);
        if (g) return g;
        const b = MT(p, s);
        return o(p, b), b
    }
    return function() {
        return u(NT.apply(null, arguments))
    }
}
const Ct = t => {
        const a = s => s[t] || [];
        return a.isThemeGetter = !0, a
    },
    Ob = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Ab = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    zT = /^\d+\/\d+$/,
    kT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    UT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    LT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    BT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    qT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Hs = t => zT.test(t),
    De = t => !!t && !Number.isNaN(Number(t)),
    rr = t => !!t && Number.isInteger(Number(t)),
    ef = t => t.endsWith("%") && De(t.slice(0, -1)),
    Ca = t => kT.test(t),
    QT = () => !0,
    PT = t => UT.test(t) && !LT.test(t),
    Tb = () => !1,
    YT = t => BT.test(t),
    GT = t => qT.test(t),
    VT = t => !pe(t) && !me(t),
    KT = t => Ks(t, Rb, Tb),
    pe = t => Ob.test(t),
    kr = t => Ks(t, Db, PT),
    tf = t => Ks(t, FT, De),
    lv = t => Ks(t, Cb, Tb),
    XT = t => Ks(t, jb, GT),
    qo = t => Ks(t, _b, YT),
    me = t => Ab.test(t),
    Yi = t => Xs(t, Db),
    ZT = t => Xs(t, JT),
    ov = t => Xs(t, Cb),
    IT = t => Xs(t, Rb),
    $T = t => Xs(t, jb),
    Qo = t => Xs(t, _b, !0),
    Ks = (t, a, s) => {
        const l = Ob.exec(t);
        return l ? l[1] ? a(l[1]) : s(l[2]) : !1
    },
    Xs = (t, a, s = !1) => {
        const l = Ab.exec(t);
        return l ? l[1] ? a(l[1]) : s : !1
    },
    Cb = t => t === "position" || t === "percentage",
    jb = t => t === "image" || t === "url",
    Rb = t => t === "length" || t === "size" || t === "bg-size",
    Db = t => t === "length",
    FT = t => t === "number",
    JT = t => t === "family-name",
    _b = t => t === "shadow",
    WT = () => {
        const t = Ct("color"),
            a = Ct("font"),
            s = Ct("text"),
            l = Ct("font-weight"),
            o = Ct("tracking"),
            u = Ct("leading"),
            d = Ct("breakpoint"),
            h = Ct("container"),
            p = Ct("spacing"),
            g = Ct("radius"),
            b = Ct("shadow"),
            m = Ct("inset-shadow"),
            S = Ct("text-shadow"),
            E = Ct("drop-shadow"),
            A = Ct("blur"),
            O = Ct("perspective"),
            R = Ct("aspect"),
            N = Ct("ease"),
            Y = Ct("animate"),
            K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            Z = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            B = () => [...Z(), me, pe],
            L = () => ["auto", "hidden", "clip", "visible", "scroll"],
            T = () => ["auto", "contain", "none"],
            _ = () => [me, pe, p],
            F = () => [Hs, "full", "auto", ..._()],
            $ = () => [rr, "none", "subgrid", me, pe],
            G = () => ["auto", {
                span: ["full", rr, me, pe]
            }, rr, me, pe],
            te = () => [rr, "auto", me, pe],
            le = () => ["auto", "min", "max", "fr", me, pe],
            ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            j = () => ["auto", ..._()],
            H = () => [Hs, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()],
            z = () => [t, me, pe],
            oe = () => [...Z(), ov, lv, {
                position: [me, pe]
            }],
            de = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            C = () => ["auto", "cover", "contain", IT, KT, {
                size: [me, pe]
            }],
            P = () => [ef, Yi, kr],
            U = () => ["", "none", "full", g, me, pe],
            I = () => ["", De, Yi, kr],
            ie = () => ["solid", "dashed", "dotted", "double"],
            ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ue = () => [De, ef, ov, lv],
            ve = () => ["", "none", A, me, pe],
            Oe = () => ["none", De, me, pe],
            Ee = () => ["none", De, me, pe],
            it = () => [De, me, pe],
            je = () => [Hs, "full", ..._()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Ca],
                breakpoint: [Ca],
                color: [QT],
                container: [Ca],
                "drop-shadow": [Ca],
                ease: ["in", "out", "in-out"],
                font: [VT],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Ca],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Ca],
                shadow: [Ca],
                spacing: ["px", De],
                text: [Ca],
                "text-shadow": [Ca],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", Hs, pe, me, R]
                }],
                container: ["container"],
                columns: [{
                    columns: [De, pe, me, h]
                }],
                "break-after": [{
                    "break-after": K()
                }],
                "break-before": [{
                    "break-before": K()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: B()
                }],
                overflow: [{
                    overflow: L()
                }],
                "overflow-x": [{
                    "overflow-x": L()
                }],
                "overflow-y": [{
                    "overflow-y": L()
                }],
                overscroll: [{
                    overscroll: T()
                }],
                "overscroll-x": [{
                    "overscroll-x": T()
                }],
                "overscroll-y": [{
                    "overscroll-y": T()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: F()
                }],
                "inset-x": [{
                    "inset-x": F()
                }],
                "inset-y": [{
                    "inset-y": F()
                }],
                start: [{
                    start: F()
                }],
                end: [{
                    end: F()
                }],
                top: [{
                    top: F()
                }],
                right: [{
                    right: F()
                }],
                bottom: [{
                    bottom: F()
                }],
                left: [{
                    left: F()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [rr, "auto", me, pe]
                }],
                basis: [{
                    basis: [Hs, "full", "auto", h, ..._()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [De, Hs, "auto", "initial", "none", pe]
                }],
                grow: [{
                    grow: ["", De, me, pe]
                }],
                shrink: [{
                    shrink: ["", De, me, pe]
                }],
                order: [{
                    order: [rr, "first", "last", "none", me, pe]
                }],
                "grid-cols": [{
                    "grid-cols": $()
                }],
                "col-start-end": [{
                    col: G()
                }],
                "col-start": [{
                    "col-start": te()
                }],
                "col-end": [{
                    "col-end": te()
                }],
                "grid-rows": [{
                    "grid-rows": $()
                }],
                "row-start-end": [{
                    row: G()
                }],
                "row-start": [{
                    "row-start": te()
                }],
                "row-end": [{
                    "row-end": te()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": le()
                }],
                "auto-rows": [{
                    "auto-rows": le()
                }],
                gap: [{
                    gap: _()
                }],
                "gap-x": [{
                    "gap-x": _()
                }],
                "gap-y": [{
                    "gap-y": _()
                }],
                "justify-content": [{
                    justify: [...ne(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...se(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...se()]
                }],
                "align-content": [{
                    content: ["normal", ...ne()]
                }],
                "align-items": [{
                    items: [...se(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...se(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": ne()
                }],
                "place-items": [{
                    "place-items": [...se(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...se()]
                }],
                p: [{
                    p: _()
                }],
                px: [{
                    px: _()
                }],
                py: [{
                    py: _()
                }],
                ps: [{
                    ps: _()
                }],
                pe: [{
                    pe: _()
                }],
                pt: [{
                    pt: _()
                }],
                pr: [{
                    pr: _()
                }],
                pb: [{
                    pb: _()
                }],
                pl: [{
                    pl: _()
                }],
                m: [{
                    m: j()
                }],
                mx: [{
                    mx: j()
                }],
                my: [{
                    my: j()
                }],
                ms: [{
                    ms: j()
                }],
                me: [{
                    me: j()
                }],
                mt: [{
                    mt: j()
                }],
                mr: [{
                    mr: j()
                }],
                mb: [{
                    mb: j()
                }],
                ml: [{
                    ml: j()
                }],
                "space-x": [{
                    "space-x": _()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": _()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: H()
                }],
                w: [{
                    w: [h, "screen", ...H()]
                }],
                "min-w": [{
                    "min-w": [h, "screen", "none", ...H()]
                }],
                "max-w": [{
                    "max-w": [h, "screen", "none", "prose", {
                        screen: [d]
                    }, ...H()]
                }],
                h: [{
                    h: ["screen", "lh", ...H()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...H()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...H()]
                }],
                "font-size": [{
                    text: ["base", s, Yi, kr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [l, me, tf]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ef, pe]
                }],
                "font-family": [{
                    font: [ZT, pe, a]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [o, me, pe]
                }],
                "line-clamp": [{
                    "line-clamp": [De, "none", me, tf]
                }],
                leading: [{
                    leading: [u, ..._()]
                }],
                "list-image": [{
                    "list-image": ["none", me, pe]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", me, pe]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: z()
                }],
                "text-color": [{
                    text: z()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ie(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [De, "from-font", "auto", me, kr]
                }],
                "text-decoration-color": [{
                    decoration: z()
                }],
                "underline-offset": [{
                    "underline-offset": [De, "auto", me, pe]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: _()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me, pe]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", me, pe]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: oe()
                }],
                "bg-repeat": [{
                    bg: de()
                }],
                "bg-size": [{
                    bg: C()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, rr, me, pe],
                        radial: ["", me, pe],
                        conic: [rr, me, pe]
                    }, $T, XT]
                }],
                "bg-color": [{
                    bg: z()
                }],
                "gradient-from-pos": [{
                    from: P()
                }],
                "gradient-via-pos": [{
                    via: P()
                }],
                "gradient-to-pos": [{
                    to: P()
                }],
                "gradient-from": [{
                    from: z()
                }],
                "gradient-via": [{
                    via: z()
                }],
                "gradient-to": [{
                    to: z()
                }],
                rounded: [{
                    rounded: U()
                }],
                "rounded-s": [{
                    "rounded-s": U()
                }],
                "rounded-e": [{
                    "rounded-e": U()
                }],
                "rounded-t": [{
                    "rounded-t": U()
                }],
                "rounded-r": [{
                    "rounded-r": U()
                }],
                "rounded-b": [{
                    "rounded-b": U()
                }],
                "rounded-l": [{
                    "rounded-l": U()
                }],
                "rounded-ss": [{
                    "rounded-ss": U()
                }],
                "rounded-se": [{
                    "rounded-se": U()
                }],
                "rounded-ee": [{
                    "rounded-ee": U()
                }],
                "rounded-es": [{
                    "rounded-es": U()
                }],
                "rounded-tl": [{
                    "rounded-tl": U()
                }],
                "rounded-tr": [{
                    "rounded-tr": U()
                }],
                "rounded-br": [{
                    "rounded-br": U()
                }],
                "rounded-bl": [{
                    "rounded-bl": U()
                }],
                "border-w": [{
                    border: I()
                }],
                "border-w-x": [{
                    "border-x": I()
                }],
                "border-w-y": [{
                    "border-y": I()
                }],
                "border-w-s": [{
                    "border-s": I()
                }],
                "border-w-e": [{
                    "border-e": I()
                }],
                "border-w-t": [{
                    "border-t": I()
                }],
                "border-w-r": [{
                    "border-r": I()
                }],
                "border-w-b": [{
                    "border-b": I()
                }],
                "border-w-l": [{
                    "border-l": I()
                }],
                "divide-x": [{
                    "divide-x": I()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": I()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...ie(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...ie(), "hidden", "none"]
                }],
                "border-color": [{
                    border: z()
                }],
                "border-color-x": [{
                    "border-x": z()
                }],
                "border-color-y": [{
                    "border-y": z()
                }],
                "border-color-s": [{
                    "border-s": z()
                }],
                "border-color-e": [{
                    "border-e": z()
                }],
                "border-color-t": [{
                    "border-t": z()
                }],
                "border-color-r": [{
                    "border-r": z()
                }],
                "border-color-b": [{
                    "border-b": z()
                }],
                "border-color-l": [{
                    "border-l": z()
                }],
                "divide-color": [{
                    divide: z()
                }],
                "outline-style": [{
                    outline: [...ie(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [De, me, pe]
                }],
                "outline-w": [{
                    outline: ["", De, Yi, kr]
                }],
                "outline-color": [{
                    outline: z()
                }],
                shadow: [{
                    shadow: ["", "none", b, Qo, qo]
                }],
                "shadow-color": [{
                    shadow: z()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", m, Qo, qo]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": z()
                }],
                "ring-w": [{
                    ring: I()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: z()
                }],
                "ring-offset-w": [{
                    "ring-offset": [De, kr]
                }],
                "ring-offset-color": [{
                    "ring-offset": z()
                }],
                "inset-ring-w": [{
                    "inset-ring": I()
                }],
                "inset-ring-color": [{
                    "inset-ring": z()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", S, Qo, qo]
                }],
                "text-shadow-color": [{
                    "text-shadow": z()
                }],
                opacity: [{
                    opacity: [De, me, pe]
                }],
                "mix-blend": [{
                    "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": ce()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [De]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ue()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ue()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": z()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": z()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ue()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ue()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": z()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": z()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ue()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ue()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": z()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": z()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ue()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ue()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": z()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": z()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ue()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ue()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": z()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": z()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ue()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ue()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": z()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": z()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ue()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ue()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": z()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": z()
                }],
                "mask-image-radial": [{
                    "mask-radial": [me, pe]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ue()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ue()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": z()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": z()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": Z()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [De]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ue()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ue()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": z()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": z()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: oe()
                }],
                "mask-repeat": [{
                    mask: de()
                }],
                "mask-size": [{
                    mask: C()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", me, pe]
                }],
                filter: [{
                    filter: ["", "none", me, pe]
                }],
                blur: [{
                    blur: ve()
                }],
                brightness: [{
                    brightness: [De, me, pe]
                }],
                contrast: [{
                    contrast: [De, me, pe]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", E, Qo, qo]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": z()
                }],
                grayscale: [{
                    grayscale: ["", De, me, pe]
                }],
                "hue-rotate": [{
                    "hue-rotate": [De, me, pe]
                }],
                invert: [{
                    invert: ["", De, me, pe]
                }],
                saturate: [{
                    saturate: [De, me, pe]
                }],
                sepia: [{
                    sepia: ["", De, me, pe]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", me, pe]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ve()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [De, me, pe]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [De, me, pe]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", De, me, pe]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [De, me, pe]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", De, me, pe]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [De, me, pe]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [De, me, pe]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", De, me, pe]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": _()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": _()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": _()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", me, pe]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [De, "initial", me, pe]
                }],
                ease: [{
                    ease: ["linear", "initial", N, me, pe]
                }],
                delay: [{
                    delay: [De, me, pe]
                }],
                animate: [{
                    animate: ["none", Y, me, pe]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [O, me, pe]
                }],
                "perspective-origin": [{
                    "perspective-origin": B()
                }],
                rotate: [{
                    rotate: Oe()
                }],
                "rotate-x": [{
                    "rotate-x": Oe()
                }],
                "rotate-y": [{
                    "rotate-y": Oe()
                }],
                "rotate-z": [{
                    "rotate-z": Oe()
                }],
                scale: [{
                    scale: Ee()
                }],
                "scale-x": [{
                    "scale-x": Ee()
                }],
                "scale-y": [{
                    "scale-y": Ee()
                }],
                "scale-z": [{
                    "scale-z": Ee()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: it()
                }],
                "skew-x": [{
                    "skew-x": it()
                }],
                "skew-y": [{
                    "skew-y": it()
                }],
                transform: [{
                    transform: [me, pe, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: B()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: je()
                }],
                "translate-x": [{
                    "translate-x": je()
                }],
                "translate-y": [{
                    "translate-y": je()
                }],
                "translate-z": [{
                    "translate-z": je()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: z()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: z()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me, pe]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": _()
                }],
                "scroll-mx": [{
                    "scroll-mx": _()
                }],
                "scroll-my": [{
                    "scroll-my": _()
                }],
                "scroll-ms": [{
                    "scroll-ms": _()
                }],
                "scroll-me": [{
                    "scroll-me": _()
                }],
                "scroll-mt": [{
                    "scroll-mt": _()
                }],
                "scroll-mr": [{
                    "scroll-mr": _()
                }],
                "scroll-mb": [{
                    "scroll-mb": _()
                }],
                "scroll-ml": [{
                    "scroll-ml": _()
                }],
                "scroll-p": [{
                    "scroll-p": _()
                }],
                "scroll-px": [{
                    "scroll-px": _()
                }],
                "scroll-py": [{
                    "scroll-py": _()
                }],
                "scroll-ps": [{
                    "scroll-ps": _()
                }],
                "scroll-pe": [{
                    "scroll-pe": _()
                }],
                "scroll-pt": [{
                    "scroll-pt": _()
                }],
                "scroll-pr": [{
                    "scroll-pr": _()
                }],
                "scroll-pb": [{
                    "scroll-pb": _()
                }],
                "scroll-pl": [{
                    "scroll-pl": _()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", me, pe]
                }],
                fill: [{
                    fill: ["none", ...z()]
                }],
                "stroke-w": [{
                    stroke: [De, Yi, kr, tf]
                }],
                stroke: [{
                    stroke: ["none", ...z()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    eC = HT(WT);

function wc(...t) {
    return eC(Sb(t))
}

function tC({
    delayDuration: t = 0,
    ...a
}) {
    return y.jsx(xT, {
        "data-loc": "client/src/components/ui/tooltip.tsx:11",
        "data-slot": "tooltip-provider",
        delayDuration: t,
        ...a
    })
}
const cv = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    uv = Sb,
    nC = (t, a) => s => {
        var l;
        if (a?.variants == null) return uv(t, s?.class, s?.className);
        const {
            variants: o,
            defaultVariants: u
        } = a, d = Object.keys(o).map(g => {
            const b = s?.[g],
                m = u?.[g];
            if (b === null) return null;
            const S = cv(b) || cv(m);
            return o[g][S]
        }), h = s && Object.entries(s).reduce((g, b) => {
            let [m, S] = b;
            return S === void 0 || (g[m] = S), g
        }, {}), p = a == null || (l = a.compoundVariants) === null || l === void 0 ? void 0 : l.reduce((g, b) => {
            let {
                class: m,
                className: S,
                ...E
            } = b;
            return Object.entries(E).every(A => {
                let [O, R] = A;
                return Array.isArray(R) ? R.includes({
                    ...u,
                    ...h
                } [O]) : {
                    ...u,
                    ...h
                } [O] === R
            }) ? [...g, m, S] : g
        }, []);
        return uv(t, d, p, s?.class, s?.className)
    },
    aC = nC("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    });

function rC({
    className: t,
    variant: a,
    size: s,
    asChild: l = !1,
    ...o
}) {
    const u = l ? pO : "button";
    return y.jsx(u, {
        "data-loc": "client/src/components/ui/button.tsx:52",
        "data-slot": "button",
        className: wc(aC({
            variant: a,
            size: s,
            className: t
        })),
        ...o
    })
}

function sC({
    className: t,
    ...a
}) {
    return y.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:7",
        "data-slot": "card",
        className: wc("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t),
        ...a
    })
}

function iC({
    className: t,
    ...a
}) {
    return y.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:66",
        "data-slot": "card-content",
        className: wc("px-6", t),
        ...a
    })
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Mb = (...t) => t.filter((a, s, l) => !!a && l.indexOf(a) === s).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = x.forwardRef(({
    color: t = "currentColor",
    size: a = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: u,
    iconNode: d,
    ...h
}, p) => x.createElement("svg", {
    ref: p,
    ...oC,
    width: a,
    height: a,
    stroke: t,
    strokeWidth: l ? Number(s) * 24 / Number(a) : s,
    className: Mb("lucide", o),
    ...h
}, [...d.map(([g, b]) => x.createElement(g, b)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = (t, a) => {
    const s = x.forwardRef(({
        className: l,
        ...o
    }, u) => x.createElement(cC, {
        ref: u,
        iconNode: a,
        className: Mb(`lucide-${lC(t)}`, l),
        ...o
    }));
    return s.displayName = `${t}`, s
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lf = et("ArrowUpRight", [
    ["path", {
        d: "M7 7h10v10",
        key: "1tivn9"
    }],
    ["path", {
        d: "M7 17 17 7",
        key: "1vkiza"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = et("BellRing", [
    ["path", {
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
        key: "1qo2s2"
    }],
    ["path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
        key: "qgo35s"
    }],
    ["path", {
        d: "M4 2C2.8 3.7 2 5.7 2 8",
        key: "tap9e0"
    }],
    ["path", {
        d: "M22 8c0-2.3-.8-4.3-2-6",
        key: "5bb3ad"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dC = et("Bell", [
    ["path", {
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
        key: "1qo2s2"
    }],
    ["path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
        key: "qgo35s"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = et("CalendarDays", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }],
    ["path", {
        d: "M8 14h.01",
        key: "6423bh"
    }],
    ["path", {
        d: "M12 14h.01",
        key: "1etili"
    }],
    ["path", {
        d: "M16 14h.01",
        key: "1gbofw"
    }],
    ["path", {
        d: "M8 18h.01",
        key: "lrp35t"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }],
    ["path", {
        d: "M16 18h.01",
        key: "kzsmim"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = et("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = et("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = et("CircleAlert", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = et("CircleDashed", [
    ["path", {
        d: "M10.1 2.182a10 10 0 0 1 3.8 0",
        key: "5ilxe3"
    }],
    ["path", {
        d: "M13.9 21.818a10 10 0 0 1-3.8 0",
        key: "11zvb9"
    }],
    ["path", {
        d: "M17.609 3.721a10 10 0 0 1 2.69 2.7",
        key: "1iw5b2"
    }],
    ["path", {
        d: "M2.182 13.9a10 10 0 0 1 0-3.8",
        key: "c0bmvh"
    }],
    ["path", {
        d: "M20.279 17.609a10 10 0 0 1-2.7 2.69",
        key: "1ruxm7"
    }],
    ["path", {
        d: "M21.818 10.1a10 10 0 0 1 0 3.8",
        key: "qkgqxc"
    }],
    ["path", {
        d: "M3.721 6.391a10 10 0 0 1 2.7-2.69",
        key: "1mcia2"
    }],
    ["path", {
        d: "M6.391 20.279a10 10 0 0 1-2.69-2.7",
        key: "1fvljs"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = et("ClipboardList", [
    ["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }],
    ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }],
    ["path", {
        d: "M12 11h4",
        key: "1jrz19"
    }],
    ["path", {
        d: "M12 16h4",
        key: "n85exb"
    }],
    ["path", {
        d: "M8 11h.01",
        key: "1dfujw"
    }],
    ["path", {
        d: "M8 16h.01",
        key: "18s6g9"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = et("Clock3", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16.5 12",
        key: "1aq6pp"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = et("FileText", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "M10 9H8",
        key: "b1mrlr"
    }],
    ["path", {
        d: "M16 13H8",
        key: "t4e002"
    }],
    ["path", {
        d: "M16 17H8",
        key: "z1uh3a"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = et("Gauge", [
    ["path", {
        d: "m12 14 4-4",
        key: "9kzdfg"
    }],
    ["path", {
        d: "M3.34 19a10 10 0 1 1 17.32 0",
        key: "19p75a"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = et("GripVertical", [
    ["circle", {
        cx: "9",
        cy: "12",
        r: "1",
        key: "1vctgf"
    }],
    ["circle", {
        cx: "9",
        cy: "5",
        r: "1",
        key: "hp0tcf"
    }],
    ["circle", {
        cx: "9",
        cy: "19",
        r: "1",
        key: "fkjjf6"
    }],
    ["circle", {
        cx: "15",
        cy: "12",
        r: "1",
        key: "1tmaij"
    }],
    ["circle", {
        cx: "15",
        cy: "5",
        r: "1",
        key: "19l28e"
    }],
    ["circle", {
        cx: "15",
        cy: "19",
        r: "1",
        key: "f4zoj3"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gC = et("House", [
    ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
    }],
    ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yC = et("LayoutDashboard", [
    ["rect", {
        width: "7",
        height: "9",
        x: "3",
        y: "3",
        rx: "1",
        key: "10lvy0"
    }],
    ["rect", {
        width: "7",
        height: "5",
        x: "14",
        y: "3",
        rx: "1",
        key: "16une8"
    }],
    ["rect", {
        width: "7",
        height: "9",
        x: "14",
        y: "12",
        rx: "1",
        key: "1hutg5"
    }],
    ["rect", {
        width: "7",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "ldoo1y"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vC = et("ListChecks", [
    ["path", {
        d: "m3 17 2 2 4-4",
        key: "1jhpwq"
    }],
    ["path", {
        d: "m3 7 2 2 4-4",
        key: "1obspn"
    }],
    ["path", {
        d: "M13 6h8",
        key: "15sg57"
    }],
    ["path", {
        d: "M13 12h8",
        key: "h98zly"
    }],
    ["path", {
        d: "M13 18h8",
        key: "oe0vm4"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = et("ListTodo", [
    ["rect", {
        x: "3",
        y: "5",
        width: "6",
        height: "6",
        rx: "1",
        key: "1defrl"
    }],
    ["path", {
        d: "m3 17 2 2 4-4",
        key: "1jhpwq"
    }],
    ["path", {
        d: "M13 6h8",
        key: "15sg57"
    }],
    ["path", {
        d: "M13 12h8",
        key: "h98zly"
    }],
    ["path", {
        d: "M13 18h8",
        key: "oe0vm4"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = et("Pencil", [
    ["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }],
    ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = et("Plus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = et("Repeat2", [
    ["path", {
        d: "m2 9 3-3 3 3",
        key: "1ltn5i"
    }],
    ["path", {
        d: "M13 18H7a2 2 0 0 1-2-2V6",
        key: "1r6tfw"
    }],
    ["path", {
        d: "m22 15-3 3-3-3",
        key: "4rnwn2"
    }],
    ["path", {
        d: "M11 6h6a2 2 0 0 1 2 2v10",
        key: "2f72bc"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = et("RotateCcw", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = et("Save", [
    ["path", {
        d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
        key: "1c8476"
    }],
    ["path", {
        d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
        key: "1ydtos"
    }],
    ["path", {
        d: "M7 3v4a1 1 0 0 0 1 1h7",
        key: "t51u73"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = et("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = et("Trash2", [
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
    }],
    ["path", {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "11",
        y2: "17",
        key: "1uufr5"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "11",
        y2: "17",
        key: "xtxkd"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wC = et("TriangleAlert", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = et("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = et("Zap", [
    ["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]
]);

function OC(t, a) {
    if (t instanceof RegExp) return {
        keys: !1,
        pattern: t
    };
    var s, l, o, u, d = [],
        h = "",
        p = t.split("/");
    for (p[0] || p.shift(); o = p.shift();) s = o[0], s === "*" ? (d.push(s), h += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : s === ":" ? (l = o.indexOf("?", 1), u = o.indexOf(".", 1), d.push(o.substring(1, ~l ? l : ~u ? u : o.length)), h += ~l && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)", ~u && (h += (~l ? "?" : "") + "\\" + o.substring(u))) : h += "/" + o;
    return {
        keys: d,
        pattern: new RegExp("^" + h + (a ? "(?=$|/)" : "/?$"), "i")
    }
}
var nf = {
        exports: {}
    },
    af = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv;

function AC() {
    if (dv) return af;
    dv = 1;
    var t = oc();

    function a(m, S) {
        return m === S && (m !== 0 || 1 / m === 1 / S) || m !== m && S !== S
    }
    var s = typeof Object.is == "function" ? Object.is : a,
        l = t.useState,
        o = t.useEffect,
        u = t.useLayoutEffect,
        d = t.useDebugValue;

    function h(m, S) {
        var E = S(),
            A = l({
                inst: {
                    value: E,
                    getSnapshot: S
                }
            }),
            O = A[0].inst,
            R = A[1];
        return u(function() {
            O.value = E, O.getSnapshot = S, p(O) && R({
                inst: O
            })
        }, [m, E, S]), o(function() {
            return p(O) && R({
                inst: O
            }), m(function() {
                p(O) && R({
                    inst: O
                })
            })
        }, [m]), d(E), E
    }

    function p(m) {
        var S = m.getSnapshot;
        m = m.value;
        try {
            var E = S();
            return !s(m, E)
        } catch {
            return !0
        }
    }

    function g(m, S) {
        return S()
    }
    var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : h;
    return af.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : b, af
}
var fv;

function TC() {
    return fv || (fv = 1, nf.exports = AC()), nf.exports
}
var CC = TC();
const jC = Kv.useInsertionEffect,
    RC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    DC = RC ? x.useLayoutEffect : x.useEffect,
    _C = jC || DC,
    Lb = t => {
        const a = x.useRef([t, (...s) => a[0](...s)]).current;
        return _C(() => {
            a[0] = t
        }), a[1]
    },
    MC = "popstate",
    uh = "pushState",
    dh = "replaceState",
    NC = "hashchange",
    hv = [MC, uh, dh, NC],
    HC = t => {
        for (const a of hv) addEventListener(a, t);
        return () => {
            for (const a of hv) removeEventListener(a, t)
        }
    },
    Bb = (t, a) => CC.useSyncExternalStore(HC, t, a),
    zC = () => location.search,
    kC = ({
        ssrSearch: t = ""
    } = {}) => Bb(zC, () => t),
    pv = () => location.pathname,
    UC = ({
        ssrPath: t
    } = {}) => Bb(pv, t ? () => t : pv),
    LC = (t, {
        replace: a = !1,
        state: s = null
    } = {}) => history[a ? dh : uh](s, "", t),
    BC = (t = {}) => [UC(t), LC],
    mv = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[mv] > "u") {
    for (const t of [uh, dh]) {
        const a = history[t];
        history[t] = function() {
            const s = a.apply(this, arguments),
                l = new Event(t);
            return l.arguments = arguments, dispatchEvent(l), s
        }
    }
    Object.defineProperty(window, mv, {
        value: !0
    })
}
const qC = (t, a) => a.toLowerCase().indexOf(t.toLowerCase()) ? "~" + a : a.slice(t.length) || "/",
    qb = (t = "") => t === "/" ? "" : t,
    QC = (t, a) => t[0] === "~" ? t.slice(1) : qb(a) + t,
    PC = (t = "", a) => qC(gv(qb(t)), gv(a)),
    gv = t => {
        try {
            return decodeURI(t)
        } catch {
            return t
        }
    },
    Qb = {
        hook: BC,
        searchHook: kC,
        parser: OC,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        ssrContext: void 0,
        hrefs: t => t
    },
    Pb = x.createContext(Qb),
    ml = () => x.useContext(Pb),
    Yb = {},
    Gb = x.createContext(Yb),
    YC = () => x.useContext(Gb),
    Oc = t => {
        const [a, s] = t.hook(t);
        return [PC(t.base, a), Lb((l, o) => s(QC(l, t.base), o))]
    },
    GC = () => Oc(ml()),
    Vb = (t, a, s, l) => {
        const {
            pattern: o,
            keys: u
        } = a instanceof RegExp ? {
            keys: !1,
            pattern: a
        } : t(a || "*", l), d = o.exec(s) || [], [h, ...p] = d;
        return h !== void 0 ? [!0, (() => {
            const g = u !== !1 ? Object.fromEntries(u.map((m, S) => [m, p[S]])) : d.groups;
            let b = {
                ...p
            };
            return g && Object.assign(b, g), b
        })(), ...l ? [h] : []] : [!1, null]
    },
    VC = ({
        children: t,
        ...a
    }) => {
        const s = ml(),
            l = a.hook ? Qb : s;
        let o = l;
        const [u, d] = a.ssrPath?.split("?") ?? [];
        d && (a.ssrSearch = d, a.ssrPath = u), a.hrefs = a.hrefs ?? a.hook?.hrefs;
        let h = x.useRef({}),
            p = h.current,
            g = p;
        for (let b in l) {
            const m = b === "base" ? l[b] + (a[b] || "") : a[b] || l[b];
            p === g && m !== g[b] && (h.current = g = {
                ...g
            }), g[b] = m, (m !== l[b] || m !== o[b]) && (o = g)
        }
        return x.createElement(Pb.Provider, {
            value: o,
            children: t
        })
    },
    yv = ({
        children: t,
        component: a
    }, s) => a ? x.createElement(a, {
        params: s
    }) : typeof t == "function" ? t(s) : t,
    KC = t => {
        let a = x.useRef(Yb);
        const s = a.current;
        return a.current = Object.keys(t).length !== Object.keys(s).length || Object.entries(t).some(([l, o]) => o !== s[l]) ? t : s
    },
    rf = ({
        path: t,
        nest: a,
        match: s,
        ...l
    }) => {
        const o = ml(),
            [u] = Oc(o),
            [d, h, p] = s ?? Vb(o.parser, t, u, a),
            g = KC({
                ...YC(),
                ...h
            });
        if (!d) return null;
        const b = p ? x.createElement(VC, {
            base: p
        }, yv(l, g)) : yv(l, g);
        return x.createElement(Gb.Provider, {
            value: g,
            children: b
        })
    };
x.forwardRef((t, a) => {
    const s = ml(),
        [l, o] = Oc(s),
        {
            to: u = "",
            href: d = u,
            onClick: h,
            asChild: p,
            children: g,
            className: b,
            replace: m,
            state: S,
            ...E
        } = t,
        A = Lb(R => {
            R.ctrlKey || R.metaKey || R.altKey || R.shiftKey || R.button !== 0 || (h?.(R), R.defaultPrevented || (R.preventDefault(), o(d, t)))
        }),
        O = s.hrefs(d[0] === "~" ? d.slice(1) : s.base + d, s);
    return p && x.isValidElement(g) ? x.cloneElement(g, {
        onClick: A,
        href: O
    }) : x.createElement("a", {
        ...E,
        onClick: A,
        href: O,
        className: b?.call ? b(l === d) : b,
        children: g,
        ref: a
    })
});
const qf = t => Array.isArray(t) ? t.flatMap(a => qf(a && a.type === x.Fragment ? a.props.children : a)) : [t],
    XC = ({
        children: t,
        location: a
    }) => {
        const s = ml(),
            [l] = Oc(s);
        typeof window < "u" && (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []), qf(t).forEach(u => {
            if (x.isValidElement(u) && u.props.path) {
                const d = u.props.path;
                window.__WOUTER_ROUTES__.includes(d) || window.__WOUTER_ROUTES__.push(d)
            }
        }));
        for (const o of qf(t)) {
            let u = 0;
            if (x.isValidElement(o) && (u = Vb(s.parser, o.props.path, a || l, o.props.nest))[0]) return x.cloneElement(o, {
                match: u
            })
        }
        return null
    };

function vv() {
    const [, t] = GC(), a = () => {
        t("/")
    };
    return y.jsx("div", {
        "data-loc": "client/src/pages/NotFound.tsx:14",
        className: "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
        children: y.jsx(sC, {
            "data-loc": "client/src/pages/NotFound.tsx:15",
            className: "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
            children: y.jsxs(iC, {
                "data-loc": "client/src/pages/NotFound.tsx:16",
                className: "pt-8 pb-8 text-center",
                children: [y.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:17",
                    className: "flex justify-center mb-6",
                    children: y.jsxs("div", {
                        "data-loc": "client/src/pages/NotFound.tsx:18",
                        className: "relative",
                        children: [y.jsx("div", {
                            "data-loc": "client/src/pages/NotFound.tsx:19",
                            className: "absolute inset-0 bg-red-100 rounded-full animate-pulse"
                        }), y.jsx(hC, {
                            "data-loc": "client/src/pages/NotFound.tsx:20",
                            className: "relative h-16 w-16 text-red-500"
                        })]
                    })
                }), y.jsx("h1", {
                    "data-loc": "client/src/pages/NotFound.tsx:24",
                    className: "text-4xl font-bold text-slate-900 mb-2",
                    children: "404"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/NotFound.tsx:26",
                    className: "text-xl font-semibold text-slate-700 mb-4",
                    children: "Page Not Found"
                }), y.jsxs("p", {
                    "data-loc": "client/src/pages/NotFound.tsx:30",
                    className: "text-slate-600 mb-8 leading-relaxed",
                    children: ["Sorry, the page you are looking for doesn't exist.", y.jsx("br", {
                        "data-loc": "client/src/pages/NotFound.tsx:32"
                    }), "It may have been moved or deleted."]
                }), y.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:36",
                    id: "not-found-button-group",
                    className: "flex flex-col sm:flex-row gap-3 justify-center",
                    children: y.jsxs(rC, {
                        "data-loc": "client/src/pages/NotFound.tsx:40",
                        onClick: a,
                        className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
                        children: [y.jsx(gC, {
                            "data-loc": "client/src/pages/NotFound.tsx:44",
                            className: "w-4 h-4 mr-2"
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
class ZC extends x.Component {
    constructor(a) {
        super(a), this.state = {
            hasError: !1,
            error: null
        }
    }
    static getDerivedStateFromError(a) {
        return {
            hasError: !0,
            error: a
        }
    }
    render() {
        return this.state.hasError ? y.jsx("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:27",
            className: "flex items-center justify-center min-h-screen p-8 bg-background",
            children: y.jsxs("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:28",
                className: "flex flex-col items-center w-full max-w-2xl p-8",
                children: [y.jsx(wC, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                    size: 48,
                    className: "text-destructive mb-6 flex-shrink-0"
                }), y.jsx("h2", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                    className: "text-xl mb-4",
                    children: "An unexpected error occurred."
                }), y.jsx("div", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                    className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                    children: y.jsx("pre", {
                        "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                        className: "text-sm text-muted-foreground whitespace-break-spaces",
                        children: this.state.error?.stack
                    })
                }), y.jsxs("button", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                    onClick: () => window.location.reload(),
                    className: wc("flex items-center gap-2 px-4 py-2 rounded-lg", "bg-primary text-primary-foreground", "hover:opacity-90 cursor-pointer"),
                    children: [y.jsx(SC, {
                        "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                        size: 16
                    }), "Reload Page"]
                })]
            })
        }) : this.props.children
    }
}
const IC = x.createContext(void 0);

function $C({
    children: t,
    defaultTheme: a = "light",
    switchable: s = !1
}) {
    const [l, o] = x.useState(() => s && localStorage.getItem("theme") || a);
    x.useEffect(() => {
        const d = document.documentElement;
        l === "dark" ? d.classList.add("dark") : d.classList.remove("dark"), s && localStorage.setItem("theme", l)
    }, [l, s]);
    const u = s ? () => {
        o(d => d === "light" ? "dark" : "light")
    } : void 0;
    return y.jsx(IC.Provider, {
        "data-loc": "client/src/contexts/ThemeContext.tsx:52",
        value: {
            theme: l,
            toggleTheme: u,
            switchable: s
        },
        children: t
    })
}
const ec = () => {
    const t = "https://manus.im",
        a = "X55WLeWNyBAJ3TsFZS2jne",
        s = `${window.location.origin}/api/oauth/callback`,
        l = crypto.randomUUID();
    document.cookie = `${X2}=${l}; Path=/; Max-Age=600; SameSite=None; Secure`;
    const o = Z2({
            redirectUri: s,
            nonce: l
        }),
        u = new URL(`${t}/app-auth`);
    u.searchParams.set("appId", a), u.searchParams.set("redirectUri", s), u.searchParams.set("state", o), u.searchParams.set("type", "signIn"), window.location.href = u.toString()
};

function FC(t) {
    const {
        redirectOnUnauthenticated: a = !1,
        redirectPath: s
    } = {}, l = jt.useUtils(), o = jt.auth.me.useQuery(void 0, {
        retry: !1,
        refetchOnWindowFocus: !1
    }), u = jt.auth.logout.useMutation({
        onSuccess: () => {
            l.auth.me.setData(void 0, null)
        }
    }), d = x.useCallback(async () => {
        try {
            await u.mutateAsync()
        } catch (p) {
            if (p instanceof qs && p.data?.code === "UNAUTHORIZED") return;
            throw p
        } finally {
            try {
                sessionStorage.removeItem("manus-cookie")
            } catch {}
            l.auth.me.setData(void 0, null), await l.auth.me.invalidate()
        }
    }, [u, l]), h = x.useMemo(() => (localStorage.setItem("manus-runtime-user-info", JSON.stringify(o.data)), {
        user: o.data ?? null,
        loading: o.isLoading || u.isPending,
        error: o.error ?? u.error ?? null,
        isAuthenticated: !!o.data
    }), [o.data, o.error, o.isLoading, u.error, u.isPending]);
    return x.useEffect(() => {
        a && (o.isLoading || u.isPending || h.user || typeof window > "u" || s && window.location.pathname === s || (s ? window.location.href = s : ec()))
    }, [a, s, u.isPending, o.isLoading, h.user]), {
        ...h,
        refresh: () => o.refetch(),
        logout: d
    }
}
const JC = {
    예정: {
        label: "예정",
        tone: "planned"
    },
    진행중: {
        label: "진행중",
        tone: "progress"
    },
    완료: {
        label: "완료",
        tone: "complete"
    },
    지연: {
        label: "지연",
        tone: "overdue"
    }
};

function WC(t) {
    const a = /^(\d{2}):(\d{2})$/.exec(t);
    if (!a) return null;
    const s = Number(a[1]),
        l = Number(a[2]);
    return s > 23 || l > 59 ? null : s * 60 + l
}

function ej(t, a = new Date) {
    if (t.completed) return !1;
    const s = WC(t.time);
    return s === null ? !1 : a.getHours() * 60 + a.getMinutes() > s
}

function tj(t, a = new Date) {
    return t.completed ? "완료" : ej(t, a) ? "지연" : t.status ?? "예정"
}
const ks = "자주 사용하는 프롬프트나 작성 기준을 입력하세요.";

function bv(t) {
    return t.map(a => ({
        ...a,
        title: a.title.trim() || "새 프롬프트",
        description: typeof a.description == "string" ? a.description : ks,
        content: typeof a.content == "string" ? a.content : ""
    }))
}

function mr(t) {
    const a = t.getFullYear(),
        s = String(t.getMonth() + 1).padStart(2, "0"),
        l = String(t.getDate()).padStart(2, "0");
    return `${a}-${s}-${l}`
}

function Gi(t) {
    const [a, s, l] = t.split("-").map(Number);
    return new Date(a, s - 1, l)
}

function Kb(t) {
    const a = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
        s = (a.getDay() + 6) % 7;
    return a.setDate(a.getDate() - s), Array.from({
        length: 7
    }, (l, o) => {
        const u = new Date(a);
        return u.setDate(a.getDate() + o), mr(u)
    })
}

function Xi(t) {
    if (t.completed && t.completedAt) {
        const a = new Date(t.completedAt);
        if (!Number.isNaN(a.getTime())) return mr(a)
    }
    return t.scheduledDate
}

function nj() {
    for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++) a[s] = arguments[s];
    return x.useMemo(() => l => {
        a.forEach(o => o(l))
    }, a)
}
const Ac = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Zs(t) {
    const a = Object.prototype.toString.call(t);
    return a === "[object Window]" || a === "[object global]"
}

function fh(t) {
    return "nodeType" in t
}

function It(t) {
    var a, s;
    return t ? Zs(t) ? t : fh(t) && (a = (s = t.ownerDocument) == null ? void 0 : s.defaultView) != null ? a : window : window
}

function hh(t) {
    const {
        Document: a
    } = It(t);
    return t instanceof a
}

function gl(t) {
    return Zs(t) ? !1 : t instanceof It(t).HTMLElement
}

function Xb(t) {
    return t instanceof It(t).SVGElement
}

function Is(t) {
    return t ? Zs(t) ? t.document : fh(t) ? hh(t) ? t : gl(t) || Xb(t) ? t.ownerDocument : document : document : document
}
const Kn = Ac ? x.useLayoutEffect : x.useEffect;

function Tc(t) {
    const a = x.useRef(t);
    return Kn(() => {
        a.current = t
    }), x.useCallback(function() {
        for (var s = arguments.length, l = new Array(s), o = 0; o < s; o++) l[o] = arguments[o];
        return a.current == null ? void 0 : a.current(...l)
    }, [])
}

function aj() {
    const t = x.useRef(null),
        a = x.useCallback((l, o) => {
            t.current = setInterval(l, o)
        }, []),
        s = x.useCallback(() => {
            t.current !== null && (clearInterval(t.current), t.current = null)
        }, []);
    return [a, s]
}

function il(t, a) {
    a === void 0 && (a = [t]);
    const s = x.useRef(t);
    return Kn(() => {
        s.current !== t && (s.current = t)
    }, a), s
}

function yl(t, a) {
    const s = x.useRef();
    return x.useMemo(() => {
        const l = t(s.current);
        return s.current = l, l
    }, [...a])
}

function tc(t) {
    const a = Tc(t),
        s = x.useRef(null),
        l = x.useCallback(o => {
            o !== s.current && a?.(o, s.current), s.current = o
        }, []);
    return [s, l]
}

function nc(t) {
    const a = x.useRef();
    return x.useEffect(() => {
        a.current = t
    }, [t]), a.current
}
let sf = {};

function vl(t, a) {
    return x.useMemo(() => {
        if (a) return a;
        const s = sf[t] == null ? 0 : sf[t] + 1;
        return sf[t] = s, t + "-" + s
    }, [t, a])
}

function Zb(t) {
    return function(a) {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) l[o - 1] = arguments[o];
        return l.reduce((u, d) => {
            const h = Object.entries(d);
            for (const [p, g] of h) {
                const b = u[p];
                b != null && (u[p] = b + t * g)
            }
            return u
        }, {
            ...a
        })
    }
}
const Ls = Zb(1),
    ll = Zb(-1);

function rj(t) {
    return "clientX" in t && "clientY" in t
}

function Cc(t) {
    if (!t) return !1;
    const {
        KeyboardEvent: a
    } = It(t.target);
    return a && t instanceof a
}

function sj(t) {
    if (!t) return !1;
    const {
        TouchEvent: a
    } = It(t.target);
    return a && t instanceof a
}

function ac(t) {
    if (sj(t)) {
        if (t.touches && t.touches.length) {
            const {
                clientX: a,
                clientY: s
            } = t.touches[0];
            return {
                x: a,
                y: s
            }
        } else if (t.changedTouches && t.changedTouches.length) {
            const {
                clientX: a,
                clientY: s
            } = t.changedTouches[0];
            return {
                x: a,
                y: s
            }
        }
    }
    return rj(t) ? {
        x: t.clientX,
        y: t.clientY
    } : null
}
const gr = Object.freeze({
        Translate: {
            toString(t) {
                if (!t) return;
                const {
                    x: a,
                    y: s
                } = t;
                return "translate3d(" + (a ? Math.round(a) : 0) + "px, " + (s ? Math.round(s) : 0) + "px, 0)"
            }
        },
        Scale: {
            toString(t) {
                if (!t) return;
                const {
                    scaleX: a,
                    scaleY: s
                } = t;
                return "scaleX(" + a + ") scaleY(" + s + ")"
            }
        },
        Transform: {
            toString(t) {
                if (t) return [gr.Translate.toString(t), gr.Scale.toString(t)].join(" ")
            }
        },
        Transition: {
            toString(t) {
                let {
                    property: a,
                    duration: s,
                    easing: l
                } = t;
                return a + " " + s + "ms " + l
            }
        }
    }),
    xv = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

function ij(t) {
    return t.matches(xv) ? t : t.querySelector(xv)
}
const lj = {
    display: "none"
};

function oj(t) {
    let {
        id: a,
        value: s
    } = t;
    return re.createElement("div", {
        id: a,
        style: lj
    }, s)
}

function cj(t) {
    let {
        id: a,
        announcement: s,
        ariaLiveType: l = "assertive"
    } = t;
    const o = {
        position: "fixed",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(100%)",
        whiteSpace: "nowrap"
    };
    return re.createElement("div", {
        id: a,
        style: o,
        role: "status",
        "aria-live": l,
        "aria-atomic": !0
    }, s)
}

function uj() {
    const [t, a] = x.useState("");
    return {
        announce: x.useCallback(l => {
            l != null && a(l)
        }, []),
        announcement: t
    }
}
const Ib = x.createContext(null);

function dj(t) {
    const a = x.useContext(Ib);
    x.useEffect(() => {
        if (!a) throw new Error("useDndMonitor must be used within a children of <DndContext>");
        return a(t)
    }, [t, a])
}

function fj() {
    const [t] = x.useState(() => new Set), a = x.useCallback(l => (t.add(l), () => t.delete(l)), [t]);
    return [x.useCallback(l => {
        let {
            type: o,
            event: u
        } = l;
        t.forEach(d => {
            var h;
            return (h = d[o]) == null ? void 0 : h.call(d, u)
        })
    }, [t]), a]
}
const hj = {
        draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
    },
    pj = {
        onDragStart(t) {
            let {
                active: a
            } = t;
            return "Picked up draggable item " + a.id + "."
        },
        onDragOver(t) {
            let {
                active: a,
                over: s
            } = t;
            return s ? "Draggable item " + a.id + " was moved over droppable area " + s.id + "." : "Draggable item " + a.id + " is no longer over a droppable area."
        },
        onDragEnd(t) {
            let {
                active: a,
                over: s
            } = t;
            return s ? "Draggable item " + a.id + " was dropped over droppable area " + s.id : "Draggable item " + a.id + " was dropped."
        },
        onDragCancel(t) {
            let {
                active: a
            } = t;
            return "Dragging was cancelled. Draggable item " + a.id + " was dropped."
        }
    };

function mj(t) {
    let {
        announcements: a = pj,
        container: s,
        hiddenTextDescribedById: l,
        screenReaderInstructions: o = hj
    } = t;
    const {
        announce: u,
        announcement: d
    } = uj(), h = vl("DndLiveRegion"), [p, g] = x.useState(!1);
    if (x.useEffect(() => {
            g(!0)
        }, []), dj(x.useMemo(() => ({
            onDragStart(m) {
                let {
                    active: S
                } = m;
                u(a.onDragStart({
                    active: S
                }))
            },
            onDragMove(m) {
                let {
                    active: S,
                    over: E
                } = m;
                a.onDragMove && u(a.onDragMove({
                    active: S,
                    over: E
                }))
            },
            onDragOver(m) {
                let {
                    active: S,
                    over: E
                } = m;
                u(a.onDragOver({
                    active: S,
                    over: E
                }))
            },
            onDragEnd(m) {
                let {
                    active: S,
                    over: E
                } = m;
                u(a.onDragEnd({
                    active: S,
                    over: E
                }))
            },
            onDragCancel(m) {
                let {
                    active: S,
                    over: E
                } = m;
                u(a.onDragCancel({
                    active: S,
                    over: E
                }))
            }
        }), [u, a])), !p) return null;
    const b = re.createElement(re.Fragment, null, re.createElement(oj, {
        id: l,
        value: o.draggable
    }), re.createElement(cj, {
        id: h,
        announcement: d
    }));
    return s ? cr.createPortal(b, s) : b
}
var Rt;
(function(t) {
    t.DragStart = "dragStart", t.DragMove = "dragMove", t.DragEnd = "dragEnd", t.DragCancel = "dragCancel", t.DragOver = "dragOver", t.RegisterDroppable = "registerDroppable", t.SetDroppableDisabled = "setDroppableDisabled", t.UnregisterDroppable = "unregisterDroppable"
})(Rt || (Rt = {}));

function rc() {}

function Sv(t, a) {
    return x.useMemo(() => ({
        sensor: t,
        options: a ?? {}
    }), [t, a])
}

function gj() {
    for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++) a[s] = arguments[s];
    return x.useMemo(() => [...a].filter(l => l != null), [...a])
}
const Xn = Object.freeze({
    x: 0,
    y: 0
});

function $b(t, a) {
    return Math.sqrt(Math.pow(t.x - a.x, 2) + Math.pow(t.y - a.y, 2))
}

function yj(t, a) {
    const s = ac(t);
    if (!s) return "0 0";
    const l = {
        x: (s.x - a.left) / a.width * 100,
        y: (s.y - a.top) / a.height * 100
    };
    return l.x + "% " + l.y + "%"
}

function Fb(t, a) {
    let {
        data: {
            value: s
        }
    } = t, {
        data: {
            value: l
        }
    } = a;
    return s - l
}

function vj(t, a) {
    let {
        data: {
            value: s
        }
    } = t, {
        data: {
            value: l
        }
    } = a;
    return l - s
}

function wv(t) {
    let {
        left: a,
        top: s,
        height: l,
        width: o
    } = t;
    return [{
        x: a,
        y: s
    }, {
        x: a + o,
        y: s
    }, {
        x: a,
        y: s + l
    }, {
        x: a + o,
        y: s + l
    }]
}

function Jb(t, a) {
    if (!t || t.length === 0) return null;
    const [s] = t;
    return s[a]
}

function Ev(t, a, s) {
    return a === void 0 && (a = t.left), s === void 0 && (s = t.top), {
        x: a + t.width * .5,
        y: s + t.height * .5
    }
}
const bj = t => {
        let {
            collisionRect: a,
            droppableRects: s,
            droppableContainers: l
        } = t;
        const o = Ev(a, a.left, a.top),
            u = [];
        for (const d of l) {
            const {
                id: h
            } = d, p = s.get(h);
            if (p) {
                const g = $b(Ev(p), o);
                u.push({
                    id: h,
                    data: {
                        droppableContainer: d,
                        value: g
                    }
                })
            }
        }
        return u.sort(Fb)
    },
    xj = t => {
        let {
            collisionRect: a,
            droppableRects: s,
            droppableContainers: l
        } = t;
        const o = wv(a),
            u = [];
        for (const d of l) {
            const {
                id: h
            } = d, p = s.get(h);
            if (p) {
                const g = wv(p),
                    b = o.reduce((S, E, A) => S + $b(g[A], E), 0),
                    m = Number((b / 4).toFixed(4));
                u.push({
                    id: h,
                    data: {
                        droppableContainer: d,
                        value: m
                    }
                })
            }
        }
        return u.sort(Fb)
    };

function Sj(t, a) {
    const s = Math.max(a.top, t.top),
        l = Math.max(a.left, t.left),
        o = Math.min(a.left + a.width, t.left + t.width),
        u = Math.min(a.top + a.height, t.top + t.height),
        d = o - l,
        h = u - s;
    if (l < o && s < u) {
        const p = a.width * a.height,
            g = t.width * t.height,
            b = d * h,
            m = b / (p + g - b);
        return Number(m.toFixed(4))
    }
    return 0
}
const wj = t => {
    let {
        collisionRect: a,
        droppableRects: s,
        droppableContainers: l
    } = t;
    const o = [];
    for (const u of l) {
        const {
            id: d
        } = u, h = s.get(d);
        if (h) {
            const p = Sj(h, a);
            p > 0 && o.push({
                id: d,
                data: {
                    droppableContainer: u,
                    value: p
                }
            })
        }
    }
    return o.sort(vj)
};

function Ej(t, a, s) {
    return {
        ...t,
        scaleX: a && s ? a.width / s.width : 1,
        scaleY: a && s ? a.height / s.height : 1
    }
}

function Wb(t, a) {
    return t && a ? {
        x: t.left - a.left,
        y: t.top - a.top
    } : Xn
}

function Oj(t) {
    return function(s) {
        for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) o[u - 1] = arguments[u];
        return o.reduce((d, h) => ({
            ...d,
            top: d.top + t * h.y,
            bottom: d.bottom + t * h.y,
            left: d.left + t * h.x,
            right: d.right + t * h.x
        }), {
            ...s
        })
    }
}
const Aj = Oj(1);

function ex(t) {
    if (t.startsWith("matrix3d(")) {
        const a = t.slice(9, -1).split(/, /);
        return {
            x: +a[12],
            y: +a[13],
            scaleX: +a[0],
            scaleY: +a[5]
        }
    } else if (t.startsWith("matrix(")) {
        const a = t.slice(7, -1).split(/, /);
        return {
            x: +a[4],
            y: +a[5],
            scaleX: +a[0],
            scaleY: +a[3]
        }
    }
    return null
}

function Tj(t, a, s) {
    const l = ex(a);
    if (!l) return t;
    const {
        scaleX: o,
        scaleY: u,
        x: d,
        y: h
    } = l, p = t.left - d - (1 - o) * parseFloat(s), g = t.top - h - (1 - u) * parseFloat(s.slice(s.indexOf(" ") + 1)), b = o ? t.width / o : t.width, m = u ? t.height / u : t.height;
    return {
        width: b,
        height: m,
        top: g,
        right: p + b,
        bottom: g + m,
        left: p
    }
}
const Cj = {
    ignoreTransform: !1
};

function $s(t, a) {
    a === void 0 && (a = Cj);
    let s = t.getBoundingClientRect();
    if (a.ignoreTransform) {
        const {
            transform: g,
            transformOrigin: b
        } = It(t).getComputedStyle(t);
        g && (s = Tj(s, g, b))
    }
    const {
        top: l,
        left: o,
        width: u,
        height: d,
        bottom: h,
        right: p
    } = s;
    return {
        top: l,
        left: o,
        width: u,
        height: d,
        bottom: h,
        right: p
    }
}

function Ov(t) {
    return $s(t, {
        ignoreTransform: !0
    })
}

function jj(t) {
    const a = t.innerWidth,
        s = t.innerHeight;
    return {
        top: 0,
        left: 0,
        right: a,
        bottom: s,
        width: a,
        height: s
    }
}

function Rj(t, a) {
    return a === void 0 && (a = It(t).getComputedStyle(t)), a.position === "fixed"
}

function Dj(t, a) {
    a === void 0 && (a = It(t).getComputedStyle(t));
    const s = /(auto|scroll|overlay)/;
    return ["overflow", "overflowX", "overflowY"].some(o => {
        const u = a[o];
        return typeof u == "string" ? s.test(u) : !1
    })
}

function jc(t, a) {
    const s = [];

    function l(o) {
        if (a != null && s.length >= a || !o) return s;
        if (hh(o) && o.scrollingElement != null && !s.includes(o.scrollingElement)) return s.push(o.scrollingElement), s;
        if (!gl(o) || Xb(o) || s.includes(o)) return s;
        const u = It(t).getComputedStyle(o);
        return o !== t && Dj(o, u) && s.push(o), Rj(o, u) ? s : l(o.parentNode)
    }
    return t ? l(t) : s
}

function tx(t) {
    const [a] = jc(t, 1);
    return a ?? null
}

function lf(t) {
    return !Ac || !t ? null : Zs(t) ? t : fh(t) ? hh(t) || t === Is(t).scrollingElement ? window : gl(t) ? t : null : null
}

function nx(t) {
    return Zs(t) ? t.scrollX : t.scrollLeft
}

function ax(t) {
    return Zs(t) ? t.scrollY : t.scrollTop
}

function Qf(t) {
    return {
        x: nx(t),
        y: ax(t)
    }
}
var Mt;
(function(t) {
    t[t.Forward = 1] = "Forward", t[t.Backward = -1] = "Backward"
})(Mt || (Mt = {}));

function rx(t) {
    return !Ac || !t ? !1 : t === document.scrollingElement
}

function sx(t) {
    const a = {
            x: 0,
            y: 0
        },
        s = rx(t) ? {
            height: window.innerHeight,
            width: window.innerWidth
        } : {
            height: t.clientHeight,
            width: t.clientWidth
        },
        l = {
            x: t.scrollWidth - s.width,
            y: t.scrollHeight - s.height
        },
        o = t.scrollTop <= a.y,
        u = t.scrollLeft <= a.x,
        d = t.scrollTop >= l.y,
        h = t.scrollLeft >= l.x;
    return {
        isTop: o,
        isLeft: u,
        isBottom: d,
        isRight: h,
        maxScroll: l,
        minScroll: a
    }
}
const _j = {
    x: .2,
    y: .2
};

function Mj(t, a, s, l, o) {
    let {
        top: u,
        left: d,
        right: h,
        bottom: p
    } = s;
    l === void 0 && (l = 10), o === void 0 && (o = _j);
    const {
        isTop: g,
        isBottom: b,
        isLeft: m,
        isRight: S
    } = sx(t), E = {
        x: 0,
        y: 0
    }, A = {
        x: 0,
        y: 0
    }, O = {
        height: a.height * o.y,
        width: a.width * o.x
    };
    return !g && u <= a.top + O.height ? (E.y = Mt.Backward, A.y = l * Math.abs((a.top + O.height - u) / O.height)) : !b && p >= a.bottom - O.height && (E.y = Mt.Forward, A.y = l * Math.abs((a.bottom - O.height - p) / O.height)), !S && h >= a.right - O.width ? (E.x = Mt.Forward, A.x = l * Math.abs((a.right - O.width - h) / O.width)) : !m && d <= a.left + O.width && (E.x = Mt.Backward, A.x = l * Math.abs((a.left + O.width - d) / O.width)), {
        direction: E,
        speed: A
    }
}

function Nj(t) {
    if (t === document.scrollingElement) {
        const {
            innerWidth: u,
            innerHeight: d
        } = window;
        return {
            top: 0,
            left: 0,
            right: u,
            bottom: d,
            width: u,
            height: d
        }
    }
    const {
        top: a,
        left: s,
        right: l,
        bottom: o
    } = t.getBoundingClientRect();
    return {
        top: a,
        left: s,
        right: l,
        bottom: o,
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function ix(t) {
    return t.reduce((a, s) => Ls(a, Qf(s)), Xn)
}

function Hj(t) {
    return t.reduce((a, s) => a + nx(s), 0)
}

function zj(t) {
    return t.reduce((a, s) => a + ax(s), 0)
}

function lx(t, a) {
    if (a === void 0 && (a = $s), !t) return;
    const {
        top: s,
        left: l,
        bottom: o,
        right: u
    } = a(t);
    tx(t) && (o <= 0 || u <= 0 || s >= window.innerHeight || l >= window.innerWidth) && t.scrollIntoView({
        block: "center",
        inline: "center"
    })
}
const kj = [
    ["x", ["left", "right"], Hj],
    ["y", ["top", "bottom"], zj]
];
class ph {
    constructor(a, s) {
        this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
        const l = jc(s),
            o = ix(l);
        this.rect = {
            ...a
        }, this.width = a.width, this.height = a.height;
        for (const [u, d, h] of kj)
            for (const p of d) Object.defineProperty(this, p, {
                get: () => {
                    const g = h(l),
                        b = o[u] - g;
                    return this.rect[p] + b
                },
                enumerable: !0
            });
        Object.defineProperty(this, "rect", {
            enumerable: !1
        })
    }
}
class Zi {
    constructor(a) {
        this.target = void 0, this.listeners = [], this.removeAll = () => {
            this.listeners.forEach(s => {
                var l;
                return (l = this.target) == null ? void 0 : l.removeEventListener(...s)
            })
        }, this.target = a
    }
    add(a, s, l) {
        var o;
        (o = this.target) == null || o.addEventListener(a, s, l), this.listeners.push([a, s, l])
    }
}

function Uj(t) {
    const {
        EventTarget: a
    } = It(t);
    return t instanceof a ? t : Is(t)
}

function of(t, a) {
    const s = Math.abs(t.x),
        l = Math.abs(t.y);
    return typeof a == "number" ? Math.sqrt(s ** 2 + l ** 2) > a : "x" in a && "y" in a ? s > a.x && l > a.y : "x" in a ? s > a.x : "y" in a ? l > a.y : !1
}
var Bn;
(function(t) {
    t.Click = "click", t.DragStart = "dragstart", t.Keydown = "keydown", t.ContextMenu = "contextmenu", t.Resize = "resize", t.SelectionChange = "selectionchange", t.VisibilityChange = "visibilitychange"
})(Bn || (Bn = {}));

function Av(t) {
    t.preventDefault()
}

function Lj(t) {
    t.stopPropagation()
}
var Ue;
(function(t) {
    t.Space = "Space", t.Down = "ArrowDown", t.Right = "ArrowRight", t.Left = "ArrowLeft", t.Up = "ArrowUp", t.Esc = "Escape", t.Enter = "Enter", t.Tab = "Tab"
})(Ue || (Ue = {}));
const ox = {
        start: [Ue.Space, Ue.Enter],
        cancel: [Ue.Esc],
        end: [Ue.Space, Ue.Enter, Ue.Tab]
    },
    Bj = (t, a) => {
        let {
            currentCoordinates: s
        } = a;
        switch (t.code) {
            case Ue.Right:
                return {
                    ...s, x: s.x + 25
                };
            case Ue.Left:
                return {
                    ...s, x: s.x - 25
                };
            case Ue.Down:
                return {
                    ...s, y: s.y + 25
                };
            case Ue.Up:
                return {
                    ...s, y: s.y - 25
                }
        }
    };
class mh {
    constructor(a) {
        this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = a;
        const {
            event: {
                target: s
            }
        } = a;
        this.props = a, this.listeners = new Zi(Is(s)), this.windowListeners = new Zi(It(s)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach()
    }
    attach() {
        this.handleStart(), this.windowListeners.add(Bn.Resize, this.handleCancel), this.windowListeners.add(Bn.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Bn.Keydown, this.handleKeyDown))
    }
    handleStart() {
        const {
            activeNode: a,
            onStart: s
        } = this.props, l = a.node.current;
        l && lx(l), s(Xn)
    }
    handleKeyDown(a) {
        if (Cc(a)) {
            const {
                active: s,
                context: l,
                options: o
            } = this.props, {
                keyboardCodes: u = ox,
                coordinateGetter: d = Bj,
                scrollBehavior: h = "smooth"
            } = o, {
                code: p
            } = a;
            if (u.end.includes(p)) {
                this.handleEnd(a);
                return
            }
            if (u.cancel.includes(p)) {
                this.handleCancel(a);
                return
            }
            const {
                collisionRect: g
            } = l.current, b = g ? {
                x: g.left,
                y: g.top
            } : Xn;
            this.referenceCoordinates || (this.referenceCoordinates = b);
            const m = d(a, {
                active: s,
                context: l.current,
                currentCoordinates: b
            });
            if (m) {
                const S = ll(m, b),
                    E = {
                        x: 0,
                        y: 0
                    },
                    {
                        scrollableAncestors: A
                    } = l.current;
                for (const O of A) {
                    const R = a.code,
                        {
                            isTop: N,
                            isRight: Y,
                            isLeft: K,
                            isBottom: Z,
                            maxScroll: B,
                            minScroll: L
                        } = sx(O),
                        T = Nj(O),
                        _ = {
                            x: Math.min(R === Ue.Right ? T.right - T.width / 2 : T.right, Math.max(R === Ue.Right ? T.left : T.left + T.width / 2, m.x)),
                            y: Math.min(R === Ue.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(R === Ue.Down ? T.top : T.top + T.height / 2, m.y))
                        },
                        F = R === Ue.Right && !Y || R === Ue.Left && !K,
                        $ = R === Ue.Down && !Z || R === Ue.Up && !N;
                    if (F && _.x !== m.x) {
                        const G = O.scrollLeft + S.x,
                            te = R === Ue.Right && G <= B.x || R === Ue.Left && G >= L.x;
                        if (te && !S.y) {
                            O.scrollTo({
                                left: G,
                                behavior: h
                            });
                            return
                        }
                        te ? E.x = O.scrollLeft - G : E.x = R === Ue.Right ? O.scrollLeft - B.x : O.scrollLeft - L.x, E.x && O.scrollBy({
                            left: -E.x,
                            behavior: h
                        });
                        break
                    } else if ($ && _.y !== m.y) {
                        const G = O.scrollTop + S.y,
                            te = R === Ue.Down && G <= B.y || R === Ue.Up && G >= L.y;
                        if (te && !S.x) {
                            O.scrollTo({
                                top: G,
                                behavior: h
                            });
                            return
                        }
                        te ? E.y = O.scrollTop - G : E.y = R === Ue.Down ? O.scrollTop - B.y : O.scrollTop - L.y, E.y && O.scrollBy({
                            top: -E.y,
                            behavior: h
                        });
                        break
                    }
                }
                this.handleMove(a, Ls(ll(m, this.referenceCoordinates), E))
            }
        }
    }
    handleMove(a, s) {
        const {
            onMove: l
        } = this.props;
        a.preventDefault(), l(s)
    }
    handleEnd(a) {
        const {
            onEnd: s
        } = this.props;
        a.preventDefault(), this.detach(), s()
    }
    handleCancel(a) {
        const {
            onCancel: s
        } = this.props;
        a.preventDefault(), this.detach(), s()
    }
    detach() {
        this.listeners.removeAll(), this.windowListeners.removeAll()
    }
}
mh.activators = [{
    eventName: "onKeyDown",
    handler: (t, a, s) => {
        let {
            keyboardCodes: l = ox,
            onActivation: o
        } = a, {
            active: u
        } = s;
        const {
            code: d
        } = t.nativeEvent;
        if (l.start.includes(d)) {
            const h = u.activatorNode.current;
            return h && t.target !== h ? !1 : (t.preventDefault(), o?.({
                event: t.nativeEvent
            }), !0)
        }
        return !1
    }
}];

function Tv(t) {
    return !!(t && "distance" in t)
}

function Cv(t) {
    return !!(t && "delay" in t)
}
class gh {
    constructor(a, s, l) {
        var o;
        l === void 0 && (l = Uj(a.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = a, this.events = s;
        const {
            event: u
        } = a, {
            target: d
        } = u;
        this.props = a, this.events = s, this.document = Is(d), this.documentListeners = new Zi(this.document), this.listeners = new Zi(l), this.windowListeners = new Zi(It(d)), this.initialCoordinates = (o = ac(u)) != null ? o : Xn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach()
    }
    attach() {
        const {
            events: a,
            props: {
                options: {
                    activationConstraint: s,
                    bypassActivationConstraint: l
                }
            }
        } = this;
        if (this.listeners.add(a.move.name, this.handleMove, {
                passive: !1
            }), this.listeners.add(a.end.name, this.handleEnd), a.cancel && this.listeners.add(a.cancel.name, this.handleCancel), this.windowListeners.add(Bn.Resize, this.handleCancel), this.windowListeners.add(Bn.DragStart, Av), this.windowListeners.add(Bn.VisibilityChange, this.handleCancel), this.windowListeners.add(Bn.ContextMenu, Av), this.documentListeners.add(Bn.Keydown, this.handleKeydown), s) {
            if (l != null && l({
                    event: this.props.event,
                    activeNode: this.props.activeNode,
                    options: this.props.options
                })) return this.handleStart();
            if (Cv(s)) {
                this.timeoutId = setTimeout(this.handleStart, s.delay), this.handlePending(s);
                return
            }
            if (Tv(s)) {
                this.handlePending(s);
                return
            }
        }
        this.handleStart()
    }
    detach() {
        this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null)
    }
    handlePending(a, s) {
        const {
            active: l,
            onPending: o
        } = this.props;
        o(l, a, this.initialCoordinates, s)
    }
    handleStart() {
        const {
            initialCoordinates: a
        } = this, {
            onStart: s
        } = this.props;
        a && (this.activated = !0, this.documentListeners.add(Bn.Click, Lj, {
            capture: !0
        }), this.removeTextSelection(), this.documentListeners.add(Bn.SelectionChange, this.removeTextSelection), s(a))
    }
    handleMove(a) {
        var s;
        const {
            activated: l,
            initialCoordinates: o,
            props: u
        } = this, {
            onMove: d,
            options: {
                activationConstraint: h
            }
        } = u;
        if (!o) return;
        const p = (s = ac(a)) != null ? s : Xn,
            g = ll(o, p);
        if (!l && h) {
            if (Tv(h)) {
                if (h.tolerance != null && of(g, h.tolerance)) return this.handleCancel();
                if (of(g, h.distance)) return this.handleStart()
            }
            if (Cv(h) && of(g, h.tolerance)) return this.handleCancel();
            this.handlePending(h, g);
            return
        }
        a.cancelable && a.preventDefault(), d(p)
    }
    handleEnd() {
        const {
            onAbort: a,
            onEnd: s
        } = this.props;
        this.detach(), this.activated || a(this.props.active), s()
    }
    handleCancel() {
        const {
            onAbort: a,
            onCancel: s
        } = this.props;
        this.detach(), this.activated || a(this.props.active), s()
    }
    handleKeydown(a) {
        a.code === Ue.Esc && this.handleCancel()
    }
    removeTextSelection() {
        var a;
        (a = this.document.getSelection()) == null || a.removeAllRanges()
    }
}
const qj = {
    cancel: {
        name: "pointercancel"
    },
    move: {
        name: "pointermove"
    },
    end: {
        name: "pointerup"
    }
};
class yh extends gh {
    constructor(a) {
        const {
            event: s
        } = a, l = Is(s.target);
        super(a, qj, l)
    }
}
yh.activators = [{
    eventName: "onPointerDown",
    handler: (t, a) => {
        let {
            nativeEvent: s
        } = t, {
            onActivation: l
        } = a;
        return !s.isPrimary || s.button !== 0 ? !1 : (l?.({
            event: s
        }), !0)
    }
}];
const Qj = {
    move: {
        name: "mousemove"
    },
    end: {
        name: "mouseup"
    }
};
var Pf;
(function(t) {
    t[t.RightClick = 2] = "RightClick"
})(Pf || (Pf = {}));
class Pj extends gh {
    constructor(a) {
        super(a, Qj, Is(a.event.target))
    }
}
Pj.activators = [{
    eventName: "onMouseDown",
    handler: (t, a) => {
        let {
            nativeEvent: s
        } = t, {
            onActivation: l
        } = a;
        return s.button === Pf.RightClick ? !1 : (l?.({
            event: s
        }), !0)
    }
}];
const cf = {
    cancel: {
        name: "touchcancel"
    },
    move: {
        name: "touchmove"
    },
    end: {
        name: "touchend"
    }
};
class Yj extends gh {
    constructor(a) {
        super(a, cf)
    }
    static setup() {
        return window.addEventListener(cf.move.name, a, {
                capture: !1,
                passive: !1
            }),
            function() {
                window.removeEventListener(cf.move.name, a)
            };

        function a() {}
    }
}
Yj.activators = [{
    eventName: "onTouchStart",
    handler: (t, a) => {
        let {
            nativeEvent: s
        } = t, {
            onActivation: l
        } = a;
        const {
            touches: o
        } = s;
        return o.length > 1 ? !1 : (l?.({
            event: s
        }), !0)
    }
}];
var Ii;
(function(t) {
    t[t.Pointer = 0] = "Pointer", t[t.DraggableRect = 1] = "DraggableRect"
})(Ii || (Ii = {}));
var sc;
(function(t) {
    t[t.TreeOrder = 0] = "TreeOrder", t[t.ReversedTreeOrder = 1] = "ReversedTreeOrder"
})(sc || (sc = {}));

function Gj(t) {
    let {
        acceleration: a,
        activator: s = Ii.Pointer,
        canScroll: l,
        draggingRect: o,
        enabled: u,
        interval: d = 5,
        order: h = sc.TreeOrder,
        pointerCoordinates: p,
        scrollableAncestors: g,
        scrollableAncestorRects: b,
        delta: m,
        threshold: S
    } = t;
    const E = Kj({
            delta: m,
            disabled: !u
        }),
        [A, O] = aj(),
        R = x.useRef({
            x: 0,
            y: 0
        }),
        N = x.useRef({
            x: 0,
            y: 0
        }),
        Y = x.useMemo(() => {
            switch (s) {
                case Ii.Pointer:
                    return p ? {
                        top: p.y,
                        bottom: p.y,
                        left: p.x,
                        right: p.x
                    } : null;
                case Ii.DraggableRect:
                    return o
            }
        }, [s, o, p]),
        K = x.useRef(null),
        Z = x.useCallback(() => {
            const L = K.current;
            if (!L) return;
            const T = R.current.x * N.current.x,
                _ = R.current.y * N.current.y;
            L.scrollBy(T, _)
        }, []),
        B = x.useMemo(() => h === sc.TreeOrder ? [...g].reverse() : g, [h, g]);
    x.useEffect(() => {
        if (!u || !g.length || !Y) {
            O();
            return
        }
        for (const L of B) {
            if (l?.(L) === !1) continue;
            const T = g.indexOf(L),
                _ = b[T];
            if (!_) continue;
            const {
                direction: F,
                speed: $
            } = Mj(L, _, Y, a, S);
            for (const G of ["x", "y"]) E[G][F[G]] || ($[G] = 0, F[G] = 0);
            if ($.x > 0 || $.y > 0) {
                O(), K.current = L, A(Z, d), R.current = $, N.current = F;
                return
            }
        }
        R.current = {
            x: 0,
            y: 0
        }, N.current = {
            x: 0,
            y: 0
        }, O()
    }, [a, Z, l, O, u, d, JSON.stringify(Y), JSON.stringify(E), A, g, B, b, JSON.stringify(S)])
}
const Vj = {
    x: {
        [Mt.Backward]: !1,
        [Mt.Forward]: !1
    },
    y: {
        [Mt.Backward]: !1,
        [Mt.Forward]: !1
    }
};

function Kj(t) {
    let {
        delta: a,
        disabled: s
    } = t;
    const l = nc(a);
    return yl(o => {
        if (s || !l || !o) return Vj;
        const u = {
            x: Math.sign(a.x - l.x),
            y: Math.sign(a.y - l.y)
        };
        return {
            x: {
                [Mt.Backward]: o.x[Mt.Backward] || u.x === -1,
                [Mt.Forward]: o.x[Mt.Forward] || u.x === 1
            },
            y: {
                [Mt.Backward]: o.y[Mt.Backward] || u.y === -1,
                [Mt.Forward]: o.y[Mt.Forward] || u.y === 1
            }
        }
    }, [s, a, l])
}

function Xj(t, a) {
    const s = a != null ? t.get(a) : void 0,
        l = s ? s.node.current : null;
    return yl(o => {
        var u;
        return a == null ? null : (u = l ?? o) != null ? u : null
    }, [l, a])
}

function Zj(t, a) {
    return x.useMemo(() => t.reduce((s, l) => {
        const {
            sensor: o
        } = l, u = o.activators.map(d => ({
            eventName: d.eventName,
            handler: a(d.handler, l)
        }));
        return [...s, ...u]
    }, []), [t, a])
}
var ol;
(function(t) {
    t[t.Always = 0] = "Always", t[t.BeforeDragging = 1] = "BeforeDragging", t[t.WhileDragging = 2] = "WhileDragging"
})(ol || (ol = {}));
var Yf;
(function(t) {
    t.Optimized = "optimized"
})(Yf || (Yf = {}));
const jv = new Map;

function Ij(t, a) {
    let {
        dragging: s,
        dependencies: l,
        config: o
    } = a;
    const [u, d] = x.useState(null), {
        frequency: h,
        measure: p,
        strategy: g
    } = o, b = x.useRef(t), m = R(), S = il(m), E = x.useCallback(function(N) {
        N === void 0 && (N = []), !S.current && d(Y => Y === null ? N : Y.concat(N.filter(K => !Y.includes(K))))
    }, [S]), A = x.useRef(null), O = yl(N => {
        if (m && !s) return jv;
        if (!N || N === jv || b.current !== t || u != null) {
            const Y = new Map;
            for (let K of t) {
                if (!K) continue;
                if (u && u.length > 0 && !u.includes(K.id) && K.rect.current) {
                    Y.set(K.id, K.rect.current);
                    continue
                }
                const Z = K.node.current,
                    B = Z ? new ph(p(Z), Z) : null;
                K.rect.current = B, B && Y.set(K.id, B)
            }
            return Y
        }
        return N
    }, [t, u, s, m, p]);
    return x.useEffect(() => {
        b.current = t
    }, [t]), x.useEffect(() => {
        m || E()
    }, [s, m]), x.useEffect(() => {
        u && u.length > 0 && d(null)
    }, [JSON.stringify(u)]), x.useEffect(() => {
        m || typeof h != "number" || A.current !== null || (A.current = setTimeout(() => {
            E(), A.current = null
        }, h))
    }, [h, m, E, ...l]), {
        droppableRects: O,
        measureDroppableContainers: E,
        measuringScheduled: u != null
    };

    function R() {
        switch (g) {
            case ol.Always:
                return !1;
            case ol.BeforeDragging:
                return s;
            default:
                return !s
        }
    }
}

function vh(t, a) {
    return yl(s => t ? s || (typeof a == "function" ? a(t) : t) : null, [a, t])
}

function $j(t, a) {
    return vh(t, a)
}

function Fj(t) {
    let {
        callback: a,
        disabled: s
    } = t;
    const l = Tc(a),
        o = x.useMemo(() => {
            if (s || typeof window > "u" || typeof window.MutationObserver > "u") return;
            const {
                MutationObserver: u
            } = window;
            return new u(l)
        }, [l, s]);
    return x.useEffect(() => () => o?.disconnect(), [o]), o
}

function Rc(t) {
    let {
        callback: a,
        disabled: s
    } = t;
    const l = Tc(a),
        o = x.useMemo(() => {
            if (s || typeof window > "u" || typeof window.ResizeObserver > "u") return;
            const {
                ResizeObserver: u
            } = window;
            return new u(l)
        }, [s]);
    return x.useEffect(() => () => o?.disconnect(), [o]), o
}

function Jj(t) {
    return new ph($s(t), t)
}

function Rv(t, a, s) {
    a === void 0 && (a = Jj);
    const [l, o] = x.useState(null);

    function u() {
        o(p => {
            if (!t) return null;
            if (t.isConnected === !1) {
                var g;
                return (g = p ?? s) != null ? g : null
            }
            const b = a(t);
            return JSON.stringify(p) === JSON.stringify(b) ? p : b
        })
    }
    const d = Fj({
            callback(p) {
                if (t)
                    for (const g of p) {
                        const {
                            type: b,
                            target: m
                        } = g;
                        if (b === "childList" && m instanceof HTMLElement && m.contains(t)) {
                            u();
                            break
                        }
                    }
            }
        }),
        h = Rc({
            callback: u
        });
    return Kn(() => {
        u(), t ? (h?.observe(t), d?.observe(document.body, {
            childList: !0,
            subtree: !0
        })) : (h?.disconnect(), d?.disconnect())
    }, [t]), l
}

function Wj(t) {
    const a = vh(t);
    return Wb(t, a)
}
const Dv = [];

function eR(t) {
    const a = x.useRef(t),
        s = yl(l => t ? l && l !== Dv && t && a.current && t.parentNode === a.current.parentNode ? l : jc(t) : Dv, [t]);
    return x.useEffect(() => {
        a.current = t
    }, [t]), s
}

function tR(t) {
    const [a, s] = x.useState(null), l = x.useRef(t), o = x.useCallback(u => {
        const d = lf(u.target);
        d && s(h => h ? (h.set(d, Qf(d)), new Map(h)) : null)
    }, []);
    return x.useEffect(() => {
        const u = l.current;
        if (t !== u) {
            d(u);
            const h = t.map(p => {
                const g = lf(p);
                return g ? (g.addEventListener("scroll", o, {
                    passive: !0
                }), [g, Qf(g)]) : null
            }).filter(p => p != null);
            s(h.length ? new Map(h) : null), l.current = t
        }
        return () => {
            d(t), d(u)
        };

        function d(h) {
            h.forEach(p => {
                const g = lf(p);
                g?.removeEventListener("scroll", o)
            })
        }
    }, [o, t]), x.useMemo(() => t.length ? a ? Array.from(a.values()).reduce((u, d) => Ls(u, d), Xn) : ix(t) : Xn, [t, a])
}

function _v(t, a) {
    a === void 0 && (a = []);
    const s = x.useRef(null);
    return x.useEffect(() => {
        s.current = null
    }, a), x.useEffect(() => {
        const l = t !== Xn;
        l && !s.current && (s.current = t), !l && s.current && (s.current = null)
    }, [t]), s.current ? ll(t, s.current) : Xn
}

function nR(t) {
    x.useEffect(() => {
        if (!Ac) return;
        const a = t.map(s => {
            let {
                sensor: l
            } = s;
            return l.setup == null ? void 0 : l.setup()
        });
        return () => {
            for (const s of a) s?.()
        }
    }, t.map(a => {
        let {
            sensor: s
        } = a;
        return s
    }))
}

function aR(t, a) {
    return x.useMemo(() => t.reduce((s, l) => {
        let {
            eventName: o,
            handler: u
        } = l;
        return s[o] = d => {
            u(d, a)
        }, s
    }, {}), [t, a])
}

function cx(t) {
    return x.useMemo(() => t ? jj(t) : null, [t])
}
const Mv = [];

function rR(t, a) {
    a === void 0 && (a = $s);
    const [s] = t, l = cx(s ? It(s) : null), [o, u] = x.useState(Mv);

    function d() {
        u(() => t.length ? t.map(p => rx(p) ? l : new ph(a(p), p)) : Mv)
    }
    const h = Rc({
        callback: d
    });
    return Kn(() => {
        h?.disconnect(), d(), t.forEach(p => h?.observe(p))
    }, [t]), o
}

function ux(t) {
    if (!t) return null;
    if (t.children.length > 1) return t;
    const a = t.children[0];
    return gl(a) ? a : t
}

function sR(t) {
    let {
        measure: a
    } = t;
    const [s, l] = x.useState(null), o = x.useCallback(g => {
        for (const {
                target: b
            }
            of g)
            if (gl(b)) {
                l(m => {
                    const S = a(b);
                    return m ? {
                        ...m,
                        width: S.width,
                        height: S.height
                    } : S
                });
                break
            }
    }, [a]), u = Rc({
        callback: o
    }), d = x.useCallback(g => {
        const b = ux(g);
        u?.disconnect(), b && u?.observe(b), l(b ? a(b) : null)
    }, [a, u]), [h, p] = tc(d);
    return x.useMemo(() => ({
        nodeRef: h,
        rect: s,
        setRef: p
    }), [s, h, p])
}
const iR = [{
        sensor: yh,
        options: {}
    }, {
        sensor: mh,
        options: {}
    }],
    lR = {
        current: {}
    },
    Zo = {
        draggable: {
            measure: Ov
        },
        droppable: {
            measure: Ov,
            strategy: ol.WhileDragging,
            frequency: Yf.Optimized
        },
        dragOverlay: {
            measure: $s
        }
    };
class $i extends Map {
    get(a) {
        var s;
        return a != null && (s = super.get(a)) != null ? s : void 0
    }
    toArray() {
        return Array.from(this.values())
    }
    getEnabled() {
        return this.toArray().filter(a => {
            let {
                disabled: s
            } = a;
            return !s
        })
    }
    getNodeFor(a) {
        var s, l;
        return (s = (l = this.get(a)) == null ? void 0 : l.node.current) != null ? s : void 0
    }
}
const oR = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map,
        droppableRects: new Map,
        droppableContainers: new $i,
        over: null,
        dragOverlay: {
            nodeRef: {
                current: null
            },
            rect: null,
            setRef: rc
        },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: Zo,
        measureDroppableContainers: rc,
        windowRect: null,
        measuringScheduled: !1
    },
    dx = {
        activatorEvent: null,
        activators: [],
        active: null,
        activeNodeRect: null,
        ariaDescribedById: {
            draggable: ""
        },
        dispatch: rc,
        draggableNodes: new Map,
        over: null,
        measureDroppableContainers: rc
    },
    bl = x.createContext(dx),
    fx = x.createContext(oR);

function cR() {
    return {
        draggable: {
            active: null,
            initialCoordinates: {
                x: 0,
                y: 0
            },
            nodes: new Map,
            translate: {
                x: 0,
                y: 0
            }
        },
        droppable: {
            containers: new $i
        }
    }
}

function uR(t, a) {
    switch (a.type) {
        case Rt.DragStart:
            return {
                ...t, draggable: {
                    ...t.draggable,
                    initialCoordinates: a.initialCoordinates,
                    active: a.active
                }
            };
        case Rt.DragMove:
            return t.draggable.active == null ? t : {
                ...t,
                draggable: {
                    ...t.draggable,
                    translate: {
                        x: a.coordinates.x - t.draggable.initialCoordinates.x,
                        y: a.coordinates.y - t.draggable.initialCoordinates.y
                    }
                }
            };
        case Rt.DragEnd:
        case Rt.DragCancel:
            return {
                ...t, draggable: {
                    ...t.draggable,
                    active: null,
                    initialCoordinates: {
                        x: 0,
                        y: 0
                    },
                    translate: {
                        x: 0,
                        y: 0
                    }
                }
            };
        case Rt.RegisterDroppable: {
            const {
                element: s
            } = a, {
                id: l
            } = s, o = new $i(t.droppable.containers);
            return o.set(l, s), {
                ...t,
                droppable: {
                    ...t.droppable,
                    containers: o
                }
            }
        }
        case Rt.SetDroppableDisabled: {
            const {
                id: s,
                key: l,
                disabled: o
            } = a, u = t.droppable.containers.get(s);
            if (!u || l !== u.key) return t;
            const d = new $i(t.droppable.containers);
            return d.set(s, {
                ...u,
                disabled: o
            }), {
                ...t,
                droppable: {
                    ...t.droppable,
                    containers: d
                }
            }
        }
        case Rt.UnregisterDroppable: {
            const {
                id: s,
                key: l
            } = a, o = t.droppable.containers.get(s);
            if (!o || l !== o.key) return t;
            const u = new $i(t.droppable.containers);
            return u.delete(s), {
                ...t,
                droppable: {
                    ...t.droppable,
                    containers: u
                }
            }
        }
        default:
            return t
    }
}

function dR(t) {
    let {
        disabled: a
    } = t;
    const {
        active: s,
        activatorEvent: l,
        draggableNodes: o
    } = x.useContext(bl), u = nc(l), d = nc(s?.id);
    return x.useEffect(() => {
        if (!a && !l && u && d != null) {
            if (!Cc(u) || document.activeElement === u.target) return;
            const h = o.get(d);
            if (!h) return;
            const {
                activatorNode: p,
                node: g
            } = h;
            if (!p.current && !g.current) return;
            requestAnimationFrame(() => {
                for (const b of [p.current, g.current]) {
                    if (!b) continue;
                    const m = ij(b);
                    if (m) {
                        m.focus();
                        break
                    }
                }
            })
        }
    }, [l, a, o, d, u]), null
}

function hx(t, a) {
    let {
        transform: s,
        ...l
    } = a;
    return t != null && t.length ? t.reduce((o, u) => u({
        transform: o,
        ...l
    }), s) : s
}

function fR(t) {
    return x.useMemo(() => ({
        draggable: {
            ...Zo.draggable,
            ...t?.draggable
        },
        droppable: {
            ...Zo.droppable,
            ...t?.droppable
        },
        dragOverlay: {
            ...Zo.dragOverlay,
            ...t?.dragOverlay
        }
    }), [t?.draggable, t?.droppable, t?.dragOverlay])
}

function hR(t) {
    let {
        activeNode: a,
        measure: s,
        initialRect: l,
        config: o = !0
    } = t;
    const u = x.useRef(!1),
        {
            x: d,
            y: h
        } = typeof o == "boolean" ? {
            x: o,
            y: o
        } : o;
    Kn(() => {
        if (!d && !h || !a) {
            u.current = !1;
            return
        }
        if (u.current || !l) return;
        const g = a?.node.current;
        if (!g || g.isConnected === !1) return;
        const b = s(g),
            m = Wb(b, l);
        if (d || (m.x = 0), h || (m.y = 0), u.current = !0, Math.abs(m.x) > 0 || Math.abs(m.y) > 0) {
            const S = tx(g);
            S && S.scrollBy({
                top: m.y,
                left: m.x
            })
        }
    }, [a, d, h, l, s])
}
const Dc = x.createContext({
    ...Xn,
    scaleX: 1,
    scaleY: 1
});
var lr;
(function(t) {
    t[t.Uninitialized = 0] = "Uninitialized", t[t.Initializing = 1] = "Initializing", t[t.Initialized = 2] = "Initialized"
})(lr || (lr = {}));
const pR = x.memo(function(a) {
        var s, l, o, u;
        let {
            id: d,
            accessibility: h,
            autoScroll: p = !0,
            children: g,
            sensors: b = iR,
            collisionDetection: m = wj,
            measuring: S,
            modifiers: E,
            ...A
        } = a;
        const O = x.useReducer(uR, void 0, cR),
            [R, N] = O,
            [Y, K] = fj(),
            [Z, B] = x.useState(lr.Uninitialized),
            L = Z === lr.Initialized,
            {
                draggable: {
                    active: T,
                    nodes: _,
                    translate: F
                },
                droppable: {
                    containers: $
                }
            } = R,
            G = T != null ? _.get(T) : null,
            te = x.useRef({
                initial: null,
                translated: null
            }),
            le = x.useMemo(() => {
                var xe;
                return T != null ? {
                    id: T,
                    data: (xe = G?.data) != null ? xe : lR,
                    rect: te
                } : null
            }, [T, G]),
            ne = x.useRef(null),
            [se, j] = x.useState(null),
            [H, z] = x.useState(null),
            oe = il(A, Object.values(A)),
            de = vl("DndDescribedBy", d),
            C = x.useMemo(() => $.getEnabled(), [$]),
            P = fR(S),
            {
                droppableRects: U,
                measureDroppableContainers: I,
                measuringScheduled: ie
            } = Ij(C, {
                dragging: L,
                dependencies: [F.x, F.y],
                config: P.droppable
            }),
            ce = Xj(_, T),
            ue = x.useMemo(() => H ? ac(H) : null, [H]),
            ve = Re(),
            Oe = $j(ce, P.draggable.measure);
        hR({
            activeNode: T != null ? _.get(T) : null,
            config: ve.layoutShiftCompensation,
            initialRect: Oe,
            measure: P.draggable.measure
        });
        const Ee = Rv(ce, P.draggable.measure, Oe),
            it = Rv(ce ? ce.parentElement : null),
            je = x.useRef({
                activatorEvent: null,
                active: null,
                activeNode: ce,
                collisionRect: null,
                collisions: null,
                droppableRects: U,
                draggableNodes: _,
                draggingNode: null,
                draggingNodeRect: null,
                droppableContainers: $,
                over: null,
                scrollableAncestors: [],
                scrollAdjustedTranslate: null
            }),
            vt = $.getNodeFor((s = je.current.over) == null ? void 0 : s.id),
            tt = sR({
                measure: P.dragOverlay.measure
            }),
            $t = (l = tt.nodeRef.current) != null ? l : ce,
            Vt = L ? (o = tt.rect) != null ? o : Ee : null,
            wn = !!(tt.nodeRef.current && tt.rect),
            In = Wj(wn ? null : Ee),
            Et = cx($t ? It($t) : null),
            Nt = eR(L ? vt ?? ce : null),
            En = rR(Nt),
            ut = hx(E, {
                transform: {
                    x: F.x - In.x,
                    y: F.y - In.y,
                    scaleX: 1,
                    scaleY: 1
                },
                activatorEvent: H,
                active: le,
                activeNodeRect: Ee,
                containerNodeRect: it,
                draggingNodeRect: Vt,
                over: je.current.over,
                overlayNodeRect: tt.rect,
                scrollableAncestors: Nt,
                scrollableAncestorRects: En,
                windowRect: Et
            }),
            on = ue ? Ls(ue, F) : null,
            ct = tR(Nt),
            Na = _v(ct),
            On = _v(ct, [Ee]),
            Ft = Ls(ut, Na),
            Ht = Vt ? Aj(Vt, ut) : null,
            cn = le && Ht ? m({
                active: le,
                collisionRect: Ht,
                droppableRects: U,
                droppableContainers: C,
                pointerCoordinates: on
            }) : null,
            Jt = Jb(cn, "id"),
            [Kt, un] = x.useState(null),
            qn = wn ? ut : Ls(ut, On),
            Ot = Ej(qn, (u = Kt?.rect) != null ? u : null, Ee),
            zt = x.useRef(null),
            pt = x.useCallback((xe, Je) => {
                let {
                    sensor: ge,
                    options: _e
                } = Je;
                if (ne.current == null) return;
                const Pe = _.get(ne.current);
                if (!Pe) return;
                const Ve = xe.nativeEvent,
                    At = new ge({
                        active: ne.current,
                        activeNode: Pe,
                        event: Ve,
                        options: _e,
                        context: je,
                        onAbort(Le) {
                            if (!_.get(Le)) return;
                            const {
                                onDragAbort: at
                            } = oe.current, lt = {
                                id: Le
                            };
                            at?.(lt), Y({
                                type: "onDragAbort",
                                event: lt
                            })
                        },
                        onPending(Le, Pt, at, lt) {
                            if (!_.get(Le)) return;
                            const {
                                onDragPending: kt
                            } = oe.current, Tn = {
                                id: Le,
                                constraint: Pt,
                                initialCoordinates: at,
                                offset: lt
                            };
                            kt?.(Tn), Y({
                                type: "onDragPending",
                                event: Tn
                            })
                        },
                        onStart(Le) {
                            const Pt = ne.current;
                            if (Pt == null) return;
                            const at = _.get(Pt);
                            if (!at) return;
                            const {
                                onDragStart: lt
                            } = oe.current, An = {
                                activatorEvent: Ve,
                                active: {
                                    id: Pt,
                                    data: at.data,
                                    rect: te
                                }
                            };
                            cr.unstable_batchedUpdates(() => {
                                lt?.(An), B(lr.Initializing), N({
                                    type: Rt.DragStart,
                                    initialCoordinates: Le,
                                    active: Pt
                                }), Y({
                                    type: "onDragStart",
                                    event: An
                                }), j(zt.current), z(Ve)
                            })
                        },
                        onMove(Le) {
                            N({
                                type: Rt.DragMove,
                                coordinates: Le
                            })
                        },
                        onEnd: Ke(Rt.DragEnd),
                        onCancel: Ke(Rt.DragCancel)
                    });
                zt.current = At;

                function Ke(Le) {
                    return async function() {
                        const {
                            active: at,
                            collisions: lt,
                            over: An,
                            scrollAdjustedTranslate: kt
                        } = je.current;
                        let Tn = null;
                        if (at && kt) {
                            const {
                                cancelDrop: Ha
                            } = oe.current;
                            Tn = {
                                activatorEvent: Ve,
                                active: at,
                                collisions: lt,
                                delta: kt,
                                over: An
                            }, Le === Rt.DragEnd && typeof Ha == "function" && await Promise.resolve(Ha(Tn)) && (Le = Rt.DragCancel)
                        }
                        ne.current = null, cr.unstable_batchedUpdates(() => {
                            N({
                                type: Le
                            }), B(lr.Uninitialized), un(null), j(null), z(null), zt.current = null;
                            const Ha = Le === Rt.DragEnd ? "onDragEnd" : "onDragCancel";
                            if (Tn) {
                                const Cn = oe.current[Ha];
                                Cn?.(Tn), Y({
                                    type: Ha,
                                    event: Tn
                                })
                            }
                        })
                    }
                }
            }, [_]),
            vr = x.useCallback((xe, Je) => (ge, _e) => {
                const Pe = ge.nativeEvent,
                    Ve = _.get(_e);
                if (ne.current !== null || !Ve || Pe.dndKit || Pe.defaultPrevented) return;
                const At = {
                    active: Ve
                };
                xe(ge, Je.options, At) === !0 && (Pe.dndKit = {
                    capturedBy: Je.sensor
                }, ne.current = _e, pt(ge, Je))
            }, [_, pt]),
            $n = Zj(b, vr);
        nR(b), Kn(() => {
            Ee && Z === lr.Initializing && B(lr.Initialized)
        }, [Ee, Z]), x.useEffect(() => {
            const {
                onDragMove: xe
            } = oe.current, {
                active: Je,
                activatorEvent: ge,
                collisions: _e,
                over: Pe
            } = je.current;
            if (!Je || !ge) return;
            const Ve = {
                active: Je,
                activatorEvent: ge,
                collisions: _e,
                delta: {
                    x: Ft.x,
                    y: Ft.y
                },
                over: Pe
            };
            cr.unstable_batchedUpdates(() => {
                xe?.(Ve), Y({
                    type: "onDragMove",
                    event: Ve
                })
            })
        }, [Ft.x, Ft.y]), x.useEffect(() => {
            const {
                active: xe,
                activatorEvent: Je,
                collisions: ge,
                droppableContainers: _e,
                scrollAdjustedTranslate: Pe
            } = je.current;
            if (!xe || ne.current == null || !Je || !Pe) return;
            const {
                onDragOver: Ve
            } = oe.current, At = _e.get(Jt), Ke = At && At.rect.current ? {
                id: At.id,
                rect: At.rect.current,
                data: At.data,
                disabled: At.disabled
            } : null, Le = {
                active: xe,
                activatorEvent: Je,
                collisions: ge,
                delta: {
                    x: Pe.x,
                    y: Pe.y
                },
                over: Ke
            };
            cr.unstable_batchedUpdates(() => {
                un(Ke), Ve?.(Le), Y({
                    type: "onDragOver",
                    event: Le
                })
            })
        }, [Jt]), Kn(() => {
            je.current = {
                activatorEvent: H,
                active: le,
                activeNode: ce,
                collisionRect: Ht,
                collisions: cn,
                droppableRects: U,
                draggableNodes: _,
                draggingNode: $t,
                draggingNodeRect: Vt,
                droppableContainers: $,
                over: Kt,
                scrollableAncestors: Nt,
                scrollAdjustedTranslate: Ft
            }, te.current = {
                initial: Vt,
                translated: Ht
            }
        }, [le, ce, cn, Ht, _, $t, Vt, U, $, Kt, Nt, Ft]), Gj({
            ...ve,
            delta: F,
            draggingRect: Ht,
            pointerCoordinates: on,
            scrollableAncestors: Nt,
            scrollableAncestorRects: En
        });
        const ae = x.useMemo(() => ({
                active: le,
                activeNode: ce,
                activeNodeRect: Ee,
                activatorEvent: H,
                collisions: cn,
                containerNodeRect: it,
                dragOverlay: tt,
                draggableNodes: _,
                droppableContainers: $,
                droppableRects: U,
                over: Kt,
                measureDroppableContainers: I,
                scrollableAncestors: Nt,
                scrollableAncestorRects: En,
                measuringConfiguration: P,
                measuringScheduled: ie,
                windowRect: Et
            }), [le, ce, Ee, H, cn, it, tt, _, $, U, Kt, I, Nt, En, P, ie, Et]),
            Se = x.useMemo(() => ({
                activatorEvent: H,
                activators: $n,
                active: le,
                activeNodeRect: Ee,
                ariaDescribedById: {
                    draggable: de
                },
                dispatch: N,
                draggableNodes: _,
                over: Kt,
                measureDroppableContainers: I
            }), [H, $n, le, Ee, N, de, _, Kt, I]);
        return re.createElement(Ib.Provider, {
            value: K
        }, re.createElement(bl.Provider, {
            value: Se
        }, re.createElement(fx.Provider, {
            value: ae
        }, re.createElement(Dc.Provider, {
            value: Ot
        }, g)), re.createElement(dR, {
            disabled: h?.restoreFocus === !1
        })), re.createElement(mj, {
            ...h,
            hiddenTextDescribedById: de
        }));

        function Re() {
            const xe = se?.autoScrollEnabled === !1,
                Je = typeof p == "object" ? p.enabled === !1 : p === !1,
                ge = L && !xe && !Je;
            return typeof p == "object" ? {
                ...p,
                enabled: ge
            } : {
                enabled: ge
            }
        }
    }),
    mR = x.createContext(null),
    Nv = "button",
    gR = "Draggable";

function yR(t) {
    let {
        id: a,
        data: s,
        disabled: l = !1,
        attributes: o
    } = t;
    const u = vl(gR),
        {
            activators: d,
            activatorEvent: h,
            active: p,
            activeNodeRect: g,
            ariaDescribedById: b,
            draggableNodes: m,
            over: S
        } = x.useContext(bl),
        {
            role: E = Nv,
            roleDescription: A = "draggable",
            tabIndex: O = 0
        } = o ?? {},
        R = p?.id === a,
        N = x.useContext(R ? Dc : mR),
        [Y, K] = tc(),
        [Z, B] = tc(),
        L = aR(d, a),
        T = il(s);
    Kn(() => (m.set(a, {
        id: a,
        key: u,
        node: Y,
        activatorNode: Z,
        data: T
    }), () => {
        const F = m.get(a);
        F && F.key === u && m.delete(a)
    }), [m, a]);
    const _ = x.useMemo(() => ({
        role: E,
        tabIndex: O,
        "aria-disabled": l,
        "aria-pressed": R && E === Nv ? !0 : void 0,
        "aria-roledescription": A,
        "aria-describedby": b.draggable
    }), [l, E, O, R, A, b.draggable]);
    return {
        active: p,
        activatorEvent: h,
        activeNodeRect: g,
        attributes: _,
        isDragging: R,
        listeners: l ? void 0 : L,
        node: Y,
        over: S,
        setNodeRef: K,
        setActivatorNodeRef: B,
        transform: N
    }
}

function px() {
    return x.useContext(fx)
}
const vR = "Droppable",
    bR = {
        timeout: 25
    };

function xR(t) {
    let {
        data: a,
        disabled: s = !1,
        id: l,
        resizeObserverConfig: o
    } = t;
    const u = vl(vR),
        {
            active: d,
            dispatch: h,
            over: p,
            measureDroppableContainers: g
        } = x.useContext(bl),
        b = x.useRef({
            disabled: s
        }),
        m = x.useRef(!1),
        S = x.useRef(null),
        E = x.useRef(null),
        {
            disabled: A,
            updateMeasurementsFor: O,
            timeout: R
        } = {
            ...bR,
            ...o
        },
        N = il(O ?? l),
        Y = x.useCallback(() => {
            if (!m.current) {
                m.current = !0;
                return
            }
            E.current != null && clearTimeout(E.current), E.current = setTimeout(() => {
                g(Array.isArray(N.current) ? N.current : [N.current]), E.current = null
            }, R)
        }, [R]),
        K = Rc({
            callback: Y,
            disabled: A || !d
        }),
        Z = x.useCallback((_, F) => {
            K && (F && (K.unobserve(F), m.current = !1), _ && K.observe(_))
        }, [K]),
        [B, L] = tc(Z),
        T = il(a);
    return x.useEffect(() => {
        !K || !B.current || (K.disconnect(), m.current = !1, K.observe(B.current))
    }, [B, K]), x.useEffect(() => (h({
        type: Rt.RegisterDroppable,
        element: {
            id: l,
            key: u,
            disabled: s,
            node: B,
            rect: S,
            data: T
        }
    }), () => h({
        type: Rt.UnregisterDroppable,
        key: u,
        id: l
    })), [l]), x.useEffect(() => {
        s !== b.current.disabled && (h({
            type: Rt.SetDroppableDisabled,
            id: l,
            key: u,
            disabled: s
        }), b.current.disabled = s)
    }, [l, u, s, h]), {
        active: d,
        rect: S,
        isOver: p?.id === l,
        node: B,
        over: p,
        setNodeRef: L
    }
}

function SR(t) {
    let {
        animation: a,
        children: s
    } = t;
    const [l, o] = x.useState(null), [u, d] = x.useState(null), h = nc(s);
    return !s && !l && h && o(h), Kn(() => {
        if (!u) return;
        const p = l?.key,
            g = l?.props.id;
        if (p == null || g == null) {
            o(null);
            return
        }
        Promise.resolve(a(g, u)).then(() => {
            o(null)
        })
    }, [a, l, u]), re.createElement(re.Fragment, null, s, l ? x.cloneElement(l, {
        ref: d
    }) : null)
}
const wR = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
};

function ER(t) {
    let {
        children: a
    } = t;
    return re.createElement(bl.Provider, {
        value: dx
    }, re.createElement(Dc.Provider, {
        value: wR
    }, a))
}
const OR = {
        position: "fixed",
        touchAction: "none"
    },
    AR = t => Cc(t) ? "transform 250ms ease" : void 0,
    TR = x.forwardRef((t, a) => {
        let {
            as: s,
            activatorEvent: l,
            adjustScale: o,
            children: u,
            className: d,
            rect: h,
            style: p,
            transform: g,
            transition: b = AR
        } = t;
        if (!h) return null;
        const m = o ? g : {
                ...g,
                scaleX: 1,
                scaleY: 1
            },
            S = {
                ...OR,
                width: h.width,
                height: h.height,
                top: h.top,
                left: h.left,
                transform: gr.Transform.toString(m),
                transformOrigin: o && l ? yj(l, h) : void 0,
                transition: typeof b == "function" ? b(l) : b,
                ...p
            };
        return re.createElement(s, {
            className: d,
            style: S,
            ref: a
        }, u)
    }),
    CR = t => a => {
        let {
            active: s,
            dragOverlay: l
        } = a;
        const o = {},
            {
                styles: u,
                className: d
            } = t;
        if (u != null && u.active)
            for (const [h, p] of Object.entries(u.active)) p !== void 0 && (o[h] = s.node.style.getPropertyValue(h), s.node.style.setProperty(h, p));
        if (u != null && u.dragOverlay)
            for (const [h, p] of Object.entries(u.dragOverlay)) p !== void 0 && l.node.style.setProperty(h, p);
        return d != null && d.active && s.node.classList.add(d.active), d != null && d.dragOverlay && l.node.classList.add(d.dragOverlay),
            function() {
                for (const [p, g] of Object.entries(o)) s.node.style.setProperty(p, g);
                d != null && d.active && s.node.classList.remove(d.active)
            }
    },
    jR = t => {
        let {
            transform: {
                initial: a,
                final: s
            }
        } = t;
        return [{
            transform: gr.Transform.toString(a)
        }, {
            transform: gr.Transform.toString(s)
        }]
    },
    RR = {
        duration: 250,
        easing: "ease",
        keyframes: jR,
        sideEffects: CR({
            styles: {
                active: {
                    opacity: "0"
                }
            }
        })
    };

function DR(t) {
    let {
        config: a,
        draggableNodes: s,
        droppableContainers: l,
        measuringConfiguration: o
    } = t;
    return Tc((u, d) => {
        if (a === null) return;
        const h = s.get(u);
        if (!h) return;
        const p = h.node.current;
        if (!p) return;
        const g = ux(d);
        if (!g) return;
        const {
            transform: b
        } = It(d).getComputedStyle(d), m = ex(b);
        if (!m) return;
        const S = typeof a == "function" ? a : _R(a);
        return lx(p, o.draggable.measure), S({
            active: {
                id: u,
                data: h.data,
                node: p,
                rect: o.draggable.measure(p)
            },
            draggableNodes: s,
            dragOverlay: {
                node: d,
                rect: o.dragOverlay.measure(g)
            },
            droppableContainers: l,
            measuringConfiguration: o,
            transform: m
        })
    })
}

function _R(t) {
    const {
        duration: a,
        easing: s,
        sideEffects: l,
        keyframes: o
    } = {
        ...RR,
        ...t
    };
    return u => {
        let {
            active: d,
            dragOverlay: h,
            transform: p,
            ...g
        } = u;
        if (!a) return;
        const b = {
                x: h.rect.left - d.rect.left,
                y: h.rect.top - d.rect.top
            },
            m = {
                scaleX: p.scaleX !== 1 ? d.rect.width * p.scaleX / h.rect.width : 1,
                scaleY: p.scaleY !== 1 ? d.rect.height * p.scaleY / h.rect.height : 1
            },
            S = {
                x: p.x - b.x,
                y: p.y - b.y,
                ...m
            },
            E = o({
                ...g,
                active: d,
                dragOverlay: h,
                transform: {
                    initial: p,
                    final: S
                }
            }),
            [A] = E,
            O = E[E.length - 1];
        if (JSON.stringify(A) === JSON.stringify(O)) return;
        const R = l?.({
                active: d,
                dragOverlay: h,
                ...g
            }),
            N = h.node.animate(E, {
                duration: a,
                easing: s,
                fill: "forwards"
            });
        return new Promise(Y => {
            N.onfinish = () => {
                R?.(), Y()
            }
        })
    }
}
let Hv = 0;

function MR(t) {
    return x.useMemo(() => {
        if (t != null) return Hv++, Hv
    }, [t])
}
const NR = re.memo(t => {
    let {
        adjustScale: a = !1,
        children: s,
        dropAnimation: l,
        style: o,
        transition: u,
        modifiers: d,
        wrapperElement: h = "div",
        className: p,
        zIndex: g = 999
    } = t;
    const {
        activatorEvent: b,
        active: m,
        activeNodeRect: S,
        containerNodeRect: E,
        draggableNodes: A,
        droppableContainers: O,
        dragOverlay: R,
        over: N,
        measuringConfiguration: Y,
        scrollableAncestors: K,
        scrollableAncestorRects: Z,
        windowRect: B
    } = px(), L = x.useContext(Dc), T = MR(m?.id), _ = hx(d, {
        activatorEvent: b,
        active: m,
        activeNodeRect: S,
        containerNodeRect: E,
        draggingNodeRect: R.rect,
        over: N,
        overlayNodeRect: R.rect,
        scrollableAncestors: K,
        scrollableAncestorRects: Z,
        transform: L,
        windowRect: B
    }), F = vh(S), $ = DR({
        config: l,
        draggableNodes: A,
        droppableContainers: O,
        measuringConfiguration: Y
    }), G = F ? R.setRef : void 0;
    return re.createElement(ER, null, re.createElement(SR, {
        animation: $
    }, m && T ? re.createElement(TR, {
        key: T,
        id: m.id,
        ref: G,
        as: h,
        activatorEvent: b,
        adjustScale: a,
        className: p,
        transition: u,
        rect: F,
        style: {
            zIndex: g,
            ...o
        },
        transform: _
    }, s) : null))
});

function bh(t, a, s) {
    const l = t.slice();
    return l.splice(s < 0 ? l.length + s : s, 0, l.splice(a, 1)[0]), l
}

function HR(t, a) {
    return t.reduce((s, l, o) => {
        const u = a.get(l);
        return u && (s[o] = u), s
    }, Array(t.length))
}

function Po(t) {
    return t !== null && t >= 0
}

function zR(t, a) {
    if (t === a) return !0;
    if (t.length !== a.length) return !1;
    for (let s = 0; s < t.length; s++)
        if (t[s] !== a[s]) return !1;
    return !0
}

function kR(t) {
    return typeof t == "boolean" ? {
        draggable: t,
        droppable: t
    } : t
}
const mx = t => {
        let {
            rects: a,
            activeIndex: s,
            overIndex: l,
            index: o
        } = t;
        const u = bh(a, l, s),
            d = a[o],
            h = u[o];
        return !h || !d ? null : {
            x: h.left - d.left,
            y: h.top - d.top,
            scaleX: h.width / d.width,
            scaleY: h.height / d.height
        }
    },
    Yo = {
        scaleX: 1,
        scaleY: 1
    },
    UR = t => {
        var a;
        let {
            activeIndex: s,
            activeNodeRect: l,
            index: o,
            rects: u,
            overIndex: d
        } = t;
        const h = (a = u[s]) != null ? a : l;
        if (!h) return null;
        if (o === s) {
            const g = u[d];
            return g ? {
                x: 0,
                y: s < d ? g.top + g.height - (h.top + h.height) : g.top - h.top,
                ...Yo
            } : null
        }
        const p = LR(u, o, s);
        return o > s && o <= d ? {
            x: 0,
            y: -h.height - p,
            ...Yo
        } : o < s && o >= d ? {
            x: 0,
            y: h.height + p,
            ...Yo
        } : {
            x: 0,
            y: 0,
            ...Yo
        }
    };

function LR(t, a, s) {
    const l = t[a],
        o = t[a - 1],
        u = t[a + 1];
    return l ? s < a ? o ? l.top - (o.top + o.height) : u ? u.top - (l.top + l.height) : 0 : u ? u.top - (l.top + l.height) : o ? l.top - (o.top + o.height) : 0 : 0
}
const gx = "Sortable",
    yx = re.createContext({
        activeIndex: -1,
        containerId: gx,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: mx,
        disabled: {
            draggable: !1,
            droppable: !1
        }
    });

function BR(t) {
    let {
        children: a,
        id: s,
        items: l,
        strategy: o = mx,
        disabled: u = !1
    } = t;
    const {
        active: d,
        dragOverlay: h,
        droppableRects: p,
        over: g,
        measureDroppableContainers: b
    } = px(), m = vl(gx, s), S = h.rect !== null, E = x.useMemo(() => l.map(L => typeof L == "object" && "id" in L ? L.id : L), [l]), A = d != null, O = d ? E.indexOf(d.id) : -1, R = g ? E.indexOf(g.id) : -1, N = x.useRef(E), Y = !zR(E, N.current), K = R !== -1 && O === -1 || Y, Z = kR(u);
    Kn(() => {
        Y && A && b(E)
    }, [Y, E, A, b]), x.useEffect(() => {
        N.current = E
    }, [E]);
    const B = x.useMemo(() => ({
        activeIndex: O,
        containerId: m,
        disabled: Z,
        disableTransforms: K,
        items: E,
        overIndex: R,
        useDragOverlay: S,
        sortedRects: HR(E, p),
        strategy: o
    }), [O, m, Z.draggable, Z.droppable, K, E, R, p, S, o]);
    return re.createElement(yx.Provider, {
        value: B
    }, a)
}
const qR = t => {
        let {
            id: a,
            items: s,
            activeIndex: l,
            overIndex: o
        } = t;
        return bh(s, l, o).indexOf(a)
    },
    QR = t => {
        let {
            containerId: a,
            isSorting: s,
            wasDragging: l,
            index: o,
            items: u,
            newIndex: d,
            previousItems: h,
            previousContainerId: p,
            transition: g
        } = t;
        return !g || !l || h !== u && o === d ? !1 : s ? !0 : d !== o && a === p
    },
    PR = {
        duration: 200,
        easing: "ease"
    },
    vx = "transform",
    YR = gr.Transition.toString({
        property: vx,
        duration: 0,
        easing: "linear"
    }),
    GR = {
        roleDescription: "sortable"
    };

function VR(t) {
    let {
        disabled: a,
        index: s,
        node: l,
        rect: o
    } = t;
    const [u, d] = x.useState(null), h = x.useRef(s);
    return Kn(() => {
        if (!a && s !== h.current && l.current) {
            const p = o.current;
            if (p) {
                const g = $s(l.current, {
                        ignoreTransform: !0
                    }),
                    b = {
                        x: p.left - g.left,
                        y: p.top - g.top,
                        scaleX: p.width / g.width,
                        scaleY: p.height / g.height
                    };
                (b.x || b.y) && d(b)
            }
        }
        s !== h.current && (h.current = s)
    }, [a, s, l, o]), x.useEffect(() => {
        u && d(null)
    }, [u]), u
}

function KR(t) {
    let {
        animateLayoutChanges: a = QR,
        attributes: s,
        disabled: l,
        data: o,
        getNewIndex: u = qR,
        id: d,
        strategy: h,
        resizeObserverConfig: p,
        transition: g = PR
    } = t;
    const {
        items: b,
        containerId: m,
        activeIndex: S,
        disabled: E,
        disableTransforms: A,
        sortedRects: O,
        overIndex: R,
        useDragOverlay: N,
        strategy: Y
    } = x.useContext(yx), K = XR(l, E), Z = b.indexOf(d), B = x.useMemo(() => ({
        sortable: {
            containerId: m,
            index: Z,
            items: b
        },
        ...o
    }), [m, o, Z, b]), L = x.useMemo(() => b.slice(b.indexOf(d)), [b, d]), {
        rect: T,
        node: _,
        isOver: F,
        setNodeRef: $
    } = xR({
        id: d,
        data: B,
        disabled: K.droppable,
        resizeObserverConfig: {
            updateMeasurementsFor: L,
            ...p
        }
    }), {
        active: G,
        activatorEvent: te,
        activeNodeRect: le,
        attributes: ne,
        setNodeRef: se,
        listeners: j,
        isDragging: H,
        over: z,
        setActivatorNodeRef: oe,
        transform: de
    } = yR({
        id: d,
        data: B,
        attributes: {
            ...GR,
            ...s
        },
        disabled: K.draggable
    }), C = nj($, se), P = !!G, U = P && !A && Po(S) && Po(R), I = !N && H, ie = I && U ? de : null, ue = U ? ie ?? (h ?? Y)({
        rects: O,
        activeNodeRect: le,
        activeIndex: S,
        overIndex: R,
        index: Z
    }) : null, ve = Po(S) && Po(R) ? u({
        id: d,
        items: b,
        activeIndex: S,
        overIndex: R
    }) : Z, Oe = G?.id, Ee = x.useRef({
        activeId: Oe,
        items: b,
        newIndex: ve,
        containerId: m
    }), it = b !== Ee.current.items, je = a({
        active: G,
        containerId: m,
        isDragging: H,
        isSorting: P,
        id: d,
        index: Z,
        items: b,
        newIndex: Ee.current.newIndex,
        previousItems: Ee.current.items,
        previousContainerId: Ee.current.containerId,
        transition: g,
        wasDragging: Ee.current.activeId != null
    }), vt = VR({
        disabled: !je,
        index: Z,
        node: _,
        rect: T
    });
    return x.useEffect(() => {
        P && Ee.current.newIndex !== ve && (Ee.current.newIndex = ve), m !== Ee.current.containerId && (Ee.current.containerId = m), b !== Ee.current.items && (Ee.current.items = b)
    }, [P, ve, m, b]), x.useEffect(() => {
        if (Oe === Ee.current.activeId) return;
        if (Oe != null && Ee.current.activeId == null) {
            Ee.current.activeId = Oe;
            return
        }
        const $t = setTimeout(() => {
            Ee.current.activeId = Oe
        }, 50);
        return () => clearTimeout($t)
    }, [Oe]), {
        active: G,
        activeIndex: S,
        attributes: ne,
        data: B,
        rect: T,
        index: Z,
        newIndex: ve,
        items: b,
        isOver: F,
        isSorting: P,
        isDragging: H,
        listeners: j,
        node: _,
        overIndex: R,
        over: z,
        setNodeRef: C,
        setActivatorNodeRef: oe,
        setDroppableNodeRef: $,
        setDraggableNodeRef: se,
        transform: vt ?? ue,
        transition: tt()
    };

    function tt() {
        if (vt || it && Ee.current.newIndex === Z) return YR;
        if (!(I && !Cc(te) || !g) && (P || je)) return gr.Transition.toString({
            ...g,
            property: vx
        })
    }
}

function XR(t, a) {
    var s, l;
    return typeof t == "boolean" ? {
        draggable: t,
        droppable: !1
    } : {
        draggable: (s = t?.draggable) != null ? s : a.draggable,
        droppable: (l = t?.droppable) != null ? l : a.droppable
    }
}

function ic(t) {
    if (!t) return !1;
    const a = t.data.current;
    return !!(a && "sortable" in a && typeof a.sortable == "object" && "containerId" in a.sortable && "items" in a.sortable && "index" in a.sortable)
}
const ZR = [Ue.Down, Ue.Right, Ue.Up, Ue.Left],
    IR = (t, a) => {
        let {
            context: {
                active: s,
                collisionRect: l,
                droppableRects: o,
                droppableContainers: u,
                over: d,
                scrollableAncestors: h
            }
        } = a;
        if (ZR.includes(t.code)) {
            if (t.preventDefault(), !s || !l) return;
            const p = [];
            u.getEnabled().forEach(m => {
                if (!m || m != null && m.disabled) return;
                const S = o.get(m.id);
                if (S) switch (t.code) {
                    case Ue.Down:
                        l.top < S.top && p.push(m);
                        break;
                    case Ue.Up:
                        l.top > S.top && p.push(m);
                        break;
                    case Ue.Left:
                        l.left > S.left && p.push(m);
                        break;
                    case Ue.Right:
                        l.left < S.left && p.push(m);
                        break
                }
            });
            const g = xj({
                collisionRect: l,
                droppableRects: o,
                droppableContainers: p
            });
            let b = Jb(g, "id");
            if (b === d?.id && g.length > 1 && (b = g[1].id), b != null) {
                const m = u.get(s.id),
                    S = u.get(b),
                    E = S ? o.get(S.id) : null,
                    A = S?.node.current;
                if (A && E && m && S) {
                    const R = jc(A).some((L, T) => h[T] !== L),
                        N = bx(m, S),
                        Y = $R(m, S),
                        K = R || !N ? {
                            x: 0,
                            y: 0
                        } : {
                            x: Y ? l.width - E.width : 0,
                            y: Y ? l.height - E.height : 0
                        },
                        Z = {
                            x: E.left,
                            y: E.top
                        };
                    return K.x && K.y ? Z : ll(Z, K)
                }
            }
        }
    };

function bx(t, a) {
    return !ic(t) || !ic(a) ? !1 : t.data.current.sortable.containerId === a.data.current.sortable.containerId
}

function $R(t, a) {
    return !ic(t) || !ic(a) || !bx(t, a) ? !1 : t.data.current.sortable.index < a.data.current.sortable.index
}
const nt = {
        activePage: "flowmark-active-page",
        tasks: "flowmark-tasks",
        regularTasks: "flowmark-regular-tasks",
        templates: "flowmark-prompt-templates",
        accounts: "flowmark-account-sheets",
        profile: "flowmark-profile",
        greeting: "flowmark-main-greeting",
        workspaceSyncMeta: "flowmark-workspace-sync-meta"
    },
    uf = {
        main: {
            title: "메인화면",
            eyebrow: "MISSION CONTROL",
            description: "오늘의 핵심 신호와 업무 흐름을 한 화면에서 확인합니다."
        },
        todos: {
            title: "오늘의 할 일",
            eyebrow: "FOCUS LIST",
            description: "업무를 추가하고, 직접 끌어 우선순위를 재정렬하세요."
        },
        recurring: {
            title: "반복업무",
            eyebrow: "WORK CADENCE",
            description: "반복해야 하는 업무의 이름, 내용, 상태를 자유롭게 관리합니다."
        },
        templates: {
            title: "프롬프트 템플릿",
            eyebrow: "REUSABLE COPY",
            description: "자주 사용하는 글 작성 프롬프트를 섹션별로 정리하고 자동 저장합니다."
        },
        accounts: {
            title: "이번주 할 일",
            eyebrow: "WEEKLY CALENDAR",
            description: "완료 기록과 남은 업무를 날짜별 캘린더에서 확인합니다."
        },
        progress: {
            title: "이번주 진행률",
            eyebrow: "WEEKLY RHYTHM",
            description: "완료 흐름과 업무 상태를 기준으로 이번 주 집중도를 살펴봅니다."
        }
    },
    FR = [{
        id: "main",
        label: "메인화면",
        icon: yC
    }, {
        id: "todos",
        label: "오늘의 할 일",
        icon: bC
    }, {
        id: "recurring",
        label: "반복업무",
        icon: Bf
    }, {
        id: "templates",
        label: "프롬프트 템플릿",
        icon: Hb
    }, {
        id: "accounts",
        label: "이번주 할 일",
        icon: Ec
    }, {
        id: "progress",
        label: "이번주 진행률",
        icon: oh
    }],
    Lr = mr(new Date),
    JR = new Set(["task-1", "task-2", "task-3", "task-4", "task-5"]),
    WR = [{
        id: "task-1",
        text: "브랜드 랜딩 페이지 와이어프레임 검토",
        time: "09:30",
        completed: !0,
        status: "진행중",
        scheduledDate: Lr,
        completedAt: new Date().toISOString()
    }, {
        id: "task-2",
        text: "광고 성과 리포트 초안 정리",
        time: "11:00",
        completed: !0,
        status: "진행중",
        scheduledDate: Lr,
        completedAt: new Date().toISOString()
    }, {
        id: "task-3",
        text: "프로젝트 킥오프 회의 아젠다 작성",
        time: "14:00",
        completed: !0,
        status: "진행중",
        scheduledDate: Lr,
        completedAt: new Date().toISOString()
    }, {
        id: "task-4",
        text: "클라이언트 피드백 반영 사항 점검",
        time: "16:30",
        completed: !1,
        status: "진행중",
        scheduledDate: Lr
    }, {
        id: "task-5",
        text: "내일 반복 업무 우선순위 설정",
        time: "17:30",
        completed: !1,
        status: "예정",
        scheduledDate: Lr
    }],
    eD = [{
        id: "regular-1",
        name: "월간 콘텐츠 캘린더 업데이트",
        detail: "다음 달 주제와 게시 일정을 팀과 함께 점검합니다.",
        status: "완료"
    }, {
        id: "regular-2",
        name: "클라이언트 성과 리포트 발송",
        detail: "주간 성과를 정리해 담당자에게 공유합니다.",
        status: "진행중"
    }, {
        id: "regular-3",
        name: "팀 스프린트 회고",
        detail: "이번 스프린트의 배움과 다음 개선점을 기록합니다.",
        status: "대기"
    }],
    tD = [{
        id: "blog-product",
        title: "[블로그] 제품소개",
        description: ks,
        content: ""
    }, {
        id: "blog-delivery",
        title: "[블로그] 납품사례(실험대)",
        description: ks,
        content: ""
    }, {
        id: "blog-guide",
        title: "[블로그] 사용방법",
        description: ks,
        content: ""
    }, {
        id: "tistory-principle",
        title: "[티스토리] 원리소개",
        description: ks,
        content: ""
    }],
    nD = [{
        id: "account-strategy",
        siteName: "브랜드 전략팀",
        description: "브랜드 방향성과 핵심 메시지를 설계합니다.",
        url: "",
        loginId: "",
        password: "",
        iconKey: "strategy"
    }, {
        id: "account-content",
        siteName: "콘텐츠 스튜디오",
        description: "캠페인 콘텐츠와 발행 일정을 운영합니다.",
        url: "",
        loginId: "",
        password: "",
        iconKey: "content"
    }, {
        id: "account-performance",
        siteName: "퍼포먼스 셀",
        description: "광고 성과와 전환 지표를 관리합니다.",
        url: "",
        loginId: "",
        password: "",
        iconKey: "performance"
    }],
    aD = {
        name: "유민서",
        role: "워크스페이스 관리자",
        initials: "유"
    },
    rD = "안녕하세요, 민서님. 오늘의 흐름을 정리하세요.",
    Qr = {
        완료: "complete",
        진행중: "progress",
        대기: "waiting",
        예정: "planned"
    };

function zv(t) {
    return t.map(a => ({
        ...a,
        status: a.status === "진행중" ? "진행중" : "예정",
        scheduledDate: !a.scheduledDate || JR.has(a.id) && a.scheduledDate !== Lr ? Lr : a.scheduledDate,
        completedAt: a.completed ? a.completedAt || new Date().toISOString() : void 0
    }))
}

function sD(t, a) {
    return t.map(s => ({
        ...s,
        password: a.find(l => l.id === s.id)?.password ?? ""
    }))
}

function iD() {
    return typeof window > "u" ? !1 : [nt.tasks, nt.regularTasks, nt.templates, nt.accounts, nt.profile, nt.greeting].some(t => window.localStorage.getItem(t) !== null)
}

function lD() {
    const t = ir(nt.workspaceSyncMeta, {});
    return {
        serverUpdatedAt: typeof t.serverUpdatedAt == "string" ? t.serverUpdatedAt : null,
        lastSyncedAt: typeof t.lastSyncedAt == "string" ? t.lastSyncedAt : null,
        localUpdatedAt: typeof t.localUpdatedAt == "string" ? t.localUpdatedAt : null
    }
}

function ir(t, a) {
    if (typeof window > "u") return a;
    try {
        const s = window.localStorage.getItem(t);
        return s ? JSON.parse(s) : a
    } catch {
        return a
    }
}

function Ln(t, a) {
    if (!(typeof window > "u")) try {
        window.localStorage.setItem(t, JSON.stringify(a))
    } catch {}
}

function _c(t) {
    const a = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return `${t}-${a}`
}

function xh({
    task: t,
    now: a,
    compact: s = !1
}) {
    const l = tj(t, new Date(a)),
        o = JC[l];
    return y.jsx("span", {
        "data-loc": "client/src/pages/Home.tsx:316",
        className: `task-status-badge task-status-badge--${o.tone} ${s?"task-status-badge--compact":""}`,
        children: o.label
    })
}

function oD({
    task: t,
    onToggle: a,
    onEdit: s,
    onInlineUpdate: l,
    onStatusChange: o,
    onDelete: u,
    statusNow: d
}) {
    const {
        attributes: h,
        listeners: p,
        setActivatorNodeRef: g,
        setNodeRef: b,
        transform: m,
        transition: S,
        isDragging: E
    } = KR({
        id: t.id
    }), [A, O] = x.useState(!1), [R, N] = x.useState(t.text), Y = x.useRef(!1), [K, Z] = x.useState(!1), [B, L] = x.useState(t.time), T = x.useRef(!1), _ = () => {
        N(t.text), O(!0)
    }, F = () => {
        if (Y.current) {
            Y.current = !1;
            return
        }
        const ne = R.trim();
        if (!ne) {
            N(t.text), O(!1), Ge.error("업무명은 비워둘 수 없습니다.");
            return
        }
        ne !== t.text && l(t.id, {
            text: ne
        }), O(!1)
    }, $ = () => {
        Y.current = !0, N(t.text), O(!1)
    }, G = () => {
        L(t.time), Z(!0)
    }, te = () => {
        if (T.current) {
            T.current = !1;
            return
        }
        B !== t.time && l(t.id, {
            time: B
        }), Z(!1)
    }, le = () => {
        T.current = !0, L(t.time), Z(!1)
    };
    return y.jsxs("li", {
        "data-loc": "client/src/pages/Home.tsx:407",
        className: `todo-item todo-item--manager ${t.completed?"completed":""} ${E?"is-dragging":""}`,
        ref: b,
        style: {
            transform: gr.Transform.toString(m),
            transition: S
        },
        children: [y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:412",
            "aria-label": `${t.text} 순서 변경`,
            className: "todo-drag-handle",
            ref: g,
            type: "button",
            ...h,
            ...p,
            children: y.jsx(ch, {
                "data-loc": "client/src/pages/Home.tsx:420",
                "aria-hidden": "true",
                size: 16,
                strokeWidth: 2.4
            })
        }), y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:422",
            "aria-label": `${t.text} ${t.completed?"완료 취소":"완료"}`,
            className: "todo-check",
            onClick: () => a(t.id),
            type: "button",
            children: t.completed && y.jsx(pl, {
                "data-loc": "client/src/pages/Home.tsx:428",
                "aria-hidden": "true",
                size: 13,
                strokeWidth: 3
            })
        }), A ? y.jsx("input", {
            "data-loc": "client/src/pages/Home.tsx:431",
            "aria-label": `${t.text} 업무명 수정`,
            autoFocus: !0,
            className: "todo-inline-input",
            onBlur: F,
            onChange: ne => N(ne.target.value),
            onKeyDown: ne => {
                ne.key === "Enter" && (ne.preventDefault(), F()), ne.key === "Escape" && (ne.preventDefault(), $())
            },
            value: R
        }) : y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:450",
            "aria-label": `${t.text} 업무명 바로 수정`,
            className: "todo-text todo-text--editable",
            onClick: _,
            type: "button",
            children: t.text
        }), K ? y.jsx("input", {
            "data-loc": "client/src/pages/Home.tsx:460",
            "aria-label": `${t.text} 예정 시간 수정`,
            autoFocus: !0,
            className: "todo-time-input",
            onBlur: te,
            onChange: ne => L(ne.target.value),
            onKeyDown: ne => {
                ne.key === "Enter" && (ne.preventDefault(), te()), ne.key === "Escape" && (ne.preventDefault(), le())
            },
            type: "time",
            value: B
        }) : y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:480",
            "aria-label": `${t.text} 예정 시간 바로 수정`,
            className: "todo-time todo-time--editable",
            onClick: G,
            type: "button",
            children: t.time || "시간 미정"
        }), y.jsx(xh, {
            "data-loc": "client/src/pages/Home.tsx:489",
            now: d,
            task: t
        }), y.jsxs("select", {
            "data-loc": "client/src/pages/Home.tsx:490",
            "aria-label": `${t.text} 진행 상태 변경`,
            className: "task-status-select",
            onChange: ne => o(t.id, ne.target.value),
            value: t.completed ? "완료" : t.status,
            children: [y.jsx("option", {
                "data-loc": "client/src/pages/Home.tsx:496",
                value: "예정",
                children: "예정"
            }), y.jsx("option", {
                "data-loc": "client/src/pages/Home.tsx:497",
                value: "진행중",
                children: "진행중"
            }), y.jsx("option", {
                "data-loc": "client/src/pages/Home.tsx:498",
                value: "완료",
                children: "완료"
            })]
        }), y.jsxs("span", {
            "data-loc": "client/src/pages/Home.tsx:500",
            className: "todo-row-actions",
            children: [y.jsx("button", {
                "data-loc": "client/src/pages/Home.tsx:501",
                "aria-label": `${t.text} 수정`,
                className: "todo-row-action",
                onClick: () => s(t),
                type: "button",
                children: y.jsx(xC, {
                    "data-loc": "client/src/pages/Home.tsx:502",
                    "aria-hidden": "true",
                    size: 14
                })
            }), y.jsx("button", {
                "data-loc": "client/src/pages/Home.tsx:504",
                "aria-label": `${t.text} 삭제`,
                className: "todo-row-action todo-row-action--delete",
                onClick: () => u(t.id),
                type: "button",
                children: y.jsx(kb, {
                    "data-loc": "client/src/pages/Home.tsx:505",
                    "aria-hidden": "true",
                    size: 14
                })
            })]
        })]
    })
}

function cD({
    task: t
}) {
    return y.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:514",
        className: `todo-item todo-item--overlay ${t.completed?"completed":""}`,
        children: [y.jsx("span", {
            "data-loc": "client/src/pages/Home.tsx:515",
            className: "todo-drag-handle todo-drag-handle--overlay",
            "aria-hidden": "true",
            children: y.jsx(ch, {
                "data-loc": "client/src/pages/Home.tsx:516",
                size: 16,
                strokeWidth: 2.4
            })
        }), y.jsx("span", {
            "data-loc": "client/src/pages/Home.tsx:518",
            className: "todo-check",
            "aria-hidden": "true",
            children: t.completed && y.jsx(pl, {
                "data-loc": "client/src/pages/Home.tsx:519",
                size: 13,
                strokeWidth: 3
            })
        }), y.jsx("span", {
            "data-loc": "client/src/pages/Home.tsx:521",
            className: "todo-text",
            children: t.text
        }), y.jsx("time", {
            "data-loc": "client/src/pages/Home.tsx:522",
            className: "todo-time",
            children: t.time || "시간 미정"
        })]
    })
}

function uD({
    enabled: t,
    isAuthenticated: a,
    isPending: s,
    onEnable: l,
    onDisable: o
}) {
    return y.jsxs("aside", {
        "data-loc": "client/src/pages/Home.tsx:541",
        className: `task-alert-control ${t?"is-enabled":""}`,
        "aria-label": "예정 시간 알림 설정",
        children: [y.jsx("span", {
            "data-loc": "client/src/pages/Home.tsx:542",
            className: "task-alert-icon",
            children: y.jsx(uC, {
                "data-loc": "client/src/pages/Home.tsx:542",
                "aria-hidden": "true",
                size: 18
            })
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:543",
            className: "task-alert-copy",
            children: [y.jsx("strong", {
                "data-loc": "client/src/pages/Home.tsx:544",
                children: "백그라운드 예정 시간 알림"
            }), y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:545",
                children: t ? "1시간 전 · 30분 전 · 지연 시점에 앱을 닫아도 알림을 보냅니다." : "배포 후 알림을 켜면 예정 시간에 맞춰 백그라운드 알림을 받습니다."
            })]
        }), y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:547",
            className: t ? "btn-outline task-alert-button" : "btn-primary task-alert-button",
            disabled: s,
            onClick: t ? o : l,
            type: "button",
            children: s ? "처리 중" : t ? "알림 끄기" : a ? "알림 켜기" : "로그인 후 설정"
        })]
    })
}

function dD({
    task: t,
    onToggle: a,
    onUpdate: s,
    statusNow: l
}) {
    const [o, u] = x.useState(!1), [d, h] = x.useState(t.text), p = x.useRef(!1), g = () => {
        h(t.text), u(!0)
    }, b = () => {
        if (p.current) {
            p.current = !1;
            return
        }
        const S = d.trim();
        if (!S) {
            h(t.text), u(!1), Ge.error("업무명은 비워둘 수 없습니다.");
            return
        }
        S !== t.text && s(t.id, {
            text: S
        }), u(!1)
    }, m = () => {
        p.current = !0, h(t.text), u(!1)
    };
    return y.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:604",
        className: `summary-todo-row ${t.completed?"completed":""}`,
        children: [y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:605",
            "aria-label": `${t.text} ${t.completed?"완료 취소":"완료"}`,
            className: "summary-todo-check",
            onClick: () => a(t.id),
            type: "button",
            children: t.completed && y.jsx(pl, {
                "data-loc": "client/src/pages/Home.tsx:611",
                "aria-hidden": "true",
                size: 12,
                strokeWidth: 3
            })
        }), o ? y.jsx("input", {
            "data-loc": "client/src/pages/Home.tsx:614",
            "aria-label": `${t.text} 업무명 수정`,
            autoFocus: !0,
            className: "summary-todo-input",
            onBlur: b,
            onChange: S => h(S.target.value),
            onKeyDown: S => {
                S.key === "Enter" && (S.preventDefault(), b()), S.key === "Escape" && (S.preventDefault(), m())
            },
            value: d
        }) : y.jsx("button", {
            "data-loc": "client/src/pages/Home.tsx:633",
            "aria-label": `${t.text} 업무명 바로 수정`,
            className: "summary-todo-text",
            onClick: g,
            type: "button",
            children: t.text
        }), y.jsx("time", {
            "data-loc": "client/src/pages/Home.tsx:642",
            children: t.time || "시간 미정"
        }), y.jsx(xh, {
            "data-loc": "client/src/pages/Home.tsx:643",
            compact: !0,
            now: l,
            task: t
        })]
    })
}

function fD({
    tasks: t,
    query: a,
    onQueryChange: s,
    onAdd: l,
    onToggle: o,
    onUpdate: u,
    onDelete: d,
    onReorder: h,
    alertsEnabled: p,
    alertsPending: g,
    isAuthenticated: b,
    onEnableAlerts: m,
    onDisableAlerts: S,
    onStatusChange: E,
    statusNow: A
}) {
    const [O, R] = x.useState(""), [N, Y] = x.useState(""), [K, Z] = x.useState(null), [B, L] = x.useState(null), T = gj(Sv(yh, {
        activationConstraint: {
            distance: 7
        }
    }), Sv(mh, {
        coordinateGetter: IR
    })), _ = x.useMemo(() => t.filter(se => se.text.toLowerCase().includes(a.trim().toLowerCase())), [a, t]), F = B ? t.find(se => se.id === B) ?? null : null, $ = se => {
        se.preventDefault();
        const j = O.trim();
        if (!j) {
            Ge.error("추가할 업무명을 입력해 주세요.");
            return
        }
        l({
            id: _c("task"),
            text: j,
            time: N,
            completed: !1,
            status: "예정",
            scheduledDate: mr(new Date)
        }), R(""), Y("")
    }, G = ({
        active: se
    }) => L(String(se.id)), te = () => L(null), le = ({
        active: se,
        over: j
    }) => {
        L(null), !(!j || se.id === j.id) && h(String(se.id), String(j.id))
    }, ne = se => {
        if (se.preventDefault(), !K) return;
        const j = K.text.trim();
        if (!j) {
            Ge.error("업무명을 입력해 주세요.");
            return
        }
        u(K.id, {
            text: j,
            time: K.time
        }), Z(null)
    };
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:733",
        className: "workspace-page",
        "aria-labelledby": "todo-page-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:734",
            className: "workspace-heading",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:735",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:736",
                    className: "eyebrow",
                    children: "FOCUS LIST"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:737",
                    id: "todo-page-title",
                    children: "오늘의 할 일"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:738",
                    children: "핸들을 끌어 우선순위를 바꾸고, 필요한 업무를 바로 추가하거나 삭제할 수 있습니다."
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:740",
                className: "workspace-count",
                children: [y.jsx(vC, {
                    "data-loc": "client/src/pages/Home.tsx:740",
                    "aria-hidden": "true",
                    size: 18
                }), " ", t.length, "개 업무"]
            })]
        }), y.jsx(uD, {
            "data-loc": "client/src/pages/Home.tsx:743",
            enabled: p,
            isAuthenticated: b,
            isPending: g,
            onDisable: S,
            onEnable: m
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:751",
            className: "todo-workspace-grid",
            children: [y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:752",
                className: "card task-create-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:753",
                    className: "form-heading",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:754",
                        className: "form-heading-icon",
                        children: y.jsx(qr, {
                            "data-loc": "client/src/pages/Home.tsx:754",
                            "aria-hidden": "true",
                            size: 17
                        })
                    }), y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:755",
                        children: [y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:756",
                            children: "새 업무 추가"
                        }), y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:757",
                            children: "업무명과 시간을 입력하면 목록 끝에 추가됩니다."
                        })]
                    })]
                }), y.jsxs("form", {
                    "data-loc": "client/src/pages/Home.tsx:760",
                    className: "task-create-form",
                    onSubmit: $,
                    children: [y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:761",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:762",
                            children: "업무명"
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:763",
                            onChange: se => R(se.target.value),
                            placeholder: "예: 캠페인 초안 검토",
                            value: O
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:765",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:766",
                            children: "예정 시간"
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:767",
                            onChange: se => Y(se.target.value),
                            type: "time",
                            value: N
                        })]
                    }), y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:769",
                        className: "btn-primary",
                        type: "submit",
                        children: [y.jsx(qr, {
                            "data-loc": "client/src/pages/Home.tsx:769",
                            "aria-hidden": "true",
                            size: 16
                        }), " 업무 추가"]
                    })]
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:773",
                className: "card task-list-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:774",
                    className: "task-list-toolbar",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:775",
                        children: [y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:776",
                            children: "우선순위 목록"
                        }), y.jsxs("p", {
                            "data-loc": "client/src/pages/Home.tsx:777",
                            children: [y.jsx(ch, {
                                "data-loc": "client/src/pages/Home.tsx:777",
                                "aria-hidden": "true",
                                size: 14
                            }), " 끌어서 순서를 바꾸세요. 변경 내용은 자동 저장됩니다."]
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:779",
                        className: "workspace-search",
                        "aria-label": "오늘의 할 일 검색",
                        children: [y.jsx(zb, {
                            "data-loc": "client/src/pages/Home.tsx:780",
                            "aria-hidden": "true",
                            size: 15
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:781",
                            onChange: se => s(se.target.value),
                            placeholder: "업무 검색",
                            value: a
                        })]
                    })]
                }), y.jsxs(pR, {
                    "data-loc": "client/src/pages/Home.tsx:785",
                    collisionDetection: bj,
                    onDragCancel: te,
                    onDragEnd: le,
                    onDragStart: G,
                    sensors: T,
                    children: [y.jsx(BR, {
                        "data-loc": "client/src/pages/Home.tsx:792",
                        items: _.map(se => se.id),
                        strategy: UR,
                        children: y.jsxs("ul", {
                            "data-loc": "client/src/pages/Home.tsx:793",
                            className: "todo-list todo-list--manager",
                            "aria-live": "polite",
                            children: [_.map(se => y.jsx(oD, {
                                "data-loc": "client/src/pages/Home.tsx:795",
                                onDelete: d,
                                onEdit: Z,
                                onInlineUpdate: u,
                                onStatusChange: E,
                                onToggle: o,
                                statusNow: A,
                                task: se
                            }, se.id)), _.length === 0 && y.jsx("li", {
                                "data-loc": "client/src/pages/Home.tsx:797",
                                className: "todo-empty",
                                children: "검색 결과에 맞는 업무가 없습니다."
                            })]
                        })
                    }), y.jsx(NR, {
                        "data-loc": "client/src/pages/Home.tsx:800",
                        dropAnimation: null,
                        children: F ? y.jsx(cD, {
                            "data-loc": "client/src/pages/Home.tsx:800",
                            task: F
                        }) : null
                    })]
                })]
            })]
        }), K && y.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:806",
            className: "editor-sheet",
            "aria-label": "할 일 수정",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:807",
                className: "editor-sheet-heading",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:808",
                    children: [y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:809",
                        className: "eyebrow",
                        children: "EDIT TASK"
                    }), y.jsx("h3", {
                        "data-loc": "client/src/pages/Home.tsx:810",
                        children: "업무 수정"
                    })]
                }), y.jsx("button", {
                    "data-loc": "client/src/pages/Home.tsx:812",
                    "aria-label": "업무 수정 닫기",
                    className: "icon-action",
                    onClick: () => Z(null),
                    type: "button",
                    children: y.jsx(Ub, {
                        "data-loc": "client/src/pages/Home.tsx:812",
                        "aria-hidden": "true",
                        size: 17
                    })
                })]
            }), y.jsxs("form", {
                "data-loc": "client/src/pages/Home.tsx:814",
                className: "task-edit-form",
                onSubmit: ne,
                children: [y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:815",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:816",
                        children: "업무명"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:817",
                        onChange: se => Z(j => j && {
                            ...j,
                            text: se.target.value
                        }),
                        value: K.text
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:822",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:823",
                        children: "예정 시간"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:824",
                        onChange: se => Z(j => j && {
                            ...j,
                            time: se.target.value
                        }),
                        type: "time",
                        value: K.time
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:830",
                    className: "editor-actions",
                    children: [y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:831",
                        className: "btn-outline",
                        onClick: () => Z(null),
                        type: "button",
                        children: "취소"
                    }), y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:832",
                        className: "btn-primary",
                        type: "submit",
                        children: [y.jsx(sl, {
                            "data-loc": "client/src/pages/Home.tsx:832",
                            "aria-hidden": "true",
                            size: 15
                        }), " 변경 저장"]
                    })]
                })]
            })]
        })]
    })
}

function hD({
    tasks: t,
    onAdd: a,
    onUpdate: s,
    onDelete: l
}) {
    const [o, u] = x.useState(""), [d, h] = x.useState(""), [p, g] = x.useState("예정"), b = m => {
        m.preventDefault();
        const S = o.trim();
        if (!S) {
            Ge.error("반복 업무명을 입력해 주세요.");
            return
        }
        a({
            id: _c("regular"),
            name: S,
            detail: d.trim(),
            status: p
        }), u(""), h(""), g("예정")
    };
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:872",
        className: "workspace-page",
        "aria-labelledby": "recurring-page-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:873",
            className: "workspace-heading",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:874",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:875",
                    className: "eyebrow",
                    children: "WORK CADENCE"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:876",
                    id: "recurring-page-title",
                    children: "반복업무"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:877",
                    children: "업무명과 내용을 바로 수정하고, 상태를 완료·진행중·대기·예정으로 바꿀 수 있습니다."
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:879",
                className: "workspace-count",
                children: [y.jsx(Bf, {
                    "data-loc": "client/src/pages/Home.tsx:879",
                    "aria-hidden": "true",
                    size: 18
                }), " ", t.length, "개 반복 업무"]
            })]
        }), y.jsxs("article", {
            "data-loc": "client/src/pages/Home.tsx:882",
            className: "card regular-create-card",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:883",
                className: "form-heading",
                children: [y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:884",
                    className: "form-heading-icon",
                    children: y.jsx(Bf, {
                        "data-loc": "client/src/pages/Home.tsx:884",
                        "aria-hidden": "true",
                        size: 17
                    })
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:885",
                    children: [y.jsx("h3", {
                        "data-loc": "client/src/pages/Home.tsx:886",
                        children: "반복 업무 추가"
                    }), y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:887",
                        children: "추가한 항목은 이 브라우저에 자동 저장됩니다."
                    })]
                })]
            }), y.jsxs("form", {
                "data-loc": "client/src/pages/Home.tsx:890",
                className: "regular-create-form",
                onSubmit: b,
                children: [y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:891",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:892",
                        children: "업무명"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:893",
                        onChange: m => u(m.target.value),
                        placeholder: "예: 월간 운영 회의",
                        value: o
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:895",
                    className: "regular-detail-field",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:896",
                        children: "업무 내용"
                    }), y.jsx("textarea", {
                        "data-loc": "client/src/pages/Home.tsx:897",
                        onChange: m => h(m.target.value),
                        placeholder: "반복해야 할 업무 내용을 간단히 작성하세요.",
                        value: d
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:899",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:900",
                        children: "상태"
                    }), y.jsx("select", {
                        "data-loc": "client/src/pages/Home.tsx:901",
                        onChange: m => g(m.target.value),
                        value: p,
                        children: Object.keys(Qr).map(m => y.jsx("option", {
                            "data-loc": "client/src/pages/Home.tsx:902",
                            children: m
                        }, m))
                    })]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:905",
                    className: "btn-primary",
                    type: "submit",
                    children: [y.jsx(qr, {
                        "data-loc": "client/src/pages/Home.tsx:905",
                        "aria-hidden": "true",
                        size: 16
                    }), " 반복 업무 추가"]
                })]
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:909",
            className: "regular-editor-list",
            children: [t.map(m => y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:911",
                className: "card regular-editor",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:912",
                    className: "regular-editor-topline",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:913",
                        className: `regular-status regular-status--${Qr[m.status]}`,
                        "aria-hidden": "true"
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:914",
                        className: "regular-editor-caption",
                        children: "반복 업무"
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:915",
                        "aria-label": `${m.name} 삭제`,
                        className: "todo-row-action todo-row-action--delete",
                        onClick: () => l(m.id),
                        type: "button",
                        children: y.jsx(kb, {
                            "data-loc": "client/src/pages/Home.tsx:916",
                            "aria-hidden": "true",
                            size: 15
                        })
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:919",
                    className: "regular-editor-fields",
                    children: [y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:920",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:921",
                            children: "업무명"
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:922",
                            onChange: S => s(m.id, {
                                name: S.target.value
                            }),
                            value: m.name
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:924",
                        className: "regular-detail-field",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:925",
                            children: "업무 내용"
                        }), y.jsx("textarea", {
                            "data-loc": "client/src/pages/Home.tsx:926",
                            onChange: S => s(m.id, {
                                detail: S.target.value
                            }),
                            value: m.detail
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:928",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:929",
                            children: "상태"
                        }), y.jsx("select", {
                            "data-loc": "client/src/pages/Home.tsx:930",
                            onChange: S => s(m.id, {
                                status: S.target.value
                            }),
                            value: m.status,
                            children: Object.keys(Qr).map(S => y.jsx("option", {
                                "data-loc": "client/src/pages/Home.tsx:931",
                                children: S
                            }, S))
                        })]
                    })]
                })]
            }, m.id)), t.length === 0 && y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:937",
                className: "empty-workspace",
                children: [y.jsx(Nb, {
                    "data-loc": "client/src/pages/Home.tsx:937",
                    "aria-hidden": "true",
                    size: 25
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:937",
                    children: "등록된 반복 업무가 없습니다. 위 양식에서 첫 업무를 추가하세요."
                })]
            })]
        })]
    })
}

function pD({
    templates: t,
    onAdd: a,
    onUpdate: s
}) {
    const [l, o] = x.useState({
        title: "",
        description: "",
        content: ""
    }), u = d => {
        d.preventDefault();
        const h = l.title.trim();
        if (!h) {
            Ge.error("새 템플릿의 대제목을 입력해 주세요.");
            return
        }
        a({
            id: _c("template"),
            title: h,
            description: l.description.trim() || ks,
            content: l.content
        }), o({
            title: "",
            description: "",
            content: ""
        })
    };
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:971",
        className: "workspace-page",
        "aria-labelledby": "template-page-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:972",
            className: "workspace-heading",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:973",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:974",
                    className: "eyebrow",
                    children: "REUSABLE COPY"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:975",
                    id: "template-page-title",
                    children: "프롬프트 템플릿"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:976",
                    children: "대제목·설명·본문을 직접 작성하고, 필요한 형식의 템플릿을 새로 추가할 수 있습니다."
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:978",
                className: "template-heading-actions",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:979",
                    className: "workspace-count",
                    children: [y.jsx(sl, {
                        "data-loc": "client/src/pages/Home.tsx:979",
                        "aria-hidden": "true",
                        size: 17
                    }), " 자동 저장"]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:980",
                    className: "template-add-button",
                    form: "template-add-form",
                    type: "submit",
                    children: [y.jsx(qr, {
                        "data-loc": "client/src/pages/Home.tsx:980",
                        "aria-hidden": "true",
                        size: 15
                    }), " 새 템플릿 추가"]
                })]
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:984",
            className: "template-editor-grid",
            children: [y.jsx("article", {
                "data-loc": "client/src/pages/Home.tsx:985",
                className: "card template-editor-card template-add-card",
                children: y.jsxs("form", {
                    "data-loc": "client/src/pages/Home.tsx:986",
                    className: "template-add-form",
                    id: "template-add-form",
                    onSubmit: u,
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:987",
                        className: "template-editor-heading",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:988",
                            className: "template-icon",
                            children: y.jsx(qr, {
                                "data-loc": "client/src/pages/Home.tsx:988",
                                "aria-hidden": "true",
                                size: 18
                            })
                        }), y.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:989",
                            children: [y.jsx("h3", {
                                "data-loc": "client/src/pages/Home.tsx:990",
                                children: "새 프롬프트 템플릿"
                            }), y.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:991",
                                children: "기존 카드와 동일한 구조로 원하는 양식을 만들 수 있습니다."
                            })]
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:994",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:995",
                            children: "대제목"
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:996",
                            onChange: d => o(h => ({
                                ...h,
                                title: d.target.value
                            })),
                            placeholder: "예: [뉴스레터] 주간 요약",
                            value: l.title
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:998",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:999",
                            children: "설명"
                        }), y.jsx("textarea", {
                            "data-loc": "client/src/pages/Home.tsx:1000",
                            onChange: d => o(h => ({
                                ...h,
                                description: d.target.value
                            })),
                            placeholder: "예: 작성 목적이나 사용 기준을 적어주세요.",
                            rows: 2,
                            value: l.description
                        })]
                    }), y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:1002",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1003",
                            children: "프롬프트 본문"
                        }), y.jsx("textarea", {
                            "data-loc": "client/src/pages/Home.tsx:1004",
                            onChange: d => o(h => ({
                                ...h,
                                content: d.target.value
                            })),
                            placeholder: "새 템플릿에 넣을 프롬프트를 입력하세요.",
                            rows: 5,
                            value: l.content
                        })]
                    }), y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:1006",
                        className: "btn-primary",
                        type: "submit",
                        children: [y.jsx(qr, {
                            "data-loc": "client/src/pages/Home.tsx:1006",
                            "aria-hidden": "true",
                            size: 15
                        }), " 템플릿 추가"]
                    })]
                })
            }), t.map(d => y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1010",
                className: "card template-editor-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1011",
                    className: "template-editor-heading",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1012",
                        className: "template-icon",
                        children: y.jsx(Hb, {
                            "data-loc": "client/src/pages/Home.tsx:1012",
                            "aria-hidden": "true",
                            size: 18
                        })
                    }), y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1013",
                        className: "template-editor-copy",
                        children: [y.jsx("label", {
                            "data-loc": "client/src/pages/Home.tsx:1014",
                            className: "sr-only",
                            htmlFor: `${d.id}-title`,
                            children: "대제목"
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:1015",
                            className: "template-title-input",
                            id: `${d.id}-title`,
                            onChange: h => s(d.id, {
                                title: h.target.value
                            }),
                            value: d.title
                        }), y.jsx("label", {
                            "data-loc": "client/src/pages/Home.tsx:1016",
                            className: "sr-only",
                            htmlFor: `${d.id}-description`,
                            children: "설명"
                        }), y.jsx("textarea", {
                            "data-loc": "client/src/pages/Home.tsx:1017",
                            className: "template-description-input",
                            id: `${d.id}-description`,
                            onChange: h => s(d.id, {
                                description: h.target.value
                            }),
                            rows: 2,
                            value: d.description
                        })]
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1019",
                        className: "autosave-indicator",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1019",
                            "aria-hidden": "true"
                        }), " 저장됨"]
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:1021",
                    className: "sr-only",
                    htmlFor: d.id,
                    children: [d.title, " 텍스트"]
                }), y.jsx("textarea", {
                    "data-loc": "client/src/pages/Home.tsx:1022",
                    className: "template-content-input",
                    id: d.id,
                    onChange: h => s(d.id, {
                        content: h.target.value
                    }),
                    placeholder: "여기에 텍스트를 입력하세요. 입력 내용은 자동으로 저장됩니다.",
                    value: d.content
                })]
            }, d.id))]
        })]
    })
}

function mD({
    tasks: t,
    statusNow: a,
    onStatusChange: s
}) {
    const l = x.useMemo(() => Kb(new Date(a)), [a]),
        o = mr(new Date(a)),
        [u, d] = x.useState(o);
    x.useEffect(() => {
        l.includes(u) || d(o)
    }, [u, o, l]);
    const h = t.filter(b => Xi(b) === u).sort((b, m) => b.time.localeCompare(m.time)),
        p = t.filter(b => b.completed && l.includes(Xi(b))).length,
        g = Gi(u).toLocaleDateString("ko-KR", {
            month: "long",
            day: "numeric",
            weekday: "long"
        });
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:1060",
        className: "workspace-page",
        "aria-labelledby": "weekly-page-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1061",
            className: "workspace-heading",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1062",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1063",
                    className: "eyebrow",
                    children: "WEEKLY CALENDAR"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:1064",
                    id: "weekly-page-title",
                    children: "이번주 할 일"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1065",
                    children: "오늘 완료한 업무는 오늘 목록에서 사라지고, 이 캘린더의 완료 기록으로 남습니다."
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1067",
                className: "workspace-count",
                children: [y.jsx(Ec, {
                    "data-loc": "client/src/pages/Home.tsx:1067",
                    "aria-hidden": "true",
                    size: 18
                }), " ", p, "개 완료 기록"]
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1070",
            className: "weekly-calendar-shell",
            children: [y.jsxs("section", {
                "data-loc": "client/src/pages/Home.tsx:1071",
                className: "card weekly-calendar-card",
                "aria-label": "이번주 할 일 캘린더",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1072",
                    className: "weekly-calendar-heading",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1073",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1073",
                            className: "card-eyebrow",
                            children: "MONDAY — SUNDAY"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1073",
                            children: "날짜별 업무 흐름"
                        })]
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1074",
                        children: [Gi(l[0]).toLocaleDateString("ko-KR", {
                            month: "long",
                            day: "numeric"
                        }), " — ", Gi(l[6]).toLocaleDateString("ko-KR", {
                            month: "long",
                            day: "numeric"
                        })]
                    })]
                }), y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:1076",
                    className: "weekly-calendar-grid",
                    children: l.map(b => {
                        const m = Gi(b),
                            S = t.filter(R => Xi(R) === b),
                            E = S.filter(R => R.completed).length,
                            A = b === o,
                            O = b === u;
                        return y.jsxs("button", {
                            "data-loc": "client/src/pages/Home.tsx:1084",
                            "aria-label": `${m.toLocaleDateString("ko-KR",{month:"long",day:"numeric",weekday:"long"})} 업무 보기`,
                            className: `weekly-day ${A?"is-today":""} ${O?"is-selected":""}`,
                            onClick: () => d(b),
                            type: "button",
                            children: [y.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:1091",
                                className: "weekly-day-name",
                                children: m.toLocaleDateString("ko-KR", {
                                    weekday: "short"
                                })
                            }), y.jsx("strong", {
                                "data-loc": "client/src/pages/Home.tsx:1092",
                                children: m.getDate()
                            }), y.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:1093",
                                className: "weekly-day-count",
                                children: S.length ? `${E}/${S.length}` : "—"
                            }), y.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:1094",
                                className: "weekly-day-dots",
                                "aria-hidden": "true",
                                children: S.slice(0, 3).map(R => y.jsx("i", {
                                    "data-loc": "client/src/pages/Home.tsx:1094",
                                    className: R.completed ? "is-complete" : ""
                                }, R.id))
                            })]
                        }, b)
                    })
                })]
            }), y.jsxs("section", {
                "data-loc": "client/src/pages/Home.tsx:1101",
                className: "card weekly-detail-card",
                "aria-live": "polite",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1102",
                    className: "weekly-detail-heading",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1103",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1103",
                            className: "card-eyebrow",
                            children: "SELECTED DAY"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1103",
                            children: g
                        })]
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1104",
                        children: [h.length, "개 업무"]
                    })]
                }), y.jsxs("ul", {
                    "data-loc": "client/src/pages/Home.tsx:1106",
                    className: "weekly-task-list",
                    children: [h.map(b => y.jsxs("li", {
                        "data-loc": "client/src/pages/Home.tsx:1108",
                        className: `weekly-task-row ${b.completed?"is-complete":""}`,
                        children: [y.jsx("button", {
                            "data-loc": "client/src/pages/Home.tsx:1109",
                            "aria-label": `${b.text} ${b.completed?"완료 취소":"완료"}`,
                            className: "weekly-task-check",
                            onClick: () => s(b.id, b.completed ? "예정" : "완료"),
                            type: "button",
                            children: b.completed && y.jsx(pl, {
                                "data-loc": "client/src/pages/Home.tsx:1110",
                                "aria-hidden": "true",
                                size: 12,
                                strokeWidth: 3
                            })
                        }), y.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:1112",
                            className: "weekly-task-content",
                            children: [y.jsx("strong", {
                                "data-loc": "client/src/pages/Home.tsx:1112",
                                children: b.text
                            }), y.jsxs("span", {
                                "data-loc": "client/src/pages/Home.tsx:1112",
                                children: [b.time || "시간 미정", " · ", b.completed ? "완료 기록" : "진행 중인 업무"]
                            })]
                        }), y.jsx(xh, {
                            "data-loc": "client/src/pages/Home.tsx:1113",
                            now: a,
                            task: b
                        })]
                    }, b.id)), h.length === 0 && y.jsxs("li", {
                        "data-loc": "client/src/pages/Home.tsx:1116",
                        className: "weekly-empty",
                        children: [y.jsx(Nb, {
                            "data-loc": "client/src/pages/Home.tsx:1116",
                            "aria-hidden": "true",
                            size: 22
                        }), y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1116",
                            children: "선택한 날짜의 업무가 없습니다."
                        })]
                    })]
                })]
            })]
        })]
    })
}

function gD({
    backups: t,
    enabled: a,
    isAuthenticated: s,
    isBusy: l,
    lastBackupAt: o,
    onEnable: u,
    onDisable: d,
    onManual: h,
    onExport: p,
    syncStatus: g,
    onRetrySync: b,
    onUseServerWorkspace: m,
    onKeepLocalWorkspace: S
}) {
    const E = R => R ? new Date(R).toLocaleString("ko-KR", {
            dateStyle: "medium",
            timeStyle: "short"
        }) : "아직 백업 없음",
        A = R => R < 1024 ? `${R} B` : `${(R/1024).toFixed(1)} KB`,
        O = g === "conflict" || g === "error";
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:1158",
        className: `backup-manager ${a?"is-enabled":""}`,
        "aria-labelledby": "backup-manager-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1159",
            className: "backup-manager-heading",
            children: [y.jsx("span", {
                "data-loc": "client/src/pages/Home.tsx:1160",
                className: "backup-manager-icon",
                children: y.jsx(sl, {
                    "data-loc": "client/src/pages/Home.tsx:1160",
                    "aria-hidden": "true",
                    size: 17
                })
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1161",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1162",
                    className: "eyebrow",
                    children: "AUTOMATIC BACKUP"
                }), y.jsx("h4", {
                    "data-loc": "client/src/pages/Home.tsx:1163",
                    id: "backup-manager-title",
                    children: "업무 데이터 자동 백업"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1164",
                    children: a ? "매일 자동 백업하고 최근 30일을 보관합니다." : "로그인 후 자동 백업을 켜면 매일 업무 데이터를 보관합니다."
                })]
            }), y.jsx("span", {
                "data-loc": "client/src/pages/Home.tsx:1166",
                className: `backup-status ${a?"active":""}`,
                children: a ? "활성" : "대기"
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1168",
            className: "backup-summary",
            children: [y.jsx("span", {
                "data-loc": "client/src/pages/Home.tsx:1168",
                children: "최근 백업"
            }), y.jsx("strong", {
                "data-loc": "client/src/pages/Home.tsx:1168",
                children: E(o)
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1169",
            className: "backup-actions",
            children: [y.jsx("button", {
                "data-loc": "client/src/pages/Home.tsx:1170",
                className: a ? "btn-outline" : "btn-primary",
                disabled: l || O,
                onClick: a ? d : u,
                type: "button",
                children: l ? "처리 중" : O ? "동기화 확인 필요" : a ? "자동 백업 끄기" : s ? "자동 백업 켜기" : "로그인 후 설정"
            }), y.jsxs("button", {
                "data-loc": "client/src/pages/Home.tsx:1173",
                className: "btn-outline",
                disabled: l || !s || O,
                onClick: h,
                type: "button",
                children: [y.jsx(sl, {
                    "data-loc": "client/src/pages/Home.tsx:1173",
                    "aria-hidden": "true",
                    size: 14
                }), " 지금 백업"]
            })]
        }), g === "error" && y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1176",
            className: "backup-sync-feedback is-error",
            role: "status",
            children: [y.jsx("span", {
                "data-loc": "client/src/pages/Home.tsx:1177",
                children: "동기화에 실패했습니다. 이 브라우저의 변경 내용은 그대로 보관되어 있습니다."
            }), y.jsx("button", {
                "data-loc": "client/src/pages/Home.tsx:1178",
                onClick: b,
                type: "button",
                children: "다시 시도"
            })]
        }), g === "conflict" && y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1182",
            className: "backup-sync-feedback is-warning",
            role: "alert",
            children: [y.jsx("span", {
                "data-loc": "client/src/pages/Home.tsx:1183",
                children: "다른 기기에서 저장된 작업 공간이 있습니다. 자동으로 덮어쓰지 않았습니다."
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1184",
                children: [y.jsx("button", {
                    "data-loc": "client/src/pages/Home.tsx:1184",
                    onClick: m,
                    type: "button",
                    children: "서버 내용 사용"
                }), y.jsx("button", {
                    "data-loc": "client/src/pages/Home.tsx:1184",
                    onClick: S,
                    type: "button",
                    children: "이 기기 내용 보존"
                })]
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1187",
            className: "backup-history",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1188",
                className: "backup-history-heading",
                children: [y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1188",
                    children: "최근 백업 이력"
                }), y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1188",
                    children: "30일 보관"
                })]
            }), t.length === 0 ? y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:1190",
                className: "backup-empty",
                children: "자동 백업을 켜면 이곳에서 백업 이력을 확인할 수 있습니다."
            }) : t.slice(0, 4).map(R => y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1192",
                className: "backup-history-row",
                children: [y.jsxs("span", {
                    "data-loc": "client/src/pages/Home.tsx:1193",
                    children: [y.jsx("strong", {
                        "data-loc": "client/src/pages/Home.tsx:1193",
                        children: R.trigger === "automatic" ? "자동 백업" : "수동 백업"
                    }), y.jsxs("small", {
                        "data-loc": "client/src/pages/Home.tsx:1193",
                        children: [E(R.createdAt), " · ", A(R.byteSize)]
                    })]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1194",
                    "aria-label": `백업 ${R.id} 내보내기`,
                    onClick: () => p(R.id),
                    type: "button",
                    children: ["내보내기 ", y.jsx(Lf, {
                        "data-loc": "client/src/pages/Home.tsx:1194",
                        "aria-hidden": "true",
                        size: 13
                    })]
                })]
            }, R.id))]
        }), y.jsx("p", {
            "data-loc": "client/src/pages/Home.tsx:1198",
            className: "backup-security-note",
            children: "계정 시트의 비밀번호는 브라우저에만 남으며 서버 동기화와 백업 파일에서 제외됩니다."
        })]
    })
}

function yD({
    open: t,
    profile: a,
    onClose: s,
    onUpdate: l,
    backups: o,
    backupEnabled: u,
    backupBusy: d,
    backupLastAt: h,
    isAuthenticated: p,
    onEnableBackup: g,
    onDisableBackup: b,
    onManualBackup: m,
    onExportBackup: S,
    syncStatus: E,
    onRetrySync: A,
    onUseServerWorkspace: O,
    onKeepLocalWorkspace: R
}) {
    return t ? y.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:1243",
        className: "profile-settings-backdrop",
        onClick: s,
        role: "presentation",
        children: y.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:1244",
            "aria-labelledby": "profile-settings-title",
            "aria-modal": "true",
            className: "profile-settings-dialog",
            onClick: N => N.stopPropagation(),
            role: "dialog",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1245",
                className: "editor-sheet-heading",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1246",
                    children: [y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1247",
                        className: "eyebrow",
                        children: "PROFILE SETTINGS"
                    }), y.jsx("h3", {
                        "data-loc": "client/src/pages/Home.tsx:1248",
                        id: "profile-settings-title",
                        children: "프로필 설정"
                    })]
                }), y.jsx("button", {
                    "data-loc": "client/src/pages/Home.tsx:1250",
                    "aria-label": "프로필 설정 닫기",
                    className: "icon-action",
                    onClick: s,
                    type: "button",
                    children: y.jsx(Ub, {
                        "data-loc": "client/src/pages/Home.tsx:1250",
                        "aria-hidden": "true",
                        size: 17
                    })
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1252",
                className: "profile-edit-preview",
                children: [y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1252",
                    children: a.initials || a.name.slice(0, 1) || "?"
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1252",
                    children: [y.jsx("strong", {
                        "data-loc": "client/src/pages/Home.tsx:1252",
                        children: a.name || "이름을 입력하세요"
                    }), y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1252",
                        children: a.role || "역할을 입력하세요"
                    })]
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1253",
                className: "profile-edit-form",
                children: [y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:1254",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1254",
                        children: "이름"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:1254",
                        onChange: N => l({
                            name: N.target.value
                        }),
                        value: a.name
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:1255",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1255",
                        children: "역할"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:1255",
                        onChange: N => l({
                            role: N.target.value
                        }),
                        value: a.role
                    })]
                }), y.jsxs("label", {
                    "data-loc": "client/src/pages/Home.tsx:1256",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1256",
                        children: "프로필 이니셜"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:1256",
                        maxLength: 2,
                        onChange: N => l({
                            initials: N.target.value
                        }),
                        value: a.initials
                    })]
                })]
            }), y.jsx(gD, {
                "data-loc": "client/src/pages/Home.tsx:1258",
                backups: o,
                enabled: u,
                isAuthenticated: p,
                isBusy: d,
                lastBackupAt: h,
                onDisable: b,
                onEnable: g,
                onExport: S,
                onKeepLocalWorkspace: R,
                onManual: m,
                onRetrySync: A,
                onUseServerWorkspace: O,
                syncStatus: E
            }), y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:1259",
                className: "editor-actions",
                children: y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1259",
                    className: "btn-primary",
                    onClick: s,
                    type: "button",
                    children: [y.jsx(sl, {
                        "data-loc": "client/src/pages/Home.tsx:1259",
                        "aria-hidden": "true",
                        size: 15
                    }), " 변경 완료"]
                })
            })]
        })
    }) : null
}

function vD({
    tasks: t,
    recurringTasks: a
}) {
    const s = t.filter(o => o.completed).length,
        l = Math.round(s / Math.max(t.length, 1) * 100);
    return y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:1270",
        className: "workspace-page",
        "aria-labelledby": "progress-page-title",
        children: [y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1271",
            className: "workspace-heading",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1272",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1273",
                    className: "eyebrow",
                    children: "WEEKLY RHYTHM"
                }), y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:1274",
                    id: "progress-page-title",
                    children: "이번주 진행률"
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1275",
                    children: "오늘의 할 일 완료 흐름과 반복 업무 상태를 함께 살펴봅니다."
                })]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1277",
                className: "workspace-count",
                children: [y.jsx(oh, {
                    "data-loc": "client/src/pages/Home.tsx:1277",
                    "aria-hidden": "true",
                    size: 18
                }), " ", l, "% 완료"]
            })]
        }), y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:1280",
            className: "progress-workspace-grid",
            children: [y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1281",
                className: "progress-detail-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1282",
                    className: "progress-detail-copy",
                    children: [y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1283",
                        className: "card-eyebrow",
                        children: "TODAY'S COMPLETION"
                    }), y.jsxs("h3", {
                        "data-loc": "client/src/pages/Home.tsx:1284",
                        children: [y.jsxs("strong", {
                            "data-loc": "client/src/pages/Home.tsx:1284",
                            children: [l, "%"]
                        }), " 오늘의 완료 흐름"]
                    }), y.jsxs("p", {
                        "data-loc": "client/src/pages/Home.tsx:1285",
                        children: [s, "개를 완료했고 ", t.length - s, "개가 남아 있습니다."]
                    }), y.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:1286",
                        className: "progress-bar",
                        "aria-label": `오늘의 진행률 ${l}%`,
                        role: "progressbar",
                        "aria-valuemax": 100,
                        "aria-valuemin": 0,
                        "aria-valuenow": l,
                        children: y.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:1287",
                            className: "progress-fill",
                            style: {
                                width: `${l}%`
                            }
                        })
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1290",
                    className: "progress-detail-orbit",
                    "aria-hidden": "true",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1290"
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1290"
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1290"
                    })]
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1293",
                className: "card progress-status-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1294",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1295",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1296",
                            className: "card-eyebrow",
                            children: "RECURRING STATUS"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1297",
                            className: "card-title",
                            children: "반복 업무 상태"
                        })]
                    }), y.jsx(mC, {
                        "data-loc": "client/src/pages/Home.tsx:1299",
                        "aria-hidden": "true",
                        size: 19
                    })]
                }), y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:1301",
                    className: "progress-status-list",
                    children: Object.keys(Qr).map(o => {
                        const u = a.filter(d => d.status === o).length;
                        return y.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:1305",
                            className: "progress-status-row",
                            children: [y.jsxs("span", {
                                "data-loc": "client/src/pages/Home.tsx:1306",
                                children: [y.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:1306",
                                    className: `regular-status regular-status--${Qr[o]}`,
                                    "aria-hidden": "true"
                                }), " ", o]
                            }), y.jsx("strong", {
                                "data-loc": "client/src/pages/Home.tsx:1307",
                                children: u
                            })]
                        }, o)
                    })
                })]
            })]
        })]
    })
}

function bD({
    tasks: t,
    recurringTasks: a,
    templates: s,
    accounts: l,
    greeting: o,
    onNavigate: u,
    onAddTask: d,
    onToggleTask: h,
    onUpdateTask: p,
    onGreetingChange: g,
    statusNow: b
}) {
    const m = mr(new Date(b)),
        S = t.filter(G => G.scheduledDate === m),
        E = S.filter(G => !G.completed),
        A = S.filter(G => G.completed).length,
        O = Math.round(A / Math.max(S.length, 1) * 100),
        R = t.filter(G => G.completed && Kb(new Date(b)).includes(Xi(G))),
        [N, Y] = x.useState(""),
        [K, Z] = x.useState(""),
        [B, L] = x.useState(!1),
        [T, _] = x.useState(o),
        F = G => {
            G.preventDefault();
            const te = N.trim();
            if (!te) {
                Ge.error("추가할 업무명을 입력해 주세요.");
                return
            }
            d({
                id: _c("task"),
                text: te,
                time: K,
                completed: !1,
                status: "예정",
                scheduledDate: mr(new Date)
            }), Y(""), Z("")
        },
        $ = () => {
            const G = T.trim();
            if (!G) {
                _(o), L(!1), Ge.error("인사말은 비워둘 수 없습니다.");
                return
            }
            g(G), L(!1)
        };
    return y.jsxs(y.Fragment, {
        children: [y.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:1382",
            className: "welcome",
            "aria-labelledby": "welcome-title",
            children: [y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:1383",
                className: "eyebrow",
                children: "FRIDAY / JULY 24"
            }), B ? y.jsx("input", {
                "data-loc": "client/src/pages/Home.tsx:1385",
                "aria-label": "메인 인사말 수정",
                autoFocus: !0,
                className: "welcome-title-input",
                id: "welcome-title",
                onBlur: $,
                onChange: G => _(G.target.value),
                onKeyDown: G => {
                    G.key === "Enter" && (G.preventDefault(), $()), G.key === "Escape" && (G.preventDefault(), _(o), L(!1))
                },
                value: T
            }) : y.jsx("button", {
                "data-loc": "client/src/pages/Home.tsx:1399",
                className: "welcome-title-editable",
                id: "welcome-title",
                onClick: () => {
                    _(o), L(!0)
                },
                type: "button",
                children: o
            }), y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:1401",
                children: "우선순위가 높은 업무부터 하나씩 완료하면, 이번 주 목표에 더 가까워집니다."
            })]
        }), y.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:1404",
            className: "mission-strip",
            "aria-label": "오늘의 작업 현황",
            children: [y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1405",
                className: "mission-copy",
                children: [y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1406",
                    className: "mission-kicker",
                    children: "TODAY'S SIGNAL"
                }), y.jsx("h3", {
                    "data-loc": "client/src/pages/Home.tsx:1407",
                    children: "다음 한 가지에 집중할 시간입니다."
                }), y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1408",
                    children: "클라이언트 피드백 반영 사항을 점검하면 오늘의 주요 흐름이 마무리됩니다."
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1409",
                    className: "btn-primary",
                    onClick: () => u("todos"),
                    type: "button",
                    children: ["업무 관리하기 ", y.jsx(Lf, {
                        "data-loc": "client/src/pages/Home.tsx:1410",
                        "aria-hidden": "true",
                        size: 15
                    })]
                })]
            }), y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:1413",
                className: "mission-orbit",
                "aria-hidden": "true"
            }), y.jsx("img", {
                "data-loc": "client/src/pages/Home.tsx:1414",
                className: "mission-art",
                src: "./assets/workflow-orbit-hero_ae0da875.png",
                alt: ""
            })]
        }), y.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:1417",
            className: "dashboard-grid",
            "aria-label": "오늘의 업무 현황",
            children: [y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1418",
                className: "card todo-card dashboard-todo-card",
                children: [y.jsx("img", {
                    "data-loc": "client/src/pages/Home.tsx:1419",
                    className: "todo-visual",
                    src: "./assets/priority-signal_ad42c5cd.png",
                    alt: ""
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1420",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1421",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1422",
                            className: "card-eyebrow",
                            children: "FOCUS LIST"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1423",
                            className: "card-title",
                            children: "오늘의 할 일"
                        })]
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:1425",
                        className: "card-more",
                        onClick: () => u("todos"),
                        type: "button",
                        children: "전체 관리"
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1427",
                    className: "summary-todo-list",
                    children: [E.slice(0, 5).map(G => y.jsx(dD, {
                        "data-loc": "client/src/pages/Home.tsx:1429",
                        onToggle: h,
                        onUpdate: p,
                        statusNow: b,
                        task: G
                    }, G.id)), E.length === 0 && y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1431",
                        className: "todo-empty",
                        children: "오늘 남은 업무가 없습니다. 완료 기록은 이번주 할 일에서 확인하세요."
                    })]
                }), y.jsxs("form", {
                    "data-loc": "client/src/pages/Home.tsx:1433",
                    className: "summary-quick-add",
                    onSubmit: F,
                    children: [y.jsx("label", {
                        "data-loc": "client/src/pages/Home.tsx:1434",
                        className: "sr-only",
                        htmlFor: "main-quick-task",
                        children: "메인 화면 새 업무"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:1435",
                        id: "main-quick-task",
                        onChange: G => Y(G.target.value),
                        placeholder: "새 할 일 추가",
                        value: N
                    }), y.jsx("label", {
                        "data-loc": "client/src/pages/Home.tsx:1441",
                        className: "sr-only",
                        htmlFor: "main-quick-task-time",
                        children: "예정 시간"
                    }), y.jsx("input", {
                        "data-loc": "client/src/pages/Home.tsx:1442",
                        id: "main-quick-task-time",
                        onChange: G => Z(G.target.value),
                        type: "time",
                        value: K
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:1443",
                        "aria-label": "메인 화면 할 일 추가",
                        type: "submit",
                        children: y.jsx(qr, {
                            "data-loc": "client/src/pages/Home.tsx:1443",
                            "aria-hidden": "true",
                            size: 15
                        })
                    })]
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1447",
                className: "card progress-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1448",
                    className: "progress-rings",
                    "aria-hidden": "true",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1448"
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1448"
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1448"
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1449",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1450",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1451",
                            className: "card-eyebrow",
                            children: "WEEKLY RHYTHM"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1452",
                            className: "card-title",
                            children: "이번 주 진행률"
                        })]
                    }), y.jsx(oh, {
                        "data-loc": "client/src/pages/Home.tsx:1454",
                        "aria-hidden": "true",
                        size: 20
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1456",
                    className: "progress-number",
                    children: [y.jsxs("strong", {
                        "data-loc": "client/src/pages/Home.tsx:1456",
                        children: [O, "%"]
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1456",
                        children: "완료"
                    })]
                }), y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:1457",
                    className: "progress-bar",
                    "aria-label": `이번 주 진행률 ${O}%`,
                    role: "progressbar",
                    "aria-valuemax": 100,
                    "aria-valuemin": 0,
                    "aria-valuenow": O,
                    children: y.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:1458",
                        className: "progress-fill",
                        style: {
                            width: `${O}%`
                        }
                    })
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1460",
                    className: "progress-label",
                    children: [y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1460",
                        children: [A, "개 완료"]
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1460",
                        children: [t.length - A, "개 남음"]
                    })]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1461",
                    className: "progress-insight progress-insight--button",
                    onClick: () => u("progress"),
                    type: "button",
                    children: [y.jsx(pC, {
                        "data-loc": "client/src/pages/Home.tsx:1461",
                        "aria-hidden": "true",
                        size: 15
                    }), " 상세 진행률 보기"]
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1464",
                className: "card account-card weekly-overview-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1465",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1466",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1466",
                            className: "card-eyebrow",
                            children: "WEEKLY CALENDAR"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1466",
                            className: "card-title",
                            children: "이번주 할 일"
                        })]
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:1467",
                        className: "icon-action",
                        onClick: () => u("accounts"),
                        type: "button",
                        "aria-label": "이번주 할 일 보기",
                        children: y.jsx(Ec, {
                            "data-loc": "client/src/pages/Home.tsx:1467",
                            "aria-hidden": "true",
                            size: 17
                        })
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1469",
                    className: "weekly-overview-list",
                    children: [R.slice(-3).reverse().map(G => y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:1471",
                        className: "weekly-overview-item",
                        onClick: () => u("accounts"),
                        type: "button",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1472",
                            className: "weekly-overview-check",
                            children: y.jsx(pl, {
                                "data-loc": "client/src/pages/Home.tsx:1472",
                                "aria-hidden": "true",
                                size: 12,
                                strokeWidth: 3
                            })
                        }), y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1473",
                            children: G.text
                        }), y.jsx("time", {
                            "data-loc": "client/src/pages/Home.tsx:1474",
                            children: Gi(Xi(G)).toLocaleDateString("ko-KR", {
                                month: "numeric",
                                day: "numeric"
                            })
                        })]
                    }, G.id)), R.length === 0 && y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1477",
                        className: "weekly-overview-empty",
                        children: "이번 주 완료 기록이 아직 없습니다."
                    })]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1479",
                    className: "weekly-overview-link",
                    onClick: () => u("accounts"),
                    type: "button",
                    children: ["이번주 캘린더 열기 ", y.jsx(Lf, {
                        "data-loc": "client/src/pages/Home.tsx:1479",
                        "aria-hidden": "true",
                        size: 14
                    })]
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1482",
                className: "card prompt-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1483",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1484",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1484",
                            className: "card-eyebrow",
                            children: "REUSABLE COPY"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1484",
                            className: "card-title",
                            children: "프롬프트 템플릿"
                        })]
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:1485",
                        className: "card-more",
                        onClick: () => u("templates"),
                        type: "button",
                        children: "편집"
                    })]
                }), y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:1487",
                    className: "prompt-list",
                    children: s.slice(0, 3).map(G => y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:1489",
                        className: "prompt-item",
                        onClick: () => u("templates"),
                        type: "button",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1490",
                            className: "prompt-name",
                            children: G.title
                        }), y.jsx(fC, {
                            "data-loc": "client/src/pages/Home.tsx:1491",
                            "aria-hidden": "true",
                            size: 16
                        })]
                    }, G.id))
                })]
            }), y.jsxs("article", {
                "data-loc": "client/src/pages/Home.tsx:1497",
                className: "card regular-card",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1498",
                    className: "card-header",
                    children: [y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1499",
                        children: [y.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:1499",
                            className: "card-eyebrow",
                            children: "CADENCE"
                        }), y.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:1499",
                            className: "card-title",
                            children: "반복 업무"
                        })]
                    }), y.jsx("button", {
                        "data-loc": "client/src/pages/Home.tsx:1500",
                        className: "card-more",
                        onClick: () => u("recurring"),
                        type: "button",
                        children: "관리"
                    })]
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1502",
                    className: "regular-list",
                    children: [a.slice(0, 3).map(G => y.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:1504",
                        className: "regular-item",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1505",
                            className: `regular-status regular-status--${Qr[G.status]}`,
                            "aria-hidden": "true"
                        }), y.jsxs("span", {
                            "data-loc": "client/src/pages/Home.tsx:1506",
                            className: "regular-content",
                            children: [y.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:1506",
                                className: "regular-name",
                                children: G.name
                            }), y.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:1506",
                                className: "regular-date",
                                children: G.detail || "업무 내용 미입력"
                            })]
                        }), y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1507",
                            className: `status status-${Qr[G.status]}`,
                            children: G.status
                        })]
                    }, G.id)), a.length === 0 && y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:1510",
                        className: "todo-empty",
                        children: "등록된 반복 업무가 없습니다."
                    })]
                })]
            })]
        })]
    })
}

function xD() {
    const [t, a] = x.useState(() => {
        const ae = ir(nt.activePage, "main"),
            Se = typeof window > "u" ? null : new URLSearchParams(window.location.search).get("page");
        return Se && Se in uf ? Se : ae in uf ? ae : "main"
    }), [s, l] = x.useState(() => zv(ir(nt.tasks, WR))), [o, u] = x.useState(() => ir(nt.regularTasks, eD)), [d, h] = x.useState(() => bv(ir(nt.templates, tD))), [p, g] = x.useState(() => ir(nt.accounts, nD)), [b, m] = x.useState(() => ir(nt.profile, aD)), [S, E] = x.useState(() => ir(nt.greeting, rD)), [A, O] = x.useState(!1), [R, N] = x.useState(""), [Y, K] = x.useState(() => Date.now()), [Z, B] = x.useState(!1), [L, T] = x.useState("idle"), [_, F] = x.useState(null), $ = x.useRef(lD()), G = x.useRef(iD()), te = x.useRef(!1), le = x.useRef(null), ne = x.useRef(null), se = mr(new Date(Y)), j = x.useMemo(() => s.filter(ae => ae.scheduledDate === se && !ae.completed), [s, se]), {
        isAuthenticated: H
    } = FC(), z = jt.workspace.get.useQuery(void 0, {
        enabled: H,
        retry: !1
    }), oe = jt.workspace.sync.useMutation(), de = jt.backups.getSettings.useQuery(void 0, {
        enabled: H,
        retry: !1
    }), C = jt.backups.list.useQuery(void 0, {
        enabled: H,
        retry: !1
    }), P = jt.useUtils(), U = jt.taskAlerts.getSettings.useQuery(void 0, {
        enabled: H,
        retry: !1
    }), I = jt.useUtils(), ie = jt.taskAlerts.syncTasks.useMutation(), ce = jt.taskAlerts.enable.useMutation({
        onSuccess: async () => {
            await I.taskAlerts.getSettings.invalidate(), Ge.success("백그라운드 예정 시간 알림을 켰습니다.")
        },
        onError: () => Ge.error("알림 설정에 실패했습니다. 배포된 사이트에서 다시 시도해 주세요.")
    }), ue = jt.taskAlerts.disable.useMutation({
        onSuccess: async () => {
            await I.taskAlerts.getSettings.invalidate(), Ge.success("백그라운드 예정 시간 알림을 껐습니다.")
        },
        onError: () => Ge.error("알림 해제에 실패했습니다.")
    }), ve = jt.backups.enableAutomatic.useMutation({
        onSuccess: async () => {
            await Promise.all([P.backups.getSettings.invalidate(), P.backups.list.invalidate()]), Ge.success("매일 자동 백업과 30일 보관을 시작했습니다.")
        },
        onError: () => Ge.error("자동 백업 설정에 실패했습니다. 배포된 사이트에서 다시 시도해 주세요.")
    }), Oe = jt.backups.disableAutomatic.useMutation({
        onSuccess: async () => {
            await P.backups.getSettings.invalidate(), Ge.success("자동 백업을 중지했습니다.")
        },
        onError: () => Ge.error("자동 백업 해제에 실패했습니다.")
    }), Ee = jt.backups.createManual.useMutation({
        onSuccess: async () => {
            await Promise.all([P.backups.getSettings.invalidate(), P.backups.list.invalidate()]), Ge.success("현재 작업 공간을 백업했습니다.")
        },
        onError: () => Ge.error("수동 백업 생성에 실패했습니다.")
    }), it = jt.backups.exportUrl.useMutation({
        onSuccess: ({
            url: ae
        }) => {
            window.location.assign(ae)
        },
        onError: () => Ge.error("백업 내보내기 주소를 만들지 못했습니다.")
    });
    x.useEffect(() => Ln(nt.activePage, t), [t]), x.useEffect(() => Ln(nt.tasks, s), [s]), x.useEffect(() => Ln(nt.regularTasks, o), [o]), x.useEffect(() => Ln(nt.templates, d), [d]), x.useEffect(() => Ln(nt.accounts, p), [p]), x.useEffect(() => Ln(nt.profile, b), [b]), x.useEffect(() => Ln(nt.greeting, S), [S]);
    const je = x.useMemo(() => ({
            tasks: s,
            recurringTasks: o,
            templates: d,
            accounts: p.map(({
                password: ae,
                ...Se
            }) => Se),
            profile: b,
            greeting: S
        }), [s, o, d, p, b, S]),
        vt = x.useCallback(ae => {
            te.current = !0, l(zv(ae.tasks)), u(ae.recurringTasks), h(bv(ae.templates)), g(sD(ae.accounts, p)), m(ae.profile), E(ae.greeting)
        }, [p]);
    x.useEffect(() => {
        const ae = JSON.stringify(je);
        if (le.current === null) {
            le.current = ae;
            return
        }!Z && ae !== le.current && (G.current = !0, $.current = {
            ...$.current,
            localUpdatedAt: new Date().toISOString()
        }, Ln(nt.workspaceSyncMeta, $.current))
    }, [je, Z]), x.useEffect(() => {
        if (!H || !z.isFetched || Z) return;
        if (z.isError) {
            T("error");
            return
        }
        const ae = z.data;
        if (!ae) {
            T("idle"), B(!0);
            return
        }
        const Se = new Date(ae.updatedAt).toISOString();
        if (G.current && (!$.current.lastSyncedAt || ($.current.localUpdatedAt ?? "") > $.current.lastSyncedAt) && $.current.serverUpdatedAt !== Se) {
            F({
                payload: ae.payload,
                updatedAt: ae.updatedAt
            }), T("conflict"), B(!0);
            return
        }
        vt(ae.payload), $.current = {
            serverUpdatedAt: Se,
            lastSyncedAt: Se,
            localUpdatedAt: Se
        }, ne.current = JSON.stringify(ae.payload), Ln(nt.workspaceSyncMeta, $.current), T("idle"), B(!0)
    }, [H, z.isFetched, z.isError, z.data, Z, vt]), x.useEffect(() => {
        if (!Z) return;
        if (te.current) {
            te.current = !1;
            return
        }
        const ae = new Date().toISOString();
        $.current = {
            ...$.current,
            localUpdatedAt: ae
        }, Ln(nt.workspaceSyncMeta, $.current)
    }, [je, Z]);
    const tt = x.useCallback((ae = !1) => {
        if (!H || oe.isPending) return;
        const Se = JSON.stringify(je);
        T("syncing"), oe.mutate({
            ...je,
            baseUpdatedAt: $.current.serverUpdatedAt,
            overwriteServer: ae
        }, {
            onSuccess: Re => {
                if (Re.status === "conflict") {
                    F({
                        payload: Re.payload,
                        updatedAt: Re.updatedAt
                    }), T("conflict");
                    return
                }
                const xe = new Date(Re.updatedAt).toISOString();
                $.current = {
                    serverUpdatedAt: xe,
                    lastSyncedAt: xe,
                    localUpdatedAt: xe
                }, ne.current = Se, Ln(nt.workspaceSyncMeta, $.current), T("idle")
            },
            onError: () => T("error")
        })
    }, [H, je, oe]);
    x.useEffect(() => {
        if (!H || !Z || _ || L !== "idle" || ne.current === JSON.stringify(je)) return;
        const ae = window.setTimeout(() => {
            tt()
        }, 700);
        return () => window.clearTimeout(ae)
    }, [H, Z, je, _, L, tt]);
    const $t = () => {
            if (!_) return;
            const ae = new Date(_.updatedAt).toISOString();
            vt(_.payload), $.current = {
                serverUpdatedAt: ae,
                lastSyncedAt: ae,
                localUpdatedAt: ae
            }, ne.current = JSON.stringify(_.payload), Ln(nt.workspaceSyncMeta, $.current), F(null), T("idle")
        },
        Vt = () => {
            _ && ($.current = {
                ...$.current,
                serverUpdatedAt: new Date(_.updatedAt).toISOString()
            }, F(null), tt(!0))
        },
        wn = () => {
            if (H) {
                if (z.isError || !Z) {
                    T("idle"), z.refetch();
                    return
                }
                tt()
            }
        };
    x.useEffect(() => {
        const ae = window.setInterval(() => K(Date.now()), 6e4);
        return () => window.clearInterval(ae)
    }, []), x.useEffect(() => {
        !H || !U.data?.enabled || ie.mutate({
            tasks: s.map(ae => ({
                id: ae.id,
                text: ae.text,
                time: ae.time,
                completed: ae.completed
            })),
            recurringTasks: o.map(ae => ({
                id: ae.id,
                name: ae.name,
                detail: ae.detail,
                status: ae.status
            }))
        })
    }, [s, o, H, U.data?.enabled]);
    const In = () => {
            if (!H) {
                Ge.info("알림 설정을 위해 로그인합니다."), ec();
                return
            }
            if (typeof window < "u" && window.location.hostname.endsWith("manus.computer")) {
                Ge.info("백그라운드 알림은 배포 후 활성화할 수 있습니다.");
                return
            }
            ce.mutate({
                tasks: s.map(ae => ({
                    id: ae.id,
                    text: ae.text,
                    time: ae.time,
                    completed: ae.completed
                })),
                recurringTasks: o.map(ae => ({
                    id: ae.id,
                    name: ae.name,
                    detail: ae.detail,
                    status: ae.status
                }))
            })
        },
        Et = () => ue.mutate(),
        Nt = ae => {
            if (!H) {
                Ge.info("자동 백업을 설정하려면 먼저 로그인합니다."), ec();
                return
            }
            if (typeof window < "u" && window.location.hostname.endsWith("manus.computer")) {
                Ge.info("자동 백업은 배포된 사이트에서 활성화할 수 있습니다.");
                return
            }
            ae()
        },
        En = () => Nt(() => ve.mutate(je)),
        ut = () => Nt(() => Ee.mutate(je)),
        on = () => Oe.mutate(),
        ct = ae => {
            a(ae), ae !== "todos" && N("")
        },
        Na = ae => {
            l(Se => Se.map(Re => Re.id === ae ? {
                ...Re,
                completed: !Re.completed,
                status: Re.completed ? "진행중" : Re.status,
                completedAt: Re.completed ? void 0 : new Date().toISOString()
            } : Re))
        },
        On = ae => {
            l(Se => [...Se, ae]), Ge.success("오늘의 할 일에 추가했습니다.")
        },
        Ft = (ae, Se) => {
            l(Re => Re.map(xe => xe.id === ae ? {
                ...xe,
                ...Se
            } : xe)), Ge.success("업무 내용을 저장했습니다.")
        },
        Ht = (ae, Se) => {
            l(Re => Re.map(xe => xe.id === ae ? {
                ...xe,
                completed: Se === "완료",
                status: Se === "완료" ? xe.status : Se,
                completedAt: Se === "완료" ? xe.completedAt || new Date().toISOString() : void 0
            } : xe))
        },
        cn = ae => {
            l(Se => Se.filter(Re => Re.id !== ae)), Ge.success("업무를 삭제했습니다.")
        },
        Jt = (ae, Se) => {
            const Re = s.find(xe => xe.id === ae);
            l(xe => {
                const Je = xe.findIndex(_e => _e.id === ae),
                    ge = xe.findIndex(_e => _e.id === Se);
                return Je < 0 || ge < 0 ? xe : bh(xe, Je, ge)
            }), Re && Ge.success(`“${Re.text}”의 우선순위를 변경했습니다.`)
        },
        Kt = ae => {
            u(Se => [...Se, ae]), Ge.success("반복 업무를 추가했습니다.")
        },
        un = (ae, Se) => {
            u(Re => Re.map(xe => xe.id === ae ? {
                ...xe,
                ...Se
            } : xe))
        },
        qn = ae => {
            u(Se => Se.filter(Re => Re.id !== ae)), Ge.success("반복 업무를 삭제했습니다.")
        },
        Ot = ae => {
            h(Se => [...Se, ae]), Ge.success(`“${ae.title}” 템플릿을 추가했습니다.`)
        },
        zt = (ae, Se) => {
            h(Re => Re.map(xe => xe.id === ae ? {
                ...xe,
                ...Se
            } : xe))
        },
        pt = ae => {
            m(Se => ({
                ...Se,
                ...ae
            }))
        },
        vr = () => {
            switch (t) {
                case "todos":
                    return y.jsx(fD, {
                        "data-loc": "client/src/pages/Home.tsx:1873",
                        alertsEnabled: U.data?.enabled ?? !1,
                        alertsPending: ce.isPending || ue.isPending,
                        isAuthenticated: H,
                        onAdd: On,
                        onDelete: cn,
                        onDisableAlerts: Et,
                        onEnableAlerts: In,
                        onQueryChange: N,
                        onReorder: Jt,
                        onStatusChange: Ht,
                        onToggle: Na,
                        onUpdate: Ft,
                        query: R,
                        statusNow: Y,
                        tasks: j
                    });
                case "recurring":
                    return y.jsx(hD, {
                        "data-loc": "client/src/pages/Home.tsx:1875",
                        onAdd: Kt,
                        onDelete: qn,
                        onUpdate: un,
                        tasks: o
                    });
                case "templates":
                    return y.jsx(pD, {
                        "data-loc": "client/src/pages/Home.tsx:1877",
                        onAdd: Ot,
                        onUpdate: zt,
                        templates: d
                    });
                case "accounts":
                    return y.jsx(mD, {
                        "data-loc": "client/src/pages/Home.tsx:1879",
                        onStatusChange: Ht,
                        statusNow: Y,
                        tasks: s
                    });
                case "progress":
                    return y.jsx(vD, {
                        "data-loc": "client/src/pages/Home.tsx:1881",
                        recurringTasks: o,
                        tasks: s
                    });
                default:
                    return y.jsx(bD, {
                        "data-loc": "client/src/pages/Home.tsx:1883",
                        accounts: p,
                        greeting: S,
                        onAddTask: On,
                        onGreetingChange: E,
                        onNavigate: ct,
                        onToggleTask: Na,
                        onUpdateTask: Ft,
                        recurringTasks: o,
                        statusNow: Y,
                        tasks: s,
                        templates: d
                    })
            }
        },
        $n = new Date(Y).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        });
    return y.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:1895",
        className: "workflow-container",
        children: [y.jsxs("aside", {
            "data-loc": "client/src/pages/Home.tsx:1896",
            className: "sidebar",
            "aria-label": "주요 탐색 메뉴",
            children: [y.jsxs("button", {
                "data-loc": "client/src/pages/Home.tsx:1897",
                className: "logo",
                type: "button",
                onClick: () => ct("main"),
                "aria-label": "Flowmark 메인화면으로 이동",
                children: [y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1898",
                    className: "logo-icon",
                    children: y.jsx("img", {
                        "data-loc": "client/src/pages/Home.tsx:1898",
                        src: "./assets/flowmark-logo_67f8e5cd.png",
                        alt: ""
                    })
                }), y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:1899",
                    className: "logo-text",
                    children: "flowmark"
                })]
            }), y.jsxs("nav", {
                "data-loc": "client/src/pages/Home.tsx:1902",
                className: "sidebar-menu",
                children: [y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:1903",
                    className: "menu-title",
                    children: "WORKSPACE"
                }), FR.map(({
                    id: ae,
                    label: Se,
                    icon: Re
                }) => y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1905",
                    className: `menu-item ${t===ae?"active":""}`,
                    onClick: () => ct(ae),
                    title: Se,
                    type: "button",
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1912",
                        className: "menu-icon",
                        children: y.jsx(Re, {
                            "data-loc": "client/src/pages/Home.tsx:1912",
                            "aria-hidden": "true",
                            size: 18,
                            strokeWidth: 2.1
                        })
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1913",
                        className: "menu-label",
                        children: Se
                    })]
                }, ae))]
            }), y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:1918",
                className: "sidebar-bottom",
                children: [y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1919",
                    className: "rail-note",
                    children: [y.jsx(EC, {
                        "data-loc": "client/src/pages/Home.tsx:1919",
                        "aria-hidden": "true",
                        size: 15
                    }), y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1919",
                        children: H ? L === "error" ? "동기화 확인이 필요합니다. 프로필 설정에서 다시 시도하세요." : Z ? "변경 내용이 계정에 안전하게 동기화됩니다." : "계정 작업 공간을 안전하게 확인하고 있습니다." : "로그인하면 데이터가 자동 백업됩니다."
                    })]
                }), y.jsxs("button", {
                    "data-loc": "client/src/pages/Home.tsx:1920",
                    className: "profile",
                    type: "button",
                    onClick: () => O(!0),
                    children: [y.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:1921",
                        className: "profile-image",
                        "aria-hidden": "true",
                        children: b.initials || b.name.slice(0, 1) || "?"
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1922",
                        className: "profile-info",
                        children: [y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1922",
                            className: "profile-name",
                            children: b.name || "이름 미입력"
                        }), y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1922",
                            className: "profile-role",
                            children: b.role || "역할 미입력"
                        })]
                    })]
                })]
            })]
        }), y.jsxs("main", {
            "data-loc": "client/src/pages/Home.tsx:1927",
            className: "main",
            children: [y.jsxs("header", {
                "data-loc": "client/src/pages/Home.tsx:1928",
                className: "header",
                children: [y.jsx("h1", {
                    "data-loc": "client/src/pages/Home.tsx:1929",
                    className: "page-title",
                    children: uf[t].title
                }), y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:1930",
                    className: "header-right",
                    children: [y.jsxs("label", {
                        "data-loc": "client/src/pages/Home.tsx:1931",
                        className: "search-box",
                        "aria-label": "오늘의 할 일 검색",
                        children: [y.jsx(zb, {
                            "data-loc": "client/src/pages/Home.tsx:1932",
                            className: "search-icon",
                            "aria-hidden": "true",
                            size: 15
                        }), y.jsx("input", {
                            "data-loc": "client/src/pages/Home.tsx:1933",
                            onChange: ae => {
                                N(ae.target.value), ae.target.value && t !== "todos" && ct("todos")
                            },
                            placeholder: "업무 검색",
                            type: "search",
                            value: R
                        })]
                    }), y.jsxs("span", {
                        "data-loc": "client/src/pages/Home.tsx:1940",
                        className: "header-date",
                        children: [y.jsx(Ec, {
                            "data-loc": "client/src/pages/Home.tsx:1940",
                            "aria-hidden": "true",
                            size: 14
                        }), " ", $n]
                    }), y.jsxs("button", {
                        "data-loc": "client/src/pages/Home.tsx:1941",
                        className: "notification",
                        onClick: () => Ge.info("새로운 알림은 없습니다."),
                        type: "button",
                        "aria-label": "알림 확인",
                        children: [y.jsx(dC, {
                            "data-loc": "client/src/pages/Home.tsx:1941",
                            "aria-hidden": "true",
                            size: 18
                        }), y.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:1941",
                            className: "notification-dot",
                            "aria-hidden": "true"
                        })]
                    })]
                })]
            }), y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:1945",
                className: "content",
                children: vr()
            })]
        }), y.jsx(yD, {
            "data-loc": "client/src/pages/Home.tsx:1947",
            backupBusy: ve.isPending || Oe.isPending || Ee.isPending || it.isPending,
            backupEnabled: de.data?.enabled ?? !1,
            backupLastAt: de.data?.lastBackupAt ?? null,
            backups: C.data ?? [],
            isAuthenticated: H,
            onClose: () => O(!1),
            onDisableBackup: on,
            onEnableBackup: En,
            onExportBackup: ae => it.mutate({
                backupId: ae
            }),
            onKeepLocalWorkspace: Vt,
            onManualBackup: ut,
            onRetrySync: wn,
            onUpdate: pt,
            onUseServerWorkspace: $t,
            open: A,
            profile: b,
            syncStatus: L
        })]
    })
}

function SD() {
    return y.jsxs(XC, {
        "data-loc": "client/src/App.tsx:12",
        children: [y.jsx(rf, {
            "data-loc": "client/src/App.tsx:13",
            path: "/",
            component: xD
        }), y.jsx(rf, {
            "data-loc": "client/src/App.tsx:14",
            path: "/404",
            component: vv
        }), y.jsx(rf, {
            "data-loc": "client/src/App.tsx:16",
            component: vv
        })]
    })
}

function wD() {
    return y.jsx(ZC, {
        "data-loc": "client/src/App.tsx:28",
        children: y.jsx($C, {
            "data-loc": "client/src/App.tsx:29",
            defaultTheme: "light",
            children: y.jsxs(tC, {
                "data-loc": "client/src/App.tsx:33",
                children: [y.jsx(fO, {
                    "data-loc": "client/src/App.tsx:34"
                }), y.jsx(SD, {
                    "data-loc": "client/src/App.tsx:35"
                })]
            })
        })
    })
}
const lc = new ow,
    xx = t => {
        !(t instanceof qs) || typeof window > "u" || !(t.message === K2) || ec()
    };
lc.getQueryCache().subscribe(t => {
    if (t.type === "updated" && t.action.type === "error") {
        const a = t.query.state.error;
        xx(a), console.error("[API Query Error]", a)
    }
});
lc.getMutationCache().subscribe(t => {
    if (t.type === "updated" && t.action.type === "error") {
        const a = t.mutation.state.error;
        xx(a), console.error("[API Mutation Error]", a)
    }
});
const ED = jt.createClient({
    links: [v2({
        url: "/api/trpc",
        transformer: Ma,
        headers() {
            try {
                const t = sessionStorage.getItem("manus-cookie");
                if (t) {
                    const a = `${V2}=`,
                        l = t.split(";").find(o => o.trim().startsWith(a))?.trim().slice(a.length);
                    if (l) return {
                        Authorization: `Bearer ${l}`
                    }
                }
            } catch {}
            return {}
        },
        fetch(t, a) {
            return globalThis.fetch(t, {
                ...a ?? {},
                credentials: "include"
            })
        }
    })]
});
eE.createRoot(document.getElementById("root")).render(y.jsx(jt.Provider, {
    "data-loc": "client/src/main.tsx:76",
    client: ED,
    queryClient: lc,
    children: y.jsx(uw, {
        "data-loc": "client/src/main.tsx:77",
        client: lc,
        children: y.jsx(wD, {
            "data-loc": "client/src/main.tsx:78"
        })
    })
}));
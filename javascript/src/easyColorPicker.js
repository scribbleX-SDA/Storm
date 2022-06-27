! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EasyLogicColorPicker = e() : t.EasyLogicColorPicker = e()
}(self, function() {
	var n = {
			757: function(t, e, n) {
				t.exports = n(666)
			},
			317: function(t) {
				self,
				t.exports = (() => {
					"use strict";
					var r = {
							d: (t, e) => {
								for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
									enumerable: !0,
									get: e[n]
								})
							},
							o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
						},
						t = {};

					function f(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "rgba(0, 0, 0, 0)";
						return Array.isArray(t) && (t = {
							r: t[0],
							g: t[1],
							b: t[2],
							a: t[3]
						}), "hex" == e ? o(t) : "rgb" == e ? i(t, n) : "hsl" == e ? a(t) : t
					}

					function o(t) {
						var e = (t = Array.isArray(t) ? {
							r: t[0],
							g: t[1],
							b: t[2],
							a: t[3]
						} : t).r.toString(16);
						t.r < 16 && (e = "0" + e);
						var n = t.g.toString(16);
						t.g < 16 && (n = "0" + n);
						var r = t.b.toString(16);
						t.b < 16 && (r = "0" + r);
						var o = "";
						return t.a < 1 && (o = (t = Math.floor(255 * t.a)).toString(16), t < 16 && (o = "0" + o)), "#".concat(e).concat(n).concat(r).concat(o)
					}

					function i(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "rgba(0, 0, 0, 0)";
						if (void 0 !== (t = Array.isArray(t) ? {
								r: t[0],
								g: t[1],
								b: t[2],
								a: t[3]
							} : t)) return 1 == t.a || void 0 === t.a ? isNaN(t.r) ? e : "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")") : "rgba(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ",").concat(t.a, ")")
					}

					function a(t) {
						return 1 == (t = Array.isArray(t) ? {
							r: t[0],
							g: t[1],
							b: t[2],
							a: t[3]
						} : t).a || void 0 === t.a ? "hsl(".concat(t.h, ",").concat(t.s, "%,").concat(t.l, "%)") : "hsla(".concat(t.h, ",").concat(t.s, "%,").concat(t.l, "%,").concat(t.a, ")")
					}
					r.d(t, {
						default: () => ot
					});
					var e = {
						format: f,
						rgb: i,
						hsl: a,
						hex: o
					};

					function l(t, e) {
						return e = void 0 === e ? 1 : e, Math.round(t * e) / e
					}
					var n = {
							round: l
						},
						c = {
							aliceblue: "rgb(240, 248, 255)",
							antiquewhite: "rgb(250, 235, 215)",
							aqua: "rgb(0, 255, 255)",
							aquamarine: "rgb(127, 255, 212)",
							azure: "rgb(240, 255, 255)",
							beige: "rgb(245, 245, 220)",
							bisque: "rgb(255, 228, 196)",
							black: "rgb(0, 0, 0)",
							blanchedalmond: "rgb(255, 235, 205)",
							blue: "rgb(0, 0, 255)",
							blueviolet: "rgb(138, 43, 226)",
							brown: "rgb(165, 42, 42)",
							burlywood: "rgb(222, 184, 135)",
							cadetblue: "rgb(95, 158, 160)",
							chartreuse: "rgb(127, 255, 0)",
							chocolate: "rgb(210, 105, 30)",
							coral: "rgb(255, 127, 80)",
							cornflowerblue: "rgb(100, 149, 237)",
							cornsilk: "rgb(255, 248, 220)",
							crimson: "rgb(237, 20, 61)",
							cyan: "rgb(0, 255, 255)",
							darkblue: "rgb(0, 0, 139)",
							darkcyan: "rgb(0, 139, 139)",
							darkgoldenrod: "rgb(184, 134, 11)",
							darkgray: "rgb(169, 169, 169)",
							darkgrey: "rgb(169, 169, 169)",
							darkgreen: "rgb(0, 100, 0)",
							darkkhaki: "rgb(189, 183, 107)",
							darkmagenta: "rgb(139, 0, 139)",
							darkolivegreen: "rgb(85, 107, 47)",
							darkorange: "rgb(255, 140, 0)",
							darkorchid: "rgb(153, 50, 204)",
							darkred: "rgb(139, 0, 0)",
							darksalmon: "rgb(233, 150, 122)",
							darkseagreen: "rgb(143, 188, 143)",
							darkslateblue: "rgb(72, 61, 139)",
							darkslategray: "rgb(47, 79, 79)",
							darkslategrey: "rgb(47, 79, 79)",
							darkturquoise: "rgb(0, 206, 209)",
							darkviolet: "rgb(148, 0, 211)",
							deeppink: "rgb(255, 20, 147)",
							deepskyblue: "rgb(0, 191, 255)",
							dimgray: "rgb(105, 105, 105)",
							dimgrey: "rgb(105, 105, 105)",
							dodgerblue: "rgb(30, 144, 255)",
							firebrick: "rgb(178, 34, 34)",
							floralwhite: "rgb(255, 250, 240)",
							forestgreen: "rgb(34, 139, 34)",
							fuchsia: "rgb(255, 0, 255)",
							gainsboro: "rgb(220, 220, 220)",
							ghostwhite: "rgb(248, 248, 255)",
							gold: "rgb(255, 215, 0)",
							goldenrod: "rgb(218, 165, 32)",
							gray: "rgb(128, 128, 128)",
							grey: "rgb(128, 128, 128)",
							green: "rgb(0, 128, 0)",
							greenyellow: "rgb(173, 255, 47)",
							honeydew: "rgb(240, 255, 240)",
							hotpink: "rgb(255, 105, 180)",
							indianred: "rgb(205, 92, 92)",
							indigo: "rgb(75, 0, 130)",
							ivory: "rgb(255, 255, 240)",
							khaki: "rgb(240, 230, 140)",
							lavender: "rgb(230, 230, 250)",
							lavenderblush: "rgb(255, 240, 245)",
							lawngreen: "rgb(124, 252, 0)",
							lemonchiffon: "rgb(255, 250, 205)",
							lightblue: "rgb(173, 216, 230)",
							lightcoral: "rgb(240, 128, 128)",
							lightcyan: "rgb(224, 255, 255)",
							lightgoldenrodyellow: "rgb(250, 250, 210)",
							lightgreen: "rgb(144, 238, 144)",
							lightgray: "rgb(211, 211, 211)",
							lightgrey: "rgb(211, 211, 211)",
							lightpink: "rgb(255, 182, 193)",
							lightsalmon: "rgb(255, 160, 122)",
							lightseagreen: "rgb(32, 178, 170)",
							lightskyblue: "rgb(135, 206, 250)",
							lightslategray: "rgb(119, 136, 153)",
							lightslategrey: "rgb(119, 136, 153)",
							lightsteelblue: "rgb(176, 196, 222)",
							lightyellow: "rgb(255, 255, 224)",
							lime: "rgb(0, 255, 0)",
							limegreen: "rgb(50, 205, 50)",
							linen: "rgb(250, 240, 230)",
							magenta: "rgb(255, 0, 255)",
							maroon: "rgb(128, 0, 0)",
							mediumaquamarine: "rgb(102, 205, 170)",
							mediumblue: "rgb(0, 0, 205)",
							mediumorchid: "rgb(186, 85, 211)",
							mediumpurple: "rgb(147, 112, 219)",
							mediumseagreen: "rgb(60, 179, 113)",
							mediumslateblue: "rgb(123, 104, 238)",
							mediumspringgreen: "rgb(0, 250, 154)",
							mediumturquoise: "rgb(72, 209, 204)",
							mediumvioletred: "rgb(199, 21, 133)",
							midnightblue: "rgb(25, 25, 112)",
							mintcream: "rgb(245, 255, 250)",
							mistyrose: "rgb(255, 228, 225)",
							moccasin: "rgb(255, 228, 181)",
							navajowhite: "rgb(255, 222, 173)",
							navy: "rgb(0, 0, 128)",
							oldlace: "rgb(253, 245, 230)",
							olive: "rgb(128, 128, 0)",
							olivedrab: "rgb(107, 142, 35)",
							orange: "rgb(255, 165, 0)",
							orangered: "rgb(255, 69, 0)",
							orchid: "rgb(218, 112, 214)",
							palegoldenrod: "rgb(238, 232, 170)",
							palegreen: "rgb(152, 251, 152)",
							paleturquoise: "rgb(175, 238, 238)",
							palevioletred: "rgb(219, 112, 147)",
							papayawhip: "rgb(255, 239, 213)",
							peachpuff: "rgb(255, 218, 185)",
							peru: "rgb(205, 133, 63)",
							pink: "rgb(255, 192, 203)",
							plum: "rgb(221, 160, 221)",
							powderblue: "rgb(176, 224, 230)",
							purple: "rgb(128, 0, 128)",
							rebeccapurple: "rgb(102, 51, 153)",
							red: "rgb(255, 0, 0)",
							rosybrown: "rgb(188, 143, 143)",
							royalblue: "rgb(65, 105, 225)",
							saddlebrown: "rgb(139, 69, 19)",
							salmon: "rgb(250, 128, 114)",
							sandybrown: "rgb(244, 164, 96)",
							seagreen: "rgb(46, 139, 87)",
							seashell: "rgb(255, 245, 238)",
							sienna: "rgb(160, 82, 45)",
							silver: "rgb(192, 192, 192)",
							skyblue: "rgb(135, 206, 235)",
							slateblue: "rgb(106, 90, 205)",
							slategray: "rgb(112, 128, 144)",
							slategrey: "rgb(112, 128, 144)",
							snow: "rgb(255, 250, 250)",
							springgreen: "rgb(0, 255, 127)",
							steelblue: "rgb(70, 130, 180)",
							tan: "rgb(210, 180, 140)",
							teal: "rgb(0, 128, 128)",
							thistle: "rgb(216, 191, 216)",
							tomato: "rgb(255, 99, 71)",
							turquoise: "rgb(64, 224, 208)",
							violet: "rgb(238, 130, 238)",
							wheat: "rgb(245, 222, 179)",
							white: "rgb(255, 255, 255)",
							whitesmoke: "rgb(245, 245, 245)",
							yellow: "rgb(255, 255, 0)",
							yellowgreen: "rgb(154, 205, 50)",
							transparent: "rgba(0, 0, 0, 0)"
						};
					const u = {
						isColorName: function(t) {
							return !!c[t]
						},
						getColorByName: function(t) {
							return c[t]
						}
					};

					function s(t, e, n) {
						return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
					}

					function h(t, e, n) {
						var r, o, i, a;
						return 1 == arguments.length && (t = (r = arguments[0]).h, e = r.s, n = r.l), t /= 360, n /= 100, 0 == (e /= 100) ? o = i = a = n : (o = s(e = 2 * n - (n = n < .5 ? n * (1 + e) : n + e - n * e), n, t + 1 / 3), i = s(e, n, t), a = s(e, n, t - 1 / 3)), {
							r: l(255 * o),
							g: l(255 * i),
							b: l(255 * a)
						}
					}
					var p = {
						HUEtoRGB: s,
						HSLtoHSV: function(t, e, n) {
							var r;
							1 == arguments.length && (t = (r = arguments[0]).h, e = r.s, n = r.l);
							n = h(t, e, n);
							return x(n.r, n.g, n.b)
						},
						HSLtoRGB: h
					};

					function v(t, e) {
						(null == e || e > t.length) && (e = t.length);
						for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
						return r
					}
					var y = /(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;

					function g(n) {
						var t = n.match(y),
							e = [];
						if (!t) return e;
						for (var r, o = 0, i = t.length; o < i; o++) - 1 < t[o].indexOf("#") || -1 < t[o].indexOf("rgb") || -1 < t[o].indexOf("hsl") ? e.push({
							color: t[o]
						}) : (r = u.getColorByName(t[o])) && e.push({
							color: t[o],
							nameColor: r
						});
						var a = {
							next: 0
						};
						return e.forEach(function(t) {
							var e = n.indexOf(t.color, a.next);
							t.startIndex = e, t.endIndex = e + t.color.length, a.next = t.endIndex
						}), e
					}

					function d(n) {
						var t = g(n);
						return t.forEach(function(t, e) {
							n = n.replace(t.color, "@" + e)
						}), {
							str: n,
							matches: t
						}
					}

					function b(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ",",
							n = d(t);
						return n.str.split(e).map(function(t, e) {
							return t = k(t), t = n.matches[e] ? t.replace("@" + e, n.matches[e].color) : t
						})
					}

					function m(n, t) {
						return t.forEach(function(t, e) {
							n = n.replace("@" + e, t.color)
						}), n
					}

					function k(t) {
						return t.replace(/^\s+|\s+$/g, "")
					}

					function w(t) {
						if ("string" == typeof t) {
							if (-1 < (t = u.isColorName(t) ? u.getColorByName(t) : t).indexOf("rgb(")) {
								for (var e = 0, n = (o = t.replace("rgb(", "").replace(")", "").split(",")).length; e < n; e++) o[e] = parseInt(k(o[e]), 10);
								var r = {
									type: "rgb",
									r: o[0],
									g: o[1],
									b: o[2],
									a: 1
								};
								return Object.assign(r, $(r))
							}
							if (-1 < t.indexOf("rgba(")) {
								for (e = 0, n = (o = t.replace("rgba(", "").replace(")", "").split(",")).length; e < n; e++) o[e] = n - 1 == e ? parseFloat(k(o[e])) : parseInt(k(o[e]), 10);
								return r = {
									type: "rgb",
									r: o[0],
									g: o[1],
									b: o[2],
									a: o[3]
								}, Object.assign(r, $(r))
							}
							if (-1 < t.indexOf("hsl(")) {
								for (e = 0, n = (o = t.replace("hsl(", "").replace(")", "").split(",")).length; e < n; e++) o[e] = parseFloat(k(o[e]));
								return r = {
									type: "hsl",
									h: o[0],
									s: o[1],
									l: o[2],
									a: 1
								}, Object.assign(r, h(r))
							}
							if (-1 < t.indexOf("hsla(")) {
								for (e = 0, n = (o = t.replace("hsla(", "").replace(")", "").split(",")).length; e < n; e++) o[e] = n - 1 == e ? parseFloat(k(o[e])) : parseInt(k(o[e]), 10);
								return r = {
									type: "hsl",
									h: o[0],
									s: o[1],
									l: o[2],
									a: o[3]
								}, Object.assign(r, h(r))
							}
							if (0 == t.indexOf("#")) {
								var o = [],
									i = 1;
								if (3 == (t = t.replace("#", "")).length)
									for (e = 0, n = t.length; e < n; e++) {
										var a = t.substr(e, 1);
										o.push(parseInt(a + a, 16))
									} else if (8 === t.length) {
										for (e = 0, n = t.length; e < n; e += 2) o.push(parseInt(t.substr(e, 2), 16));
										i = o.pop() / 255
									} else
										for (e = 0, n = t.length; e < n; e += 2) o.push(parseInt(t.substr(e, 2), 16));
								return r = {
									type: "hex",
									r: o[0],
									g: o[1],
									b: o[2],
									a: i
								}, Object.assign(r, $(r))
							}
						} else if ("number" == typeof t) {
							if (0 <= t && t <= 16777215) return r = {
								type: "hex",
								r: (16711680 & t) >> 16,
								g: (65280 & t) >> 8,
								b: (255 & t) >> 0,
								a: 1
							}, Object.assign(r, $(r));
							if (0 <= t && t <= 4294967295) return r = {
								type: "hex",
								r: (4278190080 & t) >> 24,
								g: (16711680 & t) >> 16,
								b: (65280 & t) >> 8,
								a: (255 & t) / 255
							}, Object.assign(r, $(r))
						}
						return t
					}

					function O(n) {
						var r, t = (n = (n = "string" == typeof n ? b(n) : n).map(function(t) {
							if ("string" == typeof t) {
								var e = d(t),
									n = k(e.str).split(" ");
								return n[1] ? n[1].includes("%") ? n[1] = parseFloat(n[1].replace(/%/, "")) / 100 : n[1] = parseFloat(n[1]) : n[1] = "*", n[0] = m(n[0], e.matches), n
							}
							if (Array.isArray(t)) return t[1] ? "string" == typeof t[1] && (t[1].includes("%") ? t[1] = parseFloat(t[1].replace(/%/, "")) / 100 : t[1] = +t[1]) : t[1] = "*",
								function(t) {
									if (Array.isArray(t)) return v(t)
								}(r = t) || function() {
									if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
								}() || function(t) {
									if (t) {
										if ("string" == typeof t) return v(t, void 0);
										var e = Object.prototype.toString.call(t).slice(8, -1);
										return "Map" === (e = "Object" === e && t.constructor ? t.constructor.name : e) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(t, void 0) : void 0
									}
								}(r) || function() {
									throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}();
							var r
						})).filter(function(t) {
							return "*" === t[1]
						}).length;
						return 0 < t && (r = (1 - n.filter(function(t) {
							return "*" != t[1] && 1 != t[1]
						}).map(function(t) {
							return t[1]
						}).reduce(function(t, e) {
							return t + e
						}, 0)) / t, n.forEach(function(t, e) {
							"*" == t[1] && 0 < e && (n.length - 1 == e || (t[1] = r))
						})), n
					}
					var C = {
						matches: g,
						convertMatches: d,
						convertMatchesArray: b,
						reverseMatches: m,
						parse: w,
						parseGradient: O,
						trim: k,
						color_regexp: y,
						color_split: ","
					};

					function x(t, e, n) {
						1 == arguments.length && (t = (i = arguments[0]).r, e = i.g, n = i.b);
						var r = t / 255,
							o = e / 255,
							i = n / 255,
							t = Math.max(r, o, i),
							e = t - Math.min(r, o, i),
							n = 0;
						return 0 == e ? n = 0 : t == r ? n = (o - i) / e % 6 * 60 : t == o ? n = 60 * ((i - r) / e + 2) : t == i && (n = 60 * ((r - o) / e + 4)), {
							h: n = n < 0 ? 360 + n : n,
							s: 0 == t ? 0 : e / t,
							v: t
						}
					}

					function $(t, e, n) {
						1 == arguments.length && (t = (a = arguments[0]).r, e = a.g, n = a.b), t /= 255, e /= 255, n /= 255;
						var r, o = Math.max(t, e, n),
							i = Math.min(t, e, n),
							a = (o + i) / 2;
						if (o == i) r = u = 0;
						else {
							var c = o - i,
								u = .5 < a ? c / (2 - o - i) : c / (o + i);
							switch (o) {
								case t:
									r = (e - n) / c + (e < n ? 6 : 0);
									break;
								case e:
									r = (n - t) / c + 2;
									break;
								case n:
									r = (t - e) / c + 4
							}
							r /= 6
						}
						return {
							h: l(360 * r),
							s: l(100 * u),
							l: l(100 * a)
						}
					}

					function R(t) {
						return {
							r: t,
							g: t,
							b: t
						}
					}

					function _(t, e, n) {
						return Math.ceil(.2126 * t + .7152 * e + .0722 * n)
					}

					function P(t, e, n) {
						var r;
						1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b);
						e = _(t, e, n);
						return {
							y: e,
							cr: .713 * (t - e),
							cb: .564 * (n - e)
						}
					}

					function j(t, e) {
						return 100 * ((1 < arguments.length && void 0 !== e ? e : .04045) < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92)
					}

					function E(t, e, n) {
						var r;
						1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b);
						e /= 255, n /= 255;
						return {
							x: .4124 * (t = j(t = t / 255)) + .3576 * (e = j(e)) + .1805 * (n = j(n)),
							y: .2126 * t + .7152 * e + .0722 * n,
							z: .0193 * t + .1192 * e + .9505 * n
						}
					}
					var S = {
						RGBtoCMYK: function(t, e, n) {
							1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b);
							var r = t / 255,
								t = e / 255,
								e = n / 255,
								n = 1 - Math.max(r, t, e);
							return {
								c: (1 - r - n) / (1 - n),
								m: (1 - t - n) / (1 - n),
								y: (1 - e - n) / (1 - n),
								k: n
							}
						},
						RGBtoGray: function(t, e, n) {
							var r;
							return 1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b), R(P(t, e, n).y)
						},
						RGBtoHSL: $,
						RGBtoHSV: x,
						RGBtoLAB: function(t, e, n) {
							var r;
							return 1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b), XYZtoLAB(E(t, e, n))
						},
						RGBtoSimpleGray: function(t, e, n) {
							var r;
							return 1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b), R(Math.ceil((t + e + n) / 3))
						},
						RGBtoXYZ: E,
						RGBtoYCrCb: P,
						c: function(t, e, n) {
							var r;
							return 1 == arguments.length && (t = (r = arguments[0]).r, e = r.g, n = r.b), R(90 < (t + e + n) / 3 ? 0 : 255)
						},
						brightness: _,
						gray: R
					};

					function B(t) {
						return .008856 < Math.pow(t, 3) ? Math.pow(t, 3) : (t - 16 / 116) / 7.787
					}

					function D(t) {
						return .0031308 < t ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t
					}

					function M(t, e, n) {
						1 == arguments.length && (t = (o = arguments[0]).x, e = o.y, n = o.z);
						var r = t / 100,
							o = e / 100,
							t = n / 100,
							e = -.9689 * r + 1.8758 * o + .0415 * t,
							n = .0557 * r + -.204 * o + 1.057 * t,
							t = D(t = 3.2406 * r + -1.5372 * o + -.4986 * t),
							e = D(e),
							n = D(n);
						return {
							r: l(255 * t),
							g: l(255 * e),
							b: l(255 * n)
						}
					}

					function L(t, e, n) {
						var r;
						1 == arguments.length && (t = (r = arguments[0]).l, e = r.a, n = r.b);
						t = e / 500 + (e = (t + 16) / 116), n = e - n / 200, e = B(e);
						return {
							x: 95.047 * (t = B(t)),
							y: 100 * e,
							z: 108.883 * (n = B(n))
						}
					}
					var I = {
						XYZtoRGB: M,
						LABtoRGB: function(t, e, n) {
							var r;
							return 1 == arguments.length && (t = (r = arguments[0]).l, e = r.a, n = r.b), M(L(t, e, n))
						},
						LABtoXYZ: L
					};

					function H(t, e, n) {
						1 == arguments.length && (t = (o = arguments[0]).h, e = o.s, n = o.v);
						var r = t,
							o = n;
						360 <= r && (r = 0);
						t = e * o, n = t * (1 - Math.abs(r / 60 % 2 - 1)), e = o - t, o = [];
						return 0 <= r && r < 60 ? o = [t, n, 0] : 60 <= r && r < 120 ? o = [n, t, 0] : 120 <= r && r < 180 ? o = [0, t, n] : 180 <= r && r < 240 ? o = [0, n, t] : 240 <= r && r < 300 ? o = [n, 0, t] : 300 <= r && r < 360 && (o = [t, 0, n]), {
							r: l(255 * (o[0] + e)),
							g: l(255 * (o[1] + e)),
							b: l(255 * (o[2] + e))
						}
					}
					var A = {
							HSVtoHSL: function(t, e, n) {
								var r;
								1 == arguments.length && (t = (r = arguments[0]).h, e = r.s, n = r.v);
								n = H(t, e, n);
								return $(n.r, n.g, n.b)
							},
							HSVtoRGB: H
						},
						T = {
							YCrCbtoRGB: function(t, e, n, r) {
								1 == arguments.length && (t = (o = arguments[0]).y, e = o.cr, n = o.cb, r = o.bit || 0);
								var o = t - .344 * (n - r) - .714 * (e - r),
									n = t + 1.772 * (n - r);
								return {
									r: Math.ceil(t + 1.402 * (e - r)),
									g: Math.ceil(o),
									b: Math.ceil(n)
								}
							}
						};

					function V(t, e) {
						return Math.floor(Math.random() * (e - t + 1)) + t
					}

					function U() {
						return i({
							r: V(0, 255),
							g: V(0, 255),
							b: V(0, 255)
						})
					}

					function F(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5,
							r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "hex",
							n = {
								r: l(t.r + (e.r - t.r) * n),
								g: l(t.g + (e.g - t.g) * n),
								b: l(t.b + (e.b - t.b) * n),
								a: l(t.a + (e.a - t.a) * n, 100)
							};
						return f(n, n.a < 1 ? "rgb" : r)
					}

					function G(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5;
						if (!t) return [];
						for (var n = (t = (t = "string" == typeof t ? b(t) : t) || []).length, r = [], o = 0; o < n - 1; o++)
							for (var i = 0; i < e; i++) r.push(z(t[o], t[o + 1], i / e));
						return r
					}

					function z(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5,
							r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "hex";
						return F(w(t), w(e), n, r)
					}

					function N(t) {
						return t = w(t), (Math.round(299 * t.r) + Math.round(587 * t.g) + Math.round(114 * t.b)) / 1e3
					}

					function Y(t) {
						for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "h", n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 9, r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "rgb", o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1, a = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 100, c = x(w(t)), u = (i - o) * a / n, l = [], s = 1; s <= n; s++) c[e] = Math.abs((a - u * s) / a), l.push(f(H(c), r));
						return l
					}
					G.parula = function(t) {
						return G(["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"], t)
					}, G.jet = function(t) {
						return G(["#00008f", "#0020ff", "#00ffff", "#51ff77", "#fdff00", "#ff0000", "#800000"], t)
					}, G.hsv = function(t) {
						return G(["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ff0000"], t)
					}, G.hot = function(t) {
						return G(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], t)
					}, G.pink = function(t) {
						return G(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], t)
					}, G.bone = function(t) {
						return G(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], t)
					}, G.copper = function(t) {
						return G(["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"], t)
					};
					var X = {
						interpolateRGB: F,
						blend: z,
						mix: function(t, e) {
							return z(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "hex")
						},
						scale: G,
						contrast: N,
						contrastColor: function(t) {
							return 128 <= N(t) ? "black" : "white"
						},
						gradient: function(t) {
							for (var e = [], n = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10) - ((t = O(t)).length - 1), r = n, o = 1, i = t.length; o < i; o++) {
								var a = t[o - 1][0],
									c = t[o][0],
									u = 1 == o ? t[o][1] : t[o][1] - t[o - 1][1],
									u = o == t.length - 1 ? r : Math.floor(u * n),
									e = e.concat(G([a, c], u), [c]);
								r -= u
							}
							return e
						},
						scaleHSV: Y,
						scaleH: function(t) {
							return Y(t, "h", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 9, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "rgb", 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 360, 1)
						},
						scaleS: function(t) {
							return Y(t, "s", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 9, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "rgb", 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, 100)
						},
						scaleV: function(t) {
							return Y(t, "v", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 9, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "rgb", 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, 100)
						},
						random: U,
						randomRGBA: function() {
							return i({
								r: V(0, 255),
								g: V(0, 255),
								b: V(0, 255),
								a: V(0, 1e3) / 1e3
							})
						},
						randomByCount: function() {
							for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, e = [], n = 0; n < t; n++) e[e.length] = U();
							return e
						}
					};

					function q(e, t) {
						var n, r = Object.keys(e);
						return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						})), r.push.apply(r, n)), r
					}

					function W(r) {
						for (var t = 1; t < arguments.length; t++) {
							var o = null != arguments[t] ? arguments[t] : {};
							t % 2 ? q(Object(o), !0).forEach(function(t) {
								var e, n;
								e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
									value: t,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[n] = t
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : q(Object(o)).forEach(function(t) {
								Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
							})
						}
						return r
					}
					const K = W(W(W(W(W(W(W(W(W(W({}, e), n), X), C), T), S), {
						CMYKtoRGB: function(t, e, n, r) {
							var o;
							return 1 == arguments.length && (t = (o = arguments[0]).c, e = o.m, n = o.y, r = o.k), {
								r: 255 * (1 - t) * (1 - r),
								g: 255 * (1 - e) * (1 - r),
								b: 255 * (1 - n) * (1 - r)
							}
						}
					}), A), p), I);

					function Z(t) {
						return null == t
					}

					function J(e, t) {
						var n, r = Object.keys(e);
						return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						})), r.push.apply(r, n)), r
					}

					function Q(r) {
						for (var t = 1; t < arguments.length; t++) {
							var o = null != arguments[t] ? arguments[t] : {};
							t % 2 ? J(Object(o), !0).forEach(function(t) {
								var e, n;
								e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
									value: t,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[n] = t
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : J(Object(o)).forEach(function(t) {
								Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
							})
						}
						return r
					}
					var tt = [Q({
						rgb: "#ff0000",
						start: 0
					}, K.parse("#ff0000")), Q({
						rgb: "#ffff00",
						start: .17
					}, K.parse("#ffff00")), Q({
						rgb: "#00ff00",
						start: .33
					}, K.parse("#00ff00")), Q({
						rgb: "#00ffff",
						start: .5
					}, K.parse("#00ffff")), Q({
						rgb: "#0000ff",
						start: .67
					}, K.parse("#0000ff")), Q({
						rgb: "#ff00ff",
						start: .83
					}, K.parse("#ff00ff")), Q({
						rgb: "#ff0000",
						start: 1
					}, K.parse("#ff0000"))];

					function et(t) {
						for (var e, n, r = 0; r < tt.length; r++)
							if (tt[r].start >= t) {
								e = tt[r - 1], n = tt[r];
								break
							} return e && n ? K.mix(e.rgb, n.rgb, (t - e.start) / (n.start - e.start)) : tt[0].rgb
					}
					I = {
						colors: tt,
						checkHueColor: et,
						getHueScale: function(t) {
							for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .1, n = 2 < arguments.length ? arguments[2] : void 0, r = Z(n) ? t - e : e, o = Z(n) ? t + scale : n, i = [], a = 0; a < tt.length; a++) {
								var c = tt[a];
								r <= c.start && c.start < o ? i.push({
									rgb: c.rgb,
									start: c.start
								}) : tt[a + 1] && c.start < r && r < tt[a + 1].start ? i.push({
									rgb: et(r),
									start: r
								}) : tt[a - 1] && tt[a - 1].start < o && o < c.start ? i.push({
									rgb: et(o),
									start: o
								}) : c.start < r || c.start > o || i.push({
									rgb: c.rgb,
									start: c.start
								})
							}
							return i
						}
					};

					function nt(e, t) {
						var n, r = Object.keys(e);
						return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						})), r.push.apply(r, n)), r
					}

					function rt(r) {
						for (var t = 1; t < arguments.length; t++) {
							var o = null != arguments[t] ? arguments[t] : {};
							t % 2 ? nt(Object(o), !0).forEach(function(t) {
								var e, n;
								e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
									value: t,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[n] = t
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : nt(Object(o)).forEach(function(t) {
								Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
							})
						}
						return r
					}
					const ot = rt(rt(rt({}, K), I), u);
					return t.default
				})()
			},
			666: function(e) {
				e = function(a) {
					"use strict";
					var u, t = Object.prototype,
						l = t.hasOwnProperty,
						e = "function" == typeof Symbol ? Symbol : {},
						r = e.iterator || "@@iterator",
						n = e.asyncIterator || "@@asyncIterator",
						o = e.toStringTag || "@@toStringTag";

					function i(t, e, n) {
						return Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						i({}, "")
					} catch (t) {
						i = function(t, e, n) {
							return t[e] = n
						}
					}

					function c(t, e, n, r) {
						var o, i, a, c, e = e && e.prototype instanceof g ? e : g,
							e = Object.create(e.prototype),
							r = new $(r || []);
						return e._invoke = (o = t, i = n, a = r, c = f, function(t, e) {
							if (c === p) throw new Error("Generator is already running");
							if (c === v) {
								if ("throw" === t) throw e;
								return _()
							}
							for (a.method = t, a.arg = e;;) {
								var n = a.delegate;
								if (n) {
									var r = function t(e, n) {
										var r = e.iterator[n.method];
										if (r === u) {
											if (n.delegate = null, "throw" === n.method) {
												if (e.iterator.return && (n.method = "return", n.arg = u, t(e, n), "throw" === n.method)) return y;
												n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
											}
											return y
										}
										var r = s(r, e.iterator, n.arg);
										if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, y;
										r = r.arg;
										if (!r) return n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y; {
											if (!r.done) return r;
											n[e.resultName] = r.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = u)
										}
										n.delegate = null;
										return y
									}(n, a);
									if (r) {
										if (r === y) continue;
										return r
									}
								}
								if ("next" === a.method) a.sent = a._sent = a.arg;
								else if ("throw" === a.method) {
									if (c === f) throw c = v, a.arg;
									a.dispatchException(a.arg)
								} else "return" === a.method && a.abrupt("return", a.arg);
								c = p;
								r = s(o, i, a);
								if ("normal" === r.type) {
									if (c = a.done ? v : h, r.arg !== y) return {
										value: r.arg,
										done: a.done
									}
								} else "throw" === r.type && (c = v, a.method = "throw", a.arg = r.arg)
							}
						}), e
					}

					function s(t, e, n) {
						try {
							return {
								type: "normal",
								arg: t.call(e, n)
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t
							}
						}
					}
					a.wrap = c;
					var f = "suspendedStart",
						h = "suspendedYield",
						p = "executing",
						v = "completed",
						y = {};

					function g() {}

					function d() {}

					function b() {}
					var m = {};
					i(m, r, function() {
						return this
					});
					e = Object.getPrototypeOf, e = e && e(e(R([])));
					e && e !== t && l.call(e, r) && (m = e);
					var k = b.prototype = g.prototype = Object.create(m);

					function w(t) {
						["next", "throw", "return"].forEach(function(e) {
							i(t, e, function(t) {
								return this._invoke(e, t)
							})
						})
					}

					function O(a, c) {
						var e;
						this._invoke = function(n, r) {
							function t() {
								return new c(function(t, e) {
									! function e(t, n, r, o) {
										t = s(a[t], a, n);
										if ("throw" !== t.type) {
											var i = t.arg;
											return (n = i.value) && "object" == typeof n && l.call(n, "__await") ? c.resolve(n.__await).then(function(t) {
												e("next", t, r, o)
											}, function(t) {
												e("throw", t, r, o)
											}) : c.resolve(n).then(function(t) {
												i.value = t, r(i)
											}, function(t) {
												return e("throw", t, r, o)
											})
										}
										o(t.arg)
									}(n, r, t, e)
								})
							}
							return e = e ? e.then(t, t) : t()
						}
					}

					function C(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function x(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function $(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(C, this), this.reset(!0)
					}

					function R(e) {
						if (e) {
							var t = e[r];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var n = -1,
									t = function t() {
										for (; ++n < e.length;)
											if (l.call(e, n)) return t.value = e[n], t.done = !1, t;
										return t.value = u, t.done = !0, t
									};
								return t.next = t
							}
						}
						return {
							next: _
						}
					}

					function _() {
						return {
							value: u,
							done: !0
						}
					}
					return i(k, "constructor", d.prototype = b), i(b, "constructor", d), d.displayName = i(b, o, "GeneratorFunction"), a.isGeneratorFunction = function(t) {
						t = "function" == typeof t && t.constructor;
						return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
					}, a.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, i(t, o, "GeneratorFunction")), t.prototype = Object.create(k), t
					}, a.awrap = function(t) {
						return {
							__await: t
						}
					}, w(O.prototype), i(O.prototype, n, function() {
						return this
					}), a.AsyncIterator = O, a.async = function(t, e, n, r, o) {
						void 0 === o && (o = Promise);
						var i = new O(c(t, e, n, r), o);
						return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
							return t.done ? t.value : i.next()
						})
					}, w(k), i(k, o, "Generator"), i(k, r, function() {
						return this
					}), i(k, "toString", function() {
						return "[object Generator]"
					}), a.keys = function(n) {
						var t, r = [];
						for (t in n) r.push(t);
						return r.reverse(),
							function t() {
								for (; r.length;) {
									var e = r.pop();
									if (e in n) return t.value = e, t.done = !1, t
								}
								return t.done = !0, t
							}
					}, a.values = R, $.prototype = {
						constructor: $,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, this.method = "next", this.arg = u, this.tryEntries.forEach(x), !t)
								for (var e in this) "t" === e.charAt(0) && l.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = u)
						},
						stop: function() {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function(n) {
							if (this.done) throw n;
							var r = this;

							function t(t, e) {
								return i.type = "throw", i.arg = n, r.next = t, e && (r.method = "next", r.arg = u), !!e
							}
							for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
								var o = this.tryEntries[e],
									i = o.completion;
								if ("root" === o.tryLoc) return t("end");
								if (o.tryLoc <= this.prev) {
									var a = l.call(o, "catchLoc"),
										c = l.call(o, "finallyLoc");
									if (a && c) {
										if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
										if (this.prev < o.finallyLoc) return t(o.finallyLoc)
									} else if (a) {
										if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < o.finallyLoc) return t(o.finallyLoc)
									}
								}
							}
						},
						abrupt: function(t, e) {
							for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
								var r = this.tryEntries[n];
								if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
									var o = r;
									break
								}
							}
							var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
							return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), y
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r, o = n.completion;
									return "throw" === o.type && (r = o.arg, x(n)), r
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, n) {
							return this.delegate = {
								iterator: R(t),
								resultName: e,
								nextLoc: n
							}, "next" === this.method && (this.arg = u), y
						}
					}, a
				}(e.exports);
				try {
					regeneratorRuntime = e
				} catch (t) {
					"object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
				}
			}
		},
		r = {};

	function ee(t) {
		var e = r[t];
		if (void 0 !== e) return e.exports;
		e = r[t] = {
			exports: {}
		};
		return n[t](e, e.exports, ee), e.exports
	}
	ee.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return ee.d(e, {
			a: e
		}), e
	}, ee.d = function(t, e) {
		for (var n in e) ee.o(e, n) && !ee.o(t, n) && Object.defineProperty(t, n, {
			enumerable: !0,
			get: e[n]
		})
	}, ee.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	};
	var ne = {};
	return function() {
		"use strict";

		function a(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function r(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function o(t, e, n) {
			return e && r(t.prototype, e), n && r(t, n), t
		}

		function n(t, e) {
			return (n = Object.setPrototypeOf || function(t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function i(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && n(t, e)
		}

		function c(t) {
			return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u(t, e) {
			if (e && ("object" === c(e) || "function" == typeof e)) return e;
			if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
			return function(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}(t)
		}

		function l(t) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function s(t, e, n) {
			return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
				t = function(t, e) {
					for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
					return t
				}(t, e);
				if (t) {
					e = Object.getOwnPropertyDescriptor(t, e);
					return e.get ? e.get.call(n) : e.value
				}
			})(t, e, n || t)
		}

		function f(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
			return r
		}

		function h(t) {
			if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
		}

		function p(t, e) {
			if (t) {
				if ("string" == typeof t) return f(t, e);
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
			}
		}

		function v(t) {
			return function(t) {
				if (Array.isArray(t)) return f(t)
			}(t) || h(t) || p(t) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		ee.d(ne, {
			default: function() {
				return te
			}
		});
		var y = 0,
			g = [],
			d = function() {
				function i(t, e, n) {
					if (a(this, i), "string" != typeof t) this.el = t;
					else {
						var r, o = document.createElement(t);
						for (r in this.uniqId = y++, e && (o.className = e), n = n || {}) o.setAttribute(r, n[r]);
						this.el = o
					}
				}
				return o(i, [{
					key: "attr",
					value: function(t, e) {
						return 1 === arguments.length ? this.el.getAttribute(t) : (this.el.setAttribute(t, e), this)
					}
				}, {
					key: "html",
					value: function(t) {
						try {
							"string" == typeof t ? this.el.innerHTML = t : this.empty().append(t)
						} catch (t) {}
						return this
					}
				}, {
					key: "find",
					value: function(t) {
						return this.el.querySelector(t)
					}
				}, {
					key: "$",
					value: function(t) {
						return new i(this.find(t))
					}
				}, {
					key: "findAll",
					value: function(t) {
						return this.el.querySelectorAll(t)
					}
				}, {
					key: "$$",
					value: function(t) {
						return v(this.findAll(t)).map(function(t) {
							return new i(t)
						})
					}
				}, {
					key: "empty",
					value: function() {
						return this.html("")
					}
				}, {
					key: "append",
					value: function(t) {
						return "string" == typeof t ? this.el.appendChild(document.createTextNode(t)) : this.el.appendChild(t.el || t), this
					}
				}, {
					key: "appendTo",
					value: function(t) {
						return (t.el || t).appendChild(this.el), this
					}
				}, {
					key: "css",
					value: function(t, e) {
						var n = this;
						if (2 === arguments.length) this.el.style[t] = e;
						else if (1 === arguments.length) {
							if ("string" == typeof t) return getComputedStyle(this.el)[t];
							var r = t || {};
							Object.keys(r).forEach(function(t) {
								n.el.style[t] = r[t]
							})
						}
						return this
					}
				}, {
					key: "offset",
					value: function() {
						var t = this.rect();
						return {
							top: t.top + i.getScrollTop(),
							left: t.left + i.getScrollLeft()
						}
					}
				}, {
					key: "position",
					value: function() {
						return this.el.style.top ? {
							top: parseFloat(this.css("top")),
							left: parseFloat(this.css("left"))
						} : this.rect()
					}
				}, {
					key: "size",
					value: function() {
						return [this.width(), this.height()]
					}
				}, {
					key: "rect",
					value: function() {
						return this.el.getBoundingClientRect()
					}
				}, {
					key: "width",
					value: function() {
						return this.el.offsetWidth || this.rect().width
					}
				}, {
					key: "height",
					value: function() {
						return this.el.offsetHeight || this.rect().height
					}
				}, {
					key: "dataKey",
					value: function(t) {
						return this.uniqId + "." + t
					}
				}, {
					key: "data",
					value: function(t, e) {
						if (2 === arguments.length) return g[this.dataKey(t)] = e, this;
						if (1 === arguments.length) return g[this.dataKey(t)];
						var t = Object.keys(g),
							n = this.uniqId + ".";
						return t.filter(function(t) {
							return 0 === t.indexOf(n)
						}).map(function(t) {
							return g[t]
						})
					}
				}, {
					key: "val",
					value: function(t) {
						return 0 === arguments.length ? this.el.value : (1 === arguments.length && (this.el.value = t), this)
					}
				}, {
					key: "checked",
					value: function() {
						return this.el.checked
					}
				}, {
					key: "int",
					value: function() {
						return parseInt(this.val(), 10)
					}
				}, {
					key: "float",
					value: function() {
						return parseFloat(this.val())
					}
				}, {
					key: "scrollTop",
					value: function() {
						return this.el === document.body ? i.getScrollTop() : this.el.scrollTop
					}
				}, {
					key: "scrollLeft",
					value: function() {
						return this.el === document.body ? i.getScrollLeft() : this.el.scrollLeft
					}
				}, {
					key: "on",
					value: function(t, e, n, r) {
						return this.el.addEventListener(t, e, n, r), this
					}
				}, {
					key: "off",
					value: function(t, e) {
						return this.el.removeEventListener(t, e), this
					}
				}, {
					key: "getElement",
					value: function() {
						return this.el
					}
				}, {
					key: "createChild",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
							n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
							r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
							n = new i(t, e, n);
						return n.css(r), this.append(n), n
					}
				}, {
					key: "firstChild",
					value: function() {
						return new i(this.el.firstElementChild)
					}
				}, {
					key: "replace",
					value: function(t, e) {
						return this.el.replaceChild(e, t), this
					}
				}], [{
					key: "getScrollTop",
					value: function() {
						return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
					}
				}, {
					key: "getScrollLeft",
					value: function() {
						return Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft)
					}
				}]), i
			}();

		function b(t) {
			if (Array.isArray(t)) return t
		}

		function m() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var k = {
				addEvent: function(t, e, n, r) {
					t && t.addEventListener(e, n, r)
				},
				removeEvent: function(t, e, n) {
					t && t.removeEventListener(e, n)
				},
				pos: function(t) {
					return t.touches && t.touches[0] ? t.touches[0] : t
				},
				posXY: function(t) {
					t = this.pos(t);
					return {
						x: t.pageX,
						y: t.pageY
					}
				}
			},
			e = function() {
				function n(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					a(this, n), this.masterObj = t, this.settingObj = e
				}
				return o(n, [{
					key: "set",
					value: function(t, e) {
						this.settingObj[t] = e || (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0)
					}
				}, {
					key: "init",
					value: function(t) {
						if (!this.has(t) || !this.settingObj[t]) {
							var e = t.split("."),
								n = this.masterObj.refs[e[0]] || this.masterObj[e[0]] || this.masterObj,
								e = e.pop();
							if (n[e]) {
								for (var r = arguments.length, o = new Array(1 < r ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
								n = n[e].apply(n, o);
								this.set(t, n)
							}
						}
					}
				}, {
					key: "get",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
						return this.init(t, e), this.settingObj[t] || e
					}
				}, {
					key: "has",
					value: function(t) {
						return !!this.settingObj[t]
					}
				}]), n
			}(),
			w = /^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/gi,
			O = /^load (.*)/gi,
			C = ["Control", "Shift", "Alt", "Meta"],
			t = function() {
				function t() {
					a(this, t), this.state = new e(this), this.refs = {}, this.childComponents = this.components()
				}
				return o(t, [{
					key: "newChildComponents",
					value: function() {
						var n = this;
						Object.keys(this.childComponents).forEach(function(t) {
							var e = n.childComponents[t];
							n[t] = new e(n)
						})
					}
				}, {
					key: "render",
					value: function(t) {
						this.template() && (this.$el = this.template() ? this.parseTemplate(this.template()) : null, this.refs.$el = this.$el, t && t.append(this.$el), this.parseTarget(), this.load(), this.afterRender())
					}
				}, {
					key: "afterRender",
					value: function() {}
				}, {
					key: "components",
					value: function() {
						return {}
					}
				}, {
					key: "parseTemplate",
					value: function(t) {
						var n = this,
							t = new d("div").html(t).firstChild();
						return v(t.findAll("[ref]")).forEach(function(t) {
							var e = t.getAttribute("ref");
							n.refs[e] = new d(t)
						}), t
					}
				}, {
					key: "parseTarget",
					value: function() {
						var r = this;
						v(this.$el.findAll("[target]")).forEach(function(t) {
							var e = t.getAttribute("target"),
								n = t.getAttribute("ref") || e,
								e = new r.childComponents[e](r);
							r[n] = e, r.refs[n] = e.$el, e && (e.render(), n = new d(t.parentNode), e.$el && n.replace(t, e.$el.el))
						})
					}
				}, {
					key: "load",
					value: function() {
						var n = this;
						this.filterProps(O).forEach(function(t) {
							var e = t.split("load ")[1];
							n.refs[e] && n.refs[e].html(n.parseTemplate(n[t].call(n)))
						})
					}
				}, {
					key: "template",
					value: function() {
						return "<div></div>"
					}
				}, {
					key: "initialize",
					value: function() {}
				}, {
					key: "initializeEvent",
					value: function() {
						var e = this;
						this.initializeEventMachine(), Object.keys(this.childComponents).forEach(function(t) {
							e[t] && e[t].initializeEvent()
						})
					}
				}, {
					key: "destroy",
					value: function() {
						var e = this;
						this.destroyEventMachine(), Object.keys(this.childComponents).forEach(function(t) {
							e[t] && e[t].destroy()
						})
					}
				}, {
					key: "destroyEventMachine",
					value: function() {
						this.removeEventAll()
					}
				}, {
					key: "initializeEventMachine",
					value: function() {
						this.filterProps(w).forEach(this.parseEvent.bind(this))
					}
				}, {
					key: "collectProps",
					value: function() {
						if (!this.collapsedProps) {
							for (var t = this.__proto__, e = []; e.push.apply(e, v(Object.getOwnPropertyNames(t))), t = t.__proto__;);
							this.collapsedProps = e
						}
						return this.collapsedProps
					}
				}, {
					key: "filterProps",
					value: function(e) {
						return this.collectProps().filter(function(t) {
							return t.match(e)
						})
					}
				}, {
					key: "parseEvent",
					value: function(t) {
						var e = t.split(" ");
						this.bindingEvent(e, this[t].bind(this))
					}
				}, {
					key: "getDefaultDomElement",
					value: function(t) {
						t = t ? this.refs[t] || this[t] || window[t] : this.el || this.$el || this.$root;
						return t instanceof d ? t.getElement() : t
					}
				}, {
					key: "getDefaultEventObject",
					value: function(t) {
						var e = this,
							n = t.split("."),
							r = n.shift(),
							o = n.includes("Control"),
							i = n.includes("Shift"),
							a = n.includes("Alt"),
							t = n.includes("Meta"),
							c = (n = n.filter(function(t) {
								return !1 === C.includes(t)
							})).filter(function(t) {
								return !!e[t]
							});
						return {
							eventName: r,
							isControl: o,
							isShift: i,
							isAlt: a,
							isMeta: t,
							codes: n = n.filter(function(t) {
								return !1 === c.includes(t)
							}).map(function(t) {
								return t.toLowerCase()
							}),
							checkMethodList: c
						}
					}
				}, {
					key: "bindingEvent",
					value: function(t, e) {
						var n = b(r = t) || h(r) || p(r) || m(),
							t = n[0],
							r = n[1],
							n = n.slice(2),
							r = this.getDefaultDomElement(r),
							t = this.getDefaultEventObject(t);
						t.dom = r, t.delegate = n.join(" "), this.addEvent(t, e)
					}
				}, {
					key: "matchPath",
					value: function(t, e) {
						return t ? t.matches(e) ? t : this.matchPath(t.parentElement, e) : null
					}
				}, {
					key: "getBindings",
					value: function() {
						return this._bindings || this.initBindings(), this._bindings
					}
				}, {
					key: "addBinding",
					value: function(t) {
						this.getBindings().push(t)
					}
				}, {
					key: "initBindings",
					value: function() {
						this._bindings = []
					}
				}, {
					key: "checkEventType",
					value: function(e, t) {
						var n = this,
							r = !t.isControl || e.ctrlKey,
							o = !t.isShift || e.shiftKey,
							i = !t.isAlt || e.altKey,
							a = !t.isMeta || e.metaKey,
							c = !0;
						t.codes.length && (c = t.codes.includes(e.code.toLowerCase()) || t.codes.includes(e.key.toLowerCase()));
						var u = !0;
						return t.checkMethodList.length && (u = t.checkMethodList.every(function(t) {
							return n[t].call(n, e)
						})), r && i && o && a && c && u
					}
				}, {
					key: "makeCallback",
					value: function(n, r) {
						var o = this;
						return n.delegate ? function(t) {
							if (t.xy = k.posXY(t), o.checkEventType(t, n)) {
								var e = o.matchPath(t.target || t.srcElement, n.delegate);
								if (e) return t.delegateTarget = e, t.$delegateTarget = new d(e), r(t)
							}
						} : function(t) {
							if (t.xy = k.posXY(t), o.checkEventType(t, n)) return r(t)
						}
					}
				}, {
					key: "addEvent",
					value: function(t, e) {
						t.callback = this.makeCallback(t, e), this.addBinding(t);
						e = !0;
						"touchstart" === t.eventName && (e = {
							passive: !0
						}), k.addEvent(t.dom, t.eventName, t.callback, e)
					}
				}, {
					key: "removeEventAll",
					value: function() {
						var e = this;
						this.getBindings().forEach(function(t) {
							e.removeEvent(t)
						}), this.initBindings()
					}
				}, {
					key: "removeEvent",
					value: function(t) {
						var e = t.eventName,
							n = t.dom,
							t = t.callback;
						k.removeEvent(n, e, t)
					}
				}]), t
			}();

		function x(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var $ = /^@/,
			R = function() {
				i(r, t);
				var n = x(r);

				function r(t) {
					var e;
					return a(this, r), (e = n.call(this, t)).opt = t && t.opt ? t.opt : t || {}, t && t.$store && (e.$store = t.$store), e.initialize(), e.initializeStoreEvent(), e
				}
				return o(r, [{
					key: "initializeStoreEvent",
					value: function() {
						var n = this;
						this.storeEvents = {}, this.filterProps($).forEach(function(t) {
							var e = t.split("@");
							e.shift();
							e = e.join("@");
							n.storeEvents[e] = n[t].bind(n), n.$store.on(e, n.storeEvents[e])
						})
					}
				}]), r
			}();

		function _(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var P = ee(317),
			j = ee.n(P),
			E = function() {
				function e(t) {
					a(this, e), this.$store = t, this.initialize()
				}
				return o(e, [{
					key: "initialize",
					value: function() {
						var e = this;
						this.filterProps().forEach(function(t) {
							e.$store.action(t, e)
						})
					}
				}, {
					key: "filterProps",
					value: function() {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "/";
						return Object.getOwnPropertyNames(this.__proto__).filter(function(t) {
							return t.startsWith(e)
						})
					}
				}]), e
			}();

		function S(e, t) {
			var n, r = Object.keys(e);
			return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), r.push.apply(r, n)), r
		}

		function B(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? S(Object(n), !0).forEach(function(t) {
					_(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function D(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var M = function() {
			i(e, E);
			var t = D(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "initialize",
				value: function() {
					s(l(e.prototype), "initialize", this).call(this), this.$store.rgb = {}, this.$store.hsl = {}, this.$store.hsv = {}, this.$store.alpha = 1, this.$store.format = "hex"
				}
			}, {
				key: "/changeFormat",
				value: function(t, e) {
					t.format = e, t.emit("changeFormat")
				}
			}, {
				key: "/initColor",
				value: function(t, e) {
					t.dispatch("/changeColor", e, !0), t.emit("initColor")
				}
			}, {
				key: "/changeColor",
				value: function(t, e, n) {
					switch ("string" == typeof(e = e || "#ffffff") && (e = j().parse(e)), t.alpha = void 0 === e.a || null === e.a ? t.alpha : e.a, t.format || (t.format = "hsv" !== e.type && e.type || "hex"), e.type) {
						case "hsl":
							t.hsl = Object.assign(t.hsl, e), t.rgb = j().HSLtoRGB(t.hsl), t.hsv = j().HSLtoHSV(e);
							break;
						case "hex":
						case "rgb":
							t.rgb = Object.assign(t.rgb, e), t.hsl = j().RGBtoHSL(t.rgb), t.hsv = j().RGBtoHSV(e);
							break;
						case "hsv":
							t.hsv = Object.assign(t.hsv, e), t.rgb = j().HSVtoRGB(t.hsv), t.hsl = j().HSVtoHSL(t.hsv)
					}
					n || t.emit("changeColor", e)
				}
			}, {
				key: "/getHueColor",
				value: function(t) {
					return j().checkHueColor(t.hsv.h / 360)
				}
			}, {
				key: "/toString",
				value: function(t, e) {
					var n = t[e = e || t.format] || t.rgb;
					return j().format(B(B({}, n), {}, {
						a: t.alpha
					}), e)
				}
			}, {
				key: "/toColor",
				value: function(t, e) {
					switch (e = e || t.format) {
						case "rgb":
							return t.dispatch("/toRGB");
						case "hsl":
							return t.dispatch("/toHSL");
						case "hex":
							return t.dispatch("/toHEX");
						default:
							return t.dispatch("/toString", e)
					}
				}
			}, {
				key: "/toRGB",
				value: function(t) {
					return t.dispatch("/toString", "rgb")
				}
			}, {
				key: "/toHSL",
				value: function(t) {
					return t.dispatch("/toString", "hsl")
				}
			}, {
				key: "/toHEX",
				value: function(t) {
					return t.dispatch("/toString", "hex").toUpperCase()
				}
			}]), e
		}();

		function L(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var I = function() {
				i(e, E);
				var t = L(e);

				function e() {
					return a(this, e), t.apply(this, arguments)
				}
				return o(e, [{
					key: "initialize",
					value: function() {
						s(l(e.prototype), "initialize", this).call(this), this.$store.swatch = []
					}
				}, {
					key: "/swatch.index",
					value: function(t) {
						return t.swatch && Array.isArray(t.swatch) && 0 < t.swatch.length ? t.swatch : []
					}
				}, {
					key: "/swatch.set",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
						t.swatch = e && Array.isArray(e) ? e : []
					}
				}]), e
			}(),
			H = function() {
				function e(t) {
					a(this, e), this.callbacks = [], this.actions = [], this.modules = t.modules || [], this.initialize()
				}
				return o(e, [{
					key: "initialize",
					value: function() {
						this.initializeModule()
					}
				}, {
					key: "initializeModule",
					value: function() {
						var e = this;
						this.modules.forEach(function(t) {
							new t(e)
						})
					}
				}, {
					key: "action",
					value: function(t, e) {
						this.actions[t] = {
							context: e,
							callback: e[t]
						}
					}
				}, {
					key: "dispatch",
					value: function(t) {
						var e = Array.prototype.slice.call(arguments);
						t = e.shift();
						t = this.actions[t];
						if (t) return t.callback.apply(t.context, [this].concat(v(e)))
					}
				}, {
					key: "module",
					value: function(t) {}
				}, {
					key: "on",
					value: function(t, e) {
						this.callbacks.push({
							event: t,
							callback: e
						})
					}
				}, {
					key: "off",
					value: function(e, n) {
						switch (arguments.length) {
							case 0:
								this.callbacks = [];
								break;
							case 1:
								this.callbacks = this.callbacks.filter(function(t) {
									return t.event !== e
								});
								break;
							case 2:
								this.callbacks = this.callbacks.filter(function(t) {
									return t.event !== e && t.callback !== n
								})
						}
					}
				}, {
					key: "emit",
					value: function() {
						var e = Array.prototype.slice.call(arguments),
							n = e.shift();
						this.callbacks.filter(function(t) {
							return t.event === n
						}).forEach(function(t) {
							t && "function" == typeof t.callback && t.callback.apply(t, v(e))
						})
					}
				}]), e
			}();

		function A(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var T = function() {
			i(n, R);
			var e = A(n);

			function n(t) {
				return a(this, n), e.call(this, t)
			}
			return o(n, [{
				key: "initialize",
				value: function() {
					var t, e = this;
					switch (this.$store && this.destroy(), this.$store = new H({
							modules: [M, I]
						}), this.$store.on("changeColor", function() {
							e.opt.onChange && "function" == typeof e.opt.onChange && e.opt.onChange(e.getColor())
						}), this.$store.on("lastUpdateColor", function() {
							e.opt.onChanged && "function" == typeof e.opt.onChanged && e.opt.onChanged(e.getColor())
						}), this.$store.on("changeFormat", function() {
							e.opt.onChangeFormat && "function" == typeof e.opt.onChangeFormat && e.opt.onChangeFormat(e.$store.format)
						}), this.$body = new d(this.opt.container || document.body), this.$root = new d("div", "el-colorpicker", {}), this.$body.append(this.$root), this.opt.type) {
						case "circle":
						case "ring":
						case "mini":
						case "none":
							t = this.opt.type;
							break;
						default:
							t = "default"
					}
					this.$root.el.classList.add("el-colorpicker--".concat(t)), this.$store.dispatch("/swatch.set", this.opt.swatchColors), this.render(this.$root), this.$store.dispatch("/changeFormat", this.opt.format), this.$store.dispatch("/initColor", this.opt.color), this.initializeEvent(), this.opt.onInit && "function" == typeof this.opt.onInit && this.opt.onInit(this)
				}
			}, {
				key: "getColor",
				value: function() {
					return this.$store.dispatch("/toColor", (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0) || this.opt.outputFormat)
				}
			}, {
				key: "setColor",
				value: function(t) {
					this.$store.dispatch("/changeColor", t)
				}
			}, {
				key: "setOption",
				value: function(t) {
					t && (this.opt = Object.assign(this.opt, t), this.destroy(), this.initialize())
				}
			}, {
				key: "destroy",
				value: function() {
					this.$store && (s(l(n.prototype), "destroy", this).call(this), this.$store.off("changeColor"), this.$store.off("lastUpdateColor"), this.$store.off("changeFormat"), this.$body.html(""), delete this.$store, this.opt.onDestroy && "function" == typeof this.opt.onDestroy && this.opt.onDestroy())
				}
			}]), n
		}();

		function V(t, e) {
			return b(t) || function(t, e) {
				var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
				if (null != n) {
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}
			}(t, e) || p(t, e) || m()
		}

		function U(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var F = function() {
			i(e, R);
			var t = U(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "template",
				value: function() {
					var t = [this.opt.paletteHeight && "--palette-height: ".concat(this.opt.paletteHeight, "px;")].filter(Boolean).join("");
					return '\n<nav class="el-cp-palette" style="'.concat(t, '">\n<span ref="$drag_pointer" data-axis-value="all" class="el-cp-palette__pointer"></span>\n</nav>\n')
				}
			}, {
				key: "setBackgroundColor",
				value: function(t) {
					this.$el.el.style.setProperty("--palette-bg", t)
				}
			}, {
				key: "refresh",
				value: function() {
					this.cacheSize(), this.setColorUI()
				}
			}, {
				key: "calculateSV",
				value: function() {
					var t = this.drag_pointer_pos || {
							x: 0,
							y: 0
						},
						e = t.x / 100,
						t = (100 - t.y) / 100;
					this.$store.dispatch("/changeColor", {
						type: "hsv",
						s: e,
						v: t
					})
				}
			}, {
				key: "setColorUI",
				value: function() {
					var t = 100 * this.$store.hsv.s,
						e = 100 * (1 - this.$store.hsv.v);
					this.refs.$drag_pointer.css({
						left: "".concat(t, "%"),
						top: "".concat(e, "%")
					}), this.drag_pointer_pos = {
						x: t,
						y: e
					}, this.setBackgroundColor(this.$store.dispatch("/getHueColor"))
				}
			}, {
				key: "setMainColor",
				value: function(t) {
					var e = this.$el.offset(),
						n = (k.pos(t).pageX - e.left) / this.w * 100,
						e = (k.pos(t).pageY - e.top) / this.h * 100,
						n = Math.max(0, Math.min(100, n)),
						e = Math.max(0, Math.min(100, e));
					this.refs.$drag_pointer.css({
						left: "".concat(n, "%"),
						top: "".concat(e, "%")
					}), this.drag_pointer_pos = {
						x: n,
						y: e
					}, this.calculateSV()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "mouseup document",
				value: function() {
					this.isDown && (this.isDown = !1, this.$store.emit("lastUpdateColor"))
				}
			}, {
				key: "mousemove document",
				value: function(t) {
					this.isDown && (this.cacheSize(), this.setMainColor(t))
				}
			}, {
				key: "mousedown",
				value: function(t) {
					this.isDown = !0, this.cacheSize(), this.axis = new d(t.target).attr("data-axis-value"), this.x = t.pageX, this.y = t.pageY, this.setMainColor(t)
				}
			}, {
				key: "touchend document",
				value: function() {
					this["mouseup document"]()
				}
			}, {
				key: "touchmove document",
				value: function(t) {
					this.isDown && this.setMainColor(t)
				}
			}, {
				key: "touchstart",
				value: function(t) {
					t.preventDefault(), this.isDown = !0, this.cacheSize(), this.setMainColor(t)
				}
			}, {
				key: "contextmenu",
				value: function() {
					this["mouseup document"]()
				}
			}, {
				key: "cacheSize",
				value: function() {
					var t = V(this.$el.size(), 2),
						e = t[0],
						t = t[1];
					this.w = e, this.h = t
				}
			}]), e
		}();

		function G(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var z = function() {
			i(e, R);
			var t = G(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "template",
				value: function() {
					return this.opt.useInformation ? '\n<fieldset class="el-cp-color-form">\n<legend>change color code</legend>\n<div class="el-cp-color-form__wrap">\n<div class="el-cp-color-field">\n<label>\n<input ref="$hexCode" type="text"/>\n<span>HEX</span>\n</label>\n</div>\n<div class="el-cp-color-field">\n<label>\n<input ref="$rgb_r" type="number" step="1" min="0" max="255"/>\n<span>R</span>\n</label>\n<label>\n<input ref="$rgb_g" type="number" step="1" min="0" max="255"/>\n<span>G</span>\n</label>\n<label>\n<input ref="$rgb_b" type="number" step="1" min="0" max="255"/>\n<span>B</span>\n</label>\n<label>\n<input ref="$rgb_a" type="number" step="0.01" min="0" max="1"/>\n<span>A</span>\n</label>\n</div>\n<div class="el-cp-color-field">\n<label>\n<input ref="$hsl_h" type="number" step="1" min="0" max="360"/>\n<span>H</span>\n</label>\n<label>\n<input ref="$hsl_s" type="number" step="1" min="0" max="100"/>\n<span>S</span>\n</label>\n<label>\n<input ref="$hsl_l" type="number" step="1" min="0" max="100"/>\n<span>L</span>\n</label>\n<label>\n<input ref="$hsl_a" type="number" step="0.01" min="0" max="1"/>\n<span>A</span>\n</label>\n</div>\n<nav ref="$informationChange" class="el-cp-color-nav">\n<label title="Change color model" class="el-cp-color-nav__label">\n<select ref="$changeColorModel">\n<option value="hex">HEX</option>\n<option value="rgb">RGB</option>\n<option value="hsl">HSL</option>\n</select>\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n<polyline points="6 9 12 15 18 9"></polyline>\n</svg>\n</label>\n</nav>\n</div>\n</fieldset>\n' : null
				}
			}, {
				key: "setCurrentFormat",
				value: function(t) {
					this.format = t, this.initFormat()
				}
			}, {
				key: "initFormat",
				value: function() {
					var e = this,
						n = this.format || "hex";
					["hex", "rgb", "hsl"].filter(function(t) {
						return t !== n
					}).forEach(function(t) {
						e.$el.el.classList.remove(t)
					}), this.$el.el.classList.add(n)
				}
			}, {
				key: "goToFormat",
				value: function(t) {
					"rgb" !== (this.format = t) && "hsl" !== t || this.initFormat(), this.$store.dispatch("/changeFormat", this.format)
				}
			}, {
				key: "getFormat",
				value: function() {
					return this.format || "hex"
				}
			}, {
				key: "checkNumberKey",
				value: function(t) {
					t = t.which;
					return !(!(37 !== t && 39 !== t && 8 !== t && 46 !== t && 9 !== t ? !1 : !0) && (t < 48 || 57 < t))
				}
			}, {
				key: "checkNotNumberKey",
				value: function(t) {
					return !this.checkNumberKey(t)
				}
			}, {
				key: "changeRgbColor",
				value: function() {
					this.$store.dispatch("/changeColor", {
						type: "rgb",
						r: this.refs.$rgb_r.int(),
						g: this.refs.$rgb_g.int(),
						b: this.refs.$rgb_b.int(),
						a: this.refs.$rgb_a.float()
					}), this.$store.emit("lastUpdateColor")
				}
			}, {
				key: "changeHslColor",
				value: function() {
					this.$store.dispatch("/changeColor", {
						type: "hsl",
						h: this.refs.$hsl_h.int(),
						s: this.refs.$hsl_s.int(),
						l: this.refs.$hsl_l.int(),
						a: this.refs.$hsl_a.float()
					}), this.$store.emit("lastUpdateColor")
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "input $rgb_r",
				value: function() {
					this.changeRgbColor()
				}
			}, {
				key: "input $rgb_g",
				value: function() {
					this.changeRgbColor()
				}
			}, {
				key: "input $rgb_b",
				value: function() {
					this.changeRgbColor()
				}
			}, {
				key: "input $rgb_a",
				value: function() {
					this.changeRgbColor()
				}
			}, {
				key: "input $hsl_h",
				value: function() {
					this.changeHslColor()
				}
			}, {
				key: "input $hsl_s",
				value: function() {
					this.changeHslColor()
				}
			}, {
				key: "input $hsl_l",
				value: function() {
					this.changeHslColor()
				}
			}, {
				key: "input $hsl_a",
				value: function() {
					this.changeHslColor()
				}
			}, {
				key: "keyup $hexCode",
				value: function() {
					var t = this.refs.$hexCode.val();
					"#" !== t.charAt(0) || 7 !== t.length && 9 !== t.length || (this.$store.dispatch("/changeColor", t), this.$store.emit("lastUpdateColor"))
				}
			}, {
				key: "change $changeColorModel",
				value: function(t) {
					switch (t.target.value) {
						case "hex":
						case "rgb":
						case "hsl":
							this.format = t.target.value;
							break;
						default:
							this.format = "hex"
					}
					this.initFormat(), this.$store.dispatch("/changeFormat", this.format), this.$store.emit("lastUpdateColor")
				}
			}, {
				key: "setRGBInput",
				value: function() {
					this.refs.$rgb_r.val(this.$store.rgb.r), this.refs.$rgb_g.val(this.$store.rgb.g), this.refs.$rgb_b.val(this.$store.rgb.b), this.refs.$rgb_a.val(this.$store.alpha)
				}
			}, {
				key: "setHSLInput",
				value: function() {
					this.refs.$hsl_h.val(this.$store.hsl.h), this.refs.$hsl_s.val(this.$store.hsl.s), this.refs.$hsl_l.val(this.$store.hsl.l), this.refs.$hsl_a.val(this.$store.alpha)
				}
			}, {
				key: "setHexInput",
				value: function() {
					this.refs.$hexCode.val(this.$store.dispatch("/toHEX"))
				}
			}, {
				key: "refresh",
				value: function() {
					this.opt.useInformation && (this.setCurrentFormat(this.$store.format), this.setRGBInput(), this.setHSLInput(), this.setHexInput())
				}
			}]), e
		}();

		function N(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Y = function() {
			i(e, R);
			var t = N(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "template",
				value: function() {
					return 0 < this.$store.dispatch("/swatch.index").length ? '\n<div class="el-cp-swatches">\n'.concat(this.opt.swatchTitle ? '\n<header class="el-cp-swatches__header">\n<h2 ref="$colorSwatchTitle">'.concat(this.opt.swatchTitle, "</h2>\n</header>\n") : "", '\n<div ref="$index"></div>\n</div>\n') : null
				}
			}, {
				key: "load $index",
				value: function() {
					var t = this.$store.dispatch("/swatch.index");
					return '\n<ul class="el-cp-colors">\n'.concat(t.map(function(t) {
						return '\n<li>\n<button\ntype="button"\ndata-color="'.concat(t, '"\nclass="el-cp-colors__item"\nstyle="--color: ').concat(t, '">\n').concat(t, "\n</button>\n</li>\n")
					}).join(""), "\n</ul>\n")
				}
			}, {
				key: "refresh",
				value: function() {
					this.load()
				}
			}, {
				key: "addColor",
				value: function(t) {
					this.$store.dispatch("/addCurrentColor", t)
				}
			}, {
				key: "click $index button",
				value: function(t) {
					this.$store.dispatch("/changeColor", t.$delegateTarget.attr("data-color")), this.$store.emit("lastUpdateColor")
				}
			}]), e
		}();

		function X(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var q = function() {
			i(n, R);
			var e = X(n);

			function n(t) {
				return a(this, n), e.call(this, t)
			}
			return o(n, [{
				key: "refresh",
				value: function() {}
			}, {
				key: "refreshColorUI",
				value: function(t) {}
			}, {
				key: "changeColor",
				value: function(t) {
					this.$store.dispatch("/changeColor", t)
				}
			}, {
				key: "mouseup document",
				value: function(t) {
					this.onDragEnd(t)
				}
			}, {
				key: "mousemove document",
				value: function(t) {
					this.onDragMove(t)
				}
			}, {
				key: "mousedown $bar",
				value: function(t) {
					t.preventDefault(), this.isDown = !0
				}
			}, {
				key: "mousedown $container",
				value: function(t) {
					this.isDown = !0, this.onDragStart(t)
				}
			}, {
				key: "touchend document",
				value: function(t) {
					this.onDragEnd(t)
				}
			}, {
				key: "touchmove document",
				value: function(t) {
					this.onDragMove(t)
				}
			}, {
				key: "touchstart $bar",
				value: function(t) {
					t.preventDefault(), this.isDown = !0
				}
			}, {
				key: "touchstart $container",
				value: function(t) {
					this.onDragStart(t)
				}
			}, {
				key: "onDragStart",
				value: function(t) {
					this.isDown = !0, this.refreshColorUI(t)
				}
			}, {
				key: "onDragMove",
				value: function(t) {
					this.isDown && this.refreshColorUI(t)
				}
			}, {
				key: "onDragEnd",
				value: function() {
					this.isDown && (this.$store.emit("lastUpdateColor"), this.isDown = !1)
				}
			}, {
				key: "contextmenu",
				value: function() {
					this.onDragEnd()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), n
		}();

		function W(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var K = function() {
			i(n, q);
			var e = W(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).minValue = 0, t.maxValue = 1, t
			}
			return o(n, [{
				key: "getMinMaxPosition",
				value: function() {
					var t = this.getMinPosition(),
						e = this.getMaxDist();
					return {
						min: t,
						max: t + e,
						width: e
					}
				}
			}, {
				key: "getCurrent",
				value: function(t) {
					return this.getMaxDist() * t
				}
			}, {
				key: "getMinPosition",
				value: function() {
					return this.refs.$container.offset().left
				}
			}, {
				key: "getMaxDist",
				value: function() {
					return this.refs.$container.size()[0]
				}
			}, {
				key: "getDist",
				value: function(t) {
					var e = this.getMinMaxPosition(),
						n = e.min,
						e = e.max,
						n = t < n ? 0 : e < t ? 100 : (t - n) / (e - n) * 100;
					return n
				}
			}, {
				key: "getCalculatedDist",
				value: function(t) {
					t = t ? this.getMousePosition(t) : this.getCurrent(this.getDefaultValue() / this.maxValue);
					return this.getDist(t)
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return 0
				}
			}, {
				key: "setMousePosition",
				value: function(t) {
					this.refs.$bar.css({
						left: "".concat(t, "%")
					})
				}
			}, {
				key: "getMousePosition",
				value: function(t) {
					return k.pos(t).pageX
				}
			}, {
				key: "setColorUI",
				value: function() {
					var t = (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || this.getDefaultValue();
					this.lastV !== t && (this.lastV = t, this.setMousePosition((t || 0) / this.maxValue * 100))
				}
			}, {
				key: "refresh",
				value: function() {
					this.setColorUI()
				}
			}]), n
		}();

		function Z(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var J = function() {
			i(n, K);
			var e = Z(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).minValue = 0, t.maxValue = 360, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<nav class="el-cp-slider el-cp-slider--hue">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n'
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.hsv.h
				}
			}, {
				key: "refreshColorUI",
				value: function(t) {
					t = this.getCalculatedDist(t);
					this.changeColor({
						h: t / 100 * this.maxValue,
						type: "hsv"
					})
				}
			}]), n
		}();

		function Q(e, t) {
			var n, r = Object.keys(e);
			return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), r.push.apply(r, n)), r
		}

		function tt(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Q(Object(n), !0).forEach(function(t) {
					_(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function et(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var nt = function() {
			i(n, K);
			var e = et(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).minValue = 0, t.maxValue = 1, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<nav class="el-cp-slider el-cp-slider--alpha">\n<p ref="$container" class="el-cp-slider__body">\n<span ref="$colorbar" class="el-cp-slider__bar"></span>\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n'
				}
			}, {
				key: "refresh",
				value: function() {
					s(l(n.prototype), "refresh", this).call(this), this.setOpacityColorBar()
				}
			}, {
				key: "setOpacityColorBar",
				value: function() {
					var t = j().format(tt(tt({}, this.$store.rgb), {}, {
							a: 0
						}), "rgb"),
						e = j().format(tt(tt({}, this.$store.rgb), {}, {
							a: 1
						}), "rgb");
					this.refs.$colorbar.css("background", "linear-gradient(to right, ".concat(t, ", ").concat(e, ")"))
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.alpha
				}
			}, {
				key: "refreshColorUI",
				value: function(t) {
					t = this.getCalculatedDist(t);
					this.setColorUI(t / 100 * this.maxValue), this.changeColor({
						a: Math.floor(t) / 100 * this.maxValue
					})
				}
			}]), n
		}();

		function rt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var ot = function() {
			i(e, R);
			var t = rt(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "template",
				value: function() {
					return '\n<i class="el-cp-color-preview">\n<em ref="$color"></em>\n</i>\n'
				}
			}, {
				key: "refresh",
				value: function() {
					this.refs.$color.css("background-color", this.$store.dispatch("/toRGB"))
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), e
		}();

		function it(t, e, n, r, o, i, a) {
			try {
				var c = t[i](a),
					u = c.value
			} catch (t) {
				return void n(t)
			}
			c.done ? e(u) : Promise.resolve(u).then(r, o)
		}
		var P = ee(757),
			at = ee.n(P);
		var ct = "EyeDropper" in window;

		function ut(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var lt = function() {
			i(n, R);
			var c, t, e = ut(n);

			function n() {
				return a(this, n), e.apply(this, arguments)
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<nav class="el-cp-color-eyedropper">\n<button type="button" ref="$button" title="Eyedropper">\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.797 18.344c-.019.001-.074-.009-.24-.065-.277-.094-.745-.25-1.137.141l-1.542 1.543a.595.595 0 0 1-.84-.84L5.58 17.58c.391-.39.235-.859.141-1.14-.045-.134-.06-.195-.072-.206-.002-.003-.005-.003-.007-.001l1.06-1.06.703.705a.432.432 0 1 0 .611-.611l-.703-.705.557-.557.703.703a.434.434 0 0 0 .611 0 .434.434 0 0 0 0-.61l-.703-.703.571-.572.703.704a.435.435 0 0 0 .612 0 .434.434 0 0 0 0-.61l-.705-.706L14 7.875l2.126 2.127-8.33 8.342zM19.29 9.37l-.654-.655 1.669-1.668a2.372 2.372 0 0 0-3.353-3.354l-1.669 1.669-.655-.654a1.341 1.341 0 0 0-1.898 1.897l.658.658-8.358 8.359c-.373.373-.214.841-.13 1.094.061.18.069.24.069.253l-1.543 1.542a1.458 1.458 0 1 0 2.062 2.061l1.536-1.54c.019-.003.08.006.259.066.252.085.72.243 1.093-.13l8.359-8.358.658.658a1.341 1.341 0 1 0 1.897-1.898z" fill="currentColor"/>\n</svg>\n</button>\n</nav>\n'
				}
			}, {
				key: "click $button",
				value: (c = at().mark(function t() {
					var e;
					return at().wrap(function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								if (ct) return e = new EyeDropper, t.next = 4, e.open();
								t.next = 7;
								break;
							case 4:
								e = t.sent, this.$store.dispatch("/changeColor", e.sRGBHex), this.$store.emit("lastUpdateColor");
							case 7:
							case "end":
								return t.stop()
						}
					}, t, this)
				}), t = function() {
					var t = this,
						a = arguments;
					return new Promise(function(e, n) {
						var r = c.apply(t, a);

						function o(t) {
							it(r, e, n, o, i, "next", t)
						}

						function i(t) {
							it(r, e, n, o, i, "throw", t)
						}
						o(void 0)
					})
				}, function() {
					return t.apply(this, arguments)
				})
			}]), n
		}();

		function st(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var ft = function() {
			i(e, R);
			var t = st(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						Hue: J,
						Opacity: nt,
						ColorPreview: ot,
						Eyedropper: lt
					}
				}
			}, {
				key: "template",
				value: function() {
					var t = this.opt.useOpacity ? '<template target="Opacity"></template>' : "";
					return '\n<article class="el-cp-color-control">\n'.concat(ct ? '\n<div class="el-cp-color-control__left">\n<template target="Eyedropper"></template>\n</div>\n' : "", '\n<div class="el-cp-color-control__body">\n<template target="Hue"></template>\n').concat(t, '\n</div>\n<div class="el-cp-color-control__right">\n<template target="ColorPreview"></template>\n</div>\n</article>\n')
				}
			}, {
				key: "refresh",
				value: function() {
					this.Hue.setColorUI(), this.opt.useOpacity && this.Opacity.setColorUI()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), e
		}();

		function ht(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var pt = function() {
			i(e, T);
			var t = ht(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						Palette: F,
						Control: ft,
						Forms: z,
						Swatch: Y
					}
				}
			}, {
				key: "template",
				value: function() {
					return '\n<div class="el-colorpicker__wrap">\n<template target="Palette"></template>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n'
				}
			}]), e
		}();

		function vt(t, e) {
			return e = void 0 === e ? 1 : e, Math.round(t * e) / e
		}

		function yt(t) {
			return t * Math.PI / 180
		}

		function gt(t, e, n, r) {
			n = 2 < arguments.length && void 0 !== n ? n : 0, r = 3 < arguments.length && void 0 !== r ? r : 0;
			return {
				x: function(t, e, n) {
					return (2 < arguments.length && void 0 !== n ? n : 0) + e * Math.cos(yt(t))
				}(t, e, n),
				y: function(t, e, n) {
					return (2 < arguments.length && void 0 !== n ? n : 0) + e * Math.sin(yt(t))
				}(t, e, r)
			}
		}

		function dt(t, e) {
			return t = (t = 180 * (t = Math.atan2(e, t)) / Math.PI) < 0 ? 360 + t : t
		}

		function bt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var mt = function() {
			i(n, R);
			var e = bt(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).width = t.opt.paletteWidth || 200, t.height = t.opt.paletteWidth || 200, t.thickness = 0, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<div class="el-cp-palette-circle">\n<div ref="$wrap" class="el-cp-palette-circle__wrap">\n<canvas ref="$colorwheel" class="el-cp-palette-circle__canvas"></canvas>\n<span ref="$valuewheel" class="el-cp-palette-circle__brightness"></span>\n<i ref="$drag_pointer" class="el-cp-palette-circle__pointer"></i>\n</div>\n</div>\n'
				}
			}, {
				key: "afterRender",
				value: function() {
					this.refresh()
				}
			}, {
				key: "refresh",
				value: function(t) {
					this.setColorUI(t)
				}
			}, {
				key: "setColorUI",
				value: function(t) {
					this.renderCanvas(), this.renderValue(), this.setHueColor(null, t)
				}
			}, {
				key: "renderValue",
				value: function() {
					var t = 1 - this.$store.hsv.v;
					this.refs.$valuewheel.css({
						"background-color": "rgba(0, 0, 0, ".concat(t, ")")
					})
				}
			}, {
				key: "renderWheel",
				value: function(t, e) {
					var n = new d("canvas"),
						r = n.el.getContext("2d");
					n.el.width = t, n.el.height = e;
					for (var o = r.getImageData(0, 0, t, e), i = o.data, a = Math.floor(t / 2), c = Math.floor(e / 2), u = e < t ? c : a, l = a, s = c, f = 0; f < e; f++)
						for (var h = 0; h < t; h++) {
							var p = h - l + 1,
								v = f - s + 1,
								y = p * p + v * v,
								v = dt(p, v),
								v = j().HSVtoRGB(v, Math.min(Math.sqrt(y) / u, 1), 1),
								y = 4 * (f * t + h);
							i[y] = v.r, i[1 + y] = v.g, i[2 + y] = v.b, i[3 + y] = 255
						}
					return r.putImageData(o, 0, 0), 0 < this.thickness && (r.globalCompositeOperation = "destination-out", r.fillStyle = "black", r.beginPath(), r.arc(l, s, u - this.thickness, 0, 2 * Math.PI), r.closePath(), r.fill()), n
				}
			}, {
				key: "renderCanvas",
				value: function() {
					var t, e;
					this.$store.createdWheelCanvas || ((e = this.refs.$colorwheel).el.width = this.width, e.el.height = this.height, t = e.el.getContext("2d"), e = this.renderWheel(this.width, this.height), t.drawImage(e.el, 0, 0), this.$store.createdWheelCanvas = !0)
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.hsv.h
				}
			}, {
				key: "getDefaultSaturation",
				value: function() {
					return this.$store.hsv.s
				}
			}, {
				key: "getCurrentXY",
				value: function(t, e, n, r, o) {
					return t ? k.posXY(t) : gt(e, n, r, o)
				}
			}, {
				key: "getRectangle",
				value: function() {
					var t = this.state.get("$wrap.width"),
						e = this.state.get("$wrap.height"),
						n = this.state.get("$colorwheel.width") / 2,
						r = this.refs.$wrap.offset().left,
						o = this.refs.$wrap.offset().top;
					return {
						minX: r,
						minY: o,
						width: t,
						height: e,
						radius: n,
						centerX: r + t / 2,
						centerY: o + e / 2
					}
				}
			}, {
				key: "setHueColor",
				value: function(t, e) {
					var n, r, o, i, a, c, u, l, s, f, h;
					this.state.get("$wrap.width") && (n = (s = this.getRectangle()).minX, r = s.minY, f = s.radius, o = s.centerX, u = s.centerY, i = s.width, h = s.height, c = (a = (l = (c = this.getCurrentXY(t, this.getDefaultValue(), this.getDefaultSaturation() * f, o, u)).x) - o) * a + (t = (s = c.y) - u) * t, t = dt(a, t), f * f < c && (l = (u = this.getCurrentXY(null, t, f, o, u)).x, s = u.y), f = Math.min(Math.sqrt(c) / f, 1), h = (s - r) / h * 100, this.refs.$drag_pointer.css({
						left: "".concat((l - n) / i * 100, "%"),
						top: "".concat(h, "%")
					}), e || this.changeColor({
						type: "hsv",
						h: t,
						s: f
					}))
				}
			}, {
				key: "changeColor",
				value: function(t) {
					this.$store.dispatch("/changeColor", t)
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh(!0)
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh(!0)
				}
			}, {
				key: "mouseup document",
				value: function() {
					this.isDown && (this.isDown = !1, this.$store.emit("lastUpdateColor"))
				}
			}, {
				key: "mousemove document",
				value: function(t) {
					this.isDown && this.setHueColor(t)
				}
			}, {
				key: "mousedown $drag_pointer",
				value: function(t) {
					t.preventDefault(), this.isDown = !0
				}
			}, {
				key: "mousedown $wrap",
				value: function(t) {
					this.isDown = !0, this.setHueColor(t)
				}
			}, {
				key: "touchend document",
				value: function() {
					this.isDown && (this.isDown = !1, this.$store.emit("lastUpdateColor"))
				}
			}, {
				key: "touchmove document",
				value: function(t) {
					this.isDown && this.setHueColor(t)
				}
			}, {
				key: "touchstart $drag_pointer",
				value: function(t) {
					t.preventDefault(), this.isDown = !0
				}
			}, {
				key: "touchstart $wrap",
				value: function(t) {
					t.preventDefault(), this.isDown = !0, this.setHueColor(t)
				}
			}, {
				key: "contextmenu",
				value: function() {
					this["mouseup document"]()
				}
			}]), n
		}();

		function kt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var wt = function() {
			i(n, K);
			var e = kt(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).minValue = 0, t.maxValue = 1, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<nav class="el-cp-slider el-cp-slider--brightness">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n'
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.hsv.v
				}
			}, {
				key: "refreshColorUI",
				value: function(t) {
					t = this.getCalculatedDist(t);
					this.setColorUI(t / 100 * this.maxValue), this.changeColor({
						type: "hsv",
						v: t / 100 * this.maxValue
					})
				}
			}]), n
		}();

		function Ot(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Ct = function() {
			i(e, R);
			var t = Ot(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						Brightness: wt,
						Opacity: nt,
						ColorPreview: ot,
						Eyedropper: lt
					}
				}
			}, {
				key: "template",
				value: function() {
					var t = this.opt.useOpacity ? '<template target="Opacity"></template>' : "";
					return '\n<article class="el-cp-color-control">\n'.concat(ct ? '\n<div class="el-cp-color-control__left">\n<template target="Eyedropper"></template>\n</div>\n' : "", '\n<div class="el-cp-color-control__body">\n<template target="Brightness"></template>\n').concat(t, '\n</div>\n<div class="el-cp-color-control__right">\n<template target="ColorPreview"></template>\n</div>\n</article>\n')
				}
			}, {
				key: "refresh",
				value: function() {
					this.Brightness.setColorUI(), this.opt.useOpacity && this.Opacity.setColorUI()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), e
		}();

		function xt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var $t = function() {
			i(e, T);
			var t = xt(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						PaletteWheel: mt,
						Control: Ct,
						Forms: z,
						Swatch: Y
					}
				}
			}, {
				key: "template",
				value: function() {
					return '\n<div class="el-colorpicker__wrap">\n<template target="PaletteWheel"></template>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n'
				}
			}]), e
		}();

		function Rt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var _t = function() {
			i(n, mt);
			var e = Rt(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).width = t.opt.paletteWidth || 200, t.height = t.opt.paletteWidth || 200, t.thickness = t.opt.paletteThickness || 16, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<div data-type="ring" class="el-cp-palette-ring">\n<div ref="$wrap" class="el-cp-palette-ring__wrap">\n<canvas ref="$colorwheel" class="el-cp-palette-ring__canvas"></canvas>\n<i ref="$drag_pointer" class="el-cp-palette-ring__pointer"></i>\n</div>\n</div>\n'
				}
			}, {
				key: "setColorUI",
				value: function(t) {
					this.renderCanvas(), this.setHueColor(null, t)
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.hsv.h
				}
			}, {
				key: "setHueColor",
				value: function(t, e) {
					var n, r, o, i, a, c, u;
					this.state.get("$el.width") && (n = (u = this.getRectangle()).minX, r = u.minY, o = u.width, i = u.height, a = u.radius, c = u.centerX, u = u.centerY, t = dt((t = this.getCurrentXY(t, this.getDefaultValue(), a, c, u)).x - c, t.y - u), u = this.getCurrentXY(null, t, a - .5 * this.thickness, c, u), this.refs.$drag_pointer.css({
						left: "".concat((u.x - n) / o * 100, "%"),
						top: "".concat((u.y - r) / i * 100, "%")
					}), e || this.changeColor({
						type: "hsv",
						h: t
					}))
				}
			}]), n
		}();

		function Pt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var jt = function() {
			i(e, R);
			var t = Pt(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						Hue: J,
						Brightness: wt,
						Opacity: nt,
						ColorPreview: ot,
						Eyedropper: lt
					}
				}
			}, {
				key: "template",
				value: function() {
					var t = this.opt.useOpacity ? '\n<template target="Opacity"></template>\n' : '\n<template target="Hue"></template>\n<template target="Brightness"></template>\n';
					return '\n<article class="el-cp-color-control">\n'.concat(ct ? '\n<div class="el-cp-color-control__left">\n<template target="Eyedropper"></template>\n</div>\n' : "", '\n<div class="el-cp-color-control__body">\n').concat(t, '\n</div>\n<div class="el-cp-color-control__right">\n<template target="ColorPreview"></template>\n</div>\n</article>\n')
				}
			}, {
				key: "refresh",
				value: function() {
					this.opt.useOpacity && this.Opacity.setColorUI()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), e
		}();

		function Et(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var St = function() {
			i(e, T);
			var t = Et(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						PaletteRing: _t,
						Palette: F,
						Control: jt,
						Forms: z,
						Swatch: Y
					}
				}
			}, {
				key: "template",
				value: function() {
					var t = this.opt,
						e = t.paletteWidth,
						t = t.paletteThickness,
						t = [e && "--width: ".concat(e, "px;"), e && "--height: ".concat(e, "px;"), "--thickness: ".concat(t || 16, "px;")].filter(Boolean).join("");
					return '\n<div class="el-colorpicker__wrap">\n<div class="el-colorpicker__body" style="'.concat(t, '">\n<template target="PaletteRing"></template>\n<template target="Palette"></template>\n</div>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n')
				}
			}]), e
		}();

		function Bt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Dt = function() {
			i(n, K);
			var e = Bt(n);

			function n(t) {
				return a(this, n), e.call(this, t)
			}
			return o(n, [{
				key: "getMaxDist",
				value: function() {
					return this.state.get("$container.height")
				}
			}, {
				key: "setMousePosition",
				value: function(t) {
					this.refs.$bar.css({
						top: "".concat(t, "%")
					})
				}
			}, {
				key: "getMousePosition",
				value: function(t) {
					return k.pos(t).pageY
				}
			}, {
				key: "getMinPosition",
				value: function() {
					return this.refs.$container.offset().top
				}
			}]), n
		}();

		function Mt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Lt = function() {
			i(n, Dt);
			var e = Mt(n);

			function n(t) {
				return a(this, n), (t = e.call(this, t)).minValue = 0, t.maxValue = 360, t
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<nav class="el-cp-slider el-cp-slider--vertical el-cp-slider--hue">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__brick"></i>\n</p>\n</nav>\n'
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.hsv.h
				}
			}, {
				key: "refreshColorUI",
				value: function(t) {
					t = this.getCalculatedDist(t);
					this.changeColor({
						h: t / 100 * this.maxValue,
						type: "hsv"
					})
				}
			}]), n
		}();

		function It(e, t) {
			var n, r = Object.keys(e);
			return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), r.push.apply(r, n)), r
		}

		function Ht(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? It(Object(n), !0).forEach(function(t) {
					_(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function At(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Tt = function() {
			i(n, Dt);
			var e = At(n);

			function n(t) {
				return a(this, n), e.call(this, t)
			}
			return o(n, [{
				key: "template",
				value: function() {
					return '\n<div class="el-cp-slider el-cp-slider--vertical el-cp-slider--alpha">\n<p ref="$container" class="el-cp-slider__body">\n<span ref="$colorbar" class="el-cp-slider__bar"></span>\n<i ref="$bar" class="el-cp-slider__brick"></i>\n</p>\n</div>\n'
				}
			}, {
				key: "refresh",
				value: function() {
					s(l(n.prototype), "refresh", this).call(this), this.setOpacityColorBar()
				}
			}, {
				key: "setOpacityColorBar",
				value: function() {
					var t = j().format(Ht(Ht({}, this.$store.rgb), {}, {
							a: 0
						}), "rgb"),
						e = j().format(Ht(Ht({}, this.$store.rgb), {}, {
							a: 1
						}), "rgb");
					this.refs.$colorbar.css("background", "linear-gradient(to top, ".concat(e, ", ").concat(t, ")"))
				}
			}, {
				key: "getDefaultValue",
				value: function() {
					return this.$store.alpha
				}
			}, {
				key: "refreshColorUI",
				value: function(t) {
					t = this.getCalculatedDist(t);
					this.setColorUI(t / 100 * this.maxValue), this.changeColor({
						a: Math.floor(t) / 100 * this.maxValue
					})
				}
			}]), n
		}();

		function Vt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Ut = function() {
			i(e, R);
			var t = Vt(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						HueVertical: Lt,
						OpacityVertical: Tt
					}
				}
			}, {
				key: "template",
				value: function() {
					var t = this.opt.useOpacity ? '<template target="OpacityVertical"></template>' : "";
					return '\n<div class="el-cp-color-control">\n<template target="HueVertical"></template>\n'.concat(t, "\n</div>\n")
				}
			}, {
				key: "refresh",
				value: function() {
					this.HueVertical.setColorUI(), this.opt.useOpacity && this.OpacityVertical.setColorUI()
				}
			}, {
				key: "@changeColor",
				value: function() {
					this.refresh()
				}
			}, {
				key: "@initColor",
				value: function() {
					this.refresh()
				}
			}]), e
		}();

		function Ft(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Gt = function() {
			i(e, T);
			var t = Ft(e);

			function e() {
				return a(this, e), t.apply(this, arguments)
			}
			return o(e, [{
				key: "components",
				value: function() {
					return {
						Palette: F,
						Control: Ut,
						Swatch: Y
					}
				}
			}, {
				key: "template",
				value: function() {
					return '\n<div class="el-colorpicker__wrap">\n<div class="el-colorpicker__body">\n<div class="el-colorpicker__palette">\n<template target="Palette"></template>\n</div>\n<template target="Control"></template>\n</div>\n<template target="Swatch"></template>\n</div>\n'
				}
			}]), e
		}();

		function zt(n) {
			var r = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var t, e = l(n);
				return u(this, r ? (t = l(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
			}
		}
		var Nt = function() {
				i(e, T);
				var t = zt(e);

				function e() {
					return a(this, e), t.apply(this, arguments)
				}
				return o(e, [{
					key: "components",
					value: function() {
						return {
							Swatch: Y
						}
					}
				}, {
					key: "template",
					value: function() {
						var t = this.$store.dispatch("/swatch.index");
						return '\n<div class="el-colorpicker__wrap">\n'.concat(0 < t.length ? '\n<template target="Swatch"></template>\n' : '\n<div class="el-colorpicker__empty">No colorSet</div>\n', "\n</div>\n")
					}
				}]), e
			}(),
			Yt = {
				container: void 0,
				type: null,
				color: "#ffffff",
				format: "hex",
				outputFormat: void 0,
				useInformation: !0,
				useOpacity: !0,
				paletteWidth: 200,
				paletteHeight: void 0,
				paletteThickness: 16,
				swatchTitle: "Color palette",
				swatchColors: [],
				onInit: void 0,
				onDestroy: void 0,
				onChange: void 0,
				onChanged: void 0,
				onChangeFormat: void 0
			};
		var Xt = function(e) {
			var n, r = this;

			function o(t) {
				switch (t) {
					case "circle":
						n = new $t(e);
						break;
					case "ring":
						n = new St(e);
						break;
					case "mini":
						n = new Gt(e);
						break;
					case "none":
						n = new Nt(e);
						break;
					default:
						n = new pt(e)
				}
				r.opt = n.opt, r.$el = n.$root.el
			}
			e = Object.assign({}, Yt, e), o(e.type), this.setType = function(t) {
				e = Object.assign({}, this.opt, {
					type: t,
					color: n.getColor()
				}), n.destroy(), o(t, this)
			}, this.initialize = function() {
				n.initialize(), r.opt = n.opt, r.$el = n.$root.el
			}, this.destroy = function() {
				n.destroy(), r.opt = null, r.$el = null
			}, this.getColor = function(t) {
				return n.getColor(t)
			}, this.setColor = function(t, e) {
				return n.setColor(t, e)
			}, this.setOption = function(t) {
				return n.setOption(t)
			}
		};

		function qt(t) {
			return null == t
		}

		function Wt(t) {
			return !qt(t)
		}

		function Kt(t) {
			return "string" == typeof t
		}
		var Zt = {
			center: 50,
			top: 0,
			left: 0,
			right: 100,
			bottom: 100
		};
		var Jt = /([\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)/gi,
			Qt = function() {
				function r() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
						e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
					a(this, r), this.value = t, this.unit = e
				}
				return o(r, [{
					key: Symbol.toPrimitive,
					value: function(t) {
						return "number" == t ? this.value : this.toString()
					}
				}, {
					key: "toString",
					value: function() {
						switch (this.unit) {
							case "string":
							case "number":
								return this.value + "";
							case "var":
								return "var(--".concat(this.value, ")");
							case "calc":
								return "calc(".concat(this.value, ")");
							default:
								return this.value + this.unit
						}
					}
				}, {
					key: "isUnitType",
					value: function(t) {
						return this.unit === t
					}
				}, {
					key: "isCalc",
					value: function() {
						return this.isUnitType("calc")
					}
				}, {
					key: "isFr",
					value: function() {
						return this.isUnitType("fr")
					}
				}, {
					key: "isPercent",
					value: function() {
						return this.isUnitType("%")
					}
				}, {
					key: "isPx",
					value: function() {
						return this.isUnitType("px")
					}
				}, {
					key: "isEm",
					value: function() {
						return this.isUnitType("em")
					}
				}, {
					key: "isDeg",
					value: function() {
						return this.isUnitType("deg")
					}
				}, {
					key: "isSecond",
					value: function() {
						return this.isUnitType("s")
					}
				}, {
					key: "isMs",
					value: function() {
						return this.isUnitType("ms")
					}
				}, {
					key: "isNumber",
					value: function() {
						return this.isUnitType("number")
					}
				}, {
					key: "isString",
					value: function() {
						return this.isUnitType("")
					}
				}, {
					key: "isVar",
					value: function() {
						return this.isUnitType("--")
					}
				}, {
					key: "set",
					value: function(t) {
						return this.value = t, this
					}
				}, {
					key: "add",
					value: function(t) {
						return this.value += +t, this
					}
				}, {
					key: "sub",
					value: function(t) {
						return this.add(-1 * t)
					}
				}, {
					key: "mul",
					value: function(t) {
						return this.value *= +t, this
					}
				}, {
					key: "div",
					value: function(t) {
						return this.value /= +t, this
					}
				}, {
					key: "mod",
					value: function(t) {
						return this.value %= +t, this
					}
				}, {
					key: "clone",
					value: function() {
						return new r(this.value, this.unit)
					}
				}, {
					key: "getUnitName",
					value: function() {
						return "%" === this.unit ? "percent" : this.unit
					}
				}, {
					key: "toJSON",
					value: function() {
						return {
							value: this.value,
							unit: this.unit
						}
					}
				}, {
					key: "rate",
					value: function(t) {
						return t / this.value
					}
				}, {
					key: "stringToPercent",
					value: function() {
						return Wt(Zt[this.value]) ? r.percent(Zt[this.value]) : r.percent(0)
					}
				}, {
					key: "stringToEm",
					value: function(t) {
						return this.stringToPercent().toEm(t)
					}
				}, {
					key: "stringToPx",
					value: function(t) {
						return this.stringToPercent().toPx(t)
					}
				}, {
					key: "toPercent",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 16;
						return this.isPercent() ? this : this.isPx() ? r.percent(100 * this.value / t) : this.isEm() ? r.percent(this.value * e * 100 / t) : this.isString() ? this.stringToPercent(t) : this.isDeg() ? r.percent(this.value / 360 * 100) : void 0
					}
				}, {
					key: "toEm",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 16;
						return this.isPercent() ? r.em(this.value / 100 * t / e) : this.isPx() ? r.em(this.value / e) : this.isEm() ? this : this.isString() ? this.stringToEm(t) : void 0
					}
				}, {
					key: "toPx",
					value: function(t) {
						return this.isPercent() ? r.px(this.value / 100 * t) : this.isPx() ? this : this.isEm() ? r.px(this.value / 100 * t / 16) : this.isString() ? this.stringToPx(t) : void 0
					}
				}, {
					key: "toSecond",
					value: function() {
						return this.isSecond() ? this : this.isMs() ? r.second(this.value / 1e3) : void 0
					}
				}, {
					key: "toMs",
					value: function() {
						return this.isSecond() ? r.ms(1e3 * this.value) : this.isMs() ? this : void 0
					}
				}, {
					key: "to",
					value: function(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 16;
						return "px" === t ? this.toPx(e, n) : "%" === t || "percent" === t ? this.toPercent(e, n) : "em" === t ? this.toEm(e, n) : void 0
					}
				}, {
					key: "toUnit",
					value: function(t) {
						return new r(this.value, t)
					}
				}, {
					key: "calculate",
					value: function(t, e) {
						t = this[t];
						return t ? t.call(this, e) : this
					}
				}, {
					key: "includes",
					value: function() {
						for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						return e.includes(this.value)
					}
				}, {
					key: "round",
					value: function(t) {
						return new r(vt(this.value, t), this.unit)
					}
				}, {
					key: "equals",
					value: function(t) {
						return this.value === t.value && this.unit === t.unit
					}
				}], [{
					key: "min",
					value: function() {
						for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						for (var r = e.shift(), o = 0, i = e.length; o < i; o++) r.value > e[o].value && (r = e[o]);
						return r
					}
				}, {
					key: "max",
					value: function() {
						for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						for (var r = e.shift(), o = 0, i = e.length; o < i; o++) r.value < e[o].value && (r = e[o]);
						return r
					}
				}, {
					key: "string",
					value: function(t) {
						return new r(t + "", "")
					}
				}, {
					key: "number",
					value: function(t) {
						return new r(+t, "number")
					}
				}, {
					key: "px",
					value: function(t) {
						return new r(+t, "px")
					}
				}, {
					key: "em",
					value: function(t) {
						return new r(+t, "em")
					}
				}, {
					key: "percent",
					value: function(t) {
						return new r(+t, "%")
					}
				}, {
					key: "deg",
					value: function(t) {
						return new r(+t, "deg")
					}
				}, {
					key: "fr",
					value: function(t) {
						return new r(+t, "fr")
					}
				}, {
					key: "second",
					value: function(t) {
						return new r(+t, "s")
					}
				}, {
					key: "ms",
					value: function(t) {
						return new r(+t, "ms")
					}
				}, {
					key: "var",
					value: function(t) {
						return new r(t + "", "--")
					}
				}, {
					key: "calc",
					value: function(t) {
						return new r(t, "calc")
					}
				}, {
					key: "parse",
					value: function(t) {
						if (Kt(t)) {
							if (-1 < t.indexOf("calc(")) return new r(t.split("calc(")[1].split(")")[0], "calc");
							var e = t.replace(Jt, "$1 $2").split(" ");
							return +e[0] == e[0] ? new r(+e[0], e[1]) : new r(e[0])
						}
						if (t instanceof r) return t;
						if (t.unit) {
							if ("%" == t.unit || "percent" == t.unit) {
								var n = 0;
								return Wt(t.percent) ? n = t.percent : Wt(t.value) && (n = t.value), r.percent(n)
							}
							if ("px" == t.unit) {
								n = 0;
								return Wt(t.px) ? n = t.px : Wt(t.value) && (n = t.value), r.px(n)
							}
							if ("em" == t.unit) {
								n = 0;
								return Wt(t.em) ? n = t.em : Wt(t.value) && (n = t.value), r.em(n)
							}
							if ("deg" == t.unit) {
								n = 0;
								return Wt(t.deg) ? n = t.deg : Wt(t.value) && (n = t.value), r.deg(n)
							}
							if ("s" == t.unit) {
								n = 0;
								return Wt(t.second) ? n = t.second : Wt(t.value) && (n = t.value), r.second(n)
							}
							if ("ms" == t.unit) {
								n = 0;
								return Wt(t.ms) ? n = t.ms : Wt(t.value) && (n = t.value), r.ms(n)
							}
							if ("number" == t.unit) {
								n = 0;
								return Wt(t.value) && (n = t.value), r.number(n)
							}
							if ("--" == t.unit) {
								n = 0;
								return Wt(t.value) && (n = t.value), r.var(n)
							}
							if ("" === t.unit || "string" === t.unit) {
								n = "";
								return Wt(t.str) ? n = t.str : Wt(t.value) && (n = t.value), r.string(n)
							}
						}
						return r.string(t)
					}
				}]), r
			}();
		Qt.auto = Qt.string("auto");
		_(P = {}, "center", !0), _(P, "top", !0), _(P, "left", !0), _(P, "right", !0), _(P, "bottom", !0);
		_(P = {}, "center", !0), _(P, "top", !0), _(P, "left", !0), _(P, "right", !0), _(P, "bottom", !0);
		var te = Xt
	}(), ne.default
});
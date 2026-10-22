import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CiW_as0k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Ready to wear",
	"Occasion",
	"Atelier"
];
var SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL"
];
var pieces = [
	{
		id: "slip",
		name: "First Light Slip",
		price: 248,
		category: "Ready to wear",
		fabric: "Ivory silk",
		note: "A bias slip with thin straps and an ankle hem. Cut to move when you cross a room, not to announce it.",
		image: "/looks/slip.jpg",
		alt: "A woman in an ivory silk slip dress standing in morning window light"
	},
	{
		id: "linen",
		name: "Harbour Shirt Dress",
		price: 186,
		category: "Ready to wear",
		fabric: "Stone linen",
		note: "Washed linen, a self belt, sleeves meant to be rolled. The dress you put on and then forget you are wearing.",
		image: "/looks/linen.jpg",
		alt: "A woman in a stone linen shirt dress against a pale wall"
	},
	{
		id: "coat",
		name: "Threshold Coat",
		price: 420,
		category: "Atelier",
		fabric: "Charcoal wool",
		note: "A long coat for the walk between night and morning. Soft shoulder, hidden closure, room for a knit underneath.",
		image: "/looks/coat.jpg",
		alt: "A woman in a long charcoal wool coat in a boutique doorway"
	},
	{
		id: "column",
		name: "Quiet Column",
		price: 168,
		category: "Ready to wear",
		fabric: "Poplin and crepe",
		note: "A tucked ivory shirt and a high-waisted column skirt. Wear them as a set, or let the skirt stand on its own.",
		image: "/looks/column.jpg",
		alt: "A woman in an ivory shirt and cream column skirt in sunlight"
	},
	{
		id: "knit",
		name: "Dawn Knit",
		price: 154,
		category: "Ready to wear",
		fabric: "Oatmeal merino",
		note: "A soft neckline and a matching midi. The piece you reach for when the house is still quiet.",
		image: "/looks/knit.jpg",
		alt: "A woman seated in an oatmeal merino knit and midi skirt"
	},
	{
		id: "gown",
		name: "Morning Column",
		price: 640,
		category: "Occasion",
		fabric: "Ivory satin",
		note: "Floor length, a modest neck, no embellishment. For vows, dinners, and the hours that ask for stillness.",
		image: "/looks/gown.jpg",
		alt: "A woman in a floor-length ivory satin column gown by a window"
	},
	{
		id: "suit",
		name: "Ink Suit",
		price: 490,
		category: "Atelier",
		fabric: "Wool crepe",
		note: "Blazer and straight trouser, cut close but never sharp. Shown on the form in the atelier — come and try the cloth.",
		image: "/looks/suit.jpg",
		alt: "An ink wool suit on a dress form in a sunlit boutique"
	}
];
function money(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(value);
}
function pieceById(id) {
	return pieces.find((piece) => piece.id === id);
}
var HOLD_KEY = "jcm-held";
var links = [
	{
		href: "#edit",
		label: "The edit"
	},
	{
		href: "#story",
		label: "Story"
	},
	{
		href: "#visit",
		label: "Visit"
	},
	{
		href: "#journal",
		label: "Journal"
	}
];
var notes = [
	{
		title: "Cloth that keeps a crease",
		body: "Linen, wool, silk. We choose fabric you can live in — cloth that wrinkles honestly and still looks like you meant to wear it."
	},
	{
		title: "Where the name comes from",
		body: "Weeping may last for the night, but joy comes in the morning. The boutique is named for that turn: clothes for ordinary days that still ask to be met with care."
	},
	{
		title: "How a fitting goes",
		body: "An hour, tea, and a mirror that tells the truth. We pin, we wait, and we do not rush you into a size that only works under a shop light."
	}
];
function useHeld() {
	const [held, setHeld] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(HOLD_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) setHeld(parsed);
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(HOLD_KEY, JSON.stringify(held));
	}, [held, ready]);
	function toggle(id) {
		setHeld((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return {
		held,
		toggle,
		ready
	};
}
function BoutiquePage() {
	const { held, toggle } = useHeld();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [shown, setShown] = (0, import_react.useState)();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [heldOpen, setHeldOpen] = (0, import_react.useState)(false);
	const [fittingId, setFittingId] = (0, import_react.useState)("");
	const openPiece = shown;
	const visible = pieces.filter((piece) => filter === "All" || piece.category === filter);
	function requestPiece(id) {
		setFittingId(id);
		setOpenId(null);
		setHeldOpen(false);
		setMenuOpen(false);
		document.getElementById("visit")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#edit",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper",
				children: "Skip to the edit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "font-display text-lg leading-none tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Joy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Joy Come in the Morning"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 md:flex",
							"aria-label": "Primary",
							children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "text-sm text-muted hover:text-ink",
								children: link.label
							}, link.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setHeldOpen(true),
									className: "inline-flex min-h-11 items-center px-3 text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
									children: ["Held", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 tabular-nums text-muted",
										children: held.length
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#visit",
									className: "hidden min-h-11 items-center bg-ink px-4 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96] sm:inline-flex",
									children: "Book a fitting"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center md:hidden",
									"aria-label": "Open menu",
									onClick: () => setMenuOpen(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
										className: "size-5",
										strokeWidth: 1.5
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDialog, {
				open: menuOpen,
				onOpenChange: setMenuOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 lg:pb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise text-sm tracking-wide text-slate",
									children: "The morning collection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "rise rise-2 mt-4 font-display text-5xl leading-none font-medium tracking-tight text-ink sm:text-6xl",
									children: "Joy, come in the morning."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise rise-3 mt-6 max-w-md text-lg leading-relaxed text-muted",
									children: "A small women’s boutique. Quiet cloth, morning light, and fittings that take the time they need."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise rise-4 mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#edit",
										className: "inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]",
										children: "See the edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#story",
										className: "inline-flex min-h-11 items-center border border-line px-5 text-sm font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]",
										children: "Read the story"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rise rise-3 lg:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-look overflow-hidden bg-stone sm:aspect-auto sm:h-[720px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/looks/slip.jpg",
									alt: "A woman in an ivory silk slip, standing in the atelier at dawn",
									className: "h-full w-full object-cover object-top"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-3 flex items-baseline justify-between gap-4 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "First Light Slip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: money(248)
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "edit",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm tracking-wide text-slate",
										children: "01 — The edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-4xl font-medium tracking-tight",
										children: "Seven pieces, one hour of light."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										role: "tablist",
										"aria-label": "Filter the edit",
										children: CATEGORIES.map((category) => {
											const active = filter === category;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												role: "tab",
												"aria-selected": active,
												onClick: () => setFilter(category),
												className: "min-h-11 px-3 text-sm transition-colors duration-150 " + (active ? "text-ink underline decoration-ink underline-offset-8" : "text-muted hover:text-ink"),
												children: category
											}, category);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
									children: visible.map((piece, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: filter === "All" && index === 0 ? "sm:col-span-2 lg:col-span-2" : void 0,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieceCard, {
											piece,
											held: held.includes(piece.id),
											onOpen: () => {
												const next = pieceById(piece.id);
												if (!next) return;
												setShown(next);
												setOpenId(next.id);
											},
											onToggleHold: () => toggle(piece.id),
											feature: filter === "All" && index === 0
										})
									}, piece.id))
								}),
								visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-12 text-muted",
									children: "Nothing in this edit yet."
								}) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "story",
						className: "border-t border-line bg-paper-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm tracking-wide text-slate",
										children: "02 — The house"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-4xl font-medium tracking-tight",
										children: "A room that faces the window."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-lg leading-relaxed text-muted",
										children: "Joy Come in the Morning is a boutique for women who dress for the day they are actually having. We keep the rail short. If a piece is here, it earned the hanger."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 leading-relaxed text-muted",
										children: "Mornings are for fittings. Afternoons are quieter. Come when you can stay a while — the clothes look different once the rush leaves the room."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-5 lg:col-span-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "sm:col-span-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-room overflow-hidden bg-stone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/looks/atelier.jpg",
											alt: "The boutique interior: oak floors, a clothing rail, and morning light",
											className: "h-full w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
										className: "mt-3 text-sm text-muted",
										children: "The atelier, before the door opens."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-square overflow-hidden bg-stone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/looks/still.jpg",
											alt: "Ivory silk, a cup of tea, and olive leaves on a wood table",
											className: "h-full w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
										className: "mt-3 text-sm text-muted",
										children: "Silk, tea, a little green."
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, {
						fittingId,
						onFittingChange: setFittingId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "journal",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tracking-wide text-slate",
									children: "04 — Journal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-xl font-display text-4xl font-medium tracking-tight",
									children: "Notes from the fitting room."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-12 grid gap-10 md:grid-cols-3",
									children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-t border-line pt-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm tabular-nums text-subtle",
												children: ["0", index + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-2xl font-medium tracking-tight",
												children: note.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 leading-relaxed text-muted",
												children: note.body
											})
										]
									}, note.title))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tracking-tight",
						children: "Joy Come in the Morning"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-muted",
						children: "A women’s boutique. Fittings by appointment. Pieces you hold stay on this device."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-wrap gap-x-6 gap-y-2",
						"aria-label": "Footer",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "text-sm text-muted hover:text-ink",
							children: link.label
						}, link.href))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieceSheet, {
				piece: openPiece,
				open: openId !== null,
				held: openPiece ? held.includes(openPiece.id) : false,
				onOpenChange: (next) => {
					if (!next) setOpenId(null);
				},
				onToggleHold: () => {
					if (openPiece) toggle(openPiece.id);
				},
				onRequest: () => {
					if (openPiece) requestPiece(openPiece.id);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeldSheet, {
				open: heldOpen,
				held,
				onOpenChange: setHeldOpen,
				onOpenPiece: (id) => {
					const next = pieceById(id);
					if (!next) return;
					setHeldOpen(false);
					setShown(next);
					setOpenId(next.id);
				},
				onRemove: toggle,
				onRequest: requestPiece
			})
		]
	});
}
function PieceCard({ piece, held, onOpen, onToggleHold, feature }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onOpen,
			className: "group block w-full text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden bg-stone " + (feature ? "aspect-room" : "aspect-look"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: piece.image,
					alt: piece.alt,
					className: "look-zoom h-full w-full object-cover object-top"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onToggleHold,
			"aria-pressed": held,
			className: "absolute top-3 right-3 inline-flex min-h-11 items-center bg-paper px-3 text-sm text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]",
			children: held ? "Held" : "Hold"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "mt-4 flex w-full items-baseline justify-between gap-4 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-display font-medium tracking-tight " + (feature ? "text-3xl" : "text-2xl"),
			children: piece.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-1 block text-sm text-muted",
			children: [
				piece.fabric,
				" · ",
				piece.category
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 tabular-nums text-muted",
			children: money(piece.price)
		})]
	})] });
}
function PieceSheet({ piece, open, held, onOpenChange, onToggleHold, onRequest }) {
	const [size, setSize] = (0, import_react.useState)("M");
	(0, import_react.useEffect)(() => {
		setSize("M");
	}, [piece?.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay fixed inset-0 z-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "sheet fixed inset-y-0 right-0 z-50 flex w-full max-w-3xl flex-col bg-paper outline-none",
			children: piece ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid h-full md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-72 bg-stone md:h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: piece.image,
						alt: piece.alt,
						className: "h-full w-full object-cover object-top"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tracking-wide text-slate",
								children: piece.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								className: "inline-flex size-11 items-center justify-center",
								"aria-label": "Close",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									strokeWidth: 1.5
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "mt-4 font-display text-4xl font-medium tracking-tight",
							children: piece.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mt-3 text-muted",
							children: piece.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-display text-2xl tabular-nums",
							children: money(piece.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: piece.fabric
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm text-muted",
							children: "Size for the fitting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							role: "group",
							"aria-label": "Size",
							children: SIZES.map((option) => {
								const active = size === option;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": active,
									onClick: () => setSize(option),
									className: "inline-flex size-11 items-center justify-center text-sm transition-colors duration-150 " + (active ? "bg-ink text-paper" : "border border-line text-ink hover:bg-stone"),
									children: option
								}, option);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-3 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onRequest,
								className: "inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]",
								children: ["Request this piece", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									strokeWidth: 1.5
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onToggleHold,
								"aria-pressed": held,
								className: "inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]",
								children: [held ? "Release from held" : "Hold for later", held ? "" : ` · size ${size}`]
							})]
						})
					]
				})]
			}) : null
		})] })
	});
}
function HeldSheet({ open, held, onOpenChange, onOpenPiece, onRemove, onRequest }) {
	const saved = held.map((id) => pieceById(id)).filter((piece) => Boolean(piece));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay fixed inset-0 z-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sheet fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-paper p-6 outline-none sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Held"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-2 text-sm text-muted",
					children: "Saved on this device. Nothing is reserved until you book a fitting."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "inline-flex size-11 items-center justify-center",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						strokeWidth: 1.5
					})
				})]
			}), saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-muted",
				children: "Nothing held yet. Open a piece and choose Hold."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 flex flex-col gap-6 overflow-y-auto",
				children: saved.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-t border-line pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onOpenPiece(piece.id),
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: piece.image,
							alt: "",
							className: "h-28 w-20 object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpenPiece(piece.id),
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl tracking-tight",
								children: piece.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm tabular-nums text-muted",
								children: money(piece.price)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onRequest(piece.id),
								className: "min-h-11 text-sm underline underline-offset-4",
								children: "Book"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onRemove(piece.id),
								className: "min-h-11 text-sm text-muted",
								children: "Remove"
							})]
						})]
					})]
				}, piece.id))
			})]
		})] })
	});
}
function MenuDialog({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay fixed inset-0 z-40 md:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "menu-panel fixed inset-x-0 top-0 z-50 bg-paper px-5 pt-4 pb-8 outline-none md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-lg",
					children: "Menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "inline-flex size-11 items-center justify-center",
					"aria-label": "Close menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						strokeWidth: 1.5
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-6 flex flex-col",
				"aria-label": "Mobile",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => onOpenChange(false),
					className: "flex min-h-12 items-center border-t border-line font-display text-2xl",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#visit",
					onClick: () => onOpenChange(false),
					className: "mt-6 inline-flex min-h-11 items-center justify-center bg-ink px-5 text-sm font-medium text-paper",
					children: "Book a fitting"
				})]
			})]
		})] })
	});
}
function Visit({ fittingId, onFittingChange }) {
	const nameId = (0, import_react.useId)();
	const emailId = (0, import_react.useId)();
	const pieceId = (0, import_react.useId)();
	const noteId = (0, import_react.useId)();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	function submit(event) {
		event.preventDefault();
		if (!name.trim() || !email.includes("@")) {
			setError("Add your name and a real email so we can write back.");
			setSent(false);
			return;
		}
		setError("");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visit",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-wide text-slate",
						children: "03 — Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight",
						children: "Come in the morning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted",
						children: "The atelier is a small room. We send the door once a fitting is set — no walk-ins, so the hour stays yours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Tuesday – Friday"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "11–6"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Saturday"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "10–4"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Sunday & Monday"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "Closed"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Fittings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "One hour"
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: submit,
				className: "border border-line bg-paper p-6 sm:p-8 lg:col-span-7",
				noValidate: true,
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "We’ll write before tomorrow morning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							name.trim(),
							", your note is with the atelier",
							fittingId && pieceById(fittingId) ? ` — including ${pieceById(fittingId)?.name}` : "",
							". This preview keeps the request on the page only; nothing was sent to a server."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSent(false);
							setName("");
							setEmail("");
							setNote("");
							onFittingChange("");
						},
						className: "mt-8 inline-flex min-h-11 items-center border border-line px-5 text-sm font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]",
						children: "Write another note"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-medium tracking-tight",
							children: "Request a fitting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								htmlFor: nameId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: nameId,
									value: name,
									onChange: (event) => setName(event.target.value),
									autoComplete: "name",
									className: "min-h-11 border border-line bg-paper px-3 text-ink outline-none"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								htmlFor: emailId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: emailId,
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									autoComplete: "email",
									className: "min-h-11 border border-line bg-paper px-3 text-ink outline-none"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm",
							htmlFor: pieceId,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Piece, if you have one"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: pieceId,
								value: fittingId,
								onChange: (event) => onFittingChange(event.target.value),
								className: "min-h-11 border border-line bg-paper px-3 text-ink outline-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Not sure yet"
								}), pieces.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: piece.id,
									children: piece.name
								}, piece.id))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm",
							htmlFor: noteId,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "A note"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: noteId,
								value: note,
								onChange: (event) => setNote(event.target.value),
								rows: 4,
								placeholder: "A morning that suits you, or a size you already know.",
								className: "border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-subtle"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex min-h-11 items-center justify-center bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]",
							children: "Send the request"
						})
					]
				})
			})]
		})
	});
}
function Newsletter() {
	const id = (0, import_react.useId)();
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between",
			onSubmit: (event) => {
				event.preventDefault();
				if (!email.includes("@")) {
					setError("Add an email to hear when the next rail arrives.");
					setDone(false);
					return;
				}
				setError("");
				setDone(true);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight text-paper",
					children: "When the next morning arrives."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-stone",
					children: "A short note when new cloth comes in. No weekly noise."
				})]
			}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-paper",
				children: "You’re on the list for this visit. We didn’t store the address anywhere else."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: id,
						className: "text-sm text-stone",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id,
							type: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							className: "min-h-11 w-full border border-line bg-paper px-3 text-ink outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex min-h-11 items-center justify-center bg-paper px-5 text-sm font-medium text-ink transition-[transform,background-color] duration-150 ease-out hover:bg-stone active:scale-[0.96]",
							children: "Join"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						role: "alert",
						children: error
					}) : null
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoutiquePage, {});
}
//#endregion
export { Home as component };

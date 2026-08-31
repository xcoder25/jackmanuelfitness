import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, c as Dumbbell, d as ArrowDown, l as Check, n as X, o as Menu, r as Users, s as Flame, t as Zap, u as Building2 } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CzAS3nG3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-opacity duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg border border-border hover:bg-elevated",
			link: "bg-transparent text-fg underline-offset-4 hover:underline px-0"
		},
		size: {
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-sm rounded-md",
			sm: "h-9 px-3 text-xs rounded-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#train",
		label: "Programs"
	},
	{
		href: "#clients",
		label: "Clients"
	},
	{
		href: "#book",
		label: "Book"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-200", scrolled || open ? "bg-bg/95 border-b border-border" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-xl tracking-wide text-fg",
					children: "JACK MANUEL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted hover:text-fg transition-colors duration-150",
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							children: "Book a session"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "md:hidden inline-flex size-11 items-center justify-center text-fg",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "md:hidden border-t border-border bg-bg px-4 pb-6 pt-2",
			"aria-label": "Mobile",
			children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				className: "flex h-12 items-center text-base text-fg",
				onClick: () => setOpen(false),
				children: link.label
			}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-2 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					onClick: () => setOpen(false),
					children: "Book a session"
				})
			})]
		}) : null]
	});
}
var SOCIALS = [
	{
		href: "https://www.instagram.com/jack_manuel_fitness/",
		label: "Instagram"
	},
	{
		href: "https://www.tiktok.com/@jackmanuelfitness1",
		label: "TikTok"
	},
	{
		href: "https://www.facebook.com/jackmanuelfitness",
		label: "Facebook"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-wide text-fg",
					children: "JACK MANUEL FITNESS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-sm text-sm leading-relaxed text-muted",
					children: "Jack Manuel Fitness Limited. Personal training, group sessions, and brand work from Lagos."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#train",
							className: "text-muted hover:text-fg transition-colors duration-150",
							children: "Programs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "text-muted hover:text-fg transition-colors duration-150",
							children: "Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:manueljack929@gmail.com",
							className: "text-muted hover:text-fg transition-colors duration-150",
							children: "manueljack929@gmail.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/2348030997843",
							target: "_blank",
							rel: "noreferrer",
							className: "text-muted hover:text-fg transition-colors duration-150",
							children: "WhatsApp"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-x-6 gap-y-2 text-sm",
					children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted hover:text-fg transition-colors duration-150",
						children: s.label
					}, s.href))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-border px-4 py-4 text-center text-xs text-subtle",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Jack Manuel Fitness Limited. All rights reserved."
			]
		})]
	});
}
var KEY = "jmf-inquiries";
function loadInquiries() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveInquiry(data) {
	const inquiry = {
		...data,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const next = [inquiry, ...loadInquiries()].slice(0, 20);
	localStorage.setItem(KEY, JSON.stringify(next));
	return inquiry;
}
var SESSIONS = [
	"1:1 coaching",
	"Raw power session",
	"Brand / appearance",
	"Group training"
];
function BookForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [session, setSession] = (0, import_react.useState)(SESSIONS[0]);
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (name.trim().length < 2) {
			setError("Add your name.");
			return;
		}
		if (phone.trim().length < 8) {
			setError("Add a working phone or WhatsApp number.");
			return;
		}
		saveInquiry({
			name: name.trim(),
			phone: phone.trim(),
			email: email.trim(),
			session,
			note: note.trim()
		});
		setError("");
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-elevated p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-md bg-accent text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-3xl tracking-wide text-fg",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: [
					name,
					", your ",
					session.toLowerCase(),
					" request is in. WhatsApp the team now to lock a date and rate."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/2348030997843",
						target: "_blank",
						rel: "noreferrer",
						children: "Confirm on WhatsApp"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => {
						setDone(false);
						setName("");
						setPhone("");
						setEmail("");
						setNote("");
					},
					children: "New request"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl border border-border bg-elevated p-5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg",
						placeholder: "Full name",
						autoComplete: "name"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted",
						children: "Phone / WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg",
						placeholder: "0803…",
						autoComplete: "tel",
						inputMode: "tel"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg",
					placeholder: "you@email.com",
					autoComplete: "email"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-2 text-xs font-medium uppercase tracking-wider text-muted",
					children: "What do you need"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: SESSIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSession(s),
						className: cn("min-h-11 rounded-md border px-3 py-2 text-left text-sm transition-colors duration-150", session === s ? "border-fg bg-fg text-bg" : "border-border bg-surface text-muted hover:text-fg"),
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted",
					children: "Goal or brief"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (e) => setNote(e.target.value),
					rows: 4,
					className: "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg",
					placeholder: "Strength goal, event date, brand, or location"
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-5 w-full sm:w-auto",
				size: "lg",
				children: "Request a booking"
			})
		]
	});
}
var STATS = [
	{
		value: "12+",
		label: "Years coaching"
	},
	{
		value: "1:1",
		label: "And group sessions"
	},
	{
		value: "Ltd",
		label: "Registered in Nigeria"
	},
	{
		value: "Lagos",
		label: "Train here or on-site"
	}
];
var PROGRAMS = [
	{
		icon: Dumbbell,
		title: "1:1 coaching",
		copy: "Private sessions with Jack. Strength, conditioning, and a plan you can keep. For beginners through serious athletes."
	},
	{
		icon: Zap,
		title: "Raw power",
		copy: "Functional strength: load, grip, carry, and real output. Built for people who want results they can feel, not a filter."
	},
	{
		icon: Users,
		title: "Group training",
		copy: "Hustle Gang sessions. High energy, clear programming, and a room that actually works. Teams and small groups welcome."
	},
	{
		icon: Shield,
		title: "Brand & events",
		copy: "Appearances, activations, content, and live demos. Book Jack for campaigns, launches, and stages that need real strength."
	}
];
var CLIENTS = [
	{
		icon: Flame,
		title: "Individuals",
		copy: "Get stronger, move better, and stay consistent. Sessions in Lagos, with a program you can run between visits."
	},
	{
		icon: Users,
		title: "Teams",
		copy: "Offsites, squads, and friend groups who want a session that is not a gimmick. We run the room. You show up."
	},
	{
		icon: Building2,
		title: "Brands",
		copy: "Product launches, fitness campaigns, and talent bookings. One point of contact. Clear brief. On-time delivery."
	}
];
var STEPS = [
	{
		n: "01",
		title: "Send the brief",
		copy: "Tell us the goal, dates, and whether this is training or a booking."
	},
	{
		n: "02",
		title: "We confirm",
		copy: "The team replies on WhatsApp with availability, location, and rate."
	},
	{
		n: "03",
		title: "You train",
		copy: "Show up. Do the work. Leave stronger than you arrived."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-[100svh] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero-gym.jpg",
							alt: "Empty industrial gym, stacked iron plates and a barbell under hard light",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
									children: "Jack Manuel Fitness Limited · Lagos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-4xl font-display text-[clamp(3.25rem,12vw,8rem)] leading-[0.9] tracking-wide text-fg",
									children: "My strength is my superpower"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
									children: "Raw power coaching, group sessions, and brand work. Book Jack for training that is real — or a stage that needs the same voltage."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#book",
											children: "Book a session"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost",
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#train",
											children: "See programs"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#about",
									className: "mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted hover:text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" }), "Scroll"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
						children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `px-4 py-7 sm:px-6 ${i % 2 === 1 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border md:border-t-0" : ""} md:border-l md:first:border-l-0`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl tracking-wide text-fg",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: stat.label
							})]
						}, stat.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
								children: "Coach"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl",
								children: "Okoro Ogbonna"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-muted",
								children: "Founder and CEO of Jack Manuel Fitness Limited. From Ebonyi State. Twelve years of early mornings, heavy iron, and a method that does not fake the work."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "Strength is real. Not a filter. Jack trains people for raw power and functional output — the kind that carries load when it counts. Clients come for results. Brands come for presence that cannot be staged."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/street-iron.jpg",
								alt: "Iron bars and a jerry can on a Lagos street at dusk",
								className: "h-full w-full object-cover"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "train",
					className: "scroll-mt-20 border-t border-border bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
								children: "Programs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-xl font-display text-5xl tracking-wide text-fg sm:text-6xl",
								children: "We do not train for the mirror"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
								children: "We train for the mindset. Clear programs. Honest coaching. Book the lane that fits."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-4 sm:grid-cols-2",
								children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-xl border border-border bg-elevated p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
											className: "size-5 text-fg",
											strokeWidth: 1.75
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-display text-3xl tracking-wide text-fg",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
											children: p.copy
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#book",
											className: "mt-5 inline-flex h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline",
											children: "Request this"
										})
									]
								}, p.title))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "clients",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
								children: "Clients"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl",
								children: "Who this is for"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-4 md:grid-cols-3",
								children: CLIENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-xl border border-border bg-surface p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
											className: "size-5 text-fg",
											strokeWidth: 1.75
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-display text-3xl tracking-wide text-fg",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: c.copy
										})
									]
								}, c.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-4 md:grid-cols-3",
								children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl tracking-wide text-fg",
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-sm font-medium text-fg",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-muted",
											children: s.copy
										})
									]
								}, s.n))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "md:col-span-2 overflow-hidden rounded-xl border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/barbell-chalk.jpg",
									alt: "Chalk dust on a knurled barbell",
									className: "h-64 w-full object-cover sm:h-80 md:h-full"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden rounded-xl border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/kettlebell.jpg",
										alt: "Kettlebell and iron chain on concrete",
										className: "h-48 w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden rounded-xl border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/plates.jpg",
										alt: "Stacked iron plates on a gym floor",
										className: "h-48 w-full object-cover"
									})
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-10 max-w-3xl border-l-2 border-fg pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl leading-tight tracking-wide text-fg sm:text-4xl",
								children: "Believe in yourself. There is no limit to what you can achieve."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm text-muted",
								children: "Jack Manuel"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "book",
					className: "scroll-mt-20 border-t border-border bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
								children: "Book"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl",
								children: "Start here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "Training, group sessions, and brand bookings. Send a request. We reply with availability and pricing. Lagos-based. Travel by arrangement."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 space-y-3 text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Bookings: Prince John Francis Ozekome ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-fg underline-offset-4 hover:underline",
											href: "tel:+2348030997843",
											children: "0803 099 7843"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Email:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-fg underline-offset-4 hover:underline",
											href: "mailto:manueljack929@gmail.com",
											children: "manueljack929@gmail.com"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"WhatsApp:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-fg underline-offset-4 hover:underline",
											href: "https://wa.me/2348030997843",
											target: "_blank",
											rel: "noreferrer",
											children: "Message the desk"
										})
									] })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookForm, {})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };

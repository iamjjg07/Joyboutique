import { useEffect, useId, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  CATEGORIES,
  SIZES,
  money,
  pieceById,
  pieces,
  type Filter,
  type Piece,
} from "@/lib/catalog";

const HOLD_KEY = "jcm-held";

const links = [
  { href: "#edit", label: "The edit" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
  { href: "#journal", label: "Journal" },
];

const notes = [
  {
    title: "Cloth that keeps a crease",
    body: "Linen, wool, silk. We choose fabric you can live in — cloth that wrinkles honestly and still looks like you meant to wear it.",
  },
  {
    title: "Where the name comes from",
    body: "Weeping may last for the night, but joy comes in the morning. The boutique is named for that turn: clothes for ordinary days that still ask to be met with care.",
  },
  {
    title: "How a fitting goes",
    body: "An hour, tea, and a mirror that tells the truth. We pin, we wait, and we do not rush you into a size that only works under a shop light.",
  },
];

function useHeld() {
  const [held, setHeld] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HOLD_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
          setHeld(parsed);
        }
      }
    } catch {
      /* ignore a bad local list */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(HOLD_KEY, JSON.stringify(held));
  }, [held, ready]);

  function toggle(id: string) {
    setHeld((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return { held, toggle, ready };
}

export function BoutiquePage() {
  const { held, toggle } = useHeld();
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [shown, setShown] = useState<Piece | undefined>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [heldOpen, setHeldOpen] = useState(false);
  const [fittingId, setFittingId] = useState("");
  const openPiece = shown;
  const visible = pieces.filter((piece) => filter === "All" || piece.category === filter);

  function requestPiece(id: string) {
    setFittingId(id);
    setOpenId(null);
    setHeldOpen(false);
    setMenuOpen(false);
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen">
      <a
        href="#edit"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to the edit
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="font-display text-lg leading-none tracking-tight">
            <span className="sm:hidden">Joy</span>
            <span className="hidden sm:inline">Joy Come in the Morning</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setHeldOpen(true)}
              className="inline-flex min-h-11 items-center px-3 text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Held
              <span className="ml-2 tabular-nums text-muted">{held.length}</span>
            </button>
            <a
              href="#visit"
              className="hidden min-h-11 items-center bg-ink px-4 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96] sm:inline-flex"
            >
              Book a fitting
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center md:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MenuDialog open={menuOpen} onOpenChange={setMenuOpen} />

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-5 lg:pb-6">
            <p className="rise text-sm tracking-wide text-slate">The morning collection</p>
            <h1 className="rise rise-2 mt-4 font-display text-5xl leading-none font-medium tracking-tight text-ink sm:text-6xl">
              Joy, come in the morning.
            </h1>
            <p className="rise rise-3 mt-6 max-w-md text-lg leading-relaxed text-muted">
              A small women’s boutique. Quiet cloth, morning light, and fittings that take the time they need.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
              <a
                href="#edit"
                className="inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]"
              >
                See the edit
              </a>
              <a
                href="#story"
                className="inline-flex min-h-11 items-center border border-line px-5 text-sm font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]"
              >
                Read the story
              </a>
            </div>
          </div>
          <figure className="rise rise-3 lg:col-span-7">
            <div className="aspect-look overflow-hidden bg-stone sm:aspect-auto sm:h-[720px]">
              <img
                src="/looks/slip.jpg"
                alt="A woman in an ivory silk slip, standing in the atelier at dawn"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-muted">
              <span>First Light Slip</span>
              <span className="tabular-nums">{money(248)}</span>
            </figcaption>
          </figure>
        </section>

        <section id="edit" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm tracking-wide text-slate">01 — The edit</p>
                <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">Seven pieces, one hour of light.</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter the edit">
                {CATEGORIES.map((category) => {
                  const active = filter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setFilter(category)}
                      className={
                        "min-h-11 px-3 text-sm transition-colors duration-150 " +
                        (active ? "text-ink underline decoration-ink underline-offset-8" : "text-muted hover:text-ink")
                      }
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((piece, index) => (
                <li
                  key={piece.id}
                  className={filter === "All" && index === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
                >
                  <PieceCard
                    piece={piece}
                    held={held.includes(piece.id)}
                    onOpen={() => {
                    const next = pieceById(piece.id);
                    if (!next) return;
                    setShown(next);
                    setOpenId(next.id);
                  }}
                    onToggleHold={() => toggle(piece.id)}
                    feature={filter === "All" && index === 0}
                  />
                </li>
              ))}
            </ul>
            {visible.length === 0 ? (
              <p className="mt-12 text-muted">Nothing in this edit yet.</p>
            ) : null}
          </div>
        </section>

        <section id="story" className="border-t border-line bg-paper-deep">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-5">
              <p className="text-sm tracking-wide text-slate">02 — The house</p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">A room that faces the window.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Joy Come in the Morning is a boutique for women who dress for the day they are actually having. We keep the rail short. If a piece is here, it earned the hanger.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Mornings are for fittings. Afternoons are quieter. Come when you can stay a while — the clothes look different once the rush leaves the room.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-5 lg:col-span-7">
              <figure className="sm:col-span-3">
                <div className="aspect-room overflow-hidden bg-stone">
                  <img
                    src="/looks/atelier.jpg"
                    alt="The boutique interior: oak floors, a clothing rail, and morning light"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">The atelier, before the door opens.</figcaption>
              </figure>
              <figure className="sm:col-span-2">
                <div className="aspect-square overflow-hidden bg-stone">
                  <img
                    src="/looks/still.jpg"
                    alt="Ivory silk, a cup of tea, and olive leaves on a wood table"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">Silk, tea, a little green.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <Visit
          fittingId={fittingId}
          onFittingChange={setFittingId}
        />

        <section id="journal" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-sm tracking-wide text-slate">04 — Journal</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight">Notes from the fitting room.</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {notes.map((note, index) => (
                <li key={note.title} className="border-t border-line pt-6">
                  <p className="text-sm tabular-nums text-subtle">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">{note.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{note.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Newsletter />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight">Joy Come in the Morning</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              A women’s boutique. Fittings by appointment. Pieces you hold stay on this device.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      <PieceSheet
        piece={openPiece}
        open={openId !== null}
        held={openPiece ? held.includes(openPiece.id) : false}
        onOpenChange={(next) => {
          if (!next) setOpenId(null);
        }}
        onToggleHold={() => {
          if (openPiece) toggle(openPiece.id);
        }}
        onRequest={() => {
          if (openPiece) requestPiece(openPiece.id);
        }}
      />

      <HeldSheet
        open={heldOpen}
        held={held}
        onOpenChange={setHeldOpen}
        onOpenPiece={(id) => {
          const next = pieceById(id);
          if (!next) return;
          setHeldOpen(false);
          setShown(next);
          setOpenId(next.id);
        }}
        onRemove={toggle}
        onRequest={requestPiece}
      />
    </div>
  );
}

function PieceCard({
  piece,
  held,
  onOpen,
  onToggleHold,
  feature,
}: {
  piece: Piece;
  held: boolean;
  onOpen: () => void;
  onToggleHold: () => void;
  feature: boolean;
}) {
  return (
    <article>
      <div className="relative">
        <button type="button" onClick={onOpen} className="group block w-full text-left">
          <div className={"overflow-hidden bg-stone " + (feature ? "aspect-room" : "aspect-look")}>
            <img
              src={piece.image}
              alt={piece.alt}
              className="look-zoom h-full w-full object-cover object-top"
            />
          </div>
        </button>
        <button
          type="button"
          onClick={onToggleHold}
          aria-pressed={held}
          className="absolute top-3 right-3 inline-flex min-h-11 items-center bg-paper px-3 text-sm text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]"
        >
          {held ? "Held" : "Hold"}
        </button>
      </div>
      <button type="button" onClick={onOpen} className="mt-4 flex w-full items-baseline justify-between gap-4 text-left">
        <span>
          <span className={"block font-display font-medium tracking-tight " + (feature ? "text-3xl" : "text-2xl")}>
            {piece.name}
          </span>
          <span className="mt-1 block text-sm text-muted">
            {piece.fabric} · {piece.category}
          </span>
        </span>
        <span className="shrink-0 tabular-nums text-muted">{money(piece.price)}</span>
      </button>
    </article>
  );
}

function PieceSheet({
  piece,
  open,
  held,
  onOpenChange,
  onToggleHold,
  onRequest,
}: {
  piece: Piece | undefined;
  open: boolean;
  held: boolean;
  onOpenChange: (open: boolean) => void;
  onToggleHold: () => void;
  onRequest: () => void;
}) {
  const [size, setSize] = useState<(typeof SIZES)[number]>("M");

  useEffect(() => {
    setSize("M");
  }, [piece?.id]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed inset-0 z-40" />
        <Dialog.Content className="sheet fixed inset-y-0 right-0 z-50 flex w-full max-w-3xl flex-col bg-paper outline-none">
          {piece ? (
            <div className="grid h-full md:grid-cols-2">
              <div className="relative h-72 bg-stone md:h-full">
                <img src={piece.image} alt={piece.alt} className="h-full w-full object-cover object-top" />
              </div>
              <div className="flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm tracking-wide text-slate">{piece.category}</p>
                  <Dialog.Close className="inline-flex size-11 items-center justify-center" aria-label="Close">
                    <X className="size-5" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="mt-4 font-display text-4xl font-medium tracking-tight">
                  {piece.name}
                </Dialog.Title>
                <Dialog.Description className="mt-3 text-muted">{piece.note}</Dialog.Description>
                <p className="mt-6 font-display text-2xl tabular-nums">{money(piece.price)}</p>
                <p className="mt-1 text-sm text-muted">{piece.fabric}</p>

                <p className="mt-8 text-sm text-muted">Size for the fitting</p>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Size">
                  {SIZES.map((option) => {
                    const active = size === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSize(option)}
                        className={
                          "inline-flex size-11 items-center justify-center text-sm transition-colors duration-150 " +
                          (active ? "bg-ink text-paper" : "border border-line text-ink hover:bg-stone")
                        }
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-10">
                  <button
                    type="button"
                    onClick={onRequest}
                    className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]"
                  >
                    Request this piece
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={onToggleHold}
                    aria-pressed={held}
                    className="inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]"
                  >
                    {held ? "Release from held" : "Hold for later"}
                    {held ? "" : ` · size ${size}`}
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function HeldSheet({
  open,
  held,
  onOpenChange,
  onOpenPiece,
  onRemove,
  onRequest,
}: {
  open: boolean;
  held: string[];
  onOpenChange: (open: boolean) => void;
  onOpenPiece: (id: string) => void;
  onRemove: (id: string) => void;
  onRequest: (id: string) => void;
}) {
  const saved = held.map((id) => pieceById(id)).filter((piece): piece is Piece => Boolean(piece));

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed inset-0 z-40" />
        <Dialog.Content className="sheet fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-paper p-6 outline-none sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-3xl font-medium tracking-tight">Held</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-muted">
                Saved on this device. Nothing is reserved until you book a fitting.
              </Dialog.Description>
            </div>
            <Dialog.Close className="inline-flex size-11 items-center justify-center" aria-label="Close">
              <X className="size-5" strokeWidth={1.5} />
            </Dialog.Close>
          </div>
          {saved.length === 0 ? (
            <p className="mt-10 text-muted">Nothing held yet. Open a piece and choose Hold.</p>
          ) : (
            <ul className="mt-8 flex flex-col gap-6 overflow-y-auto">
              {saved.map((piece) => (
                <li key={piece.id} className="flex gap-4 border-t border-line pt-6">
                  <button type="button" onClick={() => onOpenPiece(piece.id)} className="shrink-0">
                    <img src={piece.image} alt="" className="h-28 w-20 object-cover" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <button type="button" onClick={() => onOpenPiece(piece.id)} className="text-left">
                      <span className="block font-display text-xl tracking-tight">{piece.name}</span>
                      <span className="mt-1 block text-sm tabular-nums text-muted">{money(piece.price)}</span>
                    </button>
                    <div className="mt-3 flex gap-4">
                      <button type="button" onClick={() => onRequest(piece.id)} className="min-h-11 text-sm underline underline-offset-4">
                        Book
                      </button>
                      <button type="button" onClick={() => onRemove(piece.id)} className="min-h-11 text-sm text-muted">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MenuDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed inset-0 z-40 md:hidden" />
        <Dialog.Content className="menu-panel fixed inset-x-0 top-0 z-50 bg-paper px-5 pt-4 pb-8 outline-none md:hidden">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-lg">Menu</Dialog.Title>
            <Dialog.Close className="inline-flex size-11 items-center justify-center" aria-label="Close menu">
              <X className="size-5" strokeWidth={1.5} />
            </Dialog.Close>
          </div>
          <nav className="mt-6 flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onOpenChange(false)}
                className="flex min-h-12 items-center border-t border-line font-display text-2xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => onOpenChange(false)}
              className="mt-6 inline-flex min-h-11 items-center justify-center bg-ink px-5 text-sm font-medium text-paper"
            >
              Book a fitting
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Visit({
  fittingId,
  onFittingChange,
}: {
  fittingId: string;
  onFittingChange: (id: string) => void;
}) {
  const nameId = useId();
  const emailId = useId();
  const pieceId = useId();
  const noteId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !email.includes("@")) {
      setError("Add your name and a real email so we can write back.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <section id="visit" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-sm tracking-wide text-slate">03 — Visit</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">Come in the morning.</h2>
          <p className="mt-6 leading-relaxed text-muted">
            The atelier is a small room. We send the door once a fitting is set — no walk-ins, so the hour stays yours.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-muted">Tuesday – Friday</dt>
              <dd className="mt-1 font-medium">11–6</dd>
            </div>
            <div>
              <dt className="text-muted">Saturday</dt>
              <dd className="mt-1 font-medium">10–4</dd>
            </div>
            <div>
              <dt className="text-muted">Sunday & Monday</dt>
              <dd className="mt-1 font-medium">Closed</dd>
            </div>
            <div>
              <dt className="text-muted">Fittings</dt>
              <dd className="mt-1 font-medium">One hour</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="border border-line bg-paper p-6 sm:p-8 lg:col-span-7" noValidate>
          {sent ? (
            <div>
              <h3 className="font-display text-3xl font-medium tracking-tight">We’ll write before tomorrow morning.</h3>
              <p className="mt-4 text-muted">
                {name.trim()}, your note is with the atelier
                {fittingId && pieceById(fittingId) ? ` — including ${pieceById(fittingId)?.name}` : ""}. This preview
                keeps the request on the page only; nothing was sent to a server.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setNote("");
                  onFittingChange("");
                }}
                className="mt-8 inline-flex min-h-11 items-center border border-line px-5 text-sm font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-stone active:scale-[0.96]"
              >
                Write another note
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              <h3 className="font-display text-3xl font-medium tracking-tight">Request a fitting</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm" htmlFor={nameId}>
                  <span className="text-muted">Name</span>
                  <input
                    id={nameId}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className="min-h-11 border border-line bg-paper px-3 text-ink outline-none"
                  />
                </label>
                <label className="grid gap-2 text-sm" htmlFor={emailId}>
                  <span className="text-muted">Email</span>
                  <input
                    id={emailId}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    className="min-h-11 border border-line bg-paper px-3 text-ink outline-none"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm" htmlFor={pieceId}>
                <span className="text-muted">Piece, if you have one</span>
                <select
                  id={pieceId}
                  value={fittingId}
                  onChange={(event) => onFittingChange(event.target.value)}
                  className="min-h-11 border border-line bg-paper px-3 text-ink outline-none"
                >
                  <option value="">Not sure yet</option>
                  {pieces.map((piece) => (
                    <option key={piece.id} value={piece.id}>
                      {piece.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm" htmlFor={noteId}>
                <span className="text-muted">A note</span>
                <textarea
                  id={noteId}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={4}
                  placeholder="A morning that suits you, or a size you already know."
                  className="border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-subtle"
                />
              </label>
              {error ? (
                <p className="text-sm text-slate" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-slate active:scale-[0.96]"
              >
                Send the request
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Newsletter() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="border-t border-line bg-ink text-paper">
      <form
        className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between"
        onSubmit={(event) => {
          event.preventDefault();
          if (!email.includes("@")) {
            setError("Add an email to hear when the next rail arrives.");
            setDone(false);
            return;
          }
          setError("");
          setDone(true);
        }}
      >
        <div className="max-w-md">
          <h2 className="font-display text-3xl font-medium tracking-tight text-paper">When the next morning arrives.</h2>
          <p className="mt-3 text-sm text-stone">A short note when new cloth comes in. No weekly noise.</p>
        </div>
        {done ? (
          <p className="text-sm text-paper">You’re on the list for this visit. We didn’t store the address anywhere else.</p>
        ) : (
          <div className="w-full max-w-md">
            <label htmlFor={id} className="text-sm text-stone">
              Email
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id={id}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-11 w-full border border-line bg-paper px-3 text-ink outline-none"
              />
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center bg-paper px-5 text-sm font-medium text-ink transition-[transform,background-color] duration-150 ease-out hover:bg-stone active:scale-[0.96]"
              >
                Join
              </button>
            </div>
            {error ? (
              <p className="mt-2 text-sm text-stone" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        )}
      </form>
    </section>
  );
}

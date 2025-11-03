'use client'
type BtnProps = {
  text: string;
  className: string;
  id:string
};
export default function ScrollToBtn({ text, className, id }: BtnProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;

    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });

    const url = window.location.pathname + window.location.search;
    history.replaceState(null, "", url);
  };

  return (
    <button onClick={handleClick} className={className} type="button">
      {text}
    </button>
  );
}
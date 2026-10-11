export function Frame() {
  return (
    <>
      <div className="bg-hatch fixed inset-0 -z-10" />
      <div className="bg-hatch fixed inset-x-0 top-0 z-20 h-(--band-t) border-b border-line-strong bg-bg" />
      <div className="bg-hatch fixed inset-x-0 bottom-0 z-20 h-(--band-b) border-t border-line-strong bg-bg" />
      <div className="pointer-events-none fixed inset-0 z-30 my-4">
        <div className="mx-auto flex h-full max-w-300 border-x border-line-strong">
          <aside className="pointer-events-auto hidden w-60 flex-col border-r border-line-strong pt-(--band-t) pb-(--band-b) lg:flex">
            {/* Sidebar */}
          </aside>
        </div>
      </div>
    </>
  );
}

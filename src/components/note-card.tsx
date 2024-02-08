export function NoteCard() {
  return (
    <button className=" outline-none rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden text-start relative hover:ring-2 ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo
        repellat doloremque asperiores delectus dolorem perferendis
        voluptatibus, aperiam qui, suscipit, reiciendis nesciunt ab sunt et
        neque voluptatum possimus odit voluptate. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quia minus architecto, voluptatibus
        molestiae tenetur deserunt enim minima tempore facilis adipisci quos
        distinctio quas cumque rerum magni neque rem tempora deleniti.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}

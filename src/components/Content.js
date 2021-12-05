export default function Content({children}) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-4">
        {children}
      </div>
    </div>
   )
}
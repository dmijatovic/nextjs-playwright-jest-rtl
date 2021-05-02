
export default function PageLayout({header,children,footer}){
  return (
    <article className="article">
      <header className="header">
        {/* <h1>About page</h1> */}
        {header}
      </header>
      <main className="main">
        {/* // <section>
        //   <h3>This is section title of about page </h3>
        // </section> */}
        {children}
      </main>
      <footer className="footer">
        {/* This is page footer from about page */}
        {footer}
      </footer>
    </article>
  )
}
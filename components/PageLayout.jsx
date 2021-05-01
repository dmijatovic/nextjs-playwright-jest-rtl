
export default function PageLayout({header,children,footer}){
  return (
    <article class="article">
      <header class="header">
        {/* <h1>About page</h1> */}
        {header}
      </header>
      <main class="main">
        {/* // <section>
        //   <h3>This is section title of about page </h3>
        // </section> */}
        {children}
      </main>
      <footer class="footer">
        {/* This is page footer from about page */}
        {footer}
      </footer>
    </article>
  )
}
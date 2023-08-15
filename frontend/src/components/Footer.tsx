export default function Footer() {
  const footer = {
    copy: "© 2023 | Made with ❤️ by Virgiawan Teguh Kusuma (GG3FSGP0513)",
    viewOnGithub: {
      title: "View on Github",
      url: "https://github.com/virgiawankusuma/Generasi-GIGIH-3.0/tree/final-project-full-stack-engineering",
    },
  }
  
  return (
    <footer className="bg-black/10 absolute w-full flex items-center z-10 justify-center p-4 md:px-12"
    >
      <div className="container md:mx-12 lg:mx-20">
        <div className="flex flex-wrap text-center text-white text-sm gap-y-3 items-center md:justify-between">
          <p className="w-full md:w-auto">{footer.copy}</p>
          <a 
            href={footer.viewOnGithub.url}
            target="_blank"
            rel="noreferrer"
            className="w-full items-center flex justify-center underline font-light min-h-[44px] min-w-[44px] hover:text-primary hover:decoration-secondary md:w-auto transition-all duration-200 ease-in-out"
            title={footer.viewOnGithub.title}
            aria-label={footer.viewOnGithub.title}
          >
            {footer.viewOnGithub.title}
          </a>
        </div>
      </div>
    </footer>
  )
}

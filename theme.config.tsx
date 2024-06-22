const YEAR = new Date().getFullYear()
export default {
    head: ({ title, meta }: any) => (
        <>
            {meta.description && (
                <meta name="description" content={meta.description} />
            )}
            {meta.tag && <meta name="keywords" content={meta.tag} />}
            {meta.author && <meta name="author" content={meta.author} />}
        </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: false,
    navs: [
        
    ],
    footer: (
        <small style={{ display: 'block', marginTop: '8rem' }}>
          <time>{YEAR}</time> © Rushabh Shroff.
          <a href="/feed.xml">RSS</a>
          <style jsx>{`
            a {
              float: right;
            }
            @media screen and (max-width: 480px) {
              article {
                padding-top: 2rem;
                padding-bottom: 4rem;
              }
            }
          `}</style>
        </small>
      )
}
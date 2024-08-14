import '../otom.css'

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (<h1 className='text-slate-100 dark:text-white font-inter text-3xl'>{children}</h1>),
    h2: ({ children }) => (<h2 className='dark:text-white font-inter inter text-2xl'>{children}</h2>),
    h3: ({ children }) => (<h3 className='dark:text-white font-inter inter text-xl'>{children}</h3>),
    p: ({ children }) => (<p className='dark:slate-600 font-inter inter text-base'>{children}</p>),
    a: ({ children }) => (<a className='text-dyblue' style={{ color: '#7094FA' }}>{children}</a>),
    ...components,
  }
}
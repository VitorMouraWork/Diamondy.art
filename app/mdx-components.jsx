import '../otom.css'

export function useMDXComponents(components) {
  return {
    ...components,
    h1: ({ children }) => <h1 className='text-slate-100 dark:text-white font-inter text-3xl'></h1>,
    h2: ({ children }) => <h2 className='dark:text-white font-inter inter text-2xl'></h2>,
    h3: ({ children }) => <h3 className='dark:text-white font-inter inter text-xl'></h3>,
    p: ({ children }) => <p className='dark:slate-600 font-inter inter text-base'></p>,
    a: ({ children }) => <a className='text-dyblue'></a>
  }
}
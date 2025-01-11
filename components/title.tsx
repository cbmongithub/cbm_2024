export const Title = ({ text }: { text: string }) => {
  return (
    <h1
      aria-label={`${text} Heading`}
      className='border border-t-0 border-b-neutral-900 border-x-neutral-900 pt-16 text-2xl pb-3 px-6 font-semibold tracking-tight text-neutral-100'
    >
      {text}
    </h1>
  )
}
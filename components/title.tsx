export const Title = ({ text }: { text: string }) => {
  return (
    <h1
      aria-label={`${text} Heading`}
      className='border border-t-0 border-b-neutral-900 border-x-neutral-900 p-6 text-2xl  font-semibold tracking-tight text-neutral-100'
    >
      {text}
    </h1>
  )
}
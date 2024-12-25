export const Title = ({ text }: { text: string }) => {
  return (
    <h1
      aria-label={`${text} Heading`}
      className='mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-100'
    >
      {text}
    </h1>
  )
}
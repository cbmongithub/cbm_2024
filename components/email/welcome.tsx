import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

const Welcome = (email: string) => {
  const previewText = 'Welcome to the cbm blog!'
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-black my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-neutral-800 rounded-2xl my-[40px] mx-auto p-8 max-w-[465px]'>
            <Section className='text-center'>
              <p
                className='text-zinc-100 text-2xl'
                aria-label="Christian's Logo"
              >
                <span className='text-zinc-100 text-4xl'>&#120148;</span>/blog
              </p>
            </Section>
            <Heading className='text-zinc-100 text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
              You have successfully <strong>subscribed</strong>
            </Heading>
            <Text className='text-zinc-200 text-[14px] leading-[24px]'>
              Welcome, {email}! You have subscribed to the newsletter. You will
              now receive updates on new blog posts.
            </Text>
            <Hr className='border border-solid border-black my-[26px] mx-0 w-full' />
            <Text className='text-[#666666] text-[12px] leading-[24px]'>
              This invitation was intended for {email}. If you did not expect
              this email, or are concerned about your accounts safety, please
              reply to this email to get in touch.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Welcome

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const response = await fetch('https://www.joshevski.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Form-Key': 'pk_mRHFApc83lpCwcx1BX5X5g'
      },
      body: JSON.stringify({
        to: ['info@orangize.de'],
        subject: body.subject,
        html: body.html,
        text: body.text
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Email service error: ${errorText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})

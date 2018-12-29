/* eslint-disable no-console */
import stripeLib from 'stripe'

const { STRIPE_SECRET_KEY } = process.env

console.log('SECRET', STRIPE_SECRET_KEY)

const stripe = stripeLib(STRIPE_SECRET_KEY)

exports.handler = async (event) => {
  console.log('In the API')
  if (event.httpMethod !== 'POST') {
    return errorFn('Method not allowed', 405)
  }

  try {
    const params = JSON.parse(event.body)
    const missingAttrs = !params
      ? ['all']
      : ['token', 'amount', 'donationType', 'email', 'message'].filter(k => !Object.keys(params).includes(k))
    if (missingAttrs.length) {
      if (missingAttrs.includes('token')) {
        return errorFn('Your card details are wrong', 422)
      }
      return errorFn('The following attributes are missing ' + missingAttrs, 422)
    }
    console.log('Entered the zone')

    const { token, amount, donationType, email, message } = params

    try {
      const { data } = await stripe.customers.list({
        limit: 1,
        email
      })

      const isCustomerKnown = data.length
      try {
        const customer = isCustomerKnown ? data[0] : await stripe.customers.create({
          email,
          source: token.id
        })

        console.log('Custom is ready, id ' + customer.id)

        try {
          await stripe.charges.create({
            amount,
            currency: 'eur',
            description: 'Donation',
            statement_descriptor: 'Thanks 4 the donation!',
            customer: customer.id,
            metadata: { donation_type: donationType, message }
          })

          console.log('Charged!')

          return { statusCode: 200, body: 'All good!' }
        } catch (e) {
          return errorFn('Something went wrong while charging', 500, e)
        }
      } catch (e) {
        return errorFn('Something went wrong while creating the donator', 500, e)
      }
    } catch (e) {
      return errorFn('Something went wrong while retrieving the donator list', 500, e)
    }
  } catch (e) {
    return errorFn('Unknown error', 500, e)
  }
}

const errorFn = (message, statusCode = 500, error = '') => {
  if (error) {
    console.error(error)
  }
  console.error(message)
  return { statusCode, body: JSON.stringify({ message }) }
}

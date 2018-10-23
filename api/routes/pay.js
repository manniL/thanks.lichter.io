import stripeLib from 'stripe'
import consola from 'consola'
import { secret } from '../../config/api'

const stripe = stripeLib(secret)

export default async (req, res) => {
  consola.log('In the API')
  try {
    const missingAttrs = !req.body ? ['yup'] : ['token', 'amount', 'donationType', 'email', 'message'].filter(k => !Object.keys(req.body).includes(k))
    if (missingAttrs.length) {
      if (missingAttrs.includes('token')) {
        return errorFn(res, 'Your card details are wrong', 422)('')
      }
      return errorFn(res, 'The following attributes are missing ' + missingAttrs, 422)('')
    }
    consola.log('Entered the zone')

    const { token, amount, donationType, email, message } = req.body // Using Express

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

        consola.log('Custom is ready, id ' + customer.id)

        try {
          await stripe.charges.create({
            amount,
            currency: 'eur',
            description: 'Donation',
            statement_descriptor: 'Thanks 4 the donation!',
            customer: customer.id,
            metadata: { donation_type: donationType, message }
          })

          consola.log('Charged!')

          return res.status(200).json({ message: 'All good!' })
        } catch (e) {
          return errorFn(res, 'Something went wrong while charging')(e)
        }
      } catch (e) {
        return errorFn(res, 'Something went wrong while creating the donator')(e)
      }
    } catch (e) {
      return errorFn(res, 'Something went wrong while retrieving the donator list')(e)
    }
  } catch (e) {
    return errorFn(res, 'Unknown error')(e)
  }
}

const errorFn = (res, msg, statusCode = 500) => (error) => {
  consola.error(error)
  consola.error(msg)
  res.status(statusCode).json({ message: error.message || msg })
  res.end()
}

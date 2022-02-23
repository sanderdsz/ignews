import styles from './styles.module.scss'
import {signIn, useSession} from "next-auth/client";
import {api} from '../../services/api'
import {getStripeJs} from "../../services/stripe-js";

export function SubscribeButton() {
  const [session] = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }
    // checkout session create
    try {
      const response = await api.post('subscribe')
      const {sessionId} = response.data
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({sessionId: sessionId})
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}

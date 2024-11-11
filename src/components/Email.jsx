import React from 'react'
import Notif from '../assets/image/notification.svg'

const Email = () => {
  return (
    <section class="seventh-background">
            <div class="subscribe-container">
                <div class="subscribe">
                    <img class="notif" img src={Notif} alt="" />
                    <h2 class="subscribe-head">Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>
                <div class="emails">
                    <input type="email" placeholder="✉ Your email" class="email-input" />
                    <button class="subscribe-button">Subscribe</button>
                </div>
            </div>

        </section>
  )
}

export default Email
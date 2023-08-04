function Contact() {
  const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31430.02069017775!2d-69.2527667302246!3d10.037263898300411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875ddb213cbe19%3A0xad6b8ed36fd89af6!2sPapa%20Ghino&#39;s%20Pizzas!5e0!3m2!1ses!2sve!4v1691154566004!5m2!1ses!2sve" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  const view = `
      <div class="contact">
        <div class="schedule">
          <h2 class="contactTitle">Opening hours</h2>
          <ul class="days">
            <li>Monday    <span>16:00 - 22:00</span></li>
            <li>Tuesday   <span>16:00 - 22:00</span></li>
            <li>Wednesday <span>12:00 - 22:00</span></li>
            <li>Thursday  <span>12:00 - 22:00</span></li>
            <li>Friday    <span>12:00 - 22:00</span></li>
            <li>Saturday  <span>12:00 - 22:00</span></li>
            <li>Sunday    <span>12:00 - 22:00</span></li>
          </ul>
        </div>
        <div class="mapContainer">
          <h2 class="contactTitle">Visit Us</h2>
          <div class="map">${map}<div>
        </div>
      </div>
    `;

  return view;
}

export default Contact;

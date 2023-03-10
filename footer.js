export function footer(){
  return `
  <!-- kfc logo  -->
  <div class="footer"></div>
  <img
    src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
    class="logo"
    alt="kfc-logo"
  />
  <!-- footer contents -->
  <table>
    <tr>
      <td>KFC Food</td>
      <td><a href="">Support</a></td>
      <td><a href="">Legal</a></td>
      <td><a href="">KFC India</a></td>
    </tr>

    <tr>
      <td><a href="./Cart_page/menu.html">Menu</a></td>
      <td><a href="">Get Help</a></td>
      <td><a href="https://online.kfc.co.in/terms-and-conditions">Terms and Conditions</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc">About KFC</a> </td>
    </tr>

    <tr>
      <td><a href="">Order Lookup</a></td>
      <td><a href="">Contact Us</a></td>
      <td><a href="https://online.kfc.co.in/privacyPolicy">Privacy Policy</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc/kfc-care">KFC Care</a></td>
    </tr>

    <tr>
      <td><a href="">Gift Card</a></td>
      <td><a href="">KFC Feedback</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc/disclaimer">Disclaimer</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc/careers">Careers</a></td>
    </tr>

    <tr>
      <td><a href="">Nutrition Allergen</a></td>
      <td><a href="https://online.kfc.co.in/privacyPolicy">Privacy Policy</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc/caution-notice">Caution Notice</a></td>
      <td><a href="https://online.kfc.co.in/about-kfc/our-golden-past">Our Golden Past</a></td>
    </tr>
  </table>

  <section class="location">
    <img
      class="location-logo"
      src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"
      alt=""
    />
    <a href="https://restaurants.kfc.co.in/">Find a KFC</a>
  </section>

  <!-- play store link  -->
  <section class="play-store">
    <img
      src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
      alt="Google play"
    />
    <img
      src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
      alt="apple store"
    />
  </section>

  <p class="copyright">
    Copyright © KFC Corporation 2021 All Rights Reserved
  </p>

  <!-- Social media link  -->
  <div class="socialmedia-links">
    <a href="https://www.instagram.com">
      <img
        src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"
        alt="instagram"
    /></a>
    <a href="https://www.facebook.com">
      <img
        src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"
        alt="facebook"
    /></a>
    <a href="https://www.twitter.com">
      <img
        src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"
        alt="twitter"
    /></a>
  </div>`
}

document.querySelector(".footer-div").innerHTML = footer();
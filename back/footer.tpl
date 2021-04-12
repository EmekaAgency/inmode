{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
 
 <img src="https://www.solutionsdirectpresta.solutions-web.be/themes/classic/images/footer.png" alt="" style="width:100%;"/>
 <div id="footer_test">
<div class="container">
  <div class="row">
  {*
    {block name='hook_footer_before'}
      {hook h='displayFooterBefore'}
    {/block} *}
  </div>
</div>
<div class="footer-container">
  <div class="container">
    <div class="row">
        {* SITEMAP PART *}
        <div id="sitemap" class="col-md-4">
          <div class="col-md-12">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;"> Nos pages</div>
            <div class="footer-sitemap-link">
              <a href="https://www.solutionsdirectpresta.solutions-web.be/en/6-accessories" title="Accesoires">
                Accessoires
              </a>
            </div>
            <div class="footer-sitemap-link">
              <a href="https://www.solutionsdirectpresta.solutions-web.be/en/11-cartouches" title="Cartouches">
                Cartouches
              </a>
            </div>
            <div class="footer-sitemap-link">
              <a href="https://www.solutionsdirectpresta.solutions-web.be/en/contact-us" title="Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
        {* ADDRESS PART *}
        <div class="col-md-4">
          <div class="col-md-12">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">Nous trouver</div>
            <div style="width: 100%">
              <i style="width: 24px; height: 24px; margin-right: 5px;" class="far fa-calendar-alt"></i>
              <span style="font-weight: bold;">Ouverture:</span> Du Lundi au Vendredi 10h-18h, Samedi 10h-15h
            </div>
            <div style="width: 100%">
              <i style="width: 24px; height: 24px; margin-right: 5px;" class="fas fa-map-marker-alt"></i>
              <a href="https://g.page/SolutionsDirect1420?share" target="_blank">
                Braine-L'Alleud, Belgique
              </a>
            </div>
          </div>
        </div>
        {* CONTACT PART *}
        <div class="col-md-4">
          <div style="width: 100%">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">Nous contacter</div>
            <div>
              <i style="width: 24px; height: 24px; margin-right: 5px;" class="fas fa-envelope"></i>
              <span style="font-weight: bold;">
                <a href="mailto:info@solutionsdirect.be">info@solutionsdirect.be</a>
              </span>
            </div>
            <div>
              <i style="width: 24px; height: 24px; margin-right: 5px;" class="fas fa-phone-alt"></i>
              <span style="font-weight: bold;">
                <a href="tel:+32 2 387 27 85">+32 2 387 27 85</a>
              </span>
            </div>
            <div>
              <i style="width: 24px; height: 24px; margin-right: 5px;" class="fab fa-facebook-f"></i>
              <span style="font-weight: bold;">
                <a href="https://www.facebook.com/SolutionsDirect1420" target="_blank">SolutionsDirect1420</a>
              </span>
            </div>
          </div>
        </div>
    </div>
    {* <div class="row">
      {block name='hook_footer'}
        {hook h='displayFooter'}
      {/block}
    </div>
    <div class="row">
      {block name='hook_footer_after'}
        {hook h='displayFooterAfter'}
      {/block}
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="text-sm-center">
          {block name='copyright_link'} 
          {/block}
        </p>
      </div>
    </div> *}
  </div>
</div>
</div>
<style type="text/css">
  footer #sitemap .footer-sitemap-link {
    position: relative;
    width: max-content;
    margin-bottom: 2px;
  }

  footer #sitemap .footer-sitemap-link a {
    text-decoration: none;
  }

  footer #sitemap .footer-sitemap-link a:hover::after {
    width: 125%;
    transition: width 0.3s ease-in-out 0s;
  }

  footer #sitemap .footer-sitemap-link a::after {
    content: "";
    text-align: center;
    margin: 0 auto;
    width: 0%;
    transition: width 0.3s ease-in-out 0s;
    height: 2px;
    background-color: #f2f2f2;
    position: absolute;
    left: 0;
    bottom: 3px;
  }
</style>

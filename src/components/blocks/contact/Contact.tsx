import { FC } from 'react'
import IconBox from 'components/reuseable/IconBox'
import TeleMarketer from 'icons/lineal/TeleMarketer'
import NextLink from 'components/reuseable/links/NextLink'
import ContactForm from 'components/common/ContactForm'

const Contact: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pb-14 pb-md-16">
        {/* ========== contact form section ========== */}
        <div className="row py-14">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            {/* <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p className="lead text-center mb-10">We will get back to you shortly.</p> */}
            <ContactForm />
          </div>
        </div>
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative h-24">
            <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.4rem' }} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12812.194483391411!2d-83.95517091870843!3d34.09887393220932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5935b7ca1474d%3A0x93c415f2fa105be8!2s3133%20Little%20Bear%20Ln%2C%20Buford%2C%20GA%2030519%2C%20USA!5e0!3m2!1sen!2sin!4v1725347263683!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded'
            />
          </div>

          <div className="col-lg-6">
            <TeleMarketer className="icon-svg-md mb-4" />

            <h2 className="display-4 mb-8">Connect with Us</h2>
            <div className="d-flex flex-row mb-5">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-location-pin-alt" />
              </div>
              <div>
                <h5 className="mb-1">Ambit - US Office</h5>
                <address>🏢  3133 Little Bear Ln, Buford, GA 30519</address>
                <div className='d-flex flex-column mt-n3'>
                  <NextLink title="📞 Call Us: (+1) 706 403 8982" href="tel:+17064038982" />
                  <NextLink title="📞 Alternate: (+1) 706 894 9160" href="tel:+17068949160" />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row mb-5">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-location-pin-alt" />
              </div>
              <div>
                <h5 className="mb-1">Ambit - India Office</h5>
                <address>
                  🌟 D-308, The First, Behind Keshavbaug Party Plot <br className="d-none d-md-block" />
                  Vastrapur, Ahmedabad - 380015
                </address>
                <div className='d-flex flex-column mt-n3'>
                  <NextLink title="📞 Call Us: (+91) 982 501 6079" href="tel:+919825016079" />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row mb-5">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-envelope" />
              </div>

              <div>
                <h5 className="mb-1">Reach Out via Email</h5>
                <p className="mb-0">
                  <a href="mailto:info@ambitkpo.com" className="link-body">
                    📧 info@ambitkpo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
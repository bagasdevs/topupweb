import Image from 'next/image';
import FootItem from '../../molecules/FootItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/footer.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                {' '}
                <br />
                {' '}
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FootItem title="About Us" href="/about" />
                    <FootItem title="Press Release" href="/release" />
                    <FootItem title="Terms of Use" href="/terms" />
                    <FootItem title="Privacy & Policy" href="/privacy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FootItem title="Refund Policy" href="/refund" />
                    <FootItem title="Unlock Rewards" href="/unlock" />
                    <FootItem title="Live Chatting" href="/live" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FootItem title="hi@store.gg" href="mailto: hi@store.gg" />
                    <FootItem
                      title="team@store.gg"
                      href="mailto: team@store.gg"
                    />
                    <FootItem
                      title="Magelang, Jawa Tengah"
                      href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                    />
                    <FootItem
                      title="0851 - 5615 - 5816"
                      href="tel: 085156155816"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

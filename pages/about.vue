<template>
  <div>
    <section id="intro">
      <FadeUp>
        <div class="grid6">
          <div class="col-span-6 mx-auto">
            <h2>
              A mortgage is a significant financial decision, and it can be
              difficult to figure out which loan is best for you and your family
              with the hundreds of options available in Australia. This is where
              we can help!
            </h2>
          </div>
          <a href="#solutions"><Arrow class="arrow" /></a>
        </div>
      </FadeUp>
    </section>
    <section id="solutions">
      <FadeUp>
        <div class="grid8">
          <a href="#intro" class="col-span-8"
            ><Arrow class="arrow uparrow" />
          </a>
          <div class="col-start-3 col-span-4 flex flex-col">
            <Roof class="h-auto ml-auto w-1/3" />
            <div class="bg-primary rounded-b rounded-tl p-4 py-6 pt-10">
              <h4 class="text-background mb-2 text-center">
                MJO Mortgage Solutions provides lending solutions for:
              </h4>
              <div class="text-background font-normal">
                <h5>First Home Buyers</h5>
                <h5>Investors</h5>
                <h5>Refinancers</h5>
                <h5>Full Time, Part time and Casual workers</h5>
                <h5>Self Employed and PAYG Clients</h5>
              </div>
            </div>
          </div>
          <a href="#what" class="col-span-8">
            <Arrow class="arrow" />
          </a>
        </div>
      </FadeUp>
    </section>
    <section id="what">
      <FadeUp>
        <div class="grid6">
          <a href="#solutions" class="col-span-6"
            ><Arrow class="arrow uparrow" />
          </a>
          <h4 class="col-span-6">What we do to help you</h4>
          <div class="col-span-3">
            <p>
              At MJO Mortgage Solutions we'll discuss what is important to you
              so we can get a detailed picture of what you need from a loan.
            </p>
            <p>
              We will calculate your borrowing capacity to provide insight into
              what can be borrowed.
            </p>
            <p>
              Following this we compare loans from a panel of lenders to find
              the one that best suits your wants, needs and goals.
            </p>
            <p>
              We will assist in structuring your application to increase your
              chances of success.
            </p>
          </div>
          <div class="col-span-3">
            <p>
              We'll submit your loan and manage the process through to
              settlement.
            </p>
            <p>
              We pride ourselves on staying up to date with the industry
              standards. Our clients can trust that they are engaging a mortgage
              broker who upholds compliance and ethical standards with their
              personal information. Our goal is to develop long-term connections
              with our clients so that they feel comfortable contacting us if
              any questions emerge during the application process and throughout
              the life of the loan.
            </p>
          </div>
          <a href="#why" class="col-span-6">
            <Arrow class="arrow" />
          </a>
        </div>
      </FadeUp>
    </section>
    <section id="why">
      <FadeUp>
        <div class="grid8">
          <a href="#what" class="col-span-8"
            ><Arrow class="arrow uparrow" />
          </a>
          <div class="col-start-3 col-span-4 flex flex-col">
            <Roof class="h-auto ml-auto w-1/3" />
            <div class="bg-primary rounded-b rounded-tl p-4 py-6 pt-10">
              <h4 class="text-background mb-2 text-center">Why</h4>
              <div class="text-background font-normal">
                <h5>Using a Mortgage broking is FREE!</h5>
                <h5>
                  We offer loans from a range of lenders, as opposed to banks,
                  which exclusively offer their own products.
                </h5>
                <h5>
                  We save you time, let us do the legwork and find the best loan
                  for you.
                </h5>
              </div>
            </div>
          </div>
          <a href="#where" class="col-span-8">
            <Arrow class="arrow" />
          </a>
        </div>
      </FadeUp>
    </section>
    <section id="where">
      <FadeUp>
        <div class="grid6">
          <a href="#why" class="col-span-6"><Arrow class="arrow uparrow" /> </a>
          <h4 class="col-span-3">Where</h4>
          <div class="col-span-3">
            <p>We service Australia wide.</p>
            <p>
              We know how challenging it can be for people to juggle their
              everyday lives with work and family commitments, so finding the
              time to meet with a mortgage broker can be difficult.
            </p>
            <p>
              Luckily, we are a mobile brokerage and can meet you whenever is
              most convenient for you via zoom, on the weekends.
            </p>
          </div>
          <h4 class="row-start-2 col-start-4">Contact</h4>
          <div class="col-span-3">
            <p>
              If you are looking to buy your first home, refinance, or invest
              real estate, get in touch . . . . with deez nuts.
            </p>
            <NuxtLink to="contact" class="p-0"
              ><button class="submitButton mt-4" type="submit">
                contact
              </button></NuxtLink
            >
          </div>
        </div>
      </FadeUp>
    </section>
  </div>
</template>

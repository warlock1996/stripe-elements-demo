<template>
  <div id="app">
    <b-card
      id="checkout-card"
      header-class="checkout-card-header px-0"
      footer-class="checkout-card-footer"
    >
      <template #header>
        <b-row class="px-4">
          <b-col cols="5"><b class="text-normal">Item Name</b></b-col>
          <b-col cols="2"><b class="text-normal">Item Price</b></b-col>
          <b-col cols="5" class="text-right"
            ><b class="text-normal">Actions</b></b-col
          >
        </b-row>
        <hr />
        <b-row class="px-4" align-v="center" align-h="between">
          <b-col cols="12" sm="6">
            <h1 class="mb-0 text-lg"><b>Pro Monthly</b></h1>
            <p class="mb-0">
              <i> <small> Billed once per month until cancelled </small> </i>
            </p>
          </b-col>
          <b-col cols="6" sm="3" class="text-center text-normal"
            >$247.00
          </b-col>
          <b-col cols="6" sm="3" class="text-right">
            <b-button class="checkout-remove-button"> Remove </b-button>
          </b-col>
        </b-row>
        <hr />
        <b-row class="px-4">
          <b-col class="text-right text-xl font-weight-bold"
            >Total: $247.00
          </b-col>
        </b-row>
      </template>

      <div class="checkout-card-body">
        <b-form>
          <b-row>
            <b-col cols="12" md="6">
              <h3 class="mb-0 text-xl"><b>Linkedin Info</b></h3>
              <p>Your credentials will be used for running automation</p>

              <b-form-group
                label-cols-lg="12"
                label="LinkedIn Email Address*"
                label-for="email"
                label-class="checkout-label"
              >
                <b-form-input
                  v-model="form.linkedinEmail"
                  class="checkout-input"
                  id="email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-lg="12"
                label="Linkedin Password*"
                label-for="password"
                label-class="checkout-label"
              >
                <b-form-input
                  v-model="form.linkedinPassword"
                  class="checkout-input"
                  id="password"
                  type="password"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <h3 class="mb-0 text-xl"><b>Personal Info</b></h3>
              <p>Your credentials will be used for running automation</p>
              <b-form-group
                label-cols-lg="12"
                label="First Name*"
                label-for="firstname"
                label-class="checkout-label"
              >
                <b-form-input
                  v-model="form.firstName"
                  class="checkout-input"
                  id="firstname"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-lg="12"
                label="Last Name*"
                label-for="lastname"
                label-class="checkout-label"
              >
                <b-form-input
                  id="lastname"
                  class="checkout-input"
                  v-model="form.lastName"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              Have a discount code?
              <a href="#" @click.prevent="() => {}">Click to enter it</a>
            </b-col>
          </b-row>

          <div class="d-flex gap align-items-center mt-4 mb-2">
            <h1 class="text-xl font-weight-bold">Credit Card Info</h1>
            <img
              src="https://omnipush.io/wp-content/plugins/easy-digital-downloads/templates/images/icons/mastercard.png"
              width="40px"
              height="30px"
              alt="card-image"
            />
            <img
              src="https://omnipush.io/wp-content/plugins/easy-digital-downloads/templates/images/icons/visa.png"
              width="40px"
              height="30px"
              alt="card-image"
            />
            <img
              src="https://omnipush.io/wp-content/plugins/easy-digital-downloads/templates/images/icons/discover.png"
              width="40px"
              height="30px"
              alt="card-image"
            />
          </div>
          <div class="d-flex gap align-items-end">
            <svg
              class="edd-icon edd-icon-lock"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="28"
              viewBox="0 0 18 28"
              aria-hidden="true"
            >
              <path
                d="M5 12h8V9c0-2.203-1.797-4-4-4S5 6.797 5 9v3zm13 1.5v9c0 .828-.672 1.5-1.5 1.5h-15C.672 24 0 23.328 0 22.5v-9c0-.828.672-1.5 1.5-1.5H2V9c0-3.844 3.156-7 7-7s7 3.156 7 7v3h.5c.828 0 1.5.672 1.5 1.5z"
              ></path>
            </svg>
            <div class="text-normal font-weight-bold">
              This is a secure SSL encrypted payment.
            </div>
          </div>
          <b-row class="my-2">
            <b-col>
              <b-form-group
                label-cols-lg="12"
                label="Name on the Card*"
                label-for="nameoncard"
                label-class="checkout-label"
              >
                <b-form-input
                  id="nameoncard"
                  class="checkout-input"
                  v-model="form.nameOnCard"
                  placeholder="Enter Name you have on your Card"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label-cols-lg="12"
                label="Credit Card*"
                label-for="creditcard"
                label-class="checkout-label"
              >
                <div id="card"></div>
              </b-form-group>
            </b-col>
          </b-row>

          <fieldset>
            <legend class="text-xl font-weight-bold">Billing Details</legend>
            <b-row>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing Address*"
                  label-for="billingaddress"
                  label-class="checkout-label"
                >
                  <div id="billingaddress1"></div>
                  <!-- <b-form-input
                    id="billingaddress"
                    class="checkout-input"
                    v-model="form.address.addressLine1"
                    placeholder="Address line 1"
                  ></b-form-input> -->
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing Address Line 2 (optional)*"
                  label-for="billingaddresslinn1"
                  label-class="checkout-label"
                >
                  <div id="billingaddress2"></div>

                  <!-- <b-form-input
                    id="billingaddresslinn1"
                    class="checkout-input"
                    v-model="form.address.addressLine2"
                    placeholder="Address line 2"
                  ></b-form-input> -->
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing City *"
                  label-for="city"
                  label-class="checkout-label"
                >
                  <div id="billingcity"></div>

                  <!-- <b-form-input
                    id="city"
                    class="checkout-input"
                    v-model="form.address.billingCity"
                    placeholder="City"
                  ></b-form-input> -->
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing Zip / Postal Code"
                  label-for="billingzip"
                  label-class="checkout-label"
                >
                  <div id="billingzip"></div>

                  <!-- <b-form-input
                    id="billingzip"
                    class="checkout-input"
                    v-model="form.address.billingZip"
                    placeholder="Zip / Postal Code"
                  ></b-form-input> -->
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing Country*"
                  label-for="country"
                  label-class="checkout-label"
                >
                  <div id="billingcountry"></div>

                  <!-- <b-form-select
                    id="country"
                    class="checkout-input"
                    v-model="form.address.billingCountry"
                    :options="[]"
                  ></b-form-select> -->
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label-cols-lg="12"
                  label="Billing State / Province*"
                  label-for="state"
                  label-class="checkout-label"
                >
                  <div id="billingstate"></div>

                  <!-- <b-form-select
                    id="state"
                    class="checkout-input"
                    v-model="form.address.billingState"
                    :options="[]"
                  ></b-form-select> -->
                </b-form-group>
              </b-col>
            </b-row>
          </fieldset>
        </b-form>
      </div>

      <template #footer>
        <div v-if="showTOS" class="show-terms-container">
          <p><strong>Terms of Service</strong></p>
          <p>&zwj;<em>Effective as of Nov, 2019.</em></p>
          <p><strong>Acceptance of Terms of Service</strong></p>
          <p>
            Welcome, and thank you for your interest in Social Selling on
            Linkedin (“OmniPUSH,” “we,” or “us”) and our website at&nbsp;<a
              href="https://useorca.com/"
              >https://omnipush.io</a
            >, along with our related websites, networks, applications, mobile
            applications, and other services provided by us (collectively, the
            “Service”). These Terms of Service are a legally binding contract
            between you and OmniPUSH regarding your use of the Service.
          </p>
          <p><strong>Please read the following terms carefully.</strong></p>
          <p>
            <strong
              >By clicking "I accept", or by downloading, installing, or
              otherwise accessing or using the service,&nbsp;</strong
            >you agree that you have read and understood, and, as a condition to
            your use of the service, you agree to be bound by, the following
            terms and conditions, including &nbsp;OmniPUSH's privacy policy
            (together, these "Terms"). If you are not eligible, or do not agree
            to the Terms, then you do not have our permission to use the
            Service.
          </p>
          <p>
            Your use of the Service, and OmniPUSH's provision of the Service to
            you, constitutes an agreement by OmniPUSH and you to be bound by
            these terms.
          </p>
          <p>
            <strong>Arbitration Notice</strong>. Except for certain kinds of
            disputes described in Section 16, you agree that disputes arising
            under these Terms will be resolved by binding, individual
            arbitration, and by accepting these Terms, you and OmniPUSH are each
            waiving the right to a trial by jury or to participate in any class
            action or representative proceeding. You agree to give up your right
            to go to court to assert or defend your rights under this contract
            (except for matters that may be taken to small claims court). Your
            rights will be determined by a neutral arbitrator and not a judge or
            jury (see Section 16).
          </p>
          <p>
            <strong>OmniPUSH Service Overview.</strong>&nbsp;OmniPUSH provides
            web and desktop-based tools to manage and automate workflows and
            with customers and prospects across multiple platforms and services.
          </p>
          <p>
            <strong>Eligibility.&nbsp;</strong>You must be at least 18 years old
            to use the Service. By agreeing to these Terms, you represent and
            warrant to us that: (a) you are at least 18 years old; (b) you have
            not previously been suspended or removed from the Service; and (c)
            your registration and your use of the Service is in compliance with
            any and all applicable laws and regulations. If you are an entity,
            organization, or company, the individual accepting these Terms on
            your behalf represents and warrants that they have authority to bind
            you to these Terms and you agree to be bound by these Terms.
          </p>
          <p>
            <strong>Accounts and Registration.&nbsp;</strong>To access most
            features of the Service, you must register for an account. When you
            register for an account, you may be required to provide us with some
            information about yourself, such as your name, email address, or
            other contact information. You agree that the information you
            provide to us is accurate and that you will keep it accurate and
            up-to-date at all times. When you register, you will be asked to
            provide a password. You are solely responsible for maintaining the
            confidentiality of your account and password, and you accept
            responsibility for all activities that occur under your account. If
            you believe that your account is no longer secure, then you must
            immediately notify us at&nbsp;support@omnipush.io.
          </p>
          <p><strong>Third Party Services</strong></p>
          <p>
            <strong>Third Party Services and Linkedin Websites.</strong
            >&nbsp;OmniPUSH may provide tools through the Service that enable
            you to interact with and export information to third party services,
            including through features that allow you to link your account on
            OmniPUSH with an account on the third party service. You are solely
            responsible for maintaining your accounts on such third party
            services in good standing and complying with any applicable third
            party terms of service and laws. By using one of these tools, you
            authorize OmniPUSH to act as your agent and to take actions on your
            behalf on or through the third party services and you agree that
            OmniPUSH may transfer information to or from the applicable third
            party services on your behalf and execute commands on or through
            such services at your direction. Third party services are not under
            OmniPUSH’s control, and, to the fullest extent permitted by law,
            OmniPUSH is not responsible for any third party service’s use of
            your exported information. The Service may also contain links to
            third party websites. Linked websites are not under OmniPUSH’s
            control, and OmniPUSH is not responsible for their content.
          </p>
          <p>
            <strong>Third Party Software.</strong>&nbsp;The Service may include
            or incorporate third party software components that are generally
            available free of charge under licenses granting recipients broad
            rights to copy, modify, and distribute those components (“Third
            Party Components”). Although the Service is provided to you subject
            to these Terms, nothing in these Terms prevents, restricts, or is
            intended to prevent or restrict you from obtaining Third Party
            Components under the applicable third party licenses or to limit
            your use of Third Party Components under those third party licenses.
            General Payment Terms. Certain features of the Service may require
            you to pay fees. Before you pay any fees, you will have an
            opportunity to review and accept the fees that you will be charged.
            All fees are in US Dollars and are non-refundable, except as
            described in 5.2 below.
          </p>
          <p>
            <strong>Price.</strong>&nbsp;OmniPUSH reserves the right to
            determine pricing for the Service. OmniPUSH will make reasonable
            efforts to keep pricing information published on the website up to
            date. We encourage you to check our website periodically for current
            pricing information. OmniPUSH may change the fees for any feature of
            the Service, including additional fees or charges, if OmniPUSH gives
            you advance notice of changes before they apply. OmniPUSH, at its
            sole discretion, may make promotional offers with different features
            and different pricing to any of OmniPUSH’s customers. These
            promotional offers, unless made to you, will not apply to your offer
            or these Terms.
          </p>
          <p>
            <strong>Refunds.</strong>&nbsp;Before making any purchase, please
            try our free trial and see if OmniPUSH is what you need. Once
            upgraded, we do not offer any refunds under any circumstance, but
            you can cancel your subscription at any time.
          </p>
          <p>
            <strong>Authorization.</strong>&nbsp;You authorize OmniPUSH to
            charge all sums for the orders that you make and any level of
            Service you select as described in these Terms or published by
            OmniPUSH, including all applicable taxes, to the payment method
            specified in your account. If you pay any fees with a credit card,
            OmniPUSH may seek pre-authorization of your credit card account
            prior to your purchase to verify that the credit card is valid and
            has the necessary funds or credit available to cover your purchase.
          </p>
          <p>
            <strong>Subscription Service.</strong>&nbsp;The Service may include
            automatically recurring payments for periodic charges (“Subscription
            Service”). If you activate a Subscription Service, you authorize
            OmniPUSH to periodically charge, on a going-forward basis and until
            cancellation of either the recurring payments or your account, all
            accrued sums on or before the payment due date for the accrued sums.
            The "Subscription Billing Date" is the date when you purchase your
            first subscription to the Service. For information on the
            “Subscription Fee”, please see our Pricing page. Your account will
            be charged automatically on the Subscription Billing Date all
            applicable fees and taxes for the next subscription period. The
            subscription will continue unless and until you cancel your
            subscription or we terminate it. You must cancel your subscription
            before it renews in order to avoid billing of the next periodic
            Subscription Fee to your account. We will bill the periodic
            Subscription Fee to the payment method you provide to us during
            registration (or to a different payment method if you change your
            payment information). You may cancel the Subscription Service by
            following the instructions on our web site or contacting us
            at:&nbsp;support@omnipush.io.
          </p>
          <p>
            <strong>Delinquent Accounts.</strong>&nbsp;OmniPUSH may suspend or
            terminate access to the Service, including fee-based portions of the
            Service, for any account for which any amount is due but unpaid. In
            addition to the amount due for the Service, a delinquent account
            will be charged with fees or charges that are incidental to any
            chargeback or collection of any the unpaid amount, including
            collection fees.
          </p>
          <p><strong>Licenses</strong></p>
          <p>
            <strong>Limited License.&nbsp;</strong>Subject to your complete and
            ongoing compliance with these Terms, OmniPUSH grants you, solely for
            your personal use, a limited, non-exclusive, non-transferable,
            non-sublicensable, revocable license to access and use the Service,
            solely for your internal business purposes.
          </p>
          <p>
            <strong>License Restrictions.</strong>&nbsp;Except and solely to the
            extent such a restriction is impermissible under applicable law, you
            may not: (a) reproduce, distribute, publicly display, or publicly
            perform the Service; (b) make modifications to the Service; or (c)
            interfere with or circumvent any feature of the Service, including
            any security or access control mechanism. If you are prohibited
            under applicable law from using the Service, you may not use it.
          </p>
          <p>
            <strong>Feedback.</strong>&nbsp;If you choose to provide input and
            suggestions regarding problems with or proposed modifications or
            improvements to the Service (“Feedback”), then you hereby grant
            OmniPUSH an unrestricted, perpetual, irrevocable, non-exclusive,
            fully-paid, royalty-free right to exploit the Feedback in any manner
            and for any purpose, including to improve the Service and create
            other products and services.
          </p>
          <p>
            <strong>Ownership; Proprietary Rights.</strong>&nbsp;The Service is
            owned and operated by OmniPUSH. The visual interfaces, graphics,
            design, compilation, information, data, computer code (including
            source code or object code), products, software, services, and all
            other elements of the Service (“Materials”) provided by OmniPUSH are
            protected by intellectual property and other laws. All Materials
            included in the Service are the property of OmniPUSH or its third
            party licensors. Except as expressly authorized by OmniPUSH, you may
            not make use of the Materials. OmniPUSH reserves all rights to the
            Materials not granted expressly in these Terms.
          </p>
          <p><strong>User Content</strong></p>
          <p>
            <strong>User Content Generally.</strong>&nbsp;Certain features of
            the Service may permit users to upload content to the Service,
            including messages, reviews, photos, video, images, folders, data,
            text, and other types of works (“User Content”) and to publish User
            Content on the Service. You retain any copyright and other
            proprietary rights that you may hold in the User Content that you
            post to the Service.
          </p>
          <p>
            <strong>Limited License Grant to OmniPUSH.&nbsp;</strong>By
            providing User Content to or via the Service, you grant OmniPUSH a
            worldwide, non-exclusive, royalty-free, fully paid right and license
            (with the right to sublicense) to host, store, transfer, display,
            perform, reproduce, modify for the purpose of formatting for
            display, and distribute your User Content, in whole or in part, in
            any media formats and through any media channels now known or
            hereafter developed.
          </p>
          <p>
            <strong>User Content Representations and Warranties.</strong
            >&nbsp;OmniPUSH disclaims any and all liability in connection with
            User Content. You are solely responsible for your User Content and
            the consequences of providing User Content via the Service. By
            providing User Content via the Service, you affirm, represent, and
            warrant that:
          </p>
          <ol>
            <li>
              you are the creator and owner of the User Content, or have the
              necessary licenses, rights, consents, and permissions to authorize
              OmniPUSH and users of the Service to use and distribute your User
              Content as necessary to exercise the licenses granted by you in
              this Section, in the manner contemplated by OmniPUSH, the Service,
              and these Terms;
            </li>
            <li>
              your User Content, and the use of your User Content as
              contemplated by these Terms, does not and will not: (i) infringe,
              violate, or misappropriate any third party right, including any
              copyright, trademark, patent, trade secret, moral right, privacy
              right, right of publicity, or any other intellectual property or
              proprietary right; (ii) slander, defame, libel, or invade the
              right of privacy, publicity or other property rights of any other
              person; or (iii) cause OmniPUSH to violate any law or regulation;
              and
            </li>
          </ol>
          <ul>
            <li>
              your User Content could not be deemed by a reasonable person to be
              objectionable, profane, indecent, pornographic, harassing,
              threatening, embarrassing, hateful, or otherwise inappropriate.
            </li>
          </ul>
          <p>
            <strong>User Content Disclaimer.</strong>&nbsp;We are under no
            obligation to edit or control User Content that you or other users
            post or publish, and will not be in any way responsible or liable
            for User Content. OmniPUSH may, however, at any time and without
            prior notice, screen, remove, edit, or block any User Content that
            in our sole judgment violates these Terms or is otherwise
            objectionable. You understand that when using the Service you will
            be exposed to User Content from a variety of sources and acknowledge
            that User Content may be inaccurate, offensive, indecent, or
            objectionable. You agree to waive, and do waive, any legal or
            equitable right or remedy you have or may have against OmniPUSH with
            respect to User Content. If notified by a user or content owner that
            User Content allegedly does not conform to these Terms, we may
            investigate the allegation and determine in our sole discretion
            whether to remove the User Content, which we reserve the right to do
            at any time and without notice. For clarity, OmniPUSH does not
            permit copyright-infringing activities on the Service.
          </p>
          <p>
            <strong>Monitoring Content.</strong>&nbsp;OmniPUSH does not control
            and does not have any obligation to monitor: (a) User Content; (b)
            any content made available by third parties; or (c) the use of the
            Service by its users. You acknowledge and agree that OmniPUSH
            reserves the right to, and may from time to time, monitor any and
            all information transmitted or received through the Service for
            operational and other purposes. If at any time OmniPUSH chooses to
            monitor the content, OmniPUSH still assumes no responsibility or
            liability for content or any loss or damage incurred as a result of
            the use of content. During monitoring, information may be examined,
            recorded, copied, and used in accordance with our Privacy Policy.
          </p>
          <p><strong>Prohibited Conduct</strong></p>
          <p><strong>By using the service you agree not to:</strong></p>
          <ol>
            <li>
              use the Service for any illegal purpose or in violation of any
              local, state, national, or international law, including without
              limitation laws related to spam or unsolicited communications;
            </li>
            <li>
              harass, threaten, demean, embarrass, or otherwise harm any other
              user of the Service;
            </li>
          </ol>
          <ul>
            <li>
              violate, or encourage others to violate, any right of a third
              party, including by infringing or misappropriating any third party
              intellectual property right;
            </li>
          </ul>
          <ol>
            <li>
              interfere with security-related features of the Service, including
              by: (i) disabling or circumventing features that prevent or limit
              use or copying of any content; or (ii) reverse engineering or
              otherwise attempting to discover the source code of any portion of
              the Service except to the extent that the activity is expressly
              permitted by applicable law;
            </li>
            <li>
              interfere with the operation of the Service or any user’s
              enjoyment of the Service, including by: (i) uploading or otherwise
              disseminating any virus, adware, spyware, worm, or other malicious
              code; (ii) making any unsolicited offer or advertisement to
              another user of the Service or any third party service; (iii)
              collecting personal information about another user or third party
              without consent; or (iv) interfering with or disrupting any
              network, equipment, or server connected to or used to provide the
              Service;
            </li>
            <li>
              perform any fraudulent activity including impersonating any person
              or entity, claiming a false affiliation, accessing any other
              Service account without permission;
            </li>
          </ol>
          <ul>
            <li>
              sell or otherwise transfer the access granted under these Terms or
              any Materials (as defined in Section 7) or any right or ability to
              view, access, or use any Materials; or
            </li>
            <li>
              attempt to do any of the acts described in this Section 9 or
              assist or permit any person in engaging in any of the acts
              described in this Section 9.
            </li>
          </ul>
          <p><strong>Digital Millennium Copyright Act</strong></p>
          <p>
            <strong>DMCA Notification.</strong>&nbsp;We comply with the
            provisions of the Digital Millennium Copyright Act applicable to
            Internet service providers (Indian Chapter). If you have an
            intellectual property rights-related complaint about material posted
            on the Service, you may contact our Designated Agent at the
            following address:
          </p>
          <p>OmniPUSH</p>
          <p>Attn: Legal Department (Copyright Notification)</p>
          <p>Email:&nbsp;support@omnipush.io</p>
          <p>
            Any notice alleging that materials hosted by or distributed through
            the Service infringe intellectual property rights must comply
            include the following information:
          </p>
          <ol>
            <li>
              an electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright or other right being
              infringed;
            </li>
            <li>
              a description of the copyrighted work or other intellectual
              property that you claim has been infringed;
            </li>
          </ol>
          <ul>
            <li>
              a description of the copyrighted work or other intellectual
              property that you claim has been infringed;
            </li>
          </ul>
          <ol>
            <li>
              a description of the material that you claim is infringing and
              where it is located on the Service;
            </li>
            <li>your address, telephone number, and email address;</li>
            <li>
              a statement by you that you have a good faith belief that the use
              of the materials on the Service of which you are complaining is
              not authorized by the copyright owner, its agent, or the law; and
            </li>
          </ol>
          <ul>
            <li>
              a statement by you that the above information in your notice is
              accurate and that, under penalty of perjury, you are the copyright
              or intellectual property owner or authorized to act on the
              copyright or intellectual property owner’s behalf.
            </li>
          </ul>
          <p>
            <strong>Repeat Infringers.</strong>&nbsp;OmniPUSH will promptly
            terminate the accounts of users that are determined by OmniPUSH to
            be repeat infringers. Modification of these Terms. We reserve the
            right to change these Terms on a going-forward basis at any time.
            Please check these Terms periodically for changes. If a change to
            these Terms materially modifies your rights or obligations, we may
            require that you accept the modified Terms in order to continue to
            use the Service. Material modifications are effective upon your
            acceptance of the modified Terms. Immaterial modifications are
            effective upon publication. Except as expressly permitted in this
            Section 11, these Terms may be amended only by a written agreement
            signed by authorized representatives of the parties to these Terms.
            Disputes arising under these Terms will be resolved in accordance
            with the version of these Terms that was in effect at the time the
            dispute arose.
          </p>
          <p>
            <strong>Term, Termination and Modification of the Service</strong>
          </p>
          <p>
            <strong>Term.&nbsp;</strong>These Terms are effective beginning when
            you accept the Terms or first download, install, access, or use the
            Service, and ending when terminated as described in Section 12.2.
          </p>
          <p>
            <strong>Termination.&nbsp;</strong>If you violate any provision of
            these Terms, your authorization to access the Service and these
            Terms automatically terminate. In addition, OmniPUSH may, at its
            sole discretion, terminate these Terms or your account on the
            Service, or suspend or terminate your access to the Service, at any
            time for any reason or no reason, with or without notice. You may
            terminate your account and these Terms at any time by following the
            instructions on our web site or contacting customer service
            at&nbsp;support@omnipush.io.
          </p>
          <p>
            <strong>Effect of Termination.&nbsp;</strong>Upon termination of
            these Terms: (a) your license rights will terminate and you must
            immediately cease all use of the Service; (b) you will no longer be
            authorized to access your account or the Service; (c) you must pay
            OmniPUSH any unpaid amount that was due prior to termination; and
            (d) all payment obligations accrued prior to termination and
            Sections 6.3, 7, 12.3, 13, 14, 15, 16 and 17 will survive.
          </p>
          <p>
            <strong>Modification of the Service.</strong>&nbsp;OmniPUSH reserves
            the right to modify or discontinue the Service at any time
            (including by limiting or discontinuing certain features of the
            Service), temporarily or permanently, without notice to you.
            OmniPUSH will have no liability for any change to or discontinuation
            of the Service or any suspension or termination of your access to or
            use of the Service.
          </p>
          <p>
            <strong>Indemnity.</strong>&nbsp;To the fullest extent permitted by
            law, you are responsible for your use of the Service, and you will
            defend and indemnify OmniPUSH and its officers, directors,
            employees, consultants, affiliates, subsidiaries and agents
            (together, the “ OmniPUSH Entities”) from and against every claim
            brought by a third party, and any related liability, damage, loss,
            and expense, including reasonable attorneys’ fees and costs, arising
            out of or connected with: (a) your unauthorized use of, or misuse
            of, the Service; (b) your violation of any portion of these Terms,
            any representation, warranty, or agreement referenced in these
            Terms, or any applicable law or regulation; (c) your violation of
            any third party right, including any intellectual property right or
            publicity, confidentiality, other property, or privacy right; or (d)
            any dispute or issue between you and any third party. We reserve the
            right, at our own expense, to assume the exclusive defense and
            control of any matter otherwise subject to indemnification by you
            (without limiting your indemnification obligations with respect to
            that matter), and in that case, you agree to cooperate with our
            defense of those claims.
          </p>
          <p><strong>Disclaimers; No Warranties</strong></p>
          <p>
            The Service and All Materials and Content available through the
            Service are provided&nbsp;<strong>As Is</strong>&nbsp;and on
            an&nbsp;<strong>As Available&nbsp;</strong>basis. OmniPUSH disclaims
            all warranties of any kind, whether express or implied, relating to
            the service and all materials and content available through the
            service, including: (A) any implied warranty of merchantability,
            fitness for a particular purpose, title, quiet enjoyment, or
            non-infringement; and (B) any warranty arising out of course of
            dealing, usage, or trade. OmniPUSH does not warrant that the Service
            or any portion of the Service, or any Material or Content offered
            through Service, will be uninterrupted, secure, or free of errors,
            virus, or other harmful components, and OmniPUSH does not warrant
            that any of those issues will be corrected.
          </p>
          <p>
            No advice or information, whether oral or written, obtained by you
            from the Service or OmniPUSH Entities or Any Material or Content
            available through the Service will create any warranty regarding any
            of the OmniPUSH Entities or the Service that i snot expressly stated
            in there terms. We are not responsible for any Damage that may
            result from the Service and your dealing with any other service
            user. You understand and agree that you use any portion of the
            Service at your own discretion and risk, and that we are not
            responsible for any damage to your property (including your computer
            system or mobile device used in connection with the service) or any
            loss of data, including user content.
          </p>
          <p>
            The Limitations, Exclusions and Disclaimers in this Section apply to
            the fullest extent permitted by the law. OmniPUSH does not disclaim
            any warranty or other right that OmniPUSH is prohibited from
            disclaiming under applicable law.
          </p>
          <p><strong>Limitation of Liability</strong></p>
          <p>
            To the fullest extent permitted by law, in no event will the
            OmniPUSH Entities be liable to you for any indirect, incidental,
            special, consequential or punitive damages (including damages for
            loss of profits, goodwill, or any other intangible loss) arising out
            of or relating to your access to or use of, or your inability to
            access or use, the service or any Materials or Content on the
            Service, whether based on warranty, contract, tort (including
            negligence), statue or any other legal theory, and whether or not
            any OmniPUSH Entity has been informed of the possibility of damage.
          </p>
          <p>
            Except as provided in Section 16.4 and to the fullest extent
            permitted by law, the aggregate liability of the OmniPUSH Entities
            to you for all claims arising out of or relating to the use of or
            any inability to use any portion of the Service or otherwise under
            these Terms, whether in contract, tort, or otherwise, is limited to
            the greater of: (A) the amount you have paid to OmniPUSH for access
            to and use of the Service in the 12 months prior to the event or
            circumstance giving rise to claim; or (B) $100.
          </p>
          <p>
            Each provision of these Terms that provides for a Limitation Of
            Liability, Disclaimer Of Warranties, Or Excursion OF Damages is
            intended to and does allocate the risks between the parties under
            these Terms. This allocation is an essential element of the basis of
            the bargain between the parties. Each of these provisions is
            severable and independent of all other provisions of these Terms.
            The limitations in the Section 15 will apply even if any limited
            remedy fails of its essential purpose.
          </p>
          <p><strong>Dispute Resolution </strong></p>
          <p>
            <strong>Generally.&nbsp;</strong>In the interest of resolving
            disputes between you and OmniPUSH in the most expedient and cost
            effective manner, and except as described in Section 16.2, you and
            OmniPUSH agree that every dispute arising in connection with these
            Terms will be resolved by binding arbitration. You understand and
            agree that, by entering into these Terms, you and OmniPUSH are each
            waiving the right to a trial by jury or to participate in class
            action.
          </p>
          <p><strong>Miscellaneous</strong></p>
          <p>
            <strong>General Terms.</strong>&nbsp;These Terms, together with the
            Privacy Policy and any other agreements expressly incorporated by
            reference into these Terms, are the entire and exclusive
            understanding and agreement between you and OmniPUSH regarding your
            use of the Service. You may not assign or transfer these Terms or
            your rights under these Terms, in whole or in part, by operation of
            law or otherwise, without our prior written consent. We may assign
            these Terms at any time without notice or consent. The failure to
            require performance of any provision will not affect our right to
            require performance at any other time after that, nor will a waiver
            by us of any breach or default of these Terms, or any provision of
            these Terms, be a waiver of any subsequent breach or default or a
            waiver of the provision itself. Use of section headers in these
            Terms is for convenience only and will not have any impact on the
            interpretation of any provision. Throughout these Terms the use of
            the word “including” means “including but not limited to”. If any
            part of these Terms is held to be invalid or unenforceable, the
            unenforceable part will be given effect to the greatest extent
            possible, and the remaining parts will remain in full force and
            effect.
          </p>
          <p>
            <strong>Privacy Policy.</strong>&nbsp;Please read the OmniPUSH
            Privacy Policy [link to privacy policy] carefully for information
            relating to our collection, use, storage, disclosure of your
            personal information. The OmniPUSH Privacy Policy is incorporated by
            this reference into, and made a part of, these Terms.
          </p>
          <p>
            <strong>Additional Terms.&nbsp;</strong>Your use of the Service is
            subject to all additional terms, policies, rules, or guidelines
            applicable to the Service or certain features of the Service that we
            may post on or link to from the Service (the “Additional Terms”).
            All Additional Terms are incorporated by this reference into, and
            made a part of, these Terms.
          </p>
          <p>
            <strong>Consent to Electronic Communications.</strong>&nbsp;By using
            the Service, you consent to receiving certain electronic
            communications from us as further described in our Privacy Policy.
            Please read our Privacy Policy to learn more about our electronic
            communications practices. You agree that any notices, agreements,
            disclosures, or other communications that we send to you
            electronically will satisfy any legal communication requirements,
            including that those communications be in writing.
          </p>
          <p>
            <strong>Contact Information.&nbsp;</strong>The Service is offered by
            OmniPUSH. You may contact us by sending correspondence to that
            address or by emailing us at&nbsp;support@omnipush.io.
          </p>
          <p>
            <strong>No Support.&nbsp;</strong>We are under no obligation to
            provide support for the Service. In instances where we may offer
            support, the support will be subject to published policies.
          </p>
          <p>
            <strong>International Use.&nbsp;</strong>The Service is intended for
            visitors located within the United States. We make no representation
            that the Service is appropriate or available for use outside of the
            United States. Access to the Service from countries or territories
            or by individuals where such access is illegal is prohibited.
          </p>
        </div>

        <a href="#" @click.prevent="showTOS = !showTOS">
          {{ showTOS ? "Hide Terms" : "Show Terms" }}
        </a>

        <b-checkbox v-model="form.agreeTOS" class="mb-1">
          I agree to the terms & conditions
        </b-checkbox>
        <b-checkbox v-model="form.subscribeNL" class="mb-1">
          Subscribe our newsletter
        </b-checkbox>

        <div class="my-3">
          <b class="font-weight-bold">Purchase Total:</b> $247.00
        </div>

        <div class="checkout-button" variant="primary" size="lg">Purchase</div>
      </template>
    </b-card>
  </div>
</template>

<script>
// import {
//   StripeElementCard,
//   StripeElementPayment,
// } from "@vue-stripe/vue-stripe";

export default {
  name: "App",
  components: {
    // StripeElementCard,
    // StripeElementPayment,
  },
  data() {
    return {
      form: {
        linkedinEmail: "",
        linkedinPassword: "",
        firstName: "",
        lastName: "",
        nameOnCard: "",
        cardNumber: "",
        purchaseInfo: {
          discount: 0,
          planName: "",
          planPrice: "",
          totalPrice: "",
        },
        address: {
          addressLine1: "",
          addressLine2: "",
          billingCountry: "",
          billingCity: "",
          billingZip: "",
          billingState: "",
        },
        subscribeNL: false,
        agreeTOS: false,
      },
      showTOS: false,
    };
  },
  mounted() {
    console.log(this.$stripe);
    this.setupStripeElements();
  },
  methods: {
    async setupStripeElements() {
      const elementsInstance = this.$stripe.elements();

      // const result = await fetch('https://demo-backend.warlock1996.repl.co').then(res => res.json())

      // console.log(result.client_secret)

      const paymentElement = elementsInstance.create("payment", {
        client_secret: 'pi_3LmIjUJDRNaTs6Zu1E5Upjmo_secret_IeRqfVMIYUlfnz5uJY2rNwvnO',
        fields: {
          name: "auto",
          email: "auto",
          phone: "auto",
          address: {
            line1: "auto",
            line2: "auto",
            city: "auto",
            state: "auto",
            country: "auto",
            postalCode: "auto",
          },
        },
      });
      paymentElement.mount("#card");
    },
  },
};
</script>

<style lang="css" scoped>
#checkout-card {
  margin: 10px;
  /* width: 1000px; */
  border-radius: 4px;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 45px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.checkout-card-body >>> .checkout-label {
  font-size: 16px;
  font-weight: 500;
  color: #3c383a;
  padding-bottom: 0 !important;
}

.checkout-input {
  background-color: #fff;
  height: 40px;
  width: 100%;
  padding: 5px 15px;
  font-family: "Cabin", Helvetica, Arial, Lucida, sans-serif;
  font-size: 14px;
  color: #4e4e4e;
  border: 1px solid #bbb;
  border-radius: 0;
}

.checkout-input:hover,
.checkout-input:focus,
.checkout-input:active {
  border-color: #2D3940;
  outline: none;
  box-shadow: none;
}

.checkout-card-header,
.checkout-card-footer {
  border: none;
  background-color: transparent;
}

.checkout-card-body {
  padding: 10px;
}
.checkout-card-footer {
  padding-bottom: 30px;
}

.checkout-card-header {
  box-shadow: 0 0 30px 7px rgb(0 0 0 / 10%);
}

.checkout-remove-button {
  all: unset;
  color: #000;
  border: 1px solid #000;
  width: 100%;
  padding: 6px 4px;
  border-radius: 3px;
  text-align: center;
  display: block;
}

.checkout-button {
  box-shadow: 0 13px 17px -7px #4c39df;
  background: #4c39df;
  color: #fff;
  border: 0;
  padding: 15px 50px;
  font-size: 20px;
  width: 190px;
  cursor: pointer;
}
.checkout-button:hover,
.checkout-button:focus,
.checkout-button:active {
  background-color: #4c39df;
  box-shadow: 0 13px 17px -7px #4c39df;
  border: none;
  outline: none;
}

.text-normal {
  font-size: 16px;
}
.text-lg {
  font-size: 20px;
}
.text-xl {
  font-size: 24px;
}

/* stripe element styling */
#creditcard >>> .StripeElement {
  border: 1px solid #bbb;
  border-radius: 0;
}

#creditcard >>> .StripeElement:hover,
#creditcard >>> .StripeElement:active,
#creditcard >>> .StripeElement:focus {
  border-color: #2D3940;
}

.gap {
  gap: 5px;
}
</style>



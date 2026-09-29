const dummyPortfolio = {
    payload: {
        info: {
            icon_name: 'Noman Hossain',
            icon_image: '/assest/landing-page-travel-with-image_23-2148359296.avif',
            top_heading: 'I design and build digital products that feel effortless to use.',
            top_bio:
                '<p>I am a software engineer focused on turning ideas into fast, reliable, and user-friendly web experiences. From product thinking to clean implementation, I help teams create systems that are practical, scalable, and easy to use.</p>',
            about_me:
                '<p>I am a full stack developer based in Dhaka, Bangladesh, currently working at Riseup Labs on Akij Venture\'s centralized CMS. Previously, I served as Frontend Lead at Fingerprint Information Technology Ltd, where I led fintech and EdTech products, and worked remotely as a Full Stack Developer for a French SaaS restaurant platform.</p><p>I adapt quickly to new tools and stacks, and use AI-assisted workflows to speed up delivery without compromising quality.</p>',
            get_to_know:
                '<p>I enjoy system architecture, scalable UI systems, API design, and data migrations. I mentor junior developers, enforce TypeScript and clean-code practices, and care about accessibility, SEO, and performance.</p><p>I am also pursuing a B.Sc. in CSE at Uttara University.</p>'
        },
        skills: [
            { id: 1, teck_name: 'next.js' },
            { id: 2, teck_name: 'react' },
            { id: 3, teck_name: 'typescript' },
            { id: 4, teck_name: 'vue.js' },
            { id: 5, teck_name: 'nuxt.js' },
            { id: 6, teck_name: 'node.js' },
            { id: 7, teck_name: 'nest.js' },
            { id: 8, teck_name: 'express.js' },
            { id: 9, teck_name: 'postgresql' },
            { id: 10, teck_name: 'mongodb' },
            { id: 11, teck_name: 'redis' },
            { id: 12, teck_name: 'prisma' },
            { id: 13, teck_name: 'tailwind css' },
            { id: 14, teck_name: 'shadcn/ui' },
            { id: 15, teck_name: 'redux' },
            { id: 16, teck_name: 'rtk query' },
            { id: 17, teck_name: 'vuetify' },
            { id: 18, teck_name: 'formik' },
            { id: 19, teck_name: 'docker' },
            { id: 20, teck_name: 'git' },
            { id: 21, teck_name: 'github actions' },
            { id: 22, teck_name: 'figma' },
            { id: 23, teck_name: 'jest' },
            { id: 24, teck_name: 'vitest' }
        ],
        experience: [
            {
                id: 1,
                role: 'Software Engineer',
                company: 'Riseup Labs',
                period: 'February 2026 – Present',
                location: 'Akij Venture, Dhaka, Bangladesh (Onsite)',
                summary: 'Built and evolved a centralized CMS platform for Akij Venture, supporting multiple business verticals under a single digital foundation.',
                points: [
                    'Designed the system architecture for Akij Venture\'s centralized CMS, handling content management across the group\'s diverse business verticals.',
                    'Planned and executed a production database merge for Akij AFBL, consolidating two separate production databases with 10 tables, 10,000+ products, and related relational data using a full migration workflow.',
                    'Led the production data migration process post-deployment.',
                    'Introduced and implemented an end-to-end dynamic menu permissions module into the legacy CMS, which is now successfully adopted by CMS users.',
                    'Built a multi-variant product creation system using a template-driven architecture.',
                    'Onboarded and migrated content for 10+ Akij Venture business concerns onto the centralized CMS.'
                ]
            },
            {
                id: 2,
                role: 'Software Engineer',
                company: 'Fingerprint Information Technology Ltd - FITL',
                period: 'April 2024 – February 2026',
                location: 'Dhanmondi, Dhaka, Bangladesh (Onsite)',
                summary: 'Led high-impact frontend work for fintech and education platforms, mentoring engineers while delivering scalable user experiences and production-grade modules.',
                points: [
                    'Led the MoneyBag Payment Gateway Portal end-to-end, architecting the migration from Next.js 14 to Next.js 15, integrating shadcn/ui, and engineering core modules including webhooks, EMI management, invoicing, payment links, and dedicated merchant and fintech portals.',
                    'Lead frontend for an enterprise SaaS School Management System deployed at Oxford International School, currently live across 5 branches in Dhaka with full student, teacher, and admin portals covering HR, admissions, attendance, library, exams, COA, transport, and more.',
                    'Mentored intern developers, enforced TypeScript and clean code practices, and conducted constructive code reviews to maintain high codebase standards.'
                ]
            },
            {
                id: 3,
                role: 'Web Developer',
                company: 'WETECHPRO',
                period: 'February 2023 – April 2024',
                location: 'Paris, France (Remote)',
                summary: 'Developed and launched full-stack SaaS and commerce products for the French market, balancing SEO-friendly frontend experiences with robust admin workflows.',
                points: [
                    'Built a full-stack SaaS Restaurant Management System for the French market, consisting of a customer-facing Nuxt.js SSR site for optimal SEO and a Vue.js 3 admin panel handling content, orders, kiosks, and kitchen printing.',
                    'Increased company profit by rapidly onboarding 100+ restaurants while parallelly introducing V2 with SaaS features.',
                    'Developed UIs for 100+ restaurant landing pages with integrated API functionality using Nuxt.js and raw CSS, ensuring cross-browser compatibility and responsive multi-device layouts.',
                    'Developed the frontend UI and handled API integrations for a Driving School Management System and the Bd Meubles e-commerce platform (bdmeubles.fr), both currently in active use across France.'
                ]
            }
        ],
        portfolio: [

            {
                id: 1,
                project_name: 'FEMS - Education Management System',
                thumbnail: '/assest/fems.png',
                short_description:
                    '<p>A large-scale SaaS school management platform live across 5 branches at Oxford International School. I worked on both backend and frontend, end to end.</p>',
                full_description:
                    '<p>FEMS is an enterprise SaaS education management system deployed at Oxford International School, currently live across 5 branches in Dhaka. As a Full Stack Developer, I built many modules end to end, covering database design, backend APIs and the frontend UI, along with a complex role-based access control (RBAC) system.</p><p>Modules include:</p><ul><li>Admission</li><li>Student</li><li>Academic</li><li>Exam</li><li>Library</li><li>Resource Share</li><li>Accounts</li><li>Human Resources and Employee Directory</li><li>Admin Service</li><li>Material Distribution</li><li>Alumni</li><li>Transport, and more</li></ul><p>It includes full student, teacher and admin portals, with file storage handled through an external file server.</p>',
                uses_tools: 'Vue.js 3, Tailwind CSS, Vuetify, Pinia, Nest.js, PostgreSQL, JWT, External File Server',
                live_link: 'https://demo.fems.education/dashboards'
            },

            {
                id: 2,
                project_name: 'Moneybag Payment Gateway',
                thumbnail: '/assest/moneybag-payment.png',
                short_description:
                    '<p>A Bangladesh Bank approved payment gateway with the lowest transaction rates in the market. I led the complete frontend as Frontend Lead.</p>',
                full_description:
                    '<p>Moneybag is a Bangladesh Bank approved FinTech payment gateway offering the lowest transaction rates in the market. As Frontend Lead, I built the end-to-end frontend implementation of the platform.</p><p>Key contributions:</p><ul><li>Architected the migration from Next.js 14 to Next.js 15</li><li>Built the design system and UI with Tailwind CSS and shadcn/ui</li><li>Managed global state and server data with Redux and RTK Query</li><li>Built complex, validated forms with Formik</li><li>Engineered core modules: webhooks, EMI management, invoicing and payment links</li><li>Delivered dedicated merchant and fintech portals</li></ul>',
                uses_tools: 'Next.js, TypeScript, Tailwind CSS, shadcn/ui, Redux, RTK Query, Formik, REST API',
                live_link: 'https://moneybag.com.bd/'
            },
            {
                id: 3,
                project_name: 'Metro Mart Online',
                thumbnail: '/assest/metromart.png',
                short_description:
                    '<p>An eCommerce platform by Akij Venture Group. I architected the backend and the admin CMS portal, including a complex RBAC system, and migrated 10,000+ products from a legacy database.</p>',
                full_description:
                    '<p>Metro Mart is an online shopping destination in Bangladesh presented by Akij Venture Group, offering groceries, electronics, bicycles and more from local and international brands. My work focused on the backend and the admin CMS, not the customer-facing storefront.</p><p>Key contributions:</p><ul><li>Architected the complete backend and admin portal UI</li><li>Designed and implemented a complex CMS RBAC system</li><li>Deployed the project to production successfully</li><li>Migrated 10,000+ products from the client legacy database to the new application, one of the most complex pieces of work in my career</li></ul>',
                uses_tools: 'Nest.js, PostgreSQL, Next.js, Tailwind CSS, RBAC, Data Migration',
                live_link: 'https://www.metromartonline.com/'
            },
        ]
    }
}

export default dummyPortfolio
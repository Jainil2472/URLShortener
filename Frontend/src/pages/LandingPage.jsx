import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* Navbar */}
            <nav className="border-b border-slate-100">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-xl text-white">
                            🔗
                        </div>

                        <span className="text-2xl font-bold">
                            Short<span className="text-violet-600">Link</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#features" className="text-sm text-slate-600 hover:text-violet-600">
                            Features
                        </a>

                        <a href="#how-it-works" className="text-sm text-slate-600 hover:text-violet-600">
                            How It Works
                        </a>

                        <a href="#pricing" className="text-sm text-slate-600 hover:text-violet-600">
                            Pricing
                        </a>
                    </div>

                    <Link
                        to="/login"
                        className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>


            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

                    {/* Left */}
                    <div>
                        <div className="mb-6 inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
                            ✨ Shorten • Share • Track
                        </div>

                        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                            Turn Long Links
                            <br />
                            into{" "}
                            <span className="text-violet-600">
                                Short Links
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                            Make your links shorter, smarter and easier to share.
                            Create short URLs in seconds and manage all your links
                            from one place.
                        </p>

                        {/* URL Input */}
                        <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50 sm:flex-row">

                            <div className="flex flex-1 items-center px-3">
                                <span className="mr-3 text-xl text-slate-400">
                                    🔗
                                </span>

                                <input
                                    type="text"
                                    placeholder="Paste your long URL here..."
                                    className="w-full outline-none placeholder:text-slate-400"
                                />
                            </div>

                            <button className="rounded-lg bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700">
                                Shorten Link →
                            </button>
                        </div>

                        <p className="mt-3 text-sm text-slate-400">
                            No registration required to try it.
                        </p>
                    </div>


                    {/* Right Preview */}
                    <div className="relative">
                        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-violet-100 blur-3xl" />

                        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-violet-100">

                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Your shortened link
                                    </p>

                                    <p className="mt-1 font-semibold text-slate-800">
                                        https://short.ly/Ab3kL
                                    </p>
                                </div>

                                <button className="rounded-lg bg-violet-600 px-4 py-3 text-white">
                                    📋
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-3">

                                <div className="rounded-xl bg-violet-50 p-4">
                                    <p className="text-2xl font-bold text-violet-600">
                                        124
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Total Clicks
                                    </p>
                                </div>

                                <div className="rounded-xl bg-blue-50 p-4">
                                    <p className="text-2xl font-bold text-blue-600">
                                        72
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Unique Clicks
                                    </p>
                                </div>

                                <div className="rounded-xl bg-green-50 p-4">
                                    <p className="text-2xl font-bold text-green-600">
                                        7
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Days Active
                                    </p>
                                </div>

                            </div>

                            <div className="mt-6 rounded-xl bg-slate-50 p-5">
                                <div className="flex items-end gap-2">
                                    {[35, 55, 42, 70, 60, 85, 72, 95].map(
                                        (height, index) => (
                                            <div
                                                key={index}
                                                className="flex-1 rounded-t bg-violet-500"
                                                style={{ height: `${height}px` }}
                                            />
                                        )
                                    )}
                                </div>

                                <p className="mt-3 text-center text-xs text-slate-400">
                                    Click performance
                                </p>
                            </div>

                        </div>

                        {/* Floating cards */}
                        <div className="absolute -left-8 top-10 rounded-xl bg-white px-4 py-3 shadow-lg">
                            🚀 <span className="font-semibold">Shorter Links</span>
                        </div>

                        <div className="absolute -bottom-6 -right-5 rounded-xl bg-white px-4 py-3 shadow-lg">
                            📊 <span className="font-semibold">Track Clicks</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* Features */}
            <section id="features" className="border-y border-slate-100 bg-slate-50">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

                    <Feature
                        icon="⚡"
                        title="Fast & Simple"
                        description="Shorten your links in seconds."
                    />

                    <Feature
                        icon="📊"
                        title="Track Performance"
                        description="See how your links are performing."
                    />

                    <Feature
                        icon="🛡️"
                        title="Secure & Reliable"
                        description="Your links are safe and accessible."
                    />

                    <Feature
                        icon="🔗"
                        title="Easy to Share"
                        description="Perfect for social media and messages."
                    />

                </div>
            </section>


            {/* How it works */}
            <section id="how-it-works" className="bg-blue-50/50">
                <div className="mx-auto max-w-7xl px-6 py-20">

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold">
                            How It Works
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Shorten your link in three simple steps.
                        </p>
                    </div>


                    <div className="mt-14 grid gap-8 md:grid-cols-3">

                        <Step
                            number="1"
                            icon="🔗"
                            title="Paste Your Link"
                            description="Enter the long URL you want to shorten."
                        />

                        <Step
                            number="2"
                            icon="✨"
                            title="Get Short Link"
                            description="Click the button and get your shortened link."
                        />

                        <Step
                            number="3"
                            icon="📤"
                            title="Share & Track"
                            description="Share it anywhere and track your clicks."
                        />

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section id="pricing" className="px-6 py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-violet-600 px-8 py-16 text-center text-white">

                    <h2 className="text-4xl font-bold">
                        Ready to shorten your links?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-violet-100">
                        Create short, memorable links and start sharing them
                        with your audience today.
                    </p>

                    <Link
                        to="/login"
                        className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-violet-600 transition hover:bg-violet-50"
                    >
                        Get Started →
                    </Link>

                </div>
            </section>


            {/* Footer */}
            <footer className="border-t border-slate-100">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

                    <p className="text-sm text-slate-400">
                        © 2026 ShortLink. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <a href="#" className="hover:text-violet-600">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-violet-600">
                            Terms
                        </a>
                    </div>

                </div>
            </footer>

        </div>
    );
}


/* Feature Component */

function Feature({ icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xl">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    );
}


/* Step Component */

function Step({ number, icon, title, description }) {
    return (
        <div className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">

            <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                {number}
            </div>

            <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 text-2xl">
                {icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
                {description}
            </p>

        </div>
    );
}
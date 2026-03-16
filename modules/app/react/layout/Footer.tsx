import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="footer-block">
            <div className="footer-container footer-content flex flex-col gap-y-20">
                <div className="footer-logo w-full">
                    <Image src="/logo-light.svg" alt="Huddle" width={200} height={100} className="font-bold text-white h-auto"/>
                </div>

                <div className="footer-middle flex flex-col gap-20 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                    <div className="footer-text flex flex-col gap-10">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-5">
                                <Image src="/icons/icon-location.svg" alt="Location" width={20} height={20} className="mt-1" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </li>
                            <li className="flex items-start gap-5">
                                <Image src="/icons/icon-phone.svg" alt="Phone" width={20} height={20} />
                                <p>+1-543-123-4567</p>
                            </li>
                            <li className="flex items-start gap-5">
                                <Image src="/icons/icon-email.svg" alt="Email" width={20} height={20} className="mt-1" />
                                <p>example@huddle.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav">
                        <nav className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10"   aria-label="Footer Navigation bar">
                            <ul className="flex flex-col gap-5">
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">About Us</Link></li>
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">What We Do</Link></li>
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">FAQ</Link></li>
                            </ul>
                            <ul className="flex flex-col gap-5">
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">Career</Link></li>
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">Blog</Link></li>
                                <li><Link href="#" className="text-white hover:underline focus:underline active:underline">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-bottom flex flex-col gap-5 md:justify-between">
                        <div className="w-full footer-social flex flex-col items-center justify-center md:justify-start md:items-start">
                            <ul className="flex items-center gap-5">
                                <li>
                                    <Link href="#" className="block relative w-6 h-6 group cursor-pointer" aria-label="Facebook">
                                        <Image src="/icons/facebook.svg" alt="" width={24} height={24} className="transition-opacity group-hover:opacity-0" />
                                        <Image src="/icons/facebook-pink.svg" alt="" width={24} height={24} className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block relative w-6 h-6 group cursor-pointer" aria-label="X (Twitter)">
                                        <Image src="/icons/twitter.svg" alt="" width={24} height={24} className="transition-opacity group-hover:opacity-0" />
                                        <Image src="/icons/twitter-pink.svg" alt="" width={24} height={24} className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block relative w-6 h-6 group cursor-pointer" aria-label="Instagram">
                                        <Image src="/icons/instagram.svg" alt="" width={24} height={24} className="transition-opacity group-hover:opacity-0" />
                                        <Image src="/icons/instagram-pink.svg" alt="" width={24} height={24} className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <p className="ml-0 pl-0text-sm flex flex-wrap gap-x-2">
                                <span>&copy; Copyright 2018 Huddle. </span><span>All rights reserved.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
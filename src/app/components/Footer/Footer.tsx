import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <div className="flex gap-4 items-center">
                        <Image src={'/images/logo.png'} alt="logo" width={50} height={20}></Image>
                        <h3 className='font-bold text-xl font-sans'>Swifthub</h3>
                    </div>
                    <p className="w-2xs">
                        Get a customized shipping quote tailored to your needs. Fast, transparent, and hassle-free pricing for all logistics solutions.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <Link href='#'>Home</Link>
                    <Link href='#'>About Us</Link>
                    <Link href='#'>Services</Link>
                    <Link href='#'>Gallery</Link>
                    <Link href='#'>Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Courier Types</h6>
                     <Link href='#'>Standard</Link>
                    <Link href='#'>Express</Link>
                    <Link href='#'>International</Link>
                    <Link href='#'>Ware Housing</Link>
                    <Link href='#'>Overnight</Link>
                    <Link href='#'>Pallet</Link>
                </nav>
        
                <form>
                    <h6 className="footer-title">Subscribe to Our Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    )
}

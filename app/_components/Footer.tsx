
import Image from 'next/image';

export default function FooterApp() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
        <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©{currentYear }{" "}
                    <a href="#" className="hover:underline">
                    SPIDER
                    </a>
                    . All Rights Reserved.
                </span>
                <div className="flex"> <Image width={50} height={80} src="/Logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />  <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Spider Healthy</span></div>

                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/My-Booking" className="hover:underline me-4 md:me-6">
                            My Booking

                        </a>
                    </li>
                    <li>
                        <a href="/search/Gynecology" className="hover:underline me-4 md:me-6">
                            Category
                        </a>
                    </li>
                    <li>
                        <a href="/#doctor" className="hover:underline">
                            Doctors
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

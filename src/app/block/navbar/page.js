
import NavbarBlock1 from '@/components/navbar/navbarBlock1';


const page = () => {

    


    //   const copyToClipboard = () => {
    //     if (codeRef.current) {
    //       navigator.clipboard.writeText(codeRef.current.textContent);
    //       setCopied(true);
    //       setTimeout(() => setCopied(false), 2000);
    //     }
    //   };

    return (
        <div className='py-12 md:py-20'>
            <div className="container">
                <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-dark mb-10">Navbar blocks</h1>

                <NavbarBlock1 />
            </div>
        </div>
    )
}

export default page
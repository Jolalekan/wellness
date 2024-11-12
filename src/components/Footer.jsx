import Container from "./Container"

const Footer = () => {
  return (
    <Container>

        <div className="bg-teal-950 flex flex-col gap-4">
    <div className='p-6 py-6 lg:flex justify-between'>

        <div>

            <img src="/assets/logo.png" width={60} height={60} alt="" />
            <p>Lorem ipsum dolor sit amet consect</p>
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="font-medium text-[18px]">About Us</h3> 
            <ul className="flex flex-col gap-2 ">
            <li>Home</li>
            <li>Policy</li>
            <li>About</li>
            <li>Home</li>
            </ul> 
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="font-medium text-[18px]">Resources</h3> 
            <ul className="flex flex-col gap-2 ">
                <li>Solutions</li>
                <li>How it works</li>
                <li>Talk to sales</li>
                <li>Integration</li>
                <li>Docs</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="font-medium text-[18px]">Solutions</h3> 
            <ul className="flex flex-col gap-2 ">
                <li>Helps</li>
                <li>Supports </li>
                <li>Service</li>
            </ul>
            </div>
    </div>
        </div>
    </Container>
  )
}

export default Footer
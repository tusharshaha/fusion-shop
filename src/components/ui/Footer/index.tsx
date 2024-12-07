import { FaFacebookF, FaSkype, FaTwitter } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import QuickLinks from './QuickLinks';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white">
        <div className="cus-container py-16">
          <div className="grid grid-cols-5 gap-8 lg:gap-4">
            <div className="lg:col-span-1 sm:col-span-2 sm:text-left col-span-5 px-5 sm:p-0 text-center">
              <h2 className="text-4xl header">Fusion Shop</h2>
              <p className="text-slate-300 mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                rem. Nulla sapiente alias ad doloribus!
              </p>
              <div className="flex items-center justify-center sm:justify-normal gap-3 mt-6">
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-orange-500 hover:bg-orange-500">
                  <FaFacebookF />
                </div>
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-orange-500 hover:bg-orange-500">
                  <FaSkype />
                </div>
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-orange-500 hover:bg-orange-500">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <QuickLinks></QuickLinks>
              </div>
            </div>
          </div>
        </div>
        <div className="cus-container border-t border-slate-700 py-5">
          <p className="flex flex-wrap items-center justify-center text-slate-300 gap-1">
            &#169; 2023 Brand Name. Made with
            <span className="text-primary">
              <AiTwotoneHeart />
            </span>
            by Tushar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
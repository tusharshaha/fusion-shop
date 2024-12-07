import { useState } from 'react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: 'Products',
    links: [
      { path: '', title: 'Fashion & Cloths' },
      { path: '', title: 'Grocery Item' },
      { path: '', title: 'Electronics Item' },
      { path: '', title: 'Food Item' }
    ]
  },
  {
    title: 'Quick Links',
    links: [
      { path: '', title: 'About Us' },
      { path: '', title: 'Pricing Plan' },
      { path: '', title: 'Blog' },
      { path: '', title: 'Contact Us' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { path: '', title: 'Help & Support' },
      { path: '', title: 'Terms & Conditon' },
      { path: '', title: 'Affiliate' },
      { path: '', title: 'Careers' }
    ]
  }
];

type Collapse = {
  id: number;
  isOpen: boolean;
}

const QuickLinks: React.FC = () => {
  const [collapse, setCollapse] = useState<Collapse>({} as Collapse);
  const handleCollapse = (id: number) => {
    setCollapse((prev) => ({
      isOpen: prev.id === id ? !prev.isOpen : true,
      id
    }));
  };
  return (
    <>
      {quickLinks.map((ele, i) => (
        <div key={i} className="flex justify-start lg:justify-center">
          <div className="w-full sm:w-auto">
            <div
              onClick={() => handleCollapse(i)}
              className="bg-gray-700 sm:bg-inherit py-3 px-5 sm:p-0 flex items-center justify-between text-slate-200 box-shadow"
            >
              <h2 className="text-xl sm:text-3xl font-semibold">{ele.title}</h2>
              <span className="inline sm:hidden">
                {collapse.isOpen && collapse.id === i ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </span>
            </div>
            <ul
              className={`${
                collapse.isOpen && collapse.id === i
                  ? 'h-[180px] p-5 border-t'
                  : 'h-0'
              } sm:h-auto mt-0 sm:mt-8 sm:p-0 bg-gray-600 sm:bg-inherit overflow-hidden space-y-3 text-slate-300 sm:border-none border-slate-500 trans`}
            >
              {ele.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="trans hover:text-orange-500">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuickLinks;